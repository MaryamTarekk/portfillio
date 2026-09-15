(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Nc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ls={exports:{}},il={},is={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=Symbol.for("react.element"),Cc=Symbol.for("react.portal"),zc=Symbol.for("react.fragment"),Ec=Symbol.for("react.strict_mode"),Pc=Symbol.for("react.profiler"),bc=Symbol.for("react.provider"),Mc=Symbol.for("react.context"),Tc=Symbol.for("react.forward_ref"),_c=Symbol.for("react.suspense"),Lc=Symbol.for("react.memo"),Rc=Symbol.for("react.lazy"),Wo=Symbol.iterator;function Ic(e){return e===null||typeof e!="object"?null:(e=Wo&&e[Wo]||e["@@iterator"],typeof e=="function"?e:null)}var os={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},as=Object.assign,ss={};function sn(e,t,n){this.props=e,this.context=t,this.refs=ss,this.updater=n||os}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function us(){}us.prototype=sn.prototype;function Ki(e,t,n){this.props=e,this.context=t,this.refs=ss,this.updater=n||os}var Yi=Ki.prototype=new us;Yi.constructor=Ki;as(Yi,sn.prototype);Yi.isPureReactComponent=!0;var Qo=Array.isArray,cs=Object.prototype.hasOwnProperty,Xi={current:null},ds={key:!0,ref:!0,__self:!0,__source:!0};function fs(e,t,n){var r,l={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)cs.call(t,r)&&!ds.hasOwnProperty(r)&&(l[r]=t[r]);var s=arguments.length-2;if(s===1)l.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)l[r]===void 0&&(l[r]=s[r]);return{$$typeof:Jn,type:e,key:i,ref:a,props:l,_owner:Xi.current}}function Dc(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ji(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function Ac(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Go=/\/+/g;function zl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ac(""+e.key):t.toString(36)}function wr(e,t,n,r,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Jn:case Cc:a=!0}}if(a)return a=e,l=l(a),e=r===""?"."+zl(a,0):r,Qo(l)?(n="",e!=null&&(n=e.replace(Go,"$&/")+"/"),wr(l,t,n,"",function(c){return c})):l!=null&&(Ji(l)&&(l=Dc(l,n+(!l.key||a&&a.key===l.key?"":(""+l.key).replace(Go,"$&/")+"/")+e)),t.push(l)),1;if(a=0,r=r===""?".":r+":",Qo(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+zl(i,s);a+=wr(i,t,n,u,l)}else if(u=Ic(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+zl(i,s++),a+=wr(i,t,n,u,l);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function lr(e,t,n){if(e==null)return e;var r=[],l=0;return wr(e,r,"","",function(i){return t.call(n,i,l++)}),r}function Fc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},jr={transition:null},Oc={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:jr,ReactCurrentOwner:Xi};function ps(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:lr,forEach:function(e,t,n){lr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return lr(e,function(){t++}),t},toArray:function(e){return lr(e,function(t){return t})||[]},only:function(e){if(!Ji(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=sn;_.Fragment=zc;_.Profiler=Pc;_.PureComponent=Ki;_.StrictMode=Ec;_.Suspense=_c;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oc;_.act=ps;_.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=as({},e.props),l=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Xi.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)cs.call(t,u)&&!ds.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Jn,type:e.type,key:l,ref:i,props:r,_owner:a}};_.createContext=function(e){return e={$$typeof:Mc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bc,_context:e},e.Consumer=e};_.createElement=fs;_.createFactory=function(e){var t=fs.bind(null,e);return t.type=e,t};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:Tc,render:e}};_.isValidElement=Ji;_.lazy=function(e){return{$$typeof:Rc,_payload:{_status:-1,_result:e},_init:Fc}};_.memo=function(e,t){return{$$typeof:Lc,type:e,compare:t===void 0?null:t}};_.startTransition=function(e){var t=jr.transition;jr.transition={};try{e()}finally{jr.transition=t}};_.unstable_act=ps;_.useCallback=function(e,t){return ce.current.useCallback(e,t)};_.useContext=function(e){return ce.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};_.useEffect=function(e,t){return ce.current.useEffect(e,t)};_.useId=function(){return ce.current.useId()};_.useImperativeHandle=function(e,t,n){return ce.current.useImperativeHandle(e,t,n)};_.useInsertionEffect=function(e,t){return ce.current.useInsertionEffect(e,t)};_.useLayoutEffect=function(e,t){return ce.current.useLayoutEffect(e,t)};_.useMemo=function(e,t){return ce.current.useMemo(e,t)};_.useReducer=function(e,t,n){return ce.current.useReducer(e,t,n)};_.useRef=function(e){return ce.current.useRef(e)};_.useState=function(e){return ce.current.useState(e)};_.useSyncExternalStore=function(e,t,n){return ce.current.useSyncExternalStore(e,t,n)};_.useTransition=function(){return ce.current.useTransition()};_.version="18.3.1";is.exports=_;var T=is.exports;const $c=Nc(T);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uc=T,Bc=Symbol.for("react.element"),Vc=Symbol.for("react.fragment"),Hc=Object.prototype.hasOwnProperty,Wc=Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qc={key:!0,ref:!0,__self:!0,__source:!0};function ms(e,t,n){var r,l={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)Hc.call(t,r)&&!Qc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Bc,type:e,key:i,ref:a,props:l,_owner:Wc.current}}il.Fragment=Vc;il.jsx=ms;il.jsxs=ms;ls.exports=il;var o=ls.exports,ql={},hs={exports:{}},we={},vs={exports:{}},gs={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,b){var M=N.length;N.push(b);e:for(;0<M;){var G=M-1>>>1,Z=N[G];if(0<l(Z,b))N[G]=b,N[M]=Z,M=G;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var b=N[0],M=N.pop();if(M!==b){N[0]=M;e:for(var G=0,Z=N.length,nr=Z>>>1;G<nr;){var yt=2*(G+1)-1,Cl=N[yt],xt=yt+1,rr=N[xt];if(0>l(Cl,M))xt<Z&&0>l(rr,Cl)?(N[G]=rr,N[xt]=M,G=xt):(N[G]=Cl,N[yt]=M,G=yt);else if(xt<Z&&0>l(rr,M))N[G]=rr,N[xt]=M,G=xt;else break e}}return b}function l(N,b){var M=N.sortIndex-b.sortIndex;return M!==0?M:N.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var u=[],c=[],h=1,v=null,m=3,x=!1,k=!1,w=!1,$=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var b=n(c);b!==null;){if(b.callback===null)r(c);else if(b.startTime<=N)r(c),b.sortIndex=b.expirationTime,t(u,b);else break;b=n(c)}}function g(N){if(w=!1,p(N),!k)if(n(u)!==null)k=!0,Sl(S);else{var b=n(c);b!==null&&Nl(g,b.startTime-N)}}function S(N,b){k=!1,w&&(w=!1,f(E),E=-1),x=!0;var M=m;try{for(p(b),v=n(u);v!==null&&(!(v.expirationTime>b)||N&&!be());){var G=v.callback;if(typeof G=="function"){v.callback=null,m=v.priorityLevel;var Z=G(v.expirationTime<=b);b=e.unstable_now(),typeof Z=="function"?v.callback=Z:v===n(u)&&r(u),p(b)}else r(u);v=n(u)}if(v!==null)var nr=!0;else{var yt=n(c);yt!==null&&Nl(g,yt.startTime-b),nr=!1}return nr}finally{v=null,m=M,x=!1}}var C=!1,z=null,E=-1,Q=5,L=-1;function be(){return!(e.unstable_now()-L<Q)}function dn(){if(z!==null){var N=e.unstable_now();L=N;var b=!0;try{b=z(!0,N)}finally{b?fn():(C=!1,z=null)}}else C=!1}var fn;if(typeof d=="function")fn=function(){d(dn)};else if(typeof MessageChannel<"u"){var Ho=new MessageChannel,Sc=Ho.port2;Ho.port1.onmessage=dn,fn=function(){Sc.postMessage(null)}}else fn=function(){$(dn,0)};function Sl(N){z=N,C||(C=!0,fn())}function Nl(N,b){E=$(function(){N(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||x||(k=!0,Sl(S))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(N){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m}var M=m;m=b;try{return N()}finally{m=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,b){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var M=m;m=N;try{return b()}finally{m=M}},e.unstable_scheduleCallback=function(N,b,M){var G=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?G+M:G):M=G,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=M+Z,N={id:h++,callback:b,priorityLevel:N,startTime:M,expirationTime:Z,sortIndex:-1},M>G?(N.sortIndex=M,t(c,N),n(u)===null&&N===n(c)&&(w?(f(E),E=-1):w=!0,Nl(g,M-G))):(N.sortIndex=Z,t(u,N),k||x||(k=!0,Sl(S))),N},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(N){var b=m;return function(){var M=m;m=b;try{return N.apply(this,arguments)}finally{m=M}}}})(gs);vs.exports=gs;var Gc=vs.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=T,ke=Gc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ys=new Set,Rn={};function _t(e,t){qt(e,t),qt(e+"Capture",t)}function qt(e,t){for(Rn[e]=t,e=0;e<t.length;e++)ys.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ei=Object.prototype.hasOwnProperty,Yc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ko={},Yo={};function Xc(e){return ei.call(Yo,e)?!0:ei.call(Ko,e)?!1:Yc.test(e)?Yo[e]=!0:(Ko[e]=!0,!1)}function Jc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Zc(e,t,n,r){if(t===null||typeof t>"u"||Jc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function de(e,t,n,r,l,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new de(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];re[t]=new de(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new de(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new de(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new de(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new de(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new de(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new de(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new de(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zi=/[\-:]([a-z])/g;function qi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zi,qi);re[t]=new de(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zi,qi);re[t]=new de(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zi,qi);re[t]=new de(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new de("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new de(e,1,!1,e.toLowerCase(),null,!0,!0)});function eo(e,t,n,r){var l=re.hasOwnProperty(t)?re[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Zc(t,n,l,r)&&(n=null),r||l===null?Xc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),It=Symbol.for("react.portal"),Dt=Symbol.for("react.fragment"),to=Symbol.for("react.strict_mode"),ti=Symbol.for("react.profiler"),xs=Symbol.for("react.provider"),ks=Symbol.for("react.context"),no=Symbol.for("react.forward_ref"),ni=Symbol.for("react.suspense"),ri=Symbol.for("react.suspense_list"),ro=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),ws=Symbol.for("react.offscreen"),Xo=Symbol.iterator;function pn(e){return e===null||typeof e!="object"?null:(e=Xo&&e[Xo]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,El;function wn(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var Pl=!1;function bl(e,t){if(!e||Pl)return"";Pl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),i=r.stack.split(`
`),a=l.length-1,s=i.length-1;1<=a&&0<=s&&l[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(l[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||l[a]!==i[s]){var u=`
`+l[a].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=a&&0<=s);break}}}finally{Pl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?wn(e):""}function qc(e){switch(e.tag){case 5:return wn(e.type);case 16:return wn("Lazy");case 13:return wn("Suspense");case 19:return wn("SuspenseList");case 0:case 2:case 15:return e=bl(e.type,!1),e;case 11:return e=bl(e.type.render,!1),e;case 1:return e=bl(e.type,!0),e;default:return""}}function li(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dt:return"Fragment";case It:return"Portal";case ti:return"Profiler";case to:return"StrictMode";case ni:return"Suspense";case ri:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ks:return(e.displayName||"Context")+".Consumer";case xs:return(e._context.displayName||"Context")+".Provider";case no:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ro:return t=e.displayName||null,t!==null?t:li(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return li(e(t))}catch{}}return null}function ed(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return li(t);case 8:return t===to?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function td(e){var t=js(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function or(e){e._valueTracker||(e._valueTracker=td(e))}function Ss(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=js(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ii(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jo(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ns(e,t){t=t.checked,t!=null&&eo(e,"checked",t,!1)}function oi(e,t){Ns(e,t);var n=pt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ai(e,t.type,n):t.hasOwnProperty("defaultValue")&&ai(e,t.type,pt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ai(e,t,n){(t!=="number"||Rr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var jn=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function si(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function qo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(jn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pt(n)}}function Cs(e,t){var n=pt(t.value),r=pt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ea(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function zs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ui(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?zs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,Es=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function In(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nd=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){nd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function Ps(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function bs(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Ps(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var rd=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ci(e,t){if(t){if(rd[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function di(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function lo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pi=null,Kt=null,Yt=null;function ta(e){if(e=er(e)){if(typeof pi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=cl(t),pi(e.stateNode,e.type,t))}}function Ms(e){Kt?Yt?Yt.push(e):Yt=[e]:Kt=e}function Ts(){if(Kt){var e=Kt,t=Yt;if(Yt=Kt=null,ta(e),t)for(e=0;e<t.length;e++)ta(t[e])}}function _s(e,t){return e(t)}function Ls(){}var Ml=!1;function Rs(e,t,n){if(Ml)return e(t,n);Ml=!0;try{return _s(e,t,n)}finally{Ml=!1,(Kt!==null||Yt!==null)&&(Ls(),Ts())}}function Dn(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var mi=!1;if(Ge)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){mi=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{mi=!1}function ld(e,t,n,r,l,i,a,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var zn=!1,Ir=null,Dr=!1,hi=null,id={onError:function(e){zn=!0,Ir=e}};function od(e,t,n,r,l,i,a,s,u){zn=!1,Ir=null,ld.apply(id,arguments)}function ad(e,t,n,r,l,i,a,s,u){if(od.apply(this,arguments),zn){if(zn){var c=Ir;zn=!1,Ir=null}else throw Error(y(198));Dr||(Dr=!0,hi=c)}}function Lt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Is(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function na(e){if(Lt(e)!==e)throw Error(y(188))}function sd(e){var t=e.alternate;if(!t){if(t=Lt(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return na(l),e;if(i===r)return na(l),t;i=i.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=i;else{for(var a=!1,s=l.child;s;){if(s===n){a=!0,n=l,r=i;break}if(s===r){a=!0,r=l,n=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===n){a=!0,n=i,r=l;break}if(s===r){a=!0,r=i,n=l;break}s=s.sibling}if(!a)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ds(e){return e=sd(e),e!==null?As(e):null}function As(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=As(e);if(t!==null)return t;e=e.sibling}return null}var Fs=ke.unstable_scheduleCallback,ra=ke.unstable_cancelCallback,ud=ke.unstable_shouldYield,cd=ke.unstable_requestPaint,K=ke.unstable_now,dd=ke.unstable_getCurrentPriorityLevel,io=ke.unstable_ImmediatePriority,Os=ke.unstable_UserBlockingPriority,Ar=ke.unstable_NormalPriority,fd=ke.unstable_LowPriority,$s=ke.unstable_IdlePriority,ol=null,$e=null;function pd(e){if($e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var Re=Math.clz32?Math.clz32:vd,md=Math.log,hd=Math.LN2;function vd(e){return e>>>=0,e===0?32:31-(md(e)/hd|0)|0}var sr=64,ur=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var s=a&~l;s!==0?r=Sn(s):(i&=a,i!==0&&(r=Sn(i)))}else a=n&~l,a!==0?r=Sn(a):i!==0&&(r=Sn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Re(t),l=1<<n,r|=e[n],t&=~l;return r}function gd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Re(i),s=1<<a,u=l[a];u===-1?(!(s&n)||s&r)&&(l[a]=gd(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function vi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Us(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function Tl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Zn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Re(t),e[t]=n}function xd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Re(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function oo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Re(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var D=0;function Bs(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vs,ao,Hs,Ws,Qs,gi=!1,cr=[],it=null,ot=null,at=null,An=new Map,Fn=new Map,tt=[],kd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function la(e,t){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=er(t),t!==null&&ao(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function wd(e,t,n,r,l){switch(t){case"focusin":return it=hn(it,e,t,n,r,l),!0;case"dragenter":return ot=hn(ot,e,t,n,r,l),!0;case"mouseover":return at=hn(at,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return An.set(i,hn(An.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Fn.set(i,hn(Fn.get(i)||null,e,t,n,r,l)),!0}return!1}function Gs(e){var t=jt(e.target);if(t!==null){var n=Lt(t);if(n!==null){if(t=n.tag,t===13){if(t=Is(n),t!==null){e.blockedOn=t,Qs(e.priority,function(){Hs(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);fi=r,n.target.dispatchEvent(r),fi=null}else return t=er(n),t!==null&&ao(t),e.blockedOn=n,!1;t.shift()}return!0}function ia(e,t,n){Sr(e)&&n.delete(t)}function jd(){gi=!1,it!==null&&Sr(it)&&(it=null),ot!==null&&Sr(ot)&&(ot=null),at!==null&&Sr(at)&&(at=null),An.forEach(ia),Fn.forEach(ia)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,gi||(gi=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,jd)))}function On(e){function t(l){return vn(l,e)}if(0<cr.length){vn(cr[0],e);for(var n=1;n<cr.length;n++){var r=cr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(it!==null&&vn(it,e),ot!==null&&vn(ot,e),at!==null&&vn(at,e),An.forEach(t),Fn.forEach(t),n=0;n<tt.length;n++)r=tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)Gs(n),n.blockedOn===null&&tt.shift()}var Xt=Je.ReactCurrentBatchConfig,Or=!0;function Sd(e,t,n,r){var l=D,i=Xt.transition;Xt.transition=null;try{D=1,so(e,t,n,r)}finally{D=l,Xt.transition=i}}function Nd(e,t,n,r){var l=D,i=Xt.transition;Xt.transition=null;try{D=4,so(e,t,n,r)}finally{D=l,Xt.transition=i}}function so(e,t,n,r){if(Or){var l=yi(e,t,n,r);if(l===null)Ul(e,t,r,$r,n),la(e,r);else if(wd(l,e,t,n,r))r.stopPropagation();else if(la(e,r),t&4&&-1<kd.indexOf(e)){for(;l!==null;){var i=er(l);if(i!==null&&Vs(i),i=yi(e,t,n,r),i===null&&Ul(e,t,r,$r,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var $r=null;function yi(e,t,n,r){if($r=null,e=lo(r),e=jt(e),e!==null)if(t=Lt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Is(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $r=e,null}function Ks(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dd()){case io:return 1;case Os:return 4;case Ar:case fd:return 16;case $s:return 536870912;default:return 16}default:return 16}}var rt=null,uo=null,Nr=null;function Ys(){if(Nr)return Nr;var e,t=uo,n=t.length,r,l="value"in rt?rt.value:rt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===l[i-r];r++);return Nr=l.slice(e,1<r?1-r:void 0)}function Cr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dr(){return!0}function oa(){return!1}function je(e){function t(n,r,l,i,a){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?dr:oa,this.isPropagationStopped=oa,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dr)},persist:function(){},isPersistent:dr}),t}var un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},co=je(un),qn=H({},un,{view:0,detail:0}),Cd=je(qn),_l,Ll,gn,al=H({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gn&&(gn&&e.type==="mousemove"?(_l=e.screenX-gn.screenX,Ll=e.screenY-gn.screenY):Ll=_l=0,gn=e),_l)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),aa=je(al),zd=H({},al,{dataTransfer:0}),Ed=je(zd),Pd=H({},qn,{relatedTarget:0}),Rl=je(Pd),bd=H({},un,{animationName:0,elapsedTime:0,pseudoElement:0}),Md=je(bd),Td=H({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_d=je(Td),Ld=H({},un,{data:0}),sa=je(Ld),Rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Id={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ad(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dd[e])?!!t[e]:!1}function fo(){return Ad}var Fd=H({},qn,{key:function(e){if(e.key){var t=Rd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Cr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Id[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fo,charCode:function(e){return e.type==="keypress"?Cr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Od=je(Fd),$d=H({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ua=je($d),Ud=H({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fo}),Bd=je(Ud),Vd=H({},un,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hd=je(Vd),Wd=H({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qd=je(Wd),Gd=[9,13,27,32],po=Ge&&"CompositionEvent"in window,En=null;Ge&&"documentMode"in document&&(En=document.documentMode);var Kd=Ge&&"TextEvent"in window&&!En,Xs=Ge&&(!po||En&&8<En&&11>=En),ca=" ",da=!1;function Js(e,t){switch(e){case"keyup":return Gd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Yd(e,t){switch(e){case"compositionend":return Zs(t);case"keypress":return t.which!==32?null:(da=!0,ca);case"textInput":return e=t.data,e===ca&&da?null:e;default:return null}}function Xd(e,t){if(At)return e==="compositionend"||!po&&Js(e,t)?(e=Ys(),Nr=uo=rt=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xs&&t.locale!=="ko"?null:t.data;default:return null}}var Jd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jd[e.type]:t==="textarea"}function qs(e,t,n,r){Ms(r),t=Ur(t,"onChange"),0<t.length&&(n=new co("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,$n=null;function Zd(e){cu(e,0)}function sl(e){var t=$t(e);if(Ss(t))return e}function qd(e,t){if(e==="change")return t}var eu=!1;if(Ge){var Il;if(Ge){var Dl="oninput"in document;if(!Dl){var pa=document.createElement("div");pa.setAttribute("oninput","return;"),Dl=typeof pa.oninput=="function"}Il=Dl}else Il=!1;eu=Il&&(!document.documentMode||9<document.documentMode)}function ma(){Pn&&(Pn.detachEvent("onpropertychange",tu),$n=Pn=null)}function tu(e){if(e.propertyName==="value"&&sl($n)){var t=[];qs(t,$n,e,lo(e)),Rs(Zd,t)}}function ef(e,t,n){e==="focusin"?(ma(),Pn=t,$n=n,Pn.attachEvent("onpropertychange",tu)):e==="focusout"&&ma()}function tf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sl($n)}function nf(e,t){if(e==="click")return sl(t)}function rf(e,t){if(e==="input"||e==="change")return sl(t)}function lf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:lf;function Un(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!ei.call(t,l)||!De(e[l],t[l]))return!1}return!0}function ha(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function va(e,t){var n=ha(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ha(n)}}function nu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ru(){for(var e=window,t=Rr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rr(e.document)}return t}function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function of(e){var t=ru(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&nu(n.ownerDocument.documentElement,n)){if(r!==null&&mo(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=va(n,i);var a=va(n,r);l&&a&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var af=Ge&&"documentMode"in document&&11>=document.documentMode,Ft=null,xi=null,bn=null,ki=!1;function ga(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ki||Ft==null||Ft!==Rr(r)||(r=Ft,"selectionStart"in r&&mo(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Un(bn,r)||(bn=r,r=Ur(xi,"onSelect"),0<r.length&&(t=new co("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ft)))}function fr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ot={animationend:fr("Animation","AnimationEnd"),animationiteration:fr("Animation","AnimationIteration"),animationstart:fr("Animation","AnimationStart"),transitionend:fr("Transition","TransitionEnd")},Al={},lu={};Ge&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete Ot.animationend.animation,delete Ot.animationiteration.animation,delete Ot.animationstart.animation),"TransitionEvent"in window||delete Ot.transitionend.transition);function ul(e){if(Al[e])return Al[e];if(!Ot[e])return e;var t=Ot[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in lu)return Al[e]=t[n];return e}var iu=ul("animationend"),ou=ul("animationiteration"),au=ul("animationstart"),su=ul("transitionend"),uu=new Map,ya="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ht(e,t){uu.set(e,t),_t(t,[e])}for(var Fl=0;Fl<ya.length;Fl++){var Ol=ya[Fl],sf=Ol.toLowerCase(),uf=Ol[0].toUpperCase()+Ol.slice(1);ht(sf,"on"+uf)}ht(iu,"onAnimationEnd");ht(ou,"onAnimationIteration");ht(au,"onAnimationStart");ht("dblclick","onDoubleClick");ht("focusin","onFocus");ht("focusout","onBlur");ht(su,"onTransitionEnd");qt("onMouseEnter",["mouseout","mouseover"]);qt("onMouseLeave",["mouseout","mouseover"]);qt("onPointerEnter",["pointerout","pointerover"]);qt("onPointerLeave",["pointerout","pointerover"]);_t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_t("onBeforeInput",["compositionend","keypress","textInput","paste"]);_t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function xa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,ad(r,t,void 0,e),e.currentTarget=null}function cu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&l.isPropagationStopped())break e;xa(l,s,c),i=u}else for(a=0;a<r.length;a++){if(s=r[a],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&l.isPropagationStopped())break e;xa(l,s,c),i=u}}}if(Dr)throw e=hi,Dr=!1,hi=null,e}function F(e,t){var n=t[Ci];n===void 0&&(n=t[Ci]=new Set);var r=e+"__bubble";n.has(r)||(du(t,e,2,!1),n.add(r))}function $l(e,t,n){var r=0;t&&(r|=4),du(n,e,r,t)}var pr="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[pr]){e[pr]=!0,ys.forEach(function(n){n!=="selectionchange"&&(cf.has(n)||$l(n,!1,e),$l(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[pr]||(t[pr]=!0,$l("selectionchange",!1,t))}}function du(e,t,n,r){switch(Ks(t)){case 1:var l=Sd;break;case 4:l=Nd;break;default:l=so}n=l.bind(null,t,n,e),l=void 0,!mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,l){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===l||u.nodeType===8&&u.parentNode===l))return;a=a.return}for(;s!==null;){if(a=jt(s),a===null)return;if(u=a.tag,u===5||u===6){r=i=a;continue e}s=s.parentNode}}r=r.return}Rs(function(){var c=i,h=lo(n),v=[];e:{var m=uu.get(e);if(m!==void 0){var x=co,k=e;switch(e){case"keypress":if(Cr(n)===0)break e;case"keydown":case"keyup":x=Od;break;case"focusin":k="focus",x=Rl;break;case"focusout":k="blur",x=Rl;break;case"beforeblur":case"afterblur":x=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=aa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Ed;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Bd;break;case iu:case ou:case au:x=Md;break;case su:x=Hd;break;case"scroll":x=Cd;break;case"wheel":x=Qd;break;case"copy":case"cut":case"paste":x=_d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ua}var w=(t&4)!==0,$=!w&&e==="scroll",f=w?m!==null?m+"Capture":null:m;w=[];for(var d=c,p;d!==null;){p=d;var g=p.stateNode;if(p.tag===5&&g!==null&&(p=g,f!==null&&(g=Dn(d,f),g!=null&&w.push(Vn(d,g,p)))),$)break;d=d.return}0<w.length&&(m=new x(m,k,null,n,h),v.push({event:m,listeners:w}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==fi&&(k=n.relatedTarget||n.fromElement)&&(jt(k)||k[Ke]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=c,k=k?jt(k):null,k!==null&&($=Lt(k),k!==$||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=c),x!==k)){if(w=aa,g="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ua,g="onPointerLeave",f="onPointerEnter",d="pointer"),$=x==null?m:$t(x),p=k==null?m:$t(k),m=new w(g,d+"leave",x,n,h),m.target=$,m.relatedTarget=p,g=null,jt(h)===c&&(w=new w(f,d+"enter",k,n,h),w.target=p,w.relatedTarget=$,g=w),$=g,x&&k)t:{for(w=x,f=k,d=0,p=w;p;p=Rt(p))d++;for(p=0,g=f;g;g=Rt(g))p++;for(;0<d-p;)w=Rt(w),d--;for(;0<p-d;)f=Rt(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Rt(w),f=Rt(f)}w=null}else w=null;x!==null&&ka(v,m,x,w,!1),k!==null&&$!==null&&ka(v,$,k,w,!0)}}e:{if(m=c?$t(c):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var S=qd;else if(fa(m))if(eu)S=rf;else{S=tf;var C=ef}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=nf);if(S&&(S=S(e,c))){qs(v,S,n,h);break e}C&&C(e,m,c),e==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&ai(m,"number",m.value)}switch(C=c?$t(c):window,e){case"focusin":(fa(C)||C.contentEditable==="true")&&(Ft=C,xi=c,bn=null);break;case"focusout":bn=xi=Ft=null;break;case"mousedown":ki=!0;break;case"contextmenu":case"mouseup":case"dragend":ki=!1,ga(v,n,h);break;case"selectionchange":if(af)break;case"keydown":case"keyup":ga(v,n,h)}var z;if(po)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else At?Js(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(Xs&&n.locale!=="ko"&&(At||E!=="onCompositionStart"?E==="onCompositionEnd"&&At&&(z=Ys()):(rt=h,uo="value"in rt?rt.value:rt.textContent,At=!0)),C=Ur(c,E),0<C.length&&(E=new sa(E,e,null,n,h),v.push({event:E,listeners:C}),z?E.data=z:(z=Zs(n),z!==null&&(E.data=z)))),(z=Kd?Yd(e,n):Xd(e,n))&&(c=Ur(c,"onBeforeInput"),0<c.length&&(h=new sa("onBeforeInput","beforeinput",null,n,h),v.push({event:h,listeners:c}),h.data=z))}cu(v,t)})}function Vn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ur(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Dn(e,n),i!=null&&r.unshift(Vn(e,i,l)),i=Dn(e,t),i!=null&&r.push(Vn(e,i,l))),e=e.return}return r}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ka(e,t,n,r,l){for(var i=t._reactName,a=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,l?(u=Dn(n,i),u!=null&&a.unshift(Vn(n,u,s))):l||(u=Dn(n,i),u!=null&&a.push(Vn(n,u,s)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var df=/\r\n?/g,ff=/\u0000|\uFFFD/g;function wa(e){return(typeof e=="string"?e:""+e).replace(df,`
`).replace(ff,"")}function mr(e,t,n){if(t=wa(t),wa(e)!==t&&n)throw Error(y(425))}function Br(){}var wi=null,ji=null;function Si(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,pf=typeof clearTimeout=="function"?clearTimeout:void 0,ja=typeof Promise=="function"?Promise:void 0,mf=typeof queueMicrotask=="function"?queueMicrotask:typeof ja<"u"?function(e){return ja.resolve(null).then(e).catch(hf)}:Ni;function hf(e){setTimeout(function(){throw e})}function Bl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),On(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);On(t)}function st(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cn=Math.random().toString(36).slice(2),Oe="__reactFiber$"+cn,Hn="__reactProps$"+cn,Ke="__reactContainer$"+cn,Ci="__reactEvents$"+cn,vf="__reactListeners$"+cn,gf="__reactHandles$"+cn;function jt(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Oe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sa(e);e!==null;){if(n=e[Oe])return n;e=Sa(e)}return t}e=n,n=e.parentNode}return null}function er(e){return e=e[Oe]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $t(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function cl(e){return e[Hn]||null}var zi=[],Ut=-1;function vt(e){return{current:e}}function O(e){0>Ut||(e.current=zi[Ut],zi[Ut]=null,Ut--)}function A(e,t){Ut++,zi[Ut]=e.current,e.current=t}var mt={},ae=vt(mt),me=vt(!1),Et=mt;function en(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function he(e){return e=e.childContextTypes,e!=null}function Vr(){O(me),O(ae)}function Na(e,t,n){if(ae.current!==mt)throw Error(y(168));A(ae,t),A(me,n)}function fu(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,ed(e)||"Unknown",l));return H({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Et=ae.current,A(ae,e),A(me,me.current),!0}function Ca(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=fu(e,t,Et),r.__reactInternalMemoizedMergedChildContext=e,O(me),O(ae),A(ae,e)):O(me),A(me,n)}var Ve=null,dl=!1,Vl=!1;function pu(e){Ve===null?Ve=[e]:Ve.push(e)}function yf(e){dl=!0,pu(e)}function gt(){if(!Vl&&Ve!==null){Vl=!0;var e=0,t=D;try{var n=Ve;for(D=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ve=null,dl=!1}catch(l){throw Ve!==null&&(Ve=Ve.slice(e+1)),Fs(io,gt),l}finally{D=t,Vl=!1}}return null}var Bt=[],Vt=0,Wr=null,Qr=0,Se=[],Ne=0,Pt=null,He=1,We="";function kt(e,t){Bt[Vt++]=Qr,Bt[Vt++]=Wr,Wr=e,Qr=t}function mu(e,t,n){Se[Ne++]=He,Se[Ne++]=We,Se[Ne++]=Pt,Pt=e;var r=He;e=We;var l=32-Re(r)-1;r&=~(1<<l),n+=1;var i=32-Re(t)+l;if(30<i){var a=l-l%5;i=(r&(1<<a)-1).toString(32),r>>=a,l-=a,He=1<<32-Re(t)+l|n<<l|r,We=i+e}else He=1<<i|n<<l|r,We=e}function ho(e){e.return!==null&&(kt(e,1),mu(e,1,0))}function vo(e){for(;e===Wr;)Wr=Bt[--Vt],Bt[Vt]=null,Qr=Bt[--Vt],Bt[Vt]=null;for(;e===Pt;)Pt=Se[--Ne],Se[Ne]=null,We=Se[--Ne],Se[Ne]=null,He=Se[--Ne],Se[Ne]=null}var xe=null,ye=null,U=!1,Le=null;function hu(e,t){var n=Ce(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function za(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,xe=e,ye=st(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,xe=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Pt!==null?{id:He,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ce(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,xe=e,ye=null,!0):!1;default:return!1}}function Ei(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pi(e){if(U){var t=ye;if(t){var n=t;if(!za(e,t)){if(Ei(e))throw Error(y(418));t=st(n.nextSibling);var r=xe;t&&za(e,t)?hu(r,n):(e.flags=e.flags&-4097|2,U=!1,xe=e)}}else{if(Ei(e))throw Error(y(418));e.flags=e.flags&-4097|2,U=!1,xe=e}}}function Ea(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;xe=e}function hr(e){if(e!==xe)return!1;if(!U)return Ea(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Si(e.type,e.memoizedProps)),t&&(t=ye)){if(Ei(e))throw vu(),Error(y(418));for(;t;)hu(e,t),t=st(t.nextSibling)}if(Ea(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=st(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=xe?st(e.stateNode.nextSibling):null;return!0}function vu(){for(var e=ye;e;)e=st(e.nextSibling)}function tn(){ye=xe=null,U=!1}function go(e){Le===null?Le=[e]:Le.push(e)}var xf=Je.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=l.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function vr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pa(e){var t=e._init;return t(e._payload)}function gu(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function l(f,d){return f=ft(f,d),f.index=0,f.sibling=null,f}function i(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function a(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,p,g){return d===null||d.tag!==6?(d=Xl(p,f.mode,g),d.return=f,d):(d=l(d,p),d.return=f,d)}function u(f,d,p,g){var S=p.type;return S===Dt?h(f,d,p.props.children,g,p.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&Pa(S)===d.type)?(g=l(d,p.props),g.ref=yn(f,d,p),g.return=f,g):(g=_r(p.type,p.key,p.props,null,f.mode,g),g.ref=yn(f,d,p),g.return=f,g)}function c(f,d,p,g){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Jl(p,f.mode,g),d.return=f,d):(d=l(d,p.children||[]),d.return=f,d)}function h(f,d,p,g,S){return d===null||d.tag!==7?(d=zt(p,f.mode,g,S),d.return=f,d):(d=l(d,p),d.return=f,d)}function v(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Xl(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ir:return p=_r(d.type,d.key,d.props,null,f.mode,p),p.ref=yn(f,null,d),p.return=f,p;case It:return d=Jl(d,f.mode,p),d.return=f,d;case qe:var g=d._init;return v(f,g(d._payload),p)}if(jn(d)||pn(d))return d=zt(d,f.mode,p,null),d.return=f,d;vr(f,d)}return null}function m(f,d,p,g){var S=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return S!==null?null:s(f,d,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ir:return p.key===S?u(f,d,p,g):null;case It:return p.key===S?c(f,d,p,g):null;case qe:return S=p._init,m(f,d,S(p._payload),g)}if(jn(p)||pn(p))return S!==null?null:h(f,d,p,g,null);vr(f,p)}return null}function x(f,d,p,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(p)||null,s(d,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ir:return f=f.get(g.key===null?p:g.key)||null,u(d,f,g,S);case It:return f=f.get(g.key===null?p:g.key)||null,c(d,f,g,S);case qe:var C=g._init;return x(f,d,p,C(g._payload),S)}if(jn(g)||pn(g))return f=f.get(p)||null,h(d,f,g,S,null);vr(d,g)}return null}function k(f,d,p,g){for(var S=null,C=null,z=d,E=d=0,Q=null;z!==null&&E<p.length;E++){z.index>E?(Q=z,z=null):Q=z.sibling;var L=m(f,z,p[E],g);if(L===null){z===null&&(z=Q);break}e&&z&&L.alternate===null&&t(f,z),d=i(L,d,E),C===null?S=L:C.sibling=L,C=L,z=Q}if(E===p.length)return n(f,z),U&&kt(f,E),S;if(z===null){for(;E<p.length;E++)z=v(f,p[E],g),z!==null&&(d=i(z,d,E),C===null?S=z:C.sibling=z,C=z);return U&&kt(f,E),S}for(z=r(f,z);E<p.length;E++)Q=x(z,f,E,p[E],g),Q!==null&&(e&&Q.alternate!==null&&z.delete(Q.key===null?E:Q.key),d=i(Q,d,E),C===null?S=Q:C.sibling=Q,C=Q);return e&&z.forEach(function(be){return t(f,be)}),U&&kt(f,E),S}function w(f,d,p,g){var S=pn(p);if(typeof S!="function")throw Error(y(150));if(p=S.call(p),p==null)throw Error(y(151));for(var C=S=null,z=d,E=d=0,Q=null,L=p.next();z!==null&&!L.done;E++,L=p.next()){z.index>E?(Q=z,z=null):Q=z.sibling;var be=m(f,z,L.value,g);if(be===null){z===null&&(z=Q);break}e&&z&&be.alternate===null&&t(f,z),d=i(be,d,E),C===null?S=be:C.sibling=be,C=be,z=Q}if(L.done)return n(f,z),U&&kt(f,E),S;if(z===null){for(;!L.done;E++,L=p.next())L=v(f,L.value,g),L!==null&&(d=i(L,d,E),C===null?S=L:C.sibling=L,C=L);return U&&kt(f,E),S}for(z=r(f,z);!L.done;E++,L=p.next())L=x(z,f,E,L.value,g),L!==null&&(e&&L.alternate!==null&&z.delete(L.key===null?E:L.key),d=i(L,d,E),C===null?S=L:C.sibling=L,C=L);return e&&z.forEach(function(dn){return t(f,dn)}),U&&kt(f,E),S}function $(f,d,p,g){if(typeof p=="object"&&p!==null&&p.type===Dt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ir:e:{for(var S=p.key,C=d;C!==null;){if(C.key===S){if(S=p.type,S===Dt){if(C.tag===7){n(f,C.sibling),d=l(C,p.props.children),d.return=f,f=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&Pa(S)===C.type){n(f,C.sibling),d=l(C,p.props),d.ref=yn(f,C,p),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}p.type===Dt?(d=zt(p.props.children,f.mode,g,p.key),d.return=f,f=d):(g=_r(p.type,p.key,p.props,null,f.mode,g),g.ref=yn(f,d,p),g.return=f,f=g)}return a(f);case It:e:{for(C=p.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(f,d.sibling),d=l(d,p.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=Jl(p,f.mode,g),d.return=f,f=d}return a(f);case qe:return C=p._init,$(f,d,C(p._payload),g)}if(jn(p))return k(f,d,p,g);if(pn(p))return w(f,d,p,g);vr(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(f,d.sibling),d=l(d,p),d.return=f,f=d):(n(f,d),d=Xl(p,f.mode,g),d.return=f,f=d),a(f)):n(f,d)}return $}var nn=gu(!0),yu=gu(!1),Gr=vt(null),Kr=null,Ht=null,yo=null;function xo(){yo=Ht=Kr=null}function ko(e){var t=Gr.current;O(Gr),e._currentValue=t}function bi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jt(e,t){Kr=e,yo=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Ee(e){var t=e._currentValue;if(yo!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Kr===null)throw Error(y(308));Ht=e,Kr.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var St=null;function wo(e){St===null?St=[e]:St.push(e)}function xu(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,wo(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ye(e,r)}function Ye(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ye(e,n)}return l=r.interleaved,l===null?(t.next=t,wo(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ye(e,n)}function zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oo(e,n)}}function ba(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yr(e,t,n,r){var l=e.updateQueue;et=!1;var i=l.firstBaseUpdate,a=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var u=s,c=u.next;u.next=null,a===null?i=c:a.next=c,a=u;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==a&&(s===null?h.firstBaseUpdate=c:s.next=c,h.lastBaseUpdate=u))}if(i!==null){var v=l.baseState;a=0,h=c=u=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,w=s;switch(m=t,x=n,w.tag){case 1:if(k=w.payload,typeof k=="function"){v=k.call(x,v,m);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=w.payload,m=typeof k=="function"?k.call(x,v,m):k,m==null)break e;v=H({},v,m);break e;case 2:et=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=l.effects,m===null?l.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(c=h=x,u=v):h=h.next=x,a|=m;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;m=s,s=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);if(h===null&&(u=v),l.baseState=u,l.firstBaseUpdate=c,l.lastBaseUpdate=h,t=l.shared.interleaved,t!==null){l=t;do a|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);Mt|=a,e.lanes=a,e.memoizedState=v}}function Ma(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var tr={},Ue=vt(tr),Wn=vt(tr),Qn=vt(tr);function Nt(e){if(e===tr)throw Error(y(174));return e}function So(e,t){switch(A(Qn,t),A(Wn,e),A(Ue,tr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ui(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ui(t,e)}O(Ue),A(Ue,t)}function rn(){O(Ue),O(Wn),O(Qn)}function wu(e){Nt(Qn.current);var t=Nt(Ue.current),n=ui(t,e.type);t!==n&&(A(Wn,e),A(Ue,n))}function No(e){Wn.current===e&&(O(Ue),O(Wn))}var B=vt(0);function Xr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function Co(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var Er=Je.ReactCurrentDispatcher,Wl=Je.ReactCurrentBatchConfig,bt=0,V=null,X=null,q=null,Jr=!1,Mn=!1,Gn=0,kf=0;function le(){throw Error(y(321))}function zo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,l,i){if(bt=i,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Er.current=e===null||e.memoizedState===null?Nf:Cf,e=n(r,l),Mn){i=0;do{if(Mn=!1,Gn=0,25<=i)throw Error(y(301));i+=1,q=X=null,t.updateQueue=null,Er.current=zf,e=n(r,l)}while(Mn)}if(Er.current=Zr,t=X!==null&&X.next!==null,bt=0,q=X=V=null,Jr=!1,t)throw Error(y(300));return e}function Po(){var e=Gn!==0;return Gn=0,e}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return q===null?V.memoizedState=q=e:q=q.next=e,q}function Pe(){if(X===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=q===null?V.memoizedState:q.next;if(t!==null)q=t,X=e;else{if(e===null)throw Error(y(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},q===null?V.memoizedState=q=e:q=q.next=e}return q}function Kn(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var a=l.next;l.next=i.next,i.next=a}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=a=null,u=null,c=i;do{var h=c.lane;if((bt&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var v={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=v,a=r):u=u.next=v,V.lanes|=h,Mt|=h}c=c.next}while(c!==null&&c!==i);u===null?a=r:u.next=s,De(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,V.lanes|=i,Mt|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Gl(e){var t=Pe(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var a=l=l.next;do i=e(i,a.action),a=a.next;while(a!==l);De(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ju(){}function Su(e,t){var n=V,r=Pe(),l=t(),i=!De(r.memoizedState,l);if(i&&(r.memoizedState=l,pe=!0),r=r.queue,bo(zu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||q!==null&&q.memoizedState.tag&1){if(n.flags|=2048,Yn(9,Cu.bind(null,n,r,l,t),void 0,null),ee===null)throw Error(y(349));bt&30||Nu(n,t,l)}return l}function Nu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cu(e,t,n,r){t.value=n,t.getSnapshot=r,Eu(t)&&Pu(e)}function zu(e,t,n){return n(function(){Eu(t)&&Pu(e)})}function Eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Pu(e){var t=Ye(e,1);t!==null&&Ie(t,e,1,-1)}function Ta(e){var t=Fe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Kn,lastRenderedState:e},t.queue=e,e=e.dispatch=Sf.bind(null,V,e),[t.memoizedState,e]}function Yn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null,stores:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function bu(){return Pe().memoizedState}function Pr(e,t,n,r){var l=Fe();V.flags|=e,l.memoizedState=Yn(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var l=Pe();r=r===void 0?null:r;var i=void 0;if(X!==null){var a=X.memoizedState;if(i=a.destroy,r!==null&&zo(r,a.deps)){l.memoizedState=Yn(t,n,i,r);return}}V.flags|=e,l.memoizedState=Yn(1|t,n,i,r)}function _a(e,t){return Pr(8390656,8,e,t)}function bo(e,t){return fl(2048,8,e,t)}function Mu(e,t){return fl(4,2,e,t)}function Tu(e,t){return fl(4,4,e,t)}function _u(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lu(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,_u.bind(null,t,e),n)}function Mo(){}function Ru(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Iu(e,t){var n=Pe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&zo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Du(e,t,n){return bt&21?(De(n,t)||(n=Us(),V.lanes|=n,Mt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function wf(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{D=n,Wl.transition=r}}function Au(){return Pe().memoizedState}function jf(e,t,n){var r=dt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Fu(e))Ou(t,n);else if(n=xu(e,t,n,r),n!==null){var l=ue();Ie(n,e,r,l),$u(n,t,r)}}function Sf(e,t,n){var r=dt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Fu(e))Ou(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,n);if(l.hasEagerState=!0,l.eagerState=s,De(s,a)){var u=t.interleaved;u===null?(l.next=l,wo(t)):(l.next=u.next,u.next=l),t.interleaved=l;return}}catch{}finally{}n=xu(e,t,l,r),n!==null&&(l=ue(),Ie(n,e,r,l),$u(n,t,r))}}function Fu(e){var t=e.alternate;return e===V||t!==null&&t===V}function Ou(e,t){Mn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $u(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,oo(e,n)}}var Zr={readContext:Ee,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useInsertionEffect:le,useLayoutEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useMutableSource:le,useSyncExternalStore:le,useId:le,unstable_isNewReconciler:!1},Nf={readContext:Ee,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ee,useEffect:_a,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Pr(4194308,4,_u.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Pr(4,2,e,t)},useMemo:function(e,t){var n=Fe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Fe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jf.bind(null,V,e),[r.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:Ta,useDebugValue:Mo,useDeferredValue:function(e){return Fe().memoizedState=e},useTransition:function(){var e=Ta(!1),t=e[0];return e=wf.bind(null,e[1]),Fe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=V,l=Fe();if(U){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),ee===null)throw Error(y(349));bt&30||Nu(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,_a(zu.bind(null,r,i,e),[e]),r.flags|=2048,Yn(9,Cu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Fe(),t=ee.identifierPrefix;if(U){var n=We,r=He;n=(r&~(1<<32-Re(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Gn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=kf++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Cf={readContext:Ee,useCallback:Ru,useContext:Ee,useEffect:bo,useImperativeHandle:Lu,useInsertionEffect:Mu,useLayoutEffect:Tu,useMemo:Iu,useReducer:Ql,useRef:bu,useState:function(){return Ql(Kn)},useDebugValue:Mo,useDeferredValue:function(e){var t=Pe();return Du(t,X.memoizedState,e)},useTransition:function(){var e=Ql(Kn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Su,useId:Au,unstable_isNewReconciler:!1},zf={readContext:Ee,useCallback:Ru,useContext:Ee,useEffect:bo,useImperativeHandle:Lu,useInsertionEffect:Mu,useLayoutEffect:Tu,useMemo:Iu,useReducer:Gl,useRef:bu,useState:function(){return Gl(Kn)},useDebugValue:Mo,useDeferredValue:function(e){var t=Pe();return X===null?t.memoizedState=e:Du(t,X.memoizedState,e)},useTransition:function(){var e=Gl(Kn)[0],t=Pe().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Su,useId:Au,unstable_isNewReconciler:!1};function Te(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Mi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?Lt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ue(),l=dt(e),i=Qe(r,l);i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Ie(t,e,l,r),zr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ue(),l=dt(e),i=Qe(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=ut(e,i,l),t!==null&&(Ie(t,e,l,r),zr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ue(),r=dt(e),l=Qe(n,r);l.tag=2,t!=null&&(l.callback=t),t=ut(e,l,r),t!==null&&(Ie(t,e,r,n),zr(t,e,r))}};function La(e,t,n,r,l,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!Un(n,r)||!Un(l,i):!0}function Uu(e,t,n){var r=!1,l=mt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ee(i):(l=he(t)?Et:ae.current,r=t.contextTypes,i=(r=r!=null)?en(e,l):mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ra(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function Ti(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},jo(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ee(i):(i=he(t)?Et:ae.current,l.context=en(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Mi(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&pl.enqueueReplaceState(l,l.state,null),Yr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function ln(e,t){try{var n="",r=t;do n+=qc(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Kl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function _i(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ef=typeof WeakMap=="function"?WeakMap:Map;function Bu(e,t,n){n=Qe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){el||(el=!0,Bi=r),_i(e,t)},n}function Vu(e,t,n){n=Qe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){_i(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){_i(e,t),typeof r!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ia(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ef;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Uf.bind(null,e,t,n),t.then(e,e))}function Da(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Aa(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qe(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var Pf=Je.ReactCurrentOwner,pe=!1;function se(e,t,n,r){t.child=e===null?yu(t,null,n,r):nn(t,e.child,n,r)}function Fa(e,t,n,r,l){n=n.render;var i=t.ref;return Jt(t,l),r=Eo(e,t,n,r,i,l),n=Po(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(U&&n&&ho(t),t.flags|=1,se(e,t,r,l),t.child)}function Oa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!Fo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Hu(e,t,i,r,l)):(e=_r(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&l)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:Un,n(a,r)&&e.ref===t.ref)return Xe(e,t,l)}return t.flags|=1,e=ft(i,r),e.ref=t.ref,e.return=t,t.child=e}function Hu(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Un(i,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=i,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Xe(e,t,l)}return Li(e,t,n,r,l)}function Wu(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A(Qt,ge),ge|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A(Qt,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,A(Qt,ge),ge|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,A(Qt,ge),ge|=r;return se(e,t,l,n),t.child}function Qu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Li(e,t,n,r,l){var i=he(n)?Et:ae.current;return i=en(t,i),Jt(t,l),n=Eo(e,t,n,r,i,l),r=Po(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Xe(e,t,l)):(U&&r&&ho(t),t.flags|=1,se(e,t,n,l),t.child)}function $a(e,t,n,r,l){if(he(n)){var i=!0;Hr(t)}else i=!1;if(Jt(t,l),t.stateNode===null)br(e,t),Uu(t,n,r),Ti(t,n,r,l),r=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var u=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ee(c):(c=he(n)?Et:ae.current,c=en(t,c));var h=n.getDerivedStateFromProps,v=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Ra(t,a,r,c),et=!1;var m=t.memoizedState;a.state=m,Yr(t,r,a,l),u=t.memoizedState,s!==r||m!==u||me.current||et?(typeof h=="function"&&(Mi(t,n,h,r),u=t.memoizedState),(s=et||La(t,n,s,r,m,u,c))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),a.props=r,a.state=u,a.context=c,r=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ku(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Te(t.type,s),a.props=c,v=t.pendingProps,m=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ee(u):(u=he(n)?Et:ae.current,u=en(t,u));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==v||m!==u)&&Ra(t,a,r,u),et=!1,m=t.memoizedState,a.state=m,Yr(t,r,a,l);var k=t.memoizedState;s!==v||m!==k||me.current||et?(typeof x=="function"&&(Mi(t,n,x,r),k=t.memoizedState),(c=et||La(t,n,c,r,m,k,u)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,u)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=u,r=c):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Ri(e,t,n,r,i,l)}function Ri(e,t,n,r,l,i){Qu(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return l&&Ca(t,n,!1),Xe(e,t,i);r=t.stateNode,Pf.current=t;var s=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=nn(t,e.child,null,i),t.child=nn(t,null,s,i)):se(e,t,s,i),t.memoizedState=r.state,l&&Ca(t,n,!0),t.child}function Gu(e){var t=e.stateNode;t.pendingContext?Na(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Na(e,t.context,!1),So(e,t.containerInfo)}function Ua(e,t,n,r,l){return tn(),go(l),t.flags|=256,se(e,t,n,r),t.child}var Ii={dehydrated:null,treeContext:null,retryLane:0};function Di(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ku(e,t,n){var r=t.pendingProps,l=B.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),A(B,l&1),e===null)return Pi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=vl(a,r,0,null),e=zt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Di(n),t.memoizedState=Ii,e):To(t,a));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return bf(e,t,a,r,s,l,n);if(i){i=r.fallback,a=t.mode,l=e.child,s=l.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=ft(l,u),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=ft(s,i):(i=zt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Di(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Ii,r}return i=e.child,e=i.sibling,r=ft(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function To(e,t){return t=vl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&go(r),nn(t,e.child,null,n),e=To(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bf(e,t,n,r,l,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Kl(Error(y(422))),gr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=vl({mode:"visible",children:r.children},l,0,null),i=zt(i,l,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&nn(t,e.child,null,a),t.child.memoizedState=Di(a),t.memoizedState=Ii,i);if(!(t.mode&1))return gr(e,t,a,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(y(419)),r=Kl(i,r,void 0),gr(e,t,a,r)}if(s=(a&e.childLanes)!==0,pe||s){if(r=ee,r!==null){switch(a&-a){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|a)?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ye(e,l),Ie(r,e,l,-1))}return Ao(),r=Kl(Error(y(421))),gr(e,t,a,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Bf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,ye=st(l.nextSibling),xe=t,U=!0,Le=null,e!==null&&(Se[Ne++]=He,Se[Ne++]=We,Se[Ne++]=Pt,He=e.id,We=e.overflow,Pt=t),t=To(t,r.children),t.flags|=4096,t)}function Ba(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),bi(e.return,t,n)}function Yl(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Yu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(se(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ba(e,n,t);else if(e.tag===19)Ba(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(A(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Xr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Yl(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Xr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Yl(t,!0,n,null,i);break;case"together":Yl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function br(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mf(e,t,n){switch(t.tag){case 3:Gu(t),tn();break;case 5:wu(t);break;case 1:he(t.type)&&Hr(t);break;case 4:So(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;A(Gr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(A(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Ku(e,t,n):(A(B,B.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);A(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Yu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),A(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,Wu(e,t,n)}return Xe(e,t,n)}var Xu,Ai,Ju,Zu;Xu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ai=function(){};Ju=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Nt(Ue.current);var i=null;switch(n){case"input":l=ii(e,l),r=ii(e,r),i=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),i=[];break;case"textarea":l=si(e,l),r=si(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Br)}ci(n,r);var a;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var s=l[c];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Rn.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(a in s)!s.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&s[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Rn.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&F("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Zu=function(e,t,n,r){n!==r&&(t.flags|=4)};function xn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Tf(e,t,n){var r=t.pendingProps;switch(vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return he(t.type)&&Vr(),ie(t),null;case 3:return r=t.stateNode,rn(),O(me),O(ae),Co(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(hr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Le!==null&&(Wi(Le),Le=null))),Ai(e,t),ie(t),null;case 5:No(t);var l=Nt(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Ju(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return ie(t),null}if(e=Nt(Ue.current),hr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Oe]=t,r[Hn]=i,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<Nn.length;l++)F(Nn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Jo(r,i),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},F("invalid",r);break;case"textarea":qo(r,i),F("invalid",r)}ci(n,i),l=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&mr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&mr(r.textContent,s,e),l=["children",""+s]):Rn.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&F("scroll",r)}switch(n){case"input":or(r),Zo(r,i,!0);break;case"textarea":or(r),ea(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Br)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=zs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Oe]=t,e[Hn]=r,Xu(e,t,!1,!1),t.stateNode=e;e:{switch(a=di(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<Nn.length;l++)F(Nn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Jo(e,r),l=ii(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),F("invalid",e);break;case"textarea":qo(e,r),l=si(e,r),F("invalid",e);break;default:l=r}ci(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?bs(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Es(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&In(e,u):typeof u=="number"&&In(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Rn.hasOwnProperty(i)?u!=null&&i==="onScroll"&&F("scroll",e):u!=null&&eo(e,i,u,a))}switch(n){case"input":or(e),Zo(e,r,!1);break;case"textarea":or(e),ea(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Gt(e,!!r.multiple,i,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Br)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)Zu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Nt(Qn.current),Nt(Ue.current),hr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Oe]=t,(i=r.nodeValue!==n)&&(e=xe,e!==null))switch(e.tag){case 3:mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Oe]=t,t.stateNode=r}return ie(t),null;case 13:if(O(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&ye!==null&&t.mode&1&&!(t.flags&128))vu(),tn(),t.flags|=98560,i=!1;else if(i=hr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(y(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(y(317));i[Oe]=t}else tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),i=!1}else Le!==null&&(Wi(Le),Le=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?J===0&&(J=3):Ao())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return rn(),Ai(e,t),e===null&&Bn(t.stateNode.containerInfo),ie(t),null;case 10:return ko(t.type._context),ie(t),null;case 17:return he(t.type)&&Vr(),ie(t),null;case 19:if(O(B),i=t.memoizedState,i===null)return ie(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)xn(i,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Xr(e),a!==null){for(t.flags|=128,xn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(B,B.current&1|2),t.child}e=e.sibling}i.tail!==null&&K()>on&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304)}else{if(!r)if(e=Xr(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!U)return ie(t),null}else 2*K()-i.renderingStartTime>on&&n!==1073741824&&(t.flags|=128,r=!0,xn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=K(),t.sibling=null,n=B.current,A(B,r?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Do(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ge&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function _f(e,t){switch(vo(t),t.tag){case 1:return he(t.type)&&Vr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rn(),O(me),O(ae),Co(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return No(t),null;case 13:if(O(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return O(B),null;case 4:return rn(),null;case 10:return ko(t.type._context),null;case 22:case 23:return Do(),null;case 24:return null;default:return null}}var yr=!1,oe=!1,Lf=typeof WeakSet=="function"?WeakSet:Set,j=null;function Wt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){W(e,t,r)}else n.current=null}function Fi(e,t,n){try{n()}catch(r){W(e,t,r)}}var Va=!1;function Rf(e,t){if(wi=Or,e=ru(),mo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,s=-1,u=-1,c=0,h=0,v=e,m=null;t:for(;;){for(var x;v!==n||l!==0&&v.nodeType!==3||(s=a+l),v!==i||r!==0&&v.nodeType!==3||(u=a+r),v.nodeType===3&&(a+=v.nodeValue.length),(x=v.firstChild)!==null;)m=v,v=x;for(;;){if(v===e)break t;if(m===n&&++c===l&&(s=a),m===i&&++h===r&&(u=a),(x=v.nextSibling)!==null)break;v=m,m=v.parentNode}v=x}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ji={focusedElem:e,selectionRange:n},Or=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var w=k.memoizedProps,$=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Te(t.type,w),$);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(g){W(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return k=Va,Va=!1,k}function Tn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&Fi(t,n,i)}l=l.next}while(l!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Oi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function qu(e){var t=e.alternate;t!==null&&(e.alternate=null,qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Oe],delete t[Hn],delete t[Ci],delete t[vf],delete t[gf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ec(e){return e.tag===5||e.tag===3||e.tag===4}function Ha(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ec(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $i(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Br));else if(r!==4&&(e=e.child,e!==null))for($i(e,t,n),e=e.sibling;e!==null;)$i(e,t,n),e=e.sibling}function Ui(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ui(e,t,n),e=e.sibling;e!==null;)Ui(e,t,n),e=e.sibling}var te=null,_e=!1;function Ze(e,t,n){for(n=n.child;n!==null;)tc(e,t,n),n=n.sibling}function tc(e,t,n){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:oe||Wt(n,t);case 6:var r=te,l=_e;te=null,Ze(e,t,n),te=r,_e=l,te!==null&&(_e?(e=te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):te.removeChild(n.stateNode));break;case 18:te!==null&&(_e?(e=te,n=n.stateNode,e.nodeType===8?Bl(e.parentNode,n):e.nodeType===1&&Bl(e,n),On(e)):Bl(te,n.stateNode));break;case 4:r=te,l=_e,te=n.stateNode.containerInfo,_e=!0,Ze(e,t,n),te=r,_e=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&Fi(n,t,a),l=l.next}while(l!==r)}Ze(e,t,n);break;case 1:if(!oe&&(Wt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){W(n,t,s)}Ze(e,t,n);break;case 21:Ze(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,Ze(e,t,n),oe=r):Ze(e,t,n);break;default:Ze(e,t,n)}}function Wa(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lf),t.forEach(function(r){var l=Vf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Me(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:te=s.stateNode,_e=!1;break e;case 3:te=s.stateNode.containerInfo,_e=!0;break e;case 4:te=s.stateNode.containerInfo,_e=!0;break e}s=s.return}if(te===null)throw Error(y(160));tc(i,a,l),te=null,_e=!1;var u=l.alternate;u!==null&&(u.return=null),l.return=null}catch(c){W(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)nc(t,e),t=t.sibling}function nc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Me(t,e),Ae(e),r&4){try{Tn(3,e,e.return),ml(3,e)}catch(w){W(e,e.return,w)}try{Tn(5,e,e.return)}catch(w){W(e,e.return,w)}}break;case 1:Me(t,e),Ae(e),r&512&&n!==null&&Wt(n,n.return);break;case 5:if(Me(t,e),Ae(e),r&512&&n!==null&&Wt(n,n.return),e.flags&32){var l=e.stateNode;try{In(l,"")}catch(w){W(e,e.return,w)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ns(l,i),di(s,a);var c=di(s,i);for(a=0;a<u.length;a+=2){var h=u[a],v=u[a+1];h==="style"?bs(l,v):h==="dangerouslySetInnerHTML"?Es(l,v):h==="children"?In(l,v):eo(l,h,v,c)}switch(s){case"input":oi(l,i);break;case"textarea":Cs(l,i);break;case"select":var m=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Gt(l,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?Gt(l,!!i.multiple,i.defaultValue,!0):Gt(l,!!i.multiple,i.multiple?[]:"",!1))}l[Hn]=i}catch(w){W(e,e.return,w)}}break;case 6:if(Me(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(w){W(e,e.return,w)}}break;case 3:if(Me(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{On(t.containerInfo)}catch(w){W(e,e.return,w)}break;case 4:Me(t,e),Ae(e);break;case 13:Me(t,e),Ae(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ro=K())),r&4&&Wa(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||h,Me(t,e),oe=c):Me(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(j=e,h=e.child;h!==null;){for(v=j=h;j!==null;){switch(m=j,x=m.child,m.tag){case 0:case 11:case 14:case 15:Tn(4,m,m.return);break;case 1:Wt(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(w){W(r,n,w)}}break;case 5:Wt(m,m.return);break;case 22:if(m.memoizedState!==null){Ga(v);continue}}x!==null?(x.return=m,j=x):Ga(v)}h=h.sibling}e:for(h=null,v=e;;){if(v.tag===5){if(h===null){h=v;try{l=v.stateNode,c?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=v.stateNode,u=v.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Ps("display",a))}catch(w){W(e,e.return,w)}}}else if(v.tag===6){if(h===null)try{v.stateNode.nodeValue=c?"":v.memoizedProps}catch(w){W(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;h===v&&(h=null),v=v.return}h===v&&(h=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Me(t,e),Ae(e),r&4&&Wa(e);break;case 21:break;default:Me(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ec(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(In(l,""),r.flags&=-33);var i=Ha(e);Ui(e,i,l);break;case 3:case 4:var a=r.stateNode.containerInfo,s=Ha(e);$i(e,s,a);break;default:throw Error(y(161))}}catch(u){W(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function If(e,t,n){j=e,rc(e)}function rc(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var a=l.memoizedState!==null||yr;if(!a){var s=l.alternate,u=s!==null&&s.memoizedState!==null||oe;s=yr;var c=oe;if(yr=a,(oe=u)&&!c)for(j=l;j!==null;)a=j,u=a.child,a.tag===22&&a.memoizedState!==null?Ka(l):u!==null?(u.return=a,j=u):Ka(l);for(;i!==null;)j=i,rc(i),i=i.sibling;j=l,yr=s,oe=c}Qa(e)}else l.subtreeFlags&8772&&i!==null?(i.return=l,j=i):Qa(e)}}function Qa(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:Te(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ma(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ma(t,a,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var v=h.dehydrated;v!==null&&On(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&Oi(t)}catch(m){W(t,t.return,m)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Ga(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Ka(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(u){W(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(u){W(t,l,u)}}var i=t.return;try{Oi(t)}catch(u){W(t,i,u)}break;case 5:var a=t.return;try{Oi(t)}catch(u){W(t,a,u)}}}catch(u){W(t,t.return,u)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var Df=Math.ceil,qr=Je.ReactCurrentDispatcher,_o=Je.ReactCurrentOwner,ze=Je.ReactCurrentBatchConfig,I=0,ee=null,Y=null,ne=0,ge=0,Qt=vt(0),J=0,Xn=null,Mt=0,hl=0,Lo=0,_n=null,fe=null,Ro=0,on=1/0,Be=null,el=!1,Bi=null,ct=null,xr=!1,lt=null,tl=0,Ln=0,Vi=null,Mr=-1,Tr=0;function ue(){return I&6?K():Mr!==-1?Mr:Mr=K()}function dt(e){return e.mode&1?I&2&&ne!==0?ne&-ne:xf.transition!==null?(Tr===0&&(Tr=Us()),Tr):(e=D,e!==0||(e=window.event,e=e===void 0?16:Ks(e.type)),e):1}function Ie(e,t,n,r){if(50<Ln)throw Ln=0,Vi=null,Error(y(185));Zn(e,n,r),(!(I&2)||e!==ee)&&(e===ee&&(!(I&2)&&(hl|=n),J===4&&nt(e,ne)),ve(e,r),n===1&&I===0&&!(t.mode&1)&&(on=K()+500,dl&&gt()))}function ve(e,t){var n=e.callbackNode;yd(e,t);var r=Fr(e,e===ee?ne:0);if(r===0)n!==null&&ra(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ra(n),t===1)e.tag===0?yf(Ya.bind(null,e)):pu(Ya.bind(null,e)),mf(function(){!(I&6)&&gt()}),n=null;else{switch(Bs(r)){case 1:n=io;break;case 4:n=Os;break;case 16:n=Ar;break;case 536870912:n=$s;break;default:n=Ar}n=dc(n,lc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function lc(e,t){if(Mr=-1,Tr=0,I&6)throw Error(y(327));var n=e.callbackNode;if(Zt()&&e.callbackNode!==n)return null;var r=Fr(e,e===ee?ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=nl(e,r);else{t=r;var l=I;I|=2;var i=oc();(ee!==e||ne!==t)&&(Be=null,on=K()+500,Ct(e,t));do try{Of();break}catch(s){ic(e,s)}while(!0);xo(),qr.current=i,I=l,Y!==null?t=0:(ee=null,ne=0,t=J)}if(t!==0){if(t===2&&(l=vi(e),l!==0&&(r=l,t=Hi(e,l))),t===1)throw n=Xn,Ct(e,0),nt(e,r),ve(e,K()),n;if(t===6)nt(e,r);else{if(l=e.current.alternate,!(r&30)&&!Af(l)&&(t=nl(e,r),t===2&&(i=vi(e),i!==0&&(r=i,t=Hi(e,i))),t===1))throw n=Xn,Ct(e,0),nt(e,r),ve(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:wt(e,fe,Be);break;case 3:if(nt(e,r),(r&130023424)===r&&(t=Ro+500-K(),10<t)){if(Fr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ue(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=Ni(wt.bind(null,e,fe,Be),t);break}wt(e,fe,Be);break;case 4:if(nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var a=31-Re(r);i=1<<a,a=t[a],a>l&&(l=a),r&=~i}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Df(r/1960))-r,10<r){e.timeoutHandle=Ni(wt.bind(null,e,fe,Be),r);break}wt(e,fe,Be);break;case 5:wt(e,fe,Be);break;default:throw Error(y(329))}}}return ve(e,K()),e.callbackNode===n?lc.bind(null,e):null}function Hi(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(Ct(e,t).flags|=256),e=nl(e,t),e!==2&&(t=fe,fe=n,t!==null&&Wi(t)),e}function Wi(e){fe===null?fe=e:fe.push.apply(fe,e)}function Af(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!De(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Lo,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Re(t),r=1<<n;e[n]=-1,t&=~r}}function Ya(e){if(I&6)throw Error(y(327));Zt();var t=Fr(e,0);if(!(t&1))return ve(e,K()),null;var n=nl(e,t);if(e.tag!==0&&n===2){var r=vi(e);r!==0&&(t=r,n=Hi(e,r))}if(n===1)throw n=Xn,Ct(e,0),nt(e,t),ve(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,fe,Be),ve(e,K()),null}function Io(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(on=K()+500,dl&&gt())}}function Tt(e){lt!==null&&lt.tag===0&&!(I&6)&&Zt();var t=I;I|=1;var n=ze.transition,r=D;try{if(ze.transition=null,D=1,e)return e()}finally{D=r,ze.transition=n,I=t,!(I&6)&&gt()}}function Do(){ge=Qt.current,O(Qt)}function Ct(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,pf(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(vo(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vr();break;case 3:rn(),O(me),O(ae),Co();break;case 5:No(r);break;case 4:rn();break;case 13:O(B);break;case 19:O(B);break;case 10:ko(r.type._context);break;case 22:case 23:Do()}n=n.return}if(ee=e,Y=e=ft(e.current,null),ne=ge=t,J=0,Xn=null,Lo=hl=Mt=0,fe=_n=null,St!==null){for(t=0;t<St.length;t++)if(n=St[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=l,r.next=a}n.pending=r}St=null}return e}function ic(e,t){do{var n=Y;try{if(xo(),Er.current=Zr,Jr){for(var r=V.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jr=!1}if(bt=0,q=X=V=null,Mn=!1,Gn=0,_o.current=null,n===null||n.return===null){J=1,Xn=t,Y=null;break}e:{var i=e,a=n.return,s=n,u=t;if(t=ne,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=s,v=h.tag;if(!(h.mode&1)&&(v===0||v===11||v===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=Da(a);if(x!==null){x.flags&=-257,Aa(x,a,s,i,t),x.mode&1&&Ia(i,c,t),t=x,u=c;var k=t.updateQueue;if(k===null){var w=new Set;w.add(u),t.updateQueue=w}else k.add(u);break e}else{if(!(t&1)){Ia(i,c,t),Ao();break e}u=Error(y(426))}}else if(U&&s.mode&1){var $=Da(a);if($!==null){!($.flags&65536)&&($.flags|=256),Aa($,a,s,i,t),go(ln(u,s));break e}}i=u=ln(u,s),J!==4&&(J=2),_n===null?_n=[i]:_n.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Bu(i,u,t);ba(i,f);break e;case 1:s=u;var d=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var g=Vu(i,s,t);ba(i,g);break e}}i=i.return}while(i!==null)}sc(n)}catch(S){t=S,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function oc(){var e=qr.current;return qr.current=Zr,e===null?Zr:e}function Ao(){(J===0||J===3||J===2)&&(J=4),ee===null||!(Mt&268435455)&&!(hl&268435455)||nt(ee,ne)}function nl(e,t){var n=I;I|=2;var r=oc();(ee!==e||ne!==t)&&(Be=null,Ct(e,t));do try{Ff();break}catch(l){ic(e,l)}while(!0);if(xo(),I=n,qr.current=r,Y!==null)throw Error(y(261));return ee=null,ne=0,J}function Ff(){for(;Y!==null;)ac(Y)}function Of(){for(;Y!==null&&!ud();)ac(Y)}function ac(e){var t=cc(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?sc(e):Y=t,_o.current=null}function sc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=_f(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,Y=null;return}}else if(n=Tf(n,t,ge),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);J===0&&(J=5)}function wt(e,t,n){var r=D,l=ze.transition;try{ze.transition=null,D=1,$f(e,t,n,r)}finally{ze.transition=l,D=r}return null}function $f(e,t,n,r){do Zt();while(lt!==null);if(I&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(xd(e,i),e===ee&&(Y=ee=null,ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xr||(xr=!0,dc(Ar,function(){return Zt(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ze.transition,ze.transition=null;var a=D;D=1;var s=I;I|=4,_o.current=null,Rf(e,n),nc(n,e),of(ji),Or=!!wi,ji=wi=null,e.current=n,If(n),cd(),I=s,D=a,ze.transition=i}else e.current=n;if(xr&&(xr=!1,lt=e,tl=l),i=e.pendingLanes,i===0&&(ct=null),pd(n.stateNode),ve(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(el)throw el=!1,e=Bi,Bi=null,e;return tl&1&&e.tag!==0&&Zt(),i=e.pendingLanes,i&1?e===Vi?Ln++:(Ln=0,Vi=e):Ln=0,gt(),null}function Zt(){if(lt!==null){var e=Bs(tl),t=ze.transition,n=D;try{if(ze.transition=null,D=16>e?16:e,lt===null)var r=!1;else{if(e=lt,lt=null,tl=0,I&6)throw Error(y(331));var l=I;for(I|=4,j=e.current;j!==null;){var i=j,a=i.child;if(j.flags&16){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(j=c;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:Tn(8,h,i)}var v=h.child;if(v!==null)v.return=h,j=v;else for(;j!==null;){h=j;var m=h.sibling,x=h.return;if(qu(h),h===c){j=null;break}if(m!==null){m.return=x,j=m;break}j=x}}}var k=i.alternate;if(k!==null){var w=k.child;if(w!==null){k.child=null;do{var $=w.sibling;w.sibling=null,w=$}while(w!==null)}}j=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,j=a;else e:for(;j!==null;){if(i=j,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Tn(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,j=f;break e}j=i.return}}var d=e.current;for(j=d;j!==null;){a=j;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,j=p;else e:for(a=d;j!==null;){if(s=j,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch(S){W(s,s.return,S)}if(s===a){j=null;break e}var g=s.sibling;if(g!==null){g.return=s.return,j=g;break e}j=s.return}}if(I=l,gt(),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{D=n,ze.transition=t}}return!1}function Xa(e,t,n){t=ln(n,t),t=Bu(e,t,1),e=ut(e,t,1),t=ue(),e!==null&&(Zn(e,1,t),ve(e,t))}function W(e,t,n){if(e.tag===3)Xa(e,e,n);else for(;t!==null;){if(t.tag===3){Xa(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ct===null||!ct.has(r))){e=ln(n,e),e=Vu(t,e,1),t=ut(t,e,1),e=ue(),t!==null&&(Zn(t,1,e),ve(t,e));break}}t=t.return}}function Uf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&n,ee===e&&(ne&n)===n&&(J===4||J===3&&(ne&130023424)===ne&&500>K()-Ro?Ct(e,0):Lo|=n),ve(e,t)}function uc(e,t){t===0&&(e.mode&1?(t=ur,ur<<=1,!(ur&130023424)&&(ur=4194304)):t=1);var n=ue();e=Ye(e,t),e!==null&&(Zn(e,t,n),ve(e,n))}function Bf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),uc(e,n)}function Vf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),uc(e,n)}var cc;cc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||me.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,Mf(e,t,n);pe=!!(e.flags&131072)}else pe=!1,U&&t.flags&1048576&&mu(t,Qr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;br(e,t),e=t.pendingProps;var l=en(t,ae.current);Jt(t,n),l=Eo(null,t,r,e,l,n);var i=Po();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,he(r)?(i=!0,Hr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,jo(t),l.updater=pl,t.stateNode=l,l._reactInternals=t,Ti(t,r,e,n),t=Ri(null,t,r,!0,i,n)):(t.tag=0,U&&i&&ho(t),se(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(br(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Wf(r),e=Te(r,e),l){case 0:t=Li(null,t,r,e,n);break e;case 1:t=$a(null,t,r,e,n);break e;case 11:t=Fa(null,t,r,e,n);break e;case 14:t=Oa(null,t,r,Te(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Li(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),$a(e,t,r,l,n);case 3:e:{if(Gu(t),e===null)throw Error(y(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ku(e,t),Yr(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=ln(Error(y(423)),t),t=Ua(e,t,r,n,l);break e}else if(r!==l){l=ln(Error(y(424)),t),t=Ua(e,t,r,n,l);break e}else for(ye=st(t.stateNode.containerInfo.firstChild),xe=t,U=!0,Le=null,n=yu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(tn(),r===l){t=Xe(e,t,n);break e}se(e,t,r,n)}t=t.child}return t;case 5:return wu(t),e===null&&Pi(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,a=l.children,Si(r,l)?a=null:i!==null&&Si(r,i)&&(t.flags|=32),Qu(e,t),se(e,t,a,n),t.child;case 6:return e===null&&Pi(t),null;case 13:return Ku(e,t,n);case 4:return So(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=nn(t,null,r,n):se(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),Fa(e,t,r,l,n);case 7:return se(e,t,t.pendingProps,n),t.child;case 8:return se(e,t,t.pendingProps.children,n),t.child;case 12:return se(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,a=l.value,A(Gr,r._currentValue),r._currentValue=a,i!==null)if(De(i.value,a)){if(i.children===l.children&&!me.current){t=Xe(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Qe(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),bi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(y(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),bi(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}se(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Jt(t,n),l=Ee(l),r=r(l),t.flags|=1,se(e,t,r,n),t.child;case 14:return r=t.type,l=Te(r,t.pendingProps),l=Te(r.type,l),Oa(e,t,r,l,n);case 15:return Hu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:Te(r,l),br(e,t),t.tag=1,he(r)?(e=!0,Hr(t)):e=!1,Jt(t,n),Uu(t,r,l),Ti(t,r,l,n),Ri(null,t,r,!0,e,n);case 19:return Yu(e,t,n);case 22:return Wu(e,t,n)}throw Error(y(156,t.tag))};function dc(e,t){return Fs(e,t)}function Hf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,t,n,r){return new Hf(e,t,n,r)}function Fo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Wf(e){if(typeof e=="function")return Fo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===no)return 11;if(e===ro)return 14}return 2}function ft(e,t){var n=e.alternate;return n===null?(n=Ce(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _r(e,t,n,r,l,i){var a=2;if(r=e,typeof e=="function")Fo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Dt:return zt(n.children,l,i,t);case to:a=8,l|=8;break;case ti:return e=Ce(12,n,t,l|2),e.elementType=ti,e.lanes=i,e;case ni:return e=Ce(13,n,t,l),e.elementType=ni,e.lanes=i,e;case ri:return e=Ce(19,n,t,l),e.elementType=ri,e.lanes=i,e;case ws:return vl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xs:a=10;break e;case ks:a=9;break e;case no:a=11;break e;case ro:a=14;break e;case qe:a=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ce(a,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function zt(e,t,n,r){return e=Ce(7,e,r,t),e.lanes=n,e}function vl(e,t,n,r){return e=Ce(22,e,r,t),e.elementType=ws,e.lanes=n,e.stateNode={isHidden:!1},e}function Xl(e,t,n){return e=Ce(6,e,null,t),e.lanes=n,e}function Jl(e,t,n){return t=Ce(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Qf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tl(0),this.expirationTimes=Tl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Oo(e,t,n,r,l,i,a,s,u){return e=new Qf(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ce(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jo(i),e}function Gf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fc(e){if(!e)return mt;e=e._reactInternals;e:{if(Lt(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(he(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(he(n))return fu(e,n,t)}return t}function pc(e,t,n,r,l,i,a,s,u){return e=Oo(n,r,!0,e,l,i,a,s,u),e.context=fc(null),n=e.current,r=ue(),l=dt(n),i=Qe(r,l),i.callback=t??null,ut(n,i,l),e.current.lanes=l,Zn(e,l,r),ve(e,r),e}function gl(e,t,n,r){var l=t.current,i=ue(),a=dt(l);return n=fc(n),t.context===null?t.context=n:t.pendingContext=n,t=Qe(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ut(l,t,a),e!==null&&(Ie(e,l,a,i),zr(e,l,a)),a}function rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ja(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $o(e,t){Ja(e,t),(e=e.alternate)&&Ja(e,t)}function Kf(){return null}var mc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Uo(e){this._internalRoot=e}yl.prototype.render=Uo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));gl(e,t,null,null)};yl.prototype.unmount=Uo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tt(function(){gl(null,e,null,null)}),t[Ke]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ws();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&Gs(e)}};function Bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Za(){}function Yf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var c=rl(a);i.call(c)}}var a=pc(t,r,e,0,null,!1,!1,"",Za);return e._reactRootContainer=a,e[Ke]=a.current,Bn(e.nodeType===8?e.parentNode:e),Tt(),a}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var c=rl(u);s.call(c)}}var u=Oo(e,0,!1,null,null,!1,!1,"",Za);return e._reactRootContainer=u,e[Ke]=u.current,Bn(e.nodeType===8?e.parentNode:e),Tt(function(){gl(t,u,n,r)}),u}function kl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var a=i;if(typeof l=="function"){var s=l;l=function(){var u=rl(a);s.call(u)}}gl(t,a,e,l)}else a=Yf(n,t,e,l,r);return rl(a)}Vs=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(oo(t,n|1),ve(t,K()),!(I&6)&&(on=K()+500,gt()))}break;case 13:Tt(function(){var r=Ye(e,1);if(r!==null){var l=ue();Ie(r,e,1,l)}}),$o(e,1)}};ao=function(e){if(e.tag===13){var t=Ye(e,134217728);if(t!==null){var n=ue();Ie(t,e,134217728,n)}$o(e,134217728)}};Hs=function(e){if(e.tag===13){var t=dt(e),n=Ye(e,t);if(n!==null){var r=ue();Ie(n,e,t,r)}$o(e,t)}};Ws=function(){return D};Qs=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};pi=function(e,t,n){switch(t){case"input":if(oi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=cl(r);if(!l)throw Error(y(90));Ss(r),oi(r,l)}}}break;case"textarea":Cs(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};_s=Io;Ls=Tt;var Xf={usingClientEntryPoint:!1,Events:[er,$t,cl,Ms,Ts,Io]},kn={findFiberByHostInstance:jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jf={bundleType:kn.bundleType,version:kn.version,rendererPackageName:kn.rendererPackageName,rendererConfig:kn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ds(e),e===null?null:e.stateNode},findFiberByHostInstance:kn.findFiberByHostInstance||Kf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kr.isDisabled&&kr.supportsFiber)try{ol=kr.inject(Jf),$e=kr}catch{}}we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xf;we.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bo(t))throw Error(y(200));return Gf(e,t,null,n)};we.createRoot=function(e,t){if(!Bo(e))throw Error(y(299));var n=!1,r="",l=mc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Oo(e,1,!1,null,null,n,!1,r,l),e[Ke]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Uo(t)};we.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ds(t),e=e===null?null:e.stateNode,e};we.flushSync=function(e){return Tt(e)};we.hydrate=function(e,t,n){if(!xl(t))throw Error(y(200));return kl(null,e,t,!0,n)};we.hydrateRoot=function(e,t,n){if(!Bo(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",a=mc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=pc(t,null,e,1,n??null,l,!1,i,a),e[Ke]=t.current,Bn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new yl(t)};we.render=function(e,t,n){if(!xl(t))throw Error(y(200));return kl(null,e,t,!1,n)};we.unmountComponentAtNode=function(e){if(!xl(e))throw Error(y(40));return e._reactRootContainer?(Tt(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};we.unstable_batchedUpdates=Io;we.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!xl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return kl(e,t,n,!1,r)};we.version="18.3.1-next-f1338f8080-20240426";function hc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hc)}catch(e){console.error(e)}}hc(),hs.exports=we;var Zf=hs.exports,qa=Zf;ql.createRoot=qa.createRoot,ql.hydrateRoot=qa.hydrateRoot;/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qf=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vc=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ep={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=T.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:l="",children:i,iconNode:a,...s},u)=>T.createElement("svg",{ref:u,...ep,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:vc("lucide",l),...s},[...a.map(([c,h])=>T.createElement(c,h)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=(e,t)=>{const n=T.forwardRef(({className:r,...l},i)=>T.createElement(tp,{ref:i,iconNode:t,className:vc(`lucide-${qf(e)}`,r),...l}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=P("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=P("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=P("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=P("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=P("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=P("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=P("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=P("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=P("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=P("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=P("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=P("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=P("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=P("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=P("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=P("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=P("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=P("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=P("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=P("FolderCheck",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=P("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=P("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=P("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=P("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=P("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=P("Grid3x3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=P("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=P("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=P("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=P("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=P("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=P("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=P("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=P("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=P("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=P("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=P("PanelsTopLeft",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=P("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=P("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=P("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=P("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=P("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=P("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=P("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=P("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=P("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=P("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=P("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=P("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=P("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.380.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=P("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),R={name:"Maryam Tarek",title:"Front-end Developer (ReactJS)",badge:"Available for Opportunities",phone:"01013825782",email:"Maryamtarek784@gmail.com",location:"Mansoura, Egypt",linkedin:"https://www.linkedin.com/in/maryam-tarek-12683128a/",linkedinHandle:"maryam-tarek-12683128a",github:"https://github.com/MaryamTarekk/",githubHandle:"MaryamTarekk",avatar:"/photo2.jpeg",summary:"Front-End Developer (React) and recent Information Technology graduate from Mansoura University with solid knowledge of HTML, CSS, JavaScript, and React.js. Passionate about building responsive, accessible, and user-friendly web applications with clean code architecture and modern design practices."},Ap=[{label:"Completed Projects",value:"5+",icon:"FolderCheck"},{label:"Mansoura University Grade",value:"83%",sub:"Very Good",icon:"GraduationCap"},{label:"ITI Intensive Trainee",value:"2025",icon:"Award"},{label:"Tech Stack Mastery",value:"10+",sub:"Technologies",icon:"Code"}],Fp=[{institution:"Mansoura University",faculty:"Faculty of Computer and Information Sciences",department:"Information Technology (IT) Department",period:"2022 – 2026",grade:"Very Good (83%)",degree:"Bachelor's Degree in Computer & Information Sciences",highlights:["Specialized in Information Technology and Software Development","Comprehensive study of Web Development, Data Structures, Networking, and Database Systems","Graduated with Very Good (83%) overall honor grade"]}],Lr=[{role:"Freelance Front-End Developer",company:"Smart Pharmacy",period:"2025 – Present",type:"Freelance",description:"Built and enhanced responsive web interfaces for pharmacy operations and client browsing.",responsibilities:["Developed responsive and user-friendly web interfaces using React.js, HTML, CSS, JavaScript, and Bootstrap.","Integrated front-end components seamlessly with backend services using RESTful APIs and Axios.","Implemented dynamic state management and client-side data validation for pharmacy workflows.","Improved overall site performance, responsiveness, and cross-browser accessibility."],techStack:["React.js","JavaScript (ES6)","Bootstrap","REST APIs","HTML5/CSS3"]},{role:"Front-End Trainee",company:"Information Technology Institute (ITI)",period:"Aug 10, 2025 – Sep 15, 2025",type:"Intensive Training",description:"Completed an intensive full-stack program focused on modern front-end technologies and web standards.",responsibilities:["Enrolled in an intensive Full Stack PHP training program with strong specialization in Front-End Development.","Applied industry-standard responsive design principles, UI component structuring, and clean code practices.","Built a complete Library Management System as the final capstone project using React.js and REST APIs.","Collaborated with peers under expert mentorship to solve complex frontend challenges."],techStack:["React.js","JavaScript","REST APIs","PHP","Responsive Design","Git"]}],Qi=[{id:"library-system",title:"Library Management System",category:"React App",shortDesc:"Comprehensive library application with REST API integration for dynamic book borrowing, search, and category management.",fullDesc:"A complete responsive Library Management System built as the ITI capstone project. Allows users and librarians to search books by title or author, filter by genres, manage available inventory, and track borrowing statuses in real-time.",technologies:["React.js","REST APIs","Axios","Context API","CSS3"],featured:!0,github:"https://github.com/MaryamTarekk/",demoType:"library",demoData:{initialBooks:[{id:1,title:"Clean Code",author:"Robert C. Martin",category:"Programming",status:"Available"},{id:2,title:"React Design Patterns",author:"Addy Osmani",category:"Web Dev",status:"Borrowed"},{id:3,title:"You Don't Know JS",author:"Kyle Simpson",category:"JavaScript",status:"Available"},{id:4,title:"The Pragmatic Programmer",author:"Andrew Hunt",category:"Software Engineering",status:"Available"}]}},{id:"e-commerce",title:"E-Commerce Platform",category:"React App",shortDesc:"Responsive online store featuring product catalog, live interactive shopping cart, checkout, and category filters.",fullDesc:"A feature-rich e-commerce web application with smooth user experience. Includes instant search, price range filtering, interactive cart badge update, total price calculation, and modal checkout sequence.",technologies:["React.js","Context API","React Router","Bootstrap","REST APIs"],featured:!0,github:"https://github.com/MaryamTarekk/",demoType:"ecommerce",demoData:{products:[{id:1,name:"Wireless Noise-Canceling Headphones",price:120,category:"Electronics",rating:4.8},{id:2,name:"Minimalist Mechanical Keyboard",price:95,category:"Accessories",rating:4.9},{id:3,name:"Smart Fitness Watch",price:150,category:"Electronics",rating:4.7},{id:4,name:"Ergonomic Desk Mat",price:30,category:"Accessories",rating:4.6}]}},{id:"shoes-store",title:"Shoes Store Website",category:"React / UI",shortDesc:"Modern interactive footwear showcase with dynamic product views, size selector, and responsive layout.",fullDesc:"An aesthetically pleasing web store for shoes designed with clean UI/UX standards. Features interactive color/size selection, animated hover cards, and seamless responsive layout across mobile and desktop devices.",technologies:["React.js","JavaScript ES6","HTML5","CSS3","Vite"],featured:!0,github:"https://github.com/MaryamTarekk/",demoType:"shoes",demoData:{shoes:[{id:1,name:"Air Nitro Running Shoes",color:"Cyan / Black",price:140,sizes:[40,41,42,43,44]},{id:2,name:"Urban Street Sneaker",color:"Pure White",price:110,sizes:[39,40,41,42]},{id:3,name:"FlexFit Gym Trainer",color:"Neon Violet",price:130,sizes:[41,42,43,44,45]}]}},{id:"photo-editor",title:"Web Photo Editing Application",category:"JavaScript Tool",shortDesc:"Web-based image manipulation app built with JavaScript offering live filters, crop/rotate, and instant image export.",fullDesc:"An interactive photo editing web tool built using pure JavaScript and Canvas API. Users can upload images, adjust brightness, contrast, saturation, blur, rotate, invert colors, and download their edited masterpiece.",technologies:["JavaScript (ES6)","HTML5 Canvas","CSS3","Vite"],featured:!1,github:"https://github.com/MaryamTarekk/",demoType:"photoEditor"},{id:"network-checker",title:"Real-time Network Connectivity Monitor",category:"JavaScript Tool",shortDesc:"Real-time web utility monitoring online/offline internet connectivity, ping speed, and network event listeners.",fullDesc:"A sleek utility web application that monitors browser network status in real time. Features automated online/offline detection notifications, simulated latency ping tests, and network status history logs.",technologies:["JavaScript (ES6)","HTML5","CSS3","Navigator API"],featured:!1,github:"https://github.com/MaryamTarekk/",demoType:"networkChecker"}],Gi=[{name:"Core Frontend",description:"Fundamental languages and standards for building modern web applications",skills:[{name:"HTML5",level:"Advanced",icon:"FileCode"},{name:"CSS3",level:"Advanced",icon:"Palette"},{name:"JavaScript (ES6+)",level:"Advanced",icon:"Zap"},{name:"Responsive Design",level:"Expert",icon:"Layout"}]},{name:"React Framework & Ecosystem",description:"Building scalable, component-based user interfaces",skills:[{name:"React.js",level:"Advanced",icon:"Atom"},{name:"React Router",level:"Proficient",icon:"Navigation"},{name:"Context API",level:"Advanced",icon:"Layers"},{name:"Bootstrap",level:"Advanced",icon:"Grid"},{name:"Vite",level:"Proficient",icon:"Rocket"}]},{name:"Data & API Integration",description:"Connecting front-end interfaces to backend REST services",skills:[{name:"REST APIs",level:"Advanced",icon:"Globe"},{name:"Axios",level:"Advanced",icon:"RefreshCw"},{name:"Fetch API",level:"Advanced",icon:"ArrowRightLeft"},{name:"JSON Data Flow",level:"Advanced",icon:"Database"}]},{name:"Development Tools & Practices",description:"Version control, workflow efficiency, and browser performance",skills:[{name:"Git & GitHub",level:"Advanced",icon:"GitBranch"},{name:"Cross-Browser Compatibility",level:"Advanced",icon:"Monitor"},{name:"Component Architecture",level:"Advanced",icon:"Box"},{name:"UI/UX Optimization",level:"Advanced",icon:"Sparkles"}]}];function Op({theme:e,toggleTheme:t,onDownloadCV:n}){const[r,l]=T.useState(!1),[i,a]=T.useState(!1),[s,u]=T.useState("hero");T.useEffect(()=>{const h=()=>{l(window.scrollY>20);const m=["hero","about","experience","projects","skills","contact"].find(x=>{const k=document.getElementById(x);if(k){const w=k.getBoundingClientRect();return w.top<=200&&w.bottom>=200}return!1});m&&u(m)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const c=[{name:"About",href:"#about"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Skills",href:"#skills"},{name:"Contact",href:"#contact"}];return o.jsxs("header",{className:`navbar ${r?"scrolled":""}`,children:[o.jsxs("div",{className:"container nav-container",children:[o.jsxs("a",{href:"#hero",className:"nav-brand",children:[o.jsx("div",{className:"brand-icon",children:o.jsx(wl,{size:22,className:"brand-logo"})}),o.jsxs("span",{className:"brand-name",children:["Maryam",o.jsx("span",{className:"brand-dot",children:"."}),"Tarek"]})]}),o.jsx("nav",{className:"nav-menu desktop-only",children:c.map(h=>o.jsx("a",{href:h.href,className:`nav-link ${s===h.href.substring(1)?"active":""}`,children:h.name},h.name))}),o.jsxs("div",{className:"nav-actions",children:[o.jsx("button",{onClick:t,className:"theme-toggle-btn",title:`Switch to ${e==="dark"?"light":"dark"} mode`,"aria-label":"Toggle Theme",children:e==="dark"?o.jsx(Lp,{size:19}):o.jsx(Np,{size:19})}),o.jsxs("button",{onClick:n,className:"btn btn-primary nav-cv-btn",children:[o.jsx(ll,{size:16}),o.jsx("span",{children:"Download CV"})]}),o.jsx("button",{className:"mobile-toggle mobile-only",onClick:()=>a(!i),"aria-label":"Toggle Navigation Menu",children:i?o.jsx(Vo,{size:24}):o.jsx(jp,{size:24})})]})]}),i&&o.jsxs("div",{className:"mobile-menu glass-card",children:[c.map(h=>o.jsx("a",{href:h.href,className:"mobile-link",onClick:()=>a(!1),children:h.name},h.name)),o.jsxs("button",{onClick:()=>{a(!1),n()},className:"btn btn-primary mobile-cv-btn",children:[o.jsx(ll,{size:16}),o.jsx("span",{children:"Download Resume"})]})]}),o.jsx("style",{children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 75px;
          z-index: 999;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-glass);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          height: 68px;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.25rem;
        }

        .brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 0 12px var(--primary-glow);
        }

        .brand-dot {
          color: var(--primary);
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          position: relative;
        }

        .nav-link:hover, .nav-link.active {
          color: var(--primary);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
          box-shadow: 0 0 8px var(--primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--border-glass);
          background: var(--bg-card);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .theme-toggle-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
          transform: rotate(15deg);
        }

        .nav-cv-btn {
          padding: 0.55rem 1.2rem;
          font-size: 0.875rem;
        }

        .mobile-toggle {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .desktop-only { display: flex; }
        .mobile-only { display: none; }

        .mobile-menu {
          position: absolute;
          top: 75px;
          left: 1rem;
          right: 1rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          border: 1px solid var(--border-accent);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .mobile-link {
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 1.05rem;
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-glass);
        }

        @media (max-width: 850px) {
          .desktop-only { display: none; }
          .mobile-only { display: flex; }
          .nav-cv-btn { display: none; }
        }
      `})]})}function $p({onDownloadCV:e}){return o.jsxs("section",{id:"hero",className:"hero-section",children:[o.jsxs("div",{className:"container hero-container",children:[o.jsxs("div",{className:"hero-content animate-fade-in",children:[o.jsxs("div",{className:"hero-badges",children:[o.jsxs("div",{className:"badge badge-success",children:[o.jsx("span",{className:"pulse-dot"}),o.jsx("span",{children:R.badge})]}),o.jsxs("div",{className:"badge",children:[o.jsx(an,{size:14}),o.jsx("span",{children:"ReactJS Specialist"})]})]}),o.jsxs("h1",{className:"hero-title",children:["Crafting Responsive ",o.jsx("br",{}),o.jsx("span",{className:"gradient-text",children:"Web Experiences"})," with React"]}),o.jsxs("p",{className:"hero-subtitle",children:["Hi, I'm ",o.jsx("strong",{children:R.name})," — a Front-End Developer & IT Graduate from Mansoura University. I build modern, high-performance web applications using React.js, JavaScript, and REST APIs."]}),o.jsxs("div",{className:"hero-tech-stack",children:[o.jsx("span",{className:"tech-label",children:"Core Stack:"}),o.jsxs("div",{className:"tech-pills",children:[o.jsx("span",{className:"tech-pill",children:"React.js"}),o.jsx("span",{className:"tech-pill",children:"JavaScript ES6"}),o.jsx("span",{className:"tech-pill",children:"Context API"}),o.jsx("span",{className:"tech-pill",children:"REST APIs"}),o.jsx("span",{className:"tech-pill",children:"Bootstrap"}),o.jsx("span",{className:"tech-pill",children:"Vite"})]})]}),o.jsxs("div",{className:"hero-actions",children:[o.jsxs("a",{href:"#projects",className:"btn btn-primary",children:[o.jsx("span",{children:"Explore My Work"}),o.jsx(rp,{size:18})]}),o.jsxs("button",{onClick:e,className:"btn btn-secondary",children:[o.jsx(ll,{size:18}),o.jsx("span",{children:"Download CV"})]}),o.jsx("a",{href:"#contact",className:"btn btn-outline",children:o.jsx("span",{children:"Get In Touch"})})]}),o.jsxs("div",{className:"hero-socials",children:[o.jsx("a",{href:R.github,target:"_blank",rel:"noopener noreferrer",className:"social-link",title:"GitHub Profile",children:o.jsx(jl,{size:20})}),o.jsx("a",{href:R.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-link",title:"LinkedIn Profile",children:o.jsx(yc,{size:20})}),o.jsx("a",{href:`mailto:${R.email}`,className:"social-link",title:"Send Email",children:o.jsx(xc,{size:20})}),o.jsx("a",{href:`tel:${R.phone}`,className:"social-link",title:"Call Phone",children:o.jsx(wc,{size:20})}),o.jsxs("div",{className:"hero-location",children:[o.jsx(kc,{size:16}),o.jsx("span",{children:R.location})]})]})]}),o.jsx("div",{className:"hero-visual",children:o.jsxs("div",{className:"avatar-frame-wrapper",children:[o.jsx("div",{className:"avatar-glow"}),o.jsxs("div",{className:"avatar-frame glass-card",children:[o.jsx("img",{src:R.avatar,alt:R.name,className:"avatar-img",onError:t=>{t.target.src="/avatar.svg"}}),o.jsxs("div",{className:"avatar-fallback",style:{display:"none"},children:[o.jsx(wl,{size:70,className:"fallback-icon"}),o.jsx("span",{className:"fallback-name",children:"Maryam Tarek"}),o.jsx("span",{className:"fallback-role",children:"React Developer"})]})]}),o.jsxs("div",{className:"floating-card card-top glass-card",children:[o.jsx("div",{className:"card-icon bg-cyan",children:o.jsx(fp,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:"floating-title",children:"Front-End Trainee"}),o.jsx("div",{className:"floating-sub",children:"ITI Alumni 2025"})]})]}),o.jsxs("div",{className:"floating-card card-bottom glass-card",children:[o.jsx("div",{className:"card-icon bg-purple",children:o.jsx(an,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:"floating-title",children:"Mansoura University"}),o.jsx("div",{className:"floating-sub",children:"Grade: Very Good (83%)"})]})]})]})})]}),o.jsx("style",{children:`
        .hero-section {
          padding: 9rem 0 5rem 0;
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badges {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .hero-title {
          font-size: 3.4rem;
          line-height: 1.15;
          margin-bottom: 1.2rem;
          font-weight: 800;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          max-width: 580px;
          line-height: 1.7;
        }

        .hero-tech-stack {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .tech-label {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .tech-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .tech-pill {
          padding: 0.25rem 0.75rem;
          font-size: 0.8rem;
          font-family: var(--font-mono);
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--primary);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-glass);
        }

        .social-link {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .social-link:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
          box-shadow: 0 4px 12px var(--primary-glow);
        }

        .hero-location {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-left: auto;
        }

        /* Avatar Visual Styles */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .avatar-frame-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
        }

        .avatar-glow {
          position: absolute;
          inset: -10px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent-purple) 100%);
          border-radius: var(--radius-xl);
          opacity: 0.35;
          filter: blur(25px);
          z-index: 0;
        }

        .avatar-frame {
          position: relative;
          z-index: 1;
          border-radius: var(--radius-xl);
          overflow: hidden;
          padding: 12px;
          background: var(--bg-card);
          border: 1px solid var(--border-accent);
        }

        .avatar-img {
          width: 100%;
          height: auto;
          aspect-ratio: 1 / 1.1;
          object-fit: cover;
          object-position: top center;
          border-radius: var(--radius-lg);
          display: block;
        }

        .avatar-fallback {
          width: 100%;
          aspect-ratio: 1 / 1.1;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          color: var(--primary);
          text-align: center;
        }

        .fallback-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.3rem;
          color: var(--text-primary);
        }

        .fallback-role {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        /* Floating Cards */
        .floating-card {
          position: absolute;
          z-index: 2;
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid var(--border-accent);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
        }

        .card-top {
          top: -20px;
          right: -20px;
        }

        .card-bottom {
          bottom: -20px;
          left: -20px;
        }

        .card-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
        .bg-cyan { background: linear-gradient(135deg, #38bdf8, #0284c7); }
        .bg-purple { background: linear-gradient(135deg, #c084fc, #9333ea); }

        .floating-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .floating-sub {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-badges, .hero-tech-stack, .hero-actions, .hero-socials {
            justify-content: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-title {
            font-size: 2.6rem;
          }
          .hero-location {
            margin-left: 0;
          }
          .hero-visual {
            margin-top: 2rem;
          }
        }
      `})]})}function Up(){const e={FolderCheck:o.jsx(hp,{size:26,className:"stat-icon-svg text-cyan"}),GraduationCap:o.jsx(ns,{size:26,className:"stat-icon-svg text-purple"}),Award:o.jsx(op,{size:26,className:"stat-icon-svg text-amber"}),Code:o.jsx(dp,{size:26,className:"stat-icon-svg text-emerald"})};return o.jsxs("section",{id:"about",className:"about-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Background & Education"}),o.jsxs("h2",{className:"section-title",children:["About ",o.jsx("span",{className:"gradient-text",children:"Maryam Tarek"})]}),o.jsx("p",{className:"section-description",children:"Passionate Front-End Developer with academic excellence and hands-on experience in building interactive web apps."})]}),o.jsx("div",{className:"stats-grid",children:Ap.map((t,n)=>o.jsxs("div",{className:"stat-card glass-card",children:[o.jsx("div",{className:"stat-icon-box",children:e[t.icon]}),o.jsxs("div",{className:"stat-info",children:[o.jsx("div",{className:"stat-value",children:t.value}),o.jsx("div",{className:"stat-label",children:t.label}),t.sub&&o.jsx("span",{className:"stat-sub",children:t.sub})]})]},n))}),o.jsxs("div",{className:"about-grid",children:[o.jsxs("div",{className:"bio-card glass-card",children:[o.jsxs("h3",{className:"card-heading",children:[o.jsx(an,{size:22,className:"heading-icon text-cyan"}),o.jsx("span",{children:"Professional Overview"})]}),o.jsx("p",{className:"bio-text",children:R.summary}),o.jsxs("div",{className:"bio-highlights",children:[o.jsxs("div",{className:"highlight-item",children:[o.jsx(Zl,{size:18,className:"text-cyan"}),o.jsx("span",{children:"Specialized in React Component Architecture & Context API"})]}),o.jsxs("div",{className:"highlight-item",children:[o.jsx(Zl,{size:18,className:"text-cyan"}),o.jsx("span",{children:"REST API Integration with Axios & Fetch API"})]}),o.jsxs("div",{className:"highlight-item",children:[o.jsx(Zl,{size:18,className:"text-cyan"}),o.jsx("span",{children:"Pixel-Perfect Responsive UI with CSS3, Bootstrap & Tailwind standards"})]})]})]}),o.jsxs("div",{className:"education-card glass-card",children:[o.jsxs("h3",{className:"card-heading",children:[o.jsx(ns,{size:24,className:"heading-icon text-purple"}),o.jsx("span",{children:"Academic Background"})]}),Fp.map((t,n)=>o.jsxs("div",{className:"edu-item",children:[o.jsxs("div",{className:"edu-header",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"edu-institution",children:t.institution}),o.jsx("div",{className:"edu-faculty",children:t.faculty}),o.jsx("div",{className:"edu-dept",children:t.department})]}),o.jsx("div",{className:"edu-badge badge",children:o.jsx("span",{children:t.period})})]}),o.jsxs("div",{className:"edu-grade-box",children:[o.jsx("span",{className:"grade-label",children:"Overall Academic Grade:"}),o.jsx("span",{className:"grade-value",children:t.grade})]}),o.jsx("ul",{className:"edu-bullet-list",children:t.highlights.map((r,l)=>o.jsx("li",{children:r},l))})]},n))]})]})]}),o.jsx("style",{children:`
        .about-section {
          padding: 6rem 0;
          background: rgba(15, 23, 42, 0.3);
          border-top: 1px solid var(--border-glass);
          border-bottom: 1px solid var(--border-glass);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3.5rem;
        }

        .stat-card {
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.2rem;
        }

        .stat-icon-box {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-cyan { color: #38bdf8; }
        .text-purple { color: #c084fc; }
        .text-amber { color: #fbbf24; }
        .text-emerald { color: #34d399; }

        .stat-value {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.8rem;
          line-height: 1.1;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-top: 0.25rem;
        }

        .stat-sub {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .bio-card, .education-card {
          padding: 2rem;
        }

        .card-heading {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 1.35rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-glass);
        }

        .bio-text {
          color: var(--text-secondary);
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 1.8rem;
        }

        .bio-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: var(--text-primary);
        }

        .edu-institution {
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .edu-faculty {
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .edu-dept {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .edu-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .edu-grade-box {
          background: rgba(56, 189, 248, 0.08);
          border: 1px dashed var(--border-accent);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }

        .grade-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        .grade-value {
          font-weight: 700;
          color: var(--accent-emerald);
          font-size: 1.05rem;
        }

        .edu-bullet-list {
          list-style-type: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .edu-bullet-list li {
          position: relative;
          padding-left: 1.4rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .edu-bullet-list li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Bp(){return o.jsxs("section",{id:"experience",className:"experience-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Career Roadmap"}),o.jsxs("h2",{className:"section-title",children:["Professional ",o.jsx("span",{className:"gradient-text",children:"Experience & Training"})]}),o.jsx("p",{className:"section-description",children:"Hands-on freelance client work and intensive training under industry leaders."})]}),o.jsx("div",{className:"timeline",children:Lr.map((e,t)=>o.jsxs("div",{className:"timeline-item",children:[o.jsx("div",{className:"timeline-marker",children:o.jsx(sp,{size:20})}),o.jsxs("div",{className:"timeline-content glass-card",children:[o.jsxs("div",{className:"exp-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"exp-type-badge",children:e.type}),o.jsx("h3",{className:"exp-role",children:e.role}),o.jsxs("div",{className:"exp-company",children:[o.jsx(up,{size:16}),o.jsx("span",{children:e.company})]})]}),o.jsxs("div",{className:"exp-period badge",children:[o.jsx(cp,{size:14}),o.jsx("span",{children:e.period})]})]}),o.jsx("p",{className:"exp-desc",children:e.description}),o.jsxs("div",{className:"exp-responsibilities",children:[o.jsx("h4",{className:"resp-title",children:"Key Contributions & Accomplishments:"}),o.jsx("ul",{children:e.responsibilities.map((n,r)=>o.jsxs("li",{children:[o.jsx(gc,{size:16,className:"check-icon"}),o.jsx("span",{children:n})]},r))})]}),o.jsx("div",{className:"exp-tech-tags",children:e.techStack.map((n,r)=>o.jsxs("span",{className:"tech-tag",children:[o.jsx(wl,{size:13}),n]},r))})]})]},t))})]}),o.jsx("style",{children:`
        .experience-section {
          padding: 6rem 0;
          position: relative;
        }

        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding-left: 2rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 17px;
          width: 2px;
          background: linear-gradient(180deg, var(--primary) 0%, var(--accent-purple) 100%);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 3rem;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -2rem;
          top: 0;
          transform: translateX(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 2px solid var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
          z-index: 2;
        }

        .timeline-content {
          padding: 2rem;
          margin-left: 1.5rem;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .exp-type-badge {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-purple);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .exp-role {
          font-size: 1.35rem;
          color: var(--text-primary);
        }

        .exp-company {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--primary);
          font-weight: 600;
          font-size: 0.95rem;
          margin-top: 0.2rem;
        }

        .exp-desc {
          color: var(--text-secondary);
          font-size: 0.98rem;
          margin-bottom: 1.25rem;
        }

        .exp-responsibilities {
          margin-bottom: 1.5rem;
        }

        .resp-title {
          font-size: 0.9rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }

        .exp-responsibilities ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .exp-responsibilities li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .check-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .exp-tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-glass);
        }

        .tech-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.3rem 0.75rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-family: var(--font-mono);
          color: var(--text-primary);
        }

        @media (max-width: 768px) {
          .timeline {
            padding-left: 1.5rem;
          }
          .timeline::before {
            left: 10px;
          }
          .timeline-marker {
            left: -1.5rem;
            width: 36px;
            height: 36px;
          }
          .timeline-content {
            margin-left: 0.5rem;
            padding: 1.25rem;
          }
        }
      `})]})}function Vp({onSelectProject:e}){const[t,n]=T.useState("All"),r=["All","React App","JavaScript Tool"],l=Qi.filter(i=>t==="All"?!0:i.category.includes(t));return o.jsxs("section",{id:"projects",className:"projects-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Portfolio Showcase"}),o.jsxs("h2",{className:"section-title",children:["Featured ",o.jsx("span",{className:"gradient-text",children:"Projects"})]}),o.jsx("p",{className:"section-description",children:'Explore my recent web applications, interactive tools, and React implementations. Click "Live Demo" to test them out!'})]}),o.jsx("div",{className:"filter-tabs",children:r.map(i=>o.jsx("button",{onClick:()=>n(i),className:`filter-btn ${t===i?"active":""}`,children:i},i))}),o.jsx("div",{className:"projects-grid",children:l.map(i=>o.jsxs("div",{className:"project-card glass-card",children:[o.jsxs("div",{className:"project-card-header",children:[o.jsx("div",{className:"project-icon-wrapper",children:o.jsx(vp,{size:24,className:"folder-icon"})}),o.jsxs("div",{className:"project-badges",children:[i.featured&&o.jsxs("span",{className:"badge badge-success",children:[o.jsx(an,{size:12})," Featured"]}),o.jsx("span",{className:"badge",children:i.category})]})]}),o.jsx("h3",{className:"project-title",children:i.title}),o.jsx("p",{className:"project-desc",children:i.shortDesc}),o.jsx("div",{className:"project-tech",children:i.technologies.map((a,s)=>o.jsx("span",{className:"tech-pill-small",children:a},s))}),o.jsxs("div",{className:"project-actions",children:[o.jsxs("button",{onClick:()=>e(i),className:"btn btn-primary btn-demo",children:[o.jsx(Pp,{size:16}),o.jsx("span",{children:"Try Live Demo"})]}),o.jsx("a",{href:i.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary btn-icon-only",title:"View Source Code on GitHub",children:o.jsx(jl,{size:18})})]})]},i.id))})]}),o.jsx("style",{children:`
        .projects-section {
          padding: 6rem 0;
          background: rgba(15, 23, 42, 0.2);
        }

        .filter-tabs {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          font-family: var(--font-heading);
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover, .filter-btn.active {
          background: var(--primary-glow);
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
        }

        .project-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .project-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }

        .project-badges {
          display: flex;
          gap: 0.4rem;
        }

        .project-title {
          font-size: 1.3rem;
          margin-bottom: 0.75rem;
          color: var(--text-primary);
        }

        .project-desc {
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tech-pill-small {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          padding: 0.2rem 0.55rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-glass);
          color: var(--text-muted);
        }

        .project-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .btn-demo {
          flex: 1;
          font-size: 0.875rem;
        }

        .btn-icon-only {
          padding: 0.75rem;
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Hp(){const e={FileCode:o.jsx(mp,{size:20}),Palette:o.jsx(zp,{size:20}),Zap:o.jsx(Dp,{size:20}),Layout:o.jsx(Ep,{size:20}),Atom:o.jsx(ip,{size:20}),Navigation:o.jsx(Cp,{size:20}),Layers:o.jsx(wp,{size:20}),Grid:o.jsx(xp,{size:20}),Rocket:o.jsx(Tp,{size:20}),Globe:o.jsx(yp,{size:20}),RefreshCw:o.jsx(jc,{size:20}),ArrowRightLeft:o.jsx(np,{size:20}),Database:o.jsx(pp,{size:20}),GitBranch:o.jsx(gp,{size:20}),Monitor:o.jsx(Sp,{size:20}),Box:o.jsx(ap,{size:20}),Sparkles:o.jsx(an,{size:20})};return o.jsxs("section",{id:"skills",className:"skills-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Technical Expertise"}),o.jsxs("h2",{className:"section-title",children:["Skills & ",o.jsx("span",{className:"gradient-text",children:"Technologies"})]}),o.jsx("p",{className:"section-description",children:"A breakdown of my front-end engineering skillset, frameworks, and developer workflows."})]}),o.jsx("div",{className:"skills-grid",children:Gi.map((t,n)=>o.jsxs("div",{className:"skill-category-card glass-card",children:[o.jsx("h3",{className:"category-title",children:t.name}),o.jsx("p",{className:"category-desc",children:t.description}),o.jsx("div",{className:"skills-list",children:t.skills.map((r,l)=>o.jsxs("div",{className:"skill-item",children:[o.jsx("div",{className:"skill-icon",children:e[r.icon]||o.jsx(an,{size:18})}),o.jsxs("div",{className:"skill-info",children:[o.jsx("span",{className:"skill-name",children:r.name}),o.jsx("span",{className:"skill-level",children:r.level})]})]},l))})]},n))})]}),o.jsx("style",{children:`
        .skills-section {
          padding: 6rem 0;
          background: rgba(15, 23, 42, 0.4);
          border-top: 1px solid var(--border-glass);
          border-bottom: 1px solid var(--border-glass);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-category-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .category-title {
          font-size: 1.25rem;
          color: var(--text-primary);
          margin-bottom: 0.4rem;
        }

        .category-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
          min-height: 2.4rem;
        }

        .skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.65rem 0.85rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          transition: all 0.2s ease;
        }

        .skill-item:hover {
          background: var(--primary-glow);
          border-color: var(--border-accent);
          transform: translateX(4px);
        }

        .skill-icon {
          color: var(--primary);
          display: flex;
          align-items: center;
        }

        .skill-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .skill-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        .skill-level {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-purple);
        }
      `})]})}function Wp({showToast:e}){const[t,n]=T.useState(null),[r,l]=T.useState({name:"",email:"",subject:"",message:""}),[i,a]=T.useState(!1),s=(c,h)=>{navigator.clipboard.writeText(c),n(h),e(`Copied ${h} to clipboard!`),setTimeout(()=>n(null),2500)},u=c=>{c.preventDefault(),!(!r.name||!r.email||!r.message)&&(a(!0),setTimeout(()=>{a(!1),e("Thank you! Your message has been sent successfully."),l({name:"",email:"",subject:"",message:""})},1e3))};return o.jsxs("section",{id:"contact",className:"contact-section",children:[o.jsxs("div",{className:"container",children:[o.jsxs("div",{className:"section-header",children:[o.jsx("span",{className:"section-subtitle",children:"Let's Connect"}),o.jsxs("h2",{className:"section-title",children:["Get In ",o.jsx("span",{className:"gradient-text",children:"Touch"})]}),o.jsx("p",{className:"section-description",children:"Looking for a skilled Front-End React Developer for your team or freelance project? Feel free to reach out!"})]}),o.jsxs("div",{className:"contact-grid",children:[o.jsxs("div",{className:"contact-info-col",children:[o.jsx("h3",{className:"contact-heading",children:"Contact Information"}),o.jsx("p",{className:"contact-subtext",children:"I am actively seeking full-time, remote, or freelance front-end developer roles. Let's build something great together."}),o.jsxs("div",{className:"contact-cards",children:[o.jsxs("div",{className:"contact-card glass-card",children:[o.jsx("div",{className:"contact-card-icon text-cyan",children:o.jsx(xc,{size:22})}),o.jsxs("div",{className:"contact-card-body",children:[o.jsx("span",{className:"card-label",children:"Email Address"}),o.jsx("a",{href:`mailto:${R.email}`,className:"card-value",children:R.email})]}),o.jsx("button",{onClick:()=>s(R.email,"Email"),className:"copy-btn",title:"Copy Email",children:t==="Email"?o.jsx(es,{size:16,className:"text-emerald"}):o.jsx(ts,{size:16})})]}),o.jsxs("div",{className:"contact-card glass-card",children:[o.jsx("div",{className:"contact-card-icon text-purple",children:o.jsx(wc,{size:22})}),o.jsxs("div",{className:"contact-card-body",children:[o.jsx("span",{className:"card-label",children:"Phone / WhatsApp"}),o.jsx("a",{href:`tel:${R.phone}`,className:"card-value",children:R.phone})]}),o.jsx("button",{onClick:()=>s(R.phone,"Phone"),className:"copy-btn",title:"Copy Phone Number",children:t==="Phone"?o.jsx(es,{size:16,className:"text-emerald"}):o.jsx(ts,{size:16})})]}),o.jsxs("div",{className:"contact-card glass-card",children:[o.jsx("div",{className:"contact-card-icon text-amber",children:o.jsx(kc,{size:22})}),o.jsxs("div",{className:"contact-card-body",children:[o.jsx("span",{className:"card-label",children:"Location"}),o.jsx("span",{className:"card-value",children:R.location})]})]})]}),o.jsxs("div",{className:"social-links-box",children:[o.jsxs("a",{href:R.github,target:"_blank",rel:"noopener noreferrer",className:"social-btn glass-card",children:[o.jsx(jl,{size:20}),o.jsx("span",{children:"GitHub"})]}),o.jsxs("a",{href:R.linkedin,target:"_blank",rel:"noopener noreferrer",className:"social-btn glass-card",children:[o.jsx(yc,{size:20}),o.jsx("span",{children:"LinkedIn"})]})]})]}),o.jsx("div",{className:"contact-form-col",children:o.jsxs("form",{onSubmit:u,className:"contact-form glass-card",children:[o.jsx("h3",{className:"form-heading",children:"Send a Message"}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"name",children:"Your Name"}),o.jsx("input",{type:"text",id:"name",required:!0,placeholder:"e.g. John Doe",value:r.name,onChange:c=>l({...r,name:c.target.value}),className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:"Your Email"}),o.jsx("input",{type:"email",id:"email",required:!0,placeholder:"name@example.com",value:r.email,onChange:c=>l({...r,email:c.target.value}),className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"subject",children:"Subject"}),o.jsx("input",{type:"text",id:"subject",placeholder:"Job Opportunity / Project Request",value:r.subject,onChange:c=>l({...r,subject:c.target.value}),className:"form-input"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"message",children:"Message"}),o.jsx("textarea",{id:"message",rows:"4",required:!0,placeholder:"Hello Maryam, I reviewed your portfolio and would like to discuss...",value:r.message,onChange:c=>l({...r,message:c.target.value}),className:"form-input textarea"})]}),o.jsxs("button",{type:"submit",className:"btn btn-primary form-submit-btn",disabled:i,children:[o.jsx(_p,{size:18}),o.jsx("span",{children:i?"Sending...":"Send Message"})]})]})})]})]}),o.jsx("style",{children:`
        .contact-section {
          padding: 6rem 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
        }

        .contact-heading {
          font-size: 1.5rem;
          margin-bottom: 0.75rem;
        }

        .contact-subtext {
          color: var(--text-secondary);
          margin-bottom: 2rem;
          font-size: 1rem;
          line-height: 1.6;
        }

        .contact-cards {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .contact-card {
          padding: 1.2rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .contact-card-icon {
          width: 46px;
          height: 46px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-glass);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-card-body {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .card-value {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-primary);
          text-decoration: none;
        }

        .card-value:hover {
          color: var(--primary);
        }

        .copy-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
        }

        .social-links-box {
          display: flex;
          gap: 1rem;
        }

        .social-btn {
          flex: 1;
          padding: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          text-decoration: none;
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* Form Styles */
        .contact-form {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-heading {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid var(--border-glass);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .textarea {
          resize: vertical;
        }

        .form-submit-btn {
          margin-top: 0.5rem;
          width: 100%;
        }

        @media (max-width: 850px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Qp(){const e=()=>{window.scrollTo({top:0,behavior:"smooth"})};return o.jsxs("footer",{className:"footer",children:[o.jsxs("div",{className:"container footer-container",children:[o.jsxs("div",{className:"footer-left",children:[o.jsxs("div",{className:"footer-brand",children:[o.jsx(wl,{size:20,className:"brand-icon-svg"}),o.jsx("span",{children:"Maryam Tarek"})]}),o.jsx("p",{className:"footer-tagline",children:"Front-End Developer (ReactJS) — Crafting high quality web solutions."})]}),o.jsx("div",{className:"footer-center",children:o.jsxs("span",{className:"copyright",children:["© ",new Date().getFullYear()," Maryam Tarek. Designed & Built with React.js & Vite."]})}),o.jsx("div",{className:"footer-right",children:o.jsx("button",{onClick:e,className:"scroll-top-btn",title:"Back to top",children:o.jsx(lp,{size:18})})})]}),o.jsx("style",{children:`
        .footer {
          padding: 3rem 0 2rem 0;
          background: rgba(11, 15, 25, 0.95);
          border-top: 1px solid var(--border-glass);
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--text-primary);
        }

        .brand-icon-svg {
          color: var(--primary);
        }

        .footer-tagline {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .copyright {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .scroll-top-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .scroll-top-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})}function Gp({project:e,onClose:t}){return e?o.jsxs("div",{className:"modal-backdrop",onClick:t,children:[o.jsxs("div",{className:"modal-container glass-card",onClick:n=>n.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsxs("div",{children:[o.jsx("span",{className:"badge",children:e.category}),o.jsx("h3",{className:"modal-title",children:e.title})]}),o.jsx("button",{className:"modal-close-btn",onClick:t,"aria-label":"Close Modal",children:o.jsx(Vo,{size:20})})]}),o.jsxs("div",{className:"modal-body",children:[o.jsx("p",{className:"modal-description",children:e.fullDesc}),o.jsxs("div",{className:"modal-tech-stack",children:[o.jsx("span",{className:"stack-title",children:"Tech Stack Used:"}),o.jsx("div",{className:"tech-tags",children:e.technologies.map((n,r)=>o.jsx("span",{className:"modal-tag",children:n},r))})]}),o.jsxs("div",{className:"demo-box glass-card",children:[o.jsxs("div",{className:"demo-header",children:[o.jsxs("span",{className:"demo-live-badge",children:[o.jsx("span",{className:"pulse-dot"}),o.jsx("span",{children:"Interactive Live Preview Simulation"})]}),o.jsx("span",{className:"demo-instructions",children:"Try out the features below!"})]}),o.jsxs("div",{className:"demo-content",children:[e.demoType==="networkChecker"&&o.jsx(Kp,{}),e.demoType==="photoEditor"&&o.jsx(Yp,{}),e.demoType==="library"&&o.jsx(Xp,{initialBooks:e.demoData.initialBooks}),e.demoType==="ecommerce"&&o.jsx(Jp,{products:e.demoData.products}),e.demoType==="shoes"&&o.jsx(Zp,{shoes:e.demoData.shoes})]})]})]}),o.jsxs("div",{className:"modal-footer",children:[o.jsxs("a",{href:e.github,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",children:[o.jsx(jl,{size:18}),o.jsx("span",{children:"View GitHub Code"})]}),o.jsx("button",{onClick:t,className:"btn btn-primary",children:o.jsx("span",{children:"Close Preview"})})]})]}),o.jsx("style",{children:`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(10px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: fadeIn 0.25s ease;
        }

        .modal-container {
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-accent);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 1rem;
        }

        .modal-title {
          font-size: 1.6rem;
          margin-top: 0.3rem;
        }

        .modal-close-btn {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--primary);
          border-color: var(--primary);
        }

        .modal-description {
          color: var(--text-secondary);
          line-height: 1.6;
          font-size: 1.05rem;
        }

        .modal-tech-stack {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .stack-title {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .tech-tags {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .modal-tag {
          padding: 0.25rem 0.65rem;
          background: rgba(56, 189, 248, 0.1);
          border: 1px solid rgba(56, 189, 248, 0.25);
          color: var(--primary);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-family: var(--font-mono);
        }

        .demo-box {
          padding: 1.5rem;
          background: rgba(15, 23, 42, 0.9);
          border: 1px solid var(--border-glass);
        }

        .demo-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-glass);
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .demo-live-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--accent-emerald);
        }

        .demo-instructions {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          border-top: 1px solid var(--border-glass);
          padding-top: 1rem;
        }
      `})]}):null}function Kp(){const[e,t]=T.useState(navigator.onLine),[n,r]=T.useState(24),[l,i]=T.useState([`[${new Date().toLocaleTimeString()}] System initialized. Connection stable.`]),a=()=>{const u=Math.floor(Math.random()*35)+15;r(u),i(c=>[`[${new Date().toLocaleTimeString()}] Manual Ping Test: ${u}ms (Latency OK)`,...c.slice(0,3)])},s=()=>{const u=!e;t(u),i(c=>[`[${new Date().toLocaleTimeString()}] Connection status changed: ${u?"ONLINE":"OFFLINE"}`,...c.slice(0,3)])};return o.jsxs("div",{className:"net-demo",children:[o.jsx("div",{className:"net-status-card",children:e?o.jsxs("div",{className:"net-online",children:[o.jsx(Ip,{size:36,className:"text-emerald"}),o.jsxs("div",{children:[o.jsx("h4",{children:"Connected to Internet"}),o.jsxs("p",{children:["Ping latency: ",o.jsxs("strong",{children:[n,"ms"]})," | Protocol: HTTPS/WSS"]})]})]}):o.jsxs("div",{className:"net-offline",children:[o.jsx(Rp,{size:36,className:"text-rose"}),o.jsxs("div",{children:[o.jsx("h4",{children:"No Internet Access"}),o.jsx("p",{children:"Offline event triggered. Check network cables or router."})]})]})}),o.jsxs("div",{className:"net-actions",children:[o.jsxs("button",{onClick:a,className:"btn btn-outline",disabled:!e,children:[o.jsx(jc,{size:15})," Test Latency"]}),o.jsxs("button",{onClick:s,className:"btn btn-secondary",children:["Simulate ",e?"Network Disconnect":"Reconnect"]})]}),o.jsxs("div",{className:"net-logs",children:[o.jsx("span",{className:"log-title",children:"Network Event Stream:"}),l.map((u,c)=>o.jsx("div",{className:"log-item",children:u},c))]}),o.jsx("style",{children:`
        .net-status-card {
          padding: 1.25rem;
          background: rgba(255,255,255,0.03);
          border-radius: var(--radius-md);
          margin-bottom: 1rem;
        }
        .net-online, .net-offline { display: flex; align-items: center; gap: 1rem; }
        .text-rose { color: #f43f5e; }
        .net-actions { display: flex; gap: 0.75rem; margin-bottom: 1rem; }
        .net-logs { font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted); }
        .log-title { display: block; margin-bottom: 0.4rem; color: var(--primary); }
        .log-item { padding: 0.2rem 0; border-bottom: 1px dashed rgba(255,255,255,0.05); }
      `})]})}function Yp(){const[e,t]=T.useState(100),[n,r]=T.useState(100),[l,i]=T.useState(0),[a,s]=T.useState(0),[u,c]=T.useState(0),h=()=>{t(100),r(100),i(0),s(0),c(0)};return o.jsxs("div",{className:"photo-demo",children:[o.jsx("div",{className:"photo-preview-box",children:o.jsx("div",{className:"photo-sample",style:{filter:`brightness(${e}%) contrast(${n}%) grayscale(${l}%) blur(${a}px)`,transform:`rotate(${u}deg)`},children:o.jsxs("div",{className:"sample-art",children:[o.jsx(kp,{size:48}),o.jsx("span",{children:"Sample Image Canvas"})]})})}),o.jsxs("div",{className:"photo-controls",children:[o.jsxs("div",{className:"ctrl-group",children:[o.jsxs("label",{children:["Brightness: ",e,"%"]}),o.jsx("input",{type:"range",min:"50",max:"150",value:e,onChange:v=>t(v.target.value)})]}),o.jsxs("div",{className:"ctrl-group",children:[o.jsxs("label",{children:["Contrast: ",n,"%"]}),o.jsx("input",{type:"range",min:"50",max:"150",value:n,onChange:v=>r(v.target.value)})]}),o.jsxs("div",{className:"ctrl-group",children:[o.jsxs("label",{children:["Grayscale: ",l,"%"]}),o.jsx("input",{type:"range",min:"0",max:"100",value:l,onChange:v=>i(v.target.value)})]}),o.jsxs("div",{className:"ctrl-group",children:[o.jsxs("label",{children:["Blur: ",a,"px"]}),o.jsx("input",{type:"range",min:"0",max:"10",value:a,onChange:v=>s(v.target.value)})]})]}),o.jsxs("div",{className:"photo-actions",children:[o.jsx("button",{onClick:()=>c(v=>(v+90)%360),className:"btn btn-outline",children:"Rotate 90°"}),o.jsx("button",{onClick:h,className:"btn btn-secondary",children:"Reset Filters"})]}),o.jsx("style",{children:`
        .photo-preview-box { height: 170px; background: #000; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 1rem; }
        .photo-sample { transition: filter 0.1s ease; }
        .sample-art { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: var(--primary); }
        .photo-controls { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; font-size: 0.825rem; }
        .ctrl-group { display: flex; flex-direction: column; gap: 0.25rem; color: var(--text-secondary); }
        .ctrl-group input { accent-color: var(--primary); cursor: pointer; }
        .photo-actions { display: flex; gap: 0.75rem; }
      `})]})}function Xp({initialBooks:e}){const[t,n]=T.useState(e),[r,l]=T.useState(""),[i,a]=T.useState(""),[s,u]=T.useState(""),c=m=>{n(t.map(x=>x.id===m?{...x,status:x.status==="Available"?"Borrowed":"Available"}:x))},h=m=>{m.preventDefault(),r.trim()&&(n([...t,{id:Date.now(),title:r,author:i||"Unknown",category:"General",status:"Available"}]),l(""),a(""))},v=t.filter(m=>m.title.toLowerCase().includes(s.toLowerCase())||m.author.toLowerCase().includes(s.toLowerCase()));return o.jsxs("div",{className:"lib-demo",children:[o.jsx("div",{className:"lib-tools",children:o.jsx("input",{type:"text",placeholder:"Search books by title or author...",value:s,onChange:m=>u(m.target.value),className:"lib-input"})}),o.jsx("div",{className:"lib-table-wrapper",children:o.jsxs("table",{className:"lib-table",children:[o.jsx("thead",{children:o.jsxs("tr",{children:[o.jsx("th",{children:"Title"}),o.jsx("th",{children:"Author"}),o.jsx("th",{children:"Category"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"Action"})]})}),o.jsx("tbody",{children:v.map(m=>o.jsxs("tr",{children:[o.jsx("td",{className:"font-bold",children:m.title}),o.jsx("td",{children:m.author}),o.jsx("td",{children:o.jsx("span",{className:"category-pill",children:m.category})}),o.jsx("td",{children:o.jsx("span",{className:`status-pill ${m.status==="Available"?"avail":"borrowed"}`,children:m.status})}),o.jsx("td",{children:o.jsx("button",{onClick:()=>c(m.id),className:"btn-table",children:m.status==="Available"?"Borrow":"Return"})})]},m.id))})]})}),o.jsxs("form",{onSubmit:h,className:"lib-add-form",children:[o.jsx("input",{type:"text",placeholder:"New Book Title",value:r,onChange:m=>l(m.target.value),className:"lib-input"}),o.jsx("input",{type:"text",placeholder:"Author",value:i,onChange:m=>a(m.target.value),className:"lib-input"}),o.jsxs("button",{type:"submit",className:"btn btn-primary",children:[o.jsx(bp,{size:16})," Add Book"]})]}),o.jsx("style",{children:`
        .lib-tools { margin-bottom: 0.75rem; }
        .lib-input { width: 100%; padding: 0.55rem 0.85rem; background: rgba(255,255,255,0.05); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); color: #fff; font-size: 0.85rem; }
        .lib-table-wrapper { overflow-x: auto; margin-bottom: 1rem; }
        .lib-table { width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left; }
        .lib-table th, .lib-table td { padding: 0.6rem 0.75rem; border-bottom: 1px solid var(--border-glass); }
        .lib-table th { color: var(--text-muted); font-family: var(--font-mono); }
        .font-bold { font-weight: 600; color: var(--text-primary); }
        .category-pill { padding: 0.15rem 0.5rem; background: rgba(255,255,255,0.05); border-radius: 4px; font-size: 0.75rem; }
        .status-pill { padding: 0.15rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
        .status-pill.avail { background: rgba(52,211,153,0.15); color: var(--accent-emerald); }
        .status-pill.borrowed { background: rgba(251,191,36,0.15); color: var(--accent-amber); }
        .btn-table { padding: 0.25rem 0.65rem; background: var(--bg-card); border: 1px solid var(--border-glass); color: var(--primary); border-radius: 4px; cursor: pointer; }
        .lib-add-form { display: flex; gap: 0.5rem; flex-wrap: wrap; }
      `})]})}function Jp({products:e}){const[t,n]=T.useState([]),[r,l]=T.useState(!1),i=s=>{n(u=>u.find(h=>h.id===s.id)?u.map(h=>h.id===s.id?{...h,qty:h.qty+1}:h):[...u,{...s,qty:1}])},a=t.reduce((s,u)=>s+u.price*u.qty,0);return o.jsxs("div",{className:"ecom-demo",children:[o.jsx("div",{className:"ecom-grid",children:e.map(s=>o.jsxs("div",{className:"p-card",children:[o.jsx("div",{className:"p-category",children:s.category}),o.jsx("div",{className:"p-title",children:s.name}),o.jsxs("div",{className:"p-footer",children:[o.jsxs("span",{className:"p-price",children:["$",s.price]}),o.jsxs("button",{onClick:()=>i(s),className:"p-btn",children:[o.jsx(rs,{size:14})," Add"]})]})]},s.id))}),o.jsxs("div",{className:"cart-summary",children:[o.jsxs("div",{className:"cart-header",children:[o.jsxs("span",{children:[o.jsx(rs,{size:16})," Cart Items (",t.reduce((s,u)=>s+u.qty,0),")"]}),o.jsxs("span",{className:"cart-total",children:["Total: $",a]})]}),t.length>0&&o.jsx("button",{onClick:()=>{l(!0),setTimeout(()=>l(!1),3e3),n([])},className:"btn btn-primary btn-full",children:r?"✓ Order Placed Successfully!":"Proceed to Checkout"})]}),o.jsx("style",{children:`
        .ecom-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; }
        .p-card { background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); padding: 0.75rem; border-radius: var(--radius-sm); }
        .p-category { font-size: 0.7rem; color: var(--primary); font-family: var(--font-mono); }
        .p-title { font-weight: 600; font-size: 0.85rem; margin: 0.2rem 0 0.5rem 0; color: var(--text-primary); }
        .p-footer { display: flex; justify-content: space-between; align-items: center; }
        .p-price { font-weight: 700; color: var(--accent-emerald); font-size: 0.95rem; }
        .p-btn { padding: 0.25rem 0.6rem; background: var(--primary-glow); border: 1px solid var(--primary); color: var(--primary); border-radius: 4px; cursor: pointer; display: flex; align-items: center; gap: 0.3rem; font-size: 0.8rem; }
        .cart-summary { background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: var(--radius-sm); }
        .cart-header { display: flex; justify-content: space-between; font-weight: 600; font-size: 0.9rem; margin-bottom: 0.5rem; }
        .cart-total { color: var(--accent-emerald); }
        .btn-full { width: 100%; margin-top: 0.5rem; }
      `})]})}function Zp({shoes:e}){const[t,n]=T.useState(e[0]),[r,l]=T.useState(e[0].sizes[0]);return o.jsxs("div",{className:"shoes-demo",children:[o.jsxs("div",{className:"shoes-showcase",children:[o.jsxs("div",{className:"shoe-detail",children:[o.jsx("h4",{children:t.name}),o.jsxs("span",{className:"shoe-color",children:["Color: ",t.color]}),o.jsxs("div",{className:"shoe-price",children:["$",t.price]})]}),o.jsxs("div",{className:"size-selector",children:[o.jsx("span",{className:"size-label",children:"Select EUR Size:"}),o.jsx("div",{className:"sizes-grid",children:t.sizes.map(i=>o.jsx("button",{onClick:()=>l(i),className:`size-btn ${r===i?"active":""}`,children:i},i))})]})]}),o.jsx("div",{className:"shoes-list",children:e.map(i=>o.jsxs("button",{onClick:()=>{n(i),l(i.sizes[0])},className:`shoe-thumb ${t.id===i.id?"active":""}`,children:[o.jsx("span",{children:i.name}),o.jsxs("span",{children:["$",i.price]})]},i.id))}),o.jsx("style",{children:`
        .shoes-showcase { background: rgba(255,255,255,0.03); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
        .shoe-detail h4 { font-size: 1.1rem; color: var(--text-primary); }
        .shoe-color { font-size: 0.8rem; color: var(--text-muted); display: block; }
        .shoe-price { font-size: 1.3rem; font-weight: 800; color: var(--primary); margin-top: 0.4rem; }
        .sizes-grid { display: flex; gap: 0.4rem; margin-top: 0.4rem; }
        .size-btn { width: 32px; height: 32px; border-radius: 4px; border: 1px solid var(--border-glass); background: var(--bg-card); color: var(--text-primary); cursor: pointer; }
        .size-btn.active { border-color: var(--primary); background: var(--primary); color: #fff; }
        .shoes-list { display: flex; gap: 0.5rem; overflow-x: auto; }
        .shoe-thumb { flex: 1; padding: 0.5rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-glass); border-radius: var(--radius-sm); color: var(--text-secondary); cursor: pointer; display: flex; flex-direction: column; font-size: 0.8rem; text-align: left; }
        .shoe-thumb.active { border-color: var(--primary); color: var(--primary); background: rgba(56,189,248,0.05); }
      `})]})}function qp({onClose:e,showToast:t}){const n=()=>{window.print()},r=()=>{const l=`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Maryam Tarek - Resume</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.5; padding: 30px; color: #111; max-width: 800px; margin: 0 auto; }
          h1 { color: #0284c7; margin-bottom: 2px; }
          .subtitle { font-size: 18px; font-weight: bold; color: #444; margin-bottom: 15px; }
          .contact { font-size: 14px; color: #555; margin-bottom: 20px; border-bottom: 2px solid #0284c7; padding-bottom: 10px; }
          .section-title { font-size: 16px; text-transform: uppercase; color: #0284c7; border-bottom: 1px solid #ddd; padding-bottom: 4px; margin-top: 20px; }
          ul { padding-left: 20px; }
          li { margin-bottom: 5px; }
          .item-header { display: flex; justify-content: space-between; font-weight: bold; margin-top: 10px; }
        </style>
      </head>
      <body>
        <h1>${R.name}</h1>
        <div class="subtitle">${R.title}</div>
        <div class="contact">
          Phone: ${R.phone} | Email: ${R.email}<br/>
          LinkedIn: ${R.linkedinHandle} | GitHub: ${R.githubHandle}
        </div>
        
        <div class="section-title">PROFILE</div>
        <p>${R.summary}</p>
        
        <div class="section-title">EDUCATION</div>
        <div class="item-header">
          <span>Bachelor of Computer and Information Sciences (IT Dept)</span>
          <span>2022 - 2026</span>
        </div>
        <div>Mansoura University | Grade: Very Good (83%)</div>

        <div class="section-title">PROFESSIONAL EXPERIENCE</div>
        <div class="item-header">
          <span>Freelance Front-End Developer @ Smart Pharmacy</span>
          <span>2025 - Present</span>
        </div>
        <ul>
          ${Lr[0].responsibilities.map(u=>`<li>${u}</li>`).join("")}
        </ul>

        <div class="item-header">
          <span>Front-End Trainee @ Information Technology Institute (ITI)</span>
          <span>Aug 2025 - Sep 2025</span>
        </div>
        <ul>
          ${Lr[1].responsibilities.map(u=>`<li>${u}</li>`).join("")}
        </ul>

        <div class="section-title">KEY PROJECTS</div>
        <ul>
          ${Qi.map(u=>`<li><strong>${u.title}:</strong> ${u.shortDesc}</li>`).join("")}
        </ul>

        <div class="section-title">SKILLS</div>
        <p>${Gi.flatMap(u=>u.skills.map(c=>c.name)).join(" • ")}</p>

        <script>
          window.onload = function() { window.print(); }
        <\/script>
      </body>
      </html>
    `,i=new Blob([l],{type:"text/html"}),a=URL.createObjectURL(i),s=document.createElement("a");s.href=a,s.download="Maryam_Tarek_FrontEnd_Developer_CV.html",document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(a),t("CV downloaded successfully! You can open and save it as PDF.")};return o.jsxs("div",{className:"cv-modal-backdrop",onClick:e,children:[o.jsxs("div",{className:"cv-modal-container glass-card",onClick:l=>l.stopPropagation(),children:[o.jsxs("div",{className:"cv-modal-header",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"cv-modal-title",children:"Curriculum Vitae Preview"}),o.jsx("p",{className:"cv-modal-sub",children:"Maryam Tarek — Front-end Developer (ReactJS)"})]}),o.jsx("button",{className:"cv-modal-close",onClick:e,"aria-label":"Close CV Modal",children:o.jsx(Vo,{size:20})})]}),o.jsxs("div",{className:"cv-actions-bar",children:[o.jsxs("button",{onClick:r,className:"btn btn-primary",children:[o.jsx(ll,{size:18}),o.jsx("span",{children:"Download CV File"})]}),o.jsxs("button",{onClick:n,className:"btn btn-secondary",children:[o.jsx(Mp,{size:18}),o.jsx("span",{children:"Print / Save as PDF"})]})]}),o.jsxs("div",{className:"cv-paper",children:[o.jsxs("div",{className:"cv-paper-header",children:[o.jsx("h2",{children:R.name}),o.jsx("div",{className:"cv-paper-role",children:R.title}),o.jsxs("div",{className:"cv-paper-contact",children:[o.jsx("span",{children:R.phone})," • ",o.jsx("span",{children:R.email})," • ",o.jsx("span",{children:R.location}),o.jsx("br",{}),o.jsxs("span",{children:["LinkedIn: ",R.linkedinHandle]})," • ",o.jsxs("span",{children:["GitHub: ",R.githubHandle]})]})]}),o.jsxs("div",{className:"cv-paper-section",children:[o.jsx("h4",{className:"paper-sec-title",children:"PROFILE"}),o.jsx("p",{children:R.summary})]}),o.jsxs("div",{className:"cv-paper-section",children:[o.jsx("h4",{className:"paper-sec-title",children:"EDUCATION"}),o.jsxs("div",{className:"paper-item",children:[o.jsxs("div",{className:"item-row",children:[o.jsx("strong",{children:"Bachelor of Computer and Information Sciences (IT Dept)"}),o.jsx("span",{children:"2022 – 2026"})]}),o.jsx("div",{className:"item-sub",children:"Mansoura University | Grade: Very Good (83%)"})]})]}),o.jsxs("div",{className:"cv-paper-section",children:[o.jsx("h4",{className:"paper-sec-title",children:"PROFESSIONAL EXPERIENCE"}),Lr.map((l,i)=>o.jsxs("div",{className:"paper-item",children:[o.jsxs("div",{className:"item-row",children:[o.jsxs("strong",{children:[l.role," — ",l.company]}),o.jsx("span",{children:l.period})]}),o.jsx("ul",{children:l.responsibilities.map((a,s)=>o.jsx("li",{children:a},s))})]},i))]}),o.jsxs("div",{className:"cv-paper-section",children:[o.jsx("h4",{className:"paper-sec-title",children:"PROJECTS"}),o.jsx("ul",{children:Qi.map((l,i)=>o.jsxs("li",{children:[o.jsxs("strong",{children:[l.title,":"]})," ",l.shortDesc]},i))})]}),o.jsxs("div",{className:"cv-paper-section",children:[o.jsx("h4",{className:"paper-sec-title",children:"SKILLS"}),o.jsx("p",{className:"skills-inline",children:Gi.flatMap(l=>l.skills.map(i=>i.name)).join(" • ")})]})]})]}),o.jsx("style",{children:`
        .cv-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(12px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .cv-modal-container {
          width: 100%;
          max-width: 850px;
          max-height: 90vh;
          overflow-y: auto;
          background: var(--bg-secondary);
          border: 1px solid var(--border-accent);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .cv-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 1rem;
        }

        .cv-modal-title {
          font-size: 1.5rem;
        }

        .cv-modal-sub {
          color: var(--primary);
          font-size: 0.9rem;
        }

        .cv-modal-close {
          background: var(--bg-card);
          border: 1px solid var(--border-glass);
          color: var(--text-primary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .cv-actions-bar {
          display: flex;
          gap: 1rem;
          justify-content: flex-start;
        }

        .cv-paper {
          background: #ffffff;
          color: #1e293b;
          padding: 2.5rem;
          border-radius: var(--radius-sm);
          font-family: Arial, sans-serif;
          font-size: 0.9rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .cv-paper-header {
          border-bottom: 2px solid #0284c7;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
        }

        .cv-paper-header h2 {
          color: #0284c7;
          font-size: 1.8rem;
        }

        .cv-paper-role {
          font-weight: bold;
          color: #475569;
          font-size: 1rem;
          margin-bottom: 0.4rem;
        }

        .cv-paper-contact {
          font-size: 0.85rem;
          color: #64748b;
        }

        .cv-paper-section {
          margin-bottom: 1.25rem;
        }

        .paper-sec-title {
          color: #0284c7;
          border-bottom: 1px solid #cbd5e1;
          padding-bottom: 0.2rem;
          margin-bottom: 0.6rem;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
        }

        .paper-item {
          margin-bottom: 0.75rem;
        }

        .item-row {
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }

        .item-sub {
          color: #475569;
          font-size: 0.85rem;
        }

        .cv-paper ul {
          padding-left: 1.2rem;
          margin-top: 0.4rem;
        }

        .cv-paper li {
          margin-bottom: 0.25rem;
        }

        .skills-inline {
          line-height: 1.6;
          color: #334155;
        }

        @media print {
          body * {
            visibility: hidden;
          }
          .cv-paper, .cv-paper * {
            visibility: visible;
          }
          .cv-paper {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `})]})}function em(){const[e,t]=T.useState("dark"),[n,r]=T.useState(null),[l,i]=T.useState(!1),[a,s]=T.useState(null);T.useEffect(()=>{document.documentElement.setAttribute("data-theme",e)},[e]);const u=()=>{t(h=>h==="dark"?"light":"dark")},c=h=>{s(h),setTimeout(()=>{s(null)},3500)};return o.jsxs("div",{className:"app-main",children:[o.jsx(Op,{theme:e,toggleTheme:u,onDownloadCV:()=>i(!0)}),o.jsxs("main",{children:[o.jsx($p,{onDownloadCV:()=>i(!0)}),o.jsx(Up,{}),o.jsx(Bp,{}),o.jsx(Vp,{onSelectProject:h=>r(h)}),o.jsx(Hp,{}),o.jsx(Wp,{showToast:c})]}),o.jsx(Qp,{}),n&&o.jsx(Gp,{project:n,onClose:()=>r(null)}),l&&o.jsx(qp,{onClose:()=>i(!1),showToast:c}),a&&o.jsxs("div",{className:"toast-notification",children:[o.jsx(gc,{size:20,className:"text-emerald"}),o.jsx("span",{children:a})]})]})}ql.createRoot(document.getElementById("root")).render(o.jsx($c.StrictMode,{children:o.jsx(em,{})}));
