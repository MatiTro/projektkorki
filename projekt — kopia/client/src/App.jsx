import { Route, Routes } from "react-router-dom";
import { StanPaletowy } from "./magazyn/stanpaletowy/palletcondition";
import { Main } from "./magazyn/Main/Main.jsx";
import { Zgloszenia } from "./magazyn/listazadan/Todolist.jsx";
import Kanban from "./magazyn/kanbanboard/kanban";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/stanpaletowy" element={<StanPaletowy />} />
      <Route path="/zgloszenia" element={<Zgloszenia />} />
      <Route path="/kanban" element={<Kanban />} />
    </Routes>
  );
};

export default App;
