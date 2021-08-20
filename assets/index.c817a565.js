var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,l)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[r]=l,s=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&n(e,r,t[r]);if(l)for(var r of l(t))o.call(t,r)&&n(e,r,t[r]);return e};import{r as i,R as c,a as m}from"./vendor.5836ee2e.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function d(e){return i.exports.createElement("svg",s({viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},e),i.exports.createElement("circle",{fill:"currentColor",cx:12,cy:12,r:12}),i.exports.createElement("rect",{fill:"#FFF",x:11,y:6,width:2,height:9,rx:1}),i.exports.createElement("rect",{fill:"#FFF",x:11,y:17,width:2,height:2,rx:1}))}const u=(...e)=>e.filter(Boolean).join(" "),p=e=>e&&/^[a-zA-Z]*$/.test(e),x=e=>e&&/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(e),f=e=>(null==e?void 0:e.length)<=12&&(null==e?void 0:e.length)>=6,g=()=>{const[e,l]=i.exports.useState([{id:"first-name",label:"First Name",error:!1,errorTips:"Please input english string",validator:p},{id:"last-name",label:"Last Name",error:!1,errorTips:"Please input english string",validator:p},{id:"email",label:"Email Address",error:!1,errorTips:"Looks like this is not an email",validator:x},{id:"password",label:"Password",error:!1,errorTips:"Password should be 6 - 12 bite",validator:f,type:"password"}]),a=t=>{const r=t.target.value,a=t.target.id;l((()=>e.map((e=>(a===e.id&&(e.error=!e.validator(r)),e)))))};return c.createElement("form",{className:"my-4 bg-white p-4 space-y-4 rounded-lg shadow-xl",onSubmit:a=>{a.preventDefault();const o=new FormData(a.target),n=Object.fromEntries(o.entries());l((()=>{const l=e.map((e=>{return l=s({},e),a={error:!e.validator(n[e.id])},t(l,r(a));var l,a}));return l.every((e=>!e.error))?console.log("資料正確",n):console.log("資料有誤"),l}))}},e.map((e=>c.createElement(b,{label:e.label,id:e.id,key:e.id,errorTips:e.errorTips,error:e.error,type:e.type,checkValue:a}))),c.createElement("button",{className:"bg-green text-white w-full py-4 rounded-md shadow-xl"},"CLAIM YOUR FREE TRIAL"),c.createElement("div",{className:"text-gray-400 text-xs px-4"},"By clicking the button, you are agreeing to our"," ",c.createElement("a",{href:"#",className:"text-red font-bold"},"Terms and Services")))},b=({id:e,label:t,error:r,errorTips:l,type:a="text",checkValue:o})=>{const[n,s]=i.exports.useState(""),m=i.exports.useRef(!0);return c.createElement("section",{className:"text-sm"},c.createElement("div",{className:"relative flex items-center"},c.createElement("label",{htmlFor:e,className:u("absolute","p-4",""!==n?"opacity-0":"")},t),c.createElement("input",{type:"text",id:e,name:e,type:a,className:u("w-full","p-4 pr-10","outline-none border rounded-md  focus:border-blue",r&&"border-red"),value:n,onChange:e=>{s(e.target.value)},onBlur:e=>{m.current&&(m.current=!1),o(e)},onKeyUp:e=>{m.current||o(e)}}),r&&c.createElement(d,{className:"absolute right-2 w-5 h-5 text-red"})),r&&c.createElement("p",{className:"text-right text-red text-xs my-1"},l))};function h(){return c.createElement("div",{className:"min-h-screen py-20 px-8 text-center md:flex items-center max-w-screen-xl mx-auto"},c.createElement("article",{className:"text-white flex-1 md:text-left"},c.createElement("h1",{className:"text-3xl font-bold md:text-5xl md:text-left md:px-24"},"Learn to code by watching others"),c.createElement("p",{className:"mt-8 md:px-24"},"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.")),c.createElement("section",{className:"flex-1"},c.createElement("div",{className:"text-white mt-16 bg-blue rounded-lg py-4 px-16 shadow-xl"},c.createElement("strong",null,"Try it free 7 days")," then $20/mo. thereafter"),c.createElement(g,null)))}m.render(c.createElement(c.StrictMode,null,c.createElement(h,null)),document.getElementById("root"));
