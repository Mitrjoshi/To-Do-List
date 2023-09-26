import React, { useState, useEffect } from "react";
import { Extras } from "./";

//icons
import { IconCircleCheck } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import { IconCircleCheckFilled } from "@tabler/icons-react";

const ListAll = ({ title, id, completed, setDeleted, setSaved }) => {
  const [data, setData] = useState([]);

  // Fetch all tasks
  const handleFetchData = () => {
    fetch(`http://localhost:3001/tasks?id=${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  // Update the task completion to true
  const handleUpdateTask = async () => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, completed: true }),
      });
      setSaved(true);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const handleDeleteTask = async () => {
    try {
      const response = await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setDeleted(true);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, []);

  return (
    <div className="bg-[#36383d] h-[45px] rounded-[8px] flex items-center px-4 text-[#f2f3f5] font-semibold task_list">
      <p>{title}</p>
      <Extras onClick={handleUpdateTask} title="Complete task">
        {completed ? (
          <img
            src="https://cdn4.iconfinder.com/data/icons/basicolor-arrows-checks/24/ok_check_done-256.png"
            alt="Done"
            className="h-[24px] w-[24px]"
          />
        ) : (
          <IconCircleCheck stroke={1.5} size={24} />
        )}
      </Extras>
      <Extras onClick={handleDeleteTask} title="Delete task">
        <IconTrash stroke={1.5} size={24} color="#BB2525" />
      </Extras>
    </div>
  );
};

export default ListAll;
