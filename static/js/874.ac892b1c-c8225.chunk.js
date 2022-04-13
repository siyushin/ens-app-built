"use strict";(self.webpackChunkens_app=self.webpackChunkens_app||[]).push([[874],{41874:function(e,a,t){var n,r,i=t(36222),s=t(18489),o=t(17186),c=t(32765),l=(t(50390),t(6109)),d=t(60048),p=t(86816),m=t(93642),x=t(63926),u=t(1852),g=t(58461),h=t(83473),f=t(66995),b=t(12993),v=t(62559);var w=(0,c.Z)("div",{target:"e1736otp0"})({name:"1522hk",styles:"margin:5px;"}),k=(0,c.Z)("div",{target:"e1736otp1"})("&:before{content:'';background:",(function(e){if(e.hasInvalidCharacter)return"black";switch(e.state){case"Yours":return"#52E5FF";case"Open":return"#42E068";case"Auction":case"Reveal":return"linear-gradient(-180deg, #42E068 0%, #52E5FF 100%)";case"Owned":return"#CACACA";case"Forbidden":return"black";default:return"red"}}),";width:4px;height:100%;position:absolute;left:0;top:0;z-index:10;}position:relative;background-color:white;border-radius:6px;box-shadow:3px 4px 20px 0 rgba(144,171,191,0.42);padding:",(function(e){return e.hasInvalidCharacter?"20":"0"}),"px;padding-left:0px;"),j=(0,c.Z)(l.rU,{target:"e1736otp2"})("padding:20px;color:#2b2b2b;overflow:hidden;position:relative;background:",(function(e){var a=e.percentDone;return a?"\n  linear-gradient(to right, rgba(128, 255, 128, 0.1) 0%, rgba(82,229,255, 0.1) ".concat(a,"%,#ffffff ").concat(a,"%)"):"white"}),";height:65px;display:grid;height:auto;grid-template-columns:1fr;grid-gap:10px;align-items:center;font-size:22px;margin-bottom:4px;transition:0.2s all;border-radius:6px;",p.ZP.medium(n||(n=(0,o.Z)(["\n    grid-template-columns: 1fr minmax(150px,350px) 100px 50px 50px;\n    grid-template-rows: 39px;\n  "])))," color:#2b2b2b;z-index:1;.label-container{display:flex;}&:visited{color:#2b2b2b;}"),Z=(0,c.Z)("div",{target:"e1736otp3"})({name:"70qvj9",styles:"display:flex;align-items:center;"}),y=(0,c.Z)("h2",{target:"e1736otp4"})("font-size:18px;font-weight:100;",p.ZP.medium(r||(r=(0,o.Z)(["\n    font-size: 28px;\n  "])))," color:",(function(e){return e.state,"#2b2b2b"}),";"),C=(0,c.Z)("div",{target:"e1736otp5"})({name:"11a5vjb",styles:"margin-right:20px;font-size:16px;color:#ccd4da;display:none;align-items:center;"}),D=(0,c.Z)("div",{target:"e1736otp6"})(""),N=function(e){var a,t=e.domain,n=e.isOwner,r=(0,d.$)().t;switch(t.state){case"Open":a=r("singleName.domain.state.available");break;case"Auction":a=r("singleName.domain.state.auction");break;case"Owned":a=r("singleName.domain.state.owned");break;default:a=r("singleName.domain.state.default")}return n&&(a=r("singleName.domain.state.owned")),(0,v.jsx)(C,{className:"label-container",children:(0,v.jsx)(D,{children:a})})},z=(0,c.Z)("img",{target:"e1736otp7"})({name:"krde0g",styles:"width:16px;height:16px;margin-bottom:4px;margin-right:4px;"}),A=(0,c.Z)("div",{target:"e1736otp8"})({name:"52og9f",styles:"font-size:16px;display:flex;background-color:white;margin-top:-10px;margin-left:2px;align-items:center;justify-content:flex-start;color:black;font-weight:100;padding:10px 0px 10px 20px;& a:hover{color:#2c46a6;}"});a.Z=function(e){var a=e.domain,t=e.isSubDomain,n=e.className,r=e.isFavourite,o=e.loading,c=e.checkedBoxes,l=void 0===c?{}:c,d=e.setCheckedBoxes,p=e.setSelectAll,C=e.hasInvalidCharacter;if(console.log("DomainItem: ",Array.from(a.name)),o)return(0,v.jsx)(j,{state:"Owned",className:n,to:"",children:(0,v.jsx)(g.Z,{})});var D=(0,x.m)(),F=!1;!a.available&&a.owner&&0!==parseInt(a.owner,16)&&(F=D&&a.owner&&a.owner.toLowerCase()===D.toLowerCase());var I=a.expiryDate;return a.expiryTime&&(I=parseInt(a.expiryTime.getTime()/1e3)),(0,v.jsxs)(k,{state:F?"Yours":a.state,hasInvalidCharacter:C,children:[C&&(0,v.jsxs)(A,{children:[(0,v.jsx)(z,{src:b.Z,onClick:function(e){return e.preventDefault()}}),(0,v.jsxs)("span",{children:[(0,v.jsxs)("span",{onClick:function(e){return e.preventDefault()},children:["This name is invalid."," "]}),(0,v.jsx)("a",{href:"https://docs.ens.domains/frequently-asked-questions#what-about-foreign-characters-what-about-upper-case-letters-is-any-unicode-character-valid",children:"Learn more"})]})]}),(0,v.jsxs)(j,{to:"/name/".concat(a.name),className:n,percentDone:0,"data-testid":"domain-".concat(a.name),children:[(0,v.jsx)(y,{state:F?"Yours":a.state,children:(0,h.HT)(a.name)}),(0,v.jsx)(u.Z,{expiryDate:I,name:a.name}),!C&&(0,v.jsx)(N,{domain:a,isOwner:F}),(0,v.jsx)(Z,{children:(0,v.jsx)(m.Z,{domain:a,isSubDomain:t,isFavourite:r})}),(0,v.jsx)(Z,{children:I&&(0,v.jsx)(w,{children:(0,v.jsx)(f.Z,{testid:"checkbox-".concat(a.name),checked:l[a.name],onClick:function(e){e.preventDefault(),d&&d((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,i.Z)({},a.name,!e[a.name]))})),l[a.name]&&p(!1)}})})})]})]})}}}]);
//# sourceMappingURL=874.ac892b1c-c8225.chunk.js.map