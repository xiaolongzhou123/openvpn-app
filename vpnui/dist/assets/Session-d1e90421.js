import{d as B,r as a,u as N,o as U,M as E,D as V,h as b,c as f,a as s,j as p,w as T,v as W,F as z,s as F,n as L,t,b as d,f as j}from"./index-30724186.js";import{E as R,f as r,s as J}from"./axios-a937fb27.js";import{k as O}from"./session-2c6eaa60.js";import{e as D}from"./base64-0b4f26c6.js";const $={class:"mt-5"},q={class:"container"},A={class:"card"},G=s("div",{class:"card-header"},[s("h3",{class:"card-title"},"会话管理")],-1),H={class:"card-body border-bottom py-3"},K={class:"d-flex"},P={class:"text-muted"},Q={class:"mx-2 d-inline-block"},X=s("div",{class:"ms-auto text-muted"},[p(" 检查数据: "),s("div",{class:"ms-2 d-inline-block"},[s("input",{type:"text",class:"form-control form-control-sm","aria-label":"Search invoice"})])],-1),Y={class:"table-responsive"},Z={class:"table card-table table-vcenter text-nowrap datatable"},ss=s("thead",null,[s("tr",null,[s("th",null,"ID"),s("th",null,"用户名"),s("th",null,"源地址"),s("th",null,"目的地址"),s("th",null,"会话ID"),s("th",null,"起始时间"),s("th",null,"读数据"),s("th",null,"写数据"),s("th")])],-1),es={class:"align-middle"},os={class:"align-middle"},ts={class:"align-middle"},ls={class:"align-middle"},ns={class:"align-middle"},as={class:"align-middle"},cs={class:"align-middle"},is={class:"align-middle"},ds={class:"align-middle"},rs=["onClick"],us=s("i",{class:"bi bi-power"},null,-1),_s=[us],vs={class:"card-footer d-flex align-items-center"},ms={class:"modal-dialog modal-dialog-centered"},hs={class:"modal-content"},bs={class:"modal-header"},fs={class:"modal-title"},ps=s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),gs=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),Ds=B({__name:"Session",setup(ks){const u=a(null);let _;const v=a([]),m=a(),h=a(0),i=a({}),g=N().Info.access_token,l=a({});a("");const c=a(!1),k=o=>{v.value=JSON.parse(o.data),h.value=v.value.length},w=()=>{console.log("==closeRealTerminal"),c.value=!1},y=o=>{console.log("==errorRealTerminal"),c.value=!1,m.value=setInterval(function(){const n=D(g),e=(window.location.protocol==="http:"?"ws://":"wss://")+document.location.host+"/ssoapi/wssess?token="+n;l.value=new WebSocket(e),l.value.onmessage=k,l.value.onopen=x,l.value.onclose=w,l.value.onerror=y},5e3)},x=()=>{console.log("===connect"),c.value=!0,clearInterval(m.value)};U(()=>{console.log("==sess:onMounted"),u.value&&(_=new E(u.value));const o=D(g),n=(window.location.protocol==="http:"?"ws://":"wss://")+document.location.host+"/ssoapi/wssess?token="+o;l.value=new WebSocket(n),l.value.onmessage=k,l.value.onopen=x,l.value.onclose=w,l.value.onerror=y});const I=o=>{const n=Number(new Date(o)),e=new Date().getTime();return J(e-n)},M=o=>{console.log("kickout==",o),i.value=o,_.show()},C=()=>{O({user:i.value.name}).then(o=>{console.log("===kickSession:",o),o.code===200?(R({message:"踢:"+i.value.name+" 成功",type:"success"}),_.hide()):R.error("踢用户失败")})};return V(()=>{console.log("==sess:onBeforeUnmount"),l.value.close(),c.value&&clearInterval(m.value)}),(o,n)=>(b(),f("section",$,[s("div",q,[s("div",A,[G,s("div",H,[s("div",K,[s("div",P,[p(" 日志 "),s("div",Q,[T(s("input",{type:"text",class:"form-control form-control-sm","onUpdate:modelValue":n[0]||(n[0]=e=>h.value=e),size:"3","aria-label":"Invoices count"},null,512),[[W,h.value]])]),p(" 数量 ")]),X])]),s("div",Y,[s("table",Z,[ss,s("tbody",null,[(b(!0),f(z,null,F(v.value,(e,S)=>(b(),f("tr",{key:S},[s("td",es,t(S+1),1),s("td",os,t(e.name),1),s("td",ts,t(e.src),1),s("td",ls,t(e.ip),1),s("td",ns,t(e.sess),1),s("td",as,t(e.conn_time)+" ("+t(I(e.conn_time))+")",1),s("td",cs,t(d(r)(e.read_bytes))+"("+t(d(r)(e.read_bytes_diff))+")",1),s("td",is,t(d(r)(e.write_bytes))+"("+t(d(r)(e.write_bytes_diff))+")",1),T(s("td",ds,[s("button",{class:"btn btn-outline-secondary",onClick:ys=>M(e)},_s,8,rs)],512),[[j,c.value]])]))),128))])])]),s("div",vs,[s("div",{class:L(c.value?"bg-success":"bg-danger"),style:{height:"20px",width:"20px","border-radius":"50%"}},null,2),s("span",null,t(c.value?"已连接":"已断开"),1)])]),s("div",{class:"modal",ref_key:"kickRef",ref:u},[s("div",ms,[s("div",hs,[s("div",bs,[s("h5",fs,"强制踢"+t(i.value.name)+"下线",1),ps]),s("div",{class:"modal-footer"},[gs,s("button",{type:"button",class:"btn btn-primary",onClick:C},"踢下线")])])])],512)])]))}});export{Ds as default};