(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(10),s=n.n(o),r=(n(41),n(6)),i=(n(42),n(19)),d=n.n(i),l=n(30),j=n(69),u=n(70),b=n(71),h=(n(44),n(12)),p=n.n(h),O=n(1);var f=function(t){var e=Object(c.useState)(""),n=Object(r.a)(e,2),a=n[0],o=n[1],s=Object(c.useState)(!1),i=Object(r.a)(s,2),h=i[0],f=i[1],x=function(){return f(!1)};function m(){return(m=Object(l.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=a){t.next=4;break}x(),t.next=6;break;case 4:return t.next=6,p.a.put("https://to-do-app-farm-backend.herokuapp.com/api/todo/".concat(e,"/?desc=").concat(a)).then((function(t){console.log(t),t&&x()}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var g=new Date(t.todo.created_at),v="".concat(g.getDate(),"/").concat(g.getMonth(),"/").concat(g.getFullYear());return g="created on "+v,Object(O.jsxs)("li",{className:"list-group-item",children:[Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("h4",{className:"card-header",children:String(t.todo.title).toUpperCase()}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("p",{className:"card-text",children:t.todo.description}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{className:"text-muted",children:g}),Object(O.jsxs)("button",{onClick:function(){return e=t.todo._id,void p.a.delete("https://to-do-app-farm-backend.herokuapp.com/api/todo/".concat(e)).then((function(t){return console.log(t.data)}));var e},className:"border-0 btn-transition btn btn-outline-danger",children:[Object(O.jsx)("i",{className:"fa fa-trash"})," "]}),Object(O.jsxs)("button",{onClick:function(){return f(!0)},className:"border-0 btn-transition btn btn-outline-success",children:[Object(O.jsx)("i",{className:"fa fa-edit"})," "]})]})]}),Object(O.jsxs)(j.a,{show:h,onHide:x,children:[Object(O.jsx)(j.a.Header,{closeButton:!0,children:Object(O.jsx)(j.a.Title,{children:"Update Task"})}),Object(O.jsx)(j.a.Body,{children:Object(O.jsxs)(u.a,{children:["Title ",Object(O.jsx)("h4",{children:t.todo.title}),Object(O.jsx)("br",{}),Object(O.jsxs)(u.a.Group,{children:[Object(O.jsx)(u.a.Label,{children:"New Description"}),Object(O.jsx)(u.a.Control,{type:"text",placeholder:t.todo.description,onChange:function(t){return o(t.target.value)}})]}),Object(O.jsx)(b.a,{className:"glow-on-hover",onClick:function(e){return function(t,e){return m.apply(this,arguments)}(t.todo._id)},children:"enviar"})]})})]})]})};function x(t){return Object(O.jsx)("div",{children:Object(O.jsx)("ul",{className:" list-group list-group-flush",children:t.todoList.map((function(t){return Object(O.jsx)(f,{todo:t})}))})})}n(29);var m=function(){var t=Object(c.useState)([{}]),e=Object(r.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)(""),s=Object(r.a)(o,2),i=s[0],d=s[1],l=Object(c.useState)(""),j=Object(r.a)(l,2),u=j[0],b=j[1];return Object(c.useEffect)((function(){p.a.get("https://to-do-app-farm-backend.herokuapp.com/api/todo").then((function(t){a(t.data)}))})),Object(O.jsxs)("div",{className:" col-md-5 list-group-item  justify-content-center align-items-center mx-auto",children:[Object(O.jsx)("h1",{children:"What's the Plan for Today?"}),Object(O.jsxs)("div",{className:"card-body ",children:[Object(O.jsxs)("span",{className:"card-text",children:[Object(O.jsx)("input",{className:"mb-2 form-control titleIn",onChange:function(t){return d(t.target.value)},placeholder:"Title",value:i}),Object(O.jsx)("input",{className:"mb-2 form-control desIn",onChange:function(t){return b(t.target.value)},placeholder:"Description",value:u}),Object(O.jsx)("div",{class:"col d-flex justify-content-center mb-3",children:Object(O.jsx)("button",{className:"glow-on-hover",onClick:function(t){d(""),b(""),p.a.post("https://to-do-app-farm-backend.herokuapp.com/api/todo/",{title:i,description:u}).then((function(t){return console.log(t)}))},children:"Add Task"})})]}),Object(O.jsx)("div",{children:Object(O.jsx)(x,{todoList:n})})]})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};s.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root")),g()}},[[66,1,2]]]);
//# sourceMappingURL=main.eaccbb7b.chunk.js.map