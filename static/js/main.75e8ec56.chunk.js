(this.webpackJsonpavatar=this.webpackJsonpavatar||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},184:function(e,t,a){e.exports=a(285)},273:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);a(185),a(212),a(214),a(215),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254);var n=a(0),c=a.n(n),r=a(64),s=a.n(r),i=a(33),o=a.n(i),l=a(66),u=a.n(l),p=a(95),m=a(41),d=a(104),h=a.n(d),f=a(103),b=a.n(f),v=(a(263),a(96)),g=a.n(v),E=a(98),k=a.n(E),j=a(97),x=a.n(j);var y=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return c.a.createElement("div",{id:t,style:{height:"100%",padding:"10px"}},n&&c.a.createElement("div",{style:{justifyContent:"center",display:"flex",padding:"10px",margin:"10px",alignItems:"center"}},c.a.createElement("img",{style:{width:"calc(70vh)","max-width":"200px","border-radius":"1000px"},src:n.photo_200})),c.a.createElement(x.a,{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0433\u043b\u0430\u0432\u043d\u043e\u0433\u043e \u0444\u043e\u0442\u043e?",style:{}},c.a.createElement(k.a,{size:"xl",level:"1",onClick:a,"data-to":"persik",style:{}},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"),"\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439, ",window.location.hash))},O=a(67),w=a(65),A=a.n(w),C=a(47),I=a.n(C),K=a(102),P=a.n(K),V=a(99),W=a.n(V),_=a(100),S=a.n(_),U=a(101),T=a.n(U),z=(a(273),Object(O.b)()),G=function(e){return c.a.createElement(A.a,{id:e.id},c.a.createElement(I.a,{left:c.a.createElement(P.a,{onClick:e.go,"data-to":"home"},z===O.a?c.a.createElement(W.a,null):c.a.createElement(S.a,null))},"Persik"),c.a.createElement("img",{className:"Persik",src:T.a,alt:"Persik The Cat"}))},J=function(){var e=Object(n.useState)("home"),t=Object(m.a)(e,2),a=t[0],r=(t[1],Object(n.useState)(null)),s=Object(m.a)(r,2),i=s[0],l=s[1],d=Object(n.useState)(null),f=Object(m.a)(d,2),v=f[0],E=f[1],k=Object(n.useState)(c.a.createElement(b.a,{size:"large"})),j=Object(m.a)(k,2),x=j[0],O=j[1];Object(n.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.sendPromise("VKWebAppGetUserInfo");case 2:t=e.sent,l(t),O(null);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var c=document.createAttribute("scheme");c.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(c)}"VKWebAppAccessTokenReceived"===a&&E(n.access_token)})),o.a.send("VKWebAppGetAuthToken",{app_id:7177213,scope:"wall"}),function(){e.apply(this,arguments)}()}),[]);var w=function(e){var t="https://api.vk.com/method/wall.post?v=5.52&access_token=".concat(v,"&message='test message'");g()(t).then((function(e){return e.json()})).then((function(e){return console.log(e)})).catch((function(e){return[]}))};return c.a.createElement(h.a,{activePanel:a,popout:x},c.a.createElement(y,{id:"home",fetchedUser:i,go:w}),c.a.createElement(G,{id:"persik",go:w}))};o.a.send("VKWebAppInit"),s.a.render(c.a.createElement(J,null),document.getElementById("root"))}},[[184,1,2]]]);
//# sourceMappingURL=main.75e8ec56.chunk.js.map