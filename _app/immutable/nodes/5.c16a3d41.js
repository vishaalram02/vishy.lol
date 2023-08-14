import{s as T,n as w}from"../chunks/scheduler.2e947722.js";import{S as $,i as q,g,s as k,h as b,j as y,C as H,c as E,f as p,k as C,a as P,x as h,m as A,n as I}from"../chunks/index.d36feded.js";import{e as x,u as N,d as O}from"../chunks/each.d479417d.js";function V(f,n,t){const r=f.slice();return r[1]=n[t],r}function j(f,n,t){const r=f.slice();return r[4]=n[t],r}function F(f,n){let t,r=n[4].name+"",_,l,u,c=n[4].number+"",m,e;return{key:f,first:null,c(){t=g("li"),_=A(r),l=k(),u=g("span"),m=A(c),e=k(),this.h()},l(s){t=b(s,"LI",{});var a=y(t);_=I(a,r),l=E(a),u=b(a,"SPAN",{class:!0});var v=y(u);m=I(v,c),v.forEach(p),e=E(a),a.forEach(p),this.h()},h(){C(u,"class","float-right text-neutral-500 sm:hidden"),this.first=t},m(s,a){P(s,t,a),h(t,_),h(t,l),h(t,u),h(u,m),h(t,e)},p(s,a){n=s},d(s){s&&p(t)}}}function L(f,n){let t,r,_=n[1].name+"",l,u,c,m,e=[],s=new Map,a,v=x(n[1].classes);const M=i=>i[4];for(let i=0;i<v.length;i+=1){let o=j(n,v,i),d=M(o);s.set(d,e[i]=F(d,o))}return{key:f,first:null,c(){t=g("div"),r=g("p"),l=A(_),u=k(),c=g("div"),m=g("ul");for(let i=0;i<e.length;i+=1)e[i].c();a=k(),this.h()},l(i){t=b(i,"DIV",{class:!0});var o=y(t);r=b(o,"P",{class:!0});var d=y(r);l=I(d,_),d.forEach(p),u=E(o),c=b(o,"DIV",{class:!0});var D=y(c);m=b(D,"UL",{class:!0});var G=y(m);for(let S=0;S<e.length;S+=1)e[S].l(G);G.forEach(p),D.forEach(p),a=E(o),o.forEach(p),this.h()},h(){C(r,"class","text-xl"),C(m,"class","list-disc"),C(c,"class","ml-10 text-lg"),C(t,"class","rounded-lg hover:bg-amber-100 p-2 transition-colors"),this.first=t},m(i,o){P(i,t,o),h(t,r),h(r,l),h(t,u),h(t,c),h(c,m);for(let d=0;d<e.length;d+=1)e[d]&&e[d].m(m,null);h(t,a)},p(i,o){n=i,o&1&&(v=x(n[1].classes),e=N(e,o,M,1,n,v,s,m,O,F,null,j))},d(i){i&&p(t);for(let o=0;o<e.length;o+=1)e[o].d()}}}function U(f){let n,t,r="some of my favorite classes! 📚",_,l=[],u=new Map,c=x(f[0]);const m=e=>e[1];for(let e=0;e<c.length;e+=1){let s=V(f,c,e),a=m(s);u.set(a,l[e]=L(a,s))}return{c(){n=g("section"),t=g("p"),t.textContent=r,_=k();for(let e=0;e<l.length;e+=1)l[e].c();this.h()},l(e){n=b(e,"SECTION",{class:!0});var s=y(n);t=b(s,"P",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-1bjohfr"&&(t.textContent=r),_=E(s);for(let a=0;a<l.length;a+=1)l[a].l(s);s.forEach(p),this.h()},h(){C(t,"class","text-2xl mb-5"),C(n,"class","layout-md")},m(e,s){P(e,n,s),h(n,t),h(n,_);for(let a=0;a<l.length;a+=1)l[a]&&l[a].m(n,null)},p(e,[s]){s&1&&(c=x(e[0]),l=N(l,s,m,1,e,c,u,n,O,L,null,V))},i:w,o:w,d(e){e&&p(n);for(let s=0;s<l.length;s+=1)l[s].d()}}}function W(f){return[[{name:"💻 Computer Science",classes:[{name:"[Fall 23] Operating Systems Engineering",number:"6.1810"},{name:"[Fall 23] Software Performance Engineering",number:"6.1060"},{name:"Distributed Systems",number:"6.5800"},{name:"Computer Systems Engineering",number:"6.1800"},{name:"Assembly and C",number:"6.1900"},{name:"[Grader] Design and Analysis of Algorithms",number:"6.1220"}]},{name:"✖️ Math",classes:[{name:"Elliptic Curves",number:"18.783"},{name:"Algebraic Combinatorics",number:"18.212"},{name:"Combinatorial Theory",number:"18.217"},{name:"Statistics for Applications",number:"18.650"},{name:"Abstract Algebra",number:"18.701"}]},{name:"🎨 Humanities",classes:[{name:"Chinese I-V",number:"21G.101-21G.105"},{name:"Chinese Calligraphy",number:"21G.111"},{name:"Infant and Early Childhood Cognition",number:"9.85"},{name:"Computational Psycholinguistics",number:"9.19"},{name:"Introduction to Western Music",number:"21M.011"}]}]]}class K extends ${constructor(n){super(),q(this,n,W,U,T,{})}}export{K as component};