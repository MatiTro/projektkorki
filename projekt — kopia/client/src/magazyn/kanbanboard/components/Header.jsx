import React from "react";
import kanban from "../../../../public/img/logo.jpg";

const Header = (props) => {
  return (
    <header>
      <div>
        <img
          src={kanban}
          height="50px"
          width="50px"
          alt="kanban logo"
          id="kanban-logo"
        />
        <h1>Kanban Planner</h1>
      </div>
    </header>
  );
};

export default Header;
