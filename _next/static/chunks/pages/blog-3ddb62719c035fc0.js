(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{5384:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(6854)}])},6854:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h},useTOC:function(){return g}});var r=n(5893),a=n(7812),i=n(3839),o=n(8925),s=n(8544),l=n(1664),c=n.n(l),d=n(7294),u=e=>{let{title:t,date:n}=e,a=()=>`hsl(${360*Math.random()}, 70%, 60%)`,i=(0,d.useMemo)(()=>{let e=a(),t=a(),n=a();return{background:`
        radial-gradient(circle at 10% 90%, ${e}, transparent 50%),
        radial-gradient(circle at 90% 10%, ${t}, transparent 50%),
        radial-gradient(circle at 50% 50%, ${n}, transparent 70%)
      `,opacity:.9}},[]);return(0,r.jsx)("div",{className:"w-full rounded-t-md rounded-b-none overflow-hidden",children:(0,r.jsxs)("div",{className:"relative w-full h-26 flex items-end",children:[(0,r.jsx)("div",{className:"absolute inset-0 rounded-t-lg rounded-b-none",style:i}),(0,r.jsx)("div",{className:"absolute inset-0",style:{background:"linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)"}}),(0,r.jsxs)("div",{className:"relative z-10 p-6",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold mb-2 truncate",children:t}),(0,r.jsx)("div",{className:"text-sm opacity-80",children:(0,r.jsx)("span",{children:n})})]})]})})};function m(e){let{post:t}=e;return(0,r.jsxs)("div",{className:"rounded-lg shadow-md h-64 overflow-hidden dark:border dark:border-gray-600",children:[(0,r.jsx)("div",{className:"w-full rounded no-underline hover:no-underline",children:(0,r.jsx)(c(),{href:t.route,children:(0,r.jsx)(u,{title:t.frontMatter.title,date:new Date(t.frontMatter.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})})})}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold mb-2 line-clamp-2 overflow-hidden",children:t.frontMatter.description}),t.frontMatter.author.name&&t.frontMatter.author.github&&(0,r.jsx)("div",{className:"flex justify-between items-center",children:(0,r.jsx)(c(),{target:"_blank",href:`${t.frontMatter.author.github}`,children:(0,r.jsx)("span",{className:"text-sm text-blue-500 hover:underline",children:t.frontMatter.author.name||"Unknown author"})})})]})]})}function g(e){return[]}var h=(0,a.c)(function(){let e={div:"div",h1:"h1",h2:"h2",p:"p",...(0,o.a)()},t=(0,s.HI)("/blog/posts").filter(e=>"index"!==e.name).sort((e,t)=>new Date(t.frontMatter.date).getTime()-new Date(e.frontMatter.date).getTime());return(0,r.jsxs)(e.div,{className:"max-w-5xl mx-auto px-4",children:[(0,r.jsx)(e.h1,{className:"text-2xl font-bold",children:"CH-UI's Blog!"}),(0,r.jsx)(e.p,{className:"text mt-4 text-gray-500 dark:text-gray-400",children:"Welcome to the CH-UI blog! Here you'll find all the latest news, updates, and insights about ClickHouse and CH-UI."}),(0,r.jsx)(e.div,{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-16",children:t.slice(0,10).map(e=>(0,r.jsx)(m,{post:e},e.route))}),(0,r.jsx)(e.div,{className:"flex justify-between items-start",children:(0,r.jsx)(e.div,{className:"w-2/3",children:(0,r.jsx)(c(),{href:"/blog/posts",className:"flex items-center space-x-2 hover:underline",children:(0,r.jsx)(e.h2,{className:"text-2xl font-semibold mb-4",children:"All Posts"})})})})]})},"/blog",{filePath:"pages/blog/index.mdx",timestamp:1728985022e3,pageMap:i.v,frontMatter:{},title:"Index"},"undefined"==typeof RemoteContent?g:RemoteContent.useTOC)},8544:function(e,t,n){"use strict";n.d(t,{HI:function(){return i}});var r=n(3665),a=n(6609);function i(e){let{pageMap:t}=function(e){let t=globalThis[r.ud];if(!t)throw Error(`Nextra context not found. Make sure you are using "${e}" of "nextra/context" on an md/mdx page.`);return{pageMap:t.pageMap,route:t.route}}("getPagesUnderRoute");return function e(t,n){let r=[],i=[],o=t.find(a.pN),s=o?.data||{};for(let o of t){if((0,a.pN)(o))continue;let t=(0,a.k0)(s[o.name]),l={...o,...Object.keys(t||{}).length>0&&{meta:t}};if((0,a.qR)(l)){let t=e(l.children,n);l.children=t.items,t.activeLevelPages.length?r=t.activeLevelPages:l.route!==n||r.length||(r=l.children)}i.push(l)}let l=Object.keys(s);return i.sort((e,t)=>{let n=l.indexOf(e.name),r=l.indexOf(t.name);return -1===n&&-1===r?e.name<t.name?-1:1:-1===n?1:-1===r?-1:n-r}),{items:i,activeLevelPages:r}}(t,e).activeLevelPages}},8925:function(e,t,n){"use strict";n.d(t,{a:function(){return l}});var r=n(1151),a=n(5675),i=n.n(a),o=n(7294);let s={img:e=>(0,o.createElement)("object"==typeof e.src?i():"img",e)},l=e=>(0,r.a)({...s,...e})},7812:function(e,t,n){"use strict";n.d(t,{c:function(){return c}});var r=n(5893),a=n(3665),i=n(8644);let o=(0,n(7294).createContext)({}),s=o.Provider;o.displayName="SSG";var l=n(8925);function c(e,t,n,r){let i=globalThis[a.ud];return i.route=t,i.pageMap=n.pageMap,i.context[t]={Content:e,pageOpts:n,useTOC:r},d}function d({__nextra_pageMap:e=[],__nextra_dynamic_opts:t,...n}){let o=globalThis[a.ud],{Layout:l,themeConfig:c}=o,{route:d,locale:m}=(0,i.t)(),g=o.context[d];if(!g)throw Error(`No content found for the "${d}" route. Please report it as a bug.`);let{pageOpts:h,useTOC:f,Content:p}=g;if(d.startsWith("/["))h.pageMap=e;else for(let{route:t,children:n}of e){let e=t.split("/").slice(m?2:1);(function e(t,[n,...r]){for(let a of t)if("children"in a&&n===a.name)return r.length?e(a.children,r):a})(h.pageMap,e).children=n}if(t){let{title:e,frontMatter:n}=t;h={...h,title:e,frontMatter:n}}return(0,r.jsx)(l,{themeConfig:c,pageOpts:h,pageProps:n,children:(0,r.jsx)(s,{value:n,children:(0,r.jsx)(u,{useTOC:f,children:(0,r.jsx)(p,{...n})})})})}function u({children:e,useTOC:t}){let{wrapper:n}=(0,l.a)();return(0,r.jsx)(m,{useTOC:t,wrapper:n,children:e})}function m({children:e,useTOC:t,wrapper:n,...a}){let i=t(a);return n?(0,r.jsx)(n,{toc:i,children:e}):e}},3839:function(e,t,n){"use strict";n.d(t,{v:function(){return r}});let r=[{data:{index:{type:"page",title:"CH-UI",display:"hidden",theme:{layout:"full",timestamp:!1}},docs:{type:"page",title:"Documentation"},blog:{type:"page",title:"Blog",theme:{typesetting:"article",breadcrumb:!0,footer:!0,sidebar:!1,toc:!0,pagination:!0}},support:{type:"page",title:"Support",href:"https://www.buymeacoffee.com/caioricciuti?utm_source=ch-ui-docs&utm_medium=header",newWindow:!0},legal:{type:"page",title:"Legal"},404:{type:"page",theme:{timestamp:!1,typesetting:"article"}}}},{name:"404",route:"/404",frontMatter:{sidebarTitle:"404"}},{name:"blog",route:"/blog",children:[{data:{index:{title:"Blog",type:"page"},posts:{title:"Posts",type:"hidden"},"*":{type:"page",theme:{typesetting:"article"}}}},{name:"index",route:"/blog",frontMatter:{sidebarTitle:"Index"}},{name:"posts",route:"/blog/posts",children:[{data:{index:{title:"Blog",type:"page"},"ch-ui-blog":"First CH-UI Blog Post","why-i-couldnt-lose-my-data":"Why I couldn't Lose My Data!"}},{name:"ch-ui-blog",route:"/blog/posts/ch-ui-blog",frontMatter:{title:"CH-UI's Origin...",description:"The story of how CH-UI came to be.",author:{name:"Caio Ricciuti",github:"https://github.com/caioricciuti",avatar:"https://avatars.githubusercontent.com/u/1025885?v=4"},date:new Date(1728432e6),readingTime:5}},{name:"index",route:"/blog/posts",frontMatter:{sidebarTitle:"Index"}},{name:"why-i-couldnt-lose-my-data",route:"/blog/posts/why-i-couldnt-lose-my-data",frontMatter:{title:"Why I couldn't Lose My Data!",description:"From this day on, I knew I can get all the answers I need from my data.",author:{name:"Caio Ricciuti",github:"https://github.com/caioricciuti",avatar:"https://avatars.githubusercontent.com/u/1025885?v=4"},tags:["ch-ui","clickhouse","data"],date:new Date(1728432e6),readingTime:3}}]}]},{name:"docs",route:"/docs",children:[{data:{index:"Start Here","getting-started":"Getting Started","core-concepts":"Core Concepts",contributing:"Contributing",acknowledgments:"Acknowledgments",license:"License",security:"Security"}},{name:"acknowledgments",route:"/docs/acknowledgments",frontMatter:{title:"Acknowledgments"}},{name:"contributing",route:"/docs/contributing",frontMatter:{title:"Contributing"}},{name:"core-concepts",route:"/docs/core-concepts",frontMatter:{title:"Core Concepts"}},{name:"getting-started",route:"/docs/getting-started",frontMatter:{sidebarTitle:"Getting Started"}},{name:"index",route:"/docs",frontMatter:{sidebarTitle:"Index"}},{name:"license",route:"/docs/license",frontMatter:{sidebarTitle:"License"}},{name:"security",route:"/docs/security",frontMatter:{sidebarTitle:"Security"}}]},{name:"index",route:"/",frontMatter:{title:"CH-UI | Data's better when we see it."}},{name:"legal",route:"/legal",children:[{data:{index:{title:"Legal",type:"page",description:"Legal information about CH-UI.",theme:{breadcrumb:!1},items:[{title:"Terms of Service",href:"/legal/terms-of-service"},{title:"Privacy Policy",href:"/legal/privacy-policy"}]}}},{name:"index",route:"/legal",frontMatter:{sidebarTitle:"Index"}},{name:"privacy-policy",route:"/legal/privacy-policy",frontMatter:{sidebarTitle:"Privacy Policy"}},{name:"terms-of-service",route:"/legal/terms-of-service",frontMatter:{sidebarTitle:"Terms of Service"}}]}]}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5384)}),_N_E=e.O()}]);