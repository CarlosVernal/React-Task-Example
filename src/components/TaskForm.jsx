import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-white mb-3" >Añadir tareas</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Nueva Tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Describe tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 text-white px-3 py-1">Guardar</button>
      </form>
    </div>
  );
}
export default TaskForm;
