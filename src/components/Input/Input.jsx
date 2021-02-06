import { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";

const Input = () => {
  const [input, setInput] = useState("");
  console.log(input);
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(
      saveTodo({
        name: input,
        done: false,
        id: Date.now(),
      })
    );

    setInput("");
  };
  return (
    <div className="input">
      <form
        onSubmit={addTodo}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 0.9,
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTodo}>Add!</button>
      </form>
    </div>
  );
};

export default Input;
