import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoListItem from "./components/TodoListItem";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoListItem />
      <TodoList />
    </TodoTemplate>
  );
}

export default App;
