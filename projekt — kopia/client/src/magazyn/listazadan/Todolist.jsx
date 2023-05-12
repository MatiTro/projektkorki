import React, { useState, useEffect } from "react";
import "./todoliststyle.css";
import logo from "/public/img/logo.jpg";
import { Helmet } from "react-helmet";
//import components
import Formtodo from "./components/Form";
import List from "./components/List";

export const Zgloszenia = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case `completed`:
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case `uncompleted`:
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <>
      <Helmet>
        <title>Lista zadań</title>
      </Helmet>
      <div className="container">
        <div id="header">
          <div className="main-logo">
            <a id="logo-main" href="/">
              <img className="logo-main" src={logo} alt="logo" />
            </a>
          </div>
        </div>
        <h1 className="tekstup">Lista zadań do wykonania</h1>
        <Formtodo
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
        />
        <List filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
        <footer>
          <p className="autor-main">Made by - Mateusz Trochimowicz</p>
        </footer>
      </div>
    </>
  );
};
