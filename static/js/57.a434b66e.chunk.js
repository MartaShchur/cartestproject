"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[57],{57:function(e,n,t){t.r(n),t.d(n,{default:function(){return N}});var i,r,a,l,s,o,c=t(9439),d=t(2791),u=JSON.parse('["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"]'),p=t(3433),x=t(9308),h=t(184),f=[{value:"",label:"To $"}].concat((0,p.Z)((0,p.Z)(Array(21).keys()).map((function(e){return{value:10*(e+1),label:"$".concat(10*(e+1))}})))),b=function(e){var n=e.selectedPrice,t=e.setSelectedPrice,i=null!==n?"To ".concat(n,"$"):" ";return(0,h.jsx)("div",{children:(0,h.jsx)(x.ZP,{className:"basic-single",value:null!==n?{value:n,label:"To ".concat(n,"$")}:null,placeholder:"To ".concat(i,"$"),onChange:function(e){t(e?e.value:null)},options:f})})},v=function(e){var n=e.selectedMake,t=e.setSelectedMake,i=e.makes,r=[{value:null,label:"Enter the text"}].concat((0,p.Z)(i.map((function(e,n){return{value:e,label:e}})))),a=null!==n?{selectedMake:n}:"Enter the text";return(0,h.jsx)("div",{children:(0,h.jsx)(x.ZP,{className:"basic-single",value:null!==n?{value:n,label:n||"Enter the text"}:null,placeholder:a,onChange:function(e){t(e?e.value:"")},options:r})})},g=t(4420),M=function(e){return e.car.adverts},m=function(e){return e.filters.filters},j=t(168),Z=t(8789),k=Z.ZP.div(i||(i=(0,j.Z)(["\n  position: relative;\n"]))),P=Z.ZP.div(r||(r=(0,j.Z)(['\n  position: absolute;\n  top: 18px;\n  left: 14px;\n  color: #121417;\n  font-family: "Manrope", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.11;\n']))),F=Z.ZP.input(a||(a=(0,j.Z)(['\n  border: none;\n  outline: none;\n  width: 160px;\n  height: 54px;\n  padding: 14px 24px 14px 62px;\n  border-radius: 14px 0px 0px 14px;\n  border-right: 1px solid rgba(138, 138, 137, 0.2);\n  background: #f7f7fb;\n  color: #121417;\n  font-family: "Manrope", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.11;\n']))),y=Z.ZP.input(l||(l=(0,j.Z)(['\n  border: none;\n  outline: none;\n  width: 160px;\n  height: 54px;\n  padding: 14px 24px 14px 38px;\n  border-radius: 0px 14px 14px 0px;\n  background: #f7f7fb;\n  color: #121417;\n  font-family: "Manrope", sans-serif;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1.11;\n']))),C=t(6088),S=(C.Z.input(s||(s=(0,j.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  padding: 10px 16px;\n\n  /* color:#2b2b2b; */\n\n  /* background: #2b2b2b; */\n  border-radius: 10px;\n\n  :active,\n  :focus,\n  :hover {\n    color: #2b2b2b;\n  }\n"]))),C.Z.button(o||(o=(0,j.Z)(["\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 27px;\n\n  margin-left: 12px;\n  padding: 10px 16px;\n  border-radius: 10px;\n\n  :not(:disabled):active,\n  :focus,\n  :not(:disabled):hover {\n    color: #2b2b2b;\n  }\n"])))),w=function(e){var n=e.onFilterChange,t=(0,d.useState)(""),i=(0,c.Z)(t,2),r=i[0],a=i[1],l=(0,d.useState)(""),s=(0,c.Z)(l,2),o=s[0],p=s[1],x=(0,d.useState)(""),f=(0,c.Z)(x,2),M=f[0],j=f[1],Z=(0,d.useState)(""),C=(0,c.Z)(Z,2),w=C[0],T=C[1],z=(0,g.v9)(m);(0,d.useEffect)((function(){a(z.selectedMake),p(z.selectedPrice),j(z.minMileage),T(z.maxMileage)}),[z.maxMileage,z.minMileage,z.selectedMake,z.selectedPrice,z.setMaxMileage]);return(0,h.jsxs)("filterForm",{onSubmit:function(e){e.preventDefault(),n({selectedMake:r,selectedPrice:o,minMileage:M,maxMileage:w})},children:[(0,h.jsxs)("divWrapper",{children:[(0,h.jsx)("labelTitle",{children:"Car brand"}),(0,h.jsx)(v,{selectedMake:r,setSelectedMake:a,makes:u})]}),(0,h.jsxs)("divWrapper",{children:[(0,h.jsx)("labelTitle",{children:"Price/ 1 hour"}),(0,h.jsx)(b,{selectedPrice:o,setSelectedPrice:p})]}),(0,h.jsxs)("divWrapper",{children:[(0,h.jsx)("labelTitle",{children:" Car mealege / km"}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{children:[(0,h.jsxs)(k,{children:[(0,h.jsx)(P,{children:"From"}),(0,h.jsx)(F,{type:"number",value:M,onChange:function(e){var n=Math.max(e.target.value,1);j(n)}})]}),(0,h.jsxs)(k,{children:[(0,h.jsx)(P,{children:"To"}),(0,h.jsx)(y,{type:"number",value:w,onChange:function(e){var n=Math.max(e.target.value,1);T(n)}})]})]})})]}),(0,h.jsx)(S,{type:"submit",children:"Search"})]})},T=t(1413),z=(0,t(244).oM)({name:" filters",initialState:{filters:{selectedMake:"",selectedPrice:"",minMileage:"",maxMileage:""},filtersFavorite:{selectedMake:"",selectedPrice:"",minMileage:"",maxMileage:""}},reducers:{setFilters:function(e,n){e.filters=(0,T.Z)((0,T.Z)({},e.filters),n.payload)},setFiltersFavorite:function(e,n){e.filtersFavorite=(0,T.Z)((0,T.Z)({},e.filtersFavorite),n.payload)}}}),B=z.actions,E=B.setFilters,N=(B.resetFilters,B.setFiltersFavorite,B.resetFiltersFavorite,z.reducer,function(){var e=(0,g.I0)(),n=(0,g.v9)(M);return(0,h.jsxs)("div",{children:[(0,h.jsx)(w,{adverts:n,onFilterChange:function(n){e(E(n))}}),(0,h.jsx)(N,{})]})})}}]);
//# sourceMappingURL=57.a434b66e.chunk.js.map