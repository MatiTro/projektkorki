import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

function TaskForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    axios.post("http://localhost:8002/api/addTasks", {
      data,
      status: "To Do",
    });

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
              <input
                className="form-button-submit"
                type="submit"
                value="Dodaj"
              />
              <a className="form-button-cancel" href="list.html">
                Anuluj
              </a>
            </div>
          </div>
        </div>
      </form>
    );
  };
}

export default TaskForm;
