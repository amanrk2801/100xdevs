import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { todosAtomFamily } from "./atoms";
import { useEffect } from "react";

function App() {
  return (
    <RecoilRoot>
      <UpdaterComponent />
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
    </RecoilRoot>
  );
}

function UpdaterComponent() {
  const updateTodo = useSetRecoilState(todosAtomFamily(2));

  useEffect(() => {
    setTimeout(() => {
      updateTodo(
        {
          id: "2",
          title: "new Todo 1",
          description: "new description",
        }
      )
    }, 5000);
  }, []);
  return <div></div>;
}

function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id));

  return (
    <>
      {currentTodo.title}
      <br />
      {currentTodo.description}
      <br />
    </>
  );
}

export default App;
