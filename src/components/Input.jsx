import { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import saveTodo from "../features/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`Adding=============    ${input}`);
  };
  return (
    <div className="input">
      <input type="text" />
      <button
        onClick={addTodo}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      >
        Add!
      </button>
    </div>
  );
};

export default Input;
