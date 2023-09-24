import{s as _e,i as ne,n as ce}from"../chunks/scheduler.2e947722.js";import{S as ge,i as ve,g as f,m as L,s as E,H as we,h as _,j as y,n as Q,c as j,C as he,f as p,D as Se,k as c,a as q,x as h,o as Y,b as Ee,d as ke,t as be,e as ue,r as je,u as xe,v as $e,w as Ie,p as Ae}from"../chunks/index.d36feded.js";import{e as J,u as ye,d as Te,o as Ce}from"../chunks/each.d479417d.js";function me(o,t,l){const e=o.slice();return e[1]=t[l],e}function de(o,t){let l,e=t[1]+"",a,d;return{key:o,first:null,c(){l=f("div"),a=L(e),d=E(),this.h()},l(u){l=_(u,"DIV",{class:!0});var s=y(l);a=Q(s,e),d=j(s),s.forEach(p),this.h()},h(){c(l,"class","bg-amber-100 group-hover:bg-amber-200 transition-colors text-xs rounded-xl px-2 py-px"),this.first=l},m(u,s){q(u,l,s),h(l,a),h(l,d)},p(u,s){t=u,s&1&&e!==(e=t[1]+"")&&Y(a,e)},d(u){u&&p(l)}}}function qe(o){let t,l,e,a,d,u=o[0].emoji+" "+o[0].name,s,v,r,n="↗",g,O,$,k=[],Z=new Map,W,A,M=o[0].header+"",D,G,T,P,H=o[0].description+"",U,x,I,ee="Source",V,X,C,w,R,z,N,B=J(o[0].tags);const te=i=>i[1];for(let i=0;i<B.length;i+=1){let m=me(o,B,i),b=te(m);Z.set(b,k[i]=de(b,m))}return{c(){t=f("a"),l=f("div"),e=f("div"),a=f("a"),d=f("p"),s=L(u),v=E(),r=f("span"),r.textContent=n,O=E(),$=f("div");for(let i=0;i<k.length;i+=1)k[i].c();W=E(),A=f("p"),D=L(M),G=E(),T=f("p"),P=new we(!1),U=E(),x=f("a"),I=f("p"),I.textContent=ee,X=E(),C=f("div"),w=f("img"),this.h()},l(i){t=_(i,"A",{href:!0,target:!0});var m=y(t);l=_(m,"DIV",{class:!0});var b=y(l);e=_(b,"DIV",{class:!0});var S=y(e);a=_(S,"A",{href:!0,target:!0});var ae=y(a);d=_(ae,"P",{class:!0});var F=y(d);s=Q(F,u),v=j(F),r=_(F,"SPAN",{class:!0,"data-svelte-h":!0}),he(r)!=="svelte-1q1c0jd"&&(r.textContent=n),F.forEach(p),ae.forEach(p),O=j(S),$=_(S,"DIV",{class:!0});var se=y($);for(let K=0;K<k.length;K+=1)k[K].l(se);se.forEach(p),W=j(S),A=_(S,"P",{class:!0});var le=y(A);D=Q(le,M),le.forEach(p),G=j(S),T=_(S,"P",{class:!0});var re=y(T);P=Se(re,!1),re.forEach(p),U=j(S),x=_(S,"A",{href:!0,target:!0});var ie=y(x);I=_(ie,"P",{class:!0,"data-svelte-h":!0}),he(I)!=="svelte-17ruz8q"&&(I.textContent=ee),ie.forEach(p),S.forEach(p),X=j(b),C=_(b,"DIV",{class:!0});var oe=y(C);w=_(oe,"IMG",{class:!0,alt:!0,src:!0}),oe.forEach(p),b.forEach(p),m.forEach(p),this.h()},h(){c(r,"class","font-sans text-neutral-500 group-hover:text-black transition-colors"),c(d,"class","group text-2xl font-medium font-overflow rounded-md hover:bg-amber-100 px-3 transition-colors"),c(a,"href",g=o[0].link),c(a,"target","_blank"),c($,"class","flex space-x-1 mt-1 mb-2"),c(A,"class","text-weight-400 mb-2"),P.a=null,c(T,"class","text-sm text-neutral-500 mb-2"),c(I,"class","underline"),c(x,"href",V=o[0].source),c(x,"target","_blank"),c(e,"class","pr-5"),c(w,"class","rounded-md"),c(w,"alt",R=o[0].name),ne(w.src,z="/images/projects/"+o[0].name+".png")||c(w,"src",z),c(C,"class","p-5"),c(l,"class","grid grid-cols-2 sm:grid-cols-1 group hover:bg-amber-100 transition-transform hover:scale-105 p-4 rounded-lg transition-colors"),c(t,"href",N=o[0].link),c(t,"target","_blank")},m(i,m){q(i,t,m),h(t,l),h(l,e),h(e,a),h(a,d),h(d,s),h(d,v),h(d,r),h(e,O),h(e,$);for(let b=0;b<k.length;b+=1)k[b]&&k[b].m($,null);h(e,W),h(e,A),h(A,D),h(e,G),h(e,T),P.m(H,T),h(e,U),h(e,x),h(x,I),h(l,X),h(l,C),h(C,w)},p(i,[m]){m&1&&u!==(u=i[0].emoji+" "+i[0].name)&&Y(s,u),m&1&&g!==(g=i[0].link)&&c(a,"href",g),m&1&&(B=J(i[0].tags),k=ye(k,m,te,1,i,B,Z,$,Te,de,null,me)),m&1&&M!==(M=i[0].header+"")&&Y(D,M),m&1&&H!==(H=i[0].description+"")&&P.p(H),m&1&&V!==(V=i[0].source)&&c(x,"href",V),m&1&&R!==(R=i[0].name)&&c(w,"alt",R),m&1&&!ne(w.src,z="/images/projects/"+i[0].name+".png")&&c(w,"src",z),m&1&&N!==(N=i[0].link)&&c(t,"href",N)},i:ce,o:ce,d(i){i&&p(t);for(let m=0;m<k.length;m+=1)k[m].d()}}}function Me(o,t,l){let{data:e}=t;return o.$$set=a=>{"data"in a&&l(0,e=a.data)},[e]}class Pe extends ge{constructor(t){super(),ve(this,t,Me,qe,_e,{data:0})}}function pe(o,t,l){const e=o.slice();return e[1]=t[l],e}function fe(o,t){let l,e,a,d,u;return e=new Pe({props:{data:t[1]}}),{key:o,first:null,c(){l=ue(),je(e.$$.fragment),a=E(),d=f("hr"),this.h()},l(s){l=ue(),xe(e.$$.fragment,s),a=j(s),d=_(s,"HR",{}),this.h()},h(){this.first=l},m(s,v){q(s,l,v),$e(e,s,v),q(s,a,v),q(s,d,v),u=!0},p(s,v){t=s},i(s){u||(ke(e.$$.fragment,s),u=!0)},o(s){be(e.$$.fragment,s),u=!1},d(s){s&&(p(l),p(a),p(d)),Ie(e,s)}}}function De(o){let t,l,e,a=[],d=new Map,u,s=J(o[0]);const v=r=>r[1];for(let r=0;r<s.length;r+=1){let n=pe(o,s,r),g=v(n);d.set(g,a[r]=fe(g,n))}return{c(){t=f("section"),l=f("hr"),e=E();for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){t=_(r,"SECTION",{class:!0});var n=y(t);l=_(n,"HR",{}),e=j(n);for(let g=0;g<a.length;g+=1)a[g].l(n);n.forEach(p),this.h()},h(){c(t,"class","layout-md")},m(r,n){q(r,t,n),h(t,l),h(t,e);for(let g=0;g<a.length;g+=1)a[g]&&a[g].m(t,null);u=!0},p(r,[n]){n&1&&(s=J(r[0]),Ae(),a=ye(a,n,v,1,r,s,d,t,Ce,fe,null,pe),Ee())},i(r){if(!u){for(let n=0;n<s.length;n+=1)ke(a[n]);u=!0}},o(r){for(let n=0;n<a.length;n+=1)be(a[n]);u=!1},d(r){r&&p(t);for(let n=0;n<a.length;n+=1)a[n].d()}}}function He(o){return[[{name:"qstack",emoji:"✔️",tags:["React/TS","Flask","Auth0"],header:"A hackathon helpqueue platform!",description:"A ticket submission platform made for HackMIT 2023. Allows hackers to create tickets with technical issues which mentors can claim and provide assistance.",link:"https://qstack.hackmit.org",source:"https://github.com/techx/qstack"},{name:"vishy.lol",emoji:"🐧",tags:["Sveltekit/JS","TailwindCSS"],header:"This website ‼️",description:"Woah where am I? My lightweight personal website powered by Svelte! No unnecessary packages and plugins needed :0",link:"https://vishy.lol",source:"https://github.com/vishaalram02/vishy.lol"},{name:"blendai",emoji:"🖌️",tags:["React/TS","Flask","Pytorch"],header:"A text-based image editor! (HTN 2022)",description:"Utilize the blended-diffusion model to selectively edit an image with a prompt. Deployed as a serverless webhook on the cloud using <a target='_blank' href='https://beam.cloud'>Beam</a>.",link:"https://blendai-95173c1b3ebe.herokuapp.com/",source:"https://github.com/vishaalram02/blendai"},{name:"multimine",emoji:"💣",tags:["React/JS","Express","MongoDB","SocketIO"],header:"Minesweeper live !! (MIT Weblab 2022)",description:"The first webapp I've worked on : ) A realtime multiplayer minesweeper app that allows you to create game lobbies and race against your friends on the same board.",link:"https://multimine.vishy.lol",source:"https://github.com/vishaalram02/multimine"},{name:"bakery",emoji:"🧑‍🍳",tags:["Express"],header:"Vishy's cookies? (HackMIT Puzzle 2023)",description:"A simple cross site scripting (XSS) challenge. Exploit a vulnerability in image upload to acquire Vishy's cookies! Submissions are automatically verified with a headless chromium browser.",link:"https://bakery.hackxgpt.com/u/vishaalram02_7abee6",source:"https://github.com/vishaalram02/bakery"}]]}class Ne extends ge{constructor(t){super(),ve(this,t,He,De,_e,{})}}export{Ne as component};
