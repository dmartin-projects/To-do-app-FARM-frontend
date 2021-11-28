import TodoItem from "./Todo";

export default function TodoView(props) {
  return (
    <div class="row d-flex justify-content-center container">
      <div class="col-md-8">
        <div class="card-hover-shadow-2x mb-3 card">
          <div class="card-header-tab card-header">
            <div class="card-header-title font-size-lg text-capitalize font-weight-normal">
              <i class="fa fa-tasks"></i>&nbsp;Task Lists
            </div>
          </div>
          <div class="scroll-area-sm">
            <perfect-scrollbar class="ps-show-limits">
              <div style="position: static;" class="ps ps--active-y">
                <div class="ps-content">
                  <ul class=" list-group list-group-flush"></ul>
                </div>
              </div>
            </perfect-scrollbar>
          </div>
          <div class="d-block text-right card-footer">
            <button class="mr-2 btn btn-link btn-sm">Cancel</button>
            <button class="btn btn-primary">Add Task</button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
      <ul>
        {props.todoList.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div> */
}
