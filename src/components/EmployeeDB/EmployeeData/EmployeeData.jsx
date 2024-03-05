import { useContext } from "react";
import EmployeeInfo from "../EmployeeInfo/EmployeeInfo";
import EmployeeList from "../EmployeeList/EmployeeList";
import { EmployeeContext } from "../../../contexts/EmployeeContext";

const EmployeeData = () => {
  const {
    employeeData,
    selectedEmployee,
    handleSelectedEmployee,
    handleDeleteEmployeeData,
  } = useContext(EmployeeContext);
  return (
    <div className="employee__data">
      <EmployeeList
        data={employeeData}
        handleSelectedEmployee={handleSelectedEmployee}
        handleDeleteEmployeeData={handleDeleteEmployeeData}
      />
      <EmployeeInfo data={selectedEmployee} />
    </div>
  );
};

export default EmployeeData;
