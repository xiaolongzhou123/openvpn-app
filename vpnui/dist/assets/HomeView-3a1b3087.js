import{d as M,r as e,i as B,u as j,o as Q,M as T,h as U,c as S,a as s,n as i,j as r,t as H,b as $,w as m,e as V,f as q,F as N,k as K,g as C,m as z,p as O}from"./index-30724186.js";import{_ as G}from"./logo-c3eaea4a.js";import{E as L}from"./axios-a937fb27.js";import{m as J,g as W}from"./user-f2397246.js";const X={class:"navbar bg-black navbar-dark navbar-expand-lg bg-body-tertiary"},Y={class:"container"},ss=K('<a class="navbar-brand" href="/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-houses-fill" viewBox="0 0 16 16"><path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.51 2.51 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354L7.207 1Z"></path><path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708L8.793 2Z"></path></svg> OPENVPN后台管理系统 </a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>',2),as={class:"collapse navbar-collapse",id:"navbarSupportedContent"},es={class:"navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-md-center",style:{margin:"0 auto"}},ls={class:"nav-item"},os=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-person-plus",viewBox:"0 0 16 16"},[s("path",{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}),s("path",{"fill-rule":"evenodd",d:"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"})],-1),ts={class:"nav-item"},ns=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrows-fullscreen",viewBox:"0 0 16 16"},[s("path",{"fill-rule":"evenodd",d:"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"})],-1),is={class:"nav-item"},rs=s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrows-fullscreen",viewBox:"0 0 16 16"},[s("path",{"fill-rule":"evenodd",d:"M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"})],-1),ds=s("li",{class:"nav-item dropdown"},[s("a",{class:"nav-link dropdown-toggle lh-1",href:"#!",role:"button","data-bs-toggle":"dropdown","data-bs-auto-close":"outside","aria-haspopup":"true","aria-expanded":"false"},[s("span",{class:"uil-chart-pie"}),s("i",{class:"bi bi-gear"}),r(" 配置管理")]),s("ul",{class:"dropdown-menu navbar-dropdown-caret"},[s("li",null,[s("a",{class:"dropdown-item",href:"/conf"},[s("div",{class:"dropdown-item-wrapper"},[s("i",{class:"bi bi-person-fill-gear"}),r(" 参数配置 ")])])]),s("li",null,[s("a",{class:"dropdown-item",href:"/log"},[s("div",{class:"dropdown-item-wrapper"},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16px",height:"16px",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"feather feather-clipboard me-2 uil"},[s("path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"}),s("rect",{x:"8",y:"2",width:"8",height:"4",rx:"1",ry:"1"})]),r("日志管理")])])])])],-1),cs={class:"dropdown text-start"},us={href:"#",class:"d-block link-dark text-decoration-none dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},ps=s("img",{src:G,alt:"mdo",width:"32",height:"32",class:"rounded-circle"},null,-1),vs={class:"text-light",style:{"margin-left":"5px"}},hs=s("li",null,[s("hr",{class:"dropdown-divider"})],-1),ms={class:"modal-dialog modal-dialog-centered modal-lg"},_s={class:"modal-content"},gs=s("div",{class:"modal-header"},[s("h5",{class:"modal-title"},"更改密码"),s("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),bs={class:"modal-body"},ws={class:"row row-cols-1"},fs={class:"col"},xs={class:"form-floating mt-2"},ys=["type"],ks=s("label",null,"旧密码",-1),Vs={class:"form-floating mt-2"},Cs=["type"],Hs=s("label",null,"新密码",-1),zs={class:"form-floating mt-2",style:{flex:"1"}},Ls=["type"],Ms=s("label",null,"新密码二次输入",-1),Bs={class:"invalid-feedback"},Us={class:"modal-footer"},Ss=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),Ns=M({__name:"flowHeader",setup(A){e([]);const n=e(0);let u;const v=e(null);e({});const h=B(),_=j();e("");const p=e("password"),g=e(["bi","bi-eye-slash"]),b=e(!0),w=e("显示"),d=e("disabled"),f=e(!0),x=e(["is-invalid"]),c=e(["is-invalid"]),a=e({cur:"",pass:"",repass:""});Q(()=>{v.value&&(u=new T(v.value))});const D=()=>{n.value=-1,C.push("/user")},E=()=>{C.push("/sess"),n.value=-2},F=()=>{C.push("/qos"),n.value=-3},I=()=>{d.value="disabled";const o=a.value,t={user:h.userldap.cn,old_pass:o.cur,cur_pass:o.pass};J(t).then(l=>{d.value="",console.log("===res",l),l.code!=200?L({message:"密码修改错误:"+l.message,type:"error"}):L({message:"密码修改成功:"+l.message,type:"success"})}),console.log("i am here",o)},P=()=>{u.show()},R=()=>{console.log("===showpass"),b.value?(p.value="text",g.value=["bi","bi-eye-slash"],w.value="隐藏"):(p.value="password",g.value=["bi","bi-eye"],w.value="显示"),b.value=!b.value},Z=()=>{_.UpdateClean(),window.location.href="/login"},y=()=>{const o=a.value,l=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F])[\da-zA-Z\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{8,}$/.test(o.pass);if(o.cur!==""?x.value=[]:x.value=["is-invalid"],l)d.value="",f.value=!1;else{d.value="disabled",f.value=!0;return}if(o.pass===""){c.value=["is-invalid"];return}if(o.repass===""){c.value=["is-invalid"];return}if(o.repass!==o.pass){c.value=["is-invalid"];return}c.value=[],d.value=""},k=()=>{a.value.cur=a.value.cur.replace(/\s+/g,""),a.value.pass=a.value.pass.replace(/\s+/g,""),a.value.repass=a.value.repass.replace(/\s+/g,"")};return(o,t)=>(U(),S(N,null,[s("nav",X,[s("div",Y,[ss,s("div",as,[s("ul",es,[s("li",ls,[s("a",{class:i(["nav-link",{active:n.value===-1}]),onClick:D},[os,r(" 用户管理")],2)]),s("li",ts,[s("a",{class:i(["nav-link",{active:n.value===-2}]),onClick:E},[ns,r(" 会话管理")],2)]),s("li",is,[s("a",{class:i(["nav-link",{active:n.value===-3}]),onClick:F},[rs,r(" Qos管理")],2)]),ds]),s("div",cs,[s("a",us,[ps,s("span",vs,H($(h).userldap.cn),1)]),s("ul",{class:"dropdown-menu text-small"},[s("li",null,[s("a",{class:"dropdown-item",onClick:P},"修改密码")]),hs,s("li",null,[s("a",{class:"dropdown-item",onClick:Z,href:"#"},"退出登陆")])])])])])]),s("div",{class:"modal",tabindex:"-1",ref_key:"passRef",ref:v},[s("div",ms,[s("div",_s,[gs,s("div",bs,[s("div",ws,[s("div",fs,[s("div",xs,[m(s("input",{type:p.value,class:i(["form-control",x.value]),onkeyup:k,onInput:y,"onUpdate:modelValue":t[0]||(t[0]=l=>a.value.cur=l),placeholder:"旧密码"},null,42,ys),[[V,a.value.cur]]),ks]),s("div",Vs,[m(s("input",{type:p.value,class:i(["form-control",c.value]),onkeyup:k,onInput:y,"onUpdate:modelValue":t[1]||(t[1]=l=>a.value.pass=l),placeholder:"新密码"},null,42,Cs),[[V,a.value.pass]]),Hs]),s("div",zs,[m(s("input",{type:p.value,class:i(["form-control",c.value]),onkeyup:k,onInput:y,"onUpdate:modelValue":t[2]||(t[2]=l=>a.value.repass=l),placeholder:"新密码二次输入"},null,42,Ls),[[V,a.value.repass]]),Ms,m(s("div",Bs,"字母大小写+数字+特殊字符+长度8位以上",512),[[q,f.value]])])])]),s("div",Us,[s("span",{class:"bg-warning d-flex align-items-center rounded px-2",onClick:R},[r(H(w.value)+" ",1),s("i",{class:i(g.value),style:{"font-size":"30px"}},null,2)]),Ss,s("button",{type:"button",class:i(["btn btn-primary",d.value]),onClick:I},"修改密码",2)])])])])],512)],64))}}),Is=M({__name:"HomeView",setup(A){const n=B();return W().then(u=>{n.UpdateUserLdap(u)}),(u,v)=>{const h=Ns,_=O("RouterView");return U(),S(N,null,[z(h),z(_)],64)}}});export{Is as default};
