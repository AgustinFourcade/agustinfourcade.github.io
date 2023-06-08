import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import { AcademicFormation } from "./components/AcademicFormation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <AcademicFormation />
      <WorkExperience />
    </div>
  );
}

export default App;
