(function(){var k;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={pa:!0},ha={};try{ha.__proto__=fa;ea=ha.pa;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function n(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},ka="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function la(a,b){if(b){for(var c=ka,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function ma(){ma=function(){};
ka.Symbol||(ka.Symbol=na)}
var na=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function oa(){ma();var a=ka.Symbol.iterator;a||(a=ka.Symbol.iterator=ka.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return pa(aa(this))}});
oa=function(){}}
function pa(a){oa();a={next:a};a[ka.Symbol.iterator]=function(){return this};
return a}
function p(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var qa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)p(d,e)&&(a[e]=d[e])}return a};
la("Object.assign",function(a){return a||qa});
la("WeakMap",function(a){function b(a){this.b=(g+=Math.random()+1).toString();if(a){a=ba(a);for(var b;!(b=a.next()).done;)b=b.value,this.set(b[0],b[1])}}
function c(){}
function d(a){p(a,f)||ja(a,f,{value:new c})}
function e(a){var b=Object[a];b&&(Object[a]=function(a){if(a instanceof c)return a;d(a);return b(a)})}
if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),c=Object.seal({}),d=new a([[b,2],[c,3]]);if(2!=d.get(b)||3!=d.get(c))return!1;d["delete"](b);d.set(c,4);return!d.has(b)&&4==d.get(c)}catch(u){return!1}}())return a;
var f="$jscomp_hidden_"+Math.random();e("freeze");e("preventExtensions");e("seal");var g=0;b.prototype.set=function(a,b){d(a);if(!p(a,f))throw Error("WeakMap key fail: "+a);a[f][this.b]=b;return this};
b.prototype.get=function(a){return p(a,f)?a[f][this.b]:void 0};
b.prototype.has=function(a){return p(a,f)&&p(a[f],this.b)};
b.prototype["delete"]=function(a){return p(a,f)&&p(a[f],this.b)?delete a[f][this.b]:!1};
return b});
la("Map",function(a){function b(){var a={};return a.previous=a.next=a.head=a}
function c(a,b){var c=a.b;return pa(function(){if(c){for(;c.head!=a.b;)c=c.previous;for(;c.next!=c.head;)return c=c.next,{done:!1,value:b(c)};c=null}return{done:!0,value:void 0}})}
function d(a,b){var c=b&&typeof b;"object"==c||"function"==c?f.has(b)?c=f.get(b):(c=""+ ++g,f.set(b,c)):c="p_"+b;var d=a.f[c];if(d&&p(a.f,c))for(var e=0;e<d.length;e++){var h=d[e];if(b!==b&&h.key!==h.key||b===h.key)return{id:c,list:d,index:e,o:h}}return{id:c,list:d,index:-1,o:void 0}}
function e(a){this.f={};this.b=b();this.size=0;if(a){a=ba(a);for(var c;!(c=a.next()).done;)c=c.value,this.set(c[0],c[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),c=new a(ba([[b,"s"]]));if("s"!=c.get(b)||1!=c.size||c.get({x:4})||c.set({x:4},"t")!=c||2!=c.size)return!1;var d=c.entries(),e=d.next();if(e.done||e.value[0]!=b||"s"!=e.value[1])return!1;e=d.next();return e.done||4!=e.value[0].x||"t"!=e.value[1]||!d.next().done?!1:!0}catch(S){return!1}}())return a;
oa();var f=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var c=d(this,a);c.list||(c.list=this.f[c.id]=[]);c.o?c.o.value=b:(c.o={next:this.b,previous:this.b.previous,head:this.b,key:a,value:b},c.list.push(c.o),this.b.previous.next=c.o,this.b.previous=c.o,this.size++);return this};
e.prototype["delete"]=function(a){a=d(this,a);return a.o&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.o.previous.next=a.o.next,a.o.next.previous=a.o.previous,a.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.f={};this.b=this.b.previous=b();this.size=0};
e.prototype.has=function(a){return!!d(this,a).o};
e.prototype.get=function(a){return(a=d(this,a).o)&&a.value};
e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};
e.prototype.keys=function(){return c(this,function(a){return a.key})};
e.prototype.values=function(){return c(this,function(a){return a.value})};
e.prototype.forEach=function(a,b){for(var c=this.entries(),d;!(d=c.next()).done;)d=d.value,a.call(b,d[1],d[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
la("Set",function(a){function b(a){this.b=new Map;if(a){a=ba(a);for(var b;!(b=a.next()).done;)this.add(b.value)}this.size=this.b.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var b=Object.seal({x:4}),d=new a(ba([b]));if(!d.has(b)||1!=d.size||d.add(b)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=b||f.value[1]!=b)return!1;f=e.next();return f.done||f.value[0]==b||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
oa();b.prototype.add=function(a){a=0===a?0:a;this.b.set(a,a);this.size=this.b.size;return this};
b.prototype["delete"]=function(a){a=this.b["delete"](a);this.size=this.b.size;return a};
b.prototype.clear=function(){this.b.clear();this.size=0};
b.prototype.has=function(a){return this.b.has(a)};
b.prototype.entries=function(){return this.b.entries()};
b.prototype.values=function(){return this.b.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(a,b){var c=this;this.b.forEach(function(d){return a.call(b,d,d,c)})};
return b});
la("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});
la("String.prototype.includes",function(a){return a?a:function(a,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(a instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==(this+"").indexOf(a,c||0)}});
(function(){function a(){function a(){}
Reflect.construct(a,[],function(){});
return new a instanceof a}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(a,d,e){a=b(a,d);e&&Reflect.setPrototypeOf(a,e.prototype);return a}}return function(a,b,e){void 0===e&&(e=a);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(a,e,b)||e}})();
var q=this;function r(a){return void 0!==a}
function t(a){return"string"==typeof a}
function v(a,b,c){a=a.split(".");c=c||q;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&r(b)?c[d]=b:c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}}
var ra=/^[\w+/_-]+[=]{0,2}$/,sa=null;function w(a,b){for(var c=a.split("."),d=b||q,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ta(){}
function ua(a){a.ca=void 0;a.getInstance=function(){return a.ca?a.ca:a.ca=new a}}
function va(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function x(a){return"array"==va(a)}
function wa(a){var b=va(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function xa(a){return"function"==va(a)}
function y(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var ya="closure_uid_"+(1E9*Math.random()>>>0),za=0;function Aa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function z(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?z=Aa:z=Ba;return z.apply(null,arguments)}
function Ca(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
var A=Date.now||function(){return+new Date};
function B(a,b){v(a,b,void 0)}
function C(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.fb=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var Da=document,D=window;function E(a){if(Error.captureStackTrace)Error.captureStackTrace(this,E);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
C(E,Error);E.prototype.name="CustomError";var Ea=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(t(a))return t(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Fa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=t(a)?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ga=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=t(a)?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ha=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function Ia(a,b){a:{var c=a.length;for(var d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:t(a)?a.charAt(c):a[c]}
function Ja(a,b){var c=Ea(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ka(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function La(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(wa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ma=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Na(a){if(!Oa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Pa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Qa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Ra,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Sa,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Ta,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ua,"&#0;"));return a}
var Pa=/&/g,Qa=/</g,Ra=/>/g,Sa=/"/g,Ta=/'/g,Ua=/\x00/g,Oa=/[\x00&<>"']/;function Va(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Wa;a:{var Xa=q.navigator;if(Xa){var Ya=Xa.userAgent;if(Ya){Wa=Ya;break a}}Wa=""}function G(a){return-1!=Wa.indexOf(a)}
;function Za(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function $a(a,b){var c=wa(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function ab(a){var b=bb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function cb(a){for(var b in a)return!1;return!0}
function db(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function eb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(c in b)if(!(c in a))return!1;return!0}
function fb(a){var b={},c;for(c in a)b[c]=a[c];return b}
var gb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<gb.length;f++)c=gb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function ib(a){ib[" "](a);return a}
ib[" "]=ta;var jb=G("Opera"),kb=G("Trident")||G("MSIE"),lb=G("Edge"),mb=G("Gecko")&&!(-1!=Wa.toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),nb=-1!=Wa.toLowerCase().indexOf("webkit")&&!G("Edge");function ob(){var a=q.document;return a?a.documentMode:void 0}
var pb;a:{var qb="",rb=function(){var a=Wa;if(mb)return/rv:([^\);]+)(\)|;)/.exec(a);if(lb)return/Edge\/([\d\.]+)/.exec(a);if(kb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(nb)return/WebKit\/(\S+)/.exec(a);if(jb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
rb&&(qb=rb?rb[1]:"");if(kb){var sb=ob();if(null!=sb&&sb>parseFloat(qb)){pb=String(sb);break a}}pb=qb}var tb=pb,ub;var vb=q.document;ub=vb&&kb?ob()||("CSS1Compat"==vb.compatMode?parseInt(tb,10):5):void 0;var wb=null,xb=null;function yb(a){this.b=a||{cookie:""}}
k=yb.prototype;k.isEnabled=function(){return navigator.cookieEnabled};
k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');r(c)||(c=-1);e=e?";domain="+e:"";d=d?";path="+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(A()+1E3*c)).toUTCString();this.b.cookie=a+"="+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"=",d=(this.b.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ma(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
k.remove=function(a,b,c){var d=r(this.get(a));this.set(a,"",0,b,c);return d};
k.isEmpty=function(){return!this.b.cookie};
k.clear=function(){for(var a=(this.b.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ma(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var zb=new yb("undefined"==typeof document?null:document);function Ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Bb=!kb||9<=Number(ub);function Cb(){this.b="";this.f=Db}
Cb.prototype.J=!0;Cb.prototype.I=function(){return this.b};
Cb.prototype.ba=!0;Cb.prototype.Y=function(){return 1};
function Eb(a){return a instanceof Cb&&a.constructor===Cb&&a.f===Db?a.b:"type_error:TrustedResourceUrl"}
var Db={};function H(){this.b="";this.f=Fb}
H.prototype.J=!0;H.prototype.I=function(){return this.b};
H.prototype.ba=!0;H.prototype.Y=function(){return 1};
function Gb(a){return a instanceof H&&a.constructor===H&&a.f===Fb?a.b:"type_error:SafeUrl"}
var Hb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ib(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);Hb.test(a)||(a="about:invalid#zClosurez");return Jb(a)}
var Fb={};function Jb(a){var b=new H;b.b=a;return b}
Jb("about:blank");function Kb(){this.b="";this.g=Lb;this.f=null}
Kb.prototype.ba=!0;Kb.prototype.Y=function(){return this.f};
Kb.prototype.J=!0;Kb.prototype.I=function(){return this.b};
var Lb={};function Mb(a,b){var c=new Kb;c.b=a;c.f=b;return c}
Mb("<!DOCTYPE html>",0);Mb("",0);Mb("<br>",0);function Nb(a,b){var c=b instanceof H?b:Ib(b);a.href=Gb(c)}
function Ob(a,b){a.src=Eb(b);if(null===sa)b:{var c=q.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&ra.test(c)){sa=c;break b}sa=""}c=sa;c&&a.setAttribute("nonce",c)}
;function Pb(a,b){this.x=r(a)?a:0;this.y=r(b)?b:0}
k=Pb.prototype;k.clone=function(){return new Pb(this.x,this.y)};
k.equals=function(a){return a instanceof Pb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
k.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
k.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
k.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Qb(a,b){this.width=a;this.height=b}
k=Qb.prototype;k.clone=function(){return new Qb(this.width,this.height)};
k.aspectRatio=function(){return this.width/this.height};
k.isEmpty=function(){return!(this.width*this.height)};
k.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
k.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
k.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Rb(a){var b=document;return t(a)?b.getElementById(a):a}
function Sb(a,b){Za(b,function(b,d){b&&"object"==typeof b&&b.J&&(b=b.I());"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Tb.hasOwnProperty(d)?a.setAttribute(Tb[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Tb={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function Ub(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Bb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Na(g.name),'"');if(g.type){f.push(' type="',Na(g.type),'"');var h={};hb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=e.createElement(f);g&&(t(g)?f.className=g:x(g)?f.className=g.join(" "):Sb(f,g));2<d.length&&Vb(e,f,d);return f}
function Vb(a,b,c){function d(c){c&&b.appendChild(t(c)?a.createTextNode(c):c)}
for(var e=2;e<c.length;e++){var f=c[e];if(!wa(f)||y(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(y(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if(xa(f)){g="function"==typeof f.item;break a}}g=!1}F(g?Ka(f):f,d)}}}
function Wb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Xb(a){Yb();var b=new Cb;b.b=a;return b}
var Yb=ta;function Zb(){var a=$b;try{var b;if(b=!!a&&null!=a.location.href)a:{try{ib(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}
function ac(a){var b=bc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function cc(){var a=[];ac(function(b){a.push(b)});
return a}
var bc={Ra:"allow-forms",Sa:"allow-modals",Ta:"allow-orientation-lock",Ua:"allow-pointer-lock",Va:"allow-popups",Wa:"allow-popups-to-escape-sandbox",Xa:"allow-presentation",Ya:"allow-same-origin",Za:"allow-scripts",ab:"allow-top-navigation",bb:"allow-top-navigation-by-user-activation"},dc=Ab(function(){return cc()});
function ec(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};F(dc(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;function fc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var gc=!!window.google_async_iframe_id,$b=gc&&window.parent||window;var hc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function I(a){return a.match(hc)}
function ic(a){return a?decodeURI(a):a}
function jc(a,b,c){if(x(b))for(var d=0;d<b.length;d++)jc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function kc(a){var b=[],c;for(c in a)jc(c,a[c],b);return b.join("&")}
function lc(a,b){var c=kc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
;var mc=null;function nc(){var a=q.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):A()}
function oc(){var a=void 0===a?q:a;return(a=a.performance)&&a.now?a.now():null}
;function pc(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0}
;var J=q.performance,qc=!!(J&&J.mark&&J.measure&&J.clearMarks),rc=Ab(function(){var a;if(a=qc){var b;if(null===mc){mc="";try{a="";try{a=q.top.location.hash}catch(c){a=q.location.hash}a&&(mc=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=mc;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function sc(){var a=tc;this.events=[];this.f=a||q;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=rc()||(null!=b?b:1>Math.random())}
sc.prototype.disable=function(){this.b=!1;this.events!=this.f.google_js_reporting_queue&&(rc()&&F(this.events,uc),this.events.length=0)};
function uc(a){a&&J&&rc()&&(J.clearMarks("goog_"+a.uniqueId+"_start"),J.clearMarks("goog_"+a.uniqueId+"_end"))}
sc.prototype.start=function(a,b){if(!this.b)return null;var c=oc()||nc();c=new pc(a,b,c);var d="goog_"+c.uniqueId+"_start";J&&rc()&&J.mark(d);return c};
sc.prototype.end=function(a){if(this.b&&"number"==typeof a.value){var b=oc()||nc();a.duration=b-a.value;b="goog_"+a.uniqueId+"_end";J&&rc()&&J.mark(b);this.b&&this.events.push(a)}};if(gc&&!Zb()){var vc="."+Da.domain;try{for(;2<vc.split(".").length&&!Zb();)Da.domain=vc=vc.substr(vc.indexOf(".")+1),$b=window.parent}catch(a){}Zb()||($b=window)}var tc=$b,wc=new sc;if("complete"==tc.document.readyState)tc.google_measure_js_timing||wc.disable();else if(wc.b){var xc=function(){tc.google_measure_js_timing||wc.disable()},yc=tc;
yc.addEventListener&&yc.addEventListener("load",xc,!1)};var zc=(new Date).getTime();function Ac(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Bc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;u=m=0}
function b(a){for(var b=g,c=0;64>c;c+=4)b[c/4]=a[c]<<24|a[c+1]<<16|a[c+2]<<8|a[c+3];for(c=16;80>c;c++)a=b[c-3]^b[c-8]^b[c-14]^b[c-16],b[c]=(a<<1|a>>>31)&4294967295;a=e[0];var d=e[1],f=e[2],h=e[3],l=e[4];for(c=0;80>c;c++){if(40>c)if(20>c){var m=h^d&(f^h);var u=1518500249}else m=d^f^h,u=1859775393;else 60>c?(m=d&f|h&(d|f),u=2400959708):(m=d^f^h,u=3395469782);m=((a<<5|a>>>27)&4294967295)+m+l+u+b[c]&4294967295;l=h;h=f;f=(d<<30|d>>>2)&4294967295;d=a;a=m}e[0]=e[0]+a&4294967295;e[1]=e[1]+d&4294967295;e[2]=
e[2]+f&4294967295;e[3]=e[3]+h&4294967295;e[4]=e[4]+l&4294967295}
function c(a,c){if("string"===typeof a){a=unescape(encodeURIComponent(a));for(var d=[],e=0,g=a.length;e<g;++e)d.push(a.charCodeAt(e));a=d}c||(c=a.length);d=0;if(0==m)for(;d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64;for(;d<c;)if(f[m++]=a[d++],u++,64==m)for(m=0,b(f);d+64<c;)b(a.slice(d,d+64)),d+=64,u+=64}
function d(){var a=[],d=8*u;56>m?c(h,56-m):c(h,64-(m-56));for(var g=63;56<=g;g--)f[g]=d&255,d>>>=8;b(f);for(g=d=0;5>g;g++)for(var l=24;0<=l;l-=8)a[d++]=e[g]>>l&255;return a}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var m,u;a();return{reset:a,update:c,digest:d,ra:function(){for(var a=d(),b="",c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}}}
;function Cc(a,b,c){var d=[],e=[];if(1==(x(c)?2:1))return e=[b,a],F(d,function(a){e.push(a)}),Dc(e.join(" "));
var f=[],g=[];F(c,function(a){g.push(a.key);f.push(a.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(a){e.push(a)});
a=Dc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Dc(a){var b=Bc();b.update(a);return b.ra().toLowerCase()}
;function Ec(a){var b=Ac(String(q.location.href)),c=q.__OVERRIDE_SID;null==c&&(c=(new yb(document)).get("SID"));if(c&&(b=(c=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?q.__SAPISID:q.__APISID,null==b&&(b=(new yb(document)).get(c?"SAPISID":"APISID")),b)){c=c?"SAPISIDHASH":"APISIDHASH";var d=String(q.location.href);return d&&b&&c?[c,Cc(Ac(d),b,a||null)].join(" "):null}return null}
;function Fc(a,b){this.g=a;this.h=b;this.f=0;this.b=null}
Fc.prototype.get=function(){if(0<this.f){this.f--;var a=this.b;this.b=a.next;a.next=null}else a=this.g();return a};
function Gc(a,b){a.h(b);100>a.f&&(a.f++,b.next=a.b,a.b=b)}
;function Hc(a){q.setTimeout(function(){throw a;},0)}
var Ic;
function Jc(){var a=q.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=z(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(r(c.next)){c=c.next;var a=c.ga;c.ga=null;a()}};
return function(a){d.next={ga:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){q.setTimeout(a,0)}}
;function Kc(){this.f=this.b=null}
var Mc=new Fc(function(){return new Lc},function(a){a.reset()});
Kc.prototype.add=function(a,b){var c=Mc.get();c.set(a,b);this.f?this.f.next=c:this.b=c;this.f=c};
Kc.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function Lc(){this.next=this.scope=this.b=null}
Lc.prototype.set=function(a,b){this.b=a;this.scope=b;this.next=null};
Lc.prototype.reset=function(){this.next=this.scope=this.b=null};function Nc(a,b){Oc||Pc();Qc||(Oc(),Qc=!0);Rc.add(a,b)}
var Oc;function Pc(){if(q.Promise&&q.Promise.resolve){var a=q.Promise.resolve(void 0);Oc=function(){a.then(Sc)}}else Oc=function(){var a=Sc;
!xa(q.setImmediate)||q.Window&&q.Window.prototype&&!G("Edge")&&q.Window.prototype.setImmediate==q.setImmediate?(Ic||(Ic=Jc()),Ic(a)):q.setImmediate(a)}}
var Qc=!1,Rc=new Kc;function Sc(){for(var a;a=Rc.remove();){try{a.b.call(a.scope)}catch(b){Hc(b)}Gc(Mc,a)}Qc=!1}
;function Tc(){this.f=-1}
;function Uc(){this.f=64;this.b=[];this.j=[];this.u=[];this.h=[];this.h[0]=128;for(var a=1;a<this.f;++a)this.h[a]=0;this.i=this.g=0;this.reset()}
C(Uc,Tc);Uc.prototype.reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.i=this.g=0};
function Vc(a,b,c){c||(c=0);var d=a.u;if(t(b))for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];var g=a.b[2],h=a.b[3],l=a.b[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var m=1518500249}else f=c^g^h,m=1859775393;else 60>e?(f=c&g|h&(c|g),m=2400959708):(f=c^g^h,m=
3395469782);f=(b<<5|b>>>27)+f+l+m+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+g&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295}
Uc.prototype.update=function(a,b){if(null!=a){r(b)||(b=a.length);for(var c=b-this.f,d=0,e=this.j,f=this.g;d<b;){if(0==f)for(;d<=c;)Vc(this,a,d),d+=this.f;if(t(a))for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.f){Vc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.f){Vc(this,e);f=0;break}}this.g=f;this.i+=b}};
Uc.prototype.digest=function(){var a=[],b=8*this.i;56>this.g?this.update(this.h,56-this.g):this.update(this.h,this.f-(this.g-56));for(var c=this.f-1;56<=c;c--)this.j[c]=b&255,b/=256;Vc(this,this.j);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.b[c]>>d&255,++b;return a};function K(){this.f=this.f;this.u=this.u}
K.prototype.f=!1;K.prototype.dispose=function(){this.f||(this.f=!0,this.l())};
function Wc(a,b){a.f?r(void 0)?b.call(void 0):b():(a.u||(a.u=[]),a.u.push(r(void 0)?z(b,void 0):b))}
K.prototype.l=function(){if(this.u)for(;this.u.length;)this.u.shift()()};
function Xc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Yc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];wa(d)?Yc.apply(null,d):Xc(d)}}
;function Zc(a){if(a.classList)return a.classList;a=a.className;return t(a)&&a.match(/\S+/g)||[]}
function $c(a,b){if(a.classList)var c=a.classList.contains(b);else c=Zc(a),c=0<=Ea(c,b);return c}
function ad(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):$c(a,"inverted-hdpi")&&(a.className=Fa(Zc(a),function(a){return"inverted-hdpi"!=a}).join(" "))}
;var bd="StopIteration"in q?q.StopIteration:{message:"StopIteration",stack:""};function cd(){}
cd.prototype.next=function(){throw bd;};
cd.prototype.F=function(){return this};
function dd(a){if(a instanceof cd)return a;if("function"==typeof a.F)return a.F(!1);if(wa(a)){var b=0,c=new cd;c.next=function(){for(;;){if(b>=a.length)throw bd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ed(a,b){if(wa(a))try{F(a,b,void 0)}catch(c){if(c!==bd)throw c;}else{a=dd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==bd)throw c;}}}
function fd(a){if(wa(a))return Ka(a);a=dd(a);var b=[];ed(a,function(a){b.push(a)});
return b}
;function gd(a,b){this.g={};this.b=[];this.h=this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof gd)for(c=hd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function hd(a){id(a);return a.b.concat()}
k=gd.prototype;k.equals=function(a,b){if(this===a)return!0;if(this.f!=a.f)return!1;var c=b||jd;id(this);for(var d,e=0;d=this.b[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function jd(a,b){return a===b}
k.isEmpty=function(){return 0==this.f};
k.clear=function(){this.g={};this.h=this.f=this.b.length=0};
k.remove=function(a){return Object.prototype.hasOwnProperty.call(this.g,a)?(delete this.g[a],this.f--,this.h++,this.b.length>2*this.f&&id(this),!0):!1};
function id(a){if(a.f!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.g,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.f!=a.b.length){var e={};for(c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
k.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.g,a)?this.g[a]:b};
k.set=function(a,b){Object.prototype.hasOwnProperty.call(this.g,a)||(this.f++,this.b.push(a),this.h++);this.g[a]=b};
k.forEach=function(a,b){for(var c=hd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
k.clone=function(){return new gd(this)};
k.F=function(a){id(this);var b=0,c=this.h,d=this,e=new cd;e.next=function(){if(c!=d.h)throw Error("The map has changed since the iterator was created");if(b>=d.b.length)throw bd;var e=d.b[b++];return a?e:d.g[e]};
return e};function kd(a){var b=[];ld(new md,a,b);return b.join("")}
function md(){}
function ld(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(x(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ld(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),nd(d,c),c.push(":"),ld(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":nd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var od={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pd=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function nd(a,b){b.push('"',a.replace(pd,function(a){var b=od[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),od[a]=b);return b}),'"')}
;function qd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function L(a){this.b=0;this.u=void 0;this.h=this.f=this.g=null;this.i=this.j=!1;if(a!=ta)try{var b=this;a.call(void 0,function(a){rd(b,2,a)},function(a){rd(b,3,a)})}catch(c){rd(this,3,c)}}
function sd(){this.next=this.context=this.onRejected=this.f=this.b=null;this.g=!1}
sd.prototype.reset=function(){this.context=this.onRejected=this.f=this.b=null;this.g=!1};
var td=new Fc(function(){return new sd},function(a){a.reset()});
function ud(a,b,c){var d=td.get();d.f=a;d.onRejected=b;d.context=c;return d}
function vd(a){return new L(function(b,c){c(a)})}
L.prototype.then=function(a,b,c){return wd(this,xa(a)?a:null,xa(b)?b:null,c)};
L.prototype.$goog_Thenable=!0;function xd(a,b){return wd(a,null,b,void 0)}
L.prototype.cancel=function(a){0==this.b&&Nc(function(){var b=new yd(a);zd(this,b)},this)};
function zd(a,b){if(0==a.b)if(a.g){var c=a.g;if(c.f){for(var d=0,e=null,f=null,g=c.f;g&&(g.g||(d++,g.b==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.b&&1==d?zd(c,b):(f?(d=f,d.next==c.h&&(c.h=d),d.next=d.next.next):Ad(c),Cd(c,e,3,b)))}a.g=null}else rd(a,3,b)}
function Dd(a,b){a.f||2!=a.b&&3!=a.b||Ed(a);a.h?a.h.next=b:a.f=b;a.h=b}
function wd(a,b,c,d){var e=ud(null,null,null);e.b=new L(function(a,g){e.f=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;
e.onRejected=c?function(b){try{var e=c.call(d,b);!r(e)&&b instanceof yd?g(b):a(e)}catch(m){g(m)}}:g});
e.b.g=a;Dd(a,e);return e.b}
L.prototype.w=function(a){this.b=0;rd(this,2,a)};
L.prototype.B=function(a){this.b=0;rd(this,3,a)};
function rd(a,b,c){if(0==a.b){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.b=1;a:{var d=c,e=a.w,f=a.B;if(d instanceof L){Dd(d,ud(e||ta,f||null,a));var g=!0}else if(qd(d))d.then(e,f,a),g=!0;else{if(y(d))try{var h=d.then;if(xa(h)){Fd(d,h,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}g||(a.u=c,a.b=b,a.g=null,Ed(a),3!=b||c instanceof yd||Gd(a,c))}}
function Fd(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}
function g(a){h||(h=!0,c.call(e,a))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Ed(a){a.j||(a.j=!0,Nc(a.m,a))}
function Ad(a){var b=null;a.f&&(b=a.f,a.f=b.next,b.next=null);a.f||(a.h=null);return b}
L.prototype.m=function(){for(var a;a=Ad(this);)Cd(this,a,this.b,this.u);this.j=!1};
function Cd(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.i;a=a.g)a.i=!1;if(b.b)b.b.g=null,Hd(b,c,d);else try{b.g?b.f.call(b.context):Hd(b,c,d)}catch(e){Id.call(null,e)}Gc(td,b)}
function Hd(a,b,c){2==b?a.f.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Gd(a,b){a.i=!0;Nc(function(){a.i&&Id.call(null,b)})}
var Id=Hc;function yd(a){E.call(this,a)}
C(yd,E);yd.prototype.name="cancel";function M(a){K.call(this);this.j=1;this.h=[];this.i=0;this.b=[];this.g={};this.m=!!a}
C(M,K);k=M.prototype;k.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.j;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.j=e+3;d.push(e);return e};
function Jd(a,b,c,d){if(b=a.g[b]){var e=a.b;(b=Ia(b,function(a){return e[a+1]==c&&e[a+2]==d}))&&a.L(b)}}
k.L=function(a){var b=this.b[a];if(b){var c=this.g[b];0!=this.i?(this.h.push(a),this.b[a+1]=ta):(c&&Ja(c,a),delete this.b[a],delete this.b[a+1],delete this.b[a+2])}return!!b};
k.K=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Kd(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.L(c)}}return 0!=e}return!1};
function Kd(a,b,c){Nc(function(){a.apply(b,c)})}
k.clear=function(a){if(a){var b=this.g[a];b&&(F(b,this.L,this),delete this.g[a])}else this.b.length=0,this.g={}};
k.l=function(){M.A.l.call(this);this.clear();this.h.length=0};function Ld(a){this.b=a}
Ld.prototype.set=function(a,b){r(b)?this.b.set(a,kd(b)):this.b.remove(a)};
Ld.prototype.get=function(a){try{var b=this.b.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ld.prototype.remove=function(a){this.b.remove(a)};function Md(a){this.b=a}
C(Md,Ld);function Nd(a){this.data=a}
function Od(a){return!r(a)||a instanceof Nd?a:new Nd(a)}
Md.prototype.set=function(a,b){Md.A.set.call(this,a,Od(b))};
Md.prototype.f=function(a){a=Md.A.get.call(this,a);if(!r(a)||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Md.prototype.get=function(a){if(a=this.f(a)){if(a=a.data,!r(a))throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Pd(a){this.b=a}
C(Pd,Md);Pd.prototype.set=function(a,b,c){if(b=Od(b)){if(c){if(c<A()){Pd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=A()}Pd.A.set.call(this,a,b)};
Pd.prototype.f=function(a){var b=Pd.A.f.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<A()||c&&c>A())Pd.prototype.remove.call(this,a);else return b}};function Qd(a){this.b=a}
C(Qd,Pd);function Rd(){}
;function Sd(){}
C(Sd,Rd);Sd.prototype.clear=function(){var a=fd(this.F(!0)),b=this;F(a,function(a){b.remove(a)})};function Td(a){this.b=a}
C(Td,Sd);k=Td.prototype;k.isAvailable=function(){if(!this.b)return!1;try{return this.b.setItem("__sak","1"),this.b.removeItem("__sak"),!0}catch(a){return!1}};
k.set=function(a,b){try{this.b.setItem(a,b)}catch(c){if(0==this.b.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
k.get=function(a){a=this.b.getItem(a);if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeItem(a)};
k.F=function(a){var b=0,c=this.b,d=new cd;d.next=function(){if(b>=c.length)throw bd;var d=c.key(b++);if(a)return d;d=c.getItem(d);if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){this.b.clear()};
k.key=function(a){return this.b.key(a)};function Ud(){var a=null;try{a=window.localStorage||null}catch(b){}this.b=a}
C(Ud,Td);function Vd(){var a=null;try{a=window.sessionStorage||null}catch(b){}this.b=a}
C(Vd,Td);function Wd(a,b){this.f=a;this.b=null;if(kb&&!(9<=Number(ub))){Xd||(Xd=new gd);this.b=Xd.get(a);this.b||(b?this.b=document.getElementById(b):(this.b=document.createElement("userdata"),this.b.addBehavior("#default#userData"),document.body.appendChild(this.b)),Xd.set(a,this.b));try{this.b.load(this.f)}catch(c){this.b=null}}}
C(Wd,Sd);var Yd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Xd=null;function Zd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(a){return Yd[a]})}
k=Wd.prototype;k.isAvailable=function(){return!!this.b};
k.set=function(a,b){this.b.setAttribute(Zd(a),b);$d(this)};
k.get=function(a){a=this.b.getAttribute(Zd(a));if(!t(a)&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
k.remove=function(a){this.b.removeAttribute(Zd(a));$d(this)};
k.F=function(a){var b=0,c=this.b.XMLDocument.documentElement.attributes,d=new cd;d.next=function(){if(b>=c.length)throw bd;var d=c[b++];if(a)return decodeURIComponent(d.nodeName.replace(/\./g,"%")).substr(1);d=d.nodeValue;if(!t(d))throw"Storage mechanism: Invalid value was encountered";return d};
return d};
k.clear=function(){for(var a=this.b.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);$d(this)};
function $d(a){try{a.b.save(a.f)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ae(a,b){this.f=a;this.b=b+"::"}
C(ae,Sd);ae.prototype.set=function(a,b){this.f.set(this.b+a,b)};
ae.prototype.get=function(a){return this.f.get(this.b+a)};
ae.prototype.remove=function(a){this.f.remove(this.b+a)};
ae.prototype.F=function(a){var b=this.f.F(!0),c=this,d=new cd;d.next=function(){for(var d=b.next();d.substr(0,c.b.length)!=c.b;)d=b.next();return a?d.substr(c.b.length):c.f.get(d)};
return d};function be(){this.f=[];this.b=-1}
be.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.f[a]!=b&&(this.f[a]=b,this.b=-1)};
be.prototype.get=function(a){return!!this.f[a]};
function ce(a){-1==a.b&&(a.b=Ha(a.f,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.b}
;function de(a,b){if(1<b.length)a[b[0]]=b[1];else{var c=b[0],d;for(d in c)a[d]=c[d]}}
var N=window.performance&&window.performance.timing&&window.performance.now?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};var ee=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",ee,void 0);function O(a){de(ee,arguments)}
function P(a,b){return a in ee?ee[a]:b}
function fe(a){return P(a,void 0)}
function ge(){return P("PLAYER_CONFIG",{})}
;function he(){var a=ie;w("yt.ads.biscotti.getId_")||v("yt.ads.biscotti.getId_",a,void 0)}
function je(a){v("yt.ads.biscotti.lastId_",a,void 0)}
;function ke(a){var b=le;a=void 0===a?w("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(me(b),ne(b));b.ca_type="image";a&&(b.bid=a);return b}
function me(a){var b={};b.dt=zc;b.flash="0";a:{try{var c=a.b.top.location.href}catch(f){a=2;break a}a=c?c===a.f.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?D:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!D.navigator&&"unknown"!==typeof D.navigator.javaEnabled&&!!D.navigator.javaEnabled&&D.navigator.javaEnabled();D.screen&&(b.u_h=D.screen.height,b.u_w=D.screen.width,b.u_ah=D.screen.availHeight,b.u_aw=D.screen.availWidth,b.u_cd=D.screen.colorDepth);
D.navigator&&D.navigator.plugins&&(b.u_nplug=D.navigator.plugins.length);D.navigator&&D.navigator.mimeTypes&&(b.u_nmime=D.navigator.mimeTypes.length);return b}
function ne(a){var b=a.b;try{var c=b.screenX;var d=b.screenY}catch(S){}try{var e=b.outerWidth;var f=b.outerHeight}catch(S){}try{var g=b.innerWidth;var h=b.innerHeight}catch(S){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.b.top;try{var l=(c||window).document,m="CSS1Compat"==l.compatMode?l.documentElement:l.body;var u=(new Qb(m.clientWidth,m.clientHeight)).round()}catch(S){u=new Qb(-12245933,-12245933)}l=u;u={};m=new be;q.SVGElement&&
q.document.createElementNS&&m.set(0);c=ec();c["allow-top-navigation-by-user-activation"]&&m.set(1);c["allow-popups-to-escape-sandbox"]&&m.set(2);q.crypto&&q.crypto.subtle&&m.set(3);m=ce(m);u.bc=m;u.bih=l.height;u.biw=l.width;u.brdim=b.join();a=a.f;return u.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,u.wgl=!!D.WebGLRenderingContext,u}
var le=new function(){var a=window.document;this.b=window;this.f=a};A();function oe(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Q(b)}}:a}
function Q(a,b,c,d,e){var f=w("yt.logging.errors.log");f?f(a,b,c,d,e):(f=P("ERRORS",[]),f.push([a,b,c,d,e]),O("ERRORS",f))}
function pe(a){Q(a,"WARNING",void 0,void 0,void 0)}
;function R(a){return P("EXPERIMENT_FLAGS",{})[a]}
;var qe=r(XMLHttpRequest)?function(){return new XMLHttpRequest}:r(ActiveXObject)?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function re(){if(!qe)return null;var a=qe();return"open"in a?a:null}
function se(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function T(a,b){xa(a)&&(a=oe(a));return window.setTimeout(a,b)}
function U(a){window.clearTimeout(a)}
;function te(a){var b=[];Za(a,function(a,d){var c=encodeURIComponent(String(d)),f;x(a)?f=a:f=[a];F(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function ue(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?x(b[f])?La(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function ve(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ue(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return lc(a,e)+d}
;var we={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},xe="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ye=!1;
function ze(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=I(a)[1]||null,e=ic(I(a)[3]||null);d&&e?(d=c,c=I(a),d=I(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?ic(I(c)[3]||null)==e&&(Number(I(c)[4]||null)||null)==(Number(I(a)[4]||null)||null):!0;d=!!R("web_ajax_ignore_global_headers_if_set");for(var f in we)e=P(we[f]),!e||!c&&!Ae(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ae(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();R("pass_biscotti_id_in_header_ajax")&&(c||
Ae(a,"X-YouTube-Ad-Signals"))&&(f=ke(void 0),b["X-YouTube-Ad-Signals"]=te(f));return b}
function Be(a){var b=ue(window.location.search),c={};F(xe,function(a){b[a]&&(c[a]=b[a])});
return ve(a,c||{},!1)}
function Ae(a,b){var c=P("CORS_HEADER_WHITELIST")||{},d=ic(I(a)[3]||null);return d?(c=c[d])?0<=Ea(c,b):!1:!0}
function Ce(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=De(a,b);var d=Ee(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(a){if(!e){e=!0;f&&U(f);var c=a.ok,d=function(d){d=d||{};var e=b.context||q;c?b.onSuccess&&b.onSuccess.call(e,d,a):b.onError&&b.onError.call(e,d,a);b.ea&&b.ea.call(e,d,a)};
"JSON"==(b.format||"JSON")&&(c||400<=a.status&&500>a.status)?a.json().then(d,function(){d(null)}):d(null)}});
b.ia&&0<b.timeout&&(f=T(function(){e||(e=!0,U(f),b.ia.call(b.context||q))},b.timeout))}else Fe(a,b)}
function Fe(a,b){var c=b.format||"JSON";a=De(a,b);var d=Ee(a,b),e=!1,f,g=Ge(a,function(a){if(!e){e=!0;f&&U(f);var d=se(a),g=null,h=400<=a.status&&500>a.status,S=500<=a.status&&600>a.status;if(d||h||S)g=He(c,a,b.hb);if(d)a:if(a&&204==a.status)d=!0;else{switch(c){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};h=b.context||q;d?b.onSuccess&&b.onSuccess.call(h,a,g):b.onError&&b.onError.call(h,a,g);b.ea&&b.ea.call(h,a,g)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.M&&0<b.timeout&&(f=T(function(){e||(e=!0,g.abort(),U(f),b.M.call(b.context||q,g))},b.timeout));
return g}
function De(a,b){b.wa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.Qa;d&&(d[c]&&delete d[c],a=ve(a,d||{},!0));return a}
function Ee(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=fe("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.ib||ic(I(a)[3]||null)&&!b.withCredentials&&ic(I(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&t(e)&&(e=ue(e),hb(e,f),e=b.ja&&"JSON"==b.ja?JSON.stringify(e):kc(e));f=e||f&&!cb(f);!ye&&f&&"POST"!=b.method&&(ye=!0,Q(Error("AJAX request with postData should use POST")));
return e}
function He(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ie(b):null)d={},F(b.getElementsByTagName("*"),function(a){d[a.tagName]=Je(a)})}c&&Ke(d);
return d}
function Ke(a){if(y(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Mb(a[b],null);a[c]=d}else Ke(a[b])}}
function Ie(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Je(a){var b="";F(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Le(a,b){b.method="POST";b.C||(b.C={});Fe(a,b)}
function Ge(a,b,c,d,e,f,g){function h(){4==(l&&"readyState"in l?l.readyState:0)&&b&&oe(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var l=re();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",h,!1):l.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Be(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ze(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");l.send(d);
return l}
;var Me={},Ne=0;
function Oe(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Wa,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),Hb.test(a)||(a="about:invalid#zClosurez"),a=Jb(a)),b=Gb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Kb?a=b:(d="object"==typeof b,a=null,d&&b.ba&&(a=b.Y()),b=Na(d&&b.J?b.I():String(b)),a=Mb(b,a)),a=encodeURIComponent(String(kd(a instanceof Kb&&a.constructor===Kb&&a.g===Lb?a.b:"type_error:SafeHtml")))),/^[\s\xa0]*$/.test(a)||(a=
Ub("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ge(a,b,"POST",e,d):P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ge(a,b,"GET","",d):Pe(a,b))}
function Pe(a,b){var c=new Image,d=""+Ne++;Me[d]=c;c.onload=c.onerror=function(){b&&Me[d]&&b();delete Me[d]};
c.src=a}
;var Qe={},Re=0;
function Se(a,b,c,d,e,f){f=f||{};f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);b=void 0===b?"ERROR":b;e=void 0===e?!1:e;b=void 0===b?"ERROR":b;e=window&&window.yterr||(void 0===e?!1:e)||!1;if(a&&e&&!(5<=Re)){e=a.stacktrace;c=a.columnNumber;a.hasOwnProperty("params")&&(f.params=JSON.stringify(a.params).substr(0,500));d=w("window.location.href");if(t(a))a={message:a,name:"Unknown error",lineNumber:"Not available",fileName:d,stack:"Not available"};else{var g=
!1;try{var h=a.lineNumber||a.line||"Not available"}catch(S){h="Not available",g=!0}try{var l=a.fileName||a.filename||a.sourceURL||q.$googDebugFname||d}catch(S){l="Not available",g=!0}a=!g&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:{message:a.message||"Not available",name:a.name||"UnknownError",lineNumber:h,fileName:l,stack:a.stack||"Not available"}}e=e||a.stack;h=a.lineNumber.toString();isNaN(h)||isNaN(c)||(h=h+":"+c);window.yterr&&xa(window.yterr)&&window.yterr(a);if(!(Qe[a.message]||
0<=e.indexOf("/YouTubeCenter.js")||0<=e.indexOf("/mytube.js"))){l=e;h={Qa:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,1E3),line:h,level:b,"client.name":f.name},C:{url:P("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};f.version&&(h["client.version"]=f.version);l&&(h.C.stack=l);for(var m in f)h.C["client."+m]=f[m];if(m=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var u in m)h.C[u]=m[u];Fe(P("ECATCHER_REPORT_HOST","")+"/error_204",h);Qe[a.message]=!0;Re++}}}
;var Te=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};v("yt.msgs_",Te,void 0);function Ue(a){de(Te,arguments)}
;function Ve(a){a&&(a.dataset?a.dataset[We("loaded")]="true":a.setAttribute("data-loaded","true"))}
function Xe(a,b){return a?a.dataset?a.dataset[We(b)]:a.getAttribute("data-"+b):null}
var Ye={};function We(a){return Ye[a]||(Ye[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;var Ze=w("ytPubsubPubsubInstance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.L;M.prototype.publish=M.prototype.K;M.prototype.clear=M.prototype.clear;v("ytPubsubPubsubInstance",Ze,void 0);var $e=w("ytPubsubPubsubSubscribedKeys")||{};v("ytPubsubPubsubSubscribedKeys",$e,void 0);var af=w("ytPubsubPubsubTopicToKeys")||{};v("ytPubsubPubsubTopicToKeys",af,void 0);var bf=w("ytPubsubPubsubIsSynchronous")||{};v("ytPubsubPubsubIsSynchronous",bf,void 0);
function cf(a,b){var c=df();if(c){var d=c.subscribe(a,function(){var c=arguments;var f=function(){$e[d]&&b.apply(window,c)};
try{bf[a]?f():T(f,0)}catch(g){Q(g)}},void 0);
$e[d]=!0;af[a]||(af[a]=[]);af[a].push(d);return d}return 0}
function ef(a){var b=df();b&&("number"==typeof a?a=[a]:t(a)&&(a=[parseInt(a,10)]),F(a,function(a){b.unsubscribeByKey(a);delete $e[a]}))}
function ff(a,b){var c=df();c&&c.publish.apply(c,arguments)}
function gf(a){var b=df();if(b)if(b.clear(a),a)hf(a);else for(var c in af)hf(c)}
function df(){return w("ytPubsubPubsubInstance")}
function hf(a){af[a]&&(a=af[a],F(a,function(a){$e[a]&&delete $e[a]}),a.length=0)}
;var jf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,kf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function lf(a,b,c){c=void 0===c?null:c;if(window.spf){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(jf,""),c=c.replace(kf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else mf(a,b,c)}
function mf(a,b,c){c=void 0===c?null:c;var d=nf(a),e=document.getElementById(d),f=e&&Xe(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=cf(d,b),b=""+(b[ya]||(b[ya]=++za)),of[b]=f),g||(e=pf(a,d,function(){Xe(e,"loaded")||(Ve(e),ff(d),T(Ca(gf,d),0))},c)))}
function pf(a,b,c,d){d=void 0===d?null:d;var e=document.createElement("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Ob(e,Xb(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function qf(a){a=nf(a);var b=document.getElementById(a);b&&(gf(a),b.parentNode.removeChild(b))}
function rf(a,b){if(a&&b){var c=""+(b[ya]||(b[ya]=++za));(c=of[c])&&ef(c)}}
function nf(a){var b=document.createElement("a");Nb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Va(a)}
var of={};function sf(){}
function tf(a,b){return uf(a,1,b)}
;function vf(){}
n(vf,sf);function uf(a,b,c){isNaN(c)&&(c=void 0);var d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):T(a,c||0)}
function wf(a){if(!isNaN(a)){var b=w("yt.scheduler.instance.cancelJob");b?b(a):U(a)}}
vf.prototype.start=function(){var a=w("yt.scheduler.instance.start");a&&a()};
vf.prototype.pause=function(){var a=w("yt.scheduler.instance.pause");a&&a()};
ua(vf);vf.getInstance();var xf=[],yf=!1;function zf(){if("1"!=$a(ge(),"args","privembed")){var a=function(){yf=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
lf("//static.doubleclick.net/instream/ad_status.js",a);xf.push(tf(function(){yf||"google_ad_status"in window||(rf("//static.doubleclick.net/instream/ad_status.js",a),O("DCLKSTAT",3))},5E3))}}
function Af(){return parseInt(P("DCLKSTAT",0),10)}
;function Bf(){this.f=!1;this.b=null}
Bf.prototype.initialize=function(a,b,c,d,e){b?(this.f=!0,lf(b,function(){this.f=!1;window.botguard?Cf(this,c,d):(qf(b),Q(Error("Unable to load Botguard from "+b),"WARNING"))}.bind(this),e)):a&&(eval(a),window.botguard?Cf(this,c,d):Q(Error("Unable to load Botguard from JS"),"WARNING"))};
function Cf(a,b,c){try{a.b=new window.botguard.bg(b)}catch(d){pe(d)}c&&c(b)}
Bf.prototype.invoke=function(a){a=void 0===a?{}:a;return this.b?this.b.invoke(void 0,void 0,a):null};
Bf.prototype.dispose=function(){this.b=null};var Df=new Bf,Ef=!1,Ff=0,Gf="";function Hf(a){R("botguard_periodic_refresh")?Ff=N():R("botguard_always_refresh")&&(Gf=a)}
function If(a){if(a){if(Df.f)return!1;if(R("botguard_periodic_refresh"))return 72E5<N()-Ff;if(R("botguard_always_refresh"))return Gf!=a}else return!1;return!Ef}
function Jf(){return null!==Df.b}
function Kf(a){a=void 0===a?{}:a;return Df.invoke(a)}
;var Lf=0;v("ytDomDomGetNextId",w("ytDomDomGetNextId")||function(){return++Lf},void 0);var Mf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Nf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;if(a=a||window.event){this.event=a;for(var b in a)b in Mf||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?
b=a.fromElement:"mouseout"==this.type&&(b=a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.b=a.pageX;this.f=a.pageY}}
function Of(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.b=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.f=a.clientY+b}}
Nf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Nf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Nf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var bb=w("ytEventsEventsListeners")||{};v("ytEventsEventsListeners",bb,void 0);var Pf=w("ytEventsEventsCounter")||{count:0};v("ytEventsEventsCounter",Pf,void 0);
function Qf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ab(function(e){var f="boolean"==typeof e[4]&&e[4]==!!d,g=y(e[4])&&y(d)&&eb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Rf=Ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Qf(a,b,c,d);if(e)return e;e=++Pf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(d){d=new Nf(d);if(!Wb(d.relatedTarget,function(b){return b==a}))return d.currentTarget=a,d.type=b,c.call(a,d)}:function(b){b=new Nf(b);
b.currentTarget=a;return c.call(a,b)};
g=oe(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Rf()||"boolean"==typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);bb[e]=[a,b,c,g,d];return e}
function Sf(a){a&&("string"==typeof a&&(a=[a]),F(a,function(a){if(a in bb){var b=bb[a],d=b[0],e=b[1],f=b[3];b=b[4];d.removeEventListener?Rf()||"boolean"==typeof b?d.removeEventListener(e,f,b):d.removeEventListener(e,f,!!b.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete bb[a]}}))}
;function Tf(a){this.w=a;this.b=null;this.i=0;this.m=null;this.j=0;this.g=[];for(a=0;4>a;a++)this.g.push(0);this.h=0;this.D=V(window,"mousemove",z(this.G,this));a=z(this.B,this);xa(a)&&(a=oe(a));this.H=window.setInterval(a,25)}
C(Tf,K);Tf.prototype.G=function(a){r(a.b)||Of(a);var b=a.b;r(a.f)||Of(a);this.b=new Pb(b,a.f)};
Tf.prototype.B=function(){if(this.b){var a=N();if(0!=this.i){var b=this.m,c=this.b,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.i);this.g[this.h]=.5<Math.abs((d-this.j)/this.j)?1:0;for(c=b=0;4>c;c++)b+=this.g[c]||0;3<=b&&this.w();this.j=d}this.i=a;this.m=this.b;this.h=(this.h+1)%4}};
Tf.prototype.l=function(){window.clearInterval(this.H);Sf(this.D)};var Uf={};function Vf(a){var b=void 0===a?{}:a;a=void 0===b.b?!0:b.b;b=void 0===b.f?!1:b.f;if(null==w("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?A()-Math.max(c,0):-1;v("_lact",c,window);v("_fact",c,window);-1==c&&Wf();V(document,"keydown",Wf);V(document,"keyup",Wf);V(document,"mousedown",Wf);V(document,"mouseup",Wf);a&&(b?V(window,"touchmove",function(){Xf("touchmove",200)},{passive:!0}):(V(window,"resize",function(){Xf("resize",200)}),V(window,"scroll",function(){Xf("scroll",200)})));
new Tf(function(){Xf("mouse",100)});
V(document,"touchstart",Wf,{passive:!0});V(document,"touchend",Wf,{passive:!0})}}
function Xf(a,b){Uf[a]||(Uf[a]=!0,tf(function(){Wf();Uf[a]=!1},b))}
function Wf(){null==w("_lact",window)&&Vf();var a=A();v("_lact",a,window);-1==w("_fact",window)&&v("_fact",a,window);(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function Yf(){var a=w("_lact",window);return null==a?-1:Math.max(A()-a,0)}
;var Zf=Math.pow(2,16)-1,$f=null,ag=0,bg={log_event:"events",log_interaction:"interactions"},cg=Object.create(null);cg.log_event="GENERIC_EVENT_LOGGING";cg.log_interaction="INTERACTION_LOGGING";var dg=new Set(["log_event"]),eg={},fg=0,gg=0,W=w("ytLoggingTransportLogPayloadsQueue_")||{};v("ytLoggingTransportLogPayloadsQueue_",W,void 0);var hg=w("ytLoggingTransportTokensToCttTargetIds_")||{};v("ytLoggingTransportTokensToCttTargetIds_",hg,void 0);var ig=w("ytLoggingTransportDispatchedStats_")||{};
v("ytLoggingTransportDispatchedStats_",ig,void 0);v("ytytLoggingTransportCapturedTime_",w("ytLoggingTransportCapturedTime_")||{},void 0);function jg(){U(fg);U(gg);gg=0;if(!cb(W)){for(var a in W){var b=eg[a];b&&(kg(a,b),delete W[a])}cb(W)||lg()}}
function lg(){R("web_gel_timeout_cap")&&!gg&&(gg=T(jg,3E4));U(fg);fg=T(jg,P("LOGGING_BATCH_TIMEOUT",1E4))}
function mg(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function kg(a,b){var c=bg[a],d=ig[a]||{};ig[a]=d;var e=Math.round(N());for(m in W[a]){var f=b.b;f={client:{hl:f.za,gl:f.ya,clientName:f.xa,clientVersion:f.innertubeContextClientVersion}};var g=window.devicePixelRatio;g&&1!=g&&(f.client.screenDensityFloat=String(g));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(f.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});f={context:f};f[c]=mg(a,m);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=hg[m])a:{var h=
m;if(g.videoId)var l="VIDEO";else if(g.playlistId)l="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||{};f.context.user.credentialTransferTokens=[{token:h,scope:l}]}delete hg[m];f.requestTimeMs=e;if(g=fe("EVENT_ID"))l=(P("BATCH_CLIENT_COUNTER",void 0)||0)+1,l>Zf&&(l=1),O("BATCH_CLIENT_COUNTER",l),g={serializedEventId:g,clientCounter:l},f.serializedClientEventId=g,$f&&ag&&R("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:$f,
roundtripMs:ag}),$f=g,ag=0;ng(b,a,f,{retry:dg.has(a),onSuccess:og.bind(this,N())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var m=d.diffCount||0;d.averageTimeBetweenDispatchesMs=m?(d.averageTimeBetweenDispatchesMs*m+c)/(m+1):c;d.diffCount=m+1}d.previousDispatchMs=e}
function og(a){ag=Math.round(N()-a)}
;function pg(a,b,c,d,e){var f={};f.eventTimeMs=Math.round(d||N());f[a]=b;f.context={lastActivityMs:String(d?-1:Yf())};e?(a={},e.videoId?a.videoId=e.videoId:e.playlistId&&(a.playlistId=e.playlistId),hg[e.token]=a,e=mg("log_event",e.token)):e=mg("log_event");e.push(f);c&&(eg.log_event=new c);e.length>=(Number(R("web_logging_max_batch")||0)||20)?jg():lg()}
;function qg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.eb||P("AUTHORIZATION"))||(a?b="Bearer "+w("gapi.auth.getToken")().cb:b=Ec([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function rg(a){a=Object.assign({},a);delete a.Authorization;var b=Ec();if(b){var c=new Uc;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();if(!wb)for(wb={},xb={},c=0;65>c;c++)wb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c),xb[c]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(c);c=xb;for(var d=[],e=0;e<b.length;e+=3){var f=b[e],g=e+1<b.length,h=g?b[e+1]:0,l=e+2<b.length,m=l?b[e+2]:0,u=f>>2;f=(f&3)<<4|h>>4;h=(h&15)<<2|m>>
6;m&=63;l||(m=64,g||(h=64));d.push(c[u],c[f],c[h],c[m])}a.hash=d.join("")}return a}
;function sg(a,b,c,d){zb.set(""+a,b,c,"/",void 0===d?"youtube.com":d,!1)}
;function tg(){var a=new Ud;(a=a.isAvailable()?new ae(a,"yt.innertube"):null)||(a=new Wd("yt.innertube"),a=a.isAvailable()?a:null);this.b=a?new Pd(a):null;this.f=document.domain||window.location.hostname}
tg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.b)try{this.b.set(a,b,A()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(kd(b))}catch(f){return}else e=escape(b);sg(a,e,c,this.f)};
tg.prototype.get=function(a,b){var c=void 0,d=!this.b;if(!d)try{c=this.b.get(a)}catch(e){d=!0}if(d&&(c=zb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
tg.prototype.remove=function(a){this.b&&this.b.remove(a);var b=this.f;zb.remove(""+a,"/",void 0===b?"youtube.com":b)};var ug=new tg;function vg(a,b,c,d){if(d)return null;d=ug.get("nextId",!0)||1;var e=ug.get("requests",!0)||{};e[d]={method:a,request:b,authState:rg(c),requestTime:Math.round(N())};ug.set("nextId",d+1,86400,!0);ug.set("requests",e,86400,!0);return d}
function wg(a){var b=ug.get("requests",!0)||{};delete b[a];ug.set("requests",b,86400,!0)}
function xg(a){var b=ug.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(N())-d.requestTime)){var e=d.authState,f=rg(qg(!1));eb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(N())),ng(a,d.method,e,{}));delete b[c]}}ug.set("requests",b,86400,!0)}}
;function yg(a){var b=this;this.b=a||{innertubeApiKey:fe("INNERTUBE_API_KEY"),innertubeApiVersion:fe("INNERTUBE_API_VERSION"),xa:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:fe("INNERTUBE_CONTEXT_CLIENT_VERSION"),za:fe("INNERTUBE_CONTEXT_HL"),ya:fe("INNERTUBE_CONTEXT_GL"),Aa:fe("INNERTUBE_HOST_OVERRIDE")||"",Ba:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)};uf(function(){xg(b)},0,5E3)}
function ng(a,b,c,d){!P("VISITOR_DATA")&&.01>Math.random()&&Q(Error("Missing VISITOR_DATA when sending innertube request."),"WARNING");var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ja:"JSON",M:function(){d.M()},
ia:d.M,onSuccess:function(a,b){if(d.onSuccess)d.onSuccess(b)},
ha:function(a){if(d.onSuccess)d.onSuccess(a)},
onError:function(a,b){if(d.onError)d.onError(b)},
jb:function(a){if(d.onError)d.onError(a)},
timeout:d.timeout,withCredentials:!0},f="",g=a.b.Aa;g&&(f=g);g=a.b.Ba||!1;var h=qg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var l=""+f+("/youtubei/"+a.b.innertubeApiVersion+"/"+b)+"?alt=json&key="+a.b.innertubeApiKey,m;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(m=vg(b,c,h,g))){var u=e.onSuccess,S=e.ha;e.onSuccess=function(a,b){wg(m);u(a,b)};
c.ha=function(a,b){wg(m);S(a,b)}}try{R("use_fetch_for_op_xhr")?Ce(l,e):Le(l,e)}catch(Bd){if("InvalidAccessError"==Bd)m&&(wg(m),m=0),Q(Error("An extension is blocking network request."),"WARNING");
else throw Bd;}m&&uf(function(){xg(a)},0,5E3)}
;var zg=A().toString();
function Ag(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=A();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(zg)for(a=1,b=0;b<zg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^zg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Bg=w("ytLoggingTimeDocumentNonce_")||Ag();v("ytLoggingTimeDocumentNonce_",Bg,void 0);function Cg(a){this.b=a}
function Dg(a){var b={};void 0!==a.b.trackingParams?b.trackingParams=a.b.trackingParams:(b.veType=a.b.veType,null!=a.b.veCounter&&(b.veCounter=a.b.veCounter),null!=a.b.elementIndex&&(b.elementIndex=a.b.elementIndex));void 0!==a.b.dataElement&&(b.dataElement=Dg(a.b.dataElement));void 0!==a.b.youtubeData&&(b.youtubeData=a.b.youtubeData);return b}
var Eg=1;function Fg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Gg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Hg(a){return P(Gg(void 0===a?0:a),void 0)}
v("yt.logging.screen.getRootVeType",Hg,void 0);function Ig(){var a=Hg(0),b;a?b=new Cg({veType:a,youtubeData:void 0}):b=null;return b}
function Jg(a){a=void 0===a?0:a;var b=P(Fg(a));b||0!=a||(b=P("EVENT_ID"));return b?b:null}
v("yt.logging.screen.getCurrentCsn",Jg,void 0);function Kg(a,b,c){c=void 0===c?0:c;if(a!==P(Fg(c))||b!==P(Gg(c)))O(Fg(c),a),O(Gg(c),b),0==c&&(b=function(){setTimeout(function(){a&&pg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Bg,clientScreenNonce:a},yg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
v("yt.logging.screen.setCurrentScreen",Kg,void 0);function Lg(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),f=ic(I(window.location.href)[3]||null);f&&e.push(f);f=ic(I(d)[3]||null);if(0<=Ea(e,f)||!f&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(e=document.createElement("a"),Nb(e,d),d=e.href),d){f=I(d);d=f[5];e=f[6];f=f[7];var g="";d&&(g+=d);e&&(g+="?"+e);f&&(g+="#"+f);d=g;e=d.indexOf("#");if(d=0>e?d:d.substr(0,e)){if(b.itct||b.ved)b.csn=b.csn||
Jg();if(h){var h=parseInt(h,10);isFinite(h)&&0<h&&(d="ST-"+Va(d).toString(36),b=b?kc(b):"",sg(d,b,h||5))}else h="ST-"+Va(d).toString(36),b=b?kc(b):"",sg(h,b,5)}}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var m=void 0===m?"":m;var u=void 0===u?window:u;c=u.location;a=lc(a,l)+m;a=a instanceof H?a:Ib(a);c.href=Gb(a)}return!0}
;function Mg(a,b,c){a={csn:a,parentVe:Dg(b),childVes:Ga(c,function(a){return Dg(a)})};
pg("visualElementAttached",a,yg)}
;function Ng(a){a=a||{};this.url=a.url||"";this.args=a.args||fb(Og);this.assets=a.assets||{};this.attrs=a.attrs||fb(Pg);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
var Og={enablejsapi:1},Pg={};Ng.prototype.clone=function(){var a=new Ng,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];a[b]="object"==va(c)?fb(c):c}return a};function Qg(){K.call(this);this.b=[]}
n(Qg,K);Qg.prototype.l=function(){for(;this.b.length;){var a=this.b.pop();a.target.removeEventListener(a.name,a.gb)}K.prototype.l.call(this)};var Rg=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Sg(a){a=a||"";if(window.spf){var b=a.match(Rg);spf.style.load(a,b?b[1]:"",void 0)}else Tg(a)}
function Tg(a){var b=Ug(a),c=document.getElementById(b),d=c&&Xe(c,"loaded");d||c&&!d||(c=Vg(a,b,function(){Xe(c,"loaded")||(Ve(c),ff(b),T(Ca(gf,b),0))}))}
function Vg(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Xb(a);d.rel="stylesheet";d.href=Eb(a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Ug(a){var b=document.createElement("A");a=Jb(a);Nb(b,a);b=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Va(b)}
;function Wg(a,b){K.call(this);this.j=this.T=a;this.D=b;this.m=!1;this.api={};this.P=this.B=null;this.G=new M;Wc(this,Ca(Xc,this.G));this.h={};this.N=this.R=this.g=this.X=this.b=null;this.H=!1;this.i=this.w=null;this.U={};this.na=["onReady"];this.W=null;this.fa=NaN;this.O={};Xg(this);this.V("WATCH_LATER_VIDEO_ADDED",this.Da.bind(this));this.V("WATCH_LATER_VIDEO_REMOVED",this.Ea.bind(this));this.V("onAdAnnounce",this.qa.bind(this));this.oa=new Qg(this);Wc(this,Ca(Xc,this.oa))}
n(Wg,K);k=Wg.prototype;
k.da=function(a){if(!this.f){a instanceof Ng||(a=new Ng(a));this.X=a;this.b=a.clone();this.g=this.b.attrs.id||this.g;"video-player"==this.g&&(this.g=this.D,this.b.attrs.id=this.D);this.j.id==this.g&&(this.g+="-player",this.b.attrs.id=this.g);this.b.args.enablejsapi="1";this.b.args.playerapiid=this.D;this.R||(this.R=Yg(this,this.b.args.jsapicallback||"onYouTubePlayerReady"));this.b.args.jsapicallback=null;if(a=this.b.attrs.width)this.j.style.width=fc(Number(a)||a);if(a=this.b.attrs.height)this.j.style.height=fc(Number(a)||
a);Zg(this);this.m&&$g(this)}};
k.ta=function(){return this.X};
function $g(a){a.b.loaded||(a.b.loaded=!0,"0"!=a.b.args.autoplay?a.api.loadVideoByPlayerVars(a.b.args):a.api.cueVideoByPlayerVars(a.b.args))}
function ah(a){var b=!0,c=bh(a);c&&a.b&&(a=a.b,b=Xe(c,"version")==a.assets.js);return b&&!!w("yt.player.Application.create")}
function Zg(a){if(!a.f&&!a.H){var b=ah(a);if(b&&"html5"==(bh(a)?"html5":null))a.N="html5",a.m||ch(a);else if(dh(a),a.N="html5",b&&a.i)a.T.appendChild(a.i),ch(a);else{a.b.loaded=!0;var c=!1;a.w=function(){c=!0;var b=a.b.clone();w("yt.player.Application.create")(a.T,b);ch(a)};
a.H=!0;b?a.w():(lf(a.b.assets.js,a.w),Sg(a.b.assets.css),eh(a)&&!c&&v("yt.player.Application.create",null,void 0))}}}
function bh(a){var b=Rb(a.g);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.g));return b}
function ch(a){if(!a.f){var b=bh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.H=!1,b.isNotServable&&b.isNotServable(a.b.args.video_id)||fh(a)):a.fa=T(function(){ch(a)},50)}}
function fh(a){Xg(a);a.m=!0;var b=bh(a);b.addEventListener&&(a.B=gh(a,b,"addEventListener"));b.removeEventListener&&(a.P=gh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=gh(a,b,e))}for(var f in a.h)a.B(f,a.h[f]);$g(a);a.R&&a.R(a.api);a.G.K("onReady",a.api)}
function gh(a,b,c){var d=b[c];return function(){try{return a.W=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.message+=" ("+c+")",a.W=e,pe(e))}}}
function Xg(a){a.m=!1;if(a.P)for(var b in a.h)a.P(b,a.h[b]);for(var c in a.O)U(parseInt(c,10));a.O={};a.B=null;a.P=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.V.bind(a);a.api.removeEventListener=a.Ha.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.ua.bind(a);a.api.getPlayerType=a.va.bind(a);a.api.getCurrentVideoConfig=a.ta.bind(a);a.api.loadNewVideoConfig=a.da.bind(a);a.api.isReady=a.Ca.bind(a)}
k.Ca=function(){return this.m};
k.V=function(a,b){var c=this,d=Yg(this,b);if(d){if(!(0<=Ea(this.na,a)||this.h[a])){var e=hh(this,a);this.B&&this.B(a,e)}this.G.subscribe(a,d);"onReady"==a&&this.m&&T(function(){d(c.api)},0)}};
k.Ha=function(a,b){if(!this.f){var c=Yg(this,b);c&&Jd(this.G,a,c)}};
function Yg(a,b){var c=b;if("string"==typeof b){if(a.U[b])return a.U[b];c=function(){var a=w(b);a&&a.apply(q,arguments)};
a.U[b]=c}return c?c:null}
function hh(a,b){var c="ytPlayer"+b+a.D;a.h[b]=c;q[c]=function(c){var d=T(function(){if(!a.f){a.G.K(b,c);var e=a.O,g=String(d);g in e&&delete e[g]}},0);
db(a.O,String(d))};
return c}
k.qa=function(a){ff("a11y-announce",a)};
k.Da=function(a){ff("WATCH_LATER_VIDEO_ADDED",a)};
k.Ea=function(a){ff("WATCH_LATER_VIDEO_REMOVED",a)};
k.va=function(){return this.N||(bh(this)?"html5":null)};
k.ua=function(){return this.W};
function dh(a){a.cancel();Xg(a);a.N=null;a.b&&(a.b.loaded=!1);var b=bh(a);b&&(ah(a)||!eh(a)?a.i=b:(b&&b.destroy&&b.destroy(),a.i=null));for(a=a.T;b=a.firstChild;)a.removeChild(b)}
k.cancel=function(){this.w&&rf(this.b.assets.js,this.w);U(this.fa);this.H=!1};
k.l=function(){dh(this);if(this.i&&this.b&&this.i.destroy)try{this.i.destroy()}catch(b){Q(b)}this.U=null;for(var a in this.h)q[this.h[a]]=null;this.X=this.b=this.api=null;delete this.T;delete this.j;K.prototype.l.call(this)};
function eh(a){return a.b&&a.b.args&&a.b.args.fflags?-1!=a.b.args.fflags.indexOf("player_destroy_old_version=true"):!1}
;var ih={},jh="player_uid_"+(1E9*Math.random()>>>0);function kh(a){var b="player";b=t(b)?Rb(b):b;var c=jh+"_"+(b[ya]||(b[ya]=++za)),d=ih[c];if(d)return d.da(a),d.api;d=new Wg(b,c);ih[c]=d;ff("player-added",d.api);Wc(d,Ca(lh,d));T(function(){d.da(a)},0);
return d.api}
function lh(a){delete ih[a.D]}
;function mh(){var a=nh(),b=oh();if(!a&&!b||!window.JSON)return null;try{var c=a.get("yt-player-two-stage-token")}catch(d){}if(!t(c))try{c=b.get("yt-player-two-stage-token")}catch(d){}if(!t(c))return null;try{c=JSON.parse(c,void 0)}catch(d){}return c}
var oh=Ab(function(){var a=new Ud;return a.isAvailable()?new Qd(a):null}),nh=Ab(function(){var a=new Vd;
return a.isAvailable()?new Qd(a):null});function ph(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function qh(a,b,c){t(a)&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return rh(a)}
function rh(a,b,c){if(y(a)){b="endSeconds startSeconds mediaContentUrl suggestedQuality videoId two_stage_token".split(" ");c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function sh(a,b,c,d){if(y(a)&&!x(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};t(a)&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
function th(a){var b=a.video_id||a.videoId;if(t(b)){var c=mh()||{},d=mh()||{};r(void 0)?d[b]=void 0:delete d[b];var e=A()+3E5,f=oh();if(f&&window.JSON){t(d)||(d=JSON.stringify(d,void 0));try{f.set("yt-player-two-stage-token",d,e)}catch(g){f.remove("yt-player-two-stage-token")}}(b=c[b])&&(a.two_stage_token=b)}}
;function uh(a,b,c){var d=yg;P("ytLoggingEventsDefaultDisabled",!1)&&yg==yg&&(d=null);pg(a,b,d,c,void 0)}
;var vh=w("ytLoggingLatencyUsageStats_")||{};v("ytLoggingLatencyUsageStats_",vh,void 0);var wh=0;function xh(a){vh[a]=vh[a]||{count:0};var b=vh[a];b.count++;b.time=N();wh||(wh=uf(yh,0,5E3));return 10<b.count?(11==b.count&&Se(Error("CSI data exceeded logging limit with key: "+a),0==a.indexOf("info")?"WARNING":"ERROR"),!0):!1}
function yh(){var a=N(),b;for(b in vh)6E4<a-vh[b].time&&delete vh[b];wh=0}
;function zh(a,b){this.version=a;this.args=b}
;function Ah(a){this.topic=a}
Ah.prototype.toString=function(){return this.topic};var Bh=w("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.L;M.prototype.publish=M.prototype.K;M.prototype.clear=M.prototype.clear;v("ytPubsub2Pubsub2Instance",Bh,void 0);v("ytPubsub2Pubsub2SubscribedKeys",w("ytPubsub2Pubsub2SubscribedKeys")||{},void 0);v("ytPubsub2Pubsub2TopicToKeys",w("ytPubsub2Pubsub2TopicToKeys")||{},void 0);v("ytPubsub2Pubsub2IsAsync",w("ytPubsub2Pubsub2IsAsync")||{},void 0);
v("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Ch(a,b){var c=w("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var X=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance||{};function Dh(){var a=P("TIMING_TICK_EXPIRATION");a||(a={},O("TIMING_TICK_EXPIRATION",a));return a}
function Eh(){var a=Dh(),b;for(b in a)wf(a[b]);O("TIMING_TICK_EXPIRATION",{})}
;function Fh(a,b){zh.call(this,1,arguments)}
n(Fh,zh);function Gh(a,b){zh.call(this,1,arguments)}
n(Gh,zh);var Hh=new Ah("aft-recorded"),Ih=new Ah("timing-sent");var Jh={vc:!0},Y={},Kh=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.csn="clientScreenNonce",Y.docid="videoId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id=
"kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.paused="playerInfo.isPausedOnLoad",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_ad_pr="prerollAllowed",Y.yt_red="isRedSubscriber",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",
Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y),Lh="ap c cver cbrand cmodel ei srt yt_fss yt_li plid vpil vpni vpst yt_eil vpni2 vpil2 icrc icrt pa GetBrowse_rid GetPlayer_rid GetSearch_rid GetWatchNext_rid cmt d_vpct d_vpnfi d_vpni pc pfa pfeh pftr prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis yt_ref yt_sts".split(" "),
Mh="isContinuation isNavigation kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist".split(" "),Nh={},Oh=(Nh.yt_vst="VIDEO_STREAM_TYPE_",Nh),Ph=!1;
function Qh(){var a=Rh().info.yt_lt="hot_bg";Sh().info_yt_lt=a;if(Th())if("yt_lt"in Kh){var b=Kh.yt_lt;0<=Ea(Mh,b)&&(a=!!a);"yt_lt"in Oh&&(a=Oh.yt_lt+a.toUpperCase());var c=a;if(Th()){a={};b=b.split(".");for(var d=a,e=0;e<b.length-1;e++)d[b[e]]=d[b[e]]||{},d=d[b[e]];d[b[b.length-1]]=c;c=Uh();b=Object.keys(a).join("");xh("info_"+b+"_"+c)||(a.clientActionNonce=c,uh("latencyActionInfo",a))}}else 0<=Ea(Lh,"yt_lt")||Q(Error("Unknown label yt_lt logged with GEL CSI."))}
function Vh(){var a=Wh();if(a.aft)return a.aft;for(var b=P("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
z(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||ta,X);function Uh(){var a=Rh().nonce;a||(a=Ag(),Rh().nonce=a);return a}
function Wh(){return Rh().tick}
function Sh(){var a=Rh();"gel"in a||(a.gel={});return a.gel}
function Rh(){var a;(a=w("ytcsi.data_"))||(a={tick:{},info:{}},B("ytcsi.data_",a));return a}
function Xh(){var a=Wh(),b=a.pbr,c=a.vc;a=a.pbs;return b&&c&&a&&b<c&&c<a&&1==Rh().info.yt_pvis}
function Th(){return!!R("csi_on_gel")||!!Rh().useGel}
function Yh(){Eh();if(!Th()){var a=Wh(),b=Rh().info,c=a._start;for(f in a)if(0==f.lastIndexOf("_",0)&&x(a[f])){var d=f.slice(1);if(d in Jh){var e=Ga(a[f],function(a){return Math.round(a-c)});
b["all_"+d]=e.join()}delete a[f]}e=P("CSI_SERVICE_NAME","youtube");var f={v:2,s:e,action:P("TIMING_ACTION",void 0)};d=Qh.srt;void 0!==a.srt&&delete b.srt;if(b.h5jse){var g=window.location.protocol+w("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?b.h5jse=Math.round(b.h5jse-g.responseEnd):delete b.h5jse}a.aft=Vh();Xh()&&"youtube"==e&&(Qh(),e=a.vc,g=a.pbs,delete a.aft,b.aft=Math.round(g-e));for(var h in b)"_"!=h.charAt(0)&&(f[h]=b[h]);a.ps=N();h={};e=[];for(var l in a)"_"!=
l.charAt(0)&&(g=Math.round(a[l]-c),h[l]=g,e.push(l+"."+g));f.rt=e.join(",");(a=w("ytdebug.logTiming"))&&a(f,h);Zh(f,!!b.ap);Ch(Ih,new Gh(h.aft+(d||0),void 0))}}
function Zh(a,b){if(R("debug_csi_data")){var c=w("yt.timing.csiData");c||(c=[],v("yt.timing.csiData",c,void 0));c.push({page:location.href,time:new Date,args:a})}c="";for(var d in a)c+="&"+d+"="+a[d];d="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var e=void 0===e?"":e;try{window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(d,e)||Oe(d,void 0,void 0,void 0,e)}catch(f){Oe(d,void 0,void 0,void 0,e)}}else Oe(d);B("yt.timing.pingSent_",!0)}
;function $h(a){K.call(this);this.b=a;this.b.subscribe("command",this.ka,this);this.g={};this.i=!1}
C($h,K);k=$h.prototype;k.start=function(){this.i||this.f||(this.i=!0,ai(this.b,"RECEIVING"))};
k.ka=function(a,b,c){if(this.i&&!this.f){var d=b||{};switch(a){case "addEventListener":t(d.event)&&(a=d.event,a in this.g||(c=z(this.Ja,this,a),this.g[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":t(d.event)&&bi(this,d.event);break;default:this.h.isReady()&&this.h[a]&&(b=ci(a,b||{}),c=this.h.handleExternalCall(a,b,c||null),(c=di(a,c))&&this.i&&!this.f&&ai(this.b,a,c))}}};
k.Ja=function(a,b){this.i&&!this.f&&ai(this.b,a,this.Z(a,b))};
k.Z=function(a,b){if(null!=b)return{value:b}};
function bi(a,b){b in a.g&&(a.removeEventListener(b,a.g[b]),delete a.g[b])}
k.l=function(){var a=this.b;a.f||Jd(a.b,"command",this.ka,this);this.b=null;for(var b in this.g)bi(this,b);$h.A.l.call(this)};function ei(a,b){$h.call(this,b);this.h=a;this.start()}
C(ei,$h);ei.prototype.addEventListener=function(a,b){this.h.addEventListener(a,b)};
ei.prototype.removeEventListener=function(a,b){this.h.removeEventListener(a,b)};
function ci(a,b){switch(a){case "loadVideoById":return b=rh(b),th(b),[b];case "cueVideoById":return b=rh(b),th(b),[b];case "loadVideoByPlayerVars":return th(b),[b];case "cueVideoByPlayerVars":return th(b),[b];case "loadPlaylist":return b=sh(b),th(b),[b];case "cuePlaylist":return b=sh(b),th(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];
case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey]}return[]}
function di(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
ei.prototype.Z=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return ei.A.Z.call(this,a,b)};
ei.prototype.l=function(){ei.A.l.call(this);delete this.h};function fi(a,b,c,d){K.call(this);this.g=b||null;this.w="*";this.h=c||null;this.sessionId=null;this.channel=d||null;this.D=!!a;this.m=z(this.B,this);window.addEventListener("message",this.m)}
n(fi,K);fi.prototype.B=function(a){if(!("*"!=this.h&&a.origin!=this.h||this.g&&a.source!=this.g)&&t(a.data)){try{var b=JSON.parse(a.data)}catch(c){return}if(!(null==b||this.D&&(this.sessionId&&this.sessionId!=b.id||this.channel&&this.channel!=b.channel))&&b)switch(b.event){case "listening":"null"!=a.origin&&(this.h=this.w=a.origin);this.g=a.source;this.sessionId=b.id;this.b&&(this.b(),this.b=null);break;case "command":this.i&&(!this.j||0<=Ea(this.j,b.func))&&this.i(b.func,b.args,a.origin)}}};
fi.prototype.sendMessage=function(a,b){var c=b||this.g;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=kd(a);c.postMessage(d,this.w)}catch(e){Q(e,"WARNING")}}};
fi.prototype.l=function(){window.removeEventListener("message",this.m);K.prototype.l.call(this)};function gi(a,b,c){fi.call(this,a,b,c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname,"widget");this.j=this.b=this.i=null}
n(gi,fi);function hi(){var a=this.f=new gi(!!P("WIDGET_ID_ENFORCE")),b=z(this.Ga,this);a.i=b;a.j=null;this.f.channel="widget";if(a=P("WIDGET_ID"))this.f.sessionId=a;this.h=[];this.j=!1;this.i={}}
k=hi.prototype;k.Ga=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.i[a]||"onReady"==a||(this.addEventListener(a,ii(this,a)),this.i[a]=!0)):this.ma(a,b,c)};
k.ma=function(){};
function ii(a,b){return z(function(a){this.sendMessage(b,a)},a)}
k.addEventListener=function(){};
k.sa=function(){this.j=!0;this.sendMessage("initialDelivery",this.aa());this.sendMessage("onReady");F(this.h,this.la,this);this.h=[]};
k.aa=function(){return null};
function ji(a,b){a.sendMessage("infoDelivery",b)}
k.la=function(a){this.j?this.f.sendMessage(a):this.h.push(a)};
k.sendMessage=function(a,b){this.la({event:a,info:void 0==b?null:b})};
k.dispose=function(){this.f=null};function ki(a){hi.call(this);this.b=a;this.g=[];this.addEventListener("onReady",z(this.Fa,this));this.addEventListener("onVideoProgress",z(this.Na,this));this.addEventListener("onVolumeChange",z(this.Oa,this));this.addEventListener("onApiChange",z(this.Ia,this));this.addEventListener("onPlaybackQualityChange",z(this.Ka,this));this.addEventListener("onPlaybackRateChange",z(this.La,this));this.addEventListener("onStateChange",z(this.Ma,this));this.addEventListener("onWebglSettingsChanged",z(this.Pa,
this))}
C(ki,hi);k=ki.prototype;k.ma=function(a,b,c){if(this.b[a]){b=b||[];if(0<b.length&&ph(a)){var d=b;if(y(d[0])&&!x(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=rh.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=qh.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=sh.apply(window,d)}d=e}th(d);b.length=1;b[0]=d}this.b.handleExternalCall(a,b,c);ph(a)&&ji(this,this.aa())}};
k.Fa=function(){var a=z(this.sa,this);this.f.b=a};
k.addEventListener=function(a,b){this.g.push({eventType:a,listener:b});this.b.addEventListener(a,b)};
k.aa=function(){if(!this.b)return null;var a=this.b.getApiInterface();Ja(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c],f=e;if(0==f.search("get")||0==f.search("is")){f=e;var g=0;0==f.search("get")?g=3:0==f.search("is")&&(g=2);f=f.charAt(g).toLowerCase()+f.substr(g+1);try{var h=this.b[e]();b[f]=h}catch(l){}}}b.videoData=this.b.getVideoData();b.currentTimeLastUpdated_=A()/1E3;return b};
k.Ma=function(a){a={playerState:a,currentTime:this.b.getCurrentTime(),duration:this.b.getDuration(),videoData:this.b.getVideoData(),videoStartBytes:0,videoBytesTotal:this.b.getVideoBytesTotal(),videoLoadedFraction:this.b.getVideoLoadedFraction(),playbackQuality:this.b.getPlaybackQuality(),availableQualityLevels:this.b.getAvailableQualityLevels(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getVideoUrl&&(a.videoUrl=
this.b.getVideoUrl());this.b.getVideoContentRect&&(a.videoContentRect=this.b.getVideoContentRect());this.b.getProgressState&&(a.progressState=this.b.getProgressState());this.b.getPlaylist&&(a.playlist=this.b.getPlaylist());this.b.getPlaylistIndex&&(a.playlistIndex=this.b.getPlaylistIndex());this.b.getStoryboardFormat&&(a.storyboardFormat=this.b.getStoryboardFormat());ji(this,a)};
k.Ka=function(a){ji(this,{playbackQuality:a})};
k.La=function(a){ji(this,{playbackRate:a})};
k.Ia=function(){for(var a=this.b.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.b.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var l=f[g],m=this.b.getOption(e,l);b[e][l]=m}}this.sendMessage("apiInfoDelivery",b)};
k.Oa=function(){ji(this,{muted:this.b.isMuted(),volume:this.b.getVolume()})};
k.Na=function(a){a={currentTime:a,videoBytesLoaded:this.b.getVideoBytesLoaded(),videoLoadedFraction:this.b.getVideoLoadedFraction(),currentTimeLastUpdated_:A()/1E3,playbackRate:this.b.getPlaybackRate(),mediaReferenceTime:this.b.getMediaReferenceTime()};this.b.getProgressState&&(a.progressState=this.b.getProgressState());ji(this,a)};
k.Pa=function(){var a={sphericalProperties:this.b.getSphericalProperties()};ji(this,a)};
k.dispose=function(){ki.A.dispose.call(this);for(var a=0;a<this.g.length;a++){var b=this.g[a];this.b.removeEventListener(b.eventType,b.listener)}this.g=[]};function li(a){a=void 0===a?!1:a;K.call(this);this.b=new M(a);Wc(this,Ca(Xc,this.b))}
C(li,K);li.prototype.subscribe=function(a,b,c){return this.f?0:this.b.subscribe(a,b,c)};
li.prototype.i=function(a,b){this.f||this.b.K.apply(this.b,arguments)};function mi(a,b,c){li.call(this);this.g=a;this.h=b;this.j=c}
C(mi,li);function ai(a,b,c){if(!a.f){var d=a.g;d.f||a.h!=d.b||(a={id:a.j,command:b},c&&(a.data=c),d.b.postMessage(kd(a),d.h))}}
mi.prototype.l=function(){this.h=this.g=null;mi.A.l.call(this)};function ni(a,b,c){K.call(this);this.b=a;this.h=c;this.i=V(window,"message",z(this.j,this));this.g=new mi(this,a,b);Wc(this,Ca(Xc,this.g))}
C(ni,K);ni.prototype.j=function(a){var b;if(b=!this.f)if(b=a.origin==this.h)a:{b=this.b;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,t(b))){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.g,c.f||c.i("command",b.command,b.data,a.origin))}};
ni.prototype.l=function(){Sf(this.i);this.b=null;ni.A.l.call(this)};function oi(){var a=fb(pi),b;return xd(new L(function(c,d){a.onSuccess=function(a){se(a)?c(a):d(new qi("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new qi("Unknown request error","net.unknown",a))};
a.M=function(a){d(new qi("Request timed out","net.timeout",a))};
b=Fe("//googleads.g.doubleclick.net/pagead/id",a)}),function(a){a instanceof yd&&b.abort();
return vd(a)})}
function qi(a,b){E.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
n(qi,E);function ri(){this.f=0;this.b=null}
ri.prototype.then=function(a,b,c){return 1===this.f&&a?(a=a.call(c,this.b),qd(a)?a:si(a)):2===this.f&&b?(a=b.call(c,this.b),qd(a)?a:ti(a)):this};
ri.prototype.getValue=function(){return this.b};
ri.prototype.$goog_Thenable=!0;function ti(a){var b=new ri;a=void 0===a?null:a;b.f=2;b.b=void 0===a?null:a;return b}
function si(a){var b=new ri;a=void 0===a?null:a;b.f=1;b.b=void 0===a?null:a;return b}
;function ui(a){E.call(this,a.message||a.description||a.name);this.isMissing=a instanceof vi;this.isTimeout=a instanceof qi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof yd}
n(ui,E);ui.prototype.name="BiscottiError";function vi(){E.call(this,"Biscotti ID is missing from server")}
n(vi,E);vi.prototype.name="BiscottiMissingError";var pi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},wi=null;function ie(){if("1"===$a(ge(),"args","privembed"))return vd(Error("Biscotti ID is not available in private embed mode"));wi||(wi=xd(oi().then(xi),function(a){return yi(2,a)}));
return wi}
function xi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new vi;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new vi;a=a.id;je(a);wi=si(a);zi(18E5,2);return a}
function yi(a,b){var c=new ui(b);je("");wi=ti(c);0<a&&zi(12E4,a-1);throw c;}
function zi(a,b){T(function(){xd(oi().then(xi,function(a){return yi(b,a)}),ta)},a)}
function Ai(){try{var a=w("yt.ads.biscotti.getId_");return a?a():ie()}catch(b){return vd(b)}}
;function Bi(a){if("1"!==$a(ge(),"args","privembed")){a&&he();try{Ai().then(function(a){a=ke(a);a.bsq=Ci++;Le("//www.youtube.com/ad_data_204",{wa:!1,C:a,withCredentials:!0})},function(){}),T(Bi,18E5)}catch(b){Q(b)}}}
var Ci=0;var Z=w("ytglobal.prefsUserPrefsPrefs_")||{};v("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function Di(){this.b=P("ALT_PREF_COOKIE_NAME","PREF");var a=zb.get(""+this.b,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
k=Di.prototype;k.get=function(a,b){Ei(a);Fi(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
k.set=function(a,b){Ei(a);Fi(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
k.remove=function(a){Ei(a);Fi(a);delete Z[a]};
k.save=function(){sg(this.b,this.dump(),63072E3)};
k.clear=function(){for(var a in Z)delete Z[a]};
k.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function Fi(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Ei(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Gi(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ua(Di);var Hi=null,Ii=null,Ji=null,Ki={};function Li(a){var b=a.id;a=a.ve_type;var c=Eg++;a=new Cg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});Ki[b]=a;b=Jg();c=Ig();b&&c&&Mg(b,c,[a])}
function Mi(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Kg(b,a),a=Ig()))for(var c in Ki){var d=Ki[c];d&&Mg(b,a,[d])}}
function Ni(a){Ki[a.id]=new Cg({trackingParams:a.tracking_params})}
function Oi(a){var b=Jg();a=Ki[a.id];b&&a&&pg("visualElementGestured",{csn:b,ve:Dg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},yg)}
function Pi(a){a=a.ids;var b=Jg();if(b)for(var c=0;c<a.length;c++){var d=Ki[a[c]];d&&pg("visualElementShown",{csn:b,ve:Dg(d),eventType:1},yg)}}
function Qi(){var a=Hi;a&&a.startInteractionLogging&&a.startInteractionLogging()}
;v("yt.setConfig",O,void 0);v("yt.config.set",O,void 0);v("yt.setMsg",Ue,void 0);v("yt.msgs.set",Ue,void 0);v("yt.logging.errors.log",Se,void 0);
v("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);Bi(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=P("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);P("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");a.args.autoplay&&th(a.args);Hi=a=kh(a);a.addEventListener("onScreenChanged",Mi);a.addEventListener("onLogClientVeCreated",Li);a.addEventListener("onLogServerVeCreated",Ni);a.addEventListener("onLogVeClicked",
Oi);a.addEventListener("onLogVesShown",Pi);a.addEventListener("onReady",Qi);b=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Ji=new ki(a):P("ENABLE_POST_API")&&t(b)&&t(c)&&(Ii=new ni(window.parent,b,c),Ji=new ei(a,Ii.g));c=fe("BG_P");If(c)&&(P("BG_I")||P("BG_IU"))&&(Ef=!0,Df.initialize(P("BG_I",null),P("BG_IU",null),c,Hf,void 0));zf()},void 0);
v("yt.www.watch.ads.restrictioncookie.spr",function(a){Oe(a+"mac_204?action_fcts=1");return!0},void 0);
var Ri=oe(function(){var a="ol";X.mark&&(0==a.lastIndexOf("mark_",0)||(a="mark_"+a),X.mark(a));a=Wh();var b=N();a.ol&&(a._ol=a._ol||[a.ol],a._ol.push(b));a.ol=b;a=Dh();if(b=a.ol)wf(b),a.ol=0;Sh().tick_ol=void 0;N();Th()?(a=Uh(),xh("tick_ol_"+a)||uh("latencyActionTicked",{tickName:"ol",clientActionNonce:a},void 0),a=!0):a=!1;if(a=!a)a=!w("yt.timing.pingSent_");if(a&&(b=P("TIMING_ACTION",void 0),a=Wh(),w("ytglobal.timingready_")&&b&&a._start&&(b=Vh()))){Ph||(Ch(Hh,new Fh(Math.round(b-a._start),void 0)),
Ph=!0);b=!0;var c=P("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in a)){b=!1;break}b&&Yh()}a=Di.getInstance();c=!!((Gi("f"+(Math.floor(119/31)+1))||0)&67108864);b=1<window.devicePixelRatio;document.body&&$c(document.body,"exp-invert-logo")&&(b&&!$c(document.body,"inverted-hdpi")?(d=document.body,d.classList?d.classList.add("inverted-hdpi"):$c(d,"inverted-hdpi")||(d.className+=0<d.className.length?" inverted-hdpi":"inverted-hdpi")):!b&&$c(document.body,"inverted-hdpi")&&ad());
c!=b&&(c="f"+(Math.floor(119/31)+1),d=Gi(c)||0,d=b?d|67108864:d&-67108865,0==d?delete Z[c]:Z[c]=d.toString(16).toString(),a.save())}),Si=oe(function(){var a=Hi;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();P("PL_ATT")&&Df.dispose();a=0;for(var b=xf.length;a<b;a++)wf(xf[a]);xf.length=0;qf("//static.doubleclick.net/instream/ad_status.js");yf=!1;O("DCLKSTAT",0);Yc(Ji,Ii);if(a=Hi)a.removeEventListener("onScreenChanged",Mi),a.removeEventListener("onLogClientVeCreated",Li),a.removeEventListener("onLogServerVeCreated",Ni),a.removeEventListener("onLogVeClicked",Oi),a.removeEventListener("onLogVesShown",Pi),a.removeEventListener("onReady",Qi),a.destroy();Ki=
{}});
window.addEventListener?(window.addEventListener("load",Ri),window.addEventListener("unload",Si)):window.attachEvent&&(window.attachEvent("onload",Ri),window.attachEvent("onunload",Si));B("yt.abuse.player.botguardInitialized",w("yt.abuse.player.botguardInitialized")||Jf);B("yt.abuse.player.invokeBotguard",w("yt.abuse.player.invokeBotguard")||Kf);B("yt.abuse.dclkstatus.checkDclkStatus",w("yt.abuse.dclkstatus.checkDclkStatus")||Af);B("yt.player.exports.navigate",w("yt.player.exports.navigate")||Lg);
B("yt.util.activity.init",w("yt.util.activity.init")||Vf);B("yt.util.activity.getTimeSinceActive",w("yt.util.activity.getTimeSinceActive")||Yf);B("yt.util.activity.setTimestamp",w("yt.util.activity.setTimestamp")||Wf);}).call(this);
