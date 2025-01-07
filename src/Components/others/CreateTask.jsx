import React from "react";

const CreateTask = () => {
  return (
    <div className="bg-[#2D2D2D] p-5 rounded-lg mt-5">
      <form className="flex flex-wrap items-start justify-between w-full">
        <div className="w-1/2">
          <div>
            <h3 className="text-base text-white-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-[0.3rem] px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
              type="text"
              placeholder="Make UI Design"
              required
            />
          </div>
          <div>
            <h3 className="text-base text-white-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-[0.3rem] px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
              type="date"
              required
            />
          </div>
          <div>
            <h3 className="text-base text-white-300 mb-0.5">Assign To</h3>
            <input
              className="text-sm py-[0.3rem] px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <h3 className="text-base text-white-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-[0.3rem] px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-5"
              type="text"
              placeholder="UI Design, Dev, etc"
              required
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-base text-white-300 mb-0.5">Description</h3>
          <textarea
            className="text-sm w-full h-44 py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <button className="bg-emerald-500 py-3 hover:scale-100 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
