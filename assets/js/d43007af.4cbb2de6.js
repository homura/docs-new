"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3771],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=n,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||a;return r?o.createElement(h,l(l({ref:t},c),{},{components:r})):o.createElement(h,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),l=["components"],s={id:"tools",title:"Tools"},i=void 0,u={unversionedId:"basics/tools",id:"basics/tools",title:"Tools",description:"Nervos Community is a cohesive community that embraces the contributions of every member. We welcome everyone to provide passion, innovation and diversity of ideas to improve Nervos.If you are new here, there are three tools Neuron Wallet, CKB-Explorer and Testnet Faucet, hope it will be helpful for you.",source:"@site/docs/basics/tools.md",sourceDirName:"basics",slug:"/basics/tools",permalink:"/docs/basics/tools",draft:!1,tags:[],version:"current",lastUpdatedBy:"xy2101",lastUpdatedAt:1655101790,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"tools",title:"Tools"},sidebar:"Basics",previous:{title:"Bitpie",permalink:"/docs/basics/guides/crypto wallets/bitpie"},next:{title:"Glossary",permalink:"/docs/basics/glossary"}},c={},p=[{value:"Neuron Wallet",id:"neuron-wallet",level:2},{value:"CKB-Explorer",id:"ckb-explorer",level:2},{value:"Nervos Pudge Faucet",id:"nervos-pudge-faucet",level:2}],d={toc:p};function f(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nervos Community is a cohesive community that embraces the contributions of every member. We welcome everyone to provide passion, innovation and diversity of ideas to improve Nervos.If you are new here, there are three tools ",(0,a.kt)("strong",{parentName:"p"},"Neuron Wallet"),", ",(0,a.kt)("strong",{parentName:"p"},"CKB-Explorer")," and ",(0,a.kt)("strong",{parentName:"p"},"Testnet Faucet"),", hope it will be helpful for you."),(0,a.kt)("h2",{id:"neuron-wallet"},"Neuron Wallet"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/neuron"},"Github")," | ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/neuron/releases"},"Download")),(0,a.kt)("p",null,"A blockchain wallet is very important in the blockchain ecosystem, it is a user\u2019s gateway to the blockchain world."),(0,a.kt)("p",null,"Neuron Wallet is a CKB wallet produced by the Nervos Foundation, it holds your keys and can create and broadcast transactions on your behalf. The functionality of the Neuron Wallet is focused on transfer of CKBytes and deposit/withdrawal functions of the Nervos DAO."),(0,a.kt)("p",null,"Now Neuron Wallet has bundled a CKB Mainnet node and configured to connect to the CKB Mainnet. After installation, as you open the Neuron Wallet, the bundled Mainnet node will run."),(0,a.kt)("p",null,"You can also run a CKB node yourself and launch Neuron wallet, then Neuron will NOT start the bundled node, but connects to your node instead. You may refer to ",(0,a.kt)("a",{parentName:"p",href:"guides/crypto%20wallets/neuron"},"Neuron Waller Guide")," for more details."),(0,a.kt)("h2",{id:"ckb-explorer"},"CKB-Explorer"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-explorer"},"Github")," | ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/"},"Mirana Mainnet")," | ",(0,a.kt)("a",{parentName:"p",href:"https://pudge.explorer.nervos.org/"},"Pudge Testnet")),(0,a.kt)("p",null,"CKB-Explorer allows you to explore addresses, tokens, blocks, hashrate, Nervos DAO info and all other activities taking place on Nervos CKB."),(0,a.kt)("p",null,"Please note that CKB-Explorer is not a wallet service provider. We do not store your private keys and we have no control over the transactions that take place over the CKB Network."),(0,a.kt)("h2",{id:"nervos-pudge-faucet"},"Nervos Pudge Faucet"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/shaojunda/ckb-testnet-faucet"},"Github")," | ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.nervos.org/"},"Link")),(0,a.kt)("p",null,"Nervos Pudge Faucet is where you can claim free ",(0,a.kt)("strong",{parentName:"p"},"Testnet CKBytes")," to use while developing and testing. You may claim 50,000 CKB from the faucet once every 24 hours on Testnet Pudge."))}f.isMDXComponent=!0}}]);