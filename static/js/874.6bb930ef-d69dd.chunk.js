"use strict";(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[874],{41874:function(e,t,a){var n,i,r=a(36222),s=a(18489),o=a(17186),c=a(32765),d=(a(50390),a(6109)),l=a(60048),p=a(86816),m=a(93642),x=a(63926),u=a(1852),g=a(58461),h=a(83473),f=a(66995),b=a(12993),v=a(62559);var w=(0,c.Z)("div",{target:"e1736otp0"})({name:"1522hk",styles:"margin:5px;"}),k=(0,c.Z)("div",{target:"e1736otp1"})("&:before{content:'';background:",(function(e){if(e.hasInvalidCharacter)return"black";switch(e.state){case"Yours":return"#52E5FF";case"Open":return"#42E068";case"Auction":case"Reveal":return"linear-gradient(-180deg, #42E068 0%, #52E5FF 100%)";case"Owned":return"#CACACA";case"Forbidden":return"black";default:return"red"}}),";width:4px;height:100%;position:absolute;left:0;top:0;z-index:10;}position:relative;background-color:white;border-radius:6px;box-shadow:3px 4px 20px 0 rgba(144,171,191,0.42);padding:",(function(e){return e.hasInvalidCharacter?"20":"0"}),"px;padding-left:0px;"),j=(0,c.Z)(d.rU,{target:"e1736otp2"})("padding:20px;color:#2b2b2b;overflow:hidden;position:relative;background:",(function(e){var t=e.percentDone;return t?"\n  linear-gradient(to right, rgba(128, 255, 128, 0.1) 0%, rgba(82,229,255, 0.1) ".concat(t,"%,#ffffff ").concat(t,"%)"):"white"}),";height:65px;display:grid;height:auto;grid-template-columns:1fr;grid-gap:10px;align-items:center;font-size:22px;margin-bottom:4px;transition:0.2s all;border-radius:6px;",p.ZP.medium(n||(n=(0,o.Z)(["\n    grid-template-columns: 1fr minmax(150px,350px) 100px 50px 50px;\n    grid-template-rows: 39px;\n  "])))," color:#2b2b2b;z-index:1;.label-container{display:flex;}&:visited{color:#2b2b2b;}"),Z=(0,c.Z)("div",{target:"e1736otp3"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),y=(0,c.Z)("h2",{target:"e1736otp4"})("font-size:18px;font-weight:100;",p.ZP.medium(i||(i=(0,o.Z)(["\n    font-size: 28px;\n  "])))," color:",(function(e){return e.state,"#2b2b2b"}),";"),C=(0,c.Z)("div",{target:"e1736otp5"})({name:"11a5vjb",styles:"margin-right:20px;font-size:16px;color:#ccd4da;display:none;align-items:center;"}),D=(0,c.Z)("div",{target:"e1736otp6"})(""),N=function(e){var t,a=e.domain,n=e.isOwner,i=(0,l.$)().t;switch(a.state){case"Open":t=i("singleName.domain.state.available");break;case"Auction":t=i("singleName.domain.state.auction");break;case"Owned":t=i("singleName.domain.state.owned");break;default:t=i("singleName.domain.state.default")}return n&&(t=i("singleName.domain.state.owned")),(0,v.jsx)(C,{className:"label-container",children:(0,v.jsx)(D,{children:t})})},z=(0,c.Z)("img",{target:"e1736otp7"})({name:"krde0g",styles:"width:16px;height:16px;margin-bottom:4px;margin-right:4px;"}),F=(0,c.Z)("div",{target:"e1736otp8"})({name:"52og9f",styles:"font-size:16px;display:flex;background-color:white;margin-top:-10px;margin-left:2px;align-items:center;justify-content:flex-start;color:black;font-weight:100;padding:10px 0px 10px 20px;& a:hover{color:#2c46a6;}"});t.Z=function(e){var t=e.domain,a=e.isSubDomain,n=e.className,i=e.isFavourite,o=e.loading,c=e.checkedBoxes,d=void 0===c?{}:c,l=e.setCheckedBoxes,p=e.setSelectAll,C=e.hasInvalidCharacter;if(o)return(0,v.jsx)(j,{state:"Owned",className:n,to:"",children:(0,v.jsx)(g.Z,{})});var D=(0,x.m)(),O=!1;!t.available&&t.owner&&0!==parseInt(t.owner,16)&&(O=D&&t.owner&&t.owner.toLowerCase()===D.toLowerCase());var A=t.expiryDate;return t.expiryTime&&(A=parseInt(t.expiryTime.getTime()/1e3)),(0,v.jsxs)(k,{state:O?"Yours":t.state,hasInvalidCharacter:C,children:[C&&(0,v.jsxs)(F,{children:[(0,v.jsx)(z,{src:b.Z,onClick:function(e){return e.preventDefault()}}),(0,v.jsxs)("span",{children:[(0,v.jsxs)("span",{onClick:function(e){return e.preventDefault()},children:["This name is invalid."," "]}),(0,v.jsx)("a",{href:"https://docs.ens.domains/frequently-asked-questions#what-about-foreign-characters-what-about-upper-case-letters-is-any-unicode-character-valid",children:"Learn more"})]})]}),(0,v.jsxs)(j,{to:"/name/".concat(t.name),className:n,percentDone:0,"data-testid":"domain-".concat(t.name),children:[(0,v.jsx)(y,{state:O?"Yours":t.state,children:(0,h.HT)(t.name)}),(0,v.jsx)(u.Z,{expiryDate:A,name:t.name}),!C&&(0,v.jsx)(N,{domain:t,isOwner:O}),(0,v.jsx)(Z,{children:(0,v.jsx)(m.Z,{domain:t,isSubDomain:a,isFavourite:i})}),(0,v.jsx)(Z,{children:A&&(0,v.jsx)(w,{children:(0,v.jsx)(f.Z,{testid:"checkbox-".concat(t.name),checked:d[t.name],onClick:function(e){e.preventDefault(),l&&l((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,r.Z)({},t.name,!e[t.name]))})),d[t.name]&&p(!1)}})})})]})]})}}}]);
//# sourceMappingURL=874.6bb930ef-d69dd.chunk.js.map