import Header from "./Header/Header";
import "./EmployeeDBStyle.css";
import EmployeeData from "./EmployeeData/EmployeeData";

const EmployeeDB = () => {
  return (
    <div className="employee__section">
      <Header />
      <EmployeeData />
    </div>
  );
};

export default EmployeeDB;
