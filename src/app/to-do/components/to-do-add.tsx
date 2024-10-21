"use client";
import { useTodo } from "@/stores/useTodo";
import { useState } from "react";

export function ToDoAddButton() {
  const { add } = useTodo();
  const [newTaskName, setNewTaskName] = useState("");

  const handleAdd = () => {
    if (newTaskName.trim()) {
      add(newTaskName.trim());
      setNewTaskName("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="New task name"
        className="border rounded-md py-[10px] px-[30px] focus:outline-none"
      />
      <button
        className="text-white bg-babyblue py-[10px] px-[30px] rounded-md transition-colors hover:bg-[#457bf8]"
        onClick={handleAdd}
      >
        Add New Task
      </button>
    </div>
  );
}
