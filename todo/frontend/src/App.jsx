import React, { useEffect, useRef, useState } from "react";
import List from "./components/List";
import axios from "axios";
import { createNewList, deleteList, fetchAllLists } from "./api/listApis";

const App = () => {
  let listRef = useRef({});

  const [lists, setLists] = useState([]);
  console.log(lists);

  let getAllList = async () => {
    let res = await fetchAllLists();
    setLists(res);
  };

  useEffect(() => {
    getAllList();
  }, []);

  let handleFormSubmit = async (e) => {
    e.preventDefault();

    let obj = {
      name: listRef.current.name.value,
      description: listRef.current.description.value,
    };

    let res = await createNewList(obj);
    console.log(res);
    getAllList();

    e.target.reset();
  };

  let handleDelete = async (id) => {
    let res = deleteList(id);
    getAllList();
  };

  return (
    <div className="h-screen flex flex-col gap-5 items-center p-6">
      <h1 className="text-4xl font-bold">Todo List</h1>

      <form
        onSubmit={handleFormSubmit}
        className="border-2 p-8 rounded w-[40%] border-white flex flex-col gap-4"
        action=""
      >
        <input
          ref={(e) => (listRef.current.name = e)}
          className="p-3 border-2 border-white  rounded"
          type="text"
          placeholder="Name"
        />
        <textarea
          ref={(e) => (listRef.current.description = e)}
          className="p-3 border-white  border-2 rounded"
          placeholder="Enter description"
        ></textarea>

        <button className="p-4 bg-blue-600 text-white">Create</button>
      </form>

      <div className="flex gap-4  flex-wrap">
        {lists.map((elem) => (
          <List key={elem._id} list={elem} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default App;