(this["webpackJsonptodo-context"]=this["webpackJsonptodo-context"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a.n(r),u=a(4),s=Object(n.createContext)(),o=a(8),i=a(1),O=function(e,t){switch(t.type){case"ADD_TODO":return Object(i.a)(Object(i.a)({},e),{},{tasks:[t.payload].concat(Object(o.a)(e.tasks))});case"DELETE_TODO":return Object(i.a)(Object(i.a)({},e),{},{tasks:e.tasks.filter((function(e){return e.id!==t.payload}))});case"EDIT_TODO":return Object(i.a)(Object(i.a)({},e),{},{tasks:e.tasks.map((function(e){return e.id===t.payload.id?t.payload:e}))});case"SET_CURRENT_TODO":return Object(i.a)(Object(i.a)({},e),{},{current:t.payload});case"CLEAR_TODO":return Object(i.a)(Object(i.a)({},e),{},{current:null});case"CLEAR_TODOS":return Object(i.a)(Object(i.a)({},e),{},{tasks:[]});default:return e}},d=function(e){var t=localStorage.getItem("tasks"),a={tasks:JSON.parse(t)||[],current:null},r=Object(n.useReducer)(O,a),l=Object(u.a)(r,2),o=l[0],i=l[1];return c.a.createElement(s.Provider,{value:{tasks:o.tasks,current:o.current,addTask:function(e){i({type:"ADD_TODO",payload:e})},deleteTask:function(e){i({type:"DELETE_TODO",payload:e})},editTask:function(e){i({type:"EDIT_TODO",payload:e})},setCurrent:function(e){i({type:"SET_CURRENT_TODO",payload:e})},clearInput:function(e){i({type:"CLEAR_TODO"})},clearInputList:function(e){i({type:"CLEAR_TODOS"})}}},e.children)},m=(a(14),a(20)),E=function(){var e=Object(n.useState)({text:"",id:""}),t=Object(u.a)(e,2),a=t[0],r=t[1],l=a.text,o=Object(n.useContext)(s),O=o.tasks,d=o.addTask,E=o.current,b=o.editTask,f=o.clearInput,p=o.clearInputList,j=Object(n.useContext)(s);Object(n.useEffect)((function(){r(null!==E?E:{text:"",id:""})}),[j,E]);Object(n.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(O))}));return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),null===E?d(a):(b(Object(i.a)(Object(i.a)({},a),{},{id:E.id})),r(E)),f()}},c.a.createElement("input",{type:"text",className:"form-control",value:l,onChange:function(e){r(Object(i.a)(Object(i.a)({},a),{},{text:e.target.value,id:Object(m.a)()}))},required:!0}),c.a.createElement("div",null,c.a.createElement("button",{type:"submit",className:"btn"},E?"Edit":"Submit"),c.a.createElement("button",{type:"submit",className:"btn",onClick:function(){return p()}},"Clear")))},b=a(5),f=(a(15),function(e){var t=e.task,a=Object(n.useContext)(s),r=a.deleteTask,l=a.setCurrent;return c.a.createElement("li",null,c.a.createElement("h5",null,t.text),c.a.createElement(b.a,{onClick:function(){return l(t)}}),c.a.createElement(b.b,{onClick:function(){return r(t.id)}}))}),p=function(){var e=Object(n.useContext)(s).tasks;return c.a.createElement(c.a.Fragment,null,e?c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",null,e.map((function(e){return c.a.createElement(f,{task:e,key:e.id})})))," "):"")},j=(a(16),a(17),function(){return c.a.createElement(d,null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},c.a.createElement("h1",null,"#To Do")),c.a.createElement("div",{className:"card-body"},c.a.createElement(E,null)),c.a.createElement("div",{className:"card-footer"},c.a.createElement(p,null)))))))});l.a.render(c.a.createElement(j,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.7fe3fc94.chunk.js.map