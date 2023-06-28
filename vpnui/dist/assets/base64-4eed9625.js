const y=typeof atob=="function",C=typeof btoa=="function",x=typeof Buffer=="function",i=typeof TextDecoder=="function"?new TextDecoder:void 0,h=typeof TextEncoder=="function"?new TextEncoder:void 0,_="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",s=Array.prototype.slice.call(_),l=(t=>{let e={};return t.forEach((o,n)=>e[o]=n),e})(s),m=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,r=String.fromCharCode.bind(String),c=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):t=>new Uint8Array(Array.prototype.slice.call(t,0)),F=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),A=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),B=t=>{let e,o,n,f,a="";const u=t.length%3;for(let d=0;d<t.length;){if((o=t.charCodeAt(d++))>255||(n=t.charCodeAt(d++))>255||(f=t.charCodeAt(d++))>255)throw new TypeError("invalid character found");e=o<<16|n<<8|f,a+=s[e>>18&63]+s[e>>12&63]+s[e>>6&63]+s[e&63]}return u?a.slice(0,u-3)+"===".substring(u):a},p=C?t=>btoa(t):x?t=>Buffer.from(t,"binary").toString("base64"):B,D=x?t=>Buffer.from(t).toString("base64"):t=>{let o=[];for(let n=0,f=t.length;n<f;n+=4096)o.push(r.apply(null,t.subarray(n,n+4096)));return p(o.join(""))},U=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?r(192|e>>>6)+r(128|e&63):r(224|e>>>12&15)+r(128|e>>>6&63)+r(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return r(240|e>>>18&7)+r(128|e>>>12&63)+r(128|e>>>6&63)+r(128|e&63)}},w=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,E=t=>t.replace(w,U),b=x?t=>Buffer.from(t,"utf8").toString("base64"):h?t=>D(h.encode(t)):t=>p(E(t)),k=(t,e=!1)=>e?F(b(t)):b(t),S=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,T=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),o=e-65536;return r((o>>>10)+55296)+r((o&1023)+56320);case 3:return r((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return r((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},v=t=>t.replace(S,T),z=t=>{if(t=t.replace(/\s+/g,""),!m.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,o="",n,f;for(let a=0;a<t.length;)e=l[t.charAt(a++)]<<18|l[t.charAt(a++)]<<12|(n=l[t.charAt(a++)])<<6|(f=l[t.charAt(a++)]),o+=n===64?r(e>>16&255):f===64?r(e>>16&255,e>>8&255):r(e>>16&255,e>>8&255,e&255);return o},g=y?t=>atob(A(t)):x?t=>Buffer.from(t,"base64").toString("binary"):z,Z=x?t=>c(Buffer.from(t,"base64")):t=>c(g(t).split("").map(e=>e.charCodeAt(0))),P=x?t=>Buffer.from(t,"base64").toString("utf8"):i?t=>i.decode(Z(t)):t=>v(g(t)),j=t=>A(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),I=t=>P(j(t));export{I as d,k as e};