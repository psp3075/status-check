import "./App.css";
import { useState } from "react";

const CoworkersList = (props) => {
  const { coworkers } = props;
  const initialState = coworkers.reduce((acc, curr) => {
    const name = curr.first_name + curr.last_name;
    console.log(acc);
    acc[name] = true;
    return acc;
  }, {});

  const [employeeStatus, setEmployeeStatus] = useState(initialState);

  const toggleStatus = (name) =>
    setEmployeeStatus({ ...employeeStatus, [name]: !employeeStatus[name] });

  return coworkers.map(({ first_name, last_name }) => {
    const name = first_name + last_name;
    return (
      <div key={name} onClick={() => toggleStatus(name)}>
        <p>
          Name : {first_name} {last_name}
        </p>
        <p>Status : {employeeStatus[name] ? "Online" : "Offline"}</p>
      </div>
    );
  });
};

CoworkersList.defaultProps = {
  coworkers: [
    { first_name: "Shaun", last_name: "Mendis" },
    { first_name: "Vijet", last_name: "Patel" },
    { first_name: "Sharmila", last_name: "Das" },
  ],
};
export default CoworkersList;
