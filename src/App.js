import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import { AcademicFormation } from "./components/AcademicFormation";
import { KochanieDays } from "./components/KochanieDays";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/kochanie-days" element={<KochanieDays />} />
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Banner />
                <Skills />
                <AcademicFormation />
                <WorkExperience />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
