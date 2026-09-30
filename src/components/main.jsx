import { Routes, Route } from "react-router-dom";
import Students from "../pages/students";
import Teachers from "../pages/teachers";
import Analytics from "../pages/analitycs";
import Reports from "../pages/reports";
import Settings from "../pages/settings";
import Enrollements from "../pages/enrollements";

export default function Main() {
  return (
    <main className="main">
      <Routes>
        <Route
          path="/enrollements"
          element={<Enrollements></Enrollements>}
        ></Route>
        <Route path="/" element={<Students></Students>}></Route>
        <Route path="/teachers" element={<Teachers></Teachers>}></Route>
        <Route path="/analytics" element={<Analytics></Analytics>}></Route>
        <Route path="/reports" element={<Reports></Reports>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
      </Routes>
    </main>
  );
}
