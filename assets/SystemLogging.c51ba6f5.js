import{Q as p}from"./QInput.1ffec7f9.js";import{d as u,g as b,c as h,e as k}from"./QTable.5b7a4276.js";import{_ as V,r as s,f as Q,B as S,C as T,D as i,E as n,V as C,O as w,G as P,H as _}from"./index.ebab3077.js";import{Q as x}from"./rtl.f71e91de.js";import{Q as L}from"./QPage.4b88b4a0.js";import{u as B}from"./use-quasar.9a32f925.js";import"./focus-manager.3d77c9c9.js";import"./use-tick.9a52c72c.js";import"./QMenu.939c6eae.js";import"./QItem.b575f3a6.js";const q={setup(){const c=s([]),o=s(!1),r=s({startDate:new Date().toISOString().split("T")[0],endDate:new Date(Date.now()+864e5).toISOString().split("T")[0],collection:"app"}),e=s({page:1,rowsPerPage:100,rowsNumber:0}),g=s([]),m=s(localStorage.getItem("jwtToken")||""),a=B(),y=[{name:"timestamp",label:"Timestamp",field:"timestamp",align:"left"},{name:"level",label:"Level",field:"level",align:"left"},{name:"logger",label:"Logger",field:"logger",align:"left"},{name:"message",label:"Message",field:"message",align:"left"}],v=t=>new Date(t).toLocaleString(),D=async()=>{try{const t=await fetch("https://api.caronon.com/api/systemlog/collection",{method:"GET",headers:{Authorization:`Bearer ${m.value}`}}),l=t.ok?await t.json():`Error ${t.status} - ${(await t.text()).substring(0,256)}`;t.ok?g.value=l:a.notify({message:l,type:"negative"})}catch(t){a.notify({message:t.message,type:"negative"})}},f=async t=>{o.value=!0,t&&t.pagination&&(e.value.page=t.pagination.page,e.value.rowsPerPage=t.pagination.rowsPerPage);try{const l=await fetch(`https://api.caronon.com/api/systemlog/log?collection=${r.value.collection}&startDate=${r.value.startDate}&endDate=${r.value.endDate}&page=${e.value.page}&pageSize=${e.value.rowsPerPage}`,{method:"GET",headers:{Authorization:`Bearer ${m.value}`}}),d=l.ok?await l.json():`Error ${l.status} - ${(await l.text()).substring(0,256)}`;l.ok?(c.value=d.logs,e.value.rowsNumber=d.total):a.notify({message:d,type:"negative"})}catch(l){a.notify({message:l.message,type:"negative"})}finally{o.value=!1}};return Q(async()=>{await D(),await f()}),{logs:c,loading:o,filters:r,pagination:e,columns:y,collections:g,fetchLogs:f,formatDate:v}}},E={class:"row q-gutter-md"};function N(c,o,r,e,g,m){return S(),T(L,{class:"q-pa-md"},{default:i(()=>[n(x,null,{default:i(()=>[n(u,null,{default:i(()=>[C("div",E,[n(p,{filled:"",modelValue:e.filters.startDate,"onUpdate:modelValue":o[0]||(o[0]=a=>e.filters.startDate=a),label:"From Date",type:"date"},null,8,["modelValue"]),n(p,{filled:"",modelValue:e.filters.endDate,"onUpdate:modelValue":o[1]||(o[1]=a=>e.filters.endDate=a),label:"To Date",type:"date"},null,8,["modelValue"]),n(b,{style:{width:"120px"},filled:"",modelValue:e.filters.collection,"onUpdate:modelValue":o[2]||(o[2]=a=>e.filters.collection=a),options:e.collections,label:"Collections"},null,8,["modelValue","options"]),n(w,{label:"Filter",color:"primary",onClick:e.fetchLogs},null,8,["onClick"]),n(w,{label:"Reload",color:"secondary",onClick:e.fetchLogs,icon:"refresh"},null,8,["onClick"])])]),_:1}),n(u,null,{default:i(()=>[n(h,{rows:e.logs,columns:e.columns,"row-key":"id",loading:e.loading,pagination:e.pagination,"onUpdate:pagination":o[3]||(o[3]=a=>e.pagination=a),onRequest:e.fetchLogs},{"body-cell-timestamp":i(a=>[n(k,{props:a},{default:i(()=>[P(_(e.formatDate(a.row.timestamp)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading","pagination","onRequest"])]),_:1})]),_:1})]),_:1})}var $=V(q,[["render",N]]);export{$ as default};
