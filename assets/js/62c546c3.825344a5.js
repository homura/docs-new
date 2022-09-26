"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2903],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>p});var a=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=a.createContext({}),i=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),f=i(r),p=s,u=f["".concat(l,".").concat(p)]||f[p]||h[p]||n;return r?a.createElement(u,o(o({ref:t},c),{},{components:r})):a.createElement(u,o({ref:t},c))}));function p(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,o=new Array(n);o[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:s,o[1]=d;for(var i=2;i<n;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>h});var a=r(7462),s=r(3366),n=(r(7294),r(3905)),o=["components"],d={id:"address",title:"CKB Address"},l=void 0,i={unversionedId:"basics/faq/address",id:"basics/faq/address",title:"CKB Address",description:"Q: Is there any demos available for encoding and decoding full addresses?",source:"@site/docs/basics/faq/address.md",sourceDirName:"basics/faq",slug:"/basics/faq/address",permalink:"/docs/basics/faq/address",draft:!1,tags:[],version:"current",lastUpdatedBy:"xy2101",lastUpdatedAt:1655101790,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"address",title:"CKB Address"},sidebar:"Basics",previous:{title:"General FAQ",permalink:"/docs/basics/faq/general"}},c={},h=[{value:"<strong>Q</strong>: Is there any demos available for encoding and decoding full addresses?",id:"q-is-there-any-demos-available-for-encoding-and-decoding-full-addresses",level:3},{value:"<strong>Q</strong>: Which wallets currently support the full address for funds transfer, including transfer in and transfer out?",id:"q-which-wallets-currently-support-the-full-address-for-funds-transfer-including-transfer-in-and-transfer-out",level:3},{value:"<strong>Q</strong>: The length of the address in ckb.pw and Godwoken is both 95 bits. Is the length of the full address/long address variable? How to determine the code hash, hash type, the location of args, etc. during parsing?",id:"q-the-length-of-the-address-in-ckbpw-and-godwoken-is-both-95-bits-is-the-length-of-the-full-addresslong-address-variable-how-to-determine-the-code-hash-hash-type-the-location-of-args-etc-during-parsing",level:3},{value:"<strong>Q</strong>: How to transform CKB address format, for example, to transform a short address to a full address?",id:"q-how-to-transform-ckb-address-format-for-example-to-transform-a-short-address-to-a-full-address",level:3}],f={toc:h};function p(e){var t=e.components,r=(0,s.Z)(e,o);return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"q-is-there-any-demos-available-for-encoding-and-decoding-full-addresses"},(0,n.kt)("strong",{parentName:"h3"},"Q"),": Is there any demos available for encoding and decoding full addresses?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A"),": ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rev-chaos/ckb-address-demo"},"Here")," is a demo in Python where you to see the cases for testing. Compared with the bitcoin address format bech32, CKB\u2019s solution only differs in payload. They have the same programming scheme. For example, RFCs in Python demo have added Bitcoin's latest bech32m address format."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/ckb-address-transformer-524gi"},"Here")," is a JavaScript demo on Codebox, which shows how to transform addresses in different formats."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"q-which-wallets-currently-support-the-full-address-for-funds-transfer-including-transfer-in-and-transfer-out"},(0,n.kt)("strong",{parentName:"h3"},"Q"),": Which wallets currently support the full address for funds transfer, including transfer in and transfer out?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A"),": Nervos\u2019 desktop wallets Neuron, versatile command-line tool ckb-cli, and mobile/hardware wallets, like imToken and Safepal, support transfer funds out to full addresses. ckb-cli, web wallet ckb.pw, and DAS in-app wallet can generate full address and receive funds with it."),(0,n.kt)("p",null,"You can test a full address that supports transfer to a full address on testnet with a minimum amount."),(0,n.kt)("p",null,"A full address example, ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.nervos.org/aggron/address/ckt1qr6k6tltndf5kh09zl4p63wju9cejya9mangkkns3aaugkm6mm8tgq2vctn9ycsy4e4zar70ztm663e0gxskqm2mjcjta67jzhtcpqyldff9d38e4h6hpw6rvzjvtg29mtjjr69dzwpedzjdayled8ufjr2ln5reqgqq"},"ckt1qr6k6tltndf5kh09zl4p63wju9cejya9mangkkns3aaugkm6mm8tgq2vctn9ycsy4e4zar70ztm663e0gxskqm2mjcjta67jzhtcpqyldff9d38e4h6hpw6rvzjvtg29mtjjr69dzwpedzjdayled8ufjr2ln5reqgqqqqqqqqgpreg7"),". "),(0,n.kt)("p",null,"After transferring, you can check the transaction status on explorer."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"q-the-length-of-the-address-in-ckbpw-and-godwoken-is-both-95-bits-is-the-length-of-the-full-addresslong-address-variable-how-to-determine-the-code-hash-hash-type-the-location-of-args-etc-during-parsing"},(0,n.kt)("strong",{parentName:"h3"},"Q"),": The length of the address in ckb.pw and Godwoken is both 95 bits. Is the length of the full address/long address variable? How to determine the code hash, hash type, the location of args, etc. during parsing?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A"),": Because the length of args is variable, the length of long address is not fixed. Shorter args have relatively shorter full/long address. For these three parameters: code hash, hash type and args, their positions are fixed during parsing. The length of code hash and hash type is fixed, and they need to be placed at the beginning of the payload, while args at the end. Payload is generated by three parameters: code hash, hash type, and args.\nFor the details of generation method, see: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/rfcs/blob/5e90ace4d26f2b2891d8a83ec838968d655b6b41/rfcs/0021-ckb-address-format/0021-ckb-address-format.md"},"https://github.com/nervosnetwork/rfcs/blob/5e90ace4d26f2b2891d8a83ec838968d655b6b41/rfcs/0021-ckb-address-format/0021-ckb-address-format.md"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"q-how-to-transform-ckb-address-format-for-example-to-transform-a-short-address-to-a-full-address"},(0,n.kt)("strong",{parentName:"h3"},"Q"),": How to transform CKB address format, for example, to transform a short address to a full address?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A"),": In the latest version of GO SDK, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"ConvertToBech32mFullAddress")," to convert any address formats into our recommended address format \u2014\u2014 the new full address format.\nYou can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"ConvertToShortAddress")," to convert secp, ACP and multi-sig script addresses of any format into short addresses, and  ",(0,n.kt)("inlineCode",{parentName:"p"},"ConvertToBech32FullAddress")," to convert any address format to an old full address.\nFor details about GO SDK, you may refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-go"},"https://github.com/nervosnetwork/ckb-sdk-go"),"."),(0,n.kt)("p",null,"In the latest version of Java SDK, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"AddressTools.ConvertToBech32mFullAddress")," to convert any address formats into our recommended address format -- the new full address format.\nYou can also use ",(0,n.kt)("inlineCode",{parentName:"p"},"AddressTools.ConvertToShortAddress")," to convert secp, ACP and multi-sig script address of any format into short address, and  ",(0,n.kt)("inlineCode",{parentName:"p"},"ConvertToBech32FullAddress")," to convert any address format to the old full address.\nFor details about Java SDK, you may refer to: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/ckb-sdk-java"},"https://github.com/nervosnetwork/ckb-sdk-java"),"."),(0,n.kt)("p",null,"In the latest version (0.18.0-rc3) of Lumos, we provide a brand new ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nervosnetwork/lumos/pull/205"},(0,n.kt)("inlineCode",{parentName:"a"},"encodeToAddress"))," API to generate the new full address format, while retaining the old ",(0,n.kt)("inlineCode",{parentName:"p"},"generateAddress")," API to generate an address. However, the ",(0,n.kt)("inlineCode",{parentName:"p"},"generateAddress")," is going to be marked as deprecated, and we recommend that you can migrate to the new ",(0,n.kt)("inlineCode",{parentName:"p"},"encodeToAddress")," API. If users find out some platforms (e.g. Nervos Aggron Faucet) do not yet support the new address format, the old API can still be used. You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn add @ckb-lumos/lumos@next")," to install if using the latest version of Lumos."),(0,n.kt)("hr",null))}p.isMDXComponent=!0}}]);