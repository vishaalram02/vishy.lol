var tt=Object.defineProperty;var et=(t,e,n)=>e in t?tt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var y=(t,e,n)=>(et(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as T,j as M,h as b,k as I,l as z,m as nt,p as it,q as st,v as rt,w as O,x as lt,y as at,z as ot}from"./scheduler.2e947722.js";const F=typeof window<"u";let V=F?()=>window.performance.now():()=>Date.now(),R=F?t=>requestAnimationFrame(t):w;const x=new Set;function W(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&R(W)}function J(t){let e;return x.size===0&&R(W),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let D=!1;function ct(){D=!0}function ft(){D=!1}function ut(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let o=0;o<e.length;o++){const u=e[o];u.claim_order!==void 0&&a.push(u)}e=a}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let a=0;a<e.length;a++){const o=e[a].claim_order,u=(s>0&&e[n[s]].claim_order<=o?s+1:ut(1,s,_=>e[n[_]].claim_order,o))-1;i[a]=n[u]+1;const f=u+1;n[f]=a,s=Math.max(f,s)}const l=[],r=[];let c=e.length-1;for(let a=n[s]+1;a!=0;a=i[a-1]){for(l.push(e[a-1]);c>=a;c--)r.push(e[c]);c--}for(;c>=0;c--)r.push(e[c]);l.reverse(),r.sort((a,o)=>a.claim_order-o.claim_order);for(let a=0,o=0;a<r.length;a++){for(;o<l.length&&r[a].claim_order>=l[o].claim_order;)o++;const u=o<l.length?l[o]:null;t.insertBefore(r[a],u)}}function dt(t,e){t.appendChild(e)}function K(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ht(t){const e=j("style");return e.textContent="/* empty */",mt(K(t),e),e.sheet}function mt(t,e){return dt(t.head||t,e),e.sheet}function pt(t,e){if(D){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function $t(t,e,n){t.insertBefore(e,n||null)}function yt(t,e,n){D&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function j(t){return document.createElement(t)}function gt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function Rt(){return k(" ")}function jt(){return k("")}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Bt(t){return t.dataset.svelteH}function xt(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function U(t,e,n,i,s=!1){Q(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const c=t[r];if(e(c)){const a=n(c);return a===void 0?t.splice(r,1):t[r]=a,s||(t.claim_info.last_index=r),c}}for(let r=t.claim_info.last_index-1;r>=0;r--){const c=t[r];if(e(c)){const a=n(c);return a===void 0?t.splice(r,1):t[r]=a,s?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,c}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function wt(t,e,n,i){return U(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const c=s.attributes[r];n[c.name]||l.push(c.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function zt(t,e,n){return wt(t,e,n,j)}function vt(t,e){return U(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(e),!0)}function Ot(t){return vt(t," ")}function q(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function qt(t,e){const n=q(t,"HTML_TAG_START",0),i=q(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new G(e);Q(t);const s=t.splice(n,i-n+1);N(s[0]),N(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new G(e,l)}function Gt(t,e){e=""+e,t.data!==e&&(t.data=e)}function It(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ft(t,e,n){t.classList.toggle(e,!!n)}function Nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Vt(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Tt{constructor(e=!1){y(this,"is_svg",!1);y(this,"e");y(this,"n");y(this,"t");y(this,"a");this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=gt(n.nodeName):this.e=j(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)$t(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(N)}}class G extends Tt{constructor(n=!1,i){super(n);y(this,"l");this.e=this.n=null,this.l=i}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let i=0;i<this.n.length;i+=1)yt(this.t,this.n[i],n)}}function Wt(t,e){return new t(e)}const S=new Map;let C=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:ht(e),rules:{}};return S.set(t,n),n}function X(t,e,n,i,s,l,r,c=0){const a=16.666/i;let o=`{
`;for(let $=0;$<=1;$+=a){const p=e+(n-e)*l($);o+=$*100+`%{${r(p,1-p)}}
`}const u=o+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Et(u)}_${c}`,_=K(t),{stylesheet:d,rules:h}=S.get(_)||At(_,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${s}ms 1 both`,C+=1,f}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),C-=s,C||bt())}function bt(){R(()=>{C||(S.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&N(e)}),S.clear())})}let v;function Y(){return v||(v=Promise.resolve(),v.then(()=>{v=null})),v}function H(t,e,n){t.dispatchEvent(Nt(`${e?"intro":"outro"}${n}`))}const A=new Set;let g;function Jt(){g={r:0,c:[],p:g}}function Kt(){g.r||T(g.c),g=g.p}function St(t,e){t&&t.i&&(A.delete(t),t.i(e))}function Qt(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Z={duration:0};function Ut(t,e,n){const i={direction:"in"};let s=e(t,n,i),l=!1,r,c,a=0;function o(){r&&P(t,r)}function u(){const{delay:_=0,duration:d=300,easing:h=I,tick:m=w,css:$}=s||Z;$&&(r=X(t,0,1,d,_,h,$,a++)),m(0,1);const p=V()+_,E=p+d;c&&c.abort(),l=!0,b(()=>H(t,!0,"start")),c=J(L=>{if(l){if(L>=E)return m(1,0),H(t,!0,"end"),o(),l=!1;if(L>=p){const B=h((L-p)/d);m(B,1-B)}}return l})}let f=!1;return{start(){f||(f=!0,P(t),M(s)?(s=s(i),Y().then(u)):u())},invalidate(){f=!1},end(){l&&(o(),l=!1)}}}function Xt(t,e,n){const i={direction:"out"};let s=e(t,n,i),l=!0,r;const c=g;c.r+=1;let a;function o(){const{delay:u=0,duration:f=300,easing:_=I,tick:d=w,css:h}=s||Z;h&&(r=X(t,1,0,f,u,_,h));const m=V()+u,$=m+f;b(()=>H(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),J(p=>{if(l){if(p>=$)return d(0,1),H(t,!1,"end"),--c.r||T(c.c),!1;if(p>=m){const E=_((p-m)/f);d(1-E,E)}}return l})}return M(s)?Y().then(()=>{s=s(i),o()}):o(),{end(u){u&&"inert"in t&&(t.inert=a),u&&s.tick&&s.tick(1,0),l&&(r&&P(t,r),l=!1)}}}function Yt(t){t&&t.c()}function Zt(t,e){t&&t.l(e)}function Ct(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),b(()=>{const l=t.$$.on_mount.map(lt).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...l):T(l),t.$$.on_mount=[]}),s.forEach(b)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(st(n.after_update),T(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(at.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,i,s,l,r,c=[-1]){const a=rt;O(t);const o=t.$$={fragment:null,ctx:[],props:l,update:w,not_equal:s,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:z(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};r&&r(o.root);let u=!1;if(o.ctx=n?n(t,e.props||{},(f,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&s(o.ctx[f],o.ctx[f]=h)&&(!o.skip_bound&&o.bound[f]&&o.bound[f](h),u&&Mt(t,f)),_}):[],o.update(),u=!0,T(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){ct();const f=xt(e.target);o.fragment&&o.fragment.l(f),f.forEach(N)}else o.fragment&&o.fragment.c();e.intro&&St(t.$$.fragment),Ct(t,e.target,e.anchor),ft(),nt()}O(a)}class ee{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){Ht(this,1),this.$destroy=w}$on(e,n){if(!M(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!it(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Dt);export{Vt as A,Ut as B,Xt as C,qt as D,G as H,ee as S,yt as a,Kt as b,Ot as c,St as d,jt as e,N as f,j as g,zt as h,te as i,xt as j,kt as k,It as l,k as m,vt as n,Gt as o,Jt as p,Wt as q,Yt as r,Rt as s,Qt as t,Zt as u,Ct as v,Ht as w,Bt as x,pt as y,Ft as z};