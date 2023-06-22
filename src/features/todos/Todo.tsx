import { useRef } from "react";
import { useAppDispatch } from "../../store";
import { addTodo } from "./todoSlice";

export default function Tasks(): JSX.Element {
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
      </>
    );
  }
  