(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var ed={exports:{}},Sa={},td={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0;function hE(){if(I0)return gt;I0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(O,K,Ee){this.props=O,this.context=K,this.refs=T,this.updater=Ee||_}y.prototype.isReactComponent={},y.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=y.prototype;function w(O,K,Ee){this.props=O,this.context=K,this.refs=T,this.updater=Ee||_}var b=w.prototype=new S;b.constructor=w,M(b,y.prototype),b.isPureReactComponent=!0;var R=Array.isArray,L=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(O,K,Ee){var ze,Ke={},X=null,he=null;if(K!=null)for(ze in K.ref!==void 0&&(he=K.ref),K.key!==void 0&&(X=""+K.key),K)L.call(K,ze)&&!F.hasOwnProperty(ze)&&(Ke[ze]=K[ze]);var me=arguments.length-2;if(me===1)Ke.children=Ee;else if(1<me){for(var Ue=Array(me),Ne=0;Ne<me;Ne++)Ue[Ne]=arguments[Ne+2];Ke.children=Ue}if(O&&O.defaultProps)for(ze in me=O.defaultProps,me)Ke[ze]===void 0&&(Ke[ze]=me[ze]);return{$$typeof:n,type:O,key:X,ref:he,props:Ke,_owner:I.current}}function D(O,K){return{$$typeof:n,type:O.type,key:K,ref:O.ref,props:O.props,_owner:O._owner}}function Z(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function k(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ee){return K[Ee]})}var Q=/\/+/g;function ee(O,K){return typeof O=="object"&&O!==null&&O.key!=null?k(""+O.key):K.toString(36)}function ue(O,K,Ee,ze,Ke){var X=typeof O;(X==="undefined"||X==="boolean")&&(O=null);var he=!1;if(O===null)he=!0;else switch(X){case"string":case"number":he=!0;break;case"object":switch(O.$$typeof){case n:case e:he=!0}}if(he)return he=O,Ke=Ke(he),O=ze===""?"."+ee(he,0):ze,R(Ke)?(Ee="",O!=null&&(Ee=O.replace(Q,"$&/")+"/"),ue(Ke,K,Ee,"",function(Ne){return Ne})):Ke!=null&&(Z(Ke)&&(Ke=D(Ke,Ee+(!Ke.key||he&&he.key===Ke.key?"":(""+Ke.key).replace(Q,"$&/")+"/")+O)),K.push(Ke)),1;if(he=0,ze=ze===""?".":ze+":",R(O))for(var me=0;me<O.length;me++){X=O[me];var Ue=ze+ee(X,me);he+=ue(X,K,Ee,Ue,Ke)}else if(Ue=g(O),typeof Ue=="function")for(O=Ue.call(O),me=0;!(X=O.next()).done;)X=X.value,Ue=ze+ee(X,me++),he+=ue(X,K,Ee,Ue,Ke);else if(X==="object")throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return he}function te(O,K,Ee){if(O==null)return O;var ze=[],Ke=0;return ue(O,ze,"","",function(X){return K.call(Ee,X,Ke++)}),ze}function re(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(Ee){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ee)},function(Ee){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ee)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var W={current:null},Y={transition:null},ne={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Y,ReactCurrentOwner:I};function le(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:te,forEach:function(O,K,Ee){te(O,function(){K.apply(this,arguments)},Ee)},count:function(O){var K=0;return te(O,function(){K++}),K},toArray:function(O){return te(O,function(K){return K})||[]},only:function(O){if(!Z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},gt.Component=y,gt.Fragment=t,gt.Profiler=o,gt.PureComponent=w,gt.StrictMode=r,gt.Suspense=d,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,gt.act=le,gt.cloneElement=function(O,K,Ee){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ze=M({},O.props),Ke=O.key,X=O.ref,he=O._owner;if(K!=null){if(K.ref!==void 0&&(X=K.ref,he=I.current),K.key!==void 0&&(Ke=""+K.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ue in K)L.call(K,Ue)&&!F.hasOwnProperty(Ue)&&(ze[Ue]=K[Ue]===void 0&&me!==void 0?me[Ue]:K[Ue])}var Ue=arguments.length-2;if(Ue===1)ze.children=Ee;else if(1<Ue){me=Array(Ue);for(var Ne=0;Ne<Ue;Ne++)me[Ne]=arguments[Ne+2];ze.children=me}return{$$typeof:n,type:O.type,key:Ke,ref:X,props:ze,_owner:he}},gt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},gt.createElement=E,gt.createFactory=function(O){var K=E.bind(null,O);return K.type=O,K},gt.createRef=function(){return{current:null}},gt.forwardRef=function(O){return{$$typeof:f,render:O}},gt.isValidElement=Z,gt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:re}},gt.memo=function(O,K){return{$$typeof:h,type:O,compare:K===void 0?null:K}},gt.startTransition=function(O){var K=Y.transition;Y.transition={};try{O()}finally{Y.transition=K}},gt.unstable_act=le,gt.useCallback=function(O,K){return W.current.useCallback(O,K)},gt.useContext=function(O){return W.current.useContext(O)},gt.useDebugValue=function(){},gt.useDeferredValue=function(O){return W.current.useDeferredValue(O)},gt.useEffect=function(O,K){return W.current.useEffect(O,K)},gt.useId=function(){return W.current.useId()},gt.useImperativeHandle=function(O,K,Ee){return W.current.useImperativeHandle(O,K,Ee)},gt.useInsertionEffect=function(O,K){return W.current.useInsertionEffect(O,K)},gt.useLayoutEffect=function(O,K){return W.current.useLayoutEffect(O,K)},gt.useMemo=function(O,K){return W.current.useMemo(O,K)},gt.useReducer=function(O,K,Ee){return W.current.useReducer(O,K,Ee)},gt.useRef=function(O){return W.current.useRef(O)},gt.useState=function(O){return W.current.useState(O)},gt.useSyncExternalStore=function(O,K,Ee){return W.current.useSyncExternalStore(O,K,Ee)},gt.useTransition=function(){return W.current.useTransition()},gt.version="18.3.1",gt}var N0;function Sp(){return N0||(N0=1,td.exports=hE()),td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0;function pE(){if(F0)return Sa;F0=1;var n=Sp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var p,v={},g=null,_=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)r.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(f&&f.defaultProps)for(p in d=f.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:f,key:g,ref:_,props:v,_owner:o.current}}return Sa.Fragment=t,Sa.jsx=c,Sa.jsxs=c,Sa}var U0;function mE(){return U0||(U0=1,ed.exports=pE()),ed.exports}var V=mE(),ac={},nd={exports:{}},jn={},id={exports:{}},rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0;function gE(){return O0||(O0=1,(function(n){function e(Y,ne){var le=Y.length;Y.push(ne);e:for(;0<le;){var O=le-1>>>1,K=Y[O];if(0<o(K,ne))Y[O]=ne,Y[le]=K,le=O;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var ne=Y[0],le=Y.pop();if(le!==ne){Y[0]=le;e:for(var O=0,K=Y.length,Ee=K>>>1;O<Ee;){var ze=2*(O+1)-1,Ke=Y[ze],X=ze+1,he=Y[X];if(0>o(Ke,le))X<K&&0>o(he,Ke)?(Y[O]=he,Y[X]=le,O=X):(Y[O]=Ke,Y[ze]=le,O=ze);else if(X<K&&0>o(he,le))Y[O]=he,Y[X]=le,O=X;else break e}}return ne}function o(Y,ne){var le=Y.sortIndex-ne.sortIndex;return le!==0?le:Y.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var d=[],h=[],p=1,v=null,g=3,_=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(Y){for(var ne=t(h);ne!==null;){if(ne.callback===null)r(h);else if(ne.startTime<=Y)r(h),ne.sortIndex=ne.expirationTime,e(d,ne);else break;ne=t(h)}}function R(Y){if(T=!1,b(Y),!M)if(t(d)!==null)M=!0,re(L);else{var ne=t(h);ne!==null&&W(R,ne.startTime-Y)}}function L(Y,ne){M=!1,T&&(T=!1,S(E),E=-1),_=!0;var le=g;try{for(b(ne),v=t(d);v!==null&&(!(v.expirationTime>ne)||Y&&!k());){var O=v.callback;if(typeof O=="function"){v.callback=null,g=v.priorityLevel;var K=O(v.expirationTime<=ne);ne=n.unstable_now(),typeof K=="function"?v.callback=K:v===t(d)&&r(d),b(ne)}else r(d);v=t(d)}if(v!==null)var Ee=!0;else{var ze=t(h);ze!==null&&W(R,ze.startTime-ne),Ee=!1}return Ee}finally{v=null,g=le,_=!1}}var I=!1,F=null,E=-1,D=5,Z=-1;function k(){return!(n.unstable_now()-Z<D)}function Q(){if(F!==null){var Y=n.unstable_now();Z=Y;var ne=!0;try{ne=F(!0,Y)}finally{ne?ee():(I=!1,F=null)}}else I=!1}var ee;if(typeof w=="function")ee=function(){w(Q)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,te=ue.port2;ue.port1.onmessage=Q,ee=function(){te.postMessage(null)}}else ee=function(){y(Q,0)};function re(Y){F=Y,I||(I=!0,ee())}function W(Y,ne){E=y(function(){Y(n.unstable_now())},ne)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Y){Y.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,re(L))},n.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<Y?Math.floor(1e3/Y):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var le=g;g=ne;try{return Y()}finally{g=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(Y,ne){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var le=g;g=Y;try{return ne()}finally{g=le}},n.unstable_scheduleCallback=function(Y,ne,le){var O=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?O+le:O):le=O,Y){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=le+K,Y={id:p++,callback:ne,priorityLevel:Y,startTime:le,expirationTime:K,sortIndex:-1},le>O?(Y.sortIndex=le,e(h,Y),t(d)===null&&Y===t(h)&&(T?(S(E),E=-1):T=!0,W(R,le-O))):(Y.sortIndex=K,e(d,Y),M||_||(M=!0,re(L))),Y},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(Y){var ne=g;return function(){var le=g;g=ne;try{return Y.apply(this,arguments)}finally{g=le}}}})(rd)),rd}var k0;function vE(){return k0||(k0=1,id.exports=gE()),id.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function xE(){if(B0)return jn;B0=1;var n=Sp(),e=vE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(i){return d.call(v,i)?!0:d.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function _(i,s,l,u){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,u){if(s===null||typeof s>"u"||_(i,s,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,l,u,m,x,C){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function w(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,w);y[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,w);y[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,w);y[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,l,u){var m=y.hasOwnProperty(s)?y[s]:null;(m!==null?m.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,m,u)&&(l=null),u||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,u=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,u?i.setAttributeNS(u,s,l):i.setAttribute(s,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),k=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ne(i){return i===null||typeof i!="object"?null:(i=Y&&i[Y]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,O;function K(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Ee=!1;function ze(i,s){if(!i||Ee)return"";Ee=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ae){var u=ae}Reflect.construct(i,[],s)}else{try{s.call()}catch(ae){u=ae}i.call(s.prototype)}else{try{throw Error()}catch(ae){u=ae}i()}}catch(ae){if(ae&&u&&typeof ae.stack=="string"){for(var m=ae.stack.split(`
`),x=u.stack.split(`
`),C=m.length-1,U=x.length-1;1<=C&&0<=U&&m[C]!==x[U];)U--;for(;1<=C&&0<=U;C--,U--)if(m[C]!==x[U]){if(C!==1||U!==1)do if(C--,U--,0>U||m[C]!==x[U]){var B=`
`+m[C].replace(" at new "," at ");return i.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",i.displayName)),B}while(1<=C&&0<=U);break}}}finally{Ee=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?K(i):""}function Ke(i){switch(i.tag){case 5:return K(i.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return i=ze(i.type,!1),i;case 11:return i=ze(i.type.render,!1),i;case 1:return i=ze(i.type,!0),i;default:return""}}function X(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case I:return"Portal";case D:return"Profiler";case E:return"StrictMode";case ee:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case Z:return(i._context.displayName||"Context")+".Provider";case Q:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case te:return s=i.displayName||null,s!==null?s:X(i.type)||"Memo";case re:s=i._payload,i=i._init;try{return X(i(s))}catch{}}return null}function he(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ne(i){var s=Ue(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),u=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(C){u=""+C,x.call(this,C)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function $e(i){i._valueTracker||(i._valueTracker=Ne(i))}function Zt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),u="";return i&&(u=Ue(i)?i.checked?"true":"false":i.value),i=u,i!==l?(s.setValue(i),!0):!1}function mt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function St(i,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Pt(i,s){var l=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;l=me(s.value!=null?s.value:l),i._wrapperState={initialChecked:u,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ft(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function Bt(i,s){ft(i,s);var l=me(s.value),u=s.type;if(l!=null)u==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(u==="submit"||u==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ht(i,s.type,l):s.hasOwnProperty("defaultValue")&&Ht(i,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function z(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Ht(i,s,l){(s!=="number"||mt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var vt=Array.isArray;function Mt(i,s,l,u){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&u&&(i[l].defaultSelected=!0)}else{for(l=""+me(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,u&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function Xe(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function N(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(vt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:me(l)}}function A(i,s){var l=me(s.value),u=me(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),u!=null&&(i.defaultValue=""+u)}function j(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function pe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?pe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var fe,Ve=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,u,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,u,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ae(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys(Qe).forEach(function(i){st.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Qe[s]=Qe[i]})});function ye(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Qe.hasOwnProperty(i)&&Qe[i]?(""+s).trim():s+"px"}function we(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var u=l.indexOf("--")===0,m=ye(l,s[l],u);l==="float"&&(l="cssFloat"),u?i.setProperty(l,m):i[l]=m}}var Ye=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(i,s){if(s){if(Ye[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Le(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function H(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ce=null,Me=null,Ie=null;function Se(i){if(i=oa(i)){if(typeof Ce!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Ml(s),Ce(i.stateNode,i.type,s))}}function de(i){Me?Ie?Ie.push(i):Ie=[i]:Me=i}function Ge(){if(Me){var i=Me,s=Ie;if(Ie=Me=null,Se(i),s)for(i=0;i<s.length;i++)Se(s[i])}}function ot(i,s){return i(s)}function It(){}var Et=!1;function ti(i,s,l){if(Et)return i(s,l);Et=!0;try{return ot(i,s,l)}finally{Et=!1,(Me!==null||Ie!==null)&&(It(),Ge())}}function Rn(i,s){var l=i.stateNode;if(l===null)return null;var u=Ml(l);if(u===null)return null;l=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ns=!1;if(f)try{var $i={};Object.defineProperty($i,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{Ns=!1}function Su(i,s,l,u,m,x,C,U,B){var ae=Array.prototype.slice.call(arguments,3);try{s.apply(l,ae)}catch(xe){this.onError(xe)}}var yr=!1,ts=null,ni=!1,ns=null,el={onError:function(i){yr=!0,ts=i}};function tl(i,s,l,u,m,x,C,U,B){yr=!1,ts=null,Su.apply(el,arguments)}function Fs(i,s,l,u,m,x,C,U,B){if(tl.apply(this,arguments),yr){if(yr){var ae=ts;yr=!1,ts=null}else throw Error(t(198));ni||(ni=!0,ns=ae)}}function Ii(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function is(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Ho(i){if(Ii(i)!==i)throw Error(t(188))}function nl(i){var s=i.alternate;if(!s){if(s=Ii(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,u=s;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(u=m.return,u!==null){l=u;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return Ho(m),i;if(x===u)return Ho(m),s;x=x.sibling}throw Error(t(188))}if(l.return!==u.return)l=m,u=x;else{for(var C=!1,U=m.child;U;){if(U===l){C=!0,l=m,u=x;break}if(U===u){C=!0,u=m,l=x;break}U=U.sibling}if(!C){for(U=x.child;U;){if(U===l){C=!0,l=x,u=m;break}if(U===u){C=!0,u=x,l=m;break}U=U.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function il(i){return i=nl(i),i!==null?rl(i):null}function rl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=rl(i);if(s!==null)return s;i=i.sibling}return null}var sl=e.unstable_scheduleCallback,ol=e.unstable_cancelCallback,Mu=e.unstable_shouldYield,Eu=e.unstable_requestPaint,P=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,ce=e.unstable_ImmediatePriority,oe=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,Pe=e.unstable_LowPriority,ke=e.unstable_IdlePriority,Re=null,Fe=null;function et(i){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Re,i,void 0,(i.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Dt,dt=Math.log,tt=Math.LN2;function Dt(i){return i>>>=0,i===0?32:31-(dt(i)/tt|0)|0}var Ut=64,Ft=4194304;function yt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Qt(i,s){var l=i.pendingLanes;if(l===0)return 0;var u=0,m=i.suspendedLanes,x=i.pingedLanes,C=l&268435455;if(C!==0){var U=C&~m;U!==0?u=yt(U):(x&=C,x!==0&&(u=yt(x)))}else C=l&~m,C!==0?u=yt(C):x!==0&&(u=yt(x));if(u===0)return 0;if(s!==0&&s!==u&&(s&m)===0&&(m=u&-u,x=s&-s,m>=x||m===16&&(x&4194240)!==0))return s;if((u&4)!==0&&(u|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=u;0<s;)l=31-nt(s),m=1<<l,u|=i[l],s&=~m;return u}function Ze(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pn(i,s){for(var l=i.suspendedLanes,u=i.pingedLanes,m=i.expirationTimes,x=i.pendingLanes;0<x;){var C=31-nt(x),U=1<<C,B=m[C];B===-1?((U&l)===0||(U&u)!==0)&&(m[C]=Ze(U,s)):B<=s&&(i.expiredLanes|=U),x&=~U}}function xt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function kn(){var i=Ut;return Ut<<=1,(Ut&4194240)===0&&(Ut=64),i}function Bn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function qn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-nt(s),i[s]=l}function Sr(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var u=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-nt(l),x=1<<m;s[m]=0,u[m]=-1,i[m]=-1,l&=~x}}function bt(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var u=31-nt(l),m=1<<u;m&s|i[u]&s&&(i[u]|=s),l&=~m}}var at=0;function gi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Jt,ii,Zi,Go,mm,Tu=!1,al=[],Mr=null,Er=null,Tr=null,Wo=new Map,jo=new Map,wr=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gm(i,s){switch(i){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Wo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(s.pointerId)}}function Xo(i,s,l,u,m,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:u,nativeEvent:x,targetContainers:[m]},s!==null&&(s=oa(s),s!==null&&ii(s)),i):(i.eventSystemFlags|=u,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function US(i,s,l,u,m){switch(s){case"focusin":return Mr=Xo(Mr,i,s,l,u,m),!0;case"dragenter":return Er=Xo(Er,i,s,l,u,m),!0;case"mouseover":return Tr=Xo(Tr,i,s,l,u,m),!0;case"pointerover":var x=m.pointerId;return Wo.set(x,Xo(Wo.get(x)||null,i,s,l,u,m)),!0;case"gotpointercapture":return x=m.pointerId,jo.set(x,Xo(jo.get(x)||null,i,s,l,u,m)),!0}return!1}function vm(i){var s=rs(i.target);if(s!==null){var l=Ii(s);if(l!==null){if(s=l.tag,s===13){if(s=is(l),s!==null){i.blockedOn=s,mm(i.priority,function(){Zi(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ll(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Au(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var u=new l.constructor(l.type,l);ut=u,l.target.dispatchEvent(u),ut=null}else return s=oa(l),s!==null&&ii(s),i.blockedOn=l,!1;s.shift()}return!0}function xm(i,s,l){ll(i)&&l.delete(s)}function OS(){Tu=!1,Mr!==null&&ll(Mr)&&(Mr=null),Er!==null&&ll(Er)&&(Er=null),Tr!==null&&ll(Tr)&&(Tr=null),Wo.forEach(xm),jo.forEach(xm)}function Yo(i,s){i.blockedOn===s&&(i.blockedOn=null,Tu||(Tu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,OS)))}function qo(i){function s(m){return Yo(m,i)}if(0<al.length){Yo(al[0],i);for(var l=1;l<al.length;l++){var u=al[l];u.blockedOn===i&&(u.blockedOn=null)}}for(Mr!==null&&Yo(Mr,i),Er!==null&&Yo(Er,i),Tr!==null&&Yo(Tr,i),Wo.forEach(s),jo.forEach(s),l=0;l<wr.length;l++)u=wr[l],u.blockedOn===i&&(u.blockedOn=null);for(;0<wr.length&&(l=wr[0],l.blockedOn===null);)vm(l),l.blockedOn===null&&wr.shift()}var Us=R.ReactCurrentBatchConfig,cl=!0;function kS(i,s,l,u){var m=at,x=Us.transition;Us.transition=null;try{at=1,wu(i,s,l,u)}finally{at=m,Us.transition=x}}function BS(i,s,l,u){var m=at,x=Us.transition;Us.transition=null;try{at=4,wu(i,s,l,u)}finally{at=m,Us.transition=x}}function wu(i,s,l,u){if(cl){var m=Au(i,s,l,u);if(m===null)Gu(i,s,u,ul,l),gm(i,u);else if(US(m,i,s,l,u))u.stopPropagation();else if(gm(i,u),s&4&&-1<FS.indexOf(i)){for(;m!==null;){var x=oa(m);if(x!==null&&Jt(x),x=Au(i,s,l,u),x===null&&Gu(i,s,u,ul,l),x===m)break;m=x}m!==null&&u.stopPropagation()}else Gu(i,s,u,null,l)}}var ul=null;function Au(i,s,l,u){if(ul=null,i=H(u),i=rs(i),i!==null)if(s=Ii(i),s===null)i=null;else if(l=s.tag,l===13){if(i=is(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ul=i,null}function _m(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case ce:return 1;case oe:return 4;case ie:case Pe:return 16;case ke:return 536870912;default:return 16}default:return 16}}var Ar=null,Cu=null,fl=null;function ym(){if(fl)return fl;var i,s=Cu,l=s.length,u,m="value"in Ar?Ar.value:Ar.textContent,x=m.length;for(i=0;i<l&&s[i]===m[i];i++);var C=l-i;for(u=1;u<=C&&s[l-u]===m[x-u];u++);return fl=m.slice(i,1<u?1-u:void 0)}function dl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function hl(){return!0}function Sm(){return!1}function Kn(i){function s(l,u,m,x,C){this._reactName=l,this._targetInst=m,this.type=u,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(l=i[U],this[U]=l?l(x):x[U]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?hl:Sm,this.isPropagationStopped=Sm,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),s}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bu=Kn(Os),Ko=le({},Os,{view:0,detail:0}),zS=Kn(Ko),Ru,Pu,$o,pl=le({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==$o&&($o&&i.type==="mousemove"?(Ru=i.screenX-$o.screenX,Pu=i.screenY-$o.screenY):Pu=Ru=0,$o=i),Ru)},movementY:function(i){return"movementY"in i?i.movementY:Pu}}),Mm=Kn(pl),VS=le({},pl,{dataTransfer:0}),HS=Kn(VS),GS=le({},Ko,{relatedTarget:0}),Du=Kn(GS),WS=le({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),jS=Kn(WS),XS=le({},Os,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),YS=Kn(XS),qS=le({},Os,{data:0}),Em=Kn(qS),KS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QS(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=ZS[i])?!!s[i]:!1}function Lu(){return QS}var JS=le({},Ko,{key:function(i){if(i.key){var s=KS[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=dl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?$S[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(i){return i.type==="keypress"?dl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?dl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),eM=Kn(JS),tM=le({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tm=Kn(tM),nM=le({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),iM=Kn(nM),rM=le({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),sM=Kn(rM),oM=le({},pl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),aM=Kn(oM),lM=[9,13,27,32],Iu=f&&"CompositionEvent"in window,Zo=null;f&&"documentMode"in document&&(Zo=document.documentMode);var cM=f&&"TextEvent"in window&&!Zo,wm=f&&(!Iu||Zo&&8<Zo&&11>=Zo),Am=" ",Cm=!1;function bm(i,s){switch(i){case"keyup":return lM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var ks=!1;function uM(i,s){switch(i){case"compositionend":return Rm(s);case"keypress":return s.which!==32?null:(Cm=!0,Am);case"textInput":return i=s.data,i===Am&&Cm?null:i;default:return null}}function fM(i,s){if(ks)return i==="compositionend"||!Iu&&bm(i,s)?(i=ym(),fl=Cu=Ar=null,ks=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return wm&&s.locale!=="ko"?null:s.data;default:return null}}var dM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!dM[i.type]:s==="textarea"}function Dm(i,s,l,u){de(u),s=_l(s,"onChange"),0<s.length&&(l=new bu("onChange","change",null,l,u),i.push({event:l,listeners:s}))}var Qo=null,Jo=null;function hM(i){Km(i,0)}function ml(i){var s=Gs(i);if(Zt(s))return i}function pM(i,s){if(i==="change")return s}var Lm=!1;if(f){var Nu;if(f){var Fu="oninput"in document;if(!Fu){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),Fu=typeof Im.oninput=="function"}Nu=Fu}else Nu=!1;Lm=Nu&&(!document.documentMode||9<document.documentMode)}function Nm(){Qo&&(Qo.detachEvent("onpropertychange",Fm),Jo=Qo=null)}function Fm(i){if(i.propertyName==="value"&&ml(Jo)){var s=[];Dm(s,Jo,i,H(i)),ti(hM,s)}}function mM(i,s,l){i==="focusin"?(Nm(),Qo=s,Jo=l,Qo.attachEvent("onpropertychange",Fm)):i==="focusout"&&Nm()}function gM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ml(Jo)}function vM(i,s){if(i==="click")return ml(s)}function xM(i,s){if(i==="input"||i==="change")return ml(s)}function _M(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var vi=typeof Object.is=="function"?Object.is:_M;function ea(i,s){if(vi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),u=Object.keys(s);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var m=l[u];if(!d.call(s,m)||!vi(i[m],s[m]))return!1}return!0}function Um(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Om(i,s){var l=Um(i);i=0;for(var u;l;){if(l.nodeType===3){if(u=i+l.textContent.length,i<=s&&u>=s)return{node:l,offset:s-i};i=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Um(l)}}function km(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?km(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Bm(){for(var i=window,s=mt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=mt(i.document)}return s}function Uu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function yM(i){var s=Bm(),l=i.focusedElem,u=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&km(l.ownerDocument.documentElement,l)){if(u!==null&&Uu(l)){if(s=u.start,i=u.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,x=Math.min(u.start,m);u=u.end===void 0?x:Math.min(u.end,m),!i.extend&&x>u&&(m=u,u=x,x=m),m=Om(l,x);var C=Om(l,u);m&&C&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==C.node||i.focusOffset!==C.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),x>u?(i.addRange(s),i.extend(C.node,C.offset)):(s.setEnd(C.node,C.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var SM=f&&"documentMode"in document&&11>=document.documentMode,Bs=null,Ou=null,ta=null,ku=!1;function zm(i,s,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ku||Bs==null||Bs!==mt(u)||(u=Bs,"selectionStart"in u&&Uu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ta&&ea(ta,u)||(ta=u,u=_l(Ou,"onSelect"),0<u.length&&(s=new bu("onSelect","select",null,s,l),i.push({event:s,listeners:u}),s.target=Bs)))}function gl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var zs={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},Bu={},Vm={};f&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function vl(i){if(Bu[i])return Bu[i];if(!zs[i])return i;var s=zs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Vm)return Bu[i]=s[l];return i}var Hm=vl("animationend"),Gm=vl("animationiteration"),Wm=vl("animationstart"),jm=vl("transitionend"),Xm=new Map,Ym="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(i,s){Xm.set(i,s),a(s,[i])}for(var zu=0;zu<Ym.length;zu++){var Vu=Ym[zu],MM=Vu.toLowerCase(),EM=Vu[0].toUpperCase()+Vu.slice(1);Cr(MM,"on"+EM)}Cr(Hm,"onAnimationEnd"),Cr(Gm,"onAnimationIteration"),Cr(Wm,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(jm,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TM=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function qm(i,s,l){var u=i.type||"unknown-event";i.currentTarget=l,Fs(u,s,void 0,i),i.currentTarget=null}function Km(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var u=i[l],m=u.event;u=u.listeners;e:{var x=void 0;if(s)for(var C=u.length-1;0<=C;C--){var U=u[C],B=U.instance,ae=U.currentTarget;if(U=U.listener,B!==x&&m.isPropagationStopped())break e;qm(m,U,ae),x=B}else for(C=0;C<u.length;C++){if(U=u[C],B=U.instance,ae=U.currentTarget,U=U.listener,B!==x&&m.isPropagationStopped())break e;qm(m,U,ae),x=B}}}if(ni)throw i=ns,ni=!1,ns=null,i}function zt(i,s){var l=s[Ku];l===void 0&&(l=s[Ku]=new Set);var u=i+"__bubble";l.has(u)||($m(s,i,2,!1),l.add(u))}function Hu(i,s,l){var u=0;s&&(u|=4),$m(l,i,u,s)}var xl="_reactListening"+Math.random().toString(36).slice(2);function ia(i){if(!i[xl]){i[xl]=!0,r.forEach(function(l){l!=="selectionchange"&&(TM.has(l)||Hu(l,!1,i),Hu(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[xl]||(s[xl]=!0,Hu("selectionchange",!1,s))}}function $m(i,s,l,u){switch(_m(s)){case 1:var m=kS;break;case 4:m=BS;break;default:m=wu}l=m.bind(null,s,l,i),m=void 0,!Ns||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),u?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function Gu(i,s,l,u,m){var x=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var U=u.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(C===4)for(C=u.return;C!==null;){var B=C.tag;if((B===3||B===4)&&(B=C.stateNode.containerInfo,B===m||B.nodeType===8&&B.parentNode===m))return;C=C.return}for(;U!==null;){if(C=rs(U),C===null)return;if(B=C.tag,B===5||B===6){u=x=C;continue e}U=U.parentNode}}u=u.return}ti(function(){var ae=x,xe=H(l),_e=[];e:{var ve=Xm.get(i);if(ve!==void 0){var Oe=bu,We=i;switch(i){case"keypress":if(dl(l)===0)break e;case"keydown":case"keyup":Oe=eM;break;case"focusin":We="focus",Oe=Du;break;case"focusout":We="blur",Oe=Du;break;case"beforeblur":case"afterblur":Oe=Du;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Mm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=HS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=iM;break;case Hm:case Gm:case Wm:Oe=jS;break;case jm:Oe=sM;break;case"scroll":Oe=zS;break;case"wheel":Oe=aM;break;case"copy":case"cut":case"paste":Oe=YS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Tm}var qe=(s&4)!==0,en=!qe&&i==="scroll",J=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var G=ae,se;G!==null;){se=G;var Te=se.stateNode;if(se.tag===5&&Te!==null&&(se=Te,J!==null&&(Te=Rn(G,J),Te!=null&&qe.push(ra(G,Te,se)))),en)break;G=G.return}0<qe.length&&(ve=new Oe(ve,We,null,l,xe),_e.push({event:ve,listeners:qe}))}}if((s&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",Oe=i==="mouseout"||i==="pointerout",ve&&l!==ut&&(We=l.relatedTarget||l.fromElement)&&(rs(We)||We[Qi]))break e;if((Oe||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Oe?(We=l.relatedTarget||l.toElement,Oe=ae,We=We?rs(We):null,We!==null&&(en=Ii(We),We!==en||We.tag!==5&&We.tag!==6)&&(We=null)):(Oe=null,We=ae),Oe!==We)){if(qe=Mm,Te="onMouseLeave",J="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(qe=Tm,Te="onPointerLeave",J="onPointerEnter",G="pointer"),en=Oe==null?ve:Gs(Oe),se=We==null?ve:Gs(We),ve=new qe(Te,G+"leave",Oe,l,xe),ve.target=en,ve.relatedTarget=se,Te=null,rs(xe)===ae&&(qe=new qe(J,G+"enter",We,l,xe),qe.target=se,qe.relatedTarget=en,Te=qe),en=Te,Oe&&We)t:{for(qe=Oe,J=We,G=0,se=qe;se;se=Vs(se))G++;for(se=0,Te=J;Te;Te=Vs(Te))se++;for(;0<G-se;)qe=Vs(qe),G--;for(;0<se-G;)J=Vs(J),se--;for(;G--;){if(qe===J||J!==null&&qe===J.alternate)break t;qe=Vs(qe),J=Vs(J)}qe=null}else qe=null;Oe!==null&&Zm(_e,ve,Oe,qe,!1),We!==null&&en!==null&&Zm(_e,en,We,qe,!0)}}e:{if(ve=ae?Gs(ae):window,Oe=ve.nodeName&&ve.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&ve.type==="file")var Je=pM;else if(Pm(ve))if(Lm)Je=xM;else{Je=gM;var it=mM}else(Oe=ve.nodeName)&&Oe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Je=vM);if(Je&&(Je=Je(i,ae))){Dm(_e,Je,l,xe);break e}it&&it(i,ve,ae),i==="focusout"&&(it=ve._wrapperState)&&it.controlled&&ve.type==="number"&&Ht(ve,"number",ve.value)}switch(it=ae?Gs(ae):window,i){case"focusin":(Pm(it)||it.contentEditable==="true")&&(Bs=it,Ou=ae,ta=null);break;case"focusout":ta=Ou=Bs=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,zm(_e,l,xe);break;case"selectionchange":if(SM)break;case"keydown":case"keyup":zm(_e,l,xe)}var rt;if(Iu)e:{switch(i){case"compositionstart":var lt="onCompositionStart";break e;case"compositionend":lt="onCompositionEnd";break e;case"compositionupdate":lt="onCompositionUpdate";break e}lt=void 0}else ks?bm(i,l)&&(lt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(lt="onCompositionStart");lt&&(wm&&l.locale!=="ko"&&(ks||lt!=="onCompositionStart"?lt==="onCompositionEnd"&&ks&&(rt=ym()):(Ar=xe,Cu="value"in Ar?Ar.value:Ar.textContent,ks=!0)),it=_l(ae,lt),0<it.length&&(lt=new Em(lt,i,null,l,xe),_e.push({event:lt,listeners:it}),rt?lt.data=rt:(rt=Rm(l),rt!==null&&(lt.data=rt)))),(rt=cM?uM(i,l):fM(i,l))&&(ae=_l(ae,"onBeforeInput"),0<ae.length&&(xe=new Em("onBeforeInput","beforeinput",null,l,xe),_e.push({event:xe,listeners:ae}),xe.data=rt))}Km(_e,s)})}function ra(i,s,l){return{instance:i,listener:s,currentTarget:l}}function _l(i,s){for(var l=s+"Capture",u=[];i!==null;){var m=i,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Rn(i,l),x!=null&&u.unshift(ra(i,x,m)),x=Rn(i,s),x!=null&&u.push(ra(i,x,m))),i=i.return}return u}function Vs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Zm(i,s,l,u,m){for(var x=s._reactName,C=[];l!==null&&l!==u;){var U=l,B=U.alternate,ae=U.stateNode;if(B!==null&&B===u)break;U.tag===5&&ae!==null&&(U=ae,m?(B=Rn(l,x),B!=null&&C.unshift(ra(l,B,U))):m||(B=Rn(l,x),B!=null&&C.push(ra(l,B,U)))),l=l.return}C.length!==0&&i.push({event:s,listeners:C})}var wM=/\r\n?/g,AM=/\u0000|\uFFFD/g;function Qm(i){return(typeof i=="string"?i:""+i).replace(wM,`
`).replace(AM,"")}function yl(i,s,l){if(s=Qm(s),Qm(i)!==s&&l)throw Error(t(425))}function Sl(){}var Wu=null,ju=null;function Xu(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Yu=typeof setTimeout=="function"?setTimeout:void 0,CM=typeof clearTimeout=="function"?clearTimeout:void 0,Jm=typeof Promise=="function"?Promise:void 0,bM=typeof queueMicrotask=="function"?queueMicrotask:typeof Jm<"u"?function(i){return Jm.resolve(null).then(i).catch(RM)}:Yu;function RM(i){setTimeout(function(){throw i})}function qu(i,s){var l=s,u=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(u===0){i.removeChild(m),qo(s);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=m}while(l);qo(s)}function br(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function eg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Ni="__reactFiber$"+Hs,sa="__reactProps$"+Hs,Qi="__reactContainer$"+Hs,Ku="__reactEvents$"+Hs,PM="__reactListeners$"+Hs,DM="__reactHandles$"+Hs;function rs(i){var s=i[Ni];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Qi]||l[Ni]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=eg(i);i!==null;){if(l=i[Ni])return l;i=eg(i)}return s}i=l,l=i.parentNode}return null}function oa(i){return i=i[Ni]||i[Qi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Gs(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Ml(i){return i[sa]||null}var $u=[],Ws=-1;function Rr(i){return{current:i}}function Vt(i){0>Ws||(i.current=$u[Ws],$u[Ws]=null,Ws--)}function Ot(i,s){Ws++,$u[Ws]=i.current,i.current=s}var Pr={},yn=Rr(Pr),zn=Rr(!1),ss=Pr;function js(i,s){var l=i.type.contextTypes;if(!l)return Pr;var u=i.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=s[x];return u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Vn(i){return i=i.childContextTypes,i!=null}function El(){Vt(zn),Vt(yn)}function tg(i,s,l){if(yn.current!==Pr)throw Error(t(168));Ot(yn,s),Ot(zn,l)}function ng(i,s,l){var u=i.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var m in u)if(!(m in s))throw Error(t(108,he(i)||"Unknown",m));return le({},l,u)}function Tl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Pr,ss=yn.current,Ot(yn,i),Ot(zn,zn.current),!0}function ig(i,s,l){var u=i.stateNode;if(!u)throw Error(t(169));l?(i=ng(i,s,ss),u.__reactInternalMemoizedMergedChildContext=i,Vt(zn),Vt(yn),Ot(yn,i)):Vt(zn),Ot(zn,l)}var Ji=null,wl=!1,Zu=!1;function rg(i){Ji===null?Ji=[i]:Ji.push(i)}function LM(i){wl=!0,rg(i)}function Dr(){if(!Zu&&Ji!==null){Zu=!0;var i=0,s=at;try{var l=Ji;for(at=1;i<l.length;i++){var u=l[i];do u=u(!0);while(u!==null)}Ji=null,wl=!1}catch(m){throw Ji!==null&&(Ji=Ji.slice(i+1)),sl(ce,Dr),m}finally{at=s,Zu=!1}}return null}var Xs=[],Ys=0,Al=null,Cl=0,ri=[],si=0,os=null,er=1,tr="";function as(i,s){Xs[Ys++]=Cl,Xs[Ys++]=Al,Al=i,Cl=s}function sg(i,s,l){ri[si++]=er,ri[si++]=tr,ri[si++]=os,os=i;var u=er;i=tr;var m=32-nt(u)-1;u&=~(1<<m),l+=1;var x=32-nt(s)+m;if(30<x){var C=m-m%5;x=(u&(1<<C)-1).toString(32),u>>=C,m-=C,er=1<<32-nt(s)+m|l<<m|u,tr=x+i}else er=1<<x|l<<m|u,tr=i}function Qu(i){i.return!==null&&(as(i,1),sg(i,1,0))}function Ju(i){for(;i===Al;)Al=Xs[--Ys],Xs[Ys]=null,Cl=Xs[--Ys],Xs[Ys]=null;for(;i===os;)os=ri[--si],ri[si]=null,tr=ri[--si],ri[si]=null,er=ri[--si],ri[si]=null}var $n=null,Zn=null,Gt=!1,xi=null;function og(i,s){var l=ci(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function ag(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,$n=i,Zn=br(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,$n=i,Zn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=os!==null?{id:er,overflow:tr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=ci(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,$n=i,Zn=null,!0):!1;default:return!1}}function ef(i){return(i.mode&1)!==0&&(i.flags&128)===0}function tf(i){if(Gt){var s=Zn;if(s){var l=s;if(!ag(i,s)){if(ef(i))throw Error(t(418));s=br(l.nextSibling);var u=$n;s&&ag(i,s)?og(u,l):(i.flags=i.flags&-4097|2,Gt=!1,$n=i)}}else{if(ef(i))throw Error(t(418));i.flags=i.flags&-4097|2,Gt=!1,$n=i}}}function lg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;$n=i}function bl(i){if(i!==$n)return!1;if(!Gt)return lg(i),Gt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Xu(i.type,i.memoizedProps)),s&&(s=Zn)){if(ef(i))throw cg(),Error(t(418));for(;s;)og(i,s),s=br(s.nextSibling)}if(lg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Zn=br(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Zn=null}}else Zn=$n?br(i.stateNode.nextSibling):null;return!0}function cg(){for(var i=Zn;i;)i=br(i.nextSibling)}function qs(){Zn=$n=null,Gt=!1}function nf(i){xi===null?xi=[i]:xi.push(i)}var IM=R.ReactCurrentBatchConfig;function aa(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,i));var m=u,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(C){var U=m.refs;C===null?delete U[x]:U[x]=C},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Rl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function ug(i){var s=i._init;return s(i._payload)}function fg(i){function s(J,G){if(i){var se=J.deletions;se===null?(J.deletions=[G],J.flags|=16):se.push(G)}}function l(J,G){if(!i)return null;for(;G!==null;)s(J,G),G=G.sibling;return null}function u(J,G){for(J=new Map;G!==null;)G.key!==null?J.set(G.key,G):J.set(G.index,G),G=G.sibling;return J}function m(J,G){return J=Br(J,G),J.index=0,J.sibling=null,J}function x(J,G,se){return J.index=se,i?(se=J.alternate,se!==null?(se=se.index,se<G?(J.flags|=2,G):se):(J.flags|=2,G)):(J.flags|=1048576,G)}function C(J){return i&&J.alternate===null&&(J.flags|=2),J}function U(J,G,se,Te){return G===null||G.tag!==6?(G=qf(se,J.mode,Te),G.return=J,G):(G=m(G,se),G.return=J,G)}function B(J,G,se,Te){var Je=se.type;return Je===F?xe(J,G,se.props.children,Te,se.key):G!==null&&(G.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===re&&ug(Je)===G.type)?(Te=m(G,se.props),Te.ref=aa(J,G,se),Te.return=J,Te):(Te=Jl(se.type,se.key,se.props,null,J.mode,Te),Te.ref=aa(J,G,se),Te.return=J,Te)}function ae(J,G,se,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==se.containerInfo||G.stateNode.implementation!==se.implementation?(G=Kf(se,J.mode,Te),G.return=J,G):(G=m(G,se.children||[]),G.return=J,G)}function xe(J,G,se,Te,Je){return G===null||G.tag!==7?(G=ms(se,J.mode,Te,Je),G.return=J,G):(G=m(G,se),G.return=J,G)}function _e(J,G,se){if(typeof G=="string"&&G!==""||typeof G=="number")return G=qf(""+G,J.mode,se),G.return=J,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case L:return se=Jl(G.type,G.key,G.props,null,J.mode,se),se.ref=aa(J,null,G),se.return=J,se;case I:return G=Kf(G,J.mode,se),G.return=J,G;case re:var Te=G._init;return _e(J,Te(G._payload),se)}if(vt(G)||ne(G))return G=ms(G,J.mode,se,null),G.return=J,G;Rl(J,G)}return null}function ve(J,G,se,Te){var Je=G!==null?G.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Je!==null?null:U(J,G,""+se,Te);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case L:return se.key===Je?B(J,G,se,Te):null;case I:return se.key===Je?ae(J,G,se,Te):null;case re:return Je=se._init,ve(J,G,Je(se._payload),Te)}if(vt(se)||ne(se))return Je!==null?null:xe(J,G,se,Te,null);Rl(J,se)}return null}function Oe(J,G,se,Te,Je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return J=J.get(se)||null,U(G,J,""+Te,Je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case L:return J=J.get(Te.key===null?se:Te.key)||null,B(G,J,Te,Je);case I:return J=J.get(Te.key===null?se:Te.key)||null,ae(G,J,Te,Je);case re:var it=Te._init;return Oe(J,G,se,it(Te._payload),Je)}if(vt(Te)||ne(Te))return J=J.get(se)||null,xe(G,J,Te,Je,null);Rl(G,Te)}return null}function We(J,G,se,Te){for(var Je=null,it=null,rt=G,lt=G=0,pn=null;rt!==null&&lt<se.length;lt++){rt.index>lt?(pn=rt,rt=null):pn=rt.sibling;var At=ve(J,rt,se[lt],Te);if(At===null){rt===null&&(rt=pn);break}i&&rt&&At.alternate===null&&s(J,rt),G=x(At,G,lt),it===null?Je=At:it.sibling=At,it=At,rt=pn}if(lt===se.length)return l(J,rt),Gt&&as(J,lt),Je;if(rt===null){for(;lt<se.length;lt++)rt=_e(J,se[lt],Te),rt!==null&&(G=x(rt,G,lt),it===null?Je=rt:it.sibling=rt,it=rt);return Gt&&as(J,lt),Je}for(rt=u(J,rt);lt<se.length;lt++)pn=Oe(rt,J,lt,se[lt],Te),pn!==null&&(i&&pn.alternate!==null&&rt.delete(pn.key===null?lt:pn.key),G=x(pn,G,lt),it===null?Je=pn:it.sibling=pn,it=pn);return i&&rt.forEach(function(zr){return s(J,zr)}),Gt&&as(J,lt),Je}function qe(J,G,se,Te){var Je=ne(se);if(typeof Je!="function")throw Error(t(150));if(se=Je.call(se),se==null)throw Error(t(151));for(var it=Je=null,rt=G,lt=G=0,pn=null,At=se.next();rt!==null&&!At.done;lt++,At=se.next()){rt.index>lt?(pn=rt,rt=null):pn=rt.sibling;var zr=ve(J,rt,At.value,Te);if(zr===null){rt===null&&(rt=pn);break}i&&rt&&zr.alternate===null&&s(J,rt),G=x(zr,G,lt),it===null?Je=zr:it.sibling=zr,it=zr,rt=pn}if(At.done)return l(J,rt),Gt&&as(J,lt),Je;if(rt===null){for(;!At.done;lt++,At=se.next())At=_e(J,At.value,Te),At!==null&&(G=x(At,G,lt),it===null?Je=At:it.sibling=At,it=At);return Gt&&as(J,lt),Je}for(rt=u(J,rt);!At.done;lt++,At=se.next())At=Oe(rt,J,lt,At.value,Te),At!==null&&(i&&At.alternate!==null&&rt.delete(At.key===null?lt:At.key),G=x(At,G,lt),it===null?Je=At:it.sibling=At,it=At);return i&&rt.forEach(function(dE){return s(J,dE)}),Gt&&as(J,lt),Je}function en(J,G,se,Te){if(typeof se=="object"&&se!==null&&se.type===F&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case L:e:{for(var Je=se.key,it=G;it!==null;){if(it.key===Je){if(Je=se.type,Je===F){if(it.tag===7){l(J,it.sibling),G=m(it,se.props.children),G.return=J,J=G;break e}}else if(it.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===re&&ug(Je)===it.type){l(J,it.sibling),G=m(it,se.props),G.ref=aa(J,it,se),G.return=J,J=G;break e}l(J,it);break}else s(J,it);it=it.sibling}se.type===F?(G=ms(se.props.children,J.mode,Te,se.key),G.return=J,J=G):(Te=Jl(se.type,se.key,se.props,null,J.mode,Te),Te.ref=aa(J,G,se),Te.return=J,J=Te)}return C(J);case I:e:{for(it=se.key;G!==null;){if(G.key===it)if(G.tag===4&&G.stateNode.containerInfo===se.containerInfo&&G.stateNode.implementation===se.implementation){l(J,G.sibling),G=m(G,se.children||[]),G.return=J,J=G;break e}else{l(J,G);break}else s(J,G);G=G.sibling}G=Kf(se,J.mode,Te),G.return=J,J=G}return C(J);case re:return it=se._init,en(J,G,it(se._payload),Te)}if(vt(se))return We(J,G,se,Te);if(ne(se))return qe(J,G,se,Te);Rl(J,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,G!==null&&G.tag===6?(l(J,G.sibling),G=m(G,se),G.return=J,J=G):(l(J,G),G=qf(se,J.mode,Te),G.return=J,J=G),C(J)):l(J,G)}return en}var Ks=fg(!0),dg=fg(!1),Pl=Rr(null),Dl=null,$s=null,rf=null;function sf(){rf=$s=Dl=null}function of(i){var s=Pl.current;Vt(Pl),i._currentValue=s}function af(i,s,l){for(;i!==null;){var u=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),i===l)break;i=i.return}}function Zs(i,s){Dl=i,rf=$s=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Hn=!0),i.firstContext=null)}function oi(i){var s=i._currentValue;if(rf!==i)if(i={context:i,memoizedValue:s,next:null},$s===null){if(Dl===null)throw Error(t(308));$s=i,Dl.dependencies={lanes:0,firstContext:i}}else $s=$s.next=i;return s}var ls=null;function lf(i){ls===null?ls=[i]:ls.push(i)}function hg(i,s,l,u){var m=s.interleaved;return m===null?(l.next=l,lf(s)):(l.next=m.next,m.next=l),s.interleaved=l,nr(i,u)}function nr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Lr=!1;function cf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ir(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ir(i,s,l){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var m=u.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),u.pending=s,nr(i,l)}return m=u.interleaved,m===null?(s.next=s,lf(u)):(s.next=m.next,m.next=s),u.interleaved=s,nr(i,l)}function Ll(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,bt(i,l)}}function mg(i,s){var l=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=C:x=x.next=C,l=l.next}while(l!==null);x===null?m=x=s:x=x.next=s}else m=x=s;l={baseState:u.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:u.shared,effects:u.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Il(i,s,l,u){var m=i.updateQueue;Lr=!1;var x=m.firstBaseUpdate,C=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var B=U,ae=B.next;B.next=null,C===null?x=ae:C.next=ae,C=B;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==C&&(U===null?xe.firstBaseUpdate=ae:U.next=ae,xe.lastBaseUpdate=B))}if(x!==null){var _e=m.baseState;C=0,xe=ae=B=null,U=x;do{var ve=U.lane,Oe=U.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Oe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var We=i,qe=U;switch(ve=s,Oe=l,qe.tag){case 1:if(We=qe.payload,typeof We=="function"){_e=We.call(Oe,_e,ve);break e}_e=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=qe.payload,ve=typeof We=="function"?We.call(Oe,_e,ve):We,ve==null)break e;_e=le({},_e,ve);break e;case 2:Lr=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,ve=m.effects,ve===null?m.effects=[U]:ve.push(U))}else Oe={eventTime:Oe,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(ae=xe=Oe,B=_e):xe=xe.next=Oe,C|=ve;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,m.lastBaseUpdate=ve,m.shared.pending=null}}while(!0);if(xe===null&&(B=_e),m.baseState=B,m.firstBaseUpdate=ae,m.lastBaseUpdate=xe,s=m.shared.interleaved,s!==null){m=s;do C|=m.lane,m=m.next;while(m!==s)}else x===null&&(m.shared.lanes=0);fs|=C,i.lanes=C,i.memoizedState=_e}}function gg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var u=i[s],m=u.callback;if(m!==null){if(u.callback=null,u=l,typeof m!="function")throw Error(t(191,m));m.call(u)}}}var la={},Fi=Rr(la),ca=Rr(la),ua=Rr(la);function cs(i){if(i===la)throw Error(t(174));return i}function uf(i,s){switch(Ot(ua,s),Ot(ca,i),Ot(Fi,la),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ge(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ge(s,i)}Vt(Fi),Ot(Fi,s)}function Qs(){Vt(Fi),Vt(ca),Vt(ua)}function vg(i){cs(ua.current);var s=cs(Fi.current),l=ge(s,i.type);s!==l&&(Ot(ca,i),Ot(Fi,l))}function ff(i){ca.current===i&&(Vt(Fi),Vt(ca))}var Wt=Rr(0);function Nl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var df=[];function hf(){for(var i=0;i<df.length;i++)df[i]._workInProgressVersionPrimary=null;df.length=0}var Fl=R.ReactCurrentDispatcher,pf=R.ReactCurrentBatchConfig,us=0,jt=null,an=null,dn=null,Ul=!1,fa=!1,da=0,NM=0;function Sn(){throw Error(t(321))}function mf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!vi(i[l],s[l]))return!1;return!0}function gf(i,s,l,u,m,x){if(us=x,jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Fl.current=i===null||i.memoizedState===null?kM:BM,i=l(u,m),fa){x=0;do{if(fa=!1,da=0,25<=x)throw Error(t(301));x+=1,dn=an=null,s.updateQueue=null,Fl.current=zM,i=l(u,m)}while(fa)}if(Fl.current=Bl,s=an!==null&&an.next!==null,us=0,dn=an=jt=null,Ul=!1,s)throw Error(t(300));return i}function vf(){var i=da!==0;return da=0,i}function Ui(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?jt.memoizedState=dn=i:dn=dn.next=i,dn}function ai(){if(an===null){var i=jt.alternate;i=i!==null?i.memoizedState:null}else i=an.next;var s=dn===null?jt.memoizedState:dn.next;if(s!==null)dn=s,an=i;else{if(i===null)throw Error(t(310));an=i,i={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},dn===null?jt.memoizedState=dn=i:dn=dn.next=i}return dn}function ha(i,s){return typeof s=="function"?s(i):s}function xf(i){var s=ai(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=an,m=u.baseQueue,x=l.pending;if(x!==null){if(m!==null){var C=m.next;m.next=x.next,x.next=C}u.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,u=u.baseState;var U=C=null,B=null,ae=x;do{var xe=ae.lane;if((us&xe)===xe)B!==null&&(B=B.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),u=ae.hasEagerState?ae.eagerState:i(u,ae.action);else{var _e={lane:xe,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};B===null?(U=B=_e,C=u):B=B.next=_e,jt.lanes|=xe,fs|=xe}ae=ae.next}while(ae!==null&&ae!==x);B===null?C=u:B.next=U,vi(u,s.memoizedState)||(Hn=!0),s.memoizedState=u,s.baseState=C,s.baseQueue=B,l.lastRenderedState=u}if(i=l.interleaved,i!==null){m=i;do x=m.lane,jt.lanes|=x,fs|=x,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function _f(i){var s=ai(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var u=l.dispatch,m=l.pending,x=s.memoizedState;if(m!==null){l.pending=null;var C=m=m.next;do x=i(x,C.action),C=C.next;while(C!==m);vi(x,s.memoizedState)||(Hn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,u]}function xg(){}function _g(i,s){var l=jt,u=ai(),m=s(),x=!vi(u.memoizedState,m);if(x&&(u.memoizedState=m,Hn=!0),u=u.queue,yf(Mg.bind(null,l,u,i),[i]),u.getSnapshot!==s||x||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,pa(9,Sg.bind(null,l,u,m,s),void 0,null),hn===null)throw Error(t(349));(us&30)!==0||yg(l,s,m)}return m}function yg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=jt.updateQueue,s===null?(s={lastEffect:null,stores:null},jt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Sg(i,s,l,u){s.value=l,s.getSnapshot=u,Eg(s)&&Tg(i)}function Mg(i,s,l){return l(function(){Eg(s)&&Tg(i)})}function Eg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!vi(i,l)}catch{return!0}}function Tg(i){var s=nr(i,1);s!==null&&Mi(s,i,1,-1)}function wg(i){var s=Ui();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:i},s.queue=i,i=i.dispatch=OM.bind(null,jt,i),[s.memoizedState,i]}function pa(i,s,l,u){return i={tag:i,create:s,destroy:l,deps:u,next:null},s=jt.updateQueue,s===null?(s={lastEffect:null,stores:null},jt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(u=l.next,l.next=i,i.next=u,s.lastEffect=i)),i}function Ag(){return ai().memoizedState}function Ol(i,s,l,u){var m=Ui();jt.flags|=i,m.memoizedState=pa(1|s,l,void 0,u===void 0?null:u)}function kl(i,s,l,u){var m=ai();u=u===void 0?null:u;var x=void 0;if(an!==null){var C=an.memoizedState;if(x=C.destroy,u!==null&&mf(u,C.deps)){m.memoizedState=pa(s,l,x,u);return}}jt.flags|=i,m.memoizedState=pa(1|s,l,x,u)}function Cg(i,s){return Ol(8390656,8,i,s)}function yf(i,s){return kl(2048,8,i,s)}function bg(i,s){return kl(4,2,i,s)}function Rg(i,s){return kl(4,4,i,s)}function Pg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Dg(i,s,l){return l=l!=null?l.concat([i]):null,kl(4,4,Pg.bind(null,s,i),l)}function Sf(){}function Lg(i,s){var l=ai();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&mf(s,u[1])?u[0]:(l.memoizedState=[i,s],i)}function Ig(i,s){var l=ai();s=s===void 0?null:s;var u=l.memoizedState;return u!==null&&s!==null&&mf(s,u[1])?u[0]:(i=i(),l.memoizedState=[i,s],i)}function Ng(i,s,l){return(us&21)===0?(i.baseState&&(i.baseState=!1,Hn=!0),i.memoizedState=l):(vi(l,s)||(l=kn(),jt.lanes|=l,fs|=l,i.baseState=!0),s)}function FM(i,s){var l=at;at=l!==0&&4>l?l:4,i(!0);var u=pf.transition;pf.transition={};try{i(!1),s()}finally{at=l,pf.transition=u}}function Fg(){return ai().memoizedState}function UM(i,s,l){var u=Or(i);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},Ug(i))Og(s,l);else if(l=hg(i,s,l,u),l!==null){var m=Ln();Mi(l,i,u,m),kg(l,s,u)}}function OM(i,s,l){var u=Or(i),m={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(Ug(i))Og(s,m);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var C=s.lastRenderedState,U=x(C,l);if(m.hasEagerState=!0,m.eagerState=U,vi(U,C)){var B=s.interleaved;B===null?(m.next=m,lf(s)):(m.next=B.next,B.next=m),s.interleaved=m;return}}catch{}finally{}l=hg(i,s,m,u),l!==null&&(m=Ln(),Mi(l,i,u,m),kg(l,s,u))}}function Ug(i){var s=i.alternate;return i===jt||s!==null&&s===jt}function Og(i,s){fa=Ul=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function kg(i,s,l){if((l&4194240)!==0){var u=s.lanes;u&=i.pendingLanes,l|=u,s.lanes=l,bt(i,l)}}var Bl={readContext:oi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},kM={readContext:oi,useCallback:function(i,s){return Ui().memoizedState=[i,s===void 0?null:s],i},useContext:oi,useEffect:Cg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Ol(4194308,4,Pg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Ol(4194308,4,i,s)},useInsertionEffect:function(i,s){return Ol(4,2,i,s)},useMemo:function(i,s){var l=Ui();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var u=Ui();return s=l!==void 0?l(s):s,u.memoizedState=u.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},u.queue=i,i=i.dispatch=UM.bind(null,jt,i),[u.memoizedState,i]},useRef:function(i){var s=Ui();return i={current:i},s.memoizedState=i},useState:wg,useDebugValue:Sf,useDeferredValue:function(i){return Ui().memoizedState=i},useTransition:function(){var i=wg(!1),s=i[0];return i=FM.bind(null,i[1]),Ui().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var u=jt,m=Ui();if(Gt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),hn===null)throw Error(t(349));(us&30)!==0||yg(u,s,l)}m.memoizedState=l;var x={value:l,getSnapshot:s};return m.queue=x,Cg(Mg.bind(null,u,x,i),[i]),u.flags|=2048,pa(9,Sg.bind(null,u,x,l,s),void 0,null),l},useId:function(){var i=Ui(),s=hn.identifierPrefix;if(Gt){var l=tr,u=er;l=(u&~(1<<32-nt(u)-1)).toString(32)+l,s=":"+s+"R"+l,l=da++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=NM++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},BM={readContext:oi,useCallback:Lg,useContext:oi,useEffect:yf,useImperativeHandle:Dg,useInsertionEffect:bg,useLayoutEffect:Rg,useMemo:Ig,useReducer:xf,useRef:Ag,useState:function(){return xf(ha)},useDebugValue:Sf,useDeferredValue:function(i){var s=ai();return Ng(s,an.memoizedState,i)},useTransition:function(){var i=xf(ha)[0],s=ai().memoizedState;return[i,s]},useMutableSource:xg,useSyncExternalStore:_g,useId:Fg,unstable_isNewReconciler:!1},zM={readContext:oi,useCallback:Lg,useContext:oi,useEffect:yf,useImperativeHandle:Dg,useInsertionEffect:bg,useLayoutEffect:Rg,useMemo:Ig,useReducer:_f,useRef:Ag,useState:function(){return _f(ha)},useDebugValue:Sf,useDeferredValue:function(i){var s=ai();return an===null?s.memoizedState=i:Ng(s,an.memoizedState,i)},useTransition:function(){var i=_f(ha)[0],s=ai().memoizedState;return[i,s]},useMutableSource:xg,useSyncExternalStore:_g,useId:Fg,unstable_isNewReconciler:!1};function _i(i,s){if(i&&i.defaultProps){s=le({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Mf(i,s,l,u){s=i.memoizedState,l=l(u,s),l=l==null?s:le({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var zl={isMounted:function(i){return(i=i._reactInternals)?Ii(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var u=Ln(),m=Or(i),x=ir(u,m);x.payload=s,l!=null&&(x.callback=l),s=Ir(i,x,m),s!==null&&(Mi(s,i,m,u),Ll(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var u=Ln(),m=Or(i),x=ir(u,m);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Ir(i,x,m),s!==null&&(Mi(s,i,m,u),Ll(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Ln(),u=Or(i),m=ir(l,u);m.tag=2,s!=null&&(m.callback=s),s=Ir(i,m,u),s!==null&&(Mi(s,i,u,l),Ll(s,i,u))}};function Bg(i,s,l,u,m,x,C){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,x,C):s.prototype&&s.prototype.isPureReactComponent?!ea(l,u)||!ea(m,x):!0}function zg(i,s,l){var u=!1,m=Pr,x=s.contextType;return typeof x=="object"&&x!==null?x=oi(x):(m=Vn(s)?ss:yn.current,u=s.contextTypes,x=(u=u!=null)?js(i,m):Pr),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=zl,i.stateNode=s,s._reactInternals=i,u&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=x),s}function Vg(i,s,l,u){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,u),s.state!==i&&zl.enqueueReplaceState(s,s.state,null)}function Ef(i,s,l,u){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},cf(i);var x=s.contextType;typeof x=="object"&&x!==null?m.context=oi(x):(x=Vn(s)?ss:yn.current,m.context=js(i,x)),m.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Mf(i,s,x,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&zl.enqueueReplaceState(m,m.state,null),Il(i,l,m,u),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function Js(i,s){try{var l="",u=s;do l+=Ke(u),u=u.return;while(u);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:m,digest:null}}function Tf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function wf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var VM=typeof WeakMap=="function"?WeakMap:Map;function Hg(i,s,l){l=ir(-1,l),l.tag=3,l.payload={element:null};var u=s.value;return l.callback=function(){Yl||(Yl=!0,zf=u),wf(i,s)},l}function Gg(i,s,l){l=ir(-1,l),l.tag=3;var u=i.type.getDerivedStateFromError;if(typeof u=="function"){var m=s.value;l.payload=function(){return u(m)},l.callback=function(){wf(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){wf(i,s),typeof u!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var C=s.stack;this.componentDidCatch(s.value,{componentStack:C!==null?C:""})}),l}function Wg(i,s,l){var u=i.pingCache;if(u===null){u=i.pingCache=new VM;var m=new Set;u.set(s,m)}else m=u.get(s),m===void 0&&(m=new Set,u.set(s,m));m.has(l)||(m.add(l),i=tE.bind(null,i,s,l),s.then(i,i))}function jg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Xg(i,s,l,u,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ir(-1,1),s.tag=2,Ir(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var HM=R.ReactCurrentOwner,Hn=!1;function Dn(i,s,l,u){s.child=i===null?dg(s,null,l,u):Ks(s,i.child,l,u)}function Yg(i,s,l,u,m){l=l.render;var x=s.ref;return Zs(s,m),u=gf(i,s,l,u,x,m),l=vf(),i!==null&&!Hn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,rr(i,s,m)):(Gt&&l&&Qu(s),s.flags|=1,Dn(i,s,u,m),s.child)}function qg(i,s,l,u,m){if(i===null){var x=l.type;return typeof x=="function"&&!Yf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,Kg(i,s,x,u,m)):(i=Jl(l.type,null,u,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&m)===0){var C=x.memoizedProps;if(l=l.compare,l=l!==null?l:ea,l(C,u)&&i.ref===s.ref)return rr(i,s,m)}return s.flags|=1,i=Br(x,u),i.ref=s.ref,i.return=s,s.child=i}function Kg(i,s,l,u,m){if(i!==null){var x=i.memoizedProps;if(ea(x,u)&&i.ref===s.ref)if(Hn=!1,s.pendingProps=u=x,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Hn=!0);else return s.lanes=i.lanes,rr(i,s,m)}return Af(i,s,l,u,m)}function $g(i,s,l){var u=s.pendingProps,m=u.children,x=i!==null?i.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ot(to,Qn),Qn|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ot(to,Qn),Qn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:l,Ot(to,Qn),Qn|=u}else x!==null?(u=x.baseLanes|l,s.memoizedState=null):u=l,Ot(to,Qn),Qn|=u;return Dn(i,s,m,l),s.child}function Zg(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Af(i,s,l,u,m){var x=Vn(l)?ss:yn.current;return x=js(s,x),Zs(s,m),l=gf(i,s,l,u,x,m),u=vf(),i!==null&&!Hn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,rr(i,s,m)):(Gt&&u&&Qu(s),s.flags|=1,Dn(i,s,l,m),s.child)}function Qg(i,s,l,u,m){if(Vn(l)){var x=!0;Tl(s)}else x=!1;if(Zs(s,m),s.stateNode===null)Hl(i,s),zg(s,l,u),Ef(s,l,u,m),u=!0;else if(i===null){var C=s.stateNode,U=s.memoizedProps;C.props=U;var B=C.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=oi(ae):(ae=Vn(l)?ss:yn.current,ae=js(s,ae));var xe=l.getDerivedStateFromProps,_e=typeof xe=="function"||typeof C.getSnapshotBeforeUpdate=="function";_e||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(U!==u||B!==ae)&&Vg(s,C,u,ae),Lr=!1;var ve=s.memoizedState;C.state=ve,Il(s,u,C,m),B=s.memoizedState,U!==u||ve!==B||zn.current||Lr?(typeof xe=="function"&&(Mf(s,l,xe,u),B=s.memoizedState),(U=Lr||Bg(s,l,U,u,ve,B,ae))?(_e||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(s.flags|=4194308)):(typeof C.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=B),C.props=u,C.state=B,C.context=ae,u=U):(typeof C.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{C=s.stateNode,pg(i,s),U=s.memoizedProps,ae=s.type===s.elementType?U:_i(s.type,U),C.props=ae,_e=s.pendingProps,ve=C.context,B=l.contextType,typeof B=="object"&&B!==null?B=oi(B):(B=Vn(l)?ss:yn.current,B=js(s,B));var Oe=l.getDerivedStateFromProps;(xe=typeof Oe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(U!==_e||ve!==B)&&Vg(s,C,u,B),Lr=!1,ve=s.memoizedState,C.state=ve,Il(s,u,C,m);var We=s.memoizedState;U!==_e||ve!==We||zn.current||Lr?(typeof Oe=="function"&&(Mf(s,l,Oe,u),We=s.memoizedState),(ae=Lr||Bg(s,l,ae,u,ve,We,B)||!1)?(xe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,We,B),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,We,B)),typeof C.componentDidUpdate=="function"&&(s.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof C.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=We),C.props=u,C.state=We,C.context=B,u=ae):(typeof C.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),u=!1)}return Cf(i,s,l,u,x,m)}function Cf(i,s,l,u,m,x){Zg(i,s);var C=(s.flags&128)!==0;if(!u&&!C)return m&&ig(s,l,!1),rr(i,s,x);u=s.stateNode,HM.current=s;var U=C&&typeof l.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,i!==null&&C?(s.child=Ks(s,i.child,null,x),s.child=Ks(s,null,U,x)):Dn(i,s,U,x),s.memoizedState=u.state,m&&ig(s,l,!0),s.child}function Jg(i){var s=i.stateNode;s.pendingContext?tg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&tg(i,s.context,!1),uf(i,s.containerInfo)}function e0(i,s,l,u,m){return qs(),nf(m),s.flags|=256,Dn(i,s,l,u),s.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function Rf(i){return{baseLanes:i,cachePool:null,transitions:null}}function t0(i,s,l){var u=s.pendingProps,m=Wt.current,x=!1,C=(s.flags&128)!==0,U;if((U=C)||(U=i!==null&&i.memoizedState===null?!1:(m&2)!==0),U?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Ot(Wt,m&1),i===null)return tf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(C=u.children,i=u.fallback,x?(u=s.mode,x=s.child,C={mode:"hidden",children:C},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=ec(C,u,0,null),i=ms(i,u,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=Rf(l),s.memoizedState=bf,i):Pf(s,C));if(m=i.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return GM(i,s,C,u,U,m,l);if(x){x=u.fallback,C=s.mode,m=i.child,U=m.sibling;var B={mode:"hidden",children:u.children};return(C&1)===0&&s.child!==m?(u=s.child,u.childLanes=0,u.pendingProps=B,s.deletions=null):(u=Br(m,B),u.subtreeFlags=m.subtreeFlags&14680064),U!==null?x=Br(U,x):(x=ms(x,C,l,null),x.flags|=2),x.return=s,u.return=s,u.sibling=x,s.child=u,u=x,x=s.child,C=i.child.memoizedState,C=C===null?Rf(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=i.childLanes&~l,s.memoizedState=bf,u}return x=i.child,i=x.sibling,u=Br(x,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=l),u.return=s,u.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=u,s.memoizedState=null,u}function Pf(i,s){return s=ec({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Vl(i,s,l,u){return u!==null&&nf(u),Ks(s,i.child,null,l),i=Pf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function GM(i,s,l,u,m,x,C){if(l)return s.flags&256?(s.flags&=-257,u=Tf(Error(t(422))),Vl(i,s,C,u)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=u.fallback,m=s.mode,u=ec({mode:"visible",children:u.children},m,0,null),x=ms(x,m,C,null),x.flags|=2,u.return=s,x.return=s,u.sibling=x,s.child=u,(s.mode&1)!==0&&Ks(s,i.child,null,C),s.child.memoizedState=Rf(C),s.memoizedState=bf,x);if((s.mode&1)===0)return Vl(i,s,C,null);if(m.data==="$!"){if(u=m.nextSibling&&m.nextSibling.dataset,u)var U=u.dgst;return u=U,x=Error(t(419)),u=Tf(x,u,void 0),Vl(i,s,C,u)}if(U=(C&i.childLanes)!==0,Hn||U){if(u=hn,u!==null){switch(C&-C){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(u.suspendedLanes|C))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,nr(i,m),Mi(u,i,m,-1))}return Xf(),u=Tf(Error(t(421))),Vl(i,s,C,u)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=nE.bind(null,i),m._reactRetry=s,null):(i=x.treeContext,Zn=br(m.nextSibling),$n=s,Gt=!0,xi=null,i!==null&&(ri[si++]=er,ri[si++]=tr,ri[si++]=os,er=i.id,tr=i.overflow,os=s),s=Pf(s,u.children),s.flags|=4096,s)}function n0(i,s,l){i.lanes|=s;var u=i.alternate;u!==null&&(u.lanes|=s),af(i.return,s,l)}function Df(i,s,l,u,m){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:m}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=l,x.tailMode=m)}function i0(i,s,l){var u=s.pendingProps,m=u.revealOrder,x=u.tail;if(Dn(i,s,u.children,l),u=Wt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&n0(i,l,s);else if(i.tag===19)n0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}if(Ot(Wt,u),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Nl(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Df(s,!1,m,l,x);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Nl(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Df(s,!0,l,null,x);break;case"together":Df(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Hl(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function rr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),fs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Br(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Br(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function WM(i,s,l){switch(s.tag){case 3:Jg(s),qs();break;case 5:vg(s);break;case 1:Vn(s.type)&&Tl(s);break;case 4:uf(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,m=s.memoizedProps.value;Ot(Pl,u._currentValue),u._currentValue=m;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Ot(Wt,Wt.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?t0(i,s,l):(Ot(Wt,Wt.current&1),i=rr(i,s,l),i!==null?i.sibling:null);Ot(Wt,Wt.current&1);break;case 19:if(u=(l&s.childLanes)!==0,(i.flags&128)!==0){if(u)return i0(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ot(Wt,Wt.current),u)break;return null;case 22:case 23:return s.lanes=0,$g(i,s,l)}return rr(i,s,l)}var r0,Lf,s0,o0;r0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Lf=function(){},s0=function(i,s,l,u){var m=i.memoizedProps;if(m!==u){i=s.stateNode,cs(Fi.current);var x=null;switch(l){case"input":m=St(i,m),u=St(i,u),x=[];break;case"select":m=le({},m,{value:void 0}),u=le({},u,{value:void 0}),x=[];break;case"textarea":m=Xe(i,m),u=Xe(i,u),x=[];break;default:typeof m.onClick!="function"&&typeof u.onClick=="function"&&(i.onclick=Sl)}He(l,u);var C;l=null;for(ae in m)if(!u.hasOwnProperty(ae)&&m.hasOwnProperty(ae)&&m[ae]!=null)if(ae==="style"){var U=m[ae];for(C in U)U.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?x||(x=[]):(x=x||[]).push(ae,null));for(ae in u){var B=u[ae];if(U=m!=null?m[ae]:void 0,u.hasOwnProperty(ae)&&B!==U&&(B!=null||U!=null))if(ae==="style")if(U){for(C in U)!U.hasOwnProperty(C)||B&&B.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in B)B.hasOwnProperty(C)&&U[C]!==B[C]&&(l||(l={}),l[C]=B[C])}else l||(x||(x=[]),x.push(ae,l)),l=B;else ae==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,U=U?U.__html:void 0,B!=null&&U!==B&&(x=x||[]).push(ae,B)):ae==="children"?typeof B!="string"&&typeof B!="number"||(x=x||[]).push(ae,""+B):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(B!=null&&ae==="onScroll"&&zt("scroll",i),x||U===B||(x=[])):(x=x||[]).push(ae,B))}l&&(x=x||[]).push("style",l);var ae=x;(s.updateQueue=ae)&&(s.flags|=4)}},o0=function(i,s,l,u){l!==u&&(s.flags|=4)};function ma(i,s){if(!Gt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function Mn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,u=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,u|=m.subtreeFlags&14680064,u|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,u|=m.subtreeFlags,u|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=u,i.childLanes=l,s}function jM(i,s,l){var u=s.pendingProps;switch(Ju(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(s),null;case 1:return Vn(s.type)&&El(),Mn(s),null;case 3:return u=s.stateNode,Qs(),Vt(zn),Vt(yn),hf(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(i===null||i.child===null)&&(bl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,xi!==null&&(Gf(xi),xi=null))),Lf(i,s),Mn(s),null;case 5:ff(s);var m=cs(ua.current);if(l=s.type,i!==null&&s.stateNode!=null)s0(i,s,l,u,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Mn(s),null}if(i=cs(Fi.current),bl(s)){u=s.stateNode,l=s.type;var x=s.memoizedProps;switch(u[Ni]=s,u[sa]=x,i=(s.mode&1)!==0,l){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(m=0;m<na.length;m++)zt(na[m],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":Pt(u,x),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},zt("invalid",u);break;case"textarea":N(u,x),zt("invalid",u)}He(l,x),m=null;for(var C in x)if(x.hasOwnProperty(C)){var U=x[C];C==="children"?typeof U=="string"?u.textContent!==U&&(x.suppressHydrationWarning!==!0&&yl(u.textContent,U,i),m=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(x.suppressHydrationWarning!==!0&&yl(u.textContent,U,i),m=["children",""+U]):o.hasOwnProperty(C)&&U!=null&&C==="onScroll"&&zt("scroll",u)}switch(l){case"input":$e(u),z(u,x,!0);break;case"textarea":$e(u),j(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=Sl)}u=m,s.updateQueue=u,u!==null&&(s.flags|=4)}else{C=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=pe(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=C.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof u.is=="string"?i=C.createElement(l,{is:u.is}):(i=C.createElement(l),l==="select"&&(C=i,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):i=C.createElementNS(i,l),i[Ni]=s,i[sa]=u,r0(i,s,!1,!1),s.stateNode=i;e:{switch(C=Le(l,u),l){case"dialog":zt("cancel",i),zt("close",i),m=u;break;case"iframe":case"object":case"embed":zt("load",i),m=u;break;case"video":case"audio":for(m=0;m<na.length;m++)zt(na[m],i);m=u;break;case"source":zt("error",i),m=u;break;case"img":case"image":case"link":zt("error",i),zt("load",i),m=u;break;case"details":zt("toggle",i),m=u;break;case"input":Pt(i,u),m=St(i,u),zt("invalid",i);break;case"option":m=u;break;case"select":i._wrapperState={wasMultiple:!!u.multiple},m=le({},u,{value:void 0}),zt("invalid",i);break;case"textarea":N(i,u),m=Xe(i,u),zt("invalid",i);break;default:m=u}He(l,m),U=m;for(x in U)if(U.hasOwnProperty(x)){var B=U[x];x==="style"?we(i,B):x==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Ve(i,B)):x==="children"?typeof B=="string"?(l!=="textarea"||B!=="")&&Ae(i,B):typeof B=="number"&&Ae(i,""+B):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?B!=null&&x==="onScroll"&&zt("scroll",i):B!=null&&b(i,x,B,C))}switch(l){case"input":$e(i),z(i,u,!1);break;case"textarea":$e(i),j(i);break;case"option":u.value!=null&&i.setAttribute("value",""+me(u.value));break;case"select":i.multiple=!!u.multiple,x=u.value,x!=null?Mt(i,!!u.multiple,x,!1):u.defaultValue!=null&&Mt(i,!!u.multiple,u.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Sl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Mn(s),null;case 6:if(i&&s.stateNode!=null)o0(i,s,i.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(l=cs(ua.current),cs(Fi.current),bl(s)){if(u=s.stateNode,l=s.memoizedProps,u[Ni]=s,(x=u.nodeValue!==l)&&(i=$n,i!==null))switch(i.tag){case 3:yl(u.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&yl(u.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Ni]=s,s.stateNode=u}return Mn(s),null;case 13:if(Vt(Wt),u=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Gt&&Zn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)cg(),qs(),s.flags|=98560,x=!1;else if(x=bl(s),u!==null&&u.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ni]=s}else qs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Mn(s),x=!1}else xi!==null&&(Gf(xi),xi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(u=u!==null,u!==(i!==null&&i.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(Wt.current&1)!==0?ln===0&&(ln=3):Xf())),s.updateQueue!==null&&(s.flags|=4),Mn(s),null);case 4:return Qs(),Lf(i,s),i===null&&ia(s.stateNode.containerInfo),Mn(s),null;case 10:return of(s.type._context),Mn(s),null;case 17:return Vn(s.type)&&El(),Mn(s),null;case 19:if(Vt(Wt),x=s.memoizedState,x===null)return Mn(s),null;if(u=(s.flags&128)!==0,C=x.rendering,C===null)if(u)ma(x,!1);else{if(ln!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(C=Nl(i),C!==null){for(s.flags|=128,ma(x,!1),u=C.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=l,l=s.child;l!==null;)x=l,i=u,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,i=C.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ot(Wt,Wt.current&1|2),s.child}i=i.sibling}x.tail!==null&&P()>no&&(s.flags|=128,u=!0,ma(x,!1),s.lanes=4194304)}else{if(!u)if(i=Nl(C),i!==null){if(s.flags|=128,u=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),ma(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!Gt)return Mn(s),null}else 2*P()-x.renderingStartTime>no&&l!==1073741824&&(s.flags|=128,u=!0,ma(x,!1),s.lanes=4194304);x.isBackwards?(C.sibling=s.child,s.child=C):(l=x.last,l!==null?l.sibling=C:s.child=C,x.last=C)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=P(),s.sibling=null,l=Wt.current,Ot(Wt,u?l&1|2:l&1),s):(Mn(s),null);case 22:case 23:return jf(),u=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(Qn&1073741824)!==0&&(Mn(s),s.subtreeFlags&6&&(s.flags|=8192)):Mn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function XM(i,s){switch(Ju(s),s.tag){case 1:return Vn(s.type)&&El(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Qs(),Vt(zn),Vt(yn),hf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return ff(s),null;case 13:if(Vt(Wt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));qs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Vt(Wt),null;case 4:return Qs(),null;case 10:return of(s.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var Gl=!1,En=!1,YM=typeof WeakSet=="function"?WeakSet:Set,Be=null;function eo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){Yt(i,s,u)}else l.current=null}function If(i,s,l){try{l()}catch(u){Yt(i,s,u)}}var a0=!1;function qM(i,s){if(Wu=cl,i=Bm(),Uu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var m=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var C=0,U=-1,B=-1,ae=0,xe=0,_e=i,ve=null;t:for(;;){for(var Oe;_e!==l||m!==0&&_e.nodeType!==3||(U=C+m),_e!==x||u!==0&&_e.nodeType!==3||(B=C+u),_e.nodeType===3&&(C+=_e.nodeValue.length),(Oe=_e.firstChild)!==null;)ve=_e,_e=Oe;for(;;){if(_e===i)break t;if(ve===l&&++ae===m&&(U=C),ve===x&&++xe===u&&(B=C),(Oe=_e.nextSibling)!==null)break;_e=ve,ve=_e.parentNode}_e=Oe}l=U===-1||B===-1?null:{start:U,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(ju={focusedElem:i,selectionRange:l},cl=!1,Be=s;Be!==null;)if(s=Be,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Be=i;else for(;Be!==null;){s=Be;try{var We=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var qe=We.memoizedProps,en=We.memoizedState,J=s.stateNode,G=J.getSnapshotBeforeUpdate(s.elementType===s.type?qe:_i(s.type,qe),en);J.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var se=s.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Yt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,Be=i;break}Be=s.return}return We=a0,a0=!1,We}function ga(i,s,l){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var m=u=u.next;do{if((m.tag&i)===i){var x=m.destroy;m.destroy=void 0,x!==void 0&&If(s,l,x)}m=m.next}while(m!==u)}}function Wl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var u=l.create;l.destroy=u()}l=l.next}while(l!==s)}}function Nf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function l0(i){var s=i.alternate;s!==null&&(i.alternate=null,l0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Ni],delete s[sa],delete s[Ku],delete s[PM],delete s[DM])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function c0(i){return i.tag===5||i.tag===3||i.tag===4}function u0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||c0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Ff(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Sl));else if(u!==4&&(i=i.child,i!==null))for(Ff(i,s,l),i=i.sibling;i!==null;)Ff(i,s,l),i=i.sibling}function Uf(i,s,l){var u=i.tag;if(u===5||u===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(u!==4&&(i=i.child,i!==null))for(Uf(i,s,l),i=i.sibling;i!==null;)Uf(i,s,l),i=i.sibling}var gn=null,yi=!1;function Nr(i,s,l){for(l=l.child;l!==null;)f0(i,s,l),l=l.sibling}function f0(i,s,l){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Re,l)}catch{}switch(l.tag){case 5:En||eo(l,s);case 6:var u=gn,m=yi;gn=null,Nr(i,s,l),gn=u,yi=m,gn!==null&&(yi?(i=gn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):gn.removeChild(l.stateNode));break;case 18:gn!==null&&(yi?(i=gn,l=l.stateNode,i.nodeType===8?qu(i.parentNode,l):i.nodeType===1&&qu(i,l),qo(i)):qu(gn,l.stateNode));break;case 4:u=gn,m=yi,gn=l.stateNode.containerInfo,yi=!0,Nr(i,s,l),gn=u,yi=m;break;case 0:case 11:case 14:case 15:if(!En&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){m=u=u.next;do{var x=m,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&If(l,s,C),m=m.next}while(m!==u)}Nr(i,s,l);break;case 1:if(!En&&(eo(l,s),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(U){Yt(l,s,U)}Nr(i,s,l);break;case 21:Nr(i,s,l);break;case 22:l.mode&1?(En=(u=En)||l.memoizedState!==null,Nr(i,s,l),En=u):Nr(i,s,l);break;default:Nr(i,s,l)}}function d0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new YM),s.forEach(function(u){var m=iE.bind(null,i,u);l.has(u)||(l.add(u),u.then(m,m))})}}function Si(i,s){var l=s.deletions;if(l!==null)for(var u=0;u<l.length;u++){var m=l[u];try{var x=i,C=s,U=C;e:for(;U!==null;){switch(U.tag){case 5:gn=U.stateNode,yi=!1;break e;case 3:gn=U.stateNode.containerInfo,yi=!0;break e;case 4:gn=U.stateNode.containerInfo,yi=!0;break e}U=U.return}if(gn===null)throw Error(t(160));f0(x,C,m),gn=null,yi=!1;var B=m.alternate;B!==null&&(B.return=null),m.return=null}catch(ae){Yt(m,s,ae)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)h0(s,i),s=s.sibling}function h0(i,s){var l=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Si(s,i),Oi(i),u&4){try{ga(3,i,i.return),Wl(3,i)}catch(qe){Yt(i,i.return,qe)}try{ga(5,i,i.return)}catch(qe){Yt(i,i.return,qe)}}break;case 1:Si(s,i),Oi(i),u&512&&l!==null&&eo(l,l.return);break;case 5:if(Si(s,i),Oi(i),u&512&&l!==null&&eo(l,l.return),i.flags&32){var m=i.stateNode;try{Ae(m,"")}catch(qe){Yt(i,i.return,qe)}}if(u&4&&(m=i.stateNode,m!=null)){var x=i.memoizedProps,C=l!==null?l.memoizedProps:x,U=i.type,B=i.updateQueue;if(i.updateQueue=null,B!==null)try{U==="input"&&x.type==="radio"&&x.name!=null&&ft(m,x),Le(U,C);var ae=Le(U,x);for(C=0;C<B.length;C+=2){var xe=B[C],_e=B[C+1];xe==="style"?we(m,_e):xe==="dangerouslySetInnerHTML"?Ve(m,_e):xe==="children"?Ae(m,_e):b(m,xe,_e,ae)}switch(U){case"input":Bt(m,x);break;case"textarea":A(m,x);break;case"select":var ve=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Oe=x.value;Oe!=null?Mt(m,!!x.multiple,Oe,!1):ve!==!!x.multiple&&(x.defaultValue!=null?Mt(m,!!x.multiple,x.defaultValue,!0):Mt(m,!!x.multiple,x.multiple?[]:"",!1))}m[sa]=x}catch(qe){Yt(i,i.return,qe)}}break;case 6:if(Si(s,i),Oi(i),u&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,x=i.memoizedProps;try{m.nodeValue=x}catch(qe){Yt(i,i.return,qe)}}break;case 3:if(Si(s,i),Oi(i),u&4&&l!==null&&l.memoizedState.isDehydrated)try{qo(s.containerInfo)}catch(qe){Yt(i,i.return,qe)}break;case 4:Si(s,i),Oi(i);break;case 13:Si(s,i),Oi(i),m=i.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(Bf=P())),u&4&&d0(i);break;case 22:if(xe=l!==null&&l.memoizedState!==null,i.mode&1?(En=(ae=En)||xe,Si(s,i),En=ae):Si(s,i),Oi(i),u&8192){if(ae=i.memoizedState!==null,(i.stateNode.isHidden=ae)&&!xe&&(i.mode&1)!==0)for(Be=i,xe=i.child;xe!==null;){for(_e=Be=xe;Be!==null;){switch(ve=Be,Oe=ve.child,ve.tag){case 0:case 11:case 14:case 15:ga(4,ve,ve.return);break;case 1:eo(ve,ve.return);var We=ve.stateNode;if(typeof We.componentWillUnmount=="function"){u=ve,l=ve.return;try{s=u,We.props=s.memoizedProps,We.state=s.memoizedState,We.componentWillUnmount()}catch(qe){Yt(u,l,qe)}}break;case 5:eo(ve,ve.return);break;case 22:if(ve.memoizedState!==null){g0(_e);continue}}Oe!==null?(Oe.return=ve,Be=Oe):g0(_e)}xe=xe.sibling}e:for(xe=null,_e=i;;){if(_e.tag===5){if(xe===null){xe=_e;try{m=_e.stateNode,ae?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(U=_e.stateNode,B=_e.memoizedProps.style,C=B!=null&&B.hasOwnProperty("display")?B.display:null,U.style.display=ye("display",C))}catch(qe){Yt(i,i.return,qe)}}}else if(_e.tag===6){if(xe===null)try{_e.stateNode.nodeValue=ae?"":_e.memoizedProps}catch(qe){Yt(i,i.return,qe)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===i)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===i)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===i)break e;xe===_e&&(xe=null),_e=_e.return}xe===_e&&(xe=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:Si(s,i),Oi(i),u&4&&d0(i);break;case 21:break;default:Si(s,i),Oi(i)}}function Oi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(c0(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var m=u.stateNode;u.flags&32&&(Ae(m,""),u.flags&=-33);var x=u0(i);Uf(i,x,m);break;case 3:case 4:var C=u.stateNode.containerInfo,U=u0(i);Ff(i,U,C);break;default:throw Error(t(161))}}catch(B){Yt(i,i.return,B)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function KM(i,s,l){Be=i,p0(i)}function p0(i,s,l){for(var u=(i.mode&1)!==0;Be!==null;){var m=Be,x=m.child;if(m.tag===22&&u){var C=m.memoizedState!==null||Gl;if(!C){var U=m.alternate,B=U!==null&&U.memoizedState!==null||En;U=Gl;var ae=En;if(Gl=C,(En=B)&&!ae)for(Be=m;Be!==null;)C=Be,B=C.child,C.tag===22&&C.memoizedState!==null?v0(m):B!==null?(B.return=C,Be=B):v0(m);for(;x!==null;)Be=x,p0(x),x=x.sibling;Be=m,Gl=U,En=ae}m0(i)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,Be=x):m0(i)}}function m0(i){for(;Be!==null;){var s=Be;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:En||Wl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!En)if(l===null)u.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:_i(s.type,l.memoizedProps);u.componentDidUpdate(m,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&gg(s,x,u);break;case 3:var C=s.updateQueue;if(C!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}gg(s,C,l)}break;case 5:var U=s.stateNode;if(l===null&&s.flags&4){l=U;var B=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&l.focus();break;case"img":B.src&&(l.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ae=s.alternate;if(ae!==null){var xe=ae.memoizedState;if(xe!==null){var _e=xe.dehydrated;_e!==null&&qo(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||s.flags&512&&Nf(s)}catch(ve){Yt(s,s.return,ve)}}if(s===i){Be=null;break}if(l=s.sibling,l!==null){l.return=s.return,Be=l;break}Be=s.return}}function g0(i){for(;Be!==null;){var s=Be;if(s===i){Be=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Be=l;break}Be=s.return}}function v0(i){for(;Be!==null;){var s=Be;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Wl(4,s)}catch(B){Yt(s,l,B)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var m=s.return;try{u.componentDidMount()}catch(B){Yt(s,m,B)}}var x=s.return;try{Nf(s)}catch(B){Yt(s,x,B)}break;case 5:var C=s.return;try{Nf(s)}catch(B){Yt(s,C,B)}}}catch(B){Yt(s,s.return,B)}if(s===i){Be=null;break}var U=s.sibling;if(U!==null){U.return=s.return,Be=U;break}Be=s.return}}var $M=Math.ceil,jl=R.ReactCurrentDispatcher,Of=R.ReactCurrentOwner,li=R.ReactCurrentBatchConfig,Tt=0,hn=null,rn=null,vn=0,Qn=0,to=Rr(0),ln=0,va=null,fs=0,Xl=0,kf=0,xa=null,Gn=null,Bf=0,no=1/0,sr=null,Yl=!1,zf=null,Fr=null,ql=!1,Ur=null,Kl=0,_a=0,Vf=null,$l=-1,Zl=0;function Ln(){return(Tt&6)!==0?P():$l!==-1?$l:$l=P()}function Or(i){return(i.mode&1)===0?1:(Tt&2)!==0&&vn!==0?vn&-vn:IM.transition!==null?(Zl===0&&(Zl=kn()),Zl):(i=at,i!==0||(i=window.event,i=i===void 0?16:_m(i.type)),i)}function Mi(i,s,l,u){if(50<_a)throw _a=0,Vf=null,Error(t(185));qn(i,l,u),((Tt&2)===0||i!==hn)&&(i===hn&&((Tt&2)===0&&(Xl|=l),ln===4&&kr(i,vn)),Wn(i,u),l===1&&Tt===0&&(s.mode&1)===0&&(no=P()+500,wl&&Dr()))}function Wn(i,s){var l=i.callbackNode;Pn(i,s);var u=Qt(i,i===hn?vn:0);if(u===0)l!==null&&ol(l),i.callbackNode=null,i.callbackPriority=0;else if(s=u&-u,i.callbackPriority!==s){if(l!=null&&ol(l),s===1)i.tag===0?LM(_0.bind(null,i)):rg(_0.bind(null,i)),bM(function(){(Tt&6)===0&&Dr()}),l=null;else{switch(gi(u)){case 1:l=ce;break;case 4:l=oe;break;case 16:l=ie;break;case 536870912:l=ke;break;default:l=ie}l=C0(l,x0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function x0(i,s){if($l=-1,Zl=0,(Tt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(io()&&i.callbackNode!==l)return null;var u=Qt(i,i===hn?vn:0);if(u===0)return null;if((u&30)!==0||(u&i.expiredLanes)!==0||s)s=Ql(i,u);else{s=u;var m=Tt;Tt|=2;var x=S0();(hn!==i||vn!==s)&&(sr=null,no=P()+500,hs(i,s));do try{JM();break}catch(U){y0(i,U)}while(!0);sf(),jl.current=x,Tt=m,rn!==null?s=0:(hn=null,vn=0,s=ln)}if(s!==0){if(s===2&&(m=xt(i),m!==0&&(u=m,s=Hf(i,m))),s===1)throw l=va,hs(i,0),kr(i,u),Wn(i,P()),l;if(s===6)kr(i,u);else{if(m=i.current.alternate,(u&30)===0&&!ZM(m)&&(s=Ql(i,u),s===2&&(x=xt(i),x!==0&&(u=x,s=Hf(i,x))),s===1))throw l=va,hs(i,0),kr(i,u),Wn(i,P()),l;switch(i.finishedWork=m,i.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:ps(i,Gn,sr);break;case 3:if(kr(i,u),(u&130023424)===u&&(s=Bf+500-P(),10<s)){if(Qt(i,0)!==0)break;if(m=i.suspendedLanes,(m&u)!==u){Ln(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=Yu(ps.bind(null,i,Gn,sr),s);break}ps(i,Gn,sr);break;case 4:if(kr(i,u),(u&4194240)===u)break;for(s=i.eventTimes,m=-1;0<u;){var C=31-nt(u);x=1<<C,C=s[C],C>m&&(m=C),u&=~x}if(u=m,u=P()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*$M(u/1960))-u,10<u){i.timeoutHandle=Yu(ps.bind(null,i,Gn,sr),u);break}ps(i,Gn,sr);break;case 5:ps(i,Gn,sr);break;default:throw Error(t(329))}}}return Wn(i,P()),i.callbackNode===l?x0.bind(null,i):null}function Hf(i,s){var l=xa;return i.current.memoizedState.isDehydrated&&(hs(i,s).flags|=256),i=Ql(i,s),i!==2&&(s=Gn,Gn=l,s!==null&&Gf(s)),i}function Gf(i){Gn===null?Gn=i:Gn.push.apply(Gn,i)}function ZM(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var m=l[u],x=m.getSnapshot;m=m.value;try{if(!vi(x(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function kr(i,s){for(s&=~kf,s&=~Xl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-nt(s),u=1<<l;i[l]=-1,s&=~u}}function _0(i){if((Tt&6)!==0)throw Error(t(327));io();var s=Qt(i,0);if((s&1)===0)return Wn(i,P()),null;var l=Ql(i,s);if(i.tag!==0&&l===2){var u=xt(i);u!==0&&(s=u,l=Hf(i,u))}if(l===1)throw l=va,hs(i,0),kr(i,s),Wn(i,P()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ps(i,Gn,sr),Wn(i,P()),null}function Wf(i,s){var l=Tt;Tt|=1;try{return i(s)}finally{Tt=l,Tt===0&&(no=P()+500,wl&&Dr())}}function ds(i){Ur!==null&&Ur.tag===0&&(Tt&6)===0&&io();var s=Tt;Tt|=1;var l=li.transition,u=at;try{if(li.transition=null,at=1,i)return i()}finally{at=u,li.transition=l,Tt=s,(Tt&6)===0&&Dr()}}function jf(){Qn=to.current,Vt(to)}function hs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,CM(l)),rn!==null)for(l=rn.return;l!==null;){var u=l;switch(Ju(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&El();break;case 3:Qs(),Vt(zn),Vt(yn),hf();break;case 5:ff(u);break;case 4:Qs();break;case 13:Vt(Wt);break;case 19:Vt(Wt);break;case 10:of(u.type._context);break;case 22:case 23:jf()}l=l.return}if(hn=i,rn=i=Br(i.current,null),vn=Qn=s,ln=0,va=null,kf=Xl=fs=0,Gn=xa=null,ls!==null){for(s=0;s<ls.length;s++)if(l=ls[s],u=l.interleaved,u!==null){l.interleaved=null;var m=u.next,x=l.pending;if(x!==null){var C=x.next;x.next=m,u.next=C}l.pending=u}ls=null}return i}function y0(i,s){do{var l=rn;try{if(sf(),Fl.current=Bl,Ul){for(var u=jt.memoizedState;u!==null;){var m=u.queue;m!==null&&(m.pending=null),u=u.next}Ul=!1}if(us=0,dn=an=jt=null,fa=!1,da=0,Of.current=null,l===null||l.return===null){ln=1,va=s,rn=null;break}e:{var x=i,C=l.return,U=l,B=s;if(s=vn,U.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ae=B,xe=U,_e=xe.tag;if((xe.mode&1)===0&&(_e===0||_e===11||_e===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Oe=jg(C);if(Oe!==null){Oe.flags&=-257,Xg(Oe,C,U,x,s),Oe.mode&1&&Wg(x,ae,s),s=Oe,B=ae;var We=s.updateQueue;if(We===null){var qe=new Set;qe.add(B),s.updateQueue=qe}else We.add(B);break e}else{if((s&1)===0){Wg(x,ae,s),Xf();break e}B=Error(t(426))}}else if(Gt&&U.mode&1){var en=jg(C);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),Xg(en,C,U,x,s),nf(Js(B,U));break e}}x=B=Js(B,U),ln!==4&&(ln=2),xa===null?xa=[x]:xa.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var J=Hg(x,B,s);mg(x,J);break e;case 1:U=B;var G=x.type,se=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Fr===null||!Fr.has(se)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=Gg(x,U,s);mg(x,Te);break e}}x=x.return}while(x!==null)}E0(l)}catch(Je){s=Je,rn===l&&l!==null&&(rn=l=l.return);continue}break}while(!0)}function S0(){var i=jl.current;return jl.current=Bl,i===null?Bl:i}function Xf(){(ln===0||ln===3||ln===2)&&(ln=4),hn===null||(fs&268435455)===0&&(Xl&268435455)===0||kr(hn,vn)}function Ql(i,s){var l=Tt;Tt|=2;var u=S0();(hn!==i||vn!==s)&&(sr=null,hs(i,s));do try{QM();break}catch(m){y0(i,m)}while(!0);if(sf(),Tt=l,jl.current=u,rn!==null)throw Error(t(261));return hn=null,vn=0,ln}function QM(){for(;rn!==null;)M0(rn)}function JM(){for(;rn!==null&&!Mu();)M0(rn)}function M0(i){var s=A0(i.alternate,i,Qn);i.memoizedProps=i.pendingProps,s===null?E0(i):rn=s,Of.current=null}function E0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=jM(l,s,Qn),l!==null){rn=l;return}}else{if(l=XM(l,s),l!==null){l.flags&=32767,rn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{ln=6,rn=null;return}}if(s=s.sibling,s!==null){rn=s;return}rn=s=i}while(s!==null);ln===0&&(ln=5)}function ps(i,s,l){var u=at,m=li.transition;try{li.transition=null,at=1,eE(i,s,l,u)}finally{li.transition=m,at=u}return null}function eE(i,s,l,u){do io();while(Ur!==null);if((Tt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Sr(i,x),i===hn&&(rn=hn=null,vn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||ql||(ql=!0,C0(ie,function(){return io(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=li.transition,li.transition=null;var C=at;at=1;var U=Tt;Tt|=4,Of.current=null,qM(i,l),h0(l,i),yM(ju),cl=!!Wu,ju=Wu=null,i.current=l,KM(l),Eu(),Tt=U,at=C,li.transition=x}else i.current=l;if(ql&&(ql=!1,Ur=i,Kl=m),x=i.pendingLanes,x===0&&(Fr=null),et(l.stateNode),Wn(i,P()),s!==null)for(u=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],u(m.value,{componentStack:m.stack,digest:m.digest});if(Yl)throw Yl=!1,i=zf,zf=null,i;return(Kl&1)!==0&&i.tag!==0&&io(),x=i.pendingLanes,(x&1)!==0?i===Vf?_a++:(_a=0,Vf=i):_a=0,Dr(),null}function io(){if(Ur!==null){var i=gi(Kl),s=li.transition,l=at;try{if(li.transition=null,at=16>i?16:i,Ur===null)var u=!1;else{if(i=Ur,Ur=null,Kl=0,(Tt&6)!==0)throw Error(t(331));var m=Tt;for(Tt|=4,Be=i.current;Be!==null;){var x=Be,C=x.child;if((Be.flags&16)!==0){var U=x.deletions;if(U!==null){for(var B=0;B<U.length;B++){var ae=U[B];for(Be=ae;Be!==null;){var xe=Be;switch(xe.tag){case 0:case 11:case 15:ga(8,xe,x)}var _e=xe.child;if(_e!==null)_e.return=xe,Be=_e;else for(;Be!==null;){xe=Be;var ve=xe.sibling,Oe=xe.return;if(l0(xe),xe===ae){Be=null;break}if(ve!==null){ve.return=Oe,Be=ve;break}Be=Oe}}}var We=x.alternate;if(We!==null){var qe=We.child;if(qe!==null){We.child=null;do{var en=qe.sibling;qe.sibling=null,qe=en}while(qe!==null)}}Be=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,Be=C;else e:for(;Be!==null;){if(x=Be,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ga(9,x,x.return)}var J=x.sibling;if(J!==null){J.return=x.return,Be=J;break e}Be=x.return}}var G=i.current;for(Be=G;Be!==null;){C=Be;var se=C.child;if((C.subtreeFlags&2064)!==0&&se!==null)se.return=C,Be=se;else e:for(C=G;Be!==null;){if(U=Be,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Wl(9,U)}}catch(Je){Yt(U,U.return,Je)}if(U===C){Be=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,Be=Te;break e}Be=U.return}}if(Tt=m,Dr(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Re,i)}catch{}u=!0}return u}finally{at=l,li.transition=s}}return!1}function T0(i,s,l){s=Js(l,s),s=Hg(i,s,1),i=Ir(i,s,1),s=Ln(),i!==null&&(qn(i,1,s),Wn(i,s))}function Yt(i,s,l){if(i.tag===3)T0(i,i,l);else for(;s!==null;){if(s.tag===3){T0(s,i,l);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Fr===null||!Fr.has(u))){i=Js(l,i),i=Gg(s,i,1),s=Ir(s,i,1),i=Ln(),s!==null&&(qn(s,1,i),Wn(s,i));break}}s=s.return}}function tE(i,s,l){var u=i.pingCache;u!==null&&u.delete(s),s=Ln(),i.pingedLanes|=i.suspendedLanes&l,hn===i&&(vn&l)===l&&(ln===4||ln===3&&(vn&130023424)===vn&&500>P()-Bf?hs(i,0):kf|=l),Wn(i,s)}function w0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ft,Ft<<=1,(Ft&130023424)===0&&(Ft=4194304)));var l=Ln();i=nr(i,s),i!==null&&(qn(i,s,l),Wn(i,l))}function nE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),w0(i,l)}function iE(i,s){var l=0;switch(i.tag){case 13:var u=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:u=i.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),w0(i,l)}var A0;A0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||zn.current)Hn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Hn=!1,WM(i,s,l);Hn=(i.flags&131072)!==0}else Hn=!1,Gt&&(s.flags&1048576)!==0&&sg(s,Cl,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Hl(i,s),i=s.pendingProps;var m=js(s,yn.current);Zs(s,l),m=gf(null,s,u,i,m,l);var x=vf();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Vn(u)?(x=!0,Tl(s)):x=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,cf(s),m.updater=zl,s.stateNode=m,m._reactInternals=s,Ef(s,u,i,l),s=Cf(null,s,u,!0,x,l)):(s.tag=0,Gt&&x&&Qu(s),Dn(null,s,m,l),s=s.child),s;case 16:u=s.elementType;e:{switch(Hl(i,s),i=s.pendingProps,m=u._init,u=m(u._payload),s.type=u,m=s.tag=sE(u),i=_i(u,i),m){case 0:s=Af(null,s,u,i,l);break e;case 1:s=Qg(null,s,u,i,l);break e;case 11:s=Yg(null,s,u,i,l);break e;case 14:s=qg(null,s,u,_i(u.type,i),l);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,m=s.pendingProps,m=s.elementType===u?m:_i(u,m),Af(i,s,u,m,l);case 1:return u=s.type,m=s.pendingProps,m=s.elementType===u?m:_i(u,m),Qg(i,s,u,m,l);case 3:e:{if(Jg(s),i===null)throw Error(t(387));u=s.pendingProps,x=s.memoizedState,m=x.element,pg(i,s),Il(s,u,null,l);var C=s.memoizedState;if(u=C.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){m=Js(Error(t(423)),s),s=e0(i,s,u,l,m);break e}else if(u!==m){m=Js(Error(t(424)),s),s=e0(i,s,u,l,m);break e}else for(Zn=br(s.stateNode.containerInfo.firstChild),$n=s,Gt=!0,xi=null,l=dg(s,null,u,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(qs(),u===m){s=rr(i,s,l);break e}Dn(i,s,u,l)}s=s.child}return s;case 5:return vg(s),i===null&&tf(s),u=s.type,m=s.pendingProps,x=i!==null?i.memoizedProps:null,C=m.children,Xu(u,m)?C=null:x!==null&&Xu(u,x)&&(s.flags|=32),Zg(i,s),Dn(i,s,C,l),s.child;case 6:return i===null&&tf(s),null;case 13:return t0(i,s,l);case 4:return uf(s,s.stateNode.containerInfo),u=s.pendingProps,i===null?s.child=Ks(s,null,u,l):Dn(i,s,u,l),s.child;case 11:return u=s.type,m=s.pendingProps,m=s.elementType===u?m:_i(u,m),Yg(i,s,u,m,l);case 7:return Dn(i,s,s.pendingProps,l),s.child;case 8:return Dn(i,s,s.pendingProps.children,l),s.child;case 12:return Dn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(u=s.type._context,m=s.pendingProps,x=s.memoizedProps,C=m.value,Ot(Pl,u._currentValue),u._currentValue=C,x!==null)if(vi(x.value,C)){if(x.children===m.children&&!zn.current){s=rr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var U=x.dependencies;if(U!==null){C=x.child;for(var B=U.firstContext;B!==null;){if(B.context===u){if(x.tag===1){B=ir(-1,l&-l),B.tag=2;var ae=x.updateQueue;if(ae!==null){ae=ae.shared;var xe=ae.pending;xe===null?B.next=B:(B.next=xe.next,xe.next=B),ae.pending=B}}x.lanes|=l,B=x.alternate,B!==null&&(B.lanes|=l),af(x.return,l,s),U.lanes|=l;break}B=B.next}}else if(x.tag===10)C=x.type===s.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=l,U=C.alternate,U!==null&&(U.lanes|=l),af(C,l,s),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===s){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}Dn(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,u=s.pendingProps.children,Zs(s,l),m=oi(m),u=u(m),s.flags|=1,Dn(i,s,u,l),s.child;case 14:return u=s.type,m=_i(u,s.pendingProps),m=_i(u.type,m),qg(i,s,u,m,l);case 15:return Kg(i,s,s.type,s.pendingProps,l);case 17:return u=s.type,m=s.pendingProps,m=s.elementType===u?m:_i(u,m),Hl(i,s),s.tag=1,Vn(u)?(i=!0,Tl(s)):i=!1,Zs(s,l),zg(s,u,m),Ef(s,u,m,l),Cf(null,s,u,!0,i,l);case 19:return i0(i,s,l);case 22:return $g(i,s,l)}throw Error(t(156,s.tag))};function C0(i,s){return sl(i,s)}function rE(i,s,l,u){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(i,s,l,u){return new rE(i,s,l,u)}function Yf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function sE(i){if(typeof i=="function")return Yf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Q)return 11;if(i===te)return 14}return 2}function Br(i,s){var l=i.alternate;return l===null?(l=ci(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Jl(i,s,l,u,m,x){var C=2;if(u=i,typeof i=="function")Yf(i)&&(C=1);else if(typeof i=="string")C=5;else e:switch(i){case F:return ms(l.children,m,x,s);case E:C=8,m|=8;break;case D:return i=ci(12,l,s,m|2),i.elementType=D,i.lanes=x,i;case ee:return i=ci(13,l,s,m),i.elementType=ee,i.lanes=x,i;case ue:return i=ci(19,l,s,m),i.elementType=ue,i.lanes=x,i;case W:return ec(l,m,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Z:C=10;break e;case k:C=9;break e;case Q:C=11;break e;case te:C=14;break e;case re:C=16,u=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ci(C,l,s,m),s.elementType=i,s.type=u,s.lanes=x,s}function ms(i,s,l,u){return i=ci(7,i,u,s),i.lanes=l,i}function ec(i,s,l,u){return i=ci(22,i,u,s),i.elementType=W,i.lanes=l,i.stateNode={isHidden:!1},i}function qf(i,s,l){return i=ci(6,i,null,s),i.lanes=l,i}function Kf(i,s,l){return s=ci(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function oE(i,s,l,u,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bn(0),this.expirationTimes=Bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.identifierPrefix=u,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function $f(i,s,l,u,m,x,C,U,B){return i=new oE(i,s,l,U,B),s===1?(s=1,x===!0&&(s|=8)):s=0,x=ci(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},cf(x),i}function aE(i,s,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:i,containerInfo:s,implementation:l}}function b0(i){if(!i)return Pr;i=i._reactInternals;e:{if(Ii(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Vn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Vn(l))return ng(i,l,s)}return s}function R0(i,s,l,u,m,x,C,U,B){return i=$f(l,u,!0,i,m,x,C,U,B),i.context=b0(null),l=i.current,u=Ln(),m=Or(l),x=ir(u,m),x.callback=s??null,Ir(l,x,m),i.current.lanes=m,qn(i,m,u),Wn(i,u),i}function tc(i,s,l,u){var m=s.current,x=Ln(),C=Or(m);return l=b0(l),s.context===null?s.context=l:s.pendingContext=l,s=ir(x,C),s.payload={element:i},u=u===void 0?null:u,u!==null&&(s.callback=u),i=Ir(m,s,C),i!==null&&(Mi(i,m,C,x),Ll(i,m,C)),C}function nc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function P0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Zf(i,s){P0(i,s),(i=i.alternate)&&P0(i,s)}function lE(){return null}var D0=typeof reportError=="function"?reportError:function(i){console.error(i)};function Qf(i){this._internalRoot=i}ic.prototype.render=Qf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));tc(i,s,null,null)},ic.prototype.unmount=Qf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ds(function(){tc(null,i,null,null)}),s[Qi]=null}};function ic(i){this._internalRoot=i}ic.prototype.unstable_scheduleHydration=function(i){if(i){var s=Go();i={blockedOn:null,target:i,priority:s};for(var l=0;l<wr.length&&s!==0&&s<wr[l].priority;l++);wr.splice(l,0,i),l===0&&vm(i)}};function Jf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function rc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function L0(){}function cE(i,s,l,u,m){if(m){if(typeof u=="function"){var x=u;u=function(){var ae=nc(C);x.call(ae)}}var C=R0(s,u,i,0,null,!1,!1,"",L0);return i._reactRootContainer=C,i[Qi]=C.current,ia(i.nodeType===8?i.parentNode:i),ds(),C}for(;m=i.lastChild;)i.removeChild(m);if(typeof u=="function"){var U=u;u=function(){var ae=nc(B);U.call(ae)}}var B=$f(i,0,!1,null,null,!1,!1,"",L0);return i._reactRootContainer=B,i[Qi]=B.current,ia(i.nodeType===8?i.parentNode:i),ds(function(){tc(s,B,l,u)}),B}function sc(i,s,l,u,m){var x=l._reactRootContainer;if(x){var C=x;if(typeof m=="function"){var U=m;m=function(){var B=nc(C);U.call(B)}}tc(s,C,i,m)}else C=cE(l,s,i,m,u);return nc(C)}Jt=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=yt(s.pendingLanes);l!==0&&(bt(s,l|1),Wn(s,P()),(Tt&6)===0&&(no=P()+500,Dr()))}break;case 13:ds(function(){var u=nr(i,1);if(u!==null){var m=Ln();Mi(u,i,1,m)}}),Zf(i,1)}},ii=function(i){if(i.tag===13){var s=nr(i,134217728);if(s!==null){var l=Ln();Mi(s,i,134217728,l)}Zf(i,134217728)}},Zi=function(i){if(i.tag===13){var s=Or(i),l=nr(i,s);if(l!==null){var u=Ln();Mi(l,i,s,u)}Zf(i,s)}},Go=function(){return at},mm=function(i,s){var l=at;try{return at=i,s()}finally{at=l}},Ce=function(i,s,l){switch(s){case"input":if(Bt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var u=l[s];if(u!==i&&u.form===i.form){var m=Ml(u);if(!m)throw Error(t(90));Zt(u),Bt(u,m)}}}break;case"textarea":A(i,l);break;case"select":s=l.value,s!=null&&Mt(i,!!l.multiple,s,!1)}},ot=Wf,It=ds;var uE={usingClientEntryPoint:!1,Events:[oa,Gs,Ml,de,Ge,Wf]},ya={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fE={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=il(i),i===null?null:i.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||lE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oc.isDisabled&&oc.supportsFiber)try{Re=oc.inject(fE),Fe=oc}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uE,jn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(s))throw Error(t(200));return aE(i,s,null,l)},jn.createRoot=function(i,s){if(!Jf(i))throw Error(t(299));var l=!1,u="",m=D0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=$f(i,1,!1,null,null,l,!1,u,m),i[Qi]=s.current,ia(i.nodeType===8?i.parentNode:i),new Qf(s)},jn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=il(s),i=i===null?null:i.stateNode,i},jn.flushSync=function(i){return ds(i)},jn.hydrate=function(i,s,l){if(!rc(s))throw Error(t(200));return sc(null,i,s,!0,l)},jn.hydrateRoot=function(i,s,l){if(!Jf(i))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,m=!1,x="",C=D0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),s=R0(s,null,i,1,l??null,m,!1,x,C),i[Qi]=s.current,ia(i),u)for(i=0;i<u.length;i++)l=u[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new ic(s)},jn.render=function(i,s,l){if(!rc(s))throw Error(t(200));return sc(null,i,s,!1,l)},jn.unmountComponentAtNode=function(i){if(!rc(i))throw Error(t(40));return i._reactRootContainer?(ds(function(){sc(null,null,i,!1,function(){i._reactRootContainer=null,i[Qi]=null})}),!0):!1},jn.unstable_batchedUpdates=Wf,jn.unstable_renderSubtreeIntoContainer=function(i,s,l,u){if(!rc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return sc(i,s,l,!1,u)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var z0;function _E(){if(z0)return nd.exports;z0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),nd.exports=xE(),nd.exports}var V0;function yE(){if(V0)return ac;V0=1;var n=_E();return ac.createRoot=n.createRoot,ac.hydrateRoot=n.hydrateRoot,ac}var SE=yE(),be=Sp();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mp="183",ME=0,H0=1,EE=2,zc=1,TE=2,Da=3,Qr=0,Yn=1,fr=2,hr=0,wo=1,G0=2,W0=3,j0=4,wE=5,As=100,AE=101,CE=102,bE=103,RE=104,PE=200,DE=201,LE=202,IE=203,ih=204,rh=205,NE=206,FE=207,UE=208,OE=209,kE=210,BE=211,zE=212,VE=213,HE=214,sh=0,oh=1,ah=2,bo=3,lh=4,ch=5,uh=6,fh=7,d_=0,GE=1,WE=2,Wi=0,h_=1,p_=2,m_=3,g_=4,v_=5,x_=6,__=7,y_=300,Is=301,Ro=302,sd=303,od=304,hu=306,dh=1e3,dr=1001,hh=1002,_n=1003,jE=1004,lc=1005,An=1006,ad=1007,bs=1008,hi=1009,S_=1010,M_=1011,ka=1012,Ep=1013,Yi=1014,Hi=1015,mr=1016,Tp=1017,wp=1018,Ba=1020,E_=35902,T_=35899,w_=1021,A_=1022,Ri=1023,gr=1026,Rs=1027,C_=1028,Ap=1029,Po=1030,Cp=1031,bp=1033,Vc=33776,Hc=33777,Gc=33778,Wc=33779,ph=35840,mh=35841,gh=35842,vh=35843,xh=36196,_h=37492,yh=37496,Sh=37488,Mh=37489,Eh=37490,Th=37491,wh=37808,Ah=37809,Ch=37810,bh=37811,Rh=37812,Ph=37813,Dh=37814,Lh=37815,Ih=37816,Nh=37817,Fh=37818,Uh=37819,Oh=37820,kh=37821,Bh=36492,zh=36494,Vh=36495,Hh=36283,Gh=36284,Wh=36285,jh=36286,XE=3200,YE=0,qE=1,Kr="",fi="srgb",Do="srgb-linear",Qc="linear",Nt="srgb",ro=7680,X0=519,KE=512,$E=513,ZE=514,Rp=515,QE=516,JE=517,Pp=518,eT=519,Y0=35044,q0="300 es",Gi=2e3,Jc=2001;function tT(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function eu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function nT(){const n=eu("canvas");return n.style.display="block",n}const K0={};function $0(...n){const e="THREE."+n.shift();console.log(e,...n)}function b_(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ct(...n){n=b_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ct(...n){n=b_(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function tu(...n){const e=n.join(" ");e in K0||(K0[e]=!0,ct(...n))}function iT(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const rT={[sh]:oh,[ah]:uh,[lh]:fh,[bo]:ch,[oh]:sh,[uh]:ah,[fh]:lh,[ch]:bo};class No{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ld=Math.PI/180,Xh=180/Math.PI;function Xa(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function _t(n,e,t){return Math.max(e,Math.min(t,n))}function sT(n,e){return(n%e+e)%e}function cd(n,e,t){return(1-t)*n+t*e}function Ma(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,f){let d=r[o+0],h=r[o+1],p=r[o+2],v=r[o+3],g=a[c+0],_=a[c+1],M=a[c+2],T=a[c+3];if(v!==T||d!==g||h!==_||p!==M){let y=d*g+h*_+p*M+v*T;y<0&&(g=-g,_=-_,M=-M,T=-T,y=-y);let S=1-f;if(y<.9995){const w=Math.acos(y),b=Math.sin(w);S=Math.sin(S*w)/b,f=Math.sin(f*w)/b,d=d*S+g*f,h=h*S+_*f,p=p*S+M*f,v=v*S+T*f}else{d=d*S+g*f,h=h*S+_*f,p=p*S+M*f,v=v*S+T*f;const w=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=w,h*=w,p*=w,v*=w}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const f=r[o],d=r[o+1],h=r[o+2],p=r[o+3],v=a[c],g=a[c+1],_=a[c+2],M=a[c+3];return e[t]=f*M+p*v+d*_-h*g,e[t+1]=d*M+p*g+h*v-f*_,e[t+2]=h*M+p*_+f*g-d*v,e[t+3]=p*M-f*v-d*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),p=f(o/2),v=f(a/2),g=d(r/2),_=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"YXZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"ZXY":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"ZYX":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"YZX":this._x=g*p*v+h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v-g*_*M;break;case"XZY":this._x=g*p*v-h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v+g*_*M;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],f=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=r+f+v;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(r>f&&r>v){const _=2*Math.sqrt(1+r-f-v);this._w=(p-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(f>v){const _=2*Math.sqrt(1+f-r-v);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+v-r-f);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,f=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+c*f+o*h-a*d,this._y=o*p+c*d+a*f-r*h,this._z=a*p+c*h+r*d-o*f,this._w=c*p-r*f-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,a=-a,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Z0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Z0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),p=2*(f*t-a*o),v=2*(a*r-c*t);return this.x=t+d*h+c*v-f*p,this.y=r+d*p+f*h-a*v,this.z=o+d*v+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-a*f,this.y=a*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ud.copy(this).projectOnVector(e),this.sub(ud)}reflect(e){return this.sub(ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ud=new $,Z0=new Fo;class ht{constructor(e,t,r,o,a,c,f,d,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,d,h)}set(e,t,r,o,a,c,f,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=f,p[3]=t,p[4]=a,p[5]=d,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],p=r[4],v=r[7],g=r[2],_=r[5],M=r[8],T=o[0],y=o[3],S=o[6],w=o[1],b=o[4],R=o[7],L=o[2],I=o[5],F=o[8];return a[0]=c*T+f*w+d*L,a[3]=c*y+f*b+d*I,a[6]=c*S+f*R+d*F,a[1]=h*T+p*w+v*L,a[4]=h*y+p*b+v*I,a[7]=h*S+p*R+v*F,a[2]=g*T+_*w+M*L,a[5]=g*y+_*b+M*I,a[8]=g*S+_*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*f*h-r*a*p+r*f*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],p=e[8],v=p*c-f*h,g=f*d-p*a,_=h*a-c*d,M=t*v+r*g+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(o*h-p*r)*T,e[2]=(f*r-o*c)*T,e[3]=g*T,e[4]=(p*t-o*d)*T,e[5]=(o*a-f*t)*T,e[6]=_*T,e[7]=(r*d-h*t)*T,e[8]=(c*t-r*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,f){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(fd.makeScale(e,t)),this}rotate(e){return this.premultiply(fd.makeRotation(-e)),this}translate(e,t){return this.premultiply(fd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fd=new ht,Q0=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),J0=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oT(){const n={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Nt&&(o.r=pr(o.r),o.g=pr(o.g),o.b=pr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Nt&&(o.r=Ao(o.r),o.g=Ao(o.g),o.b=Ao(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Kr?Qc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return tu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return tu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Do]:{primaries:e,whitePoint:r,transfer:Qc,toXYZ:Q0,fromXYZ:J0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Nt,toXYZ:Q0,fromXYZ:J0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),n}const wt=oT();function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let so;class aT{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{so===void 0&&(so=eu("canvas")),so.width=e.width,so.height=e.height;const o=so.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=so}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=pr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(pr(t[r]/255)*255):t[r]=pr(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lT=0;class Dp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?a.push(dd(o[c].image)):a.push(dd(o[c]))}else a=dd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function dd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?aT.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let cT=0;const hd=new $;class Un extends No{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,r=dr,o=dr,a=An,c=bs,f=Ri,d=hi,h=Un.DEFAULT_ANISOTROPY,p=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cT++}),this.uuid=Xa(),this.name="",this.source=new Dp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(hd).x}get height(){return this.source.getSize(hd).y}get depth(){return this.source.getSize(hd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case dh:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case dh:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=y_;Un.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,r=0,o=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],_=d[5],M=d[9],T=d[2],y=d[6],S=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,R=(_+1)/2,L=(S+1)/2,I=(p+g)/4,F=(v+T)/4,E=(M+y)/4;return b>R&&b>L?b<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(b),o=I/r,a=F/r):R>L?R<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),r=I/o,a=E/o):L<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(L),r=F/a,o=E/a),this.set(r,o,a,t),this}let w=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(g-p)*(g-p));return Math.abs(w)<.001&&(w=1),this.x=(y-M)/w,this.y=(v-T)/w,this.z=(g-p)/w,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uT extends No{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new Un(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Dp(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends uT{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class R_ extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fT extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e,t,r,o,a,c,f,d,h,p,v,g,_,M,T,y){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,f,d,h,p,v,g,_,M,T,y)}set(e,t,r,o,a,c,f,d,h,p,v,g,_,M,T,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=a,S[5]=c,S[9]=f,S[13]=d,S[2]=h,S[6]=p,S[10]=v,S[14]=g,S[3]=_,S[7]=M,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/oo.setFromMatrixColumn(e,0).length(),a=1/oo.setFromMatrixColumn(e,1).length(),c=1/oo.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=c*p,_=c*v,M=f*p,T=f*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=_+M*h,t[5]=g-T*h,t[9]=-f*d,t[2]=T-g*h,t[6]=M+_*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,_=d*v,M=h*p,T=h*v;t[0]=g+T*f,t[4]=M*f-_,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-f,t[2]=_*f-M,t[6]=T+g*f,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,_=d*v,M=h*p,T=h*v;t[0]=g-T*f,t[4]=-c*v,t[8]=M+_*f,t[1]=_+M*f,t[5]=c*p,t[9]=T-g*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,_=c*v,M=f*p,T=f*v;t[0]=d*p,t[4]=M*h-_,t[8]=g*h+T,t[1]=d*v,t[5]=T*h+g,t[9]=_*h-M,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,_=c*h,M=f*d,T=f*h;t[0]=d*p,t[4]=T-g*v,t[8]=M*v+_,t[1]=v,t[5]=c*p,t[9]=-f*p,t[2]=-h*p,t[6]=_*v+M,t[10]=g-T*v}else if(e.order==="XZY"){const g=c*d,_=c*h,M=f*d,T=f*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+T,t[5]=c*p,t[9]=_*v-M,t[2]=M*v-_,t[6]=f*p,t[10]=T*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dT,e,hT)}lookAt(e,t,r){const o=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Vr.crossVectors(r,Jn),Vr.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Vr.crossVectors(r,Jn)),Vr.normalize(),cc.crossVectors(Jn,Vr),o[0]=Vr.x,o[4]=cc.x,o[8]=Jn.x,o[1]=Vr.y,o[5]=cc.y,o[9]=Jn.y,o[2]=Vr.z,o[6]=cc.z,o[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],p=r[1],v=r[5],g=r[9],_=r[13],M=r[2],T=r[6],y=r[10],S=r[14],w=r[3],b=r[7],R=r[11],L=r[15],I=o[0],F=o[4],E=o[8],D=o[12],Z=o[1],k=o[5],Q=o[9],ee=o[13],ue=o[2],te=o[6],re=o[10],W=o[14],Y=o[3],ne=o[7],le=o[11],O=o[15];return a[0]=c*I+f*Z+d*ue+h*Y,a[4]=c*F+f*k+d*te+h*ne,a[8]=c*E+f*Q+d*re+h*le,a[12]=c*D+f*ee+d*W+h*O,a[1]=p*I+v*Z+g*ue+_*Y,a[5]=p*F+v*k+g*te+_*ne,a[9]=p*E+v*Q+g*re+_*le,a[13]=p*D+v*ee+g*W+_*O,a[2]=M*I+T*Z+y*ue+S*Y,a[6]=M*F+T*k+y*te+S*ne,a[10]=M*E+T*Q+y*re+S*le,a[14]=M*D+T*ee+y*W+S*O,a[3]=w*I+b*Z+R*ue+L*Y,a[7]=w*F+b*k+R*te+L*ne,a[11]=w*E+b*Q+R*re+L*le,a[15]=w*D+b*ee+R*W+L*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],f=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],_=e[14],M=e[3],T=e[7],y=e[11],S=e[15],w=d*_-h*g,b=f*_-h*v,R=f*g-d*v,L=c*_-h*p,I=c*g-d*p,F=c*v-f*p;return t*(T*w-y*b+S*R)-r*(M*w-y*L+S*I)+o*(M*b-T*L+S*F)-a*(M*R-T*I+y*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],_=e[11],M=e[12],T=e[13],y=e[14],S=e[15],w=t*f-r*c,b=t*d-o*c,R=t*h-a*c,L=r*d-o*f,I=r*h-a*f,F=o*h-a*d,E=p*T-v*M,D=p*y-g*M,Z=p*S-_*M,k=v*y-g*T,Q=v*S-_*T,ee=g*S-_*y,ue=w*ee-b*Q+R*k+L*Z-I*D+F*E;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/ue;return e[0]=(f*ee-d*Q+h*k)*te,e[1]=(o*Q-r*ee-a*k)*te,e[2]=(T*F-y*I+S*L)*te,e[3]=(g*I-v*F-_*L)*te,e[4]=(d*Z-c*ee-h*D)*te,e[5]=(t*ee-o*Z+a*D)*te,e[6]=(y*R-M*F-S*b)*te,e[7]=(p*F-g*R+_*b)*te,e[8]=(c*Q-f*Z+h*E)*te,e[9]=(r*Z-t*Q-a*E)*te,e[10]=(M*I-T*R+S*w)*te,e[11]=(v*R-p*I-_*w)*te,e[12]=(f*D-c*k-d*E)*te,e[13]=(t*k-r*D+o*E)*te,e[14]=(T*b-M*L-y*w)*te,e[15]=(p*L-v*b+g*w)*te,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,f=e.y,d=e.z,h=a*c,p=a*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,p*f+r,p*d-o*c,0,h*d-o*f,p*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,f=t._z,d=t._w,h=a+a,p=c+c,v=f+f,g=a*h,_=a*p,M=a*v,T=c*p,y=c*v,S=f*v,w=d*h,b=d*p,R=d*v,L=r.x,I=r.y,F=r.z;return o[0]=(1-(T+S))*L,o[1]=(_+R)*L,o[2]=(M-b)*L,o[3]=0,o[4]=(_-R)*I,o[5]=(1-(g+S))*I,o[6]=(y+w)*I,o[7]=0,o[8]=(M+b)*F,o[9]=(y-w)*F,o[10]=(1-(g+T))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let c=oo.set(o[0],o[1],o[2]).length();const f=oo.set(o[4],o[5],o[6]).length(),d=oo.set(o[8],o[9],o[10]).length();a<0&&(c=-c),Ei.copy(this);const h=1/c,p=1/f,v=1/d;return Ei.elements[0]*=h,Ei.elements[1]*=h,Ei.elements[2]*=h,Ei.elements[4]*=p,Ei.elements[5]*=p,Ei.elements[6]*=p,Ei.elements[8]*=v,Ei.elements[9]*=v,Ei.elements[10]*=v,t.setFromRotationMatrix(Ei),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,a,c,f=Gi,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let M,T;if(d)M=a/(c-a),T=c*a/(c-a);else if(f===Gi)M=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(f===Jc)M=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,f=Gi,d=!1){const h=this.elements,p=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),_=-(r+o)/(r-o);let M,T;if(d)M=1/(c-a),T=c/(c-a);else if(f===Gi)M=-2/(c-a),T=-(c+a)/(c-a);else if(f===Jc)M=-1/(c-a),T=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const oo=new $,Ei=new $t,dT=new $(0,0,0),hT=new $(1,1,1),Vr=new $,cc=new $,Jn=new $,ev=new $t,tv=new Fo;class vr{constructor(e=0,t=0,r=0,o=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],f=o[8],d=o[1],h=o[5],p=o[9],v=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ev.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ev,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tv.setFromEuler(this),this.setFromQuaternion(tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class P_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pT=0;const nv=new $,ao=new Fo,or=new $t,uc=new $,Ea=new $,mT=new $,gT=new Fo,iv=new $(1,0,0),rv=new $(0,1,0),sv=new $(0,0,1),ov={type:"added"},vT={type:"removed"},lo={type:"childadded",child:null},pd={type:"childremoved",child:null};class On extends No{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pT++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new $,t=new vr,r=new Fo,o=new $(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new $t},normalMatrix:{value:new ht}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.multiply(ao),this}rotateOnWorldAxis(e,t){return ao.setFromAxisAngle(e,t),this.quaternion.premultiply(ao),this}rotateX(e){return this.rotateOnAxis(iv,e)}rotateY(e){return this.rotateOnAxis(rv,e)}rotateZ(e){return this.rotateOnAxis(sv,e)}translateOnAxis(e,t){return nv.copy(e).applyQuaternion(this.quaternion),this.position.add(nv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iv,e)}translateY(e){return this.translateOnAxis(rv,e)}translateZ(e){return this.translateOnAxis(sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?uc.copy(e):uc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(Ea,uc,this.up):or.lookAt(uc,Ea,this.up),this.quaternion.setFromRotationMatrix(or),o&&(or.extractRotation(o.matrixWorld),ao.setFromRotationMatrix(or),this.quaternion.premultiply(ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ct("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ov),lo.child=e,this.dispatchEvent(lo),lo.child=null):Ct("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vT),pd.child=e,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ov),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,mT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,gT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(a(e.materials,this.material[d]));o.material=f}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(a(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),_=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const d=[];for(const h in f){const p=f[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}On.DEFAULT_UP=new $(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fc extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xT={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),S=this._getHandJoint(h,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&g>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(xT)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new fc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const D_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},dc={h:0,s:0,l:0};function gd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Lt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=sT(e,1),t=_t(t,0,1),r=_t(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=gd(c,a,e+1/3),this.g=gd(c,a,e),this.b=gd(c,a,e-1/3)}return wt.colorSpaceToWorking(this,o),this}setStyle(e,t=fi){function r(a){a!==void 0&&parseFloat(a)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fi){const r=D_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return wt.workingToColorSpace(wn.copy(this),e),Math.round(_t(wn.r*255,0,255))*65536+Math.round(_t(wn.g*255,0,255))*256+Math.round(_t(wn.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(wn.copy(this),t);const r=wn.r,o=wn.g,a=wn.b,c=Math.max(r,o,a),f=Math.min(r,o,a);let d,h;const p=(f+c)/2;if(f===c)d=0,h=0;else{const v=c-f;switch(h=p<=.5?v/(c+f):v/(2-c-f),c){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=fi){wt.workingToColorSpace(wn.copy(this),e);const t=wn.r,r=wn.g,o=wn.b;return e!==fi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(dc);const r=cd(Hr.h,dc.h,t),o=cd(Hr.s,dc.s,t),a=cd(Hr.l,dc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Lt;Lt.NAMES=D_;class _T extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ti=new $,ar=new $,vd=new $,lr=new $,co=new $,uo=new $,av=new $,xd=new $,_d=new $,yd=new $,Sd=new tn,Md=new tn,Ed=new tn;class bi{constructor(e=new $,t=new $,r=new $){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ti.subVectors(e,t),o.cross(Ti);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Ti.subVectors(o,t),ar.subVectors(r,t),vd.subVectors(e,t);const c=Ti.dot(Ti),f=Ti.dot(ar),d=Ti.dot(vd),h=ar.dot(ar),p=ar.dot(vd),v=c*h-f*f;if(v===0)return a.set(0,0,0),null;const g=1/v,_=(h*d-f*p)*g,M=(c*p-f*d)*g;return a.set(1-_-M,M,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,r,o,a,c,f,d){return this.getBarycoord(e,t,r,o,lr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,lr.x),d.addScaledVector(c,lr.y),d.addScaledVector(f,lr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,c){return Sd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),Sd.fromBufferAttribute(e,t),Md.fromBufferAttribute(e,r),Ed.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Sd,a.x),c.addScaledVector(Md,a.y),c.addScaledVector(Ed,a.z),c}static isFrontFacing(e,t,r,o){return Ti.subVectors(r,t),ar.subVectors(e,t),Ti.cross(ar).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ti.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return bi.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,f;co.subVectors(o,r),uo.subVectors(a,r),xd.subVectors(e,r);const d=co.dot(xd),h=uo.dot(xd);if(d<=0&&h<=0)return t.copy(r);_d.subVectors(e,o);const p=co.dot(_d),v=uo.dot(_d);if(p>=0&&v<=p)return t.copy(o);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(r).addScaledVector(co,c);yd.subVectors(e,a);const _=co.dot(yd),M=uo.dot(yd);if(M>=0&&_<=M)return t.copy(a);const T=_*h-d*M;if(T<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(r).addScaledVector(uo,f);const y=p*M-_*v;if(y<=0&&v-p>=0&&_-M>=0)return av.subVectors(a,o),f=(v-p)/(v-p+(_-M)),t.copy(o).addScaledVector(av,f);const S=1/(y+T+g);return c=T*S,f=g*S,t.copy(r).addScaledVector(co,c).addScaledVector(uo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ya{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,wi):wi.fromBufferAttribute(a,c),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),hc.copy(r.boundingBox)),hc.applyMatrix4(e.matrixWorld),this.union(hc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ta),pc.subVectors(this.max,Ta),fo.subVectors(e.a,Ta),ho.subVectors(e.b,Ta),po.subVectors(e.c,Ta),Gr.subVectors(ho,fo),Wr.subVectors(po,ho),gs.subVectors(fo,po);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-gs.z,gs.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,gs.z,0,-gs.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-gs.y,gs.x,0];return!Td(t,fo,ho,po,pc)||(t=[1,0,0,0,1,0,0,0,1],!Td(t,fo,ho,po,pc))?!1:(mc.crossVectors(Gr,Wr),t=[mc.x,mc.y,mc.z],Td(t,fo,ho,po,pc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new $,new $,new $,new $,new $,new $,new $,new $],wi=new $,hc=new Ya,fo=new $,ho=new $,po=new $,Gr=new $,Wr=new $,gs=new $,Ta=new $,pc=new $,mc=new $,vs=new $;function Td(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){vs.fromArray(n,a);const f=o.x*Math.abs(vs.x)+o.y*Math.abs(vs.y)+o.z*Math.abs(vs.z),d=e.dot(vs),h=t.dot(vs),p=r.dot(vs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>f)return!1}return!0}const sn=new $,gc=new Rt;let yT=0;class Pi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yT++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Y0,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXY(t,gc.x,gc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ma(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Xn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),r=Xn(r,this.array),o=Xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),r=Xn(r,this.array),o=Xn(o,this.array),a=Xn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Y0&&(e.usage=this.usage),e}}class L_ extends Pi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class I_ extends Pi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class nn extends Pi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const ST=new Ya,wa=new $,wd=new $;class qa{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ST.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wa.subVectors(e,this.center);const t=wa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(wa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wa.copy(e.center).add(wd)),this.expandByPoint(wa.copy(e.center).sub(wd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let MT=0;const ui=new $t,Ad=new On,mo=new $,ei=new Ya,Aa=new Ya,mn=new $;class bn extends No{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MT++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tT(e)?I_:L_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new ht().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,r){return ui.makeTranslation(e,t,r),this.applyMatrix4(ui),this}scale(e,t,r){return ui.makeScale(e,t,r),this.applyMatrix4(ui),this}lookAt(e){return Ad.lookAt(e),Ad.updateMatrix(),this.applyMatrix4(Ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new nn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ei.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ct('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ct("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];Aa.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(ei.min,Aa.min),ei.expandByPoint(mn),mn.addVectors(ei.max,Aa.max),ei.expandByPoint(mn)):(ei.expandByPoint(Aa.min),ei.expandByPoint(Aa.max))}ei.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)mn.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(mn));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],d=this.morphTargetsRelative;for(let h=0,p=f.count;h<p;h++)mn.fromBufferAttribute(f,h),d&&(mo.fromBufferAttribute(e,h),mn.add(mo)),o=Math.max(o,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ct('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ct("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let E=0;E<r.count;E++)f[E]=new $,d[E]=new $;const h=new $,p=new $,v=new $,g=new Rt,_=new Rt,M=new Rt,T=new $,y=new $;function S(E,D,Z){h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,D),v.fromBufferAttribute(r,Z),g.fromBufferAttribute(a,E),_.fromBufferAttribute(a,D),M.fromBufferAttribute(a,Z),p.sub(h),v.sub(h),_.sub(g),M.sub(g);const k=1/(_.x*M.y-M.x*_.y);isFinite(k)&&(T.copy(p).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(k),y.copy(v).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(k),f[E].add(T),f[D].add(T),f[Z].add(T),d[E].add(y),d[D].add(y),d[Z].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let E=0,D=w.length;E<D;++E){const Z=w[E],k=Z.start,Q=Z.count;for(let ee=k,ue=k+Q;ee<ue;ee+=3)S(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const b=new $,R=new $,L=new $,I=new $;function F(E){L.fromBufferAttribute(o,E),I.copy(L);const D=f[E];b.copy(D),b.sub(L.multiplyScalar(L.dot(D))).normalize(),R.crossVectors(I,D);const k=R.dot(d[E])<0?-1:1;c.setXYZW(E,b.x,b.y,b.z,k)}for(let E=0,D=w.length;E<D;++E){const Z=w[E],k=Z.start,Q=Z.count;for(let ee=k,ue=k+Q;ee<ue;ee+=3)F(e.getX(ee+0)),F(e.getX(ee+1)),F(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const o=new $,a=new $,c=new $,f=new $,d=new $,h=new $,p=new $,v=new $;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),f.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),f.add(p),d.add(p),h.add(p),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,d){const h=f.array,p=f.itemSize,v=f.normalized,g=new h.constructor(d.length*p);let _=0,M=0;for(let T=0,y=d.length;T<y;T++){f.isInterleavedBufferAttribute?_=d[T]*f.data.stride+f.offset:_=d[T]*p;for(let S=0;S<p;S++)g[M++]=h[_++]}return new Pi(g,p,v)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const a=this.morphAttributes;for(const f in a){const d=[],h=a[f];for(let p=0,v=h.length;p<v;p++){const g=h[p],_=e(g,r);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let g=0,_=v.length;g<_;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ET=0;class Uo extends No{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=wo,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ih,this.blendDst=rh,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=X0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==wo&&(r.blending=this.blending),this.side!==Qr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ih&&(r.blendSrc=this.blendSrc),this.blendDst!==rh&&(r.blendDst=this.blendDst),this.blendEquation!==As&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==X0&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ro&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ro&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ro&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const f in a){const d=a[f];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ur=new $,Cd=new $,vc=new $,jr=new $,bd=new $,xc=new $,Rd=new $;class Lp{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Cd.copy(e).add(t).multiplyScalar(.5),vc.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(Cd);const a=e.distanceTo(t)*.5,c=-this.direction.dot(vc),f=jr.dot(this.direction),d=-jr.dot(vc),h=jr.lengthSq(),p=Math.abs(1-c*c);let v,g,_,M;if(p>0)if(v=c*d-f,g=c*f-d,M=a*p,v>=0)if(g>=-M)if(g<=M){const T=1/p;v*=T,g*=T,_=v*(v+c*g+2*f)+g*(c*v+g+2*d)+h}else g=a,v=Math.max(0,-(c*g+f)),_=-v*v+g*(g+2*d)+h;else g=-a,v=Math.max(0,-(c*g+f)),_=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-c*a+f)),g=v>0?-a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-a,-d),a),_=g*(g+2*d)+h):(v=Math.max(0,-(c*a+f)),g=v>0?a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h);else g=c>0?-a:a,v=Math.max(0,-(c*g+f)),_=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Cd).addScaledVector(vc,g),_}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const r=ur.dot(this.direction),o=ur.dot(ur)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,f,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(f=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(f=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,r,o,a){bd.subVectors(t,e),xc.subVectors(r,e),Rd.crossVectors(bd,xc);let c=this.direction.dot(Rd),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;jr.subVectors(this.origin,e);const d=f*this.direction.dot(xc.crossVectors(jr,xc));if(d<0)return null;const h=f*this.direction.dot(bd.cross(jr));if(h<0||d+h>c)return null;const p=-f*jr.dot(Rd);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class N_ extends Uo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=d_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lv=new $t,xs=new Lp,_c=new qa,cv=new $,yc=new $,Sc=new $,Mc=new $,Pd=new $,Ec=new $,uv=new $,Tc=new $;class xr extends On{constructor(e=new bn,t=new N_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(a&&f){Ec.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=f[d],v=a[d];p!==0&&(Pd.fromBufferAttribute(v,e),c?Ec.addScaledVector(Pd,p):Ec.addScaledVector(Pd.sub(t),p))}t.add(Ec)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_c.copy(r.boundingSphere),_c.applyMatrix4(a),xs.copy(e.ray).recast(e.near),!(_c.containsPoint(xs.origin)===!1&&(xs.intersectSphere(_c,cv)===null||xs.origin.distanceToSquared(cv)>(e.far-e.near)**2))&&(lv.copy(a).invert(),xs.copy(e.ray).applyMatrix4(lv),!(r.boundingBox!==null&&xs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,f=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,g=a.groups,_=a.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=c[y.materialIndex],w=Math.max(y.start,_.start),b=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let R=w,L=b;R<L;R+=3){const I=f.getX(R),F=f.getX(R+1),E=f.getX(R+2);o=wc(this,S,e,r,h,p,v,I,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),T=Math.min(f.count,_.start+_.count);for(let y=M,S=T;y<S;y+=3){const w=f.getX(y),b=f.getX(y+1),R=f.getX(y+2);o=wc(this,c,e,r,h,p,v,w,b,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=c[y.materialIndex],w=Math.max(y.start,_.start),b=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let R=w,L=b;R<L;R+=3){const I=R,F=R+1,E=R+2;o=wc(this,S,e,r,h,p,v,I,F,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),T=Math.min(d.count,_.start+_.count);for(let y=M,S=T;y<S;y+=3){const w=y,b=y+1,R=y+2;o=wc(this,c,e,r,h,p,v,w,b,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function TT(n,e,t,r,o,a,c,f){let d;if(e.side===Yn?d=r.intersectTriangle(c,a,o,!0,f):d=r.intersectTriangle(o,a,c,e.side===Qr,f),d===null)return null;Tc.copy(f),Tc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Tc);return h<t.near||h>t.far?null:{distance:h,point:Tc.clone(),object:n}}function wc(n,e,t,r,o,a,c,f,d,h){n.getVertexPosition(f,yc),n.getVertexPosition(d,Sc),n.getVertexPosition(h,Mc);const p=TT(n,e,t,r,yc,Sc,Mc,uv);if(p){const v=new $;bi.getBarycoord(uv,yc,Sc,Mc,v),o&&(p.uv=bi.getInterpolatedAttribute(o,f,d,h,v,new Rt)),a&&(p.uv1=bi.getInterpolatedAttribute(a,f,d,h,v,new Rt)),c&&(p.normal=bi.getInterpolatedAttribute(c,f,d,h,v,new $),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new $,materialIndex:0};bi.getNormal(yc,Sc,Mc,g.normal),p.face=g,p.barycoord=v}return p}class wT extends Un{constructor(e=null,t=1,r=1,o,a,c,f,d,h=_n,p=_n,v,g){super(null,c,f,d,h,p,o,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Dd=new $,AT=new $,CT=new ht;class Ts{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Dd.subVectors(r,t).cross(AT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Dd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||CT.getNormalMatrix(e),o=this.coplanarPoint(Dd).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _s=new qa,bT=new Rt(.5,.5),Ac=new $;class F_{constructor(e=new Ts,t=new Ts,r=new Ts,o=new Ts,a=new Ts,c=new Ts){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Gi,r=!1){const o=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],h=a[3],p=a[4],v=a[5],g=a[6],_=a[7],M=a[8],T=a[9],y=a[10],S=a[11],w=a[12],b=a[13],R=a[14],L=a[15];if(o[0].setComponents(h-c,_-p,S-M,L-w).normalize(),o[1].setComponents(h+c,_+p,S+M,L+w).normalize(),o[2].setComponents(h+f,_+v,S+T,L+b).normalize(),o[3].setComponents(h-f,_-v,S-T,L-b).normalize(),r)o[4].setComponents(d,g,y,R).normalize(),o[5].setComponents(h-d,_-g,S-y,L-R).normalize();else if(o[4].setComponents(h-d,_-g,S-y,L-R).normalize(),t===Gi)o[5].setComponents(h+d,_+g,S+y,L+R).normalize();else if(t===Jc)o[5].setComponents(d,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const t=bT.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ac.x=o.normal.x>0?e.max.x:e.min.x,Ac.y=o.normal.y>0?e.max.y:e.min.y,Ac.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ac)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class U_ extends Uo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nu=new $,iu=new $,fv=new $t,Ca=new Lp,Cc=new qa,Ld=new $,dv=new $;class RT extends On{constructor(e=new bn,t=new U_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,a=t.count;o<a;o++)nu.fromBufferAttribute(t,o-1),iu.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=nu.distanceTo(iu);e.setAttribute("lineDistance",new nn(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Cc.copy(r.boundingSphere),Cc.applyMatrix4(o),Cc.radius+=a,e.ray.intersectsSphere(Cc)===!1)return;fv.copy(o).invert(),Ca.copy(e.ray).applyMatrix4(fv);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,p=r.index,g=r.attributes.position;if(p!==null){const _=Math.max(0,c.start),M=Math.min(p.count,c.start+c.count);for(let T=_,y=M-1;T<y;T+=h){const S=p.getX(T),w=p.getX(T+1),b=bc(this,e,Ca,d,S,w,T);b&&t.push(b)}if(this.isLineLoop){const T=p.getX(M-1),y=p.getX(_),S=bc(this,e,Ca,d,T,y,M-1);S&&t.push(S)}}else{const _=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let T=_,y=M-1;T<y;T+=h){const S=bc(this,e,Ca,d,T,T+1,T);S&&t.push(S)}if(this.isLineLoop){const T=bc(this,e,Ca,d,M-1,_,M-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function bc(n,e,t,r,o,a,c){const f=n.geometry.attributes.position;if(nu.fromBufferAttribute(f,o),iu.fromBufferAttribute(f,a),t.distanceSqToSegment(nu,iu,Ld,dv)>r)return;Ld.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Ld);if(!(h<e.near||h>e.far))return{distance:h,point:dv.clone().applyMatrix4(n.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:n}}const hv=new $,pv=new $;class Id extends RT{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,a=t.count;o<a;o+=2)hv.fromBufferAttribute(t,o),pv.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+hv.distanceTo(pv);e.setAttribute("lineDistance",new nn(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class O_ extends Uo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mv=new $t,Yh=new Lp,Rc=new qa,Pc=new $;class PT extends On{constructor(e=new bn,t=new O_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,a=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(o),Rc.radius+=a,e.ray.intersectsSphere(Rc)===!1)return;mv.copy(o).invert(),Yh.copy(e.ray).applyMatrix4(mv);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,v=r.attributes.position;if(h!==null){const g=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let M=g,T=_;M<T;M++){const y=h.getX(M);Pc.fromBufferAttribute(v,y),gv(Pc,y,d,o,e,t,this)}}else{const g=Math.max(0,c.start),_=Math.min(v.count,c.start+c.count);for(let M=g,T=_;M<T;M++)Pc.fromBufferAttribute(v,M),gv(Pc,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const f=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function gv(n,e,t,r,o,a,c){const f=Yh.distanceSqToPoint(n);if(f<t){const d=new $;Yh.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;a.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class k_ extends Un{constructor(e=[],t=Is,r,o,a,c,f,d,h,p){super(e,t,r,o,a,c,f,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class za extends Un{constructor(e,t,r=Yi,o,a,c,f=_n,d=_n,h,p=gr,v=1){if(p!==gr&&p!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,a,c,f,d,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class DT extends za{constructor(e,t=Yi,r=Is,o,a,c=_n,f=_n,d,h=gr){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,r,o,a,c,f,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class B_ extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends bn{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const f=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],v=[];let g=0,_=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new nn(h,3)),this.setAttribute("normal",new nn(p,3)),this.setAttribute("uv",new nn(v,2));function M(T,y,S,w,b,R,L,I,F,E,D){const Z=R/F,k=L/E,Q=R/2,ee=L/2,ue=I/2,te=F+1,re=E+1;let W=0,Y=0;const ne=new $;for(let le=0;le<re;le++){const O=le*k-ee;for(let K=0;K<te;K++){const Ee=K*Z-Q;ne[T]=Ee*w,ne[y]=O*b,ne[S]=ue,h.push(ne.x,ne.y,ne.z),ne[T]=0,ne[y]=0,ne[S]=I>0?1:-1,p.push(ne.x,ne.y,ne.z),v.push(K/F),v.push(1-le/E),W+=1}}for(let le=0;le<E;le++)for(let O=0;O<F;O++){const K=g+O+te*le,Ee=g+O+te*(le+1),ze=g+(O+1)+te*(le+1),Ke=g+(O+1)+te*le;d.push(K,Ee,Ke),d.push(Ee,ze,Ke),Y+=6}f.addGroup(_,Y,D),_+=Y,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Oo extends bn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const a=[],c=[];f(o),h(r),p(),this.setAttribute("position",new nn(a,3)),this.setAttribute("normal",new nn(a.slice(),3)),this.setAttribute("uv",new nn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(w){const b=new $,R=new $,L=new $;for(let I=0;I<t.length;I+=3)_(t[I+0],b),_(t[I+1],R),_(t[I+2],L),d(b,R,L,w)}function d(w,b,R,L){const I=L+1,F=[];for(let E=0;E<=I;E++){F[E]=[];const D=w.clone().lerp(R,E/I),Z=b.clone().lerp(R,E/I),k=I-E;for(let Q=0;Q<=k;Q++)Q===0&&E===I?F[E][Q]=D:F[E][Q]=D.clone().lerp(Z,Q/k)}for(let E=0;E<I;E++)for(let D=0;D<2*(I-E)-1;D++){const Z=Math.floor(D/2);D%2===0?(g(F[E][Z+1]),g(F[E+1][Z]),g(F[E][Z])):(g(F[E][Z+1]),g(F[E+1][Z+1]),g(F[E+1][Z]))}}function h(w){const b=new $;for(let R=0;R<a.length;R+=3)b.x=a[R+0],b.y=a[R+1],b.z=a[R+2],b.normalize().multiplyScalar(w),a[R+0]=b.x,a[R+1]=b.y,a[R+2]=b.z}function p(){const w=new $;for(let b=0;b<a.length;b+=3){w.x=a[b+0],w.y=a[b+1],w.z=a[b+2];const R=y(w)/2/Math.PI+.5,L=S(w)/Math.PI+.5;c.push(R,1-L)}M(),v()}function v(){for(let w=0;w<c.length;w+=6){const b=c[w+0],R=c[w+2],L=c[w+4],I=Math.max(b,R,L),F=Math.min(b,R,L);I>.9&&F<.1&&(b<.2&&(c[w+0]+=1),R<.2&&(c[w+2]+=1),L<.2&&(c[w+4]+=1))}}function g(w){a.push(w.x,w.y,w.z)}function _(w,b){const R=w*3;b.x=e[R+0],b.y=e[R+1],b.z=e[R+2]}function M(){const w=new $,b=new $,R=new $,L=new $,I=new Rt,F=new Rt,E=new Rt;for(let D=0,Z=0;D<a.length;D+=9,Z+=6){w.set(a[D+0],a[D+1],a[D+2]),b.set(a[D+3],a[D+4],a[D+5]),R.set(a[D+6],a[D+7],a[D+8]),I.set(c[Z+0],c[Z+1]),F.set(c[Z+2],c[Z+3]),E.set(c[Z+4],c[Z+5]),L.copy(w).add(b).add(R).divideScalar(3);const k=y(L);T(I,Z+0,w,k),T(F,Z+2,b,k),T(E,Z+4,R,k)}}function T(w,b,R,L){L<0&&w.x===1&&(c[b]=w.x-1),R.x===0&&R.z===0&&(c[b]=L/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function S(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.vertices,e.indices,e.radius,e.detail)}}class Ip extends Oo{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,a=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],c=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(a,c,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ip(e.radius,e.detail)}}class Np extends Oo{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Np(e.radius,e.detail)}}class ru extends Oo{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ru(e.radius,e.detail)}}class pu extends bn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,p=d+1,v=e/f,g=t/d,_=[],M=[],T=[],y=[];for(let S=0;S<p;S++){const w=S*g-c;for(let b=0;b<h;b++){const R=b*v-a;M.push(R,-w,0),T.push(0,0,1),y.push(b/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let w=0;w<f;w++){const b=w+h*S,R=w+h*(S+1),L=w+1+h*(S+1),I=w+1+h*S;_.push(b,R,I),_.push(R,L,I)}this.setIndex(_),this.setAttribute("position",new nn(M,3)),this.setAttribute("normal",new nn(T,3)),this.setAttribute("uv",new nn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fp extends Oo{constructor(e=1,t=0){const r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],o=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,o,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fp(e.radius,e.detail)}}class Up extends bn{constructor(e=1,t=.4,r=12,o=48,a=Math.PI*2,c=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:a,thetaStart:c,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const d=[],h=[],p=[],v=[],g=new $,_=new $,M=new $;for(let T=0;T<=r;T++){const y=c+T/r*f;for(let S=0;S<=o;S++){const w=S/o*a;_.x=(e+t*Math.cos(y))*Math.cos(w),_.y=(e+t*Math.cos(y))*Math.sin(w),_.z=t*Math.sin(y),h.push(_.x,_.y,_.z),g.x=e*Math.cos(w),g.y=e*Math.sin(w),M.subVectors(_,g).normalize(),p.push(M.x,M.y,M.z),v.push(S/o),v.push(T/r)}}for(let T=1;T<=r;T++)for(let y=1;y<=o;y++){const S=(o+1)*T+y-1,w=(o+1)*(T-1)+y-1,b=(o+1)*(T-1)+y,R=(o+1)*T+y;d.push(S,w,R),d.push(w,b,R)}this.setIndex(d),this.setAttribute("position",new nn(h,3)),this.setAttribute("normal",new nn(p,3)),this.setAttribute("uv",new nn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Up(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Op extends bn{constructor(e=1,t=.4,r=64,o=8,a=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:r,radialSegments:o,p:a,q:c},r=Math.floor(r),o=Math.floor(o);const f=[],d=[],h=[],p=[],v=new $,g=new $,_=new $,M=new $,T=new $,y=new $,S=new $;for(let b=0;b<=r;++b){const R=b/r*a*Math.PI*2;w(R,a,c,e,_),w(R+.01,a,c,e,M),y.subVectors(M,_),S.addVectors(M,_),T.crossVectors(y,S),S.crossVectors(T,y),T.normalize(),S.normalize();for(let L=0;L<=o;++L){const I=L/o*Math.PI*2,F=-t*Math.cos(I),E=t*Math.sin(I);v.x=_.x+(F*S.x+E*T.x),v.y=_.y+(F*S.y+E*T.y),v.z=_.z+(F*S.z+E*T.z),d.push(v.x,v.y,v.z),g.subVectors(v,_).normalize(),h.push(g.x,g.y,g.z),p.push(b/r),p.push(L/o)}}for(let b=1;b<=r;b++)for(let R=1;R<=o;R++){const L=(o+1)*(b-1)+(R-1),I=(o+1)*b+(R-1),F=(o+1)*b+R,E=(o+1)*(b-1)+R;f.push(L,I,E),f.push(I,F,E)}this.setIndex(f),this.setAttribute("position",new nn(d,3)),this.setAttribute("normal",new nn(h,3)),this.setAttribute("uv",new nn(p,2));function w(b,R,L,I,F){const E=Math.cos(b),D=Math.sin(b),Z=L/R*b,k=Math.cos(Z);F.x=I*(2+k)*.5*E,F.y=I*(2+k)*D*.5,F.z=I*Math.sin(Z)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Op(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Dc extends bn{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],r=new Set,o=new $,a=new $;if(e.index!==null){const c=e.attributes.position,f=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:f.count,materialIndex:0}]);for(let h=0,p=d.length;h<p;++h){const v=d[h],g=v.start,_=v.count;for(let M=g,T=g+_;M<T;M+=3)for(let y=0;y<3;y++){const S=f.getX(M+y),w=f.getX(M+(y+1)%3);o.fromBufferAttribute(c,S),a.fromBufferAttribute(c,w),vv(o,a,r)===!0&&(t.push(o.x,o.y,o.z),t.push(a.x,a.y,a.z))}}}else{const c=e.attributes.position;for(let f=0,d=c.count/3;f<d;f++)for(let h=0;h<3;h++){const p=3*f+h,v=3*f+(h+1)%3;o.fromBufferAttribute(c,p),a.fromBufferAttribute(c,v),vv(o,a,r)===!0&&(t.push(o.x,o.y,o.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new nn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function vv(n,e,t){const r=`${n.x},${n.y},${n.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${n.x},${n.y},${n.z}`;return t.has(r)===!0||t.has(o)===!0?!1:(t.add(r),t.add(o),!0)}function Lo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function In(n){const e={};for(let t=0;t<n.length;t++){const r=Lo(n[t]);for(const o in r)e[o]=r[o]}return e}function LT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function z_(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const IT={clone:Lo,merge:In};var NT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Uo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NT,this.fragmentShader=FT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=LT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class UT extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class OT extends Uo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kT extends Uo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lc=new $,Ic=new Fo,ki=new $;class V_ extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Ic,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Ic,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Lc,Ic,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Ic,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new $,xv=new Rt,_v=new Rt;class di extends V_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ld*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xh*2*Math.atan(Math.tan(ld*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,xv,_v),t.subVectors(_v,xv)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ld*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class H_ extends V_{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,f-=p*this.view.offsetY,d=f-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const go=-90,vo=1;class BT extends On{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new di(go,vo,e,t);o.layers=this.layers,this.add(o);const a=new di(go,vo,e,t);a.layers=this.layers,this.add(a);const c=new di(go,vo,e,t);c.layers=this.layers,this.add(c);const f=new di(go,vo,e,t);f.layers=this.layers,this.add(f);const d=new di(go,vo,e,t);d.layers=this.layers,this.add(d);const h=new di(go,vo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,f,d]=t;for(const h of t)this.remove(h);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,_),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class zT extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class VT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ct("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function yv(n,e,t,r){const o=HT(r);switch(t){case w_:return n*e;case C_:return n*e/o.components*o.byteLength;case Ap:return n*e/o.components*o.byteLength;case Po:return n*e*2/o.components*o.byteLength;case Cp:return n*e*2/o.components*o.byteLength;case A_:return n*e*3/o.components*o.byteLength;case Ri:return n*e*4/o.components*o.byteLength;case bp:return n*e*4/o.components*o.byteLength;case Vc:case Hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Wc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mh:case vh:return Math.max(n,16)*Math.max(e,8)/4;case ph:case gh:return Math.max(n,8)*Math.max(e,8)/2;case xh:case _h:case Sh:case Mh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yh:case Eh:case Th:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Lh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case kh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Bh:case zh:case Vh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hh:case Gh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wh:case jh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function HT(n){switch(n){case hi:case S_:return{byteLength:1,components:1};case ka:case M_:case mr:return{byteLength:2,components:1};case Tp:case wp:return{byteLength:2,components:4};case Yi:case Ep:case Hi:return{byteLength:4,components:1};case E_:case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mp}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function G_(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function GT(n){const e=new WeakMap;function t(f,d){const h=f.array,p=f.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,p),f.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,d,h){const p=d.array,v=d.updateRanges;if(n.bindBuffer(h,f),v.length===0)n.bufferSubData(h,0,p);else{v.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<v.length;_++){const M=v[g],T=v[_];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++g,v[g]=T)}v.length=g+1;for(let _=0,M=v.length;_<M;_++){const T=v[_];n.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(n.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const p=e.get(f);(!p||p.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:a,update:c}}var WT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$T=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,JT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,e1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,n1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,i1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,r1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,o1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,l1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,c1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,u1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,f1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,d1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,h1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,p1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,m1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,g1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,v1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,x1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,y1="gl_FragColor = linearToOutputTexel( gl_FragColor );",S1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,T1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,C1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,R1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,P1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,D1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,U1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,O1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,z1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,V1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,H1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,G1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,W1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Q1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ow=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_w=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ew=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,bw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Iw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ow=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Bw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Gw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ww=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$w=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,nA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,lA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,uA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,pA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_A=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:WT,alphahash_pars_fragment:jT,alphamap_fragment:XT,alphamap_pars_fragment:YT,alphatest_fragment:qT,alphatest_pars_fragment:KT,aomap_fragment:$T,aomap_pars_fragment:ZT,batching_pars_vertex:QT,batching_vertex:JT,begin_vertex:e1,beginnormal_vertex:t1,bsdfs:n1,iridescence_fragment:i1,bumpmap_pars_fragment:r1,clipping_planes_fragment:s1,clipping_planes_pars_fragment:o1,clipping_planes_pars_vertex:a1,clipping_planes_vertex:l1,color_fragment:c1,color_pars_fragment:u1,color_pars_vertex:f1,color_vertex:d1,common:h1,cube_uv_reflection_fragment:p1,defaultnormal_vertex:m1,displacementmap_pars_vertex:g1,displacementmap_vertex:v1,emissivemap_fragment:x1,emissivemap_pars_fragment:_1,colorspace_fragment:y1,colorspace_pars_fragment:S1,envmap_fragment:M1,envmap_common_pars_fragment:E1,envmap_pars_fragment:T1,envmap_pars_vertex:w1,envmap_physical_pars_fragment:U1,envmap_vertex:A1,fog_vertex:C1,fog_pars_vertex:b1,fog_fragment:R1,fog_pars_fragment:P1,gradientmap_pars_fragment:D1,lightmap_pars_fragment:L1,lights_lambert_fragment:I1,lights_lambert_pars_fragment:N1,lights_pars_begin:F1,lights_toon_fragment:O1,lights_toon_pars_fragment:k1,lights_phong_fragment:B1,lights_phong_pars_fragment:z1,lights_physical_fragment:V1,lights_physical_pars_fragment:H1,lights_fragment_begin:G1,lights_fragment_maps:W1,lights_fragment_end:j1,logdepthbuf_fragment:X1,logdepthbuf_pars_fragment:Y1,logdepthbuf_pars_vertex:q1,logdepthbuf_vertex:K1,map_fragment:$1,map_pars_fragment:Z1,map_particle_fragment:Q1,map_particle_pars_fragment:J1,metalnessmap_fragment:ew,metalnessmap_pars_fragment:tw,morphinstance_vertex:nw,morphcolor_vertex:iw,morphnormal_vertex:rw,morphtarget_pars_vertex:sw,morphtarget_vertex:ow,normal_fragment_begin:aw,normal_fragment_maps:lw,normal_pars_fragment:cw,normal_pars_vertex:uw,normal_vertex:fw,normalmap_pars_fragment:dw,clearcoat_normal_fragment_begin:hw,clearcoat_normal_fragment_maps:pw,clearcoat_pars_fragment:mw,iridescence_pars_fragment:gw,opaque_fragment:vw,packing:xw,premultiplied_alpha_fragment:_w,project_vertex:yw,dithering_fragment:Sw,dithering_pars_fragment:Mw,roughnessmap_fragment:Ew,roughnessmap_pars_fragment:Tw,shadowmap_pars_fragment:ww,shadowmap_pars_vertex:Aw,shadowmap_vertex:Cw,shadowmask_pars_fragment:bw,skinbase_vertex:Rw,skinning_pars_vertex:Pw,skinning_vertex:Dw,skinnormal_vertex:Lw,specularmap_fragment:Iw,specularmap_pars_fragment:Nw,tonemapping_fragment:Fw,tonemapping_pars_fragment:Uw,transmission_fragment:Ow,transmission_pars_fragment:kw,uv_pars_fragment:Bw,uv_pars_vertex:zw,uv_vertex:Vw,worldpos_vertex:Hw,background_vert:Gw,background_frag:Ww,backgroundCube_vert:jw,backgroundCube_frag:Xw,cube_vert:Yw,cube_frag:qw,depth_vert:Kw,depth_frag:$w,distance_vert:Zw,distance_frag:Qw,equirect_vert:Jw,equirect_frag:eA,linedashed_vert:tA,linedashed_frag:nA,meshbasic_vert:iA,meshbasic_frag:rA,meshlambert_vert:sA,meshlambert_frag:oA,meshmatcap_vert:aA,meshmatcap_frag:lA,meshnormal_vert:cA,meshnormal_frag:uA,meshphong_vert:fA,meshphong_frag:dA,meshphysical_vert:hA,meshphysical_frag:pA,meshtoon_vert:mA,meshtoon_frag:gA,points_vert:vA,points_frag:xA,shadow_vert:_A,shadow_frag:yA,sprite_vert:SA,sprite_frag:MA},De={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Vi={basic:{uniforms:In([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:In([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:In([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:In([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:In([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Lt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:In([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:In([De.points,De.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:In([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:In([De.common,De.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:In([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:In([De.sprite,De.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:In([De.common,De.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:In([De.lights,De.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Vi.physical={uniforms:In([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Nc={r:0,b:0,g:0},ys=new vr,EA=new $t;function TA(n,e,t,r,o,a){const c=new Lt(0);let f=o===!0?0:1,d,h,p=null,v=0,g=null;function _(w){let b=w.isScene===!0?w.background:null;if(b&&b.isTexture){const R=w.backgroundBlurriness>0;b=e.get(b,R)}return b}function M(w){let b=!1;const R=_(w);R===null?y(c,f):R&&R.isColor&&(y(R,1),b=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(w,b){const R=_(b);R&&(R.isCubeTexture||R.mapping===hu)?(h===void 0&&(h=new xr(new Ka(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Lo(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ys.copy(b.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(EA.makeRotationFromEuler(ys)),h.material.toneMapped=wt.getTransfer(R.colorSpace)!==Nt,(p!==R||v!==R.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,p=R,v=R.version,g=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new xr(new pu(2,2),new qi({name:"BackgroundMaterial",uniforms:Lo(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=wt.getTransfer(R.colorSpace)!==Nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||v!==R.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=R,v=R.version,g=n.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function y(w,b){w.getRGB(Nc,z_(n)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,b,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,b=1){c.set(w),f=b,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,y(c,f)},render:M,addToRenderList:T,dispose:S}}function wA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let a=o,c=!1;function f(k,Q,ee,ue,te){let re=!1;const W=v(k,ue,ee,Q);a!==W&&(a=W,h(a.object)),re=_(k,ue,ee,te),re&&M(k,ue,ee,te),te!==null&&e.update(te,n.ELEMENT_ARRAY_BUFFER),(re||c)&&(c=!1,R(k,Q,ee,ue),te!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function d(){return n.createVertexArray()}function h(k){return n.bindVertexArray(k)}function p(k){return n.deleteVertexArray(k)}function v(k,Q,ee,ue){const te=ue.wireframe===!0;let re=r[Q.id];re===void 0&&(re={},r[Q.id]=re);const W=k.isInstancedMesh===!0?k.id:0;let Y=re[W];Y===void 0&&(Y={},re[W]=Y);let ne=Y[ee.id];ne===void 0&&(ne={},Y[ee.id]=ne);let le=ne[te];return le===void 0&&(le=g(d()),ne[te]=le),le}function g(k){const Q=[],ee=[],ue=[];for(let te=0;te<t;te++)Q[te]=0,ee[te]=0,ue[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:ee,attributeDivisors:ue,object:k,attributes:{},index:null}}function _(k,Q,ee,ue){const te=a.attributes,re=Q.attributes;let W=0;const Y=ee.getAttributes();for(const ne in Y)if(Y[ne].location>=0){const O=te[ne];let K=re[ne];if(K===void 0&&(ne==="instanceMatrix"&&k.instanceMatrix&&(K=k.instanceMatrix),ne==="instanceColor"&&k.instanceColor&&(K=k.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;W++}return a.attributesNum!==W||a.index!==ue}function M(k,Q,ee,ue){const te={},re=Q.attributes;let W=0;const Y=ee.getAttributes();for(const ne in Y)if(Y[ne].location>=0){let O=re[ne];O===void 0&&(ne==="instanceMatrix"&&k.instanceMatrix&&(O=k.instanceMatrix),ne==="instanceColor"&&k.instanceColor&&(O=k.instanceColor));const K={};K.attribute=O,O&&O.data&&(K.data=O.data),te[ne]=K,W++}a.attributes=te,a.attributesNum=W,a.index=ue}function T(){const k=a.newAttributes;for(let Q=0,ee=k.length;Q<ee;Q++)k[Q]=0}function y(k){S(k,0)}function S(k,Q){const ee=a.newAttributes,ue=a.enabledAttributes,te=a.attributeDivisors;ee[k]=1,ue[k]===0&&(n.enableVertexAttribArray(k),ue[k]=1),te[k]!==Q&&(n.vertexAttribDivisor(k,Q),te[k]=Q)}function w(){const k=a.newAttributes,Q=a.enabledAttributes;for(let ee=0,ue=Q.length;ee<ue;ee++)Q[ee]!==k[ee]&&(n.disableVertexAttribArray(ee),Q[ee]=0)}function b(k,Q,ee,ue,te,re,W){W===!0?n.vertexAttribIPointer(k,Q,ee,te,re):n.vertexAttribPointer(k,Q,ee,ue,te,re)}function R(k,Q,ee,ue){T();const te=ue.attributes,re=ee.getAttributes(),W=Q.defaultAttributeValues;for(const Y in re){const ne=re[Y];if(ne.location>=0){let le=te[Y];if(le===void 0&&(Y==="instanceMatrix"&&k.instanceMatrix&&(le=k.instanceMatrix),Y==="instanceColor"&&k.instanceColor&&(le=k.instanceColor)),le!==void 0){const O=le.normalized,K=le.itemSize,Ee=e.get(le);if(Ee===void 0)continue;const ze=Ee.buffer,Ke=Ee.type,X=Ee.bytesPerElement,he=Ke===n.INT||Ke===n.UNSIGNED_INT||le.gpuType===Ep;if(le.isInterleavedBufferAttribute){const me=le.data,Ue=me.stride,Ne=le.offset;if(me.isInstancedInterleavedBuffer){for(let $e=0;$e<ne.locationSize;$e++)S(ne.location+$e,me.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let $e=0;$e<ne.locationSize;$e++)y(ne.location+$e);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let $e=0;$e<ne.locationSize;$e++)b(ne.location+$e,K/ne.locationSize,Ke,O,Ue*X,(Ne+K/ne.locationSize*$e)*X,he)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<ne.locationSize;me++)S(ne.location+me,le.meshPerAttribute);k.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<ne.locationSize;me++)y(ne.location+me);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let me=0;me<ne.locationSize;me++)b(ne.location+me,K/ne.locationSize,Ke,O,K*X,K/ne.locationSize*me*X,he)}}else if(W!==void 0){const O=W[Y];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(ne.location,O);break;case 3:n.vertexAttrib3fv(ne.location,O);break;case 4:n.vertexAttrib4fv(ne.location,O);break;default:n.vertexAttrib1fv(ne.location,O)}}}}w()}function L(){D();for(const k in r){const Q=r[k];for(const ee in Q){const ue=Q[ee];for(const te in ue){const re=ue[te];for(const W in re)p(re[W].object),delete re[W];delete ue[te]}}delete r[k]}}function I(k){if(r[k.id]===void 0)return;const Q=r[k.id];for(const ee in Q){const ue=Q[ee];for(const te in ue){const re=ue[te];for(const W in re)p(re[W].object),delete re[W];delete ue[te]}}delete r[k.id]}function F(k){for(const Q in r){const ee=r[Q];for(const ue in ee){const te=ee[ue];if(te[k.id]===void 0)continue;const re=te[k.id];for(const W in re)p(re[W].object),delete re[W];delete te[k.id]}}}function E(k){for(const Q in r){const ee=r[Q],ue=k.isInstancedMesh===!0?k.id:0,te=ee[ue];if(te!==void 0){for(const re in te){const W=te[re];for(const Y in W)p(W[Y].object),delete W[Y];delete te[re]}delete ee[ue],Object.keys(ee).length===0&&delete r[Q]}}}function D(){Z(),c=!0,a!==o&&(a=o,h(a.object))}function Z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:Z,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function AA(n,e,t){let r;function o(h){r=h}function a(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function c(h,p,v){v!==0&&(n.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];t.update(_,r,1)}function d(h,p,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<h.length;M++)c(h[M],p[M],g[M]);else{_.multiDrawArraysInstancedWEBGL(r,h,0,p,0,g,0,v);let M=0;for(let T=0;T<v;T++)M+=p[T]*g[T];t.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function CA(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(F){return!(F!==Ri&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const E=F===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==hi&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Hi&&!E)}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(ct("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=n.getParameter(n.MAX_SAMPLES),I=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:R,maxSamples:L,samples:I}}function bA(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new Ts,f=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const _=v.length!==0||g||r!==0||o;return o=g,r=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,_){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,S=n.get(v);if(!o||M===null||M.length===0||a&&!y)a?p(null):h();else{const w=a?0:r,b=w*4;let R=S.clippingState||null;d.value=R,R=p(M,g,b,_);for(let L=0;L!==b;++L)R[L]=t[L];S.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(v,g,_,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=d.value,M!==!0||y===null){const S=_+T*4,w=g.matrixWorldInverse;f.getNormalMatrix(w),(y===null||y.length<S)&&(y=new Float32Array(S));for(let b=0,R=_;b!==T;++b,R+=4)c.copy(v[b]).applyMatrix4(w,f),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const $r=4,Sv=[.125,.215,.35,.446,.526,.582],Cs=20,RA=256,ba=new H_,Mv=new Lt;let Nd=null,Fd=0,Ud=0,Od=!1;const PA=new $;class Ev{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:f=PA}=a;Nd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Av(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Fd,Ud),this._renderer.xr.enabled=Od,e.scissorTest=!1,xo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Fd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:An,minFilter:An,generateMipmaps:!1,type:mr,format:Ri,colorSpace:Do,depthBuffer:!1},o=Tv(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tv(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=DA(a)),this._blurMaterial=IA(a,e,t),this._ggxMaterial=LA(a,e,t)}return o}_compileMaterial(e){const t=new xr(new bn,e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,r,o,a){const d=new di(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(Mv),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new xr(new Ka,new N_({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let S=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,S=!0):(y.color.copy(Mv),S=!0);for(let b=0;b<6;b++){const R=b%3;R===0?(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[b],a.y,a.z)):R===1?(d.up.set(0,0,h[b]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[b],a.z)):(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[b]));const L=this._cubeSize;xo(o,R*L,b>2?L:0,L,L),v.setRenderTarget(o),S&&v.render(T,d),v.render(e,d)}v.toneMapping=_,v.autoClear=g,e.background=w}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Is||e.mapping===Ro;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Av()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wv());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;xo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,ba)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=0+h*1.25,_=v*g,{_lodMax:M}=this,T=this._sizeLods[r],y=3*T*(r>M-$r?r-M+$r:0),S=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,xo(a,y,S,3*T,2*T),o.setRenderTarget(a),o.render(f,ba),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,xo(e,y,S,3*T,2*T),o.setRenderTarget(e),o.render(f,ba)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ct("blur direction must be either latitudinal or longitudinal!");const p=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,_=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Cs-1),T=a/M,y=isFinite(a)?1+Math.floor(p*T):Cs;y>Cs&&ct(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Cs}`);const S=[];let w=0;for(let F=0;F<Cs;++F){const E=F/T,D=Math.exp(-E*E/2);S.push(D),F===0?w+=D:F<y&&(w+=2*D)}for(let F=0;F<S.length;F++)S[F]=S[F]/w;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-r;const R=this._sizeLods[o],L=3*R*(o>b-$r?o-b+$r:0),I=4*(this._cubeSize-R);xo(t,L,I,3*R,2*R),d.setRenderTarget(t),d.render(v,ba)}}function DA(n){const e=[],t=[],r=[];let o=n;const a=n-$r+1+Sv.length;for(let c=0;c<a;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>n-$r?d=Sv[c-n+$r-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),p=-h,v=1+h,g=[p,p,v,p,v,v,p,p,v,v,p,v],_=6,M=6,T=3,y=2,S=1,w=new Float32Array(T*M*_),b=new Float32Array(y*M*_),R=new Float32Array(S*M*_);for(let I=0;I<_;I++){const F=I%3*2/3-1,E=I>2?0:-1,D=[F,E,0,F+2/3,E,0,F+2/3,E+1,0,F,E,0,F+2/3,E+1,0,F,E+1,0];w.set(D,T*M*I),b.set(g,y*M*I);const Z=[I,I,I,I,I,I];R.set(Z,S*M*I)}const L=new bn;L.setAttribute("position",new Pi(w,T)),L.setAttribute("uv",new Pi(b,y)),L.setAttribute("faceIndex",new Pi(R,S)),r.push(new xr(L,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Tv(n,e,t){const r=new ji(n,e,t);return r.texture.mapping=hu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function xo(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function LA(n,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function IA(n,e,t){const r=new Float32Array(Cs),o=new $(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function wv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Av(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function mu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class W_ extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new k_(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ka(5,5,5),a=new qi({name:"CubemapFromEquirect",uniforms:Lo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:hr});a.uniforms.tEquirect.value=t;const c=new xr(o,a),f=t.minFilter;return t.minFilter===bs&&(t.minFilter=An),new BT(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function NA(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,_=!1){return g==null?null:_?c(g):a(g)}function a(g){if(g&&g.isTexture){const _=g.mapping;if(_===sd||_===od)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const T=new W_(M.height);return T.fromEquirectangularTexture(n,g),e.set(g,T),g.addEventListener("dispose",h),f(T.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const _=g.mapping,M=_===sd||_===od,T=_===Is||_===Ro;if(M||T){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new Ev(n)),y=M?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const w=g.image;return M&&w&&w.height>0||T&&w&&d(w)?(r===null&&(r=new Ev(n)),y=M?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",p),y.texture):null}}}return g}function f(g,_){return _===sd?g.mapping=Is:_===od&&(g.mapping=Ro),g}function d(g){let _=0;const M=6;for(let T=0;T<M;T++)g[T]!==void 0&&_++;return _===M}function h(g){const _=g.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function FA(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&tu("WebGLRenderer: "+r+" extension not supported."),o}}}function UA(n,e,t,r){const o={},a=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const _=a.get(g);_&&(e.remove(_),a.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(v,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const _ in g)e.update(g[_],n.ARRAY_BUFFER)}function h(v){const g=[],_=v.index,M=v.attributes.position;let T=0;if(M===void 0)return;if(_!==null){const w=_.array;T=_.version;for(let b=0,R=w.length;b<R;b+=3){const L=w[b+0],I=w[b+1],F=w[b+2];g.push(L,I,I,F,F,L)}}else{const w=M.array;T=M.version;for(let b=0,R=w.length/3-1;b<R;b+=3){const L=b+0,I=b+1,F=b+2;g.push(L,I,I,F,F,L)}}const y=new(M.count>=65535?I_:L_)(g,1);y.version=T;const S=a.get(v);S&&e.remove(S),a.set(v,y)}function p(v){const g=a.get(v);if(g){const _=v.index;_!==null&&g.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:f,update:d,getWireframeAttribute:p}}function OA(n,e,t){let r;function o(g){r=g}let a,c;function f(g){a=g.type,c=g.bytesPerElement}function d(g,_){n.drawElements(r,_,a,g*c),t.update(_,r,1)}function h(g,_,M){M!==0&&(n.drawElementsInstanced(r,_,a,g*c,M),t.update(_,r,M))}function p(g,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,a,g,0,M);let y=0;for(let S=0;S<M;S++)y+=_[S];t.update(y,r,1)}function v(g,_,M,T){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<g.length;S++)h(g[S]/c,_[S],T[S]);else{y.multiDrawElementsInstancedWEBGL(r,_,0,a,g,0,T,0,M);let S=0;for(let w=0;w<M;w++)S+=_[w]*T[w];t.update(S,r,1)}}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function kA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,f){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=f*(a/3);break;case n.LINES:t.lines+=f*(a/2);break;case n.LINE_STRIP:t.lines+=f*(a-1);break;case n.LINE_LOOP:t.lines+=f*a;break;case n.POINTS:t.points+=f*a;break;default:Ct("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function BA(n,e,t){const r=new WeakMap,o=new tn;function a(c,f,d){const h=c.morphTargetInfluences,p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(f);if(g===void 0||g.count!==v){let Z=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",Z)};var _=Z;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let L=f.attributes.position.count*R,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*I*4*v),E=new R_(F,L,I,v);E.type=Hi,E.needsUpdate=!0;const D=R*4;for(let k=0;k<v;k++){const Q=S[k],ee=w[k],ue=b[k],te=L*I*4*k;for(let re=0;re<Q.count;re++){const W=re*D;M===!0&&(o.fromBufferAttribute(Q,re),F[te+W+0]=o.x,F[te+W+1]=o.y,F[te+W+2]=o.z,F[te+W+3]=0),T===!0&&(o.fromBufferAttribute(ee,re),F[te+W+4]=o.x,F[te+W+5]=o.y,F[te+W+6]=o.z,F[te+W+7]=0),y===!0&&(o.fromBufferAttribute(ue,re),F[te+W+8]=o.x,F[te+W+9]=o.y,F[te+W+10]=o.z,F[te+W+11]=ue.itemSize===4?o.w:1)}}g={count:v,texture:E,size:new Rt(L,I)},r.set(f,g),f.addEventListener("dispose",Z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const T=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function zA(n,e,t,r,o){let a=new WeakMap;function c(h){const p=o.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return g}function f(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:f}}const VA={[h_]:"LINEAR_TONE_MAPPING",[p_]:"REINHARD_TONE_MAPPING",[m_]:"CINEON_TONE_MAPPING",[g_]:"ACES_FILMIC_TONE_MAPPING",[x_]:"AGX_TONE_MAPPING",[__]:"NEUTRAL_TONE_MAPPING",[v_]:"CUSTOM_TONE_MAPPING"};function HA(n,e,t,r,o){const a=new ji(e,t,{type:n,depthBuffer:r,stencilBuffer:o}),c=new ji(e,t,{type:mr,depthBuffer:!1,stencilBuffer:!1}),f=new bn;f.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new nn([0,2,0,0,2,0],2));const d=new UT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new xr(f,d),p=new H_(-1,1,1,-1,0,1);let v=null,g=null,_=!1,M,T=null,y=[],S=!1;this.setSize=function(w,b){a.setSize(w,b),c.setSize(w,b);for(let R=0;R<y.length;R++){const L=y[R];L.setSize&&L.setSize(w,b)}},this.setEffects=function(w){y=w,S=y.length>0&&y[0].isRenderPass===!0;const b=a.width,R=a.height;for(let L=0;L<y.length;L++){const I=y[L];I.setSize&&I.setSize(b,R)}},this.begin=function(w,b){if(_||w.toneMapping===Wi&&y.length===0)return!1;if(T=b,b!==null){const R=b.width,L=b.height;(a.width!==R||a.height!==L)&&this.setSize(R,L)}return S===!1&&w.setRenderTarget(a),M=w.toneMapping,w.toneMapping=Wi,!0},this.hasRenderPass=function(){return S},this.end=function(w,b){w.toneMapping=M,_=!0;let R=a,L=c;for(let I=0;I<y.length;I++){const F=y[I];if(F.enabled!==!1&&(F.render(w,L,R,b),F.needsSwap!==!1)){const E=R;R=L,L=E}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,d.defines={},wt.getTransfer(v)===Nt&&(d.defines.SRGB_TRANSFER="");const I=VA[g];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,w.setRenderTarget(T),w.render(h,p),T=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),c.dispose(),f.dispose(),d.dispose()}}const j_=new Un,qh=new za(1,1),X_=new R_,Y_=new fT,q_=new k_,Cv=[],bv=[],Rv=new Float32Array(16),Pv=new Float32Array(9),Dv=new Float32Array(4);function ko(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=Cv[o];if(a===void 0&&(a=new Float32Array(o),Cv[o]=a),e!==0){r.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,n[c].toArray(a,f)}return a}function un(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function fn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function gu(n,e){let t=bv[e];t===void 0&&(t=new Int32Array(e),bv[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function GA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function WA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2fv(this.addr,e),fn(t,e)}}function jA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;n.uniform3fv(this.addr,e),fn(t,e)}}function XA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4fv(this.addr,e),fn(t,e)}}function YA(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,r))return;Dv.set(r),n.uniformMatrix2fv(this.addr,!1,Dv),fn(t,r)}}function qA(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,r))return;Pv.set(r),n.uniformMatrix3fv(this.addr,!1,Pv),fn(t,r)}}function KA(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,r))return;Rv.set(r),n.uniformMatrix4fv(this.addr,!1,Rv),fn(t,r)}}function $A(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ZA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2iv(this.addr,e),fn(t,e)}}function QA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3iv(this.addr,e),fn(t,e)}}function JA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4iv(this.addr,e),fn(t,e)}}function eC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function tC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;n.uniform2uiv(this.addr,e),fn(t,e)}}function nC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;n.uniform3uiv(this.addr,e),fn(t,e)}}function iC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;n.uniform4uiv(this.addr,e),fn(t,e)}}function rC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(qh.compareFunction=t.isReversedDepthBuffer()?Pp:Rp,a=qh):a=j_,t.setTexture2D(e||a,o)}function sC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Y_,o)}function oC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||q_,o)}function aC(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||X_,o)}function lC(n){switch(n){case 5126:return GA;case 35664:return WA;case 35665:return jA;case 35666:return XA;case 35674:return YA;case 35675:return qA;case 35676:return KA;case 5124:case 35670:return $A;case 35667:case 35671:return ZA;case 35668:case 35672:return QA;case 35669:case 35673:return JA;case 5125:return eC;case 36294:return tC;case 36295:return nC;case 36296:return iC;case 35678:case 36198:case 36298:case 36306:case 35682:return rC;case 35679:case 36299:case 36307:return sC;case 35680:case 36300:case 36308:case 36293:return oC;case 36289:case 36303:case 36311:case 36292:return aC}}function cC(n,e){n.uniform1fv(this.addr,e)}function uC(n,e){const t=ko(e,this.size,2);n.uniform2fv(this.addr,t)}function fC(n,e){const t=ko(e,this.size,3);n.uniform3fv(this.addr,t)}function dC(n,e){const t=ko(e,this.size,4);n.uniform4fv(this.addr,t)}function hC(n,e){const t=ko(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function pC(n,e){const t=ko(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function mC(n,e){const t=ko(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function gC(n,e){n.uniform1iv(this.addr,e)}function vC(n,e){n.uniform2iv(this.addr,e)}function xC(n,e){n.uniform3iv(this.addr,e)}function _C(n,e){n.uniform4iv(this.addr,e)}function yC(n,e){n.uniform1uiv(this.addr,e)}function SC(n,e){n.uniform2uiv(this.addr,e)}function MC(n,e){n.uniform3uiv(this.addr,e)}function EC(n,e){n.uniform4uiv(this.addr,e)}function TC(n,e,t){const r=this.cache,o=e.length,a=gu(t,o);un(r,a)||(n.uniform1iv(this.addr,a),fn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=qh:c=j_;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,a[f])}function wC(n,e,t){const r=this.cache,o=e.length,a=gu(t,o);un(r,a)||(n.uniform1iv(this.addr,a),fn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Y_,a[c])}function AC(n,e,t){const r=this.cache,o=e.length,a=gu(t,o);un(r,a)||(n.uniform1iv(this.addr,a),fn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||q_,a[c])}function CC(n,e,t){const r=this.cache,o=e.length,a=gu(t,o);un(r,a)||(n.uniform1iv(this.addr,a),fn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||X_,a[c])}function bC(n){switch(n){case 5126:return cC;case 35664:return uC;case 35665:return fC;case 35666:return dC;case 35674:return hC;case 35675:return pC;case 35676:return mC;case 5124:case 35670:return gC;case 35667:case 35671:return vC;case 35668:case 35672:return xC;case 35669:case 35673:return _C;case 5125:return yC;case 36294:return SC;case 36295:return MC;case 36296:return EC;case 35678:case 36198:case 36298:case 36306:case 35682:return TC;case 35679:case 36299:case 36307:return wC;case 35680:case 36300:case 36308:case 36293:return AC;case 36289:case 36303:case 36311:case 36292:return CC}}class RC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=lC(t.type)}}class PC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bC(t.type)}}class DC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const f=o[a];f.setValue(e,t[f.id],r)}}}const kd=/(\w+)(\])?(\[|\.)?/g;function Lv(n,e){n.seq.push(e),n.map[e.id]=e}function LC(n,e,t){const r=n.name,o=r.length;for(kd.lastIndex=0;;){const a=kd.exec(r),c=kd.lastIndex;let f=a[1];const d=a[2]==="]",h=a[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){Lv(t,h===void 0?new RC(f,n,e):new PC(f,n,e));break}else{let v=t.map[f];v===void 0&&(v=new DC(f),Lv(t,v)),t=v}}}class jc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);LC(f,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const f=t[a],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Iv(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const IC=37297;let NC=0;function FC(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const Nv=new ht;function UC(n){wt._getMatrix(Nv,wt.workingColorSpace,n);const e=`mat3( ${Nv.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Qc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Fv(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+FC(n.getShaderSource(e),f)}else return a}function OC(n,e){const t=UC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const kC={[h_]:"Linear",[p_]:"Reinhard",[m_]:"Cineon",[g_]:"ACESFilmic",[x_]:"AgX",[__]:"Neutral",[v_]:"Custom"};function BC(n,e){const t=kC[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fc=new $;function zC(){wt.getLuminanceCoefficients(Fc);const n=Fc.x.toFixed(4),e=Fc.y.toFixed(4),t=Fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function HC(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function GC(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let f=1;a.type===n.FLOAT_MAT2&&(f=2),a.type===n.FLOAT_MAT3&&(f=3),a.type===n.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:f}}return t}function La(n){return n!==""}function Uv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ov(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(n){return n.replace(WC,XC)}const jC=new Map;function XC(n,e){let t=pt[e];if(t===void 0){const r=jC.get(e);if(r!==void 0)t=pt[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Kh(t)}const YC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kv(n){return n.replace(YC,qC)}function qC(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function Bv(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const KC={[zc]:"SHADOWMAP_TYPE_PCF",[Da]:"SHADOWMAP_TYPE_VSM"};function $C(n){return KC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZC={[Is]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function QC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ZC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const JC={[Ro]:"ENVMAP_MODE_REFRACTION"};function eb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":JC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tb={[d_]:"ENVMAP_BLENDING_MULTIPLY",[GE]:"ENVMAP_BLENDING_MIX",[WE]:"ENVMAP_BLENDING_ADD"};function nb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":tb[n.combine]||"ENVMAP_BLENDING_NONE"}function ib(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function rb(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=$C(t),h=QC(t),p=eb(t),v=nb(t),g=ib(t),_=VC(t),M=HC(a),T=o.createProgram();let y,S,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(La).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(La).join(`
`),S.length>0&&(S+=`
`)):(y=[Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),S=[Bv(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?pt.tonemapping_pars_fragment:"",t.toneMapping!==Wi?BC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,OC("linearToOutputTexel",t.outputColorSpace),zC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),c=Kh(c),c=Uv(c,t),c=Ov(c,t),f=Kh(f),f=Uv(f,t),f=Ov(f,t),c=kv(c),f=kv(f),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const b=w+y+c,R=w+S+f,L=Iv(o,o.VERTEX_SHADER,b),I=Iv(o,o.FRAGMENT_SHADER,R);o.attachShader(T,L),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function F(k){if(n.debug.checkShaderErrors){const Q=o.getProgramInfoLog(T)||"",ee=o.getShaderInfoLog(L)||"",ue=o.getShaderInfoLog(I)||"",te=Q.trim(),re=ee.trim(),W=ue.trim();let Y=!0,ne=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,L,I);else{const le=Fv(o,L,"vertex"),O=Fv(o,I,"fragment");Ct("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+te+`
`+le+`
`+O)}else te!==""?ct("WebGLProgram: Program Info Log:",te):(re===""||W==="")&&(ne=!1);ne&&(k.diagnostics={runnable:Y,programLog:te,vertexShader:{log:re,prefix:y},fragmentShader:{log:W,prefix:S}})}o.deleteShader(L),o.deleteShader(I),E=new jc(o,T),D=GC(o,T)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(T,IC)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=L,this.fragmentShader=I,this}let sb=0;class ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new ab(e),t.set(e,r)),r}}class ab{constructor(e){this.id=sb++,this.code=e,this.usedTimes=0}}function lb(n,e,t,r,o,a){const c=new P_,f=new ob,d=new Set,h=[],p=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function T(E,D,Z,k,Q){const ee=k.fog,ue=Q.geometry,te=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,re=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,W=e.get(E.envMap||te,re),Y=W&&W.mapping===hu?W.image.height:null,ne=_[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ct("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const le=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=le!==void 0?le.length:0;let K=0;ue.morphAttributes.position!==void 0&&(K=1),ue.morphAttributes.normal!==void 0&&(K=2),ue.morphAttributes.color!==void 0&&(K=3);let Ee,ze,Ke,X;if(ne){const Et=Vi[ne];Ee=Et.vertexShader,ze=Et.fragmentShader}else Ee=E.vertexShader,ze=E.fragmentShader,f.update(E),Ke=f.getVertexShaderID(E),X=f.getFragmentShaderID(E);const he=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ue=Q.isInstancedMesh===!0,Ne=Q.isBatchedMesh===!0,$e=!!E.map,Zt=!!E.matcap,mt=!!W,St=!!E.aoMap,Pt=!!E.lightMap,ft=!!E.bumpMap,Bt=!!E.normalMap,z=!!E.displacementMap,Ht=!!E.emissiveMap,vt=!!E.metalnessMap,Mt=!!E.roughnessMap,Xe=E.anisotropy>0,N=E.clearcoat>0,A=E.dispersion>0,j=E.iridescence>0,pe=E.sheen>0,ge=E.transmission>0,fe=Xe&&!!E.anisotropyMap,Ve=N&&!!E.clearcoatMap,Ae=N&&!!E.clearcoatNormalMap,Qe=N&&!!E.clearcoatRoughnessMap,st=j&&!!E.iridescenceMap,ye=j&&!!E.iridescenceThicknessMap,we=pe&&!!E.sheenColorMap,Ye=pe&&!!E.sheenRoughnessMap,He=!!E.specularMap,Le=!!E.specularColorMap,ut=!!E.specularIntensityMap,H=ge&&!!E.transmissionMap,Ce=ge&&!!E.thicknessMap,Me=!!E.gradientMap,Ie=!!E.alphaMap,Se=E.alphaTest>0,de=!!E.alphaHash,Ge=!!E.extensions;let ot=Wi;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ot=n.toneMapping);const It={shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:Ee,fragmentShader:ze,defines:E.defines,customVertexShaderID:Ke,customFragmentShaderID:X,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ne,batchingColor:Ne&&Q._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Q.instanceColor!==null,instancingMorph:Ue&&Q.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Do,alphaToCoverage:!!E.alphaToCoverage,map:$e,matcap:Zt,envMap:mt,envMapMode:mt&&W.mapping,envMapCubeUVHeight:Y,aoMap:St,lightMap:Pt,bumpMap:ft,normalMap:Bt,displacementMap:z,emissiveMap:Ht,normalMapObjectSpace:Bt&&E.normalMapType===qE,normalMapTangentSpace:Bt&&E.normalMapType===YE,metalnessMap:vt,roughnessMap:Mt,anisotropy:Xe,anisotropyMap:fe,clearcoat:N,clearcoatMap:Ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Qe,dispersion:A,iridescence:j,iridescenceMap:st,iridescenceThicknessMap:ye,sheen:pe,sheenColorMap:we,sheenRoughnessMap:Ye,specularMap:He,specularColorMap:Le,specularIntensityMap:ut,transmission:ge,transmissionMap:H,thicknessMap:Ce,gradientMap:Me,opaque:E.transparent===!1&&E.blending===wo&&E.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Se,alphaHash:de,combine:E.combine,mapUv:$e&&M(E.map.channel),aoMapUv:St&&M(E.aoMap.channel),lightMapUv:Pt&&M(E.lightMap.channel),bumpMapUv:ft&&M(E.bumpMap.channel),normalMapUv:Bt&&M(E.normalMap.channel),displacementMapUv:z&&M(E.displacementMap.channel),emissiveMapUv:Ht&&M(E.emissiveMap.channel),metalnessMapUv:vt&&M(E.metalnessMap.channel),roughnessMapUv:Mt&&M(E.roughnessMap.channel),anisotropyMapUv:fe&&M(E.anisotropyMap.channel),clearcoatMapUv:Ve&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&M(E.sheenRoughnessMap.channel),specularMapUv:He&&M(E.specularMap.channel),specularColorMapUv:Le&&M(E.specularColorMap.channel),specularIntensityMapUv:ut&&M(E.specularIntensityMap.channel),transmissionMapUv:H&&M(E.transmissionMap.channel),thicknessMapUv:Ce&&M(E.thicknessMap.channel),alphaMapUv:Ie&&M(E.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Bt||Xe),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ue.attributes.uv&&($e||Ie),fog:!!ee,useFog:E.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||ue.attributes.normal===void 0&&Bt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:me,skinning:Q.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:K,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:$e&&E.map.isVideoTexture===!0&&wt.getTransfer(E.map.colorSpace)===Nt,decodeVideoTextureEmissive:Ht&&E.emissiveMap.isVideoTexture===!0&&wt.getTransfer(E.emissiveMap.colorSpace)===Nt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fr,flipSided:E.side===Yn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ge&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&E.extensions.multiDraw===!0||Ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return It.vertexUv1s=d.has(1),It.vertexUv2s=d.has(2),It.vertexUv3s=d.has(3),d.clear(),It}function y(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Z in E.defines)D.push(Z),D.push(E.defines[Z]);return E.isRawShaderMaterial===!1&&(S(D,E),w(D,E),D.push(n.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function S(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function w(E,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),E.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),E.push(c.mask)}function b(E){const D=_[E.type];let Z;if(D){const k=Vi[D];Z=IT.clone(k.uniforms)}else Z=E.uniforms;return Z}function R(E,D){let Z=p.get(D);return Z!==void 0?++Z.usedTimes:(Z=new rb(n,D,E,o),h.push(Z),p.set(D,Z)),Z}function L(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function I(E){f.remove(E)}function F(){f.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:b,acquireProgram:R,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:F}}function cb(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let f=n.get(c);return f===void 0&&(f={},n.set(c,f)),f}function r(c){n.delete(c)}function o(c,f,d){n.get(c)[f]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function ub(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function zv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vv(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function f(g,_,M,T,y,S){let w=n[e];return w===void 0?(w={id:g.id,object:g,geometry:_,material:M,materialVariant:c(g),groupOrder:T,renderOrder:g.renderOrder,z:y,group:S},n[e]=w):(w.id=g.id,w.object=g,w.geometry=_,w.material=M,w.materialVariant=c(g),w.groupOrder=T,w.renderOrder=g.renderOrder,w.z=y,w.group=S),e++,w}function d(g,_,M,T,y,S){const w=f(g,_,M,T,y,S);M.transmission>0?r.push(w):M.transparent===!0?o.push(w):t.push(w)}function h(g,_,M,T,y,S){const w=f(g,_,M,T,y,S);M.transmission>0?r.unshift(w):M.transparent===!0?o.unshift(w):t.unshift(w)}function p(g,_){t.length>1&&t.sort(g||ub),r.length>1&&r.sort(_||zv),o.length>1&&o.sort(_||zv)}function v(){for(let g=e,_=n.length;g<_;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:p}}function fb(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new Vv,n.set(r,[c])):o>=a.length?(c=new Vv,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function db(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new Lt};break;case"SpotLight":t={position:new $,direction:new $,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function hb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pb=0;function mb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function gb(n){const e=new db,t=hb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new $);const o=new $,a=new $t,c=new $t;function f(h){let p=0,v=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let _=0,M=0,T=0,y=0,S=0,w=0,b=0,R=0,L=0,I=0,F=0;h.sort(mb);for(let D=0,Z=h.length;D<Z;D++){const k=h[D],Q=k.color,ee=k.intensity,ue=k.distance;let te=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Po?te=k.shadow.map.texture:te=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)p+=Q.r*ee,v+=Q.g*ee,g+=Q.b*ee;else if(k.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(k.sh.coefficients[re],ee);F++}else if(k.isDirectionalLight){const re=e.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,Y=t.get(k);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.directionalShadow[_]=Y,r.directionalShadowMap[_]=te,r.directionalShadowMatrix[_]=k.shadow.matrix,w++}r.directional[_]=re,_++}else if(k.isSpotLight){const re=e.get(k);re.position.setFromMatrixPosition(k.matrixWorld),re.color.copy(Q).multiplyScalar(ee),re.distance=ue,re.coneCos=Math.cos(k.angle),re.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),re.decay=k.decay,r.spot[T]=re;const W=k.shadow;if(k.map&&(r.spotLightMap[L]=k.map,L++,W.updateMatrices(k),k.castShadow&&I++),r.spotLightMatrix[T]=W.matrix,k.castShadow){const Y=t.get(k);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.spotShadow[T]=Y,r.spotShadowMap[T]=te,R++}T++}else if(k.isRectAreaLight){const re=e.get(k);re.color.copy(Q).multiplyScalar(ee),re.halfWidth.set(k.width*.5,0,0),re.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=re,y++}else if(k.isPointLight){const re=e.get(k);if(re.color.copy(k.color).multiplyScalar(k.intensity),re.distance=k.distance,re.decay=k.decay,k.castShadow){const W=k.shadow,Y=t.get(k);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,r.pointShadow[M]=Y,r.pointShadowMap[M]=te,r.pointShadowMatrix[M]=k.shadow.matrix,b++}r.point[M]=re,M++}else if(k.isHemisphereLight){const re=e.get(k);re.skyColor.copy(k.color).multiplyScalar(ee),re.groundColor.copy(k.groundColor).multiplyScalar(ee),r.hemi[S]=re,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==_||E.pointLength!==M||E.spotLength!==T||E.rectAreaLength!==y||E.hemiLength!==S||E.numDirectionalShadows!==w||E.numPointShadows!==b||E.numSpotShadows!==R||E.numSpotMaps!==L||E.numLightProbes!==F)&&(r.directional.length=_,r.spot.length=T,r.rectArea.length=y,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=R+L-I,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=F,E.directionalLength=_,E.pointLength=M,E.spotLength=T,E.rectAreaLength=y,E.hemiLength=S,E.numDirectionalShadows=w,E.numPointShadows=b,E.numSpotShadows=R,E.numSpotMaps=L,E.numLightProbes=F,r.version=pb++)}function d(h,p){let v=0,g=0,_=0,M=0,T=0;const y=p.matrixWorldInverse;for(let S=0,w=h.length;S<w;S++){const b=h[S];if(b.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),v++}else if(b.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(b.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),c.identity(),a.copy(b.matrixWorld),a.premultiply(y),c.extractRotation(a),R.halfWidth.set(b.width*.5,0,0),R.halfHeight.set(0,b.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(b.matrixWorld),R.position.applyMatrix4(y),g++}else if(b.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(b.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:f,setupView:d,state:r}}function Hv(n){const e=new gb(n),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function a(p){t.push(p)}function c(p){r.push(p)}function f(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:f,setupLightsView:d,pushLight:a,pushShadow:c}}function vb(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let f;return c===void 0?(f=new Hv(n),e.set(o,[f])):a>=c.length?(f=new Hv(n),c.push(f)):f=c[a],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_b=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yb=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],Sb=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],Gv=new $t,Ra=new $,Bd=new $;function Mb(n,e,t){let r=new F_;const o=new Rt,a=new Rt,c=new tn,f=new OT,d=new kT,h={},p=t.maxTextureSize,v={[Qr]:Yn,[Yn]:Qr,[fr]:fr},g=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:xb,fragmentShader:_b}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new bn;M.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new xr(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let S=this.type;this.render=function(I,F,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===TE&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=zc);const D=n.getRenderTarget(),Z=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(hr),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const ee=S!==this.type;ee&&F.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(te=>te.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,te=I.length;ue<te;ue++){const re=I[ue],W=re.shadow;if(W===void 0){ct("WebGLShadowMap:",re,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const Y=W.getFrameExtents();o.multiply(Y),a.copy(W.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/Y.x),o.x=a.x*Y.x,W.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/Y.y),o.y=a.y*Y.y,W.mapSize.y=a.y));const ne=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=ne,W.map===null||ee===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Da){if(re.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ji(o.x,o.y,{format:Po,type:mr,minFilter:An,magFilter:An,generateMipmaps:!1}),W.map.texture.name=re.name+".shadowMap",W.map.depthTexture=new za(o.x,o.y,Hi),W.map.depthTexture.name=re.name+".shadowMapDepth",W.map.depthTexture.format=gr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n}else re.isPointLight?(W.map=new W_(o.x),W.map.depthTexture=new DT(o.x,Yi)):(W.map=new ji(o.x,o.y),W.map.depthTexture=new za(o.x,o.y,Yi)),W.map.depthTexture.name=re.name+".shadowMap",W.map.depthTexture.format=gr,this.type===zc?(W.map.depthTexture.compareFunction=ne?Pp:Rp,W.map.depthTexture.minFilter=An,W.map.depthTexture.magFilter=An):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n);W.camera.updateProjectionMatrix()}const le=W.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<le;O++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,O),n.clear();else{O===0&&(n.setRenderTarget(W.map),n.clear());const K=W.getViewport(O);c.set(a.x*K.x,a.y*K.y,a.x*K.z,a.y*K.w),Q.viewport(c)}if(re.isPointLight){const K=W.camera,Ee=W.matrix,ze=re.distance||K.far;ze!==K.far&&(K.far=ze,K.updateProjectionMatrix()),Ra.setFromMatrixPosition(re.matrixWorld),K.position.copy(Ra),Bd.copy(K.position),Bd.add(yb[O]),K.up.copy(Sb[O]),K.lookAt(Bd),K.updateMatrixWorld(),Ee.makeTranslation(-Ra.x,-Ra.y,-Ra.z),Gv.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Gv,K.coordinateSystem,K.reversedDepth)}else W.updateMatrices(re);r=W.getFrustum(),R(F,E,W.camera,re,this.type)}W.isPointLightShadow!==!0&&this.type===Da&&w(W,E),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(D,Z,k)};function w(I,F){const E=e.update(T);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ji(o.x,o.y,{format:Po,type:mr})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,n.setRenderTarget(I.mapPass),n.clear(),n.renderBufferDirect(F,null,E,g,T,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,n.setRenderTarget(I.map),n.clear(),n.renderBufferDirect(F,null,E,_,T,null)}function b(I,F,E,D){let Z=null;const k=E.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(k!==void 0)Z=k;else if(Z=E.isPointLight===!0?d:f,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=Z.uuid,ee=F.uuid;let ue=h[Q];ue===void 0&&(ue={},h[Q]=ue);let te=ue[ee];te===void 0&&(te=Z.clone(),ue[ee]=te,F.addEventListener("dispose",L)),Z=te}if(Z.visible=F.visible,Z.wireframe=F.wireframe,D===Da?Z.side=F.shadowSide!==null?F.shadowSide:F.side:Z.side=F.shadowSide!==null?F.shadowSide:v[F.side],Z.alphaMap=F.alphaMap,Z.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Z.map=F.map,Z.clipShadows=F.clipShadows,Z.clippingPlanes=F.clippingPlanes,Z.clipIntersection=F.clipIntersection,Z.displacementMap=F.displacementMap,Z.displacementScale=F.displacementScale,Z.displacementBias=F.displacementBias,Z.wireframeLinewidth=F.wireframeLinewidth,Z.linewidth=F.linewidth,E.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const Q=n.properties.get(Z);Q.light=E}return Z}function R(I,F,E,D,Z){if(I.visible===!1)return;if(I.layers.test(F.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&Z===Da)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,I.matrixWorld);const ee=e.update(I),ue=I.material;if(Array.isArray(ue)){const te=ee.groups;for(let re=0,W=te.length;re<W;re++){const Y=te[re],ne=ue[Y.materialIndex];if(ne&&ne.visible){const le=b(I,ne,D,Z);I.onBeforeShadow(n,I,F,E,ee,le,Y),n.renderBufferDirect(E,null,ee,le,I,Y),I.onAfterShadow(n,I,F,E,ee,le,Y)}}}else if(ue.visible){const te=b(I,ue,D,Z);I.onBeforeShadow(n,I,F,E,ee,te,null),n.renderBufferDirect(E,null,ee,te,I,null),I.onAfterShadow(n,I,F,E,ee,te,null)}}const Q=I.children;for(let ee=0,ue=Q.length;ee<ue;ee++)R(Q[ee],F,E,D,Z)}function L(I){I.target.removeEventListener("dispose",L);for(const E in h){const D=h[E],Z=I.target.uuid;Z in D&&(D[Z].dispose(),delete D[Z])}}}function Eb(n,e){function t(){let H=!1;const Ce=new tn;let Me=null;const Ie=new tn(0,0,0,0);return{setMask:function(Se){Me!==Se&&!H&&(n.colorMask(Se,Se,Se,Se),Me=Se)},setLocked:function(Se){H=Se},setClear:function(Se,de,Ge,ot,It){It===!0&&(Se*=ot,de*=ot,Ge*=ot),Ce.set(Se,de,Ge,ot),Ie.equals(Ce)===!1&&(n.clearColor(Se,de,Ge,ot),Ie.copy(Ce))},reset:function(){H=!1,Me=null,Ie.set(-1,0,0,0)}}}function r(){let H=!1,Ce=!1,Me=null,Ie=null,Se=null;return{setReversed:function(de){if(Ce!==de){const Ge=e.get("EXT_clip_control");de?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=de;const ot=Se;Se=null,this.setClear(ot)}},getReversed:function(){return Ce},setTest:function(de){de?he(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(de){Me!==de&&!H&&(n.depthMask(de),Me=de)},setFunc:function(de){if(Ce&&(de=rT[de]),Ie!==de){switch(de){case sh:n.depthFunc(n.NEVER);break;case oh:n.depthFunc(n.ALWAYS);break;case ah:n.depthFunc(n.LESS);break;case bo:n.depthFunc(n.LEQUAL);break;case lh:n.depthFunc(n.EQUAL);break;case ch:n.depthFunc(n.GEQUAL);break;case uh:n.depthFunc(n.GREATER);break;case fh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=de}},setLocked:function(de){H=de},setClear:function(de){Se!==de&&(Se=de,Ce&&(de=1-de),n.clearDepth(de))},reset:function(){H=!1,Me=null,Ie=null,Se=null,Ce=!1}}}function o(){let H=!1,Ce=null,Me=null,Ie=null,Se=null,de=null,Ge=null,ot=null,It=null;return{setTest:function(Et){H||(Et?he(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(Et){Ce!==Et&&!H&&(n.stencilMask(Et),Ce=Et)},setFunc:function(Et,ti,Rn){(Me!==Et||Ie!==ti||Se!==Rn)&&(n.stencilFunc(Et,ti,Rn),Me=Et,Ie=ti,Se=Rn)},setOp:function(Et,ti,Rn){(de!==Et||Ge!==ti||ot!==Rn)&&(n.stencilOp(Et,ti,Rn),de=Et,Ge=ti,ot=Rn)},setLocked:function(Et){H=Et},setClear:function(Et){It!==Et&&(n.clearStencil(Et),It=Et)},reset:function(){H=!1,Ce=null,Me=null,Ie=null,Se=null,de=null,Ge=null,ot=null,It=null}}}const a=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let p={},v={},g=new WeakMap,_=[],M=null,T=!1,y=null,S=null,w=null,b=null,R=null,L=null,I=null,F=new Lt(0,0,0),E=0,D=!1,Z=null,k=null,Q=null,ee=null,ue=null;const te=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,W=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),re=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),re=W>=2);let ne=null,le={};const O=n.getParameter(n.SCISSOR_BOX),K=n.getParameter(n.VIEWPORT),Ee=new tn().fromArray(O),ze=new tn().fromArray(K);function Ke(H,Ce,Me,Ie){const Se=new Uint8Array(4),de=n.createTexture();n.bindTexture(H,de),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<Me;Ge++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(Ce+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return de}const X={};X[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(n.DEPTH_TEST),c.setFunc(bo),ft(!1),Bt(H0),he(n.CULL_FACE),St(hr);function he(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function me(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function Ue(H,Ce){return v[H]!==Ce?(n.bindFramebuffer(H,Ce),v[H]=Ce,H===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Ce),H===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ne(H,Ce){let Me=_,Ie=!1;if(H){Me=g.get(Ce),Me===void 0&&(Me=[],g.set(Ce,Me));const Se=H.textures;if(Me.length!==Se.length||Me[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ge=Se.length;de<Ge;de++)Me[de]=n.COLOR_ATTACHMENT0+de;Me.length=Se.length,Ie=!0}}else Me[0]!==n.BACK&&(Me[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(Me)}function $e(H){return M!==H?(n.useProgram(H),M=H,!0):!1}const Zt={[As]:n.FUNC_ADD,[AE]:n.FUNC_SUBTRACT,[CE]:n.FUNC_REVERSE_SUBTRACT};Zt[bE]=n.MIN,Zt[RE]=n.MAX;const mt={[PE]:n.ZERO,[DE]:n.ONE,[LE]:n.SRC_COLOR,[ih]:n.SRC_ALPHA,[kE]:n.SRC_ALPHA_SATURATE,[UE]:n.DST_COLOR,[NE]:n.DST_ALPHA,[IE]:n.ONE_MINUS_SRC_COLOR,[rh]:n.ONE_MINUS_SRC_ALPHA,[OE]:n.ONE_MINUS_DST_COLOR,[FE]:n.ONE_MINUS_DST_ALPHA,[BE]:n.CONSTANT_COLOR,[zE]:n.ONE_MINUS_CONSTANT_COLOR,[VE]:n.CONSTANT_ALPHA,[HE]:n.ONE_MINUS_CONSTANT_ALPHA};function St(H,Ce,Me,Ie,Se,de,Ge,ot,It,Et){if(H===hr){T===!0&&(me(n.BLEND),T=!1);return}if(T===!1&&(he(n.BLEND),T=!0),H!==wE){if(H!==y||Et!==D){if((S!==As||R!==As)&&(n.blendEquation(n.FUNC_ADD),S=As,R=As),Et)switch(H){case wo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case G0:n.blendFunc(n.ONE,n.ONE);break;case W0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case j0:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ct("WebGLState: Invalid blending: ",H);break}else switch(H){case wo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case G0:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case W0:Ct("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case j0:Ct("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ct("WebGLState: Invalid blending: ",H);break}w=null,b=null,L=null,I=null,F.set(0,0,0),E=0,y=H,D=Et}return}Se=Se||Ce,de=de||Me,Ge=Ge||Ie,(Ce!==S||Se!==R)&&(n.blendEquationSeparate(Zt[Ce],Zt[Se]),S=Ce,R=Se),(Me!==w||Ie!==b||de!==L||Ge!==I)&&(n.blendFuncSeparate(mt[Me],mt[Ie],mt[de],mt[Ge]),w=Me,b=Ie,L=de,I=Ge),(ot.equals(F)===!1||It!==E)&&(n.blendColor(ot.r,ot.g,ot.b,It),F.copy(ot),E=It),y=H,D=!1}function Pt(H,Ce){H.side===fr?me(n.CULL_FACE):he(n.CULL_FACE);let Me=H.side===Yn;Ce&&(Me=!Me),ft(Me),H.blending===wo&&H.transparent===!1?St(hr):St(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ie=H.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ft(H){Z!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),Z=H)}function Bt(H){H!==ME?(he(n.CULL_FACE),H!==k&&(H===H0?n.cullFace(n.BACK):H===EE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),k=H}function z(H){H!==Q&&(re&&n.lineWidth(H),Q=H)}function Ht(H,Ce,Me){H?(he(n.POLYGON_OFFSET_FILL),(ee!==Ce||ue!==Me)&&(ee=Ce,ue=Me,c.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,Me))):me(n.POLYGON_OFFSET_FILL)}function vt(H){H?he(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Mt(H){H===void 0&&(H=n.TEXTURE0+te-1),ne!==H&&(n.activeTexture(H),ne=H)}function Xe(H,Ce,Me){Me===void 0&&(ne===null?Me=n.TEXTURE0+te-1:Me=ne);let Ie=le[Me];Ie===void 0&&(Ie={type:void 0,texture:void 0},le[Me]=Ie),(Ie.type!==H||Ie.texture!==Ce)&&(ne!==Me&&(n.activeTexture(Me),ne=Me),n.bindTexture(H,Ce||X[H]),Ie.type=H,Ie.texture=Ce)}function N(){const H=le[ne];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function A(){try{n.compressedTexImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function pe(){try{n.texSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function ge(){try{n.texSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Ae(){try{n.texStorage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function Qe(){try{n.texStorage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function st(){try{n.texImage2D(...arguments)}catch(H){Ct("WebGLState:",H)}}function ye(){try{n.texImage3D(...arguments)}catch(H){Ct("WebGLState:",H)}}function we(H){Ee.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),Ee.copy(H))}function Ye(H){ze.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),ze.copy(H))}function He(H,Ce){let Me=h.get(Ce);Me===void 0&&(Me=new WeakMap,h.set(Ce,Me));let Ie=Me.get(H);Ie===void 0&&(Ie=n.getUniformBlockIndex(Ce,H.name),Me.set(H,Ie))}function Le(H,Ce){const Ie=h.get(Ce).get(H);d.get(Ce)!==Ie&&(n.uniformBlockBinding(Ce,Ie,H.__bindingPointIndex),d.set(Ce,Ie))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ne=null,le={},v={},g=new WeakMap,_=[],M=null,T=!1,y=null,S=null,w=null,b=null,R=null,L=null,I=null,F=new Lt(0,0,0),E=0,D=!1,Z=null,k=null,Q=null,ee=null,ue=null,Ee.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:he,disable:me,bindFramebuffer:Ue,drawBuffers:Ne,useProgram:$e,setBlending:St,setMaterial:Pt,setFlipSided:ft,setCullFace:Bt,setLineWidth:z,setPolygonOffset:Ht,setScissorTest:vt,activeTexture:Mt,bindTexture:Xe,unbindTexture:N,compressedTexImage2D:A,compressedTexImage3D:j,texImage2D:st,texImage3D:ye,updateUBOMapping:He,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:Qe,texSubImage2D:pe,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ve,scissor:we,viewport:Ye,reset:ut}}function Tb(n,e,t,r,o,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Rt,p=new WeakMap;let v;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(N,A){return _?new OffscreenCanvas(N,A):eu("canvas")}function T(N,A,j){let pe=1;const ge=Xe(N);if((ge.width>j||ge.height>j)&&(pe=j/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const fe=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);v===void 0&&(v=M(fe,Ve));const Ae=A?M(fe,Ve):v;return Ae.width=fe,Ae.height=Ve,Ae.getContext("2d").drawImage(N,0,0,fe,Ve),ct("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+Ve+")."),Ae}else return"data"in N&&ct("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function y(N){return N.generateMipmaps}function S(N){n.generateMipmap(N)}function w(N){return N.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?n.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(N,A,j,pe,ge=!1){if(N!==null){if(n[N]!==void 0)return n[N];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=A;if(A===n.RED&&(j===n.FLOAT&&(fe=n.R32F),j===n.HALF_FLOAT&&(fe=n.R16F),j===n.UNSIGNED_BYTE&&(fe=n.R8)),A===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.R8UI),j===n.UNSIGNED_SHORT&&(fe=n.R16UI),j===n.UNSIGNED_INT&&(fe=n.R32UI),j===n.BYTE&&(fe=n.R8I),j===n.SHORT&&(fe=n.R16I),j===n.INT&&(fe=n.R32I)),A===n.RG&&(j===n.FLOAT&&(fe=n.RG32F),j===n.HALF_FLOAT&&(fe=n.RG16F),j===n.UNSIGNED_BYTE&&(fe=n.RG8)),A===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RG8UI),j===n.UNSIGNED_SHORT&&(fe=n.RG16UI),j===n.UNSIGNED_INT&&(fe=n.RG32UI),j===n.BYTE&&(fe=n.RG8I),j===n.SHORT&&(fe=n.RG16I),j===n.INT&&(fe=n.RG32I)),A===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),j===n.UNSIGNED_INT&&(fe=n.RGB32UI),j===n.BYTE&&(fe=n.RGB8I),j===n.SHORT&&(fe=n.RGB16I),j===n.INT&&(fe=n.RGB32I)),A===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),j===n.UNSIGNED_INT&&(fe=n.RGBA32UI),j===n.BYTE&&(fe=n.RGBA8I),j===n.SHORT&&(fe=n.RGBA16I),j===n.INT&&(fe=n.RGBA32I)),A===n.RGB&&(j===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),A===n.RGBA){const Ve=ge?Qc:wt.getTransfer(pe);j===n.FLOAT&&(fe=n.RGBA32F),j===n.HALF_FLOAT&&(fe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(fe=Ve===Nt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(N,A){let j;return N?A===null||A===Yi||A===Ba?j=n.DEPTH24_STENCIL8:A===Hi?j=n.DEPTH32F_STENCIL8:A===ka&&(j=n.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Yi||A===Ba?j=n.DEPTH_COMPONENT24:A===Hi?j=n.DEPTH_COMPONENT32F:A===ka&&(j=n.DEPTH_COMPONENT16),j}function L(N,A){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==_n&&N.minFilter!==An?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function I(N){const A=N.target;A.removeEventListener("dispose",I),E(A),A.isVideoTexture&&p.delete(A)}function F(N){const A=N.target;A.removeEventListener("dispose",F),Z(A)}function E(N){const A=r.get(N);if(A.__webglInit===void 0)return;const j=N.source,pe=g.get(j);if(pe){const ge=pe[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&D(N),Object.keys(pe).length===0&&g.delete(j)}r.remove(N)}function D(N){const A=r.get(N);n.deleteTexture(A.__webglTexture);const j=N.source,pe=g.get(j);delete pe[A.__cacheKey],c.memory.textures--}function Z(N){const A=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(A.__webglFramebuffer[pe]))for(let ge=0;ge<A.__webglFramebuffer[pe].length;ge++)n.deleteFramebuffer(A.__webglFramebuffer[pe][ge]);else n.deleteFramebuffer(A.__webglFramebuffer[pe]);A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer[pe])}else{if(Array.isArray(A.__webglFramebuffer))for(let pe=0;pe<A.__webglFramebuffer.length;pe++)n.deleteFramebuffer(A.__webglFramebuffer[pe]);else n.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&n.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&n.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pe=0;pe<A.__webglColorRenderbuffer.length;pe++)A.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(A.__webglColorRenderbuffer[pe]);A.__webglDepthRenderbuffer&&n.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const j=N.textures;for(let pe=0,ge=j.length;pe<ge;pe++){const fe=r.get(j[pe]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(j[pe])}r.remove(N)}let k=0;function Q(){k=0}function ee(){const N=k;return N>=o.maxTextures&&ct("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),k+=1,N}function ue(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function te(N,A){const j=r.get(N);if(N.isVideoTexture&&vt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&j.__version!==N.version){const pe=N.image;if(pe===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{X(j,N,A);return}}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+A)}function re(N,A){const j=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){X(j,N,A);return}else N.isExternalTexture&&(j.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+A)}function W(N,A){const j=r.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&j.__version!==N.version){X(j,N,A);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+A)}function Y(N,A){const j=r.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&j.__version!==N.version){he(j,N,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+A)}const ne={[dh]:n.REPEAT,[dr]:n.CLAMP_TO_EDGE,[hh]:n.MIRRORED_REPEAT},le={[_n]:n.NEAREST,[jE]:n.NEAREST_MIPMAP_NEAREST,[lc]:n.NEAREST_MIPMAP_LINEAR,[An]:n.LINEAR,[ad]:n.LINEAR_MIPMAP_NEAREST,[bs]:n.LINEAR_MIPMAP_LINEAR},O={[KE]:n.NEVER,[eT]:n.ALWAYS,[$E]:n.LESS,[Rp]:n.LEQUAL,[ZE]:n.EQUAL,[Pp]:n.GEQUAL,[QE]:n.GREATER,[JE]:n.NOTEQUAL};function K(N,A){if(A.type===Hi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===An||A.magFilter===ad||A.magFilter===lc||A.magFilter===bs||A.minFilter===An||A.minFilter===ad||A.minFilter===lc||A.minFilter===bs)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(N,n.TEXTURE_WRAP_S,ne[A.wrapS]),n.texParameteri(N,n.TEXTURE_WRAP_T,ne[A.wrapT]),(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)&&n.texParameteri(N,n.TEXTURE_WRAP_R,ne[A.wrapR]),n.texParameteri(N,n.TEXTURE_MAG_FILTER,le[A.magFilter]),n.texParameteri(N,n.TEXTURE_MIN_FILTER,le[A.minFilter]),A.compareFunction&&(n.texParameteri(N,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(N,n.TEXTURE_COMPARE_FUNC,O[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===_n||A.minFilter!==lc&&A.minFilter!==bs||A.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(N,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function Ee(N,A){let j=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",I));const pe=A.source;let ge=g.get(pe);ge===void 0&&(ge={},g.set(pe,ge));const fe=ue(A);if(fe!==N.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ge[fe].usedTimes++;const Ve=ge[N.__cacheKey];Ve!==void 0&&(ge[N.__cacheKey].usedTimes--,Ve.usedTimes===0&&D(A)),N.__cacheKey=fe,N.__webglTexture=ge[fe].texture}return j}function ze(N,A,j){return Math.floor(Math.floor(N/j)/A)}function Ke(N,A,j,pe){const fe=N.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,A.width,A.height,j,pe,A.data);else{fe.sort((ye,we)=>ye.start-we.start);let Ve=0;for(let ye=1;ye<fe.length;ye++){const we=fe[Ve],Ye=fe[ye],He=we.start+we.count,Le=ze(Ye.start,A.width,4),ut=ze(we.start,A.width,4);Ye.start<=He+1&&Le===ut&&ze(Ye.start+Ye.count-1,A.width,4)===Le?we.count=Math.max(we.count,Ye.start+Ye.count-we.start):(++Ve,fe[Ve]=Ye)}fe.length=Ve+1;const Ae=n.getParameter(n.UNPACK_ROW_LENGTH),Qe=n.getParameter(n.UNPACK_SKIP_PIXELS),st=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,A.width);for(let ye=0,we=fe.length;ye<we;ye++){const Ye=fe[ye],He=Math.floor(Ye.start/4),Le=Math.ceil(Ye.count/4),ut=He%A.width,H=Math.floor(He/A.width),Ce=Le,Me=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ut),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,ut,H,Ce,Me,j,pe,A.data)}N.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,st)}}function X(N,A,j){let pe=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=n.TEXTURE_3D);const ge=Ee(N,A),fe=A.source;t.bindTexture(pe,N.__webglTexture,n.TEXTURE0+j);const Ve=r.get(fe);if(fe.version!==Ve.__version||ge===!0){t.activeTexture(n.TEXTURE0+j);const Ae=wt.getPrimaries(wt.workingColorSpace),Qe=A.colorSpace===Kr?null:wt.getPrimaries(A.colorSpace),st=A.colorSpace===Kr||Ae===Qe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ye=T(A.image,!1,o.maxTextureSize);ye=Mt(A,ye);const we=a.convert(A.format,A.colorSpace),Ye=a.convert(A.type);let He=b(A.internalFormat,we,Ye,A.colorSpace,A.isVideoTexture);K(pe,A);let Le;const ut=A.mipmaps,H=A.isVideoTexture!==!0,Ce=Ve.__version===void 0||ge===!0,Me=fe.dataReady,Ie=L(A,ye);if(A.isDepthTexture)He=R(A.format===Rs,A.type),Ce&&(H?t.texStorage2D(n.TEXTURE_2D,1,He,ye.width,ye.height):t.texImage2D(n.TEXTURE_2D,0,He,ye.width,ye.height,0,we,Ye,null));else if(A.isDataTexture)if(ut.length>0){H&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ie,He,ut[0].width,ut[0].height);for(let Se=0,de=ut.length;Se<de;Se++)Le=ut[Se],H?Me&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,we,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,Se,He,Le.width,Le.height,0,we,Ye,Le.data);A.generateMipmaps=!1}else H?(Ce&&t.texStorage2D(n.TEXTURE_2D,Ie,He,ye.width,ye.height),Me&&Ke(A,ye,we,Ye)):t.texImage2D(n.TEXTURE_2D,0,He,ye.width,ye.height,0,we,Ye,ye.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){H&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,He,ut[0].width,ut[0].height,ye.depth);for(let Se=0,de=ut.length;Se<de;Se++)if(Le=ut[Se],A.format!==Ri)if(we!==null)if(H){if(Me)if(A.layerUpdates.size>0){const Ge=yv(Le.width,Le.height,A.format,A.type);for(const ot of A.layerUpdates){const It=Le.data.subarray(ot*Ge/Le.data.BYTES_PER_ELEMENT,(ot+1)*Ge/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,ot,Le.width,Le.height,1,we,It)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,ye.depth,we,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Se,He,Le.width,Le.height,ye.depth,0,Le.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Se,0,0,0,Le.width,Le.height,ye.depth,we,Ye,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Se,He,Le.width,Le.height,ye.depth,0,we,Ye,Le.data)}else{H&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ie,He,ut[0].width,ut[0].height);for(let Se=0,de=ut.length;Se<de;Se++)Le=ut[Se],A.format!==Ri?we!==null?H?Me&&t.compressedTexSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,Se,He,Le.width,Le.height,0,Le.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,Le.width,Le.height,we,Ye,Le.data):t.texImage2D(n.TEXTURE_2D,Se,He,Le.width,Le.height,0,we,Ye,Le.data)}else if(A.isDataArrayTexture)if(H){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,He,ye.width,ye.height,ye.depth),Me)if(A.layerUpdates.size>0){const Se=yv(ye.width,ye.height,A.format,A.type);for(const de of A.layerUpdates){const Ge=ye.data.subarray(de*Se/ye.data.BYTES_PER_ELEMENT,(de+1)*Se/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,ye.width,ye.height,1,we,Ye,Ge)}A.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,we,Ye,ye.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,ye.width,ye.height,ye.depth,0,we,Ye,ye.data);else if(A.isData3DTexture)H?(Ce&&t.texStorage3D(n.TEXTURE_3D,Ie,He,ye.width,ye.height,ye.depth),Me&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,we,Ye,ye.data)):t.texImage3D(n.TEXTURE_3D,0,He,ye.width,ye.height,ye.depth,0,we,Ye,ye.data);else if(A.isFramebufferTexture){if(Ce)if(H)t.texStorage2D(n.TEXTURE_2D,Ie,He,ye.width,ye.height);else{let Se=ye.width,de=ye.height;for(let Ge=0;Ge<Ie;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,He,Se,de,0,we,Ye,null),Se>>=1,de>>=1}}else if(ut.length>0){if(H&&Ce){const Se=Xe(ut[0]);t.texStorage2D(n.TEXTURE_2D,Ie,He,Se.width,Se.height)}for(let Se=0,de=ut.length;Se<de;Se++)Le=ut[Se],H?Me&&t.texSubImage2D(n.TEXTURE_2D,Se,0,0,we,Ye,Le):t.texImage2D(n.TEXTURE_2D,Se,He,we,Ye,Le);A.generateMipmaps=!1}else if(H){if(Ce){const Se=Xe(ye);t.texStorage2D(n.TEXTURE_2D,Ie,He,Se.width,Se.height)}Me&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,we,Ye,ye)}else t.texImage2D(n.TEXTURE_2D,0,He,we,Ye,ye);y(A)&&S(pe),Ve.__version=fe.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function he(N,A,j){if(A.image.length!==6)return;const pe=Ee(N,A),ge=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+j);const fe=r.get(ge);if(ge.version!==fe.__version||pe===!0){t.activeTexture(n.TEXTURE0+j);const Ve=wt.getPrimaries(wt.workingColorSpace),Ae=A.colorSpace===Kr?null:wt.getPrimaries(A.colorSpace),Qe=A.colorSpace===Kr||Ve===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const st=A.isCompressedTexture||A.image[0].isCompressedTexture,ye=A.image[0]&&A.image[0].isDataTexture,we=[];for(let de=0;de<6;de++)!st&&!ye?we[de]=T(A.image[de],!0,o.maxCubemapSize):we[de]=ye?A.image[de].image:A.image[de],we[de]=Mt(A,we[de]);const Ye=we[0],He=a.convert(A.format,A.colorSpace),Le=a.convert(A.type),ut=b(A.internalFormat,He,Le,A.colorSpace),H=A.isVideoTexture!==!0,Ce=fe.__version===void 0||pe===!0,Me=ge.dataReady;let Ie=L(A,Ye);K(n.TEXTURE_CUBE_MAP,A);let Se;if(st){H&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ut,Ye.width,Ye.height);for(let de=0;de<6;de++){Se=we[de].mipmaps;for(let Ge=0;Ge<Se.length;Ge++){const ot=Se[Ge];A.format!==Ri?He!==null?H?Me&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,ot.width,ot.height,He,ot.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,ut,ot.width,ot.height,0,ot.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,ot.width,ot.height,He,Le,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,ut,ot.width,ot.height,0,He,Le,ot.data)}}}else{if(Se=A.mipmaps,H&&Ce){Se.length>0&&Ie++;const de=Xe(we[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,ut,de.width,de.height)}for(let de=0;de<6;de++)if(ye){H?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,we[de].width,we[de].height,He,Le,we[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,we[de].width,we[de].height,0,He,Le,we[de].data);for(let Ge=0;Ge<Se.length;Ge++){const It=Se[Ge].image[de].image;H?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,It.width,It.height,He,Le,It.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,ut,It.width,It.height,0,He,Le,It.data)}}else{H?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,He,Le,we[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,He,Le,we[de]);for(let Ge=0;Ge<Se.length;Ge++){const ot=Se[Ge];H?Me&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,He,Le,ot.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,ut,He,Le,ot.image[de])}}}y(A)&&S(n.TEXTURE_CUBE_MAP),fe.__version=ge.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function me(N,A,j,pe,ge,fe){const Ve=a.convert(j.format,j.colorSpace),Ae=a.convert(j.type),Qe=b(j.internalFormat,Ve,Ae,j.colorSpace),st=r.get(A),ye=r.get(j);if(ye.__renderTarget=A,!st.__hasExternalTextures){const we=Math.max(1,A.width>>fe),Ye=Math.max(1,A.height>>fe);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,Qe,we,Ye,A.depth,0,Ve,Ae,null):t.texImage2D(ge,fe,Qe,we,Ye,0,Ve,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,N),Ht(A)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,z(A)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ge,ye.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(N,A,j){if(n.bindRenderbuffer(n.RENDERBUFFER,N),A.depthBuffer){const pe=A.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,fe=R(A.stencilBuffer,ge),Ve=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ht(A)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(A),fe,A.width,A.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(A),fe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,fe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,N)}else{const pe=A.textures;for(let ge=0;ge<pe.length;ge++){const fe=pe[ge],Ve=a.convert(fe.format,fe.colorSpace),Ae=a.convert(fe.type),Qe=b(fe.internalFormat,Ve,Ae,fe.colorSpace);Ht(A)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,z(A),Qe,A.width,A.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,z(A),Qe,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Qe,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ne(N,A,j){const pe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(A.depthTexture);if(ge.__renderTarget=A,(!ge.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,A.depthTexture.addEventListener("dispose",I)),ge.__webglTexture===void 0){ge.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),K(n.TEXTURE_CUBE_MAP,A.depthTexture);const st=a.convert(A.depthTexture.format),ye=a.convert(A.depthTexture.type);let we;A.depthTexture.format===gr?we=n.DEPTH_COMPONENT24:A.depthTexture.format===Rs&&(we=n.DEPTH24_STENCIL8);for(let Ye=0;Ye<6;Ye++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ye,0,we,A.width,A.height,0,st,ye,null)}}else te(A.depthTexture,0);const fe=ge.__webglTexture,Ve=z(A),Ae=pe?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,Qe=A.depthTexture.format===Rs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(A.depthTexture.format===gr)Ht(A)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Qe,Ae,fe,0,Ve):n.framebufferTexture2D(n.FRAMEBUFFER,Qe,Ae,fe,0);else if(A.depthTexture.format===Rs)Ht(A)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Qe,Ae,fe,0,Ve):n.framebufferTexture2D(n.FRAMEBUFFER,Qe,Ae,fe,0);else throw new Error("Unknown depthTexture format")}function $e(N){const A=r.get(N),j=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const pe=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pe){const ge=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),A.__depthDisposeCallback=ge}A.__boundDepthTexture=pe}if(N.depthTexture&&!A.__autoAllocateDepthBuffer)if(j)for(let pe=0;pe<6;pe++)Ne(A.__webglFramebuffer[pe],N,pe);else{const pe=N.texture.mipmaps;pe&&pe.length>0?Ne(A.__webglFramebuffer[0],N,0):Ne(A.__webglFramebuffer,N,0)}else if(j){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]===void 0)A.__webglDepthbuffer[pe]=n.createRenderbuffer(),Ue(A.__webglDepthbuffer[pe],N,!1);else{const ge=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}else{const pe=N.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=n.createRenderbuffer(),Ue(A.__webglDepthbuffer,N,!1);else{const ge=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=A.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Zt(N,A,j){const pe=r.get(N);A!==void 0&&me(pe.__webglFramebuffer,N,N.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&$e(N)}function mt(N){const A=N.texture,j=r.get(N),pe=r.get(A);N.addEventListener("dispose",F);const ge=N.textures,fe=N.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=A.version,c.memory.textures++),fe){j.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer[Ae]=[];for(let Qe=0;Qe<A.mipmaps.length;Qe++)j.__webglFramebuffer[Ae][Qe]=n.createFramebuffer()}else j.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ae=0;Ae<A.mipmaps.length;Ae++)j.__webglFramebuffer[Ae]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let Ae=0,Qe=ge.length;Ae<Qe;Ae++){const st=r.get(ge[Ae]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),c.memory.textures++)}if(N.samples>0&&Ht(N)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Qe=ge[Ae];j.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const st=a.convert(Qe.format,Qe.colorSpace),ye=a.convert(Qe.type),we=b(Qe.internalFormat,st,ye,Qe.colorSpace,N.isXRRenderTarget===!0),Ye=z(N);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,we,N.width,N.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),N.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(j.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),K(n.TEXTURE_CUBE_MAP,A);for(let Ae=0;Ae<6;Ae++)if(A.mipmaps&&A.mipmaps.length>0)for(let Qe=0;Qe<A.mipmaps.length;Qe++)me(j.__webglFramebuffer[Ae][Qe],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Qe);else me(j.__webglFramebuffer[Ae],N,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(A)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ae=0,Qe=ge.length;Ae<Qe;Ae++){const st=ge[Ae],ye=r.get(st);let we=n.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(we=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,ye.__webglTexture),K(we,st),me(j.__webglFramebuffer,N,st,n.COLOR_ATTACHMENT0+Ae,we,0),y(st)&&S(we)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ae=N.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),K(Ae,A),A.mipmaps&&A.mipmaps.length>0)for(let Qe=0;Qe<A.mipmaps.length;Qe++)me(j.__webglFramebuffer[Qe],N,A,n.COLOR_ATTACHMENT0,Ae,Qe);else me(j.__webglFramebuffer,N,A,n.COLOR_ATTACHMENT0,Ae,0);y(A)&&S(Ae),t.unbindTexture()}N.depthBuffer&&$e(N)}function St(N){const A=N.textures;for(let j=0,pe=A.length;j<pe;j++){const ge=A[j];if(y(ge)){const fe=w(N),Ve=r.get(ge).__webglTexture;t.bindTexture(fe,Ve),S(fe),t.unbindTexture()}}}const Pt=[],ft=[];function Bt(N){if(N.samples>0){if(Ht(N)===!1){const A=N.textures,j=N.width,pe=N.height;let ge=n.COLOR_BUFFER_BIT;const fe=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=r.get(N),Ae=A.length>1;if(Ae)for(let st=0;st<A.length;st++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Qe=N.texture.mipmaps;Qe&&Qe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let st=0;st<A.length;st++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[st]);const ye=r.get(A[st]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ye,0)}n.blitFramebuffer(0,0,j,pe,0,0,j,pe,ge,n.NEAREST),d===!0&&(Pt.length=0,ft.length=0,Pt.push(n.COLOR_ATTACHMENT0+st),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Pt.push(fe),ft.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ft)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let st=0;st<A.length;st++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[st]);const ye=r.get(A[st]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+st,n.TEXTURE_2D,ye,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&d){const A=N.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[A])}}}function z(N){return Math.min(o.maxSamples,N.samples)}function Ht(N){const A=r.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function vt(N){const A=c.render.frame;p.get(N)!==A&&(p.set(N,A),N.update())}function Mt(N,A){const j=N.colorSpace,pe=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||j!==Do&&j!==Kr&&(wt.getTransfer(j)===Nt?(pe!==Ri||ge!==hi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ct("WebGLTextures: Unsupported texture color space:",j)),A}function Xe(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(h.width=N.naturalWidth||N.width,h.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(h.width=N.displayWidth,h.height=N.displayHeight):(h.width=N.width,h.height=N.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=Q,this.setTexture2D=te,this.setTexture2DArray=re,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=Zt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wb(n,e){function t(r,o=Kr){let a;const c=wt.getTransfer(o);if(r===hi)return n.UNSIGNED_BYTE;if(r===Tp)return n.UNSIGNED_SHORT_4_4_4_4;if(r===wp)return n.UNSIGNED_SHORT_5_5_5_1;if(r===E_)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===T_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===S_)return n.BYTE;if(r===M_)return n.SHORT;if(r===ka)return n.UNSIGNED_SHORT;if(r===Ep)return n.INT;if(r===Yi)return n.UNSIGNED_INT;if(r===Hi)return n.FLOAT;if(r===mr)return n.HALF_FLOAT;if(r===w_)return n.ALPHA;if(r===A_)return n.RGB;if(r===Ri)return n.RGBA;if(r===gr)return n.DEPTH_COMPONENT;if(r===Rs)return n.DEPTH_STENCIL;if(r===C_)return n.RED;if(r===Ap)return n.RED_INTEGER;if(r===Po)return n.RG;if(r===Cp)return n.RG_INTEGER;if(r===bp)return n.RGBA_INTEGER;if(r===Vc||r===Hc||r===Gc||r===Wc)if(c===Nt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Vc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Gc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Vc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Gc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ph||r===mh||r===gh||r===vh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===ph)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===mh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===gh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===vh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===xh||r===_h||r===yh||r===Sh||r===Mh||r===Eh||r===Th)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===xh||r===_h)return c===Nt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===yh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===Sh)return a.COMPRESSED_R11_EAC;if(r===Mh)return a.COMPRESSED_SIGNED_R11_EAC;if(r===Eh)return a.COMPRESSED_RG11_EAC;if(r===Th)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===wh||r===Ah||r===Ch||r===bh||r===Rh||r===Ph||r===Dh||r===Lh||r===Ih||r===Nh||r===Fh||r===Uh||r===Oh||r===kh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===wh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ah)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ch)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ph)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Dh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Lh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ih)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Uh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Oh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kh)return c===Nt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bh||r===zh||r===Vh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Bh)return c===Nt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Vh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hh||r===Gh||r===Wh||r===jh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Hh)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Wh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ba?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const Ab=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new B_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new qi({vertexShader:Ab,fragmentShader:Cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xr(new pu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rb extends No{constructor(e,t){super();const r=this;let o=null,a=1,c=null,f="local-floor",d=1,h=null,p=null,v=null,g=null,_=null,M=null;const T=typeof XRWebGLBinding<"u",y=new bb,S={},w=t.getContextAttributes();let b=null,R=null;const L=[],I=[],F=new Rt;let E=null;const D=new di;D.viewport=new tn;const Z=new di;Z.viewport=new tn;const k=[D,Z],Q=new zT;let ee=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let he=L[X];return he===void 0&&(he=new md,L[X]=he),he.getTargetRaySpace()},this.getControllerGrip=function(X){let he=L[X];return he===void 0&&(he=new md,L[X]=he),he.getGripSpace()},this.getHand=function(X){let he=L[X];return he===void 0&&(he=new md,L[X]=he),he.getHandSpace()};function te(X){const he=I.indexOf(X.inputSource);if(he===-1)return;const me=L[he];me!==void 0&&(me.update(X.inputSource,X.frame,h||c),me.dispatchEvent({type:X.type,data:X.inputSource}))}function re(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",W);for(let X=0;X<L.length;X++){const he=I[X];he!==null&&(I[X]=null,L[X].disconnect(he))}ee=null,ue=null,y.reset();for(const X in S)delete S[X];e.setRenderTarget(b),_=null,g=null,v=null,o=null,R=null,Ke.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(X){if(o=X,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",re),o.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,Ne=null;w.depth&&(Ne=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=w.stencil?Rs:gr,Ue=w.stencil?Ba:Yi);const $e={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer($e),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new ji(g.textureWidth,g.textureHeight,{format:Ri,type:hi,depthTexture:new za(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new ji(_.framebufferWidth,_.framebufferHeight,{format:Ri,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),Ke.setContext(o),Ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(X){for(let he=0;he<X.removed.length;he++){const me=X.removed[he],Ue=I.indexOf(me);Ue>=0&&(I[Ue]=null,L[Ue].disconnect(me))}for(let he=0;he<X.added.length;he++){const me=X.added[he];let Ue=I.indexOf(me);if(Ue===-1){for(let $e=0;$e<L.length;$e++)if($e>=I.length){I.push(me),Ue=$e;break}else if(I[$e]===null){I[$e]=me,Ue=$e;break}if(Ue===-1)break}const Ne=L[Ue];Ne&&Ne.connect(me)}}const Y=new $,ne=new $;function le(X,he,me){Y.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(me.matrixWorld);const Ue=Y.distanceTo(ne),Ne=he.projectionMatrix.elements,$e=me.projectionMatrix.elements,Zt=Ne[14]/(Ne[10]-1),mt=Ne[14]/(Ne[10]+1),St=(Ne[9]+1)/Ne[5],Pt=(Ne[9]-1)/Ne[5],ft=(Ne[8]-1)/Ne[0],Bt=($e[8]+1)/$e[0],z=Zt*ft,Ht=Zt*Bt,vt=Ue/(-ft+Bt),Mt=vt*-ft;if(he.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Mt),X.translateZ(vt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ne[10]===-1)X.projectionMatrix.copy(he.projectionMatrix),X.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=Zt+vt,N=mt+vt,A=z-Mt,j=Ht+(Ue-Mt),pe=St*mt/N*Xe,ge=Pt*mt/N*Xe;X.projectionMatrix.makePerspective(A,j,pe,ge,Xe,N),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function O(X,he){he===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(he.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(o===null)return;let he=X.near,me=X.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(me=y.depthFar)),Q.near=Z.near=D.near=he,Q.far=Z.far=D.far=me,(ee!==Q.near||ue!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),ee=Q.near,ue=Q.far),Q.layers.mask=X.layers.mask|6,D.layers.mask=Q.layers.mask&-5,Z.layers.mask=Q.layers.mask&-3;const Ue=X.parent,Ne=Q.cameras;O(Q,Ue);for(let $e=0;$e<Ne.length;$e++)O(Ne[$e],Ue);Ne.length===2?le(Q,D,Z):Q.projectionMatrix.copy(D.projectionMatrix),K(X,Q,Ue)};function K(X,he,me){me===null?X.matrix.copy(he.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(he.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(he.projectionMatrix),X.projectionMatrixInverse.copy(he.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Xh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&_===null))return d},this.setFoveation=function(X){d=X,g!==null&&(g.fixedFoveation=X),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(X){return S[X]};let Ee=null;function ze(X,he){if(p=he.getViewerPose(h||c),M=he,p!==null){const me=p.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let Ue=!1;me.length!==Q.cameras.length&&(Q.cameras.length=0,Ue=!0);for(let mt=0;mt<me.length;mt++){const St=me[mt];let Pt=null;if(_!==null)Pt=_.getViewport(St);else{const Bt=v.getViewSubImage(g,St);Pt=Bt.viewport,mt===0&&(e.setRenderTargetTextures(R,Bt.colorTexture,Bt.depthStencilTexture),e.setRenderTarget(R))}let ft=k[mt];ft===void 0&&(ft=new di,ft.layers.enable(mt),ft.viewport=new tn,k[mt]=ft),ft.matrix.fromArray(St.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(St.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),mt===0&&(Q.matrix.copy(ft.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Ue===!0&&Q.cameras.push(ft)}const Ne=o.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=r.getBinding();const mt=v.getDepthInformation(me[0]);mt&&mt.isValid&&mt.texture&&y.init(mt,o.renderState)}if(Ne&&Ne.includes("camera-access")&&T){e.state.unbindTexture(),v=r.getBinding();for(let mt=0;mt<me.length;mt++){const St=me[mt].camera;if(St){let Pt=S[St];Pt||(Pt=new B_,S[St]=Pt);const ft=v.getCameraImage(St);Pt.sourceTexture=ft}}}}for(let me=0;me<L.length;me++){const Ue=I[me],Ne=L[me];Ue!==null&&Ne!==void 0&&Ne.update(Ue,he,h||c)}Ee&&Ee(X,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const Ke=new G_;Ke.setAnimationLoop(ze),this.setAnimationLoop=function(X){Ee=X},this.dispose=function(){}}}const Ss=new vr,Pb=new $t;function Db(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,z_(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,w,b,R){S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),v(y,S)):S.isMeshPhongMaterial?(a(y,S),p(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),g(y,S),S.isMeshPhysicalMaterial&&_(y,S,R)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),T(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,w,b):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Yn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Yn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const w=e.get(S),b=w.envMap,R=w.envMapRotation;b&&(y.envMap.value=b,Ss.copy(R),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),y.envMapRotation.value.setFromMatrix4(Pb.makeRotationFromEuler(Ss)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,w,b){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*w,y.scale.value=b*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,w){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Yn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const w=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Lb(n,e,t,r){let o={},a={},c=[];const f=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,b){const R=b.program;r.uniformBlockBinding(w,R)}function h(w,b){let R=o[w.id];R===void 0&&(M(w),R=p(w),o[w.id]=R,w.addEventListener("dispose",y));const L=b.program;r.updateUBOMapping(w,L);const I=e.render.frame;a[w.id]!==I&&(g(w),a[w.id]=I)}function p(w){const b=v();w.__bindingPointIndex=b;const R=n.createBuffer(),L=w.__size,I=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,L,I),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,R),R}function v(){for(let w=0;w<f;w++)if(c.indexOf(w)===-1)return c.push(w),w;return Ct("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const b=o[w.id],R=w.uniforms,L=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let I=0,F=R.length;I<F;I++){const E=Array.isArray(R[I])?R[I]:[R[I]];for(let D=0,Z=E.length;D<Z;D++){const k=E[D];if(_(k,I,D,L)===!0){const Q=k.__offset,ee=Array.isArray(k.value)?k.value:[k.value];let ue=0;for(let te=0;te<ee.length;te++){const re=ee[te],W=T(re);typeof re=="number"||typeof re=="boolean"?(k.__data[0]=re,n.bufferSubData(n.UNIFORM_BUFFER,Q+ue,k.__data)):re.isMatrix3?(k.__data[0]=re.elements[0],k.__data[1]=re.elements[1],k.__data[2]=re.elements[2],k.__data[3]=0,k.__data[4]=re.elements[3],k.__data[5]=re.elements[4],k.__data[6]=re.elements[5],k.__data[7]=0,k.__data[8]=re.elements[6],k.__data[9]=re.elements[7],k.__data[10]=re.elements[8],k.__data[11]=0):(re.toArray(k.__data,ue),ue+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(w,b,R,L){const I=w.value,F=b+"_"+R;if(L[F]===void 0)return typeof I=="number"||typeof I=="boolean"?L[F]=I:L[F]=I.clone(),!0;{const E=L[F];if(typeof I=="number"||typeof I=="boolean"){if(E!==I)return L[F]=I,!0}else if(E.equals(I)===!1)return E.copy(I),!0}return!1}function M(w){const b=w.uniforms;let R=0;const L=16;for(let F=0,E=b.length;F<E;F++){const D=Array.isArray(b[F])?b[F]:[b[F]];for(let Z=0,k=D.length;Z<k;Z++){const Q=D[Z],ee=Array.isArray(Q.value)?Q.value:[Q.value];for(let ue=0,te=ee.length;ue<te;ue++){const re=ee[ue],W=T(re),Y=R%L,ne=Y%W.boundary,le=Y+ne;R+=ne,le!==0&&L-le<W.storage&&(R+=L-le),Q.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=R,R+=W.storage}}}const I=R%L;return I>0&&(R+=L-I),w.__size=R,w.__cache={},this}function T(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",w),b}function y(w){const b=w.target;b.removeEventListener("dispose",y);const R=c.indexOf(b.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete a[b.id]}function S(){for(const w in o)n.deleteBuffer(o[w]);c=[],o={},a={}}return{bind:d,update:h,dispose:S}}const Ib=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function Nb(){return Bi===null&&(Bi=new wT(Ib,16,16,Po,mr),Bi.name="DFG_LUT",Bi.minFilter=An,Bi.magFilter=An,Bi.wrapS=dr,Bi.wrapT=dr,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class Fb{constructor(e={}){const{canvas:t=nT(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:_=hi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const T=_,y=new Set([bp,Cp,Ap]),S=new Set([hi,Yi,ka,Ba,Tp,wp]),w=new Uint32Array(4),b=new Int32Array(4);let R=null,L=null;const I=[],F=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let Z=!1;this._outputColorSpace=fi;let k=0,Q=0,ee=null,ue=-1,te=null;const re=new tn,W=new tn;let Y=null;const ne=new Lt(0);let le=0,O=t.width,K=t.height,Ee=1,ze=null,Ke=null;const X=new tn(0,0,O,K),he=new tn(0,0,O,K);let me=!1;const Ue=new F_;let Ne=!1,$e=!1;const Zt=new $t,mt=new $,St=new tn,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Bt(){return ee===null?Ee:1}let z=r;function Ht(P,q){return t.getContext(P,q)}try{const P={alpha:!0,depth:o,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mp}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",It,!1),z===null){const q="webgl2";if(z=Ht(q,P),z===null)throw Ht(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Ct("WebGLRenderer: "+P.message),P}let vt,Mt,Xe,N,A,j,pe,ge,fe,Ve,Ae,Qe,st,ye,we,Ye,He,Le,ut,H,Ce,Me,Ie;function Se(){vt=new FA(z),vt.init(),Ce=new wb(z,vt),Mt=new CA(z,vt,e,Ce),Xe=new Eb(z,vt),Mt.reversedDepthBuffer&&g&&Xe.buffers.depth.setReversed(!0),N=new kA(z),A=new cb,j=new Tb(z,vt,Xe,A,Mt,Ce,N),pe=new NA(D),ge=new GT(z),Me=new wA(z,ge),fe=new UA(z,ge,N,Me),Ve=new zA(z,fe,ge,Me,N),Le=new BA(z,Mt,j),we=new bA(A),Ae=new lb(D,pe,vt,Mt,Me,we),Qe=new Db(D,A),st=new fb,ye=new vb(vt),He=new TA(D,pe,Xe,Ve,M,d),Ye=new Mb(D,Ve,Mt),Ie=new Lb(z,N,Mt,Xe),ut=new AA(z,vt,N),H=new OA(z,vt,N),N.programs=Ae.programs,D.capabilities=Mt,D.extensions=vt,D.properties=A,D.renderLists=st,D.shadowMap=Ye,D.state=Xe,D.info=N}Se(),T!==hi&&(E=new HA(T,t.width,t.height,o,a));const de=new Rb(D,z);this.xr=de,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const P=vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(P){P!==void 0&&(Ee=P,this.setSize(O,K,!1))},this.getSize=function(P){return P.set(O,K)},this.setSize=function(P,q,ce=!0){if(de.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,K=q,t.width=Math.floor(P*Ee),t.height=Math.floor(q*Ee),ce===!0&&(t.style.width=P+"px",t.style.height=q+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,P,q)},this.getDrawingBufferSize=function(P){return P.set(O*Ee,K*Ee).floor()},this.setDrawingBufferSize=function(P,q,ce){O=P,K=q,Ee=ce,t.width=Math.floor(P*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,P,q)},this.setEffects=function(P){if(T===hi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let q=0;q<P.length;q++)if(P[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(re)},this.getViewport=function(P){return P.copy(X)},this.setViewport=function(P,q,ce,oe){P.isVector4?X.set(P.x,P.y,P.z,P.w):X.set(P,q,ce,oe),Xe.viewport(re.copy(X).multiplyScalar(Ee).round())},this.getScissor=function(P){return P.copy(he)},this.setScissor=function(P,q,ce,oe){P.isVector4?he.set(P.x,P.y,P.z,P.w):he.set(P,q,ce,oe),Xe.scissor(W.copy(he).multiplyScalar(Ee).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(P){Xe.setScissorTest(me=P)},this.setOpaqueSort=function(P){ze=P},this.setTransparentSort=function(P){Ke=P},this.getClearColor=function(P){return P.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(P=!0,q=!0,ce=!0){let oe=0;if(P){let ie=!1;if(ee!==null){const Pe=ee.texture.format;ie=y.has(Pe)}if(ie){const Pe=ee.texture.type,ke=S.has(Pe),Re=He.getClearColor(),Fe=He.getClearAlpha(),et=Re.r,nt=Re.g,dt=Re.b;ke?(w[0]=et,w[1]=nt,w[2]=dt,w[3]=Fe,z.clearBufferuiv(z.COLOR,0,w)):(b[0]=et,b[1]=nt,b[2]=dt,b[3]=Fe,z.clearBufferiv(z.COLOR,0,b))}else oe|=z.COLOR_BUFFER_BIT}q&&(oe|=z.DEPTH_BUFFER_BIT),ce&&(oe|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&z.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",It,!1),He.dispose(),st.dispose(),ye.dispose(),A.dispose(),pe.dispose(),Ve.dispose(),Me.dispose(),Ie.dispose(),Ae.dispose(),de.dispose(),de.removeEventListener("sessionstart",yr),de.removeEventListener("sessionend",ts),ni.stop()};function Ge(P){P.preventDefault(),$0("WebGLRenderer: Context Lost."),Z=!0}function ot(){$0("WebGLRenderer: Context Restored."),Z=!1;const P=N.autoReset,q=Ye.enabled,ce=Ye.autoUpdate,oe=Ye.needsUpdate,ie=Ye.type;Se(),N.autoReset=P,Ye.enabled=q,Ye.autoUpdate=ce,Ye.needsUpdate=oe,Ye.type=ie}function It(P){Ct("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Et(P){const q=P.target;q.removeEventListener("dispose",Et),ti(q)}function ti(P){Rn(P),A.remove(P)}function Rn(P){const q=A.get(P).programs;q!==void 0&&(q.forEach(function(ce){Ae.releaseProgram(ce)}),P.isShaderMaterial&&Ae.releaseShaderCache(P))}this.renderBufferDirect=function(P,q,ce,oe,ie,Pe){q===null&&(q=Pt);const ke=ie.isMesh&&ie.matrixWorld.determinant()<0,Re=il(P,q,ce,oe,ie);Xe.setMaterial(oe,ke);let Fe=ce.index,et=1;if(oe.wireframe===!0){if(Fe=fe.getWireframeAttribute(ce),Fe===void 0)return;et=2}const nt=ce.drawRange,dt=ce.attributes.position;let tt=nt.start*et,Dt=(nt.start+nt.count)*et;Pe!==null&&(tt=Math.max(tt,Pe.start*et),Dt=Math.min(Dt,(Pe.start+Pe.count)*et)),Fe!==null?(tt=Math.max(tt,0),Dt=Math.min(Dt,Fe.count)):dt!=null&&(tt=Math.max(tt,0),Dt=Math.min(Dt,dt.count));const Ut=Dt-tt;if(Ut<0||Ut===1/0)return;Me.setup(ie,oe,Re,ce,Fe);let Ft,yt=ut;if(Fe!==null&&(Ft=ge.get(Fe),yt=H,yt.setIndex(Ft)),ie.isMesh)oe.wireframe===!0?(Xe.setLineWidth(oe.wireframeLinewidth*Bt()),yt.setMode(z.LINES)):yt.setMode(z.TRIANGLES);else if(ie.isLine){let Qt=oe.linewidth;Qt===void 0&&(Qt=1),Xe.setLineWidth(Qt*Bt()),ie.isLineSegments?yt.setMode(z.LINES):ie.isLineLoop?yt.setMode(z.LINE_LOOP):yt.setMode(z.LINE_STRIP)}else ie.isPoints?yt.setMode(z.POINTS):ie.isSprite&&yt.setMode(z.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)tu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))yt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Qt=ie._multiDrawStarts,Ze=ie._multiDrawCounts,Pn=ie._multiDrawCount,xt=Fe?ge.get(Fe).bytesPerElement:1,kn=A.get(oe).currentProgram.getUniforms();for(let Bn=0;Bn<Pn;Bn++)kn.setValue(z,"_gl_DrawID",Bn),yt.render(Qt[Bn]/xt,Ze[Bn])}else if(ie.isInstancedMesh)yt.renderInstances(tt,Ut,ie.count);else if(ce.isInstancedBufferGeometry){const Qt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ze=Math.min(ce.instanceCount,Qt);yt.renderInstances(tt,Ut,Ze)}else yt.render(tt,Ut)};function Ns(P,q,ce){P.transparent===!0&&P.side===fr&&P.forceSinglePass===!1?(P.side=Yn,P.needsUpdate=!0,is(P,q,ce),P.side=Qr,P.needsUpdate=!0,is(P,q,ce),P.side=fr):is(P,q,ce)}this.compile=function(P,q,ce=null){ce===null&&(ce=P),L=ye.get(ce),L.init(q),F.push(L),ce.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),P!==ce&&P.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),L.setupLights();const oe=new Set;return P.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Pe=ie.material;if(Pe)if(Array.isArray(Pe))for(let ke=0;ke<Pe.length;ke++){const Re=Pe[ke];Ns(Re,ce,ie),oe.add(Re)}else Ns(Pe,ce,ie),oe.add(Pe)}),L=F.pop(),oe},this.compileAsync=function(P,q,ce=null){const oe=this.compile(P,q,ce);return new Promise(ie=>{function Pe(){if(oe.forEach(function(ke){A.get(ke).currentProgram.isReady()&&oe.delete(ke)}),oe.size===0){ie(P);return}setTimeout(Pe,10)}vt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let $i=null;function Su(P){$i&&$i(P)}function yr(){ni.stop()}function ts(){ni.start()}const ni=new G_;ni.setAnimationLoop(Su),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(P){$i=P,de.setAnimationLoop(P),P===null?ni.stop():ni.start()},de.addEventListener("sessionstart",yr),de.addEventListener("sessionend",ts),this.render=function(P,q){if(q!==void 0&&q.isCamera!==!0){Ct("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;const ce=de.enabled===!0&&de.isPresenting===!0,oe=E!==null&&(ee===null||ce)&&E.begin(D,ee);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(q),q=de.getCamera()),P.isScene===!0&&P.onBeforeRender(D,P,q,ee),L=ye.get(P,F.length),L.init(q),F.push(L),Zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Ue.setFromProjectionMatrix(Zt,Gi,q.reversedDepth),$e=this.localClippingEnabled,Ne=we.init(this.clippingPlanes,$e),R=st.get(P,I.length),R.init(),I.push(R),de.enabled===!0&&de.isPresenting===!0){const ke=D.xr.getDepthSensingMesh();ke!==null&&ns(ke,q,-1/0,D.sortObjects)}ns(P,q,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(ze,Ke),ft=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ft&&He.addToRenderList(R,P),this.info.render.frame++,Ne===!0&&we.beginShadows();const ie=L.state.shadowsArray;if(Ye.render(ie,P,q),Ne===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&E.hasRenderPass())===!1){const ke=R.opaque,Re=R.transmissive;if(L.setupLights(),q.isArrayCamera){const Fe=q.cameras;if(Re.length>0)for(let et=0,nt=Fe.length;et<nt;et++){const dt=Fe[et];tl(ke,Re,P,dt)}ft&&He.render(P);for(let et=0,nt=Fe.length;et<nt;et++){const dt=Fe[et];el(R,P,dt,dt.viewport)}}else Re.length>0&&tl(ke,Re,P,q),ft&&He.render(P),el(R,P,q)}ee!==null&&Q===0&&(j.updateMultisampleRenderTarget(ee),j.updateRenderTargetMipmap(ee)),oe&&E.end(D),P.isScene===!0&&P.onAfterRender(D,P,q),Me.resetDefaultState(),ue=-1,te=null,F.pop(),F.length>0?(L=F[F.length-1],Ne===!0&&we.setGlobalState(D.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?R=I[I.length-1]:R=null};function ns(P,q,ce,oe){if(P.visible===!1)return;if(P.layers.test(q.layers)){if(P.isGroup)ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(q);else if(P.isLight)L.pushLight(P),P.castShadow&&L.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ue.intersectsSprite(P)){oe&&St.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Zt);const ke=Ve.update(P),Re=P.material;Re.visible&&R.push(P,ke,Re,ce,St.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ue.intersectsObject(P))){const ke=Ve.update(P),Re=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),St.copy(P.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),St.copy(ke.boundingSphere.center)),St.applyMatrix4(P.matrixWorld).applyMatrix4(Zt)),Array.isArray(Re)){const Fe=ke.groups;for(let et=0,nt=Fe.length;et<nt;et++){const dt=Fe[et],tt=Re[dt.materialIndex];tt&&tt.visible&&R.push(P,ke,tt,ce,St.z,dt)}}else Re.visible&&R.push(P,ke,Re,ce,St.z,null)}}const Pe=P.children;for(let ke=0,Re=Pe.length;ke<Re;ke++)ns(Pe[ke],q,ce,oe)}function el(P,q,ce,oe){const{opaque:ie,transmissive:Pe,transparent:ke}=P;L.setupLightsView(ce),Ne===!0&&we.setGlobalState(D.clippingPlanes,ce),oe&&Xe.viewport(re.copy(oe)),ie.length>0&&Fs(ie,q,ce),Pe.length>0&&Fs(Pe,q,ce),ke.length>0&&Fs(ke,q,ce),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function tl(P,q,ce,oe){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[oe.id]===void 0){const tt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[oe.id]=new ji(1,1,{generateMipmaps:!0,type:tt?mr:hi,minFilter:bs,samples:Math.max(4,Mt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace})}const Pe=L.state.transmissionRenderTarget[oe.id],ke=oe.viewport||re;Pe.setSize(ke.z*D.transmissionResolutionScale,ke.w*D.transmissionResolutionScale);const Re=D.getRenderTarget(),Fe=D.getActiveCubeFace(),et=D.getActiveMipmapLevel();D.setRenderTarget(Pe),D.getClearColor(ne),le=D.getClearAlpha(),le<1&&D.setClearColor(16777215,.5),D.clear(),ft&&He.render(ce);const nt=D.toneMapping;D.toneMapping=Wi;const dt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),L.setupLightsView(oe),Ne===!0&&we.setGlobalState(D.clippingPlanes,oe),Fs(P,ce,oe),j.updateMultisampleRenderTarget(Pe),j.updateRenderTargetMipmap(Pe),vt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Dt=0,Ut=q.length;Dt<Ut;Dt++){const Ft=q[Dt],{object:yt,geometry:Qt,material:Ze,group:Pn}=Ft;if(Ze.side===fr&&yt.layers.test(oe.layers)){const xt=Ze.side;Ze.side=Yn,Ze.needsUpdate=!0,Ii(yt,ce,oe,Qt,Ze,Pn),Ze.side=xt,Ze.needsUpdate=!0,tt=!0}}tt===!0&&(j.updateMultisampleRenderTarget(Pe),j.updateRenderTargetMipmap(Pe))}D.setRenderTarget(Re,Fe,et),D.setClearColor(ne,le),dt!==void 0&&(oe.viewport=dt),D.toneMapping=nt}function Fs(P,q,ce){const oe=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Pe=P.length;ie<Pe;ie++){const ke=P[ie],{object:Re,geometry:Fe,group:et}=ke;let nt=ke.material;nt.allowOverride===!0&&oe!==null&&(nt=oe),Re.layers.test(ce.layers)&&Ii(Re,q,ce,Fe,nt,et)}}function Ii(P,q,ce,oe,ie,Pe){P.onBeforeRender(D,q,ce,oe,ie,Pe),P.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ie.onBeforeRender(D,q,ce,oe,P,Pe),ie.transparent===!0&&ie.side===fr&&ie.forceSinglePass===!1?(ie.side=Yn,ie.needsUpdate=!0,D.renderBufferDirect(ce,q,oe,ie,P,Pe),ie.side=Qr,ie.needsUpdate=!0,D.renderBufferDirect(ce,q,oe,ie,P,Pe),ie.side=fr):D.renderBufferDirect(ce,q,oe,ie,P,Pe),P.onAfterRender(D,q,ce,oe,ie,Pe)}function is(P,q,ce){q.isScene!==!0&&(q=Pt);const oe=A.get(P),ie=L.state.lights,Pe=L.state.shadowsArray,ke=ie.state.version,Re=Ae.getParameters(P,ie.state,Pe,q,ce),Fe=Ae.getProgramCacheKey(Re);let et=oe.programs;oe.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?q.environment:null,oe.fog=q.fog;const nt=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;oe.envMap=pe.get(P.envMap||oe.environment,nt),oe.envMapRotation=oe.environment!==null&&P.envMap===null?q.environmentRotation:P.envMapRotation,et===void 0&&(P.addEventListener("dispose",Et),et=new Map,oe.programs=et);let dt=et.get(Fe);if(dt!==void 0){if(oe.currentProgram===dt&&oe.lightsStateVersion===ke)return nl(P,Re),dt}else Re.uniforms=Ae.getUniforms(P),P.onBeforeCompile(Re,D),dt=Ae.acquireProgram(Re,Fe),et.set(Fe,dt),oe.uniforms=Re.uniforms;const tt=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(tt.clippingPlanes=we.uniform),nl(P,Re),oe.needsLights=sl(P),oe.lightsStateVersion=ke,oe.needsLights&&(tt.ambientLightColor.value=ie.state.ambient,tt.lightProbe.value=ie.state.probe,tt.directionalLights.value=ie.state.directional,tt.directionalLightShadows.value=ie.state.directionalShadow,tt.spotLights.value=ie.state.spot,tt.spotLightShadows.value=ie.state.spotShadow,tt.rectAreaLights.value=ie.state.rectArea,tt.ltc_1.value=ie.state.rectAreaLTC1,tt.ltc_2.value=ie.state.rectAreaLTC2,tt.pointLights.value=ie.state.point,tt.pointLightShadows.value=ie.state.pointShadow,tt.hemisphereLights.value=ie.state.hemi,tt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,tt.spotLightMatrix.value=ie.state.spotLightMatrix,tt.spotLightMap.value=ie.state.spotLightMap,tt.pointShadowMatrix.value=ie.state.pointShadowMatrix),oe.currentProgram=dt,oe.uniformsList=null,dt}function Ho(P){if(P.uniformsList===null){const q=P.currentProgram.getUniforms();P.uniformsList=jc.seqWithValue(q.seq,P.uniforms)}return P.uniformsList}function nl(P,q){const ce=A.get(P);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function il(P,q,ce,oe,ie){q.isScene!==!0&&(q=Pt),j.resetTextureUnits();const Pe=q.fog,ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?q.environment:null,Re=ee===null?D.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Do,Fe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,et=pe.get(oe.envMap||ke,Fe),nt=oe.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,dt=!!ce.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),tt=!!ce.morphAttributes.position,Dt=!!ce.morphAttributes.normal,Ut=!!ce.morphAttributes.color;let Ft=Wi;oe.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Ft=D.toneMapping);const yt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Qt=yt!==void 0?yt.length:0,Ze=A.get(oe),Pn=L.state.lights;if(Ne===!0&&($e===!0||P!==te)){const Jt=P===te&&oe.id===ue;we.setState(oe,P,Jt)}let xt=!1;oe.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Pn.state.version||Ze.outputColorSpace!==Re||ie.isBatchedMesh&&Ze.batching===!1||!ie.isBatchedMesh&&Ze.batching===!0||ie.isBatchedMesh&&Ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ze.instancing===!1||!ie.isInstancedMesh&&Ze.instancing===!0||ie.isSkinnedMesh&&Ze.skinning===!1||!ie.isSkinnedMesh&&Ze.skinning===!0||ie.isInstancedMesh&&Ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ze.instancingMorph===!1&&ie.morphTexture!==null||Ze.envMap!==et||oe.fog===!0&&Ze.fog!==Pe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==we.numPlanes||Ze.numIntersection!==we.numIntersection)||Ze.vertexAlphas!==nt||Ze.vertexTangents!==dt||Ze.morphTargets!==tt||Ze.morphNormals!==Dt||Ze.morphColors!==Ut||Ze.toneMapping!==Ft||Ze.morphTargetsCount!==Qt)&&(xt=!0):(xt=!0,Ze.__version=oe.version);let kn=Ze.currentProgram;xt===!0&&(kn=is(oe,q,ie));let Bn=!1,qn=!1,Sr=!1;const bt=kn.getUniforms(),at=Ze.uniforms;if(Xe.useProgram(kn.program)&&(Bn=!0,qn=!0,Sr=!0),oe.id!==ue&&(ue=oe.id,qn=!0),Bn||te!==P){Xe.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),bt.setValue(z,"projectionMatrix",P.projectionMatrix),bt.setValue(z,"viewMatrix",P.matrixWorldInverse);const ii=bt.map.cameraPosition;ii!==void 0&&ii.setValue(z,mt.setFromMatrixPosition(P.matrixWorld)),Mt.logarithmicDepthBuffer&&bt.setValue(z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&bt.setValue(z,"isOrthographic",P.isOrthographicCamera===!0),te!==P&&(te=P,qn=!0,Sr=!0)}if(Ze.needsLights&&(Pn.state.directionalShadowMap.length>0&&bt.setValue(z,"directionalShadowMap",Pn.state.directionalShadowMap,j),Pn.state.spotShadowMap.length>0&&bt.setValue(z,"spotShadowMap",Pn.state.spotShadowMap,j),Pn.state.pointShadowMap.length>0&&bt.setValue(z,"pointShadowMap",Pn.state.pointShadowMap,j)),ie.isSkinnedMesh){bt.setOptional(z,ie,"bindMatrix"),bt.setOptional(z,ie,"bindMatrixInverse");const Jt=ie.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),bt.setValue(z,"boneTexture",Jt.boneTexture,j))}ie.isBatchedMesh&&(bt.setOptional(z,ie,"batchingTexture"),bt.setValue(z,"batchingTexture",ie._matricesTexture,j),bt.setOptional(z,ie,"batchingIdTexture"),bt.setValue(z,"batchingIdTexture",ie._indirectTexture,j),bt.setOptional(z,ie,"batchingColorTexture"),ie._colorsTexture!==null&&bt.setValue(z,"batchingColorTexture",ie._colorsTexture,j));const gi=ce.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Le.update(ie,ce,kn),(qn||Ze.receiveShadow!==ie.receiveShadow)&&(Ze.receiveShadow=ie.receiveShadow,bt.setValue(z,"receiveShadow",ie.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&q.environment!==null&&(at.envMapIntensity.value=q.environmentIntensity),at.dfgLUT!==void 0&&(at.dfgLUT.value=Nb()),qn&&(bt.setValue(z,"toneMappingExposure",D.toneMappingExposure),Ze.needsLights&&rl(at,Sr),Pe&&oe.fog===!0&&Qe.refreshFogUniforms(at,Pe),Qe.refreshMaterialUniforms(at,oe,Ee,K,L.state.transmissionRenderTarget[P.id]),jc.upload(z,Ho(Ze),at,j)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(jc.upload(z,Ho(Ze),at,j),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&bt.setValue(z,"center",ie.center),bt.setValue(z,"modelViewMatrix",ie.modelViewMatrix),bt.setValue(z,"normalMatrix",ie.normalMatrix),bt.setValue(z,"modelMatrix",ie.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Jt=oe.uniformsGroups;for(let ii=0,Zi=Jt.length;ii<Zi;ii++){const Go=Jt[ii];Ie.update(Go,kn),Ie.bind(Go,kn)}}return kn}function rl(P,q){P.ambientLightColor.needsUpdate=q,P.lightProbe.needsUpdate=q,P.directionalLights.needsUpdate=q,P.directionalLightShadows.needsUpdate=q,P.pointLights.needsUpdate=q,P.pointLightShadows.needsUpdate=q,P.spotLights.needsUpdate=q,P.spotLightShadows.needsUpdate=q,P.rectAreaLights.needsUpdate=q,P.hemisphereLights.needsUpdate=q}function sl(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(P,q,ce){const oe=A.get(P);oe.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),A.get(P.texture).__webglTexture=q,A.get(P.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ce,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,q){const ce=A.get(P);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0};const ol=z.createFramebuffer();this.setRenderTarget=function(P,q=0,ce=0){ee=P,k=q,Q=ce;let oe=null,ie=!1,Pe=!1;if(P){const Re=A.get(P);if(Re.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(z.FRAMEBUFFER,Re.__webglFramebuffer),re.copy(P.viewport),W.copy(P.scissor),Y=P.scissorTest,Xe.viewport(re),Xe.scissor(W),Xe.setScissorTest(Y),ue=-1;return}else if(Re.__webglFramebuffer===void 0)j.setupRenderTarget(P);else if(Re.__hasExternalTextures)j.rebindTextures(P,A.get(P.texture).__webglTexture,A.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const nt=P.depthTexture;if(Re.__boundDepthTexture!==nt){if(nt!==null&&A.has(nt)&&(P.width!==nt.image.width||P.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(P)}}const Fe=P.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Pe=!0);const et=A.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(et[q])?oe=et[q][ce]:oe=et[q],ie=!0):P.samples>0&&j.useMultisampledRTT(P)===!1?oe=A.get(P).__webglMultisampledFramebuffer:Array.isArray(et)?oe=et[ce]:oe=et,re.copy(P.viewport),W.copy(P.scissor),Y=P.scissorTest}else re.copy(X).multiplyScalar(Ee).floor(),W.copy(he).multiplyScalar(Ee).floor(),Y=me;if(ce!==0&&(oe=ol),Xe.bindFramebuffer(z.FRAMEBUFFER,oe)&&Xe.drawBuffers(P,oe),Xe.viewport(re),Xe.scissor(W),Xe.setScissorTest(Y),ie){const Re=A.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+q,Re.__webglTexture,ce)}else if(Pe){const Re=q;for(let Fe=0;Fe<P.textures.length;Fe++){const et=A.get(P.textures[Fe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Fe,et.__webglTexture,ce,Re)}}else if(P!==null&&ce!==0){const Re=A.get(P.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Re.__webglTexture,ce)}ue=-1},this.readRenderTargetPixels=function(P,q,ce,oe,ie,Pe,ke,Re=0){if(!(P&&P.isWebGLRenderTarget)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=A.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(Fe=Fe[ke]),Fe){Xe.bindFramebuffer(z.FRAMEBUFFER,Fe);try{const et=P.textures[Re],nt=et.format,dt=et.type;if(P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re),!Mt.textureFormatReadable(nt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Mt.textureTypeReadable(dt)){Ct("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=P.width-oe&&ce>=0&&ce<=P.height-ie&&z.readPixels(q,ce,oe,ie,Ce.convert(nt),Ce.convert(dt),Pe)}finally{const et=ee!==null?A.get(ee).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(P,q,ce,oe,ie,Pe,ke,Re=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=A.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ke!==void 0&&(Fe=Fe[ke]),Fe)if(q>=0&&q<=P.width-oe&&ce>=0&&ce<=P.height-ie){Xe.bindFramebuffer(z.FRAMEBUFFER,Fe);const et=P.textures[Re],nt=et.format,dt=et.type;if(P.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Re),!Mt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Mt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,tt),z.bufferData(z.PIXEL_PACK_BUFFER,Pe.byteLength,z.STREAM_READ),z.readPixels(q,ce,oe,ie,Ce.convert(nt),Ce.convert(dt),0);const Dt=ee!==null?A.get(ee).__webglFramebuffer:null;Xe.bindFramebuffer(z.FRAMEBUFFER,Dt);const Ut=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await iT(z,Ut,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,tt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pe),z.deleteBuffer(tt),z.deleteSync(Ut),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,q=null,ce=0){const oe=Math.pow(2,-ce),ie=Math.floor(P.image.width*oe),Pe=Math.floor(P.image.height*oe),ke=q!==null?q.x:0,Re=q!==null?q.y:0;j.setTexture2D(P,0),z.copyTexSubImage2D(z.TEXTURE_2D,ce,0,0,ke,Re,ie,Pe),Xe.unbindTexture()};const Mu=z.createFramebuffer(),Eu=z.createFramebuffer();this.copyTextureToTexture=function(P,q,ce=null,oe=null,ie=0,Pe=0){let ke,Re,Fe,et,nt,dt,tt,Dt,Ut;const Ft=P.isCompressedTexture?P.mipmaps[Pe]:P.image;if(ce!==null)ke=ce.max.x-ce.min.x,Re=ce.max.y-ce.min.y,Fe=ce.isBox3?ce.max.z-ce.min.z:1,et=ce.min.x,nt=ce.min.y,dt=ce.isBox3?ce.min.z:0;else{const at=Math.pow(2,-ie);ke=Math.floor(Ft.width*at),Re=Math.floor(Ft.height*at),P.isDataArrayTexture?Fe=Ft.depth:P.isData3DTexture?Fe=Math.floor(Ft.depth*at):Fe=1,et=0,nt=0,dt=0}oe!==null?(tt=oe.x,Dt=oe.y,Ut=oe.z):(tt=0,Dt=0,Ut=0);const yt=Ce.convert(q.format),Qt=Ce.convert(q.type);let Ze;q.isData3DTexture?(j.setTexture3D(q,0),Ze=z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(j.setTexture2DArray(q,0),Ze=z.TEXTURE_2D_ARRAY):(j.setTexture2D(q,0),Ze=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment);const Pn=z.getParameter(z.UNPACK_ROW_LENGTH),xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),kn=z.getParameter(z.UNPACK_SKIP_PIXELS),Bn=z.getParameter(z.UNPACK_SKIP_ROWS),qn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,et),z.pixelStorei(z.UNPACK_SKIP_ROWS,nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dt);const Sr=P.isDataArrayTexture||P.isData3DTexture,bt=q.isDataArrayTexture||q.isData3DTexture;if(P.isDepthTexture){const at=A.get(P),gi=A.get(q),Jt=A.get(at.__renderTarget),ii=A.get(gi.__renderTarget);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Zi=0;Zi<Fe;Zi++)Sr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,A.get(P).__webglTexture,ie,dt+Zi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,A.get(q).__webglTexture,Pe,Ut+Zi)),z.blitFramebuffer(et,nt,ke,Re,tt,Dt,ke,Re,z.DEPTH_BUFFER_BIT,z.NEAREST);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ie!==0||P.isRenderTargetTexture||A.has(P)){const at=A.get(P),gi=A.get(q);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,Mu),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,Eu);for(let Jt=0;Jt<Fe;Jt++)Sr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,at.__webglTexture,ie,dt+Jt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,at.__webglTexture,ie),bt?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gi.__webglTexture,Pe,Ut+Jt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gi.__webglTexture,Pe),ie!==0?z.blitFramebuffer(et,nt,ke,Re,tt,Dt,ke,Re,z.COLOR_BUFFER_BIT,z.NEAREST):bt?z.copyTexSubImage3D(Ze,Pe,tt,Dt,Ut+Jt,et,nt,ke,Re):z.copyTexSubImage2D(Ze,Pe,tt,Dt,et,nt,ke,Re);Xe.bindFramebuffer(z.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else bt?P.isDataTexture||P.isData3DTexture?z.texSubImage3D(Ze,Pe,tt,Dt,Ut,ke,Re,Fe,yt,Qt,Ft.data):q.isCompressedArrayTexture?z.compressedTexSubImage3D(Ze,Pe,tt,Dt,Ut,ke,Re,Fe,yt,Ft.data):z.texSubImage3D(Ze,Pe,tt,Dt,Ut,ke,Re,Fe,yt,Qt,Ft):P.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pe,tt,Dt,ke,Re,yt,Qt,Ft.data):P.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pe,tt,Dt,Ft.width,Ft.height,yt,Ft.data):z.texSubImage2D(z.TEXTURE_2D,Pe,tt,Dt,ke,Re,yt,Qt,Ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,Pn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Bn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qn),Pe===0&&q.generateMipmaps&&z.generateMipmap(Ze),Xe.unbindTexture()},this.initRenderTarget=function(P){A.get(P).__webglFramebuffer===void 0&&j.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?j.setTextureCube(P,0):P.isData3DTexture?j.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?j.setTexture2DArray(P,0):j.setTexture2D(P,0),Xe.unbindTexture()},this.resetState=function(){k=0,Q=0,ee=null,Xe.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}function Ub(){const n=be.useRef(null);return be.useEffect(()=>{const e=n.current;if(!e)return;const t=window.innerWidth,r=window.innerHeight,o=new Fb({antialias:!0,alpha:!0});o.setSize(t,r),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.setClearColor(0,0),e.appendChild(o.domElement);const a=new _T,c=new di(55,t/r,.1,1e3);c.position.z=46;const f={hero:new Np(13,2),about:new Fp(13,1),projects:new Ip(13,0),blog:new Up(10,3,16,100),contact:new ru(13,0)},d=(X,he)=>new U_({color:6514417,opacity:he,transparent:!0});let h="hero",p="hero";const v=new Dc(f.hero),g=d(!1,.1),_=new Id(v,g);_.position.set(16,2,0),a.add(_);const M=new Op(4.5,1.1,90,9,2,3),T=new Dc(M),y=d(!1,.055),S=new Id(T,y);S.position.set(-20,-9,-6),a.add(S);const w=new ru(3.5,1),b=new Dc(w),R=d(!1,.07),L=new Id(b,R);L.position.set(-8,12,-10),a.add(L);const I=220,F=new Float32Array(I*3),E=[];for(let X=0;X<I;X++)F[X*3]=(Math.random()-.5)*90,F[X*3+1]=(Math.random()-.5)*60,F[X*3+2]=(Math.random()-.5)*40,E.push({x:(Math.random()-.5)*.005,y:(Math.random()-.5)*.005,z:0});const D=new bn;D.setAttribute("position",new Pi(F,3));const Z=new O_({color:6514417,size:.18,transparent:!0,opacity:.35}),k=new PT(D,Z);a.add(k);const Q={root:null,threshold:.5},ee=X=>{X.forEach(he=>{if(he.isIntersecting){const me=he.target.id;f[me]&&(p=me)}})},ue=new IntersectionObserver(ee,Q);["hero","about","projects","blog","contact"].forEach(X=>{const he=document.getElementById(X);he&&ue.observe(he)});const te=()=>{const X=document.documentElement.classList.contains("dark"),he=X?8490232:6514417;_.material.color.setHex(he),_.material.opacity=X?.13:.1,S.material.color.setHex(he),S.material.opacity=X?.08:.055,L.material.color.setHex(he),L.material.opacity=X?.1:.07,k.material.color.setHex(he),k.material.opacity=X?.5:.35},re=new MutationObserver(te);re.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]});let W=0,Y=0;const ne=X=>{W=(X.clientX/window.innerWidth-.5)*2,Y=(X.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",ne);let le;const O=new VT;let K="none",Ee=1;const ze=()=>{le=requestAnimationFrame(ze);const X=O.getElapsedTime();h!==p&&K==="none"&&(K="shrinking"),K==="shrinking"?(Ee-=.04,Ee<=0&&(Ee=0,_.geometry.dispose(),_.geometry=new Dc(f[p]),h=p,K="growing")):K==="growing"&&(Ee+=.04,Ee>=1&&(Ee=1,K="none"));const he=Math.pow(Ee,2),me=1+(1-Ee)*4,Ue=he;_.scale.set(Ue,Ue,Ue),_.rotation.x=X*.07*me+Y*.04,_.rotation.y=X*.11*me+W*.04,S.rotation.x=X*-.05,S.rotation.z=X*.08,S.position.y=-9+Math.sin(X*.4)*1.5,L.rotation.x=X*.09,L.rotation.y=X*-.07,L.position.y=12+Math.sin(X*.3+1.2)*2,L.position.x=-8+Math.cos(X*.25)*1.5;const Ne=D.attributes.position;for(let $e=0;$e<I;$e++)Ne.array[$e*3]+=E[$e].x,Ne.array[$e*3+1]+=E[$e].y,Math.abs(Ne.array[$e*3])>45&&(Ne.array[$e*3]*=-1),Math.abs(Ne.array[$e*3+1])>30&&(Ne.array[$e*3+1]*=-1);Ne.needsUpdate=!0,c.position.x+=(W*1.2-c.position.x)*.03,c.position.y+=(-Y*.8-c.position.y)*.03,c.lookAt(a.position),o.render(a,c)};ze();const Ke=()=>{const X=window.innerWidth,he=window.innerHeight;c.aspect=X/he,c.updateProjectionMatrix(),o.setSize(X,he)};return window.addEventListener("resize",Ke),()=>{cancelAnimationFrame(le),ue.disconnect(),re.disconnect(),window.removeEventListener("resize",Ke),window.removeEventListener("mousemove",ne),e.contains(o.domElement)&&e.removeChild(o.domElement),Object.values(f).forEach(X=>X.dispose()),v.dispose(),g.dispose(),M.dispose(),T.dispose(),y.dispose(),w.dispose(),b.dispose(),R.dispose(),D.dispose(),Z.dispose(),o.dispose()}},[]),V.jsx("div",{ref:n,"aria-hidden":"true",style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}})}const kp=be.createContext({});function Bp(n){const e=be.useRef(null);return e.current===null&&(e.current=n()),e.current}const Ob=typeof window<"u",K_=Ob?be.useLayoutEffect:be.useEffect,vu=be.createContext(null);function zp(n,e){n.indexOf(e)===-1&&n.push(e)}function su(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Ki=(n,e,t)=>t>e?e:t<n?n:t;let Vp=()=>{};const _r={},$_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Z_(n){return typeof n=="object"&&n!==null}const Q_=n=>/^0[^.\s]+$/u.test(n);function J_(n){let e;return()=>(e===void 0&&(e=n()),e)}const mi=n=>n,kb=(n,e)=>t=>e(n(t)),$a=(...n)=>n.reduce(kb),Va=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class Hp{constructor(){this.subscriptions=[]}add(e){return zp(this.subscriptions,e),()=>su(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Di=n=>n*1e3,pi=n=>n/1e3;function ey(n,e){return e?n*(1e3/e):0}const ty=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,Bb=1e-7,zb=12;function Vb(n,e,t,r,o){let a,c,f=0;do c=e+(t-e)/2,a=ty(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>Bb&&++f<zb);return c}function Za(n,e,t,r){if(n===e&&t===r)return mi;const o=a=>Vb(a,0,1,n,t);return a=>a===0||a===1?a:ty(o(a),e,r)}const ny=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,iy=n=>e=>1-n(1-e),ry=Za(.33,1.53,.69,.99),Gp=iy(ry),sy=ny(Gp),oy=n=>(n*=2)<1?.5*Gp(n):.5*(2-Math.pow(2,-10*(n-1))),Wp=n=>1-Math.sin(Math.acos(n)),ay=iy(Wp),ly=ny(Wp),Hb=Za(.42,0,1,1),Gb=Za(0,0,.58,1),cy=Za(.42,0,.58,1),Wb=n=>Array.isArray(n)&&typeof n[0]!="number",uy=n=>Array.isArray(n)&&typeof n[0]=="number",jb={linear:mi,easeIn:Hb,easeInOut:cy,easeOut:Gb,circIn:Wp,circInOut:ly,circOut:ay,backIn:Gp,backInOut:sy,backOut:ry,anticipate:oy},Xb=n=>typeof n=="string",Wv=n=>{if(uy(n)){Vp(n.length===4);const[e,t,r,o]=n;return Za(e,t,r,o)}else if(Xb(n))return jb[n];return n},Uc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Yb(n,e){let t=new Set,r=new Set,o=!1,a=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function d(p){c.has(p)&&(h.schedule(p),n()),p(f)}const h={schedule:(p,v=!1,g=!1)=>{const M=g&&o?t:r;return v&&c.add(p),M.has(p)||M.add(p),p},cancel:p=>{r.delete(p),c.delete(p)},process:p=>{if(f=p,o){a=!0;return}o=!0,[t,r]=[r,t],t.forEach(d),t.clear(),o=!1,a&&(a=!1,h.process(p))}};return h}const qb=40;function fy(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=Uc.reduce((b,R)=>(b[R]=Yb(a),b),{}),{setup:f,read:d,resolveKeyframes:h,preUpdate:p,update:v,preRender:g,render:_,postRender:M}=c,T=()=>{const b=_r.useManualTiming?o.timestamp:performance.now();t=!1,_r.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(b-o.timestamp,qb),1)),o.timestamp=b,o.isProcessing=!0,f.process(o),d.process(o),h.process(o),p.process(o),v.process(o),g.process(o),_.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(T))},y=()=>{t=!0,r=!0,o.isProcessing||n(T)};return{schedule:Uc.reduce((b,R)=>{const L=c[R];return b[R]=(I,F=!1,E=!1)=>(t||y(),L.schedule(I,F,E)),b},{}),cancel:b=>{for(let R=0;R<Uc.length;R++)c[Uc[R]].cancel(b)},state:o,steps:c}}const{schedule:kt,cancel:Jr,state:xn,steps:zd}=fy(typeof requestAnimationFrame<"u"?requestAnimationFrame:mi,!0);let Xc;function Kb(){Xc=void 0}const Nn={now:()=>(Xc===void 0&&Nn.set(xn.isProcessing||_r.useManualTiming?xn.timestamp:performance.now()),Xc),set:n=>{Xc=n,queueMicrotask(Kb)}},dy=n=>e=>typeof e=="string"&&e.startsWith(n),hy=dy("--"),$b=dy("var(--"),jp=n=>$b(n)?Zb.test(n.split("/*")[0].trim()):!1,Zb=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function jv(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Bo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Ha={...Bo,transform:n=>Ki(0,1,n)},Oc={...Bo,default:1},Na=n=>Math.round(n*1e5)/1e5,Xp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Qb(n){return n==null}const Jb=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yp=(n,e)=>t=>!!(typeof t=="string"&&Jb.test(t)&&t.startsWith(n)||e&&!Qb(t)&&Object.prototype.hasOwnProperty.call(t,e)),py=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,f]=r.match(Xp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},eR=n=>Ki(0,255,n),Vd={...Bo,transform:n=>Math.round(eR(n))},Ps={test:Yp("rgb","red"),parse:py("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Vd.transform(n)+", "+Vd.transform(e)+", "+Vd.transform(t)+", "+Na(Ha.transform(r))+")"};function tR(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const $h={test:Yp("#"),parse:tR,transform:Ps.transform},Qa=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Yr=Qa("deg"),Xi=Qa("%"),je=Qa("px"),nR=Qa("vh"),iR=Qa("vw"),Xv={...Xi,parse:n=>Xi.parse(n)/100,transform:n=>Xi.transform(n*100)},yo={test:Yp("hsl","hue"),parse:py("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Xi.transform(Na(e))+", "+Xi.transform(Na(t))+", "+Na(Ha.transform(r))+")"},on={test:n=>Ps.test(n)||$h.test(n)||yo.test(n),parse:n=>Ps.test(n)?Ps.parse(n):yo.test(n)?yo.parse(n):$h.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ps.transform(n):yo.transform(n),getAnimatableNone:n=>{const e=on.parse(n);return e.alpha=0,on.transform(e)}},rR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sR(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Xp))==null?void 0:e.length)||0)+(((t=n.match(rR))==null?void 0:t.length)||0)>0}const my="number",gy="color",oR="var",aR="var(",Yv="${}",lR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ga(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const f=e.replace(lR,d=>(on.test(d)?(r.color.push(a),o.push(gy),t.push(on.parse(d))):d.startsWith(aR)?(r.var.push(a),o.push(oR),t.push(d)):(r.number.push(a),o.push(my),t.push(parseFloat(d))),++a,Yv)).split(Yv);return{values:t,split:f,indexes:r,types:o}}function vy(n){return Ga(n).values}function xy(n){const{split:e,types:t}=Ga(n),r=e.length;return o=>{let a="";for(let c=0;c<r;c++)if(a+=e[c],o[c]!==void 0){const f=t[c];f===my?a+=Na(o[c]):f===gy?a+=on.transform(o[c]):a+=o[c]}return a}}const cR=n=>typeof n=="number"?0:on.test(n)?on.getAnimatableNone(n):n;function uR(n){const e=vy(n);return xy(n)(e.map(cR))}const Li={test:sR,parse:vy,createTransformer:xy,getAnimatableNone:uR};function Hd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function fR({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const f=t<.5?t*(1+e):t+e-t*e,d=2*t-f;o=Hd(d,f,n+1/3),a=Hd(d,f,n),c=Hd(d,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function ou(n,e){return t=>t>0?e:n}const Xt=(n,e,t)=>n+(e-n)*t,Gd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},dR=[$h,Ps,yo],hR=n=>dR.find(e=>e.test(n));function qv(n){const e=hR(n);if(!e)return!1;let t=e.parse(n);return e===yo&&(t=fR(t)),t}const Kv=(n,e)=>{const t=qv(n),r=qv(e);if(!t||!r)return ou(n,e);const o={...t};return a=>(o.red=Gd(t.red,r.red,a),o.green=Gd(t.green,r.green,a),o.blue=Gd(t.blue,r.blue,a),o.alpha=Xt(t.alpha,r.alpha,a),Ps.transform(o))},Zh=new Set(["none","hidden"]);function pR(n,e){return Zh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function mR(n,e){return t=>Xt(n,e,t)}function qp(n){return typeof n=="number"?mR:typeof n=="string"?jp(n)?ou:on.test(n)?Kv:xR:Array.isArray(n)?_y:typeof n=="object"?on.test(n)?Kv:gR:ou}function _y(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>qp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function gR(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=qp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function vR(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],f=n.values[c]??0;t[o]=f,r[a]++}return t}const xR=(n,e)=>{const t=Li.createTransformer(e),r=Ga(n),o=Ga(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Zh.has(n)&&!o.values.length||Zh.has(e)&&!r.values.length?pR(n,e):$a(_y(vR(r,o),o.values),t):ou(n,e)};function yy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Xt(n,e,t):qp(n)(n,e)}const _R=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>kt.update(e,t),stop:()=>Jr(e),now:()=>xn.isProcessing?xn.timestamp:Nn.now()}},Sy=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},au=2e4;function Kp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<au;)e+=t,r=n.next(e);return e>=au?1/0:e}function yR(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(Kp(r),au);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:pi(o)}}const SR=5;function My(n,e,t){const r=Math.max(e-SR,0);return ey(t-n(r),e-r)}const qt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Wd=.001;function MR({duration:n=qt.duration,bounce:e=qt.bounce,velocity:t=qt.velocity,mass:r=qt.mass}){let o,a,c=1-e;c=Ki(qt.minDamping,qt.maxDamping,c),n=Ki(qt.minDuration,qt.maxDuration,pi(n)),c<1?(o=h=>{const p=h*c,v=p*n,g=p-t,_=Qh(h,c),M=Math.exp(-v);return Wd-g/_*M},a=h=>{const v=h*c*n,g=v*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),T=Qh(Math.pow(h,2),c);return(-o(h)+Wd>0?-1:1)*((g-_)*M)/T}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-Wd+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const f=5/n,d=TR(o,a,f);if(n=Di(n),isNaN(d))return{stiffness:qt.stiffness,damping:qt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const ER=12;function TR(n,e,t){let r=t;for(let o=1;o<ER;o++)r=r-n(r)/e(r);return r}function Qh(n,e){return n*Math.sqrt(1-e*e)}const wR=["duration","bounce"],AR=["stiffness","damping","mass"];function $v(n,e){return e.some(t=>n[t]!==void 0)}function CR(n){let e={velocity:qt.velocity,stiffness:qt.stiffness,damping:qt.damping,mass:qt.mass,isResolvedFromDuration:!1,...n};if(!$v(n,AR)&&$v(n,wR))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Ki(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:qt.mass,stiffness:o,damping:a}}else{const t=MR({...n,velocity:0});e={...e,...t,mass:qt.mass},e.isResolvedFromDuration=!0}return e}function lu(n=qt.visualDuration,e=qt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],f={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:v,velocity:g,isResolvedFromDuration:_}=CR({...t,velocity:-pi(t.velocity||0)}),M=g||0,T=h/(2*Math.sqrt(d*p)),y=c-a,S=pi(Math.sqrt(d/p)),w=Math.abs(y)<5;r||(r=w?qt.restSpeed.granular:qt.restSpeed.default),o||(o=w?qt.restDelta.granular:qt.restDelta.default);let b;if(T<1){const L=Qh(S,T);b=I=>{const F=Math.exp(-T*S*I);return c-F*((M+T*S*y)/L*Math.sin(L*I)+y*Math.cos(L*I))}}else if(T===1)b=L=>c-Math.exp(-S*L)*(y+(M+S*y)*L);else{const L=S*Math.sqrt(T*T-1);b=I=>{const F=Math.exp(-T*S*I),E=Math.min(L*I,300);return c-F*((M+T*S*y)*Math.sinh(E)+L*y*Math.cosh(E))/L}}const R={calculatedDuration:_&&v||null,next:L=>{const I=b(L);if(_)f.done=L>=v;else{let F=L===0?M:0;T<1&&(F=L===0?Di(M):My(b,L,I));const E=Math.abs(F)<=r,D=Math.abs(c-I)<=o;f.done=E&&D}return f.value=f.done?c:I,f},toString:()=>{const L=Math.min(Kp(R),au),I=Sy(F=>R.next(L*F).value,L,30);return L+"ms "+I},toTransition:()=>{}};return R}lu.applyToOptions=n=>{const e=yR(n,100,lu);return n.ease=e.ease,n.duration=Di(e.duration),n.type="keyframes",n};function Jh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:f,max:d,restDelta:h=.5,restSpeed:p}){const v=n[0],g={done:!1,value:v},_=E=>f!==void 0&&E<f||d!==void 0&&E>d,M=E=>f===void 0?d:d===void 0||Math.abs(f-E)<Math.abs(d-E)?f:d;let T=t*e;const y=v+T,S=c===void 0?y:c(y);S!==y&&(T=S-v);const w=E=>-T*Math.exp(-E/r),b=E=>S+w(E),R=E=>{const D=w(E),Z=b(E);g.done=Math.abs(D)<=h,g.value=g.done?S:Z};let L,I;const F=E=>{_(g.value)&&(L=E,I=lu({keyframes:[g.value,M(g.value)],velocity:My(b,E,g.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return F(0),{calculatedDuration:null,next:E=>{let D=!1;return!I&&L===void 0&&(D=!0,R(E),F(E)),L!==void 0&&E>=L?I.next(E-L):(!D&&R(E),g)}}}function bR(n,e,t){const r=[],o=t||_r.mix||yy,a=n.length-1;for(let c=0;c<a;c++){let f=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||mi:e;f=$a(d,f)}r.push(f)}return r}function RR(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Vp(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=bR(e,r,o),d=f.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const g=Va(n[v],n[v+1],p);return f[v](g)};return t?p=>h(Ki(n[0],n[a-1],p)):h}function PR(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Va(0,e,r);n.push(Xt(t,1,o))}}function DR(n){const e=[0];return PR(e,n.length-1),e}function LR(n,e){return n.map(t=>t*e)}function IR(n,e){return n.map(()=>e||cy).splice(0,n.length-1)}function Fa({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=Wb(r)?r.map(Wv):Wv(r),a={done:!1,value:e[0]},c=LR(t&&t.length===e.length?t:DR(e),n),f=RR(c,e,{ease:Array.isArray(o)?o:IR(e,o)});return{calculatedDuration:n,next:d=>(a.value=f(d),a.done=d>=n,a)}}const NR=n=>n!==null;function $p(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(NR),f=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!f||r===void 0?a[f]:r}const FR={decay:Jh,inertia:Jh,tween:Fa,keyframes:Fa,spring:lu};function Ey(n){typeof n.type=="string"&&(n.type=FR[n.type])}class Zp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const UR=n=>n/100;class Qp extends Zp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Nn.now()&&this.tick(Nn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Ey(e);const{type:t=Fa,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:f}=e;const d=t||Fa;d!==Fa&&typeof f[0]!="number"&&(this.mixKeyframes=$a(UR,yy(f[0],f[1])),f=[0,100]);const h=d({...e,keyframes:f});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...f].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=Kp(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:f,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:p,repeat:v,repeatType:g,repeatDelay:_,type:M,onUpdate:T,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-h*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let b=this.currentTime,R=r;if(v){const E=Math.min(this.currentTime,o)/f;let D=Math.floor(E),Z=E%1;!Z&&E>=1&&(Z=1),Z===1&&D--,D=Math.min(D,v+1),!!(D%2)&&(g==="reverse"?(Z=1-Z,_&&(Z-=_/f)):g==="mirror"&&(R=c)),b=Ki(0,1,Z)*f}const L=w?{done:!1,value:p[0]}:R.next(b);a&&(L.value=a(L.value));let{done:I}=L;!w&&d!==null&&(I=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return F&&M!==Jh&&(L.value=$p(p,this.options,y,this.speed)),T&&T(L.value),F&&this.finish(),L}then(e,t){return this.finished.then(e,t)}get duration(){return pi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+pi(e)}get time(){return pi(this.currentTime)}set time(e){var t;e=Di(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(t=this.driver)==null||t.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(Nn.now());const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=pi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=_R,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Nn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function OR(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Ds=n=>n*180/Math.PI,ep=n=>{const e=Ds(Math.atan2(n[1],n[0]));return tp(e)},kR={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:ep,rotateZ:ep,skewX:n=>Ds(Math.atan(n[1])),skewY:n=>Ds(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},tp=n=>(n=n%360,n<0&&(n+=360),n),Zv=ep,Qv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),Jv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),BR={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Qv,scaleY:Jv,scale:n=>(Qv(n)+Jv(n))/2,rotateX:n=>tp(Ds(Math.atan2(n[6],n[5]))),rotateY:n=>tp(Ds(Math.atan2(-n[2],n[0]))),rotateZ:Zv,rotate:Zv,skewX:n=>Ds(Math.atan(n[4])),skewY:n=>Ds(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function np(n){return n.includes("scale")?1:0}function ip(n,e){if(!n||n==="none")return np(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=BR,o=t;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=kR,o=f}if(!o)return np(e);const a=r[e],c=o[1].split(",").map(VR);return typeof a=="function"?a(c):c[a]}const zR=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return ip(t,e)};function VR(n){return parseFloat(n.trim())}const zo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Vo=new Set(zo),ex=n=>n===Bo||n===je,HR=new Set(["x","y","z"]),GR=zo.filter(n=>!HR.has(n));function WR(n){const e=[];return GR.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const Zr={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>ip(e,"x"),y:(n,{transform:e})=>ip(e,"y")};Zr.translateX=Zr.x;Zr.translateY=Zr.y;const Ls=new Set;let rp=!1,sp=!1,op=!1;function Ty(){if(sp){const n=Array.from(Ls).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=WR(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var f;(f=r.getValue(a))==null||f.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}sp=!1,rp=!1,Ls.forEach(n=>n.complete(op)),Ls.clear()}function wy(){Ls.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(sp=!0)})}function jR(){op=!0,wy(),Ty(),op=!1}class Jp{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Ls.add(this),rp||(rp=!0,kt.read(wy),kt.resolveKeyframes(Ty))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const f=r.readValue(t,c);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}OR(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Ls.delete(this)}cancel(){this.state==="scheduled"&&(Ls.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const XR=n=>n.startsWith("--");function YR(n,e,t){XR(e)?n.style.setProperty(e,t):n.style[e]=t}const qR={};function Ay(n,e){const t=J_(n);return()=>qR[e]??t()}const KR=Ay(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Cy=Ay(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ia=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,tx={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ia([0,.65,.55,1]),circOut:Ia([.55,0,1,.45]),backIn:Ia([.31,.01,.66,-.59]),backOut:Ia([.33,1.53,.69,.99])};function by(n,e){if(n)return typeof n=="function"?Cy()?Sy(n,e):"ease-out":uy(n)?Ia(n):Array.isArray(n)?n.map(t=>by(t,e)||tx.easeOut):tx[n]}function $R(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:f="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const v=by(f,o);Array.isArray(v)&&(p.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(p,g)}function Ry(n){return typeof n=="function"&&"applyToOptions"in n}function ZR({type:n,...e}){return Ry(n)&&Cy()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Py extends Zp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:f,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Vp(typeof e.type!="string");const h=ZR(e);this.animation=$R(t,r,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=$p(o,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(p),YR(t,r,p),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return pi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+pi(e)}get time(){return pi(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Di(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&KR()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),mi):o(this)}}const Dy={anticipate:oy,backInOut:sy,circInOut:ly};function QR(n){return n in Dy}function JR(n){typeof n.ease=="string"&&QR(n.ease)&&(n.ease=Dy[n.ease])}const jd=10;class eP extends Py{constructor(e){JR(e),Ey(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const f=new Qp({...c,autoplay:!1}),d=Math.max(jd,Nn.now()-this.startTime),h=Ki(0,jd,d-jd);t.setWithVelocity(f.sample(Math.max(0,d-h)).value,f.sample(d).value,h),f.stop()}}const nx=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Li.test(n)||n==="0")&&!n.startsWith("url("));function tP(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function nP(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=nx(o,e),f=nx(a,e);return!c||!f?!1:tP(n)||(t==="spring"||Ry(t))&&r}function ap(n){n.duration=0,n.type="keyframes"}const iP=new Set(["opacity","clipPath","filter","transform"]),rP=J_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function sP(n){var p;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c}=n;if(!(((p=e==null?void 0:e.owner)==null?void 0:p.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return rP()&&t&&iP.has(t)&&(t!=="transform"||!h)&&!d&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const oP=40;class aP extends Zp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:f,name:d,motionValue:h,element:p,...v}){var M;super(),this.stop=()=>{var T,y;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Nn.now();const g={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:d,motionValue:h,element:p,...v},_=(p==null?void 0:p.KeyframeResolver)||Jp;this.keyframeResolver=new _(f,(T,y,S)=>this.onKeyframesResolved(T,y,g,!S),d,h,p),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){var y,S;this.keyframeResolver=void 0;const{name:a,type:c,velocity:f,delay:d,isHandoff:h,onUpdate:p}=r;this.resolvedAt=Nn.now(),nP(e,a,c,f)||((_r.instantAnimations||!d)&&(p==null||p($p(e,r,t))),e[0]=e[e.length-1],ap(r),r.repeat=0);const g={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>oP?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},_=!h&&sP(g),M=(S=(y=g.motionValue)==null?void 0:y.owner)==null?void 0:S.current,T=_?new eP({...g,element:M}):new Qp(g);T.finished.then(()=>{this.notifyFinished()}).catch(mi),this.pendingTimeline&&(this.stopTimeline=T.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=T}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),jR()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function Ly(n,e,t,r=0,o=1){const a=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,f=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:f-a*r}const lP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function cP(n){const e=lP.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Iy(n,e,t=1){const[r,o]=cP(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return $_(c)?parseFloat(c):c}return jp(o)?Iy(o,e,t+1):o}const uP={type:"spring",stiffness:500,damping:25,restSpeed:10},fP=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),dP={type:"keyframes",duration:.8},hP={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},pP=(n,{keyframes:e})=>e.length>2?dP:Vo.has(n)?n.startsWith("scale")?fP(e[1]):uP:hP,mP=n=>n!==null;function gP(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(mP),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[a]}function Ny(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function em(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?Ny(t,n):t}function vP({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:f,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const tm=(n,e,t,r={},o,a)=>c=>{const f=em(r,n)||{},d=f.delay||r.delay||0;let{elapsed:h=0}=r;h=h-Di(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-h,onUpdate:g=>{e.set(g),f.onUpdate&&f.onUpdate(g)},onComplete:()=>{c(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:a?void 0:o};vP(f)||Object.assign(p,pP(n,p)),p.duration&&(p.duration=Di(p.duration)),p.repeatDelay&&(p.repeatDelay=Di(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(ap(p),p.delay===0&&(v=!0)),(_r.instantAnimations||_r.skipAnimations||o!=null&&o.shouldSkipAnimations)&&(v=!0,ap(p),p.delay=0),p.allowFlatten=!f.type&&!f.ease,v&&!a&&e.get()!==void 0){const g=gP(p.keyframes,f);if(g!==void 0){kt.update(()=>{p.onUpdate(g),p.onComplete()});return}}return f.isSync?new Qp(p):new aP(p)};function ix(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function nm(n,e,t,r){if(typeof e=="function"){const[o,a]=ix(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=ix(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Co(n,e,t){const r=n.getProps();return nm(r,e,t!==void 0?t:r.custom,n)}const Fy=new Set(["width","height","top","left","right","bottom",...zo]),rx=30,xP=n=>!isNaN(parseFloat(n));class _P{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=Nn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Nn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=xP(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Hp);const r=this.events[e].add(t);return e==="change"?()=>{r(),kt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Nn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>rx)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,rx);return ey(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Io(n,e){return new _P(n,e)}const lp=n=>Array.isArray(n);function yP(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Io(t))}function SP(n){return lp(n)?n[n.length-1]||0:n}function MP(n,e){const t=Co(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const f=SP(a[c]);yP(n,c,f)}}const Cn=n=>!!(n&&n.getVelocity);function EP(n){return!!(Cn(n)&&n.add)}function cp(n,e){const t=n.getValue("willChange");if(EP(t))return t.add(e);if(!t&&_r.WillChange){const r=new _r.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function im(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const TP="framerAppearId",Uy="data-"+im(TP);function Oy(n){return n.props[Uy]}function wP({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function ky(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...f}=e;const d=n.getDefaultTransition();a=a?Ny(a,d):d;const h=a==null?void 0:a.reduceMotion;r&&(a=r);const p=[],v=o&&n.animationState&&n.animationState.getState()[o];for(const g in f){const _=n.getValue(g,n.latestValues[g]??null),M=f[g];if(M===void 0||v&&wP(v,g))continue;const T={delay:t,...em(a||{},g)},y=_.get();if(y!==void 0&&!_.isAnimating&&!Array.isArray(M)&&M===y&&!T.velocity)continue;let S=!1;if(window.MotionHandoffAnimation){const R=Oy(n);if(R){const L=window.MotionHandoffAnimation(R,g,kt);L!==null&&(T.startTime=L,S=!0)}}cp(n,g);const w=h??n.shouldReduceMotion;_.start(tm(g,_,M,w&&Fy.has(g)?{type:!1}:T,n,S));const b=_.animation;b&&p.push(b)}if(c){const g=()=>kt.update(()=>{c&&MP(n,c)});p.length?Promise.all(p).then(g):g()}return p}function up(n,e,t={}){var d;const r=Co(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(ky(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:g}=o;return AP(n,e,h,p,v,g,t)}:()=>Promise.resolve(),{when:f}=o;if(f){const[h,p]=f==="beforeChildren"?[a,c]:[c,a];return h().then(()=>p())}else return Promise.all([a(),c(t.delay)])}function AP(n,e,t=0,r=0,o=0,a=1,c){const f=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),f.push(up(d,e,{...c,delay:t+(typeof r=="function"?0:r)+Ly(n.variantChildren,d,r,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(f)}function CP(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>up(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=up(n,e,t);else{const o=typeof e=="function"?Co(n,e,t.custom):e;r=Promise.all(ky(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const bP={test:n=>n==="auto",parse:n=>n},By=n=>e=>e.test(n),zy=[Bo,je,Xi,Yr,iR,nR,bP],sx=n=>zy.find(By(n));function RP(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Q_(n):!0}const PP=new Set(["brightness","contrast","saturate","opacity"]);function DP(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(Xp)||[];if(!r)return n;const o=t.replace(r,"");let a=PP.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const LP=/\b([a-z-]*)\(.*?\)/gu,fp={...Li,getAnimatableNone:n=>{const e=n.match(LP);return e?e.map(DP).join(" "):n}},dp={...Li,getAnimatableNone:n=>{const e=Li.parse(n);return Li.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},ox={...Bo,transform:Math.round},IP={rotate:Yr,rotateX:Yr,rotateY:Yr,rotateZ:Yr,scale:Oc,scaleX:Oc,scaleY:Oc,scaleZ:Oc,skew:Yr,skewX:Yr,skewY:Yr,distance:je,translateX:je,translateY:je,translateZ:je,x:je,y:je,z:je,perspective:je,transformPerspective:je,opacity:Ha,originX:Xv,originY:Xv,originZ:je},rm={borderWidth:je,borderTopWidth:je,borderRightWidth:je,borderBottomWidth:je,borderLeftWidth:je,borderRadius:je,borderTopLeftRadius:je,borderTopRightRadius:je,borderBottomRightRadius:je,borderBottomLeftRadius:je,width:je,maxWidth:je,height:je,maxHeight:je,top:je,right:je,bottom:je,left:je,inset:je,insetBlock:je,insetBlockStart:je,insetBlockEnd:je,insetInline:je,insetInlineStart:je,insetInlineEnd:je,padding:je,paddingTop:je,paddingRight:je,paddingBottom:je,paddingLeft:je,paddingBlock:je,paddingBlockStart:je,paddingBlockEnd:je,paddingInline:je,paddingInlineStart:je,paddingInlineEnd:je,margin:je,marginTop:je,marginRight:je,marginBottom:je,marginLeft:je,marginBlock:je,marginBlockStart:je,marginBlockEnd:je,marginInline:je,marginInlineStart:je,marginInlineEnd:je,fontSize:je,backgroundPositionX:je,backgroundPositionY:je,...IP,zIndex:ox,fillOpacity:Ha,strokeOpacity:Ha,numOctaves:ox},NP={...rm,color:on,backgroundColor:on,outlineColor:on,fill:on,stroke:on,borderColor:on,borderTopColor:on,borderRightColor:on,borderBottomColor:on,borderLeftColor:on,filter:fp,WebkitFilter:fp,mask:dp,WebkitMask:dp},Vy=n=>NP[n],FP=new Set([fp,dp]);function Hy(n,e){let t=Vy(n);return FP.has(t)||(t=Li),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const UP=new Set(["auto","none","0"]);function OP(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!UP.has(a)&&Ga(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=Hy(t,o)}class kP extends Jp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let v=e[p];if(typeof v=="string"&&(v=v.trim(),jp(v))){const g=Iy(v,t.current);g!==void 0&&(e[p]=g),p===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!Fy.has(r)||e.length!==2)return;const[o,a]=e,c=sx(o),f=sx(a),d=jv(o),h=jv(a);if(d!==h&&Zr[r]){this.needsMeasurement=!0;return}if(c!==f)if(ex(c)&&ex(f))for(let p=0;p<e.length;p++){const v=e[p];typeof v=="string"&&(e[p]=parseFloat(v))}else Zr[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||RP(e[o]))&&r.push(o);r.length&&OP(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Zr[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var f;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=Zr[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const BP=new Set(["opacity","clipPath","filter","transform"]);function Gy(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const o=(t==null?void 0:t[n])??r.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Wy=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function hp(n){return Z_(n)&&"offsetHeight"in n}const{schedule:sm}=fy(queueMicrotask,!1),Ci={x:!1,y:!1};function jy(){return Ci.x||Ci.y}function zP(n){return n==="x"||n==="y"?Ci[n]?null:(Ci[n]=!0,()=>{Ci[n]=!1}):Ci.x||Ci.y?null:(Ci.x=Ci.y=!0,()=>{Ci.x=Ci.y=!1})}function Xy(n,e){const t=Gy(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function VP(n){return!(n.pointerType==="touch"||jy())}function HP(n,e,t={}){const[r,o,a]=Xy(n,t);return r.forEach(c=>{let f=!1,d=!1,h;const p=()=>{c.removeEventListener("pointerleave",M)},v=y=>{h&&(h(y),h=void 0),p()},g=y=>{f=!1,window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),d&&(d=!1,v(y))},_=()=>{f=!0,window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",g,o)},M=y=>{if(y.pointerType!=="touch"){if(f){d=!0;return}v(y)}},T=y=>{if(!VP(y))return;d=!1;const S=e(c,y);typeof S=="function"&&(h=S,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",T,o),c.addEventListener("pointerdown",_,o)}),a}const Yy=(n,e)=>e?n===e?!0:Yy(n,e.parentElement):!1,om=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,GP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function WP(n){return GP.has(n.tagName)||n.isContentEditable===!0}const jP=new Set(["INPUT","SELECT","TEXTAREA"]);function XP(n){return jP.has(n.tagName)||n.isContentEditable===!0}const Yc=new WeakSet;function ax(n){return e=>{e.key==="Enter"&&n(e)}}function Xd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const YP=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=ax(()=>{if(Yc.has(t))return;Xd(t,"down");const o=ax(()=>{Xd(t,"up")}),a=()=>Xd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function lx(n){return om(n)&&!jy()}const cx=new WeakSet;function qP(n,e,t={}){const[r,o,a]=Xy(n,t),c=f=>{const d=f.currentTarget;if(!lx(f)||cx.has(f))return;Yc.add(d),t.stopPropagation&&cx.add(f);const h=e(d,f),p=(_,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),Yc.has(d)&&Yc.delete(d),lx(_)&&typeof h=="function"&&h(_,{success:M})},v=_=>{p(_,d===window||d===document||t.useGlobalTarget||Yy(d,_.target))},g=_=>{p(_,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(f=>{(t.useGlobalTarget?window:f).addEventListener("pointerdown",c,o),hp(f)&&(f.addEventListener("focus",h=>YP(h,o)),!WP(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),a}function am(n){return Z_(n)&&"ownerSVGElement"in n}const qc=new WeakMap;let qr;const qy=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:am(r)&&"getBBox"in r?r.getBBox()[e]:r[t],KP=qy("inline","width","offsetWidth"),$P=qy("block","height","offsetHeight");function ZP({target:n,borderBoxSize:e}){var t;(t=qc.get(n))==null||t.forEach(r=>{r(n,{get width(){return KP(n,e)},get height(){return $P(n,e)}})})}function QP(n){n.forEach(ZP)}function JP(){typeof ResizeObserver>"u"||(qr=new ResizeObserver(QP))}function e2(n,e){qr||JP();const t=Gy(n);return t.forEach(r=>{let o=qc.get(r);o||(o=new Set,qc.set(r,o)),o.add(e),qr==null||qr.observe(r)}),()=>{t.forEach(r=>{const o=qc.get(r);o==null||o.delete(e),o!=null&&o.size||qr==null||qr.unobserve(r)})}}const Kc=new Set;let So;function t2(){So=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};Kc.forEach(e=>e(n))},window.addEventListener("resize",So)}function n2(n){return Kc.add(n),So||t2(),()=>{Kc.delete(n),!Kc.size&&typeof So=="function"&&(window.removeEventListener("resize",So),So=void 0)}}function ux(n,e){return typeof n=="function"?n2(n):e2(n,e)}function i2(n){return am(n)&&n.tagName==="svg"}const r2=[...zy,on,Li],s2=n=>r2.find(By(n)),fx=()=>({translate:0,scale:1,origin:0,originPoint:0}),Mo=()=>({x:fx(),y:fx()}),dx=()=>({min:0,max:0}),cn=()=>({x:dx(),y:dx()}),o2=new WeakMap;function xu(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Wa(n){return typeof n=="string"||Array.isArray(n)}const lm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cm=["initial",...lm];function _u(n){return xu(n.animate)||cm.some(e=>Wa(n[e]))}function Ky(n){return!!(_u(n)||n.variants)}function a2(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Cn(o))n.addValue(r,o);else if(Cn(a))n.addValue(r,Io(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Io(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const pp={current:null},$y={current:!1},l2=typeof window<"u";function c2(){if($y.current=!0,!!l2)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>pp.current=n.matches;n.addEventListener("change",e),e()}else pp.current=!1}const hx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let cu={};function Zy(n){cu=n}function u2(){return cu}class f2{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:f},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Jp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Nn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,kt.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=f;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=_u(t),this.isVariantNode=Ky(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in g){const M=g[_];h[_]!==void 0&&Cn(M)&&M.set(h[_])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,o2.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:($y.current||c2(),this.shouldReduceMotion=pp.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Jr(this.notifyUpdate),Jr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&BP.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:f,times:d,ease:h,duration:p}=t.accelerate,v=new Py({element:this.current,name:e,keyframes:f,times:d,ease:h,duration:Di(p)}),g=c(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const r=Vo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&kt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in cu){const t=cu[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):cn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<hx.length;r++){const o=hx[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=a2(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Io(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&($_(r)||Q_(r))?r=parseFloat(r):!s2(r)&&Li.test(t)&&(r=Hy(e,t)),this.setBaseTarget(e,Cn(r)?r.get():r)),Cn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const c=nm(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(r=c[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Cn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Hp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){sm.render(this.render)}}class Qy extends f2{constructor(){super(...arguments),this.KeyframeResolver=kP}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Cn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class es{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Jy({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function d2({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function h2(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Yd(n){return n===void 0||n===1}function mp({scale:n,scaleX:e,scaleY:t}){return!Yd(n)||!Yd(e)||!Yd(t)}function ws(n){return mp(n)||eS(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function eS(n){return px(n.x)||px(n.y)}function px(n){return n&&n!=="0%"}function uu(n,e,t){const r=n-t,o=e*r;return t+o}function mx(n,e,t,r,o){return o!==void 0&&(n=uu(n,o,r)),uu(n,t,r)+e}function gp(n,e=0,t=1,r,o){n.min=mx(n.min,e,t,r,o),n.max=mx(n.max,e,t,r,o)}function tS(n,{x:e,y:t}){gp(n.x,e.translate,e.scale,e.originPoint),gp(n.y,t.translate,t.scale,t.originPoint)}const gx=.999999999999,vx=1.0000000000001;function p2(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let f=0;f<o;f++){a=t[f],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&To(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,tS(n,c)),r&&ws(a.latestValues)&&To(n,a.latestValues))}e.x<vx&&e.x>gx&&(e.x=1),e.y<vx&&e.y>gx&&(e.y=1)}function Eo(n,e){n.min=n.min+e,n.max=n.max+e}function xx(n,e,t,r,o=.5){const a=Xt(n.min,n.max,o);gp(n,e,t,a,r)}function _x(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function To(n,e){xx(n.x,_x(e.x,n.x),e.scaleX,e.scale,e.originX),xx(n.y,_x(e.y,n.y),e.scaleY,e.scale,e.originY)}function nS(n,e){return Jy(h2(n.getBoundingClientRect(),e))}function m2(n,e,t){const r=nS(n,t),{scroll:o}=e;return o&&(Eo(r.x,o.offset.x),Eo(r.y,o.offset.y)),r}const g2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},v2=zo.length;function x2(n,e,t){let r="",o=!0;for(let a=0;a<v2;a++){const c=zo[a],f=n[c];if(f===void 0)continue;let d=!0;if(typeof f=="number")d=f===(c.startsWith("scale")?1:0);else{const h=parseFloat(f);d=c.startsWith("scale")?h===1:h===0}if(!d||t){const h=Wy(f,rm[c]);if(!d){o=!1;const p=g2[c]||c;r+=`${p}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function um(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,f=!1;for(const d in e){const h=e[d];if(Vo.has(d)){c=!0;continue}else if(hy(d)){o[d]=h;continue}else{const p=Wy(h,rm[d]);d.startsWith("origin")?(f=!0,a[d]=p):r[d]=p}}if(e.transform||(c||t?r.transform=x2(e,n.transform,t):r.transform&&(r.transform="none")),f){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;r.transformOrigin=`${d} ${h} ${p}`}}function iS(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function yx(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Pa={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(je.test(n))n=parseFloat(n);else return n;const t=yx(n,e.target.x),r=yx(n,e.target.y);return`${t}% ${r}%`}},_2={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Li.parse(n);if(o.length>5)return r;const a=Li.createTransformer(n),c=typeof o[0]!="number"?1:0,f=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=f,o[1+c]/=d;const h=Xt(f,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},vp={borderRadius:{...Pa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Pa,borderTopRightRadius:Pa,borderBottomLeftRadius:Pa,borderBottomRightRadius:Pa,boxShadow:_2};function rS(n,{layout:e,layoutId:t}){return Vo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!vp[n]||n==="opacity")}function fm(n,e,t){var c;const r=n.style,o=e==null?void 0:e.style,a={};if(!r)return a;for(const f in r)(Cn(r[f])||o&&Cn(o[f])||rS(f,n)||((c=t==null?void 0:t.getValue(f))==null?void 0:c.liveStyle)!==void 0)&&(a[f]=r[f]);return a}function y2(n){return window.getComputedStyle(n)}class S2 extends Qy{constructor(){super(...arguments),this.type="html",this.renderInstance=iS}readValueFromInstance(e,t){var r;if(Vo.has(t))return(r=this.projection)!=null&&r.isProjecting?np(t):zR(e,t);{const o=y2(e),a=(hy(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return nS(e,t)}build(e,t,r){um(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return fm(e,t,r)}}const M2={offset:"stroke-dashoffset",array:"stroke-dasharray"},E2={offset:"strokeDashoffset",array:"strokeDasharray"};function T2(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?M2:E2;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const w2=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function sS(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...f},d,h,p){if(um(n,f,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:g}=n;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete v.transformBox);for(const _ of w2)v[_]!==void 0&&(g[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&T2(v,o,a,c,!1)}const oS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),aS=n=>typeof n=="string"&&n.toLowerCase()==="svg";function A2(n,e,t,r){iS(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(oS.has(o)?o:im(o),e.attrs[o])}function lS(n,e,t){const r=fm(n,e,t);for(const o in n)if(Cn(n[o])||Cn(e[o])){const a=zo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class C2 extends Qy{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=cn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Vo.has(t)){const r=Vy(t);return r&&r.default||0}return t=oS.has(t)?t:im(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return lS(e,t,r)}build(e,t,r){sS(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){A2(e,t,r,o)}mount(e){this.isSVGTag=aS(e.tagName),super.mount(e)}}const b2=cm.length;function cS(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?cS(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<b2;t++){const r=cm[t],o=n.props[r];(Wa(o)||o===!1)&&(e[r]=o)}return e}function uS(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const R2=[...lm].reverse(),P2=lm.length;function D2(n){return e=>Promise.all(e.map(({animation:t,options:r})=>CP(n,t,r)))}function L2(n){let e=D2(n),t=Sx(),r=!0,o=!1;const a=h=>(p,v)=>{var _;const g=Co(n,v,h==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(g){const{transition:M,transitionEnd:T,...y}=g;p={...p,...y,...T}}return p};function c(h){e=h(n)}function f(h){const{props:p}=n,v=cS(n.parent)||{},g=[],_=new Set;let M={},T=1/0;for(let S=0;S<P2;S++){const w=R2[S],b=t[w],R=p[w]!==void 0?p[w]:v[w],L=Wa(R),I=w===h?b.isActive:null;I===!1&&(T=S);let F=R===v[w]&&R!==p[w]&&L;if(F&&(r||o)&&n.manuallyAnimateOnMount&&(F=!1),b.protectedKeys={...M},!b.isActive&&I===null||!R&&!b.prevProp||xu(R)||typeof R=="boolean")continue;if(w==="exit"&&b.isActive&&I!==!0){b.prevResolvedValues&&(M={...M,...b.prevResolvedValues});continue}const E=I2(b.prevProp,R);let D=E||w===h&&b.isActive&&!F&&L||S>T&&L,Z=!1;const k=Array.isArray(R)?R:[R];let Q=k.reduce(a(w),{});I===!1&&(Q={});const{prevResolvedValues:ee={}}=b,ue={...ee,...Q},te=Y=>{D=!0,_.has(Y)&&(Z=!0,_.delete(Y)),b.needsAnimating[Y]=!0;const ne=n.getValue(Y);ne&&(ne.liveStyle=!1)};for(const Y in ue){const ne=Q[Y],le=ee[Y];if(M.hasOwnProperty(Y))continue;let O=!1;lp(ne)&&lp(le)?O=!uS(ne,le):O=ne!==le,O?ne!=null?te(Y):_.add(Y):ne!==void 0&&_.has(Y)?te(Y):b.protectedKeys[Y]=!0}b.prevProp=R,b.prevResolvedValues=Q,b.isActive&&(M={...M,...Q}),(r||o)&&n.blockInitialAnimation&&(D=!1);const re=F&&E;D&&(!re||Z)&&g.push(...k.map(Y=>{const ne={type:w};if(typeof Y=="string"&&(r||o)&&!re&&n.manuallyAnimateOnMount&&n.parent){const{parent:le}=n,O=Co(le,Y);if(le.enteringChildren&&O){const{delayChildren:K}=O.transition||{};ne.delay=Ly(le.enteringChildren,n,K)}}return{animation:Y,options:ne}}))}if(_.size){const S={};if(typeof p.initial!="boolean"){const w=Co(n,Array.isArray(p.initial)?p.initial[0]:p.initial);w&&w.transition&&(S.transition=w.transition)}_.forEach(w=>{const b=n.getBaseTarget(w),R=n.getValue(w);R&&(R.liveStyle=!0),S[w]=b??null}),g.push({animation:S})}let y=!!g.length;return r&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(y=!1),r=!1,o=!1,y?e(g):Promise.resolve()}function d(h,p){var g;if(t[h].isActive===p)return Promise.resolve();(g=n.variantChildren)==null||g.forEach(_=>{var M;return(M=_.animationState)==null?void 0:M.setActive(h,p)}),t[h].isActive=p;const v=f(h);for(const _ in t)t[_].protectedKeys={};return v}return{animateChanges:f,setActive:d,setAnimateFunction:c,getState:()=>t,reset:()=>{t=Sx(),o=!0}}}function I2(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!uS(e,n):!1}function Ms(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Sx(){return{animate:Ms(!0),whileInView:Ms(),whileHover:Ms(),whileTap:Ms(),whileDrag:Ms(),whileFocus:Ms(),exit:Ms()}}function Mx(n,e){n.min=e.min,n.max=e.max}function Ai(n,e){Mx(n.x,e.x),Mx(n.y,e.y)}function Ex(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const fS=1e-4,N2=1-fS,F2=1+fS,dS=.01,U2=0-dS,O2=0+dS;function Fn(n){return n.max-n.min}function k2(n,e,t){return Math.abs(n-e)<=t}function Tx(n,e,t,r=.5){n.origin=r,n.originPoint=Xt(e.min,e.max,n.origin),n.scale=Fn(t)/Fn(e),n.translate=Xt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=N2&&n.scale<=F2||isNaN(n.scale))&&(n.scale=1),(n.translate>=U2&&n.translate<=O2||isNaN(n.translate))&&(n.translate=0)}function Ua(n,e,t,r){Tx(n.x,e.x,t.x,r?r.originX:void 0),Tx(n.y,e.y,t.y,r?r.originY:void 0)}function wx(n,e,t){n.min=t.min+e.min,n.max=n.min+Fn(e)}function B2(n,e,t){wx(n.x,e.x,t.x),wx(n.y,e.y,t.y)}function Ax(n,e,t){n.min=e.min-t.min,n.max=n.min+Fn(e)}function fu(n,e,t){Ax(n.x,e.x,t.x),Ax(n.y,e.y,t.y)}function Cx(n,e,t,r,o){return n-=e,n=uu(n,1/t,r),o!==void 0&&(n=uu(n,1/o,r)),n}function z2(n,e=0,t=1,r=.5,o,a=n,c=n){if(Xi.test(e)&&(e=parseFloat(e),e=Xt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let f=Xt(a.min,a.max,r);n===a&&(f-=e),n.min=Cx(n.min,e,t,f,o),n.max=Cx(n.max,e,t,f,o)}function bx(n,e,[t,r,o],a,c){z2(n,e[t],e[r],e[o],e.scale,a,c)}const V2=["x","scaleX","originX"],H2=["y","scaleY","originY"];function Rx(n,e,t,r){bx(n.x,e,V2,t?t.x:void 0,r?r.x:void 0),bx(n.y,e,H2,t?t.y:void 0,r?r.y:void 0)}function Px(n){return n.translate===0&&n.scale===1}function hS(n){return Px(n.x)&&Px(n.y)}function Dx(n,e){return n.min===e.min&&n.max===e.max}function G2(n,e){return Dx(n.x,e.x)&&Dx(n.y,e.y)}function Lx(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function pS(n,e){return Lx(n.x,e.x)&&Lx(n.y,e.y)}function Ix(n){return Fn(n.x)/Fn(n.y)}function Nx(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function zi(n){return[n("x"),n("y")]}function W2(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:v,rotateY:g,skewX:_,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),_&&(r+=`skewX(${_}deg) `),M&&(r+=`skewY(${M}deg) `)}const f=n.x.scale*e.x,d=n.y.scale*e.y;return(f!==1||d!==1)&&(r+=`scale(${f}, ${d})`),r||"none"}const mS=["TopLeft","TopRight","BottomLeft","BottomRight"],j2=mS.length,Fx=n=>typeof n=="string"?parseFloat(n):n,Ux=n=>typeof n=="number"||je.test(n);function X2(n,e,t,r,o,a){o?(n.opacity=Xt(0,t.opacity??1,Y2(r)),n.opacityExit=Xt(e.opacity??1,0,q2(r))):a&&(n.opacity=Xt(e.opacity??1,t.opacity??1,r));for(let c=0;c<j2;c++){const f=`border${mS[c]}Radius`;let d=Ox(e,f),h=Ox(t,f);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Ux(d)===Ux(h)?(n[f]=Math.max(Xt(Fx(d),Fx(h),r),0),(Xi.test(h)||Xi.test(d))&&(n[f]+="%")):n[f]=h}(e.rotate||t.rotate)&&(n.rotate=Xt(e.rotate||0,t.rotate||0,r))}function Ox(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const Y2=gS(0,.5,ay),q2=gS(.5,.95,mi);function gS(n,e,t){return r=>r<n?0:r>e?1:t(Va(n,e,r))}function K2(n,e,t){const r=Cn(n)?n:Io(n);return r.start(tm("",r,e,t)),r.animation}function ja(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}const $2=(n,e)=>n.depth-e.depth;class Z2{constructor(){this.children=[],this.isDirty=!1}add(e){zp(this.children,e),this.isDirty=!0}remove(e){su(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort($2),this.isDirty=!1,this.children.forEach(e)}}function Q2(n,e){const t=Nn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(Jr(r),n(a-e))};return kt.setup(r,!0),()=>Jr(r)}function $c(n){return Cn(n)?n.get():n}class J2{constructor(){this.members=[]}add(e){zp(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(su(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(su(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,a,c;(r=(t=e.options).onExitComplete)==null||r.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Zc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},qd=["","X","Y","Z"],e3=1e3;let t3=0;function Kd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function vS(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Oy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",kt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&vS(r)}function xS({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},f=e==null?void 0:e()){this.id=t3++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(r3),this.nodes.forEach(l3),this.nodes.forEach(c3),this.nodes.forEach(s3)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new Z2)}addEventListener(c,f){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Hp),this.eventHandlers.get(c).add(f)}notifyListeners(c,...f){const d=this.eventHandlers.get(c);d&&d.notify(...f)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=am(c)&&!i2(c),this.instance=c;const{layoutId:f,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||f)&&(this.isLayoutDirty=!0),n){let p,v=0;const g=()=>this.root.updateBlockedByResize=!1;kt.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,p&&p(),p=Q2(g,250),Zc.hasAnimatedSinceResize&&(Zc.hasAnimatedSinceResize=!1,this.nodes.forEach(zx)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&h&&(f||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeLayoutChanged:g,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||p3,{onLayoutAnimationStart:T,onLayoutAnimationComplete:y}=h.getProps(),S=!this.targetLayout||!pS(this.targetLayout,_),w=!v&&g;if(this.options.layoutRoot||this.resumeFrom||w||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={...em(M,"layout"),onPlay:T,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(p,w)}else v||zx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Jr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(u3),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&vS(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:f,layout:d}=this.options;if(f===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(kx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Bx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(a3),this.nodes.forEach(n3),this.nodes.forEach(i3)):this.nodes.forEach(Bx),this.clearAllSnapshots();const f=Nn.now();xn.delta=Ki(0,1e3/60,f-xn.timestamp),xn.timestamp=f,xn.isProcessing=!0,zd.update.process(xn),zd.preRender.process(xn),zd.render.process(xn),xn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,sm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(o3),this.sharedNodes.forEach(f3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,kt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){kt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Fn(this.snapshot.measuredBox.x)&&!Fn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=cn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(f=!1),f&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!hS(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(f||ws(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const f=this.measurePageBox();let d=this.removeElementScroll(f);return c&&(d=this.removeTransform(d)),m3(d),{animationId:this.root.animationId,measuredBox:f,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return cn();const f=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(g3))){const{scroll:p}=this.root;p&&(Eo(f.x,p.offset.x),Eo(f.y,p.offset.y))}return f}removeElementScroll(c){var d;const f=cn();if(Ai(f,c),(d=this.scroll)!=null&&d.wasRoot)return f;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:g}=p;p!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&Ai(f,c),Eo(f.x,v.offset.x),Eo(f.y,v.offset.y))}return f}applyTransform(c,f=!1){const d=cn();Ai(d,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!f&&p.options.layoutScroll&&p.scroll&&p!==p.root&&To(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),ws(p.latestValues)&&To(d,p.latestValues)}return ws(this.latestValues)&&To(d,this.latestValues),d}removeTransform(c){const f=cn();Ai(f,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!ws(h.latestValues))continue;mp(h.latestValues)&&h.updateSnapshot();const p=cn(),v=h.measurePageBox();Ai(p,v),Rx(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,p)}return ws(this.latestValues)&&Rx(f,this.latestValues),f}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==f;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:v}=this.options;if(!this.layout||!(p||v))return;this.resolvedRelativeTargetAt=xn.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=cn(),this.targetWithTransforms=cn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),B2(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ai(this.target,this.layout.layoutBox),tS(this.target,this.targetDelta)):Ai(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||mp(this.parent.latestValues)||eS(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,f,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=cn(),this.relativeTargetOrigin=cn(),fu(this.relativeTargetOrigin,f,d),Ai(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),f=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===xn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;Ai(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;p2(this.layoutCorrected,this.treeScale,this.path,f),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=cn());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ex(this.prevProjectionDelta.x,this.projectionDelta.x),Ex(this.prevProjectionDelta.y,this.projectionDelta.y)),Ua(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!Nx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Nx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Mo(),this.projectionDelta=Mo(),this.projectionDeltaWithTransform=Mo()}setAnimationOrigin(c,f=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},v=Mo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const g=cn(),_=d?d.source:void 0,M=this.layout?this.layout.source:void 0,T=_!==M,y=this.getStack(),S=!y||y.members.length<=1,w=!!(T&&!S&&this.options.crossfade===!0&&!this.path.some(h3));this.animationProgress=0;let b;this.mixTargetDelta=R=>{const L=R/1e3;Vx(v.x,c.x,L),Vx(v.y,c.y,L),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fu(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),d3(this.relativeTarget,this.relativeTargetOrigin,g,L),b&&G2(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=cn()),Ai(b,this.relativeTarget)),T&&(this.animationValues=p,X2(p,h,this.latestValues,L,w,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=L},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var f,d,h;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Jr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=kt.update(()=>{Zc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Io(0)),this.motionValue.jump(0,!1),this.currentAnimation=K2(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:f,target:d,layout:h,latestValues:p}=c;if(!(!f||!d||!h)){if(this!==c&&this.layout&&h&&_S(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||cn();const v=Fn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const g=Fn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+g}Ai(f,d),To(f,p),Ua(this.projectionDeltaWithTransform,this.layoutCorrected,f,p)}}registerSharedNode(c,f){this.sharedNodes.has(c)||this.sharedNodes.set(c,new J2),this.sharedNodes.get(c).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var f;const{layoutId:c}=this.options;return c?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:c}=this.options;return c?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:f,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let f=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(f=!0),!f)return;const h={};d.z&&Kd("z",c,h,this.animationValues);for(let p=0;p<qd.length;p++)Kd(`rotate${qd[p]}`,c,h,this.animationValues),Kd(`skew${qd[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=$c(f==null?void 0:f.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=$c(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!ws(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=W2(this.projectionDeltaWithTransform,this.treeScale,p);d&&(v=d(p,v)),c.transform=v;const{x:g,y:_}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const M in vp){if(p[M]===void 0)continue;const{correct:T,applyTo:y,isCSSVariable:S}=vp[M],w=v==="none"?p[M]:T(p[M],h);if(y){const b=y.length;for(let R=0;R<b;R++)c[y[R]]=w}else S?this.options.visualElement.renderState.vars[M]=w:c[M]=w}this.options.layoutId&&(c.pointerEvents=h===this?$c(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var f;return(f=c.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(kx),this.root.sharedNodes.clear()}}}function n3(n){n.updateLayout()}function i3(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;a==="size"?zi(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=Fn(g);g.min=r[v].min,g.max=g.min+_}):_S(a,e.layoutBox,r)&&zi(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=Fn(r[v]);g.max=g.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+_)});const f=Mo();Ua(f,r,e.layoutBox);const d=Mo();c?Ua(d,n.applyTransform(o,!0),e.measuredBox):Ua(d,r,e.layoutBox);const h=!hS(f);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:_}=v;if(g&&_){const M=cn();fu(M,e.layoutBox,g.layoutBox);const T=cn();fu(T,r,_.layoutBox),pS(M,T)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=M,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function r3(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function s3(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function o3(n){n.clearSnapshot()}function kx(n){n.clearMeasurements()}function Bx(n){n.isLayoutDirty=!1}function a3(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function zx(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function l3(n){n.resolveTargetDelta()}function c3(n){n.calcProjection()}function u3(n){n.resetSkewAndRotation()}function f3(n){n.removeLeadSnapshot()}function Vx(n,e,t){n.translate=Xt(e.translate,0,t),n.scale=Xt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Hx(n,e,t,r){n.min=Xt(e.min,t.min,r),n.max=Xt(e.max,t.max,r)}function d3(n,e,t,r){Hx(n.x,e.x,t.x,r),Hx(n.y,e.y,t.y,r)}function h3(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const p3={duration:.45,ease:[.4,0,.1,1]},Gx=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),Wx=Gx("applewebkit/")&&!Gx("chrome/")?Math.round:mi;function jx(n){n.min=Wx(n.min),n.max=Wx(n.max)}function m3(n){jx(n.x),jx(n.y)}function _S(n,e,t){return n==="position"||n==="preserve-aspect"&&!k2(Ix(e),Ix(t),.2)}function g3(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const v3=xS({attachResizeListener:(n,e)=>ja(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),$d={current:void 0},yS=xS({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!$d.current){const n=new v3({});n.mount(window),n.setOptions({layoutScroll:!0}),$d.current=n}return $d.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),dm=be.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function Xx(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function x3(...n){return e=>{let t=!1;const r=n.map(o=>{const a=Xx(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():Xx(n[o],null)}}}}function _3(...n){return be.useCallback(x3(...n),n)}class y3 extends be.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=t.offsetParent,o=hp(r)&&r.offsetWidth||0,a=hp(r)&&r.offsetHeight||0,c=this.props.sizeRef.current;c.height=t.offsetHeight||0,c.width=t.offsetWidth||0,c.top=t.offsetTop,c.left=t.offsetLeft,c.right=o-c.width-c.left,c.bottom=a-c.height-c.top}return null}componentDidUpdate(){}render(){return this.props.children}}function S3({children:n,isPresent:e,anchorX:t,anchorY:r,root:o,pop:a}){var g;const c=be.useId(),f=be.useRef(null),d=be.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:h}=be.useContext(dm),p=((g=n.props)==null?void 0:g.ref)??(n==null?void 0:n.ref),v=_3(f,p);return be.useInsertionEffect(()=>{const{width:_,height:M,top:T,left:y,right:S,bottom:w}=d.current;if(e||a===!1||!f.current||!_||!M)return;const b=t==="left"?`left: ${y}`:`right: ${S}`,R=r==="bottom"?`bottom: ${w}`:`top: ${T}`;f.current.dataset.motionPopId=c;const L=document.createElement("style");h&&(L.nonce=h);const I=o??document.head;return I.appendChild(L),L.sheet&&L.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${_}px !important;
            height: ${M}px !important;
            ${b}px !important;
            ${R}px !important;
          }
        `),()=>{I.contains(L)&&I.removeChild(L)}},[e]),V.jsx(y3,{isPresent:e,childRef:f,sizeRef:d,pop:a,children:a===!1?n:be.cloneElement(n,{ref:v})})}const M3=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c,anchorX:f,anchorY:d,root:h})=>{const p=Bp(E3),v=be.useId();let g=!0,_=be.useMemo(()=>(g=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:M=>{p.set(M,!0);for(const T of p.values())if(!T)return;r&&r()},register:M=>(p.set(M,!1),()=>p.delete(M))}),[t,p,r]);return a&&g&&(_={..._}),be.useMemo(()=>{p.forEach((M,T)=>p.set(T,!1))},[t]),be.useEffect(()=>{!t&&!p.size&&r&&r()},[t]),n=V.jsx(S3,{pop:c==="popLayout",isPresent:t,anchorX:f,anchorY:d,root:h,children:n}),V.jsx(vu.Provider,{value:_,children:n})};function E3(){return new Map}function SS(n=!0){const e=be.useContext(vu);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=be.useId();be.useEffect(()=>{if(n)return o(a)},[n]);const c=be.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const kc=n=>n.key||"";function Yx(n){const e=[];return be.Children.forEach(n,t=>{be.isValidElement(t)&&e.push(t)}),e}const MS=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:f="left",anchorY:d="top",root:h})=>{const[p,v]=SS(c),g=be.useMemo(()=>Yx(n),[n]),_=c&&!p?[]:g.map(kc),M=be.useRef(!0),T=be.useRef(g),y=Bp(()=>new Map),S=be.useRef(new Set),[w,b]=be.useState(g),[R,L]=be.useState(g);K_(()=>{M.current=!1,T.current=g;for(let E=0;E<R.length;E++){const D=kc(R[E]);_.includes(D)?(y.delete(D),S.current.delete(D)):y.get(D)!==!0&&y.set(D,!1)}},[R,_.length,_.join("-")]);const I=[];if(g!==w){let E=[...g];for(let D=0;D<R.length;D++){const Z=R[D],k=kc(Z);_.includes(k)||(E.splice(D,0,Z),I.push(Z))}return a==="wait"&&I.length&&(E=I),L(Yx(E)),b(g),null}const{forceRender:F}=be.useContext(kp);return V.jsx(V.Fragment,{children:R.map(E=>{const D=kc(E),Z=c&&!p?!1:g===R||_.includes(D),k=()=>{if(S.current.has(D))return;if(S.current.add(D),y.has(D))y.set(D,!0);else return;let Q=!0;y.forEach(ee=>{ee||(Q=!1)}),Q&&(F==null||F(),L(T.current),c&&(v==null||v()),r&&r())};return V.jsx(M3,{isPresent:Z,initial:!M.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:h,onExitComplete:Z?void 0:k,anchorX:f,anchorY:d,children:E},D)})})},ES=be.createContext({strict:!1}),qx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Kx=!1;function T3(){if(Kx)return;const n={};for(const e in qx)n[e]={isEnabled:t=>qx[e].some(r=>!!t[r])};Zy(n),Kx=!0}function TS(){return T3(),u2()}function w3(n){const e=TS();for(const t in n)e[t]={...e[t],...n[t]};Zy(e)}const A3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function du(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||A3.has(n)}let wS=n=>!du(n);function C3(n){typeof n=="function"&&(wS=e=>e.startsWith("on")?!du(e):n(e))}try{C3(require("@emotion/is-prop-valid").default)}catch{}function b3(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(wS(o)||t===!0&&du(o)||!e&&!du(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const yu=be.createContext({});function R3(n,e){if(_u(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Wa(t)?t:void 0,animate:Wa(r)?r:void 0}}return n.inherit!==!1?e:{}}function P3(n){const{initial:e,animate:t}=R3(n,be.useContext(yu));return be.useMemo(()=>({initial:e,animate:t}),[$x(e),$x(t)])}function $x(n){return Array.isArray(n)?n.join(" "):n}const hm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function AS(n,e,t){for(const r in e)!Cn(e[r])&&!rS(r,t)&&(n[r]=e[r])}function D3({transformTemplate:n},e){return be.useMemo(()=>{const t=hm();return um(t,e,n),Object.assign({},t.vars,t.style)},[e])}function L3(n,e){const t=n.style||{},r={};return AS(r,t,n),Object.assign(r,D3(n,e)),r}function I3(n,e){const t={},r=L3(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const CS=()=>({...hm(),attrs:{}});function N3(n,e,t,r){const o=be.useMemo(()=>{const a=CS();return sS(a,e,aS(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};AS(a,n.style,n),o.style={...a,...o.style}}return o}const F3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function pm(n){return typeof n!="string"||n.includes("-")?!1:!!(F3.indexOf(n)>-1||/[A-Z]/u.test(n))}function U3(n,e,t,{latestValues:r},o,a=!1,c){const d=(c??pm(n)?N3:I3)(e,r,o,n),h=b3(e,typeof n=="string",a),p=n!==be.Fragment?{...h,...d,ref:t}:{},{children:v}=e,g=be.useMemo(()=>Cn(v)?v.get():v,[v]);return be.createElement(n,{...p,children:g})}function O3({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:k3(t,r,o,n),renderState:e()}}function k3(n,e,t,r){const o={},a=r(n,{});for(const g in a)o[g]=$c(a[g]);let{initial:c,animate:f}=n;const d=_u(n),h=Ky(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),f===void 0&&(f=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?f:c;if(v&&typeof v!="boolean"&&!xu(v)){const g=Array.isArray(v)?v:[v];for(let _=0;_<g.length;_++){const M=nm(n,g[_]);if(M){const{transitionEnd:T,transition:y,...S}=M;for(const w in S){let b=S[w];if(Array.isArray(b)){const R=p?b.length-1:0;b=b[R]}b!==null&&(o[w]=b)}for(const w in T)o[w]=T[w]}}}return o}const bS=n=>(e,t)=>{const r=be.useContext(yu),o=be.useContext(vu),a=()=>O3(n,e,r,o);return t?a():Bp(a)},B3=bS({scrapeMotionValuesFromProps:fm,createRenderState:hm}),z3=bS({scrapeMotionValuesFromProps:lS,createRenderState:CS}),V3=Symbol.for("motionComponentSymbol");function H3(n,e,t){const r=be.useRef(t);be.useInsertionEffect(()=>{r.current=t});const o=be.useRef(null);return be.useCallback(a=>{var f;a&&((f=n.onMount)==null||f.call(n,a));const c=r.current;if(typeof c=="function")if(a){const d=c(a);typeof d=="function"&&(o.current=d)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a);e&&(a?e.mount(a):e.unmount())},[e])}const RS=be.createContext({});function _o(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function G3(n,e,t,r,o,a){var b,R;const{visualElement:c}=be.useContext(yu),f=be.useContext(ES),d=be.useContext(vu),h=be.useContext(dm),p=h.reducedMotion,v=h.skipAnimations,g=be.useRef(null),_=be.useRef(!1);r=r||f.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p,skipAnimations:v,isSVG:a}),_.current&&g.current&&(g.current.manuallyAnimateOnMount=!0));const M=g.current,T=be.useContext(RS);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&W3(g.current,t,o,T);const y=be.useRef(!1);be.useInsertionEffect(()=>{M&&y.current&&M.update(t,d)});const S=t[Uy],w=be.useRef(!!S&&typeof window<"u"&&!((b=window.MotionHandoffIsComplete)!=null&&b.call(window,S))&&((R=window.MotionHasOptimisedAnimation)==null?void 0:R.call(window,S)));return K_(()=>{_.current=!0,M&&(y.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),w.current&&M.animationState&&M.animationState.animateChanges())}),be.useEffect(()=>{M&&(!w.current&&M.animationState&&M.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{var L;(L=window.MotionHandoffMarkAsComplete)==null||L.call(window,S)}),w.current=!1),M.enteringChildren=void 0)}),M}function W3(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:f,layoutScroll:d,layoutRoot:h,layoutCrossfade:p}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:PS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||f&&_o(f),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:p,layoutScroll:d,layoutRoot:h})}function PS(n){if(n)return n.options.allowProjection!==!1?n.projection:PS(n.parent)}function Zd(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&w3(r);const a=t?t==="svg":pm(n),c=a?z3:B3;function f(h,p){let v;const g={...be.useContext(dm),...h,layoutId:j3(h)},{isStatic:_}=g,M=P3(h),T=c(h,_);if(!_&&typeof window<"u"){X3();const y=Y3(g);v=y.MeasureLayout,M.visualElement=G3(n,T,g,o,y.ProjectionNode,a)}return V.jsxs(yu.Provider,{value:M,children:[v&&M.visualElement?V.jsx(v,{visualElement:M.visualElement,...g}):null,U3(n,h,H3(T,M.visualElement,p),T,_,e,a)]})}f.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=be.forwardRef(f);return d[V3]=n,d}function j3({layoutId:n}){const e=be.useContext(kp).id;return e&&n!==void 0?e+"-"+n:n}function X3(n,e){be.useContext(ES).strict}function Y3(n){const e=TS(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function q3(n,e){if(typeof Proxy>"u")return Zd;const t=new Map,r=(a,c)=>Zd(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,Zd(c,void 0,n,e)),t.get(c))})}const K3=(n,e)=>e.isSVG??pm(n)?new C2(e):new S2(e,{allowProjection:n!==be.Fragment});class $3 extends es{constructor(e){super(e),e.animationState||(e.animationState=L2(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();xu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let Z3=0;class Q3 extends es{constructor(){super(...arguments),this.id=Z3++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const J3={animation:{Feature:$3},exit:{Feature:Q3}};function Ja(n){return{point:{x:n.pageX,y:n.pageY}}}const eD=n=>e=>om(e)&&n(e,Ja(e));function Oa(n,e,t,r){return ja(n,e,eD(t),r)}const DS=({current:n})=>n?n.ownerDocument.defaultView:null,Zx=(n,e)=>Math.abs(n-e);function tD(n,e){const t=Zx(n.x,e.x),r=Zx(n.y,e.y);return Math.sqrt(t**2+r**2)}const Qx=new Set(["auto","scroll"]);class LS{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=_=>{this.handleScroll(_.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=Jd(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,T=tD(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!T)return;const{point:y}=_,{timestamp:S}=xn;this.history.push({...y,timestamp:S});const{onStart:w,onMove:b}=this.handlers;M||(w&&w(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,_)},this.handlePointerMove=(_,M)=>{this.lastMoveEvent=_,this.lastMoveEventInfo=Qd(M,this.transformPagePoint),kt.update(this.updatePoint,!0)},this.handlePointerUp=(_,M)=>{this.end();const{onEnd:T,onSessionEnd:y,resumeAnimation:S}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Jd(_.type==="pointercancel"?this.lastMoveEventInfo:Qd(M,this.transformPagePoint),this.history);this.startEvent&&T&&T(_,w),y&&y(_,w)},!om(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const d=Ja(e),h=Qd(d,this.transformPagePoint),{point:p}=h,{timestamp:v}=xn;this.history=[{...p,timestamp:v}];const{onSessionStart:g}=t;g&&g(e,Jd(h,this.history)),this.removeListeners=$a(Oa(this.contextWindow,"pointermove",this.handlePointerMove),Oa(this.contextWindow,"pointerup",this.handlePointerUp),Oa(this.contextWindow,"pointercancel",this.handlePointerUp)),f&&this.startScrollTracking(f)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(Qx.has(r.overflowX)||Qx.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),kt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Jr(this.updatePoint)}}function Qd(n,e){return e?{point:e(n.point)}:n}function Jx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Jd({point:n},e){return{point:n,delta:Jx(n,IS(e)),offset:Jx(n,nD(e)),velocity:iD(e,.1)}}function nD(n){return n[0]}function IS(n){return n[n.length-1]}function iD(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=IS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>Di(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>Di(e)*2&&(r=n[1]);const a=pi(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function rD(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Xt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Xt(t,n,r.max):Math.min(n,t)),n}function e_(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function sD(n,{top:e,left:t,bottom:r,right:o}){return{x:e_(n.x,t,o),y:e_(n.y,e,r)}}function t_(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function oD(n,e){return{x:t_(n.x,e.x),y:t_(n.y,e.y)}}function aD(n,e){let t=.5;const r=Fn(n),o=Fn(e);return o>r?t=Va(e.min,e.max-r,n.min):r>o&&(t=Va(n.min,n.max-o,e.min)),Ki(0,1,t)}function lD(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const xp=.35;function cD(n=xp){return n===!1?n=0:n===!0&&(n=xp),{x:n_(n,"left","right"),y:n_(n,"top","bottom")}}function n_(n,e,t){return{min:i_(n,e),max:i_(n,t)}}function i_(n,e){return typeof n=="number"?n:n[e]||0}const uD=new WeakMap;class fD{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=cn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(Ja(v).point),this.stopAnimation()},c=(v,g)=>{const{drag:_,dragPropagation:M,onDragStart:T}=this.getProps();if(_&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=zP(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zi(S=>{let w=this.getAxisMotionValue(S).get()||0;if(Xi.test(w)){const{projection:b}=this.visualElement;if(b&&b.layout){const R=b.layout.layoutBox[S];R&&(w=Fn(R)*(parseFloat(w)/100))}}this.originPoint[S]=w}),T&&kt.update(()=>T(v,g),!1,!0),cp(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},f=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:_,dragDirectionLock:M,onDirectionLock:T,onDrag:y}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:S}=g;if(M&&this.currentDirection===null){this.currentDirection=hD(S),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),y&&kt.update(()=>y(v,g),!1,!0)},d=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new LS(e,{onSessionStart:a,onStart:c,onMove:f,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:r,contextWindow:DS(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:f}=this.getProps();f&&kt.postRender(()=>f(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Bc(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=rD(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&_o(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=sD(r.layoutBox,e):this.constraints=!1,this.elastic=cD(t),o!==this.constraints&&!_o(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&zi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=lD(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!_o(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=m2(r,o.root,this.visualElement.getTransformPagePoint());let c=oD(o.layout.layoutBox,a);if(t){const f=t(d2(c));this.hasMutatedConstraints=!!f,f&&(c=Jy(f))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:f}=this.getProps(),d=this.constraints||{},h=zi(p=>{if(!Bc(p,t,this.currentDirection))return;let v=d&&d[p]||{};c&&(v={min:0,max:0});const g=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:g,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(f)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return cp(this.visualElement,e),r.start(tm(e,r,0,t,this.visualElement,!1))}stopAnimation(){zi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){zi(t=>{const{drag:r}=this.getProps();if(!Bc(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:f}=o.layout.layoutBox[t],d=a.get()||0;a.set(e[t]-Xt(c,f,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!_o(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};zi(c=>{const f=this.getAxisMotionValue(c);if(f&&this.constraints!==!1){const d=f.get();o[c]=aD({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),zi(c=>{if(!Bc(c,e,null))return;const f=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];f.set(Xt(d,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;uD.set(this.visualElement,this);const e=this.visualElement.current,t=Oa(e,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps(),g=h.target,_=g!==e&&XP(g);p&&v&&!_&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();_o(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=dD(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),kt.read(o);const f=ja(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(zi(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())}));return()=>{f(),t(),c(),d&&d(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=xp,dragMomentum:f=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:f}}}function r_(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function dD(n,e,t){const r=ux(n,r_(t)),o=ux(e,r_(t));return()=>{r(),o()}}function Bc(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function hD(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class pD extends es{constructor(e){super(e),this.removeGroupControls=mi,this.removeListeners=mi,this.controls=new fD(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||mi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const eh=n=>(e,t)=>{n&&kt.update(()=>n(e,t),!1,!0)};class mD extends es{constructor(){super(...arguments),this.removePointerDownListener=mi}onPointerDown(e){this.session=new LS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:DS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:eh(e),onStart:eh(t),onMove:eh(r),onEnd:(a,c)=>{delete this.session,o&&kt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Oa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let th=!1;class gD extends be.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),th&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Zc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),th=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||kt.postRender(()=>{const f=c.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),sm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;th=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function NS(n){const[e,t]=SS(),r=be.useContext(kp);return V.jsx(gD,{...n,layoutGroup:r,switchLayoutGroup:be.useContext(RS),isPresent:e,safeToRemove:t})}const vD={pan:{Feature:mD},drag:{Feature:pD,ProjectionNode:yS,MeasureLayout:NS}};function s_(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&kt.postRender(()=>a(e,Ja(e)))}class xD extends es{mount(){const{current:e}=this.node;e&&(this.unmount=HP(e,(t,r)=>(s_(this.node,r,"Start"),o=>s_(this.node,o,"End"))))}unmount(){}}class _D extends es{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=$a(ja(this.node.current,"focus",()=>this.onFocus()),ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function o_(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&kt.postRender(()=>a(e,Ja(e)))}class yD extends es{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=qP(e,(o,a)=>(o_(this.node,a,"Start"),(c,{success:f})=>o_(this.node,c,f?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const _p=new WeakMap,nh=new WeakMap,SD=n=>{const e=_p.get(n.target);e&&e(n)},MD=n=>{n.forEach(SD)};function ED({root:n,...e}){const t=n||document;nh.has(t)||nh.set(t,{});const r=nh.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(MD,{root:n,...e})),r[o]}function TD(n,e,t){const r=ED(e);return _p.set(n,t),r.observe(n),()=>{_p.delete(n),r.unobserve(n)}}const wD={some:0,all:1};class AD extends es{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:wD[o]},f=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:v}=this.node.getProps(),g=h?p:v;g&&g(d)};return TD(this.node.current,c,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(CD(e,t))&&this.startObserver()}unmount(){}}function CD({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const bD={inView:{Feature:AD},tap:{Feature:yD},focus:{Feature:_D},hover:{Feature:xD}},RD={layout:{ProjectionNode:yS,MeasureLayout:NS}},PD={...J3,...bD,...vD,...RD},Kt=q3(PD,K3),a_=[{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Experience",href:"#jobs"},{label:"Contact",href:"#contact"}];function DD(){if(typeof window>"u")return!1;const n=localStorage.getItem("theme");return n?n==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}function l_(n){document.documentElement.classList.toggle("dark",n),localStorage.setItem("theme",n?"dark":"light")}function LD(){const[n,e]=be.useState(!1),[t,r]=be.useState(!1),[o,a]=be.useState(!1);be.useEffect(()=>{const d=DD();a(d),l_(d)},[]),be.useEffect(()=>{const d=()=>e(window.scrollY>24);return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]);const c=()=>{const d=!o;a(d),l_(d)},f=d=>{r(!1);const h=document.querySelector(d);h&&h.scrollIntoView({behavior:"smooth"})};return V.jsxs(Kt.header,{initial:{y:-56,opacity:0},animate:{y:0,opacity:1},transition:{duration:.55,ease:[.22,1,.36,1]},style:{position:"fixed",top:0,left:0,right:0,zIndex:100,backgroundColor:n?"var(--bg)":"transparent",backdropFilter:n?"blur(14px) saturate(180%)":"none",borderBottom:n?"1px solid var(--border)":"none",transition:"background-color 0.35s ease, backdrop-filter 0.35s ease, border 0.35s ease"},children:[V.jsxs("nav",{style:{maxWidth:"1120px",margin:"0 auto",padding:"0 2rem",height:"64px",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[V.jsxs("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{background:"none",border:"none",cursor:"pointer",padding:0,fontFamily:"var(--font-sans)",display:"flex",alignItems:"center",gap:"0.5rem"},children:[V.jsx("span",{style:{width:"32px",height:"32px",borderRadius:"8px",backgroundColor:"var(--fg-1)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--bg)",fontSize:"0.8rem",fontWeight:600,letterSpacing:"-0.02em",transition:"background-color 0.3s"},children:"HG"}),V.jsx("span",{style:{color:"var(--fg-1)",fontSize:"0.9rem",fontWeight:500,letterSpacing:"-0.01em",transition:"color 0.3s"},children:"Hugo González"})]}),V.jsxs("ul",{style:{display:"flex",gap:"0.25rem",listStyle:"none",margin:0,padding:0,alignItems:"center"},className:"nav-desktop",children:[a_.map((d,h)=>V.jsx("li",{children:V.jsx(Kt.button,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},transition:{delay:.08*h+.2},onClick:()=>f(d.href),style:{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontSize:"0.875rem",fontWeight:450,color:"var(--fg-3)",padding:"0.4rem 0.75rem",borderRadius:"6px",transition:"color 0.15s ease, background-color 0.15s ease",letterSpacing:"-0.01em"},onMouseEnter:p=>{p.currentTarget.style.color="var(--fg-1)",p.currentTarget.style.backgroundColor="var(--bg-code)"},onMouseLeave:p=>{p.currentTarget.style.color="var(--fg-3)",p.currentTarget.style.backgroundColor="transparent"},children:d.label})},d.href)),V.jsx("li",{children:V.jsx(Kt.button,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.45},onClick:c,title:o?"Switch to light mode":"Switch to dark mode",style:{background:"var(--fg)",border:"none",borderRadius:"8px",cursor:"pointer",width:"36px",height:"36px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",color:"var(--bg)",marginLeft:"0.25rem",transition:"all 0.2s ease"},onMouseEnter:d=>{d.currentTarget.style.opacity="0.85",d.currentTarget.style.transform="scale(1.05)"},onMouseLeave:d=>{d.currentTarget.style.opacity="1",d.currentTarget.style.transform="scale(1)"},children:o?"☀":"☾"})})]}),V.jsxs("div",{className:"nav-mobile-btn",style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[V.jsx("button",{onClick:c,style:{background:"var(--fg)",border:"none",borderRadius:"7px",cursor:"pointer",width:"34px",height:"34px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem",color:"var(--bg)",transition:"all 0.2s ease"},children:o?"☀":"☾"}),V.jsx("button",{onClick:()=>r(d=>!d),"aria-label":"Toggle menu",style:{background:"none",border:"1px solid var(--border)",borderRadius:"7px",cursor:"pointer",padding:"0.4rem 0.7rem",fontFamily:"var(--font-sans)",fontSize:"0.8rem",color:"var(--fg-3)"},children:t?"✕":"☰"})]})]}),V.jsx(MS,{children:t&&V.jsx(Kt.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},transition:{duration:.22},style:{backgroundColor:"var(--bg)",borderTop:"1px solid var(--border)",backdropFilter:"blur(14px)",overflow:"hidden"},children:V.jsx("ul",{style:{listStyle:"none",margin:0,padding:"0.75rem 2rem 1rem",display:"flex",flexDirection:"column",gap:"0.25rem"},children:a_.map(d=>V.jsx("li",{children:V.jsx("button",{onClick:()=>f(d.href),style:{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontSize:"0.95rem",fontWeight:400,color:"var(--fg-2)",padding:"0.6rem 0",width:"100%",textAlign:"left"},children:d.label})},d.href))})})})]})}function ID(){const[n,e]=be.useState(!0);return be.useEffect(()=>{const t=setInterval(()=>e(r=>!r),560);return()=>clearInterval(t)},[]),V.jsx("span",{style:{display:"inline-block",width:"2px",height:"0.9em",backgroundColor:"var(--accent)",marginLeft:"2px",verticalAlign:"middle",opacity:n?1:0,transition:"opacity 0.08s"}})}const yp=n=>{const e=document.querySelector(n);e&&e.scrollIntoView({behavior:"smooth"})};function ND(){return V.jsxs(Kt.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.6},onClick:()=>yp("#about"),style:{position:"absolute",bottom:"1rem",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.6rem",cursor:"pointer",userSelect:"none"},children:[V.jsx("div",{style:{width:"38px",height:"58px",border:"2px solid var(--border-2)",borderRadius:"20px",display:"flex",justifyContent:"center",paddingTop:"6px",position:"relative"},children:V.jsx("div",{style:{width:"4px",height:"8px",backgroundColor:"var(--accent)",borderRadius:"2px",animation:"scrollDot 1.6s ease-in-out infinite"}})}),V.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"0.68rem",letterSpacing:"0.12em",textTransform:"uppercase",color:"var(--fg-5)",fontWeight:500},children:"scroll"})]})}function FD(){return V.jsxs("section",{id:"hero",style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"8rem 2rem 6rem",maxWidth:"1120px",margin:"0 auto",position:"relative",zIndex:1},children:[V.jsxs(Kt.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.65,delay:.2,ease:[.22,1,.36,1]},style:{fontSize:"clamp(2.6rem, 6vw, 4.75rem)",fontWeight:700,color:"var(--fg)",letterSpacing:"-0.04em",lineHeight:1.1,margin:0,fontFamily:"var(--font-sans)",maxWidth:"16ch",transition:"color 0.3s"},children:["Hugo González",V.jsx("br",{}),V.jsx("span",{style:{color:"var(--fg-3)",fontWeight:600},children:"Pérez."})]}),V.jsxs(Kt.p,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.6,delay:.35},style:{fontSize:"clamp(1.1rem, 2.5vw, 1.4rem)",fontWeight:400,color:"var(--fg-2)",margin:"1.25rem 0 0",fontFamily:"var(--font-sans)",letterSpacing:"-0.02em",lineHeight:1.5,maxWidth:"560px",transition:"color 0.3s"},children:["Software Developer — Building modern, clean,",V.jsx("br",{className:"hero-br"}),"and maintainable web applications."]}),V.jsx(Kt.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.55},style:{marginTop:"1.75rem"},children:V.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"0",backgroundColor:"var(--bg-code)",border:"1px solid var(--border)",borderRadius:"6px",padding:"0.35rem 0.75rem",fontFamily:"var(--font-mono)",fontSize:"0.82rem",color:"var(--fg-3)",transition:"background-color 0.3s, border-color 0.3s"},children:[V.jsx("span",{style:{color:"var(--accent)",marginRight:"0.4rem"},children:"const"}),V.jsx("span",{style:{color:"var(--fg-1)"},children:"focus"}),V.jsx("span",{style:{color:"var(--fg-4)",margin:"0 0.3rem"},children:"="}),V.jsx("span",{style:{color:"#059669"},children:'"web development"'}),V.jsx(ID,{})]})}),V.jsxs(Kt.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.55,delay:.7},style:{display:"flex",gap:"0.75rem",marginTop:"2.5rem",flexWrap:"wrap"},children:[V.jsx(c_,{primary:!0,onClick:()=>yp("#projects"),children:"View my work"}),V.jsx(c_,{onClick:()=>yp("#contact"),children:"Get in touch"})]}),V.jsx(ND,{})]})}function c_({children:n,onClick:e,primary:t=!1}){const[r,o]=be.useState(!1);return V.jsx("button",{onClick:e,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{fontFamily:"var(--font-sans)",fontSize:"0.9rem",fontWeight:500,letterSpacing:"-0.01em",padding:"0.65rem 1.4rem",borderRadius:"9px",cursor:"pointer",border:t?"none":"1px solid var(--border)",backgroundColor:t?r?"var(--fg-3)":"var(--fg-1)":r?"var(--bg-code)":"var(--bg)",color:t?"var(--bg)":"var(--fg-2)",transition:"all 0.18s ease",transform:r?"translateY(-1px)":"none",boxShadow:t?r?"0 4px 16px rgba(0,0,0,0.18)":"0 2px 8px rgba(0,0,0,0.12)":r?"0 2px 8px rgba(0,0,0,0.07)":"0 1px 3px rgba(0,0,0,0.05)"},children:n})}const UD=["TypeScript","React","Next.js","Node.js","PostgreSQL","CSS / Tailwind","Git","Docker"];function Es({children:n,delay:e=0}){return V.jsx(Kt.div,{initial:{opacity:0,y:22},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.6,delay:e,ease:[.22,1,.36,1]},children:n})}function OD(){return V.jsxs("section",{id:"about",style:{padding:"7rem 2rem",maxWidth:"1120px",margin:"0 auto",position:"relative",zIndex:1},children:[V.jsx(Es,{children:V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"3.5rem"},children:[V.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem",color:"var(--fg-5)"},children:"02"}),V.jsx("div",{style:{width:"2rem",height:"1px",backgroundColor:"var(--border-2)"}}),V.jsx("h2",{style:{fontFamily:"var(--font-sans)",fontSize:"0.8rem",fontWeight:600,color:"var(--fg-4)",textTransform:"uppercase",letterSpacing:"0.1em",margin:0},children:"About me"})]})}),V.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"4rem",alignItems:"start"},children:[V.jsxs("div",{children:[V.jsx(Es,{delay:.05,children:V.jsxs("h3",{style:{fontFamily:"var(--font-sans)",fontSize:"clamp(1.6rem, 3.5vw, 2.25rem)",fontWeight:700,color:"var(--fg)",letterSpacing:"-0.03em",lineHeight:1.2,margin:"0 0 1.5rem"},children:["Passionate about",V.jsx("br",{}),V.jsx("span",{style:{color:"var(--accent)"},children:"crafting great"}),V.jsx("br",{}),"software."]})}),V.jsx(Es,{delay:.1,children:V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"1rem",lineHeight:1.75,color:"var(--fg-3)",margin:"0 0 1rem",maxWidth:"50ch",fontWeight:400},children:"I'm a software developer from Spain, focused on building clean, performant, and user-centric web applications. I care deeply about developer experience, accessibility, and writing code that's easy to maintain and a pleasure to work with."})}),V.jsx(Es,{delay:.15,children:V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"1rem",lineHeight:1.75,color:"var(--fg-3)",margin:"0 0 2rem",maxWidth:"50ch",fontWeight:400},children:"Currently looking for opportunities to work on meaningful projects with teams that value quality, clarity, and continuous improvement."})}),V.jsx(Es,{delay:.2,children:V.jsxs("div",{style:{display:"inline-flex",alignItems:"center",backgroundColor:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"8px",padding:"0.6rem 1rem",fontFamily:"var(--font-mono)",fontSize:"0.8rem"},children:[V.jsx("span",{style:{color:"var(--fg-5)",marginRight:"0.5rem"},children:"// "}),V.jsx("span",{style:{color:"var(--accent)"},children:"available"}),V.jsx("span",{style:{color:"var(--fg-4)",margin:"0 0.35rem"},children:":"}),V.jsx("span",{style:{color:"#059669"},children:"true"}),V.jsx("span",{style:{color:"var(--fg-5)",marginLeft:"0.5rem"},children:"| Spain 🇪🇸"})]})})]}),V.jsxs("div",{children:[V.jsx(Es,{delay:.1,children:V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"0.8rem",fontWeight:600,color:"var(--fg-5)",textTransform:"uppercase",letterSpacing:"0.1em",margin:"0 0 1.25rem"},children:"Technologies"})}),V.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem"},children:UD.map((n,e)=>V.jsx(Kt.span,{initial:{opacity:0,scale:.9},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{delay:.05*e+.15},whileHover:{scale:1.04,transition:{duration:.12}},style:{fontFamily:"var(--font-sans)",fontSize:"0.85rem",fontWeight:450,color:"var(--fg-2)",backgroundColor:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"7px",padding:"0.4rem 0.85rem",cursor:"default",boxShadow:"0 1px 2px rgba(0,0,0,0.04)",letterSpacing:"-0.01em"},children:n},n))}),V.jsx(Es,{delay:.3,children:V.jsx("div",{style:{marginTop:"2.5rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[{label:"Frontend Development",value:"React, Next.js, TypeScript"},{label:"Backend & APIs",value:"Node.js, REST, PostgreSQL"},{label:"Tooling & DevOps",value:"Git, Docker, CI/CD"}].map(n=>V.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.25rem",padding:"0.85rem 1rem",backgroundColor:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"10px",boxShadow:"0 1px 2px rgba(0,0,0,0.04)"},children:[V.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"0.85rem",fontWeight:600,color:"var(--fg-1)",letterSpacing:"-0.01em"},children:n.label}),V.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem",color:"var(--fg-4)"},children:n.value})]},n.label))})})]})]})]})}const kD=[{id:"devstack",title:"DevStack",description:"Full-stack productivity toolkit for developers. Includes a CLI tool and a web dashboard for managing projects, snippets, and environment configs across teams.",tech:["TypeScript","React","Node.js","SQLite"],github:"#",live:"#",year:"2025",featured:!0},{id:"flowdash",title:"FlowDash",description:"Real-time analytics dashboard with drag-and-drop widget layout, live charts, and WebSocket-powered data streams. Fully responsive.",tech:["React","Recharts","WebSockets","Tailwind"],github:"#",year:"2025",featured:!0},{id:"nodeapi",title:"NodeAPI Boilerplate",description:"Production-ready REST API starter with JWT auth, rate limiting, Zod validation, and full Jest test coverage. Used in 3 production services.",tech:["Node.js","Express","PostgreSQL","Jest"],github:"#",live:"#",year:"2024"},{id:"csslab",title:"CSS Lab",description:"A creative playground for advanced CSS experiments — scroll-driven animations, container queries, and visual demos with zero dependencies.",tech:["CSS","HTML","Vanilla JS"],github:"#",live:"#",year:"2024"}];function BD({project:n,index:e}){const[t,r]=be.useState(!1);return V.jsxs(Kt.article,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-40px"},transition:{duration:.55,delay:e*.08,ease:[.22,1,.36,1]},onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{backgroundColor:"var(--bg-card)",border:"1px solid",borderColor:t?"var(--border-2)":"var(--border)",borderRadius:"14px",padding:"1.75rem",display:"flex",flexDirection:"column",gap:"1rem",transition:"all 0.22s ease",boxShadow:t?"0 8px 30px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)":"0 1px 4px rgba(0,0,0,0.04)",transform:t?"translateY(-3px)":"none",cursor:"default",position:"relative",overflow:"hidden"},children:[V.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"2px",background:t?"linear-gradient(90deg, var(--accent), #8b5cf6)":"transparent",transition:"background 0.22s ease",borderRadius:"14px 14px 0 0"}}),V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"1rem"},children:[V.jsxs("h3",{style:{fontFamily:"var(--font-sans)",fontSize:"1.05rem",fontWeight:650,color:"var(--fg-1)",margin:0,letterSpacing:"-0.02em"},children:[n.title,n.featured&&V.jsx("span",{style:{marginLeft:"0.5rem",fontFamily:"var(--font-sans)",fontSize:"0.68rem",fontWeight:500,color:"var(--accent)",backgroundColor:"var(--accent-bg)",border:"1px solid var(--accent-br)",borderRadius:"4px",padding:"0.1rem 0.4rem",verticalAlign:"middle",letterSpacing:"0.02em"},children:"Featured"})]}),V.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"var(--fg-5)",flexShrink:0,paddingTop:"0.15rem"},children:n.year})]}),V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"0.9rem",lineHeight:1.65,color:"var(--fg-3)",margin:0,flex:1,fontWeight:400},children:n.description}),V.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.35rem"},children:n.tech.map(o=>V.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.72rem",color:"var(--fg-3)",backgroundColor:"var(--bg-code)",border:"1px solid var(--border)",borderRadius:"5px",padding:"0.2rem 0.55rem"},children:o},o))}),V.jsxs("div",{style:{display:"flex",gap:"0.75rem",paddingTop:"0.25rem",borderTop:"1px solid var(--border)"},children:[n.github&&V.jsx(u_,{href:n.github,children:"GitHub →"}),n.live&&V.jsx(u_,{href:n.live,accent:!0,children:"Live demo →"})]})]})}function u_({children:n,href:e,accent:t=!1}){const[r,o]=be.useState(!1);return V.jsx("a",{href:e,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{fontFamily:"var(--font-sans)",fontSize:"0.82rem",fontWeight:500,color:r?t?"var(--accent-2)":"var(--fg-1)":t?"var(--accent)":"var(--fg-4)",textDecoration:"none",letterSpacing:"-0.01em",transition:"color 0.15s ease"},children:n})}function zD(){return V.jsx("section",{id:"projects",style:{padding:"7rem 2rem",backgroundColor:"var(--bg-muted)",position:"relative",zIndex:1},children:V.jsxs("div",{style:{maxWidth:"1120px",margin:"0 auto"},children:[V.jsxs(Kt.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},style:{marginBottom:"3.5rem"},children:[V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.25rem"},children:[V.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem",color:"var(--fg-5)"},children:"03"}),V.jsx("div",{style:{width:"2rem",height:"1px",backgroundColor:"var(--border-2)"}}),V.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"0.8rem",fontWeight:600,color:"var(--fg-4)",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Projects"})]}),V.jsx("h2",{style:{fontFamily:"var(--font-sans)",fontSize:"clamp(1.75rem, 4vw, 2.5rem)",fontWeight:700,color:"var(--fg)",letterSpacing:"-0.035em",margin:0,lineHeight:1.15},children:"Things I've built."}),V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"1rem",color:"var(--fg-4)",margin:"0.75rem 0 0",maxWidth:"55ch",lineHeight:1.6,fontWeight:400},children:"A selection of personal projects — from productivity tools to creative experiments."})]}),V.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:"1.25rem"},children:kD.map((n,e)=>V.jsx(BD,{project:n,index:e},n.id))})]})})}const f_=[{id:"job-1",company:"Tech Innovators",role:"Senior Full Stack Developer",period:"2023 — Present",description:"Leading the development of a scalable cloud-based platform. Mentoring junior developers and implementing best practices for CI/CD and automated testing.",skills:["React","Node.js","AWS","TypeScript"]},{id:"job-2",company:"Digital Solutions",role:"Frontend Developer",period:"2021 — 2023",description:"Developed and maintained complex user interfaces for various clients. Optimized website performance and improved accessibility standards.",skills:["React","Next.js","Tailwind","Redux"]},{id:"job-3",company:"Startup Hub",role:"Junior Web Developer",period:"2019 — 2021",description:"Worked on a fast-paced environment building MVPs for early-stage startups. Gained extensive experience in modern web technologies.",skills:["JavaScript","HTML/CSS","Firebase","Sass"]}];function VD({job:n,index:e,isLast:t}){const[r,o]=be.useState(!1);return V.jsxs("div",{style:{display:"flex",gap:"2rem",position:"relative"},onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),children:[V.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flexShrink:0,position:"relative",width:"12px"},children:[V.jsx(Kt.div,{animate:{scale:r?1.4:1,backgroundColor:r?"var(--accent)":"var(--border-2)",boxShadow:r?"0 0 12px var(--accent)":"none"},transition:{duration:.2},style:{width:"12px",height:"12px",borderRadius:"50%",zIndex:2,marginTop:"0.4rem",border:"2px solid var(--bg)"}}),!t&&V.jsx("div",{style:{flex:1,width:"2px",backgroundColor:"var(--border)",position:"absolute",top:"12px",bottom:"-2rem",left:"50%",transform:"translateX(-50%)",zIndex:1}})]}),V.jsxs(Kt.div,{initial:{opacity:0,x:10},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.5,delay:e*.1},style:{paddingBottom:"3.5rem",flex:1},children:[V.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",flexWrap:"wrap",gap:"0.5rem"},children:[V.jsx("h3",{style:{fontFamily:"var(--font-sans)",fontSize:"1.15rem",fontWeight:600,color:"var(--fg-1)",margin:0,cursor:"default"},children:n.company}),V.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:"var(--fg-5)",fontWeight:500},children:n.period})]}),V.jsx(MS,{children:r?V.jsx(Kt.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:[.22,1,.36,1]},style:{overflow:"hidden"},children:V.jsxs("div",{style:{paddingTop:"0.75rem"},children:[V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"1rem",fontWeight:500,color:"var(--accent)",margin:"0 0 0.5rem"},children:n.role}),V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"0.9rem",lineHeight:1.6,color:"var(--fg-4)",margin:"0 0 1rem",maxWidth:"60ch"},children:n.description}),V.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:n.skills.map(a=>V.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"0.72rem",fontWeight:500,color:"var(--fg-3)",backgroundColor:"var(--bg-code)",border:"1px solid var(--border)",borderRadius:"5px",padding:"0.2rem 0.5rem"},children:a},a))})]})}):V.jsx(Kt.p,{initial:{opacity:0},animate:{opacity:1},style:{fontFamily:"var(--font-sans)",fontSize:"0.95rem",color:"var(--fg-4)",margin:"0.25rem 0 0"},children:n.role})})]})]})}function HD(){return V.jsxs("section",{id:"jobs",style:{padding:"7rem 2rem",maxWidth:"1120px",margin:"0 auto",position:"relative",zIndex:1},children:[V.jsxs(Kt.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},style:{marginBottom:"4.5rem"},children:[V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.25rem"},children:[V.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem",color:"var(--fg-5)"},children:"04"}),V.jsx("div",{style:{width:"2rem",height:"1px",backgroundColor:"var(--border-2)"}}),V.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"0.8rem",fontWeight:600,color:"var(--fg-4)",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Experience"})]}),V.jsx("h2",{style:{fontFamily:"var(--font-sans)",fontSize:"clamp(1.75rem, 4vw, 2.5rem)",fontWeight:700,color:"var(--fg)",letterSpacing:"-0.035em",margin:0,lineHeight:1.15},children:"Work history."})]}),V.jsx("div",{style:{maxWidth:"800px"},children:f_.map((n,e)=>V.jsx(VD,{job:n,index:e,isLast:e===f_.length-1},n.id))})]})}const GD=[{key:"email",label:"Email",value:"hgonper03@gmail.com",href:"mailto:hgonper03@gmail.com",icon:"✉"},{key:"github",label:"GitHub",value:"github.com/hugogonzalezperez",href:"https://github.com",icon:"◈"},{key:"linkedin",label:"LinkedIn",value:"linkedin.com/in/hugogonzalezperez",href:"https://linkedin.com",icon:"◉"}];function WD({icon:n,label:e,value:t,href:r,index:o}){const[a,c]=be.useState(!1);return V.jsxs(Kt.a,{href:r,target:r.startsWith("http")?"_blank":void 0,rel:"noopener noreferrer",initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.45,delay:o*.08},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1.1rem 1.25rem",backgroundColor:a?"var(--bg-card)":"var(--bg-muted)",border:"1px solid",borderColor:a?"var(--border-2)":"var(--border)",borderRadius:"12px",textDecoration:"none",transition:"all 0.2s ease",boxShadow:a?"0 4px 16px rgba(0,0,0,0.08)":"0 1px 3px rgba(0,0,0,0.04)",transform:a?"translateY(-1px)":"none"},children:[V.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"9px",backgroundColor:a?"var(--accent-bg)":"var(--bg-code)",border:"1px solid",borderColor:a?"var(--accent-br)":"var(--border)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem",flexShrink:0,transition:"all 0.2s ease",color:a?"var(--accent)":"var(--fg-4)"},children:n}),V.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.15rem",overflow:"hidden"},children:[V.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"0.78rem",fontWeight:600,color:"var(--fg-5)",textTransform:"uppercase",letterSpacing:"0.08em"},children:e}),V.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.8rem",color:a?"var(--fg-1)":"var(--fg-2)",transition:"color 0.15s",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:t})]}),V.jsx("span",{style:{marginLeft:"auto",color:a?"var(--accent)":"var(--border-2)",fontSize:"0.9rem",flexShrink:0,transition:"color 0.15s, transform 0.15s",transform:a?"translateX(2px)":"none",display:"inline-block"},children:"→"})]})}function jD(){const[n,e]=be.useState(!1),t=()=>{navigator.clipboard.writeText("hello@hugogonzalezperez.es").then(()=>{e(!0),setTimeout(()=>e(!1),2200)})};return V.jsx("section",{id:"contact",style:{padding:"7rem 2rem 8rem",backgroundColor:"var(--bg-muted)",position:"relative",zIndex:1},children:V.jsxs("div",{style:{maxWidth:"1120px",margin:"0 auto"},children:[V.jsxs(Kt.div,{initial:{opacity:0,y:16},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5},style:{marginBottom:"4rem"},children:[V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1.25rem"},children:[V.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.75rem",color:"var(--fg-5)"},children:"05"}),V.jsx("div",{style:{width:"2rem",height:"1px",backgroundColor:"var(--border-2)"}}),V.jsx("span",{style:{fontFamily:"var(--font-sans)",fontSize:"0.8rem",fontWeight:600,color:"var(--fg-4)",textTransform:"uppercase",letterSpacing:"0.1em"},children:"Contact"})]}),V.jsx("h2",{style:{fontFamily:"var(--font-sans)",fontSize:"clamp(1.75rem, 4vw, 2.5rem)",fontWeight:700,color:"var(--fg)",letterSpacing:"-0.035em",margin:0,lineHeight:1.15},children:"Let's work together."}),V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"1rem",color:"var(--fg-4)",margin:"0.75rem 0 0",maxWidth:"50ch",lineHeight:1.65,fontWeight:400},children:"Open to new projects, freelance work, and full-time opportunities. Whether you have an idea or just want to say hello — I'd love to hear from you."})]}),V.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"3rem",alignItems:"start"},children:[V.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:GD.map((r,o)=>{const{key:a,...c}=r;return V.jsx(WD,{...c,index:o},a)})}),V.jsxs(Kt.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.5,delay:.15},style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[V.jsxs("div",{style:{backgroundColor:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"14px",padding:"2rem",boxShadow:"0 1px 4px rgba(0,0,0,0.04)"},children:[V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"1.1rem",fontWeight:600,color:"var(--fg-1)",letterSpacing:"-0.02em",margin:"0 0 0.5rem",lineHeight:1.4},children:"Ready to connect?"}),V.jsx("p",{style:{fontFamily:"var(--font-sans)",fontSize:"0.9rem",color:"var(--fg-4)",margin:"0 0 1.5rem",lineHeight:1.6},children:"The best way to reach me is by email. I typically reply within 24 hours."}),V.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[V.jsx("a",{href:"mailto:hello@hugogonzalezperez.es",style:{fontFamily:"var(--font-sans)",fontSize:"0.88rem",fontWeight:500,color:"var(--bg)",backgroundColor:"var(--fg-1)",border:"none",borderRadius:"8px",padding:"0.6rem 1.25rem",textDecoration:"none",cursor:"pointer",letterSpacing:"-0.01em",transition:"opacity 0.15s ease",display:"inline-block"},onMouseEnter:r=>r.currentTarget.style.opacity="0.85",onMouseLeave:r=>r.currentTarget.style.opacity="1",children:"Send email"}),V.jsx("button",{onClick:t,style:{fontFamily:"var(--font-sans)",fontSize:"0.88rem",fontWeight:500,color:n?"#059669":"var(--fg-3)",backgroundColor:n?"var(--green-bg)":"var(--bg-card)",border:"1px solid",borderColor:n?"var(--green-br)":"var(--border)",borderRadius:"8px",padding:"0.6rem 1.25rem",cursor:"pointer",letterSpacing:"-0.01em",transition:"all 0.2s ease"},children:n?"✓ Copied!":"Copy email"})]})]}),V.jsx("div",{style:{backgroundColor:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:"12px",padding:"1.25rem 1.5rem",boxShadow:"0 1px 4px rgba(0,0,0,0.03)"},children:V.jsxs("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.78rem",lineHeight:1.9,color:"var(--fg-5)"},children:[V.jsx("div",{children:V.jsx("span",{style:{color:"var(--border-2)"},children:"{"})}),V.jsxs("div",{style:{paddingLeft:"1.25rem"},children:[V.jsx("span",{style:{color:"var(--accent)"},children:"available"}),V.jsx("span",{style:{color:"var(--border-2)"},children:": "}),V.jsx("span",{style:{color:"#059669"},children:"true"}),V.jsx("span",{style:{color:"var(--border-2)"},children:","})]}),V.jsxs("div",{style:{paddingLeft:"1.25rem"},children:[V.jsx("span",{style:{color:"var(--accent)"},children:"location"}),V.jsx("span",{style:{color:"var(--border-2)"},children:": "}),V.jsx("span",{style:{color:"#d97706"},children:'"Tenerife, Spain"'}),V.jsx("span",{style:{color:"var(--border-2)"},children:","})]}),V.jsxs("div",{style:{paddingLeft:"1.25rem"},children:[V.jsx("span",{style:{color:"var(--accent)"},children:"response"}),V.jsx("span",{style:{color:"var(--border-2)"},children:": "}),V.jsx("span",{style:{color:"#d97706"},children:'"< 24h"'}),V.jsx("span",{style:{color:"var(--border-2)"},children:","})]}),V.jsxs("div",{style:{paddingLeft:"1.25rem"},children:[V.jsx("span",{style:{color:"var(--accent)"},children:"preferred"}),V.jsx("span",{style:{color:"var(--border-2)"},children:": "}),V.jsx("span",{style:{color:"#d97706"},children:'"TypeScript"'})]}),V.jsx("div",{children:V.jsx("span",{style:{color:"var(--border-2)"},children:"}"})})]})})]})]})]})})}const XD=[{label:"GitHub",href:"https://github.com"},{label:"LinkedIn",href:"https://linkedin.com"},{label:"Email",href:"mailto:hello@hugogonzalezperez.es"}];function YD(){const n=new Date().getFullYear();return V.jsx(Kt.footer,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},style:{borderTop:"1px solid var(--border)",backgroundColor:"var(--bg)",padding:"2rem",position:"relative",zIndex:1},children:V.jsxs("div",{style:{maxWidth:"1120px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"1rem"},children:[V.jsxs("div",{style:{fontFamily:"var(--font-sans)",fontSize:"0.8rem",color:"var(--fg-5)",display:"flex",alignItems:"center",gap:"0.6rem"},children:[V.jsxs("span",{children:["© ",n," Hugo González Pérez"]}),V.jsx("span",{style:{color:"var(--border-2)"},children:"·"}),V.jsx("a",{href:"https://hugogonzalezperez.es",style:{color:"var(--fg-4)",textDecoration:"none",fontFamily:"var(--font-mono)",fontSize:"0.75rem"},children:"hugogonzalezperez.es"})]}),V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.25rem"},children:[XD.map(e=>V.jsx("a",{href:e.href,target:e.href.startsWith("http")?"_blank":void 0,rel:"noopener noreferrer",style:{fontFamily:"var(--font-sans)",fontSize:"0.8rem",color:"var(--fg-5)",textDecoration:"none",padding:"0.3rem 0.6rem",borderRadius:"5px",transition:"color 0.15s ease, background-color 0.15s ease"},onMouseEnter:t=>{t.currentTarget.style.color="var(--fg-2)",t.currentTarget.style.backgroundColor="var(--bg-code)"},onMouseLeave:t=>{t.currentTarget.style.color="var(--fg-5)",t.currentTarget.style.backgroundColor="transparent"},children:e.label},e.href)),V.jsx("span",{style:{color:"var(--border)",padding:"0 0.25rem"},children:"·"}),V.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-sans)",fontSize:"0.8rem",color:"var(--fg-5)",padding:"0.3rem 0.6rem",borderRadius:"5px",transition:"color 0.15s, background 0.15s"},onMouseEnter:e=>{e.currentTarget.style.color="var(--fg-2)",e.currentTarget.style.backgroundColor="var(--bg-code)"},onMouseLeave:e=>{e.currentTarget.style.color="var(--fg-5)",e.currentTarget.style.backgroundColor="transparent"},children:"↑ Top"})]})]})})}function qD(){return V.jsxs(V.Fragment,{children:[V.jsx(Ub,{}),V.jsx(LD,{}),V.jsxs("main",{children:[V.jsx(FD,{}),V.jsx(OD,{}),V.jsx(zD,{}),V.jsx(HD,{}),V.jsx(jD,{})]}),V.jsx(YD,{})]})}SE.createRoot(document.getElementById("root")).render(V.jsx(qD,{}));
