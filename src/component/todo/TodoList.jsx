import React from "react";
import { useSelector } from "react-redux";
import { TodoDeleteAlart } from "./TodoDeleteAlart";
import { TodoEditAlart } from "./TodoEditAlart";

const TodoList = () => {
  const todoItems = useSelector((state) => state.todo.value);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Complete</th>
                <th>NO</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((item, i) => {
                return (
                  <tr key={i.toString()}>
                    <td>
                      <div class="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          
                        />
                        
                      </div>
                    </td>
                    <td>{i + 1}</td>
                    <td>{item}</td>
                    <td>
                      <button
                        onClick={() => {
                          TodoEditAlart(i, item);
                        }}
                        className="btn btn-sm btn-dark"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          TodoDeleteAlart(i);
                        }}
                        className="btn btn-sm btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
