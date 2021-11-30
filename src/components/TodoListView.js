import TodoItem from "./Todo";

export default function TodoView(props) {
  return (
    <div >
      <ul className=" list-group list-group-flush">
        {props.todoList.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}