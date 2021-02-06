import "./App.css";
import Input from "./components/Input/Input";
import TodoItem from "./components/Input/TodoItem/TodoItem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

const App = () => {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app_container">
        <Input />
        <div className="todoContainer">
          {todoList.map((item) => (
            <TodoItem item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
