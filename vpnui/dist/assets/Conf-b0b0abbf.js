import{d as x,u as y,r,q as w,o as S,h as I,c as M,a as e,w as i,v as u,n as p,G as V}from"./index-30724186.js";import{E as n}from"./axios-a937fb27.js";import{e as f,f as _,h as B,i as E,j as U}from"./user-f2397246.js";import{g as m}from"./base64-0b4f26c6.js";const A={class:"py-3"},D={class:"container"},P=e("h3",{class:"py-3 text-center"},"客户端配置参数",-1),R={class:"row"},j={class:"col-12 col-md-4 mb-3"},T={class:"row"},q=e("label",{for:"staticEmail",class:"col-3 col-form-label"},"域名?IP:",-1),z={class:"col-9"},F={class:"col-12 col-md-4 mb-3"},G={class:"row"},L=e("label",{class:"col-3 col-md-2 col-form-label"},"端口:",-1),N={class:"col-9"},W={class:"col-12 col-md-4 mb-3"},$=e("label",{class:"form-label"},".",-1),H={class:"mt-3 d-flex align-items-center"},J=e("h3",{class:"py-3 text-center ms-auto"},"服务端配置参数",-1),K={class:"form-check form-switch ms-auto"},O=e("label",{class:"form-check-label",for:"flexSwitchCheckChecked"},null,-1),Q=["disabled"],X={class:"d-flex justify-content-between"},le=x({__name:"Conf",setup(Y){y();const a=r(!1),o=r({}),c=r("disabled"),v=r("disabled"),d=r("");w(()=>()=>{a.value?(console.log("===here1"),v.value="disabled"):(console.log("===here2"),v.value="")});const b=()=>{B().then(s=>{console.log("======reload:",s),s.code==200?n.success(s.message):n.error("重启失败："+s.message)})},g=()=>{E(o.value).then(s=>{s.code==200?(n.success("客户端配置参数:修改成功"),f().then(l=>{o.value=l})):n.error("客户端配置参数:修改失败"+s.message)})};f().then(s=>{o.value=s}),_().then(s=>{if(s.msg.length>0){const l=m.decode(s.msg);d.value=l}});const C=()=>{let s={msg:m.encode(d.value)};U(s).then(l=>{console.log("===putServerConf:",l),l.message==="ok"?(n.success("服务端配置参数:写入成功"),_().then(t=>{if(t.msg.length>0){const k=m.decode(t.msg);d.value=k,a.value=!1}})):n.error("服务端配置参数:提交失败")})},h=()=>{if(o.value.port.length==1&&o.value.port=="0"&&(o.value.port=""),o.value.port=o.value.port.replace(/[^\d.]/g,"").replace(/(\.\d+)\.+/g,"$1").slice(0,5),o.value.domain===""||o.value.port===""){c.value="disabled";return}c.value=""};return S(()=>{if(o.value.domain===""||o.value.port===""){c.value="disabled";return}else c.value=""}),(s,l)=>(I(),M("section",A,[e("div",D,[P,e("div",R,[e("div",j,[e("div",T,[q,e("div",z,[i(e("input",{type:"text",class:"form-control",onInput:h,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value.domain=t),placeholder:"远程域名或IP","aria-label":"远程域名或IP"},null,544),[[u,o.value.domain]])])])]),e("div",F,[e("div",G,[L,e("div",N,[i(e("input",{type:"text",class:"form-control",onInput:h,"onUpdate:modelValue":l[1]||(l[1]=t=>o.value.port=t),placeholder:"端口","aria-label":"端口"},null,544),[[u,o.value.port]])])])]),e("div",W,[$,e("button",{class:p(["btn btn-primary",c.value]),style:{"min-width":"6.25rem"},onClick:g},"提交",2)])]),e("div",H,[J,e("div",K,[i(e("input",{class:"form-check-input","onUpdate:modelValue":l[2]||(l[2]=t=>a.value=t),type:"checkbox",role:"switch",id:"flexSwitchCheckChecked"},null,512),[[V,a.value]]),O])]),i(e("textarea",{class:"form-control","onUpdate:modelValue":l[3]||(l[3]=t=>d.value=t),id:"exampleFormControlTextarea1",rows:"30",disabled:!a.value},null,8,Q),[[u,d.value]]),e("div",X,[e("button",{class:"my-3 btn btn-danger",onClick:b},"重启reload（慎重）"),e("button",{class:p(["my-3 btn btn-primary",{disabled:a.value===!1}]),onClick:C},"修改服务端配置",2)])])]))}});export{le as default};