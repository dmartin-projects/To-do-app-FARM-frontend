(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),a=n(17),s=n.n(a),r=(n(22),n(6)),i=(n(23),n(3)),d=n.n(i),l=n(0);var u=function(t){var e=function(t){d.a.delete("https://to-do-app-farm-backend.herokuapp.com/api/todo/".concat(t)).then((function(t){return console.log(t.data)}))},n=new Date(t.todo.created_at);if(console.log(n),n="created on "+(n=n.toLocaleString()),t.todo.timestamp_updated_at){var c=new Date(t.todo.timestamp_updated_at);c="task updated on "+(c=c.toLocaleString())}return Object(l.jsx)("li",{class:"list-group-item",children:Object(l.jsxs)("div",{class:"card",children:[Object(l.jsx)("h4",{class:"card-header",children:String(t.todo.title).toUpperCase()}),Object(l.jsxs)("div",{class:"card-body",children:[Object(l.jsx)("p",{class:"card-text",children:t.todo.description}),Object(l.jsx)("p",{class:"text-muted",children:n}),Object(l.jsxs)("button",{onClick:function(){return e(t.todo._id)},className:"border-0 btn-transition btn btn-outline-danger",children:[Object(l.jsx)("i",{class:"fa fa-trash"})," "]}),Object(l.jsxs)("button",{onClick:function(){return e(t.todo._id)},className:"border-0 btn-transition btn btn-outline-success",children:[Object(l.jsx)("i",{class:"fa fa-edit"})," "]})]})]})})};function j(t){return Object(l.jsx)("div",{children:Object(l.jsx)("ul",{class:" list-group list-group-flush",children:t.todoList.map((function(t){return Object(l.jsx)(u,{todo:t})}))})})}n(16);var b=function(){var t=Object(c.useState)([{}]),e=Object(r.a)(t,2),n=e[0],o=e[1],a=Object(c.useState)(""),s=Object(r.a)(a,2),i=s[0],u=s[1],b=Object(c.useState)(""),p=Object(r.a)(b,2),h=p[0],f=p[1];return Object(c.useEffect)((function(){d.a.get("https://to-do-app-farm-backend.herokuapp.com/api/todo").then((function(t){o(t.data)}))})),Object(l.jsxs)("div",{className:" container col-md-5 todo-app list-group-item  justify-content-center align-items-center mx-auto",children:[Object(l.jsx)("h1",{children:"What's the Plan for Today?"}),Object(l.jsxs)("div",{className:"card-body ",children:[Object(l.jsxs)("span",{className:"card-text",children:[Object(l.jsx)("input",{className:"mb-2 form-control titleIn",onChange:function(t){return u(t.target.value)},placeholder:"Title"}),Object(l.jsx)("input",{className:"mb-2 form-control desIn",onChange:function(t){return f(t.target.value)},placeholder:"Description"}),Object(l.jsx)("div",{class:"col d-flex justify-content-center mb-3",children:Object(l.jsx)("button",{className:"glow-on-hover",onClick:function(){d.a.post("https://to-do-app-farm-backend.herokuapp.com/api/todo/",{title:i,description:h}).then((function(t){return console.log(t)}))},children:"Add Task"})})]}),Object(l.jsx)("div",{children:Object(l.jsx)(j,{todoList:n})})]})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),o(t),a(t),s(t)}))};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),p()}},[[43,1,2]]]);
//# sourceMappingURL=main.74811a83.chunk.js.map