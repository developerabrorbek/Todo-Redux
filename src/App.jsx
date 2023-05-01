import EditImage from "./assets/edit-icon.svg";
import DeleteImage from "./assets/delete-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const { tasks } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {}, [dispatch]);

  if (task && !tasks.includes(task)) {
    dispatch({ type: "add", payload: task });
  }

  function addTask(e) {
    e.preventDefault();
    setTask(e.target.input.value);
    e.target.input.value = "";
  }

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="main-wrapper mx-auto w-75 mt-5 shadow rounded-3 p-5">
            <h1 className="text-center text-primary">Enter your todos</h1>
            <form className="mt-5 form" onSubmit={(e) => addTask(e)}>
              <label className="d-flex gap-5">
                <input
                  type="text"
                  className="form-control p-2"
                  placeholder="Enter your tasks"
                  name="input"
                />
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </label>
            </form>
          </div>
        </div>
      </div>
      <section className="tasks mt-5">
        <div className="container">
          <div className="tasks__inner shadow-sm p-4 rounded-5">
            <form className="form tasks-form">
              <ul className="tasks-list list-unstyled d-grid gap-4">
                {tasks.map((item) => {
                  return (
                    <li className="task d-flex justify-content-between py-3 border rounded-4 px-3">
                      <label className="d-flex  align-items-center gap-3 ">
                        <input type="checkbox" className="form-check-input" />
                        <p className="task-text m-0 fs-5 fw-normal">{item}</p>
                      </label>
                      <div className="actions d-flex gap-4">
                        <img src={EditImage} alt="Edit task" role="button" />
                        <img
                          src={DeleteImage}
                          alt="Delete task"
                          role="button"
                        />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
