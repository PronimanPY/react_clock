(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),i=c(2),r=c(3),s=c(5),o=c(4),l=c(1),u=c.n(l),b=c(0),j=function(t){Object(s.a)(c,t);var e=Object(o.a)(c);function c(){var t;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={time:(new Date).toLocaleTimeString("en-GB"),timerId:setInterval((function(){}),0)},t}return Object(r.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.state.timerId=setInterval((function(){t.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"render",value:function(){var t=this.state.time;return Object(b.jsxs)("p",{className:"clock app__clock",children:["Current time:"," ",t]})}}]),c}(u.a.Component),h=(c(13),function(t){Object(s.a)(c,t);var e=Object(o.a)(c);function c(){var t;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0},t}return Object(r.a)(c,[{key:"render",value:function(){var t=this,e=this.state.isClockVisible;return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)("h1",{children:"React clock"}),Object(b.jsx)("button",{type:"button",className:"button",onClick:function(){t.setState({isClockVisible:!e})},children:this.state.isClockVisible?"Hide clock":"Show clock"}),Object(b.jsxs)("div",{className:"clock",children:[Object(b.jsx)("br",{}),e&&Object(b.jsx)(j,{})]})]})}}]),c}(u.a.Component)),m=h;a.a.render(Object(b.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8c382a91.chunk.js.map