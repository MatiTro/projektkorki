import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function TaskForm(props) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const sanitizeForm = () => {
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;

    if (name.length > 40) {
      setErrors("Task name is too long");
      return false;
    }
    if (description.length > 200) {
      setErrors("Description is too long. Max 200 characters");
      return false;
    }

    return true;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!sanitizeForm()) return;

    let taskName = document.getElementById("name").value;
    let taskDescription = document.getElementById("description").value;
    let taskDate = document.getElementById("dateRequired").value;

    let task = {
      column: props.column,
      name: taskName,
      description: taskDescription,
      date: taskDate,
    };

    // Reset form values
    document.getElementById("name").value =
      document.getElementById("name").defaultValue;
    document.getElementById("description").value =
      document.getElementById("description").defaultValue;
    document.getElementById("dateRequired").value =
      document.getElementById("dateRequired").defaultValue;

    props.onClose(); // close the modal once we're done
  };

  const onSubmit = (data, e) => {
    axios.post("http://localhost:8002/api/addTasks", {
      data,
      status: "To Do",
    });
    navigate("/kanban");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <div className="add-task">
        <div className="form-items">
          <label>
            Nazwa: <span className="symbol-required">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            {...register("name", {
              required: "required",
              minLength: { value: 2, message: "Minimalna długośc 2 " },
            })}
          />
          <span className="errors-text" id="errorname">
            {errors.name && errors.name.message}
          </span>

          <label>
            Opis: <span className="symbol-required">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            {...register("description", {
              required: "required",
              minLength: { value: 2, message: "Minimalna długośc 2" },
            })}
          />
          <span className="errors-text" id="errorname">
            {errors.description && errors.description.message}
          </span>

          <div className="form-buttons">
            <input className="form-button-submit" type="submit" value="Dodaj" />
          </div>
        </div>
      </div>
    </form>
  );
}

export default TaskForm;
