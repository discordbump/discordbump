"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[877],{3612:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(7294),a=n(6010),i=n(5281),r=n(5999);const l={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const m={note:{infimaClassName:"secondary",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:o.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:o.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 12 16"},o.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:o.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:o.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return o.createElement("svg",{viewBox:"0 0 16 16"},o.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:o.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},s={secondary:"note",important:"info",success:"tip",warning:"danger"};function u(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=o.Children.toArray(e),n=t.find((e=>{var t;return o.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:a}}(e.children);return{...e,title:e.title??t,children:n}}function p(e){const{children:t,type:n,title:r,icon:p}=u(e),c=function(e){const t=s[e]??e,n=m[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),m.info)}(n),d=r??c.label,{iconComponent:h}=c,k=p??o.createElement(h,null);return o.createElement("div",{className:(0,a.Z)(i.k.common.admonition,i.k.common.admonitionType(e.type),"alert",`alert--${c.infimaClassName}`,l.admonition)},o.createElement("div",{className:l.admonitionHeading},o.createElement("span",{className:l.admonitionIcon},k),d),o.createElement("div",{className:l.admonitionContent},t))}},4629:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(7294),a=n(9960);const i=e=>{let{type:t,label:n,icon:i,link:r,isDisabled:l,onClick:m,children:s}=e;const u=e=>{const t=[];return e.split(" ").forEach((e=>{t.push("pyc-button--"+e)})),t.join(" ")},p=o.createElement("button",{className:"pyc-button"+(t?" "+u(t):""),"aria-label":n||(null==s?void 0:s.toString()),disabled:l,onClick:m},i&&o.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},i),s&&o.createElement("span",{className:"pyc-button__label"},s));return r?o.createElement(a.Z,{className:"pyc-button"+(t?" "+u(t):""),"aria-label":n||(null==s?void 0:s.toString()),href:r},i&&o.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},i),s&&o.createElement("span",{className:"pyc-button__label"},s)):p}},8624:(e,t,n)=>{n.d(t,{Z:()=>r});var o=n(7294),a=n(7674);const i={...a.TW,profiles:{jonfirexbox:{author:"Jonfirexbox",avatar:"/img/jon.png"},corruptbump:{author:"Corrupt Bump",avatar:"/img/logo.png",roleColor:"#7FD858",bot:!0,verified:!1}}},r=e=>{let{options:t=i,children:n}=e;return o.createElement(a.qs.Provider,{value:t},o.createElement(a.dZ,null,n))}},1917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),i=(n(4629),n(3612)),r=n(7674);n(8624);const l={title:"Premium",description:"Make your bump message look amazing"},m=void 0,s={unversionedId:"premium",id:"premium",title:"Premium",description:"Make your bump message look amazing",source:"@site/docs/premium.md",sourceDirName:".",slug:"/premium",permalink:"/premium",draft:!1,editUrl:"https://github.com/SBLPBots/docs/tree/main/docs/premium.md",tags:[],version:"current",lastUpdatedBy:"Kyro3400",lastUpdatedAt:1698459432,formattedLastUpdatedAt:"Oct 28, 2023",frontMatter:{title:"Premium",description:"Make your bump message look amazing"},sidebar:"defaultSidebar",previous:{title:"Privacy Policy",permalink:"/privacy"},next:{title:"Roadmap",permalink:"/roadmap"}},u={},p=[{value:"Basic Wumpus | $1.00",id:"basic-wumpus--100",level:2},{value:"Perks",id:"perks",level:3},{value:"Super Wumpus | $3.00",id:"super-wumpus--300",level:2},{value:"Perks",id:"perks-1",level:3},{value:"Nitro Wumpus | $5.00",id:"nitro-wumpus--500",level:2},{value:"Perks",id:"perks-2",level:3}],c={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Want to make your bump message look amazing? Well get some premium!"),(0,a.kt)("h2",{id:"basic-wumpus--100"},"Basic Wumpus | $1.00"),(0,a.kt)("p",null,"With this we have no phisical way for people to earn this (Ex: Donateing or paying us) you must either win a premium giveaways in our ",(0,a.kt)("a",{parentName:"p",href:"../static/support.html"},"support server"),". (We may setup a patreon or something like that sooner or later)"),(0,a.kt)("h3",{id:"perks"},"Perks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Access to premium bump config commands")),(0,a.kt)("li",{parentName:"ul"},"Access to ",(0,a.kt)("strong",{parentName:"li"},"premium")," features"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"Premium Advertiser")," role in the ",(0,a.kt)("a",{parentName:"li",href:"../static/support.html"},"support server"))),(0,a.kt)("h2",{id:"super-wumpus--300"},"Super Wumpus | $3.00"),(0,a.kt)("p",null,"Its thje same thing as above, with this we have no phisical way for people to earn this (Ex: Donateing or paying us) you must either win a premium giveaways in our ",(0,a.kt)("a",{parentName:"p",href:"../static/support.html"},"support server"),". (We may setup a patreon or something like that sooner or later)"),(0,a.kt)("h3",{id:"perks-1"},"Perks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Everything above"),(0,a.kt)("li",{parentName:"ul"},"Add color to your bump embed")),(0,a.kt)("h2",{id:"nitro-wumpus--500"},"Nitro Wumpus | $5.00"),(0,a.kt)("p",null,"To get this premium you must boost our ",(0,a.kt)("a",{parentName:"p",href:"../static/support.html"},"support server")," and you should get a message from ",(0,a.kt)(r.Hz,{mdxType:"DiscordMention"},"@Vertex Bump")," saying that it received your boost!"),(0,a.kt)("h3",{id:"perks-2"},"Perks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Everything above"),(0,a.kt)("li",{parentName:"ul"},"Add a Banner to your bump embed")),(0,a.kt)("details",{className:"customdetails"},(0,a.kt)("summary",null,"\u2728 Claiming"),(0,a.kt)("h1",null,"How to claim your perks"),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The only way you need to claim is if you win premium from a giveaway. Everything else you will automaticly get it!")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Go to our ",(0,a.kt)("a",{parentName:"p",href:"../static/support.html"},"support server")," and click dm our support bot"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Send us a screenshot of you winning the giveaway"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Once our dev sees the message you will be granted the premium and can check your balance by doing ",(0,a.kt)("code",null,(0,a.kt)(r.Hz,{mdxType:"DiscordMention"},"@Vertex Bump#2014")," premium")),(0,a.kt)("h2",null,"I didn't get my perks"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," It might be a problem on our end (As of ",(0,a.kt)("inlineCode",{parentName:"p"},"11/6/2022")," we are still having problems, dm our ",(0,a.kt)("a",{parentName:"p",href:"../static/support.html"},"support servers")," modmail bot to get the perks)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," The host or our Hub server might be having problems and is taking awhile to send it"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Discord is having problems and our bot is getting effected"),(0,a.kt)(i.Z,{type:"tip",icon:"\u2705",title:"Success",mdxType:"Admonition"},(0,a.kt)("p",null,"You've now claimed your ",(0,a.kt)("strong",null,"premium"),"!",(0,a.kt)("br",null)))))}h.isMDXComponent=!0}}]);