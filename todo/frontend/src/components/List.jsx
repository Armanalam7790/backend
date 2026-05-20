import React from "react";

const List = ({ list, handleDelete }) => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition duration-300">
      <h1 className="text-xl font-semibold text-gray-800 mb-2">
        {list.taskName}
      </h1>

      <p className="text-gray-600 text-sm leading-relaxed">
        {list.description}
      </p>

      <div className="flex gap-4 mt-5">
        <button className="flex-1 py-2 rounded-lg bg-yellow-400 text-gray-900 font-medium hover:bg-yellow-500 transition duration-200">
          Update
        </button>

        <button
          onClick={() => handleDelete(list._id)}
          className="flex-1 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;