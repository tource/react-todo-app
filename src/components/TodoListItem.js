import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "../styles/TodoListItem.scss";
import classNames from "classnames";
import { useState } from "react";

const TodoListItem = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="TodoListItem">
      <div className={classNames("checkbox", { checked })}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">리액트 공부하기 </div>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
