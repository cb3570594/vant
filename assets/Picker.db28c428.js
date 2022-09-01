import{c as oe,u as fe,n as ae,f as le,F as J,l as se,e as de,b as he,G as ve}from"./use-translate.4764287f.js";import{d as A,u as ge,a as xe,n as W,b as ie,c as L,m as be,t as Ce}from"./with-install.bb994bce.js";import{H as X,a as Te}from"./constant.80c6de18.js";import{u as ce}from"./use-expose.6911a823.js";import{L as ye}from"./index.eee57e92.js";import{d as Z}from"./deep-clone.38a4b1ce.js";import{u as Ie}from"./use-touch.79e2b006.js";import{z as ue,C as E,H as we,x as Q,e as r,D as q}from"./vue-libs.7ad34eae.js";const ee=200,te=300,Oe=15,[re,G]=oe("picker-column");function ke(t){const{transform:g}=window.getComputedStyle(t),c=g.slice(7,g.length-1).split(", ")[5];return Number(c)}const me=Symbol(re),F=t=>le(t)&&t.disabled,He=ue({name:re,props:{textKey:A(String),readonly:Boolean,allowHtml:Boolean,className:ge,itemHeight:A(Number),defaultIndex:xe(0),swipeDuration:A(W),initialOptions:ie(),visibleItemCount:A(W)},emits:["change"],setup(t,{emit:g,slots:c}){let h,T,v,i,m;const D=E(),y=E(),a=we({index:t.defaultIndex,offset:0,duration:0,options:Z(t.initialOptions)}),w=Ie(),O=()=>a.options.length,k=()=>t.itemHeight*(+t.visibleItemCount-1)/2,N=o=>{o=J(o,0,O());for(let l=o;l<O();l++)if(!F(a.options[l]))return l;for(let l=o-1;l>=0;l--)if(!F(a.options[l]))return l},f=(o,l)=>{o=N(o)||0;const u=-o*t.itemHeight,d=()=>{o!==a.index&&(a.index=o,l&&g("change",o))};h&&u!==a.offset?m=d:d(),a.offset=u},b=o=>{JSON.stringify(o)!==JSON.stringify(a.options)&&(a.options=Z(o),f(t.defaultIndex))},M=o=>{h||t.readonly||(m=null,a.duration=ee,f(o,!0))},P=o=>le(o)&&t.textKey in o?o[t.textKey]:o,H=o=>J(Math.round(-o/t.itemHeight),0,O()-1),p=(o,l)=>{const u=Math.abs(o/l);o=a.offset+u/.003*(o<0?-1:1);const d=H(o);a.duration=+t.swipeDuration,f(d,!0)},B=()=>{h=!1,a.duration=0,m&&(m(),m=null)},S=o=>{if(!t.readonly){if(w.start(o),h){const l=ke(y.value);a.offset=Math.min(0,l-k()),T=a.offset}else T=a.offset;a.duration=0,v=Date.now(),i=T,m=null}},R=o=>{if(t.readonly)return;w.move(o),w.isVertical()&&(h=!0,se(o,!0)),a.offset=J(T+w.deltaY.value,-(O()*t.itemHeight),t.itemHeight);const l=Date.now();l-v>te&&(v=l,i=a.offset)},V=()=>{if(t.readonly)return;const o=a.offset-i,l=Date.now()-v;if(l<te&&Math.abs(o)>Oe){p(o,l);return}const d=H(a.offset);a.duration=ee,f(d,!0),setTimeout(()=>{h=!1},0)},_=()=>{const o={height:`${t.itemHeight}px`};return a.options.map((l,u)=>{const d=P(l),$=F(l),Y={role:"button",style:o,tabindex:$?-1:0,class:G("item",{disabled:$,selected:u===a.index}),onClick:()=>M(u)},z={class:"van-ellipsis",[t.allowHtml?"innerHTML":"textContent"]:d};return r("li",Y,[c.option?c.option(l):r("div",z,null)])})},j=o=>{const{options:l}=a;for(let u=0;u<l.length;u++)if(P(l[u])===o)return f(u)},K=()=>a.options[a.index],U=()=>a.options.length;return f(a.index),fe(me),ce({state:a,setIndex:f,getValue:K,setValue:j,setOptions:b,hasOptions:U,stopMomentum:B}),Q(()=>t.initialOptions,b),Q(()=>t.defaultIndex,o=>f(o)),ae("touchmove",R,{target:D}),()=>r("div",{ref:D,class:[G(),t.className],onTouchstartPassive:S,onTouchend:V,onTouchcancel:V},[r("ul",{ref:y,style:{transform:`translate3d(0, ${a.offset+k()}px, 0)`,transitionDuration:`${a.duration}ms`,transitionProperty:a.duration?"all":"none"},class:G("wrapper"),onTransitionend:B},[_()])])}}),[Me,x,ne]=oe("picker"),Pe={title:String,loading:Boolean,readonly:Boolean,allowHtml:Boolean,itemHeight:L(44),showToolbar:Ce,swipeDuration:L(1e3),visibleItemCount:L(6),cancelButtonText:String,confirmButtonText:String},Se=de({},Pe,{columns:ie(),valueKey:String,defaultIndex:L(0),toolbarPosition:be("top"),columnsFieldNames:Object}),$e=ue({name:Me,props:Se,emits:["confirm","cancel","change"],setup(t,{emit:g,slots:c}){const h=E(!1),T=E(),v=E([]),i=q(()=>{const{columnsFieldNames:e}=t;return{text:(e==null?void 0:e.text)||t.valueKey||"text",values:(e==null?void 0:e.values)||"values",children:(e==null?void 0:e.children)||"children"}}),{children:m,linkChildren:D}=he(me);D();const y=q(()=>ve(t.itemHeight)),a=q(()=>{const e=t.columns[0];if(typeof e=="object"){if(i.value.children in e)return"cascade";if(i.value.values in e)return"object"}return"plain"}),w=()=>{var s;const e=[];let n={[i.value.children]:t.columns};for(;n&&n[i.value.children];){const C=n[i.value.children];let I=(s=n.defaultIndex)!=null?s:+t.defaultIndex;for(;C[I]&&C[I].disabled;)if(I<C.length-1)I++;else{I=0;break}e.push({[i.value.values]:n[i.value.children],className:n.className,defaultIndex:I}),n=C[I]}v.value=e},O=()=>{const{columns:e}=t;a.value==="plain"?v.value=[{[i.value.values]:e}]:a.value==="cascade"?w():v.value=e,h.value=v.value.some(n=>n[i.value.values]&&n[i.value.values].length!==0)||m.some(n=>n.hasOptions)},k=()=>m.map(e=>e.state.index),N=(e,n)=>{const s=m[e];s&&(s.setOptions(n),h.value=!0)},f=e=>{let n={[i.value.children]:t.columns};const s=k();for(let C=0;C<=e;C++)n=n[i.value.children][s[C]];for(;n&&n[i.value.children];)e++,N(e,n[i.value.children]),n=n[i.value.children][n.defaultIndex||0]},b=e=>m[e],M=e=>{const n=b(e);if(n)return n.getValue()},P=(e,n)=>{const s=b(e);s&&(s.setValue(n),a.value==="cascade"&&f(e))},H=e=>{const n=b(e);if(n)return n.state.index},p=(e,n)=>{const s=b(e);s&&(s.setIndex(n),a.value==="cascade"&&f(e))},B=e=>{const n=b(e);if(n)return n.state.options},S=()=>m.map(e=>e.getValue()),R=e=>{e.forEach((n,s)=>{P(s,n)})},V=e=>{e.forEach((n,s)=>{p(s,n)})},_=e=>{a.value==="plain"?g(e,M(0),H(0)):g(e,S(),k())},j=e=>{a.value==="cascade"&&f(e),a.value==="plain"?g("change",M(0),H(0)):g("change",S(),e)},K=()=>{m.forEach(e=>e.stopMomentum()),_("confirm")},U=()=>_("cancel"),o=()=>{if(c.title)return c.title();if(t.title)return r("div",{class:[x("title"),"van-ellipsis"]},[t.title])},l=()=>{const e=t.cancelButtonText||ne("cancel");return r("button",{type:"button",class:[x("cancel"),X],onClick:U},[c.cancel?c.cancel():e])},u=()=>{const e=t.confirmButtonText||ne("confirm");return r("button",{type:"button",class:[x("confirm"),X],onClick:K},[c.confirm?c.confirm():e])},d=()=>{if(t.showToolbar){const e=c.toolbar||c.default;return r("div",{class:x("toolbar")},[e?e():[l(),o(),u()]])}},$=()=>v.value.map((e,n)=>{var s;return r(He,{textKey:i.value.text,readonly:t.readonly,allowHtml:t.allowHtml,className:e.className,itemHeight:y.value,defaultIndex:(s=e.defaultIndex)!=null?s:+t.defaultIndex,swipeDuration:t.swipeDuration,initialOptions:e[i.value.values],visibleItemCount:t.visibleItemCount,onChange:()=>j(n)},{option:c.option})}),Y=e=>{if(h.value){const n={height:`${y.value}px`},s={backgroundSize:`100% ${(e-y.value)/2}px`};return[r("div",{class:x("mask"),style:s},null),r("div",{class:[Te,x("frame")],style:n},null)]}},z=()=>{const e=y.value*+t.visibleItemCount,n={height:`${e}px`};return r("div",{ref:T,class:x("columns"),style:n},[$(),Y(e)])};return Q(()=>t.columns,O,{immediate:!0}),ae("touchmove",se,{target:T}),ce({confirm:K,getValues:S,setValues:R,getIndexes:k,setIndexes:V,getColumnIndex:H,setColumnIndex:p,getColumnValue:M,setColumnValue:P,getColumnValues:B,setColumnValues:N}),()=>{var e,n;return r("div",{class:x()},[t.toolbarPosition==="top"?d():null,t.loading?r(ye,{class:x("loading")},null):null,(e=c["columns-top"])==null?void 0:e.call(c),z(),(n=c["columns-bottom"])==null?void 0:n.call(c),t.toolbarPosition==="bottom"?d():null])}}});export{$e as _,Pe as p};
