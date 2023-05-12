import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Task = (props) => {
  return (
    <div key={props.index} className="task noselect">
      <h2 className="task-title">
        {props.name}
        <IconButton
          aria-label="delete"
          color="error"
          id={props.id}
          onClick={props.handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      </h2>

      <p className="task-item">{props.description}</p>
    </div>
  );
};

export default Task;
