"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3326],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,h=d["".concat(i,".").concat(u)]||d[u]||m[u]||l;return a?r.createElement(h,s(s({ref:t},c),{},{components:a})):r.createElement(h,s({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5315:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),s=a(4996),o=["components"],i={id:"portalwallet",title:"Portal Wallet"},p=void 0,c={unversionedId:"basics/guides/crypto wallets/portalwallet",id:"basics/guides/crypto wallets/portalwallet",title:"Portal Wallet",description:"Portal Wallet is a web wallet that runs directly in a browser. It is a dApp wallet that allows users to receive and send Nervos CKBs with existing Ethereum addresses and wallets.",source:"@site/docs/basics/guides/crypto wallets/portalwallet.md",sourceDirName:"basics/guides/crypto wallets",slug:"/basics/guides/crypto wallets/portalwallet",permalink:"/docs/basics/guides/crypto wallets/portalwallet",draft:!1,tags:[],version:"current",lastUpdatedBy:"busyforking",lastUpdatedAt:1665837900,formattedLastUpdatedAt:"10/15/2022",frontMatter:{id:"portalwallet",title:"Portal Wallet"},sidebar:"Basics",previous:{title:"SafePal",permalink:"/docs/basics/guides/crypto wallets/safepal"},next:{title:"Bitpie",permalink:"/docs/basics/guides/crypto wallets/bitpie"}},m={},d=[{value:"Use PW With MetaMask",id:"use-pw-with-metamask",level:2},{value:"Receive Payments",id:"receive-payments",level:2},{value:"Transfer CKB",id:"transfer-ckb",level:2},{value:"Set Transfer Fees",id:"set-transfer-fees",level:2},{value:"Add a Transfer Note",id:"add-a-transfer-note",level:2}],u={toc:d};function h(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Portal Wallet")," is a web wallet that runs directly in a browser. It is a dApp wallet that allows users to receive and send Nervos CKBs with existing Ethereum addresses and wallets. "),(0,l.kt)("p",null,"Portal Wallet (PW) currently supports the following wallets: ",(0,l.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", ",(0,l.kt)("a",{parentName:"p",href:"https://token.im/"},"imToken"),", ",(0,l.kt)("a",{parentName:"p",href:"https://www.huobiwallet.com/en/"},"Huobi Wallet"),", ",(0,l.kt)("a",{parentName:"p",href:"https://bitkeep.org/"},"BitKeep"),", ",(0,l.kt)("a",{parentName:"p",href:"https://wallet.coinbase.com/"},"Coinbase Wallet"),", ",(0,l.kt)("a",{parentName:"p",href:"https://www.opera.com/"},"Opera"),", ",(0,l.kt)("a",{parentName:"p",href:"https://abcwallet.com/"},"ABC Wallet"),", ",(0,l.kt)("a",{parentName:"p",href:"https://bitpie.com/"},"Bitpie"),", ",(0,l.kt)("a",{parentName:"p",href:"https://www.tokenpocket.pro/"},"TokenPocket"),", ",(0,l.kt)("a",{parentName:"p",href:"https://alphawallet.com/"},"AlphaWallet"),"."),(0,l.kt)("p",null,"The Portal wallet is a superb alternative to Neuron Wallet by allowing users to use on the mobile phone. In addition, it does not require manual sync with a Mainnet node and supports a variety of wallets. Using Portal Wallet is quite simple. The user needs to possess at least one cryptocurrency account and at least one cryptocurrency wallet in use. On the Portal Wallet, users can check the Ethereum address and CKB address, view the balance, and lock the CKB in the Nervos DAO."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": The wallet must have a minimum of ",(0,l.kt)("strong",{parentName:"p"},"102")," CKBs for a Nervos DAO deposit operation and ",(0,l.kt)("strong",{parentName:"p"},"61")," CKBs for a Nervos DAO withdrawal operation."),(0,l.kt)("h2",{id:"use-pw-with-metamask"},"Use PW With MetaMask"),(0,l.kt)("p",null,"To use PW with MetaMask:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open ",(0,l.kt)("a",{parentName:"p",href:"http://ckb.pw"},"ckb.pw")," in a browser that has installed the MetaMask wallet extension. Type the password to log in to the MetaMask."),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_01.png"),width:"50%"}),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_02.png"),width:"30%"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"A MetaMask connection request will automatically pop up. Choose the address desired for login."),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_03.png"),width:"30%"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Sign the ",(0,l.kt)("strong",{parentName:"p"},"Authorised Signature"),", then click ",(0,l.kt)("strong",{parentName:"p"},"Connect")," to open the Portal Wallet in the browser."),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_04.png"),width:"30%"}),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_05.png"),width:"40%"}))),(0,l.kt)("h2",{id:"receive-payments"},"Receive Payments"),(0,l.kt)("p",null,"To receive payments:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Choose CKB and click ",(0,l.kt)("strong",{parentName:"p"},"Receive")," on the home page."),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_06.png"),width:"40%"}),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_07.png"),width:"40%"})),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Two addresses will appear, ETH ",(0,l.kt)("em",{parentName:"p"},"address")," and CKB ",(0,l.kt)("em",{parentName:"p"},"address"),"."),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_08.png"),width:"40%"}),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_09.png"),width:"38%"}),(0,l.kt)("p",{parentName:"li"},"The address needs to be modified depending on where to receive payments:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"To receive funds from ",(0,l.kt)("strong",{parentName:"li"},"another Portal Wallet"),", click ",(0,l.kt)("strong",{parentName:"li"},"ETH address")," on the left."),(0,l.kt)("li",{parentName:"ul"},"To transfer from ",(0,l.kt)("strong",{parentName:"li"},"other wallets or exchanges")," to Portal Wallet, click ",(0,l.kt)("strong",{parentName:"li"},"CKB address")," on the right.")))),(0,l.kt)("p",null,"Portal Wallet currently supports multi-chain addresses, users can transfer payments to each other using CKB addresses, Ether addresses, ENS, etc., in Portal Wallet. However, other wallets/exchanges are less supported at the moment, so it is necessary to align the receiving address with where the payment is to be made."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Ethereum address")," is the current Ethereum address bundled at login that can be used to send and receive CKB assets directly in Portal Wallet."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"CKB address"),": since most exchanges and CKB wallets do not yet support the transfer of CKB full address, Portal Wallet can assist with transferring assets by transferring CKB to a ",(0,l.kt)("em",{parentName:"li"},"ckb address")," for the first time using.")),(0,l.kt)("h2",{id:"transfer-ckb"},"Transfer CKB"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": The wallet must have a minimum of ",(0,l.kt)("strong",{parentName:"p"},"61")," CKBs for a transfer operation."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Send")," to access the transfer page. "),(0,l.kt)("img",{src:(0,s.Z)("img/wallet/pw_10.png"),width:"40%"}),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Currently supported transfer address formats are ",(0,l.kt)("em",{parentName:"li"},"Ethereum address"),", ",(0,l.kt)("em",{parentName:"li"},"CKB address, and")," ",(0,l.kt)("em",{parentName:"li"},"ENS domain address"),"."),(0,l.kt)("li",{parentName:"ul"},"To enter the address: manually input or copy & paste, QR code scanning, common contacts."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After entering the transfer address and transfer amount, Portal Wallet will automatically calculate the transfer fee. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Then, click ",(0,l.kt)("strong",{parentName:"p"},"Send and sign")," to complete the transfer."))),(0,l.kt)("h2",{id:"set-transfer-fees"},"Set Transfer Fees"),(0,l.kt)("p",null,"Portal Wallet has a fee-setting function that allows users to customize the fee rate for transfers based on their personal preferences. With a higher fee rate, users will have priority to package transactions."),(0,l.kt)("p",null,"Transfer fee for CKB = transaction size * exchange rate"),(0,l.kt)("p",null,"The minimum fee rate on CKB is 1000 Shannon/KB (1 Shannon = 10",(0,l.kt)("sup",null,"8"),"  CKB)."),(0,l.kt)("h2",{id:"add-a-transfer-note"},"Add a Transfer Note"),(0,l.kt)("p",null,"Portal Wallet supports notes on transfers to make it easier to keep track of each transfer. When initiating a transfer, users can add notes to check the transfer later on."))}h.isMDXComponent=!0}}]);