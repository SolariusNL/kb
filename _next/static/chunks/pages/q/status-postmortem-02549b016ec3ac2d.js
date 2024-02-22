(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[944],{7128:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/q/status-postmortem",function(){return n(4814)}])},4814:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c},meta:function(){return o}});var s=n(5893),i=n(5190),r=n(7141);let o={title:"Writing a postmortem in Status",description:"Learn how to publish a postmortem in Status to share with your team",slug:"status-postmortem",category:"status",tags:["status","postmortem","incident management"],created_at:"February 22, 2024",last_updated_at:"February 22, 2024"},a=(0,r.A)(o);function l(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Postmortems are a critical part of incident management. They help teams learn from past incidents and prevent them from happening again. In Status, you can publish a postmortem to share with your team."}),"\n",(0,s.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(t.p,{children:"You need to have a Status account subscribed to the Business plan to publish a postmortem. The Business plan starts at $1.99 per user per month."}),"\n",(0,s.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Open the Status app and sign in to your account."}),"\n",(0,s.jsx)(t.li,{children:"Go to your incident dashboard."}),"\n",(0,s.jsx)(t.li,{children:"Click on the incident for which you want to publish a postmortem."}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Postmortem"})," tab."]}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Create Postmortem"})," button."]}),"\n",(0,s.jsx)(t.li,{children:"Fill in the details of the postmortem, such as the title, description, and root cause analysis."}),"\n",(0,s.jsxs)(t.li,{children:["Click on the ",(0,s.jsx)(t.strong,{children:"Publish"})," button to publish the postmortem."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"That's it! You have successfully published a postmortem in Status. Your team can now access the postmortem and learn from the incident."}),"\n",(0,s.jsx)(t.h2,{id:"api-reference",children:"API reference"}),"\n",(0,s.jsx)(t.p,{children:"If you'd like to access postmortem data programmatically through the Status API, you can use the following endpoints:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"GET /api/postmortems"}),": Get a list of all postmortems."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"GET /api/postmortems/{id}"}),": Get a specific postmortem by ID."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"GET /api/incidents/{incident_id}/postmortem"}),": Get the postmortem for a specific incident."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"POST /api/incidents/{incident_id}/postmortem"}),": Create a postmortem for a specific incident."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"PUT /api/postmortems/{id}"}),": Update a specific postmortem by ID."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"DELETE /api/postmortems/{id}"}),": Delete a specific postmortem by ID."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(t.p,{children:"Publishing a postmortem in Status is a great way to share incident learnings with your team. This helps prevent future incidents and improve your incident management process."})]})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})})}},5190:function(e,t,n){"use strict";n.d(t,{a:function(){return q}});var s=n(5893),i=n(512),r=n(8008),o=n(967),Image=n(929),a=n(6536),l=n(3692),c=n(6283),Text=n(4410),d=n(7631),u=n.n(d);function m(e){let{error:t}=e;return(0,s.jsxs)("div",{className:u().wrapper,children:[(0,s.jsx)(Text.x,{className:u().label,children:"Error message:"}),(0,s.jsx)(Text.x,{className:u().error,children:t})]})}n(7294);var h=n(7010),p=n(5984),x=n(3043),_=n(7187),f=n(4251),j=n.n(f);function g(e){let{className:t,...n}=e,r=(0,p.rZ)();return(0,s.jsx)(x.V,{className:(0,i.Z)(j().root,t),icon:(0,s.jsx)(h.Z,{className:j().icon}),radius:"md",__vars:{"--docs-bq-code-bg-light":(0,_.m)(r.colors.blue[6],.2),"--docs-bq-code-bg-dark":(0,_.m)(r.colors.blue[4],.2)},...n})}var b=n(3520),N=n(7529),y=n(747),v=n(8543),k=n(9169),w=n.n(k);function E(e){let{yarnScript:t,npmScript:n}=e,[i,r]=(0,b._)({key:"script-tab",defaultValue:0});return(0,s.jsx)(v.Q,{classNames:{root:w().root},activeTab:i,onTabChange:r,code:[{fileName:"yarn",code:t,language:"bash",icon:(0,s.jsx)(N.z,{className:w().icon,size:16})},{fileName:"npm",code:n,language:"bash",icon:(0,s.jsx)(y._,{className:w().icon,size:16})}]})}function M(e){let{packages:t,dev:n}=e;return(0,s.jsx)(E,{yarnScript:"yarn add ".concat(n?"--dev ":"").concat(t),npmScript:"npm install ".concat(n?"--save-dev ":"").concat(t)})}var S=n(359),T=n.n(S);function P(e){let{id:t,children:n,order:o=2,...a}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{id:t,"data-heading":n,"data-order":o,className:T().titleOffset}),(0,s.jsx)(r.D,{order:o,className:T().title,...a,children:(0,s.jsx)("a",{className:(0,i.Z)(T().titleLink,"mantine-focus-auto"),href:"#".concat(t),children:n})})]})}let C=e=>t=>(0,s.jsx)(P,{order:e,...t});function L(e){let{children:t}=e;return(0,s.jsx)(c.P,{className:T().code,code:t.props.children,language:function(e){let t=(e.props.className||"").match(RegExp("language-(?<lang>.*)"));return t&&t.groups&&t.groups.lang?t.groups.lang:"tsx"}(t)})}function O(e){return(0,s.jsx)("p",{className:T().paragraph,...e})}function I(e){return(0,s.jsx)("ul",{className:T().ul,...e})}function z(e){return(0,s.jsx)("li",{className:T().li,...e})}function D(e){let{href:t,...n}=e;return(0,s.jsx)(o.e,{className:T().link,href:t,...n})}function q(e){return{img:Image.E,ul:I,li:z,p:O,a:D,code:a.E,h1:C(1),h2:C(2),h3:C(3),h4:C(4),h5:C(5),h6:C(6),pre:L,Demo:l.B,InstallScript:M,ErrorMessage:m,blockquote:g,...e}}},7141:function(e,t,n){"use strict";n.d(t,{A:function(){return P}});var s=n(5893),i=n(3078),r=n(967),o=n(4920),a=n(8008),Text=n(4410),l=n(3507),c=n(6247),d=n(9008),u=n.n(d),m=n(1664),h=n.n(m),p=n(5372),x=n.n(p),_=n(7294),f=n(207),j=n.n(f);function g(e){let{icon:t,children:n,link:i}=e,r=i?(0,s.jsxs)("a",{href:i,target:"_blank",className:j().body,rel:"noreferrer",children:[(0,s.jsx)("div",{className:j().icon,children:t}),(0,s.jsx)("div",{className:j().content,children:n})]}):(0,s.jsxs)("div",{className:j().body,children:[(0,s.jsx)("div",{className:j().icon,children:t}),(0,s.jsx)("div",{className:j().content,children:n})]});return(0,s.jsx)("div",{className:j().root,children:r})}var b=n(1163),N=n(4342),y=n(2034),v=n(8565),k=n(6721),w=n(1379),E=n.n(w);function M(e){if(0===e.length)return -1;let t=e.reduce((e,t,n)=>Math.abs(e.position)<Math.abs(t.y)?e:{index:n,position:t.y},{index:0,position:e[0].y});return t.index}function S(){let[e,t]=(0,_.useState)(0),[n,i]=(0,_.useState)([]),r=(0,_.useRef)([]),o=(0,b.useRouter)(),a=n.filter(e=>e.depth>1),l=()=>{t(M(r.current.map(e=>e.getNode().getBoundingClientRect())))};if((0,_.useEffect)(()=>{let e=function(){let e=document.getElementById("mdx");return e?function(e){let t=[];for(let n=0;n<e.length;n+=1){let s=e[n];s.id&&t.push({depth:parseInt(s.getAttribute("data-order"),10),content:s.getAttribute("data-heading")||"",id:s.id,getNode:()=>document.getElementById(s.id)})}return t}(Array.from(e.querySelectorAll("[data-heading]"))):[]}();return r.current=e,i(e),t(M(e.map(e=>e.getNode().getBoundingClientRect()))),window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]),0===a.length)return null;let c=a.map((t,n)=>(0,s.jsx)(Text.x,{component:"a",fz:"sm",className:E().link,mod:{active:e===n},href:"#".concat(t.id),__vars:{"--toc-link-offset":"".concat(t.depth-1)},onClick:e=>{e.preventDefault(),o.replace("".concat(o.pathname,"#").concat(t.id))},children:t.content},t.id));return(0,s.jsx)(y.x,{component:"nav",className:E().wrapper,children:(0,s.jsx)("div",{className:E().inner,children:(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:E().header,children:[(0,s.jsx)(N.Z,{style:{width:(0,v.h)(20),height:(0,v.h)(20)},stroke:1.5}),(0,s.jsx)(Text.x,{className:E().title,children:"Table of contents"})]}),(0,s.jsx)(k.x.Autosize,{mah:"calc(100vh - ".concat((0,v.h)(140),")"),type:"never",offsetScrollbars:!0,children:(0,s.jsx)("div",{className:E().items,children:c})})]})})})}function T(e){let{meta:t,children:n}=e,d="".concat(t.title," | Solarius");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(u(),{children:[(0,s.jsx)("title",{children:d}),(0,s.jsx)("meta",{itemProp:"name",content:d},"item-title"),(0,s.jsx)("meta",{property:"og:title",content:d},"og-title"),(0,s.jsx)("meta",{name:"twitter:title",content:d},"twitter-title"),(0,s.jsx)("meta",{property:"og:url",content:"https://kb.solarius.me/q/".concat(t.slug)},"og-url")]}),(0,s.jsxs)("article",{children:[(0,s.jsx)("header",{className:x().header,children:(0,s.jsxs)(i.W,{size:"md",children:[(0,s.jsx)(r.e,{component:h(),href:"/",underline:"hover",fz:"sm",children:(0,s.jsx)(o.z,{variant:"subtle",radius:"xl",leftSection:(0,s.jsx)(l.Z,{size:18,stroke:1.5}),children:"Back to all questions"})}),(0,s.jsx)(a.D,{className:x().title,children:t.title}),(0,s.jsx)("nav",{className:x().links,children:(0,s.jsx)(g,{icon:(0,s.jsx)(c.Z,{size:18,stroke:1.5}),link:"mailto:support@solarius.me?subject=Issue with ".concat(t.title),children:"Report an issue to Solarius"})}),(0,s.jsxs)(Text.x,{c:"dimmed",fz:"xs",mt:"md",children:["Last updated"," ",(0,s.jsx)(Text.x,{component:"time",dateTime:new Date(t.last_updated_at).toLocaleDateString(),c:"var(--mantine-color-text)",inherit:!0,children:t.last_updated_at})]})]})}),(0,s.jsxs)(i.W,{size:"md",className:x().inner,children:[(0,s.jsx)("div",{className:x().content,id:"mdx",children:n}),(0,s.jsx)(S,{})]})]})]})}function P(e){return t=>{let{children:n}=t;return(0,s.jsx)(T,{meta:e,children:n})}}},359:function(e){e.exports={paragraph:"MdxElements_paragraph__4fXCh",link:"MdxElements_link__J7fnd",ul:"MdxElements_ul__OOTjk",li:"MdxElements_li__3_j76",title:"MdxElements_title__l4zV5",titleLink:"MdxElements_titleLink__UU75K",titleOffset:"MdxElements_titleOffset__kBHVU",code:"MdxElements_code__yvlvb"}},7631:function(e){e.exports={wrapper:"MdxErrorMessage_wrapper__JlJDx",error:"MdxErrorMessage_error__XuiIB",label:"MdxErrorMessage_label__SsQTh"}},4251:function(e){e.exports={root:"MdxInfo_root___n6Nr",icon:"MdxInfo_icon__9t9jJ"}},9169:function(e){e.exports={root:"MdxNpmScript_root__yTuQb",icon:"MdxNpmScript_icon__OPgOf"}},5372:function(e){e.exports={header:"MdxLayout_header__0tel7",title:"MdxLayout_title__KyoNs",links:"MdxLayout_links__ikk4L",inner:"MdxLayout_inner__vHPN9",content:"MdxLayout_content__Pg8un"}},207:function(e){e.exports={root:"PageHeaderLink_root__wMV7V",label:"PageHeaderLink_label__eYp4m",body:"PageHeaderLink_body__yrqn0",icon:"PageHeaderLink_icon__8FTyU"}},1379:function(e){e.exports={wrapper:"TableOfContents_wrapper__4dG89",inner:"TableOfContents_inner__po5SO",link:"TableOfContents_link__fUzKF",header:"TableOfContents_header__1sSDD",title:"TableOfContents_title__owxbN",items:"TableOfContents_items__IQuAZ"}}},function(e){e.O(0,[486,9774,2888,179],function(){return e(e.s=7128)}),_N_E=e.O()}]);