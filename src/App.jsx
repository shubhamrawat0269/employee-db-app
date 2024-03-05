import { useContext } from "react";
import EmployeeDB from "./components/EmployeeDB/EmployeeDB";
import Form from "./components/EmployeeDB/Form/Form";
import { EmployeeContext } from "./contexts/EmployeeContext";

function App() {
  const { showModal, setShowModal, setEmployeeData } =
    useContext(EmployeeContext);
  return (
    <div>
      <EmployeeDB />
      <Form
        show={showModal}
        setShowModal={setShowModal}
        setEmployeeData={setEmployeeData}
      />
    </div>
  );
}

export default App;
