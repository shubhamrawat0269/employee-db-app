import { createContext, useState } from "react";

const EmployeeContext = createContext();

const EmployeeContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState([]);

  const handleDeleteEmployeeData = (id) => {
    // console.log(id);
    // console.log(employeeDetails);
    let employeeDetails = [...employeeData];
    let updatedEmpData = employeeDetails.filter((emp) => emp.id != id);
    setEmployeeData(updatedEmpData);
  };

  const handleSelectedEmployee = (id) => {
    let employeeDetails = [...employeeData];
    let updatedEmpData = employeeDetails.filter((emp) => emp.id == id);
    // console.log(updatedEmpData);
    setSelectedEmployee(updatedEmpData);
  };

  return (
    <EmployeeContext.Provider
      value={{
        showModal,
        setShowModal,
        employeeData,
        setEmployeeData,
        selectedEmployee,
        handleSelectedEmployee,
        handleDeleteEmployeeData,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeContextProvider };
