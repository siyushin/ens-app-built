(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[952],{61809:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return it}});var n=a(50390),r=a(35531),i=a(23430),s=a(18489),c=a(17186),d=a(28003),o=a(89743),l=a(2479),f=a(60048),u=a(48114),b=a(60606),p=a.n(b),g=a(63926),m=a(3038),x=a(41149),h=a(86816),v=a(54642),y=a(62713),w=a(19840),Z=a(390),j=a(83473),P=a(87724),S=a(32765),k=a(90882),E=a(62559);var C=(0,S.Z)("div",{target:"e1g3qgee0"})({name:"1de598y",styles:"display:flex;padding:40px;flex-direction:column;justify-content:center;align-items:center;background:white;box-shadow:3px 4px 6px 0 rgba(229,236,241,0.3);border-radius:6px;margin-bottom:40px;h2{color:#adbbcd;font-weight:100;margin-bottom:0;padding:0;margin-top:20px;text-align:center;max-width:500px;}p{color:#2b2b2b;font-size:18px;font-weight:300;margin-top:20px;line-height:1.3em;text-align:center;max-width:400px;}"}),D=(0,S.Z)("div",{target:"e1g3qgee1"})({name:"18dxgig",styles:"margin-top:20px;padding-bottom:30px;padding-left:40px;padding-right:40px;"});function R(e){var t=e.favourites,a=void 0===t?[]:t,n=e.address,r=(e.activeSort,e.activeFilter),i=e.checkedBoxes,s=e.setCheckedBoxes,c=e.setSelectAll,d=e.domains,o=e.showBlockies;return d&&0!==d.length?(0,E.jsx)(D,{children:d.map((function(e){var t=a.map((function(e){return e.name})).includes(e.domain.name);return(0,E.jsx)(k.Z,{name:e.domain.name,owner:n,domain:e.domain,expiryDate:null===e||void 0===e?void 0:e.expiryDate,labelName:e.domain.labelName,labelhash:e.domain.labelhash,parent:e.domain.parent.name,checkedBoxes:"registrant"===r?i:null,setCheckedBoxes:"registrant"===r?s:null,setSelectAll:c,showBlockies:o,isFavourite:t,hasInvalidCharacter:e.hasInvalidCharacter},e.domain.name)}))}):(0,E.jsx)(C,{children:(0,E.jsx)("h2",{children:"This address does not own any domains"})})}var A=a(24794);var O=(0,S.Z)("ul",{target:"erbvqbe0"})({name:"1qf3335",styles:"grid-area:sorting;list-style:none;display:flex;margin:0;padding:0;"}),N=(0,S.Z)("li",{target:"erbvqbe1"})({name:"1vf3e2d",styles:"color:#adbbcd;font-size:18px;padding:0 10px 5px;border-bottom:1px #d2d2d2 solid;&:hover,&.active{cursor:pointer;color:#2c46a6;border-bottom:1px #2c46a6 solid;}"});function B(e){var t=e.activeSort,a=e.setActiveSort,n=e.activeFilter,r=e.className,i=(0,f.$)().t;return(0,E.jsx)(O,{className:r,children:"registrant"===n&&(0,E.jsx)(N,{className:"expiryDate"===t.type?"active":"",onClick:function(){t.type?"asc"===t.direction?a({type:"expiryDate",direction:"desc"}):"desc"===t.direction&&a({type:"expiryDate",direction:"asc"}):a({type:"expiryDate",direction:"asc"})},children:i("address.sort.expiry")})})}var T=(0,S.Z)("div",{target:"e11ohvir0"})("font-size:14px;background:",(function(e){return e.active?"#5384FE":"transparent"}),";color:",(function(e){return e.active?"white":"#D2D2D2"}),";transform:scale(",(function(e){return e.active?"1.02":"1"}),");transition:background 0.1s ease-out,transform 0.3s ease-out;padding:10px 30px;border-radius:90px;&:hover,&:visited{cursor:pointer;color:",(function(e){return e.active?"white":"#D2D2D2"}),";}"),_=(0,S.Z)("div",{target:"e11ohvir1"})({name:"1voqqod",styles:"display:inline-flex;justify-content:flex-start;border:1px solid #dfdfdf;border-radius:90px;"}),F=function(e){return(0,E.jsx)("div",{children:(0,E.jsx)(_,{children:e.children})})};function L(e){var t=e.activeFilter,a=(e.setActiveFilter,e.setActiveSort),n=e.className,r=e.url,i=(0,f.$)().t,s=(0,l.k6)(),c=function(e){var t=e.split("/");return 3===t.length?e:t.slice(0,-1).join("/")}(r);return(0,E.jsxs)(F,{className:n,children:[(0,E.jsx)(T,{active:"registrant"===t,onClick:function(){return s.push("".concat(c,"/registrant"))},children:i("address.filter.registrant")}),(0,E.jsx)(T,{active:"controller"===t,onClick:function(){s.push("".concat(c,"/controller")),a("alphabetical")},children:i("address.filter.controller")})]})}var q,I=a(58461),z=a(25082),V=a(66995),U=a(73379),H=a(33032),K=a(84322),M=a.n(K),W=a(69418),Q=a(6109),$=a(4224),G=a(31188);var Y=(0,S.Z)(Q.rU,{target:"ejarzu70"})((function(e){return e.currentPage===e.page&&"\n      text-decoration: underline;\n    "})," margin:0 5px;"),J=(0,S.Z)("div",{target:"ejarzu71"})("margin:0 20px 20px;",h.ZP.small(q||(q=(0,c.Z)(["\n    margin: 0 40px 20px;\n  "]))),""),X=(0,S.Z)("span",{target:"ejarzu72"})({name:"146q31f",styles:"float:right;"}),ee={container:function(e){return(0,s.Z)((0,s.Z)({},e),{},{display:"inline-block",width:"100px"})},control:function(e){return(0,s.Z)((0,s.Z)({},e),{},{backgroundColor:"white",textTransform:"lowercase",fontWeight:"700",fontSize:"12px",color:"#2B2B2B",letterSpacing:"0.5px"})},option:function(e,t){t.data;var a=t.isDisabled,n=(t.isFocused,t.isSelected);return(0,s.Z)((0,s.Z)({},e),{},{backgroundColor:"white",textTransform:"lowercase",fontWeight:n?700:500,fontSize:"12px",letterSpacing:"0.5px",color:a?"#ccc":n?"black":"#666",cursor:a?"not-allowed":"default"})},input:function(e){return(0,s.Z)({},e)},placeholder:function(e){return(0,s.Z)({},e)},singleValue:function(e,t){t.data;return(0,s.Z)({},e)}},te=[{value:25,label:25},{value:50,label:50},{value:100,label:100},{value:200,label:200},{value:300,label:300}];function ae(e){var t=e.page,a=e.pageLink,n=e.currentPage;return(0,E.jsx)(Y,{currentPage:n,page:t,to:"".concat(a,"?page=").concat(t),children:t})}function ne(e){var t=e.currentPage,a=e.setResultsPerPage,c=e.resultsPerPage,d=e.query,o=e.variables,l=e.pageLink,f=function(e){var t=e.resultsPerPage,a=e.query,r=e.variables,c=(0,n.useState)(!0),d=(0,i.Z)(c,2),o=d[0],l=d[1],f=(0,n.useState)(0),u=(0,i.Z)(f,2),b=u[0],p=u[1],g=(0,W.Z)(),m=(0,G.$Z)(a),x=["getRegistrations","getDomains"];return(0,n.useEffect)((function(){function e(){return e=(0,H.Z)(M().mark((function e(t){var n,i,c,d;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){return c=(0,H.Z)(M().mark((function e(c){var d,o,l,f,u,b,p,x;return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.query({query:a,variables:(0,s.Z)((0,s.Z)({},r),{},{skip:n,first:t})});case 2:if(d=e.sent,o=d.data,l=0,"getRegistrations"===m&&(l=(null===(f=o.account)||void 0===f||null===(u=f.registrations)||void 0===u?void 0:u.length)||0),"getDomains"===m&&(l=(null===(b=o.account)||void 0===b||null===(p=b.domains)||void 0===p?void 0:p.length)||0),n+=t,x=c+l,l!==t){e.next=11;break}return e.abrupt("return",i(x));case 11:return e.abrupt("return",x);case 12:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)},i=function(e){return c.apply(this,arguments)},n=0,e.next=5,i(0);case 5:return d=e.sent,e.abrupt("return",d);case 7:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}x.includes(m)?function(t){return e.apply(this,arguments)}(1e3).then((function(e){p(e),l(!1)})):(p(0),l(!1))}),[g,a,r]),{totalPages:Math.ceil(b/t),loading:o}}({setResultsPerPage:a,resultsPerPage:c,variables:o,query:d}),u=f.totalPages;if(u<2)return null;var b=(0,r.Z)(Array(u).keys()).map((function(e){return(0,E.jsx)(ae,{currentPage:t,page:e+1,pageLink:l})}));return(0,E.jsxs)(J,{children:[b,(0,E.jsxs)(X,{children:["Show"," ",(0,E.jsx)($.ZP,{defaultValue:te.filter((function(e){return e.value===c})),styles:ee,menuPlacement:"top",onChange:function(e){a(e.value)},options:te})," ","Records"]})]})}var re,ie=a(40835),se=a.n(ie),ce=a(83574),de=a(15130),oe=a(74287),le=a(1566),fe=a(5537),ue=["title","titleId"];function be(){return be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},be.apply(this,arguments)}function pe(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ge(e,t){var a=e.title,r=e.titleId,i=pe(e,ue);return n.createElement("svg",be({width:16,height:16,xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},i),a?n.createElement("title",{id:r},a):null,re||(re=n.createElement("path",{d:"M8 16c-4.4183 0-8-3.5817-8-8s3.5817-8 8-8 8 3.5817 8 8-3.5817 8-8 8zm3.0039-10L7.2996 9.2514 4.9961 7.2295 4 8.1038 7.2996 11 12 6.8743 11.0039 6z",fill:"#ADBBCD",fillRule:"evenodd"})))}var me,xe,he=n.forwardRef(ge),ve=(a.p,a(59528)),ye=a(34693),we=a(71186),Ze=(0,S.Z)("div",{target:"e855f4x0"})("width:100%;height:",(function(e){return 4*(e.size||1)}),"px;"),je=a(68476);var Pe=(0,S.Z)("span",{target:"e1205crw0"})({name:"1nhmhwf",styles:"color:#adbbcd;"}),Se=(0,S.Z)("div",{target:"e1205crw1"})({name:"1j87prn",styles:"color:#f5a623;"}),ke=(0,S.Z)("div",{target:"e1205crw2"})("background:#f0f6fa;border:1px solid #ededed;border-radius:8px;margin:20px 30px 20px;padding:10px 15px;",h.ZP.medium(me||(me=(0,c.Z)(["\n    margin: 20px 40px 20px;\n  "]))),""),Ee=(0,S.Z)("div",{target:"e1205crw3"})({name:"rmcela",styles:"margin-top:15px;padding:10px;"}),Ce=(0,S.Z)("div",{target:"e1205crw4"})("font-family:Overpass Mono;font-weight:700;font-size:14px;color:",(function(e){return e.nameSet?"#747f8c":"#adbbcd"}),";letter-spacing:0;display:flex;align-items:center;justify-content:space-between;&:hover{cursor:",(function(e){return e.pending?"default":"pointer"}),";}"),De=(0,S.Z)(Ce,{target:"e1205crw5"})({name:"1xp4bos",styles:"&:hover{cursor:default;}"}),Re=(0,S.Z)("div",{target:"e1205crw6"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),Ae=(0,S.Z)(he,{target:"e1205crw7"})("margin-right: 10px;\n  flex-shrink: 0;\n",";"),Oe=(0,S.Z)("div",{target:"e1205crw8"})({name:"1dxm78v",styles:"font-family:Overpass;font-weight:300;font-size:14px;color:#2b2b2b;letter-spacing:0;line-height:25px;margin-bottom:10px;max-width:768px;hyphens:auto;"}),Ne=(0,S.Z)("div",{target:"e1205crw9"})({name:"273lky",styles:"color:#5384fe;"}),Be=(0,S.Z)("div",{target:"e1205crw10"})({name:"1j20cn4",styles:"display:flex;flex-direction:row-reverse;justify-content:space-between;align-items:center;"}),Te=(0,je.Ps)(xe||(xe=(0,c.Z)(["\n  query singleNameQuery @client {\n    isENSReady\n    networkId\n  }\n"])));var _e=function(e){var t,a=e.account,r=e.currentAddress,s=(0,f.$)().t,c=(0,oe.Y7)(),d=c.state,l=c.actions,b=(0,n.useState)(""),p=(0,i.Z)(b,2),g=p[0],h=p[1],v=(0,n.useState)(!1),y=(0,i.Z)(v,2),w=y[0],Z=y[1],P=d.editing,S=d.txHash,k=d.pending,C=d.confirmed,D=l.startEditing,R=l.stopEditing,A=l.startPending,O=l.setConfirmed,N=(0,o.a)(m.PQ,{variables:{address:r},skip:!r,fetchPolicy:"no-cache"}),B=N.data,T=(B=void 0===B?{}:B).getReverseRecord,_=N.loading,F=N.refetch,L=(0,ce.D)(de.Ii,{onCompleted:function(e){Object.values(e)[0]&&A(Object.values(e)[0])}}),q=(0,i.Z)(L,1)[0];(0,n.useEffect)((function(){T&&((0,j.Zf)(T)||D())}),[_]);var I=(0,o.a)(Te).data.networkId;console.log("networkId: ",I);var z=(0,o.a)(m.Xh,{variables:{address:r},fetchPolicy:"no-cache",context:{queryDeduplication:!1}}),V=z.data,U=(V=void 0===V?{}:V).domains,H=z.refetch;(0,n.useEffect)((function(){H()}),[a,r,I]);var K=a&&r&&a.toLowerCase()===r.toLowerCase();function M(e){e&&e.label?h(e):h("")}function W(){var e;return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(Ce,{onClick:function(e){return P?R():k?e.preventDefault():D()},pending:k,nameSet:(0,j.Zf)(T),children:[(0,j.Zf)(T)?(0,E.jsxs)(Re,{"data-testid":"editable-reverse-record-set",children:[(0,E.jsx)(Ae,{}),s("singleName.record.messages.setTo")+T.name]}):(0,E.jsx)(Ne,{"data-testid":"editable-reverse-record-not-set",children:s("singleName.record.messages.notSet")}),k&&!C&&S?(0,E.jsx)(fe.Z,{txHash:S,onConfirmed:function(){O(),F()}}):(0,E.jsx)(ve.Z,{rotated:P?1:0,testid:"open-reverse"})]}),P&&(0,E.jsxs)(Ee,{children:[(0,E.jsx)(Oe,{children:(0,E.jsxs)(u.c,{i18nKey:"singleName.record.messages.explanation",children:["The Reverse Resolution translates an address into a name. It allows Dapps to show in their interfaces '",{name:(0,j.Zf)(T)&&T.name||"example.eth"},"' rather than the long address '",{account:a},"'. If you would like to set up your reverse for a different account, please switch accounts in your dapp browser."]})}),(null===(e=t)||void 0===e?void 0:e.length)>0?(0,E.jsx)($.ZP,{placeholder:s("singleName.record.messages.selectPlaceholder"),isClearable:!0,value:g,onChange:M,options:t}):(0,E.jsx)(Se,{children:s("singleName.record.messages.noForwardRecordAavilable")}),(0,E.jsx)(Oe,{children:(0,E.jsx)("p",{children:(0,E.jsx)(u.c,{i18nKey:"singleName.record.messages.explanation2",children:"You can only select names you set this Ethereum Address as."})})}),(0,E.jsxs)(Be,{children:[(0,E.jsx)(le.ZP,{mutation:function(){q({variables:{name:null===g||void 0===g?void 0:g.value}})},stopEditing:R,isValid:!!g}),(0,j.Zf)(T)&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(we.Z,{onClick:function(){return Z(!0)}}),w&&(0,E.jsxs)(ye.Z,{closeModal:function(){return Z(!1)},children:[s("singleName.record.messages.reverseRecordRemoval"),(0,E.jsx)(Ze,{size:5}),(0,E.jsx)(le.ZP,{mutation:function(){q({variables:{name:j.VM}}),Z(!1)},stopEditing:function(e){R(e),Z(!1)},isValid:!0})]})]})]})]})]})}return U&&(t=se()(U.map((function(e){if((0,x.y5)(null===e||void 0===e?void 0:e.name))return null===e||void 0===e?void 0:e.name;var t=(0,x.M0)(null===e||void 0===e?void 0:e.name);return(0,x.y5)(t)?t:null})).filter((function(e){return!!e})).sort()).map((function(e){return{value:e,label:e}}))),(0,E.jsx)(ke,{children:_?(0,E.jsx)(Pe,{children:"Loading reverse record..."}):(0,E.jsx)(E.Fragment,{children:K?(0,E.jsx)(W,{}):(0,E.jsx)(De,{children:(0,j.Zf)(T)?(0,E.jsx)(Re,{"data-testid":"readonly-reverse-record-set",children:s("singleName.record.messages.setTo")+T.name}):(0,E.jsx)("div",{"data-testid":"readonly-reverse-record-not-set",children:s("singleName.record.messages.notSet")})})})})},Fe=a(34242),Le=a(62279);var qe,Ie,ze,Ve,Ue,He,Ke,Me,We,Qe=a.p+"static/media/close.beb5c5f4194c25917e82b7273bf418e6.svg",$e=a(10996),Ge=a(34690),Ye=(0,d.default)(y.Z)(qe||(qe=(0,c.Z)(["\n  justify-content: flex-start;\n  margin-bottom: 40px;\n"]))),Je=(0,d.default)(w.D)(Ie||(Ie=(0,c.Z)(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),Xe=(0,d.default)(Z.Z)(ze||(ze=(0,c.Z)(["\n  min-width: 165px;\n  margin-left: auto;\n"]))),et=(0,d.default)("img")(Ve||(Ve=(0,c.Z)(["\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  &:hover {\n    cursor: pointer;\n  }\n"]))),tt=(0,d.default)("div")(Ue||(Ue=(0,c.Z)(["\n  padding-left: 8px;\n  display: grid;\n  align-content: center;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto;\n  grid-template-areas:\n    'filters'\n    'actions'\n    'renew'\n    'sorting'\n    'selectall';\n  grid-gap: 20px 10px;\n  margin: 20px;\n\n  ","\n"])),h.ZP.large(He||(He=(0,c.Z)(["\n    margin: 20px 30px;\n    grid-template-columns: 1fr 1fr;\n    grid-template-areas:\n    'filters actions'\n    'renew renew'\n    'sorting selectall'\n    ;\n  "])))),at=(0,d.default)("div")(Ke||(Ke=(0,c.Z)(["\n  grid-area: selectall;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 40px;\n\n  ","\n"])),h.ZP.large(Me||(Me=(0,c.Z)(["\n    padding-right: 10px;\n  "]))));var nt=(0,je.Ps)(We||(We=(0,c.Z)(["\n  query resetStateQuery @client {\n    networkId\n    isENSReady\n  }\n"])));var rt=function(e){var t,a,c=e.url,d=e.address,b=e.showOriginBanner,h=e.domainType,y=void 0===h?"registrant":h,w=(0,o.a)(nt).data,Z=w.networkId,S=w.isENSReady,k=function(e){return e.toLowerCase()}(d),C=(0,l.TH)().search,D=(0,g.m)(),O=new URLSearchParams(C).get("page"),N=O?parseInt(O):1,T=(0,oe.rL)().block,_=(0,n.useState)(25),F=(0,i.Z)(_,2),q=F[0],H=F[1],K=(0,f.$)().t,M=(0,n.useState)(!0),W=(0,i.Z)(M,2),Q=W[0],$=W[1],G=(0,n.useState)(null),Y=(0,i.Z)(G,2),J=Y[0],X=Y[1],ee=(0,n.useState)({type:"expiryDate",direction:"asc"}),te=(0,i.Z)(ee,2),ae=te[0],re=te[1],ie=(0,n.useState)({}),se=(0,i.Z)(ie,2),ce=se[0],de=se[1],le=(0,n.useState)(1),fe=(0,i.Z)(le,2),ue=fe[0],be=fe[1],pe=(0,n.useState)(!1),ge=(0,i.Z)(pe,2),me=ge[0],xe=ge[1];!function(e,t,a,r,i,c){(0,n.useEffect)((function(){e(1),t({}),a(null),c((0,s.Z)((0,s.Z)({},c()),{},{invalidCharacter:null}))}),[r,i])}(be,de,xe,Z,d,$e.VU),"local"==={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_ENS_ADDRESS:"0xd7d6d99C78E873C7E4CDe2DF57CAcBbeb6b10a54",REACT_APP_LABELS:'{"dec08c9dbbdd0890e300eb5062089b2d4b1c40e3673bbccb5423f7b37dcf9a9c":"reverse","e5e14487b78f85faa6e1808e89246cf57dd34831548ff2e6097380d98db2504a":"addr","4f5b812789fc606be1b3b16908db13fc7a9adf7ca72641f84d75b47069d3d7f0":"eth","f624eb562791474580864ad157f0fe32aa651ed0e7d6fe13189842cfc8198458":"sub3","f68dcec07df6647e9c397b99a3c2441a1cf50d322c5c2a736c41ab0bae4f13ff":"newname","329539a1d23af1810c48a07fe7fc66a3b34fbc8b37e9b3cdb97bb88ceab7e4bf":"resolver","407b932847e457186bd5a893f802e89dfe7b9e49eea23223d509b0d114b7e36a":"oldresolver","d17d1d80d5d7a434b56ee59bc2ed8f0fd2a890dfba40fc63344b9c3654c935ee":"awesome","fefba903cea48da1ba4a20976599843013d6ca515d5a2fab61814b11dd05d36b":"superawesome","f576d1b49f119f20fd8646a7724a6d058f486bb99891fcb1141e3a9c00fc1e8e":"notsoawesome","f4cc95a0790ee9327c5065304022ddc22c44ebf6cffaeef30cb48d4a7e207474":"abittooawesome","41f89d892f2b2b7fdf2efd0a817aff9a9b4275b9434297479394274964f8d45a":"abittooawesome2","45d851f88f1c01b2a4a7dd2b5e7c10c1f061dff6f285319757433d5bcb741aed":"abittooawesome3","03bd642dd09510c5661d684107f8c8616af5a619c17a899a90b36056efa59411":"subdomaindummy","fc6dcb69526bf105fd857674d55049e3b6aef679e9117282507614067a84dbac":"contractdomain","8f54f1c2d0eb5771cd5bf67a6689fcd6eed9444d91a39e5ef32a9b4ae5ca14ff":"data","5cee339e13375638553bdf5a6e36ba80fb9f6a4f0783680884d92b558aa471da":"ens","767f8dcb0bcb57795d10eef140bdcbbbcc089aa6c9d1221d04127bd38905aa87":"otherowner","c0603d17956fe886ec735163e0b019593e0e9921ccfa788a69e2a069de0c4595":"notmigrated","a1e88fc092423bff23900aa3a6d8db1e4cf13228561f14764bcd089c587070dc":"sub1","b2fd3233fdc544d81e84c93822934ddd9b599f056b6a7f84f4de29378bf1cb15":"sub2","37d3424576bafb5fd5f9f8e99478f66780477fcd8d71cb2319b37a64a01640db":"a1","56773bde08d43e305df1de2eaa58b9323bbe0ccb442f5edc6d0f50ca466ebe53":"sub4","9c22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb658":"test","1aec93acbd3f1d0a515b321723882698e1dbb4c89ed84e2fec76c3a88d42f806":"auctioned2","7d4dd3db9a9abb7a62ddfdce38811ecdcb175c4a953532fd4f88fca7768e919f":"auctioned3","8cfce3846b2a51b94d2cc5646dc3b6249f78c82e2441b3d32e2a1e6feb93ee49":"original","47b91093e945c89d01efb651b756105e6c697c2c305ed3e2138fdc521fc3d0ab":"postmigration","6fd43e7cffc31bb581d7421c8698e29aa2bd8e7186a394b85299908b4eb9b175":"example","739ee990325b60863caba9105f16a8c6864753da6698b1209c42222805be2ef2":"threedayspast","52d78f6d73a669a63b64dc6e361537d03ac9931f6c7b686e1ff262b7eb0b117d":"released","59ac3adf2d5c95e18b0281848ab391c2034584ca7d86f573125db0eb65c4d39b":"rele","b47328ab6c12b5d9466649bf2403af6b68bf190870be79a43ce82bd6bfc139a1":"rel","289996c4a4b61866773ecdf1cd1c0eea40e581b4fa0bc325de44e35abc243f54":"onedaypremium","d3f9d8afa22252fe9d51e89b7ff2864c8f2de91a5ca28d675054e0581ada9ce0":"halfdaypremium","9cf00a312e19f4447db8aea13a531221fe2de6af596d050faf2eedc5a8a04655":"justreleased"}',REACT_APP_DEPRECATED_RESOLVERS:"0x02363b9BDf4d8E3Bb7de7f4811Da38EBD3048325,0xd52051c7982799f628B273Aa92cf7E7Eead60121",REACT_APP_OLD_CONTENT_RESOLVERS:"0xd52051c7982799f628B273Aa92cf7E7Eead60121",REACT_APP_GRAPH_NODE_URI:"http://localhost:8000/subgraphs/name/graphprotocol/ens"}.REACT_APP_STAGE?T&&(t=p()(1e3*T.timestamp)):t=p()(),t&&(a=t.subtract(90,"days").unix());var he=function(e){var t=e.resultsPerPage,a=e.domainType,n=e.address,r=e.sort,i=e.page,s=e.expiryDate,c=(i-1)*t,d=(0,o.a)(m.OI,{variables:{id:n,first:t,skip:c,orderBy:r.type,orderDirection:r.direction,expiryDate:s},skip:"registrant"!==a,fetchPolicy:"no-cache"}),l=(0,o.a)(m.bp,{variables:{id:n,first:t,skip:c},skip:"controller"!==a,fetchPolicy:"no-cache"});if("registrant"===a)return d;if("controller"===a)return l;throw new Error("Unrecognised domainType")}({resultsPerPage:q,domainType:y,address:k,sort:ae,page:N,expiryDate:a}),ve=he.loading,ye=he.data,we=he.error,Ze=he.refetch,je=(0,o.a)(m.Cg).data.globalError,Pe=(0,o.a)(m.iG).data,Se=(Pe=void 0===Pe?[]:Pe).favourites;if((0,n.useEffect)((function(){S&&(0,j.sQ)().then(X)}),[S]),we)return console.log(we),(0,E.jsxs)(E.Fragment,{children:["Error getting domains. ",JSON.stringify(we)]});if(ve)return(0,E.jsx)(I.Z,{withWrap:!0,large:!0});var ke=[];"registrant"===y&&ye.account?ke=(0,r.Z)(ye.account.registrations):"controller"===y&&ye.account&&(ke=(0,r.Z)(function(e){return e.filter((function(e){return e.parent}))}(ye.account.domains).map((function(e){return{domain:e}}))));var Ee=(0,j.lO)(function(e){return e.map((function(e){var t=(0,x.M0)(e.domain.name);return(0,s.Z)((0,s.Z)({},e),{},{domain:(0,s.Z)((0,s.Z)({},e.domain),{},{name:t,labelName:(0,x.y5)(t[0])?t.split(".")[0]:null})})}))}(ke),"labelName",!0);if(je.invalidCharacter||!Ee)return(0,E.jsx)(Fe.cZ,{message:je.invalidCharacter});var Ce=Ee,De=Object.entries(ce).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1]})).map((function(e){return(0,i.Z)(e,1)[0]})),Re=Ce.filter((function(e){return e.domain.labelName})).map((function(e){return e.domain.name})),Ae=!!Ce.find((function(e){return(0,P.on)(e.expiryDate)}));return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Ge.JF,{children:(0,E.jsx)(Ge.Qx,{})}),b&&Q&&(0,E.jsxs)(z.Z,{children:[(0,E.jsx)(et,{onClick:function(){return $(!1)},src:Qe}),K("address.transactionBanner")]}),Ae&&(0,E.jsx)(z.Z,{children:(0,E.jsxs)("h3",{children:[(0,E.jsx)("img",{alt:"exclamation mark",src:Le.Z}),"\xa0 ",K("address.namesExpiringSoonBanner.title"),(0,E.jsx)("p",{children:(0,E.jsx)(u.c,{i18nKey:"address.namesExpiringSoonBanner.text",children:'One or more names are expiring soon, renew them all in one transaction by selecting multiple names and click "Renew"'})})]})}),(0,E.jsxs)(v.Z,{children:[(0,E.jsxs)(Ye,{children:[(0,E.jsx)(U.K,{address:d}),(0,E.jsx)(Je,{children:d}),J&&(0,E.jsx)(Xe,{address:d,children:K("address.etherscanButton")})]}),(0,E.jsx)(_e,{account:D,currentAddress:d}),(0,E.jsxs)(tt,{children:[(0,E.jsx)(L,{activeFilter:y,setActiveSort:re,url:c}),"registrant"===y&&(0,E.jsx)(A.Z,{years:ue,setYears:be,activeFilter:y,selectedNames:De,setCheckedBoxes:de,setSelectAll:xe,allNames:Re,address:d,data:ye,refetch:Ze,getterString:"account.registrations"}),(0,E.jsx)(B,{activeSort:ae,setActiveSort:re,activeFilter:y}),"registrant"===y&&(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(at,{children:(0,E.jsx)(V.Z,{testid:"checkbox-renewall",type:"double",checked:me,onClick:function(){me?de({}):function(){var e=Re.reduce((function(e,t){return e[t]=!0,e}),{});de(e)}(),xe((function(e){return!e}))}})})})]}),(0,E.jsx)(R,{setSelectAll:xe,address:d,domains:Ce,favourites:(0,j.lO)(Se,"labelName"),activeSort:ae,activeFilter:y,checkedBoxes:ce,setCheckedBoxes:de,showBlockies:!1}),(0,E.jsx)(ne,{variables:{id:d,expiryDate:a},currentPage:N,resultsPerPage:q,setResultsPerPage:H,pageLink:"/address/".concat(d,"/").concat(y),query:"registrant"===y?m.OI:m.bp})]})]})},it=function(e){var t,a,n=e.match,r=e.location,i=n.params.address.toLowerCase(),s=null===(t=n.params.domainType)||void 0===t?void 0:t.toLowerCase(),c=new URLSearchParams(r.search);return(0,E.jsx)(rt,{url:(a=r.pathname,a.endsWith("/")?a.slice(0,-1):a),address:i,domainType:s,showOriginBanner:"renew"===c.get("origin")})}},55104:function(e,t,a){var n=a(72489),r=a(3246),i=a(73923),s=a(1273),c=a(92075),d=a(45732);e.exports=function(e,t,a){var o=-1,l=r,f=e.length,u=!0,b=[],p=b;if(a)u=!1,l=i;else if(f>=200){var g=t?null:c(e);if(g)return d(g);u=!1,l=s,p=new n}else p=t?[]:b;e:for(;++o<f;){var m=e[o],x=t?t(m):m;if(m=a||0!==m?m:0,u&&x===x){for(var h=p.length;h--;)if(p[h]===x)continue e;t&&p.push(x),b.push(m)}else l(p,x,a)||(p!==b&&p.push(x),b.push(m))}return b}},92075:function(e,t,a){var n=a(21663),r=a(79930),i=a(45732),s=n&&1/i(new n([,-0]))[1]==1/0?function(e){return new n(e)}:r;e.exports=s},40835:function(e,t,a){var n=a(55104);e.exports=function(e){return e&&e.length?n(e):[]}}}]);
//# sourceMappingURL=Address.8d60c3cb-2f2c4.chunk.js.map