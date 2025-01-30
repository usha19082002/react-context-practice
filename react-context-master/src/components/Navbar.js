import React, { useContext } from "react";
import { TaskContext } from "../context/taskContext";

const Navbar = () => {
  const {state} = useContext(TaskContext)
  return (
    <>
      <h1 className="text-center my-4 text-primary">Project Management</h1>
      <p className="text-center lead">{`Currently ${state.taskList.length} task(s) pending`}</p>
    </>
  );
};

export default Navbar;
