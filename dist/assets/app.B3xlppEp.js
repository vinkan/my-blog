import{R as p}from"./chunks/theme.CUa9zPOa.js";import{U as o,a6 as u,a7 as c,a8 as l,a9 as f,aa as d,ab as m,ac as h,ad as g,ae as A,af as y,d as P,u as v,y as w,x as C,ag as R,ah as b,ai as E,aj as S}from"./chunks/framework.BMqj9mQ5.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(p),T=P({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return w(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&R(),b(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function j(){globalThis.__VITEPRESS__=!0;const e=D(),a=x();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function x(){return g(T)}function D(){let e=o,a;return A(t=>{let n=y(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&j().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{j as createApp};
