import { useContext } from "react";
import { EmployeeContext } from "../../../contexts/EmployeeContext";

const Header = () => {
  const { setShowModal } = useContext(EmployeeContext);
  return (
    <div className="header__section">
      <h1>Employee Database Management</h1>
      <button onClick={() => setShowModal(true)}>Add</button>
    </div>
  );
};

export default Header;
