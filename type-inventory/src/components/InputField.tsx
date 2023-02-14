import React, { useRef } from "react";
import "./styles.css";

interface props {
  Inventory: string;
  setInventory: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ Inventory, setInventory, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a Task"
        value={Inventory}
        ref={inputRef}
        onChange={(e) => setInventory(e.target.value)}
        className="input__box"
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
// Path: type-inventory/src/components/InventoryList.tsx