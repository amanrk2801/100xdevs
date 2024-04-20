import { useState } from "react";

export function CreateTodo(props) {
  // react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        id="title"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>
      <br />
      <input
        id="description"
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>
      <br />

      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              title: title,
              description: description,
            }),
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo Created");
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}
