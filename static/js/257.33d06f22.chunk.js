"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{BASE_POSTER_URL:function(){return P},PLACEHOLDER:function(){return z},default:function(){return C}});var r,a,o,i,s,c,p,l,d,u=t(861),x=t(439),f=t(687),h=t.n(f),v=t(791),g=t(689),m=t(87),b=t(975),j=t(168),Z=t(686),w=Z.Z.span(r||(r=(0,j.Z)(["\n  a {\n    position: relative;\n    padding-left: 12px;\n  }\n\n  a::before {\n    content: '';\n    display: block;\n\n    border-color: #ffc700;\n    border-style: solid;\n    border-width: 0 0 2px 2px;\n    height: 6px;\n    left: 0;\n    position: absolute;\n    width: 6px;\n    margin-top: -4px;\n    top: 50%;\n\n    transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n  }\n\n  span {\n    color: #ffc700;\n  }\n\n  :hover,\n  :focus {\n    color: #ffc700;\n    a::before {\n      border-color: white;\n    }\n    span {\n      color: white;\n    }\n  }\n"]))),k=Z.Z.div(a||(a=(0,j.Z)(["\n  display: flex;\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 12px;\n"]))),_=Z.Z.img(o||(o=(0,j.Z)(["\n  max-width: 182px;\n  background: #424242;\n  border-radius: 15px;\n"]))),y=Z.Z.h2(i||(i=(0,j.Z)(["\n  font-size: 26px;\n  margin-bottom: 12px;\n"]))),L=Z.Z.h3(s||(s=(0,j.Z)(["\n  font-size: 16px;\n  margin-bottom: 6px;\n"]))),O=Z.Z.p(c||(c=(0,j.Z)(["\n  font-size: 16px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),R=Z.Z.ul(p||(p=(0,j.Z)(["\n  font-size: 16px;\n  display: flex;\n  gap: 18px;\n  padding: 0;\n\n  border-radius: 20px;\n  color: #888888;\n  margin-bottom: 12px;\n"]))),S=Z.Z.ul(l||(l=(0,j.Z)(["\n  display: flex;\n  gap: 18px;\n  padding: 14px;\n\n  border-radius: 20px;\n"]))),U=Z.Z.li(d||(d=(0,j.Z)(["\n  span {\n    color: #ffc700;\n  }\n\n  a:hover,\n  a:focus,\n  a:active {\n    color: #ffc700;\n    span {\n      color: white;\n    }\n  }\n"]))),E=t(184),P="https://image.tmdb.org/t/p/w500/",z="https://via.placeholder.com/182x273",C=function(){var n,e,t,r=(0,g.UO)().movieId,a=(0,v.useState)(""),o=(0,x.Z)(a,2),i=o[0],s=o[1],c=(0,g.TH)(),p=null!==(n=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,v.useEffect)((function(){var n=function(){var n=(0,u.Z)(h().mark((function n(){var e;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,b.Pg)(r);case 3:e=n.sent,s(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[r]),(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(w,{children:(0,E.jsxs)(m.rU,{to:p,children:["Go back",(0,E.jsx)("span",{children:"."})]})}),(0,E.jsxs)(k,{children:[(0,E.jsx)(_,{src:"".concat(i.poster_path?P+i.poster_path:z+"?text="+i.original_title),alt:"get"}),(0,E.jsxs)("div",{children:[(0,E.jsx)(y,{children:i.original_title}),(0,E.jsxs)(L,{children:["Rating: ",Math.round(i.vote_average)]}),(0,E.jsx)(L,{children:"Overview"}),(0,E.jsx)(O,{children:i.overview}),(0,E.jsx)(L,{children:"Genres"}),(0,E.jsx)(R,{children:null===(t=i.genres)||void 0===t?void 0:t.map((function(n){return(0,E.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,E.jsxs)("div",{children:[(0,E.jsx)("h2",{children:"Additional information"}),(0,E.jsxs)(S,{children:[(0,E.jsx)(U,{children:(0,E.jsxs)(m.OL,{to:"cast",state:c.state,children:["Cast",(0,E.jsx)("span",{children:"."})]})}),(0,E.jsx)(U,{children:(0,E.jsxs)(m.OL,{to:"reviews",state:c.state,children:["Reviews",(0,E.jsx)("span",{children:"."})]})})]}),(0,E.jsx)(v.Suspense,{fallback:(0,E.jsx)("div",{children:"Loading subpage..."}),children:(0,E.jsx)(g.j3,{})})]})]})}},975:function(n,e,t){t.d(e,{Pg:function(){return p},Ph:function(){return c}});var r=t(861),a=t(687),o=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="3c075b4f44a375f4e9b142042cd51419",c=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=257.33d06f22.chunk.js.map