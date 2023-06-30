import{d as hl,r as c,q as M,o as pl,M as z,h as p,c as m,a as l,t as a,b as x,w as n,v as d,n as V,j as _,F as N,s as $,x as X,m as ml}from"./index-20f6fd32.js";import{g as Y,t as fl,E as v}from"./axios-7116f677.js";import{a as P,p as yl,b as bl,R as gl,d as wl,c as xl,r as Vl}from"./user-07fef14c.js";import{Q as kl}from"./qrcode.vue.esm-a2e66da3.js";import{d as Ul}from"./base64-0b4f26c6.js";const Cl={class:"position-fixed flow_toast"},Ml={class:"toast-header"},zl={class:"me-auto"},Nl=l("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),Pl={class:"toast-body"},Rl={class:"modal-dialog modal-dialog-centered modal-lg"},Ll={class:"modal-content"},Al=l("div",{class:"modal-header"},[l("h5",{class:"modal-title"},"管理员强制修改普通用户密码"),l("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Bl={class:"modal-body"},Dl={class:"row row-cols-1"},Hl={class:"col mb-2"},Ol={class:"form-floating"},El=l("label",null,"新的密码",-1),Sl={class:"col"},jl={class:"form-floating"},Gl=l("label",null,"二次输入",-1),Jl={class:"modal-footer"},$l=l("div",null,"字母大小写+数字+特殊字符+长度8位以上",-1),Il=l("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),Zl={class:"modal-dialog modal-dialog-centered modal-lg"},Tl={class:"modal-content"},ql=l("div",{class:"modal-header"},[l("h5",{class:"modal-title"},"编辑更新"),l("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Fl={class:"modal-body"},Ql={class:"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2"},Kl={class:"col"},Wl={class:"form-floating"},Xl=l("label",null,"二次密钥",-1),Yl={class:"col"},ls={class:"form-floating"},ss=l("label",null,"中文名",-1),es={class:"col"},os={class:"form-floating"},ts=l("label",null,"邮箱",-1),as={class:"col"},ns={class:"form-floating"},ds=l("label",null,"职位",-1),is={class:"col"},cs={class:"form-floating"},rs=l("label",null,"手机号",-1),us={class:"col"},vs={class:"form-floating"},_s=l("label",null,"注册时间",-1),hs={class:"col"},ps={class:"form-floating"},ms=l("label",null,"直属领导",-1),fs={class:"col"},ys={class:"form-floating"},bs=l("label",null,"所在部门",-1),gs=l("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),ws={class:"modal-dialog modal-dialog-centered modal-lg"},xs={class:"modal-content"},Vs={class:"modal-header"},ks={class:"modal-title"},Us=l("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Cs={class:"modal-body"},Ms={class:"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2"},zs={class:"col"},Ns={class:"form-floating"},Ps=l("label",null,"二次密钥",-1),Rs={class:"col"},Ls={class:"form-floating"},As=l("label",null,"中文名",-1),Bs={class:"col"},Ds={class:"form-floating"},Hs=l("label",null,"邮箱",-1),Os={class:"col"},Es={class:"form-floating"},Ss=l("label",null,"职位",-1),js={class:"col"},Gs={class:"form-floating"},Js=l("label",null,"手机号",-1),$s={class:"col"},Is={class:"form-floating"},Zs=l("label",null,"注册时间",-1),Ts={class:"col"},qs={class:"form-floating"},Fs=l("label",null,"直属领导",-1),Qs={class:"col"},Ks={class:"form-floating"},Ws=l("label",null,"所在部门",-1),Xs=l("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),Ys={class:"modal-dialog modal-dialog-centered modal-lg"},le={class:"modal-content"},se=l("div",{class:"modal-header"},[l("h5",{class:"modal-title"},"添加用户"),l("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ee={class:"modal-body"},oe={class:"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2"},te={class:"col"},ae={class:"form-floating"},ne=l("label",null,"英文名",-1),de={class:"col"},ie={class:"form-floating"},ce=l("label",null,"中文名",-1),re={class:"col"},ue={class:"form-floating"},ve=l("label",null,"邮箱",-1),_e={class:"col"},he={class:"form-floating"},pe=l("label",null,"职位",-1),me={class:"col"},fe={class:"form-floating"},ye=l("label",null,"手机号",-1),be={class:"col"},ge={class:"form-floating"},we=l("label",null,"公司名称",-1),xe={class:"col"},Ve={class:"form-floating"},ke=l("label",null,"直属领导",-1),Ue={class:"col"},Ce={class:"form-floating"},Me=l("label",null,"所在部门",-1),ze={class:"modal-footer"},Ne=l("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1),Pe={class:"my-4"},Re={class:"container"},Le=l("h2",{class:"text-center"},[l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-person-plus",viewBox:"0 0 16 16"},[l("path",{d:"M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"}),l("path",{"fill-rule":"evenodd",d:"M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"})]),_(" 用户管理 ")],-1),Ae={class:"d-flex align-items-center mb-2"},Be={class:"p-2"},De={class:"text-success"},He={key:0,class:"row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"},Oe={class:"card"},Ee={class:"card-header"},Se={class:"float-end"},je={class:"navbar-nav"},Ge={class:"nav-item dropdown"},Je=l("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 操作 ",-1),$e={class:"dropdown-menu text-dark"},Ie={class:"d-flex justify-content-xl-center"},Ze=["onClick"],Te=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},[l("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})],-1),qe={class:"d-flex justify-content-xl-center"},Fe=["onClick"],Qe=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[l("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),l("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})],-1),Ke={class:"d-flex justify-content-xl-center"},We=["onClick"],Xe=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-shield-lock",viewBox:"0 0 16 16"},[l("path",{d:"M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"}),l("path",{d:"M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"})],-1),Ye=l("li",null,[l("hr",{class:"dropdown-divider"})],-1),lo={class:"d-flex justify-content-xl-center"},so=["onClick"],eo=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-gear",viewBox:"0 0 16 16"},[l("path",{d:"M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"}),l("path",{d:"M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"})],-1),oo={class:"d-flex justify-content-xl-center"},to=["onClick"],ao=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-trash3",viewBox:"0 0 16 16"},[l("path",{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"})],-1),no={class:"card-body"},io={class:"card-title"},co={class:"card-text"},ro={class:"line w-100 d-flex justify-content-between"},uo={class:"w-100"},vo={class:"w-100"},_o={class:"col"},ho={class:"qrcode"},po={key:1,class:"row mt-4"},mo={class:"table table-hover table-striped"},fo=l("thead",null,[l("tr",null,[l("th",{scope:"col"},"序列号"),l("th",{scope:"col"},"英文名"),l("th",{scope:"col"},"中文名"),l("th",{scope:"col"},"邮箱"),l("th",{scope:"col"},"Token"),l("th",{scope:"col"},"手机号"),l("th",{scope:"col"},"直属领导"),l("th",{scope:"col"},"职位"),l("th",{scope:"col"},"注册时间"),l("th",{scope:"col"},"操作")])],-1),yo={scope:"row"},bo={class:"navbar-nav"},go={class:"nav-item dropdown"},wo=l("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 操作 ",-1),xo={class:"dropdown-menu text-dark"},Vo={class:"d-flex justify-content-xl-center"},ko=["onClick"],Uo=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-pencil",viewBox:"0 0 16 16"},[l("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"})],-1),Co={class:"d-flex justify-content-xl-center"},Mo=["onClick"],zo=l("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",fill:"currentColor",class:"bi bi-trash",viewBox:"0 0 16 16"},[l("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),l("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})],-1),No={class:"d-flex justify-content-end align-items-center mt-4"},Po={class:"mx-2 lead"},Ro={"aria-label":"Page navigation example"},Lo={class:"pagination"},Ao=l("li",{class:"page-item"},[l("a",{class:"page-link","aria-label":"Previous"},[l("span",{"aria-hidden":"true"},"«")])],-1),Bo=["onClick"],Do=l("li",{class:"page-item"},[l("a",{class:"page-link","aria-label":"Next"},[l("span",{"aria-hidden":"true"},"»")])],-1),Jo=hl({__name:"User",setup(Ho){const ll={myCompanyGroup:"某集团",myContactReg:Y(),myDep:"技术部",myEmail:"11688459@qq.com",myLeader:"某人",myPhone:"18510001234",myPostion:"开发工程",myName:"王某人",myReg:Y(),myTel:"010-85354065-0123",cn:""},f=c([]),o=c({}),i=c(ll),g=c(8),y=c(0),b=c(1),R=c(null),sl=c(null),L=c(null),A=c(null),B=c(null);let D,H,O,E;const I=c({}),U=c(""),S=c("is-invalid"),j=c("disabled"),Z=c(0),G=c(0),el=c(""),T=c(!1),r=c({pass:"",user:"",repass:""}),w=c(["is-invalid"]),k=c("disabled"),ol=M(()=>t=>"otpauth://totp/"+t.cn+"?secret="+t.myGoogle);let q=M(()=>{if(C.value){y.value=C.value.length;let t=(b.value-1)*g.value+1,e=b.value*g.value;return Z.value=t,G.value=e,e>y.value&&(G.value=y.value),C.value.length<t&&(b.value=1,t=(b.value-1)*g.value+1,e=b.value*g.value),C.value.slice(t-1,e)}return f.value}),C=M(()=>U.value!==""?f.value.filter(t=>{if(t.cn.indexOf(U.value)!==-1)return t}):f.value),F=M(()=>y.value>g.value?Math.ceil(y.value/g.value):1);pl(()=>{P().then(t=>{f.value=t,y.value=t.length}),R.value&&(D=new z(R.value)),A.value&&(H=new z(A.value)),B.value&&(O=new z(B.value)),L.value&&(E=new z(L.value))});const tl=t=>{b.value=t},Q=t=>{o.value=JSON.parse(JSON.stringify(t)),D.show()},al=t=>{o.value=JSON.parse(JSON.stringify(t)),xl(o.value).then(e=>{const s=Ul(e.msg);var h=new Blob([s],{type:"text/html"}),u=document.createElement("a");u!=null&&(u.href=URL.createObjectURL(h),u.download=t.cn+".ovpn",u.click())})},nl=t=>{o.value=JSON.parse(JSON.stringify(t)),Vl(o.value).then(e=>{e.code===200?v({message:"revoke:"+i.value.cn+" 成功",type:"success"}):v.error("revoke失败")})},dl=t=>{o.value=JSON.parse(JSON.stringify(t)),E.show()},K=t=>{o.value=JSON.parse(JSON.stringify(t)),O.show()},il=()=>{yl(o.value).then(t=>{t.code==200?(D.hide(),v({message:"更新用户:"+o.value.cn+" 成功",type:"success"}),P().then(e=>{f.value=e})):v.error("更新失败")})},cl=()=>{bl(i.value).then(t=>{t.code===200?(H.hide(),v({message:"添加用户:"+i.value.cn+" 成功",type:"success"}),P().then(e=>{f.value=e})):v.error("更新失败")})},rl=()=>{H.show()},ul=()=>{r.value.user=o.value.cn,gl(r.value).then(t=>{console.log("res===",t),t.code===200?(E.hide(),v({message:"强制修改用户:"+o.value.cn+" 密码成功",type:"success"})):v.error("强制修改用户失败")}),r.value.pass="",r.value.repass="",w.value=["is-invalid"],k.value="disabled"},vl=()=>{console.log("删除用户:",o),wl(o.value).then(t=>{t.code===200?(O.hide(),v({message:"删除用户:"+o.value.cn+" 成功",type:"success"}),P().then(e=>{f.value=e})):v.error("删除用户失败")})},_l=()=>{i.value.cn=i.value.cn.replace(/\s+/g,""),i.value.cn!==""?(S.value="",j.value=""):(S.value="is-invalid",j.value="disabled")},W=()=>{r.value.pass=r.value.pass.replace(/\s+/g,""),r.value.repass=r.value.repass.replace(/\s+/g,"")},J=()=>{if(!/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F])[\da-zA-Z\x21-\x2f\x3a-\x40\x5b-\x60\x7B-\x7F]{8,}$/.test(r.value.pass)){w.value=["is-invalid"],k.value="disabled";return}if(r.value.pass!==r.value.repass){w.value=["is-invalid"],k.value="disabled";return}w.value=["is-valid"],k.value=""};return(t,e)=>(p(),m(N,null,[l("div",Cl,[l("div",{class:"toast bg-danger",role:"alert",ref_key:"toastRef",ref:sl,"aria-live":"assertive","aria-atomic":"true"},[l("div",Ml,[l("strong",zl,a(el.value),1),l("small",null,a(x(fl)()),1),Nl]),l("div",Pl,a(I.value.code!=200?"失败":"成功")+":"+a(I.value.message),1)],512)]),l("div",{class:"modal",tabindex:"-1",ref_key:"passRef",ref:L},[l("div",Rl,[l("div",Ll,[Al,l("div",Bl,[l("div",Dl,[l("div",Hl,[l("div",Ol,[n(l("input",{type:"text",class:V(["form-control",w.value]),"onUpdate:modelValue":e[0]||(e[0]=s=>r.value.pass=s),onkeyup:W,onInput:J,placeholder:"新的密码"},null,34),[[d,r.value.pass]]),El])]),l("div",Sl,[l("div",jl,[n(l("input",{type:"text",class:V(["form-control",w.value]),"onUpdate:modelValue":e[1]||(e[1]=s=>r.value.repass=s),onkeyup:W,onInput:J,placeholder:"二次输入"},null,34),[[d,r.value.repass]]),Gl])])])]),l("div",Jl,[$l,Il,l("button",{type:"button",class:V(["btn btn-primary",k.value]),onClick:ul},"修改",2)])])])],512),l("div",{class:"modal",tabindex:"-1",ref_key:"UpdateRef",ref:R},[l("div",Zl,[l("div",Tl,[ql,l("div",Fl,[l("div",Ql,[l("div",Kl,[l("div",Wl,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[2]||(e[2]=s=>o.value.myGoogle=s),placeholder:"二次密钥"},null,512),[[d,o.value.myGoogle]]),Xl])]),l("div",Yl,[l("div",ls,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=s=>o.value.myName=s),placeholder:"中文名"},null,512),[[d,o.value.myName]]),ss])]),l("div",es,[l("div",os,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[4]||(e[4]=s=>o.value.myEmail=s),placeholder:"邮箱"},null,512),[[d,o.value.myEmail]]),ts])]),l("div",as,[l("div",ns,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=s=>o.value.myPostion=s),placeholder:"职位"},null,512),[[d,o.value.myPostion]]),ds])]),l("div",is,[l("div",cs,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=s=>o.value.myPhone=s),placeholder:"手机号"},null,512),[[d,o.value.myPhone]]),rs])]),l("div",us,[l("div",vs,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=s=>o.value.myReg=s),placeholder:"注册时间",disabled:""},null,512),[[d,o.value.myReg]]),_s])]),l("div",hs,[l("div",ps,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[8]||(e[8]=s=>o.value.myLeader=s),placeholder:"直属领导"},null,512),[[d,o.value.myLeader]]),ms])]),l("div",fs,[l("div",ys,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[9]||(e[9]=s=>o.value.myDep=s),placeholder:"所在部门"},null,512),[[d,o.value.myDep]]),bs])])])]),l("div",{class:"modal-footer"},[gs,l("button",{type:"button",class:"btn btn-primary",onClick:il},"更新")])])])],512),l("div",{class:"modal",tabindex:"-1",ref_key:"DelRef",ref:B},[l("div",ws,[l("div",xs,[l("div",Vs,[l("h5",ks,"删除用户:"+a(o.value.cn),1),Us]),l("div",Cs,[l("div",Ms,[l("div",zs,[l("div",Ns,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[10]||(e[10]=s=>o.value.myGoogle=s),placeholder:"二次密钥",disabled:""},null,512),[[d,o.value.myGoogle]]),Ps])]),l("div",Rs,[l("div",Ls,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[11]||(e[11]=s=>o.value.myName=s),placeholder:"中文名",disabled:""},null,512),[[d,o.value.myName]]),As])]),l("div",Bs,[l("div",Ds,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[12]||(e[12]=s=>o.value.myEmail=s),placeholder:"邮箱",disabled:""},null,512),[[d,o.value.myEmail]]),Hs])]),l("div",Os,[l("div",Es,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[13]||(e[13]=s=>o.value.myPostion=s),placeholder:"职位",disabled:""},null,512),[[d,o.value.myPostion]]),Ss])]),l("div",js,[l("div",Gs,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[14]||(e[14]=s=>o.value.myPhone=s),placeholder:"手机号",disabled:""},null,512),[[d,o.value.myPhone]]),Js])]),l("div",$s,[l("div",Is,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[15]||(e[15]=s=>o.value.myReg=s),placeholder:"注册时间",disabled:""},null,512),[[d,o.value.myReg]]),Zs])]),l("div",Ts,[l("div",qs,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[16]||(e[16]=s=>o.value.myLeader=s),placeholder:"直属领导",disabled:""},null,512),[[d,o.value.myLeader]]),Fs])]),l("div",Qs,[l("div",Ks,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[17]||(e[17]=s=>o.value.myDep=s),placeholder:"所在部门",disabled:""},null,512),[[d,o.value.myDep]]),Ws])])])]),l("div",{class:"modal-footer"},[Xs,l("button",{type:"button",class:"btn btn-primary",onClick:vl},"删除")])])])],512),l("div",{class:"modal",tabindex:"-1",ref_key:"AddRef",ref:A,draggable:"true"},[l("div",Ys,[l("div",le,[se,l("div",ee,[l("div",oe,[l("div",te,[l("div",ae,[n(l("input",{type:"text",class:V(["form-control",S.value]),onInput:J,onkeyup:_l,"onUpdate:modelValue":e[18]||(e[18]=s=>i.value.cn=s),placeholder:"英文名"},null,34),[[d,i.value.cn]]),ne])]),l("div",de,[l("div",ie,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[19]||(e[19]=s=>i.value.myName=s),placeholder:"中文名"},null,512),[[d,i.value.myName]]),ce])]),l("div",re,[l("div",ue,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[20]||(e[20]=s=>i.value.myEmail=s),placeholder:"邮箱"},null,512),[[d,i.value.myEmail]]),ve])]),l("div",_e,[l("div",he,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[21]||(e[21]=s=>i.value.myPostion=s),placeholder:"职位"},null,512),[[d,i.value.myPostion]]),pe])]),l("div",me,[l("div",fe,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[22]||(e[22]=s=>i.value.myPhone=s),placeholder:"手机号"},null,512),[[d,i.value.myPhone]]),ye])]),l("div",be,[l("div",ge,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[23]||(e[23]=s=>i.value.myCompanyGroup=s),placeholder:"公司名称"},null,512),[[d,i.value.myCompanyGroup]]),we])]),l("div",xe,[l("div",Ve,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[24]||(e[24]=s=>i.value.myLeader=s),placeholder:"直属领导"},null,512),[[d,i.value.myLeader]]),ke])]),l("div",Ue,[l("div",Ce,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[25]||(e[25]=s=>i.value.myDep=s),placeholder:"所在部门"},null,512),[[d,i.value.myDep]]),Me])])])]),l("div",ze,[Ne,l("button",{type:"button",class:V(["btn btn-primary",j.value]),onClick:cl},"添加",2)])])])],512),l("section",Pe,[l("div",Re,[Le,l("div",Ae,[l("div",null,[n(l("input",{type:"text",class:"form-control","onUpdate:modelValue":e[26]||(e[26]=s=>U.value=s),placeholder:"检索字段"},null,512),[[d,U.value]])]),l("div",Be,[_("总数据量:"),l("span",De,a(y.value),1)]),l("button",{type:"button",class:"btn btn-danger ms-auto p-2",onClick:rl},"添加用户")]),T.value?X("",!0):(p(),m("div",He,[(p(!0),m(N,null,$(x(q),(s,h)=>(p(),m("div",{key:h,class:"col"},[l("div",Oe,[l("div",Ee,[l("div",Se,[l("ul",je,[l("li",Ge,[Je,l("ul",$e,[l("li",Ie,[l("a",{class:"dropdown-item",onClick:u=>Q(s)},[Te,_(" 更新用户")],8,Ze)]),l("li",qe,[l("a",{class:"dropdown-item",onClick:u=>K(s)},[Qe,_(" 删除用户")],8,Fe)]),l("li",Ke,[l("a",{class:"dropdown-item",onClick:u=>dl(s)},[Xe,_(" 修改密码 ")],8,We)]),Ye,l("li",lo,[l("a",{class:"dropdown-item",onClick:u=>al(s)},[eo,_(" 下载证书")],8,so)]),l("li",oo,[l("a",{class:"dropdown-item",onClick:u=>nl(s)},[ao,_(" 撤销证书")],8,to)])])])])])]),l("div",no,[l("h5",io,a(s.cn),1),l("p",co,[l("div",ro,[l("div",uo,[l("p",vo,[_("姓名:"+a(s.myName)+" ",1),l("span",null,",ID:"+a(s.myId),1)]),l("p",null,"手机号:"+a(s.myPhone),1)]),l("div",_o,[l("div",ho,[ml(kl,{value:x(ol)(s),size:70},null,8,["value"])])])]),l("p",null,"密钥:"+a(s.myGoogle),1),l("p",null,"职位:"+a(s.myPostion),1),l("p",null,"邮箱:"+a(s.myEmail),1),l("p",null,"直属领导:"+a(s.myLeader),1),l("p",null,"注册时间:"+a(s.myReg),1)])])])]))),128))])),T.value?(p(),m("div",po,[l("table",mo,[fo,l("tbody",null,[(p(!0),m(N,null,$(x(q),(s,h)=>(p(),m("tr",{key:h},[l("th",yo,a(h+1),1),l("td",null,a(s.cn),1),l("td",null,a(s.myName),1),l("td",null,a(s.myEmail),1),l("td",null,a(s.myGoogle),1),l("td",null,a(s.myPhone),1),l("td",null,a(s.myLeader),1),l("td",null,a(s.myPostion),1),l("td",null,a(s.myReg),1),l("td",null,[l("ul",bo,[l("li",go,[wo,l("ul",xo,[l("li",Vo,[l("a",{class:"dropdown-item",onClick:u=>Q(s)},[Uo,_(" 更新")],8,ko)]),l("li",Co,[l("a",{class:"dropdown-item",onClick:u=>K(s)},[zo,_(" 删除")],8,Mo)])])])])])]))),128))])])])):X("",!0),l("div",No,[l("p",Po,"共:"+a(x(F))+"页,开始:"+a(Z.value)+",结束:"+a(G.value),1),l("nav",Ro,[l("ul",Lo,[Ao,(p(!0),m(N,null,$(x(F),(s,h)=>(p(),m("li",{key:h,class:"page-item"},[l("a",{class:V(["page-link",{active:b.value===s}]),onClick:u=>tl(s)},a(h+1),11,Bo)]))),128)),Do])])])])])],64))}});export{Jo as default};
