"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[910],{7910:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(1413),r=n(2982),c=n(5861),u=n(885),o=n(7757),s=n.n(o),i=n(2791),l=n(501),f=n(232),h=n(6368),m=n(6474),d=n(4942),p=n(5984),Z=n(9806),v=n(1632),b={searchbar:"SearchBar_searchbar__xBucJ",buttonLabel:"SearchBar_buttonLabel__HaGuZ",container:"SearchBar_container__xwaer",buttonLoad:"SearchBar_buttonLoad__lkTwf",icon:"SearchBar_icon__EfDZn"},x=n(184),_={id:"",search:""},S=function(e){var t=e.onSubmit,n=(0,i.useState)((0,a.Z)({},_)),r=(0,u.Z)(n,2),c=r[0],o=r[1],s=c.id,l=c.search;return(0,x.jsx)("header",{className:b.searchbar,children:(0,x.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t((0,a.Z)({},c)),o((0,a.Z)({},_))},className:b.form,children:[(0,x.jsx)("button",{type:"submit",className:b.button,children:(0,x.jsx)(Z.G,{className:b.icon,icon:v.Y$T})}),(0,x.jsx)("input",{id:s,name:"search",className:b.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:l,onChange:function(e){var t=e.currentTarget,n=t.name,r=t.value,c=(0,p.x0)();o((function(e){var t;return(0,a.Z)((0,a.Z)({},e),{},(t={},(0,d.Z)(t,n,r),(0,d.Z)(t,"id",c),t))}))}})]})})},j=S;S.defaultProps={onSubmit:function(){}};var k=n(7638),w=function(){var e=(0,i.useState)([]),t=(0,u.Z)(e,2),n=t[0],o=t[1],d=(0,i.useState)(!1),p=(0,u.Z)(d,2),Z=p[0],v=p[1],b=(0,i.useState)(null),_=(0,u.Z)(b,2),S=_[0],w=_[1],B=(0,i.useState)(1),g=(0,u.Z)(B,2),y=g[0],N=g[1],C=(0,l.lr)(),L=(0,u.Z)(C,2),D=L[0],E=L[1],T=D.get("search");(0,i.useEffect)((function(){var e=function(){var e=(0,c.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,f.zi)(y,T);case 4:t=e.sent,o((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(t.results))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),w(e.t0);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();T&&e()}),[y,T]);var F=Boolean(n.length),G="";return 0!==n.length||null!==T||Z||(G=!0),(0,x.jsxs)("div",{children:[(0,x.jsx)(j,{onSubmit:function(e){var t=Object.fromEntries((0,r.Z)(D)),n=e.search;E((0,a.Z)((0,a.Z)({},t),{},{search:n})),N(1),n!==T&&o([]),y>1&&n===T&&!1===Z&&o([])}}),Z&&(0,x.jsx)(m.Z,{}),(0,x.jsx)(h.Z,{itemsData:n}),F&&(0,x.jsx)("button",{className:k.Z.button,onClick:function(){return N(y+1)},children:"load more"}),!G&&(0,x.jsxs)("p",{className:k.Z.warning,children:["Sorry, we didn't find any movies for your search: ",T]}),S&&(0,x.jsx)("p",{children:"Failed to upload movies."})]})},B=w;w.defaultProps={data:{},fetchMovies:function(){},getMoviesBySearch:function(){},formSubmitHandler:function(){}}}}]);
//# sourceMappingURL=910.4bd8d79f.chunk.js.map