import logo from "/public/img/logo.jpg";
import "../Main/Mainstyle.css";

export const Main = () => {
  return (
    <div className="container-main">
      <div id="header-main">
        <div className="main-logo-main">
          <a id="logo-main" href="/">
            <img className="logo-main" src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <div id="main">
        <div className="warehouse-main">
          <ul className="slider-main">
            <li className="slide s1">
              <a href="/stanpaletowy"></a>
            </li>
            <li className="slide s2">
              <a href="/tablica"></a>
            </li>
            <li className="slide s3">
              <a href="/kanban"></a>
            </li>
            <li className="slide s4">
              <a href="/zgloszenia"></a>
            </li>
          </ul>
        </div>
      </div>
      <footer>
        <p className="autor-main">Made by - Mateusz Trochimowicz</p>
      </footer>
    </div>
  );
};
