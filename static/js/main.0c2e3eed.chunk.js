(this["webpackJsonpnasa-apod"]=this["webpackJsonpnasa-apod"]||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/nasaLogo.23d919ae.png"},22:function(e,a,t){e.exports=t(49)},27:function(e,a,t){},32:function(e,a,t){},4:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),m=t.n(c),s=(t(27),t(3));t(4);var l=function(e){return r.a.createElement("div",{className:"like-section-wrapper-comment"},r.a.createElement("p",null,r.a.createElement("span",{className:"author-post"},e.userName)," ",e.text))};var i=function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit,className:"comment-form"},r.a.createElement("input",{type:"text",placeholder:"comment...",value:e.comment,onChange:e.changeComment}))};var o=function(e){var a=e.userName,t=e.explanation,c=Object(n.useState)(""),m=Object(s.a)(c,2),o=m[0],u=m[1],p=Object(n.useState)([{username:"spaceboi",text:"This is so cool!"},{username:"elonmusk",text:"I love this shot"}]),E=Object(s.a)(p,1)[0];return r.a.createElement("div",null,r.a.createElement(l,{text:t,userName:a}),E.map((function(e){return r.a.createElement(l,{userName:e.username,text:e.text})})),r.a.createElement(i,{comment:o,handleSubmit:function(e){e.preventDefault(),E.push({username:"dankim520",text:o}),u("")},changeComment:function(e){u(e.target.value)}}))},u=t(20),p=t.n(u);var E=function(e){return r.a.createElement("div",{className:"post-header"},r.a.createElement("div",{className:"post-thumb-wrapper"},r.a.createElement("img",{src:p.a,alt:"",className:"post-thumb"})),r.a.createElement("h2",null,e.username))},d=t(6),v=t(8);var N=function(e){var a=Object(n.useState)(0),t=Object(s.a)(a,2),c=t[0],m=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"like-section-wrapper"},r.a.createElement(d.a,{icon:v.b,className:"icon",onClick:function(){m(c+1)}}),r.a.createElement(d.a,{icon:v.a,className:"icon"}),r.a.createElement("div",{className:"timestamp"},e.date)),r.a.createElement("div",{className:"like-section-wrapper"},r.a.createElement("p",{className:"like-count"},c," likes")),r.a.createElement("div",{className:"like-section-wrapper"},r.a.createElement("p",null,r.a.createElement("span",{className:"author-post"},e.userName)," ",e.title)),r.a.createElement("div",{className:"like-section-wrapper"},r.a.createElement("p",{className:"view-comments"},"View comments...")))};var f=function(e){return r.a.createElement("div",{className:"post-border posts-container-wrapper"},r.a.createElement(E,{username:e.username}),r.a.createElement("div",{className:"post-image-wrapper"},r.a.createElement("img",{src:e.image,alt:"post image",className:"post-image"})),r.a.createElement(N,{date:e.date,userName:e.username,title:e.title}),r.a.createElement(o,{explanation:e.explanation,userName:e.username}))},h=(t(32),t(21)),b=t.n(h);var g=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1];return console.log(t),Object(n.useEffect)((function(){b.a.get("https://api.nasa.gov/planetary/apod?api_key=1aPmHhhSA3MBASpffCGIvQKFPQABi9VdZv6tAdfN").then((function(e){c(e.data)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement(f,{username:t.copyright,image:t.url,date:t.date,title:t.title,explanation:t.explanation}))};m.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.0c2e3eed.chunk.js.map