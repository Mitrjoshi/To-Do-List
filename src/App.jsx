import { useState, useEffect } from "react";

import { InputField, SubmitButton, ListAll } from "./components";

const App = () => {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);
  const [saved, setSaved] = useState(false);
  const [deleted, setDeleted] = useState(false);

  // this function sends a request to add a new task
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (task === "") return;

    const response = await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: task, completed: false }),
    });

    setTask("");
    handleFetchAllData();
  };

  const handleFetchAllData = () => {
    fetch("http://localhost:3001/tasks")
      .then((response) => response.json())
      .then((data) => setData(data));
    setSaved(false);
    setDeleted(false);
  };

  //this function fetches all the tasks
  useEffect(() => {
    handleFetchAllData();
  }, []);

  useEffect(() => {
    handleFetchAllData();
  }, [saved, deleted]);

  //this function stores all the data coming from the api and also preserving previous data
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="flex flex-col gap-[40px] items-center  h-[100vh] overflow-hidden bg-[#1e1f22] pt-[50px] p-4">
      {/* title */}
      <h1 className="text-[#f2f3f5] font-bold sm:text-[44px] text-[32px]">
        Manage your tasks
      </h1>

      <div className="border border-[#3f4147] p-4 rounded-[8px] md:w-[600px] sm:w-[400px] w-[100%] grid gap-[12px]">
        <form action="POST" className="grid gap-[12px]">
          <InputField
            onChange={() => setTask(event.target.value)}
            placeholder="Enter task..."
            value={task}
          />
          <SubmitButton onClick={(e) => handleSubmit(e)} />
        </form>
        <hr className="border border-[#3f4147]" />
        <div className="flex items-center justify-center">
          <h3 className="text-[#f2f3f5] font-bold text-[32px]">Your tasks</h3>
        </div>
        <hr className="border border-[#3f4147]" />
        <div className="grid gap-[8px] max-h-[300px] overflow-auto overflow-x-hidden">
          {data?.length > 0 ? (
            <>
              {data.map((data, idx) => {
                return (
                  <div key={idx}>
                    <ListAll
                      title={data.title}
                      id={data.id}
                      completed={data.completed}
                      setSaved={setSaved}
                      setDeleted={setDeleted}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <h3 className="text-[#f2f3f5] font-bold text-[18px] text-center py-[4rem]">
              Oops, list is empty...
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
