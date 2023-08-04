import CreateTodo from "../component/todo/CreateTodo";
import TodoList from './../component/todo/TodoList';

const ToDo = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
                <h2 className="text-center text-danger fw-bold">Todo App</h2>
            </div>
            <div className="card-body">
                <CreateTodo/>
                <br />
                <TodoList/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
