import{s as I,n as H,c as Q,d as R,e as Z,u as G,g as Y,f as ee,h as te}from"../chunks/scheduler.2e947722.js";import{S as B,i as F,g,s as E,h as v,j as b,x as ae,c as j,f as p,k as _,a as w,y,m as se,n as re,z as X,r as ne,e as q,A as oe,u as le,v as ie,t as T,b as ce,d as C,w as ue,B as fe,C as he,p as _e}from"../chunks/index.9a0a7d66.js";import{e as N,u as D,d as U}from"../chunks/each.2526390a.js";import{p as me}from"../chunks/stores.1c875e15.js";const de=!0,pe=async({url:c})=>({pathname:c.pathname}),Me=Object.freeze(Object.defineProperty({__proto__:null,load:pe,prerender:de},Symbol.toStringTag,{value:"Module"}));function z(c,t,e){const r=c.slice();return r[3]=t[e],r}function K(c,t,e){const r=c.slice();return r[6]=t[e],r}function O(c,t){let e,r=t[6].name+"",o,n;return{key:c,first:null,c(){e=g("a"),o=se(r),n=E(),this.h()},l(s){e=v(s,"A",{href:!0,class:!0});var a=b(e);o=re(a,r),n=j(a),a.forEach(p),this.h()},h(){_(e,"href",t[6].href),_(e,"class","hover:text-black transition-colors font-overfont"),X(e,"text-black",t[0].url.pathname===t[6].href),this.first=e},m(s,a){w(s,e,a),y(e,o),y(e,n)},p(s,a){t=s,a&3&&X(e,"text-black",t[0].url.pathname===t[6].href)},d(s){s&&p(e)}}}function P(c,t){let e,r,o;return{key:c,first:null,c(){e=g("a"),r=g("i"),o=E(),this.h()},l(n){e=v(n,"A",{href:!0,target:!0});var s=b(e);r=v(s,"I",{class:!0}),b(r).forEach(p),o=j(s),s.forEach(p),this.h()},h(){_(r,"class","fa"+(t[3].brand?"b":"")+" fa-"+t[3].icon+" text-neutral-500 hover:text-black transition-colors hover:cursor-pointer"),_(e,"href",t[3].href),_(e,"target","_blank"),this.first=e},m(n,s){w(n,e,s),y(e,r),y(e,o)},p(n,s){t=n},d(n){n&&p(e)}}}function ye(c){let t,e,r='hi, i&#39;m vishy <span class="inline-block transition ease-in-out duration-[2000ms] group-hover:rotate-[720deg]">🐧</span>',o,n,s,a=[],m=new Map,d,l,u=[],M=new Map,x=N(c[1]);const A=i=>i[6];for(let i=0;i<x.length;i+=1){let f=K(c,x,i),h=A(f);m.set(h,a[i]=O(h,f))}let k=N(c[2]);const V=i=>i[3];for(let i=0;i<k.length;i+=1){let f=z(c,k,i),h=V(f);M.set(h,u[i]=P(h,f))}return{c(){t=g("header"),e=g("a"),e.innerHTML=r,o=E(),n=g("div"),s=g("nav");for(let i=0;i<a.length;i+=1)a[i].c();d=E(),l=g("div");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){t=v(i,"HEADER",{class:!0,"data-sveltekit-noscroll":!0});var f=b(t);e=v(f,"A",{href:!0,class:!0,"data-svelte-h":!0}),ae(e)!=="svelte-15d5p9z"&&(e.innerHTML=r),o=j(f),n=v(f,"DIV",{class:!0});var h=b(n);s=v(h,"NAV",{class:!0});var L=b(s);for(let $=0;$<a.length;$+=1)a[$].l(L);L.forEach(p),d=j(h),l=v(h,"DIV",{class:!0});var S=b(l);for(let $=0;$<u.length;$+=1)u[$].l(S);S.forEach(p),h.forEach(p),f.forEach(p),this.h()},h(){_(e,"href","/"),_(e,"class","text-4xl font-overfont group"),_(s,"class","flex text-neutral-500 justify-end space-x-6 text-lg py-0.5"),_(l,"class","flex items-start text-neutral-500 space-x-4 sm:hidden"),_(n,"class","flex justify-between items-start my-4"),_(t,"class","layout-md mb-10"),_(t,"data-sveltekit-noscroll","")},m(i,f){w(i,t,f),y(t,e),y(t,o),y(t,n),y(n,s);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(s,null);y(n,d),y(n,l);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(l,null)},p(i,[f]){f&3&&(x=N(i[1]),a=D(a,f,A,1,i,x,m,s,U,O,null,K)),f&4&&(k=N(i[2]),u=D(u,f,V,1,i,k,M,l,U,P,null,z))},i:H,o:H,d(i){i&&p(t);for(let f=0;f<a.length;f+=1)a[f].d();for(let f=0;f<u.length;f+=1)u[f].d()}}}function ge(c,t,e){let r;return Q(c,me,s=>e(0,r=s)),[r,[{name:"projects 🧑‍💻",href:"/projects"},{name:"classes 📚",href:"/classes"},{name:"blog ✏️",href:"/blog"}],[{icon:"envelope",color:"text-sky-400",brand:!1,href:"mailto:vishr@mit.edu"},{icon:"github",color:"text-gray-900",brand:!0,href:"https://github.com/vishaalram02"},{icon:"book",color:"text-rose-400",brand:!1,href:"https://www.goodreads.com/user/show/135129343-vishaal-ram"},{icon:"spotify",color:"text-green-400",brand:!0,href:"https://open.spotify.com/user/b1xck719vtjwh2saj01gxftku"},{icon:"strava",color:"text-orange-400",brand:!0,href:"https://www.strava.com/athletes/107723971"}]]}class ve extends B{constructor(t){super(),F(this,t,ge,ye,I,{})}}function be(c){const t=c-1;return t*t*t+1}function J(c,{delay:t=0,duration:e=400,easing:r=be,x:o=0,y:n=0,opacity:s=0}={}){const a=getComputedStyle(c),m=+a.opacity,d=a.transform==="none"?"":a.transform,l=m*(1-s),[u,M]=R(o),[x,A]=R(n);return{delay:t,duration:e,easing:r,css:(k,V)=>`
			transform: ${d} translate(${(1-k)*u}${M}, ${(1-k)*x}${A});
			opacity: ${m-l*V}`}}function W(c){let t,e,r,o;const n=c[2].default,s=Z(n,c,c[1],null);return{c(){t=g("main"),s&&s.c()},l(a){t=v(a,"MAIN",{});var m=b(t);s&&s.l(m),m.forEach(p)},m(a,m){w(a,t,m),s&&s.m(t,null),o=!0},p(a,m){s&&s.p&&(!o||m&2)&&G(s,n,a,a[1],o?ee(n,a[1],m,null):Y(a[1]),null)},i(a){o||(C(s,a),a&&te(()=>{o&&(r&&r.end(1),e=fe(t,J,{x:-10,duration:350,delay:350}),e.start())}),o=!0)},o(a){T(s,a),e&&e.invalidate(),a&&(r=he(t,J,{y:10,duration:350})),o=!1},d(a){a&&p(t),s&&s.d(a),a&&r&&r.end()}}}function ke(c){let t,e,r,o,n,s=c[0].pathname,a,m;o=new ve({});let d=W(c);return{c(){t=g("meta"),e=g("link"),r=E(),ne(o.$$.fragment),n=E(),d.c(),a=q(),this.h()},l(l){const u=oe("svelte-1fh2w46",document.head);t=v(u,"META",{name:!0,content:!0}),e=v(u,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0,referrerpolicy:!0}),u.forEach(p),r=j(l),le(o.$$.fragment,l),n=j(l),d.l(l),a=q(),this.h()},h(){document.title="Vishaal Ram",_(t,"name","description"),_(t,"content","Vishaal Ram's personal website!"),_(e,"rel","stylesheet"),_(e,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/css/all.min.css"),_(e,"integrity","sha512-ioRJH7yXnyX+7fXTQEKPULWkMn3CqMcapK0NNtCN8q//sW7ZeVFcbMJ9RvX99TwDg6P8rAH2IqUSt2TLab4Xmw=="),_(e,"crossorigin","anonymous"),_(e,"referrerpolicy","no-referrer")},m(l,u){y(document.head,t),y(document.head,e),w(l,r,u),ie(o,l,u),w(l,n,u),d.m(l,u),w(l,a,u),m=!0},p(l,[u]){u&1&&I(s,s=l[0].pathname)?(_e(),T(d,1,1,H),ce(),d=W(l),d.c(),C(d,1),d.m(a.parentNode,a)):d.p(l,u)},i(l){m||(C(o.$$.fragment,l),C(d),m=!0)},o(l){T(o.$$.fragment,l),T(d),m=!1},d(l){l&&(p(r),p(n),p(a)),p(t),p(e),ue(o,l),d.d(l)}}}function $e(c,t,e){let{$$slots:r={},$$scope:o}=t,{data:n}=t;return c.$$set=s=>{"data"in s&&e(0,n=s.data),"$$scope"in s&&e(1,o=s.$$scope)},[n,o,r]}class Ae extends B{constructor(t){super(),F(this,t,$e,ke,I,{data:0})}}export{Ae as component,Me as universal};
