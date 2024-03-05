const EmployeeInfo = ({ data }) => {
  return (
    <div className="employee__info">
      <h3>Employee Information</h3>
      {/* for Ref ====> */}
      {/* age : "12" date : "0122-11-12" id : "6a79836c-bf2a-4a0f-addb-01474fdc185c"
      mobile : "9711071504" name : "shubham" */}
      {data.map((emp) => {
        return (
          <div className="employee__detail" key={emp.id}>
            <img className="profile__img" src="user.png" alt="User" />
            <h4>
              {emp.name} ({emp.age})
            </h4>
            <h4>{emp.mobile}</h4>
            <h4>{new Date(emp.date).toLocaleDateString()}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeInfo;
