(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{16:function(t,n,e){},17:function(t,n,e){},20:function(t,n,e){"use strict";e.r(n);var a=e(2),o=e.n(a),r=e(10),c=e.n(r),l=(e(16),e(3)),s=e(4),i=e(6),u=e(5),b=(e(17),e(8)),d=e.n(b),j=e(11),p=e(1),x=e(9),h=e.n(x);function O(t,n,e){var a=h()(t),o=h()(n);if("+"===e)return a.plus(o).toString();if("-"===e)return a.minus(o).toString();if("x"===e)return a.times(o).toString();if("\xf7"===e)try{return a.div(o).toString()}catch(r){return"Can't divide by 0."}if("%"===e)return a.mod(o).toString();throw Error("Unknown operation '".concat(e,"'"))}var f=e(0),m=function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(t){var a;return Object(l.a)(this,e),(a=n.call(this,t)).state={total:null,next:null,operation:null},a}return Object(s.a)(e,[{key:"displayBoard",value:function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setState((e=this.state,"AC"===(a=n.target.innerHTML)?{total:null,next:null,operation:null}:a.match(/[0-9]+/)?"0"===a&&"0"===e.next?{}:e.operation?e.next?Object(p.a)(Object(p.a)({},e),{},{next:e.next+a}):Object(p.a)(Object(p.a)({},e),{},{next:a}):e.next?{next:e.next+a,total:null}:{next:a,total:null}:"."===a?e.next?e.next.includes(".")?Object(p.a)({},e):Object(p.a)(Object(p.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===a?e.next&&e.operation?{total:O(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===a?e.next?Object(p.a)(Object(p.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(p.a)(Object(p.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||!e.total||e.operation?e.operation&&e.total&&!e.next?Object(p.a)(Object(p.a)({},e),{},{operation:a}):e.next?{total:e.next,next:null,operation:a}:{operation:a}:Object(p.a)(Object(p.a)({},e),{},{operation:a})));case 2:null!==this.state.total&&null===this.state.next?document.querySelector(".display-board").innerHTML=this.state.total:null!==this.state.next&&null!==this.state.total||null!==this.state.next&&null===this.state.total?document.querySelector(".display-board").innerHTML=this.state.next:null===this.state.next&&null===this.state.total?document.querySelector(".display-board").innerHTML="0":"number"===typeof this.state.next&&"number"===typeof this.state.total||this.setState({next:null,total:null,operation:null});case 3:case"end":return t.stop()}var e,a}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this;return Object(f.jsxs)("main",{className:this.props.containerClass,children:[Object(f.jsx)("div",{className:"display-board",children:"0"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"AC"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"+/-"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"%"}),Object(f.jsx)("button",{className:"s-orange-button",onClick:function(n){return t.displayBoard(n)},children:"\xf7"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"7"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"8"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"9"}),Object(f.jsx)("button",{className:"s-orange-button",onClick:function(n){return t.displayBoard(n)},children:"x"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"4"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"5"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"6"}),Object(f.jsx)("button",{className:"s-orange-button",onClick:function(n){return t.displayBoard(n)},children:"-"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"1"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"2"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"3"}),Object(f.jsx)("button",{className:"s-orange-button",onClick:function(n){return t.displayBoard(n)},children:"+"}),Object(f.jsx)("button",{className:"m-button",onClick:function(n){return t.displayBoard(n)},children:"0"}),Object(f.jsx)("button",{className:"s-button",onClick:function(n){return t.displayBoard(n)},children:"."}),Object(f.jsx)("button",{className:"s-orange-button",onClick:function(n){return t.displayBoard(n)},children:"="})]})}}]),e}(o.a.Component),y=m,C=function(t){Object(i.a)(e,t);var n=Object(u.a)(e);function e(){return Object(l.a)(this,e),n.apply(this,arguments)}return Object(s.a)(e,[{key:"render",value:function(){return this.props,Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(y,{containerClass:"calculator-container"})})}}]),e}(o.a.Component),k=C,B=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,21)).then((function(n){var e=n.getCLS,a=n.getFID,o=n.getFCP,r=n.getLCP,c=n.getTTFB;e(t),a(t),o(t),r(t),c(t)}))};c.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root")),B()}},[[20,1,2]]]);
//# sourceMappingURL=main.814b2a1a.chunk.js.map