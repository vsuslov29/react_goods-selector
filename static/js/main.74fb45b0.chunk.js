(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n.n(c),s=n(8),r=n(5),a=n(6),l=n(2),d=n(10),i=n(9),u=n(1),p=n.n(u),h=(n(15),n(7)),j=n.n(h),m=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],f=function(e){Object(d.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGoods:["Jam"]},e.toggleSelection=function(t,n){var c=t.target,o=c.textContent,s=Object(l.a)(e),r=s.addGood,a=s.removeGood;switch(o){case"Add":r(n),c.textContent="Remove";break;case"Remove":a(n),c.textContent="Add"}},e.getStringOfSelected=function(e){var t=e[e.length-1],n=e.slice(0,-1).join(", ");switch(e.length){case 0:return"No goods selected";case 1:return"".concat(e[0]," is selected");default:return"".concat(n," and ").concat(t," are selected")}},e.removeAllGoods=function(){e.setState({selectedGoods:[]})},e.addGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(s.a)(e.selectedGoods),[t])}}))},e.removeGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return t!==e}))}}))},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.toggleSelection,t=this.getStringOfSelected,n=this.removeAllGoods,c=this.state.selectedGoods,o=c.length>0;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("h1",{className:"App__title",children:[t(c),o&&Object(m.jsx)("button",{type:"button",onClick:n,children:"X"})]}),Object(m.jsx)("ul",{className:"App__list",children:b.map((function(t){var n=c.includes(t),o=n?"Remove":"Add";return Object(m.jsxs)("li",{className:"App__item",children:[Object(m.jsx)("p",{className:j()("App__item-title",{selected:n}),children:t}),Object(m.jsx)("button",{type:"button",onClick:function(n){e(n,t)},children:o})]},t)}))})]})}}]),n}(p.a.Component),g=f;o.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.74fb45b0.chunk.js.map