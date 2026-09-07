"use strict";var ih=Object.create;var tn=Object.defineProperty;var nh=Object.getOwnPropertyDescriptor;var ah=Object.getOwnPropertyNames;var sh=Object.getPrototypeOf,oh=Object.prototype.hasOwnProperty;var O=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),dh=(e,t)=>{for(var r in t)tn(e,r,{get:t[r],enumerable:!0})},Vo=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of ah(t))!oh.call(e,s)&&s!==r&&tn(e,s,{get:()=>t[s],enumerable:!(i=nh(t,s))||i.enumerable});return e};var me=(e,t,r)=>(r=e!=null?ih(sh(e)):{},Vo(t||!e||!e.__esModule?tn(r,"default",{value:e,enumerable:!0}):r,e)),lh=e=>Vo(tn({},"__esModule",{value:!0}),e);var ti=O((V0,ya)=>{"use strict";typeof process>"u"||!process.version||process.version.indexOf("v0.")===0||process.version.indexOf("v1.")===0&&process.version.indexOf("v1.8.")!==0?ya.exports={nextTick:ch}:ya.exports=process;function ch(e,t,r,i){if(typeof e!="function")throw new TypeError('"callback" argument must be a function');var s=arguments.length,a,l;switch(s){case 0:case 1:return process.nextTick(e);case 2:return process.nextTick(function(){e.call(null,t)});case 3:return process.nextTick(function(){e.call(null,t,r)});case 4:return process.nextTick(function(){e.call(null,t,r,i)});default:for(a=new Array(s-1),l=0;l<a.length;)a[l++]=arguments[l];return process.nextTick(function(){e.apply(null,a)})}}});var Xo=O((Y0,Yo)=>{var uh={}.toString;Yo.exports=Array.isArray||function(e){return uh.call(e)=="[object Array]"}});var xa=O((X0,Go)=>{Go.exports=require("stream")});var ri=O((wa,Qo)=>{var rn=require("buffer"),dt=rn.Buffer;function Ko(e,t){for(var r in e)t[r]=e[r]}dt.from&&dt.alloc&&dt.allocUnsafe&&dt.allocUnsafeSlow?Qo.exports=rn:(Ko(rn,wa),wa.Buffer=gr);function gr(e,t,r){return dt(e,t,r)}Ko(dt,gr);gr.from=function(e,t,r){if(typeof e=="number")throw new TypeError("Argument must not be a number");return dt(e,t,r)};gr.alloc=function(e,t,r){if(typeof e!="number")throw new TypeError("Argument must be a number");var i=dt(e);return t!==void 0?typeof r=="string"?i.fill(t,r):i.fill(t):i.fill(0),i};gr.allocUnsafe=function(e){if(typeof e!="number")throw new TypeError("Argument must be a number");return dt(e)};gr.allocUnsafeSlow=function(e){if(typeof e!="number")throw new TypeError("Argument must be a number");return rn.SlowBuffer(e)}});var br=O(be=>{function fh(e){return Array.isArray?Array.isArray(e):nn(e)==="[object Array]"}be.isArray=fh;function hh(e){return typeof e=="boolean"}be.isBoolean=hh;function ph(e){return e===null}be.isNull=ph;function mh(e){return e==null}be.isNullOrUndefined=mh;function vh(e){return typeof e=="number"}be.isNumber=vh;function gh(e){return typeof e=="string"}be.isString=gh;function bh(e){return typeof e=="symbol"}be.isSymbol=bh;function yh(e){return e===void 0}be.isUndefined=yh;function xh(e){return nn(e)==="[object RegExp]"}be.isRegExp=xh;function wh(e){return typeof e=="object"&&e!==null}be.isObject=wh;function _h(e){return nn(e)==="[object Date]"}be.isDate=_h;function kh(e){return nn(e)==="[object Error]"||e instanceof Error}be.isError=kh;function Sh(e){return typeof e=="function"}be.isFunction=Sh;function Eh(e){return e===null||typeof e=="boolean"||typeof e=="number"||typeof e=="string"||typeof e=="symbol"||typeof e>"u"}be.isPrimitive=Eh;be.isBuffer=require("buffer").Buffer.isBuffer;function nn(e){return Object.prototype.toString.call(e)}});var Jo=O((K0,_a)=>{typeof Object.create=="function"?_a.exports=function(t,r){r&&(t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:_a.exports=function(t,r){if(r){t.super_=r;var i=function(){};i.prototype=r.prototype,t.prototype=new i,t.prototype.constructor=t}}});var yr=O((Q0,Sa)=>{try{if(ka=require("util"),typeof ka.inherits!="function")throw"";Sa.exports=ka.inherits}catch{Sa.exports=Jo()}var ka});var td=O((J0,Ea)=>{"use strict";function Ch(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var ed=ri().Buffer,ii=require("util");function Th(e,t,r){e.copy(t,r)}Ea.exports=(function(){function e(){Ch(this,e),this.head=null,this.tail=null,this.length=0}return e.prototype.push=function(r){var i={data:r,next:null};this.length>0?this.tail.next=i:this.head=i,this.tail=i,++this.length},e.prototype.unshift=function(r){var i={data:r,next:this.head};this.length===0&&(this.tail=i),this.head=i,++this.length},e.prototype.shift=function(){if(this.length!==0){var r=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,r}},e.prototype.clear=function(){this.head=this.tail=null,this.length=0},e.prototype.join=function(r){if(this.length===0)return"";for(var i=this.head,s=""+i.data;i=i.next;)s+=r+i.data;return s},e.prototype.concat=function(r){if(this.length===0)return ed.alloc(0);for(var i=ed.allocUnsafe(r>>>0),s=this.head,a=0;s;)Th(s.data,i,a),a+=s.data.length,s=s.next;return i},e})();ii&&ii.inspect&&ii.inspect.custom&&(Ea.exports.prototype[ii.inspect.custom]=function(){var e=ii.inspect({length:this.length});return this.constructor.name+" "+e})});var Ca=O((eg,rd)=>{"use strict";var an=ti();function Ah(e,t){var r=this,i=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed;return i||s?(t?t(e):e&&(this._writableState?this._writableState.errorEmitted||(this._writableState.errorEmitted=!0,an.nextTick(sn,this,e)):an.nextTick(sn,this,e)),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(e||null,function(a){!t&&a?r._writableState?r._writableState.errorEmitted||(r._writableState.errorEmitted=!0,an.nextTick(sn,r,a)):an.nextTick(sn,r,a):t&&t(a)}),this)}function Ih(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finalCalled=!1,this._writableState.prefinished=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}function sn(e,t){e.emit("error",t)}rd.exports={destroy:Ah,undestroy:Ih}});var nd=O((tg,id)=>{id.exports=require("util").deprecate});var Aa=O((rg,fd)=>{"use strict";var Yt=ti();fd.exports=le;function sd(e){var t=this;this.next=null,this.entry=null,this.finish=function(){Vh(t,e)}}var Dh=!process.browser&&["v0.10","v0.9."].indexOf(process.version.slice(0,5))>-1?setImmediate:Yt.nextTick,xr;le.WritableState=ai;var od=Object.create(br());od.inherits=yr();var Bh={deprecate:nd()},dd=xa(),dn=ri().Buffer,Rh=(typeof global<"u"?global:typeof window<"u"?window:typeof self<"u"?self:{}).Uint8Array||function(){};function Lh(e){return dn.from(e)}function Mh(e){return dn.isBuffer(e)||e instanceof Rh}var ld=Ca();od.inherits(le,dd);function Oh(){}function ai(e,t){xr=xr||Xt(),e=e||{};var r=t instanceof xr;this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.writableObjectMode);var i=e.highWaterMark,s=e.writableHighWaterMark,a=this.objectMode?16:16*1024;i||i===0?this.highWaterMark=i:r&&(s||s===0)?this.highWaterMark=s:this.highWaterMark=a,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var l=e.decodeStrings===!1;this.decodeStrings=!l,this.defaultEncoding=e.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(c){Wh(t,c)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new sd(this)}ai.prototype.getBuffer=function(){for(var t=this.bufferedRequest,r=[];t;)r.push(t),t=t.next;return r};(function(){try{Object.defineProperty(ai.prototype,"buffer",{get:Bh.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch{}})();var on;typeof Symbol=="function"&&Symbol.hasInstance&&typeof Function.prototype[Symbol.hasInstance]=="function"?(on=Function.prototype[Symbol.hasInstance],Object.defineProperty(le,Symbol.hasInstance,{value:function(e){return on.call(this,e)?!0:this!==le?!1:e&&e._writableState instanceof ai}})):on=function(e){return e instanceof this};function le(e){if(xr=xr||Xt(),!on.call(le,this)&&!(this instanceof xr))return new le(e);this._writableState=new ai(e,this),this.writable=!0,e&&(typeof e.write=="function"&&(this._write=e.write),typeof e.writev=="function"&&(this._writev=e.writev),typeof e.destroy=="function"&&(this._destroy=e.destroy),typeof e.final=="function"&&(this._final=e.final)),dd.call(this)}le.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))};function Ph(e,t){var r=new Error("write after end");e.emit("error",r),Yt.nextTick(t,r)}function Nh(e,t,r,i){var s=!0,a=!1;return r===null?a=new TypeError("May not write null values to stream"):typeof r!="string"&&r!==void 0&&!t.objectMode&&(a=new TypeError("Invalid non-string/buffer chunk")),a&&(e.emit("error",a),Yt.nextTick(i,a),s=!1),s}le.prototype.write=function(e,t,r){var i=this._writableState,s=!1,a=!i.objectMode&&Mh(e);return a&&!dn.isBuffer(e)&&(e=Lh(e)),typeof t=="function"&&(r=t,t=null),a?t="buffer":t||(t=i.defaultEncoding),typeof r!="function"&&(r=Oh),i.ended?Ph(this,r):(a||Nh(this,i,e,r))&&(i.pendingcb++,s=zh(this,i,a,e,t,r)),s};le.prototype.cork=function(){var e=this._writableState;e.corked++};le.prototype.uncork=function(){var e=this._writableState;e.corked&&(e.corked--,!e.writing&&!e.corked&&!e.bufferProcessing&&e.bufferedRequest&&cd(this,e))};le.prototype.setDefaultEncoding=function(t){if(typeof t=="string"&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t);return this._writableState.defaultEncoding=t,this};function Fh(e,t,r){return!e.objectMode&&e.decodeStrings!==!1&&typeof t=="string"&&(t=dn.from(t,r)),t}Object.defineProperty(le.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function zh(e,t,r,i,s,a){if(!r){var l=Fh(t,i,s);i!==l&&(r=!0,s="buffer",i=l)}var c=t.objectMode?1:i.length;t.length+=c;var m=t.length<t.highWaterMark;if(m||(t.needDrain=!0),t.writing||t.corked){var f=t.lastBufferedRequest;t.lastBufferedRequest={chunk:i,encoding:s,isBuf:r,callback:a,next:null},f?f.next=t.lastBufferedRequest:t.bufferedRequest=t.lastBufferedRequest,t.bufferedRequestCount+=1}else Ta(e,t,!1,c,i,s,a);return m}function Ta(e,t,r,i,s,a,l){t.writelen=i,t.writecb=l,t.writing=!0,t.sync=!0,r?e._writev(s,t.onwrite):e._write(s,a,t.onwrite),t.sync=!1}function qh(e,t,r,i,s){--t.pendingcb,r?(Yt.nextTick(s,i),Yt.nextTick(ni,e,t),e._writableState.errorEmitted=!0,e.emit("error",i)):(s(i),e._writableState.errorEmitted=!0,e.emit("error",i),ni(e,t))}function Uh(e){e.writing=!1,e.writecb=null,e.length-=e.writelen,e.writelen=0}function Wh(e,t){var r=e._writableState,i=r.sync,s=r.writecb;if(Uh(r),t)qh(e,r,i,t,s);else{var a=ud(r);!a&&!r.corked&&!r.bufferProcessing&&r.bufferedRequest&&cd(e,r),i?Dh(ad,e,r,a,s):ad(e,r,a,s)}}function ad(e,t,r,i){r||jh(e,t),t.pendingcb--,i(),ni(e,t)}function jh(e,t){t.length===0&&t.needDrain&&(t.needDrain=!1,e.emit("drain"))}function cd(e,t){t.bufferProcessing=!0;var r=t.bufferedRequest;if(e._writev&&r&&r.next){var i=t.bufferedRequestCount,s=new Array(i),a=t.corkedRequestsFree;a.entry=r;for(var l=0,c=!0;r;)s[l]=r,r.isBuf||(c=!1),r=r.next,l+=1;s.allBuffers=c,Ta(e,t,!0,t.length,s,"",a.finish),t.pendingcb++,t.lastBufferedRequest=null,a.next?(t.corkedRequestsFree=a.next,a.next=null):t.corkedRequestsFree=new sd(t),t.bufferedRequestCount=0}else{for(;r;){var m=r.chunk,f=r.encoding,h=r.callback,S=t.objectMode?1:m.length;if(Ta(e,t,!1,S,m,f,h),r=r.next,t.bufferedRequestCount--,t.writing)break}r===null&&(t.lastBufferedRequest=null)}t.bufferedRequest=r,t.bufferProcessing=!1}le.prototype._write=function(e,t,r){r(new Error("_write() is not implemented"))};le.prototype._writev=null;le.prototype.end=function(e,t,r){var i=this._writableState;typeof e=="function"?(r=e,e=null,t=null):typeof t=="function"&&(r=t,t=null),e!=null&&this.write(e,t),i.corked&&(i.corked=1,this.uncork()),i.ending||$h(this,i,r)};function ud(e){return e.ending&&e.length===0&&e.bufferedRequest===null&&!e.finished&&!e.writing}function Hh(e,t){e._final(function(r){t.pendingcb--,r&&e.emit("error",r),t.prefinished=!0,e.emit("prefinish"),ni(e,t)})}function Zh(e,t){!t.prefinished&&!t.finalCalled&&(typeof e._final=="function"?(t.pendingcb++,t.finalCalled=!0,Yt.nextTick(Hh,e,t)):(t.prefinished=!0,e.emit("prefinish")))}function ni(e,t){var r=ud(t);return r&&(Zh(e,t),t.pendingcb===0&&(t.finished=!0,e.emit("finish"))),r}function $h(e,t,r){t.ending=!0,ni(e,t),r&&(t.finished?Yt.nextTick(r):e.once("finish",r)),t.ended=!0,e.writable=!1}function Vh(e,t,r){var i=e.entry;for(e.entry=null;i;){var s=i.callback;t.pendingcb--,s(r),i=i.next}t.corkedRequestsFree.next=e}Object.defineProperty(le.prototype,"destroyed",{get:function(){return this._writableState===void 0?!1:this._writableState.destroyed},set:function(e){this._writableState&&(this._writableState.destroyed=e)}});le.prototype.destroy=ld.destroy;le.prototype._undestroy=ld.undestroy;le.prototype._destroy=function(e,t){this.end(),t(e)}});var Xt=O((ig,vd)=>{"use strict";var hd=ti(),Yh=Object.keys||function(e){var t=[];for(var r in e)t.push(r);return t};vd.exports=lt;var pd=Object.create(br());pd.inherits=yr();var md=Ba(),Da=Aa();pd.inherits(lt,md);for(Ia=Yh(Da.prototype),ln=0;ln<Ia.length;ln++)cn=Ia[ln],lt.prototype[cn]||(lt.prototype[cn]=Da.prototype[cn]);var Ia,cn,ln;function lt(e){if(!(this instanceof lt))return new lt(e);md.call(this,e),Da.call(this,e),e&&e.readable===!1&&(this.readable=!1),e&&e.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,e&&e.allowHalfOpen===!1&&(this.allowHalfOpen=!1),this.once("end",Xh)}Object.defineProperty(lt.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}});function Xh(){this.allowHalfOpen||this._writableState.ended||hd.nextTick(Gh,this)}function Gh(e){e.end()}Object.defineProperty(lt.prototype,"destroyed",{get:function(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set:function(e){this._readableState===void 0||this._writableState===void 0||(this._readableState.destroyed=e,this._writableState.destroyed=e)}});lt.prototype._destroy=function(e,t){this.push(null),this.end(),hd.nextTick(t,e)}});var Ma=O(bd=>{"use strict";var La=ri().Buffer,gd=La.isEncoding||function(e){switch(e=""+e,e&&e.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function Kh(e){if(!e)return"utf8";for(var t;;)switch(e){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return e;default:if(t)return;e=(""+e).toLowerCase(),t=!0}}function Qh(e){var t=Kh(e);if(typeof t!="string"&&(La.isEncoding===gd||!gd(e)))throw new Error("Unknown encoding: "+e);return t||e}bd.StringDecoder=si;function si(e){this.encoding=Qh(e);var t;switch(this.encoding){case"utf16le":this.text=np,this.end=ap,t=4;break;case"utf8":this.fillLast=tp,t=4;break;case"base64":this.text=sp,this.end=op,t=3;break;default:this.write=dp,this.end=lp;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=La.allocUnsafe(t)}si.prototype.write=function(e){if(e.length===0)return"";var t,r;if(this.lastNeed){if(t=this.fillLast(e),t===void 0)return"";r=this.lastNeed,this.lastNeed=0}else r=0;return r<e.length?t?t+this.text(e,r):this.text(e,r):t||""};si.prototype.end=ip;si.prototype.text=rp;si.prototype.fillLast=function(e){if(this.lastNeed<=e.length)return e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,this.lastTotal-this.lastNeed,0,e.length),this.lastNeed-=e.length};function Ra(e){return e<=127?0:e>>5===6?2:e>>4===14?3:e>>3===30?4:e>>6===2?-1:-2}function Jh(e,t,r){var i=t.length-1;if(i<r)return 0;var s=Ra(t[i]);return s>=0?(s>0&&(e.lastNeed=s-1),s):--i<r||s===-2?0:(s=Ra(t[i]),s>=0?(s>0&&(e.lastNeed=s-2),s):--i<r||s===-2?0:(s=Ra(t[i]),s>=0?(s>0&&(s===2?s=0:e.lastNeed=s-3),s):0))}function ep(e,t,r){if((t[0]&192)!==128)return e.lastNeed=0,"\uFFFD";if(e.lastNeed>1&&t.length>1){if((t[1]&192)!==128)return e.lastNeed=1,"\uFFFD";if(e.lastNeed>2&&t.length>2&&(t[2]&192)!==128)return e.lastNeed=2,"\uFFFD"}}function tp(e){var t=this.lastTotal-this.lastNeed,r=ep(this,e,t);if(r!==void 0)return r;if(this.lastNeed<=e.length)return e.copy(this.lastChar,t,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);e.copy(this.lastChar,t,0,e.length),this.lastNeed-=e.length}function rp(e,t){var r=Jh(this,e,t);if(!this.lastNeed)return e.toString("utf8",t);this.lastTotal=r;var i=e.length-(r-this.lastNeed);return e.copy(this.lastChar,0,i),e.toString("utf8",t,i)}function ip(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+"\uFFFD":t}function np(e,t){if((e.length-t)%2===0){var r=e.toString("utf16le",t);if(r){var i=r.charCodeAt(r.length-1);if(i>=55296&&i<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1],r.slice(0,-1)}return r}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=e[e.length-1],e.toString("utf16le",t,e.length-1)}function ap(e){var t=e&&e.length?this.write(e):"";if(this.lastNeed){var r=this.lastTotal-this.lastNeed;return t+this.lastChar.toString("utf16le",0,r)}return t}function sp(e,t){var r=(e.length-t)%3;return r===0?e.toString("base64",t):(this.lastNeed=3-r,this.lastTotal=3,r===1?this.lastChar[0]=e[e.length-1]:(this.lastChar[0]=e[e.length-2],this.lastChar[1]=e[e.length-1]),e.toString("base64",t,e.length-r))}function op(e){var t=e&&e.length?this.write(e):"";return this.lastNeed?t+this.lastChar.toString("base64",0,3-this.lastNeed):t}function dp(e){return e.toString(this.encoding)}function lp(e){return e&&e.length?this.write(e):""}});var Ba=O((sg,Dd)=>{"use strict";var _r=ti();Dd.exports=te;var cp=Xo(),oi;te.ReadableState=Ed;var ag=require("events").EventEmitter,_d=function(e,t){return e.listeners(t).length},za=xa(),di=ri().Buffer,up=(typeof global<"u"?global:typeof window<"u"?window:typeof self<"u"?self:{}).Uint8Array||function(){};function fp(e){return di.from(e)}function hp(e){return di.isBuffer(e)||e instanceof up}var kd=Object.create(br());kd.inherits=yr();var Oa=require("util"),Y=void 0;Oa&&Oa.debuglog?Y=Oa.debuglog("stream"):Y=function(){};var pp=td(),Sd=Ca(),wr;kd.inherits(te,za);var Pa=["error","close","destroy","pause","resume"];function mp(e,t,r){if(typeof e.prependListener=="function")return e.prependListener(t,r);!e._events||!e._events[t]?e.on(t,r):cp(e._events[t])?e._events[t].unshift(r):e._events[t]=[r,e._events[t]]}function Ed(e,t){oi=oi||Xt(),e=e||{};var r=t instanceof oi;this.objectMode=!!e.objectMode,r&&(this.objectMode=this.objectMode||!!e.readableObjectMode);var i=e.highWaterMark,s=e.readableHighWaterMark,a=this.objectMode?16:16*1024;i||i===0?this.highWaterMark=i:r&&(s||s===0)?this.highWaterMark=s:this.highWaterMark=a,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new pp,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=e.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(wr||(wr=Ma().StringDecoder),this.decoder=new wr(e.encoding),this.encoding=e.encoding)}function te(e){if(oi=oi||Xt(),!(this instanceof te))return new te(e);this._readableState=new Ed(e,this),this.readable=!0,e&&(typeof e.read=="function"&&(this._read=e.read),typeof e.destroy=="function"&&(this._destroy=e.destroy)),za.call(this)}Object.defineProperty(te.prototype,"destroyed",{get:function(){return this._readableState===void 0?!1:this._readableState.destroyed},set:function(e){this._readableState&&(this._readableState.destroyed=e)}});te.prototype.destroy=Sd.destroy;te.prototype._undestroy=Sd.undestroy;te.prototype._destroy=function(e,t){this.push(null),t(e)};te.prototype.push=function(e,t){var r=this._readableState,i;return r.objectMode?i=!0:typeof e=="string"&&(t=t||r.defaultEncoding,t!==r.encoding&&(e=di.from(e,t),t=""),i=!0),Cd(this,e,t,!1,i)};te.prototype.unshift=function(e){return Cd(this,e,null,!0,!1)};function Cd(e,t,r,i,s){var a=e._readableState;if(t===null)a.reading=!1,yp(e,a);else{var l;s||(l=vp(a,t)),l?e.emit("error",l):a.objectMode||t&&t.length>0?(typeof t!="string"&&!a.objectMode&&Object.getPrototypeOf(t)!==di.prototype&&(t=fp(t)),i?a.endEmitted?e.emit("error",new Error("stream.unshift() after end event")):Na(e,a,t,!0):a.ended?e.emit("error",new Error("stream.push() after EOF")):(a.reading=!1,a.decoder&&!r?(t=a.decoder.write(t),a.objectMode||t.length!==0?Na(e,a,t,!1):Td(e,a)):Na(e,a,t,!1))):i||(a.reading=!1)}return gp(a)}function Na(e,t,r,i){t.flowing&&t.length===0&&!t.sync?(e.emit("data",r),e.read(0)):(t.length+=t.objectMode?1:r.length,i?t.buffer.unshift(r):t.buffer.push(r),t.needReadable&&un(e)),Td(e,t)}function vp(e,t){var r;return!hp(t)&&typeof t!="string"&&t!==void 0&&!e.objectMode&&(r=new TypeError("Invalid non-string/buffer chunk")),r}function gp(e){return!e.ended&&(e.needReadable||e.length<e.highWaterMark||e.length===0)}te.prototype.isPaused=function(){return this._readableState.flowing===!1};te.prototype.setEncoding=function(e){return wr||(wr=Ma().StringDecoder),this._readableState.decoder=new wr(e),this._readableState.encoding=e,this};var yd=8388608;function bp(e){return e>=yd?e=yd:(e--,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e++),e}function xd(e,t){return e<=0||t.length===0&&t.ended?0:t.objectMode?1:e!==e?t.flowing&&t.length?t.buffer.head.data.length:t.length:(e>t.highWaterMark&&(t.highWaterMark=bp(e)),e<=t.length?e:t.ended?t.length:(t.needReadable=!0,0))}te.prototype.read=function(e){Y("read",e),e=parseInt(e,10);var t=this._readableState,r=e;if(e!==0&&(t.emittedReadable=!1),e===0&&t.needReadable&&(t.length>=t.highWaterMark||t.ended))return Y("read: emitReadable",t.length,t.ended),t.length===0&&t.ended?Fa(this):un(this),null;if(e=xd(e,t),e===0&&t.ended)return t.length===0&&Fa(this),null;var i=t.needReadable;Y("need readable",i),(t.length===0||t.length-e<t.highWaterMark)&&(i=!0,Y("length less than watermark",i)),t.ended||t.reading?(i=!1,Y("reading or ended",i)):i&&(Y("do read"),t.reading=!0,t.sync=!0,t.length===0&&(t.needReadable=!0),this._read(t.highWaterMark),t.sync=!1,t.reading||(e=xd(r,t)));var s;return e>0?s=Ad(e,t):s=null,s===null?(t.needReadable=!0,e=0):t.length-=e,t.length===0&&(t.ended||(t.needReadable=!0),r!==e&&t.ended&&Fa(this)),s!==null&&this.emit("data",s),s};function yp(e,t){if(!t.ended){if(t.decoder){var r=t.decoder.end();r&&r.length&&(t.buffer.push(r),t.length+=t.objectMode?1:r.length)}t.ended=!0,un(e)}}function un(e){var t=e._readableState;t.needReadable=!1,t.emittedReadable||(Y("emitReadable",t.flowing),t.emittedReadable=!0,t.sync?_r.nextTick(wd,e):wd(e))}function wd(e){Y("emit readable"),e.emit("readable"),qa(e)}function Td(e,t){t.readingMore||(t.readingMore=!0,_r.nextTick(xp,e,t))}function xp(e,t){for(var r=t.length;!t.reading&&!t.flowing&&!t.ended&&t.length<t.highWaterMark&&(Y("maybeReadMore read 0"),e.read(0),r!==t.length);)r=t.length;t.readingMore=!1}te.prototype._read=function(e){this.emit("error",new Error("_read() is not implemented"))};te.prototype.pipe=function(e,t){var r=this,i=this._readableState;switch(i.pipesCount){case 0:i.pipes=e;break;case 1:i.pipes=[i.pipes,e];break;default:i.pipes.push(e);break}i.pipesCount+=1,Y("pipe count=%d opts=%j",i.pipesCount,t);var s=(!t||t.end!==!1)&&e!==process.stdout&&e!==process.stderr,a=s?c:R;i.endEmitted?_r.nextTick(a):r.once("end",a),e.on("unpipe",l);function l(C,k){Y("onunpipe"),C===r&&k&&k.hasUnpiped===!1&&(k.hasUnpiped=!0,h())}function c(){Y("onend"),e.end()}var m=wp(r);e.on("drain",m);var f=!1;function h(){Y("cleanup"),e.removeListener("close",B),e.removeListener("finish",E),e.removeListener("drain",m),e.removeListener("error",b),e.removeListener("unpipe",l),r.removeListener("end",c),r.removeListener("end",R),r.removeListener("data",y),f=!0,i.awaitDrain&&(!e._writableState||e._writableState.needDrain)&&m()}var S=!1;r.on("data",y);function y(C){Y("ondata"),S=!1;var k=e.write(C);k===!1&&!S&&((i.pipesCount===1&&i.pipes===e||i.pipesCount>1&&Id(i.pipes,e)!==-1)&&!f&&(Y("false write response, pause",i.awaitDrain),i.awaitDrain++,S=!0),r.pause())}function b(C){Y("onerror",C),R(),e.removeListener("error",b),_d(e,"error")===0&&e.emit("error",C)}mp(e,"error",b);function B(){e.removeListener("finish",E),R()}e.once("close",B);function E(){Y("onfinish"),e.removeListener("close",B),R()}e.once("finish",E);function R(){Y("unpipe"),r.unpipe(e)}return e.emit("pipe",r),i.flowing||(Y("pipe resume"),r.resume()),e};function wp(e){return function(){var t=e._readableState;Y("pipeOnDrain",t.awaitDrain),t.awaitDrain&&t.awaitDrain--,t.awaitDrain===0&&_d(e,"data")&&(t.flowing=!0,qa(e))}}te.prototype.unpipe=function(e){var t=this._readableState,r={hasUnpiped:!1};if(t.pipesCount===0)return this;if(t.pipesCount===1)return e&&e!==t.pipes?this:(e||(e=t.pipes),t.pipes=null,t.pipesCount=0,t.flowing=!1,e&&e.emit("unpipe",this,r),this);if(!e){var i=t.pipes,s=t.pipesCount;t.pipes=null,t.pipesCount=0,t.flowing=!1;for(var a=0;a<s;a++)i[a].emit("unpipe",this,{hasUnpiped:!1});return this}var l=Id(t.pipes,e);return l===-1?this:(t.pipes.splice(l,1),t.pipesCount-=1,t.pipesCount===1&&(t.pipes=t.pipes[0]),e.emit("unpipe",this,r),this)};te.prototype.on=function(e,t){var r=za.prototype.on.call(this,e,t);if(e==="data")this._readableState.flowing!==!1&&this.resume();else if(e==="readable"){var i=this._readableState;!i.endEmitted&&!i.readableListening&&(i.readableListening=i.needReadable=!0,i.emittedReadable=!1,i.reading?i.length&&un(this):_r.nextTick(_p,this))}return r};te.prototype.addListener=te.prototype.on;function _p(e){Y("readable nexttick read 0"),e.read(0)}te.prototype.resume=function(){var e=this._readableState;return e.flowing||(Y("resume"),e.flowing=!0,kp(this,e)),this};function kp(e,t){t.resumeScheduled||(t.resumeScheduled=!0,_r.nextTick(Sp,e,t))}function Sp(e,t){t.reading||(Y("resume read 0"),e.read(0)),t.resumeScheduled=!1,t.awaitDrain=0,e.emit("resume"),qa(e),t.flowing&&!t.reading&&e.read(0)}te.prototype.pause=function(){return Y("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(Y("pause"),this._readableState.flowing=!1,this.emit("pause")),this};function qa(e){var t=e._readableState;for(Y("flow",t.flowing);t.flowing&&e.read()!==null;);}te.prototype.wrap=function(e){var t=this,r=this._readableState,i=!1;e.on("end",function(){if(Y("wrapped end"),r.decoder&&!r.ended){var l=r.decoder.end();l&&l.length&&t.push(l)}t.push(null)}),e.on("data",function(l){if(Y("wrapped data"),r.decoder&&(l=r.decoder.write(l)),!(r.objectMode&&l==null)&&!(!r.objectMode&&(!l||!l.length))){var c=t.push(l);c||(i=!0,e.pause())}});for(var s in e)this[s]===void 0&&typeof e[s]=="function"&&(this[s]=(function(l){return function(){return e[l].apply(e,arguments)}})(s));for(var a=0;a<Pa.length;a++)e.on(Pa[a],this.emit.bind(this,Pa[a]));return this._read=function(l){Y("wrapped _read",l),i&&(i=!1,e.resume())},this};Object.defineProperty(te.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}});te._fromList=Ad;function Ad(e,t){if(t.length===0)return null;var r;return t.objectMode?r=t.buffer.shift():!e||e>=t.length?(t.decoder?r=t.buffer.join(""):t.buffer.length===1?r=t.buffer.head.data:r=t.buffer.concat(t.length),t.buffer.clear()):r=Ep(e,t.buffer,t.decoder),r}function Ep(e,t,r){var i;return e<t.head.data.length?(i=t.head.data.slice(0,e),t.head.data=t.head.data.slice(e)):e===t.head.data.length?i=t.shift():i=r?Cp(e,t):Tp(e,t),i}function Cp(e,t){var r=t.head,i=1,s=r.data;for(e-=s.length;r=r.next;){var a=r.data,l=e>a.length?a.length:e;if(l===a.length?s+=a:s+=a.slice(0,e),e-=l,e===0){l===a.length?(++i,r.next?t.head=r.next:t.head=t.tail=null):(t.head=r,r.data=a.slice(l));break}++i}return t.length-=i,s}function Tp(e,t){var r=di.allocUnsafe(e),i=t.head,s=1;for(i.data.copy(r),e-=i.data.length;i=i.next;){var a=i.data,l=e>a.length?a.length:e;if(a.copy(r,r.length-e,0,l),e-=l,e===0){l===a.length?(++s,i.next?t.head=i.next:t.head=t.tail=null):(t.head=i,i.data=a.slice(l));break}++s}return t.length-=s,r}function Fa(e){var t=e._readableState;if(t.length>0)throw new Error('"endReadable()" called on non-empty stream');t.endEmitted||(t.ended=!0,_r.nextTick(Ap,t,e))}function Ap(e,t){!e.endEmitted&&e.length===0&&(e.endEmitted=!0,t.readable=!1,t.emit("end"))}function Id(e,t){for(var r=0,i=e.length;r<i;r++)if(e[r]===t)return r;return-1}});var Ua=O((og,Ld)=>{"use strict";Ld.exports=ct;var fn=Xt(),Rd=Object.create(br());Rd.inherits=yr();Rd.inherits(ct,fn);function Ip(e,t){var r=this._transformState;r.transforming=!1;var i=r.writecb;if(!i)return this.emit("error",new Error("write callback called multiple times"));r.writechunk=null,r.writecb=null,t!=null&&this.push(t),i(e);var s=this._readableState;s.reading=!1,(s.needReadable||s.length<s.highWaterMark)&&this._read(s.highWaterMark)}function ct(e){if(!(this instanceof ct))return new ct(e);fn.call(this,e),this._transformState={afterTransform:Ip.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,e&&(typeof e.transform=="function"&&(this._transform=e.transform),typeof e.flush=="function"&&(this._flush=e.flush)),this.on("prefinish",Dp)}function Dp(){var e=this;typeof this._flush=="function"?this._flush(function(t,r){Bd(e,t,r)}):Bd(this,null,null)}ct.prototype.push=function(e,t){return this._transformState.needTransform=!1,fn.prototype.push.call(this,e,t)};ct.prototype._transform=function(e,t,r){throw new Error("_transform() is not implemented")};ct.prototype._write=function(e,t,r){var i=this._transformState;if(i.writecb=r,i.writechunk=e,i.writeencoding=t,!i.transforming){var s=this._readableState;(i.needTransform||s.needReadable||s.length<s.highWaterMark)&&this._read(s.highWaterMark)}};ct.prototype._read=function(e){var t=this._transformState;t.writechunk!==null&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0};ct.prototype._destroy=function(e,t){var r=this;fn.prototype._destroy.call(this,e,function(i){t(i),r.emit("close")})};function Bd(e,t,r){if(t)return e.emit("error",t);if(r!=null&&e.push(r),e._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(e._transformState.transforming)throw new Error("Calling transform done when still transforming");return e.push(null)}});var Nd=O((dg,Pd)=>{"use strict";Pd.exports=li;var Md=Ua(),Od=Object.create(br());Od.inherits=yr();Od.inherits(li,Md);function li(e){if(!(this instanceof li))return new li(e);Md.call(this,e)}li.prototype._transform=function(e,t,r){r(null,e)}});var Wa=O((ve,hn)=>{var Qe=require("stream");process.env.READABLE_STREAM==="disable"&&Qe?(hn.exports=Qe,ve=hn.exports=Qe.Readable,ve.Readable=Qe.Readable,ve.Writable=Qe.Writable,ve.Duplex=Qe.Duplex,ve.Transform=Qe.Transform,ve.PassThrough=Qe.PassThrough,ve.Stream=Qe):(ve=hn.exports=Ba(),ve.Stream=Qe||ve,ve.Readable=ve,ve.Writable=Aa(),ve.Duplex=Xt(),ve.Transform=Ua(),ve.PassThrough=Nd())});var ut=O(Te=>{"use strict";Te.base64=!0;Te.array=!0;Te.string=!0;Te.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u";Te.nodebuffer=typeof Buffer<"u";Te.uint8array=typeof Uint8Array<"u";if(typeof ArrayBuffer>"u")Te.blob=!1;else{ja=new ArrayBuffer(0);try{Te.blob=new Blob([ja],{type:"application/zip"}).size===0}catch{try{Fd=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,Ha=new Fd,Ha.append(ja),Te.blob=Ha.getBlob("application/zip").size===0}catch{Te.blob=!1}}}var ja,Fd,Ha;try{Te.nodestream=!!Wa().Readable}catch{Te.nodestream=!1}});var $a=O(Za=>{"use strict";var Bp=ae(),Rp=ut(),Je="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";Za.encode=function(e){for(var t=[],r,i,s,a,l,c,m,f=0,h=e.length,S=h,y=Bp.getTypeOf(e)!=="string";f<e.length;)S=h-f,y?(r=e[f++],i=f<h?e[f++]:0,s=f<h?e[f++]:0):(r=e.charCodeAt(f++),i=f<h?e.charCodeAt(f++):0,s=f<h?e.charCodeAt(f++):0),a=r>>2,l=(r&3)<<4|i>>4,c=S>1?(i&15)<<2|s>>6:64,m=S>2?s&63:64,t.push(Je.charAt(a)+Je.charAt(l)+Je.charAt(c)+Je.charAt(m));return t.join("")};Za.decode=function(e){var t,r,i,s,a,l,c,m=0,f=0,h="data:";if(e.substr(0,h.length)===h)throw new Error("Invalid base64 input, it looks like a data url.");e=e.replace(/[^A-Za-z0-9+/=]/g,"");var S=e.length*3/4;if(e.charAt(e.length-1)===Je.charAt(64)&&S--,e.charAt(e.length-2)===Je.charAt(64)&&S--,S%1!==0)throw new Error("Invalid base64 input, bad content length.");var y;for(Rp.uint8array?y=new Uint8Array(S|0):y=new Array(S|0);m<e.length;)s=Je.indexOf(e.charAt(m++)),a=Je.indexOf(e.charAt(m++)),l=Je.indexOf(e.charAt(m++)),c=Je.indexOf(e.charAt(m++)),t=s<<2|a>>4,r=(a&15)<<4|l>>2,i=(l&3)<<6|c,y[f++]=t,l!==64&&(y[f++]=r),c!==64&&(y[f++]=i);return y}});var ci=O((ug,zd)=>{"use strict";zd.exports={isNode:typeof Buffer<"u",newBufferFrom:function(e,t){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(e,t);if(typeof e=="number")throw new Error('The "data" argument must not be a number');return new Buffer(e,t)},allocBuffer:function(e){if(Buffer.alloc)return Buffer.alloc(e);var t=new Buffer(e);return t.fill(0),t},isBuffer:function(e){return Buffer.isBuffer(e)},isStream:function(e){return e&&typeof e.on=="function"&&typeof e.pause=="function"&&typeof e.resume=="function"}}});var jd=O((fg,Wd)=>{"use strict";var qd=global.MutationObserver||global.WebKitMutationObserver,kr;process.browser?qd?(Va=0,Ud=new qd(ui),Ya=global.document.createTextNode(""),Ud.observe(Ya,{characterData:!0}),kr=function(){Ya.data=Va=++Va%2}):!global.setImmediate&&typeof global.MessageChannel<"u"?(Xa=new global.MessageChannel,Xa.port1.onmessage=ui,kr=function(){Xa.port2.postMessage(0)}):"document"in global&&"onreadystatechange"in global.document.createElement("script")?kr=function(){var e=global.document.createElement("script");e.onreadystatechange=function(){ui(),e.onreadystatechange=null,e.parentNode.removeChild(e),e=null},global.document.documentElement.appendChild(e)}:kr=function(){setTimeout(ui,0)}:kr=function(){process.nextTick(ui)};var Va,Ud,Ya,Xa,Ga,fi=[];function ui(){Ga=!0;for(var e,t,r=fi.length;r;){for(t=fi,fi=[],e=-1;++e<r;)t[e]();r=fi.length}Ga=!1}Wd.exports=Lp;function Lp(e){fi.push(e)===1&&!Ga&&kr()}});var Gd=O((hg,Xd)=>{"use strict";var Hd=jd();function Sr(){}var ye={},Zd=["REJECTED"],Ka=["FULFILLED"],$d=["PENDING"];process.browser||(hi=["UNHANDLED"]);var hi;Xd.exports=Et;function Et(e){if(typeof e!="function")throw new TypeError("resolver must be a function");this.state=$d,this.queue=[],this.outcome=void 0,process.browser||(this.handled=hi),e!==Sr&&Vd(this,e)}Et.prototype.finally=function(e){if(typeof e!="function")return this;var t=this.constructor;return this.then(r,i);function r(s){function a(){return s}return t.resolve(e()).then(a)}function i(s){function a(){throw s}return t.resolve(e()).then(a)}};Et.prototype.catch=function(e){return this.then(null,e)};Et.prototype.then=function(e,t){if(typeof e!="function"&&this.state===Ka||typeof t!="function"&&this.state===Zd)return this;var r=new this.constructor(Sr);if(process.browser||this.handled===hi&&(this.handled=null),this.state!==$d){var i=this.state===Ka?e:t;Qa(r,i,this.outcome)}else this.queue.push(new pi(r,e,t));return r};function pi(e,t,r){this.promise=e,typeof t=="function"&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),typeof r=="function"&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}pi.prototype.callFulfilled=function(e){ye.resolve(this.promise,e)};pi.prototype.otherCallFulfilled=function(e){Qa(this.promise,this.onFulfilled,e)};pi.prototype.callRejected=function(e){ye.reject(this.promise,e)};pi.prototype.otherCallRejected=function(e){Qa(this.promise,this.onRejected,e)};function Qa(e,t,r){Hd(function(){var i;try{i=t(r)}catch(s){return ye.reject(e,s)}i===e?ye.reject(e,new TypeError("Cannot resolve promise with itself")):ye.resolve(e,i)})}ye.resolve=function(e,t){var r=Yd(Mp,t);if(r.status==="error")return ye.reject(e,r.value);var i=r.value;if(i)Vd(e,i);else{e.state=Ka,e.outcome=t;for(var s=-1,a=e.queue.length;++s<a;)e.queue[s].callFulfilled(t)}return e};ye.reject=function(e,t){e.state=Zd,e.outcome=t,process.browser||e.handled===hi&&Hd(function(){e.handled===hi&&process.emit("unhandledRejection",t,e)});for(var r=-1,i=e.queue.length;++r<i;)e.queue[r].callRejected(t);return e};function Mp(e){var t=e&&e.then;if(e&&(typeof e=="object"||typeof e=="function")&&typeof t=="function")return function(){t.apply(e,arguments)}}function Vd(e,t){var r=!1;function i(c){r||(r=!0,ye.reject(e,c))}function s(c){r||(r=!0,ye.resolve(e,c))}function a(){t(s,i)}var l=Yd(a);l.status==="error"&&i(l.value)}function Yd(e,t){var r={};try{r.value=e(t),r.status="success"}catch(i){r.status="error",r.value=i}return r}Et.resolve=Op;function Op(e){return e instanceof this?e:ye.resolve(new this(Sr),e)}Et.reject=Pp;function Pp(e){var t=new this(Sr);return ye.reject(t,e)}Et.all=Np;function Np(e){var t=this;if(Object.prototype.toString.call(e)!=="[object Array]")return this.reject(new TypeError("must be an array"));var r=e.length,i=!1;if(!r)return this.resolve([]);for(var s=new Array(r),a=0,l=-1,c=new this(Sr);++l<r;)m(e[l],l);return c;function m(f,h){t.resolve(f).then(S,function(y){i||(i=!0,ye.reject(c,y))});function S(y){s[h]=y,++a===r&&!i&&(i=!0,ye.resolve(c,s))}}}Et.race=Fp;function Fp(e){var t=this;if(Object.prototype.toString.call(e)!=="[object Array]")return this.reject(new TypeError("must be an array"));var r=e.length,i=!1;if(!r)return this.resolve([]);for(var s=-1,a=new this(Sr);++s<r;)l(e[s]);return a;function l(c){t.resolve(c).then(function(m){i||(i=!0,ye.resolve(a,m))},function(m){i||(i=!0,ye.reject(a,m))})}}});var Er=O((pg,Kd)=>{"use strict";var Ja=null;typeof Promise<"u"?Ja=Promise:Ja=Gd();Kd.exports={Promise:Ja}});var Jd=O(Qd=>{(function(e,t){"use strict";if(e.setImmediate)return;var r=1,i={},s=!1,a=e.document,l;function c(k){typeof k!="function"&&(k=new Function(""+k));for(var M=new Array(arguments.length-1),T=0;T<M.length;T++)M[T]=arguments[T+1];var I={callback:k,args:M};return i[r]=I,l(r),r++}function m(k){delete i[k]}function f(k){var M=k.callback,T=k.args;switch(T.length){case 0:M();break;case 1:M(T[0]);break;case 2:M(T[0],T[1]);break;case 3:M(T[0],T[1],T[2]);break;default:M.apply(t,T);break}}function h(k){if(s)setTimeout(h,0,k);else{var M=i[k];if(M){s=!0;try{f(M)}finally{m(k),s=!1}}}}function S(){l=function(k){process.nextTick(function(){h(k)})}}function y(){if(e.postMessage&&!e.importScripts){var k=!0,M=e.onmessage;return e.onmessage=function(){k=!1},e.postMessage("","*"),e.onmessage=M,k}}function b(){var k="setImmediate$"+Math.random()+"$",M=function(T){T.source===e&&typeof T.data=="string"&&T.data.indexOf(k)===0&&h(+T.data.slice(k.length))};e.addEventListener?e.addEventListener("message",M,!1):e.attachEvent("onmessage",M),l=function(T){e.postMessage(k+T,"*")}}function B(){var k=new MessageChannel;k.port1.onmessage=function(M){var T=M.data;h(T)},l=function(M){k.port2.postMessage(M)}}function E(){var k=a.documentElement;l=function(M){var T=a.createElement("script");T.onreadystatechange=function(){h(M),T.onreadystatechange=null,k.removeChild(T),T=null},k.appendChild(T)}}function R(){l=function(k){setTimeout(h,0,k)}}var C=Object.getPrototypeOf&&Object.getPrototypeOf(e);C=C&&C.setTimeout?C:e,{}.toString.call(e.process)==="[object process]"?S():y()?b():e.MessageChannel?B():a&&"onreadystatechange"in a.createElement("script")?E():R(),C.setImmediate=c,C.clearImmediate=m})(typeof self>"u"?typeof global>"u"?Qd:global:self)});var ae=O(ce=>{"use strict";var Ct=ut(),zp=$a(),Cr=ci(),es=Er();Jd();function qp(e){var t=null;return Ct.uint8array?t=new Uint8Array(e.length):t=new Array(e.length),mn(e,t)}ce.newBlob=function(e,t){ce.checkSupport("blob");try{return new Blob([e],{type:t})}catch{try{var r=self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder,i=new r;return i.append(e),i.getBlob(t)}catch{throw new Error("Bug : can't construct the Blob.")}}};function mi(e){return e}function mn(e,t){for(var r=0;r<e.length;++r)t[r]=e.charCodeAt(r)&255;return t}var pn={stringifyByChunk:function(e,t,r){var i=[],s=0,a=e.length;if(a<=r)return String.fromCharCode.apply(null,e);for(;s<a;)t==="array"||t==="nodebuffer"?i.push(String.fromCharCode.apply(null,e.slice(s,Math.min(s+r,a)))):i.push(String.fromCharCode.apply(null,e.subarray(s,Math.min(s+r,a)))),s+=r;return i.join("")},stringifyByChar:function(e){for(var t="",r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},applyCanBeUsed:{uint8array:(function(){try{return Ct.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}})(),nodebuffer:(function(){try{return Ct.nodebuffer&&String.fromCharCode.apply(null,Cr.allocBuffer(1)).length===1}catch{return!1}})()}};function vi(e){var t=65536,r=ce.getTypeOf(e),i=!0;if(r==="uint8array"?i=pn.applyCanBeUsed.uint8array:r==="nodebuffer"&&(i=pn.applyCanBeUsed.nodebuffer),i)for(;t>1;)try{return pn.stringifyByChunk(e,r,t)}catch{t=Math.floor(t/2)}return pn.stringifyByChar(e)}ce.applyFromCharCode=vi;function vn(e,t){for(var r=0;r<e.length;r++)t[r]=e[r];return t}var Tt={};Tt.string={string:mi,array:function(e){return mn(e,new Array(e.length))},arraybuffer:function(e){return Tt.string.uint8array(e).buffer},uint8array:function(e){return mn(e,new Uint8Array(e.length))},nodebuffer:function(e){return mn(e,Cr.allocBuffer(e.length))}};Tt.array={string:vi,array:mi,arraybuffer:function(e){return new Uint8Array(e).buffer},uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return Cr.newBufferFrom(e)}};Tt.arraybuffer={string:function(e){return vi(new Uint8Array(e))},array:function(e){return vn(new Uint8Array(e),new Array(e.byteLength))},arraybuffer:mi,uint8array:function(e){return new Uint8Array(e)},nodebuffer:function(e){return Cr.newBufferFrom(new Uint8Array(e))}};Tt.uint8array={string:vi,array:function(e){return vn(e,new Array(e.length))},arraybuffer:function(e){return e.buffer},uint8array:mi,nodebuffer:function(e){return Cr.newBufferFrom(e)}};Tt.nodebuffer={string:vi,array:function(e){return vn(e,new Array(e.length))},arraybuffer:function(e){return Tt.nodebuffer.uint8array(e).buffer},uint8array:function(e){return vn(e,new Uint8Array(e.length))},nodebuffer:mi};ce.transformTo=function(e,t){if(t||(t=""),!e)return t;ce.checkSupport(e);var r=ce.getTypeOf(t),i=Tt[r][e](t);return i};ce.resolve=function(e){for(var t=e.split("/"),r=[],i=0;i<t.length;i++){var s=t[i];s==="."||s===""&&i!==0&&i!==t.length-1||(s===".."?r.pop():r.push(s))}return r.join("/")};ce.getTypeOf=function(e){if(typeof e=="string")return"string";if(Object.prototype.toString.call(e)==="[object Array]")return"array";if(Ct.nodebuffer&&Cr.isBuffer(e))return"nodebuffer";if(Ct.uint8array&&e instanceof Uint8Array)return"uint8array";if(Ct.arraybuffer&&e instanceof ArrayBuffer)return"arraybuffer"};ce.checkSupport=function(e){var t=Ct[e.toLowerCase()];if(!t)throw new Error(e+" is not supported by this platform")};ce.MAX_VALUE_16BITS=65535;ce.MAX_VALUE_32BITS=-1;ce.pretty=function(e){var t="",r,i;for(i=0;i<(e||"").length;i++)r=e.charCodeAt(i),t+="\\x"+(r<16?"0":"")+r.toString(16).toUpperCase();return t};ce.delay=function(e,t,r){setImmediate(function(){e.apply(r||null,t||[])})};ce.inherits=function(e,t){var r=function(){};r.prototype=t.prototype,e.prototype=new r};ce.extend=function(){var e={},t,r;for(t=0;t<arguments.length;t++)for(r in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],r)&&typeof e[r]>"u"&&(e[r]=arguments[t][r]);return e};ce.prepareContent=function(e,t,r,i,s){var a=es.Promise.resolve(t).then(function(l){var c=Ct.blob&&(l instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(l))!==-1);return c&&typeof FileReader<"u"?new es.Promise(function(m,f){var h=new FileReader;h.onload=function(S){m(S.target.result)},h.onerror=function(S){f(S.target.error)},h.readAsArrayBuffer(l)}):l});return a.then(function(l){var c=ce.getTypeOf(l);return c?(c==="arraybuffer"?l=ce.transformTo("uint8array",l):c==="string"&&(s?l=zp.decode(l):r&&i!==!0&&(l=qp(l))),l):es.Promise.reject(new Error("Can't read the data of '"+e+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}});var Ae=O((gg,tl)=>{"use strict";function el(e){this.name=e||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}el.prototype={push:function(e){this.emit("data",e)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(e){this.emit("error",e)}return!0},error:function(e){return this.isFinished?!1:(this.isPaused?this.generatedError=e:(this.isFinished=!0,this.emit("error",e),this.previous&&this.previous.error(e),this.cleanUp()),!0)},on:function(e,t){return this._listeners[e].push(t),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(e,t){if(this._listeners[e])for(var r=0;r<this._listeners[e].length;r++)this._listeners[e][r].call(this,t)},pipe:function(e){return e.registerPrevious(this)},registerPrevious:function(e){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=e.streamInfo,this.mergeStreamInfo(),this.previous=e;var t=this;return e.on("data",function(r){t.processChunk(r)}),e.on("end",function(){t.end()}),e.on("error",function(r){t.error(r)}),this},pause:function(){return this.isPaused||this.isFinished?!1:(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;this.isPaused=!1;var e=!1;return this.generatedError&&(this.error(this.generatedError),e=!0),this.previous&&this.previous.resume(),!e},flush:function(){},processChunk:function(e){this.push(e)},withStreamInfo:function(e,t){return this.extraStreamInfo[e]=t,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var e in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,e)&&(this.streamInfo[e]=this.extraStreamInfo[e])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var e="Worker "+this.name;return this.previous?this.previous+" -> "+e:e}};tl.exports=el});var Ar=O(At=>{"use strict";var Tr=ae(),Gt=ut(),Up=ci(),gn=Ae(),gi=new Array(256);for(ft=0;ft<256;ft++)gi[ft]=ft>=252?6:ft>=248?5:ft>=240?4:ft>=224?3:ft>=192?2:1;var ft;gi[254]=gi[254]=1;var Wp=function(e){var t,r,i,s,a,l=e.length,c=0;for(s=0;s<l;s++)r=e.charCodeAt(s),(r&64512)===55296&&s+1<l&&(i=e.charCodeAt(s+1),(i&64512)===56320&&(r=65536+(r-55296<<10)+(i-56320),s++)),c+=r<128?1:r<2048?2:r<65536?3:4;for(Gt.uint8array?t=new Uint8Array(c):t=new Array(c),a=0,s=0;a<c;s++)r=e.charCodeAt(s),(r&64512)===55296&&s+1<l&&(i=e.charCodeAt(s+1),(i&64512)===56320&&(r=65536+(r-55296<<10)+(i-56320),s++)),r<128?t[a++]=r:r<2048?(t[a++]=192|r>>>6,t[a++]=128|r&63):r<65536?(t[a++]=224|r>>>12,t[a++]=128|r>>>6&63,t[a++]=128|r&63):(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63,t[a++]=128|r>>>6&63,t[a++]=128|r&63);return t},jp=function(e,t){var r;for(t=t||e.length,t>e.length&&(t=e.length),r=t-1;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+gi[e[r]]>t?r:t},Hp=function(e){var t,r,i,s,a=e.length,l=new Array(a*2);for(r=0,t=0;t<a;){if(i=e[t++],i<128){l[r++]=i;continue}if(s=gi[i],s>4){l[r++]=65533,t+=s-1;continue}for(i&=s===2?31:s===3?15:7;s>1&&t<a;)i=i<<6|e[t++]&63,s--;if(s>1){l[r++]=65533;continue}i<65536?l[r++]=i:(i-=65536,l[r++]=55296|i>>10&1023,l[r++]=56320|i&1023)}return l.length!==r&&(l.subarray?l=l.subarray(0,r):l.length=r),Tr.applyFromCharCode(l)};At.utf8encode=function(t){return Gt.nodebuffer?Up.newBufferFrom(t,"utf-8"):Wp(t)};At.utf8decode=function(t){return Gt.nodebuffer?Tr.transformTo("nodebuffer",t).toString("utf-8"):(t=Tr.transformTo(Gt.uint8array?"uint8array":"array",t),Hp(t))};function bn(){gn.call(this,"utf-8 decode"),this.leftOver=null}Tr.inherits(bn,gn);bn.prototype.processChunk=function(e){var t=Tr.transformTo(Gt.uint8array?"uint8array":"array",e.data);if(this.leftOver&&this.leftOver.length){if(Gt.uint8array){var r=t;t=new Uint8Array(r.length+this.leftOver.length),t.set(this.leftOver,0),t.set(r,this.leftOver.length)}else t=this.leftOver.concat(t);this.leftOver=null}var i=jp(t),s=t;i!==t.length&&(Gt.uint8array?(s=t.subarray(0,i),this.leftOver=t.subarray(i,t.length)):(s=t.slice(0,i),this.leftOver=t.slice(i,t.length))),this.push({data:At.utf8decode(s),meta:e.meta})};bn.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:At.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)};At.Utf8DecodeWorker=bn;function ts(){gn.call(this,"utf-8 encode")}Tr.inherits(ts,gn);ts.prototype.processChunk=function(e){this.push({data:At.utf8encode(e.data),meta:e.meta})};At.Utf8EncodeWorker=ts});var al=O((yg,nl)=>{"use strict";var rl=Ae(),il=ae();function rs(e){rl.call(this,"ConvertWorker to "+e),this.destType=e}il.inherits(rs,rl);rs.prototype.processChunk=function(e){this.push({data:il.transformTo(this.destType,e.data),meta:e.meta})};nl.exports=rs});var dl=O((xg,ol)=>{"use strict";var sl=Wa().Readable,Zp=ae();Zp.inherits(is,sl);function is(e,t,r){sl.call(this,t),this._helper=e;var i=this;e.on("data",function(s,a){i.push(s)||i._helper.pause(),r&&r(a)}).on("error",function(s){i.emit("error",s)}).on("end",function(){i.push(null)})}is.prototype._read=function(){this._helper.resume()};ol.exports=is});var ns=O((wg,ul)=>{"use strict";var Kt=ae(),$p=al(),Vp=Ae(),Yp=$a(),Xp=ut(),Gp=Er(),ll=null;if(Xp.nodestream)try{ll=dl()}catch{}function Kp(e,t,r){switch(e){case"blob":return Kt.newBlob(Kt.transformTo("arraybuffer",t),r);case"base64":return Yp.encode(t);default:return Kt.transformTo(e,t)}}function Qp(e,t){var r,i=0,s=null,a=0;for(r=0;r<t.length;r++)a+=t[r].length;switch(e){case"string":return t.join("");case"array":return Array.prototype.concat.apply([],t);case"uint8array":for(s=new Uint8Array(a),r=0;r<t.length;r++)s.set(t[r],i),i+=t[r].length;return s;case"nodebuffer":return Buffer.concat(t);default:throw new Error("concat : unsupported type '"+e+"'")}}function Jp(e,t){return new Gp.Promise(function(r,i){var s=[],a=e._internalType,l=e._outputType,c=e._mimeType;e.on("data",function(m,f){s.push(m),t&&t(f)}).on("error",function(m){s=[],i(m)}).on("end",function(){try{var m=Kp(l,Qp(a,s),c);r(m)}catch(f){i(f)}s=[]}).resume()})}function cl(e,t,r){var i=t;switch(t){case"blob":case"arraybuffer":i="uint8array";break;case"base64":i="string";break}try{this._internalType=i,this._outputType=t,this._mimeType=r,Kt.checkSupport(i),this._worker=e.pipe(new $p(i)),e.lock()}catch(s){this._worker=new Vp("error"),this._worker.error(s)}}cl.prototype={accumulate:function(e){return Jp(this,e)},on:function(e,t){var r=this;return e==="data"?this._worker.on(e,function(i){t.call(r,i.data,i.meta)}):this._worker.on(e,function(){Kt.delay(t,arguments,r)}),this},resume:function(){return Kt.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(e){if(Kt.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new ll(this,{objectMode:this._outputType!=="nodebuffer"},e)}};ul.exports=cl});var as=O(We=>{"use strict";We.base64=!1;We.binary=!1;We.dir=!1;We.createFolders=!0;We.date=null;We.compression=null;We.compressionOptions=null;We.comment=null;We.unixPermissions=null;We.dosPermissions=null});var ss=O((kg,fl)=>{"use strict";var yn=ae(),xn=Ae(),em=16*1024;function Ir(e){xn.call(this,"DataWorker");var t=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,e.then(function(r){t.dataIsReady=!0,t.data=r,t.max=r&&r.length||0,t.type=yn.getTypeOf(r),t.isPaused||t._tickAndRepeat()},function(r){t.error(r)})}yn.inherits(Ir,xn);Ir.prototype.cleanUp=function(){xn.prototype.cleanUp.call(this),this.data=null};Ir.prototype.resume=function(){return xn.prototype.resume.call(this)?(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,yn.delay(this._tickAndRepeat,[],this)),!0):!1};Ir.prototype._tickAndRepeat=function(){this._tickScheduled=!1,!(this.isPaused||this.isFinished)&&(this._tick(),this.isFinished||(yn.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))};Ir.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var e=em,t=null,r=Math.min(this.max,this.index+e);if(this.index>=this.max)return this.end();switch(this.type){case"string":t=this.data.substring(this.index,r);break;case"uint8array":t=this.data.subarray(this.index,r);break;case"array":case"nodebuffer":t=this.data.slice(this.index,r);break}return this.index=r,this.push({data:t,meta:{percent:this.max?this.index/this.max*100:0}})};fl.exports=Ir});var wn=O((Sg,pl)=>{"use strict";var tm=ae();function rm(){for(var e,t=[],r=0;r<256;r++){e=r;for(var i=0;i<8;i++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t}var hl=rm();function im(e,t,r,i){var s=hl,a=i+r;e=e^-1;for(var l=i;l<a;l++)e=e>>>8^s[(e^t[l])&255];return e^-1}function nm(e,t,r,i){var s=hl,a=i+r;e=e^-1;for(var l=i;l<a;l++)e=e>>>8^s[(e^t.charCodeAt(l))&255];return e^-1}pl.exports=function(t,r){if(typeof t>"u"||!t.length)return 0;var i=tm.getTypeOf(t)!=="string";return i?im(r|0,t,t.length,0):nm(r|0,t,t.length,0)}});var ds=O((Eg,vl)=>{"use strict";var ml=Ae(),am=wn(),sm=ae();function os(){ml.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}sm.inherits(os,ml);os.prototype.processChunk=function(e){this.streamInfo.crc32=am(e.data,this.streamInfo.crc32||0),this.push(e)};vl.exports=os});var bl=O((Cg,gl)=>{"use strict";var om=ae(),ls=Ae();function cs(e){ls.call(this,"DataLengthProbe for "+e),this.propName=e,this.withStreamInfo(e,0)}om.inherits(cs,ls);cs.prototype.processChunk=function(e){if(e){var t=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=t+e.data.length}ls.prototype.processChunk.call(this,e)};gl.exports=cs});var _n=O((Tg,wl)=>{"use strict";var yl=Er(),xl=ss(),dm=ds(),us=bl();function fs(e,t,r,i,s){this.compressedSize=e,this.uncompressedSize=t,this.crc32=r,this.compression=i,this.compressedContent=s}fs.prototype={getContentWorker:function(){var e=new xl(yl.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new us("data_length")),t=this;return e.on("end",function(){if(this.streamInfo.data_length!==t.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),e},getCompressedWorker:function(){return new xl(yl.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}};fs.createWorkerFrom=function(e,t,r){return e.pipe(new dm).pipe(new us("uncompressedSize")).pipe(t.compressWorker(r)).pipe(new us("compressedSize")).withStreamInfo("compression",t)};wl.exports=fs});var El=O((Ag,Sl)=>{"use strict";var lm=ns(),cm=ss(),hs=Ar(),ps=_n(),_l=Ae(),ms=function(e,t,r){this.name=e,this.dir=r.dir,this.date=r.date,this.comment=r.comment,this.unixPermissions=r.unixPermissions,this.dosPermissions=r.dosPermissions,this._data=t,this._dataBinary=r.binary,this.options={compression:r.compression,compressionOptions:r.compressionOptions}};ms.prototype={internalStream:function(e){var t=null,r="string";try{if(!e)throw new Error("No output type specified.");r=e.toLowerCase();var i=r==="string"||r==="text";(r==="binarystring"||r==="text")&&(r="string"),t=this._decompressWorker();var s=!this._dataBinary;s&&!i&&(t=t.pipe(new hs.Utf8EncodeWorker)),!s&&i&&(t=t.pipe(new hs.Utf8DecodeWorker))}catch(a){t=new _l("error"),t.error(a)}return new lm(t,r,"")},async:function(e,t){return this.internalStream(e).accumulate(t)},nodeStream:function(e,t){return this.internalStream(e||"nodebuffer").toNodejsStream(t)},_compressWorker:function(e,t){if(this._data instanceof ps&&this._data.compression.magic===e.magic)return this._data.getCompressedWorker();var r=this._decompressWorker();return this._dataBinary||(r=r.pipe(new hs.Utf8EncodeWorker)),ps.createWorkerFrom(r,e,t)},_decompressWorker:function(){return this._data instanceof ps?this._data.getContentWorker():this._data instanceof _l?this._data:new cm(this._data)}};var kl=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],um=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")};for(kn=0;kn<kl.length;kn++)ms.prototype[kl[kn]]=um;var kn;Sl.exports=ms});var ht=O(we=>{"use strict";var fm=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";function hm(e,t){return Object.prototype.hasOwnProperty.call(e,t)}we.assign=function(e){for(var t=Array.prototype.slice.call(arguments,1);t.length;){var r=t.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(var i in r)hm(r,i)&&(e[i]=r[i])}}return e};we.shrinkBuf=function(e,t){return e.length===t?e:e.subarray?e.subarray(0,t):(e.length=t,e)};var pm={arraySet:function(e,t,r,i,s){if(t.subarray&&e.subarray){e.set(t.subarray(r,r+i),s);return}for(var a=0;a<i;a++)e[s+a]=t[r+a]},flattenChunks:function(e){var t,r,i,s,a,l;for(i=0,t=0,r=e.length;t<r;t++)i+=e[t].length;for(l=new Uint8Array(i),s=0,t=0,r=e.length;t<r;t++)a=e[t],l.set(a,s),s+=a.length;return l}},mm={arraySet:function(e,t,r,i,s){for(var a=0;a<i;a++)e[s+a]=t[r+a]},flattenChunks:function(e){return[].concat.apply([],e)}};we.setTyped=function(e){e?(we.Buf8=Uint8Array,we.Buf16=Uint16Array,we.Buf32=Int32Array,we.assign(we,pm)):(we.Buf8=Array,we.Buf16=Array,we.Buf32=Array,we.assign(we,mm))};we.setTyped(fm)});var Yl=O(Rr=>{"use strict";var vm=ht(),gm=4,Cl=0,Tl=1,bm=2;function Br(e){for(var t=e.length;--t>=0;)e[t]=0}var ym=0,Ll=1,xm=2,wm=3,_m=258,_s=29,ki=256,yi=ki+1+_s,Dr=30,ks=19,Ml=2*yi+1,Qt=15,vs=16,km=7,Ss=256,Ol=16,Pl=17,Nl=18,xs=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Sn=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Sm=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Fl=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Em=512,pt=new Array((yi+2)*2);Br(pt);var bi=new Array(Dr*2);Br(bi);var xi=new Array(Em);Br(xi);var wi=new Array(_m-wm+1);Br(wi);var Es=new Array(_s);Br(Es);var En=new Array(Dr);Br(En);function gs(e,t,r,i,s){this.static_tree=e,this.extra_bits=t,this.extra_base=r,this.elems=i,this.max_length=s,this.has_stree=e&&e.length}var zl,ql,Ul;function bs(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}function Wl(e){return e<256?xi[e]:xi[256+(e>>>7)]}function _i(e,t){e.pending_buf[e.pending++]=t&255,e.pending_buf[e.pending++]=t>>>8&255}function Ee(e,t,r){e.bi_valid>vs-r?(e.bi_buf|=t<<e.bi_valid&65535,_i(e,e.bi_buf),e.bi_buf=t>>vs-e.bi_valid,e.bi_valid+=r-vs):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=r)}function et(e,t,r){Ee(e,r[t*2],r[t*2+1])}function jl(e,t){var r=0;do r|=e&1,e>>>=1,r<<=1;while(--t>0);return r>>>1}function Cm(e){e.bi_valid===16?(_i(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)}function Tm(e,t){var r=t.dyn_tree,i=t.max_code,s=t.stat_desc.static_tree,a=t.stat_desc.has_stree,l=t.stat_desc.extra_bits,c=t.stat_desc.extra_base,m=t.stat_desc.max_length,f,h,S,y,b,B,E=0;for(y=0;y<=Qt;y++)e.bl_count[y]=0;for(r[e.heap[e.heap_max]*2+1]=0,f=e.heap_max+1;f<Ml;f++)h=e.heap[f],y=r[r[h*2+1]*2+1]+1,y>m&&(y=m,E++),r[h*2+1]=y,!(h>i)&&(e.bl_count[y]++,b=0,h>=c&&(b=l[h-c]),B=r[h*2],e.opt_len+=B*(y+b),a&&(e.static_len+=B*(s[h*2+1]+b)));if(E!==0){do{for(y=m-1;e.bl_count[y]===0;)y--;e.bl_count[y]--,e.bl_count[y+1]+=2,e.bl_count[m]--,E-=2}while(E>0);for(y=m;y!==0;y--)for(h=e.bl_count[y];h!==0;)S=e.heap[--f],!(S>i)&&(r[S*2+1]!==y&&(e.opt_len+=(y-r[S*2+1])*r[S*2],r[S*2+1]=y),h--)}}function Hl(e,t,r){var i=new Array(Qt+1),s=0,a,l;for(a=1;a<=Qt;a++)i[a]=s=s+r[a-1]<<1;for(l=0;l<=t;l++){var c=e[l*2+1];c!==0&&(e[l*2]=jl(i[c]++,c))}}function Am(){var e,t,r,i,s,a=new Array(Qt+1);for(r=0,i=0;i<_s-1;i++)for(Es[i]=r,e=0;e<1<<xs[i];e++)wi[r++]=i;for(wi[r-1]=i,s=0,i=0;i<16;i++)for(En[i]=s,e=0;e<1<<Sn[i];e++)xi[s++]=i;for(s>>=7;i<Dr;i++)for(En[i]=s<<7,e=0;e<1<<Sn[i]-7;e++)xi[256+s++]=i;for(t=0;t<=Qt;t++)a[t]=0;for(e=0;e<=143;)pt[e*2+1]=8,e++,a[8]++;for(;e<=255;)pt[e*2+1]=9,e++,a[9]++;for(;e<=279;)pt[e*2+1]=7,e++,a[7]++;for(;e<=287;)pt[e*2+1]=8,e++,a[8]++;for(Hl(pt,yi+1,a),e=0;e<Dr;e++)bi[e*2+1]=5,bi[e*2]=jl(e,5);zl=new gs(pt,xs,ki+1,yi,Qt),ql=new gs(bi,Sn,0,Dr,Qt),Ul=new gs(new Array(0),Sm,0,ks,km)}function Zl(e){var t;for(t=0;t<yi;t++)e.dyn_ltree[t*2]=0;for(t=0;t<Dr;t++)e.dyn_dtree[t*2]=0;for(t=0;t<ks;t++)e.bl_tree[t*2]=0;e.dyn_ltree[Ss*2]=1,e.opt_len=e.static_len=0,e.last_lit=e.matches=0}function $l(e){e.bi_valid>8?_i(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0}function Im(e,t,r,i){$l(e),i&&(_i(e,r),_i(e,~r)),vm.arraySet(e.pending_buf,e.window,t,r,e.pending),e.pending+=r}function Al(e,t,r,i){var s=t*2,a=r*2;return e[s]<e[a]||e[s]===e[a]&&i[t]<=i[r]}function ys(e,t,r){for(var i=e.heap[r],s=r<<1;s<=e.heap_len&&(s<e.heap_len&&Al(t,e.heap[s+1],e.heap[s],e.depth)&&s++,!Al(t,i,e.heap[s],e.depth));)e.heap[r]=e.heap[s],r=s,s<<=1;e.heap[r]=i}function Il(e,t,r){var i,s,a=0,l,c;if(e.last_lit!==0)do i=e.pending_buf[e.d_buf+a*2]<<8|e.pending_buf[e.d_buf+a*2+1],s=e.pending_buf[e.l_buf+a],a++,i===0?et(e,s,t):(l=wi[s],et(e,l+ki+1,t),c=xs[l],c!==0&&(s-=Es[l],Ee(e,s,c)),i--,l=Wl(i),et(e,l,r),c=Sn[l],c!==0&&(i-=En[l],Ee(e,i,c)));while(a<e.last_lit);et(e,Ss,t)}function ws(e,t){var r=t.dyn_tree,i=t.stat_desc.static_tree,s=t.stat_desc.has_stree,a=t.stat_desc.elems,l,c,m=-1,f;for(e.heap_len=0,e.heap_max=Ml,l=0;l<a;l++)r[l*2]!==0?(e.heap[++e.heap_len]=m=l,e.depth[l]=0):r[l*2+1]=0;for(;e.heap_len<2;)f=e.heap[++e.heap_len]=m<2?++m:0,r[f*2]=1,e.depth[f]=0,e.opt_len--,s&&(e.static_len-=i[f*2+1]);for(t.max_code=m,l=e.heap_len>>1;l>=1;l--)ys(e,r,l);f=a;do l=e.heap[1],e.heap[1]=e.heap[e.heap_len--],ys(e,r,1),c=e.heap[1],e.heap[--e.heap_max]=l,e.heap[--e.heap_max]=c,r[f*2]=r[l*2]+r[c*2],e.depth[f]=(e.depth[l]>=e.depth[c]?e.depth[l]:e.depth[c])+1,r[l*2+1]=r[c*2+1]=f,e.heap[1]=f++,ys(e,r,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],Tm(e,t),Hl(r,m,e.bl_count)}function Dl(e,t,r){var i,s=-1,a,l=t[1],c=0,m=7,f=4;for(l===0&&(m=138,f=3),t[(r+1)*2+1]=65535,i=0;i<=r;i++)a=l,l=t[(i+1)*2+1],!(++c<m&&a===l)&&(c<f?e.bl_tree[a*2]+=c:a!==0?(a!==s&&e.bl_tree[a*2]++,e.bl_tree[Ol*2]++):c<=10?e.bl_tree[Pl*2]++:e.bl_tree[Nl*2]++,c=0,s=a,l===0?(m=138,f=3):a===l?(m=6,f=3):(m=7,f=4))}function Bl(e,t,r){var i,s=-1,a,l=t[1],c=0,m=7,f=4;for(l===0&&(m=138,f=3),i=0;i<=r;i++)if(a=l,l=t[(i+1)*2+1],!(++c<m&&a===l)){if(c<f)do et(e,a,e.bl_tree);while(--c!==0);else a!==0?(a!==s&&(et(e,a,e.bl_tree),c--),et(e,Ol,e.bl_tree),Ee(e,c-3,2)):c<=10?(et(e,Pl,e.bl_tree),Ee(e,c-3,3)):(et(e,Nl,e.bl_tree),Ee(e,c-11,7));c=0,s=a,l===0?(m=138,f=3):a===l?(m=6,f=3):(m=7,f=4)}}function Dm(e){var t;for(Dl(e,e.dyn_ltree,e.l_desc.max_code),Dl(e,e.dyn_dtree,e.d_desc.max_code),ws(e,e.bl_desc),t=ks-1;t>=3&&e.bl_tree[Fl[t]*2+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t}function Bm(e,t,r,i){var s;for(Ee(e,t-257,5),Ee(e,r-1,5),Ee(e,i-4,4),s=0;s<i;s++)Ee(e,e.bl_tree[Fl[s]*2+1],3);Bl(e,e.dyn_ltree,t-1),Bl(e,e.dyn_dtree,r-1)}function Rm(e){var t=4093624447,r;for(r=0;r<=31;r++,t>>>=1)if(t&1&&e.dyn_ltree[r*2]!==0)return Cl;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return Tl;for(r=32;r<ki;r++)if(e.dyn_ltree[r*2]!==0)return Tl;return Cl}var Rl=!1;function Lm(e){Rl||(Am(),Rl=!0),e.l_desc=new bs(e.dyn_ltree,zl),e.d_desc=new bs(e.dyn_dtree,ql),e.bl_desc=new bs(e.bl_tree,Ul),e.bi_buf=0,e.bi_valid=0,Zl(e)}function Vl(e,t,r,i){Ee(e,(ym<<1)+(i?1:0),3),Im(e,t,r,!0)}function Mm(e){Ee(e,Ll<<1,3),et(e,Ss,pt),Cm(e)}function Om(e,t,r,i){var s,a,l=0;e.level>0?(e.strm.data_type===bm&&(e.strm.data_type=Rm(e)),ws(e,e.l_desc),ws(e,e.d_desc),l=Dm(e),s=e.opt_len+3+7>>>3,a=e.static_len+3+7>>>3,a<=s&&(s=a)):s=a=r+5,r+4<=s&&t!==-1?Vl(e,t,r,i):e.strategy===gm||a===s?(Ee(e,(Ll<<1)+(i?1:0),3),Il(e,pt,bi)):(Ee(e,(xm<<1)+(i?1:0),3),Bm(e,e.l_desc.max_code+1,e.d_desc.max_code+1,l+1),Il(e,e.dyn_ltree,e.dyn_dtree)),Zl(e),i&&$l(e)}function Pm(e,t,r){return e.pending_buf[e.d_buf+e.last_lit*2]=t>>>8&255,e.pending_buf[e.d_buf+e.last_lit*2+1]=t&255,e.pending_buf[e.l_buf+e.last_lit]=r&255,e.last_lit++,t===0?e.dyn_ltree[r*2]++:(e.matches++,t--,e.dyn_ltree[(wi[r]+ki+1)*2]++,e.dyn_dtree[Wl(t)*2]++),e.last_lit===e.lit_bufsize-1}Rr._tr_init=Lm;Rr._tr_stored_block=Vl;Rr._tr_flush_block=Om;Rr._tr_tally=Pm;Rr._tr_align=Mm});var Cs=O((Bg,Xl)=>{"use strict";function Nm(e,t,r,i){for(var s=e&65535|0,a=e>>>16&65535|0,l=0;r!==0;){l=r>2e3?2e3:r,r-=l;do s=s+t[i++]|0,a=a+s|0;while(--l);s%=65521,a%=65521}return s|a<<16|0}Xl.exports=Nm});var Ts=O((Rg,Gl)=>{"use strict";function Fm(){for(var e,t=[],r=0;r<256;r++){e=r;for(var i=0;i<8;i++)e=e&1?3988292384^e>>>1:e>>>1;t[r]=e}return t}var zm=Fm();function qm(e,t,r,i){var s=zm,a=i+r;e^=-1;for(var l=i;l<a;l++)e=e>>>8^s[(e^t[l])&255];return e^-1}Gl.exports=qm});var Cn=O((Lg,Kl)=>{"use strict";Kl.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}});var sc=O(it=>{"use strict";var _e=ht(),Re=Yl(),tc=Cs(),It=Ts(),Um=Cn(),rr=0,Wm=1,jm=3,Mt=4,Ql=5,rt=0,Jl=1,Le=-2,Hm=-3,As=-5,Zm=-1,$m=1,Tn=2,Vm=3,Ym=4,Xm=0,Gm=2,Bn=8,Km=9,Qm=15,Jm=8,ev=29,tv=256,Ds=tv+1+ev,rv=30,iv=19,nv=2*Ds+1,av=15,Z=3,Rt=258,je=Rt+Z+1,sv=32,Rn=42,Bs=69,An=73,In=91,Dn=103,Jt=113,Ei=666,ue=1,Ci=2,er=3,Or=4,ov=3;function Lt(e,t){return e.msg=Um[t],t}function ec(e){return(e<<1)-(e>4?9:0)}function Bt(e){for(var t=e.length;--t>=0;)e[t]=0}function Dt(e){var t=e.state,r=t.pending;r>e.avail_out&&(r=e.avail_out),r!==0&&(_e.arraySet(e.output,t.pending_buf,t.pending_out,r,e.next_out),e.next_out+=r,t.pending_out+=r,e.total_out+=r,e.avail_out-=r,t.pending-=r,t.pending===0&&(t.pending_out=0))}function ge(e,t){Re._tr_flush_block(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,Dt(e.strm)}function $(e,t){e.pending_buf[e.pending++]=t}function Si(e,t){e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=t&255}function dv(e,t,r,i){var s=e.avail_in;return s>i&&(s=i),s===0?0:(e.avail_in-=s,_e.arraySet(t,e.input,e.next_in,s,r),e.state.wrap===1?e.adler=tc(e.adler,t,s,r):e.state.wrap===2&&(e.adler=It(e.adler,t,s,r)),e.next_in+=s,e.total_in+=s,s)}function rc(e,t){var r=e.max_chain_length,i=e.strstart,s,a,l=e.prev_length,c=e.nice_match,m=e.strstart>e.w_size-je?e.strstart-(e.w_size-je):0,f=e.window,h=e.w_mask,S=e.prev,y=e.strstart+Rt,b=f[i+l-1],B=f[i+l];e.prev_length>=e.good_match&&(r>>=2),c>e.lookahead&&(c=e.lookahead);do if(s=t,!(f[s+l]!==B||f[s+l-1]!==b||f[s]!==f[i]||f[++s]!==f[i+1])){i+=2,s++;do;while(f[++i]===f[++s]&&f[++i]===f[++s]&&f[++i]===f[++s]&&f[++i]===f[++s]&&f[++i]===f[++s]&&f[++i]===f[++s]&&f[++i]===f[++s]&&f[++i]===f[++s]&&i<y);if(a=Rt-(y-i),i=y-Rt,a>l){if(e.match_start=t,l=a,a>=c)break;b=f[i+l-1],B=f[i+l]}}while((t=S[t&h])>m&&--r!==0);return l<=e.lookahead?l:e.lookahead}function tr(e){var t=e.w_size,r,i,s,a,l;do{if(a=e.window_size-e.lookahead-e.strstart,e.strstart>=t+(t-je)){_e.arraySet(e.window,e.window,t,t,0),e.match_start-=t,e.strstart-=t,e.block_start-=t,i=e.hash_size,r=i;do s=e.head[--r],e.head[r]=s>=t?s-t:0;while(--i);i=t,r=i;do s=e.prev[--r],e.prev[r]=s>=t?s-t:0;while(--i);a+=t}if(e.strm.avail_in===0)break;if(i=dv(e.strm,e.window,e.strstart+e.lookahead,a),e.lookahead+=i,e.lookahead+e.insert>=Z)for(l=e.strstart-e.insert,e.ins_h=e.window[l],e.ins_h=(e.ins_h<<e.hash_shift^e.window[l+1])&e.hash_mask;e.insert&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[l+Z-1])&e.hash_mask,e.prev[l&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=l,l++,e.insert--,!(e.lookahead+e.insert<Z)););}while(e.lookahead<je&&e.strm.avail_in!==0)}function lv(e,t){var r=65535;for(r>e.pending_buf_size-5&&(r=e.pending_buf_size-5);;){if(e.lookahead<=1){if(tr(e),e.lookahead===0&&t===rr)return ue;if(e.lookahead===0)break}e.strstart+=e.lookahead,e.lookahead=0;var i=e.block_start+r;if((e.strstart===0||e.strstart>=i)&&(e.lookahead=e.strstart-i,e.strstart=i,ge(e,!1),e.strm.avail_out===0)||e.strstart-e.block_start>=e.w_size-je&&(ge(e,!1),e.strm.avail_out===0))return ue}return e.insert=0,t===Mt?(ge(e,!0),e.strm.avail_out===0?er:Or):(e.strstart>e.block_start&&(ge(e,!1),e.strm.avail_out===0),ue)}function Is(e,t){for(var r,i;;){if(e.lookahead<je){if(tr(e),e.lookahead<je&&t===rr)return ue;if(e.lookahead===0)break}if(r=0,e.lookahead>=Z&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Z-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),r!==0&&e.strstart-r<=e.w_size-je&&(e.match_length=rc(e,r)),e.match_length>=Z)if(i=Re._tr_tally(e,e.strstart-e.match_start,e.match_length-Z),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=Z){e.match_length--;do e.strstart++,e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Z-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart;while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.ins_h=e.window[e.strstart],e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+1])&e.hash_mask;else i=Re._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(i&&(ge(e,!1),e.strm.avail_out===0))return ue}return e.insert=e.strstart<Z-1?e.strstart:Z-1,t===Mt?(ge(e,!0),e.strm.avail_out===0?er:Or):e.last_lit&&(ge(e,!1),e.strm.avail_out===0)?ue:Ci}function Lr(e,t){for(var r,i,s;;){if(e.lookahead<je){if(tr(e),e.lookahead<je&&t===rr)return ue;if(e.lookahead===0)break}if(r=0,e.lookahead>=Z&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Z-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=Z-1,r!==0&&e.prev_length<e.max_lazy_match&&e.strstart-r<=e.w_size-je&&(e.match_length=rc(e,r),e.match_length<=5&&(e.strategy===$m||e.match_length===Z&&e.strstart-e.match_start>4096)&&(e.match_length=Z-1)),e.prev_length>=Z&&e.match_length<=e.prev_length){s=e.strstart+e.lookahead-Z,i=Re._tr_tally(e,e.strstart-1-e.prev_match,e.prev_length-Z),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=s&&(e.ins_h=(e.ins_h<<e.hash_shift^e.window[e.strstart+Z-1])&e.hash_mask,r=e.prev[e.strstart&e.w_mask]=e.head[e.ins_h],e.head[e.ins_h]=e.strstart);while(--e.prev_length!==0);if(e.match_available=0,e.match_length=Z-1,e.strstart++,i&&(ge(e,!1),e.strm.avail_out===0))return ue}else if(e.match_available){if(i=Re._tr_tally(e,0,e.window[e.strstart-1]),i&&ge(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return ue}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&(i=Re._tr_tally(e,0,e.window[e.strstart-1]),e.match_available=0),e.insert=e.strstart<Z-1?e.strstart:Z-1,t===Mt?(ge(e,!0),e.strm.avail_out===0?er:Or):e.last_lit&&(ge(e,!1),e.strm.avail_out===0)?ue:Ci}function cv(e,t){for(var r,i,s,a,l=e.window;;){if(e.lookahead<=Rt){if(tr(e),e.lookahead<=Rt&&t===rr)return ue;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=Z&&e.strstart>0&&(s=e.strstart-1,i=l[s],i===l[++s]&&i===l[++s]&&i===l[++s])){a=e.strstart+Rt;do;while(i===l[++s]&&i===l[++s]&&i===l[++s]&&i===l[++s]&&i===l[++s]&&i===l[++s]&&i===l[++s]&&i===l[++s]&&s<a);e.match_length=Rt-(a-s),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=Z?(r=Re._tr_tally(e,1,e.match_length-Z),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(r=Re._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),r&&(ge(e,!1),e.strm.avail_out===0))return ue}return e.insert=0,t===Mt?(ge(e,!0),e.strm.avail_out===0?er:Or):e.last_lit&&(ge(e,!1),e.strm.avail_out===0)?ue:Ci}function uv(e,t){for(var r;;){if(e.lookahead===0&&(tr(e),e.lookahead===0)){if(t===rr)return ue;break}if(e.match_length=0,r=Re._tr_tally(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,r&&(ge(e,!1),e.strm.avail_out===0))return ue}return e.insert=0,t===Mt?(ge(e,!0),e.strm.avail_out===0?er:Or):e.last_lit&&(ge(e,!1),e.strm.avail_out===0)?ue:Ci}function tt(e,t,r,i,s){this.good_length=e,this.max_lazy=t,this.nice_length=r,this.max_chain=i,this.func=s}var Mr;Mr=[new tt(0,0,0,0,lv),new tt(4,4,8,4,Is),new tt(4,5,16,8,Is),new tt(4,6,32,32,Is),new tt(4,4,16,16,Lr),new tt(8,16,32,32,Lr),new tt(8,16,128,128,Lr),new tt(8,32,128,256,Lr),new tt(32,128,258,1024,Lr),new tt(32,258,258,4096,Lr)];function fv(e){e.window_size=2*e.w_size,Bt(e.head),e.max_lazy_match=Mr[e.level].max_lazy,e.good_match=Mr[e.level].good_length,e.nice_match=Mr[e.level].nice_length,e.max_chain_length=Mr[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=Z-1,e.match_available=0,e.ins_h=0}function hv(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Bn,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new _e.Buf16(nv*2),this.dyn_dtree=new _e.Buf16((2*rv+1)*2),this.bl_tree=new _e.Buf16((2*iv+1)*2),Bt(this.dyn_ltree),Bt(this.dyn_dtree),Bt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new _e.Buf16(av+1),this.heap=new _e.Buf16(2*Ds+1),Bt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new _e.Buf16(2*Ds+1),Bt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ic(e){var t;return!e||!e.state?Lt(e,Le):(e.total_in=e.total_out=0,e.data_type=Gm,t=e.state,t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap?Rn:Jt,e.adler=t.wrap===2?0:1,t.last_flush=rr,Re._tr_init(t),rt)}function nc(e){var t=ic(e);return t===rt&&fv(e.state),t}function pv(e,t){return!e||!e.state||e.state.wrap!==2?Le:(e.state.gzhead=t,rt)}function ac(e,t,r,i,s,a){if(!e)return Le;var l=1;if(t===Zm&&(t=6),i<0?(l=0,i=-i):i>15&&(l=2,i-=16),s<1||s>Km||r!==Bn||i<8||i>15||t<0||t>9||a<0||a>Ym)return Lt(e,Le);i===8&&(i=9);var c=new hv;return e.state=c,c.strm=e,c.wrap=l,c.gzhead=null,c.w_bits=i,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.hash_bits=s+7,c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+Z-1)/Z),c.window=new _e.Buf8(c.w_size*2),c.head=new _e.Buf16(c.hash_size),c.prev=new _e.Buf16(c.w_size),c.lit_bufsize=1<<s+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new _e.Buf8(c.pending_buf_size),c.d_buf=1*c.lit_bufsize,c.l_buf=3*c.lit_bufsize,c.level=t,c.strategy=a,c.method=r,nc(e)}function mv(e,t){return ac(e,t,Bn,Qm,Jm,Xm)}function vv(e,t){var r,i,s,a;if(!e||!e.state||t>Ql||t<0)return e?Lt(e,Le):Le;if(i=e.state,!e.output||!e.input&&e.avail_in!==0||i.status===Ei&&t!==Mt)return Lt(e,e.avail_out===0?As:Le);if(i.strm=e,r=i.last_flush,i.last_flush=t,i.status===Rn)if(i.wrap===2)e.adler=0,$(i,31),$(i,139),$(i,8),i.gzhead?($(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),$(i,i.gzhead.time&255),$(i,i.gzhead.time>>8&255),$(i,i.gzhead.time>>16&255),$(i,i.gzhead.time>>24&255),$(i,i.level===9?2:i.strategy>=Tn||i.level<2?4:0),$(i,i.gzhead.os&255),i.gzhead.extra&&i.gzhead.extra.length&&($(i,i.gzhead.extra.length&255),$(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(e.adler=It(e.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=Bs):($(i,0),$(i,0),$(i,0),$(i,0),$(i,0),$(i,i.level===9?2:i.strategy>=Tn||i.level<2?4:0),$(i,ov),i.status=Jt);else{var l=Bn+(i.w_bits-8<<4)<<8,c=-1;i.strategy>=Tn||i.level<2?c=0:i.level<6?c=1:i.level===6?c=2:c=3,l|=c<<6,i.strstart!==0&&(l|=sv),l+=31-l%31,i.status=Jt,Si(i,l),i.strstart!==0&&(Si(i,e.adler>>>16),Si(i,e.adler&65535)),e.adler=1}if(i.status===Bs)if(i.gzhead.extra){for(s=i.pending;i.gzindex<(i.gzhead.extra.length&65535)&&!(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>s&&(e.adler=It(e.adler,i.pending_buf,i.pending-s,s)),Dt(e),s=i.pending,i.pending===i.pending_buf_size));)$(i,i.gzhead.extra[i.gzindex]&255),i.gzindex++;i.gzhead.hcrc&&i.pending>s&&(e.adler=It(e.adler,i.pending_buf,i.pending-s,s)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=An)}else i.status=An;if(i.status===An)if(i.gzhead.name){s=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>s&&(e.adler=It(e.adler,i.pending_buf,i.pending-s,s)),Dt(e),s=i.pending,i.pending===i.pending_buf_size)){a=1;break}i.gzindex<i.gzhead.name.length?a=i.gzhead.name.charCodeAt(i.gzindex++)&255:a=0,$(i,a)}while(a!==0);i.gzhead.hcrc&&i.pending>s&&(e.adler=It(e.adler,i.pending_buf,i.pending-s,s)),a===0&&(i.gzindex=0,i.status=In)}else i.status=In;if(i.status===In)if(i.gzhead.comment){s=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>s&&(e.adler=It(e.adler,i.pending_buf,i.pending-s,s)),Dt(e),s=i.pending,i.pending===i.pending_buf_size)){a=1;break}i.gzindex<i.gzhead.comment.length?a=i.gzhead.comment.charCodeAt(i.gzindex++)&255:a=0,$(i,a)}while(a!==0);i.gzhead.hcrc&&i.pending>s&&(e.adler=It(e.adler,i.pending_buf,i.pending-s,s)),a===0&&(i.status=Dn)}else i.status=Dn;if(i.status===Dn&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&Dt(e),i.pending+2<=i.pending_buf_size&&($(i,e.adler&255),$(i,e.adler>>8&255),e.adler=0,i.status=Jt)):i.status=Jt),i.pending!==0){if(Dt(e),e.avail_out===0)return i.last_flush=-1,rt}else if(e.avail_in===0&&ec(t)<=ec(r)&&t!==Mt)return Lt(e,As);if(i.status===Ei&&e.avail_in!==0)return Lt(e,As);if(e.avail_in!==0||i.lookahead!==0||t!==rr&&i.status!==Ei){var m=i.strategy===Tn?uv(i,t):i.strategy===Vm?cv(i,t):Mr[i.level].func(i,t);if((m===er||m===Or)&&(i.status=Ei),m===ue||m===er)return e.avail_out===0&&(i.last_flush=-1),rt;if(m===Ci&&(t===Wm?Re._tr_align(i):t!==Ql&&(Re._tr_stored_block(i,0,0,!1),t===jm&&(Bt(i.head),i.lookahead===0&&(i.strstart=0,i.block_start=0,i.insert=0))),Dt(e),e.avail_out===0))return i.last_flush=-1,rt}return t!==Mt?rt:i.wrap<=0?Jl:(i.wrap===2?($(i,e.adler&255),$(i,e.adler>>8&255),$(i,e.adler>>16&255),$(i,e.adler>>24&255),$(i,e.total_in&255),$(i,e.total_in>>8&255),$(i,e.total_in>>16&255),$(i,e.total_in>>24&255)):(Si(i,e.adler>>>16),Si(i,e.adler&65535)),Dt(e),i.wrap>0&&(i.wrap=-i.wrap),i.pending!==0?rt:Jl)}function gv(e){var t;return!e||!e.state?Le:(t=e.state.status,t!==Rn&&t!==Bs&&t!==An&&t!==In&&t!==Dn&&t!==Jt&&t!==Ei?Lt(e,Le):(e.state=null,t===Jt?Lt(e,Hm):rt))}function bv(e,t){var r=t.length,i,s,a,l,c,m,f,h;if(!e||!e.state||(i=e.state,l=i.wrap,l===2||l===1&&i.status!==Rn||i.lookahead))return Le;for(l===1&&(e.adler=tc(e.adler,t,r,0)),i.wrap=0,r>=i.w_size&&(l===0&&(Bt(i.head),i.strstart=0,i.block_start=0,i.insert=0),h=new _e.Buf8(i.w_size),_e.arraySet(h,t,r-i.w_size,i.w_size,0),t=h,r=i.w_size),c=e.avail_in,m=e.next_in,f=e.input,e.avail_in=r,e.next_in=0,e.input=t,tr(i);i.lookahead>=Z;){s=i.strstart,a=i.lookahead-(Z-1);do i.ins_h=(i.ins_h<<i.hash_shift^i.window[s+Z-1])&i.hash_mask,i.prev[s&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=s,s++;while(--a);i.strstart=s,i.lookahead=Z-1,tr(i)}return i.strstart+=i.lookahead,i.block_start=i.strstart,i.insert=i.lookahead,i.lookahead=0,i.match_length=i.prev_length=Z-1,i.match_available=0,e.next_in=m,e.input=f,e.avail_in=c,i.wrap=l,rt}it.deflateInit=mv;it.deflateInit2=ac;it.deflateReset=nc;it.deflateResetKeep=ic;it.deflateSetHeader=pv;it.deflate=vv;it.deflateEnd=gv;it.deflateSetDictionary=bv;it.deflateInfo="pako deflate (from Nodeca project)"});var Rs=O(Pr=>{"use strict";var Ln=ht(),oc=!0,dc=!0;try{String.fromCharCode.apply(null,[0])}catch{oc=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{dc=!1}var Ti=new Ln.Buf8(256);for(mt=0;mt<256;mt++)Ti[mt]=mt>=252?6:mt>=248?5:mt>=240?4:mt>=224?3:mt>=192?2:1;var mt;Ti[254]=Ti[254]=1;Pr.string2buf=function(e){var t,r,i,s,a,l=e.length,c=0;for(s=0;s<l;s++)r=e.charCodeAt(s),(r&64512)===55296&&s+1<l&&(i=e.charCodeAt(s+1),(i&64512)===56320&&(r=65536+(r-55296<<10)+(i-56320),s++)),c+=r<128?1:r<2048?2:r<65536?3:4;for(t=new Ln.Buf8(c),a=0,s=0;a<c;s++)r=e.charCodeAt(s),(r&64512)===55296&&s+1<l&&(i=e.charCodeAt(s+1),(i&64512)===56320&&(r=65536+(r-55296<<10)+(i-56320),s++)),r<128?t[a++]=r:r<2048?(t[a++]=192|r>>>6,t[a++]=128|r&63):r<65536?(t[a++]=224|r>>>12,t[a++]=128|r>>>6&63,t[a++]=128|r&63):(t[a++]=240|r>>>18,t[a++]=128|r>>>12&63,t[a++]=128|r>>>6&63,t[a++]=128|r&63);return t};function lc(e,t){if(t<65534&&(e.subarray&&dc||!e.subarray&&oc))return String.fromCharCode.apply(null,Ln.shrinkBuf(e,t));for(var r="",i=0;i<t;i++)r+=String.fromCharCode(e[i]);return r}Pr.buf2binstring=function(e){return lc(e,e.length)};Pr.binstring2buf=function(e){for(var t=new Ln.Buf8(e.length),r=0,i=t.length;r<i;r++)t[r]=e.charCodeAt(r);return t};Pr.buf2string=function(e,t){var r,i,s,a,l=t||e.length,c=new Array(l*2);for(i=0,r=0;r<l;){if(s=e[r++],s<128){c[i++]=s;continue}if(a=Ti[s],a>4){c[i++]=65533,r+=a-1;continue}for(s&=a===2?31:a===3?15:7;a>1&&r<l;)s=s<<6|e[r++]&63,a--;if(a>1){c[i++]=65533;continue}s<65536?c[i++]=s:(s-=65536,c[i++]=55296|s>>10&1023,c[i++]=56320|s&1023)}return lc(c,i)};Pr.utf8border=function(e,t){var r;for(t=t||e.length,t>e.length&&(t=e.length),r=t-1;r>=0&&(e[r]&192)===128;)r--;return r<0||r===0?t:r+Ti[e[r]]>t?r:t}});var Ls=O((Pg,cc)=>{"use strict";function yv(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}cc.exports=yv});var pc=O(Di=>{"use strict";var Ai=sc(),Ii=ht(),Os=Rs(),Ps=Cn(),xv=Ls(),hc=Object.prototype.toString,wv=0,Ms=4,Nr=0,uc=1,fc=2,_v=-1,kv=0,Sv=8;function ir(e){if(!(this instanceof ir))return new ir(e);this.options=Ii.assign({level:_v,method:Sv,chunkSize:16384,windowBits:15,memLevel:8,strategy:kv,to:""},e||{});var t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new xv,this.strm.avail_out=0;var r=Ai.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy);if(r!==Nr)throw new Error(Ps[r]);if(t.header&&Ai.deflateSetHeader(this.strm,t.header),t.dictionary){var i;if(typeof t.dictionary=="string"?i=Os.string2buf(t.dictionary):hc.call(t.dictionary)==="[object ArrayBuffer]"?i=new Uint8Array(t.dictionary):i=t.dictionary,r=Ai.deflateSetDictionary(this.strm,i),r!==Nr)throw new Error(Ps[r]);this._dict_set=!0}}ir.prototype.push=function(e,t){var r=this.strm,i=this.options.chunkSize,s,a;if(this.ended)return!1;a=t===~~t?t:t===!0?Ms:wv,typeof e=="string"?r.input=Os.string2buf(e):hc.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;do{if(r.avail_out===0&&(r.output=new Ii.Buf8(i),r.next_out=0,r.avail_out=i),s=Ai.deflate(r,a),s!==uc&&s!==Nr)return this.onEnd(s),this.ended=!0,!1;(r.avail_out===0||r.avail_in===0&&(a===Ms||a===fc))&&(this.options.to==="string"?this.onData(Os.buf2binstring(Ii.shrinkBuf(r.output,r.next_out))):this.onData(Ii.shrinkBuf(r.output,r.next_out)))}while((r.avail_in>0||r.avail_out===0)&&s!==uc);return a===Ms?(s=Ai.deflateEnd(this.strm),this.onEnd(s),this.ended=!0,s===Nr):(a===fc&&(this.onEnd(Nr),r.avail_out=0),!0)};ir.prototype.onData=function(e){this.chunks.push(e)};ir.prototype.onEnd=function(e){e===Nr&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Ii.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function Ns(e,t){var r=new ir(t);if(r.push(e,!0),r.err)throw r.msg||Ps[r.err];return r.result}function Ev(e,t){return t=t||{},t.raw=!0,Ns(e,t)}function Cv(e,t){return t=t||{},t.gzip=!0,Ns(e,t)}Di.Deflate=ir;Di.deflate=Ns;Di.deflateRaw=Ev;Di.gzip=Cv});var vc=O((Fg,mc)=>{"use strict";var Mn=30,Tv=12;mc.exports=function(t,r){var i,s,a,l,c,m,f,h,S,y,b,B,E,R,C,k,M,T,I,N,_,P,A,F,L;i=t.state,s=t.next_in,F=t.input,a=s+(t.avail_in-5),l=t.next_out,L=t.output,c=l-(r-t.avail_out),m=l+(t.avail_out-257),f=i.dmax,h=i.wsize,S=i.whave,y=i.wnext,b=i.window,B=i.hold,E=i.bits,R=i.lencode,C=i.distcode,k=(1<<i.lenbits)-1,M=(1<<i.distbits)-1;e:do{E<15&&(B+=F[s++]<<E,E+=8,B+=F[s++]<<E,E+=8),T=R[B&k];t:for(;;){if(I=T>>>24,B>>>=I,E-=I,I=T>>>16&255,I===0)L[l++]=T&65535;else if(I&16){N=T&65535,I&=15,I&&(E<I&&(B+=F[s++]<<E,E+=8),N+=B&(1<<I)-1,B>>>=I,E-=I),E<15&&(B+=F[s++]<<E,E+=8,B+=F[s++]<<E,E+=8),T=C[B&M];r:for(;;){if(I=T>>>24,B>>>=I,E-=I,I=T>>>16&255,I&16){if(_=T&65535,I&=15,E<I&&(B+=F[s++]<<E,E+=8,E<I&&(B+=F[s++]<<E,E+=8)),_+=B&(1<<I)-1,_>f){t.msg="invalid distance too far back",i.mode=Mn;break e}if(B>>>=I,E-=I,I=l-c,_>I){if(I=_-I,I>S&&i.sane){t.msg="invalid distance too far back",i.mode=Mn;break e}if(P=0,A=b,y===0){if(P+=h-I,I<N){N-=I;do L[l++]=b[P++];while(--I);P=l-_,A=L}}else if(y<I){if(P+=h+y-I,I-=y,I<N){N-=I;do L[l++]=b[P++];while(--I);if(P=0,y<N){I=y,N-=I;do L[l++]=b[P++];while(--I);P=l-_,A=L}}}else if(P+=y-I,I<N){N-=I;do L[l++]=b[P++];while(--I);P=l-_,A=L}for(;N>2;)L[l++]=A[P++],L[l++]=A[P++],L[l++]=A[P++],N-=3;N&&(L[l++]=A[P++],N>1&&(L[l++]=A[P++]))}else{P=l-_;do L[l++]=L[P++],L[l++]=L[P++],L[l++]=L[P++],N-=3;while(N>2);N&&(L[l++]=L[P++],N>1&&(L[l++]=L[P++]))}}else if((I&64)===0){T=C[(T&65535)+(B&(1<<I)-1)];continue r}else{t.msg="invalid distance code",i.mode=Mn;break e}break}}else if((I&64)===0){T=R[(T&65535)+(B&(1<<I)-1)];continue t}else if(I&32){i.mode=Tv;break e}else{t.msg="invalid literal/length code",i.mode=Mn;break e}break}}while(s<a&&l<m);N=E>>3,s-=N,E-=N<<3,B&=(1<<E)-1,t.next_in=s,t.next_out=l,t.avail_in=s<a?5+(a-s):5-(s-a),t.avail_out=l<m?257+(m-l):257-(l-m),i.hold=B,i.bits=E}});var kc=O((zg,_c)=>{"use strict";var gc=ht(),Fr=15,bc=852,yc=592,xc=0,Fs=1,wc=2,Av=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],Iv=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],Dv=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],Bv=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];_c.exports=function(t,r,i,s,a,l,c,m){var f=m.bits,h=0,S=0,y=0,b=0,B=0,E=0,R=0,C=0,k=0,M=0,T,I,N,_,P,A=null,F=0,L,se=new gc.Buf16(Fr+1),ie=new gc.Buf16(Fr+1),Pe=null,Ne=0,yt,Fe,qt;for(h=0;h<=Fr;h++)se[h]=0;for(S=0;S<s;S++)se[r[i+S]]++;for(B=f,b=Fr;b>=1&&se[b]===0;b--);if(B>b&&(B=b),b===0)return a[l++]=1<<24|64<<16|0,a[l++]=1<<24|64<<16|0,m.bits=1,0;for(y=1;y<b&&se[y]===0;y++);for(B<y&&(B=y),C=1,h=1;h<=Fr;h++)if(C<<=1,C-=se[h],C<0)return-1;if(C>0&&(t===xc||b!==1))return-1;for(ie[1]=0,h=1;h<Fr;h++)ie[h+1]=ie[h]+se[h];for(S=0;S<s;S++)r[i+S]!==0&&(c[ie[r[i+S]]++]=S);if(t===xc?(A=Pe=c,L=19):t===Fs?(A=Av,F-=257,Pe=Iv,Ne-=257,L=256):(A=Dv,Pe=Bv,L=-1),M=0,S=0,h=y,P=l,E=B,R=0,N=-1,k=1<<B,_=k-1,t===Fs&&k>bc||t===wc&&k>yc)return 1;for(;;){yt=h-R,c[S]<L?(Fe=0,qt=c[S]):c[S]>L?(Fe=Pe[Ne+c[S]],qt=A[F+c[S]]):(Fe=96,qt=0),T=1<<h-R,I=1<<E,y=I;do I-=T,a[P+(M>>R)+I]=yt<<24|Fe<<16|qt|0;while(I!==0);for(T=1<<h-1;M&T;)T>>=1;if(T!==0?(M&=T-1,M+=T):M=0,S++,--se[h]===0){if(h===b)break;h=r[i+c[S]]}if(h>B&&(M&_)!==N){for(R===0&&(R=B),P+=y,E=h-R,C=1<<E;E+R<b&&(C-=se[E+R],!(C<=0));)E++,C<<=1;if(k+=1<<E,t===Fs&&k>bc||t===wc&&k>yc)return 1;N=M&_,a[N]=B<<24|E<<16|P-l|0}}return M!==0&&(a[P+M]=h-R<<24|64<<16|0),m.bits=B,0}});var nu=O(He=>{"use strict";var Ie=ht(),Hs=Cs(),nt=Ts(),Rv=vc(),Bi=kc(),Lv=0,Xc=1,Gc=2,Sc=4,Mv=5,On=6,nr=0,Ov=1,Pv=2,Me=-2,Kc=-3,Zs=-4,Nv=-5,Ec=8,Qc=1,Cc=2,Tc=3,Ac=4,Ic=5,Dc=6,Bc=7,Rc=8,Lc=9,Mc=10,Fn=11,vt=12,zs=13,Oc=14,qs=15,Pc=16,Nc=17,Fc=18,zc=19,Pn=20,Nn=21,qc=22,Uc=23,Wc=24,jc=25,Hc=26,Us=27,Zc=28,$c=29,ne=30,$s=31,Fv=32,zv=852,qv=592,Uv=15,Wv=Uv;function Vc(e){return(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24)}function jv(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Ie.Buf16(320),this.work=new Ie.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function Jc(e){var t;return!e||!e.state?Me:(t=e.state,e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=Qc,t.last=0,t.havedict=0,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Ie.Buf32(zv),t.distcode=t.distdyn=new Ie.Buf32(qv),t.sane=1,t.back=-1,nr)}function eu(e){var t;return!e||!e.state?Me:(t=e.state,t.wsize=0,t.whave=0,t.wnext=0,Jc(e))}function tu(e,t){var r,i;return!e||!e.state||(i=e.state,t<0?(r=0,t=-t):(r=(t>>4)+1,t<48&&(t&=15)),t&&(t<8||t>15))?Me:(i.window!==null&&i.wbits!==t&&(i.window=null),i.wrap=r,i.wbits=t,eu(e))}function ru(e,t){var r,i;return e?(i=new jv,e.state=i,i.window=null,r=tu(e,t),r!==nr&&(e.state=null),r):Me}function Hv(e){return ru(e,Wv)}var Yc=!0,Ws,js;function Zv(e){if(Yc){var t;for(Ws=new Ie.Buf32(512),js=new Ie.Buf32(32),t=0;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(Bi(Xc,e.lens,0,288,Ws,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;Bi(Gc,e.lens,0,32,js,0,e.work,{bits:5}),Yc=!1}e.lencode=Ws,e.lenbits=9,e.distcode=js,e.distbits=5}function iu(e,t,r,i){var s,a=e.state;return a.window===null&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0,a.window=new Ie.Buf8(a.wsize)),i>=a.wsize?(Ie.arraySet(a.window,t,r-a.wsize,a.wsize,0),a.wnext=0,a.whave=a.wsize):(s=a.wsize-a.wnext,s>i&&(s=i),Ie.arraySet(a.window,t,r-i,s,a.wnext),i-=s,i?(Ie.arraySet(a.window,t,r-i,i,0),a.wnext=i,a.whave=a.wsize):(a.wnext+=s,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=s))),0}function $v(e,t){var r,i,s,a,l,c,m,f,h,S,y,b,B,E,R=0,C,k,M,T,I,N,_,P,A=new Ie.Buf8(4),F,L,se=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!e||!e.state||!e.output||!e.input&&e.avail_in!==0)return Me;r=e.state,r.mode===vt&&(r.mode=zs),l=e.next_out,s=e.output,m=e.avail_out,a=e.next_in,i=e.input,c=e.avail_in,f=r.hold,h=r.bits,S=c,y=m,P=nr;e:for(;;)switch(r.mode){case Qc:if(r.wrap===0){r.mode=zs;break}for(;h<16;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if(r.wrap&2&&f===35615){r.check=0,A[0]=f&255,A[1]=f>>>8&255,r.check=nt(r.check,A,2,0),f=0,h=0,r.mode=Cc;break}if(r.flags=0,r.head&&(r.head.done=!1),!(r.wrap&1)||(((f&255)<<8)+(f>>8))%31){e.msg="incorrect header check",r.mode=ne;break}if((f&15)!==Ec){e.msg="unknown compression method",r.mode=ne;break}if(f>>>=4,h-=4,_=(f&15)+8,r.wbits===0)r.wbits=_;else if(_>r.wbits){e.msg="invalid window size",r.mode=ne;break}r.dmax=1<<_,e.adler=r.check=1,r.mode=f&512?Mc:vt,f=0,h=0;break;case Cc:for(;h<16;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if(r.flags=f,(r.flags&255)!==Ec){e.msg="unknown compression method",r.mode=ne;break}if(r.flags&57344){e.msg="unknown header flags set",r.mode=ne;break}r.head&&(r.head.text=f>>8&1),r.flags&512&&(A[0]=f&255,A[1]=f>>>8&255,r.check=nt(r.check,A,2,0)),f=0,h=0,r.mode=Tc;case Tc:for(;h<32;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}r.head&&(r.head.time=f),r.flags&512&&(A[0]=f&255,A[1]=f>>>8&255,A[2]=f>>>16&255,A[3]=f>>>24&255,r.check=nt(r.check,A,4,0)),f=0,h=0,r.mode=Ac;case Ac:for(;h<16;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}r.head&&(r.head.xflags=f&255,r.head.os=f>>8),r.flags&512&&(A[0]=f&255,A[1]=f>>>8&255,r.check=nt(r.check,A,2,0)),f=0,h=0,r.mode=Ic;case Ic:if(r.flags&1024){for(;h<16;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}r.length=f,r.head&&(r.head.extra_len=f),r.flags&512&&(A[0]=f&255,A[1]=f>>>8&255,r.check=nt(r.check,A,2,0)),f=0,h=0}else r.head&&(r.head.extra=null);r.mode=Dc;case Dc:if(r.flags&1024&&(b=r.length,b>c&&(b=c),b&&(r.head&&(_=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Array(r.head.extra_len)),Ie.arraySet(r.head.extra,i,a,b,_)),r.flags&512&&(r.check=nt(r.check,i,b,a)),c-=b,a+=b,r.length-=b),r.length))break e;r.length=0,r.mode=Bc;case Bc:if(r.flags&2048){if(c===0)break e;b=0;do _=i[a+b++],r.head&&_&&r.length<65536&&(r.head.name+=String.fromCharCode(_));while(_&&b<c);if(r.flags&512&&(r.check=nt(r.check,i,b,a)),c-=b,a+=b,_)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=Rc;case Rc:if(r.flags&4096){if(c===0)break e;b=0;do _=i[a+b++],r.head&&_&&r.length<65536&&(r.head.comment+=String.fromCharCode(_));while(_&&b<c);if(r.flags&512&&(r.check=nt(r.check,i,b,a)),c-=b,a+=b,_)break e}else r.head&&(r.head.comment=null);r.mode=Lc;case Lc:if(r.flags&512){for(;h<16;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if(f!==(r.check&65535)){e.msg="header crc mismatch",r.mode=ne;break}f=0,h=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),e.adler=r.check=0,r.mode=vt;break;case Mc:for(;h<32;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}e.adler=r.check=Vc(f),f=0,h=0,r.mode=Fn;case Fn:if(r.havedict===0)return e.next_out=l,e.avail_out=m,e.next_in=a,e.avail_in=c,r.hold=f,r.bits=h,Pv;e.adler=r.check=1,r.mode=vt;case vt:if(t===Mv||t===On)break e;case zs:if(r.last){f>>>=h&7,h-=h&7,r.mode=Us;break}for(;h<3;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}switch(r.last=f&1,f>>>=1,h-=1,f&3){case 0:r.mode=Oc;break;case 1:if(Zv(r),r.mode=Pn,t===On){f>>>=2,h-=2;break e}break;case 2:r.mode=Nc;break;case 3:e.msg="invalid block type",r.mode=ne}f>>>=2,h-=2;break;case Oc:for(f>>>=h&7,h-=h&7;h<32;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if((f&65535)!==(f>>>16^65535)){e.msg="invalid stored block lengths",r.mode=ne;break}if(r.length=f&65535,f=0,h=0,r.mode=qs,t===On)break e;case qs:r.mode=Pc;case Pc:if(b=r.length,b){if(b>c&&(b=c),b>m&&(b=m),b===0)break e;Ie.arraySet(s,i,a,b,l),c-=b,a+=b,m-=b,l+=b,r.length-=b;break}r.mode=vt;break;case Nc:for(;h<14;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if(r.nlen=(f&31)+257,f>>>=5,h-=5,r.ndist=(f&31)+1,f>>>=5,h-=5,r.ncode=(f&15)+4,f>>>=4,h-=4,r.nlen>286||r.ndist>30){e.msg="too many length or distance symbols",r.mode=ne;break}r.have=0,r.mode=Fc;case Fc:for(;r.have<r.ncode;){for(;h<3;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}r.lens[se[r.have++]]=f&7,f>>>=3,h-=3}for(;r.have<19;)r.lens[se[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,F={bits:r.lenbits},P=Bi(Lv,r.lens,0,19,r.lencode,0,r.work,F),r.lenbits=F.bits,P){e.msg="invalid code lengths set",r.mode=ne;break}r.have=0,r.mode=zc;case zc:for(;r.have<r.nlen+r.ndist;){for(;R=r.lencode[f&(1<<r.lenbits)-1],C=R>>>24,k=R>>>16&255,M=R&65535,!(C<=h);){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if(M<16)f>>>=C,h-=C,r.lens[r.have++]=M;else{if(M===16){for(L=C+2;h<L;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if(f>>>=C,h-=C,r.have===0){e.msg="invalid bit length repeat",r.mode=ne;break}_=r.lens[r.have-1],b=3+(f&3),f>>>=2,h-=2}else if(M===17){for(L=C+3;h<L;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}f>>>=C,h-=C,_=0,b=3+(f&7),f>>>=3,h-=3}else{for(L=C+7;h<L;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}f>>>=C,h-=C,_=0,b=11+(f&127),f>>>=7,h-=7}if(r.have+b>r.nlen+r.ndist){e.msg="invalid bit length repeat",r.mode=ne;break}for(;b--;)r.lens[r.have++]=_}}if(r.mode===ne)break;if(r.lens[256]===0){e.msg="invalid code -- missing end-of-block",r.mode=ne;break}if(r.lenbits=9,F={bits:r.lenbits},P=Bi(Xc,r.lens,0,r.nlen,r.lencode,0,r.work,F),r.lenbits=F.bits,P){e.msg="invalid literal/lengths set",r.mode=ne;break}if(r.distbits=6,r.distcode=r.distdyn,F={bits:r.distbits},P=Bi(Gc,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,F),r.distbits=F.bits,P){e.msg="invalid distances set",r.mode=ne;break}if(r.mode=Pn,t===On)break e;case Pn:r.mode=Nn;case Nn:if(c>=6&&m>=258){e.next_out=l,e.avail_out=m,e.next_in=a,e.avail_in=c,r.hold=f,r.bits=h,Rv(e,y),l=e.next_out,s=e.output,m=e.avail_out,a=e.next_in,i=e.input,c=e.avail_in,f=r.hold,h=r.bits,r.mode===vt&&(r.back=-1);break}for(r.back=0;R=r.lencode[f&(1<<r.lenbits)-1],C=R>>>24,k=R>>>16&255,M=R&65535,!(C<=h);){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if(k&&(k&240)===0){for(T=C,I=k,N=M;R=r.lencode[N+((f&(1<<T+I)-1)>>T)],C=R>>>24,k=R>>>16&255,M=R&65535,!(T+C<=h);){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}f>>>=T,h-=T,r.back+=T}if(f>>>=C,h-=C,r.back+=C,r.length=M,k===0){r.mode=Hc;break}if(k&32){r.back=-1,r.mode=vt;break}if(k&64){e.msg="invalid literal/length code",r.mode=ne;break}r.extra=k&15,r.mode=qc;case qc:if(r.extra){for(L=r.extra;h<L;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}r.length+=f&(1<<r.extra)-1,f>>>=r.extra,h-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=Uc;case Uc:for(;R=r.distcode[f&(1<<r.distbits)-1],C=R>>>24,k=R>>>16&255,M=R&65535,!(C<=h);){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if((k&240)===0){for(T=C,I=k,N=M;R=r.distcode[N+((f&(1<<T+I)-1)>>T)],C=R>>>24,k=R>>>16&255,M=R&65535,!(T+C<=h);){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}f>>>=T,h-=T,r.back+=T}if(f>>>=C,h-=C,r.back+=C,k&64){e.msg="invalid distance code",r.mode=ne;break}r.offset=M,r.extra=k&15,r.mode=Wc;case Wc:if(r.extra){for(L=r.extra;h<L;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}r.offset+=f&(1<<r.extra)-1,f>>>=r.extra,h-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){e.msg="invalid distance too far back",r.mode=ne;break}r.mode=jc;case jc:if(m===0)break e;if(b=y-m,r.offset>b){if(b=r.offset-b,b>r.whave&&r.sane){e.msg="invalid distance too far back",r.mode=ne;break}b>r.wnext?(b-=r.wnext,B=r.wsize-b):B=r.wnext-b,b>r.length&&(b=r.length),E=r.window}else E=s,B=l-r.offset,b=r.length;b>m&&(b=m),m-=b,r.length-=b;do s[l++]=E[B++];while(--b);r.length===0&&(r.mode=Nn);break;case Hc:if(m===0)break e;s[l++]=r.length,m--,r.mode=Nn;break;case Us:if(r.wrap){for(;h<32;){if(c===0)break e;c--,f|=i[a++]<<h,h+=8}if(y-=m,e.total_out+=y,r.total+=y,y&&(e.adler=r.check=r.flags?nt(r.check,s,y,l-y):Hs(r.check,s,y,l-y)),y=m,(r.flags?f:Vc(f))!==r.check){e.msg="incorrect data check",r.mode=ne;break}f=0,h=0}r.mode=Zc;case Zc:if(r.wrap&&r.flags){for(;h<32;){if(c===0)break e;c--,f+=i[a++]<<h,h+=8}if(f!==(r.total&4294967295)){e.msg="incorrect length check",r.mode=ne;break}f=0,h=0}r.mode=$c;case $c:P=Ov;break e;case ne:P=Kc;break e;case $s:return Zs;case Fv:default:return Me}return e.next_out=l,e.avail_out=m,e.next_in=a,e.avail_in=c,r.hold=f,r.bits=h,(r.wsize||y!==e.avail_out&&r.mode<ne&&(r.mode<Us||t!==Sc))&&iu(e,e.output,e.next_out,y-e.avail_out)?(r.mode=$s,Zs):(S-=e.avail_in,y-=e.avail_out,e.total_in+=S,e.total_out+=y,r.total+=y,r.wrap&&y&&(e.adler=r.check=r.flags?nt(r.check,s,y,e.next_out-y):Hs(r.check,s,y,e.next_out-y)),e.data_type=r.bits+(r.last?64:0)+(r.mode===vt?128:0)+(r.mode===Pn||r.mode===qs?256:0),(S===0&&y===0||t===Sc)&&P===nr&&(P=Nv),P)}function Vv(e){if(!e||!e.state)return Me;var t=e.state;return t.window&&(t.window=null),e.state=null,nr}function Yv(e,t){var r;return!e||!e.state||(r=e.state,(r.wrap&2)===0)?Me:(r.head=t,t.done=!1,nr)}function Xv(e,t){var r=t.length,i,s,a;return!e||!e.state||(i=e.state,i.wrap!==0&&i.mode!==Fn)?Me:i.mode===Fn&&(s=1,s=Hs(s,t,r,0),s!==i.check)?Kc:(a=iu(e,t,r,r),a?(i.mode=$s,Zs):(i.havedict=1,nr))}He.inflateReset=eu;He.inflateReset2=tu;He.inflateResetKeep=Jc;He.inflateInit=Hv;He.inflateInit2=ru;He.inflate=$v;He.inflateEnd=Vv;He.inflateGetHeader=Yv;He.inflateSetDictionary=Xv;He.inflateInfo="pako inflate (from Nodeca project)"});var Vs=O((Ug,au)=>{"use strict";au.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}});var ou=O((Wg,su)=>{"use strict";function Gv(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}su.exports=Gv});var lu=O(Li=>{"use strict";var zr=nu(),Ri=ht(),zn=Rs(),de=Vs(),Ys=Cn(),Kv=Ls(),Qv=ou(),du=Object.prototype.toString;function ar(e){if(!(this instanceof ar))return new ar(e);this.options=Ri.assign({chunkSize:16384,windowBits:0,to:""},e||{});var t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Kv,this.strm.avail_out=0;var r=zr.inflateInit2(this.strm,t.windowBits);if(r!==de.Z_OK)throw new Error(Ys[r]);if(this.header=new Qv,zr.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=zn.string2buf(t.dictionary):du.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(r=zr.inflateSetDictionary(this.strm,t.dictionary),r!==de.Z_OK)))throw new Error(Ys[r])}ar.prototype.push=function(e,t){var r=this.strm,i=this.options.chunkSize,s=this.options.dictionary,a,l,c,m,f,h=!1;if(this.ended)return!1;l=t===~~t?t:t===!0?de.Z_FINISH:de.Z_NO_FLUSH,typeof e=="string"?r.input=zn.binstring2buf(e):du.call(e)==="[object ArrayBuffer]"?r.input=new Uint8Array(e):r.input=e,r.next_in=0,r.avail_in=r.input.length;do{if(r.avail_out===0&&(r.output=new Ri.Buf8(i),r.next_out=0,r.avail_out=i),a=zr.inflate(r,de.Z_NO_FLUSH),a===de.Z_NEED_DICT&&s&&(a=zr.inflateSetDictionary(this.strm,s)),a===de.Z_BUF_ERROR&&h===!0&&(a=de.Z_OK,h=!1),a!==de.Z_STREAM_END&&a!==de.Z_OK)return this.onEnd(a),this.ended=!0,!1;r.next_out&&(r.avail_out===0||a===de.Z_STREAM_END||r.avail_in===0&&(l===de.Z_FINISH||l===de.Z_SYNC_FLUSH))&&(this.options.to==="string"?(c=zn.utf8border(r.output,r.next_out),m=r.next_out-c,f=zn.buf2string(r.output,c),r.next_out=m,r.avail_out=i-m,m&&Ri.arraySet(r.output,r.output,c,m,0),this.onData(f)):this.onData(Ri.shrinkBuf(r.output,r.next_out))),r.avail_in===0&&r.avail_out===0&&(h=!0)}while((r.avail_in>0||r.avail_out===0)&&a!==de.Z_STREAM_END);return a===de.Z_STREAM_END&&(l=de.Z_FINISH),l===de.Z_FINISH?(a=zr.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===de.Z_OK):(l===de.Z_SYNC_FLUSH&&(this.onEnd(de.Z_OK),r.avail_out=0),!0)};ar.prototype.onData=function(e){this.chunks.push(e)};ar.prototype.onEnd=function(e){e===de.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=Ri.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function Xs(e,t){var r=new ar(t);if(r.push(e,!0),r.err)throw r.msg||Ys[r.err];return r.result}function Jv(e,t){return t=t||{},t.raw=!0,Xs(e,t)}Li.Inflate=ar;Li.inflate=Xs;Li.inflateRaw=Jv;Li.ungzip=Xs});var fu=O((Hg,uu)=>{"use strict";var e0=ht().assign,t0=pc(),r0=lu(),i0=Vs(),cu={};e0(cu,t0,r0,i0);uu.exports=cu});var pu=O(Un=>{"use strict";var n0=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a0=fu(),hu=ae(),qn=Ae(),s0=n0?"uint8array":"array";Un.magic="\b\0";function sr(e,t){qn.call(this,"FlateWorker/"+e),this._pako=null,this._pakoAction=e,this._pakoOptions=t,this.meta={}}hu.inherits(sr,qn);sr.prototype.processChunk=function(e){this.meta=e.meta,this._pako===null&&this._createPako(),this._pako.push(hu.transformTo(s0,e.data),!1)};sr.prototype.flush=function(){qn.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)};sr.prototype.cleanUp=function(){qn.prototype.cleanUp.call(this),this._pako=null};sr.prototype._createPako=function(){this._pako=new a0[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var e=this;this._pako.onData=function(t){e.push({data:t,meta:e.meta})}};Un.compressWorker=function(e){return new sr("Deflate",e)};Un.uncompressWorker=function(){return new sr("Inflate",{})}});var Ks=O(Gs=>{"use strict";var mu=Ae();Gs.STORE={magic:"\0\0",compressWorker:function(){return new mu("STORE compression")},uncompressWorker:function(){return new mu("STORE decompression")}};Gs.DEFLATE=pu()});var Qs=O(or=>{"use strict";or.LOCAL_FILE_HEADER="PK";or.CENTRAL_FILE_HEADER="PK";or.CENTRAL_DIRECTORY_END="PK";or.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07";or.ZIP64_CENTRAL_DIRECTORY_END="PK";or.DATA_DESCRIPTOR="PK\x07\b"});var yu=O((Yg,bu)=>{"use strict";var qr=ae(),Ur=Ae(),Js=Ar(),vu=wn(),Wn=Qs(),K=function(e,t){var r="",i;for(i=0;i<t;i++)r+=String.fromCharCode(e&255),e=e>>>8;return r},o0=function(e,t){var r=e;return e||(r=t?16893:33204),(r&65535)<<16},d0=function(e){return(e||0)&63},gu=function(e,t,r,i,s,a){var l=e.file,c=e.compression,m=a!==Js.utf8encode,f=qr.transformTo("string",a(l.name)),h=qr.transformTo("string",Js.utf8encode(l.name)),S=l.comment,y=qr.transformTo("string",a(S)),b=qr.transformTo("string",Js.utf8encode(S)),B=h.length!==l.name.length,E=b.length!==S.length,R,C,k="",M="",T="",I=l.dir,N=l.date,_={crc32:0,compressedSize:0,uncompressedSize:0};(!t||r)&&(_.crc32=e.crc32,_.compressedSize=e.compressedSize,_.uncompressedSize=e.uncompressedSize);var P=0;t&&(P|=8),!m&&(B||E)&&(P|=2048);var A=0,F=0;I&&(A|=16),s==="UNIX"?(F=798,A|=o0(l.unixPermissions,I)):(F=20,A|=d0(l.dosPermissions,I)),R=N.getUTCHours(),R=R<<6,R=R|N.getUTCMinutes(),R=R<<5,R=R|N.getUTCSeconds()/2,C=N.getUTCFullYear()-1980,C=C<<4,C=C|N.getUTCMonth()+1,C=C<<5,C=C|N.getUTCDate(),B&&(M=K(1,1)+K(vu(f),4)+h,k+="up"+K(M.length,2)+M),E&&(T=K(1,1)+K(vu(y),4)+b,k+="uc"+K(T.length,2)+T);var L="";L+=`
\0`,L+=K(P,2),L+=c.magic,L+=K(R,2),L+=K(C,2),L+=K(_.crc32,4),L+=K(_.compressedSize,4),L+=K(_.uncompressedSize,4),L+=K(f.length,2),L+=K(k.length,2);var se=Wn.LOCAL_FILE_HEADER+L+f+k,ie=Wn.CENTRAL_FILE_HEADER+K(F,2)+L+K(y.length,2)+"\0\0\0\0"+K(A,4)+K(i,4)+f+k+y;return{fileRecord:se,dirRecord:ie}},l0=function(e,t,r,i,s){var a="",l=qr.transformTo("string",s(i));return a=Wn.CENTRAL_DIRECTORY_END+"\0\0\0\0"+K(e,2)+K(e,2)+K(t,4)+K(r,4)+K(l.length,2)+l,a},c0=function(e){var t="";return t=Wn.DATA_DESCRIPTOR+K(e.crc32,4)+K(e.compressedSize,4)+K(e.uncompressedSize,4),t};function Ze(e,t,r,i){Ur.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=t,this.zipPlatform=r,this.encodeFileName=i,this.streamFiles=e,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}qr.inherits(Ze,Ur);Ze.prototype.push=function(e){var t=e.meta.percent||0,r=this.entriesCount,i=this._sources.length;this.accumulate?this.contentBuffer.push(e):(this.bytesWritten+=e.data.length,Ur.prototype.push.call(this,{data:e.data,meta:{currentFile:this.currentFile,percent:r?(t+100*(r-i-1))/r:100}}))};Ze.prototype.openedSource=function(e){this.currentSourceOffset=this.bytesWritten,this.currentFile=e.file.name;var t=this.streamFiles&&!e.file.dir;if(t){var r=gu(e,t,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:r.fileRecord,meta:{percent:0}})}else this.accumulate=!0};Ze.prototype.closedSource=function(e){this.accumulate=!1;var t=this.streamFiles&&!e.file.dir,r=gu(e,t,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(r.dirRecord),t)this.push({data:c0(e),meta:{percent:100}});else for(this.push({data:r.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null};Ze.prototype.flush=function(){for(var e=this.bytesWritten,t=0;t<this.dirRecords.length;t++)this.push({data:this.dirRecords[t],meta:{percent:100}});var r=this.bytesWritten-e,i=l0(this.dirRecords.length,r,e,this.zipComment,this.encodeFileName);this.push({data:i,meta:{percent:100}})};Ze.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()};Ze.prototype.registerPrevious=function(e){this._sources.push(e);var t=this;return e.on("data",function(r){t.processChunk(r)}),e.on("end",function(){t.closedSource(t.previous.streamInfo),t._sources.length?t.prepareNextSource():t.end()}),e.on("error",function(r){t.error(r)}),this};Ze.prototype.resume=function(){if(!Ur.prototype.resume.call(this))return!1;if(!this.previous&&this._sources.length)return this.prepareNextSource(),!0;if(!this.previous&&!this._sources.length&&!this.generatedError)return this.end(),!0};Ze.prototype.error=function(e){var t=this._sources;if(!Ur.prototype.error.call(this,e))return!1;for(var r=0;r<t.length;r++)try{t[r].error(e)}catch{}return!0};Ze.prototype.lock=function(){Ur.prototype.lock.call(this);for(var e=this._sources,t=0;t<e.length;t++)e[t].lock()};bu.exports=Ze});var wu=O(xu=>{"use strict";var u0=Ks(),f0=yu(),h0=function(e,t){var r=e||t,i=u0[r];if(!i)throw new Error(r+" is not a valid compression method !");return i};xu.generateWorker=function(e,t,r){var i=new f0(t.streamFiles,r,t.platform,t.encodeFileName),s=0;try{e.forEach(function(a,l){s++;var c=h0(l.options.compression,t.compression),m=l.options.compressionOptions||t.compressionOptions||{},f=l.dir,h=l.date;l._compressWorker(c,m).withStreamInfo("file",{name:a,dir:f,date:h,comment:l.comment||"",unixPermissions:l.unixPermissions,dosPermissions:l.dosPermissions}).pipe(i)}),i.entriesCount=s}catch(a){i.error(a)}return i}});var ku=O((Gg,_u)=>{"use strict";var p0=ae(),jn=Ae();function Mi(e,t){jn.call(this,"Nodejs stream input adapter for "+e),this._upstreamEnded=!1,this._bindStream(t)}p0.inherits(Mi,jn);Mi.prototype._bindStream=function(e){var t=this;this._stream=e,e.pause(),e.on("data",function(r){t.push({data:r,meta:{percent:0}})}).on("error",function(r){t.isPaused?this.generatedError=r:t.error(r)}).on("end",function(){t.isPaused?t._upstreamEnded=!0:t.end()})};Mi.prototype.pause=function(){return jn.prototype.pause.call(this)?(this._stream.pause(),!0):!1};Mi.prototype.resume=function(){return jn.prototype.resume.call(this)?(this._upstreamEnded?this.end():this._stream.resume(),!0):!1};_u.exports=Mi});var Lu=O((Kg,Ru)=>{"use strict";var m0=Ar(),Oi=ae(),Tu=Ae(),v0=ns(),Au=as(),Su=_n(),g0=El(),b0=wu(),Eu=ci(),y0=ku(),Iu=function(e,t,r){var i=Oi.getTypeOf(t),s,a=Oi.extend(r||{},Au);a.date=a.date||new Date,a.compression!==null&&(a.compression=a.compression.toUpperCase()),typeof a.unixPermissions=="string"&&(a.unixPermissions=parseInt(a.unixPermissions,8)),a.unixPermissions&&a.unixPermissions&16384&&(a.dir=!0),a.dosPermissions&&a.dosPermissions&16&&(a.dir=!0),a.dir&&(e=Du(e)),a.createFolders&&(s=x0(e))&&Bu.call(this,s,!0);var l=i==="string"&&a.binary===!1&&a.base64===!1;(!r||typeof r.binary>"u")&&(a.binary=!l);var c=t instanceof Su&&t.uncompressedSize===0;(c||a.dir||!t||t.length===0)&&(a.base64=!1,a.binary=!0,t="",a.compression="STORE",i="string");var m=null;t instanceof Su||t instanceof Tu?m=t:Eu.isNode&&Eu.isStream(t)?m=new y0(e,t):m=Oi.prepareContent(e,t,a.binary,a.optimizedBinaryString,a.base64);var f=new g0(e,m,a);this.files[e]=f},x0=function(e){e.slice(-1)==="/"&&(e=e.substring(0,e.length-1));var t=e.lastIndexOf("/");return t>0?e.substring(0,t):""},Du=function(e){return e.slice(-1)!=="/"&&(e+="/"),e},Bu=function(e,t){return t=typeof t<"u"?t:Au.createFolders,e=Du(e),this.files[e]||Iu.call(this,e,null,{dir:!0,createFolders:t}),this.files[e]};function Cu(e){return Object.prototype.toString.call(e)==="[object RegExp]"}var w0={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(e){var t,r,i;for(t in this.files)i=this.files[t],r=t.slice(this.root.length,t.length),r&&t.slice(0,this.root.length)===this.root&&e(r,i)},filter:function(e){var t=[];return this.forEach(function(r,i){e(r,i)&&t.push(i)}),t},file:function(e,t,r){if(arguments.length===1)if(Cu(e)){var i=e;return this.filter(function(a,l){return!l.dir&&i.test(a)})}else{var s=this.files[this.root+e];return s&&!s.dir?s:null}else e=this.root+e,Iu.call(this,e,t,r);return this},folder:function(e){if(!e)return this;if(Cu(e))return this.filter(function(s,a){return a.dir&&e.test(s)});var t=this.root+e,r=Bu.call(this,t),i=this.clone();return i.root=r.name,i},remove:function(e){e=this.root+e;var t=this.files[e];if(t||(e.slice(-1)!=="/"&&(e+="/"),t=this.files[e]),t&&!t.dir)delete this.files[e];else for(var r=this.filter(function(s,a){return a.name.slice(0,e.length)===e}),i=0;i<r.length;i++)delete this.files[r[i].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(e){var t,r={};try{if(r=Oi.extend(e||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:m0.utf8encode}),r.type=r.type.toLowerCase(),r.compression=r.compression.toUpperCase(),r.type==="binarystring"&&(r.type="string"),!r.type)throw new Error("No output type specified.");Oi.checkSupport(r.type),(r.platform==="darwin"||r.platform==="freebsd"||r.platform==="linux"||r.platform==="sunos")&&(r.platform="UNIX"),r.platform==="win32"&&(r.platform="DOS");var i=r.comment||this.comment||"";t=b0.generateWorker(this,r,i)}catch(s){t=new Tu("error"),t.error(s)}return new v0(t,r.type||"string",r.mimeType)},generateAsync:function(e,t){return this.generateInternalStream(e).accumulate(t)},generateNodeStream:function(e,t){return e=e||{},e.type||(e.type="nodebuffer"),this.generateInternalStream(e).toNodejsStream(t)}};Ru.exports=w0});var eo=O((Qg,Ou)=>{"use strict";var _0=ae();function Mu(e){this.data=e,this.length=e.length,this.index=0,this.zero=0}Mu.prototype={checkOffset:function(e){this.checkIndex(this.index+e)},checkIndex:function(e){if(this.length<this.zero+e||e<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+e+"). Corrupted zip ?")},setIndex:function(e){this.checkIndex(e),this.index=e},skip:function(e){this.setIndex(this.index+e)},byteAt:function(){},readInt:function(e){var t=0,r;for(this.checkOffset(e),r=this.index+e-1;r>=this.index;r--)t=(t<<8)+this.byteAt(r);return this.index+=e,t},readString:function(e){return _0.transformTo("string",this.readData(e))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var e=this.readInt(4);return new Date(Date.UTC((e>>25&127)+1980,(e>>21&15)-1,e>>16&31,e>>11&31,e>>5&63,(e&31)<<1))}};Ou.exports=Mu});var to=O((Jg,Nu)=>{"use strict";var Pu=eo(),k0=ae();function Wr(e){Pu.call(this,e);for(var t=0;t<this.data.length;t++)e[t]=e[t]&255}k0.inherits(Wr,Pu);Wr.prototype.byteAt=function(e){return this.data[this.zero+e]};Wr.prototype.lastIndexOfSignature=function(e){for(var t=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2),s=e.charCodeAt(3),a=this.length-4;a>=0;--a)if(this.data[a]===t&&this.data[a+1]===r&&this.data[a+2]===i&&this.data[a+3]===s)return a-this.zero;return-1};Wr.prototype.readAndCheckSignature=function(e){var t=e.charCodeAt(0),r=e.charCodeAt(1),i=e.charCodeAt(2),s=e.charCodeAt(3),a=this.readData(4);return t===a[0]&&r===a[1]&&i===a[2]&&s===a[3]};Wr.prototype.readData=function(e){if(this.checkOffset(e),e===0)return[];var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};Nu.exports=Wr});var qu=O((eb,zu)=>{"use strict";var Fu=eo(),S0=ae();function jr(e){Fu.call(this,e)}S0.inherits(jr,Fu);jr.prototype.byteAt=function(e){return this.data.charCodeAt(this.zero+e)};jr.prototype.lastIndexOfSignature=function(e){return this.data.lastIndexOf(e)-this.zero};jr.prototype.readAndCheckSignature=function(e){var t=this.readData(4);return e===t};jr.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};zu.exports=jr});var io=O((tb,Wu)=>{"use strict";var Uu=to(),E0=ae();function ro(e){Uu.call(this,e)}E0.inherits(ro,Uu);ro.prototype.readData=function(e){if(this.checkOffset(e),e===0)return new Uint8Array(0);var t=this.data.subarray(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};Wu.exports=ro});var Zu=O((rb,Hu)=>{"use strict";var ju=io(),C0=ae();function no(e){ju.call(this,e)}C0.inherits(no,ju);no.prototype.readData=function(e){this.checkOffset(e);var t=this.data.slice(this.zero+this.index,this.zero+this.index+e);return this.index+=e,t};Hu.exports=no});var ao=O((ib,Vu)=>{"use strict";var Hn=ae(),$u=ut(),T0=to(),A0=qu(),I0=Zu(),D0=io();Vu.exports=function(e){var t=Hn.getTypeOf(e);return Hn.checkSupport(t),t==="string"&&!$u.uint8array?new A0(e):t==="nodebuffer"?new I0(e):$u.uint8array?new D0(Hn.transformTo("uint8array",e)):new T0(Hn.transformTo("array",e))}});var Ku=O((nb,Gu)=>{"use strict";var so=ao(),Ot=ae(),B0=_n(),Yu=wn(),Zn=Ar(),$n=Ks(),R0=ut(),L0=0,M0=3,O0=function(e){for(var t in $n)if(Object.prototype.hasOwnProperty.call($n,t)&&$n[t].magic===e)return $n[t];return null};function Xu(e,t){this.options=e,this.loadOptions=t}Xu.prototype={isEncrypted:function(){return(this.bitFlag&1)===1},useUTF8:function(){return(this.bitFlag&2048)===2048},readLocalPart:function(e){var t,r;if(e.skip(22),this.fileNameLength=e.readInt(2),r=e.readInt(2),this.fileName=e.readData(this.fileNameLength),e.skip(r),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if(t=O0(this.compressionMethod),t===null)throw new Error("Corrupted zip : compression "+Ot.pretty(this.compressionMethod)+" unknown (inner file : "+Ot.transformTo("string",this.fileName)+")");this.decompressed=new B0(this.compressedSize,this.uncompressedSize,this.crc32,t,e.readData(this.compressedSize))},readCentralPart:function(e){this.versionMadeBy=e.readInt(2),e.skip(2),this.bitFlag=e.readInt(2),this.compressionMethod=e.readString(2),this.date=e.readDate(),this.crc32=e.readInt(4),this.compressedSize=e.readInt(4),this.uncompressedSize=e.readInt(4);var t=e.readInt(2);if(this.extraFieldsLength=e.readInt(2),this.fileCommentLength=e.readInt(2),this.diskNumberStart=e.readInt(2),this.internalFileAttributes=e.readInt(2),this.externalFileAttributes=e.readInt(4),this.localHeaderOffset=e.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");e.skip(t),this.readExtraFields(e),this.parseZIP64ExtraField(e),this.fileComment=e.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var e=this.versionMadeBy>>8;this.dir=!!(this.externalFileAttributes&16),e===L0&&(this.dosPermissions=this.externalFileAttributes&63),e===M0&&(this.unixPermissions=this.externalFileAttributes>>16&65535),!this.dir&&this.fileNameStr.slice(-1)==="/"&&(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var e=so(this.extraFields[1].value);this.uncompressedSize===Ot.MAX_VALUE_32BITS&&(this.uncompressedSize=e.readInt(8)),this.compressedSize===Ot.MAX_VALUE_32BITS&&(this.compressedSize=e.readInt(8)),this.localHeaderOffset===Ot.MAX_VALUE_32BITS&&(this.localHeaderOffset=e.readInt(8)),this.diskNumberStart===Ot.MAX_VALUE_32BITS&&(this.diskNumberStart=e.readInt(4))}},readExtraFields:function(e){var t=e.index+this.extraFieldsLength,r,i,s;for(this.extraFields||(this.extraFields={});e.index+4<t;)r=e.readInt(2),i=e.readInt(2),s=e.readData(i),this.extraFields[r]={id:r,length:i,value:s};e.setIndex(t)},handleUTF8:function(){var e=R0.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=Zn.utf8decode(this.fileName),this.fileCommentStr=Zn.utf8decode(this.fileComment);else{var t=this.findExtraFieldUnicodePath();if(t!==null)this.fileNameStr=t;else{var r=Ot.transformTo(e,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(r)}var i=this.findExtraFieldUnicodeComment();if(i!==null)this.fileCommentStr=i;else{var s=Ot.transformTo(e,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(s)}}},findExtraFieldUnicodePath:function(){var e=this.extraFields[28789];if(e){var t=so(e.value);return t.readInt(1)!==1||Yu(this.fileName)!==t.readInt(4)?null:Zn.utf8decode(t.readData(e.length-5))}return null},findExtraFieldUnicodeComment:function(){var e=this.extraFields[25461];if(e){var t=so(e.value);return t.readInt(1)!==1||Yu(this.fileComment)!==t.readInt(4)?null:Zn.utf8decode(t.readData(e.length-5))}return null}};Gu.exports=Xu});var ef=O((ab,Ju)=>{"use strict";var P0=ao(),gt=ae(),$e=Qs(),N0=Ku(),F0=ut();function Qu(e){this.files=[],this.loadOptions=e}Qu.prototype={checkSignature:function(e){if(!this.reader.readAndCheckSignature(e)){this.reader.index-=4;var t=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+gt.pretty(t)+", expected "+gt.pretty(e)+")")}},isSignature:function(e,t){var r=this.reader.index;this.reader.setIndex(e);var i=this.reader.readString(4),s=i===t;return this.reader.setIndex(r),s},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var e=this.reader.readData(this.zipCommentLength),t=F0.uint8array?"uint8array":"array",r=gt.transformTo(t,e);this.zipComment=this.loadOptions.decodeFileName(r)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var e=this.zip64EndOfCentralSize-44,t=0,r,i,s;t<e;)r=this.reader.readInt(2),i=this.reader.readInt(4),s=this.reader.readData(i),this.zip64ExtensibleData[r]={id:r,length:i,value:s}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var e,t;for(e=0;e<this.files.length;e++)t=this.files[e],this.reader.setIndex(t.localHeaderOffset),this.checkSignature($e.LOCAL_FILE_HEADER),t.readLocalPart(this.reader),t.handleUTF8(),t.processAttributes()},readCentralDir:function(){var e;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature($e.CENTRAL_FILE_HEADER);)e=new N0({zip64:this.zip64},this.loadOptions),e.readCentralPart(this.reader),this.files.push(e);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var e=this.reader.lastIndexOfSignature($e.CENTRAL_DIRECTORY_END);if(e<0){var t=!this.isSignature(0,$e.LOCAL_FILE_HEADER);throw t?new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html"):new Error("Corrupted zip: can't find end of central directory")}this.reader.setIndex(e);var r=e;if(this.checkSignature($e.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===gt.MAX_VALUE_16BITS||this.diskWithCentralDirStart===gt.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===gt.MAX_VALUE_16BITS||this.centralDirRecords===gt.MAX_VALUE_16BITS||this.centralDirSize===gt.MAX_VALUE_32BITS||this.centralDirOffset===gt.MAX_VALUE_32BITS){if(this.zip64=!0,e=this.reader.lastIndexOfSignature($e.ZIP64_CENTRAL_DIRECTORY_LOCATOR),e<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(e),this.checkSignature($e.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,$e.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature($e.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature($e.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var i=this.centralDirOffset+this.centralDirSize;this.zip64&&(i+=20,i+=12+this.zip64EndOfCentralSize);var s=r-i;if(s>0)this.isSignature(r,$e.CENTRAL_FILE_HEADER)||(this.reader.zero=s);else if(s<0)throw new Error("Corrupted zip: missing "+Math.abs(s)+" bytes.")},prepareReader:function(e){this.reader=P0(e)},load:function(e){this.prepareReader(e),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}};Ju.exports=Qu});var nf=O((sb,rf)=>{"use strict";var oo=ae(),Vn=Er(),z0=Ar(),q0=ef(),U0=ds(),tf=ci();function W0(e){return new Vn.Promise(function(t,r){var i=e.decompressed.getContentWorker().pipe(new U0);i.on("error",function(s){r(s)}).on("end",function(){i.streamInfo.crc32!==e.decompressed.crc32?r(new Error("Corrupted zip : CRC32 mismatch")):t()}).resume()})}rf.exports=function(e,t){var r=this;return t=oo.extend(t||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:z0.utf8decode}),tf.isNode&&tf.isStream(e)?Vn.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):oo.prepareContent("the loaded zip file",e,!0,t.optimizedBinaryString,t.base64).then(function(i){var s=new q0(t);return s.load(i),s}).then(function(s){var a=[Vn.Promise.resolve(s)],l=s.files;if(t.checkCRC32)for(var c=0;c<l.length;c++)a.push(W0(l[c]));return Vn.Promise.all(a)}).then(function(s){for(var a=s.shift(),l=a.files,c=0;c<l.length;c++){var m=l[c],f=m.fileNameStr,h=oo.resolve(m.fileNameStr);r.file(h,m.decompressed,{binary:!0,optimizedBinaryString:!0,date:m.date,dir:m.dir,comment:m.fileCommentStr.length?m.fileCommentStr:null,unixPermissions:m.unixPermissions,dosPermissions:m.dosPermissions,createFolders:t.createFolders}),m.dir||(r.file(h).unsafeOriginalName=f)}return a.zipComment.length&&(r.comment=a.zipComment),r})}});var sf=O((ob,af)=>{"use strict";function Oe(){if(!(this instanceof Oe))return new Oe;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var e=new Oe;for(var t in this)typeof this[t]!="function"&&(e[t]=this[t]);return e}}Oe.prototype=Lu();Oe.prototype.loadAsync=nf();Oe.support=ut();Oe.defaults=as();Oe.version="3.10.1";Oe.loadAsync=function(e,t){return new Oe().loadAsync(e,t)};Oe.external=Er();af.exports=Oe});var of=O((Gn,dr)=>{var Yn=void 0,Xn=function(e){return Yn||(Yn=new Promise(function(t,r){var i=typeof e<"u"?e:{},s=i.onAbort;i.onAbort=function(n){r(new Error(n)),s&&s(n)},i.postRun=i.postRun||[],i.postRun.push(function(){t(i)}),dr=void 0;var a;a||=typeof i<"u"?i:{};var l=!!globalThis.window,c=!!globalThis.WorkerGlobalScope,m=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";a.onRuntimeInitialized=function(){function n(v,w){switch(typeof w){case"boolean":th(v,w?1:0);break;case"number":Qf(v,w);break;case"string":Jf(v,w,-1,-1);break;case"object":if(w===null)jo(v);else if(w.length!=null){var z=Qi(w.length);N.set(w,z),eh(v,z,w.length,-1),Kr(z)}else en(v,"Wrong API use : tried to return a value of an unknown type ("+w+").",-1);break;default:jo(v)}}function o(v,w){for(var z=[],q=0;q<v;q+=1){var j=ze(w+4*q,"i32"),G=Vf(j);if(G===1||G===2)j=Kf(j);else if(G===3)j=Xf(j);else if(G===4){G=j,j=Yf(G),G=Gf(G);for(var Be=new Uint8Array(j),Ce=0;Ce<j;Ce+=1)Be[Ce]=N[G+Ce];j=Be}else j=null;z.push(j)}return z}function d(v,w){this.Qa=v,this.db=w,this.Oa=1,this.mb=[]}function u(v,w){if(this.db=w,this.fb=Ki(v),this.fb===null)throw Error("Unable to allocate memory for the SQL string");this.lb=this.fb,this.$a=this.sb=null}function p(v){if(this.filename="dbfile_"+(4294967295*Math.random()>>>0),v!=null){var w=this.filename,z="/",q=w;if(z&&(z=typeof z=="string"?z:sa(z),q=w?qe(z+"/"+w):z),w=po(!0,!0),q=_f(q,w),v){if(typeof v=="string"){z=Array(v.length);for(var j=0,G=v.length;j<G;++j)z[j]=v.charCodeAt(j);v=z}Vi(q,w|146),z=vr(q,577),Bo(z,v,0,v.length,0),fa(z),Vi(q,w)}}this.handleError(U(this.filename,g)),this.db=ze(g,"i32"),Zo(this.db),this.gb={},this.Sa={}}var g=$t(4),x=a.cwrap,U=x("sqlite3_open","number",["string","number"]),X=x("sqlite3_close_v2","number",["number"]),H=x("sqlite3_exec","number",["number","string","number","number","number"]),ee=x("sqlite3_changes","number",["number"]),pe=x("sqlite3_prepare_v2","number",["number","string","number","number","number"]),Fo=x("sqlite3_sql","string",["number"]),Df=x("sqlite3_normalized_sql","string",["number"]),zo=x("sqlite3_prepare_v2","number",["number","number","number","number","number"]),Bf=x("sqlite3_bind_text","number",["number","number","number","number","number"]),qo=x("sqlite3_bind_blob","number",["number","number","number","number","number"]),Rf=x("sqlite3_bind_double","number",["number","number","number"]),Lf=x("sqlite3_bind_int","number",["number","number","number"]),Mf=x("sqlite3_bind_parameter_index","number",["number","string"]),Of=x("sqlite3_step","number",["number"]),Pf=x("sqlite3_errmsg","string",["number"]),Nf=x("sqlite3_column_count","number",["number"]),Ff=x("sqlite3_data_count","number",["number"]),zf=x("sqlite3_column_double","number",["number","number"]),Uo=x("sqlite3_column_text","string",["number","number"]),qf=x("sqlite3_column_blob","number",["number","number"]),Uf=x("sqlite3_column_bytes","number",["number","number"]),Wf=x("sqlite3_column_type","number",["number","number"]),jf=x("sqlite3_column_name","string",["number","number"]),Hf=x("sqlite3_reset","number",["number"]),Zf=x("sqlite3_clear_bindings","number",["number"]),$f=x("sqlite3_finalize","number",["number"]),Wo=x("sqlite3_create_function_v2","number","number string number number number number number number number".split(" ")),Vf=x("sqlite3_value_type","number",["number"]),Yf=x("sqlite3_value_bytes","number",["number"]),Xf=x("sqlite3_value_text","string",["number"]),Gf=x("sqlite3_value_blob","number",["number"]),Kf=x("sqlite3_value_double","number",["number"]),Qf=x("sqlite3_result_double","",["number","number"]),jo=x("sqlite3_result_null","",["number"]),Jf=x("sqlite3_result_text","",["number","string","number","number"]),eh=x("sqlite3_result_blob","",["number","number","number","number"]),th=x("sqlite3_result_int","",["number","number"]),en=x("sqlite3_result_error","",["number","string","number"]),Ho=x("sqlite3_aggregate_context","number",["number","number"]),Zo=x("RegisterExtensionFunctions","number",["number"]),$o=x("sqlite3_update_hook","number",["number","number","number"]);d.prototype.bind=function(v){if(!this.Qa)throw"Statement closed";return this.reset(),Array.isArray(v)?this.Gb(v):v!=null&&typeof v=="object"?this.Hb(v):!0},d.prototype.step=function(){if(!this.Qa)throw"Statement closed";this.Oa=1;var v=Of(this.Qa);switch(v){case 100:return!0;case 101:return!1;default:throw this.db.handleError(v)}},d.prototype.Ab=function(v){return v==null&&(v=this.Oa,this.Oa+=1),zf(this.Qa,v)},d.prototype.Ob=function(v){if(v==null&&(v=this.Oa,this.Oa+=1),v=Uo(this.Qa,v),typeof BigInt!="function")throw Error("BigInt is not supported");return BigInt(v)},d.prototype.Tb=function(v){return v==null&&(v=this.Oa,this.Oa+=1),Uo(this.Qa,v)},d.prototype.getBlob=function(v){v==null&&(v=this.Oa,this.Oa+=1);var w=Uf(this.Qa,v);v=qf(this.Qa,v);for(var z=new Uint8Array(w),q=0;q<w;q+=1)z[q]=N[v+q];return z},d.prototype.get=function(v,w){w=w||{},v!=null&&this.bind(v)&&this.step(),v=[];for(var z=Ff(this.Qa),q=0;q<z;q+=1)switch(Wf(this.Qa,q)){case 1:var j=w.useBigInt?this.Ob(q):this.Ab(q);v.push(j);break;case 2:v.push(this.Ab(q));break;case 3:v.push(this.Tb(q));break;case 4:v.push(this.getBlob(q));break;default:v.push(null)}return v},d.prototype.qb=function(){for(var v=[],w=Nf(this.Qa),z=0;z<w;z+=1)v.push(jf(this.Qa,z));return v},d.prototype.zb=function(v,w){v=this.get(v,w),w=this.qb();for(var z={},q=0;q<w.length;q+=1)z[w[q]]=v[q];return z},d.prototype.Sb=function(){return Fo(this.Qa)},d.prototype.Pb=function(){return Df(this.Qa)},d.prototype.run=function(v){return v!=null&&this.bind(v),this.step(),this.reset()},d.prototype.wb=function(v,w){w==null&&(w=this.Oa,this.Oa+=1),v=Ki(v),this.mb.push(v),this.db.handleError(Bf(this.Qa,w,v,-1,0))},d.prototype.Fb=function(v,w){w==null&&(w=this.Oa,this.Oa+=1);var z=Qi(v.length);N.set(v,z),this.mb.push(z),this.db.handleError(qo(this.Qa,w,z,v.length,0))},d.prototype.vb=function(v,w){w==null&&(w=this.Oa,this.Oa+=1),this.db.handleError((v===(v|0)?Lf:Rf)(this.Qa,w,v))},d.prototype.Ib=function(v){v==null&&(v=this.Oa,this.Oa+=1),qo(this.Qa,v,0,0,0)},d.prototype.xb=function(v,w){switch(w==null&&(w=this.Oa,this.Oa+=1),typeof v){case"string":this.wb(v,w);return;case"number":this.vb(v,w);return;case"bigint":this.wb(v.toString(),w);return;case"boolean":this.vb(v+0,w);return;case"object":if(v===null){this.Ib(w);return}if(v.length!=null){this.Fb(v,w);return}}throw"Wrong API use : tried to bind a value of an unknown type ("+v+")."},d.prototype.Hb=function(v){var w=this;return Object.keys(v).forEach(function(z){var q=Mf(w.Qa,z);q!==0&&w.xb(v[z],q)}),!0},d.prototype.Gb=function(v){for(var w=0;w<v.length;w+=1)this.xb(v[w],w+1);return!0},d.prototype.reset=function(){return this.freemem(),Zf(this.Qa)===0&&Hf(this.Qa)===0},d.prototype.freemem=function(){for(var v;(v=this.mb.pop())!==void 0;)Kr(v)},d.prototype.Ya=function(){this.freemem();var v=$f(this.Qa)===0;return delete this.db.gb[this.Qa],this.Qa=0,v},u.prototype.next=function(){if(this.fb===null)return{done:!0};if(this.$a!==null&&(this.$a.Ya(),this.$a=null),!this.db.db)throw this.ob(),Error("Database closed");var v=Jr(),w=$t(4);Wt(g),Wt(w);try{this.db.handleError(zo(this.db.db,this.lb,-1,g,w)),this.lb=ze(w,"i32");var z=ze(g,"i32");return z===0?(this.ob(),{done:!0}):(this.$a=new d(z,this.db),this.db.gb[z]=this.$a,{value:this.$a,done:!1})}catch(q){throw this.sb=oe(this.lb),this.ob(),q}finally{Qr(v)}},u.prototype.ob=function(){Kr(this.fb),this.fb=null},u.prototype.Qb=function(){return this.sb!==null?this.sb:oe(this.lb)},typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"&&(u.prototype[Symbol.iterator]=function(){return this}),p.prototype.run=function(v,w){if(!this.db)throw"Database closed";if(w){v=this.tb(v,w);try{v.step()}finally{v.Ya()}}else this.handleError(H(this.db,v,0,0,g));return this},p.prototype.exec=function(v,w,z){if(!this.db)throw"Database closed";var q=Jr(),j=null,G=null,Be=null;try{Be=G=Ki(v);var Ce=$t(4);for(v=[];ze(Be,"i8")!==0;){Wt(g),Wt(Ce),this.handleError(zo(this.db,Be,-1,g,Ce));var Ue=ze(g,"i32");if(Be=ze(Ce,"i32"),Ue!==0){var Se=null;for(j=new d(Ue,this),w!=null&&j.bind(w);j.step();)Se===null&&(Se={columns:j.qb(),values:[]},v.push(Se)),Se.values.push(j.get(null,z));j.Ya()}}return v}catch(ei){throw j&&j.Ya(),ei}finally{G&&Kr(G),Qr(q)}},p.prototype.Mb=function(v,w,z,q,j){typeof w=="function"&&(q=z,z=w,w=void 0),v=this.tb(v,w);try{for(;v.step();)z(v.zb(null,j))}finally{v.Ya()}if(typeof q=="function")return q()},p.prototype.tb=function(v,w){if(Wt(g),this.handleError(pe(this.db,v,-1,g,0)),v=ze(g,"i32"),v===0)throw"Nothing to prepare";var z=new d(v,this);return w!=null&&z.bind(w),this.gb[v]=z},p.prototype.Ub=function(v){return new u(v,this)},p.prototype.Nb=function(){Object.values(this.gb).forEach(function(w){w.Ya()}),Object.values(this.Sa).forEach(kt),this.Sa={},this.handleError(X(this.db));var v=kf(this.filename);return this.handleError(U(this.filename,g)),this.db=ze(g,"i32"),Zo(this.db),v},p.prototype.close=function(){this.db!==null&&(Object.values(this.gb).forEach(function(v){v.Ya()}),Object.values(this.Sa).forEach(kt),this.Sa={},this.Za&&(kt(this.Za),this.Za=void 0),this.handleError(X(this.db)),Co("/"+this.filename),this.db=null)},p.prototype.handleError=function(v){if(v===0)return null;throw v=Pf(this.db),Error(v)},p.prototype.Rb=function(){return ee(this.db)},p.prototype.Kb=function(v,w){Object.prototype.hasOwnProperty.call(this.Sa,v)&&(kt(this.Sa[v]),delete this.Sa[v]);var z=Gr(function(q,j,G){j=o(j,G);try{var Be=w.apply(null,j)}catch(Ce){en(q,Ce,-1);return}n(q,Be)},"viii");return this.Sa[v]=z,this.handleError(Wo(this.db,v,w.length,1,0,z,0,0,0)),this},p.prototype.Jb=function(v,w){var z=w.init||function(){return null},q=w.finalize||function(Ue){return Ue},j=w.step;if(!j)throw"An aggregate function must have a step function in "+v;var G={};Object.hasOwnProperty.call(this.Sa,v)&&(kt(this.Sa[v]),delete this.Sa[v]),w=v+"__finalize",Object.hasOwnProperty.call(this.Sa,w)&&(kt(this.Sa[w]),delete this.Sa[w]);var Be=Gr(function(Ue,Se,ei){var Vt=Ho(Ue,1);Object.hasOwnProperty.call(G,Vt)||(G[Vt]=z()),Se=o(Se,ei),Se=[G[Vt]].concat(Se);try{G[Vt]=j.apply(null,Se)}catch(rh){delete G[Vt],en(Ue,rh,-1)}},"viii"),Ce=Gr(function(Ue){var Se=Ho(Ue,1);try{var ei=q(G[Se])}catch(Vt){delete G[Se],en(Ue,Vt,-1);return}n(Ue,ei),delete G[Se]},"vi");return this.Sa[v]=Be,this.Sa[w]=Ce,this.handleError(Wo(this.db,v,j.length-1,1,0,0,Be,Ce,0)),this},p.prototype.Zb=function(v){return this.Za&&($o(this.db,0,0),kt(this.Za),this.Za=void 0),v?(this.Za=Gr(function(w,z,q,j,G){switch(z){case 18:w="insert";break;case 23:w="update";break;case 9:w="delete";break;default:throw"unknown operationCode in updateHook callback: "+z}if(q=oe(q),j=oe(j),G>Number.MAX_SAFE_INTEGER)throw"rowId too big to fit inside a Number";v(w,q,j,Number(G))},"viiiij"),$o(this.db,this.Za,0),this):this},d.prototype.bind=d.prototype.bind,d.prototype.step=d.prototype.step,d.prototype.get=d.prototype.get,d.prototype.getColumnNames=d.prototype.qb,d.prototype.getAsObject=d.prototype.zb,d.prototype.getSQL=d.prototype.Sb,d.prototype.getNormalizedSQL=d.prototype.Pb,d.prototype.run=d.prototype.run,d.prototype.reset=d.prototype.reset,d.prototype.freemem=d.prototype.freemem,d.prototype.free=d.prototype.Ya,u.prototype.next=u.prototype.next,u.prototype.getRemainingSQL=u.prototype.Qb,p.prototype.run=p.prototype.run,p.prototype.exec=p.prototype.exec,p.prototype.each=p.prototype.Mb,p.prototype.prepare=p.prototype.tb,p.prototype.iterateStatements=p.prototype.Ub,p.prototype.export=p.prototype.Nb,p.prototype.close=p.prototype.close,p.prototype.handleError=p.prototype.handleError,p.prototype.getRowsModified=p.prototype.Rb,p.prototype.create_function=p.prototype.Kb,p.prototype.create_aggregate=p.prototype.Jb,p.prototype.updateHook=p.prototype.Zb,a.Database=p};var f="./this.program",h=(n,o)=>{throw o},S=globalThis.document?.currentScript?.src;typeof __filename<"u"?S=__filename:c&&(S=self.location.href);var y="",b,B;if(m){var E=require("node:fs");y=__dirname+"/",B=n=>(n=I(n)?new URL(n):n,E.readFileSync(n)),b=async n=>(n=I(n)?new URL(n):n,E.readFileSync(n,void 0)),1<process.argv.length&&(f=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),typeof dr<"u"&&(dr.exports=a),h=(n,o)=>{throw process.exitCode=n,o}}else if(l||c){try{y=new URL(".",S).href}catch{}c&&(B=n=>{var o=new XMLHttpRequest;return o.open("GET",n,!1),o.responseType="arraybuffer",o.send(null),new Uint8Array(o.response)}),b=async n=>{if(I(n))return new Promise((d,u)=>{var p=new XMLHttpRequest;p.open("GET",n,!0),p.responseType="arraybuffer",p.onload=()=>{p.status==200||p.status==0&&p.response?d(p.response):u(p.status)},p.onerror=u,p.send(null)});var o=await fetch(n,{credentials:"same-origin"});if(o.ok)return o.arrayBuffer();throw Error(o.status+" : "+o.url)}}var R=console.log.bind(console),C=console.error.bind(console),k,M=!1,T,I=n=>n.startsWith("file://"),N,_,P,A,F,L,se,ie;function Pe(){var n=Ji.buffer;N=new Int8Array(n),P=new Int16Array(n),_=new Uint8Array(n),new Uint16Array(n),A=new Int32Array(n),F=new Uint32Array(n),L=new Float32Array(n),se=new Float64Array(n),ie=new BigInt64Array(n),new BigUint64Array(n)}function Ne(n){throw a.onAbort?.(n),n="Aborted("+n+")",C(n),M=!0,new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info.")}var yt;async function Fe(n){if(!k)try{var o=await b(n);return new Uint8Array(o)}catch{}if(n==yt&&k)n=new Uint8Array(k);else if(B)n=B(n);else throw"both async and sync fetching of the wasm failed";return n}async function qt(n,o){try{var d=await Fe(n);return await WebAssembly.instantiate(d,o)}catch(u){C(`failed to asynchronously prepare wasm: ${u}`),Ne(u)}}async function Ni(n){var o=yt;if(!k&&!I(o)&&!m)try{var d=fetch(o,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(d,n)}catch(u){C(`wasm streaming compile failed: ${u}`),C("falling back to ArrayBuffer instantiation")}return qt(o,n)}class Q{name="ExitStatus";constructor(o){this.message=`Program terminated with exit(${o})`,this.status=o}}var Fi=n=>{for(;0<n.length;)n.shift()(a)},zi=[],qi=[],ia=()=>{var n=a.preRun.shift();qi.push(n)},ot=0,Ut=null;function ze(n,o="i8"){switch(o.endsWith("*")&&(o="*"),o){case"i1":return N[n];case"i8":return N[n];case"i16":return P[n>>1];case"i32":return A[n>>2];case"i64":return ie[n>>3];case"float":return L[n>>2];case"double":return se[n>>3];case"*":return F[n>>2];default:Ne(`invalid type for getValue: ${o}`)}}var ur=!0;function Wt(n){var o="i32";switch(o.endsWith("*")&&(o="*"),o){case"i1":N[n]=0;break;case"i8":N[n]=0;break;case"i16":P[n>>1]=0;break;case"i32":A[n>>2]=0;break;case"i64":ie[n>>3]=BigInt(0);break;case"float":L[n>>2]=0;break;case"double":se[n>>3]=0;break;case"*":F[n>>2]=0;break;default:Ne(`invalid type for setValue: ${o}`)}}var Ui=new TextDecoder,Wi=(n,o,d,u)=>{if(d=o+d,u)return d;for(;n[o]&&!(o>=d);)++o;return o},oe=(n,o,d)=>n?Ui.decode(_.subarray(n,Wi(_,n,o,d))):"",Xe=(n,o)=>{for(var d=0,u=n.length-1;0<=u;u--){var p=n[u];p==="."?n.splice(u,1):p===".."?(n.splice(u,1),d++):d&&(n.splice(u,1),d--)}if(o)for(;d;d--)n.unshift("..");return n},qe=n=>{var o=n.charAt(0)==="/",d=n.slice(-1)==="/";return(n=Xe(n.split("/").filter(u=>!!u),!o).join("/"))||o||(n="."),n&&d&&(n+="/"),(o?"/":"")+n},ji=n=>{var o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(n).slice(1);return n=o[0],o=o[1],!n&&!o?".":(o&&=o.slice(0,-1),n+o)},fr=n=>n&&n.match(/([^\/]+|\/)\/*$/)[1],xt=()=>{if(m){var n=require("node:crypto");return o=>n.randomFillSync(o)}return o=>crypto.getRandomValues(o)},uo=n=>{(uo=xt())(n)},hf=(...n)=>{for(var o="",d=!1,u=n.length-1;-1<=u&&!d;u--){if(d=0<=u?n[u]:"/",typeof d!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!d)return"";o=d+"/"+o,d=d.charAt(0)==="/"}return o=Xe(o.split("/").filter(p=>!!p),!d).join("/"),(d?"/":"")+o||"."},Vr=n=>{var o=Wi(n,0);return Ui.decode(n.buffer?n.subarray(0,o):new Uint8Array(n.slice(0,o)))},na=[],hr=n=>{for(var o=0,d=0;d<n.length;++d){var u=n.charCodeAt(d);127>=u?o++:2047>=u?o+=2:55296<=u&&57343>=u?(o+=4,++d):o+=3}return o},Ge=(n,o,d,u)=>{if(!(0<u))return 0;var p=d;u=d+u-1;for(var g=0;g<n.length;++g){var x=n.codePointAt(g);if(127>=x){if(d>=u)break;o[d++]=x}else if(2047>=x){if(d+1>=u)break;o[d++]=192|x>>6,o[d++]=128|x&63}else if(65535>=x){if(d+2>=u)break;o[d++]=224|x>>12,o[d++]=128|x>>6&63,o[d++]=128|x&63}else{if(d+3>=u)break;o[d++]=240|x>>18,o[d++]=128|x>>12&63,o[d++]=128|x>>6&63,o[d++]=128|x&63,g++}}return o[d]=0,d-p},fo=[];function ho(n,o){fo[n]={input:[],output:[],eb:o},ca(n,pf)}var pf={open(n){var o=fo[n.node.rdev];if(!o)throw new D(43);n.tty=o,n.seekable=!1},close(n){n.tty.eb.fsync(n.tty)},fsync(n){n.tty.eb.fsync(n.tty)},read(n,o,d,u){if(!n.tty||!n.tty.eb.Bb)throw new D(60);for(var p=0,g=0;g<u;g++){try{var x=n.tty.eb.Bb(n.tty)}catch{throw new D(29)}if(x===void 0&&p===0)throw new D(6);if(x==null)break;p++,o[d+g]=x}return p&&(n.node.atime=Date.now()),p},write(n,o,d,u){if(!n.tty||!n.tty.eb.ub)throw new D(60);try{for(var p=0;p<u;p++)n.tty.eb.ub(n.tty,o[d+p])}catch{throw new D(29)}return u&&(n.node.mtime=n.node.ctime=Date.now()),p}},mf={Bb(){e:{if(!na.length){var n=null;if(m){var o=Buffer.alloc(256),d=0,u=process.stdin.fd;try{d=E.readSync(u,o,0,256)}catch(p){if(p.toString().includes("EOF"))d=0;else throw p}0<d&&(n=o.slice(0,d).toString("utf-8"))}else globalThis.window?.prompt&&(n=window.prompt("Input: "),n!==null&&(n+=`
`));if(!n){n=null;break e}o=Array(hr(n)+1),n=Ge(n,o,0,o.length),o.length=n,na=o}n=na.shift()}return n},ub(n,o){o===null||o===10?(R(Vr(n.output)),n.output=[]):o!=0&&n.output.push(o)},fsync(n){0<n.output?.length&&(R(Vr(n.output)),n.output=[])},hc(){return{bc:25856,dc:5,ac:191,cc:35387,$b:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ic(){return 0},jc(){return[24,80]}},vf={ub(n,o){o===null||o===10?(C(Vr(n.output)),n.output=[]):o!=0&&n.output.push(o)},fsync(n){0<n.output?.length&&(C(Vr(n.output)),n.output=[])}},W={Wa:null,Xa(){return W.createNode(null,"/",16895,0)},createNode(n,o,d,u){if((d&61440)===24576||(d&61440)===4096)throw new D(63);return W.Wa||(W.Wa={dir:{node:{Ta:W.La.Ta,Ua:W.La.Ua,lookup:W.La.lookup,ib:W.La.ib,rename:W.La.rename,unlink:W.La.unlink,rmdir:W.La.rmdir,readdir:W.La.readdir,symlink:W.La.symlink},stream:{Va:W.Ma.Va}},file:{node:{Ta:W.La.Ta,Ua:W.La.Ua},stream:{Va:W.Ma.Va,read:W.Ma.read,write:W.Ma.write,jb:W.Ma.jb,kb:W.Ma.kb}},link:{node:{Ta:W.La.Ta,Ua:W.La.Ua,readlink:W.La.readlink},stream:{}},yb:{node:{Ta:W.La.Ta,Ua:W.La.Ua},stream:wf}}),d=yo(n,o,d,u),ke(d.mode)?(d.La=W.Wa.dir.node,d.Ma=W.Wa.dir.stream,d.Na={}):(d.mode&61440)===32768?(d.La=W.Wa.file.node,d.Ma=W.Wa.file.stream,d.Ra=0,d.Na=null):(d.mode&61440)===40960?(d.La=W.Wa.link.node,d.Ma=W.Wa.link.stream):(d.mode&61440)===8192&&(d.La=W.Wa.yb.node,d.Ma=W.Wa.yb.stream),d.atime=d.mtime=d.ctime=Date.now(),n&&(n.Na[o]=d,n.atime=n.mtime=n.ctime=d.atime),d},fc(n){return n.Na?n.Na.subarray?n.Na.subarray(0,n.Ra):new Uint8Array(n.Na):new Uint8Array(0)},La:{Ta(n){var o={};return o.dev=(n.mode&61440)===8192?n.id:1,o.ino=n.id,o.mode=n.mode,o.nlink=1,o.uid=0,o.gid=0,o.rdev=n.rdev,ke(n.mode)?o.size=4096:(n.mode&61440)===32768?o.size=n.Ra:(n.mode&61440)===40960?o.size=n.link.length:o.size=0,o.atime=new Date(n.atime),o.mtime=new Date(n.mtime),o.ctime=new Date(n.ctime),o.blksize=4096,o.blocks=Math.ceil(o.size/o.blksize),o},Ua(n,o){for(var d of["mode","atime","mtime","ctime"])o[d]!=null&&(n[d]=o[d]);o.size!==void 0&&(o=o.size,n.Ra!=o&&(o==0?(n.Na=null,n.Ra=0):(d=n.Na,n.Na=new Uint8Array(o),d&&n.Na.set(d.subarray(0,Math.min(o,n.Ra))),n.Ra=o)))},lookup(){throw W.nb||(W.nb=new D(44),W.nb.stack="<generic error, no stack>"),W.nb},ib(n,o,d,u){return W.createNode(n,o,d,u)},rename(n,o,d){try{var u=jt(o,d)}catch{}if(u){if(ke(n.mode))for(var p in u.Na)throw new D(55);da(u)}delete n.parent.Na[n.name],o.Na[d]=n,n.name=d,o.ctime=o.mtime=n.parent.ctime=n.parent.mtime=Date.now()},unlink(n,o){delete n.Na[o],n.ctime=n.mtime=Date.now()},rmdir(n,o){var d=jt(n,o),u;for(u in d.Na)throw new D(55);delete n.Na[o],n.ctime=n.mtime=Date.now()},readdir(n){return[".","..",...Object.keys(n.Na)]},symlink(n,o,d){return n=W.createNode(n,o,41471,0),n.link=d,n},readlink(n){if((n.mode&61440)!==40960)throw new D(28);return n.link}},Ma:{read(n,o,d,u,p){var g=n.node.Na;if(p>=n.node.Ra)return 0;if(n=Math.min(n.node.Ra-p,u),8<n&&g.subarray)o.set(g.subarray(p,p+n),d);else for(u=0;u<n;u++)o[d+u]=g[p+u];return n},write(n,o,d,u,p,g){if(o.buffer===N.buffer&&(g=!1),!u)return 0;if(n=n.node,n.mtime=n.ctime=Date.now(),o.subarray&&(!n.Na||n.Na.subarray)){if(g)return n.Na=o.subarray(d,d+u),n.Ra=u;if(n.Ra===0&&p===0)return n.Na=o.slice(d,d+u),n.Ra=u;if(p+u<=n.Ra)return n.Na.set(o.subarray(d,d+u),p),u}g=p+u;var x=n.Na?n.Na.length:0;if(x>=g||(g=Math.max(g,x*(1048576>x?2:1.125)>>>0),x!=0&&(g=Math.max(g,256)),x=n.Na,n.Na=new Uint8Array(g),0<n.Ra&&n.Na.set(x.subarray(0,n.Ra),0)),n.Na.subarray&&o.subarray)n.Na.set(o.subarray(d,d+u),p);else for(g=0;g<u;g++)n.Na[p+g]=o[d+g];return n.Ra=Math.max(n.Ra,p+u),u},Va(n,o,d){if(d===1?o+=n.position:d===2&&(n.node.mode&61440)===32768&&(o+=n.node.Ra),0>o)throw new D(28);return o},jb(n,o,d,u,p){if((n.node.mode&61440)!==32768)throw new D(43);if(n=n.node.Na,p&2||!n||n.buffer!==N.buffer){p=!0,u=65536*Math.ceil(o/65536);var g=Po(65536,u);if(g&&_.fill(0,g,g+u),u=g,!u)throw new D(48);n&&((0<d||d+o<n.length)&&(n.subarray?n=n.subarray(d,d+o):n=Array.prototype.slice.call(n,d,d+o)),N.set(n,u))}else p=!1,u=n.byteOffset;return{Xb:u,Eb:p}},kb(n,o,d,u){return W.Ma.write(n,o,0,u,d,!1),0}}},po=(n,o)=>{var d=0;return n&&(d|=365),o&&(d|=146),d},aa=null,mo={},pr=[],gf=1,wt=null,vo=!1,go=!0,bo={},D=class{name="ErrnoError";constructor(n){this.Pa=n}},bf=class{hb={};node=null;get flags(){return this.hb.flags}set flags(n){this.hb.flags=n}get position(){return this.hb.position}set position(n){this.hb.position=n}},yf=class{La={};Ma={};bb=null;constructor(n,o,d,u){n||=this,this.parent=n,this.Xa=n.Xa,this.id=gf++,this.name=o,this.mode=d,this.rdev=u,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&365)===365}set read(n){n?this.mode|=365:this.mode&=-366}get write(){return(this.mode&146)===146}set write(n){n?this.mode|=146:this.mode&=-147}};function De(n,o={}){if(!n)throw new D(44);o.pb??(o.pb=!0),n.charAt(0)==="/"||(n="//"+n);var d=0;e:for(;40>d;d++){n=n.split("/").filter(U=>!!U);for(var u=aa,p="/",g=0;g<n.length;g++){var x=g===n.length-1;if(x&&o.parent)break;if(n[g]!==".")if(n[g]==="..")if(p=ji(p),u===u.parent){n=p+"/"+n.slice(g+1).join("/"),d--;continue e}else u=u.parent;else{p=qe(p+"/"+n[g]);try{u=jt(u,n[g])}catch(U){if(U?.Pa===44&&x&&o.Wb)return{path:p};throw U}if(!u.bb||x&&!o.pb||(u=u.bb.root),(u.mode&61440)===40960&&(!x||o.ab)){if(!u.La.readlink)throw new D(52);u=u.La.readlink(u),u.charAt(0)==="/"||(u=ji(p)+"/"+u),n=u+"/"+n.slice(g+1).join("/");continue e}}}return{path:p,node:u}}throw new D(32)}function sa(n){for(var o;;){if(n===n.parent)return n=n.Xa.Db,o?n[n.length-1]!=="/"?`${n}/${o}`:n+o:n;o=o?`${n.name}/${o}`:n.name,n=n.parent}}function oa(n,o){for(var d=0,u=0;u<o.length;u++)d=(d<<5)-d+o.charCodeAt(u)|0;return(n+d>>>0)%wt.length}function da(n){var o=oa(n.parent.id,n.name);if(wt[o]===n)wt[o]=n.cb;else for(o=wt[o];o;){if(o.cb===n){o.cb=n.cb;break}o=o.cb}}function jt(n,o){var d=ke(n.mode)?(d=mr(n,"x"))?d:n.La.lookup?0:2:54;if(d)throw new D(d);for(d=wt[oa(n.id,o)];d;d=d.cb){var u=d.name;if(d.parent.id===n.id&&u===o)return d}return n.La.lookup(n,o)}function yo(n,o,d,u){return n=new yf(n,o,d,u),o=oa(n.parent.id,n.name),n.cb=wt[o],wt[o]=n}function ke(n){return(n&61440)===16384}function xo(n){var o=["r","w","rw"][n&3];return n&512&&(o+="w"),o}function mr(n,o){if(go)return 0;if(!o.includes("r")||n.mode&292){if(o.includes("w")&&!(n.mode&146)||o.includes("x")&&!(n.mode&73))return 2}else return 2;return 0}function wo(n,o){if(!ke(n.mode))return 54;try{return jt(n,o),20}catch{}return mr(n,"wx")}function _o(n,o,d){try{var u=jt(n,o)}catch(p){return p.Pa}if(n=mr(n,"wx"))return n;if(d){if(!ke(u.mode))return 54;if(u===u.parent||sa(u)==="/")return 10}else if(ke(u.mode))return 31;return 0}function Hi(n){if(!n)throw new D(63);return n}function xe(n){if(n=pr[n],!n)throw new D(8);return n}function ko(n,o=-1){if(n=Object.assign(new bf,n),o==-1)e:{for(o=0;4096>=o;o++)if(!pr[o])break e;throw new D(33)}return n.fd=o,pr[o]=n}function xf(n,o=-1){return n=ko(n,o),n.Ma?.ec?.(n),n}function la(n,o,d){var u=n?.Ma.Ua;n=u?n:o,u??=o.La.Ua,Hi(u),u(n,d)}var wf={open(n){n.Ma=mo[n.node.rdev].Ma,n.Ma.open?.(n)},Va(){throw new D(70)}};function ca(n,o){mo[n]={Ma:o}}function So(n,o){var d=o==="/";if(d&&aa)throw new D(10);if(!d&&o){var u=De(o,{pb:!1});if(o=u.path,u=u.node,u.bb)throw new D(10);if(!ke(u.mode))throw new D(54)}o={type:n,kc:{},Db:o,Vb:[]},n=n.Xa(o),n.Xa=o,o.root=n,d?aa=n:u&&(u.bb=o,u.Xa&&u.Xa.Vb.push(o))}function Zi(n,o,d){var u=De(n,{parent:!0}).node;if(n=fr(n),!n)throw new D(28);if(n==="."||n==="..")throw new D(20);var p=wo(u,n);if(p)throw new D(p);if(!u.La.ib)throw new D(63);return u.La.ib(u,n,o,d)}function _f(n,o=438){return Zi(n,o&4095|32768,0)}function Ke(n,o=511){return Zi(n,o&1023|16384,0)}function $i(n,o,d){typeof d>"u"&&(d=o,o=438),Zi(n,o|8192,d)}function ua(n,o){if(!hf(n))throw new D(44);var d=De(o,{parent:!0}).node;if(!d)throw new D(44);o=fr(o);var u=wo(d,o);if(u)throw new D(u);if(!d.La.symlink)throw new D(63);d.La.symlink(d,o,n)}function Eo(n){var o=De(n,{parent:!0}).node;n=fr(n);var d=jt(o,n),u=_o(o,n,!0);if(u)throw new D(u);if(!o.La.rmdir)throw new D(63);if(d.bb)throw new D(10);o.La.rmdir(o,n),da(d)}function Co(n){var o=De(n,{parent:!0}).node;if(!o)throw new D(44);n=fr(n);var d=jt(o,n),u=_o(o,n,!1);if(u)throw new D(u);if(!o.La.unlink)throw new D(63);if(d.bb)throw new D(10);o.La.unlink(o,n),da(d)}function Yr(n,o){return n=De(n,{ab:!o}).node,Hi(n.La.Ta)(n)}function To(n,o,d,u){la(n,o,{mode:d&4095|o.mode&-4096,ctime:Date.now(),Lb:u})}function Vi(n,o){n=typeof n=="string"?De(n,{ab:!0}).node:n,To(null,n,o)}function Ao(n,o,d){if(ke(o.mode))throw new D(31);if((o.mode&61440)!==32768)throw new D(28);var u=mr(o,"w");if(u)throw new D(u);la(n,o,{size:d,timestamp:Date.now()})}function vr(n,o,d=438){if(n==="")throw new D(44);if(typeof o=="string"){var u={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090}[o];if(typeof u>"u")throw Error(`Unknown file open mode: ${o}`);o=u}if(d=o&64?d&4095|32768:0,typeof n=="object")u=n;else{var p=n.endsWith("/");n=De(n,{ab:!(o&131072),Wb:!0}),u=n.node,n=n.path}var g=!1;if(o&64)if(u){if(o&128)throw new D(20)}else{if(p)throw new D(31);u=Zi(n,d|511,0),g=!0}if(!u)throw new D(44);if((u.mode&61440)===8192&&(o&=-513),o&65536&&!ke(u.mode))throw new D(54);if(!g&&(p=u?(u.mode&61440)===40960?32:ke(u.mode)&&(xo(o)!=="r"||o&576)?31:mr(u,xo(o)):44))throw new D(p);return o&512&&!g&&(p=u,p=typeof p=="string"?De(p,{ab:!0}).node:p,Ao(null,p,0)),o&=-131713,p=ko({node:u,path:sa(u),flags:o,seekable:!0,position:0,Ma:u.Ma,Yb:[],error:!1}),p.Ma.open&&p.Ma.open(p),g&&Vi(u,d&511),!a.logReadFiles||o&1||n in bo||(bo[n]=1),p}function fa(n){if(n.fd===null)throw new D(8);n.rb&&(n.rb=null);try{n.Ma.close&&n.Ma.close(n)}catch(o){throw o}finally{pr[n.fd]=null}n.fd=null}function Io(n,o,d){if(n.fd===null)throw new D(8);if(!n.seekable||!n.Ma.Va)throw new D(70);if(d!=0&&d!=1&&d!=2)throw new D(28);n.position=n.Ma.Va(n,o,d),n.Yb=[]}function Do(n,o,d,u,p){if(0>u||0>p)throw new D(28);if(n.fd===null)throw new D(8);if((n.flags&2097155)===1)throw new D(8);if(ke(n.node.mode))throw new D(31);if(!n.Ma.read)throw new D(28);var g=typeof p<"u";if(!g)p=n.position;else if(!n.seekable)throw new D(70);return o=n.Ma.read(n,o,d,u,p),g||(n.position+=o),o}function Bo(n,o,d,u,p){if(0>u||0>p)throw new D(28);if(n.fd===null)throw new D(8);if((n.flags&2097155)===0)throw new D(8);if(ke(n.node.mode))throw new D(31);if(!n.Ma.write)throw new D(28);n.seekable&&n.flags&1024&&Io(n,0,2);var g=typeof p<"u";if(!g)p=n.position;else if(!n.seekable)throw new D(70);return o=n.Ma.write(n,o,d,u,p,void 0),g||(n.position+=o),o}function kf(n){var o=o||0,d="binary";d!=="utf8"&&d!=="binary"&&Ne(`Invalid encoding type "${d}"`),o=vr(n,o),n=Yr(n).size;var u=new Uint8Array(n);return Do(o,u,0,n,0),d==="utf8"&&(u=Vr(u)),fa(o),u}function _t(n,o,d){n=qe("/dev/"+n);var u=po(!!o,!!d);_t.Cb??(_t.Cb=64);var p=_t.Cb++<<8|0;ca(p,{open(g){g.seekable=!1},close(){d?.buffer?.length&&d(10)},read(g,x,U,X){for(var H=0,ee=0;ee<X;ee++){try{var pe=o()}catch{throw new D(29)}if(pe===void 0&&H===0)throw new D(6);if(pe==null)break;H++,x[U+ee]=pe}return H&&(g.node.atime=Date.now()),H},write(g,x,U,X){for(var H=0;H<X;H++)try{d(x[U+H])}catch{throw new D(29)}return X&&(g.node.mtime=g.node.ctime=Date.now()),H}}),$i(n,u,p)}var J={};function Ht(n,o,d){if(o.charAt(0)==="/")return o;if(n=n===-100?"/":xe(n).path,o.length==0){if(!d)throw new D(44);return n}return n+"/"+o}function Yi(n,o){F[n>>2]=o.dev,F[n+4>>2]=o.mode,F[n+8>>2]=o.nlink,F[n+12>>2]=o.uid,F[n+16>>2]=o.gid,F[n+20>>2]=o.rdev,ie[n+24>>3]=BigInt(o.size),A[n+32>>2]=4096,A[n+36>>2]=o.blocks;var d=o.atime.getTime(),u=o.mtime.getTime(),p=o.ctime.getTime();return ie[n+40>>3]=BigInt(Math.floor(d/1e3)),F[n+48>>2]=d%1e3*1e6,ie[n+56>>3]=BigInt(Math.floor(u/1e3)),F[n+64>>2]=u%1e3*1e6,ie[n+72>>3]=BigInt(Math.floor(p/1e3)),F[n+80>>2]=p%1e3*1e6,ie[n+88>>3]=BigInt(o.ino),0}var Xi=void 0,Gi=()=>{var n=A[+Xi>>2];return Xi+=4,n},ha=0,Sf=[0,31,60,91,121,152,182,213,244,274,305,335],Ef=[0,31,59,90,120,151,181,212,243,273,304,334],Xr={},Ro=n=>{T=n,ur||0<ha||(a.onExit?.(n),M=!0),h(n,new Q(n))},Cf=n=>{if(!M)try{n()}catch(o){o instanceof Q||o=="unwind"||h(1,o)}finally{if(!(ur||0<ha))try{T=n=T,Ro(n)}catch(o){o instanceof Q||o=="unwind"||h(1,o)}}},pa={},Lo=()=>{if(!ma){var n={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:f||"./this.program"},o;for(o in pa)pa[o]===void 0?delete n[o]:n[o]=pa[o];var d=[];for(o in n)d.push(`${o}=${n[o]}`);ma=d}return ma},ma,Tf=(n,o,d,u)=>{var p={string:H=>{var ee=0;if(H!=null&&H!==0){ee=hr(H)+1;var pe=$t(ee);Ge(H,_,pe,ee),ee=pe}return ee},array:H=>{var ee=$t(H.length);return N.set(H,ee),ee}};n=a["_"+n];var g=[],x=0;if(u)for(var U=0;U<u.length;U++){var X=p[d[U]];X?(x===0&&(x=Jr()),g[U]=X(u[U])):g[U]=u[U]}return d=n(...g),d=(function(H){return x!==0&&Qr(x),o==="string"?oe(H):o==="boolean"?!!H:H})(d)},Ki=n=>{var o=hr(n)+1,d=Qi(o);return d&&Ge(n,_,d,o),d},Zt,va=[],kt=n=>{Zt.delete(St.get(n)),St.set(n,null),va.push(n)},Mo=n=>{let o=n.length;return[o%128|128,o>>7,...n]},Af={i:127,p:127,j:126,f:125,d:124,e:111},Oo=n=>Mo(Array.from(n,o=>Af[o])),Gr=(n,o)=>{if(!Zt){Zt=new WeakMap;var d=St.length;if(Zt)for(var u=0;u<0+d;u++){var p=St.get(u);p&&Zt.set(p,u)}}if(d=Zt.get(n)||0)return d;d=va.length?va.pop():St.grow(1);try{St.set(d,n)}catch(g){if(!(g instanceof TypeError))throw g;o=Uint8Array.of(0,97,115,109,1,0,0,0,1,...Mo([1,96,...Oo(o.slice(1)),...Oo(o[0]==="v"?"":o[0])]),2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0),o=new WebAssembly.Module(o),o=new WebAssembly.Instance(o,{e:{f:n}}).exports.f,St.set(d,o)}return Zt.set(n,d),d};if(wt=Array(4096),So(W,"/"),Ke("/tmp"),Ke("/home"),Ke("/home/web_user"),(function(){Ke("/dev"),ca(259,{read:()=>0,write:(u,p,g,x)=>x,Va:()=>0}),$i("/dev/null",259),ho(1280,mf),ho(1536,vf),$i("/dev/tty",1280),$i("/dev/tty1",1536);var n=new Uint8Array(1024),o=0,d=()=>(o===0&&(uo(n),o=n.byteLength),n[--o]);_t("random",d),_t("urandom",d),Ke("/dev/shm"),Ke("/dev/shm/tmp")})(),(function(){Ke("/proc");var n=Ke("/proc/self");Ke("/proc/self/fd"),So({Xa(){var o=yo(n,"fd",16895,73);return o.Ma={Va:W.Ma.Va},o.La={lookup(d,u){d=+u;var p=xe(d);return d={parent:null,Xa:{Db:"fake"},La:{readlink:()=>p.path},id:d+1},d.parent=d},readdir(){return Array.from(pr.entries()).filter(([,d])=>d).map(([d])=>d.toString())}},o}},"/proc/self/fd")})(),a.noExitRuntime&&(ur=a.noExitRuntime),a.print&&(R=a.print),a.printErr&&(C=a.printErr),a.wasmBinary&&(k=a.wasmBinary),a.thisProgram&&(f=a.thisProgram),a.preInit)for(typeof a.preInit=="function"&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.shift()();a.stackSave=()=>Jr(),a.stackRestore=n=>Qr(n),a.stackAlloc=n=>$t(n),a.cwrap=(n,o,d,u)=>{var p=!d||d.every(g=>g==="number"||g==="boolean");return o!=="string"&&p&&!u?a["_"+n]:(...g)=>Tf(n,o,d,g)},a.addFunction=Gr,a.removeFunction=kt,a.UTF8ToString=oe,a.stringToNewUTF8=Ki,a.writeArrayToMemory=(n,o)=>{N.set(n,o)};var Qi,Kr,Po,No,Qr,$t,Jr,Ji,St,If={a:(n,o,d,u)=>Ne(`Assertion failed: ${oe(n)}, at: `+[o?oe(o):"unknown filename",d,u?oe(u):"unknown function"]),i:function(n,o){try{return n=oe(n),Vi(n,o),0}catch(d){if(typeof J>"u"||d.name!=="ErrnoError")throw d;return-d.Pa}},L:function(n,o,d){try{if(o=oe(o),o=Ht(n,o),d&-8)return-28;var u=De(o,{ab:!0}).node;return u?(n="",d&4&&(n+="r"),d&2&&(n+="w"),d&1&&(n+="x"),n&&mr(u,n)?-2:0):-44}catch(p){if(typeof J>"u"||p.name!=="ErrnoError")throw p;return-p.Pa}},j:function(n,o){try{var d=xe(n);return To(d,d.node,o,!1),0}catch(u){if(typeof J>"u"||u.name!=="ErrnoError")throw u;return-u.Pa}},h:function(n){try{var o=xe(n);return la(o,o.node,{timestamp:Date.now(),Lb:!1}),0}catch(d){if(typeof J>"u"||d.name!=="ErrnoError")throw d;return-d.Pa}},b:function(n,o,d){Xi=d;try{var u=xe(n);switch(o){case 0:var p=Gi();if(0>p)break;for(;pr[p];)p++;return xf(u,p).fd;case 1:case 2:return 0;case 3:return u.flags;case 4:return p=Gi(),u.flags|=p,0;case 12:return p=Gi(),P[p+0>>1]=2,0;case 13:case 14:return 0}return-28}catch(g){if(typeof J>"u"||g.name!=="ErrnoError")throw g;return-g.Pa}},g:function(n,o){try{var d=xe(n),u=d.node,p=d.Ma.Ta;n=p?d:u,p??=u.La.Ta,Hi(p);var g=p(n);return Yi(o,g)}catch(x){if(typeof J>"u"||x.name!=="ErrnoError")throw x;return-x.Pa}},H:function(n,o){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o);try{if(isNaN(o))return-61;var d=xe(n);if(0>o||(d.flags&2097155)===0)throw new D(28);return Ao(d,d.node,o),0}catch(u){if(typeof J>"u"||u.name!=="ErrnoError")throw u;return-u.Pa}},G:function(n,o){try{if(o===0)return-28;var d=hr("/")+1;return o<d?-68:(Ge("/",_,n,o),d)}catch(u){if(typeof J>"u"||u.name!=="ErrnoError")throw u;return-u.Pa}},K:function(n,o){try{return n=oe(n),Yi(o,Yr(n,!0))}catch(d){if(typeof J>"u"||d.name!=="ErrnoError")throw d;return-d.Pa}},C:function(n,o,d){try{return o=oe(o),o=Ht(n,o),Ke(o,d),0}catch(u){if(typeof J>"u"||u.name!=="ErrnoError")throw u;return-u.Pa}},J:function(n,o,d,u){try{o=oe(o);var p=u&256;return o=Ht(n,o,u&4096),Yi(d,p?Yr(o,!0):Yr(o))}catch(g){if(typeof J>"u"||g.name!=="ErrnoError")throw g;return-g.Pa}},x:function(n,o,d,u){Xi=u;try{o=oe(o),o=Ht(n,o);var p=u?Gi():0;return vr(o,d,p).fd}catch(g){if(typeof J>"u"||g.name!=="ErrnoError")throw g;return-g.Pa}},v:function(n,o,d,u){try{if(o=oe(o),o=Ht(n,o),0>=u)return-28;var p=De(o).node;if(!p)throw new D(44);if(!p.La.readlink)throw new D(28);var g=p.La.readlink(p),x=Math.min(u,hr(g)),U=N[d+x];return Ge(g,_,d,u+1),N[d+x]=U,x}catch(X){if(typeof J>"u"||X.name!=="ErrnoError")throw X;return-X.Pa}},u:function(n){try{return n=oe(n),Eo(n),0}catch(o){if(typeof J>"u"||o.name!=="ErrnoError")throw o;return-o.Pa}},f:function(n,o){try{return n=oe(n),Yi(o,Yr(n))}catch(d){if(typeof J>"u"||d.name!=="ErrnoError")throw d;return-d.Pa}},r:function(n,o,d){try{if(o=oe(o),o=Ht(n,o),d)if(d===512)Eo(o);else return-28;else Co(o);return 0}catch(u){if(typeof J>"u"||u.name!=="ErrnoError")throw u;return-u.Pa}},q:function(n,o,d){try{o=oe(o),o=Ht(n,o,!0);var u=Date.now(),p,g;if(d){var x=F[d>>2]+4294967296*A[d+4>>2],U=A[d+8>>2];U==1073741823?p=u:U==1073741822?p=null:p=1e3*x+U/1e6,d+=16,x=F[d>>2]+4294967296*A[d+4>>2],U=A[d+8>>2],U==1073741823?g=u:U==1073741822?g=null:g=1e3*x+U/1e6}else g=p=u;if((g??p)!==null){n=p;var X=De(o,{ab:!0}).node;Hi(X.La.Ua)(X,{atime:n,mtime:g})}return 0}catch(H){if(typeof J>"u"||H.name!=="ErrnoError")throw H;return-H.Pa}},m:()=>Ne(""),l:()=>{ur=!1,ha=0},A:function(n,o){n=-9007199254740992>n||9007199254740992<n?NaN:Number(n),n=new Date(1e3*n),A[o>>2]=n.getSeconds(),A[o+4>>2]=n.getMinutes(),A[o+8>>2]=n.getHours(),A[o+12>>2]=n.getDate(),A[o+16>>2]=n.getMonth(),A[o+20>>2]=n.getFullYear()-1900,A[o+24>>2]=n.getDay();var d=n.getFullYear();A[o+28>>2]=(d%4!==0||d%100===0&&d%400!==0?Ef:Sf)[n.getMonth()]+n.getDate()-1|0,A[o+36>>2]=-(60*n.getTimezoneOffset()),d=new Date(n.getFullYear(),6,1).getTimezoneOffset();var u=new Date(n.getFullYear(),0,1).getTimezoneOffset();A[o+32>>2]=(d!=u&&n.getTimezoneOffset()==Math.min(u,d))|0},y:function(n,o,d,u,p,g,x){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p);try{var U=xe(u);if((o&2)!==0&&(d&2)===0&&(U.flags&2097155)!==2)throw new D(2);if((U.flags&2097155)===1)throw new D(2);if(!U.Ma.jb)throw new D(43);if(!n)throw new D(28);var X=U.Ma.jb(U,n,p,o,d),H=X.Xb;return A[g>>2]=X.Eb,F[x>>2]=H,0}catch(ee){if(typeof J>"u"||ee.name!=="ErrnoError")throw ee;return-ee.Pa}},z:function(n,o,d,u,p,g){g=-9007199254740992>g||9007199254740992<g?NaN:Number(g);try{var x=xe(p);if(d&2){if(d=g,(x.node.mode&61440)!==32768)throw new D(43);if(!(u&2)){var U=_.slice(n,n+o);x.Ma.kb&&x.Ma.kb(x,U,d,o,u)}}}catch(X){if(typeof J>"u"||X.name!=="ErrnoError")throw X;return-X.Pa}},n:(n,o)=>{if(Xr[n]&&(clearTimeout(Xr[n].id),delete Xr[n]),!o)return 0;var d=setTimeout(()=>{delete Xr[n],Cf(()=>No(n,performance.now()))},o);return Xr[n]={id:d,lc:o},0},B:(n,o,d,u)=>{var p=new Date().getFullYear(),g=new Date(p,0,1).getTimezoneOffset();p=new Date(p,6,1).getTimezoneOffset(),F[n>>2]=60*Math.max(g,p),A[o>>2]=+(g!=p),o=x=>{var U=Math.abs(x);return`UTC${0<=x?"-":"+"}${String(Math.floor(U/60)).padStart(2,"0")}${String(U%60).padStart(2,"0")}`},n=o(g),o=o(p),p<g?(Ge(n,_,d,17),Ge(o,_,u,17)):(Ge(n,_,u,17),Ge(o,_,d,17))},d:()=>Date.now(),s:()=>2147483648,c:()=>performance.now(),o:n=>{var o=_.length;if(n>>>=0,2147483648<n)return!1;for(var d=1;4>=d;d*=2){var u=o*(1+.2/d);u=Math.min(u,n+100663296);e:{u=(Math.min(2147483648,65536*Math.ceil(Math.max(n,u)/65536))-Ji.buffer.byteLength+65535)/65536|0;try{Ji.grow(u),Pe();var p=1;break e}catch{}p=void 0}if(p)return!0}return!1},E:(n,o)=>{var d=0,u=0,p;for(p of Lo()){var g=o+d;F[n+u>>2]=g,d+=Ge(p,_,g,1/0)+1,u+=4}return 0},F:(n,o)=>{var d=Lo();F[n>>2]=d.length,n=0;for(var u of d)n+=hr(u)+1;return F[o>>2]=n,0},e:function(n){try{var o=xe(n);return fa(o),0}catch(d){if(typeof J>"u"||d.name!=="ErrnoError")throw d;return d.Pa}},p:function(n,o){try{var d=xe(n);return N[o]=d.tty?2:ke(d.mode)?3:(d.mode&61440)===40960?7:4,P[o+2>>1]=0,ie[o+8>>3]=BigInt(0),ie[o+16>>3]=BigInt(0),0}catch(u){if(typeof J>"u"||u.name!=="ErrnoError")throw u;return u.Pa}},w:function(n,o,d,u){try{e:{var p=xe(n);n=o;for(var g,x=o=0;x<d;x++){var U=F[n>>2],X=F[n+4>>2];n+=8;var H=Do(p,N,U,X,g);if(0>H){var ee=-1;break e}if(o+=H,H<X)break;typeof g<"u"&&(g+=H)}ee=o}return F[u>>2]=ee,0}catch(pe){if(typeof J>"u"||pe.name!=="ErrnoError")throw pe;return pe.Pa}},D:function(n,o,d,u){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o);try{if(isNaN(o))return 61;var p=xe(n);return Io(p,o,d),ie[u>>3]=BigInt(p.position),p.rb&&o===0&&d===0&&(p.rb=null),0}catch(g){if(typeof J>"u"||g.name!=="ErrnoError")throw g;return g.Pa}},I:function(n){try{var o=xe(n);return o.Ma?.fsync?.(o)}catch(d){if(typeof J>"u"||d.name!=="ErrnoError")throw d;return d.Pa}},t:function(n,o,d,u){try{e:{var p=xe(n);n=o;for(var g,x=o=0;x<d;x++){var U=F[n>>2],X=F[n+4>>2];n+=8;var H=Bo(p,N,U,X,g);if(0>H){var ee=-1;break e}if(o+=H,H<X)break;typeof g<"u"&&(g+=H)}ee=o}return F[u>>2]=ee,0}catch(pe){if(typeof J>"u"||pe.name!=="ErrnoError")throw pe;return pe.Pa}},k:Ro};function ga(){function n(){if(a.calledRun=!0,!M){if(!a.noFSInit&&!vo){var o,d;vo=!0,o??=a.stdin,d??=a.stdout,u??=a.stderr,o?_t("stdin",o):ua("/dev/tty","/dev/stdin"),d?_t("stdout",null,d):ua("/dev/tty","/dev/stdout"),u?_t("stderr",null,u):ua("/dev/tty1","/dev/stderr"),vr("/dev/stdin",0),vr("/dev/stdout",1),vr("/dev/stderr",1)}if(ba.N(),go=!1,a.onRuntimeInitialized?.(),a.postRun)for(typeof a.postRun=="function"&&(a.postRun=[a.postRun]);a.postRun.length;){var u=a.postRun.shift();zi.push(u)}Fi(zi)}}if(0<ot)Ut=ga;else{if(a.preRun)for(typeof a.preRun=="function"&&(a.preRun=[a.preRun]);a.preRun.length;)ia();Fi(qi),0<ot?Ut=ga:a.setStatus?(a.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>a.setStatus(""),1),n()},1)):n()}}var ba;return(async function(){function n(d){return d=ba=d.exports,a._sqlite3_free=d.P,a._sqlite3_value_text=d.Q,a._sqlite3_prepare_v2=d.R,a._sqlite3_step=d.S,a._sqlite3_reset=d.T,a._sqlite3_exec=d.U,a._sqlite3_finalize=d.V,a._sqlite3_column_name=d.W,a._sqlite3_column_text=d.X,a._sqlite3_column_type=d.Y,a._sqlite3_errmsg=d.Z,a._sqlite3_clear_bindings=d._,a._sqlite3_value_blob=d.$,a._sqlite3_value_bytes=d.aa,a._sqlite3_value_double=d.ba,a._sqlite3_value_int=d.ca,a._sqlite3_value_type=d.da,a._sqlite3_result_blob=d.ea,a._sqlite3_result_double=d.fa,a._sqlite3_result_error=d.ga,a._sqlite3_result_int=d.ha,a._sqlite3_result_int64=d.ia,a._sqlite3_result_null=d.ja,a._sqlite3_result_text=d.ka,a._sqlite3_aggregate_context=d.la,a._sqlite3_column_count=d.ma,a._sqlite3_data_count=d.na,a._sqlite3_column_blob=d.oa,a._sqlite3_column_bytes=d.pa,a._sqlite3_column_double=d.qa,a._sqlite3_bind_blob=d.ra,a._sqlite3_bind_double=d.sa,a._sqlite3_bind_int=d.ta,a._sqlite3_bind_text=d.ua,a._sqlite3_bind_parameter_index=d.va,a._sqlite3_sql=d.wa,a._sqlite3_normalized_sql=d.xa,a._sqlite3_changes=d.ya,a._sqlite3_close_v2=d.za,a._sqlite3_create_function_v2=d.Aa,a._sqlite3_update_hook=d.Ba,a._sqlite3_open=d.Ca,Qi=a._malloc=d.Da,Kr=a._free=d.Ea,a._RegisterExtensionFunctions=d.Fa,Po=d.Ga,No=d.Ha,Qr=d.Ia,$t=d.Ja,Jr=d.Ka,Ji=d.M,St=d.O,Pe(),ot--,a.monitorRunDependencies?.(ot),ot==0&&Ut&&(d=Ut,Ut=null,d()),ba}ot++,a.monitorRunDependencies?.(ot);var o={a:If};return a.instantiateWasm?new Promise(d=>{a.instantiateWasm(o,(u,p)=>{d(n(u,p))})}):(yt??=a.locateFile?a.locateFile("sql-wasm.wasm",y):y+"sql-wasm.wasm",n((await Ni(o)).instance))})(),ga(),i}),Yn)};typeof Gn=="object"&&typeof dr=="object"?(dr.exports=Xn,dr.exports.default=Xn):typeof define=="function"&&define.amd?define([],function(){return Xn}):typeof Gn=="object"&&(Gn.Module=Xn)});var Z0={};dh(Z0,{activate:()=>j0,deactivate:()=>H0});module.exports=lh(Z0);var V=me(require("vscode")),cf=me(require("path")),uf=me(require("fs")),ff=me(require("child_process"));var Ve=me(require("fs")),Hr=me(require("path")),df=me(sf()),lf=me(of()),Zr=class{wasmBinaryPath;constructor(t){this.wasmBinaryPath=t}async parseApkg(t,r,i){i?.({stage:"reading_zip",percent:5,message:"Loading package archive..."});let s=await Ve.promises.readFile(t),a=await df.default.loadAsync(s);i?.({stage:"parsing_database",percent:25,message:"Loading Anki SQLite database..."});let l=a.file("collection.anki21");if(l||(l=a.file("collection.anki2")),!l)throw new Error("Invalid APKG: Neither collection.anki21 nor collection.anki2 found in archive");let c=await l.async("uint8array"),m={},f=a.file("media");if(f)try{let _=await f.async("string");m=JSON.parse(_)}catch(_){console.warn("Failed to parse media mapping JSON:",_)}let h={};if(this.wasmBinaryPath&&Ve.existsSync(this.wasmBinaryPath)){let _=await Ve.promises.readFile(this.wasmBinaryPath);h.wasmBinary=_.buffer.slice(_.byteOffset,_.byteOffset+_.byteLength)}else{let _=Hr.resolve(__dirname,"sql-wasm.wasm"),P=Hr.resolve(__dirname,"../node_modules/sql.js/dist/sql-wasm.wasm"),A=Hr.resolve(__dirname,"../../node_modules/sql.js/dist/sql-wasm.wasm"),F=Ve.existsSync(_)?_:Ve.existsSync(P)?P:Ve.existsSync(A)?A:void 0;if(F){let L=await Ve.promises.readFile(F);h.wasmBinary=L.buffer.slice(L.byteOffset,L.byteOffset+L.byteLength)}}let S=await(0,lf.default)(h),y=new S.Database(c),b=y.exec("SELECT models, decks FROM col");if(!b||b.length===0||!b[0].values.length)throw new Error('Invalid Anki database: "col" table is missing or empty');let B=b[0].values[0][0],E=b[0].values[0][1],R=JSON.parse(B),C=JSON.parse(E),k=new Map;for(let[_,P]of Object.entries(C)){let A=Number(_);k.set(A,{id:A,name:P.name,description:P.desc,cardCount:0,newCount:0,dueCount:0,learnedCount:0})}let M=y.exec("SELECT id, mid, flds, tags FROM notes"),T=new Map;if(M.length>0)for(let _ of M[0].values){let P=_[0],A=_[1],F=_[2]||"",L=_[3]||"";T.set(P,{mid:A,flds:F.split(""),tags:L.trim().split(/\s+/).filter(Boolean)})}let I=y.exec("SELECT id, nid, did, queue, due, ivl, factor, reps, lapses FROM cards"),N=[];if(I.length>0)for(let _ of I[0].values){let P=_[0],A=_[1],F=_[2],L=_[3],se=_[4],ie=_[5],Pe=_[6]||2500,Ne=_[7],yt=_[8],Fe=T.get(A);if(!Fe)continue;let Ni=R[String(Fe.mid)]?.flds?.map(xt=>xt.name)||[],Q={};for(let xt=0;xt<Ni.length;xt++)Q[Ni[xt]]=Fe.flds[xt]||"";let Fi=Q.Word||Q.English||Q.Front||Q.Text||"",zi=Q.IPA||Q.Transcription||Q["Am&BrTranscription"]||Q.BrTranscription||Q.AmTranscription||"",qi=Q.Meaning||Q.Back||Q["Back Extra"]||"",ia=Q.Example||"",ot=Q.Image||Q.IMG||"",Ut=Q.Sound||Q.Audio||"",ze=Q.Sound_Meaning||"",ur=Q.Sound_Example||"",Wt=this.extractFilenameFromHtml(ot),Ui=this.extractFilenameFromSoundTag(Ut),Wi=this.extractFilenameFromSoundTag(ze),oe=this.extractFilenameFromSoundTag(ur),Xe="new";L===0?Xe="new":L===1?Xe="learning":L===2?Xe="review":L===3&&(Xe="relearning");let qe=k.get(F),ji=qe?qe.name:"Default",fr={id:P,noteId:A,deckId:F,deckName:ji,queue:Xe,reps:Ne,lapses:yt,interval:ie,easeFactor:Number((Pe/1e3).toFixed(2)),due:se,word:Fi,ipa:zi||void 0,meaning:qi||void 0,example:ia||void 0,image:Wt||void 0,sound:Ui||void 0,soundMeaning:Wi||void 0,soundExample:oe||void 0,fields:Q,tags:Fe.tags};N.push(fr),qe&&(qe.cardCount++,Xe==="new"?qe.newCount++:Xe==="review"?qe.dueCount++:qe.learnedCount++)}if(y.close(),r&&Object.keys(m).length>0){await Ve.promises.mkdir(r,{recursive:!0});let _=Object.entries(m),P=_.length;i?.({stage:"extracting_media",percent:40,message:`Extracting ${P} media files...`,totalCards:N.length,totalMedia:P,extractedMedia:0});let A=0;for(let[F,L]of _){let se=a.file(F);if(se){let ie=await se.async("nodebuffer"),Pe=Hr.join(r,L);await Ve.promises.writeFile(Pe,ie)}if(A++,A%500===0||A===P){let ie=40+Math.floor(A/P*55);i?.({stage:"extracting_media",percent:ie,message:`Extracting media: ${A}/${P}`,totalCards:N.length,totalMedia:P,extractedMedia:A})}}}return i?.({stage:"done",percent:100,message:`Imported ${N.length} cards across ${k.size} decks`,totalCards:N.length}),{decks:Array.from(k.values()).filter(_=>_.cardCount>0),cards:N,mediaMap:m}}extractFilenameFromHtml(t){if(!t)return;let r=t.match(/<img[^>]+src=["']?([^"'>\s]+)["']?/i);return r?r[1]:void 0}extractFilenameFromSoundTag(t){if(!t)return;let r=t.match(/\[sound:([^\]]+)\]/i);return r?r[1]:t.endsWith(".mp3")||t.endsWith(".wav")||t.endsWith(".ogg")?t:void 0}};var Pt=me(require("fs")),lo=me(require("path"));var at=class{static MIN_EASE=1.3;static DEFAULT_EASE=2.5;static scheduleCard(t,r,i=Date.now()){let{queue:s,interval:a,easeFactor:l,reps:c,lapses:m}=t;if((!l||l<this.MIN_EASE)&&(l=this.DEFAULT_EASE),s==="new"||s==="learning"||s==="relearning")return this.scheduleLearningCard(t,r,i);switch(c+=1,r){case 1:{m+=1,s="relearning",a=1,l=Math.max(this.MIN_EASE,l-.2);break}case 2:{s="review",a=Math.max(1,Math.round(a*1.2)),l=Math.max(this.MIN_EASE,l-.15);break}case 3:{s="review",a===1?a=6:a=Math.max(1,Math.round(a*l));break}case 4:{s="review",a===1?a=4:a=Math.max(1,Math.round(a*l*1.3)),l+=.15;break}}let f=i+a*24*60*60*1e3;return{queue:s,interval:a,easeFactor:Number(l.toFixed(2)),due:f,reps:c,lapses:m}}static scheduleLearningCard(t,r,i){let{easeFactor:s,reps:a,lapses:l}=t;s||(s=this.DEFAULT_EASE);let c=1,m="learning";switch(r){case 1:c=.007,m="learning",l+=1;break;case 2:c=.5,m="learning";break;case 3:c=1,m="review",a+=1;break;case 4:c=4,m="review",a+=1,s+=.15;break}let f=i+Math.round(c*24*60*60*1e3);return{queue:m,interval:Number(c.toFixed(3)),easeFactor:Number(s.toFixed(2)),due:f,reps:a,lapses:l}}static isCardDue(t,r=Date.now()){return t.queue==="new"?!0:t.due<=r}};var Kn=class e{baseDir;dataFile;mediaDir;data={version:1,decks:[],cards:[],reviews:[]};isLoaded=!1;constructor(t){this.baseDir=t,this.dataFile=lo.join(t,"anki_collection.json"),this.mediaDir=lo.join(t,"media")}wordIndex=new Map;getMediaDirectory(){return this.mediaDir}async initialize(){if(await Pt.promises.mkdir(this.baseDir,{recursive:!0}),await Pt.promises.mkdir(this.mediaDir,{recursive:!0}),Pt.existsSync(this.dataFile))try{let t=await Pt.promises.readFile(this.dataFile,"utf8");this.data=JSON.parse(t)}catch(t){console.error("Failed to load anki storage data, initializing empty:",t)}this.rebuildIndex(),this.isLoaded=!0}rebuildIndex(){this.wordIndex.clear();for(let t of this.data.cards)if(t.word){let r=t.word.trim().toLowerCase();this.wordIndex.has(r)||this.wordIndex.set(r,t)}}findWord(t){if(!t)return;let r=t.trim().toLowerCase().replace(/[^a-z]/g,"");return this.wordIndex.get(r)}getRandomWord(){if(this.data.cards.length===0)return;let t=Math.floor(Math.random()*this.data.cards.length);return this.data.cards[t]}async save(){let t=`${this.dataFile}.tmp`,r=JSON.stringify(this.data,null,2);await Pt.promises.writeFile(t,r,"utf8"),await Pt.promises.rename(t,this.dataFile),this.rebuildIndex()}async saveImportedData(t,r){this.data.decks=t,this.data.cards=r,this.data.lastImported=Date.now(),await this.save()}getDecks(){let t=Date.now(),r=new Map;for(let i of this.data.decks)r.set(i.id,{...i,cardCount:0,newCount:0,dueCount:0,learnedCount:0});for(let i of this.data.cards){let s=r.get(i.deckId);s||(s={id:i.deckId,name:i.deckName,cardCount:0,newCount:0,dueCount:0,learnedCount:0},r.set(i.deckId,s)),s.cardCount++,i.queue==="new"?s.newCount++:at.isCardDue(i,t)?s.dueCount++:s.learnedCount++}return Array.from(r.values()).sort((i,s)=>i.name.localeCompare(s.name))}getCards(t){return t!==void 0?this.data.cards.filter(r=>r.deckId===t):this.data.cards}getDueCards(t,r=50){let i=Date.now(),s=t!==void 0?this.data.cards.filter(m=>m.deckId===t):this.data.cards,a=s.filter(m=>m.queue!=="new"&&at.isCardDue(m,i)),l=s.filter(m=>m.queue==="new");return[...a,...l].slice(0,r)}static getCardLeitnerBox(t){return t.queue==="new"||t.queue==="learning"||t.queue==="relearning"||t.interval<=1?1:t.interval<=4?2:t.interval<=10?3:t.interval<=30?4:5}getLeitnerBoxes(t){let r=Date.now(),i=t!==void 0?this.data.cards.filter(a=>a.deckId===t):this.data.cards,s=[{box:1,name:"Box 1: Daily",intervalDesc:"1 day",totalCards:0,dueCards:0},{box:2,name:"Box 2: 3-Day",intervalDesc:"3-4 days",totalCards:0,dueCards:0},{box:3,name:"Box 3: Weekly",intervalDesc:"1 week",totalCards:0,dueCards:0},{box:4,name:"Box 4: Bi-weekly",intervalDesc:"2 weeks",totalCards:0,dueCards:0},{box:5,name:"Box 5: Mastered",intervalDesc:"1+ month",totalCards:0,dueCards:0}];for(let a of i){let l=e.getCardLeitnerBox(a)-1;l>=0&&l<5&&(s[l].totalCards++,at.isCardDue(a,r)&&s[l].dueCards++)}return s}getCardsByLeitnerBox(t,r,i=50){let s=Date.now(),l=(r!==void 0?this.data.cards.filter(c=>c.deckId===r):this.data.cards).filter(c=>e.getCardLeitnerBox(c)===t);return l.sort((c,m)=>{let f=at.isCardDue(c,s),h=at.isCardDue(m,s);return f&&!h?-1:!f&&h?1:c.due-m.due}),l.slice(0,i)}getCardById(t){return this.data.cards.find(r=>r.id===t)}async updateCardRating(t,r,i="flashcard"){let s=this.data.cards.findIndex(h=>h.id===t);if(s===-1)return;let a=this.data.cards[s],l=a.interval,c=a.easeFactor,m=at.scheduleCard(a,r),f={...a,...m,lastReviewed:Date.now()};return this.data.cards[s]=f,this.data.reviews.push({cardId:t,rating:r,reviewedAt:Date.now(),previousInterval:l,newInterval:f.interval,previousEase:c,newEase:f.easeFactor,studyMode:i}),await this.save(),f}getOverallStats(){let t=Date.now(),r=0,i=0,s=0;for(let S of this.data.cards)S.queue==="new"?r++:at.isCardDue(S,t)?i++:s++;let a=new Date;a.setHours(0,0,0,0);let l=a.getTime(),c=this.data.reviews.filter(S=>S.reviewedAt>=l).length,m=new Set(this.data.reviews.map(S=>{let y=new Date(S.reviewedAt);return`${y.getFullYear()}-${y.getMonth()+1}-${y.getDate()}`})),f=0,h=new Date;for(;;){let S=`${h.getFullYear()}-${h.getMonth()+1}-${h.getDate()}`;if(m.has(S))f++,h.setDate(h.getDate()-1);else if(f===0){h.setDate(h.getDate()-1);let y=`${h.getFullYear()}-${h.getMonth()+1}-${h.getDate()}`;if(m.has(y))f++,h.setDate(h.getDate()-1);else break}else break}return{totalCards:this.data.cards.length,newCount:r,dueCount:i,learnedCount:s,totalReviews:this.data.reviews.length,todayReviews:c,streakDays:f}}get7DayAnalytics(){let t=[],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];for(let i=6;i>=0;i--){let s=new Date;s.setDate(s.getDate()-i),s.setHours(0,0,0,0);let a=s.getTime(),l=a+864e5,c=this.data.reviews.filter(h=>h.reviewedAt>=a&&h.reviewedAt<l),m=c.filter(h=>h.rating>=3).length,f=c.filter(h=>h.rating<3).length;t.push({date:`${s.getMonth()+1}/${s.getDate()}`,dayName:r[s.getDay()],total:c.length,good:m,again:f})}return t}};var fe=me(require("vscode")),Nt=class extends fe.TreeItem{constructor(r,i,s,a,l){super(r,i);this.label=r;this.collapsibleState=i;this.itemType=s;this.deck=a;this.boxNumber=l;if(s==="stat")this.iconPath=new fe.ThemeIcon("flame"),this.contextValue="ankiStat";else if(s==="booksRoot")this.iconPath=new fe.ThemeIcon("library"),this.contextValue="booksRoot";else if(s==="deck"&&a){this.id=`deck-${a.id}`;let c=a.name.replace(/.*::/,"");this.label=c,this.description=`${a.cardCount} words`,this.tooltip=`${a.name}
Total: ${a.cardCount} words`,this.iconPath=new fe.ThemeIcon("book"),this.contextValue="ankiDeck",this.command={command:"anki.openStudy",title:"Study Deck",arguments:[a.id,void 0]}}else s==="leitnerRoot"?(this.iconPath=new fe.ThemeIcon("inbox"),this.contextValue="leitnerRoot"):s==="leitnerBox"&&l!==void 0&&(this.id=`leitner-box-${l}`,this.iconPath=new fe.ThemeIcon("package"),this.contextValue="leitnerBox",this.command={command:"anki.openStudy",title:"Study Leitner Box",arguments:[void 0,l]})}},Qn=class{constructor(t){this.storage=t}_onDidChangeTreeData=new fe.EventEmitter;onDidChangeTreeData=this._onDidChangeTreeData.event;refresh(){this._onDidChangeTreeData.fire()}getTreeItem(t){return t}getChildren(t){let r=this.storage.getDecks(),i=this.storage.getOverallStats();if(r.length===0){let s=new Nt("No decks imported yet",fe.TreeItemCollapsibleState.None,"empty");return s.description='Click "Import .apkg" below',s.iconPath=new fe.ThemeIcon("cloud-upload"),s.command={command:"anki.importDeck",title:"Import Deck"},Promise.resolve([s])}if(!t){let s=[],a=new Nt(`Streak: ${i.streakDays} days`,fe.TreeItemCollapsibleState.None,"stat");a.description=`${i.todayReviews} reviews today`,s.push(a);let l=r.reduce((f,h)=>f+h.cardCount,0),c=new Nt("Books",fe.TreeItemCollapsibleState.Expanded,"booksRoot");c.description=`${r.length} books (${l} words)`,s.push(c);let m=new Nt("Leitner Boxes",fe.TreeItemCollapsibleState.Expanded,"leitnerRoot");return m.description="Spaced Repetition",s.push(m),Promise.resolve(s)}if(t.itemType==="booksRoot"){let s=r.map(a=>new Nt(a.name,fe.TreeItemCollapsibleState.None,"deck",a));return Promise.resolve(s)}if(t.itemType==="leitnerRoot"){let a=this.storage.getLeitnerBoxes().map(l=>{let c=new Nt(l.name,fe.TreeItemCollapsibleState.None,"leitnerBox",void 0,l.box);return c.description=`${l.totalCards} words [${l.intervalDesc}]`,c.tooltip=`${l.name}
Interval: ${l.intervalDesc}
Total Cards: ${l.totalCards}`,c});return Promise.resolve(a)}return Promise.resolve([])}};var re=me(require("vscode")),Ye=me(require("path")),st=me(require("fs"));var lr=class e{static currentPanel;panel;extensionUri;storage;currentDeckId;currentBoxNumber;studyMode="flashcard";autoPlayAudio=!0;sessionLimit=30;dueCards=[];currentCardIndex=0;isAnswerRevealed=!1;sessionReviewedCount=0;sessionEnded=!1;sessionRatings={again:0,hard:0,good:0,easy:0};disposables=[];static createOrShow(t,r,i,s,a){let l=re.window.activeTextEditor?re.window.activeTextEditor.viewColumn:void 0;if(e.currentPanel){e.currentPanel.panel.reveal(l),a!==void 0&&(e.currentPanel.sessionLimit=a),(i!==void 0||s!==void 0||a!==void 0)&&e.currentPanel.setScope(i,s);return}let c=re.window.createWebviewPanel("ankiStudy","Anki",l||re.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[t,re.Uri.file(r.getMediaDirectory()),re.Uri.file(Ye.join(t.fsPath,"dist"))]});e.currentPanel=new e(c,t,r,i,s,a)}constructor(t,r,i,s,a,l){this.panel=t,this.extensionUri=r,this.storage=i,this.currentDeckId=s,this.currentBoxNumber=a,l!==void 0&&(this.sessionLimit=l),this.panel.iconPath=re.Uri.joinPath(r,"media","icons","anki.svg"),this.panel.onDidDispose(()=>this.dispose(),null,this.disposables),this.panel.webview.onDidReceiveMessage(async c=>{await this.handleWebviewMessage(c)},null,this.disposables),this.loadCards(),this.updateWebview()}setScope(t,r){this.currentDeckId=t,this.currentBoxNumber=r,this.sessionEnded=!1,this.loadCards(),this.postState()}setDeck(t){this.setScope(t,this.currentBoxNumber)}loadCards(){this.currentBoxNumber!==void 0?this.dueCards=this.storage.getCardsByLeitnerBox(this.currentBoxNumber,this.currentDeckId,this.sessionLimit):this.dueCards=this.storage.getDueCards(this.currentDeckId,this.sessionLimit),this.currentCardIndex=0,this.isAnswerRevealed=!1,this.sessionEnded=!1}getCurrentCard(){if(!this.sessionEnded&&this.currentCardIndex<this.dueCards.length)return this.dueCards[this.currentCardIndex]}async handleWebviewMessage(t){switch(t.command){case"getInitialState":this.postState();break;case"revealAnswer":this.isAnswerRevealed=!0,this.postState();break;case"endSession":this.sessionEnded=!0,this.postState();break;case"setSessionLimit":{let r=Number(t.limit);r>0&&(this.sessionLimit=r,this.loadCards(),this.postState());break}case"rateCard":{let r=this.getCurrentCard();if(r){let i=t.rating;await this.storage.updateCardRating(r.id,i,this.studyMode),this.sessionReviewedCount++,i===1?(this.sessionRatings.again++,this.dueCards.push(r)):i===2?this.sessionRatings.hard++:i===3?this.sessionRatings.good++:i===4&&this.sessionRatings.easy++,this.currentCardIndex++,this.isAnswerRevealed=!1,this.postState()}break}case"switchDeck":this.currentDeckId=t.deckId===-1?void 0:Number(t.deckId),this.sessionEnded=!1,this.loadCards(),this.postState();break;case"switchBox":this.currentBoxNumber=t.boxNumber===-1?void 0:Number(t.boxNumber),this.sessionEnded=!1,this.loadCards(),this.postState();break;case"importApkgDialog":{let r=await re.window.showOpenDialog({canSelectFiles:!0,canSelectFolders:!1,canSelectMany:!1,filters:{"Anki Package":["apkg","colpkg"]},title:"Select Anki Package (.apkg) to Import"});r&&r.length>0&&await this.processApkgImport(r[0].fsPath);break}case"importLocalWorkspaceApkg":{let r=Ye.join(re.workspace.workspaceFolders?.[0]?.uri.fsPath||"","4000_Essential_English_Words_all_books_en-en.apkg");st.existsSync(r)?await this.processApkgImport(r):re.window.showWarningMessage(`File not found: ${r}`);break}case"restartSession":this.loadCards(),this.sessionReviewedCount=0,this.sessionRatings={again:0,hard:0,good:0,easy:0},this.sessionEnded=!1,this.postState();break;case"startTypeExam":{let r=t.deckId===-1||t.deckId===void 0?void 0:Number(t.deckId),i=Number(t.count)||20;this.startTypeExamSession(r,i);break}case"submitTypeExamAnswer":{let r=Number(t.cardId),i=!!t.isCorrect;r&&await this.storage.updateCardRating(r,i?3:1,"typing");break}}}startTypeExamSession(t,r=20){let i=this.storage.getCards(t).filter(m=>m.sound&&m.word);if(i.length===0){this.panel.webview.postMessage({type:"typeExamCards",cards:[],deckId:t??-1});return}let a=[...i].sort(()=>Math.random()-.5).slice(0,r),l=this.storage.getMediaDirectory(),c=a.map(m=>{let f,h,S,y;if(m.image){let b=Ye.join(l,m.image);st.existsSync(b)&&(f=this.panel.webview.asWebviewUri(re.Uri.file(b)).toString())}if(m.sound){let b=Ye.join(l,m.sound);st.existsSync(b)&&(h=this.panel.webview.asWebviewUri(re.Uri.file(b)).toString())}if(m.soundMeaning){let b=Ye.join(l,m.soundMeaning);st.existsSync(b)&&(S=this.panel.webview.asWebviewUri(re.Uri.file(b)).toString())}if(m.soundExample){let b=Ye.join(l,m.soundExample);st.existsSync(b)&&(y=this.panel.webview.asWebviewUri(re.Uri.file(b)).toString())}return{id:m.id,word:m.word,ipa:m.ipa,meaning:m.meaning,example:m.example,soundUri:h,soundMeaningUri:S,soundExampleUri:y,imageUri:f}});this.panel.webview.postMessage({type:"typeExamCards",cards:c,deckId:t??-1})}async processApkgImport(t){try{let r=new Zr,i=this.storage.getMediaDirectory();this.panel.webview.postMessage({type:"importProgress",progress:{stage:"reading_zip",percent:10,message:"Loading package..."}});let s=await r.parseApkg(t,i,a=>{this.panel.webview.postMessage({type:"importProgress",progress:a})});await this.storage.saveImportedData(s.decks,s.cards),this.loadCards(),this.postState(),re.window.showInformationMessage(`Imported ${s.cards.length} cards across ${s.decks.length} decks!`)}catch(r){re.window.showErrorMessage(`Import failed: ${r}`),this.panel.webview.postMessage({type:"importError",error:String(r)})}}postState(){let t=this.getCurrentCard(),r=this.storage.getMediaDirectory(),i,s,a,l;if(t){if(t.image){let m=Ye.join(r,t.image);st.existsSync(m)&&(i=this.panel.webview.asWebviewUri(re.Uri.file(m)).toString())}if(t.sound){let m=Ye.join(r,t.sound);st.existsSync(m)&&(s=this.panel.webview.asWebviewUri(re.Uri.file(m)).toString())}if(t.soundMeaning){let m=Ye.join(r,t.soundMeaning);st.existsSync(m)&&(a=this.panel.webview.asWebviewUri(re.Uri.file(m)).toString())}if(t.soundExample){let m=Ye.join(r,t.soundExample);st.existsSync(m)&&(l=this.panel.webview.asWebviewUri(re.Uri.file(m)).toString())}}let c={type:"stateUpdate",decks:this.storage.getDecks(),leitnerBoxes:this.storage.getLeitnerBoxes(this.currentDeckId),currentBoxNumber:this.currentBoxNumber??-1,sessionLimit:this.sessionLimit,sessionEnded:this.sessionEnded,sessionRatings:this.sessionRatings,analytics7Day:this.storage.get7DayAnalytics(),stats:this.storage.getOverallStats(),currentDeckId:this.currentDeckId??-1,studyMode:this.studyMode,autoPlayAudio:this.autoPlayAudio,isAnswerRevealed:this.isAnswerRevealed,currentCardIndex:this.currentCardIndex,totalDueInSession:this.dueCards.length,sessionReviewedCount:this.sessionReviewedCount,card:this.sessionEnded?null:t?{...t,imageUri:i,soundUri:s,soundMeaningUri:a,soundExampleUri:l}:null};this.panel.webview.postMessage(c)}updateWebview(){let t=this.panel.webview.asWebviewUri(re.Uri.joinPath(this.extensionUri,"dist","codicons","codicon.css"));this.panel.webview.html=this.getHtmlForWebview(t)}getHtmlForWebview(t){return`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="${t}">
  <title>Anki</title>
  <style>
    :root {
      --bg: var(--vscode-editor-background);
      --fg: var(--vscode-editor-foreground);
      --desc-fg: var(--vscode-descriptionForeground, #8c8c8c);
      --card-bg: var(--vscode-editorWidget-background, #252526);
      --border: var(--vscode-editorWidget-border, #333333);
      --btn-bg: var(--vscode-button-background);
      --btn-fg: var(--vscode-button-foreground);
      --btn-hover: var(--vscode-button-hoverBackground);
      --btn-sec-bg: var(--vscode-button-secondaryBackground, #3a3d41);
      --btn-sec-fg: var(--vscode-button-secondaryForeground, #ffffff);
      --btn-sec-hover: var(--vscode-button-secondaryHoverBackground, #45494e);
      --badge-bg: var(--vscode-badge-background);
      --badge-fg: var(--vscode-badge-foreground);
      --input-bg: var(--vscode-input-background);
      --input-fg: var(--vscode-input-foreground);
      --input-border: var(--vscode-input-border);
      --focus-border: var(--vscode-focusBorder);
      --progress-bg: var(--vscode-progressBar-background, #007acc);
      --radius: 6px;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background-color: var(--bg);
      color: var(--fg);
      font-family: var(--vscode-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 1.5;
      display: flex;
      justify-content: center;
      padding: 16px;
      user-select: none;
    }

    .app {
      width: 100%;
      max-width: 640px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    /* Top Tabs (Practice vs Analytics) */
    .nav-tabs {
      display: flex;
      gap: 4px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 8px;
    }

    .nav-tab {
      background: transparent;
      border: 1px solid transparent;
      color: var(--desc-fg);
      font-size: 12px;
      font-weight: 500;
      padding: 4px 12px;
      border-radius: var(--radius);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s;
    }

    .nav-tab:hover {
      color: var(--fg);
      background: var(--btn-sec-bg);
    }

    .nav-tab.active {
      color: var(--fg);
      background: var(--btn-sec-bg);
      border-color: var(--border);
    }

    /* Minimal Breadcrumbs & Header */
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 12px;
      color: var(--desc-fg);
      padding: 0 2px;
    }

    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .breadcrumbs select {
      background: transparent;
      color: var(--fg);
      border: 1px solid transparent;
      border-radius: var(--radius);
      font-size: 12px;
      cursor: pointer;
      outline: none;
      padding: 2px 4px;
    }

    .breadcrumbs select:hover, .breadcrumbs select:focus {
      border-color: var(--border);
      background: var(--card-bg);
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 3px 8px;
      border-radius: var(--radius);
      font-size: 11px;
      background: var(--badge-bg);
      color: var(--badge-fg);
      border: 1px solid transparent;
    }

    .pill-clickable {
      cursor: pointer;
      border-color: var(--border);
      transition: all 0.15s;
    }

    .pill-clickable:hover {
      border-color: var(--focus-border);
      background: var(--btn-sec-bg);
      color: var(--fg);
    }

    .btn-end {
      background: var(--btn-sec-bg);
      color: var(--btn-sec-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      font-size: 11px;
      padding: 3px 10px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.15s;
    }

    .btn-end:hover {
      background: var(--btn-sec-hover);
      border-color: var(--focus-border);
    }

    /* Leitner Boxes Navigation Bar */
    .leitner-bar {
      display: flex;
      gap: 4px;
      overflow-x: auto;
      padding-bottom: 2px;
      scrollbar-width: none;
    }

    .leitner-bar::-webkit-scrollbar { display: none; }

    .box-chip {
      background: transparent;
      color: var(--desc-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 3px 8px;
      font-size: 11px;
      white-space: nowrap;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      transition: all 0.1s;
    }

    .box-chip:hover {
      background: var(--btn-sec-bg);
      color: var(--fg);
    }

    .box-chip.active {
      background: var(--badge-bg);
      color: var(--badge-fg);
      border-color: var(--focus-border);
      font-weight: 500;
    }

    /* Progress bar */
    .progress-bar {
      height: 2px;
      width: 100%;
      background: var(--border);
      border-radius: 1px;
      overflow: hidden;
    }

    .progress-bar-inner {
      height: 100%;
      width: 0%;
      background: var(--progress-bg);
      transition: width 0.2s ease;
    }

    /* Study Card */
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 16px;
      min-height: 360px;
      justify-content: space-between;
    }

    .word-title {
      font-size: 42px;
      font-weight: 700;
      color: var(--fg);
      letter-spacing: -0.5px;
      line-height: 1.1;
    }

    .word-spell {
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: 14px;
      color: var(--desc-fg);
      background: var(--input-bg);
      border: 1px solid var(--border);
      padding: 2px 12px;
      border-radius: 12px;
    }

    .audio-control-row {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 4px;
    }

    .audio-play-btn {
      background: var(--btn-sec-bg);
      color: var(--btn-sec-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      font-size: 12px;
      padding: 5px 14px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: all 0.15s;
    }

    .audio-play-btn:hover {
      background: var(--btn-sec-hover);
      border-color: var(--focus-border);
      color: var(--fg);
    }

    .speed-toggle-btn {
      background: transparent;
      color: var(--desc-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      font-size: 11px;
      font-family: var(--vscode-editor-font-family, monospace);
      padding: 5px 8px;
      cursor: pointer;
      transition: all 0.15s;
    }

    .speed-toggle-btn:hover {
      background: var(--btn-sec-bg);
      color: var(--fg);
      border-color: var(--focus-border);
    }

    /* Leitner Box Menu Cards */
    .leitner-box-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 14px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: border-color 0.15s;
    }

    .leitner-box-card:hover {
      border-color: var(--focus-border);
    }

    .leitner-box-info {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .leitner-box-name {
      font-size: 13px;
      font-weight: 600;
      color: var(--fg);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .leitner-box-meta {
      font-size: 11px;
      color: var(--desc-fg);
    }

    .image-container {
      max-height: 170px;
      border-radius: var(--radius);
      overflow: hidden;
      border: 1px solid var(--border);
    }

    .image-container img {
      max-height: 170px;
      max-width: 100%;
      display: block;
      object-fit: contain;
    }

    /* Details (Revealed) */
    .details {
      width: 100%;
      text-align: left;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 14px;
      background: rgba(0, 0, 0, 0.15);
      border-radius: var(--radius);
      border-left: 2px solid var(--progress-bg);
    }

    .meaning {
      font-size: 14px;
      color: var(--fg);
    }

    .example {
      font-size: 13px;
      color: var(--desc-fg);
      font-style: italic;
    }

    .audio-triggers {
      display: flex;
      gap: 8px;
      margin-top: 4px;
    }

    .audio-btn {
      font-size: 11px;
      background: var(--btn-sec-bg);
      color: var(--btn-sec-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 3px 8px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .audio-btn:hover {
      background: var(--btn-sec-hover);
    }

    /* Actions */
    .actions {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 8px;
    }

    .btn-primary {
      background: var(--btn-bg);
      color: var(--btn-fg);
      border: 1px solid transparent;
      border-radius: var(--radius);
      padding: 8px 24px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }

    .btn-primary:hover {
      background: var(--btn-hover);
    }

    .rating-row {
      display: flex;
      width: 100%;
      gap: 8px;
    }

    .btn-rate {
      flex: 1;
      padding: 8px 4px;
      font-size: 12px;
      font-weight: 500;
      background: var(--btn-sec-bg);
      color: var(--btn-sec-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      transition: all 0.1s;
    }

    .btn-rate:hover {
      border-color: var(--focus-border);
      background: var(--btn-sec-hover);
    }

    .rate-sub {
      font-size: 10px;
      color: var(--desc-fg);
    }

    .b-again { border-top: 2px solid #e06c75; }
    .b-hard  { border-top: 2px solid #d19a66; }
    .b-good  { border-top: 2px solid #61afef; }
    .b-easy  { border-top: 2px solid #98c379; }

    /* Summary Stats Badges */
    .summary-grid {
      display: flex;
      gap: 12px;
      margin: 12px 0;
    }

    .stat-box {
      background: rgba(0, 0, 0, 0.12);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 8px 14px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-number {
      font-size: 18px;
      font-weight: 600;
      color: var(--fg);
    }

    /* Modal / Popover for Setting Session Goal */
    .modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;
    }

    .modal-box {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 20px;
      width: 90%;
      max-width: 320px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .quick-limits {
      display: flex;
      gap: 6px;
      justify-content: space-between;
    }

    .limit-chip {
      flex: 1;
      padding: 6px 0;
      text-align: center;
      background: var(--input-bg);
      color: var(--input-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      cursor: pointer;
      font-size: 12px;
    }

    .limit-chip:hover {
      background: var(--btn-hover);
      color: var(--btn-fg);
      border-color: var(--focus-border);
    }

    .modal-actions {
      display: flex;
      gap: 8px;
      align-items: center;
      margin-top: 4px;
    }

    .custom-limit-input {
      height: 32px;
      box-sizing: border-box;
      width: 80px;
      padding: 0 8px;
      background: var(--input-bg);
      color: var(--input-fg);
      border: 1px solid var(--input-border);
      border-radius: var(--radius);
      font-size: 12px;
      outline: none;
    }

    .custom-limit-input:focus {
      border-color: var(--focus-border);
    }

    .modal-action-btn {
      height: 32px !important;
      box-sizing: border-box;
      padding: 0 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 500;
    }

    /* Shadcn/UI Style Analytics Layout */
    .shadcn-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 8px;
    }

    .shadcn-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .shadcn-card-title {
      font-size: 12px;
      color: var(--desc-fg);
      font-weight: 500;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .shadcn-card-value {
      font-size: 24px;
      font-weight: 700;
      letter-spacing: -0.5px;
      color: var(--fg);
      margin: 2px 0;
    }

    .shadcn-card-desc {
      font-size: 11px;
      color: var(--desc-fg);
    }

    .bar-chart-container {
      display: flex;
      align-items: flex-end;
      gap: 12px;
      height: 120px;
      padding-top: 16px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 6px;
    }

    .bar-col {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: flex-end;
      position: relative;
    }

    .bar-pill {
      width: 100%;
      max-width: 28px;
      background: var(--progress-bg);
      border-radius: 4px 4px 0 0;
      min-height: 4px;
      transition: height 0.3s ease;
    }

    .bar-pill:hover {
      opacity: 0.85;
    }

    .bar-label {
      font-size: 11px;
      color: var(--desc-fg);
      margin-top: 4px;
    }

    .leitner-progress-row {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .leitner-progress-header {
      display: flex;
      justify-content: space-between;
      font-size: 11px;
      color: var(--fg);
    }

    .leitner-progress-track {
      height: 6px;
      width: 100%;
      background: var(--border);
      border-radius: 3px;
      overflow: hidden;
    }

    .leitner-progress-bar {
      height: 100%;
      background: var(--progress-bg);
      border-radius: 3px;
    }

    /* Footer hints */
    .footer {
      font-size: 11px;
      color: var(--desc-fg);
      text-align: center;
      font-family: var(--vscode-editor-font-family, monospace);
    }

    /* Empty state */
    .empty-state {
      background: var(--card-bg);
      border: 1px dashed var(--border);
      border-radius: var(--radius);
      padding: 48px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      text-align: center;
      cursor: pointer;
    }

    .empty-state.dragover {
      border-color: var(--focus-border);
    }

    .empty-icon {
      font-size: 32px;
      color: var(--desc-fg);
    }

    .quick-link {
      color: var(--vscode-textLink-foreground, #3794ff);
      cursor: pointer;
      font-size: 12px;
      text-decoration: underline;
      background: transparent;
      border: none;
      margin-top: 4px;
    }

    kbd {
      background: rgba(255, 255, 255, 0.08);
      padding: 1px 4px;
      border-radius: 3px;
      font-size: 10px;
      border: 1px solid var(--border);
    }

    /* Type Exam Styles */
    .exam-input {
      width: 100%;
      max-width: 360px;
      height: 38px;
      padding: 0 14px;
      font-size: 15px;
      font-weight: 500;
      text-align: center;
      background: var(--input-bg);
      color: var(--input-fg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      outline: none;
      letter-spacing: 0.5px;
      box-sizing: border-box;
      transition: all 0.2s;
    }

    .exam-input:focus {
      border-color: var(--focus-border);
      box-shadow: 0 0 0 1px var(--focus-border);
    }

    .exam-input.correct {
      border-color: #98c379 !important;
      background: rgba(152, 195, 121, 0.12) !important;
    }

    .exam-input.incorrect {
      border-color: #e06c75 !important;
      background: rgba(224, 108, 117, 0.12) !important;
    }

    .exam-feedback {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 8px 14px;
      border-radius: var(--radius);
      font-size: 13px;
      text-align: center;
    }

    .exam-feedback.correct {
      background: rgba(152, 195, 121, 0.12);
      color: #98c379;
      border: 1px solid rgba(152, 195, 121, 0.3);
    }

    .exam-feedback.incorrect {
      background: rgba(224, 108, 117, 0.12);
      color: #e06c75;
      border: 1px solid rgba(224, 108, 117, 0.3);
    }

    .exam-typed-wrong {
      text-decoration: line-through;
      color: #e06c75;
      font-weight: 600;
    }

    .exam-typed-correct {
      color: #98c379;
      font-weight: 600;
    }

    .hidden { display: none !important; }
  </style>
</head>
<body>

<div class="app">
  <!-- Top Navigation Tabs (Practice vs Type Exam vs Leitner vs Analytics) -->
  <div class="nav-tabs">
    <button id="tabPractice" class="nav-tab active" onclick="switchNav('practice')"><i class="codicon codicon-book"></i> Practice</button>
    <button id="tabTypeExam" class="nav-tab" onclick="switchNav('typeExam')"><i class="codicon codicon-keyboard"></i> Type Exam</button>
    <button id="tabLeitner" class="nav-tab" onclick="switchNav('leitner')"><i class="codicon codicon-package"></i> Leitner</button>
    <button id="tabAnalytics" class="nav-tab" onclick="switchNav('analytics')"><i class="codicon codicon-graph"></i> Analytics</button>
  </div>

  <!-- PRACTICE VIEW -->
  <div id="practiceView" style="display: flex; flex-direction: column; gap: 10px;">
    <!-- Minimal Header -->
    <div class="header">
      <div class="breadcrumbs">
        <span>Anki</span>
        <span>\u203A</span>
        <select id="deckSelector">
          <option value="-1">All Books</option>
        </select>
      </div>

      <div class="header-actions">
        <span id="streakPill" class="pill"><i class="codicon codicon-flame"></i> <span id="streakDays">0d</span></span>
        <button id="cardCountPill" class="pill pill-clickable" title="Click to set session goal (e.g. 20, 30 words)"><i class="codicon codicon-target"></i> <span id="cardCountText">0 / 0</span></button>
        <button id="endSessionBtn" class="btn-end" title="Finish current learning session"><i class="codicon codicon-check"></i> End</button>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div id="progressFill" class="progress-bar-inner"></div>
    </div>

    <!-- Empty / Drop State -->
    <div id="emptyView" class="empty-state">
      <i class="codicon codicon-mortar-board empty-icon"></i>
      <div>
        <div style="font-weight: 500; margin-bottom: 4px;">No deck loaded</div>
        <div style="font-size: 12px; color: var(--desc-fg);">Drop an .apkg file here to begin</div>
      </div>
      <button id="chooseFileBtn" class="btn-primary"><i class="codicon codicon-folder-opened"></i> Open .apkg</button>
      <button id="loadWorkspaceBtn" class="quick-link">Load 4000 Essential English Words</button>

      <div id="importProgressBox" class="hidden" style="width: 100%; max-width: 300px; margin-top: 8px;">
        <div id="importStatusText" style="font-size: 11px; margin-bottom: 4px; color: var(--desc-fg);"></div>
        <div class="progress-bar"><div id="importProgressInner" class="progress-bar-inner"></div></div>
      </div>
    </div>

    <!-- Active Card View -->
    <div id="cardView" class="card hidden">
      <!-- Front: 3 Clean Lines -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; margin-top: 8px;">
        <!-- Line 1: Word Title -->
        <div id="wordDisplay" class="word-title">agree</div>
        
        <!-- Line 2: How to Spell / Phonetic Pronunciation -->
        <div id="ipaDisplay" class="word-spell">/\u0259\u02C8\u0261ri\u02D0/</div>
        
        <!-- Line 3: Play Button & Speed Toggle -->
        <div class="audio-control-row">
          <button id="audioWordBtn" class="audio-play-btn" title="Play pronunciation (R)">
            <i class="codicon codicon-play"></i> Play Audio
          </button>
          <button id="speedBtn" class="speed-toggle-btn" title="Click to cycle audio speed: 1.0x / 0.8x / 1.2x">1.0x</button>
        </div>
      </div>

      <!-- Back / Details (revealed) -->
      <div id="revealedSection" class="hidden" style="width: 100%; display: flex; flex-direction: column; align-items: center; gap: 12px;">
        <div id="imageBox" class="image-container hidden">
          <img id="cardImg" src="" alt="card image" />
        </div>

        <div class="details">
          <div id="meaningText" class="meaning"></div>
          <div id="exampleText" class="example"></div>

          <div class="audio-triggers">
            <button id="audioMeaningBtn" class="audio-btn"><i class="codicon codicon-play"></i> Meaning</button>
            <button id="audioExampleBtn" class="audio-btn"><i class="codicon codicon-play"></i> Example</button>
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="actions">
        <button id="revealBtn" class="btn-primary">Show Answer <kbd>Space</kbd></button>
        <div id="ratingRow" class="rating-row hidden">
          <button class="btn-rate b-again" onclick="rate(1)">Again <span class="rate-sub">1m <kbd>1</kbd></span></button>
          <button class="btn-rate b-hard"  onclick="rate(2)">Hard <span class="rate-sub">12h <kbd>2</kbd></span></button>
          <button class="btn-rate b-good"  onclick="rate(3)">Good <span class="rate-sub">1d <kbd>3</kbd></span></button>
          <button class="btn-rate b-easy"  onclick="rate(4)">Easy <span class="rate-sub">4d <kbd>4</kbd></span></button>
        </div>
      </div>
    </div>

    <!-- Finished / Summary View -->
    <div id="finishedView" class="card hidden" style="justify-content: center; gap: 14px;">
      <i class="codicon codicon-pass-filled" style="font-size: 36px; color: #98c379;"></i>
      <div>
        <div id="summaryTitle" style="font-size: 18px; font-weight: 600;">Session Complete! &#x1F389;</div>
        <div id="summarySubtitle" style="font-size: 12px; color: var(--desc-fg); margin-top: 4px;">Cards reviewed this session</div>
      </div>

      <div class="summary-grid">
        <div class="stat-box">
          <div class="stat-number" id="sumTotal">0</div>
          <div style="color: var(--desc-fg);">Reviewed</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" style="color: #98c379;" id="sumGood">0</div>
          <div style="color: var(--desc-fg);">Good/Easy</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" style="color: #e06c75;" id="sumAgain">0</div>
          <div style="color: var(--desc-fg);">Again</div>
        </div>
      </div>

      <div style="display: flex; gap: 8px;">
        <button id="studyMoreBtn" class="btn-primary"><i class="codicon codicon-refresh"></i> Review More</button>
        <button id="box1QuickBtn" class="btn-rate" style="flex: unset; padding: 8px 16px;" onclick="practiceBox(1)"><i class="codicon codicon-package"></i> Review Box 1</button>
      </div>
    </div>
  </div>

  <!-- TYPE EXAM TAB: LISTEN & TYPE SPELLING EXAM -->
  <div id="typeExamView" class="hidden" style="display: flex; flex-direction: column; gap: 10px;">
    <!-- Minimal Header -->
    <div class="header">
      <div class="breadcrumbs">
        <span>Exam</span>
        <span>\u203A</span>
        <select id="examDeckSelector">
          <option value="-1">All Books</option>
        </select>
      </div>

      <div class="header-actions">
        <span id="examScorePill" class="pill" title="Score"><i class="codicon codicon-check"></i> <span id="examScoreText">0 / 0</span></span>
        <span id="examStreakPill" class="pill" title="Streak"><i class="codicon codicon-flame"></i> <span id="examStreakText">0</span></span>
        <button id="endExamBtn" class="btn-end" title="End exam session" onclick="endTypeExam()"><i class="codicon codicon-debug-stop"></i> End</button>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="progress-bar">
      <div id="examProgressFill" class="progress-bar-inner"></div>
    </div>

    <!-- Active Exam Card -->
    <div id="examCardView" class="card" style="align-items: center; gap: 14px; min-height: 280px; padding: 24px 20px;">
      <div style="font-size: 11px; color: var(--desc-fg); text-transform: uppercase; letter-spacing: 0.5px; font-weight: 500;">
        Listen &amp; Type the Word
      </div>

      <!-- Listen & Audio Controls -->
      <div class="audio-control-row" style="margin: 4px 0;">
        <button id="examPlayBtn" class="audio-play-btn" style="padding: 10px 22px; font-size: 13px;" onclick="playExamAudio()">
          <i class="codicon codicon-unmute"></i> Listen Word <kbd>Ctrl+R</kbd>
        </button>
        <button id="examSpeedBtn" class="speed-toggle-btn" title="Cycle audio speed: 1.0x / 0.8x / 1.2x" onclick="cycleExamSpeed()">1.0x</button>
        <button id="examHintBtn" class="audio-btn" title="Show contextual hint" onclick="toggleExamHint()">
          <i class="codicon codicon-lightbulb"></i> Hint
        </button>
      </div>

      <!-- Context Hint Section -->
      <div id="examHintBox" class="hidden" style="background: rgba(0,0,0,0.15); border: 1px dashed var(--border); border-radius: var(--radius); padding: 10px 16px; font-size: 12px; color: var(--desc-fg); text-align: center; max-width: 440px;">
        <div id="examHintExample" style="margin-bottom: 4px; font-style: italic;"></div>
        <div id="examHintIpa" style="font-size: 11px; color: var(--vscode-textLink-foreground, #3794ff);"></div>
      </div>

      <!-- Input & Action Row -->
      <div style="width: 100%; max-width: 380px; display: flex; flex-direction: column; align-items: center; gap: 10px;">
        <input type="text" id="examInput" class="exam-input" placeholder="Type what you hear..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />

        <div id="examActionsRow" style="display: flex; gap: 8px; width: 100%; justify-content: center;">
          <button id="examCheckBtn" class="btn-primary" style="flex: 1; max-width: 160px; height: 32px;" onclick="checkExamAnswer()">
            Check <kbd>Enter</kbd>
          </button>
          <button id="examSkipBtn" class="btn-end" style="height: 32px; padding: 0 16px;" onclick="skipExamCard()">
            Skip
          </button>
        </div>

        <div id="examNextActionsRow" class="hidden" style="display: flex; gap: 8px; width: 100%; justify-content: center;">
          <button id="examNextBtn" class="btn-primary" style="flex: 1; max-width: 200px; height: 32px;" onclick="nextExamCard()">
            Next Word <kbd>Enter</kbd>
          </button>
        </div>
      </div>

      <!-- Feedback Banner -->
      <div id="examFeedbackBox" class="hidden" style="width: 100%; max-width: 420px; display: flex; flex-direction: column; gap: 8px;"></div>

      <!-- Revealed Details (Meaning, Picture, Example) -->
      <div id="examDetailsSection" class="hidden" style="width: 100%; max-width: 440px; display: flex; flex-direction: column; align-items: center; gap: 10px; border-top: 1px solid var(--border); padding-top: 12px; margin-top: 4px;">
        <div id="examImageBox" class="image-container hidden" style="max-height: 120px;">
          <img id="examImg" src="" alt="word image" style="max-height: 120px; object-fit: contain;" />
        </div>
        <div id="examMeaningText" class="meaning" style="font-size: 13px; text-align: center;"></div>
        <div id="examExampleText" class="example" style="font-size: 12px; text-align: center;"></div>
      </div>
    </div>

    <!-- Exam Finished Summary View -->
    <div id="examFinishedView" class="card hidden" style="justify-content: center; gap: 14px; text-align: center;">
      <i class="codicon codicon-pass-filled" style="font-size: 36px; color: #98c379;"></i>
      <div>
        <div style="font-size: 18px; font-weight: 600;">Exam Complete! &#x1F389;</div>
        <div style="font-size: 12px; color: var(--desc-fg); margin-top: 4px;">Here are your listening &amp; spelling results</div>
      </div>

      <div class="summary-grid">
        <div class="stat-box">
          <div class="stat-number" id="examSumScore">0 / 0</div>
          <div style="color: var(--desc-fg);">Score</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" style="color: #98c379;" id="examSumAccuracy">0%</div>
          <div style="color: var(--desc-fg);">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-number" style="color: #e5c07b;" id="examSumStreak">0</div>
          <div style="color: var(--desc-fg);">Best Streak</div>
        </div>
      </div>

      <div style="display: flex; gap: 8px; justify-content: center; margin-top: 6px;">
        <button class="btn-primary" onclick="restartTypeExam()"><i class="codicon codicon-refresh"></i> Start New Exam</button>
        <button class="btn-rate" style="flex: unset; padding: 8px 16px;" onclick="switchNav('practice')"><i class="codicon codicon-book"></i> Back to Practice</button>
      </div>
    </div>
  </div>

  <!-- LEITNER TAB: DEDICATED PRACTICE REVIEW MENU -->
  <div id="leitnerView" class="hidden" style="display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div>
        <div style="font-weight: 600; font-size: 15px;">Leitner Boxes</div>
        <div style="font-size: 12px; color: var(--desc-fg);">Practice and advance vocabulary through spaced repetition</div>
      </div>
      <button class="btn-primary" style="font-size: 12px; padding: 5px 12px;" onclick="practiceBox(-1)">
        <i class="codicon codicon-layers"></i> Practice All Due
      </button>
    </div>

    <!-- Dynamic list of Leitner box cards -->
    <div id="leitnerBoxesCardsList" style="display: flex; flex-direction: column; gap: 8px;"></div>
  </div>

  <!-- SHADCN/UI STYLE ANALYTICS VIEW -->
  <div id="analyticsView" class="hidden" style="display: flex; flex-direction: column; gap: 12px;">
    <!-- Metric KPI Cards -->
    <div class="shadcn-grid">
      <div class="shadcn-card">
        <div class="shadcn-card-title">
          <span>Total Vocabulary</span>
          <i class="codicon codicon-library"></i>
        </div>
        <div class="shadcn-card-value" id="anaTotalWords">3,871</div>
        <div class="shadcn-card-desc">4000 Essential English Words</div>
      </div>

      <div class="shadcn-card">
        <div class="shadcn-card-title">
          <span>Mastered</span>
          <i class="codicon codicon-pass-filled" style="color: #98c379;"></i>
        </div>
        <div class="shadcn-card-value" id="anaMastered">0</div>
        <div class="shadcn-card-desc" id="anaMasteredDesc">Box 4 & 5 (long-term memory)</div>
      </div>

      <div class="shadcn-card">
        <div class="shadcn-card-title">
          <span>Retention Rate</span>
          <i class="codicon codicon-heart" style="color: #e06c75;"></i>
        </div>
        <div class="shadcn-card-value" id="anaRetention">100%</div>
        <div class="shadcn-card-desc">Good / Easy ratings ratio</div>
      </div>

      <div class="shadcn-card">
        <div class="shadcn-card-title">
          <span>Study Streak</span>
          <i class="codicon codicon-flame" style="color: #e5c07b;"></i>
        </div>
        <div class="shadcn-card-value" id="anaStreak">0d</div>
        <div class="shadcn-card-desc" id="anaTotalReviews">0 lifetime reviews</div>
      </div>
    </div>

    <!-- 7-Day Activity Chart (shadcn style bar chart) -->
    <div class="shadcn-card" style="gap: 8px;">
      <div class="shadcn-card-title">
        <span>7-Day Review Activity</span>
        <span id="anaWeekTotal" style="font-size: 11px; color: var(--desc-fg);">0 reviews</span>
      </div>
      <div style="font-size: 11px; color: var(--desc-fg);">Cards reviewed each day over the past week</div>

      <div id="barChartContainer" class="bar-chart-container"></div>
    </div>

    <!-- Leitner Box Progression (shadcn style) -->
    <div class="shadcn-card" style="gap: 10px;">
      <div class="shadcn-card-title">
        <span>Leitner Spaced Repetition Mastery</span>
        <span style="font-size: 11px; color: var(--desc-fg);">5 Retention Stages</span>
      </div>
      <div id="leitnerBarsContainer" style="display: flex; flex-direction: column; gap: 8px;"></div>
    </div>
  </div>

  <!-- Set Session Goal Modal -->
  <div id="goalModal" class="modal-overlay hidden">
    <div class="modal-box">
      <div style="font-weight: 600;">Session Goal</div>
      <div style="font-size: 12px; color: var(--desc-fg);">How many words do you want to study?</div>
      <div class="quick-limits">
        <button class="limit-chip" onclick="applyLimit(10)">10</button>
        <button class="limit-chip" onclick="applyLimit(20)">20</button>
        <button class="limit-chip" onclick="applyLimit(30)">30</button>
        <button class="limit-chip" onclick="applyLimit(50)">50</button>
        <button class="limit-chip" onclick="applyLimit(100)">100</button>
      </div>
      <div class="modal-actions">
        <input type="number" id="customLimitInput" class="custom-limit-input" placeholder="Custom" min="1" max="500" />
        <button class="btn-primary modal-action-btn" onclick="applyCustomLimit()">Set</button>
        <button class="btn-end modal-action-btn" onclick="closeGoalModal()">Cancel</button>
      </div>
    </div>
  </div>

  <!-- Footer Shortcut Hints -->
  <div class="footer">
    <kbd>Space</kbd> Flip &bull; <kbd>1-4</kbd> Rate &bull; <kbd>R</kbd> Audio &bull; <kbd>Esc</kbd> End
  </div>
</div>

<audio id="audioPlayer"></audio>

<script>
  const vscode = acquireVsCodeApi();
  let state = null;
  let currentPlaybackRate = 1.0;
  let currentNav = 'practice';

  // DOM elements
  const practiceView = document.getElementById('practiceView');
  const typeExamView = document.getElementById('typeExamView');
  const leitnerView = document.getElementById('leitnerView');
  const analyticsView = document.getElementById('analyticsView');
  const tabPractice = document.getElementById('tabPractice');
  const tabTypeExam = document.getElementById('tabTypeExam');
  const tabLeitner = document.getElementById('tabLeitner');
  const tabAnalytics = document.getElementById('tabAnalytics');
  const emptyView = document.getElementById('emptyView');
  const cardView = document.getElementById('cardView');
  const finishedView = document.getElementById('finishedView');
  const deckSelector = document.getElementById('deckSelector');
  const progressFill = document.getElementById('progressFill');
  const streakDays = document.getElementById('streakDays');
  const cardCountPill = document.getElementById('cardCountPill');
  const cardCountText = document.getElementById('cardCountText');
  const wordDisplay = document.getElementById('wordDisplay');
  const ipaDisplay = document.getElementById('ipaDisplay');
  const revealedSection = document.getElementById('revealedSection');
  const imageBox = document.getElementById('imageBox');
  const cardImg = document.getElementById('cardImg');
  const meaningText = document.getElementById('meaningText');
  const exampleText = document.getElementById('exampleText');
  const revealBtn = document.getElementById('revealBtn');
  const ratingRow = document.getElementById('ratingRow');
  const audioPlayer = document.getElementById('audioPlayer');
  const endSessionBtn = document.getElementById('endSessionBtn');
  const goalModal = document.getElementById('goalModal');
  const customLimitInput = document.getElementById('customLimitInput');
  const speedBtn = document.getElementById('speedBtn');

  // Type Exam DOM elements
  const examDeckSelector = document.getElementById('examDeckSelector');
  const examScoreText = document.getElementById('examScoreText');
  const examStreakText = document.getElementById('examStreakText');
  const examProgressFill = document.getElementById('examProgressFill');
  const examCardView = document.getElementById('examCardView');
  const examFinishedView = document.getElementById('examFinishedView');
  const examInput = document.getElementById('examInput');
  const examActionsRow = document.getElementById('examActionsRow');
  const examNextActionsRow = document.getElementById('examNextActionsRow');
  const examFeedbackBox = document.getElementById('examFeedbackBox');
  const examDetailsSection = document.getElementById('examDetailsSection');
  const examImageBox = document.getElementById('examImageBox');
  const examImg = document.getElementById('examImg');
  const examMeaningText = document.getElementById('examMeaningText');
  const examExampleText = document.getElementById('examExampleText');
  const examHintBox = document.getElementById('examHintBox');
  const examHintExample = document.getElementById('examHintExample');
  const examHintIpa = document.getElementById('examHintIpa');
  const examSpeedBtn = document.getElementById('examSpeedBtn');
  const examSumScore = document.getElementById('examSumScore');
  const examSumAccuracy = document.getElementById('examSumAccuracy');
  const examSumStreak = document.getElementById('examSumStreak');

  // Type Exam State
  let examCards = [];
  let examIndex = 0;
  let examScore = 0;
  let examStreak = 0;
  let examMaxStreak = 0;
  let examState = 'question'; // 'question' | 'feedback' | 'finished'
  let examPlaybackRate = 1.0;
  let examHintVisible = false;

  vscode.postMessage({ command: 'getInitialState' });

  window.addEventListener('message', (e) => {
    const msg = e.data;
    if (msg.type === 'stateUpdate') {
      render(msg);
    } else if (msg.type === 'typeExamCards') {
      onReceiveTypeExamCards(msg.cards);
    } else if (msg.type === 'importProgress') {
      const box = document.getElementById('importProgressBox');
      box.classList.remove('hidden');
      document.getElementById('importStatusText').innerText = msg.progress.message;
      document.getElementById('importProgressInner').style.width = msg.progress.percent + '%';
    }
  });

  function switchNav(nav) {
    currentNav = nav;
    [tabPractice, tabTypeExam, tabLeitner, tabAnalytics].forEach(t => t.classList.remove('active'));
    [practiceView, typeExamView, leitnerView, analyticsView].forEach(v => v.classList.add('hidden'));

    if (nav === 'practice') {
      practiceView.classList.remove('hidden');
      tabPractice.classList.add('active');
    } else if (nav === 'typeExam') {
      typeExamView.classList.remove('hidden');
      tabTypeExam.classList.add('active');
      if (examCards.length === 0 && state?.decks?.length) {
        startTypeExam();
      } else if (examCards.length > 0 && examState === 'question') {
        setTimeout(() => { examInput.focus(); }, 50);
      }
    } else if (nav === 'leitner') {
      leitnerView.classList.remove('hidden');
      tabLeitner.classList.add('active');
      if (state) renderLeitnerMenu(state);
    } else {
      analyticsView.classList.remove('hidden');
      tabAnalytics.classList.add('active');
      if (state) renderAnalytics(state);
    }
  }

  function render(s) {
    state = s;

    // Header updates
    streakDays.innerText = (s.stats?.streakDays || 0) + 'd';
    populateDecks(s.decks || [], s.currentDeckId);

    if (!s.decks || s.decks.length === 0) {
      emptyView.classList.remove('hidden');
      cardView.classList.add('hidden');
      finishedView.classList.add('hidden');
      cardCountText.innerText = '0 / 0';
      progressFill.style.width = '0%';
      endSessionBtn.classList.add('hidden');
      return;
    }

    if (s.sessionEnded || !s.card) {
      emptyView.classList.add('hidden');
      cardView.classList.add('hidden');
      finishedView.classList.remove('hidden');
      endSessionBtn.classList.add('hidden');

      const total = s.sessionReviewedCount || 0;
      const goodCount = (s.sessionRatings?.good || 0) + (s.sessionRatings?.easy || 0);
      const againCount = (s.sessionRatings?.again || 0);
      document.getElementById('sumTotal').innerText = total;
      document.getElementById('sumGood').innerText = goodCount;
      document.getElementById('sumAgain').innerText = againCount;

      cardCountText.innerText = total + ' reviewed';
      progressFill.style.width = '100%';
      return;
    }

    emptyView.classList.add('hidden');
    finishedView.classList.add('hidden');
    cardView.classList.remove('hidden');
    endSessionBtn.classList.remove('hidden');

    // Progress
    const total = s.totalDueInSession || 1;
    const cur = s.currentCardIndex || 0;
    cardCountText.innerText = (cur + 1) + ' / ' + total;
    progressFill.style.width = Math.min(100, Math.round(((cur + 1) / total) * 100)) + '%';

    // Populate Card (3-Line Layout)
    const c = s.card;
    wordDisplay.innerText = c.word;

    if (c.ipa) {
      ipaDisplay.innerText = c.ipa.startsWith('/') ? c.ipa : ('/' + c.ipa + '/');
      ipaDisplay.classList.remove('hidden');
    } else {
      ipaDisplay.classList.add('hidden');
    }

    // Audio handlers
    document.getElementById('audioWordBtn').onclick = () => playAudio(c.soundUri);
    document.getElementById('audioMeaningBtn').onclick = () => playAudio(c.soundMeaningUri);
    document.getElementById('audioExampleBtn').onclick = () => playAudio(c.soundExampleUri);

    if (s.autoPlayAudio && !s.isAnswerRevealed && c.soundUri) {
      playAudio(c.soundUri);
    }

    // Reveal toggle
    if (s.isAnswerRevealed) {
      revealedSection.classList.remove('hidden');
      revealBtn.classList.add('hidden');
      ratingRow.classList.remove('hidden');

      if (c.imageUri) {
        cardImg.src = c.imageUri;
        imageBox.classList.remove('hidden');
      } else {
        imageBox.classList.add('hidden');
      }

      meaningText.innerHTML = c.meaning || '';
      exampleText.innerHTML = c.example || '';
    } else {
      revealedSection.classList.add('hidden');
      revealBtn.classList.remove('hidden');
      ratingRow.classList.add('hidden');
    }

    if (currentNav === 'leitner') renderLeitnerMenu(s);
    if (currentNav === 'analytics') renderAnalytics(s);
  }

  function renderLeitnerMenu(s) {
    const list = document.getElementById('leitnerBoxesCardsList');
    list.innerHTML = '';
    const boxes = s.leitnerBoxes || [];

    boxes.forEach(b => {
      const card = document.createElement('div');
      card.className = 'leitner-box-card';
      card.innerHTML = \`
        <div class="leitner-box-info">
          <div class="leitner-box-name">
            <i class="codicon codicon-package"></i> \${b.name}
          </div>
          <div class="leitner-box-meta">
            Interval: <b>\${b.intervalDesc}</b> &bull; Total: <b>\${b.totalCards} words</b> (\${b.dueCards} due)
          </div>
        </div>
        <button class="btn-primary" style="padding: 6px 14px; font-size: 12px;" onclick="practiceBox(\${b.box})">
          Practice Box \${b.box}
        </button>
      \`;
      list.appendChild(card);
    });
  }

  function practiceBox(boxNum) {
    switchBox(boxNum);
    switchNav('practice');
  }

  function renderAnalytics(s) {
    const stats = s.stats || {};
    const boxes = s.leitnerBoxes || [];
    const week = s.analytics7Day || [];

    document.getElementById('anaTotalWords').innerText = stats.totalCards || 0;

    const box4 = boxes.find(b => b.box === 4)?.totalCards || 0;
    const box5 = boxes.find(b => b.box === 5)?.totalCards || 0;
    const mastered = box4 + box5;
    const total = stats.totalCards || 1;
    document.getElementById('anaMastered').innerText = mastered;
    document.getElementById('anaMasteredDesc').innerText = Math.round((mastered / total) * 100) + '% of entire collection';

    const totalRev = stats.totalReviews || 0;
    document.getElementById('anaTotalReviews').innerText = totalRev + ' lifetime reviews';
    document.getElementById('anaStreak').innerText = (stats.streakDays || 0) + 'd';

    // Bar Chart
    const barContainer = document.getElementById('barChartContainer');
    barContainer.innerHTML = '';
    const maxVal = Math.max(1, ...week.map(w => w.total));
    let weekSum = 0;

    week.forEach(w => {
      weekSum += w.total;
      const col = document.createElement('div');
      col.className = 'bar-col';

      const heightPct = Math.round((w.total / maxVal) * 90);
      col.innerHTML = \`
        <div class="bar-pill" style="height: \${Math.max(4, heightPct)}%;" title="\${w.date} (\${w.dayName}): \${w.total} reviews (\${w.good} Good, \${w.again} Again)"></div>
        <span class="bar-label">\${w.dayName}</span>
      \`;
      barContainer.appendChild(col);
    });

    document.getElementById('anaWeekTotal').innerText = weekSum + ' reviews this week';

    // Leitner Progress Bars
    const leitnerContainer = document.getElementById('leitnerBarsContainer');
    leitnerContainer.innerHTML = '';

    boxes.forEach(b => {
      const pct = Math.round((b.totalCards / total) * 100);
      const row = document.createElement('div');
      row.className = 'leitner-progress-row';
      row.innerHTML = \`
        <div class="leitner-progress-header">
          <span>\${b.name} <span style="color: var(--desc-fg);">(\${b.intervalDesc})</span></span>
          <span style="font-weight: 500;">\${b.totalCards} <span style="color: var(--desc-fg);">(\${pct}%)</span></span>
        </div>
        <div class="leitner-progress-track">
          <div class="leitner-progress-bar" style="width: \${pct}%;"></div>
        </div>
      \`;
      leitnerContainer.appendChild(row);
    });
  }

  function playAudio(uri) {
    if (!uri) return;
    audioPlayer.src = uri;
    audioPlayer.playbackRate = currentPlaybackRate;
    audioPlayer.play().catch(() => {});
  }

  // Audio speed cycling
  speedBtn.onclick = () => {
    if (currentPlaybackRate === 1.0) currentPlaybackRate = 0.8;
    else if (currentPlaybackRate === 0.8) currentPlaybackRate = 1.2;
    else currentPlaybackRate = 1.0;
    speedBtn.innerText = currentPlaybackRate.toFixed(1) + 'x';
    audioPlayer.playbackRate = currentPlaybackRate;
  };

  function reveal() {
    vscode.postMessage({ command: 'revealAnswer' });
  }

  function rate(r) {
    vscode.postMessage({ command: 'rateCard', rating: r });
  }

  function switchBox(boxNum) {
    vscode.postMessage({ command: 'switchBox', boxNumber: boxNum });
  }

  function populateDecks(decks, currentId) {
    deckSelector.innerHTML = '<option value="-1">All Books</option>';
    examDeckSelector.innerHTML = '<option value="-1">All Books</option>';
    decks.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.id;
      const cleanName = d.name.replace(/.*::/, '');
      opt.innerText = cleanName + ' (' + d.cardCount + ' words)';
      if (d.id === currentId) opt.selected = true;
      deckSelector.appendChild(opt);

      const examOpt = opt.cloneNode(true);
      examDeckSelector.appendChild(examOpt);
    });
  }

  // Type Exam Logic
  function startTypeExam(deckId) {
    const dId = deckId !== undefined ? deckId : examDeckSelector.value;
    vscode.postMessage({ command: 'startTypeExam', deckId: dId, count: 20 });
  }

  function onReceiveTypeExamCards(cards) {
    examCards = cards || [];
    examIndex = 0;
    examScore = 0;
    examStreak = 0;
    examMaxStreak = 0;
    examState = 'question';
    examHintVisible = false;

    if (examCards.length === 0) {
      examCardView.classList.add('hidden');
      examFinishedView.classList.remove('hidden');
      examSumScore.innerText = '0 / 0';
      examSumAccuracy.innerText = '0%';
      examSumStreak.innerText = '0';
      return;
    }

    examCardView.classList.remove('hidden');
    examFinishedView.classList.add('hidden');
    renderExamCard();
  }

  function renderExamCard() {
    if (examIndex >= examCards.length) {
      finishTypeExam();
      return;
    }

    examState = 'question';
    examHintVisible = false;
    examHintBox.classList.add('hidden');

    const card = examCards[examIndex];
    examProgressFill.style.width = Math.round((examIndex / examCards.length) * 100) + '%';
    examScoreText.innerText = examScore + ' / ' + examIndex;
    examStreakText.innerText = examStreak;

    // Reset input
    examInput.value = '';
    examInput.className = 'exam-input';
    examInput.disabled = false;

    // Reset actions and feedback
    examActionsRow.classList.remove('hidden');
    examNextActionsRow.classList.add('hidden');
    examFeedbackBox.classList.add('hidden');
    examDetailsSection.classList.add('hidden');

    // Context hint data (blank out target word in example sentence)
    if (card.example) {
      const parts = card.example.split(new RegExp(card.word, 'i'));
      examHintExample.innerHTML = parts.join('<b>_____</b>');
    } else if (card.meaning) {
      examHintExample.innerHTML = card.meaning;
    } else {
      examHintExample.innerHTML = 'Listen closely to the audio pronunciation';
    }

    if (card.ipa) {
      examHintIpa.innerText = card.ipa.startsWith('/') ? card.ipa : ('/' + card.ipa + '/');
    } else {
      examHintIpa.innerText = '';
    }

    // Play audio and focus input
    playExamAudio();
    setTimeout(() => { examInput.focus(); }, 80);
  }

  function playExamAudio() {
    const card = examCards[examIndex];
    if (card && card.soundUri) {
      audioPlayer.src = card.soundUri;
      audioPlayer.playbackRate = examPlaybackRate;
      audioPlayer.play().catch(() => {});
    }
  }

  function cycleExamSpeed() {
    if (examPlaybackRate === 1.0) examPlaybackRate = 0.8;
    else if (examPlaybackRate === 0.8) examPlaybackRate = 1.2;
    else examPlaybackRate = 1.0;
    examSpeedBtn.innerText = examPlaybackRate.toFixed(1) + 'x';
    audioPlayer.playbackRate = examPlaybackRate;
  }

  function toggleExamHint() {
    examHintVisible = !examHintVisible;
    if (examHintVisible) {
      examHintBox.classList.remove('hidden');
    } else {
      examHintBox.classList.add('hidden');
    }
    examInput.focus();
  }

  function cleanWord(s) {
    return (s || '').trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  function checkExamAnswer() {
    if (examState !== 'question') return;
    const card = examCards[examIndex];
    if (!card) return;

    const userText = examInput.value.trim();
    if (!userText) {
      examInput.focus();
      return;
    }

    examState = 'feedback';
    examInput.disabled = true;

    const isCorrect = cleanWord(userText) === cleanWord(card.word);

    if (isCorrect) {
      examScore++;
      examStreak++;
      examMaxStreak = Math.max(examMaxStreak, examStreak);
      examInput.className = 'exam-input correct';

      const ipaStr = card.ipa ? ('/' + card.ipa.replace(/^\\/|\\/$/g, '') + '/') : '';
      examFeedbackBox.innerHTML = '<div class="exam-feedback correct">' +
        '<i class="codicon codicon-check"></i> ' +
        '<span>Correct! <b>' + card.word + '</b> ' + ipaStr + '</span>' +
        '</div>';
    } else {
      examStreak = 0;
      examInput.className = 'exam-input incorrect';

      examFeedbackBox.innerHTML = '<div class="exam-feedback incorrect">' +
        '<i class="codicon codicon-error"></i> ' +
        '<span>Incorrect</span>' +
        '</div>' +
        '<div style="font-size: 12px; display: flex; gap: 16px; justify-content: center; padding: 4px 0;">' +
        '<span>You typed: <span class="exam-typed-wrong">' + userText + '</span></span>' +
        '<span>Correct: <span class="exam-typed-correct">' + card.word + '</span></span>' +
        '</div>';
    }

    examScoreText.innerText = examScore + ' / ' + (examIndex + 1);
    examStreakText.innerText = examStreak;
    examFeedbackBox.classList.remove('hidden');

    // Reveal details
    if (card.imageUri) {
      examImg.src = card.imageUri;
      examImageBox.classList.remove('hidden');
    } else {
      examImageBox.classList.add('hidden');
    }
    examMeaningText.innerHTML = card.meaning || '';
    examExampleText.innerHTML = card.example || '';
    examDetailsSection.classList.remove('hidden');

    // Toggle action buttons
    examActionsRow.classList.add('hidden');
    examNextActionsRow.classList.remove('hidden');
    const nextBtn = document.getElementById('examNextBtn');
    if (nextBtn) nextBtn.focus();

    // Report answer to backend
    vscode.postMessage({
      command: 'submitTypeExamAnswer',
      cardId: card.id,
      isCorrect: isCorrect
    });
  }

  function skipExamCard() {
    if (examState !== 'question') return;
    examInput.value = '';
    checkExamAnswer();
  }

  function nextExamCard() {
    examIndex++;
    if (examIndex < examCards.length) {
      renderExamCard();
    } else {
      finishTypeExam();
    }
  }

  function finishTypeExam() {
    examState = 'finished';
    examCardView.classList.add('hidden');
    examFinishedView.classList.remove('hidden');
    examProgressFill.style.width = '100%';

    const total = examCards.length;
    examSumScore.innerText = examScore + ' / ' + total;
    const acc = total > 0 ? Math.round((examScore / total) * 100) : 0;
    examSumAccuracy.innerText = acc + '%';
    examSumStreak.innerText = examMaxStreak;
  }

  function endTypeExam() {
    finishTypeExam();
  }

  function restartTypeExam() {
    startTypeExam();
  }

  // Session Goal Modal handlers
  cardCountPill.onclick = () => {
    goalModal.classList.remove('hidden');
    customLimitInput.focus();
  };

  function closeGoalModal() {
    goalModal.classList.add('hidden');
  }

  function applyLimit(n) {
    vscode.postMessage({ command: 'setSessionLimit', limit: n });
    closeGoalModal();
  }

  function applyCustomLimit() {
    const val = parseInt(customLimitInput.value, 10);
    if (val && val > 0) {
      applyLimit(val);
    }
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!goalModal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeGoalModal();
      if (e.key === 'Enter') applyCustomLimit();
      return;
    }

    if (currentNav === 'typeExam') {
      if (examState === 'question') {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkExamAnswer();
          return;
        }
        if (e.key.toLowerCase() === 'r' && (e.ctrlKey || e.metaKey || document.activeElement !== examInput)) {
          e.preventDefault();
          playExamAudio();
          return;
        }
        if (e.key === 'Escape') {
          e.preventDefault();
          skipExamCard();
          return;
        }
      } else if (examState === 'feedback') {
        if (e.key === 'Enter' || e.code === 'Space') {
          e.preventDefault();
          nextExamCard();
          return;
        }
        if (e.key.toLowerCase() === 'r') {
          e.preventDefault();
          playExamAudio();
          return;
        }
      }
      return;
    }

    if (e.code === 'Space') {
      e.preventDefault();
      if (!state?.isAnswerRevealed) reveal();
      else rate(3);
    } else if (e.key === '1' && state?.isAnswerRevealed) {
      rate(1);
    } else if (e.key === '2' && state?.isAnswerRevealed) {
      rate(2);
    } else if (e.key === '3' && state?.isAnswerRevealed) {
      rate(3);
    } else if (e.key === '4' && state?.isAnswerRevealed) {
      rate(4);
    } else if (e.key.toLowerCase() === 'r') {
      playAudio(state?.card?.soundUri);
    } else if (e.key === 'Escape') {
      vscode.postMessage({ command: 'endSession' });
    }
  });

  // Event handlers
  revealBtn.onclick = reveal;
  endSessionBtn.onclick = () => vscode.postMessage({ command: 'endSession' });
  deckSelector.onchange = () => vscode.postMessage({ command: 'switchDeck', deckId: deckSelector.value });
  examDeckSelector.onchange = () => startTypeExam(Number(examDeckSelector.value));
  document.getElementById('chooseFileBtn').onclick = () => vscode.postMessage({ command: 'importApkgDialog' });
  document.getElementById('loadWorkspaceBtn').onclick = () => vscode.postMessage({ command: 'importLocalWorkspaceApkg' });
  document.getElementById('studyMoreBtn').onclick = () => vscode.postMessage({ command: 'restartSession' });

  // Drag & drop
  emptyView.addEventListener('dragover', (e) => {
    e.preventDefault();
    emptyView.classList.add('dragover');
  });
  emptyView.addEventListener('dragleave', () => {
    emptyView.classList.remove('dragover');
  });
  emptyView.addEventListener('drop', (e) => {
    e.preventDefault();
    emptyView.classList.remove('dragover');
    vscode.postMessage({ command: 'importApkgDialog' });
  });
</script>

</body>
</html>`}dispose(){for(e.currentPanel=void 0,this.panel.dispose();this.disposables.length;){let t=this.disposables.pop();t&&t.dispose()}}};var ea=me(require("vscode")),Jn=class{constructor(t){this.storage=t}provideHover(t,r,i){let s=t.getWordRangeAtPosition(r);if(!s)return;let a=t.getText(s).trim();if(!a||a.length<2)return;let l=this.storage.findWord(a);if(!l)return;let c=new ea.MarkdownString;c.isTrusted=!0,c.supportHtml=!0;let m=l.ipa?` \`/${l.ipa.replace(/^\/|\/$/g,"")}/\``:"";c.appendMarkdown(`### **${l.word}**${m}

`),l.meaning&&c.appendMarkdown(`${l.meaning}

`),l.example&&c.appendMarkdown(`*Example*: ${l.example}

`),c.appendMarkdown(`---
`);let f=encodeURIComponent(JSON.stringify(l.word));return c.appendMarkdown(`[$(play) Play Pronunciation](command:anki.playAudioForWord?${f}) &nbsp;&bull;&nbsp; [$(mortar-board) Study Card](command:anki.openStudy)`),new ea.Hover(c,s)}};var Ft=me(require("vscode")),ta=class{constructor(t){this.storage=t;this.statusBarItem=Ft.window.createStatusBarItem(Ft.StatusBarAlignment.Left,50),this.statusBarItem.command="anki.showWordOfTheDayDetails",this.rotateWord(),this.rotationTimer=setInterval(()=>this.rotateWord(),900*1e3)}statusBarItem;currentWord;rotationTimer;rotateWord(){let t=this.storage.getRandomWord();if(t){this.currentWord=t;let r=(t.meaning||"").replace(/<[^>]+>/g,"").replace(/^To \w+ is to /i,"").trim(),i=r.length>35?`${r.substring(0,35)}...`:r,s=t.ipa?`[${t.ipa}] `:"";this.statusBarItem.text=`$(mortar-board) ${t.word}: ${s}${i}`,this.statusBarItem.tooltip=`Word of the Day: ${t.word}
${r}
Click for details and pronunciation`,this.statusBarItem.show()}else this.statusBarItem.hide()}getCurrentWord(){return this.currentWord}async showDetails(){if(!this.currentWord){this.rotateWord();return}let t=this.currentWord,r=(t.meaning||"").replace(/<[^>]+>/g,""),i=(t.example||"").replace(/<[^>]+>/g,""),s=await Ft.window.showInformationMessage(`${t.word} ${t.ipa?`/${t.ipa}/`:""}

${r}
"${i}"`,"Play Pronunciation","Next Word","Open Anki");s==="Play Pronunciation"?Ft.commands.executeCommand("anki.playAudioForWord",t.word):s==="Next Word"?this.rotateWord():s==="Open Anki"&&Ft.commands.executeCommand("anki.openStudy")}dispose(){this.rotationTimer&&clearInterval(this.rotationTimer),this.statusBarItem.dispose()}};var zt=me(require("vscode")),ra=class{statusBarItem;timer;secondsLeft=1500;isRunning=!1;isBreak=!1;focusMinutes=25;breakMinutes=5;constructor(){this.statusBarItem=zt.window.createStatusBarItem(zt.StatusBarAlignment.Right,90),this.statusBarItem.command="anki.togglePomodoro",this.updateDisplay(),this.statusBarItem.show()}toggle(){this.isRunning?this.pause():this.start()}start(){this.isRunning||(this.isRunning=!0,this.timer=setInterval(()=>this.tick(),1e3),this.updateDisplay())}pause(){this.isRunning=!1,this.timer&&(clearInterval(this.timer),this.timer=void 0),this.updateDisplay()}reset(){this.pause(),this.isBreak=!1,this.secondsLeft=this.focusMinutes*60,this.updateDisplay()}tick(){this.secondsLeft>0?(this.secondsLeft--,this.updateDisplay()):this.onComplete()}async onComplete(){this.pause(),this.isBreak?(this.isBreak=!1,this.secondsLeft=this.focusMinutes*60,this.updateDisplay(),zt.window.showInformationMessage("Anki break finished! Ready to code?","Start Focus").then(t=>{t==="Start Focus"&&this.start()})):(this.isBreak=!0,this.secondsLeft=this.breakMinutes*60,this.updateDisplay(),await zt.window.showInformationMessage("Focus session complete! Ready for a 5-minute Anki break (10 words)?","Practice 10 Words","Skip Break")==="Practice 10 Words"&&(zt.commands.executeCommand("anki.openStudyWithLimit",10),this.start()))}updateDisplay(){let t=Math.floor(this.secondsLeft/60),r=this.secondsLeft%60,i=`${t.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}`,s=this.isBreak?"$(mortar-board)":"$(clock)",a=this.isRunning?"":" (Paused)",l=this.isBreak?"Break":"Focus";this.statusBarItem.text=`${s} ${i} ${l}${a}`,this.statusBarItem.tooltip=`Anki Pomodoro Timer: ${i} left. Click to ${this.isRunning?"pause":"start"}.`}dispose(){this.pause(),this.statusBarItem.dispose()}};var he,bt,cr,Pi,co;async function j0(e){console.log("Activating Anki for VS Code extension...");let t=e.globalStorageUri.fsPath;he=new Kn(t),await he.initialize(),cr=new Qn(he),V.window.registerTreeDataProvider("anki.deckView",cr);let r=V.languages.registerHoverProvider({scheme:"file"},new Jn(he));e.subscriptions.push(r),bt=V.window.createStatusBarItem(V.StatusBarAlignment.Right,100),bt.command="anki.openStudy",e.subscriptions.push(bt),$r(),Pi=new ta(he),co=new ra,e.subscriptions.push(Pi,co);let i=V.commands.registerCommand("anki.openStudy",async(b,B)=>{lr.createOrShow(e.extensionUri,he,b,B),$r(),cr.refresh()}),s=V.commands.registerCommand("anki.openStudyWithLimit",b=>{lr.createOrShow(e.extensionUri,he,void 0,void 0,b),$r(),cr.refresh()}),a=V.commands.registerCommand("anki.openLeitnerBox",async b=>{if(b===void 0){let B=he.getLeitnerBoxes(),E=await V.window.showQuickPick(B.map(R=>({label:R.name,description:`${R.totalCards} cards (${R.dueCards} due) \u2022 Interval: ${R.intervalDesc}`,box:R.box})),{placeHolder:"Select a Leitner Box to review"});if(E)b=E.box;else return}lr.createOrShow(e.extensionUri,he,void 0,b),$r(),cr.refresh()}),l=V.commands.registerCommand("anki.playAudioForWord",b=>{let B=he.findWord(b);if(B&&B.sound){let E=cf.join(he.getMediaDirectory(),B.sound);uf.existsSync(E)&&process.platform==="darwin"&&ff.execFile("afplay",[E],R=>{R&&console.error("afplay error:",R)})}}),c=V.commands.registerCommand("anki.lookupSelection",async()=>{let b=V.window.activeTextEditor;if(!b)return;let B=b.document.getText(b.selection).trim();if(!B){V.window.showInformationMessage("Please select an English word in your editor to look up.");return}let E=he.findWord(B);if(E){let R=(E.meaning||"").replace(/<[^>]+>/g,""),C=(E.example||"").replace(/<[^>]+>/g,""),k=E.ipa?`/${E.ipa}/ `:"",M=await V.window.showInformationMessage(`${E.word} ${k}\u2014 ${R}

"${C}"`,"Play Audio","Study in Anki");M==="Play Audio"?V.commands.executeCommand("anki.playAudioForWord",E.word):M==="Study in Anki"&&V.commands.executeCommand("anki.openStudy")}else V.window.showWarningMessage(`"${B}" was not found in your Anki vocabulary deck.`)}),m=V.commands.registerCommand("anki.togglePomodoro",()=>{co.toggle()}),f=V.commands.registerCommand("anki.showWordOfTheDayDetails",()=>{Pi.showDetails()}),h=V.commands.registerCommand("anki.importDeck",async b=>{let B=b;if(!B){let E=await V.window.showOpenDialog({canSelectFiles:!0,canSelectFolders:!1,canSelectMany:!1,filters:{"Anki Packages":["apkg","colpkg"]},title:"Select Anki Package (.apkg) to Import"});if(!E||E.length===0)return;B=E[0]}await V.window.withProgress({location:V.ProgressLocation.Notification,title:"Importing Anki Deck",cancellable:!1},async E=>{try{let R=new Zr,C=he.getMediaDirectory(),k=0,M=await R.parseApkg(B.fsPath,C,T=>{let I=Math.max(0,T.percent-k);k=T.percent,E.report({increment:I,message:T.message})});await he.saveImportedData(M.decks,M.cards),$r(),cr.refresh(),Pi.rotateWord(),V.window.showInformationMessage(`Successfully imported ${M.cards.length} cards across ${M.decks.length} decks!`),lr.createOrShow(e.extensionUri,he)}catch(R){V.window.showErrorMessage(`Failed to import Anki deck: ${R}`),console.error(R)}})}),S=V.commands.registerCommand("anki.refreshDecks",()=>{cr.refresh(),$r(),Pi.rotateWord()}),y=V.commands.registerCommand("anki.showStats",()=>{let b=he.getOverallStats();V.window.showInformationMessage(`Anki Stats \u2014 Total: ${b.totalCards} | Due: ${b.dueCount} | New: ${b.newCount} | Learned: ${b.learnedCount} | Reviews Today: ${b.todayReviews} | Streak: ${b.streakDays}d`)});e.subscriptions.push(i,s,a,l,c,m,f,h,S,y)}function $r(){if(!bt||!he)return;let e=he.getOverallStats();e.totalCards===0?(bt.text="$(mortar-board) Anki: Import deck",bt.tooltip="Click to import an .apkg deck"):(bt.text=`$(mortar-board) Anki: ${e.dueCount} due`,bt.tooltip=`Anki English Practice: ${e.dueCount} due, ${e.newCount} new cards (${e.streakDays} day streak)`),bt.show()}function H0(){}0&&(module.exports={activate,deactivate});
