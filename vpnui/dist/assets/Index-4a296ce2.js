import{d as I,r,o as $,A as Y,B as K,C as Q,D as X,x as W,h as R,c as U,E as Z,G as ee,a as e,n as te,t as c,b as w,m as S,j as b,F as se}from"./index-92bb45b1.js";import{r as ae,f as N,a as P,b as v}from"./axios-1be6952d.js";import{g as oe,a as ne,b as ie,c as re,d as le,e as de,f as J}from"./session-ab4459eb.js";import{a as ce}from"./user-fd33b571.js";import"./lodash-57f7ce19.js";function M(t){return ae({url:"/ssoapi/prome",method:"post",data:t}).then(s=>s.data)}const ue=I({__name:"charts",props:{options:{type:Object,default:{},required:!0},width:{type:String,default:"400px",required:!1},height:{type:String,default:"400px",required:!1},chinaJson:{type:Object,default:{},required:!1}},setup(t){const s=t;let o=r(),h=r(),g=!0;const H=()=>{h.value.resize()};return $(()=>{h.value=Y(K(o.value)),JSON.stringify(s.chinaJson)!=="{}"&&(console.log("===",s.chinaJson),Q("china",s.chinaJson)),h.value.setOption(s.options,!0),window.addEventListener("resize",H),h.value.on("legendselectchanged",function(x){const{selected:f,name:y}=x;if(g&&f)Object.keys(f).forEach(_=>{f[_]=_===y}),g=!1;else{let _=f[y];f[y]=_}s.options.legend.selected=f,h.value.setOption(s.options,!0)})}),X(()=>s.options,x=>{h.value.setOption(x,!0)},{deep:!0}),W(()=>s.width),W(()=>s.height),(x,f)=>(R(),U("div",{ref_key:"chartRef",ref:o,class:"echarts"},null,512))}});const he=()=>(L=new Date(+L+ge),T=T+Math.random()*21-10,{name:L.toString(),value:[[L.getFullYear(),L.getMonth()+1,L.getDate()].join("/"),Math.round(T)]});let ve=[],L=new Date(1997,9,3),ge=24*3600*1e3,T=Math.random()*1e3;for(var E=0;E<1e3;E++)ve.push(he());var i=["#EA3C3C","#FF7D26","#CA9F29","#5BFF83","#00FBFF"];const p=[{name:"192.168.1.1",value:797},{name:"192.168.1.2",value:751},{name:"192.168.1.3",value:666},{name:"192.168.1.4",value:631},{name:"192.168.1.5",value:333}];p[0].value,p.map(t=>t.value),i[0],i[0],i[1],i[1],i[2],i[2],i[3],i[3],i[4],i[4],p.map(t=>t.value),p.map((t,s)=>{let o={color:i[s]};return{value:t.value,itemStyle:o}});p[0].value,p.map(t=>t.value),i[0],i[0],i[1],i[1],i[2],i[2],i[3],i[3],i[4],i[4],p.map(t=>t.value),p.map((t,s)=>{let o={color:i[s]};return{value:t.value,itemStyle:o}});const fe={title:{text:"MEM  Usage %",top:"top",left:"center",textStyle:{color:"#2d5470"}},tooltip:{trigger:"axis",formatter:function(t){t=t[0].data;var s=new Date(t[0]*1e3);return s.getHours()+":"+s.getMinutes()+"<br>"+t[1]},axisPointer:{animation:!1}},grid:{bottom:30,right:20},xAxis:{type:"time",splitLine:{show:!1},interval:8,axisLabel:{formatter:function(t,s){var o=new Date(t*1e3);return o.getHours()+":"+o.getMinutes()}}},yAxis:{},series:[{type:"line",showSymbol:!1,animation:!1,data:[]}]},pe={title:{text:"CPU Usage %",top:"top",left:"center",textStyle:{color:"#2d5470"}},tooltip:{trigger:"axis",formatter:function(t){t=t[0].data;var s=new Date(t[0]*1e3);return s.getHours()+":"+s.getMinutes()+"<br>"+t[1]},axisPointer:{animation:!1}},grid:{bottom:30,right:20},xAxis:{type:"time",splitLine:{show:!1},interval:8,axisLabel:{formatter:function(t,s){var o=new Date(t*1e3);return o.getHours()+":"+o.getMinutes()}}},yAxis:{},series:[{type:"line",showSymbol:!1,animation:!1,data:[]}]},_e={title:{text:"OPENVPN今日流量",top:"top",left:"center",textStyle:{color:"#2d5470"}},tooltip:{trigger:"axis",formatter:function(t){var s=t[0].data,o=new Date(s[0]*1e3),h=o.getHours()<10?"0"+o.getHours():o.getHours(),g=o.getMinutes()<10?"0"+o.getMinutes():o.getMinutes();return h+":"+g+"<br>"+N(Number(s[1]))},axisPointer:{animation:!1}},grid:{bottom:30,right:20,left:60},xAxis:{type:"time",splitLine:{show:!1},interval:8,axisLabel:{formatter:function(t,s){var o=new Date(t*1e3),h=o.getHours()<10?"0"+o.getHours():o.getHours(),g=o.getMinutes()<10?"0"+o.getMinutes():o.getMinutes();return h+":"+g}}},yAxis:{type:"value",axisLabel:{interval:2,formatter:function(t){return N(t)}}},series:[{type:"line",showSymbol:!1,animation:!1,data:[]}]},j={xAxis:{type:"category",axisLine:{show:!1},axisTick:{show:!1},show:!1},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{show:!1},show:!1,splitArea:{show:!1}},grid:{top:20,bottom:0,left:0,rigth:0},tooltip:{trigger:"axis",formatter:function(t){var s=t[0].data,o=new Date(s[0]*1e3),h=o.getHours()<10?"0"+o.getHours():o.getHours(),g=o.getMinutes()<10?"0"+o.getMinutes():o.getMinutes();return h+":"+g+"<br>"+s[1]},axisPointer:{animation:!1}},series:[{data:[],type:"line",showSymbol:!1,animation:!1}]},me={class:"mt-5"},be={class:"container"},xe={class:"row row-deck row-cards v-100"},ye={class:"d-flex justify-content-end mb-3"},we={class:"col-sm-6 col-lg-3 mb-3"},Se={class:"card"},Me=e("div",{class:"card-status-top bg-success"},null,-1),Le={class:"card-body"},He={class:"d-flex align-items-center"},De=e("div",{class:"subheader"},"用户总数",-1),Ce={class:"ms-auto lh-1"},Ae={class:"h1 mb-3"},Pe={style:{height:"40px"}},Ne={class:"col-sm-6 col-lg-3 mb-3"},Oe={class:"card"},ke=e("div",{class:"card-status-top bg-primary"},null,-1),Te={class:"card-body"},je={class:"d-flex align-items-center"},ze=e("div",{class:"subheader"},"在线会话数",-1),Be={class:"ms-auto lh-1"},Fe={class:"h1 mb-3"},Ge={style:{height:"40px"}},We={class:"col-sm-6 col-lg-3 mb-3"},Je={class:"card"},Ee=e("div",{class:"card-status-top bg-secondary"},null,-1),Ie={class:"card-body"},Re={class:"d-flex align-items-center"},Ue=e("div",{class:"subheader"},"服务器负载",-1),qe={class:"ms-auto lh-1"},Ve={class:"h1 mb-3"},$e={style:{height:"40px"}},Ye={class:"col-sm-6 col-lg-3"},Ke={class:"card"},Qe=e("div",{class:"card-status-top bg-warning"},null,-1),Xe={class:"card-body"},Ze={class:"d-flex align-items-center"},et={class:"subheader"},tt={class:"ms-auto lh-1"},st={class:"h1 mb-3"},at=e("br",null,null,-1),ot={class:"mt-5"},nt={class:"container"},it={class:"row row-cols-1 row-cols-md-2 g-4 h-100",style:{height:"300px"}},rt={class:"col"},lt={class:"card h-100 bg-warning"},dt={class:"card-body h-100"},ct=e("p",{class:"h3"},"重要参数",-1),ut=e("br",null,null,-1),ht=e("br",null,null,-1),vt=e("br",null,null,-1),gt={class:"col"},ft={class:"card h-100 bg-success"},pt={class:"card-body h-100"},_t=e("p",{class:"h3"},"基本信息",-1),mt=e("br",null,null,-1),bt=e("br",null,null,-1),xt=e("br",null,null,-1),yt=e("br",null,null,-1),wt={class:"mt-5"},St={class:"container"},Mt={class:"card"},Lt={style:{height:"300px"}},Ht={class:"mt-5"},Dt={class:"container"},Ct={class:"row row-cols-1 row-cols-md-2 g-4"},At={class:"col"},Pt={class:"card"},Nt={class:"card-body"},Ot={style:{height:"300px"}},kt={class:"col"},Tt={class:"card"},jt={class:"card-body"},zt={style:{height:"300px"}},Et=I({__name:"Index",setup(t){const s=r(),o=r(),h=r(!1),g=Z(),H=r(_e),x=r(pe),f=r(fe),y=r({}),_=r(JSON.parse(JSON.stringify(j)));_.value.tooltip={trigger:"axis",formatter:function(m){var d=m[0].data,n=new Date(d[0]*1e3),a=n.getHours()<10?"0"+n.getHours():n.getHours(),u=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes();return a+":"+u+"<br>"+d[1]},axisPointer:{animation:!1}};const C=r(JSON.parse(JSON.stringify(j)));C.value.tooltip={trigger:"axis",formatter:function(m){var d=m[0].data,n=new Date(d[0]*1e3),a=n.getHours()<10?"0"+n.getHours():n.getHours(),u=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes();return a+":"+u+"<br>"+d[1]},axisPointer:{animation:!1}};const A=r(JSON.parse(JSON.stringify(j)));A.value.tooltip={trigger:"axis",formatter:function(m){var d=m[0].data,n=new Date(d[0]*1e3),a=n.getHours()<10?"0"+n.getHours():n.getHours(),u=n.getMinutes()<10?"0"+n.getMinutes():n.getMinutes();return a+":"+u+"<br>"+d[1]},axisPointer:{animation:!1}};const l=r({name:"自动查询5s",num:5,running:!1,class:["btn","btn-primary"]}),q=()=>{o.value=setInterval(function(){l.value.name="停止循环"+l.value.num+"s",l.value.num--,l.value.num<=0&&(l.value.num=5)},1e3)},V=()=>{l.value.running===!1?(l.value.class=["btn","btn-danger"],l.value.name="停止循环"+l.value.num+"s",console.log("===开启"),h.value=!0,l.value.num=4,q(),k(),s.value=setInterval(function(){k()},5e3)):(l.value.num=5,l.value.class=["btn","btn-primary"],l.value.name="自动查询"+l.value.num+"s",console.log("===关闭"),clearTimeout(s.value),clearTimeout(o.value),h.value=!1),l.value.running=!l.value.running};ee(()=>{h.value===!0&&(clearTimeout(s.value.toggle),clearTimeout(o.value))});const z=r(0),B=r(""),F=r(""),G=r(""),O=r({}),D=r({upload:0,down:0,name:"eth0"}),k=()=>{const m=new Date,d=new Date(m);d.setMinutes(d.getMinutes()-60);const n=new Date(m);oe().then(a=>{g.UpdateOnlineNum(a.length)}),ne().then(a=>{B.value=a}),ie().then(a=>{G.value=a.Avg1min+" "+a.Avg5min+" "+a.Avg15min}),re().then(a=>{y.value=a}),le().then(a=>{F.value=a}),ce().then(a=>{z.value=a.length}),de().then(a=>{O.value=a}),J({index:1}).then(a=>{a.data.result.length!==0&&(D.value.upload=Number(a.data.result[0].value[1]))}),J({index:2}).then(a=>{a.data.result.length!==0&&(D.value.down=Number(a.data.result[0].value[1]))}),M({start:v(d),end:v(n),index:1,step:1}).then(a=>{H.value.series[0].data.length=0;for(var u of a.data.result[0].values)H.value.series[0].data.push(u)}),M({start:v(d),end:v(n),index:2,step:1}).then(a=>{x.value.series[0].data.length=0;for(var u of a.data.result[0].values)x.value.series[0].data.push(u)}),M({start:v(d),end:v(n),index:3,step:1}).then(a=>{f.value.series[0].data.length=0;for(var u of a.data.result[0].values)f.value.series[0].data.push(u)}),M({start:v(d),end:v(n),index:4,step:1}).then(a=>{_.value.series[0].data.length=0;for(var u of a.data.result[0].values)_.value.series[0].data.push(u)}),M({start:v(d),end:v(n),index:5,step:1}).then(a=>{C.value.series[0].data.length=0;for(var u of a.data.result[0].values)C.value.series[0].data.push(u)}),M({start:v(d),end:v(n),index:6,step:1}).then(a=>{A.value.series[0].data.length=0;for(var u of a.data.result[0].values)A.value.series[0].data.push(u)})};return k(),(m,d)=>{const n=ue;return R(),U(se,null,[e("section",me,[e("div",be,[e("div",xe,[e("div",ye,[e("button",{class:te(l.value.class),onClick:V},c(l.value.name),3)]),e("div",we,[e("div",Se,[Me,e("div",Le,[e("div",He,[De,e("div",Ce,c(w(P)()),1)]),e("div",Ae,c(z.value),1),e("div",Pe,[S(n,{options:_.value},null,8,["options"])])])])]),e("div",Ne,[e("div",Oe,[ke,e("div",Te,[e("div",je,[ze,e("div",Be,c(w(P)()),1)]),e("div",Fe,c(w(g).online),1),e("div",Ge,[S(n,{options:C.value},null,8,["options"])])])])]),e("div",We,[e("div",Je,[Ee,e("div",Ie,[e("div",Re,[Ue,e("div",qe,c(w(P)()),1)]),e("div",Ve,c(G.value),1),e("div",$e,[S(n,{options:A.value},null,8,["options"])])])])]),e("div",Ye,[e("div",Ke,[Qe,e("div",Xe,[e("div",Ze,[e("div",et,c(D.value.name)+" 网卡流量",1),e("div",tt,c(w(P)()),1)]),e("div",st,[b("上行:"+c(w(N)(D.value.upload)),1),at,b("下行"+c(w(N)(D.value.down)),1)])])])])])])]),e("section",ot,[e("div",nt,[e("div",it,[e("div",rt,[e("div",lt,[e("div",dt,[ct,e("address",null,[b(c(y.value.login_url),1),ut,b(" "+c(y.value.log_url),1),ht,b(" "+c(y.value.ws_url),1),vt])])])]),e("div",gt,[e("div",ft,[e("div",pt,[_t,e("address",null,[b(" GitVer: "+c(O.value.GitRevision),1),mt,b(" 编译时间: "+c(O.value.BuildTime),1),bt,b(" 启动时间: "+c(F.value),1),xt,b(" IP地址："+c(B.value),1),yt])])])])])])]),e("section",wt,[e("div",St,[e("div",Mt,[e("div",Lt,[S(n,{options:H.value},null,8,["options"])])])])]),e("section",Ht,[e("div",Dt,[e("div",Ct,[e("div",At,[e("div",Pt,[e("div",Nt,[e("div",Ot,[S(n,{options:x.value},null,8,["options"])])])])]),e("div",kt,[e("div",Tt,[e("div",jt,[e("div",zt,[S(n,{options:f.value},null,8,["options"])])])])])])])])],64)}}});export{Et as default};
