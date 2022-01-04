"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},214:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>d});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"introduction",title:"Introduction"},c=void 0,p={unversionedId:"labs/introduction",id:"labs/introduction",title:"Introduction",description:"In labs, we provide a series of hands-on programming tutorial, that helps you build a complete component in CKB quickly. Some examples of the labs section include:",source:"@site/docs/labs/intro.md",sourceDirName:"labs",slug:"/labs/introduction",permalink:"docs-new/docs/labs/introduction",tags:[],version:"current",lastUpdatedBy:"zengb",lastUpdatedAt:1599729719,formattedLastUpdatedAt:"9/10/2020",frontMatter:{id:"introduction",title:"Introduction"},sidebar:"docs",previous:{title:"JSON-RPC",permalink:"docs-new/docs/reference/rpc"},next:{title:"Write an SUDT Script by Capsule",permalink:"docs-new/docs/labs/sudtbycapsule"}},u=[],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In labs, we provide a series of hands-on programming tutorial, that helps you build a complete component in CKB quickly. Some examples of the labs section include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to ",(0,a.kt)("a",{parentName:"li",href:"sudtbycapsule"},"build")," a CKB script in Rust."),(0,a.kt)("li",{parentName:"ul"},"How to ",(0,a.kt)("a",{parentName:"li",href:"lumos-nervosdao"},"build")," a standalone CKB dapp in JavaScript."),(0,a.kt)("li",{parentName:"ul"},"How to ",(0,a.kt)("a",{parentName:"li",href:"capsule-dynamic-loading-tutorial"},"dynamic load")," a shared-library in Rust contract.")))}d.isMDXComponent=!0}}]);