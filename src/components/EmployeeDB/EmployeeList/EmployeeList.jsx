const EmployeeList = ({
  data,
  handleSelectedEmployee,
  handleDeleteEmployeeData,
}) => {
  // console.log(data);
  return (
    <div className="employee__list">
      <h3>Employee List</h3>

      <ul className="employee__labels">
        {data.map((cur) => {
          return (
            <li key={cur.id} onClick={() => handleSelectedEmployee(cur.id)}>
              <span>{cur.name}</span>
              <img
                src="cross.png"
                alt="CROSS"
                onClick={() => handleDeleteEmployeeData(cur.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EmployeeList;
