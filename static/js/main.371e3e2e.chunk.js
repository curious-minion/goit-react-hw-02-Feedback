(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(t,e,s){},19:function(t,e,s){"use strict";s.r(e);var n=s(1),i=s.n(n),c=s(5),a=s.n(c),o=s(6),r=s(7),b=s(8),u=s(11),l=s(10),d=s(9),j=s.n(d),h=s(0),f=function(t){var e=t.children;return Object(h.jsx)("div",{className:j.a.Container,children:e})},O=function(t){var e=t.children,s=t.title;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:s}),e]})},p=s(4),v=function(t){var e=t.options,s=t.onLeaveFeedback;return Object(h.jsx)("div",{className:p.buttons,children:e.map((function(t){return Object(h.jsx)("button",{type:"button",onClick:function(){return s(t)},className:p.btn},t)}))})},_=s(2),k=function(t){var e=t.options,s=t.feedbackCounter,n=t.total,i=t.positiveFeedbackRate;return Object(h.jsxs)("div",{className:_.statistics,children:[Object(h.jsx)("ul",{className:_.statistics_list,children:e.map((function(t){return Object(h.jsxs)("li",{className:_.statistics_item,children:[t,": ",s[t]]},t)}))}),Object(h.jsxs)("p",{children:["Total: ",n]}),Object(h.jsxs)("p",{children:["Positive feedback: ",i," %"]})]})},x=function(t){var e=t.message;return Object(h.jsx)("p",{children:e})},m=function(t){Object(u.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(r.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.feedbackOptions=Object.keys(t.state),t}return Object(b.a)(s,[{key:"getTotal",value:function(){var t=this.state;return t.good+t.neutral+t.bad}},{key:"render",value:function(){var t=this.state.good;return Object(h.jsxs)(f,{children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(v,{options:this.feedbackOptions,onLeaveFeedback:this.onLeaveFeedback})}),Object(h.jsx)(O,{title:"Statistics",children:this.getTotal()>0?Object(h.jsx)(k,{options:this.feedbackOptions,feedbackCounter:this.state,total:this.getTotal(),positiveFeedbackRate:Math.round(100*t/this.getTotal())}):Object(h.jsx)(x,{message:"No feedback given"})})]})}}]),s}(n.Component);s(17),s(18);a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},2:function(t,e,s){t.exports={statistics:"Statistics_statistics__-DzoF",statistics_list:"Statistics_statistics_list__xQo_O",statistics_item:"Statistics_statistics_item__1W8IQ"}},4:function(t,e,s){t.exports={buttons:"FeedbackCounter_buttons__2NnFy",btn:"FeedbackCounter_btn__3SUrm"}},9:function(t,e,s){t.exports={Container:"Container_Container__1390C"}}},[[19,1,2]]]);
//# sourceMappingURL=main.371e3e2e.chunk.js.map