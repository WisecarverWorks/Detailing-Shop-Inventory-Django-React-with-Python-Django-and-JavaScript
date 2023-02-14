import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Inventory } from "../models/models";
import { Draggable } from "react-beautiful-dnd";

const SingleInventory: React.FC<{
  index: number;
  inventory: Inventory;
  inventoryM: Array<Inventory>;
  setInventory: React.Dispatch<React.SetStateAction<Array<Inventory>>>;
}> = ({ index, inventory, inventoryM, setInventory }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editInventory, setEditInventory] = useState<string>(inventory.inventory);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setInventory(
      inventoryM.map((inventory) => (inventory.id === id ? { ...inventory, inventory: editInventory } : inventory))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setInventory(inventoryM.filter((inventory) => inventory.id !== id));
  };

  const handleDone = (id: number) => {
    setInventory(
      inventoryM.map((inventory) =>
        inventory.id === id ? { ...inventory, isDone: !inventory.isDone } : inventory
      )
    );
  };

  return (
    <Draggable draggableId={inventory.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          onSubmit={(e) => handleEdit(e, inventory.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`inventoryM__single ${snapshot.isDragging ? "drag" : ""}`}
        >
          {edit ? (
            <input
              value={editInventory}
              onChange={(e) => setEditInventory(e.target.value)}
              className="inventoryM__single--text"
              ref={inputRef}
            />
          ) : inventory.isDone ? (
            <s className="inventoryM__single--text">{inventory.inventory}</s>
          ) : (
            <span className="inventoryM__single--text">{inventory.inventory}</span>
          )}
          <div>
            <span
              className="icon"
              onClick={() => {
                if (!edit && !inventory.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(inventory.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(inventory.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleInventory;