"use strict";(self.webpackChunkahlek=self.webpackChunkahlek||[]).push([[3557],{790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"hardware-gpio/hardware-testing","title":"6. Hardware Testing","description":"6.1 PMOD Interface","source":"@site/docs/hardware-gpio/hardware-testing.md","sourceDirName":"hardware-gpio","slug":"/hardware-gpio/hardware-testing","permalink":"/ahlek/docs/hardware-gpio/hardware-testing","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"practicalSidebar","previous":{"title":"5. Control GPIO using C++ Class in Qt Project","permalink":"/ahlek/docs/hardware-gpio/control-gpio-using-c++"},"next":{"title":"1. Overview","permalink":"/ahlek/docs/markdown/overview"}}');var i=n(4848),o=n(8453);const s={sidebar_position:6},a="6. Hardware Testing",d={},c=[{value:"6.1 PMOD Interface",id:"61-pmod-interface",level:2},{value:"6.2 PMOD Button:",id:"62-pmod-button",level:2},{value:"6.3 PMOD Led :",id:"63-pmod-led-",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"6-hardware-testing",children:"6. Hardware Testing"})}),"\n",(0,i.jsx)(t.h2,{id:"61-pmod-interface",children:"6.1 PMOD Interface"}),"\n",(0,i.jsx)(t.p,{children:"Pmod interface (peripheral module interface) is an open standard defined by Digilent in the Pmod Interface Specification for connecting peripheral modules to FPGA and microcontroller development boards using 6 pins. Pmod or Pmods may also refer to modules compatible with the Pmod interface."}),"\n",(0,i.jsx)(t.p,{children:"Pmods come with a standard 6-pin interface of 4 signals, one ground and one power pin."}),"\n",(0,i.jsx)(t.p,{children:"PIN#5 = GND"}),"\n",(0,i.jsx)(t.p,{children:"PIN#6 = Vcc"}),"\n",(0,i.jsx)(t.p,{children:"Pmods can use either SPI, I2C or UART protocol. We will test GPIO pins using PMOD button and PMOD Led small board."}),"\n",(0,i.jsx)(t.h2,{id:"62-pmod-button",children:"6.2 PMOD Button:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://digilent.com/reference/pmod/pmodbtn/start",children:"PMOD Button"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(6712).A+"",width:"600",height:"558"})}),"\n",(0,i.jsx)(t.h2,{id:"63-pmod-led-",children:"6.3 PMOD Led :"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://digilent.com/reference/pmod/pmodled/start",children:"PMOD Led"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(3009).A+"",width:"600",height:"562"})}),"\n",(0,i.jsx)(t.p,{children:"Clone and build the below Github repository:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/yourskc/q563_rzgpio/",children:"https://github.com/yourskc/q563_rzgpio/"})}),"\n",(0,i.jsx)(t.p,{children:"For the matching to the configurations in our software program, plug the PMOD board to Renesas RZ/G2L. Connect the Led board to the lower pins of PMOD0 on Renesas carrier board, and connect the button board to the lower pins of PMOD1."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(1526).A+"",width:"500",height:"667"})}),"\n",(0,i.jsx)(t.p,{children:"Transfer the executable q563_rzgpio to Renesas RZ/G2L, then run it,"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"./q563_rzgpio\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(3263).A+"",width:"380",height:"423"})}),"\n",(0,i.jsx)(t.p,{children:"This is a two-way test, click the button on the screen will see the on/off of Led, click on the PMOD buttons will see the color change of the red light on screen."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.youtube.com/watch?v=5rZZOqaB67k",children:"Demo Video"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6712:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/image-6-f68df0c01570d72fd1fbc930cdab8fa2.png"},3009:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/image-7-50ba3f6944de17c4d03b1642cf9ed62f.png"},1526:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/image-8-87964614cb9870a5f89828e853059ba1.png"},3263:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/image-9-33caa0fb17c120bc49903bb53476849f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);