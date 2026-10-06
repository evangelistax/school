import { Routes, Route } from "react-router-dom";
import Students from "../pages/students";
import Teachers from "../pages/teachers";
import Analytics from "../pages/analitycs";
import Reports from "../pages/reports";
import Settings from "../pages/settings";
import Enrollements from "../pages/enrollements";
import Classrooms from "../pages/classrooms";
import Curriculum from "../pages/curriculum";
import Details from "../pages/details";
import Finances from "../pages/finances";
import Grades from "../pages/grades";
import Help from "../pages/help";
import Enroll from "../pages/enroll";
export default function Main() {
  return (
    <main className="main">
      <Routes>
        <Route path="enrollements/enroll" element={<Enroll></Enroll>}></Route>
        <Route path="/help" element={<Help></Help>}></Route>
        <Route path="/curriculum" element={<Curriculum></Curriculum>}></Route>
        <Route path="/grades" element={<Grades></Grades>}></Route>
        <Route path="/finances" element={<Finances></Finances>}></Route>
        <Route path="/details" element={<Details></Details>}></Route>
        <Route
          path="/enrollements"
          element={<Enrollements></Enrollements>}
        ></Route>
        <Route path="/classrooms" element={<Classrooms></Classrooms>}></Route>
        <Route path="/" element={<Students></Students>}></Route>
        <Route path="/teachers" element={<Teachers></Teachers>}></Route>
        <Route path="/analytics" element={<Analytics></Analytics>}></Route>
        <Route path="/reports" element={<Reports></Reports>}></Route>
        <Route path="/settings" element={<Settings></Settings>}></Route>
      </Routes>
    </main>
  );
}
