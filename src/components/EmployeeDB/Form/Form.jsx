import { v4 as uuidv4 } from "uuid";

const FormUI = ({ setShowModal, setEmployeeData }) => {
  const hanldeFormData = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const userData = {
      id: uuidv4(),
      name: formData.get("fname"),
      age: formData.get("age"),
      mobile: formData.get("mobile"),
      date: formData.get("date"),
    };

    // console.log(userData);

    setEmployeeData((preEmpData) => [...preEmpData, userData]);
    setShowModal(false);
  };
  return (
    <div className="form__ctrl">
      <form className="frm__section" onSubmit={hanldeFormData}>
        <h2>ADD USER DETAILS</h2>
        <label htmlFor="name">
          <input type="text" name="fname" placeholder="name" />
        </label>
        <label htmlFor="age">
          <input type="number" name="age" placeholder="age" />
        </label>
        <label htmlFor="mobile">
          <input type="number" name="mobile" placeholder="Mobile" />
        </label>
        <label htmlFor="date">
          <input type="date" name="date" placeholder="date" />
        </label>

        <button className="btn" type="submit">
          ADD EMPLOYEE
        </button>
      </form>
      <img
        className="cross__icon"
        onClick={() => setShowModal(false)}
        src="cross.png"
        alt="cross"
      />
    </div>
  );
};

const Form = ({ show, setShowModal, setEmployeeData }) => {
  return (
    show && (
      <FormUI setShowModal={setShowModal} setEmployeeData={setEmployeeData} />
    )
  );
};

export default Form;
