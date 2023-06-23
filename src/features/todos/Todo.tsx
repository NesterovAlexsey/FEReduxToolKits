import { useRef } from "react";
import { useAppDispatch } from "../../store";
import { addTodo } from "./todoSlice";
import { useSelector } from "react-redux";
import { selectTodoList } from "./selectors";

export default function Tasks(): JSX.Element {
  const taskList = useSelector(selectTodoList);
    const data = useRef<string>("");
    const dispatch = useAppDispatch();

    return (
      <>
        <div>Tasks</div>
        <form onSubmit={() => dispatch(addTodo({name:data.current}))}>
          <input
            type="text"
            required
            onChange={(e) => (data.current = e.target.value)}
          />
          <button type="submit">Добавить</button>
        </form>
        <ul>
        {taskList.map((el) => (
          <li key={el.id}>
            {el.title}
            <br />
            {el.done}
          </li>
        )
        )}
      </ul>
      </>
    );
  }
  