import { useState } from "react";

export function CreateTodo() {
  //  react query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="title"
        style={{ margin: 12, padding: 12 }}
        onChange={(e) => {
            const value = e.target.value;
            setTitle(value);
        }}
      ></input>
      <br />
      <input
        id="description"
        type="text"
        placeholder="description"
        style={{ margin: 12, padding: 12 }}
        onChange={(e) => {
            const value = e.target.value;
            setDescription(value);
        }}
      ></input>
      <br />

      <button
        style={{ margin: 12, padding: 12 }}
        onClick={() => {
            fetch("https://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers: {
                    "Content-type": "application/json",
                },
            }).then(async function (res) {
                await res.json();
                alert("Todo added");
            });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
