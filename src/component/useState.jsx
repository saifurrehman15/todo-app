import { useState } from "react";
import Buttons from "./Button/button";
import Nav from "../navbar/nav";

const UseState = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchResult, setSearchResult] = useState(null); // State for search result

  const addTodo = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo(""); // Clear the input after adding the todo
    }
  };

  const deleteTodo = (ind) => {
    const newTodos = [...todos];
    newTodos.splice(ind, 1);
    setTodos(newTodos);
  };

  const updateTodo = (ind, newVal) => {
    if (newVal.trim() !== "") {
      const newTodos = [...todos];
      newTodos.splice(ind, 1, newVal);
      setTodos(newTodos);
    }
  };

  const deleteTodoAll = () => {
    if (todos.length !== 0) {
      setTodos([]);
    }
  };

  const handleSearch = (result) => {
    setSearchResult(result);
  };

  return (
    <div>
      <Nav todos={todos} onSearch={handleSearch} />
      {/* Pass handleSearch to Nav */}
      <div className="block-todos">
        <h2 style={{ lineHeight: "2px", fontSize: "30px" }}>Todos</h2>
        <div className="mb-2 text-white">
          {todos.length > 0 ? (
            <h3>Remaining Task: {todos.length}</h3>
          ) : (
            <h3>Wohoo! no work remaining</h3>
          )}
        </div>
        <div className="input-field">
          <input
            className="border p-1"
            value={todo}
            onKeyPress={(e) => (e.key === "Enter" ? addTodo() : null)}
            placeholder="Enter todos"
            onChange={(e) => setTodo(e.target.value)}
          />
          <Buttons
            onClick={() => {
              if (todos.length > 0) {
                if (confirm("Are you sure to delete all todos?")) {
                  deleteTodoAll();
                }
              }
            }}
            text={
              <i class="fa-solid fa-trash-can" style={{ color: "#ffffff" }}></i>
            }
            backColor={"rgb(243, 98, 98)"}
            pd={"5px"}
            width={"50px"}
            color={"white"}
          />

          <Buttons
            onClick={addTodo}
            text={<i class="fa-solid fa-plus"></i>}
            backColor={"#2196F3"}
            pd={"5px"}
            width={"50px"}
          />
        </div>
        <div className="todos">
          {searchResult ? (
            <ul>
              <li>{searchResult}</li>
            </ul>
          ) : todos.length > 0 ? (
            todos.map((data, ind) => (
              <ul key={ind}>
                <li>
                  {ind + 1 + ") "}
                  {data}
                  <div className="button-group">
                    <Buttons
                      onClick={() => {
                        let promptUser = prompt("Update", data);
                        if (promptUser !== null) {
                          updateTodo(ind, promptUser);
                        }
                      }}
                      text={<i className="fa-solid fa-pen"></i>}
                      backColor={"blue"}
                      color={"white"}
                      pd={"5px 10px"}
                    />
                    <Buttons
                      onClick={() => {
                        deleteTodo(ind);
                      }}
                      text={<i className="fa-solid fa-delete-left"></i>}
                      backColor={"rgb(243, 98, 98)"}
                      color={"white"}
                      pd={"5px 10px"}
                    />
                  </div>
                </li>
              </ul>
            ))
          ) : (
            <div>
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg"
                height={"10px"}
                width={"40%"}
                alt="Flowbite Logo"
                className="m-auto rounded"
              />
              <h2 className="text-white ms-20 me-20 font-bold text-3xl">
                Tap + to add your tasks
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseState;
