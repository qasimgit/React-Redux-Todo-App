import "./TodoItem.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../../../features/todoSlice";

const TodoItem = ({ item }) => {
  const { name, id, done } = item;
  const dispatch = useDispatch();

  const handleCheckbox = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheckbox}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />

      <p className={done && "todoItem_done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
