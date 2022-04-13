"use strict";(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[794],{24794:function(e,n,t){t.d(n,{Z:function(){return q}});var i,a,r,s,l=t(23430),o=t(17186),d=t(32765),c=t(50390),h=t(89743),g=t(83574),f=t(34952),u=t(60048),x=t(7016),m=t(86816),p=t(15130),y=t(3038),j=t(87724),Z=t(74287),v=t(15597),w=t(31188),b=t(5537),C=t(5936),k=t(1566),P=t(93646),E=t(28003),S=t(1195),F=t(2788),N=t(3453),_=t(34693),B=t(69676),D=t(62559),H=(0,E.default)("div")(i||(i=(0,o.Z)(["\n  position: relative;\n"])));function O(e){var n=e.address,t=(0,c.createRef)(),i=(0,c.createRef)(),a=(0,c.useState)(!1),r=(0,l.Z)(a,2),s=r[0],o=r[1],d=(0,c.useState)(!1),h=(0,l.Z)(d,2),g=h[0],f=h[1],x=(0,u.$)().t;(0,Z.t$)([t,i],(function(){return o(!1)}));var m=function(){f(!1)};return(0,D.jsxs)(H,{children:[(0,D.jsx)(S.a,{ref:i,onClick:function(){o((function(e){return!e}))},children:x("expiryNotification.reminder")}),s&&(0,D.jsx)(F.Z,{ref:t,children:(0,D.jsx)(N.Z,{onClick:function(){f(!0),o(!1)},address:n,children:x("c.email")},"email")}),g&&(0,D.jsx)(_.Z,{closeModal:m,children:(0,D.jsx)(B.Z,{address:n,onCancel:m})})]})}var R=(0,d.Z)("div",{target:"elhgnhy0"})("align-items:start;display:flex;flex-direction:column;grid-area:actions;justify-content:flex-start;> *{margin:10px 0 10px 0;}",m.ZP.small(a||(a=(0,o.Z)(["\n    align-items: center; \n    flex-direction: row;\n    > * { \n      margin: 0 0 0 20px;\n    }\n  "])))," ",m.ZP.large(r||(r=(0,o.Z)(["\n    justify-content: flex-end;\n  "]))),""),$=(0,d.Z)("div",{target:"elhgnhy1"})({name:"1v6bkkh",styles:"grid-area:renew;display:flex;flex-direction:column;"}),L=(0,d.Z)(C.Co,{target:"elhgnhy2"})({name:"cn1f3p",styles:"margin-right:20px;align-self:flex-start;"}),M=(0,d.Z)(f.ww.div,{target:"elhgnhy3"})({name:"1boyjcw",styles:"background:#f0f6fa;padding:20px;margin:20px;margin-left:0;display:flex;flex-direction:column;"}),U=(0,d.Z)("div",{target:"elhgnhy4"})({name:"4ggw95",styles:"display:flex;justify-content:flex-end;align-items:flex-start;"}),Y=(0,d.Z)(P.C,{target:"elhgnhy5"})(""),A=f.ww.custom(Y),G=(0,d.Z)("div",{target:"elhgnhy6"})({name:"1ows65d",styles:"max-height:500px;overflow-y:scroll;"}),I=(0,d.Z)("span",{target:"elhgnhy7"})("color:#f6412d;margin-right:auto;margin-bottom:1em;",m.ZP.small(s||(s=(0,o.Z)(["\n    margin-bottom: 0em;\n  "]))),"");function V(e){return e.length>0}function q(e){var n=e.selectedNames,t=e.address,i=e.allNames,a=e.setCheckedBoxes,r=e.setSelectAll,s=e.refetch,o=e.data,d=e.getterString,m=e.checkedOtherOwner,C=(0,u.$)().t,P=(0,Z.Y7)(),E=P.state,S=P.actions,F=E.editing,N=E.txHash,_=E.pending,B=E.confirmed,H=S.startEditing,Y=S.stopEditing,q=S.startPending,z=S.setConfirmed,J=(0,c.useState)(1),K=(0,l.Z)(J,2),Q=K[0],T=K[1],W=(0,h.a)(y.GH),X=W.data,ee=(X=void 0===X?{}:X).getEthPrice,ne=W.loading,te=(0,j.o6)(Q),ie=n.map((function(e){return e.split(".")[0]})),ae=(0,h.a)(y.vh,{variables:{labels:ie,duration:te}}),re=ae.data,se=(re=void 0===re?{}:re).getRentPrices,le=ae.loading,oe=(0,g.D)(p.cL,{onCompleted:function(e){var n=Object.values(e)[0];q(n),se&&n&&ee&&(0,v.F2)({labels:ie,transactionId:n,type:"renew",price:new x.Z("".concat(se._hex)).toEth().mul(ee).toFixed(2),years:Q})}}),de=(0,l.Z)(oe,1)[0];return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(R,{children:F?null:_&&!B?(0,D.jsx)(b.Z,{txHash:N,onConfirmed:function(){z(),(0,w.sE)(s,300,"expiryDate",n[0],o,d),a({}),r(!1)}}):(0,D.jsxs)(D.Fragment,{children:[t&&i.length>0?(0,D.jsx)(O,{address:t}):"",(0,D.jsx)(L,{onClick:function(){ie.length>0&&H()},type:ie.length>0?"primary":"disabled",children:C("address.renew.button")})]})}),(0,D.jsx)($,{children:F&&(0,D.jsx)(f.M_,{children:(0,D.jsxs)(M,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[(0,D.jsx)(A,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},labels:ie,years:Q,loading:le,price:se,setYears:T,duration:te,ethUsdPriceLoading:ne,ethUsdPrice:ee||0}),(0,D.jsxs)(U,{children:[m&&(0,D.jsxs)(I,{children:["*",C("singleName.expiry.cannotown")]}),(0,D.jsx)(k.ZP,{stopEditing:Y,mutation:function(){de({variables:{labels:ie,duration:te}})},mutationButton:C("address.renew.confirmButton"),confirm:!0,isValid:V(n),extraDataComponent:(0,D.jsxs)(G,{children:[C("address.renew.confirm.0"),"\n",(0,D.jsx)("ul",{children:n.map((function(e){return(0,D.jsx)("li",{children:e})}))}),C("address.renew.confirm.1"),C("address.renew.year",{count:Q})]})})]})]})})})]})}}}]);
//# sourceMappingURL=794.8993911e-c8225.chunk.js.map