"use strict";(()=>{var bL=Object.create;var en=Object.defineProperty;var AL=Object.getOwnPropertyDescriptor;var ML=Object.getOwnPropertyNames;var DL=Object.getPrototypeOf,TL=Object.prototype.hasOwnProperty;var de=(a,e)=>()=>(e||a((e={exports:{}}).exports,e),e.exports);var BL=(a,e,t,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of ML(e))!TL.call(a,u)&&u!==t&&en(a,u,{get:()=>e[u],enumerable:!(l=AL(e,u))||l.enumerable});return a};var ga=(a,e,t)=>(t=a!=null?bL(DL(a)):{},BL(e||!a||!a.__esModule?en(t,"default",{value:a,enumerable:!0}):t,a));var cn=de(W=>{"use strict";function ud(a,e){var t=a.length;a.push(e);a:for(;0<t;){var l=t-1>>>1,u=a[l];if(0<io(u,e))a[l]=e,a[t]=u,t=l;else break a}}function se(a){return a.length===0?null:a[0]}function ro(a){if(a.length===0)return null;var e=a[0],t=a.pop();if(t!==e){a[0]=t;a:for(var l=0,u=a.length,o=u>>>1;l<o;){var f=2*(l+1)-1,d=a[f],s=f+1,r=a[s];if(0>io(d,t))s<u&&0>io(r,d)?(a[l]=r,a[s]=t,l=s):(a[l]=d,a[f]=t,l=f);else if(s<u&&0>io(r,t))a[l]=r,a[s]=t,l=s;else break a}}return e}function io(a,e){var t=a.sortIndex-e.sortIndex;return t!==0?t:a.id-e.id}W.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(tn=performance,W.unstable_now=function(){return tn.now()}):(ed=Date,ln=ed.now(),W.unstable_now=function(){return ed.now()-ln});var tn,ed,ln,xe=[],He=[],wL=1,Za=null,ba=3,od=!1,Nl=!1,Gl=!1,fd=!1,fn=typeof setTimeout=="function"?setTimeout:null,dn=typeof clearTimeout=="function"?clearTimeout:null,un=typeof setImmediate<"u"?setImmediate:null;function no(a){for(var e=se(He);e!==null;){if(e.callback===null)ro(He);else if(e.startTime<=a)ro(He),e.sortIndex=e.expirationTime,ud(xe,e);else break;e=se(He)}}function dd(a){if(Gl=!1,no(a),!Nl)if(se(xe)!==null)Nl=!0,Nt||(Nt=!0,Ft());else{var e=se(He);e!==null&&sd(dd,e.startTime-a)}}var Nt=!1,_l=-1,sn=5,nn=-1;function rn(){return fd?!0:!(W.unstable_now()-nn<sn)}function td(){if(fd=!1,Nt){var a=W.unstable_now();nn=a;var e=!0;try{a:{Nl=!1,Gl&&(Gl=!1,dn(_l),_l=-1),od=!0;var t=ba;try{e:{for(no(a),Za=se(xe);Za!==null&&!(Za.expirationTime>a&&rn());){var l=Za.callback;if(typeof l=="function"){Za.callback=null,ba=Za.priorityLevel;var u=l(Za.expirationTime<=a);if(a=W.unstable_now(),typeof u=="function"){Za.callback=u,no(a),e=!0;break e}Za===se(xe)&&ro(xe),no(a)}else ro(xe);Za=se(xe)}if(Za!==null)e=!0;else{var o=se(He);o!==null&&sd(dd,o.startTime-a),e=!1}}break a}finally{Za=null,ba=t,od=!1}e=void 0}}finally{e?Ft():Nt=!1}}}var Ft;typeof un=="function"?Ft=function(){un(td)}:typeof MessageChannel<"u"?(ld=new MessageChannel,on=ld.port2,ld.port1.onmessage=td,Ft=function(){on.postMessage(null)}):Ft=function(){fn(td,0)};var ld,on;function sd(a,e){_l=fn(function(){a(W.unstable_now())},e)}W.unstable_IdlePriority=5;W.unstable_ImmediatePriority=1;W.unstable_LowPriority=4;W.unstable_NormalPriority=3;W.unstable_Profiling=null;W.unstable_UserBlockingPriority=2;W.unstable_cancelCallback=function(a){a.callback=null};W.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):sn=0<a?Math.floor(1e3/a):5};W.unstable_getCurrentPriorityLevel=function(){return ba};W.unstable_next=function(a){switch(ba){case 1:case 2:case 3:var e=3;break;default:e=ba}var t=ba;ba=e;try{return a()}finally{ba=t}};W.unstable_requestPaint=function(){fd=!0};W.unstable_runWithPriority=function(a,e){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var t=ba;ba=a;try{return e()}finally{ba=t}};W.unstable_scheduleCallback=function(a,e,t){var l=W.unstable_now();switch(typeof t=="object"&&t!==null?(t=t.delay,t=typeof t=="number"&&0<t?l+t:l):t=l,a){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return u=t+u,a={id:wL++,callback:e,priorityLevel:a,startTime:t,expirationTime:u,sortIndex:-1},t>l?(a.sortIndex=t,ud(He,a),se(xe)===null&&a===se(He)&&(Gl?(dn(_l),_l=-1):Gl=!0,sd(dd,t-l))):(a.sortIndex=u,ud(xe,a),Nl||od||(Nl=!0,Nt||(Nt=!0,Ft()))),a};W.unstable_shouldYield=rn;W.unstable_wrapCallback=function(a){var e=ba;return function(){var t=ba;ba=e;try{return a.apply(this,arguments)}finally{ba=t}}}});var mn=de((uS,pn)=>{"use strict";pn.exports=cn()});var An=de(T=>{"use strict";var rd=Symbol.for("react.transitional.element"),kL=Symbol.for("react.portal"),RL=Symbol.for("react.fragment"),OL=Symbol.for("react.strict_mode"),UL=Symbol.for("react.profiler"),qL=Symbol.for("react.consumer"),zL=Symbol.for("react.context"),EL=Symbol.for("react.forward_ref"),HL=Symbol.for("react.suspense"),FL=Symbol.for("react.memo"),Sn=Symbol.for("react.lazy"),NL=Symbol.for("react.activity"),Ln=Symbol.iterator;function GL(a){return a===null||typeof a!="object"?null:(a=Ln&&a[Ln]||a["@@iterator"],typeof a=="function"?a:null)}var Cn={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},In=Object.assign,yn={};function _t(a,e,t){this.props=a,this.context=e,this.refs=yn,this.updater=t||Cn}_t.prototype.isReactComponent={};_t.prototype.setState=function(a,e){if(typeof a!="object"&&typeof a!="function"&&a!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,e,"setState")};_t.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function vn(){}vn.prototype=_t.prototype;function cd(a,e,t){this.props=a,this.context=e,this.refs=yn,this.updater=t||Cn}var pd=cd.prototype=new vn;pd.constructor=cd;In(pd,_t.prototype);pd.isPureReactComponent=!0;var xn=Array.isArray;function nd(){}var Q={H:null,A:null,T:null,S:null},bn=Object.prototype.hasOwnProperty;function md(a,e,t){var l=t.ref;return{$$typeof:rd,type:a,key:e,ref:l!==void 0?l:null,props:t}}function _L(a,e){return md(a.type,e,a.props)}function Ld(a){return typeof a=="object"&&a!==null&&a.$$typeof===rd}function PL(a){var e={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(t){return e[t]})}var hn=/\/+/g;function id(a,e){return typeof a=="object"&&a!==null&&a.key!=null?PL(""+a.key):e.toString(36)}function XL(a){switch(a.status){case"fulfilled":return a.value;case"rejected":throw a.reason;default:switch(typeof a.status=="string"?a.then(nd,nd):(a.status="pending",a.then(function(e){a.status==="pending"&&(a.status="fulfilled",a.value=e)},function(e){a.status==="pending"&&(a.status="rejected",a.reason=e)})),a.status){case"fulfilled":return a.value;case"rejected":throw a.reason}}throw a}function Gt(a,e,t,l,u){var o=typeof a;(o==="undefined"||o==="boolean")&&(a=null);var f=!1;if(a===null)f=!0;else switch(o){case"bigint":case"string":case"number":f=!0;break;case"object":switch(a.$$typeof){case rd:case kL:f=!0;break;case Sn:return f=a._init,Gt(f(a._payload),e,t,l,u)}}if(f)return u=u(a),f=l===""?"."+id(a,0):l,xn(u)?(t="",f!=null&&(t=f.replace(hn,"$&/")+"/"),Gt(u,e,t,"",function(r){return r})):u!=null&&(Ld(u)&&(u=_L(u,t+(u.key==null||a&&a.key===u.key?"":(""+u.key).replace(hn,"$&/")+"/")+f)),e.push(u)),1;f=0;var d=l===""?".":l+":";if(xn(a))for(var s=0;s<a.length;s++)l=a[s],o=d+id(l,s),f+=Gt(l,e,t,o,u);else if(s=GL(a),typeof s=="function")for(a=s.call(a),s=0;!(l=a.next()).done;)l=l.value,o=d+id(l,s++),f+=Gt(l,e,t,o,u);else if(o==="object"){if(typeof a.then=="function")return Gt(XL(a),e,t,l,u);throw e=String(a),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return f}function co(a,e,t){if(a==null)return a;var l=[],u=0;return Gt(a,l,"","",function(o){return e.call(t,o,u++)}),l}function VL(a){if(a._status===-1){var e=a._result;e=e(),e.then(function(t){(a._status===0||a._status===-1)&&(a._status=1,a._result=t)},function(t){(a._status===0||a._status===-1)&&(a._status=2,a._result=t)}),a._status===-1&&(a._status=0,a._result=e)}if(a._status===1)return a._result.default;throw a._result}var gn=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},ZL={map:co,forEach:function(a,e,t){co(a,function(){e.apply(this,arguments)},t)},count:function(a){var e=0;return co(a,function(){e++}),e},toArray:function(a){return co(a,function(e){return e})||[]},only:function(a){if(!Ld(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};T.Activity=NL;T.Children=ZL;T.Component=_t;T.Fragment=RL;T.Profiler=UL;T.PureComponent=cd;T.StrictMode=OL;T.Suspense=HL;T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q;T.__COMPILER_RUNTIME={__proto__:null,c:function(a){return Q.H.useMemoCache(a)}};T.cache=function(a){return function(){return a.apply(null,arguments)}};T.cacheSignal=function(){return null};T.cloneElement=function(a,e,t){if(a==null)throw Error("The argument must be a React element, but you passed "+a+".");var l=In({},a.props),u=a.key;if(e!=null)for(o in e.key!==void 0&&(u=""+e.key),e)!bn.call(e,o)||o==="key"||o==="__self"||o==="__source"||o==="ref"&&e.ref===void 0||(l[o]=e[o]);var o=arguments.length-2;if(o===1)l.children=t;else if(1<o){for(var f=Array(o),d=0;d<o;d++)f[d]=arguments[d+2];l.children=f}return md(a.type,u,l)};T.createContext=function(a){return a={$$typeof:zL,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null},a.Provider=a,a.Consumer={$$typeof:qL,_context:a},a};T.createElement=function(a,e,t){var l,u={},o=null;if(e!=null)for(l in e.key!==void 0&&(o=""+e.key),e)bn.call(e,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(u[l]=e[l]);var f=arguments.length-2;if(f===1)u.children=t;else if(1<f){for(var d=Array(f),s=0;s<f;s++)d[s]=arguments[s+2];u.children=d}if(a&&a.defaultProps)for(l in f=a.defaultProps,f)u[l]===void 0&&(u[l]=f[l]);return md(a,o,u)};T.createRef=function(){return{current:null}};T.forwardRef=function(a){return{$$typeof:EL,render:a}};T.isValidElement=Ld;T.lazy=function(a){return{$$typeof:Sn,_payload:{_status:-1,_result:a},_init:VL}};T.memo=function(a,e){return{$$typeof:FL,type:a,compare:e===void 0?null:e}};T.startTransition=function(a){var e=Q.T,t={};Q.T=t;try{var l=a(),u=Q.S;u!==null&&u(t,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(nd,gn)}catch(o){gn(o)}finally{e!==null&&t.types!==null&&(e.types=t.types),Q.T=e}};T.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()};T.use=function(a){return Q.H.use(a)};T.useActionState=function(a,e,t){return Q.H.useActionState(a,e,t)};T.useCallback=function(a,e){return Q.H.useCallback(a,e)};T.useContext=function(a){return Q.H.useContext(a)};T.useDebugValue=function(){};T.useDeferredValue=function(a,e){return Q.H.useDeferredValue(a,e)};T.useEffect=function(a,e){return Q.H.useEffect(a,e)};T.useEffectEvent=function(a){return Q.H.useEffectEvent(a)};T.useId=function(){return Q.H.useId()};T.useImperativeHandle=function(a,e,t){return Q.H.useImperativeHandle(a,e,t)};T.useInsertionEffect=function(a,e){return Q.H.useInsertionEffect(a,e)};T.useLayoutEffect=function(a,e){return Q.H.useLayoutEffect(a,e)};T.useMemo=function(a,e){return Q.H.useMemo(a,e)};T.useOptimistic=function(a,e){return Q.H.useOptimistic(a,e)};T.useReducer=function(a,e,t){return Q.H.useReducer(a,e,t)};T.useRef=function(a){return Q.H.useRef(a)};T.useState=function(a){return Q.H.useState(a)};T.useSyncExternalStore=function(a,e,t){return Q.H.useSyncExternalStore(a,e,t)};T.useTransition=function(){return Q.H.useTransition()};T.version="19.2.6"});var he=de((fS,Mn)=>{"use strict";Mn.exports=An()});var Tn=de(Ma=>{"use strict";var YL=he();function Dn(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Fe(){}var Aa={d:{f:Fe,r:function(){throw Error(Dn(522))},D:Fe,C:Fe,L:Fe,m:Fe,X:Fe,S:Fe,M:Fe},p:0,findDOMNode:null},QL=Symbol.for("react.portal");function jL(a,e,t){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:QL,key:l==null?null:""+l,children:a,containerInfo:e,implementation:t}}var Pl=YL.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function po(a,e){if(a==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ma.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Aa;Ma.createPortal=function(a,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Dn(299));return jL(a,e,null,t)};Ma.flushSync=function(a){var e=Pl.T,t=Aa.p;try{if(Pl.T=null,Aa.p=2,a)return a()}finally{Pl.T=e,Aa.p=t,Aa.d.f()}};Ma.preconnect=function(a,e){typeof a=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Aa.d.C(a,e))};Ma.prefetchDNS=function(a){typeof a=="string"&&Aa.d.D(a)};Ma.preinit=function(a,e){if(typeof a=="string"&&e&&typeof e.as=="string"){var t=e.as,l=po(t,e.crossOrigin),u=typeof e.integrity=="string"?e.integrity:void 0,o=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;t==="style"?Aa.d.S(a,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:l,integrity:u,fetchPriority:o}):t==="script"&&Aa.d.X(a,{crossOrigin:l,integrity:u,fetchPriority:o,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ma.preinitModule=function(a,e){if(typeof a=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var t=po(e.as,e.crossOrigin);Aa.d.M(a,{crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Aa.d.M(a)};Ma.preload=function(a,e){if(typeof a=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var t=e.as,l=po(t,e.crossOrigin);Aa.d.L(a,t,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ma.preloadModule=function(a,e){if(typeof a=="string")if(e){var t=po(e.as,e.crossOrigin);Aa.d.m(a,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Aa.d.m(a)};Ma.requestFormReset=function(a){Aa.d.r(a)};Ma.unstable_batchedUpdates=function(a,e){return a(e)};Ma.useFormState=function(a,e,t){return Pl.H.useFormState(a,e,t)};Ma.useFormStatus=function(){return Pl.H.useHostTransitionStatus()};Ma.version="19.2.6"});var kn=de((sS,wn)=>{"use strict";function Bn(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bn)}catch(a){console.error(a)}}Bn(),wn.exports=Tn()});var Pm=de(Ff=>{"use strict";var ra=mn(),lc=he(),KL=kn();function S(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function uc(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function Bu(a){var e=a,t=a;if(a.alternate)for(;e.return;)e=e.return;else{a=e;do e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;while(a)}return e.tag===3?t:null}function oc(a){if(a.tag===13){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function fc(a){if(a.tag===31){var e=a.memoizedState;if(e===null&&(a=a.alternate,a!==null&&(e=a.memoizedState)),e!==null)return e.dehydrated}return null}function Rn(a){if(Bu(a)!==a)throw Error(S(188))}function JL(a){var e=a.alternate;if(!e){if(e=Bu(a),e===null)throw Error(S(188));return e!==a?null:a}for(var t=a,l=e;;){var u=t.return;if(u===null)break;var o=u.alternate;if(o===null){if(l=u.return,l!==null){t=l;continue}break}if(u.child===o.child){for(o=u.child;o;){if(o===t)return Rn(u),a;if(o===l)return Rn(u),e;o=o.sibling}throw Error(S(188))}if(t.return!==l.return)t=u,l=o;else{for(var f=!1,d=u.child;d;){if(d===t){f=!0,t=u,l=o;break}if(d===l){f=!0,l=u,t=o;break}d=d.sibling}if(!f){for(d=o.child;d;){if(d===t){f=!0,t=o,l=u;break}if(d===l){f=!0,l=o,t=u;break}d=d.sibling}if(!f)throw Error(S(189))}}if(t.alternate!==l)throw Error(S(190))}if(t.tag!==3)throw Error(S(188));return t.stateNode.current===t?a:e}function dc(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a;for(a=a.child;a!==null;){if(e=dc(a),e!==null)return e;a=a.sibling}return null}var J=Object.assign,WL=Symbol.for("react.element"),mo=Symbol.for("react.transitional.element"),Jl=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),ic=Symbol.for("react.consumer"),Ae=Symbol.for("react.context"),Xs=Symbol.for("react.forward_ref"),Kd=Symbol.for("react.suspense"),Jd=Symbol.for("react.suspense_list"),Vs=Symbol.for("react.memo"),Ne=Symbol.for("react.lazy"),Wd=Symbol.for("react.activity"),$L=Symbol.for("react.memo_cache_sentinel"),On=Symbol.iterator;function Xl(a){return a===null||typeof a!="object"?null:(a=On&&a[On]||a["@@iterator"],typeof a=="function"?a:null)}var ax=Symbol.for("react.client.reference");function $d(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===ax?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case Qt:return"Fragment";case jd:return"Profiler";case sc:return"StrictMode";case Kd:return"Suspense";case Jd:return"SuspenseList";case Wd:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case Jl:return"Portal";case Ae:return a.displayName||"Context";case ic:return(a._context.displayName||"Context")+".Consumer";case Xs:var e=a.render;return a=a.displayName,a||(a=e.displayName||e.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case Vs:return e=a.displayName||null,e!==null?e:$d(a.type)||"Memo";case Ne:e=a._payload,a=a._init;try{return $d(a(e))}catch{}}return null}var Wl=Array.isArray,A=lc.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=KL.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vt={pending:!1,data:null,method:null,action:null},as=[],jt=-1;function pe(a){return{current:a}}function xa(a){0>jt||(a.current=as[jt],as[jt]=null,jt--)}function Z(a,e){jt++,as[jt]=a.current,a.current=e}var ce=pe(null),Lu=pe(null),Je=pe(null),Yo=pe(null);function Qo(a,e){switch(Z(Je,e),Z(Lu,a),Z(ce,null),e.nodeType){case 9:case 11:a=(a=e.documentElement)&&(a=a.namespaceURI)?Nr(a):0;break;default:if(a=e.tagName,e=e.namespaceURI)e=Nr(e),a=Bm(e,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}xa(ce),Z(ce,a)}function pl(){xa(ce),xa(Lu),xa(Je)}function es(a){a.memoizedState!==null&&Z(Yo,a);var e=ce.current,t=Bm(e,a.type);e!==t&&(Z(Lu,a),Z(ce,t))}function jo(a){Lu.current===a&&(xa(ce),xa(Lu)),Yo.current===a&&(xa(Yo),Mu._currentValue=vt)}var xd,Un;function St(a){if(xd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);xd=e&&e[1]||"",Un=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xd+a+Un}var hd=!1;function gd(a,e){if(!a||hd)return"";hd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var x=function(){throw Error()};if(Object.defineProperty(x.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(x,[])}catch(m){var p=m}Reflect.construct(a,[],x)}else{try{x.call()}catch(m){p=m}a.call(x.prototype)}}else{try{throw Error()}catch(m){p=m}(x=a())&&typeof x.catch=="function"&&x.catch(function(){})}}catch(m){if(m&&p&&typeof m.stack=="string")return[m.stack,p.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=l.DetermineComponentFrameRoot(),f=o[0],d=o[1];if(f&&d){var s=f.split(`
`),r=d.split(`
`);for(u=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;u<r.length&&!r[u].includes("DetermineComponentFrameRoot");)u++;if(l===s.length||u===r.length)for(l=s.length-1,u=r.length-1;1<=l&&0<=u&&s[l]!==r[u];)u--;for(;1<=l&&0<=u;l--,u--)if(s[l]!==r[u]){if(l!==1||u!==1)do if(l--,u--,0>u||s[l]!==r[u]){var L=`
`+s[l].replace(" at new "," at ");return a.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",a.displayName)),L}while(1<=l&&0<=u);break}}}finally{hd=!1,Error.prepareStackTrace=t}return(t=a?a.displayName||a.name:"")?St(t):""}function ex(a,e){switch(a.tag){case 26:case 27:case 5:return St(a.type);case 16:return St("Lazy");case 13:return a.child!==e&&e!==null?St("Suspense Fallback"):St("Suspense");case 19:return St("SuspenseList");case 0:case 15:return gd(a.type,!1);case 11:return gd(a.type.render,!1);case 1:return gd(a.type,!0);case 31:return St("Activity");default:return""}}function qn(a){try{var e="",t=null;do e+=ex(a,t),t=a,a=a.return;while(a);return e}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ts=Object.prototype.hasOwnProperty,Zs=ra.unstable_scheduleCallback,Sd=ra.unstable_cancelCallback,tx=ra.unstable_shouldYield,lx=ra.unstable_requestPaint,Fa=ra.unstable_now,ux=ra.unstable_getCurrentPriorityLevel,nc=ra.unstable_ImmediatePriority,rc=ra.unstable_UserBlockingPriority,Ko=ra.unstable_NormalPriority,ox=ra.unstable_LowPriority,cc=ra.unstable_IdlePriority,fx=ra.log,dx=ra.unstable_setDisableYieldValue,wu=null,Na=null;function Ze(a){if(typeof fx=="function"&&dx(a),Na&&typeof Na.setStrictMode=="function")try{Na.setStrictMode(wu,a)}catch{}}var Ga=Math.clz32?Math.clz32:nx,sx=Math.log,ix=Math.LN2;function nx(a){return a>>>=0,a===0?32:31-(sx(a)/ix|0)|0}var Lo=256,xo=262144,ho=4194304;function Ct(a){var e=a&42;if(e!==0)return e;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&261888;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function vf(a,e,t){var l=a.pendingLanes;if(l===0)return 0;var u=0,o=a.suspendedLanes,f=a.pingedLanes;a=a.warmLanes;var d=l&134217727;return d!==0?(l=d&~o,l!==0?u=Ct(l):(f&=d,f!==0?u=Ct(f):t||(t=d&~a,t!==0&&(u=Ct(t))))):(d=l&~o,d!==0?u=Ct(d):f!==0?u=Ct(f):t||(t=l&~a,t!==0&&(u=Ct(t)))),u===0?0:e!==0&&e!==u&&(e&o)===0&&(o=u&-u,t=e&-e,o>=t||o===32&&(t&4194048)!==0)?e:u}function ku(a,e){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&e)===0}function rx(a,e){switch(a){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pc(){var a=ho;return ho<<=1,(ho&62914560)===0&&(ho=4194304),a}function Cd(a){for(var e=[],t=0;31>t;t++)e.push(a);return e}function Ru(a,e){a.pendingLanes|=e,e!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function cx(a,e,t,l,u,o){var f=a.pendingLanes;a.pendingLanes=t,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=t,a.entangledLanes&=t,a.errorRecoveryDisabledLanes&=t,a.shellSuspendCounter=0;var d=a.entanglements,s=a.expirationTimes,r=a.hiddenUpdates;for(t=f&~t;0<t;){var L=31-Ga(t),x=1<<L;d[L]=0,s[L]=-1;var p=r[L];if(p!==null)for(r[L]=null,L=0;L<p.length;L++){var m=p[L];m!==null&&(m.lane&=-536870913)}t&=~x}l!==0&&mc(a,l,0),o!==0&&u===0&&a.tag!==0&&(a.suspendedLanes|=o&~(f&~e))}function mc(a,e,t){a.pendingLanes|=e,a.suspendedLanes&=~e;var l=31-Ga(e);a.entangledLanes|=e,a.entanglements[l]=a.entanglements[l]|1073741824|t&261930}function Lc(a,e){var t=a.entangledLanes|=e;for(a=a.entanglements;t;){var l=31-Ga(t),u=1<<l;u&e|a[l]&e&&(a[l]|=e),t&=~u}}function xc(a,e){var t=e&-e;return t=(t&42)!==0?1:Ys(t),(t&(a.suspendedLanes|e))!==0?0:t}function Ys(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Qs(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function hc(){var a=F.p;return a!==0?a:(a=window.event,a===void 0?32:Nm(a.type))}function zn(a,e){var t=F.p;try{return F.p=a,e()}finally{F.p=t}}var nt=Math.random().toString(36).slice(2),Ca="__reactFiber$"+nt,Oa="__reactProps$"+nt,bl="__reactContainer$"+nt,ls="__reactEvents$"+nt,px="__reactListeners$"+nt,mx="__reactHandles$"+nt,En="__reactResources$"+nt,Ou="__reactMarker$"+nt;function js(a){delete a[Ca],delete a[Oa],delete a[ls],delete a[px],delete a[mx]}function Kt(a){var e=a[Ca];if(e)return e;for(var t=a.parentNode;t;){if(e=t[bl]||t[Ca]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(a=Vr(a);a!==null;){if(t=a[Ca])return t;a=Vr(a)}return e}a=t,t=a.parentNode}return null}function Al(a){if(a=a[Ca]||a[bl]){var e=a.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return a}return null}function $l(a){var e=a.tag;if(e===5||e===26||e===27||e===6)return a.stateNode;throw Error(S(33))}function fl(a){var e=a[En];return e||(e=a[En]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function La(a){a[Ou]=!0}var gc=new Set,Sc={};function Ot(a,e){ml(a,e),ml(a+"Capture",e)}function ml(a,e){for(Sc[a]=e,a=0;a<e.length;a++)gc.add(e[a])}var Lx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hn={},Fn={};function xx(a){return ts.call(Fn,a)?!0:ts.call(Hn,a)?!1:Lx.test(a)?Fn[a]=!0:(Hn[a]=!0,!1)}function Ro(a,e,t){if(xx(e))if(t===null)a.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":a.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){a.removeAttribute(e);return}}a.setAttribute(e,""+t)}}function go(a,e,t){if(t===null)a.removeAttribute(e);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttribute(e,""+t)}}function ge(a,e,t,l){if(l===null)a.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(t);return}a.setAttributeNS(e,t,""+l)}}function Qa(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Cc(a){var e=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hx(a,e,t){var l=Object.getOwnPropertyDescriptor(a.constructor.prototype,e);if(!a.hasOwnProperty(e)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,o=l.set;return Object.defineProperty(a,e,{configurable:!0,get:function(){return u.call(this)},set:function(f){t=""+f,o.call(this,f)}}),Object.defineProperty(a,e,{enumerable:l.enumerable}),{getValue:function(){return t},setValue:function(f){t=""+f},stopTracking:function(){a._valueTracker=null,delete a[e]}}}}function us(a){if(!a._valueTracker){var e=Cc(a)?"checked":"value";a._valueTracker=hx(a,e,""+a[e])}}function Ic(a){if(!a)return!1;var e=a._valueTracker;if(!e)return!0;var t=e.getValue(),l="";return a&&(l=Cc(a)?a.checked?"true":"false":a.value),a=l,a!==t?(e.setValue(a),!0):!1}function Jo(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var gx=/[\n"\\]/g;function Ja(a){return a.replace(gx,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function os(a,e,t,l,u,o,f,d){a.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?a.type=f:a.removeAttribute("type"),e!=null?f==="number"?(e===0&&a.value===""||a.value!=e)&&(a.value=""+Qa(e)):a.value!==""+Qa(e)&&(a.value=""+Qa(e)):f!=="submit"&&f!=="reset"||a.removeAttribute("value"),e!=null?fs(a,f,Qa(e)):t!=null?fs(a,f,Qa(t)):l!=null&&a.removeAttribute("value"),u==null&&o!=null&&(a.defaultChecked=!!o),u!=null&&(a.checked=u&&typeof u!="function"&&typeof u!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?a.name=""+Qa(d):a.removeAttribute("name")}function yc(a,e,t,l,u,o,f,d){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(a.type=o),e!=null||t!=null){if(!(o!=="submit"&&o!=="reset"||e!=null)){us(a);return}t=t!=null?""+Qa(t):"",e=e!=null?""+Qa(e):t,d||e===a.value||(a.value=e),a.defaultValue=e}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,a.checked=d?a.checked:!!l,a.defaultChecked=!!l,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(a.name=f),us(a)}function fs(a,e,t){e==="number"&&Jo(a.ownerDocument)===a||a.defaultValue===""+t||(a.defaultValue=""+t)}function dl(a,e,t,l){if(a=a.options,e){e={};for(var u=0;u<t.length;u++)e["$"+t[u]]=!0;for(t=0;t<a.length;t++)u=e.hasOwnProperty("$"+a[t].value),a[t].selected!==u&&(a[t].selected=u),u&&l&&(a[t].defaultSelected=!0)}else{for(t=""+Qa(t),e=null,u=0;u<a.length;u++){if(a[u].value===t){a[u].selected=!0,l&&(a[u].defaultSelected=!0);return}e!==null||a[u].disabled||(e=a[u])}e!==null&&(e.selected=!0)}}function vc(a,e,t){if(e!=null&&(e=""+Qa(e),e!==a.value&&(a.value=e),t==null)){a.defaultValue!==e&&(a.defaultValue=e);return}a.defaultValue=t!=null?""+Qa(t):""}function bc(a,e,t,l){if(e==null){if(l!=null){if(t!=null)throw Error(S(92));if(Wl(l)){if(1<l.length)throw Error(S(93));l=l[0]}t=l}t==null&&(t=""),e=t}t=Qa(e),a.defaultValue=t,l=a.textContent,l===t&&l!==""&&l!==null&&(a.value=l),us(a)}function Ll(a,e){if(e){var t=a.firstChild;if(t&&t===a.lastChild&&t.nodeType===3){t.nodeValue=e;return}}a.textContent=e}var Sx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nn(a,e,t){var l=e.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?a.setProperty(e,""):e==="float"?a.cssFloat="":a[e]="":l?a.setProperty(e,t):typeof t!="number"||t===0||Sx.has(e)?e==="float"?a.cssFloat=t:a[e]=(""+t).trim():a[e]=t+"px"}function Ac(a,e,t){if(e!=null&&typeof e!="object")throw Error(S(62));if(a=a.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?a.setProperty(l,""):l==="float"?a.cssFloat="":a[l]="");for(var u in e)l=e[u],e.hasOwnProperty(u)&&t[u]!==l&&Nn(a,u,l)}else for(var o in e)e.hasOwnProperty(o)&&Nn(a,o,e[o])}function Ks(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ix=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oo(a){return Ix.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function Me(){}var ds=null;function Js(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var Jt=null,sl=null;function Gn(a){var e=Al(a);if(e&&(a=e.stateNode)){var t=a[Oa]||null;a:switch(a=e.stateNode,e.type){case"input":if(os(a,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),e=t.name,t.type==="radio"&&e!=null){for(t=a;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Ja(""+e)+'"][type="radio"]'),e=0;e<t.length;e++){var l=t[e];if(l!==a&&l.form===a.form){var u=l[Oa]||null;if(!u)throw Error(S(90));os(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<t.length;e++)l=t[e],l.form===a.form&&Ic(l)}break a;case"textarea":vc(a,t.value,t.defaultValue);break a;case"select":e=t.value,e!=null&&dl(a,!!t.multiple,e,!1)}}}var Id=!1;function Mc(a,e,t){if(Id)return a(e,t);Id=!0;try{var l=a(e);return l}finally{if(Id=!1,(Jt!==null||sl!==null)&&(qf(),Jt&&(e=Jt,a=sl,sl=Jt=null,Gn(e),a)))for(e=0;e<a.length;e++)Gn(a[e])}}function xu(a,e){var t=a.stateNode;if(t===null)return null;var l=t[Oa]||null;if(l===null)return null;t=l[e];a:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(a=a.type,l=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!l;break a;default:a=!1}if(a)return null;if(t&&typeof t!="function")throw Error(S(231,e,typeof t));return t}var ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ss=!1;if(ke)try{Pt={},Object.defineProperty(Pt,"passive",{get:function(){ss=!0}}),window.addEventListener("test",Pt,Pt),window.removeEventListener("test",Pt,Pt)}catch{ss=!1}var Pt,Ye=null,Ws=null,Uo=null;function Dc(){if(Uo)return Uo;var a,e=Ws,t=e.length,l,u="value"in Ye?Ye.value:Ye.textContent,o=u.length;for(a=0;a<t&&e[a]===u[a];a++);var f=t-a;for(l=1;l<=f&&e[t-l]===u[o-l];l++);return Uo=u.slice(a,1<l?1-l:void 0)}function qo(a){var e=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&e===13&&(a=13)):a=e,a===10&&(a=13),32<=a||a===13?a:0}function So(){return!0}function _n(){return!1}function Ua(a){function e(t,l,u,o,f){this._reactName=t,this._targetInst=u,this.type=l,this.nativeEvent=o,this.target=f,this.currentTarget=null;for(var d in a)a.hasOwnProperty(d)&&(t=a[d],this[d]=t?t(o):o[d]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?So:_n,this.isPropagationStopped=_n,this}return J(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),e}var Ut={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Ua(Ut),Uu=J({},Ut,{view:0,detail:0}),yx=Ua(Uu),yd,vd,Vl,Af=J({},Uu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$s,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Vl&&(Vl&&a.type==="mousemove"?(yd=a.screenX-Vl.screenX,vd=a.screenY-Vl.screenY):vd=yd=0,Vl=a),yd)},movementY:function(a){return"movementY"in a?a.movementY:vd}}),Pn=Ua(Af),vx=J({},Af,{dataTransfer:0}),bx=Ua(vx),Ax=J({},Uu,{relatedTarget:0}),bd=Ua(Ax),Mx=J({},Ut,{animationName:0,elapsedTime:0,pseudoElement:0}),Dx=Ua(Mx),Tx=J({},Ut,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Bx=Ua(Tx),wx=J({},Ut,{data:0}),Xn=Ua(wx),kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ox={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ux(a){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(a):(a=Ox[a])?!!e[a]:!1}function $s(){return Ux}var qx=J({},Uu,{key:function(a){if(a.key){var e=kx[a.key]||a.key;if(e!=="Unidentified")return e}return a.type==="keypress"?(a=qo(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?Rx[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$s,charCode:function(a){return a.type==="keypress"?qo(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?qo(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),zx=Ua(qx),Ex=J({},Af,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vn=Ua(Ex),Hx=J({},Uu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$s}),Fx=Ua(Hx),Nx=J({},Ut,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gx=Ua(Nx),_x=J({},Af,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Px=Ua(_x),Xx=J({},Ut,{newState:0,oldState:0}),Vx=Ua(Xx),Zx=[9,13,27,32],ai=ke&&"CompositionEvent"in window,tu=null;ke&&"documentMode"in document&&(tu=document.documentMode);var Yx=ke&&"TextEvent"in window&&!tu,Tc=ke&&(!ai||tu&&8<tu&&11>=tu),Zn=" ",Yn=!1;function Bc(a,e){switch(a){case"keyup":return Zx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wc(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var Wt=!1;function Qx(a,e){switch(a){case"compositionend":return wc(e);case"keypress":return e.which!==32?null:(Yn=!0,Zn);case"textInput":return a=e.data,a===Zn&&Yn?null:a;default:return null}}function jx(a,e){if(Wt)return a==="compositionend"||!ai&&Bc(a,e)?(a=Dc(),Uo=Ws=Ye=null,Wt=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tc&&e.locale!=="ko"?null:e.data;default:return null}}var Kx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qn(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e==="input"?!!Kx[a.type]:e==="textarea"}function kc(a,e,t,l){Jt?sl?sl.push(l):sl=[l]:Jt=l,e=xf(e,"onChange"),0<e.length&&(t=new bf("onChange","change",null,t,l),a.push({event:t,listeners:e}))}var lu=null,hu=null;function Jx(a){Mm(a,0)}function Mf(a){var e=$l(a);if(Ic(e))return a}function jn(a,e){if(a==="change")return e}var Rc=!1;ke&&(ke?(Io="oninput"in document,Io||(Ad=document.createElement("div"),Ad.setAttribute("oninput","return;"),Io=typeof Ad.oninput=="function"),Co=Io):Co=!1,Rc=Co&&(!document.documentMode||9<document.documentMode));var Co,Io,Ad;function Kn(){lu&&(lu.detachEvent("onpropertychange",Oc),hu=lu=null)}function Oc(a){if(a.propertyName==="value"&&Mf(hu)){var e=[];kc(e,hu,a,Js(a)),Mc(Jx,e)}}function Wx(a,e,t){a==="focusin"?(Kn(),lu=e,hu=t,lu.attachEvent("onpropertychange",Oc)):a==="focusout"&&Kn()}function $x(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Mf(hu)}function ah(a,e){if(a==="click")return Mf(e)}function eh(a,e){if(a==="input"||a==="change")return Mf(e)}function th(a,e){return a===e&&(a!==0||1/a===1/e)||a!==a&&e!==e}var Pa=typeof Object.is=="function"?Object.is:th;function gu(a,e){if(Pa(a,e))return!0;if(typeof a!="object"||a===null||typeof e!="object"||e===null)return!1;var t=Object.keys(a),l=Object.keys(e);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var u=t[l];if(!ts.call(e,u)||!Pa(a[u],e[u]))return!1}return!0}function Jn(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Wn(a,e){var t=Jn(a);a=0;for(var l;t;){if(t.nodeType===3){if(l=a+t.textContent.length,a<=e&&l>=e)return{node:t,offset:e-a};a=l}a:{for(;t;){if(t.nextSibling){t=t.nextSibling;break a}t=t.parentNode}t=void 0}t=Jn(t)}}function Uc(a,e){return a&&e?a===e?!0:a&&a.nodeType===3?!1:e&&e.nodeType===3?Uc(a,e.parentNode):"contains"in a?a.contains(e):a.compareDocumentPosition?!!(a.compareDocumentPosition(e)&16):!1:!1}function qc(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var e=Jo(a.document);e instanceof a.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)a=e.contentWindow;else break;e=Jo(a.document)}return e}function ei(a){var e=a&&a.nodeName&&a.nodeName.toLowerCase();return e&&(e==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||e==="textarea"||a.contentEditable==="true")}var lh=ke&&"documentMode"in document&&11>=document.documentMode,$t=null,is=null,uu=null,ns=!1;function $n(a,e,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ns||$t==null||$t!==Jo(l)||(l=$t,"selectionStart"in l&&ei(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),uu&&gu(uu,l)||(uu=l,l=xf(is,"onSelect"),0<l.length&&(e=new bf("onSelect","select",null,e,t),a.push({event:e,listeners:l}),e.target=$t)))}function gt(a,e){var t={};return t[a.toLowerCase()]=e.toLowerCase(),t["Webkit"+a]="webkit"+e,t["Moz"+a]="moz"+e,t}var al={animationend:gt("Animation","AnimationEnd"),animationiteration:gt("Animation","AnimationIteration"),animationstart:gt("Animation","AnimationStart"),transitionrun:gt("Transition","TransitionRun"),transitionstart:gt("Transition","TransitionStart"),transitioncancel:gt("Transition","TransitionCancel"),transitionend:gt("Transition","TransitionEnd")},Md={},zc={};ke&&(zc=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function qt(a){if(Md[a])return Md[a];if(!al[a])return a;var e=al[a],t;for(t in e)if(e.hasOwnProperty(t)&&t in zc)return Md[a]=e[t];return a}var Ec=qt("animationend"),Hc=qt("animationiteration"),Fc=qt("animationstart"),uh=qt("transitionrun"),oh=qt("transitionstart"),fh=qt("transitioncancel"),Nc=qt("transitionend"),Gc=new Map,rs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rs.push("scrollEnd");function oe(a,e){Gc.set(a,e),Ot(e,[a])}var Wo=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},Ya=[],el=0,ti=0;function Df(){for(var a=el,e=ti=el=0;e<a;){var t=Ya[e];Ya[e++]=null;var l=Ya[e];Ya[e++]=null;var u=Ya[e];Ya[e++]=null;var o=Ya[e];if(Ya[e++]=null,l!==null&&u!==null){var f=l.pending;f===null?u.next=u:(u.next=f.next,f.next=u),l.pending=u}o!==0&&_c(t,u,o)}}function Tf(a,e,t,l){Ya[el++]=a,Ya[el++]=e,Ya[el++]=t,Ya[el++]=l,ti|=l,a.lanes|=l,a=a.alternate,a!==null&&(a.lanes|=l)}function li(a,e,t,l){return Tf(a,e,t,l),$o(a)}function zt(a,e){return Tf(a,null,null,e),$o(a)}function _c(a,e,t){a.lanes|=t;var l=a.alternate;l!==null&&(l.lanes|=t);for(var u=!1,o=a.return;o!==null;)o.childLanes|=t,l=o.alternate,l!==null&&(l.childLanes|=t),o.tag===22&&(a=o.stateNode,a===null||a._visibility&1||(u=!0)),a=o,o=o.return;return a.tag===3?(o=a.stateNode,u&&e!==null&&(u=31-Ga(t),a=o.hiddenUpdates,l=a[u],l===null?a[u]=[e]:l.push(e),e.lane=t|536870912),o):null}function $o(a){if(50<pu)throw pu=0,Rs=null,Error(S(185));for(var e=a.return;e!==null;)a=e,e=a.return;return a.tag===3?a.stateNode:null}var tl={};function dh(a,e,t,l){this.tag=a,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ea(a,e,t,l){return new dh(a,e,t,l)}function ui(a){return a=a.prototype,!(!a||!a.isReactComponent)}function Te(a,e){var t=a.alternate;return t===null?(t=Ea(a.tag,e,a.key,a.mode),t.elementType=a.elementType,t.type=a.type,t.stateNode=a.stateNode,t.alternate=a,a.alternate=t):(t.pendingProps=e,t.type=a.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=a.flags&65011712,t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=a.sibling,t.index=a.index,t.ref=a.ref,t.refCleanup=a.refCleanup,t}function Pc(a,e){a.flags&=65011714;var t=a.alternate;return t===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,a.type=t.type,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a}function zo(a,e,t,l,u,o){var f=0;if(l=a,typeof a=="function")ui(a)&&(f=1);else if(typeof a=="string")f=ng(a,t,ce.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(a){case Wd:return a=Ea(31,t,e,u),a.elementType=Wd,a.lanes=o,a;case Qt:return bt(t.children,u,o,e);case sc:f=8,u|=24;break;case jd:return a=Ea(12,t,e,u|2),a.elementType=jd,a.lanes=o,a;case Kd:return a=Ea(13,t,e,u),a.elementType=Kd,a.lanes=o,a;case Jd:return a=Ea(19,t,e,u),a.elementType=Jd,a.lanes=o,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case Ae:f=10;break a;case ic:f=9;break a;case Xs:f=11;break a;case Vs:f=14;break a;case Ne:f=16,l=null;break a}f=29,t=Error(S(130,a===null?"null":typeof a,"")),l=null}return e=Ea(f,t,e,u),e.elementType=a,e.type=l,e.lanes=o,e}function bt(a,e,t,l){return a=Ea(7,a,l,e),a.lanes=t,a}function Dd(a,e,t){return a=Ea(6,a,null,e),a.lanes=t,a}function Xc(a){var e=Ea(18,null,null,0);return e.stateNode=a,e}function Td(a,e,t){return e=Ea(4,a.children!==null?a.children:[],a.key,e),e.lanes=t,e.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},e}var ar=new WeakMap;function Wa(a,e){if(typeof a=="object"&&a!==null){var t=ar.get(a);return t!==void 0?t:(e={value:a,source:e,stack:qn(e)},ar.set(a,e),e)}return{value:a,source:e,stack:qn(e)}}var ll=[],ul=0,af=null,Su=0,ja=[],Ka=0,ft=null,ie=1,ne="";function ve(a,e){ll[ul++]=Su,ll[ul++]=af,af=a,Su=e}function Vc(a,e,t){ja[Ka++]=ie,ja[Ka++]=ne,ja[Ka++]=ft,ft=a;var l=ie;a=ne;var u=32-Ga(l)-1;l&=~(1<<u),t+=1;var o=32-Ga(e)+u;if(30<o){var f=u-u%5;o=(l&(1<<f)-1).toString(32),l>>=f,u-=f,ie=1<<32-Ga(e)+u|t<<u|l,ne=o+a}else ie=1<<o|t<<u|l,ne=a}function oi(a){a.return!==null&&(ve(a,1),Vc(a,1,0))}function fi(a){for(;a===af;)af=ll[--ul],ll[ul]=null,Su=ll[--ul],ll[ul]=null;for(;a===ft;)ft=ja[--Ka],ja[Ka]=null,ne=ja[--Ka],ja[Ka]=null,ie=ja[--Ka],ja[Ka]=null}function Zc(a,e){ja[Ka++]=ie,ja[Ka++]=ne,ja[Ka++]=ft,ie=e.id,ne=e.overflow,ft=a}var Ia=null,K=null,z=!1,We=null,$a=!1,cs=Error(S(519));function dt(a){var e=Error(S(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cu(Wa(e,a)),cs}function er(a){var e=a.stateNode,t=a.type,l=a.memoizedProps;switch(e[Ca]=a,e[Oa]=l,t){case"dialog":k("cancel",e),k("close",e);break;case"iframe":case"object":case"embed":k("load",e);break;case"video":case"audio":for(t=0;t<bu.length;t++)k(bu[t],e);break;case"source":k("error",e);break;case"img":case"image":case"link":k("error",e),k("load",e);break;case"details":k("toggle",e);break;case"input":k("invalid",e),yc(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":k("invalid",e);break;case"textarea":k("invalid",e),bc(e,l.value,l.defaultValue,l.children)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||e.textContent===""+t||l.suppressHydrationWarning===!0||Tm(e.textContent,t)?(l.popover!=null&&(k("beforetoggle",e),k("toggle",e)),l.onScroll!=null&&k("scroll",e),l.onScrollEnd!=null&&k("scrollend",e),l.onClick!=null&&(e.onclick=Me),e=!0):e=!1,e||dt(a,!0)}function tr(a){for(Ia=a.return;Ia;)switch(Ia.tag){case 5:case 31:case 13:$a=!1;return;case 27:case 3:$a=!0;return;default:Ia=Ia.return}}function Xt(a){if(a!==Ia)return!1;if(!z)return tr(a),z=!0,!1;var e=a.tag,t;if((t=e!==3&&e!==27)&&((t=e===5)&&(t=a.type,t=!(t!=="form"&&t!=="button")||Es(a.type,a.memoizedProps)),t=!t),t&&K&&dt(a),tr(a),e===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));K=Xr(a)}else if(e===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(317));K=Xr(a)}else e===27?(e=K,rt(a.type)?(a=Gs,Gs=null,K=a):K=e):K=Ia?ee(a.stateNode.nextSibling):null;return!0}function Tt(){K=Ia=null,z=!1}function Bd(){var a=We;return a!==null&&(ka===null?ka=a:ka.push.apply(ka,a),We=null),a}function Cu(a){We===null?We=[a]:We.push(a)}var ps=pe(null),Et=null,De=null;function _e(a,e,t){Z(ps,e._currentValue),e._currentValue=t}function Be(a){a._currentValue=ps.current,xa(ps)}function ms(a,e,t){for(;a!==null;){var l=a.alternate;if((a.childLanes&e)!==e?(a.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),a===t)break;a=a.return}}function Ls(a,e,t,l){var u=a.child;for(u!==null&&(u.return=a);u!==null;){var o=u.dependencies;if(o!==null){var f=u.child;o=o.firstContext;a:for(;o!==null;){var d=o;o=u;for(var s=0;s<e.length;s++)if(d.context===e[s]){o.lanes|=t,d=o.alternate,d!==null&&(d.lanes|=t),ms(o.return,t,a),l||(f=null);break a}o=d.next}}else if(u.tag===18){if(f=u.return,f===null)throw Error(S(341));f.lanes|=t,o=f.alternate,o!==null&&(o.lanes|=t),ms(f,t,a),f=null}else f=u.child;if(f!==null)f.return=u;else for(f=u;f!==null;){if(f===a){f=null;break}if(u=f.sibling,u!==null){u.return=f.return,f=u;break}f=f.return}u=f}}function Ml(a,e,t,l){a=null;for(var u=e,o=!1;u!==null;){if(!o){if((u.flags&524288)!==0)o=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var f=u.alternate;if(f===null)throw Error(S(387));if(f=f.memoizedProps,f!==null){var d=u.type;Pa(u.pendingProps.value,f.value)||(a!==null?a.push(d):a=[d])}}else if(u===Yo.current){if(f=u.alternate,f===null)throw Error(S(387));f.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(a!==null?a.push(Mu):a=[Mu])}u=u.return}a!==null&&Ls(e,a,t,l),e.flags|=262144}function ef(a){for(a=a.firstContext;a!==null;){if(!Pa(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Bt(a){Et=a,De=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function ya(a){return Yc(Et,a)}function yo(a,e){return Et===null&&Bt(a),Yc(a,e)}function Yc(a,e){var t=e._currentValue;if(e={context:e,memoizedValue:t,next:null},De===null){if(a===null)throw Error(S(308));De=e,a.dependencies={lanes:0,firstContext:e},a.flags|=524288}else De=De.next=e;return t}var sh=typeof AbortController<"u"?AbortController:function(){var a=[],e=this.signal={aborted:!1,addEventListener:function(t,l){a.push(l)}};this.abort=function(){e.aborted=!0,a.forEach(function(t){return t()})}},ih=ra.unstable_scheduleCallback,nh=ra.unstable_NormalPriority,da={$$typeof:Ae,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function di(){return{controller:new sh,data:new Map,refCount:0}}function qu(a){a.refCount--,a.refCount===0&&ih(nh,function(){a.controller.abort()})}var ou=null,xs=0,xl=0,il=null;function rh(a,e){if(ou===null){var t=ou=[];xs=0,xl=Ri(),il={status:"pending",value:void 0,then:function(l){t.push(l)}}}return xs++,e.then(lr,lr),e}function lr(){if(--xs===0&&ou!==null){il!==null&&(il.status="fulfilled");var a=ou;ou=null,xl=0,il=null;for(var e=0;e<a.length;e++)(0,a[e])()}}function ch(a,e){var t=[],l={status:"pending",value:null,reason:null,then:function(u){t.push(u)}};return a.then(function(){l.status="fulfilled",l.value=e;for(var u=0;u<t.length;u++)(0,t[u])(e)},function(u){for(l.status="rejected",l.reason=u,u=0;u<t.length;u++)(0,t[u])(void 0)}),l}var ur=A.S;A.S=function(a,e){dm=Fa(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&rh(a,e),ur!==null&&ur(a,e)};var At=pe(null);function si(){var a=At.current;return a!==null?a:V.pooledCache}function Eo(a,e){e===null?Z(At,At.current):Z(At,e.pool)}function Qc(){var a=si();return a===null?null:{parent:da._currentValue,pool:a}}var Dl=Error(S(460)),ii=Error(S(474)),Bf=Error(S(542)),tf={then:function(){}};function or(a){return a=a.status,a==="fulfilled"||a==="rejected"}function jc(a,e,t){switch(t=a[t],t===void 0?a.push(e):t!==e&&(e.then(Me,Me),e=t),e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,dr(a),a;default:if(typeof e.status=="string")e.then(Me,Me);else{if(a=V,a!==null&&100<a.shellSuspendCounter)throw Error(S(482));a=e,a.status="pending",a.then(function(l){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=l}},function(l){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw a=e.reason,dr(a),a}throw Mt=e,Dl}}function It(a){try{var e=a._init;return e(a._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Mt=t,Dl):t}}var Mt=null;function fr(){if(Mt===null)throw Error(S(459));var a=Mt;return Mt=null,a}function dr(a){if(a===Dl||a===Bf)throw Error(S(483))}var nl=null,Iu=0;function vo(a){var e=Iu;return Iu+=1,nl===null&&(nl=[]),jc(nl,a,e)}function Zl(a,e){e=e.props.ref,a.ref=e!==void 0?e:null}function bo(a,e){throw e.$$typeof===WL?Error(S(525)):(a=Object.prototype.toString.call(e),Error(S(31,a==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":a)))}function Kc(a){function e(n,i){if(a){var c=n.deletions;c===null?(n.deletions=[i],n.flags|=16):c.push(i)}}function t(n,i){if(!a)return null;for(;i!==null;)e(n,i),i=i.sibling;return null}function l(n){for(var i=new Map;n!==null;)n.key!==null?i.set(n.key,n):i.set(n.index,n),n=n.sibling;return i}function u(n,i){return n=Te(n,i),n.index=0,n.sibling=null,n}function o(n,i,c){return n.index=c,a?(c=n.alternate,c!==null?(c=c.index,c<i?(n.flags|=67108866,i):c):(n.flags|=67108866,i)):(n.flags|=1048576,i)}function f(n){return a&&n.alternate===null&&(n.flags|=67108866),n}function d(n,i,c,h){return i===null||i.tag!==6?(i=Dd(c,n.mode,h),i.return=n,i):(i=u(i,c),i.return=n,i)}function s(n,i,c,h){var v=c.type;return v===Qt?L(n,i,c.props.children,h,c.key):i!==null&&(i.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ne&&It(v)===i.type)?(i=u(i,c.props),Zl(i,c),i.return=n,i):(i=zo(c.type,c.key,c.props,null,n.mode,h),Zl(i,c),i.return=n,i)}function r(n,i,c,h){return i===null||i.tag!==4||i.stateNode.containerInfo!==c.containerInfo||i.stateNode.implementation!==c.implementation?(i=Td(c,n.mode,h),i.return=n,i):(i=u(i,c.children||[]),i.return=n,i)}function L(n,i,c,h,v){return i===null||i.tag!==7?(i=bt(c,n.mode,h,v),i.return=n,i):(i=u(i,c),i.return=n,i)}function x(n,i,c){if(typeof i=="string"&&i!==""||typeof i=="number"||typeof i=="bigint")return i=Dd(""+i,n.mode,c),i.return=n,i;if(typeof i=="object"&&i!==null){switch(i.$$typeof){case mo:return c=zo(i.type,i.key,i.props,null,n.mode,c),Zl(c,i),c.return=n,c;case Jl:return i=Td(i,n.mode,c),i.return=n,i;case Ne:return i=It(i),x(n,i,c)}if(Wl(i)||Xl(i))return i=bt(i,n.mode,c,null),i.return=n,i;if(typeof i.then=="function")return x(n,vo(i),c);if(i.$$typeof===Ae)return x(n,yo(n,i),c);bo(n,i)}return null}function p(n,i,c,h){var v=i!==null?i.key:null;if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return v!==null?null:d(n,i,""+c,h);if(typeof c=="object"&&c!==null){switch(c.$$typeof){case mo:return c.key===v?s(n,i,c,h):null;case Jl:return c.key===v?r(n,i,c,h):null;case Ne:return c=It(c),p(n,i,c,h)}if(Wl(c)||Xl(c))return v!==null?null:L(n,i,c,h,null);if(typeof c.then=="function")return p(n,i,vo(c),h);if(c.$$typeof===Ae)return p(n,i,yo(n,c),h);bo(n,c)}return null}function m(n,i,c,h,v){if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return n=n.get(c)||null,d(i,n,""+h,v);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case mo:return n=n.get(h.key===null?c:h.key)||null,s(i,n,h,v);case Jl:return n=n.get(h.key===null?c:h.key)||null,r(i,n,h,v);case Ne:return h=It(h),m(n,i,c,h,v)}if(Wl(h)||Xl(h))return n=n.get(c)||null,L(i,n,h,v,null);if(typeof h.then=="function")return m(n,i,c,vo(h),v);if(h.$$typeof===Ae)return m(n,i,c,yo(i,h),v);bo(i,h)}return null}function I(n,i,c,h){for(var v=null,U=null,y=i,D=i=0,B=null;y!==null&&D<c.length;D++){y.index>D?(B=y,y=null):B=y.sibling;var q=p(n,y,c[D],h);if(q===null){y===null&&(y=B);break}a&&y&&q.alternate===null&&e(n,y),i=o(q,i,D),U===null?v=q:U.sibling=q,U=q,y=B}if(D===c.length)return t(n,y),z&&ve(n,D),v;if(y===null){for(;D<c.length;D++)y=x(n,c[D],h),y!==null&&(i=o(y,i,D),U===null?v=y:U.sibling=y,U=y);return z&&ve(n,D),v}for(y=l(y);D<c.length;D++)B=m(y,n,D,c[D],h),B!==null&&(a&&B.alternate!==null&&y.delete(B.key===null?D:B.key),i=o(B,i,D),U===null?v=B:U.sibling=B,U=B);return a&&y.forEach(function(Va){return e(n,Va)}),z&&ve(n,D),v}function b(n,i,c,h){if(c==null)throw Error(S(151));for(var v=null,U=null,y=i,D=i=0,B=null,q=c.next();y!==null&&!q.done;D++,q=c.next()){y.index>D?(B=y,y=null):B=y.sibling;var Va=p(n,y,q.value,h);if(Va===null){y===null&&(y=B);break}a&&y&&Va.alternate===null&&e(n,y),i=o(Va,i,D),U===null?v=Va:U.sibling=Va,U=Va,y=B}if(q.done)return t(n,y),z&&ve(n,D),v;if(y===null){for(;!q.done;D++,q=c.next())q=x(n,q.value,h),q!==null&&(i=o(q,i,D),U===null?v=q:U.sibling=q,U=q);return z&&ve(n,D),v}for(y=l(y);!q.done;D++,q=c.next())q=m(y,n,D,q.value,h),q!==null&&(a&&q.alternate!==null&&y.delete(q.key===null?D:q.key),i=o(q,i,D),U===null?v=q:U.sibling=q,U=q);return a&&y.forEach(function(zl){return e(n,zl)}),z&&ve(n,D),v}function E(n,i,c,h){if(typeof c=="object"&&c!==null&&c.type===Qt&&c.key===null&&(c=c.props.children),typeof c=="object"&&c!==null){switch(c.$$typeof){case mo:a:{for(var v=c.key;i!==null;){if(i.key===v){if(v=c.type,v===Qt){if(i.tag===7){t(n,i.sibling),h=u(i,c.props.children),h.return=n,n=h;break a}}else if(i.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===Ne&&It(v)===i.type){t(n,i.sibling),h=u(i,c.props),Zl(h,c),h.return=n,n=h;break a}t(n,i);break}else e(n,i);i=i.sibling}c.type===Qt?(h=bt(c.props.children,n.mode,h,c.key),h.return=n,n=h):(h=zo(c.type,c.key,c.props,null,n.mode,h),Zl(h,c),h.return=n,n=h)}return f(n);case Jl:a:{for(v=c.key;i!==null;){if(i.key===v)if(i.tag===4&&i.stateNode.containerInfo===c.containerInfo&&i.stateNode.implementation===c.implementation){t(n,i.sibling),h=u(i,c.children||[]),h.return=n,n=h;break a}else{t(n,i);break}else e(n,i);i=i.sibling}h=Td(c,n.mode,h),h.return=n,n=h}return f(n);case Ne:return c=It(c),E(n,i,c,h)}if(Wl(c))return I(n,i,c,h);if(Xl(c)){if(v=Xl(c),typeof v!="function")throw Error(S(150));return c=v.call(c),b(n,i,c,h)}if(typeof c.then=="function")return E(n,i,vo(c),h);if(c.$$typeof===Ae)return E(n,i,yo(n,c),h);bo(n,c)}return typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint"?(c=""+c,i!==null&&i.tag===6?(t(n,i.sibling),h=u(i,c),h.return=n,n=h):(t(n,i),h=Dd(c,n.mode,h),h.return=n,n=h),f(n)):t(n,i)}return function(n,i,c,h){try{Iu=0;var v=E(n,i,c,h);return nl=null,v}catch(y){if(y===Dl||y===Bf)throw y;var U=Ea(29,y,null,n.mode);return U.lanes=h,U.return=n,U}}}var wt=Kc(!0),Jc=Kc(!1),Ge=!1;function ni(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hs(a,e){a=a.updateQueue,e.updateQueue===a&&(e.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function $e(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function at(a,e,t){var l=a.updateQueue;if(l===null)return null;if(l=l.shared,(H&2)!==0){var u=l.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),l.pending=e,e=$o(a),_c(a,null,t),e}return Tf(a,l,e,t),$o(a)}function fu(a,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194048)!==0)){var l=e.lanes;l&=a.pendingLanes,t|=l,e.lanes=t,Lc(a,t)}}function wd(a,e){var t=a.updateQueue,l=a.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var u=null,o=null;if(t=t.firstBaseUpdate,t!==null){do{var f={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};o===null?u=o=f:o=o.next=f,t=t.next}while(t!==null);o===null?u=o=e:o=o.next=e}else u=o=e;t={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:o,shared:l.shared,callbacks:l.callbacks},a.updateQueue=t;return}a=t.lastBaseUpdate,a===null?t.firstBaseUpdate=e:a.next=e,t.lastBaseUpdate=e}var gs=!1;function du(){if(gs){var a=il;if(a!==null)throw a}}function su(a,e,t,l){gs=!1;var u=a.updateQueue;Ge=!1;var o=u.firstBaseUpdate,f=u.lastBaseUpdate,d=u.shared.pending;if(d!==null){u.shared.pending=null;var s=d,r=s.next;s.next=null,f===null?o=r:f.next=r,f=s;var L=a.alternate;L!==null&&(L=L.updateQueue,d=L.lastBaseUpdate,d!==f&&(d===null?L.firstBaseUpdate=r:d.next=r,L.lastBaseUpdate=s))}if(o!==null){var x=u.baseState;f=0,L=r=s=null,d=o;do{var p=d.lane&-536870913,m=p!==d.lane;if(m?(O&p)===p:(l&p)===p){p!==0&&p===xl&&(gs=!0),L!==null&&(L=L.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});a:{var I=a,b=d;p=e;var E=t;switch(b.tag){case 1:if(I=b.payload,typeof I=="function"){x=I.call(E,x,p);break a}x=I;break a;case 3:I.flags=I.flags&-65537|128;case 0:if(I=b.payload,p=typeof I=="function"?I.call(E,x,p):I,p==null)break a;x=J({},x,p);break a;case 2:Ge=!0}}p=d.callback,p!==null&&(a.flags|=64,m&&(a.flags|=8192),m=u.callbacks,m===null?u.callbacks=[p]:m.push(p))}else m={lane:p,tag:d.tag,payload:d.payload,callback:d.callback,next:null},L===null?(r=L=m,s=x):L=L.next=m,f|=p;if(d=d.next,d===null){if(d=u.shared.pending,d===null)break;m=d,d=m.next,m.next=null,u.lastBaseUpdate=m,u.shared.pending=null}}while(!0);L===null&&(s=x),u.baseState=s,u.firstBaseUpdate=r,u.lastBaseUpdate=L,o===null&&(u.shared.lanes=0),it|=f,a.lanes=f,a.memoizedState=x}}function Wc(a,e){if(typeof a!="function")throw Error(S(191,a));a.call(e)}function $c(a,e){var t=a.callbacks;if(t!==null)for(a.callbacks=null,a=0;a<t.length;a++)Wc(t[a],e)}var hl=pe(null),lf=pe(0);function sr(a,e){a=qe,Z(lf,a),Z(hl,e),qe=a|e.baseLanes}function Ss(){Z(lf,qe),Z(hl,hl.current)}function ri(){qe=lf.current,xa(hl),xa(lf)}var Xa=pe(null),ae=null;function Pe(a){var e=a.alternate;Z(la,la.current&1),Z(Xa,a),ae===null&&(e===null||hl.current!==null||e.memoizedState!==null)&&(ae=a)}function Cs(a){Z(la,la.current),Z(Xa,a),ae===null&&(ae=a)}function ap(a){a.tag===22?(Z(la,la.current),Z(Xa,a),ae===null&&(ae=a)):Xe(a)}function Xe(){Z(la,la.current),Z(Xa,Xa.current)}function za(a){xa(Xa),ae===a&&(ae=null),xa(la)}var la=pe(0);function uf(a){for(var e=a;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Fs(t)||Ns(t)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Re=0,w=null,X=null,oa=null,of=!1,rl=!1,kt=!1,ff=0,yu=0,cl=null,ph=0;function ea(){throw Error(S(321))}function ci(a,e){if(e===null)return!1;for(var t=0;t<e.length&&t<a.length;t++)if(!Pa(a[t],e[t]))return!1;return!0}function pi(a,e,t,l,u,o){return Re=o,w=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,A.H=a===null||a.memoizedState===null?kp:bi,kt=!1,o=t(l,u),kt=!1,rl&&(o=tp(e,t,l,u)),ep(a),o}function ep(a){A.H=vu;var e=X!==null&&X.next!==null;if(Re=0,oa=X=w=null,of=!1,yu=0,cl=null,e)throw Error(S(300));a===null||sa||(a=a.dependencies,a!==null&&ef(a)&&(sa=!0))}function tp(a,e,t,l){w=a;var u=0;do{if(rl&&(cl=null),yu=0,rl=!1,25<=u)throw Error(S(301));if(u+=1,oa=X=null,a.updateQueue!=null){var o=a.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}A.H=Rp,o=e(t,l)}while(rl);return o}function mh(){var a=A.H,e=a.useState()[0];return e=typeof e.then=="function"?zu(e):e,a=a.useState()[0],(X!==null?X.memoizedState:null)!==a&&(w.flags|=1024),e}function mi(){var a=ff!==0;return ff=0,a}function Li(a,e,t){e.updateQueue=a.updateQueue,e.flags&=-2053,a.lanes&=~t}function xi(a){if(of){for(a=a.memoizedState;a!==null;){var e=a.queue;e!==null&&(e.pending=null),a=a.next}of=!1}Re=0,oa=X=w=null,rl=!1,yu=ff=0,cl=null}function Da(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oa===null?w.memoizedState=oa=a:oa=oa.next=a,oa}function ua(){if(X===null){var a=w.alternate;a=a!==null?a.memoizedState:null}else a=X.next;var e=oa===null?w.memoizedState:oa.next;if(e!==null)oa=e,X=a;else{if(a===null)throw w.alternate===null?Error(S(467)):Error(S(310));X=a,a={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},oa===null?w.memoizedState=oa=a:oa=oa.next=a}return oa}function wf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zu(a){var e=yu;return yu+=1,cl===null&&(cl=[]),a=jc(cl,a,e),e=w,(oa===null?e.memoizedState:oa.next)===null&&(e=e.alternate,A.H=e===null||e.memoizedState===null?kp:bi),a}function kf(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return zu(a);if(a.$$typeof===Ae)return ya(a)}throw Error(S(438,String(a)))}function hi(a){var e=null,t=w.updateQueue;if(t!==null&&(e=t.memoCache),e==null){var l=w.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),t===null&&(t=wf(),w.updateQueue=t),t.memoCache=e,t=e.data[e.index],t===void 0)for(t=e.data[e.index]=Array(a),l=0;l<a;l++)t[l]=$L;return e.index++,t}function Oe(a,e){return typeof e=="function"?e(a):e}function Ho(a){var e=ua();return gi(e,X,a)}function gi(a,e,t){var l=a.queue;if(l===null)throw Error(S(311));l.lastRenderedReducer=t;var u=a.baseQueue,o=l.pending;if(o!==null){if(u!==null){var f=u.next;u.next=o.next,o.next=f}e.baseQueue=u=o,l.pending=null}if(o=a.baseState,u===null)a.memoizedState=o;else{e=u.next;var d=f=null,s=null,r=e,L=!1;do{var x=r.lane&-536870913;if(x!==r.lane?(O&x)===x:(Re&x)===x){var p=r.revertLane;if(p===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),x===xl&&(L=!0);else if((Re&p)===p){r=r.next,p===xl&&(L=!0);continue}else x={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(d=s=x,f=o):s=s.next=x,w.lanes|=p,it|=p;x=r.action,kt&&t(o,x),o=r.hasEagerState?r.eagerState:t(o,x)}else p={lane:x,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},s===null?(d=s=p,f=o):s=s.next=p,w.lanes|=x,it|=x;r=r.next}while(r!==null&&r!==e);if(s===null?f=o:s.next=d,!Pa(o,a.memoizedState)&&(sa=!0,L&&(t=il,t!==null)))throw t;a.memoizedState=o,a.baseState=f,a.baseQueue=s,l.lastRenderedState=o}return u===null&&(l.lanes=0),[a.memoizedState,l.dispatch]}function kd(a){var e=ua(),t=e.queue;if(t===null)throw Error(S(311));t.lastRenderedReducer=a;var l=t.dispatch,u=t.pending,o=e.memoizedState;if(u!==null){t.pending=null;var f=u=u.next;do o=a(o,f.action),f=f.next;while(f!==u);Pa(o,e.memoizedState)||(sa=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),t.lastRenderedState=o}return[o,l]}function lp(a,e,t){var l=w,u=ua(),o=z;if(o){if(t===void 0)throw Error(S(407));t=t()}else t=e();var f=!Pa((X||u).memoizedState,t);if(f&&(u.memoizedState=t,sa=!0),u=u.queue,Si(fp.bind(null,l,u,a),[a]),u.getSnapshot!==e||f||oa!==null&&oa.memoizedState.tag&1){if(l.flags|=2048,gl(9,{destroy:void 0},op.bind(null,l,u,t,e),null),V===null)throw Error(S(349));o||(Re&127)!==0||up(l,e,t)}return t}function up(a,e,t){a.flags|=16384,a={getSnapshot:e,value:t},e=w.updateQueue,e===null?(e=wf(),w.updateQueue=e,e.stores=[a]):(t=e.stores,t===null?e.stores=[a]:t.push(a))}function op(a,e,t,l){e.value=t,e.getSnapshot=l,dp(e)&&sp(a)}function fp(a,e,t){return t(function(){dp(e)&&sp(a)})}function dp(a){var e=a.getSnapshot;a=a.value;try{var t=e();return!Pa(a,t)}catch{return!0}}function sp(a){var e=zt(a,2);e!==null&&Ra(e,a,2)}function Is(a){var e=Da();if(typeof a=="function"){var t=a;if(a=t(),kt){Ze(!0);try{t()}finally{Ze(!1)}}}return e.memoizedState=e.baseState=a,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oe,lastRenderedState:a},e}function ip(a,e,t,l){return a.baseState=t,gi(a,X,typeof l=="function"?l:Oe)}function Lh(a,e,t,l,u){if(Of(a))throw Error(S(485));if(a=e.action,a!==null){var o={payload:u,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){o.listeners.push(f)}};A.T!==null?t(!0):o.isTransition=!1,l(o),t=e.pending,t===null?(o.next=e.pending=o,np(e,o)):(o.next=t.next,e.pending=t.next=o)}}function np(a,e){var t=e.action,l=e.payload,u=a.state;if(e.isTransition){var o=A.T,f={};A.T=f;try{var d=t(u,l),s=A.S;s!==null&&s(f,d),ir(a,e,d)}catch(r){ys(a,e,r)}finally{o!==null&&f.types!==null&&(o.types=f.types),A.T=o}}else try{o=t(u,l),ir(a,e,o)}catch(r){ys(a,e,r)}}function ir(a,e,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){nr(a,e,l)},function(l){return ys(a,e,l)}):nr(a,e,t)}function nr(a,e,t){e.status="fulfilled",e.value=t,rp(e),a.state=t,e=a.pending,e!==null&&(t=e.next,t===e?a.pending=null:(t=t.next,e.next=t,np(a,t)))}function ys(a,e,t){var l=a.pending;if(a.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=t,rp(e),e=e.next;while(e!==l)}a.action=null}function rp(a){a=a.listeners;for(var e=0;e<a.length;e++)(0,a[e])()}function cp(a,e){return e}function rr(a,e){if(z){var t=V.formState;if(t!==null){a:{var l=w;if(z){if(K){e:{for(var u=K,o=$a;u.nodeType!==8;){if(!o){u=null;break e}if(u=ee(u.nextSibling),u===null){u=null;break e}}o=u.data,u=o==="F!"||o==="F"?u:null}if(u){K=ee(u.nextSibling),l=u.data==="F!";break a}}dt(l)}l=!1}l&&(e=t[0])}}return t=Da(),t.memoizedState=t.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:cp,lastRenderedState:e},t.queue=l,t=Tp.bind(null,w,l),l.dispatch=t,l=Is(!1),o=vi.bind(null,w,!1,l.queue),l=Da(),u={state:e,dispatch:null,action:a,pending:null},l.queue=u,t=Lh.bind(null,w,u,o,t),u.dispatch=t,l.memoizedState=a,[e,t,!1]}function cr(a){var e=ua();return pp(e,X,a)}function pp(a,e,t){if(e=gi(a,e,cp)[0],a=Ho(Oe)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=zu(e)}catch(f){throw f===Dl?Bf:f}else l=e;e=ua();var u=e.queue,o=u.dispatch;return t!==e.memoizedState&&(w.flags|=2048,gl(9,{destroy:void 0},xh.bind(null,u,t),null)),[l,o,a]}function xh(a,e){a.action=e}function pr(a){var e=ua(),t=X;if(t!==null)return pp(e,t,a);ua(),e=e.memoizedState,t=ua();var l=t.queue.dispatch;return t.memoizedState=a,[e,l,!1]}function gl(a,e,t,l){return a={tag:a,create:t,deps:l,inst:e,next:null},e=w.updateQueue,e===null&&(e=wf(),w.updateQueue=e),t=e.lastEffect,t===null?e.lastEffect=a.next=a:(l=t.next,t.next=a,a.next=l,e.lastEffect=a),a}function mp(){return ua().memoizedState}function Fo(a,e,t,l){var u=Da();w.flags|=a,u.memoizedState=gl(1|e,{destroy:void 0},t,l===void 0?null:l)}function Rf(a,e,t,l){var u=ua();l=l===void 0?null:l;var o=u.memoizedState.inst;X!==null&&l!==null&&ci(l,X.memoizedState.deps)?u.memoizedState=gl(e,o,t,l):(w.flags|=a,u.memoizedState=gl(1|e,o,t,l))}function mr(a,e){Fo(8390656,8,a,e)}function Si(a,e){Rf(2048,8,a,e)}function hh(a){w.flags|=4;var e=w.updateQueue;if(e===null)e=wf(),w.updateQueue=e,e.events=[a];else{var t=e.events;t===null?e.events=[a]:t.push(a)}}function Lp(a){var e=ua().memoizedState;return hh({ref:e,nextImpl:a}),function(){if((H&2)!==0)throw Error(S(440));return e.impl.apply(void 0,arguments)}}function xp(a,e){return Rf(4,2,a,e)}function hp(a,e){return Rf(4,4,a,e)}function gp(a,e){if(typeof e=="function"){a=a();var t=e(a);return function(){typeof t=="function"?t():e(null)}}if(e!=null)return a=a(),e.current=a,function(){e.current=null}}function Sp(a,e,t){t=t!=null?t.concat([a]):null,Rf(4,4,gp.bind(null,e,a),t)}function Ci(){}function Cp(a,e){var t=ua();e=e===void 0?null:e;var l=t.memoizedState;return e!==null&&ci(e,l[1])?l[0]:(t.memoizedState=[a,e],a)}function Ip(a,e){var t=ua();e=e===void 0?null:e;var l=t.memoizedState;if(e!==null&&ci(e,l[1]))return l[0];if(l=a(),kt){Ze(!0);try{a()}finally{Ze(!1)}}return t.memoizedState=[l,e],l}function Ii(a,e,t){return t===void 0||(Re&1073741824)!==0&&(O&261930)===0?a.memoizedState=e:(a.memoizedState=t,a=im(),w.lanes|=a,it|=a,t)}function yp(a,e,t,l){return Pa(t,e)?t:hl.current!==null?(a=Ii(a,t,l),Pa(a,e)||(sa=!0),a):(Re&42)===0||(Re&1073741824)!==0&&(O&261930)===0?(sa=!0,a.memoizedState=t):(a=im(),w.lanes|=a,it|=a,e)}function vp(a,e,t,l,u){var o=F.p;F.p=o!==0&&8>o?o:8;var f=A.T,d={};A.T=d,vi(a,!1,e,t);try{var s=u(),r=A.S;if(r!==null&&r(d,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var L=ch(s,l);iu(a,e,L,_a(a))}else iu(a,e,l,_a(a))}catch(x){iu(a,e,{then:function(){},status:"rejected",reason:x},_a())}finally{F.p=o,f!==null&&d.types!==null&&(f.types=d.types),A.T=f}}function gh(){}function vs(a,e,t,l){if(a.tag!==5)throw Error(S(476));var u=bp(a).queue;vp(a,u,e,vt,t===null?gh:function(){return Ap(a),t(l)})}function bp(a){var e=a.memoizedState;if(e!==null)return e;e={memoizedState:vt,baseState:vt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oe,lastRenderedState:vt},next:null};var t={};return e.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oe,lastRenderedState:t},next:null},a.memoizedState=e,a=a.alternate,a!==null&&(a.memoizedState=e),e}function Ap(a){var e=bp(a);e.next===null&&(e=a.alternate.memoizedState),iu(a,e.next.queue,{},_a())}function yi(){return ya(Mu)}function Mp(){return ua().memoizedState}function Dp(){return ua().memoizedState}function Sh(a){for(var e=a.return;e!==null;){switch(e.tag){case 24:case 3:var t=_a();a=$e(t);var l=at(e,a,t);l!==null&&(Ra(l,e,t),fu(l,e,t)),e={cache:di()},a.payload=e;return}e=e.return}}function Ch(a,e,t){var l=_a();t={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Of(a)?Bp(e,t):(t=li(a,e,t,l),t!==null&&(Ra(t,a,l),wp(t,e,l)))}function Tp(a,e,t){var l=_a();iu(a,e,t,l)}function iu(a,e,t,l){var u={lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Of(a))Bp(e,u);else{var o=a.alternate;if(a.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var f=e.lastRenderedState,d=o(f,t);if(u.hasEagerState=!0,u.eagerState=d,Pa(d,f))return Tf(a,e,u,0),V===null&&Df(),!1}catch{}if(t=li(a,e,u,l),t!==null)return Ra(t,a,l),wp(t,e,l),!0}return!1}function vi(a,e,t,l){if(l={lane:2,revertLane:Ri(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Of(a)){if(e)throw Error(S(479))}else e=li(a,t,l,2),e!==null&&Ra(e,a,2)}function Of(a){var e=a.alternate;return a===w||e!==null&&e===w}function Bp(a,e){rl=of=!0;var t=a.pending;t===null?e.next=e:(e.next=t.next,t.next=e),a.pending=e}function wp(a,e,t){if((t&4194048)!==0){var l=e.lanes;l&=a.pendingLanes,t|=l,e.lanes=t,Lc(a,t)}}var vu={readContext:ya,use:kf,useCallback:ea,useContext:ea,useEffect:ea,useImperativeHandle:ea,useLayoutEffect:ea,useInsertionEffect:ea,useMemo:ea,useReducer:ea,useRef:ea,useState:ea,useDebugValue:ea,useDeferredValue:ea,useTransition:ea,useSyncExternalStore:ea,useId:ea,useHostTransitionStatus:ea,useFormState:ea,useActionState:ea,useOptimistic:ea,useMemoCache:ea,useCacheRefresh:ea};vu.useEffectEvent=ea;var kp={readContext:ya,use:kf,useCallback:function(a,e){return Da().memoizedState=[a,e===void 0?null:e],a},useContext:ya,useEffect:mr,useImperativeHandle:function(a,e,t){t=t!=null?t.concat([a]):null,Fo(4194308,4,gp.bind(null,e,a),t)},useLayoutEffect:function(a,e){return Fo(4194308,4,a,e)},useInsertionEffect:function(a,e){Fo(4,2,a,e)},useMemo:function(a,e){var t=Da();e=e===void 0?null:e;var l=a();if(kt){Ze(!0);try{a()}finally{Ze(!1)}}return t.memoizedState=[l,e],l},useReducer:function(a,e,t){var l=Da();if(t!==void 0){var u=t(e);if(kt){Ze(!0);try{t(e)}finally{Ze(!1)}}}else u=e;return l.memoizedState=l.baseState=u,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:u},l.queue=a,a=a.dispatch=Ch.bind(null,w,a),[l.memoizedState,a]},useRef:function(a){var e=Da();return a={current:a},e.memoizedState=a},useState:function(a){a=Is(a);var e=a.queue,t=Tp.bind(null,w,e);return e.dispatch=t,[a.memoizedState,t]},useDebugValue:Ci,useDeferredValue:function(a,e){var t=Da();return Ii(t,a,e)},useTransition:function(){var a=Is(!1);return a=vp.bind(null,w,a.queue,!0,!1),Da().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,e,t){var l=w,u=Da();if(z){if(t===void 0)throw Error(S(407));t=t()}else{if(t=e(),V===null)throw Error(S(349));(O&127)!==0||up(l,e,t)}u.memoizedState=t;var o={value:t,getSnapshot:e};return u.queue=o,mr(fp.bind(null,l,o,a),[a]),l.flags|=2048,gl(9,{destroy:void 0},op.bind(null,l,o,t,e),null),t},useId:function(){var a=Da(),e=V.identifierPrefix;if(z){var t=ne,l=ie;t=(l&~(1<<32-Ga(l)-1)).toString(32)+t,e="_"+e+"R_"+t,t=ff++,0<t&&(e+="H"+t.toString(32)),e+="_"}else t=ph++,e="_"+e+"r_"+t.toString(32)+"_";return a.memoizedState=e},useHostTransitionStatus:yi,useFormState:rr,useActionState:rr,useOptimistic:function(a){var e=Da();e.memoizedState=e.baseState=a;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=t,e=vi.bind(null,w,!0,t),t.dispatch=e,[a,e]},useMemoCache:hi,useCacheRefresh:function(){return Da().memoizedState=Sh.bind(null,w)},useEffectEvent:function(a){var e=Da(),t={impl:a};return e.memoizedState=t,function(){if((H&2)!==0)throw Error(S(440));return t.impl.apply(void 0,arguments)}}},bi={readContext:ya,use:kf,useCallback:Cp,useContext:ya,useEffect:Si,useImperativeHandle:Sp,useInsertionEffect:xp,useLayoutEffect:hp,useMemo:Ip,useReducer:Ho,useRef:mp,useState:function(){return Ho(Oe)},useDebugValue:Ci,useDeferredValue:function(a,e){var t=ua();return yp(t,X.memoizedState,a,e)},useTransition:function(){var a=Ho(Oe)[0],e=ua().memoizedState;return[typeof a=="boolean"?a:zu(a),e]},useSyncExternalStore:lp,useId:Mp,useHostTransitionStatus:yi,useFormState:cr,useActionState:cr,useOptimistic:function(a,e){var t=ua();return ip(t,X,a,e)},useMemoCache:hi,useCacheRefresh:Dp};bi.useEffectEvent=Lp;var Rp={readContext:ya,use:kf,useCallback:Cp,useContext:ya,useEffect:Si,useImperativeHandle:Sp,useInsertionEffect:xp,useLayoutEffect:hp,useMemo:Ip,useReducer:kd,useRef:mp,useState:function(){return kd(Oe)},useDebugValue:Ci,useDeferredValue:function(a,e){var t=ua();return X===null?Ii(t,a,e):yp(t,X.memoizedState,a,e)},useTransition:function(){var a=kd(Oe)[0],e=ua().memoizedState;return[typeof a=="boolean"?a:zu(a),e]},useSyncExternalStore:lp,useId:Mp,useHostTransitionStatus:yi,useFormState:pr,useActionState:pr,useOptimistic:function(a,e){var t=ua();return X!==null?ip(t,X,a,e):(t.baseState=a,[a,t.queue.dispatch])},useMemoCache:hi,useCacheRefresh:Dp};Rp.useEffectEvent=Lp;function Rd(a,e,t,l){e=a.memoizedState,t=t(l,e),t=t==null?e:J({},e,t),a.memoizedState=t,a.lanes===0&&(a.updateQueue.baseState=t)}var bs={enqueueSetState:function(a,e,t){a=a._reactInternals;var l=_a(),u=$e(l);u.payload=e,t!=null&&(u.callback=t),e=at(a,u,l),e!==null&&(Ra(e,a,l),fu(e,a,l))},enqueueReplaceState:function(a,e,t){a=a._reactInternals;var l=_a(),u=$e(l);u.tag=1,u.payload=e,t!=null&&(u.callback=t),e=at(a,u,l),e!==null&&(Ra(e,a,l),fu(e,a,l))},enqueueForceUpdate:function(a,e){a=a._reactInternals;var t=_a(),l=$e(t);l.tag=2,e!=null&&(l.callback=e),e=at(a,l,t),e!==null&&(Ra(e,a,t),fu(e,a,t))}};function Lr(a,e,t,l,u,o,f){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(l,o,f):e.prototype&&e.prototype.isPureReactComponent?!gu(t,l)||!gu(u,o):!0}function xr(a,e,t,l){a=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,l),e.state!==a&&bs.enqueueReplaceState(e,e.state,null)}function Rt(a,e){var t=e;if("ref"in e){t={};for(var l in e)l!=="ref"&&(t[l]=e[l])}if(a=a.defaultProps){t===e&&(t=J({},t));for(var u in a)t[u]===void 0&&(t[u]=a[u])}return t}function Op(a){Wo(a)}function Up(a){console.error(a)}function qp(a){Wo(a)}function df(a,e){try{var t=a.onUncaughtError;t(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function hr(a,e,t){try{var l=a.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function As(a,e,t){return t=$e(t),t.tag=3,t.payload={element:null},t.callback=function(){df(a,e)},t}function zp(a){return a=$e(a),a.tag=3,a}function Ep(a,e,t,l){var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var o=l.value;a.payload=function(){return u(o)},a.callback=function(){hr(e,t,l)}}var f=t.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){hr(e,t,l),typeof u!="function"&&(et===null?et=new Set([this]):et.add(this));var d=l.stack;this.componentDidCatch(l.value,{componentStack:d!==null?d:""})})}function Ih(a,e,t,l,u){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=t.alternate,e!==null&&Ml(e,t,u,!0),t=Xa.current,t!==null){switch(t.tag){case 31:case 13:return ae===null?pf():t.alternate===null&&ta===0&&(ta=3),t.flags&=-257,t.flags|=65536,t.lanes=u,l===tf?t.flags|=16384:(e=t.updateQueue,e===null?t.updateQueue=new Set([l]):e.add(l),Pd(a,l,u)),!1;case 22:return t.flags|=65536,l===tf?t.flags|=16384:(e=t.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=e):(t=e.retryQueue,t===null?e.retryQueue=new Set([l]):t.add(l)),Pd(a,l,u)),!1}throw Error(S(435,t.tag))}return Pd(a,l,u),pf(),!1}if(z)return e=Xa.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,l!==cs&&(a=Error(S(422),{cause:l}),Cu(Wa(a,t)))):(l!==cs&&(e=Error(S(423),{cause:l}),Cu(Wa(e,t))),a=a.current.alternate,a.flags|=65536,u&=-u,a.lanes|=u,l=Wa(l,t),u=As(a.stateNode,l,u),wd(a,u),ta!==4&&(ta=2)),!1;var o=Error(S(520),{cause:l});if(o=Wa(o,t),cu===null?cu=[o]:cu.push(o),ta!==4&&(ta=2),e===null)return!0;l=Wa(l,t),t=e;do{switch(t.tag){case 3:return t.flags|=65536,a=u&-u,t.lanes|=a,a=As(t.stateNode,l,a),wd(t,a),!1;case 1:if(e=t.type,o=t.stateNode,(t.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(et===null||!et.has(o))))return t.flags|=65536,u&=-u,t.lanes|=u,u=zp(u),Ep(u,a,t,l),wd(t,u),!1}t=t.return}while(t!==null);return!1}var Ai=Error(S(461)),sa=!1;function Sa(a,e,t,l){e.child=a===null?Jc(e,null,t,l):wt(e,a.child,t,l)}function gr(a,e,t,l,u){t=t.render;var o=e.ref;if("ref"in l){var f={};for(var d in l)d!=="ref"&&(f[d]=l[d])}else f=l;return Bt(e),l=pi(a,e,t,f,o,u),d=mi(),a!==null&&!sa?(Li(a,e,u),Ue(a,e,u)):(z&&d&&oi(e),e.flags|=1,Sa(a,e,l,u),e.child)}function Sr(a,e,t,l,u){if(a===null){var o=t.type;return typeof o=="function"&&!ui(o)&&o.defaultProps===void 0&&t.compare===null?(e.tag=15,e.type=o,Hp(a,e,o,l,u)):(a=zo(t.type,null,l,e,e.mode,u),a.ref=e.ref,a.return=e,e.child=a)}if(o=a.child,!Mi(a,u)){var f=o.memoizedProps;if(t=t.compare,t=t!==null?t:gu,t(f,l)&&a.ref===e.ref)return Ue(a,e,u)}return e.flags|=1,a=Te(o,l),a.ref=e.ref,a.return=e,e.child=a}function Hp(a,e,t,l,u){if(a!==null){var o=a.memoizedProps;if(gu(o,l)&&a.ref===e.ref)if(sa=!1,e.pendingProps=l=o,Mi(a,u))(a.flags&131072)!==0&&(sa=!0);else return e.lanes=a.lanes,Ue(a,e,u)}return Ms(a,e,t,l,u)}function Fp(a,e,t,l){var u=l.children,o=a!==null?a.memoizedState:null;if(a===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((e.flags&128)!==0){if(o=o!==null?o.baseLanes|t:t,a!==null){for(l=e.child=a.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~o}else l=0,e.child=null;return Cr(a,e,o,t,l)}if((t&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},a!==null&&Eo(e,o!==null?o.cachePool:null),o!==null?sr(e,o):Ss(),ap(e);else return l=e.lanes=536870912,Cr(a,e,o!==null?o.baseLanes|t:t,t,l)}else o!==null?(Eo(e,o.cachePool),sr(e,o),Xe(e),e.memoizedState=null):(a!==null&&Eo(e,null),Ss(),Xe(e));return Sa(a,e,u,t),e.child}function au(a,e){return a!==null&&a.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Cr(a,e,t,l,u){var o=si();return o=o===null?null:{parent:da._currentValue,pool:o},e.memoizedState={baseLanes:t,cachePool:o},a!==null&&Eo(e,null),Ss(),ap(e),a!==null&&Ml(a,e,l,!0),e.childLanes=u,null}function No(a,e){return e=sf({mode:e.mode,children:e.children},a.mode),e.ref=a.ref,a.child=e,e.return=a,e}function Ir(a,e,t){return wt(e,a.child,null,t),a=No(e,e.pendingProps),a.flags|=2,za(e),e.memoizedState=null,a}function yh(a,e,t){var l=e.pendingProps,u=(e.flags&128)!==0;if(e.flags&=-129,a===null){if(z){if(l.mode==="hidden")return a=No(e,l),e.lanes=536870912,au(null,a);if(Cs(e),(a=K)?(a=km(a,$a),a=a!==null&&a.data==="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:ft!==null?{id:ie,overflow:ne}:null,retryLane:536870912,hydrationErrors:null},t=Xc(a),t.return=e,e.child=t,Ia=e,K=null)):a=null,a===null)throw dt(e);return e.lanes=536870912,null}return No(e,l)}var o=a.memoizedState;if(o!==null){var f=o.dehydrated;if(Cs(e),u)if(e.flags&256)e.flags&=-257,e=Ir(a,e,t);else if(e.memoizedState!==null)e.child=a.child,e.flags|=128,e=null;else throw Error(S(558));else if(sa||Ml(a,e,t,!1),u=(t&a.childLanes)!==0,sa||u){if(l=V,l!==null&&(f=xc(l,t),f!==0&&f!==o.retryLane))throw o.retryLane=f,zt(a,f),Ra(l,a,f),Ai;pf(),e=Ir(a,e,t)}else a=o.treeContext,K=ee(f.nextSibling),Ia=e,z=!0,We=null,$a=!1,a!==null&&Zc(e,a),e=No(e,l),e.flags|=4096;return e}return a=Te(a.child,{mode:l.mode,children:l.children}),a.ref=e.ref,e.child=a,a.return=e,a}function Go(a,e){var t=e.ref;if(t===null)a!==null&&a.ref!==null&&(e.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(S(284));(a===null||a.ref!==t)&&(e.flags|=4194816)}}function Ms(a,e,t,l,u){return Bt(e),t=pi(a,e,t,l,void 0,u),l=mi(),a!==null&&!sa?(Li(a,e,u),Ue(a,e,u)):(z&&l&&oi(e),e.flags|=1,Sa(a,e,t,u),e.child)}function yr(a,e,t,l,u,o){return Bt(e),e.updateQueue=null,t=tp(e,l,t,u),ep(a),l=mi(),a!==null&&!sa?(Li(a,e,o),Ue(a,e,o)):(z&&l&&oi(e),e.flags|=1,Sa(a,e,t,o),e.child)}function vr(a,e,t,l,u){if(Bt(e),e.stateNode===null){var o=tl,f=t.contextType;typeof f=="object"&&f!==null&&(o=ya(f)),o=new t(l,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=bs,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=l,o.state=e.memoizedState,o.refs={},ni(e),f=t.contextType,o.context=typeof f=="object"&&f!==null?ya(f):tl,o.state=e.memoizedState,f=t.getDerivedStateFromProps,typeof f=="function"&&(Rd(e,t,f,l),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(f=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),f!==o.state&&bs.enqueueReplaceState(o,o.state,null),su(e,l,o,u),du(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(a===null){o=e.stateNode;var d=e.memoizedProps,s=Rt(t,d);o.props=s;var r=o.context,L=t.contextType;f=tl,typeof L=="object"&&L!==null&&(f=ya(L));var x=t.getDerivedStateFromProps;L=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,L||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d||r!==f)&&xr(e,o,l,f),Ge=!1;var p=e.memoizedState;o.state=p,su(e,l,o,u),du(),r=e.memoizedState,d||p!==r||Ge?(typeof x=="function"&&(Rd(e,t,x,l),r=e.memoizedState),(s=Ge||Lr(e,t,s,l,p,r,f))?(L||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=r),o.props=l,o.state=r,o.context=f,l=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{o=e.stateNode,hs(a,e),f=e.memoizedProps,L=Rt(t,f),o.props=L,x=e.pendingProps,p=o.context,r=t.contextType,s=tl,typeof r=="object"&&r!==null&&(s=ya(r)),d=t.getDerivedStateFromProps,(r=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(f!==x||p!==s)&&xr(e,o,l,s),Ge=!1,p=e.memoizedState,o.state=p,su(e,l,o,u),du();var m=e.memoizedState;f!==x||p!==m||Ge||a!==null&&a.dependencies!==null&&ef(a.dependencies)?(typeof d=="function"&&(Rd(e,t,d,l),m=e.memoizedState),(L=Ge||Lr(e,t,L,l,p,m,s)||a!==null&&a.dependencies!==null&&ef(a.dependencies))?(r||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(l,m,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(l,m,s)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||f===a.memoizedProps&&p===a.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===a.memoizedProps&&p===a.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=m),o.props=l,o.state=m,o.context=s,l=L):(typeof o.componentDidUpdate!="function"||f===a.memoizedProps&&p===a.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||f===a.memoizedProps&&p===a.memoizedState||(e.flags|=1024),l=!1)}return o=l,Go(a,e),l=(e.flags&128)!==0,o||l?(o=e.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,a!==null&&l?(e.child=wt(e,a.child,null,u),e.child=wt(e,null,t,u)):Sa(a,e,t,u),e.memoizedState=o.state,a=e.child):a=Ue(a,e,u),a}function br(a,e,t,l){return Tt(),e.flags|=256,Sa(a,e,t,l),e.child}var Od={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ud(a){return{baseLanes:a,cachePool:Qc()}}function qd(a,e,t){return a=a!==null?a.childLanes&~t:0,e&&(a|=Ha),a}function Np(a,e,t){var l=e.pendingProps,u=!1,o=(e.flags&128)!==0,f;if((f=o)||(f=a!==null&&a.memoizedState===null?!1:(la.current&2)!==0),f&&(u=!0,e.flags&=-129),f=(e.flags&32)!==0,e.flags&=-33,a===null){if(z){if(u?Pe(e):Xe(e),(a=K)?(a=km(a,$a),a=a!==null&&a.data!=="&"?a:null,a!==null&&(e.memoizedState={dehydrated:a,treeContext:ft!==null?{id:ie,overflow:ne}:null,retryLane:536870912,hydrationErrors:null},t=Xc(a),t.return=e,e.child=t,Ia=e,K=null)):a=null,a===null)throw dt(e);return Ns(a)?e.lanes=32:e.lanes=536870912,null}var d=l.children;return l=l.fallback,u?(Xe(e),u=e.mode,d=sf({mode:"hidden",children:d},u),l=bt(l,u,t,null),d.return=e,l.return=e,d.sibling=l,e.child=d,l=e.child,l.memoizedState=Ud(t),l.childLanes=qd(a,f,t),e.memoizedState=Od,au(null,l)):(Pe(e),Ds(e,d))}var s=a.memoizedState;if(s!==null&&(d=s.dehydrated,d!==null)){if(o)e.flags&256?(Pe(e),e.flags&=-257,e=zd(a,e,t)):e.memoizedState!==null?(Xe(e),e.child=a.child,e.flags|=128,e=null):(Xe(e),d=l.fallback,u=e.mode,l=sf({mode:"visible",children:l.children},u),d=bt(d,u,t,null),d.flags|=2,l.return=e,d.return=e,l.sibling=d,e.child=l,wt(e,a.child,null,t),l=e.child,l.memoizedState=Ud(t),l.childLanes=qd(a,f,t),e.memoizedState=Od,e=au(null,l));else if(Pe(e),Ns(d)){if(f=d.nextSibling&&d.nextSibling.dataset,f)var r=f.dgst;f=r,l=Error(S(419)),l.stack="",l.digest=f,Cu({value:l,source:null,stack:null}),e=zd(a,e,t)}else if(sa||Ml(a,e,t,!1),f=(t&a.childLanes)!==0,sa||f){if(f=V,f!==null&&(l=xc(f,t),l!==0&&l!==s.retryLane))throw s.retryLane=l,zt(a,l),Ra(f,a,l),Ai;Fs(d)||pf(),e=zd(a,e,t)}else Fs(d)?(e.flags|=192,e.child=a.child,e=null):(a=s.treeContext,K=ee(d.nextSibling),Ia=e,z=!0,We=null,$a=!1,a!==null&&Zc(e,a),e=Ds(e,l.children),e.flags|=4096);return e}return u?(Xe(e),d=l.fallback,u=e.mode,s=a.child,r=s.sibling,l=Te(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,r!==null?d=Te(r,d):(d=bt(d,u,t,null),d.flags|=2),d.return=e,l.return=e,l.sibling=d,e.child=l,au(null,l),l=e.child,d=a.child.memoizedState,d===null?d=Ud(t):(u=d.cachePool,u!==null?(s=da._currentValue,u=u.parent!==s?{parent:s,pool:s}:u):u=Qc(),d={baseLanes:d.baseLanes|t,cachePool:u}),l.memoizedState=d,l.childLanes=qd(a,f,t),e.memoizedState=Od,au(a.child,l)):(Pe(e),t=a.child,a=t.sibling,t=Te(t,{mode:"visible",children:l.children}),t.return=e,t.sibling=null,a!==null&&(f=e.deletions,f===null?(e.deletions=[a],e.flags|=16):f.push(a)),e.child=t,e.memoizedState=null,t)}function Ds(a,e){return e=sf({mode:"visible",children:e},a.mode),e.return=a,a.child=e}function sf(a,e){return a=Ea(22,a,null,e),a.lanes=0,a}function zd(a,e,t){return wt(e,a.child,null,t),a=Ds(e,e.pendingProps.children),a.flags|=2,e.memoizedState=null,a}function Ar(a,e,t){a.lanes|=e;var l=a.alternate;l!==null&&(l.lanes|=e),ms(a.return,e,t)}function Ed(a,e,t,l,u,o){var f=a.memoizedState;f===null?a.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:u,treeForkCount:o}:(f.isBackwards=e,f.rendering=null,f.renderingStartTime=0,f.last=l,f.tail=t,f.tailMode=u,f.treeForkCount=o)}function Gp(a,e,t){var l=e.pendingProps,u=l.revealOrder,o=l.tail;l=l.children;var f=la.current,d=(f&2)!==0;if(d?(f=f&1|2,e.flags|=128):f&=1,Z(la,f),Sa(a,e,l,t),l=z?Su:0,!d&&a!==null&&(a.flags&128)!==0)a:for(a=e.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Ar(a,t,e);else if(a.tag===19)Ar(a,t,e);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break a;for(;a.sibling===null;){if(a.return===null||a.return===e)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(u){case"forwards":for(t=e.child,u=null;t!==null;)a=t.alternate,a!==null&&uf(a)===null&&(u=t),t=t.sibling;t=u,t===null?(u=e.child,e.child=null):(u=t.sibling,t.sibling=null),Ed(e,!1,u,t,o,l);break;case"backwards":case"unstable_legacy-backwards":for(t=null,u=e.child,e.child=null;u!==null;){if(a=u.alternate,a!==null&&uf(a)===null){e.child=u;break}a=u.sibling,u.sibling=t,t=u,u=a}Ed(e,!0,t,null,o,l);break;case"together":Ed(e,!1,null,null,void 0,l);break;default:e.memoizedState=null}return e.child}function Ue(a,e,t){if(a!==null&&(e.dependencies=a.dependencies),it|=e.lanes,(t&e.childLanes)===0)if(a!==null){if(Ml(a,e,t,!1),(t&e.childLanes)===0)return null}else return null;if(a!==null&&e.child!==a.child)throw Error(S(153));if(e.child!==null){for(a=e.child,t=Te(a,a.pendingProps),e.child=t,t.return=e;a.sibling!==null;)a=a.sibling,t=t.sibling=Te(a,a.pendingProps),t.return=e;t.sibling=null}return e.child}function Mi(a,e){return(a.lanes&e)!==0?!0:(a=a.dependencies,!!(a!==null&&ef(a)))}function vh(a,e,t){switch(e.tag){case 3:Qo(e,e.stateNode.containerInfo),_e(e,da,a.memoizedState.cache),Tt();break;case 27:case 5:es(e);break;case 4:Qo(e,e.stateNode.containerInfo);break;case 10:_e(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Cs(e),null;break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(Pe(e),e.flags|=128,null):(t&e.child.childLanes)!==0?Np(a,e,t):(Pe(e),a=Ue(a,e,t),a!==null?a.sibling:null);Pe(e);break;case 19:var u=(a.flags&128)!==0;if(l=(t&e.childLanes)!==0,l||(Ml(a,e,t,!1),l=(t&e.childLanes)!==0),u){if(l)return Gp(a,e,t);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Z(la,la.current),l)break;return null;case 22:return e.lanes=0,Fp(a,e,t,e.pendingProps);case 24:_e(e,da,a.memoizedState.cache)}return Ue(a,e,t)}function _p(a,e,t){if(a!==null)if(a.memoizedProps!==e.pendingProps)sa=!0;else{if(!Mi(a,t)&&(e.flags&128)===0)return sa=!1,vh(a,e,t);sa=(a.flags&131072)!==0}else sa=!1,z&&(e.flags&1048576)!==0&&Vc(e,Su,e.index);switch(e.lanes=0,e.tag){case 16:a:{var l=e.pendingProps;if(a=It(e.elementType),e.type=a,typeof a=="function")ui(a)?(l=Rt(a,l),e.tag=1,e=vr(null,e,a,l,t)):(e.tag=0,e=Ms(null,e,a,l,t));else{if(a!=null){var u=a.$$typeof;if(u===Xs){e.tag=11,e=gr(null,e,a,l,t);break a}else if(u===Vs){e.tag=14,e=Sr(null,e,a,l,t);break a}}throw e=$d(a)||a,Error(S(306,e,""))}}return e;case 0:return Ms(a,e,e.type,e.pendingProps,t);case 1:return l=e.type,u=Rt(l,e.pendingProps),vr(a,e,l,u,t);case 3:a:{if(Qo(e,e.stateNode.containerInfo),a===null)throw Error(S(387));l=e.pendingProps;var o=e.memoizedState;u=o.element,hs(a,e),su(e,l,null,t);var f=e.memoizedState;if(l=f.cache,_e(e,da,l),l!==o.cache&&Ls(e,[da],t,!0),du(),l=f.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:f.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=br(a,e,l,t);break a}else if(l!==u){u=Wa(Error(S(424)),e),Cu(u),e=br(a,e,l,t);break a}else for(a=e.stateNode.containerInfo,a.nodeType===9?a=a.body:a=a.nodeName==="HTML"?a.ownerDocument.body:a,K=ee(a.firstChild),Ia=e,z=!0,We=null,$a=!0,t=Jc(e,null,l,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Tt(),l===u){e=Ue(a,e,t);break a}Sa(a,e,l,t)}e=e.child}return e;case 26:return Go(a,e),a===null?(t=Yr(e.type,null,e.pendingProps,null))?e.memoizedState=t:z||(t=e.type,a=e.pendingProps,l=hf(Je.current).createElement(t),l[Ca]=e,l[Oa]=a,va(l,t,a),La(l),e.stateNode=l):e.memoizedState=Yr(e.type,a.memoizedProps,e.pendingProps,a.memoizedState),null;case 27:return es(e),a===null&&z&&(l=e.stateNode=Rm(e.type,e.pendingProps,Je.current),Ia=e,$a=!0,u=K,rt(e.type)?(Gs=u,K=ee(l.firstChild)):K=u),Sa(a,e,e.pendingProps.children,t),Go(a,e),a===null&&(e.flags|=4194304),e.child;case 5:return a===null&&z&&((u=l=K)&&(l=Jh(l,e.type,e.pendingProps,$a),l!==null?(e.stateNode=l,Ia=e,K=ee(l.firstChild),$a=!1,u=!0):u=!1),u||dt(e)),es(e),u=e.type,o=e.pendingProps,f=a!==null?a.memoizedProps:null,l=o.children,Es(u,o)?l=null:f!==null&&Es(u,f)&&(e.flags|=32),e.memoizedState!==null&&(u=pi(a,e,mh,null,null,t),Mu._currentValue=u),Go(a,e),Sa(a,e,l,t),e.child;case 6:return a===null&&z&&((a=t=K)&&(t=Wh(t,e.pendingProps,$a),t!==null?(e.stateNode=t,Ia=e,K=null,a=!0):a=!1),a||dt(e)),null;case 13:return Np(a,e,t);case 4:return Qo(e,e.stateNode.containerInfo),l=e.pendingProps,a===null?e.child=wt(e,null,l,t):Sa(a,e,l,t),e.child;case 11:return gr(a,e,e.type,e.pendingProps,t);case 7:return Sa(a,e,e.pendingProps,t),e.child;case 8:return Sa(a,e,e.pendingProps.children,t),e.child;case 12:return Sa(a,e,e.pendingProps.children,t),e.child;case 10:return l=e.pendingProps,_e(e,e.type,l.value),Sa(a,e,l.children,t),e.child;case 9:return u=e.type._context,l=e.pendingProps.children,Bt(e),u=ya(u),l=l(u),e.flags|=1,Sa(a,e,l,t),e.child;case 14:return Sr(a,e,e.type,e.pendingProps,t);case 15:return Hp(a,e,e.type,e.pendingProps,t);case 19:return Gp(a,e,t);case 31:return yh(a,e,t);case 22:return Fp(a,e,t,e.pendingProps);case 24:return Bt(e),l=ya(da),a===null?(u=si(),u===null&&(u=V,o=di(),u.pooledCache=o,o.refCount++,o!==null&&(u.pooledCacheLanes|=t),u=o),e.memoizedState={parent:l,cache:u},ni(e),_e(e,da,u)):((a.lanes&t)!==0&&(hs(a,e),su(e,null,null,t),du()),u=a.memoizedState,o=e.memoizedState,u.parent!==l?(u={parent:l,cache:l},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),_e(e,da,l)):(l=o.cache,_e(e,da,l),l!==u.cache&&Ls(e,[da],t,!0))),Sa(a,e,e.pendingProps.children,t),e.child;case 29:throw e.pendingProps}throw Error(S(156,e.tag))}function Se(a){a.flags|=4}function Hd(a,e,t,l,u){if((e=(a.mode&32)!==0)&&(e=!1),e){if(a.flags|=16777216,(u&335544128)===u)if(a.stateNode.complete)a.flags|=8192;else if(cm())a.flags|=8192;else throw Mt=tf,ii}else a.flags&=-16777217}function Mr(a,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!qm(e))if(cm())a.flags|=8192;else throw Mt=tf,ii}function Ao(a,e){e!==null&&(a.flags|=4),a.flags&16384&&(e=a.tag!==22?pc():536870912,a.lanes|=e,Sl|=e)}function Yl(a,e){if(!z)switch(a.tailMode){case"hidden":e=a.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?a.tail=null:t.sibling=null;break;case"collapsed":t=a.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?e||a.tail===null?a.tail=null:a.tail.sibling=null:l.sibling=null}}function j(a){var e=a.alternate!==null&&a.alternate.child===a.child,t=0,l=0;if(e)for(var u=a.child;u!==null;)t|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=a,u=u.sibling;else for(u=a.child;u!==null;)t|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=a,u=u.sibling;return a.subtreeFlags|=l,a.childLanes=t,e}function bh(a,e,t){var l=e.pendingProps;switch(fi(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return j(e),null;case 1:return j(e),null;case 3:return t=e.stateNode,l=null,a!==null&&(l=a.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Be(da),pl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(a===null||a.child===null)&&(Xt(e)?Se(e):a===null||a.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Bd())),j(e),null;case 26:var u=e.type,o=e.memoizedState;return a===null?(Se(e),o!==null?(j(e),Mr(e,o)):(j(e),Hd(e,u,null,l,t))):o?o!==a.memoizedState?(Se(e),j(e),Mr(e,o)):(j(e),e.flags&=-16777217):(a=a.memoizedProps,a!==l&&Se(e),j(e),Hd(e,u,a,l,t)),null;case 27:if(jo(e),t=Je.current,u=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==l&&Se(e);else{if(!l){if(e.stateNode===null)throw Error(S(166));return j(e),null}a=ce.current,Xt(e)?er(e,a):(a=Rm(u,l,t),e.stateNode=a,Se(e))}return j(e),null;case 5:if(jo(e),u=e.type,a!==null&&e.stateNode!=null)a.memoizedProps!==l&&Se(e);else{if(!l){if(e.stateNode===null)throw Error(S(166));return j(e),null}if(o=ce.current,Xt(e))er(e,o);else{var f=hf(Je.current);switch(o){case 1:o=f.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:o=f.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":o=f.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":o=f.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":o=f.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof l.is=="string"?f.createElement("select",{is:l.is}):f.createElement("select"),l.multiple?o.multiple=!0:l.size&&(o.size=l.size);break;default:o=typeof l.is=="string"?f.createElement(u,{is:l.is}):f.createElement(u)}}o[Ca]=e,o[Oa]=l;a:for(f=e.child;f!==null;){if(f.tag===5||f.tag===6)o.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;f=f.return}f.sibling.return=f.return,f=f.sibling}e.stateNode=o;a:switch(va(o,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break a;case"img":l=!0;break a;default:l=!1}l&&Se(e)}}return j(e),Hd(e,e.type,a===null?null:a.memoizedProps,e.pendingProps,t),null;case 6:if(a&&e.stateNode!=null)a.memoizedProps!==l&&Se(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(S(166));if(a=Je.current,Xt(e)){if(a=e.stateNode,t=e.memoizedProps,l=null,u=Ia,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}a[Ca]=e,a=!!(a.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||Tm(a.nodeValue,t)),a||dt(e,!0)}else a=hf(a).createTextNode(l),a[Ca]=e,e.stateNode=a}return j(e),null;case 31:if(t=e.memoizedState,a===null||a.memoizedState!==null){if(l=Xt(e),t!==null){if(a===null){if(!l)throw Error(S(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(S(557));a[Ca]=e}else Tt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;j(e),a=!1}else t=Bd(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=t),a=!0;if(!a)return e.flags&256?(za(e),e):(za(e),null);if((e.flags&128)!==0)throw Error(S(558))}return j(e),null;case 13:if(l=e.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(u=Xt(e),l!==null&&l.dehydrated!==null){if(a===null){if(!u)throw Error(S(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(S(317));u[Ca]=e}else Tt(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;j(e),u=!1}else u=Bd(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(za(e),e):(za(e),null)}return za(e),(e.flags&128)!==0?(e.lanes=t,e):(t=l!==null,a=a!==null&&a.memoizedState!==null,t&&(l=e.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),o=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(o=l.memoizedState.cachePool.pool),o!==u&&(l.flags|=2048)),t!==a&&t&&(e.child.flags|=8192),Ao(e,e.updateQueue),j(e),null);case 4:return pl(),a===null&&Oi(e.stateNode.containerInfo),j(e),null;case 10:return Be(e.type),j(e),null;case 19:if(xa(la),l=e.memoizedState,l===null)return j(e),null;if(u=(e.flags&128)!==0,o=l.rendering,o===null)if(u)Yl(l,!1);else{if(ta!==0||a!==null&&(a.flags&128)!==0)for(a=e.child;a!==null;){if(o=uf(a),o!==null){for(e.flags|=128,Yl(l,!1),a=o.updateQueue,e.updateQueue=a,Ao(e,a),e.subtreeFlags=0,a=t,t=e.child;t!==null;)Pc(t,a),t=t.sibling;return Z(la,la.current&1|2),z&&ve(e,l.treeForkCount),e.child}a=a.sibling}l.tail!==null&&Fa()>rf&&(e.flags|=128,u=!0,Yl(l,!1),e.lanes=4194304)}else{if(!u)if(a=uf(o),a!==null){if(e.flags|=128,u=!0,a=a.updateQueue,e.updateQueue=a,Ao(e,a),Yl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!z)return j(e),null}else 2*Fa()-l.renderingStartTime>rf&&t!==536870912&&(e.flags|=128,u=!0,Yl(l,!1),e.lanes=4194304);l.isBackwards?(o.sibling=e.child,e.child=o):(a=l.last,a!==null?a.sibling=o:e.child=o,l.last=o)}return l.tail!==null?(a=l.tail,l.rendering=a,l.tail=a.sibling,l.renderingStartTime=Fa(),a.sibling=null,t=la.current,Z(la,u?t&1|2:t&1),z&&ve(e,l.treeForkCount),a):(j(e),null);case 22:case 23:return za(e),ri(),l=e.memoizedState!==null,a!==null?a.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(t&536870912)!==0&&(e.flags&128)===0&&(j(e),e.subtreeFlags&6&&(e.flags|=8192)):j(e),t=e.updateQueue,t!==null&&Ao(e,t.retryQueue),t=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==t&&(e.flags|=2048),a!==null&&xa(At),null;case 24:return t=null,a!==null&&(t=a.memoizedState.cache),e.memoizedState.cache!==t&&(e.flags|=2048),Be(da),j(e),null;case 25:return null;case 30:return null}throw Error(S(156,e.tag))}function Ah(a,e){switch(fi(e),e.tag){case 1:return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 3:return Be(da),pl(),a=e.flags,(a&65536)!==0&&(a&128)===0?(e.flags=a&-65537|128,e):null;case 26:case 27:case 5:return jo(e),null;case 31:if(e.memoizedState!==null){if(za(e),e.alternate===null)throw Error(S(340));Tt()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 13:if(za(e),a=e.memoizedState,a!==null&&a.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Tt()}return a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 19:return xa(la),null;case 4:return pl(),null;case 10:return Be(e.type),null;case 22:case 23:return za(e),ri(),a!==null&&xa(At),a=e.flags,a&65536?(e.flags=a&-65537|128,e):null;case 24:return Be(da),null;case 25:return null;default:return null}}function Pp(a,e){switch(fi(e),e.tag){case 3:Be(da),pl();break;case 26:case 27:case 5:jo(e);break;case 4:pl();break;case 31:e.memoizedState!==null&&za(e);break;case 13:za(e);break;case 19:xa(la);break;case 10:Be(e.type);break;case 22:case 23:za(e),ri(),a!==null&&xa(At);break;case 24:Be(da)}}function Eu(a,e){try{var t=e.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var u=l.next;t=u;do{if((t.tag&a)===a){l=void 0;var o=t.create,f=t.inst;l=o(),f.destroy=l}t=t.next}while(t!==u)}}catch(d){G(e,e.return,d)}}function st(a,e,t){try{var l=e.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var o=u.next;l=o;do{if((l.tag&a)===a){var f=l.inst,d=f.destroy;if(d!==void 0){f.destroy=void 0,u=e;var s=t,r=d;try{r()}catch(L){G(u,s,L)}}}l=l.next}while(l!==o)}}catch(L){G(e,e.return,L)}}function Xp(a){var e=a.updateQueue;if(e!==null){var t=a.stateNode;try{$c(e,t)}catch(l){G(a,a.return,l)}}}function Vp(a,e,t){t.props=Rt(a.type,a.memoizedProps),t.state=a.memoizedState;try{t.componentWillUnmount()}catch(l){G(a,e,l)}}function nu(a,e){try{var t=a.ref;if(t!==null){switch(a.tag){case 26:case 27:case 5:var l=a.stateNode;break;case 30:l=a.stateNode;break;default:l=a.stateNode}typeof t=="function"?a.refCleanup=t(l):t.current=l}}catch(u){G(a,e,u)}}function re(a,e){var t=a.ref,l=a.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(u){G(a,e,u)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(u){G(a,e,u)}else t.current=null}function Zp(a){var e=a.type,t=a.memoizedProps,l=a.stateNode;try{a:switch(e){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break a;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(u){G(a,a.return,u)}}function Fd(a,e,t){try{var l=a.stateNode;Vh(l,a.type,t,e),l[Oa]=e}catch(u){G(a,a.return,u)}}function Yp(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&rt(a.type)||a.tag===4}function Nd(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Yp(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&rt(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Ts(a,e,t){var l=a.tag;if(l===5||l===6)a=a.stateNode,e?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(a,e):(e=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.appendChild(a),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Me));else if(l!==4&&(l===27&&rt(a.type)&&(t=a.stateNode,e=null),a=a.child,a!==null))for(Ts(a,e,t),a=a.sibling;a!==null;)Ts(a,e,t),a=a.sibling}function nf(a,e,t){var l=a.tag;if(l===5||l===6)a=a.stateNode,e?t.insertBefore(a,e):t.appendChild(a);else if(l!==4&&(l===27&&rt(a.type)&&(t=a.stateNode),a=a.child,a!==null))for(nf(a,e,t),a=a.sibling;a!==null;)nf(a,e,t),a=a.sibling}function Qp(a){var e=a.stateNode,t=a.memoizedProps;try{for(var l=a.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);va(e,l,t),e[Ca]=a,e[Oa]=t}catch(o){G(a,a.return,o)}}var be=!1,fa=!1,Gd=!1,Dr=typeof WeakSet=="function"?WeakSet:Set,ma=null;function Mh(a,e){if(a=a.containerInfo,qs=If,a=qc(a),ei(a)){if("selectionStart"in a)var t={start:a.selectionStart,end:a.selectionEnd};else a:{t=(t=a.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var u=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{t.nodeType,o.nodeType}catch{t=null;break a}var f=0,d=-1,s=-1,r=0,L=0,x=a,p=null;e:for(;;){for(var m;x!==t||u!==0&&x.nodeType!==3||(d=f+u),x!==o||l!==0&&x.nodeType!==3||(s=f+l),x.nodeType===3&&(f+=x.nodeValue.length),(m=x.firstChild)!==null;)p=x,x=m;for(;;){if(x===a)break e;if(p===t&&++r===u&&(d=f),p===o&&++L===l&&(s=f),(m=x.nextSibling)!==null)break;x=p,p=x.parentNode}x=m}t=d===-1||s===-1?null:{start:d,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(zs={focusedElem:a,selectionRange:t},If=!1,ma=e;ma!==null;)if(e=ma,a=e.child,(e.subtreeFlags&1028)!==0&&a!==null)a.return=e,ma=a;else for(;ma!==null;){switch(e=ma,o=e.alternate,a=e.flags,e.tag){case 0:if((a&4)!==0&&(a=e.updateQueue,a=a!==null?a.events:null,a!==null))for(t=0;t<a.length;t++)u=a[t],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((a&1024)!==0&&o!==null){a=void 0,t=e,u=o.memoizedProps,o=o.memoizedState,l=t.stateNode;try{var I=Rt(t.type,u);a=l.getSnapshotBeforeUpdate(I,o),l.__reactInternalSnapshotBeforeUpdate=a}catch(b){G(t,t.return,b)}}break;case 3:if((a&1024)!==0){if(a=e.stateNode.containerInfo,t=a.nodeType,t===9)Hs(a);else if(t===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Hs(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(S(163))}if(a=e.sibling,a!==null){a.return=e.return,ma=a;break}ma=e.return}}function jp(a,e,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:Ie(a,t),l&4&&Eu(5,t);break;case 1:if(Ie(a,t),l&4)if(a=t.stateNode,e===null)try{a.componentDidMount()}catch(f){G(t,t.return,f)}else{var u=Rt(t.type,e.memoizedProps);e=e.memoizedState;try{a.componentDidUpdate(u,e,a.__reactInternalSnapshotBeforeUpdate)}catch(f){G(t,t.return,f)}}l&64&&Xp(t),l&512&&nu(t,t.return);break;case 3:if(Ie(a,t),l&64&&(a=t.updateQueue,a!==null)){if(e=null,t.child!==null)switch(t.child.tag){case 27:case 5:e=t.child.stateNode;break;case 1:e=t.child.stateNode}try{$c(a,e)}catch(f){G(t,t.return,f)}}break;case 27:e===null&&l&4&&Qp(t);case 26:case 5:Ie(a,t),e===null&&l&4&&Zp(t),l&512&&nu(t,t.return);break;case 12:Ie(a,t);break;case 31:Ie(a,t),l&4&&Wp(a,t);break;case 13:Ie(a,t),l&4&&$p(a,t),l&64&&(a=t.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(t=qh.bind(null,t),$h(a,t))));break;case 22:if(l=t.memoizedState!==null||be,!l){e=e!==null&&e.memoizedState!==null||fa,u=be;var o=fa;be=l,(fa=e)&&!o?ye(a,t,(t.subtreeFlags&8772)!==0):Ie(a,t),be=u,fa=o}break;case 30:break;default:Ie(a,t)}}function Kp(a){var e=a.alternate;e!==null&&(a.alternate=null,Kp(e)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(e=a.stateNode,e!==null&&js(e)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var $=null,wa=!1;function Ce(a,e,t){for(t=t.child;t!==null;)Jp(a,e,t),t=t.sibling}function Jp(a,e,t){if(Na&&typeof Na.onCommitFiberUnmount=="function")try{Na.onCommitFiberUnmount(wu,t)}catch{}switch(t.tag){case 26:fa||re(t,e),Ce(a,e,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:fa||re(t,e);var l=$,u=wa;rt(t.type)&&($=t.stateNode,wa=!1),Ce(a,e,t),mu(t.stateNode),$=l,wa=u;break;case 5:fa||re(t,e);case 6:if(l=$,u=wa,$=null,Ce(a,e,t),$=l,wa=u,$!==null)if(wa)try{($.nodeType===9?$.body:$.nodeName==="HTML"?$.ownerDocument.body:$).removeChild(t.stateNode)}catch(o){G(t,e,o)}else try{$.removeChild(t.stateNode)}catch(o){G(t,e,o)}break;case 18:$!==null&&(wa?(a=$,_r(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.stateNode),vl(a)):_r($,t.stateNode));break;case 4:l=$,u=wa,$=t.stateNode.containerInfo,wa=!0,Ce(a,e,t),$=l,wa=u;break;case 0:case 11:case 14:case 15:st(2,t,e),fa||st(4,t,e),Ce(a,e,t);break;case 1:fa||(re(t,e),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Vp(t,e,l)),Ce(a,e,t);break;case 21:Ce(a,e,t);break;case 22:fa=(l=fa)||t.memoizedState!==null,Ce(a,e,t),fa=l;break;default:Ce(a,e,t)}}function Wp(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{vl(a)}catch(t){G(e,e.return,t)}}}function $p(a,e){if(e.memoizedState===null&&(a=e.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{vl(a)}catch(t){G(e,e.return,t)}}function Dh(a){switch(a.tag){case 31:case 13:case 19:var e=a.stateNode;return e===null&&(e=a.stateNode=new Dr),e;case 22:return a=a.stateNode,e=a._retryCache,e===null&&(e=a._retryCache=new Dr),e;default:throw Error(S(435,a.tag))}}function Mo(a,e){var t=Dh(a);e.forEach(function(l){if(!t.has(l)){t.add(l);var u=zh.bind(null,a,l);l.then(u,u)}})}function Ta(a,e){var t=e.deletions;if(t!==null)for(var l=0;l<t.length;l++){var u=t[l],o=a,f=e,d=f;a:for(;d!==null;){switch(d.tag){case 27:if(rt(d.type)){$=d.stateNode,wa=!1;break a}break;case 5:$=d.stateNode,wa=!1;break a;case 3:case 4:$=d.stateNode.containerInfo,wa=!0;break a}d=d.return}if($===null)throw Error(S(160));Jp(o,f,u),$=null,wa=!1,o=u.alternate,o!==null&&(o.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)am(e,a),e=e.sibling}var ue=null;function am(a,e){var t=a.alternate,l=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Ta(e,a),Ba(a),l&4&&(st(3,a,a.return),Eu(3,a),st(5,a,a.return));break;case 1:Ta(e,a),Ba(a),l&512&&(fa||t===null||re(t,t.return)),l&64&&be&&(a=a.updateQueue,a!==null&&(l=a.callbacks,l!==null&&(t=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var u=ue;if(Ta(e,a),Ba(a),l&512&&(fa||t===null||re(t,t.return)),l&4){var o=t!==null?t.memoizedState:null;if(l=a.memoizedState,t===null)if(l===null)if(a.stateNode===null){a:{l=a.type,t=a.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Ou]||o[Ca]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(l),u.head.insertBefore(o,u.querySelector("head > title"))),va(o,l,t),o[Ca]=a,La(o),l=o;break a;case"link":var f=jr("link","href",u).get(l+(t.href||""));if(f){for(var d=0;d<f.length;d++)if(o=f[d],o.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&o.getAttribute("rel")===(t.rel==null?null:t.rel)&&o.getAttribute("title")===(t.title==null?null:t.title)&&o.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){f.splice(d,1);break e}}o=u.createElement(l),va(o,l,t),u.head.appendChild(o);break;case"meta":if(f=jr("meta","content",u).get(l+(t.content||""))){for(d=0;d<f.length;d++)if(o=f[d],o.getAttribute("content")===(t.content==null?null:""+t.content)&&o.getAttribute("name")===(t.name==null?null:t.name)&&o.getAttribute("property")===(t.property==null?null:t.property)&&o.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&o.getAttribute("charset")===(t.charSet==null?null:t.charSet)){f.splice(d,1);break e}}o=u.createElement(l),va(o,l,t),u.head.appendChild(o);break;default:throw Error(S(468,l))}o[Ca]=a,La(o),l=o}a.stateNode=l}else Kr(u,a.type,a.stateNode);else a.stateNode=Qr(u,l,a.memoizedProps);else o!==l?(o===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):o.count--,l===null?Kr(u,a.type,a.stateNode):Qr(u,l,a.memoizedProps)):l===null&&a.stateNode!==null&&Fd(a,a.memoizedProps,t.memoizedProps)}break;case 27:Ta(e,a),Ba(a),l&512&&(fa||t===null||re(t,t.return)),t!==null&&l&4&&Fd(a,a.memoizedProps,t.memoizedProps);break;case 5:if(Ta(e,a),Ba(a),l&512&&(fa||t===null||re(t,t.return)),a.flags&32){u=a.stateNode;try{Ll(u,"")}catch(I){G(a,a.return,I)}}l&4&&a.stateNode!=null&&(u=a.memoizedProps,Fd(a,u,t!==null?t.memoizedProps:u)),l&1024&&(Gd=!0);break;case 6:if(Ta(e,a),Ba(a),l&4){if(a.stateNode===null)throw Error(S(162));l=a.memoizedProps,t=a.stateNode;try{t.nodeValue=l}catch(I){G(a,a.return,I)}}break;case 3:if(Xo=null,u=ue,ue=gf(e.containerInfo),Ta(e,a),ue=u,Ba(a),l&4&&t!==null&&t.memoizedState.isDehydrated)try{vl(e.containerInfo)}catch(I){G(a,a.return,I)}Gd&&(Gd=!1,em(a));break;case 4:l=ue,ue=gf(a.stateNode.containerInfo),Ta(e,a),Ba(a),ue=l;break;case 12:Ta(e,a),Ba(a);break;case 31:Ta(e,a),Ba(a),l&4&&(l=a.updateQueue,l!==null&&(a.updateQueue=null,Mo(a,l)));break;case 13:Ta(e,a),Ba(a),a.child.flags&8192&&a.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Uf=Fa()),l&4&&(l=a.updateQueue,l!==null&&(a.updateQueue=null,Mo(a,l)));break;case 22:u=a.memoizedState!==null;var s=t!==null&&t.memoizedState!==null,r=be,L=fa;if(be=r||u,fa=L||s,Ta(e,a),fa=L,be=r,Ba(a),l&8192)a:for(e=a.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(t===null||s||be||fa||yt(a)),t=null,e=a;;){if(e.tag===5||e.tag===26){if(t===null){s=t=e;try{if(o=s.stateNode,u)f=o.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{d=s.stateNode;var x=s.memoizedProps.style,p=x!=null&&x.hasOwnProperty("display")?x.display:null;d.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(I){G(s,s.return,I)}}}else if(e.tag===6){if(t===null){s=e;try{s.stateNode.nodeValue=u?"":s.memoizedProps}catch(I){G(s,s.return,I)}}}else if(e.tag===18){if(t===null){s=e;try{var m=s.stateNode;u?Pr(m,!0):Pr(s.stateNode,!1)}catch(I){G(s,s.return,I)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===a)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break a;for(;e.sibling===null;){if(e.return===null||e.return===a)break a;t===e&&(t=null),e=e.return}t===e&&(t=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=a.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,Mo(a,t))));break;case 19:Ta(e,a),Ba(a),l&4&&(l=a.updateQueue,l!==null&&(a.updateQueue=null,Mo(a,l)));break;case 30:break;case 21:break;default:Ta(e,a),Ba(a)}}function Ba(a){var e=a.flags;if(e&2){try{for(var t,l=a.return;l!==null;){if(Yp(l)){t=l;break}l=l.return}if(t==null)throw Error(S(160));switch(t.tag){case 27:var u=t.stateNode,o=Nd(a);nf(a,o,u);break;case 5:var f=t.stateNode;t.flags&32&&(Ll(f,""),t.flags&=-33);var d=Nd(a);nf(a,d,f);break;case 3:case 4:var s=t.stateNode.containerInfo,r=Nd(a);Ts(a,r,s);break;default:throw Error(S(161))}}catch(L){G(a,a.return,L)}a.flags&=-3}e&4096&&(a.flags&=-4097)}function em(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var e=a;em(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),a=a.sibling}}function Ie(a,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)jp(a,e.alternate,e),e=e.sibling}function yt(a){for(a=a.child;a!==null;){var e=a;switch(e.tag){case 0:case 11:case 14:case 15:st(4,e,e.return),yt(e);break;case 1:re(e,e.return);var t=e.stateNode;typeof t.componentWillUnmount=="function"&&Vp(e,e.return,t),yt(e);break;case 27:mu(e.stateNode);case 26:case 5:re(e,e.return),yt(e);break;case 22:e.memoizedState===null&&yt(e);break;case 30:yt(e);break;default:yt(e)}a=a.sibling}}function ye(a,e,t){for(t=t&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,u=a,o=e,f=o.flags;switch(o.tag){case 0:case 11:case 15:ye(u,o,t),Eu(4,o);break;case 1:if(ye(u,o,t),l=o,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(r){G(l,l.return,r)}if(l=o,u=l.updateQueue,u!==null){var d=l.stateNode;try{var s=u.shared.hiddenCallbacks;if(s!==null)for(u.shared.hiddenCallbacks=null,u=0;u<s.length;u++)Wc(s[u],d)}catch(r){G(l,l.return,r)}}t&&f&64&&Xp(o),nu(o,o.return);break;case 27:Qp(o);case 26:case 5:ye(u,o,t),t&&l===null&&f&4&&Zp(o),nu(o,o.return);break;case 12:ye(u,o,t);break;case 31:ye(u,o,t),t&&f&4&&Wp(u,o);break;case 13:ye(u,o,t),t&&f&4&&$p(u,o);break;case 22:o.memoizedState===null&&ye(u,o,t),nu(o,o.return);break;case 30:break;default:ye(u,o,t)}e=e.sibling}}function Di(a,e){var t=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(t=a.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==t&&(a!=null&&a.refCount++,t!=null&&qu(t))}function Ti(a,e){a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&qu(a))}function le(a,e,t,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)tm(a,e,t,l),e=e.sibling}function tm(a,e,t,l){var u=e.flags;switch(e.tag){case 0:case 11:case 15:le(a,e,t,l),u&2048&&Eu(9,e);break;case 1:le(a,e,t,l);break;case 3:le(a,e,t,l),u&2048&&(a=null,e.alternate!==null&&(a=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==a&&(e.refCount++,a!=null&&qu(a)));break;case 12:if(u&2048){le(a,e,t,l),a=e.stateNode;try{var o=e.memoizedProps,f=o.id,d=o.onPostCommit;typeof d=="function"&&d(f,e.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(s){G(e,e.return,s)}}else le(a,e,t,l);break;case 31:le(a,e,t,l);break;case 13:le(a,e,t,l);break;case 23:break;case 22:o=e.stateNode,f=e.alternate,e.memoizedState!==null?o._visibility&2?le(a,e,t,l):ru(a,e):o._visibility&2?le(a,e,t,l):(o._visibility|=2,Zt(a,e,t,l,(e.subtreeFlags&10256)!==0||!1)),u&2048&&Di(f,e);break;case 24:le(a,e,t,l),u&2048&&Ti(e.alternate,e);break;default:le(a,e,t,l)}}function Zt(a,e,t,l,u){for(u=u&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var o=a,f=e,d=t,s=l,r=f.flags;switch(f.tag){case 0:case 11:case 15:Zt(o,f,d,s,u),Eu(8,f);break;case 23:break;case 22:var L=f.stateNode;f.memoizedState!==null?L._visibility&2?Zt(o,f,d,s,u):ru(o,f):(L._visibility|=2,Zt(o,f,d,s,u)),u&&r&2048&&Di(f.alternate,f);break;case 24:Zt(o,f,d,s,u),u&&r&2048&&Ti(f.alternate,f);break;default:Zt(o,f,d,s,u)}e=e.sibling}}function ru(a,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var t=a,l=e,u=l.flags;switch(l.tag){case 22:ru(t,l),u&2048&&Di(l.alternate,l);break;case 24:ru(t,l),u&2048&&Ti(l.alternate,l);break;default:ru(t,l)}e=e.sibling}}var eu=8192;function Vt(a,e,t){if(a.subtreeFlags&eu)for(a=a.child;a!==null;)lm(a,e,t),a=a.sibling}function lm(a,e,t){switch(a.tag){case 26:Vt(a,e,t),a.flags&eu&&a.memoizedState!==null&&rg(t,ue,a.memoizedState,a.memoizedProps);break;case 5:Vt(a,e,t);break;case 3:case 4:var l=ue;ue=gf(a.stateNode.containerInfo),Vt(a,e,t),ue=l;break;case 22:a.memoizedState===null&&(l=a.alternate,l!==null&&l.memoizedState!==null?(l=eu,eu=16777216,Vt(a,e,t),eu=l):Vt(a,e,t));break;default:Vt(a,e,t)}}function um(a){var e=a.alternate;if(e!==null&&(a=e.child,a!==null)){e.child=null;do e=a.sibling,a.sibling=null,a=e;while(a!==null)}}function Ql(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];ma=l,fm(l,a)}um(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)om(a),a=a.sibling}function om(a){switch(a.tag){case 0:case 11:case 15:Ql(a),a.flags&2048&&st(9,a,a.return);break;case 3:Ql(a);break;case 12:Ql(a);break;case 22:var e=a.stateNode;a.memoizedState!==null&&e._visibility&2&&(a.return===null||a.return.tag!==13)?(e._visibility&=-3,_o(a)):Ql(a);break;default:Ql(a)}}function _o(a){var e=a.deletions;if((a.flags&16)!==0){if(e!==null)for(var t=0;t<e.length;t++){var l=e[t];ma=l,fm(l,a)}um(a)}for(a=a.child;a!==null;){switch(e=a,e.tag){case 0:case 11:case 15:st(8,e,e.return),_o(e);break;case 22:t=e.stateNode,t._visibility&2&&(t._visibility&=-3,_o(e));break;default:_o(e)}a=a.sibling}}function fm(a,e){for(;ma!==null;){var t=ma;switch(t.tag){case 0:case 11:case 15:st(8,t,e);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:qu(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,ma=l;else a:for(t=a;ma!==null;){l=ma;var u=l.sibling,o=l.return;if(Kp(l),l===t){ma=null;break a}if(u!==null){u.return=o,ma=u;break a}ma=o}}}var Th={getCacheForType:function(a){var e=ya(da),t=e.data.get(a);return t===void 0&&(t=a(),e.data.set(a,t)),t},cacheSignal:function(){return ya(da).controller.signal}},Bh=typeof WeakMap=="function"?WeakMap:Map,H=0,V=null,R=null,O=0,N=0,qa=null,Qe=!1,Tl=!1,Bi=!1,qe=0,ta=0,it=0,Dt=0,wi=0,Ha=0,Sl=0,cu=null,ka=null,Bs=!1,Uf=0,dm=0,rf=1/0,cf=null,et=null,na=0,tt=null,Cl=null,we=0,ws=0,ks=null,sm=null,pu=0,Rs=null;function _a(){return(H&2)!==0&&O!==0?O&-O:A.T!==null?Ri():hc()}function im(){if(Ha===0)if((O&536870912)===0||z){var a=xo;xo<<=1,(xo&3932160)===0&&(xo=262144),Ha=a}else Ha=536870912;return a=Xa.current,a!==null&&(a.flags|=32),Ha}function Ra(a,e,t){(a===V&&(N===2||N===9)||a.cancelPendingCommit!==null)&&(Il(a,0),je(a,O,Ha,!1)),Ru(a,t),((H&2)===0||a!==V)&&(a===V&&((H&2)===0&&(Dt|=t),ta===4&&je(a,O,Ha,!1)),me(a))}function nm(a,e,t){if((H&6)!==0)throw Error(S(327));var l=!t&&(e&127)===0&&(e&a.expiredLanes)===0||ku(a,e),u=l?Rh(a,e):_d(a,e,!0),o=l;do{if(u===0){Tl&&!l&&je(a,e,0,!1);break}else{if(t=a.current.alternate,o&&!wh(t)){u=_d(a,e,!1),o=!1;continue}if(u===2){if(o=e,a.errorRecoveryDisabledLanes&o)var f=0;else f=a.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){e=f;a:{var d=a;u=cu;var s=d.current.memoizedState.isDehydrated;if(s&&(Il(d,f).flags|=256),f=_d(d,f,!1),f!==2){if(Bi&&!s){d.errorRecoveryDisabledLanes|=o,Dt|=o,u=4;break a}o=ka,ka=u,o!==null&&(ka===null?ka=o:ka.push.apply(ka,o))}u=f}if(o=!1,u!==2)continue}}if(u===1){Il(a,0),je(a,e,0,!0);break}a:{switch(l=a,o=u,o){case 0:case 1:throw Error(S(345));case 4:if((e&4194048)!==e)break;case 6:je(l,e,Ha,!Qe);break a;case 2:ka=null;break;case 3:case 5:break;default:throw Error(S(329))}if((e&62914560)===e&&(u=Uf+300-Fa(),10<u)){if(je(l,e,Ha,!Qe),vf(l,0,!0)!==0)break a;we=e,l.timeoutHandle=wm(Tr.bind(null,l,t,ka,cf,Bs,e,Ha,Dt,Sl,Qe,o,"Throttled",-0,0),u);break a}Tr(l,t,ka,cf,Bs,e,Ha,Dt,Sl,Qe,o,null,-0,0)}}break}while(!0);me(a)}function Tr(a,e,t,l,u,o,f,d,s,r,L,x,p,m){if(a.timeoutHandle=-1,x=e.subtreeFlags,x&8192||(x&16785408)===16785408){x={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Me},lm(e,o,x);var I=(o&62914560)===o?Uf-Fa():(o&4194048)===o?dm-Fa():0;if(I=cg(x,I),I!==null){we=o,a.cancelPendingCommit=I(wr.bind(null,a,e,o,t,l,u,f,d,s,L,x,null,p,m)),je(a,o,f,!r);return}}wr(a,e,o,t,l,u,f,d,s)}function wh(a){for(var e=a;;){var t=e.tag;if((t===0||t===11||t===15)&&e.flags&16384&&(t=e.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var u=t[l],o=u.getSnapshot;u=u.value;try{if(!Pa(o(),u))return!1}catch{return!1}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===a)break;for(;e.sibling===null;){if(e.return===null||e.return===a)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function je(a,e,t,l){e&=~wi,e&=~Dt,a.suspendedLanes|=e,a.pingedLanes&=~e,l&&(a.warmLanes|=e),l=a.expirationTimes;for(var u=e;0<u;){var o=31-Ga(u),f=1<<o;l[o]=-1,u&=~f}t!==0&&mc(a,t,e)}function qf(){return(H&6)===0?(Hu(0,!1),!1):!0}function ki(){if(R!==null){if(N===0)var a=R.return;else a=R,De=Et=null,xi(a),nl=null,Iu=0,a=R;for(;a!==null;)Pp(a.alternate,a),a=a.return;R=null}}function Il(a,e){var t=a.timeoutHandle;t!==-1&&(a.timeoutHandle=-1,Qh(t)),t=a.cancelPendingCommit,t!==null&&(a.cancelPendingCommit=null,t()),we=0,ki(),V=a,R=t=Te(a.current,null),O=e,N=0,qa=null,Qe=!1,Tl=ku(a,e),Bi=!1,Sl=Ha=wi=Dt=it=ta=0,ka=cu=null,Bs=!1,(e&8)!==0&&(e|=e&32);var l=a.entangledLanes;if(l!==0)for(a=a.entanglements,l&=e;0<l;){var u=31-Ga(l),o=1<<u;e|=a[u],l&=~o}return qe=e,Df(),t}function rm(a,e){w=null,A.H=vu,e===Dl||e===Bf?(e=fr(),N=3):e===ii?(e=fr(),N=4):N=e===Ai?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,qa=e,R===null&&(ta=1,df(a,Wa(e,a.current)))}function cm(){var a=Xa.current;return a===null?!0:(O&4194048)===O?ae===null:(O&62914560)===O||(O&536870912)!==0?a===ae:!1}function pm(){var a=A.H;return A.H=vu,a===null?vu:a}function mm(){var a=A.A;return A.A=Th,a}function pf(){ta=4,Qe||(O&4194048)!==O&&Xa.current!==null||(Tl=!0),(it&134217727)===0&&(Dt&134217727)===0||V===null||je(V,O,Ha,!1)}function _d(a,e,t){var l=H;H|=2;var u=pm(),o=mm();(V!==a||O!==e)&&(cf=null,Il(a,e)),e=!1;var f=ta;a:do try{if(N!==0&&R!==null){var d=R,s=qa;switch(N){case 8:ki(),f=6;break a;case 3:case 2:case 9:case 6:Xa.current===null&&(e=!0);var r=N;if(N=0,qa=null,ol(a,d,s,r),t&&Tl){f=0;break a}break;default:r=N,N=0,qa=null,ol(a,d,s,r)}}kh(),f=ta;break}catch(L){rm(a,L)}while(!0);return e&&a.shellSuspendCounter++,De=Et=null,H=l,A.H=u,A.A=o,R===null&&(V=null,O=0,Df()),f}function kh(){for(;R!==null;)Lm(R)}function Rh(a,e){var t=H;H|=2;var l=pm(),u=mm();V!==a||O!==e?(cf=null,rf=Fa()+500,Il(a,e)):Tl=ku(a,e);a:do try{if(N!==0&&R!==null){e=R;var o=qa;e:switch(N){case 1:N=0,qa=null,ol(a,e,o,1);break;case 2:case 9:if(or(o)){N=0,qa=null,Br(e);break}e=function(){N!==2&&N!==9||V!==a||(N=7),me(a)},o.then(e,e);break a;case 3:N=7;break a;case 4:N=5;break a;case 7:or(o)?(N=0,qa=null,Br(e)):(N=0,qa=null,ol(a,e,o,7));break;case 5:var f=null;switch(R.tag){case 26:f=R.memoizedState;case 5:case 27:var d=R;if(f?qm(f):d.stateNode.complete){N=0,qa=null;var s=d.sibling;if(s!==null)R=s;else{var r=d.return;r!==null?(R=r,zf(r)):R=null}break e}}N=0,qa=null,ol(a,e,o,5);break;case 6:N=0,qa=null,ol(a,e,o,6);break;case 8:ki(),ta=6;break a;default:throw Error(S(462))}}Oh();break}catch(L){rm(a,L)}while(!0);return De=Et=null,A.H=l,A.A=u,H=t,R!==null?0:(V=null,O=0,Df(),ta)}function Oh(){for(;R!==null&&!tx();)Lm(R)}function Lm(a){var e=_p(a.alternate,a,qe);a.memoizedProps=a.pendingProps,e===null?zf(a):R=e}function Br(a){var e=a,t=e.alternate;switch(e.tag){case 15:case 0:e=yr(t,e,e.pendingProps,e.type,void 0,O);break;case 11:e=yr(t,e,e.pendingProps,e.type.render,e.ref,O);break;case 5:xi(e);default:Pp(t,e),e=R=Pc(e,qe),e=_p(t,e,qe)}a.memoizedProps=a.pendingProps,e===null?zf(a):R=e}function ol(a,e,t,l){De=Et=null,xi(e),nl=null,Iu=0;var u=e.return;try{if(Ih(a,u,e,t,O)){ta=1,df(a,Wa(t,a.current)),R=null;return}}catch(o){if(u!==null)throw R=u,o;ta=1,df(a,Wa(t,a.current)),R=null;return}e.flags&32768?(z||l===1?a=!0:Tl||(O&536870912)!==0?a=!1:(Qe=a=!0,(l===2||l===9||l===3||l===6)&&(l=Xa.current,l!==null&&l.tag===13&&(l.flags|=16384))),xm(e,a)):zf(e)}function zf(a){var e=a;do{if((e.flags&32768)!==0){xm(e,Qe);return}a=e.return;var t=bh(e.alternate,e,qe);if(t!==null){R=t;return}if(e=e.sibling,e!==null){R=e;return}R=e=a}while(e!==null);ta===0&&(ta=5)}function xm(a,e){do{var t=Ah(a.alternate,a);if(t!==null){t.flags&=32767,R=t;return}if(t=a.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!e&&(a=a.sibling,a!==null)){R=a;return}R=a=t}while(a!==null);ta=6,R=null}function wr(a,e,t,l,u,o,f,d,s){a.cancelPendingCommit=null;do Ef();while(na!==0);if((H&6)!==0)throw Error(S(327));if(e!==null){if(e===a.current)throw Error(S(177));if(o=e.lanes|e.childLanes,o|=ti,cx(a,t,o,f,d,s),a===V&&(R=V=null,O=0),Cl=e,tt=a,we=t,ws=o,ks=u,sm=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,Eh(Ko,function(){return Im(),null})):(a.callbackNode=null,a.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,u=F.p,F.p=2,f=H,H|=4;try{Mh(a,e,t)}finally{H=f,F.p=u,A.T=l}}na=1,hm(),gm(),Sm()}}function hm(){if(na===1){na=0;var a=tt,e=Cl,t=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||t){t=A.T,A.T=null;var l=F.p;F.p=2;var u=H;H|=4;try{am(e,a);var o=zs,f=qc(a.containerInfo),d=o.focusedElem,s=o.selectionRange;if(f!==d&&d&&d.ownerDocument&&Uc(d.ownerDocument.documentElement,d)){if(s!==null&&ei(d)){var r=s.start,L=s.end;if(L===void 0&&(L=r),"selectionStart"in d)d.selectionStart=r,d.selectionEnd=Math.min(L,d.value.length);else{var x=d.ownerDocument||document,p=x&&x.defaultView||window;if(p.getSelection){var m=p.getSelection(),I=d.textContent.length,b=Math.min(s.start,I),E=s.end===void 0?b:Math.min(s.end,I);!m.extend&&b>E&&(f=E,E=b,b=f);var n=Wn(d,b),i=Wn(d,E);if(n&&i&&(m.rangeCount!==1||m.anchorNode!==n.node||m.anchorOffset!==n.offset||m.focusNode!==i.node||m.focusOffset!==i.offset)){var c=x.createRange();c.setStart(n.node,n.offset),m.removeAllRanges(),b>E?(m.addRange(c),m.extend(i.node,i.offset)):(c.setEnd(i.node,i.offset),m.addRange(c))}}}}for(x=[],m=d;m=m.parentNode;)m.nodeType===1&&x.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<x.length;d++){var h=x[d];h.element.scrollLeft=h.left,h.element.scrollTop=h.top}}If=!!qs,zs=qs=null}finally{H=u,F.p=l,A.T=t}}a.current=e,na=2}}function gm(){if(na===2){na=0;var a=tt,e=Cl,t=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||t){t=A.T,A.T=null;var l=F.p;F.p=2;var u=H;H|=4;try{jp(a,e.alternate,e)}finally{H=u,F.p=l,A.T=t}}na=3}}function Sm(){if(na===4||na===3){na=0,lx();var a=tt,e=Cl,t=we,l=sm;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?na=5:(na=0,Cl=tt=null,Cm(a,a.pendingLanes));var u=a.pendingLanes;if(u===0&&(et=null),Qs(t),e=e.stateNode,Na&&typeof Na.onCommitFiberRoot=="function")try{Na.onCommitFiberRoot(wu,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=A.T,u=F.p,F.p=2,A.T=null;try{for(var o=a.onRecoverableError,f=0;f<l.length;f++){var d=l[f];o(d.value,{componentStack:d.stack})}}finally{A.T=e,F.p=u}}(we&3)!==0&&Ef(),me(a),u=a.pendingLanes,(t&261930)!==0&&(u&42)!==0?a===Rs?pu++:(pu=0,Rs=a):pu=0,Hu(0,!1)}}function Cm(a,e){(a.pooledCacheLanes&=e)===0&&(e=a.pooledCache,e!=null&&(a.pooledCache=null,qu(e)))}function Ef(){return hm(),gm(),Sm(),Im()}function Im(){if(na!==5)return!1;var a=tt,e=ws;ws=0;var t=Qs(we),l=A.T,u=F.p;try{F.p=32>t?32:t,A.T=null,t=ks,ks=null;var o=tt,f=we;if(na=0,Cl=tt=null,we=0,(H&6)!==0)throw Error(S(331));var d=H;if(H|=4,om(o.current),tm(o,o.current,f,t),H=d,Hu(0,!1),Na&&typeof Na.onPostCommitFiberRoot=="function")try{Na.onPostCommitFiberRoot(wu,o)}catch{}return!0}finally{F.p=u,A.T=l,Cm(a,e)}}function kr(a,e,t){e=Wa(t,e),e=As(a.stateNode,e,2),a=at(a,e,2),a!==null&&(Ru(a,2),me(a))}function G(a,e,t){if(a.tag===3)kr(a,a,t);else for(;e!==null;){if(e.tag===3){kr(e,a,t);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(et===null||!et.has(l))){a=Wa(t,a),t=zp(2),l=at(e,t,2),l!==null&&(Ep(t,l,e,a),Ru(l,2),me(l));break}}e=e.return}}function Pd(a,e,t){var l=a.pingCache;if(l===null){l=a.pingCache=new Bh;var u=new Set;l.set(e,u)}else u=l.get(e),u===void 0&&(u=new Set,l.set(e,u));u.has(t)||(Bi=!0,u.add(t),a=Uh.bind(null,a,e,t),e.then(a,a))}function Uh(a,e,t){var l=a.pingCache;l!==null&&l.delete(e),a.pingedLanes|=a.suspendedLanes&t,a.warmLanes&=~t,V===a&&(O&t)===t&&(ta===4||ta===3&&(O&62914560)===O&&300>Fa()-Uf?(H&2)===0&&Il(a,0):wi|=t,Sl===O&&(Sl=0)),me(a)}function ym(a,e){e===0&&(e=pc()),a=zt(a,e),a!==null&&(Ru(a,e),me(a))}function qh(a){var e=a.memoizedState,t=0;e!==null&&(t=e.retryLane),ym(a,t)}function zh(a,e){var t=0;switch(a.tag){case 31:case 13:var l=a.stateNode,u=a.memoizedState;u!==null&&(t=u.retryLane);break;case 19:l=a.stateNode;break;case 22:l=a.stateNode._retryCache;break;default:throw Error(S(314))}l!==null&&l.delete(e),ym(a,t)}function Eh(a,e){return Zs(a,e)}var mf=null,Yt=null,Os=!1,Lf=!1,Xd=!1,Ke=0;function me(a){a!==Yt&&a.next===null&&(Yt===null?mf=Yt=a:Yt=Yt.next=a),Lf=!0,Os||(Os=!0,Fh())}function Hu(a,e){if(!Xd&&Lf){Xd=!0;do for(var t=!1,l=mf;l!==null;){if(!e)if(a!==0){var u=l.pendingLanes;if(u===0)var o=0;else{var f=l.suspendedLanes,d=l.pingedLanes;o=(1<<31-Ga(42|a)+1)-1,o&=u&~(f&~d),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(t=!0,Rr(l,o))}else o=O,o=vf(l,l===V?o:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(o&3)===0||ku(l,o)||(t=!0,Rr(l,o));l=l.next}while(t);Xd=!1}}function Hh(){vm()}function vm(){Lf=Os=!1;var a=0;Ke!==0&&Yh()&&(a=Ke);for(var e=Fa(),t=null,l=mf;l!==null;){var u=l.next,o=bm(l,e);o===0?(l.next=null,t===null?mf=u:t.next=u,u===null&&(Yt=t)):(t=l,(a!==0||(o&3)!==0)&&(Lf=!0)),l=u}na!==0&&na!==5||Hu(a,!1),Ke!==0&&(Ke=0)}function bm(a,e){for(var t=a.suspendedLanes,l=a.pingedLanes,u=a.expirationTimes,o=a.pendingLanes&-62914561;0<o;){var f=31-Ga(o),d=1<<f,s=u[f];s===-1?((d&t)===0||(d&l)!==0)&&(u[f]=rx(d,e)):s<=e&&(a.expiredLanes|=d),o&=~d}if(e=V,t=O,t=vf(a,a===e?t:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),l=a.callbackNode,t===0||a===e&&(N===2||N===9)||a.cancelPendingCommit!==null)return l!==null&&l!==null&&Sd(l),a.callbackNode=null,a.callbackPriority=0;if((t&3)===0||ku(a,t)){if(e=t&-t,e===a.callbackPriority)return e;switch(l!==null&&Sd(l),Qs(t)){case 2:case 8:t=rc;break;case 32:t=Ko;break;case 268435456:t=cc;break;default:t=Ko}return l=Am.bind(null,a),t=Zs(t,l),a.callbackPriority=e,a.callbackNode=t,e}return l!==null&&l!==null&&Sd(l),a.callbackPriority=2,a.callbackNode=null,2}function Am(a,e){if(na!==0&&na!==5)return a.callbackNode=null,a.callbackPriority=0,null;var t=a.callbackNode;if(Ef()&&a.callbackNode!==t)return null;var l=O;return l=vf(a,a===V?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),l===0?null:(nm(a,l,e),bm(a,Fa()),a.callbackNode!=null&&a.callbackNode===t?Am.bind(null,a):null)}function Rr(a,e){if(Ef())return null;nm(a,e,!0)}function Fh(){jh(function(){(H&6)!==0?Zs(nc,Hh):vm()})}function Ri(){if(Ke===0){var a=xl;a===0&&(a=Lo,Lo<<=1,(Lo&261888)===0&&(Lo=256)),Ke=a}return Ke}function Or(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:Oo(""+a)}function Ur(a,e){var t=e.ownerDocument.createElement("input");return t.name=e.name,t.value=e.value,a.id&&t.setAttribute("form",a.id),e.parentNode.insertBefore(t,e),a=new FormData(a),t.parentNode.removeChild(t),a}function Nh(a,e,t,l,u){if(e==="submit"&&t&&t.stateNode===u){var o=Or((u[Oa]||null).action),f=l.submitter;f&&(e=(e=f[Oa]||null)?Or(e.formAction):f.getAttribute("formAction"),e!==null&&(o=e,f=null));var d=new bf("action","action",null,l,u);a.push({event:d,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ke!==0){var s=f?Ur(u,f):new FormData(u);vs(t,{pending:!0,data:s,method:u.method,action:o},null,s)}}else typeof o=="function"&&(d.preventDefault(),s=f?Ur(u,f):new FormData(u),vs(t,{pending:!0,data:s,method:u.method,action:o},o,s))},currentTarget:u}]})}}for(Do=0;Do<rs.length;Do++)To=rs[Do],qr=To.toLowerCase(),zr=To[0].toUpperCase()+To.slice(1),oe(qr,"on"+zr);var To,qr,zr,Do;oe(Ec,"onAnimationEnd");oe(Hc,"onAnimationIteration");oe(Fc,"onAnimationStart");oe("dblclick","onDoubleClick");oe("focusin","onFocus");oe("focusout","onBlur");oe(uh,"onTransitionRun");oe(oh,"onTransitionStart");oe(fh,"onTransitionCancel");oe(Nc,"onTransitionEnd");ml("onMouseEnter",["mouseout","mouseover"]);ml("onMouseLeave",["mouseout","mouseover"]);ml("onPointerEnter",["pointerout","pointerover"]);ml("onPointerLeave",["pointerout","pointerover"]);Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bu));function Mm(a,e){e=(e&4)!==0;for(var t=0;t<a.length;t++){var l=a[t],u=l.event;l=l.listeners;a:{var o=void 0;if(e)for(var f=l.length-1;0<=f;f--){var d=l[f],s=d.instance,r=d.currentTarget;if(d=d.listener,s!==o&&u.isPropagationStopped())break a;o=d,u.currentTarget=r;try{o(u)}catch(L){Wo(L)}u.currentTarget=null,o=s}else for(f=0;f<l.length;f++){if(d=l[f],s=d.instance,r=d.currentTarget,d=d.listener,s!==o&&u.isPropagationStopped())break a;o=d,u.currentTarget=r;try{o(u)}catch(L){Wo(L)}u.currentTarget=null,o=s}}}}function k(a,e){var t=e[ls];t===void 0&&(t=e[ls]=new Set);var l=a+"__bubble";t.has(l)||(Dm(e,a,2,!1),t.add(l))}function Vd(a,e,t){var l=0;e&&(l|=4),Dm(t,a,l,e)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Oi(a){if(!a[Bo]){a[Bo]=!0,gc.forEach(function(t){t!=="selectionchange"&&(Gh.has(t)||Vd(t,!1,a),Vd(t,!0,a))});var e=a.nodeType===9?a:a.ownerDocument;e===null||e[Bo]||(e[Bo]=!0,Vd("selectionchange",!1,e))}}function Dm(a,e,t,l){switch(Nm(e)){case 2:var u=Lg;break;case 8:u=xg;break;default:u=Ei}t=u.bind(null,e,t,a),u=void 0,!ss||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),l?u!==void 0?a.addEventListener(e,t,{capture:!0,passive:u}):a.addEventListener(e,t,!0):u!==void 0?a.addEventListener(e,t,{passive:u}):a.addEventListener(e,t,!1)}function Zd(a,e,t,l,u){var o=l;if((e&1)===0&&(e&2)===0&&l!==null)a:for(;;){if(l===null)return;var f=l.tag;if(f===3||f===4){var d=l.stateNode.containerInfo;if(d===u)break;if(f===4)for(f=l.return;f!==null;){var s=f.tag;if((s===3||s===4)&&f.stateNode.containerInfo===u)return;f=f.return}for(;d!==null;){if(f=Kt(d),f===null)return;if(s=f.tag,s===5||s===6||s===26||s===27){l=o=f;continue a}d=d.parentNode}}l=l.return}Mc(function(){var r=o,L=Js(t),x=[];a:{var p=Gc.get(a);if(p!==void 0){var m=bf,I=a;switch(a){case"keypress":if(qo(t)===0)break a;case"keydown":case"keyup":m=zx;break;case"focusin":I="focus",m=bd;break;case"focusout":I="blur",m=bd;break;case"beforeblur":case"afterblur":m=bd;break;case"click":if(t.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Fx;break;case Ec:case Hc:case Fc:m=Dx;break;case Nc:m=Gx;break;case"scroll":case"scrollend":m=yx;break;case"wheel":m=Px;break;case"copy":case"cut":case"paste":m=Bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vn;break;case"toggle":case"beforetoggle":m=Vx}var b=(e&4)!==0,E=!b&&(a==="scroll"||a==="scrollend"),n=b?p!==null?p+"Capture":null:p;b=[];for(var i=r,c;i!==null;){var h=i;if(c=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||c===null||n===null||(h=xu(i,n),h!=null&&b.push(Au(i,h,c))),E)break;i=i.return}0<b.length&&(p=new m(p,I,null,t,L),x.push({event:p,listeners:b}))}}if((e&7)===0){a:{if(p=a==="mouseover"||a==="pointerover",m=a==="mouseout"||a==="pointerout",p&&t!==ds&&(I=t.relatedTarget||t.fromElement)&&(Kt(I)||I[bl]))break a;if((m||p)&&(p=L.window===L?L:(p=L.ownerDocument)?p.defaultView||p.parentWindow:window,m?(I=t.relatedTarget||t.toElement,m=r,I=I?Kt(I):null,I!==null&&(E=Bu(I),b=I.tag,I!==E||b!==5&&b!==27&&b!==6)&&(I=null)):(m=null,I=r),m!==I)){if(b=Pn,h="onMouseLeave",n="onMouseEnter",i="mouse",(a==="pointerout"||a==="pointerover")&&(b=Vn,h="onPointerLeave",n="onPointerEnter",i="pointer"),E=m==null?p:$l(m),c=I==null?p:$l(I),p=new b(h,i+"leave",m,t,L),p.target=E,p.relatedTarget=c,h=null,Kt(L)===r&&(b=new b(n,i+"enter",I,t,L),b.target=c,b.relatedTarget=E,h=b),E=h,m&&I)e:{for(b=_h,n=m,i=I,c=0,h=n;h;h=b(h))c++;h=0;for(var v=i;v;v=b(v))h++;for(;0<c-h;)n=b(n),c--;for(;0<h-c;)i=b(i),h--;for(;c--;){if(n===i||i!==null&&n===i.alternate){b=n;break e}n=b(n),i=b(i)}b=null}else b=null;m!==null&&Er(x,p,m,b,!1),I!==null&&E!==null&&Er(x,E,I,b,!0)}}a:{if(p=r?$l(r):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var U=jn;else if(Qn(p))if(Rc)U=eh;else{U=$x;var y=Wx}else m=p.nodeName,!m||m.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?r&&Ks(r.elementType)&&(U=jn):U=ah;if(U&&(U=U(a,r))){kc(x,U,t,L);break a}y&&y(a,p,r),a==="focusout"&&r&&p.type==="number"&&r.memoizedProps.value!=null&&fs(p,"number",p.value)}switch(y=r?$l(r):window,a){case"focusin":(Qn(y)||y.contentEditable==="true")&&($t=y,is=r,uu=null);break;case"focusout":uu=is=$t=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,$n(x,t,L);break;case"selectionchange":if(lh)break;case"keydown":case"keyup":$n(x,t,L)}var D;if(ai)a:{switch(a){case"compositionstart":var B="onCompositionStart";break a;case"compositionend":B="onCompositionEnd";break a;case"compositionupdate":B="onCompositionUpdate";break a}B=void 0}else Wt?Bc(a,t)&&(B="onCompositionEnd"):a==="keydown"&&t.keyCode===229&&(B="onCompositionStart");B&&(Tc&&t.locale!=="ko"&&(Wt||B!=="onCompositionStart"?B==="onCompositionEnd"&&Wt&&(D=Dc()):(Ye=L,Ws="value"in Ye?Ye.value:Ye.textContent,Wt=!0)),y=xf(r,B),0<y.length&&(B=new Xn(B,a,null,t,L),x.push({event:B,listeners:y}),D?B.data=D:(D=wc(t),D!==null&&(B.data=D)))),(D=Yx?Qx(a,t):jx(a,t))&&(B=xf(r,"onBeforeInput"),0<B.length&&(y=new Xn("onBeforeInput","beforeinput",null,t,L),x.push({event:y,listeners:B}),y.data=D)),Nh(x,a,r,t,L)}Mm(x,e)})}function Au(a,e,t){return{instance:a,listener:e,currentTarget:t}}function xf(a,e){for(var t=e+"Capture",l=[];a!==null;){var u=a,o=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||o===null||(u=xu(a,t),u!=null&&l.unshift(Au(a,u,o)),u=xu(a,e),u!=null&&l.push(Au(a,u,o))),a.tag===3)return l;a=a.return}return[]}function _h(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function Er(a,e,t,l,u){for(var o=e._reactName,f=[];t!==null&&t!==l;){var d=t,s=d.alternate,r=d.stateNode;if(d=d.tag,s!==null&&s===l)break;d!==5&&d!==26&&d!==27||r===null||(s=r,u?(r=xu(t,o),r!=null&&f.unshift(Au(t,r,s))):u||(r=xu(t,o),r!=null&&f.push(Au(t,r,s)))),t=t.return}f.length!==0&&a.push({event:e,listeners:f})}var Ph=/\r\n?/g,Xh=/\u0000|\uFFFD/g;function Hr(a){return(typeof a=="string"?a:""+a).replace(Ph,`
`).replace(Xh,"")}function Tm(a,e){return e=Hr(e),Hr(a)===e}function P(a,e,t,l,u,o){switch(t){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Ll(a,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Ll(a,""+l);break;case"className":go(a,"class",l);break;case"tabIndex":go(a,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":go(a,t,l);break;case"style":Ac(a,l,o);break;case"data":if(e!=="object"){go(a,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||t!=="href")){a.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){a.removeAttribute(t);break}l=Oo(""+l),a.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){a.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(t==="formAction"?(e!=="input"&&P(a,e,"name",u.name,u,null),P(a,e,"formEncType",u.formEncType,u,null),P(a,e,"formMethod",u.formMethod,u,null),P(a,e,"formTarget",u.formTarget,u,null)):(P(a,e,"encType",u.encType,u,null),P(a,e,"method",u.method,u,null),P(a,e,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){a.removeAttribute(t);break}l=Oo(""+l),a.setAttribute(t,l);break;case"onClick":l!=null&&(a.onclick=Me);break;case"onScroll":l!=null&&k("scroll",a);break;case"onScrollEnd":l!=null&&k("scrollend",a);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(S(61));if(t=l.__html,t!=null){if(u.children!=null)throw Error(S(60));a.innerHTML=t}}break;case"multiple":a.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":a.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){a.removeAttribute("xlink:href");break}t=Oo(""+l),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(t,""+l):a.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(t,""):a.removeAttribute(t);break;case"capture":case"download":l===!0?a.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?a.setAttribute(t,l):a.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?a.setAttribute(t,l):a.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?a.removeAttribute(t):a.setAttribute(t,l);break;case"popover":k("beforetoggle",a),k("toggle",a),Ro(a,"popover",l);break;case"xlinkActuate":ge(a,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ge(a,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ge(a,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ge(a,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ge(a,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ge(a,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ge(a,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ge(a,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ge(a,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ro(a,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Cx.get(t)||t,Ro(a,t,l))}}function Us(a,e,t,l,u,o){switch(t){case"style":Ac(a,l,o);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(S(61));if(t=l.__html,t!=null){if(u.children!=null)throw Error(S(60));a.innerHTML=t}}break;case"children":typeof l=="string"?Ll(a,l):(typeof l=="number"||typeof l=="bigint")&&Ll(a,""+l);break;case"onScroll":l!=null&&k("scroll",a);break;case"onScrollEnd":l!=null&&k("scrollend",a);break;case"onClick":l!=null&&(a.onclick=Me);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sc.hasOwnProperty(t))a:{if(t[0]==="o"&&t[1]==="n"&&(u=t.endsWith("Capture"),e=t.slice(2,u?t.length-7:void 0),o=a[Oa]||null,o=o!=null?o[t]:null,typeof o=="function"&&a.removeEventListener(e,o,u),typeof l=="function")){typeof o!="function"&&o!==null&&(t in a?a[t]=null:a.hasAttribute(t)&&a.removeAttribute(t)),a.addEventListener(e,l,u);break a}t in a?a[t]=l:l===!0?a.setAttribute(t,""):Ro(a,t,l)}}}function va(a,e,t){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":k("error",a),k("load",a);var l=!1,u=!1,o;for(o in t)if(t.hasOwnProperty(o)){var f=t[o];if(f!=null)switch(o){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(S(137,e));default:P(a,e,o,f,t,null)}}u&&P(a,e,"srcSet",t.srcSet,t,null),l&&P(a,e,"src",t.src,t,null);return;case"input":k("invalid",a);var d=o=f=u=null,s=null,r=null;for(l in t)if(t.hasOwnProperty(l)){var L=t[l];if(L!=null)switch(l){case"name":u=L;break;case"type":f=L;break;case"checked":s=L;break;case"defaultChecked":r=L;break;case"value":o=L;break;case"defaultValue":d=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(S(137,e));break;default:P(a,e,l,L,t,null)}}yc(a,o,d,s,r,f,u,!1);return;case"select":k("invalid",a),l=f=o=null;for(u in t)if(t.hasOwnProperty(u)&&(d=t[u],d!=null))switch(u){case"value":o=d;break;case"defaultValue":f=d;break;case"multiple":l=d;default:P(a,e,u,d,t,null)}e=o,t=f,a.multiple=!!l,e!=null?dl(a,!!l,e,!1):t!=null&&dl(a,!!l,t,!0);return;case"textarea":k("invalid",a),o=u=l=null;for(f in t)if(t.hasOwnProperty(f)&&(d=t[f],d!=null))switch(f){case"value":l=d;break;case"defaultValue":u=d;break;case"children":o=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(S(91));break;default:P(a,e,f,d,t,null)}bc(a,l,u,o);return;case"option":for(s in t)t.hasOwnProperty(s)&&(l=t[s],l!=null)&&(s==="selected"?a.selected=l&&typeof l!="function"&&typeof l!="symbol":P(a,e,s,l,t,null));return;case"dialog":k("beforetoggle",a),k("toggle",a),k("cancel",a),k("close",a);break;case"iframe":case"object":k("load",a);break;case"video":case"audio":for(l=0;l<bu.length;l++)k(bu[l],a);break;case"image":k("error",a),k("load",a);break;case"details":k("toggle",a);break;case"embed":case"source":case"link":k("error",a),k("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in t)if(t.hasOwnProperty(r)&&(l=t[r],l!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(S(137,e));default:P(a,e,r,l,t,null)}return;default:if(Ks(e)){for(L in t)t.hasOwnProperty(L)&&(l=t[L],l!==void 0&&Us(a,e,L,l,t,void 0));return}}for(d in t)t.hasOwnProperty(d)&&(l=t[d],l!=null&&P(a,e,d,l,t,null))}function Vh(a,e,t,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,o=null,f=null,d=null,s=null,r=null,L=null;for(m in t){var x=t[m];if(t.hasOwnProperty(m)&&x!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":s=x;default:l.hasOwnProperty(m)||P(a,e,m,null,l,x)}}for(var p in l){var m=l[p];if(x=t[p],l.hasOwnProperty(p)&&(m!=null||x!=null))switch(p){case"type":o=m;break;case"name":u=m;break;case"checked":r=m;break;case"defaultChecked":L=m;break;case"value":f=m;break;case"defaultValue":d=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(S(137,e));break;default:m!==x&&P(a,e,p,m,l,x)}}os(a,f,d,s,r,L,o,u);return;case"select":m=f=d=p=null;for(o in t)if(s=t[o],t.hasOwnProperty(o)&&s!=null)switch(o){case"value":break;case"multiple":m=s;default:l.hasOwnProperty(o)||P(a,e,o,null,l,s)}for(u in l)if(o=l[u],s=t[u],l.hasOwnProperty(u)&&(o!=null||s!=null))switch(u){case"value":p=o;break;case"defaultValue":d=o;break;case"multiple":f=o;default:o!==s&&P(a,e,u,o,l,s)}e=d,t=f,l=m,p!=null?dl(a,!!t,p,!1):!!l!=!!t&&(e!=null?dl(a,!!t,e,!0):dl(a,!!t,t?[]:"",!1));return;case"textarea":m=p=null;for(d in t)if(u=t[d],t.hasOwnProperty(d)&&u!=null&&!l.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:P(a,e,d,null,l,u)}for(f in l)if(u=l[f],o=t[f],l.hasOwnProperty(f)&&(u!=null||o!=null))switch(f){case"value":p=u;break;case"defaultValue":m=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(S(91));break;default:u!==o&&P(a,e,f,u,l,o)}vc(a,p,m);return;case"option":for(var I in t)p=t[I],t.hasOwnProperty(I)&&p!=null&&!l.hasOwnProperty(I)&&(I==="selected"?a.selected=!1:P(a,e,I,null,l,p));for(s in l)p=l[s],m=t[s],l.hasOwnProperty(s)&&p!==m&&(p!=null||m!=null)&&(s==="selected"?a.selected=p&&typeof p!="function"&&typeof p!="symbol":P(a,e,s,p,l,m));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in t)p=t[b],t.hasOwnProperty(b)&&p!=null&&!l.hasOwnProperty(b)&&P(a,e,b,null,l,p);for(r in l)if(p=l[r],m=t[r],l.hasOwnProperty(r)&&p!==m&&(p!=null||m!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(S(137,e));break;default:P(a,e,r,p,l,m)}return;default:if(Ks(e)){for(var E in t)p=t[E],t.hasOwnProperty(E)&&p!==void 0&&!l.hasOwnProperty(E)&&Us(a,e,E,void 0,l,p);for(L in l)p=l[L],m=t[L],!l.hasOwnProperty(L)||p===m||p===void 0&&m===void 0||Us(a,e,L,p,l,m);return}}for(var n in t)p=t[n],t.hasOwnProperty(n)&&p!=null&&!l.hasOwnProperty(n)&&P(a,e,n,null,l,p);for(x in l)p=l[x],m=t[x],!l.hasOwnProperty(x)||p===m||p==null&&m==null||P(a,e,x,p,l,m)}function Fr(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zh(){if(typeof performance.getEntriesByType=="function"){for(var a=0,e=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++){var u=t[l],o=u.transferSize,f=u.initiatorType,d=u.duration;if(o&&d&&Fr(f)){for(f=0,d=u.responseEnd,l+=1;l<t.length;l++){var s=t[l],r=s.startTime;if(r>d)break;var L=s.transferSize,x=s.initiatorType;L&&Fr(x)&&(s=s.responseEnd,f+=L*(s<d?1:(d-r)/(s-r)))}if(--l,e+=8*(o+f)/(u.duration/1e3),a++,10<a)break}}if(0<a)return e/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var qs=null,zs=null;function hf(a){return a.nodeType===9?a:a.ownerDocument}function Nr(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bm(a,e){if(a===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&e==="foreignObject"?0:a}function Es(a,e){return a==="textarea"||a==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yd=null;function Yh(){var a=window.event;return a&&a.type==="popstate"?a===Yd?!1:(Yd=a,!0):(Yd=null,!1)}var wm=typeof setTimeout=="function"?setTimeout:void 0,Qh=typeof clearTimeout=="function"?clearTimeout:void 0,Gr=typeof Promise=="function"?Promise:void 0,jh=typeof queueMicrotask=="function"?queueMicrotask:typeof Gr<"u"?function(a){return Gr.resolve(null).then(a).catch(Kh)}:wm;function Kh(a){setTimeout(function(){throw a})}function rt(a){return a==="head"}function _r(a,e){var t=e,l=0;do{var u=t.nextSibling;if(a.removeChild(t),u&&u.nodeType===8)if(t=u.data,t==="/$"||t==="/&"){if(l===0){a.removeChild(u),vl(e);return}l--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;else if(t==="html")mu(a.ownerDocument.documentElement);else if(t==="head"){t=a.ownerDocument.head,mu(t);for(var o=t.firstChild;o;){var f=o.nextSibling,d=o.nodeName;o[Ou]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&o.rel.toLowerCase()==="stylesheet"||t.removeChild(o),o=f}}else t==="body"&&mu(a.ownerDocument.body);t=u}while(t);vl(e)}function Pr(a,e){var t=a;a=0;do{var l=t.nextSibling;if(t.nodeType===1?e?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(e?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$"){if(a===0)break;a--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||a++;t=l}while(t)}function Hs(a){var e=a.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var t=e;switch(e=e.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Hs(t),js(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}a.removeChild(t)}}function Jh(a,e,t,l){for(;a.nodeType===1;){var u=t;if(a.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(l){if(!a[Ou])switch(e){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(o=a.getAttribute("rel"),o==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(o!==u.rel||a.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||a.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||a.getAttribute("title")!==(u.title==null?null:u.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(o=a.getAttribute("src"),(o!==(u.src==null?null:u.src)||a.getAttribute("type")!==(u.type==null?null:u.type)||a.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&o&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(e==="input"&&a.type==="hidden"){var o=u.name==null?null:""+u.name;if(u.type==="hidden"&&a.getAttribute("name")===o)return a}else return a;if(a=ee(a.nextSibling),a===null)break}return null}function Wh(a,e,t){if(e==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!t||(a=ee(a.nextSibling),a===null))return null;return a}function km(a,e){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!e||(a=ee(a.nextSibling),a===null))return null;return a}function Fs(a){return a.data==="$?"||a.data==="$~"}function Ns(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function $h(a,e){var t=a.ownerDocument;if(a.data==="$~")a._reactRetry=e;else if(a.data!=="$?"||t.readyState!=="loading")e();else{var l=function(){e(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),a._reactRetry=l}}function ee(a){for(;a!=null;a=a.nextSibling){var e=a.nodeType;if(e===1||e===3)break;if(e===8){if(e=a.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return a}var Gs=null;function Xr(a){a=a.nextSibling;for(var e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="/$"||t==="/&"){if(e===0)return ee(a.nextSibling);e--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||e++}a=a.nextSibling}return null}function Vr(a){a=a.previousSibling;for(var e=0;a;){if(a.nodeType===8){var t=a.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(e===0)return a;e--}else t!=="/$"&&t!=="/&"||e++}a=a.previousSibling}return null}function Rm(a,e,t){switch(e=hf(t),a){case"html":if(a=e.documentElement,!a)throw Error(S(452));return a;case"head":if(a=e.head,!a)throw Error(S(453));return a;case"body":if(a=e.body,!a)throw Error(S(454));return a;default:throw Error(S(451))}}function mu(a){for(var e=a.attributes;e.length;)a.removeAttributeNode(e[0]);js(a)}var te=new Map,Zr=new Set;function gf(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var ze=F.d;F.d={f:ag,r:eg,D:tg,C:lg,L:ug,m:og,X:dg,S:fg,M:sg};function ag(){var a=ze.f(),e=qf();return a||e}function eg(a){var e=Al(a);e!==null&&e.tag===5&&e.type==="form"?Ap(e):ze.r(a)}var Bl=typeof document>"u"?null:document;function Om(a,e,t){var l=Bl;if(l&&typeof e=="string"&&e){var u=Ja(e);u='link[rel="'+a+'"][href="'+u+'"]',typeof t=="string"&&(u+='[crossorigin="'+t+'"]'),Zr.has(u)||(Zr.add(u),a={rel:a,crossOrigin:t,href:e},l.querySelector(u)===null&&(e=l.createElement("link"),va(e,"link",a),La(e),l.head.appendChild(e)))}}function tg(a){ze.D(a),Om("dns-prefetch",a,null)}function lg(a,e){ze.C(a,e),Om("preconnect",a,e)}function ug(a,e,t){ze.L(a,e,t);var l=Bl;if(l&&a&&e){var u='link[rel="preload"][as="'+Ja(e)+'"]';e==="image"&&t&&t.imageSrcSet?(u+='[imagesrcset="'+Ja(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(u+='[imagesizes="'+Ja(t.imageSizes)+'"]')):u+='[href="'+Ja(a)+'"]';var o=u;switch(e){case"style":o=yl(a);break;case"script":o=wl(a)}te.has(o)||(a=J({rel:"preload",href:e==="image"&&t&&t.imageSrcSet?void 0:a,as:e},t),te.set(o,a),l.querySelector(u)!==null||e==="style"&&l.querySelector(Fu(o))||e==="script"&&l.querySelector(Nu(o))||(e=l.createElement("link"),va(e,"link",a),La(e),l.head.appendChild(e)))}}function og(a,e){ze.m(a,e);var t=Bl;if(t&&a){var l=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+Ja(l)+'"][href="'+Ja(a)+'"]',o=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=wl(a)}if(!te.has(o)&&(a=J({rel:"modulepreload",href:a},e),te.set(o,a),t.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Nu(o)))return}l=t.createElement("link"),va(l,"link",a),La(l),t.head.appendChild(l)}}}function fg(a,e,t){ze.S(a,e,t);var l=Bl;if(l&&a){var u=fl(l).hoistableStyles,o=yl(a);e=e||"default";var f=u.get(o);if(!f){var d={loading:0,preload:null};if(f=l.querySelector(Fu(o)))d.loading=5;else{a=J({rel:"stylesheet",href:a,"data-precedence":e},t),(t=te.get(o))&&Ui(a,t);var s=f=l.createElement("link");La(s),va(s,"link",a),s._p=new Promise(function(r,L){s.onload=r,s.onerror=L}),s.addEventListener("load",function(){d.loading|=1}),s.addEventListener("error",function(){d.loading|=2}),d.loading|=4,Po(f,e,l)}f={type:"stylesheet",instance:f,count:1,state:d},u.set(o,f)}}}function dg(a,e){ze.X(a,e);var t=Bl;if(t&&a){var l=fl(t).hoistableScripts,u=wl(a),o=l.get(u);o||(o=t.querySelector(Nu(u)),o||(a=J({src:a,async:!0},e),(e=te.get(u))&&qi(a,e),o=t.createElement("script"),La(o),va(o,"link",a),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(u,o))}}function sg(a,e){ze.M(a,e);var t=Bl;if(t&&a){var l=fl(t).hoistableScripts,u=wl(a),o=l.get(u);o||(o=t.querySelector(Nu(u)),o||(a=J({src:a,async:!0,type:"module"},e),(e=te.get(u))&&qi(a,e),o=t.createElement("script"),La(o),va(o,"link",a),t.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},l.set(u,o))}}function Yr(a,e,t,l){var u=(u=Je.current)?gf(u):null;if(!u)throw Error(S(446));switch(a){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(e=yl(t.href),t=fl(u).hoistableStyles,l=t.get(e),l||(l={type:"style",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){a=yl(t.href);var o=fl(u).hoistableStyles,f=o.get(a);if(f||(u=u.ownerDocument||u,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(a,f),(o=u.querySelector(Fu(a)))&&!o._p&&(f.instance=o,f.state.loading=5),te.has(a)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},te.set(a,t),o||ig(u,a,t,f.state))),e&&l===null)throw Error(S(528,""));return f}if(e&&l!==null)throw Error(S(529,""));return null;case"script":return e=t.async,t=t.src,typeof t=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=wl(t),t=fl(u).hoistableScripts,l=t.get(e),l||(l={type:"script",instance:null,count:0,state:null},t.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(S(444,a))}}function yl(a){return'href="'+Ja(a)+'"'}function Fu(a){return'link[rel="stylesheet"]['+a+"]"}function Um(a){return J({},a,{"data-precedence":a.precedence,precedence:null})}function ig(a,e,t,l){a.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=a.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),va(e,"link",t),La(e),a.head.appendChild(e))}function wl(a){return'[src="'+Ja(a)+'"]'}function Nu(a){return"script[async]"+a}function Qr(a,e,t){if(e.count++,e.instance===null)switch(e.type){case"style":var l=a.querySelector('style[data-href~="'+Ja(t.href)+'"]');if(l)return e.instance=l,La(l),l;var u=J({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(a.ownerDocument||a).createElement("style"),La(l),va(l,"style",u),Po(l,t.precedence,a),e.instance=l;case"stylesheet":u=yl(t.href);var o=a.querySelector(Fu(u));if(o)return e.state.loading|=4,e.instance=o,La(o),o;l=Um(t),(u=te.get(u))&&Ui(l,u),o=(a.ownerDocument||a).createElement("link"),La(o);var f=o;return f._p=new Promise(function(d,s){f.onload=d,f.onerror=s}),va(o,"link",l),e.state.loading|=4,Po(o,t.precedence,a),e.instance=o;case"script":return o=wl(t.src),(u=a.querySelector(Nu(o)))?(e.instance=u,La(u),u):(l=t,(u=te.get(o))&&(l=J({},t),qi(l,u)),a=a.ownerDocument||a,u=a.createElement("script"),La(u),va(u,"link",l),a.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(S(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Po(l,t.precedence,a));return e.instance}function Po(a,e,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,o=u,f=0;f<l.length;f++){var d=l[f];if(d.dataset.precedence===e)o=d;else if(o!==u)break}o?o.parentNode.insertBefore(a,o.nextSibling):(e=t.nodeType===9?t.head:t,e.insertBefore(a,e.firstChild))}function Ui(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.title==null&&(a.title=e.title)}function qi(a,e){a.crossOrigin==null&&(a.crossOrigin=e.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=e.referrerPolicy),a.integrity==null&&(a.integrity=e.integrity)}var Xo=null;function jr(a,e,t){if(Xo===null){var l=new Map,u=Xo=new Map;u.set(t,l)}else u=Xo,l=u.get(t),l||(l=new Map,u.set(t,l));if(l.has(a))return l;for(l.set(a,null),t=t.getElementsByTagName(a),u=0;u<t.length;u++){var o=t[u];if(!(o[Ou]||o[Ca]||a==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var f=o.getAttribute(e)||"";f=a+f;var d=l.get(f);d?d.push(o):l.set(f,[o])}}return l}function Kr(a,e,t){a=a.ownerDocument||a,a.head.insertBefore(t,e==="title"?a.querySelector("head > title"):null)}function ng(a,e,t){if(t===1||e.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(a=e.disabled,typeof e.precedence=="string"&&a==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function qm(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function rg(a,e,t,l){if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var u=yl(l.href),o=e.querySelector(Fu(u));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(a.count++,a=Sf.bind(a),e.then(a,a)),t.state.loading|=4,t.instance=o,La(o);return}o=e.ownerDocument||e,l=Um(l),(u=te.get(u))&&Ui(l,u),o=o.createElement("link"),La(o);var f=o;f._p=new Promise(function(d,s){f.onload=d,f.onerror=s}),va(o,"link",l),t.instance=o}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(a.count++,t=Sf.bind(a),e.addEventListener("load",t),e.addEventListener("error",t))}}var Qd=0;function cg(a,e){return a.stylesheets&&a.count===0&&Vo(a,a.stylesheets),0<a.count||0<a.imgCount?function(t){var l=setTimeout(function(){if(a.stylesheets&&Vo(a,a.stylesheets),a.unsuspend){var o=a.unsuspend;a.unsuspend=null,o()}},6e4+e);0<a.imgBytes&&Qd===0&&(Qd=62500*Zh());var u=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&Vo(a,a.stylesheets),a.unsuspend)){var o=a.unsuspend;a.unsuspend=null,o()}},(a.imgBytes>Qd?50:800)+e);return a.unsuspend=t,function(){a.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function Sf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vo(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var Cf=null;function Vo(a,e){a.stylesheets=null,a.unsuspend!==null&&(a.count++,Cf=new Map,e.forEach(pg,a),Cf=null,Sf.call(a))}function pg(a,e){if(!(e.state.loading&4)){var t=Cf.get(a);if(t)var l=t.get(null);else{t=new Map,Cf.set(a,t);for(var u=a.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<u.length;o++){var f=u[o];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(t.set(f.dataset.precedence,f),l=f)}l&&t.set(null,l)}u=e.instance,f=u.getAttribute("data-precedence"),o=t.get(f)||l,o===l&&t.set(null,u),t.set(f,u),this.count++,l=Sf.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),o?o.parentNode.insertBefore(u,o.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(u,a.firstChild)),e.state.loading|=4}}var Mu={$$typeof:Ae,Provider:null,Consumer:null,_currentValue:vt,_currentValue2:vt,_threadCount:0};function mg(a,e,t,l,u,o,f,d,s){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Cd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cd(0),this.hiddenUpdates=Cd(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=o,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function zm(a,e,t,l,u,o,f,d,s,r,L,x){return a=new mg(a,e,t,f,s,r,L,x,d),e=1,o===!0&&(e|=24),o=Ea(3,null,null,e),a.current=o,o.stateNode=a,e=di(),e.refCount++,a.pooledCache=e,e.refCount++,o.memoizedState={element:l,isDehydrated:t,cache:e},ni(o),a}function Em(a){return a?(a=tl,a):tl}function Hm(a,e,t,l,u,o){u=Em(u),l.context===null?l.context=u:l.pendingContext=u,l=$e(e),l.payload={element:t},o=o===void 0?null:o,o!==null&&(l.callback=o),t=at(a,l,e),t!==null&&(Ra(t,a,e),fu(t,a,e))}function Jr(a,e){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var t=a.retryLane;a.retryLane=t!==0&&t<e?t:e}}function zi(a,e){Jr(a,e),(a=a.alternate)&&Jr(a,e)}function Fm(a){if(a.tag===13||a.tag===31){var e=zt(a,67108864);e!==null&&Ra(e,a,67108864),zi(a,67108864)}}function Wr(a){if(a.tag===13||a.tag===31){var e=_a();e=Ys(e);var t=zt(a,e);t!==null&&Ra(t,a,e),zi(a,e)}}var If=!0;function Lg(a,e,t,l){var u=A.T;A.T=null;var o=F.p;try{F.p=2,Ei(a,e,t,l)}finally{F.p=o,A.T=u}}function xg(a,e,t,l){var u=A.T;A.T=null;var o=F.p;try{F.p=8,Ei(a,e,t,l)}finally{F.p=o,A.T=u}}function Ei(a,e,t,l){if(If){var u=_s(l);if(u===null)Zd(a,e,l,yf,t),$r(a,l);else if(gg(u,a,e,t,l))l.stopPropagation();else if($r(a,l),e&4&&-1<hg.indexOf(a)){for(;u!==null;){var o=Al(u);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var f=Ct(o.pendingLanes);if(f!==0){var d=o;for(d.pendingLanes|=2,d.entangledLanes|=2;f;){var s=1<<31-Ga(f);d.entanglements[1]|=s,f&=~s}me(o),(H&6)===0&&(rf=Fa()+500,Hu(0,!1))}}break;case 31:case 13:d=zt(o,2),d!==null&&Ra(d,o,2),qf(),zi(o,2)}if(o=_s(l),o===null&&Zd(a,e,l,yf,t),o===u)break;u=o}u!==null&&l.stopPropagation()}else Zd(a,e,l,null,t)}}function _s(a){return a=Js(a),Hi(a)}var yf=null;function Hi(a){if(yf=null,a=Kt(a),a!==null){var e=Bu(a);if(e===null)a=null;else{var t=e.tag;if(t===13){if(a=oc(e),a!==null)return a;a=null}else if(t===31){if(a=fc(e),a!==null)return a;a=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;a=null}else e!==a&&(a=null)}}return yf=a,null}function Nm(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ux()){case nc:return 2;case rc:return 8;case Ko:case ox:return 32;case cc:return 268435456;default:return 32}default:return 32}}var Ps=!1,lt=null,ut=null,ot=null,Du=new Map,Tu=new Map,Ve=[],hg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $r(a,e){switch(a){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":ut=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":Du.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tu.delete(e.pointerId)}}function jl(a,e,t,l,u,o){return a===null||a.nativeEvent!==o?(a={blockedOn:e,domEventName:t,eventSystemFlags:l,nativeEvent:o,targetContainers:[u]},e!==null&&(e=Al(e),e!==null&&Fm(e)),a):(a.eventSystemFlags|=l,e=a.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),a)}function gg(a,e,t,l,u){switch(e){case"focusin":return lt=jl(lt,a,e,t,l,u),!0;case"dragenter":return ut=jl(ut,a,e,t,l,u),!0;case"mouseover":return ot=jl(ot,a,e,t,l,u),!0;case"pointerover":var o=u.pointerId;return Du.set(o,jl(Du.get(o)||null,a,e,t,l,u)),!0;case"gotpointercapture":return o=u.pointerId,Tu.set(o,jl(Tu.get(o)||null,a,e,t,l,u)),!0}return!1}function Gm(a){var e=Kt(a.target);if(e!==null){var t=Bu(e);if(t!==null){if(e=t.tag,e===13){if(e=oc(t),e!==null){a.blockedOn=e,zn(a.priority,function(){Wr(t)});return}}else if(e===31){if(e=fc(t),e!==null){a.blockedOn=e,zn(a.priority,function(){Wr(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){a.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Zo(a){if(a.blockedOn!==null)return!1;for(var e=a.targetContainers;0<e.length;){var t=_s(a.nativeEvent);if(t===null){t=a.nativeEvent;var l=new t.constructor(t.type,t);ds=l,t.target.dispatchEvent(l),ds=null}else return e=Al(t),e!==null&&Fm(e),a.blockedOn=t,!1;e.shift()}return!0}function ac(a,e,t){Zo(a)&&t.delete(e)}function Sg(){Ps=!1,lt!==null&&Zo(lt)&&(lt=null),ut!==null&&Zo(ut)&&(ut=null),ot!==null&&Zo(ot)&&(ot=null),Du.forEach(ac),Tu.forEach(ac)}function wo(a,e){a.blockedOn===e&&(a.blockedOn=null,Ps||(Ps=!0,ra.unstable_scheduleCallback(ra.unstable_NormalPriority,Sg)))}var ko=null;function ec(a){ko!==a&&(ko=a,ra.unstable_scheduleCallback(ra.unstable_NormalPriority,function(){ko===a&&(ko=null);for(var e=0;e<a.length;e+=3){var t=a[e],l=a[e+1],u=a[e+2];if(typeof l!="function"){if(Hi(l||t)===null)continue;break}var o=Al(t);o!==null&&(a.splice(e,3),e-=3,vs(o,{pending:!0,data:u,method:t.method,action:l},l,u))}}))}function vl(a){function e(s){return wo(s,a)}lt!==null&&wo(lt,a),ut!==null&&wo(ut,a),ot!==null&&wo(ot,a),Du.forEach(e),Tu.forEach(e);for(var t=0;t<Ve.length;t++){var l=Ve[t];l.blockedOn===a&&(l.blockedOn=null)}for(;0<Ve.length&&(t=Ve[0],t.blockedOn===null);)Gm(t),t.blockedOn===null&&Ve.shift();if(t=(a.ownerDocument||a).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var u=t[l],o=t[l+1],f=u[Oa]||null;if(typeof o=="function")f||ec(t);else if(f){var d=null;if(o&&o.hasAttribute("formAction")){if(u=o,f=o[Oa]||null)d=f.formAction;else if(Hi(u)!==null)continue}else d=f.action;typeof d=="function"?t[l+1]=d:(t.splice(l,3),l-=3),ec(t)}}}function _m(){function a(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(f){return u=f})},focusReset:"manual",scroll:"manual"})}function e(){u!==null&&(u(),u=null),l||setTimeout(t,20)}function t(){if(!l&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(t,100),function(){l=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),u!==null&&(u(),u=null)}}}function Fi(a){this._internalRoot=a}Hf.prototype.render=Fi.prototype.render=function(a){var e=this._internalRoot;if(e===null)throw Error(S(409));var t=e.current,l=_a();Hm(t,l,a,e,null,null)};Hf.prototype.unmount=Fi.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var e=a.containerInfo;Hm(a.current,2,null,a,null,null),qf(),e[bl]=null}};function Hf(a){this._internalRoot=a}Hf.prototype.unstable_scheduleHydration=function(a){if(a){var e=hc();a={blockedOn:null,target:a,priority:e};for(var t=0;t<Ve.length&&e!==0&&e<Ve[t].priority;t++);Ve.splice(t,0,a),t===0&&Gm(a)}};var tc=lc.version;if(tc!=="19.2.6")throw Error(S(527,tc,"19.2.6"));F.findDOMNode=function(a){var e=a._reactInternals;if(e===void 0)throw typeof a.render=="function"?Error(S(188)):(a=Object.keys(a).join(","),Error(S(268,a)));return a=JL(e),a=a!==null?dc(a):null,a=a===null?null:a.stateNode,a};var Cg={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Kl.isDisabled&&Kl.supportsFiber))try{wu=Kl.inject(Cg),Na=Kl}catch{}var Kl;Ff.createRoot=function(a,e){if(!uc(a))throw Error(S(299));var t=!1,l="",u=Op,o=Up,f=qp;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError)),e=zm(a,1,!1,null,null,t,l,null,u,o,f,_m),a[bl]=e.current,Oi(a),new Fi(e)};Ff.hydrateRoot=function(a,e,t){if(!uc(a))throw Error(S(299));var l=!1,u="",o=Op,f=Up,d=qp,s=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(u=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.formState!==void 0&&(s=t.formState)),e=zm(a,1,!0,e,t??null,l,u,s,o,f,d,_m),e.context=Em(null),t=e.current,l=_a(),l=Ys(l),u=$e(l),u.callback=null,at(t,u,l),t=l,e.current.lanes=t,Ru(e,t),me(e),a[bl]=e.current,Oi(a),new Hf(e)};Ff.version="19.2.6"});var Zm=de((nS,Vm)=>{"use strict";function Xm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xm)}catch(a){console.error(a)}}Xm(),Vm.exports=Pm()});var eL=de(Vf=>{"use strict";var Zg=Symbol.for("react.transitional.element"),Yg=Symbol.for("react.fragment");function aL(a,e,t){var l=null;if(t!==void 0&&(l=""+t),e.key!==void 0&&(l=""+e.key),"key"in e){t={};for(var u in e)u!=="key"&&(t[u]=e[u])}else t=e;return e=t.ref,{$$typeof:Zg,type:a,key:l,ref:e!==void 0?e:null,props:t}}Vf.Fragment=Yg;Vf.jsx=aL;Vf.jsxs=aL});var fe=de((jC,tL)=>{"use strict";tL.exports=eL()});var cL=ga(Zm(),1);var _=ga(he(),1);var _f=ga(he(),1);var Nf=(...a)=>a.filter((e,t,l)=>!!e&&e.trim()!==""&&l.indexOf(e)===t).join(" ").trim();var Ym=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();var Qm=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,l)=>l?l.toUpperCase():t.toLowerCase());var Ni=a=>{let e=Qm(a);return e.charAt(0).toUpperCase()+e.slice(1)};var Gu=ga(he(),1);var Gf={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};var jm=a=>{for(let e in a)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};var kl=ga(he(),1);var Ig=(0,kl.createContext)({});var Km=()=>(0,kl.useContext)(Ig);var Jm=(0,Gu.forwardRef)(({color:a,size:e,strokeWidth:t,absoluteStrokeWidth:l,className:u="",children:o,iconNode:f,...d},s)=>{let{size:r=24,strokeWidth:L=2,absoluteStrokeWidth:x=!1,color:p="currentColor",className:m=""}=Km()??{},I=l??x?Number(t??L)*24/Number(e??r):t??L;return(0,Gu.createElement)("svg",{ref:s,...Gf,width:e??r??Gf.width,height:e??r??Gf.height,stroke:a??p,strokeWidth:I,className:Nf("lucide",m,u),...!o&&!jm(d)&&{"aria-hidden":"true"},...d},[...f.map(([b,E])=>(0,Gu.createElement)(b,E)),...Array.isArray(o)?o:[o]])});var M=(a,e)=>{let t=(0,_f.forwardRef)(({className:l,...u},o)=>(0,_f.createElement)(Jm,{ref:o,iconNode:e,className:Nf(`lucide-${Ym(Ni(a))}`,`lucide-${a}`,l),...u}));return t.displayName=Ni(a),t};var yg=[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]],_u=M("arrow-up-down",yg);var vg=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],Pu=M("atom",vg);var bg=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],ct=M("book-open",bg);var Ag=[["path",{d:"M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",key:"oz39mx"}]],pt=M("bookmark",Ag);var Mg=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],Xu=M("calculator",Mg);var Dg=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 13h.01",key:"1sbv64"}],["path",{d:"M12 13h.01",key:"y0uutt"}],["path",{d:"M16 13h.01",key:"wip0gl"}],["path",{d:"M8 17h.01",key:"p3bg7i"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M16 17h.01",key:"ql8jdd"}]],Vu=M("calendar-days",Dg);var Tg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Zu=M("check",Tg);var Bg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Yu=M("chevron-down",Bg);var wg=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],Rl=M("clipboard-list",wg);var kg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6h4",key:"135r8i"}]],Qu=M("clock-3",kg);var Rg=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],ju=M("flask-conical",Rg);var Og=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Ku=M("graduation-cap",Og);var Ug=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],mt=M("house",Ug);var qg=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Ju=M("languages",qg);var zg=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Wu=M("layout-grid",zg);var Eg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Le=M("map-pin",Eg);var Hg=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],$u=M("monitor",Hg);var Fg=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],ao=M("rotate-ccw",Fg);var Ng=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],eo=M("search",Ng);var Gg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],to=M("shield-check",Gg);var _g=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Ol=M("sliders-horizontal",_g);var Pg=[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]],Lt=M("user-round",Pg);var Xg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xt=M("x",Xg);var ql=ga(he(),1);var Pf="\u548C\u5E73 \u6CB3\u897F \u6CB3\u4E1C \u6CB3\u5317 \u5357\u5F00 \u7EA2\u6865 \u4E1C\u4E3D \u897F\u9752 \u6D25\u5357 \u5317\u8FB0 \u6B66\u6E05 \u5B9D\u577B \u6EE8\u6D77\u65B0 \u9759\u6D77 \u5B81\u6CB3 \u84DF\u5DDE".split(" ").map(a=>a+"\u533A"),Xf="\u6570\u5B66 \u82F1\u8BED \u7269\u7406 \u8BED\u6587 \u5316\u5B66 \u751F\u7269 \u5386\u53F2 \u5730\u7406 \u653F\u6CBB \u5168\u79D1 \u7F16\u7A0B".split(" ");function ht(a){return/小学|学前|^[一二三四五六1-6]年级/.test(a)?"\u5C0F\u5B66":/初|[七八九789]年级/.test(a)?"\u521D\u4E2D":/高中|高[一二三123]/.test(a)?"\u9AD8\u4E2D":"\u5176\u4ED6"}var Vg=[["\u9AD8\u4E00","\u7269\u7406","\u6CB3\u897F\u533A","\u6587\u5316\u4E2D\u5FC3\u9644\u8FD1","\u4E0A\u95E8","150\u2013180","\u5468\u672B\uFF0C\u6BCF\u5468 1\u20132 \u6B21","2 \u5C0F\u65F6","\u5DE9\u56FA\u529B\u5B66\u57FA\u7840\uFF0C\u5E2E\u52A9\u5B66\u751F\u7406\u6E05\u53D7\u529B\u5206\u6790\u548C\u89E3\u9898\u6B65\u9AA4\u3002"],["\u521D\u4E8C","\u6570\u5B66","\u5357\u5F00\u533A","\u5929\u62D6\u5730\u94C1\u7AD9\u9644\u8FD1","\u4E0A\u95E8","120\u2013150","\u5468\u516D\u4E0B\u5348\uFF0C\u6BCF\u5468 1 \u6B21","2 \u5C0F\u65F6","\u68B3\u7406\u51E0\u4F55\u8BC1\u660E\u601D\u8DEF\uFF0C\u7ED3\u5408\u8BFE\u5185\u8FDB\u5EA6\u8BB2\u89E3\u5178\u578B\u4F8B\u9898\u3002"],["\u4E94\u5E74\u7EA7","\u82F1\u8BED","\u548C\u5E73\u533A","\u5C0F\u767D\u697C\u9644\u8FD1","\u7EBF\u4E0A","100\u2013120","\u5468\u4E09\u3001\u5468\u4E94\u665A","1 \u5C0F\u65F6","\u901A\u8FC7\u5206\u7EA7\u9605\u8BFB\u548C\u65E5\u5E38\u5BF9\u8BDD\u7EC3\u4E60\uFF0C\u63D0\u5347\u53E3\u8BED\u8868\u8FBE\u3002"],["\u9AD8\u4E8C","\u5316\u5B66","\u6D25\u5357\u533A","\u54B8\u6C34\u6CBD\u9644\u8FD1","\u4E0A\u95E8","160","\u5468\u65E5\u4E0B\u5348","2 \u5C0F\u65F6","\u590D\u4E60\u5316\u5B66\u5E73\u8861\uFF0C\u8BAD\u7EC3\u8BA1\u7B97\u548C\u5B9E\u9A8C\u5206\u6790\u3002"]],Wm=Vg.map(([a,e,t,l,u,o,f,d,s],r)=>({grade:a,subject:e,district:t,area:l,mode:u,rate:o,schedule:f,duration:d,summary:s,contact:"",id:"demo-"+r,state:"open",updated:0,version:0,demo:!0}));var Ul={subject:"",grade:"",district:"",mode:"",minRate:""};function $m(a,e){let t=o=>o.normalize("NFKC").toLowerCase().replace(/星期|礼拜/g,"\u5468").replace(/线上授课|网课|在线/g,"\u7EBF\u4E0A").replace(/线下|面授/g,"\u4E0A\u95E8"),l=t(e).trim().split(/[\s,，、;；]+/).filter(Boolean),u=t([a.id,a.grade,ht(a.grade),a.subject,a.district,a.area,a.schedule,a.duration,a.summary,a.mode,a.rate,a.grade+a.subject,/周[六日天]/.test(a.schedule)?"\u5468\u672B":""].join(" "));return l.every(o=>{let f=o.match(/^(?:时薪)?(>=|≥|<=|≤|>|<)(\d+)$/);if(!f)return u.includes(o);let d=parseFloat(a.rate),s=Number(f[2]);return Number.isFinite(d)?f[1]===">"?d>s:f[1]==="<"?d<s:[">=","\u2265"].includes(f[1])?d>=s:d<=s:!1})}var ha=ga(fe(),1);function lL({prefs:a,onSave:e,onClose:t}){let l=(0,ql.useRef)(null),[u,o]=(0,ql.useState)(a);(0,ql.useEffect)(()=>{l.current?.showModal()},[]);let f=[["subject","\u8F85\u5BFC\u79D1\u76EE",Xf],["grade","\u5E74\u7EA7\u6216\u5B66\u6BB5",["\u5C0F\u5B66","\u521D\u4E2D","\u9AD8\u4E2D",...["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"].map(d=>d+"\u5E74\u7EA7"),"\u521D\u4E00","\u521D\u4E8C","\u521D\u4E09","\u9AD8\u4E00","\u9AD8\u4E8C","\u9AD8\u4E09"]],["district","\u6388\u8BFE\u533A\u57DF",Pf],["mode","\u6388\u8BFE\u65B9\u5F0F",["\u4E0A\u95E8","\u7EBF\u4E0A"]]];return(0,ha.jsx)("dialog",{"aria-labelledby":"prefs-title",ref:l,onCancel:t,onClick:d=>{d.target===d.currentTarget&&t()},children:(0,ha.jsxs)("form",{className:"dialoginner prefsheet",onSubmit:d=>{d.preventDefault(),e(u)},children:[(0,ha.jsx)("button",{type:"button",className:"x","aria-label":"\u5173\u95ED\u504F\u597D\u8BBE\u7F6E",onClick:t,children:(0,ha.jsx)(xt,{})}),(0,ha.jsx)("h2",{id:"prefs-title",children:"\u63A8\u8350\u504F\u597D"}),(0,ha.jsx)("p",{className:"hint",children:"\u9009\u597D\u4F60\u60F3\u6559\u7684\u5355\u5B50\uFF0C\u5339\u914D\u7684\u6392\u5728\u524D\u9762\u3002\u8BBE\u7F6E\u4FDD\u5B58\u5728\u5F53\u524D\u6D4F\u89C8\u5668\u3002"}),(0,ha.jsxs)("div",{className:"fieldgrid",children:[f.map(([d,s,r])=>(0,ha.jsxs)("label",{children:[s,(0,ha.jsxs)("select",{value:u[d],onChange:L=>o({...u,[d]:L.target.value}),children:[(0,ha.jsx)("option",{value:"",children:"\u4E0D\u9650"}),Array.from(new Set([...r,...u[d]?[u[d]]:[]])).map(L=>(0,ha.jsx)("option",{children:L},L))]})]},d)),(0,ha.jsxs)("label",{className:"wide",children:["\u6700\u4F4E\u65F6\u85AA\uFF08\u5143/\u5C0F\u65F6\uFF09",(0,ha.jsx)("input",{type:"number",min:"0",max:"9999",step:"1",placeholder:"\u4E0D\u9650",value:u.minRate,onChange:d=>o({...u,minRate:d.target.value})})]})]}),(0,ha.jsxs)("div",{className:"actions",children:[(0,ha.jsx)("button",{className:"primary",children:"\u4FDD\u5B58\u504F\u597D"}),(0,ha.jsx)("button",{type:"button",className:"textbtn",onClick:()=>{o(Ul),e(null)},children:"\u6062\u590D\u9ED8\u8BA4\u63A8\u8350"})]})]})})}function Gi(a){if(!a||typeof a!="object")return null;let e={...Ul};for(let t of Object.keys(e)){let l=a[t];if(typeof l!="string"||l.length>100)return null;e[t]=l.trim()}return e}function uL(a,e,t){let l=[],u=0;function o(d,s,r,L){d&&(u+=s?r:-r,s&&l.push(L))}o(e.subject,a.subject.includes(e.subject),10,e.subject+"\u79D1\u76EE\u5339\u914D"),o(e.grade,[a.grade,ht(a.grade)].includes(e.grade),5,e.grade+"\u5B66\u6BB5\u5339\u914D"),o(e.district,a.district===e.district,5,e.district+"\u533A\u57DF\u5339\u914D"),o(e.mode,a.mode===e.mode,5,e.mode+"\u6388\u8BFE"),o(e.minRate,parseFloat(a.rate)>=Number(e.minRate),7,"\u8FBE\u5230\u671F\u671B\u65F6\u85AA");let f=t.find(d=>d.id!==a.id&&d.subject===a.subject&&d.demo===a.demo);return f&&(u+=2,e.subject||l.push("\u4E0E\u4F60\u6536\u85CF\u7684"+a.subject+"\u5355\u76F8\u4F3C"),ht(f.grade)===ht(a.grade)&&u++),{score:u,reasons:u>0?l.slice(0,2):[]}}var Ee=ga(he(),1);var ca=ga(fe(),1),Qg={origin:"",mode:"transit",minutes:{}},Zf=(a,e,t)=>JSON.stringify([a.district,a.area,e.trim(),t]);function oL(){let[a,e]=(0,Ee.useState)(Qg);(0,Ee.useEffect)(()=>{try{let l=JSON.parse(localStorage.getItem("jin-routes")||"null");l&&typeof l.origin=="string"&&l.minutes&&typeof l.minutes=="object"&&["transit","walking","driving"].includes(l.mode)&&e(l)}catch{}},[]);function t(l){e(l);try{localStorage.setItem("jin-routes",JSON.stringify(l))}catch{}}return[a,t]}function Yf(a,e){if(a.mode==="\u7EBF\u4E0A")return"\u65E0\u9700\u901A\u52E4";let t=e.minutes[Zf(a,e.origin,e.mode)];return t?"\u7EA6 "+t+" \u5206\u949F \xB7 \u5DF2\u8BB0\u5F55":""}function fL({j:a,r:e,save:t}){let[l,u]=(0,Ee.useState)(e.origin),[o,f]=(0,Ee.useState)(e.mode),[d,s]=(0,Ee.useState)(""),[r,L]=(0,Ee.useState)(""),x=Zf(a,l,o);if((0,Ee.useEffect)(()=>{s(String(e.minutes[x]||"")),L("")},[x,e.minutes]),a.mode==="\u7EBF\u4E0A")return(0,ca.jsx)("p",{className:"hint",children:"\u7EBF\u4E0A\u6388\u8BFE\uFF0C\u65E0\u9700\u901A\u52E4\u3002"});if(!a.area)return(0,ca.jsx)("p",{className:"hint",children:"\u8865\u5145\u9644\u8FD1\u5730\u6807\u540E\u53EF\u67E5\u8BE2\u8DEF\u7EBF\u3002"});let p="https://api.map.baidu.com/direction?"+new URLSearchParams({origin:l.trim(),destination:a.district+a.area.replace(/附近$/,""),region:"\u5929\u6D25",mode:o,output:"html",coord_type:"bd09ll",src:"webapp.jinke.tutor"}).toString();return(0,ca.jsxs)("details",{className:"travel",children:[(0,ca.jsxs)("summary",{children:[(0,ca.jsx)(Le,{size:15}),"\u6211\u7684\u901A\u52E4 ",Yf(a,e)]}),(0,ca.jsxs)("label",{children:["\u5E38\u7528\u51FA\u53D1\u5730",(0,ca.jsx)("input",{maxLength:100,placeholder:"\u4F8B\u5982\uFF1A\u5929\u6D25\u5927\u5B66\u5317\u6D0B\u56ED\u6821\u533A\u4E1C\u95E8",value:l,onChange:m=>u(m.target.value)})]}),(0,ca.jsxs)("label",{children:["\u51FA\u884C\u65B9\u5F0F",(0,ca.jsxs)("select",{value:o,onChange:m=>f(m.target.value),children:[(0,ca.jsx)("option",{value:"transit",children:"\u516C\u5171\u4EA4\u901A"}),(0,ca.jsx)("option",{value:"walking",children:"\u6B65\u884C"}),(0,ca.jsx)("option",{value:"driving",children:"\u9A7E\u8F66"})]})]}),l.trim()&&(0,ca.jsx)("a",{className:"secondary",href:p,target:"_blank",rel:"noreferrer",onClick:()=>t({...e,origin:l.trim(),mode:o}),children:"\u5728\u767E\u5EA6\u5730\u56FE\u67E5\u770B\u8DEF\u7EBF\u548C\u9884\u8BA1\u7528\u65F6"}),(0,ca.jsxs)("label",{children:["\u8BB0\u5F55\u5730\u56FE\u7ED9\u51FA\u7684\u5355\u7A0B\u5206\u949F\u6570",(0,ca.jsx)("input",{type:"number",min:"1",max:"999",value:d,onChange:m=>s(m.target.value),placeholder:"\u4F8B\u5982 35"})]}),(0,ca.jsx)("button",{className:"secondary",disabled:!l.trim()||!/^\d{1,3}$/.test(d)||+d<1,onClick:()=>{t({origin:l.trim(),mode:o,minutes:{...e.minutes,[x]:+d}}),L("\u5DF2\u4FDD\u5B58")},children:"\u4FDD\u5B58\u901A\u52E4\u65F6\u95F4"}),(0,ca.jsxs)("p",{className:"hint",children:[r||"\u4EC5\u4FDD\u5B58\u5728\u672C\u8BBE\u5907\u3002\u6253\u5F00\u5730\u56FE\u65F6\u4F1A\u4F20\u5165\u4E0A\u65B9\u8D77\u7EC8\u70B9\u3002"," "]})]})}var pa=ga(fe(),1);function dL({tab:a="board",onTab:e,service:t="",home:l="/"}){return(0,pa.jsx)("header",{className:"top",children:(0,pa.jsxs)("div",{className:"bar",children:[(0,pa.jsxs)("a",{href:l,className:"brand",children:[(0,pa.jsx)("span",{className:"brandicon",children:(0,pa.jsx)(ct,{size:24,strokeWidth:2.3})}),"\u6D25\u8BFE\u5BB6\u6559"]}),(0,pa.jsx)("nav",{"aria-label":"\u4E3B\u5BFC\u822A",children:[["board","\u5BB6\u6559\u5927\u5385",Wu],["saved","\u6211\u7684\u6536\u85CF",pt]].map(([u,o,f])=>{let d=f;return(0,pa.jsxs)("a",{className:a===u?"navitem active":"navitem",href:u==="board"?l:l+"#saved",onClick:e?s=>{s.preventDefault(),e(String(u))}:void 0,children:[(0,pa.jsx)(d,{size:17}),String(o)]},String(u))})}),(0,pa.jsxs)("a",{className:"teacherlink "+(a==="teacher"?"here":""),href:t+"/teacher",children:[(0,pa.jsx)(Lt,{size:16}),"\u8001\u5E08\u4E2D\u5FC3"]}),(0,pa.jsxs)("a",{className:"adminlink "+(a==="admin"?"here":""),href:t+"/admin",children:[(0,pa.jsx)(to,{size:16}),"\u7BA1\u7406\u540E\u53F0"]})]})})}function sL({line:a=""}={}){return(0,pa.jsxs)("footer",{children:[(0,pa.jsxs)("span",{children:[(0,pa.jsx)(ct,{size:15}),"\u6D25\u8BFE\u5BB6\u6559"]}),(0,pa.jsxs)("span",{children:[(0,pa.jsx)(Le,{size:14}),"\u5929\u6D25",a&&" \xB7 "+a]})]})}var g=ga(fe(),1),jg=a=>a.includes("\u7269\u7406")?Pu:a.includes("\u6570\u5B66")?Xu:a.includes("\u82F1\u8BED")?Ju:a.includes("\u5316\u5B66")?ju:ct,iL=a=>a.includes("\u6570\u5B66")?"mint":a.includes("\u82F1\u8BED")?"apricot":a.includes("\u5316\u5B66")?"lilac":"sky",Kg=a=>new Date(a).toLocaleDateString("zh-CN",{month:"numeric",day:"numeric",timeZone:"Asia/Shanghai"});function nL({job:a}){return(0,g.jsx)("span",{className:"pay",children:a.rate?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("small",{children:"\xA5"}),a.rate.replace(/[-~～—]/g,"\u2013"),(0,g.jsx)("em",{children:"/\u5C0F\u65F6"})]}):"\u85AA\u8D44\u9762\u8BAE"})}function _i({value:a,onChange:e,children:t,label:l}){return(0,g.jsxs)("div",{className:"select",children:[(0,g.jsx)("select",{"aria-label":l,value:a,onChange:u=>e(u.target.value),children:t}),(0,g.jsx)(Yu,{size:15})]})}function Pi({service:a="",home:e="/",firstJobs:t,cachedAt:l=0,line:u=""}={}){let[o,f]=(0,_.useState)(l),[d,s]=(0,_.useState)(t||[]),[r,L]=(0,_.useState)(!t),[x,p]=(0,_.useState)(!1),[m,I]=(0,_.useState)(0),[b,E]=(0,_.useState)("board"),[n,i]=(0,_.useState)([]),[c,h]=(0,_.useState)(""),[v,U]=(0,_.useState)(""),[y,D]=(0,_.useState)(""),[B,q]=(0,_.useState)("\u5168\u90E8"),[Va,zl]=(0,_.useState)(""),[El,Xi]=(0,_.useState)("recommended"),[Vi,LL]=(0,_.useState)(!1),[Y,Hl]=(0,_.useState)(null),[xL,Qf]=(0,_.useState)(!1),[lo,Zi]=(0,_.useState)(!1),[hL,Yi]=(0,_.useState)(null),[gL,SL]=(0,_.useState)(null),jf=hL||gL||Ul;(0,_.useEffect)(()=>{try{Yi(Gi(JSON.parse(localStorage.getItem("jinke-recommend-v1")||"null")))}catch{}if(a&&new URL(a,location.href).origin!==location.origin)return;let C=new AbortController;return fetch("/api/recommendation-preferences",{cache:"no-store",signal:C.signal}).then(async aa=>{if(!aa.ok)return;let ia=await aa.json();C.signal.aborted||SL(Gi(ia.prefs))}).catch(()=>{}),()=>C.abort()},[a]);function CL(C){Yi(C);try{C?localStorage.setItem("jinke-recommend-v1",JSON.stringify(C)):localStorage.removeItem("jinke-recommend-v1")}catch{}Xi("recommended"),Qf(!1)}let[Ht,IL]=oL(),Kf=(0,_.useRef)(null);(0,_.useEffect)(()=>{let C=()=>E(location.hash==="#saved"?"saved":"board");C(),window.addEventListener("hashchange",C);try{let aa=JSON.parse(localStorage.getItem("jinke-saved-v1")||"[]");Array.isArray(aa)&&i(aa.filter(ia=>typeof ia=="string"))}catch{}return()=>window.removeEventListener("hashchange",C)},[]),(0,_.useEffect)(()=>{let C=new AbortController,aa=!1;async function ia(Wi=!1){if(!aa){aa=!0,Wi&&(L(!0),p(!1));try{let $i=await fetch(a+"/api/jobs",{credentials:"omit",cache:"no-store",signal:C.signal});if(!$i.ok)throw Error();let an=await $i.json();C.signal.aborted||(s(an.jobs),f(0),p(!1),Hl(so=>so&&!so.demo?an.jobs.find(vL=>vL.id===so.id)||null:so))}catch{Wi&&!C.signal.aborted&&p(!0)}finally{aa=!1,C.signal.aborted||L(!1)}}}let Fl=()=>{document.visibilityState==="visible"&&ia()};!t||m?ia(!0):l&&ia(),window.addEventListener("focus",Fl),document.addEventListener("visibilitychange",Fl);let yL=window.setInterval(Fl,45e3);return()=>{C.abort(),clearInterval(yL),window.removeEventListener("focus",Fl),document.removeEventListener("visibilitychange",Fl)}},[m,a,t,l]),(0,_.useEffect)(()=>{Y?Kf.current?.showModal():Kf.current?.close()},[Y]);function Qi(C){location.hash=C==="saved"?"saved":"",E(C),Jf()}function Jf(){h(""),U(""),D(""),q("\u5168\u90E8"),zl("")}function ji(C){let aa=n.includes(C)?n.filter(ia=>ia!==C):[...n,C];i(aa);try{localStorage.setItem("jinke-saved-v1",JSON.stringify(aa))}catch{}}let uo=!r&&!x&&!d.length,oo=uo&&lo?Wm:d,fo=(0,_.useMemo)(()=>{let C=new Set(n),aa=oo.filter(ia=>C.has(ia.id));return new Map(oo.map(ia=>[ia.id,uL(ia,jf,aa)]))},[oo,n,jf]),Wf=oo.filter(C=>b==="board"||n.includes(C.id)),Ki=Va.trim().toLowerCase(),$f=Wf.filter(C=>(!c||C.subject.includes(c))&&(!v||C.district===v)&&(!y||C.mode===y)&&(B==="\u5168\u90E8"||B===ht(C.grade))&&$m(C,Ki)).sort((C,aa)=>El==="commute"?Ji(C)-Ji(aa):El==="pay"?parseFloat(aa.rate||"0")-parseFloat(C.rate||"0"):(El==="recommended"?fo.get(aa.id).score-fo.get(C.id).score:0)||aa.updated-C.updated);function Ji(C){return C.mode==="\u7EBF\u4E0A"?0:Ht.minutes[Zf(C,Ht.origin,Ht.mode)]||1e5}let ad=!!(c||v||y||Ki||B!=="\u5168\u90E8");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(dL,{tab:b,onTab:Qi,service:a,home:e}),(0,g.jsx)("main",{className:"main boardmain",children:(0,g.jsxs)("div",{className:"workspace",children:[(0,g.jsxs)("aside",{className:"filterbox "+(Vi?"expanded":""),children:[(0,g.jsxs)("div",{className:"filtertitle",children:[(0,g.jsxs)("h2",{children:[(0,g.jsx)(Ol,{size:19}),"\u7B5B\u9009\u6761\u4EF6"]}),(0,g.jsxs)("button",{className:"textbtn",onClick:Jf,children:[(0,g.jsx)(ao,{size:14}),"\u91CD\u7F6E"]})]}),(0,g.jsxs)("div",{className:"filterbody",children:[(0,g.jsx)("label",{children:"\u8F85\u5BFC\u79D1\u76EE"}),(0,g.jsxs)(_i,{label:"\u8F85\u5BFC\u79D1\u76EE",value:c,onChange:h,children:[(0,g.jsx)("option",{value:"",children:"\u5168\u90E8\u79D1\u76EE"}),Array.from(new Set([...Xf,...Wf.map(C=>C.subject)])).map(C=>(0,g.jsx)("option",{children:C},C))]}),(0,g.jsx)("label",{children:"\u6388\u8BFE\u533A\u57DF"}),(0,g.jsxs)(_i,{label:"\u6388\u8BFE\u533A\u57DF",value:v,onChange:U,children:[(0,g.jsx)("option",{value:"",children:"\u5168\u90E8\u533A\u57DF"}),Array.from(new Set([...Pf,...Wf.map(C=>C.district).filter(Boolean)])).map(C=>(0,g.jsx)("option",{children:C},C))]}),(0,g.jsx)("label",{children:"\u6388\u8BFE\u65B9\u5F0F"}),(0,g.jsx)("div",{className:"radios",children:["","\u4E0A\u95E8","\u7EBF\u4E0A"].map(C=>(0,g.jsxs)("button",{"aria-pressed":C===y,onClick:()=>D(C),children:[(0,g.jsx)("i",{className:y===C?"radio checked":"radio"}),C?C+"\u6388\u8BFE":"\u4E0D\u9650\u65B9\u5F0F"]},C))})]})]}),(0,g.jsxs)("section",{className:"list",children:[(0,g.jsxs)("div",{className:"listheading",children:[(0,g.jsxs)("h1",{children:[b==="saved"?"\u6211\u7684\u6536\u85CF":lo&&uo?"\u5BB6\u6559\u5355\u793A\u4F8B":"\u62DB\u52DF\u4E2D\u7684\u5BB6\u6559",(0,g.jsx)("span",{className:"count",children:r||x?"\u2026":$f.length})]}),(0,g.jsxs)("div",{className:"sort",children:[(0,g.jsx)("button",{className:"prefbtn",onClick:()=>Qf(!0),children:"\u63A8\u8350\u504F\u597D"}),(0,g.jsx)(_u,{size:14}),(0,g.jsxs)(_i,{label:"\u6392\u5E8F\u65B9\u5F0F",value:El,onChange:Xi,children:[(0,g.jsx)("option",{value:"recommended",children:"\u4E3A\u6211\u63A8\u8350"}),(0,g.jsx)("option",{value:"new",children:"\u6700\u65B0\u53D1\u5E03"}),(0,g.jsx)("option",{value:"pay",children:"\u65F6\u85AA\u4F18\u5148"}),(0,g.jsx)("option",{value:"commute",children:"\u901A\u52E4\u8F83\u77ED\u4F18\u5148"})]})]})]}),(0,g.jsxs)("div",{className:"toolbar",children:[(0,g.jsx)("div",{className:"tabs",children:["\u5168\u90E8","\u5C0F\u5B66","\u521D\u4E2D","\u9AD8\u4E2D"].map(C=>(0,g.jsx)("button",{onClick:()=>q(C),"aria-pressed":C===B,className:C===B?"selected":"",children:C},C))}),(0,g.jsxs)("div",{className:"search",children:[(0,g.jsx)(eo,{size:16}),(0,g.jsx)("input",{"aria-label":"\u641C\u7D22\u5BB6\u6559",title:"\u7528\u7A7A\u683C\u7EC4\u5408\u6761\u4EF6\uFF0C\u4F8B\u5982\uFF1A\u9AD8\u4E2D \u7269\u7406 \u6CB3\u897F \u2265150",placeholder:"\u79D1\u76EE\u3001\u533A\u57DF\u3001\u65F6\u95F4\u6216\u65F6\u85AA",value:Va,onChange:C=>zl(C.target.value)}),Va&&(0,g.jsx)("button",{"aria-label":"\u6E05\u9664\u641C\u7D22",onClick:()=>zl(""),children:(0,g.jsx)(xt,{size:14})})]}),(0,g.jsxs)("button",{className:"mobilefilter",onClick:()=>LL(!Vi),children:[(0,g.jsx)(Ol,{size:15}),"\u7B5B\u9009"]})]}),o>0&&(0,g.jsxs)("p",{className:"notice",role:"status",children:["\u6B63\u5728\u663E\u793A\u516C\u5F00\u6458\u8981\uFF0C\u6700\u8FD1\u540C\u6B65\u4E8E",new Date(o).toLocaleString("zh-CN",{timeZone:"Asia/Shanghai",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}),"\uFF08\u5317\u4EAC\u65F6\u95F4\uFF09\u3002\u540D\u989D\u548C\u8BE6\u60C5\u8BF7\u5230\u4E3B\u7AD9\u6838\u5B9E\u3002"]}),uo&&b==="board"&&lo&&(0,g.jsxs)("p",{className:"demo-note",children:["\u4EE5\u4E0B\u4EC5\u4F9B\u4F53\u9A8C\u3002 ",(0,g.jsx)("button",{className:"inlinelink",onClick:()=>Zi(!1),children:"\u6536\u8D77\u793A\u4F8B"})]}),r||x?(0,g.jsx)("div",{className:"empty",children:x?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("p",{children:"\u5BB6\u6559\u4FE1\u606F\u6682\u65F6\u672A\u80FD\u52A0\u8F7D"}),(0,g.jsx)("button",{onClick:()=>I(m+1),children:"\u91CD\u65B0\u52A0\u8F7D"})]}):"\u6B63\u5728\u52A0\u8F7D\u5BB6\u6559\u4FE1\u606F\u2026"}):uo&&!lo&&b==="board"?(0,g.jsxs)("div",{className:"empty",children:[(0,g.jsx)(Rl,{size:28}),(0,g.jsx)("h3",{children:o?"\u4E0A\u6B21\u540C\u6B65\u65F6\u6682\u65E0\u62DB\u52DF":"\u6682\u65E0\u6B63\u5728\u62DB\u52DF\u7684\u5BB6\u6559"}),(0,g.jsx)("p",{children:"\u65B0\u5355\u53D1\u5E03\u540E\uFF0C\u4F1A\u6309\u4F60\u7684\u504F\u597D\u6392\u5217\u3002"}),(0,g.jsx)("button",{onClick:()=>Zi(!0),children:"\u67E5\u770B\u5BB6\u6559\u5355\u793A\u4F8B"})]}):$f.length?$f.map(C=>{let aa=jg(C.subject),ia=n.includes(C.id);return(0,g.jsxs)("article",{className:"card",children:[(0,g.jsxs)("div",{className:"cardtop",children:[(0,g.jsx)("div",{className:"subjecticon "+iL(C.subject),children:(0,g.jsx)(aa,{size:27,strokeWidth:1.8})}),(0,g.jsxs)("div",{className:"cardname",children:[(0,g.jsxs)("div",{className:"jobtitle",children:[(0,g.jsxs)("button",{onClick:()=>Hl(C),children:[C.grade,C.subject,"\u5BB6\u6559"]}),(0,g.jsxs)("span",{className:"status "+(C.demo?"example":""),children:[!C.demo&&(0,g.jsx)("i",{}),C.demo?"\u793A\u4F8B":"\u62DB\u52DF\u4E2D"]})]}),(0,g.jsx)("div",{className:"meta",children:(0,g.jsxs)("span",{children:[(0,g.jsx)(Le,{}),[C.district,C.area].filter(Boolean).join(" \xB7 ")||"\u5730\u70B9\u5F85\u5B9A"]})})]}),(0,g.jsx)("div",{className:"price",children:(0,g.jsx)(nL,{job:C})})]}),(0,g.jsxs)("div",{className:"schedule",children:[(0,g.jsxs)("span",{children:[(0,g.jsx)(Vu,{}),C.schedule||"\u65F6\u95F4\u9762\u8BAE"]}),(0,g.jsxs)("span",{children:[(0,g.jsx)(Qu,{}),C.duration||"\u65F6\u957F\u9762\u8BAE"]}),Yf(C,Ht)&&(0,g.jsxs)("span",{children:[(0,g.jsx)(Le,{}),Yf(C,Ht)]})]}),(0,g.jsxs)("div",{className:"cardbottom",children:[(0,g.jsxs)("div",{className:"pills",children:[(0,g.jsxs)("span",{className:"mode",children:[C.mode==="\u7EBF\u4E0A"?(0,g.jsx)($u,{}):(0,g.jsx)(mt,{}),C.mode||"\u65B9\u5F0F\u9762\u8BAE",C.mode?"\u6388\u8BFE":""]}),El==="recommended"&&fo.get(C.id).reasons.length>0&&(0,g.jsx)("small",{className:"matchreason",children:fo.get(C.id).reasons.join(" \xB7 ")})]}),(0,g.jsx)("button",{className:"save "+(ia?"issaved":""),"aria-label":ia?"\u53D6\u6D88\u6536\u85CF":"\u6536\u85CF"+C.grade+C.subject,"aria-pressed":ia,onClick:()=>ji(C.id),children:(0,g.jsx)(pt,{size:18,fill:ia?"currentColor":"none"})})]})]},C.id)}):(0,g.jsxs)("div",{className:"empty",children:[(0,g.jsx)(Rl,{size:32}),(0,g.jsx)("h3",{children:ad?"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5BB6\u6559":"\u6682\u65F6\u6CA1\u6709\u6536\u85CF"}),(0,g.jsx)("button",{onClick:ad?Jf:()=>Qi("board"),children:ad?"\u6E05\u9664\u7B5B\u9009":"\u6D4F\u89C8\u5BB6\u6559\u5927\u5385"})]})]})]})}),(0,g.jsx)(sL,{line:u}),xL&&(0,g.jsx)(lL,{prefs:jf,onSave:CL,onClose:()=>Qf(!1)}),(0,g.jsx)("dialog",{"aria-label":"\u5BB6\u6559\u5355\u8BE6\u60C5",ref:Kf,onCancel:()=>Hl(null),onClick:C=>{C.target===C.currentTarget&&Hl(null)},children:Y&&(0,g.jsxs)("div",{className:"dialoginner",children:[(0,g.jsx)("button",{className:"x","aria-label":"\u5173\u95ED\u8BE6\u60C5",onClick:()=>Hl(null),children:(0,g.jsx)(xt,{})}),(0,g.jsx)("div",{className:"subjecticon "+iL(Y.subject),children:(0,g.jsx)(Ku,{})}),(0,g.jsxs)("h2",{children:[Y.grade,Y.subject,"\u5BB6\u6559"]}),(0,g.jsx)(nL,{job:Y}),(0,g.jsx)("dl",{children:Object.entries({\u72B6\u6001:Y.demo?"\u793A\u4F8B\u5BB6\u6559\u5355":"\u6B63\u5728\u62DB\u52DF",\u5730\u70B9:[Y.district,Y.area].filter(Boolean).join(" \xB7 "),\u6388\u8BFE\u65B9\u5F0F:Y.mode,\u4E0A\u8BFE\u65F6\u95F4:Y.schedule,\u5355\u6B21\u65F6\u957F:Y.duration,\u8F85\u5BFC\u9700\u6C42:Y.summary,\u62A5\u540D\u65B9\u5F0F:Y.demo?"\u6B64\u5355\u4EC5\u7528\u4E8E\u5C55\u793A\uFF0C\u65E0\u9700\u62A5\u540D\u3002":Y.contact||"\u8BF7\u4F7F\u7528\u4E0B\u65B9\u6309\u94AE\u5728\u672C\u7AD9\u6295\u9012\u7B80\u5386\u3002",\u6700\u8FD1\u66F4\u65B0:Y.updated?Kg(Y.updated):""}).filter(([,C])=>C).map(([C,aa])=>(0,g.jsxs)("div",{children:[(0,g.jsx)("dt",{children:C}),(0,g.jsx)("dd",{children:aa})]},C))}),(0,g.jsx)(fL,{j:Y,r:Ht,save:IL},Y.id),!Y.demo&&(0,g.jsx)("a",{className:"primary applylink",href:a+"/teacher?job="+encodeURIComponent(Y.id),children:o?"\u5230\u4E3B\u7AD9\u6838\u5B9E\u5E76\u6295\u9012":"\u7528\u6211\u7684\u7B80\u5386\u6295\u9012"}),(0,g.jsxs)("button",{className:"secondary",onClick:()=>ji(Y.id),children:[n.includes(Y.id)?(0,g.jsx)(Zu,{size:16}):(0,g.jsx)(pt,{size:16})," ",n.includes(Y.id)?"\u5DF2\u6536\u85CF \xB7 \u53D6\u6D88\u6536\u85CF":"\u6536\u85CF\u5BB6\u6559\u5355"]})]})})]})}var rL=`:root {
  --ink: #182b42;
  --blue: #2463db;
  --muted: #56677a;
  --line: #dce4ed;
  --bg: #f5f8fc;
}
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font:
    16px/1.55 "Inter",
    "PingFang SC",
    "Microsoft YaHei",
    "Noto Sans CJK SC",
    system-ui,
    sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
button,
input,
select,
textarea {
  font: inherit;
  color: inherit;
}
button {
  cursor: pointer;
  background: none;
  border: none;
}
button:disabled {
  opacity: 0.55;
  cursor: wait;
}
button:focus-visible,
a:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid #77aaff;
  outline-offset: 2px;
}
button,
a,
select {
  touch-action: manipulation;
}
h1,
h2,
h3,
p {
  margin: 0;
}
.top {
  background: white;
  border-bottom: 1px solid var(--line);
}
.bar,
.main,
footer {
  width: min(1192px, calc(100% - 88px));
  margin: auto;
}
.bar {
  min-height: 72px;
  display: flex;
  align-items: center;
  gap: 52px;
}
.brand,
.brandicon,
.navitem,
.adminlink,
.location,
.filtertitle,
.filtertitle h2,
.textbtn,
.listheading,
.listheading h1,
.sort,
.search,
.schedule,
.schedule span,
.meta span,
.cardbottom,
.pills,
.pills span,
.save,
.primary,
.secondary,
.panel h2,
.mobilefilter,
.actions,
.managetabs,
footer,
footer span {
  display: flex;
  align-items: center;
}
.brand {
  gap: 10px;
  font-size: 23px;
  letter-spacing: -0.7px;
  font-weight: 800;
  white-space: nowrap;
}
.brandicon {
  width: 37px;
  height: 37px;
  justify-content: center;
  border-radius: 11px;
  color: white;
  background: #2464ea;
  box-shadow: inset 0 -4px 0 #164fd01c;
}
.bar nav {
  display: flex;
  align-self: stretch;
  gap: 27px;
}
.navitem {
  gap: 7px;
  font-size: 15px;
  color: var(--muted);
  font-weight: 550;
}
.navitem.active {
  color: var(--blue);
  position: relative;
}
.navitem.active:after {
  content: "";
  position: absolute;
  bottom: 0;
  height: 3px;
  left: 7px;
  right: 7px;
  background: #316de7;
  border-radius: 3px 3px 0 0;
}
.adminlink {
  margin-left: auto;
  font-size: 14px;
  gap: 7px;
  padding: 7px 13px;
  border: 1px solid #d4deeb;
  background: #fff;
  border-radius: 7px;
  white-space: nowrap;
}
.adminlink:hover,
.adminlink.here {
  color: var(--blue);
  border-color: #b9cdf7;
}



.location {
  display: inline-flex;
  gap: 5px;
  font-size: 13px;
  font-weight: 650;
  color: #285ea0;
  background: #fff9;
  border: 1px solid #c4daf3;
  border-radius: 24px;
  padding: 4px 11px;
}



.workspace {
  display: grid;
  grid-template-columns: minmax(205px, 23%) minmax(0, 1fr);
  gap: 28px;
  align-items: start;
}
.filterbox,
.card,
.panel,
.gate,
.empty {
  background: white;
  border: 1px solid var(--line);
  border-radius: 13px;
}
.filterbox {
  padding: 20px 22px 24px;
}
.filtertitle,
.listheading,
.cardbottom,
footer,
.managerrow,
.adminhead {
  justify-content: space-between;
}
.filtertitle h2,
.listheading h1,
.panel h2 {
  gap: 9px;
  font-size: 18px;
  letter-spacing: -0.4px;
}
.filtertitle h2 svg {
  color: var(--blue);
}
.textbtn {
  color: var(--muted);
  gap: 4px;
  font-size: 13px;
  padding: 4px;
}
.textbtn:hover {
  color: var(--blue);
}
.filterbody {
  border-top: 1px solid #e8edf3;
  margin-top: 16px;
}
.filterbody > label {
  display: block;
  font-size: 14px;
  font-weight: 650;
  margin: 19px 0 8px;
}
.select {
  position: relative;
}
.select select {
  width: 100%;
  padding: 9px 29px 9px 12px;
  font-size: 14px;
  appearance: none;
  background: #fff;
  border: 1px solid #d6e0eb;
  border-radius: 7px;
  cursor: pointer;
}
.select > svg {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: #75869a;
}
.radios {
  display: grid;
  gap: 3px;
}
.radios button {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  text-align: left;
  color: var(--muted);
  font-size: 14px;
}
.radio {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1.5px solid #c1ccda;
  border-radius: 50%;
}
.radio.checked {
  border: 5px solid #3873ea;
}
.listheading h1 {
  font-size: 25px;
  gap: 10px;
}
.count {
  background: #e6eefc;
  color: var(--blue);
  border-radius: 7px;
  font: 650 14px/24px system-ui;
  min-width: 27px;
  padding: 0 7px;
  text-align: center;
}
.sort {
  color: var(--muted);
  gap: 3px;
}
.sort select {
  background: none;
  border: 0;
  padding: 4px 23px 4px 2px;
}
.sort .select > svg {
  right: 2px;
}
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 14px 0;
}
.tabs,
.managetabs {
  display: flex;
  gap: 4px;
}
.tabs button,
.managetabs button {
  padding: 6px 15px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 550;
  color: var(--muted);
}
.tabs button.selected,
.managetabs button.selected {
  background: var(--blue);
  color: white;
}
.search {
  gap: 7px;
  border: 1px solid #d6dfeb;
  background: white;
  color: #728399;
  border-radius: 8px;
  padding: 7px 10px;
  max-width: 48%;
}
.search input {
  width: 174px;
  min-width: 0;
  font-size: 14px;
  border: 0;
  outline: 0;
  background: none;
}
.search button {
  display: grid;
  padding: 0;
}
.demo-note {
  color: #617286;
  font-size: 13px;
  margin: 0 0 10px;
}
.card {
  padding: 20px 22px 12px;
  margin-bottom: 13px;
  transition:
    border-color 0.16s,
    box-shadow 0.16s;
}
.card:hover {
  border-color: #b6cae6;
  box-shadow: 0 3px 14px #2b486709;
}
.cardtop {
  display: flex;
  align-items: center;
  gap: 14px;
}
.subjecticon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}
.sky {
  background: #e6efff;
  color: #376fe3;
}
.mint {
  background: #e0f4ee;
  color: #26876d;
}
.apricot {
  background: #ffeedb;
  color: #b97217;
}
.lilac {
  background: #eee7fc;
  color: #8061bb;
}
.cardname {
  min-width: 0;
}
.jobtitle {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}
.jobtitle button {
  padding: 0;
  font-size: 21px;
  line-height: 1.4;
  font-weight: 750;
  letter-spacing: -0.5px;
  text-align: left;
}
.jobtitle button:hover {
  color: var(--blue);
}
.status {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 2px 7px;
  border-radius: 5px;
  font-size: 12px;
  line-height: 1.55;
  color: #14765a;
  background: #e4f6ed;
  white-space: nowrap;
}
.status i {
  width: 6px;
  height: 6px;
  background: #2da775;
  border-radius: 50%;
}
.example {
  color: #4e7381;
  background: #edf3f6;
}
.meta,
.schedule {
  font-size: 14px;
  color: var(--muted);
}
.meta {
  margin-top: 4px;
}
.meta span,
.schedule span {
  gap: 6px;
}
.meta svg,
.schedule svg,
.pills svg {
  width: 15px;
  height: 15px;
  color: #77879a;
  flex-shrink: 0;
}
.price {
  margin-left: auto;
  white-space: nowrap;
  align-self: flex-start;
}
.pay {
  color: #cf631e;
  font-weight: 750;
  font-size: 23px;
  letter-spacing: -0.5px;
  font-variant-numeric: tabular-nums;
}
.pay small {
  font-size: 16px;
  margin-right: 3px;
}
.pay em {
  font-size: 13px;
  font-style: normal;
  font-weight: 450;
  color: var(--muted);
  margin-left: 4px;
}
.schedule {
  gap: 22px;
  margin: 15px 0 13px;
}
.cardbottom {
  border-top: 1px solid #eaf0f6;
  padding-top: 10px;
}
.pills {
  gap: 7px;
  flex-wrap: wrap;
}
.pills span {
  font-size: 12px;
  color: #50647e;
  background: #f0f4f8;
  border-radius: 5px;
  padding: 3px 8px;
  gap: 4px;
}
.pills .mode {
  background: #edf4ff;
  color: #376bb6;
}
.pills svg {
  width: 13px;
  height: 13px;
  color: inherit;
}
.save {
  color: #8897a9;
  padding: 5px;
  border-radius: 6px;
}
.save:hover,
.issaved {
  color: var(--blue);
  background: #eef4ff;
}
.empty {
  text-align: center;
  padding: 36px;
  color: var(--muted);
}
.empty h3 {
  margin: 0.5em;
}
.empty button {
  color: var(--blue);
}
.mobilefilter {
  display: none;
}
footer {
  margin-top: 35px;
  padding: 22px 0;
  border-top: 1px solid var(--line);
  color: #778699;
  font-size: 13px;
}
footer span {
  gap: 6px;
}
dialog {
  padding: 0;
  border: 0;
  border-radius: 16px;
  color: var(--ink);
  width: min(490px, 92vw);
  max-height: 85dvh;
  box-shadow: 0 15px 75px #162c472c;
}
dialog::backdrop {
  background: #14284266;
}
.dialoginner {
  padding: 28px;
  position: relative;
}
.dialoginner h2 {
  margin: 14px 0 1px;
}
.x {
  position: absolute;
  right: 15px;
  top: 15px;
  color: var(--muted);
}
dl {
  margin: 18px 0 22px;
  border-top: 1px solid var(--line);
}
dl > div {
  display: grid;
  grid-template-columns: 80px 1fr;
  padding: 8px 0;
  border-bottom: 1px solid #eaf0f6;
  font-size: 14px;
}
dt {
  color: var(--muted);
}
dd {
  margin: 0;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.primary,
.secondary {
  display: inline-flex;
  justify-content: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  padding: 9px 16px;
}
.primary {
  color: #fff;
  background: var(--blue);
}
.secondary {
  background: #eef4ff;
  color: var(--blue);
  border: 1px solid #cdddfa;
}
.primary:hover {
  background: #174ebc;
}
.adminmain {
  min-height: 65vh;
}
.adminhead,
.managerrow {
  display: flex;
  align-items: center;
  gap: 12px;
}
.adminhead {
  margin: 30px 0 22px;
}
.adminhead h1 {
  margin-top: 5px;
}
.adminhead .location {
  background: #eaf2ff;
}
.panel,
.gate {
  padding: 24px;
}
.editgrid {
  display: grid;
  grid-template-columns: 0.85fr 1.4fr;
  gap: 20px;
  align-items: start;
}
.panel h2 {
  margin-bottom: 16px;
}
.panel h2 svg {
  width: 20px;
  color: var(--blue);
}
.panel label {
  display: block;
  font-size: 14px;
  font-weight: 600;
}
.panel input,
.panel textarea,
.panel select {
  border: 1px solid #cfdbea;
  background: white;
  border-radius: 7px;
  padding: 9px 11px;
  width: 100%;
  margin-top: 5px;
  font-size: 15px;
  font-weight: 400;
}
.panel textarea {
  display: block;
  resize: vertical;
}
.panel .select svg {
  margin-top: 2px;
}
.paste button {
  margin-top: 12px;
}
.paste p,
.hint,
.managerrow p {
  font-size: 14px;
  color: var(--muted);
  margin-top: 12px;
}
.fieldgrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 13px;
}
.wide {
  grid-column: 1/-1;
}
.actions {
  margin-top: 16px;
  flex-wrap: wrap;
  gap: 8px;
}
.managetabs {
  flex-wrap: wrap;
  margin-bottom: 13px;
}
.managerrow {
  border-top: 1px solid var(--line);
  padding: 14px 0;
}
.managerrow p {
  margin: 2px 0 0;
}
.gate {
  max-width: 530px;
  margin: 65px auto;
  text-align: center;
}
.gate .subjecticon {
  margin: 0 auto 15px;
}
.gate p {
  color: var(--muted);
  margin: 10px 0 20px;
}
.notice {
  padding: 12px 15px;
  background: #e8f1ff;
  color: #255ca6;
  border-radius: 8px;
  margin: 0 0 15px;
}
@media (min-width: 1500px) {

}
@media (max-width: 950px) {
  .bar,
  .main,
  footer {
    width: calc(100% - 44px);
  }
  .workspace {
    grid-template-columns: 210px minmax(0, 1fr);
    gap: 16px;
  }
  .filterbox {
    padding: 16px;
  }
  .tabs button {
    padding: 6px 10px;
  }
  .search input {
    width: 134px;
  }

  .card {
    padding: 16px;
  }
  .jobtitle button {
    font-size: 19px;
  }
  .pay {
    font-size: 20px;
  }
  .listheading h1 {
    font-size: 23px;
  }
}
@media (max-width: 740px) {
  .bar,
  .main,
  footer {
    width: calc(100% - 28px);
  }
  .bar {
    min-height: 59px;
    gap: 20px;
    flex-wrap: wrap;
  }
  .brand {
    font-size: 19px;
    gap: 6px;
  }
  .brandicon {
    width: 31px;
    height: 31px;
    border-radius: 8px;
  }
  .brandicon svg {
    width: 21px;
  }
  .bar nav {
    gap: 12px;
  }
  .navitem {
    font-size: 14px;
    gap: 4px;
  }
  .navitem svg {
    display: none;
  }
  .adminlink {
    font-size: 13px;
    padding: 5px 8px;
    gap: 3px;
  }




  .location {
    font-size: 12px;
    padding: 2px 7px;
  }

  .workspace {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .filterbox {
    display: none;
  }
  .filterbox.expanded {
    display: block;
    width: 100%;
    margin-bottom: 14px;
  }
  .filterbody {
    display: grid;
    grid-template-columns: 85px 1fr;
    align-items: center;
    gap: 8px;
    padding-top: 10px;
  }
  .filterbody > label {
    margin: 0;
  }
  .radios {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
  }
  .radios button {
    gap: 4px;
  }
  .list {
    width: 100%;
  }
  .toolbar {
    flex-wrap: wrap;
    margin: 9px 0;
  }
  .search {
    order: 3;
    max-width: none;
    width: 100%;
  }
  .search input {
    flex: 1;
  }
  .mobilefilter {
    display: flex;
    gap: 4px;
    font-size: 14px;
    color: var(--muted);
  }
  .card {
    padding: 14px 13px 9px;
  }
  .cardtop {
    gap: 8px;
  }
  .subjecticon {
    width: 39px;
    height: 42px;
    border-radius: 10px;
  }
  .subjecticon svg {
    width: 24px;
  }
  .jobtitle {
    gap: 4px;
  }
  .jobtitle button {
    font-size: 17px;
  }
  .meta,
  .schedule {
    font-size: 13px;
  }
  .price {
    align-self: flex-start;
  }
  .pay {
    font-size: 18px;
  }
  .pay em {
    font-size: 12px;
    margin-left: 2px;
  }
  .pay small {
    font-size: 13px;
  }
  .schedule {
    gap: 14px;
    margin: 12px 0;
  }
  .editgrid {
    grid-template-columns: 1fr;
  }
  .adminhead h1 {
    font-size: 25px;
  }
  .panel {
    padding: 15px;
  }
}
@media (max-width: 390px) {
  .bar {
    gap: 10px;
  }
  .brand {
    font-size: 17px;
  }
  .bar nav {
    gap: 8px;
  }
  .adminlink svg {
    display: none;
  }
  .pay em {
    display: block;
    text-align: right;
  }

  .fieldgrid {
    grid-template-columns: 1fr;
  }
}
.teacherlink {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
  color: var(--blue);
  font-weight: 650;
  font-size: 14px;
  white-space: nowrap;
}
.teacherlink + .adminlink {
  margin-left: -29px;
}
.teacherlink.here {
  text-decoration: underline;
}
.centertabs {
  display: flex;
  gap: 9px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.centertabs button {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  background: white;
  border: 1px solid var(--line);
  border-radius: 9px;
  padding: 8px 13px;
  font-size: 15px;
}
.centertabs button.selected {
  background: var(--blue);
  color: white;
  border-color: var(--blue);
}
.adminmain details,
dialog details {
  margin: 15px 0;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 11px 14px;
}
.adminmain summary,
dialog summary {
  cursor: pointer;
  font-size: 14px;
  font-weight: 650;
  color: var(--blue);
}
pre {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font: inherit;
  font-size: 14px;
  line-height: 1.7;
  color: var(--muted);
}
.resumepreview,
.appitem {
  margin: 16px 0 0;
  padding: 15px;
  border: 1px solid var(--line);
  border-radius: 9px;
}
.resumepreview h3 {
  font-size: 16px;
}
.resumepreview li {
  font-size: 14px;
}
.prefgrid {
  margin: 16px 0;
}
.panel .checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 15px 0;
}
.checkbox input {
  width: 18px;
  height: 18px;
  margin: 0;
}
.applybox {
  margin: 15px 0;
}
.candidates {
  margin-top: 18px;
}
.applylink {
  margin-right: 8px;
}
.travel label {
  display: block;
  font-size: 14px;
  margin: 9px 0;
}
.travel input,
.travel select {
  display: block;
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 6px;
  padding: 7px;
  margin-top: 4px;
}
.travel summary svg {
  vertical-align: middle;
}
.schedule {
  flex-wrap: wrap;
  row-gap: 5px;
}
@media (max-width: 740px) {
  .bar {
    column-gap: 12px;
    row-gap: 0;
  }
  .teacherlink {
    font-size: 13px;
  }
  .teacherlink + .adminlink {
    margin-left: 0;
  }
  .teacherlink svg {
    display: none;
  }
  .adminlink {
    border: 0;
    padding: 4px 0;
  }
  .adminlink svg {
    display: none;
  }
}
@media (max-width: 480px) {
  .bar {
    min-height: 77px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 42px 32px;
    column-gap: 14px;
  }
  .brand {
    grid-row: 1;
  }
  .teacherlink {
    grid-column: 2;
    grid-row: 1;
  }
  .adminlink {
    grid-column: 3;
    grid-row: 1;
  }
  .bar nav {
    grid-row: 2;
    grid-column: 1/-1;
    gap: 21px;
  }
  .navitem {
    padding: 0 2px;
  }
  .navitem.active:after {
    left: 0;
    right: 0;
  }
  .centertabs {
    gap: 4px;
  }
  .centertabs button {
    font-size: 14px;
    padding: 6px 8px;
  }
}

.boardmain{padding-top:26px}.listheading h1{margin:0;line-height:1.35}.prefbtn{color:var(--blue);font-size:14px;margin-right:9px;border-right:1px solid var(--line);padding:2px 12px 2px 0}.matchreason{font-size:13px;color:#28755f}.prefsheet .fieldgrid{margin:18px 0}.prefsheet label{font-size:14px}.prefsheet select,.prefsheet input{display:block;width:100%;margin:5px 0 0;padding:8px;border:1px solid var(--line);border-radius:7px;background:white}.inlinelink{color:var(--blue);padding:0}.empty p{font-size:14px;margin:4px auto 12px}.pills{min-width:0}.pills .matchreason{overflow-wrap:anywhere}@media(max-width:740px){.boardmain{padding-top:16px}.listheading h1{font-size:20px}.prefbtn{padding-right:7px;margin-right:3px}.sort{gap:2px}}@media(max-width:365px){.sort>svg{display:none}.listheading h1{font-size:17px}}
`;var mL=ga(fe(),1),pL=document.createElement("style");pL.textContent=rL;document.head.appendChild(pL);var{jobs:Wg,service:$g,line:aS,checkedAt:eS}=window.jinkeBoard;(0,cL.createRoot)(document.getElementById("root")).render((0,mL.jsx)(Pi,{cachedAt:eS,firstJobs:Wg,service:$g,home:location.pathname,line:aS}));})();

/*!
react
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

react-dom
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

scheduler
MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

lucide-react
ISC License

Copyright (c) 2026 Lucide Icons and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---

The following Lucide icons are derived from the Feather project:

airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out

The MIT License (MIT) (for the icons listed above)

Copyright (c) 2013-present Cole Bemis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
