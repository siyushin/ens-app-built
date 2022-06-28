"use strict";(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[433],{93642:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(23430),i=t(17186),r=t(32765),o=(t(50390),t(83574)),c=t(68476),s=t(35531),d=(t(84322),t(10996)),u=(t(98687),t(53176),t(40690),t(24978),t(62559)),l=(0,r.Z)("svg",{target:"ega1tsj0"})("vertical-align:middle;path{fill:",(function(e){return e.active?"#C7D3E3":"none"}),";stroke:",(function(e){return e.active?"#C7D3E3":"E7E7E7"}),";transition:0.2s ease-in;}&:hover{path{fill:#c7d3e3;stroke:#c7d3e3;}}"),f=function(e){var n=e.active,t=e.className;return(0,u.jsx)(l,{width:"25",height:"24",className:t,active:n,children:(0,u.jsx)("path",{d:"M10.555 2.695C8.47.436 5.123.437 3.038 2.695l-.2.216c-2.45 2.654-2.45 6.991-.001 9.644l9.62 10.42c.03.034.054.034.086 0l9.619-10.42c2.451-2.654 2.45-6.988-.002-9.644l-.2-.216c-2.086-2.26-5.43-2.26-7.517 0l-.817.884a1.525 1.525 0 0 1-2.253 0l-.818-.884z",stroke:"#E7E7E7",strokeWidth:"2",fill:"none",fillRule:"evenodd"})})};var m,v,p,h,x=(0,r.Z)("svg",{target:"eyzzej0"})({name:"1gb2iyt",styles:"vertical-align:middle;path{fill:#c7d3e3;stroke:#c7d3e3;transition:0.2s ease-out;}&:hover{path{fill:none;stroke:#e7e7e7;}}"}),g=function(e){var n=e.active,t=e.className;return(0,u.jsx)(x,{width:"25",height:"24",active:n,className:t,children:(0,u.jsx)("path",{d:"M10.555 2.695C8.47.436 5.123.437 3.038 2.695l-.2.216c-2.45 2.654-2.45 6.991-.001 9.644l9.62 10.42c.03.034.054.034.086 0l9.619-10.42c2.451-2.654 2.45-6.988-.002-9.644l-.2-.216c-2.086-2.26-5.43-2.26-7.517 0l-.817.884a1.525 1.525 0 0 1-2.253 0l-.818-.884z",stroke:"#E7E7E7",strokeWidth:"2",fill:"none",fillRule:"evenodd"})})};var w=(0,r.Z)(g,{target:"epvce7y0"})({name:"1p3qk0r",styles:"&:hover{cursor:pointer;}"}),j=(0,r.Z)(f,{target:"epvce7y1"})({name:"1p3qk0r",styles:"&:hover{cursor:pointer;}"}),D=(0,c.Ps)(m||(m=(0,i.Z)(["\n  mutation AddFavouriteMutation($domain: Domain) {\n    addFavourite(domain: $domain) @client\n  }\n"]))),y=(0,c.Ps)(v||(v=(0,i.Z)(["\n  mutation AddSubDomainFavourite($domain: Domain) {\n    addSubDomainFavourite(domain: $domain) @client\n  }\n"]))),Z=(0,c.Ps)(p||(p=(0,i.Z)(["\n  mutation DeleteFavouriteMutation($domain: Domain) {\n    deleteFavourite(domain: $domain) @client\n  }\n"]))),b=(0,c.Ps)(h||(h=(0,i.Z)(["\n  mutation DeleteSubDomainFavourite($domain: Domain) {\n    deleteSubDomainFavourite(domain: $domain) @client\n  }\n"]))),k=(0,r.Z)("div",{target:"epvce7y2"})({name:"1g360fb",styles:"padding:5px;"}),N=function(e){var n=e.domain,t=e.isFavourite,i=e.isSubDomain,r=(0,o.D)(t?b:y,{variables:{domain:{name:n.name}}}),c=(0,a.Z)(r,1)[0],l=(0,o.D)(t?Z:D,{variables:{domain:{name:n.name}}}),f=(0,a.Z)(l,1)[0];return i?(0,u.jsx)(k,{"data-testid":"add-favorite",onClick:function(e){e.preventDefault(),t?function(e){var n=(0,d.jm)().filter((function(n){return n.name!==e.name}));window.localStorage.setItem("ensSubDomainFavourites",JSON.stringify(n))}(n):function(e){var n=[].concat((0,s.Z)((0,d.jm)()),[e]);window.localStorage.setItem("ensSubDomainFavourites",JSON.stringify(n)),(0,d.jm)(n)}(n),c()},children:t?(0,u.jsx)(w,{}):(0,u.jsx)(j,{})}):(0,u.jsx)(k,{"data-testid":"add-favorite",onClick:function(e){e.preventDefault(),t?function(e){var n=(0,d.dD)().filter((function(n){return n.name!==e.name}));window.localStorage.setItem("ensFavourites",JSON.stringify(n)),(0,d.dD)(n)}(n):function(e){var n=[].concat((0,s.Z)((0,d.dD)()),[e]);window.localStorage.setItem("ensFavourites",JSON.stringify(n)),(0,d.dD)(n)}(n),f()},children:t?(0,u.jsx)(w,{}):(0,u.jsx)(j,{})})}},1852:function(e,n,t){var a=t(32765),i=(t(50390),t(60048)),r=t(87724),o=t(62559),c=(0,a.Z)("p",{target:"erk1q1g0"})("font-size:18px;font-weight:100;color:",(function(e){return e.isExpiredSoon?"red":"#adbbcd"}),";");n.Z=function(e){var n,t,a,s,d,u,l,f=e.expiryDate,m=(e.domain,e.name),v=(0,i.$)().t,p=new Date;return f?(n=(0,r.on)(f),t=p>new Date(parseInt(1e3*f)),a=new Date(1e3*(parseInt(f)+r.Nu)),u=new Date(1e3*(parseInt(f)+r.Nu+r.Ru)),t?(s=!(d=p<a)&&p<u,d?l="".concat(v("singleName.expiry.gracePeriodEnds")," ").concat((0,r.p6)(a)):s&&(l=v("singleName.expiry.isUnderPremiumSale"))):l="".concat(v("c.expires")," ").concat((0,r.p6)(parseInt(1e3*f))),(0,o.jsx)(c,{"data-testid":"expiry-date-".concat(m),isExpiredSoon:n,children:l})):(0,o.jsx)("span",{children:"\xa0"})}},66995:function(e,n,t){t.d(n,{Z:function(){return v}});var a=t(23430),i=t(32765),r=t(50390),o=t(62559),c=function(e){return e.active?"#5284FF":"#B0BECF"},s=(0,i.Z)("div",{target:"e1qon68v0"})("display:flex;justify-content:center;align-items:center;height:23px;width:23px;border-radius:5px;border:2px solid ",c,";"),d=(0,i.Z)("div",{target:"e1qon68v1"})("display:flex;justify-content:center;align-items:center;height:20px;width:20px;border-radius:3px;box-shadow:0 0 0 2px ",c,",-5px -5px 0 0 white,-5px -5px 0 2px ",c,";"),u=(0,i.Z)("svg",{target:"e1qon68v2"})("margin-top:2px;path{fill:",c,";opacity:",(function(e){return e.active||e.hover?"1":"0"}),";}"),l=function(e){var n=e.active,t=e.className,a=e.hover;return(0,o.jsx)(s,{className:t,active:n,children:(0,o.jsx)(u,{width:"11",height:"8",xmlns:"http://www.w3.org/2000/svg",active:n,hover:a,children:(0,o.jsx)("path",{d:"M9.63 0L4.537 5.202 1.37 1.967 0 3.367 4.537 8 11 1.399z",fillRule:"evenodd"})})})},f=function(e){var n=e.active,t=e.className,a=e.hover;return(0,o.jsx)(d,{className:t,active:n,children:(0,o.jsx)(u,{width:"11",height:"8",xmlns:"http://www.w3.org/2000/svg",active:n,hover:a,children:(0,o.jsx)("path",{d:"M9.63 0L4.537 5.202 1.37 1.967 0 3.367 4.537 8 11 1.399z",fillRule:"evenodd"})})})};var m=(0,i.Z)("div",{target:"ejg6m870"})({name:"1kdw2nx",styles:"align-self:center;input{display:none;}label{font-size:22px;font-weight:200;color:#5f5f5f;text-transform:capitalize;display:flex;justify-content:flex-start;align-items:center;&:hover{cursor:pointer;}}"});var v=function(e){var n=e.className,t=e.onClick,i=e.checked,c=e.name,s=e.children,d=e.testid,u=e.type,v=void 0===u?"normal":u,p=(0,r.useState)(!1),h=(0,a.Z)(p,2),x=h[0],g=h[1];return(0,o.jsxs)(m,{"data-testid":d,className:n,onClick:t,children:[(0,o.jsxs)("label",{htmlFor:c,onMouseOver:function(){return g(!0)},onMouseOut:function(){return g(!1)},children:["double"===v?(0,o.jsx)(f,{active:!!i,hover:x}):(0,o.jsx)(l,{active:!!i,hover:x}),(0,o.jsx)("span",{children:s})]}),(0,o.jsx)("input",{type:"checkbox",name:c,checked:i,readOnly:!0})]})}},63926:function(e,n,t){t.d(n,{m:function(){return c}});var a,i=t(17186),r=t(89743),o=(0,t(68476).Ps)(a||(a=(0,i.Z)(["\n  query getAccounts @client {\n    accounts\n  }\n"])));function c(){var e=(0,r.a)(o).data.accounts;return e?e[0]:"0x0000000000000000000000000000000000000000"}},19840:function(e,n,t){t.d(n,{D:function(){return d},H2:function(){return s},HR:function(){return u}});var a,i,r=t(17186),o=t(32765),c=t(86816);var s=(0,o.Z)("h2",{target:"e5hqhaa0"})("font-size:18px;font-weight:200;color:#adbbcd;",c.ZP.medium(a||(a=(0,r.Z)(["\n    font-size: 22px;\n  "]))),""),d=(0,o.Z)("h2",{target:"e5hqhaa1"})("font-size:18px;font-weight:100;padding:0;margin:0;",c.ZP.medium(i||(i=(0,r.Z)(["\n    font-size: 28px;\n  "]))),""),u=(0,o.Z)("hr",{target:"e5hqhaa2"})({name:"s0gyhi",styles:"border:0;border-top:1px dashed #d3d3d3;background-color:#fff;margin-bottom:30px;margin-top:0;"})},87724:function(e,n,t){t.d(n,{Nu:function(){return r},Ru:function(){return o},dM:function(){return d},o6:function(){return u},on:function(){return s},p6:function(){return c}});var a=t(60606),i=t.n(a),r=7776e3,o=2419200;function c(e,n){var t=i()(e).format("YYYY.MM.DD");return n||(t=t+" at "+i()(e).format("HH:mm (UTCZ)")),t}function s(e){if(!e)return e;var n=(new Date).getTime();return(new Date(1e3*e).getTime()-n)/864e5<30}var d=31556952;function u(e){return parseInt(parseFloat(e)*d)}}}]);
//# sourceMappingURL=433.c0f859ec-42433.chunk.js.map