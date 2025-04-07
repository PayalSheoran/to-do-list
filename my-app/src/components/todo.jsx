import React, { useState } from "react";

import FlowerAnimation from "./flowerAnimation";

function Todo() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      const taskObj = {
        id: Date.now(),
        text: newTask,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, taskObj]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className=" main bg-[#c8ddae] w-screen h-screen pt-[350px]">
      <FlowerAnimation />
      <h1 className=" heading text-white ml-[850px] mb-[20px] text-[30px] mt-[-60px]">
        TO-DO LIST
      </h1>
      <div className=" todo-container flex flex-col  relative w-[700px] ml-[580px] bg-white  items-center h-[auto] pb-[30px] pt-[30px] border-none rounded-[10px]">
        <div className="todo-input">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border-none w-[450px] h-[40px] rounded-[8px] indent-[15px] outline-none font-semibold bg-[#f6f4f0]"
            placeholder="Add your task"
          ></input>
          <button
            onClick={addTask}
            className="border-[2px] h-[40px] ml-[20px] w-[100px] rounded-[8px] cursor-pointer bg-[#aac592] border-[#98b380] font-semibold text-[14px] "
          >
            Add Task
          </button>
        </div>
        <div className=" tasks   flex items-center flex-col ">
          {tasks.map((task, index) => {
            return (
              <div
                key={index}
                className="flex items-center  mt-[20px] border-[1px] border-[#62b916] border-dashed h-[60px] pl-[10px] pr-[10px] rounded-[10px]"
              >
                <div className="w-[450px]  h-[40px]  flex items-center">
                  <input
                    type="checkbox"
                    className="w-[16px] h-[16px] "
                    checked={task.completed}
                    onChange={() => {
                      setTasks(
                        tasks.map((t) =>
                          t.id === task.id
                            ? { ...t, completed: !t.completed }
                            : t
                        )
                      );
                    }}
                  />
                  <span
                    className={`ml-[20px] text-[16px] ${
                      task.completed ? "line-through " : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <div>
                  <button
                    onClick={() => deleteTask(index)}
                    className="ml-[20px] border-[2px] h-[40px]  w-[100px] rounded-[8px] cursor-pointer bg-red-400 font-semibold text-[15px] border-[#ca4949]"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
