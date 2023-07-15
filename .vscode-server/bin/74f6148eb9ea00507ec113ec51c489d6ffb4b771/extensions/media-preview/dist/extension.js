(()=>{"use strict";var t={373:(t,e,i)=>{var r;i.r(e),i.d(e,{URI:()=>n,Utils:()=>s}),(()=>{var t={470:t=>{function e(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function i(t,e){for(var i,r="",n=0,s=-1,o=0,a=0;a<=t.length;++a){if(a<t.length)i=t.charCodeAt(a);else{if(47===i)break;i=47}if(47===i){if(s===a-1||1===o);else if(s!==a-1&&2===o){if(r.length<2||2!==n||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var h=r.lastIndexOf("/");if(h!==r.length-1){-1===h?(r="",n=0):n=(r=r.slice(0,h)).length-1-r.lastIndexOf("/"),s=a,o=0;continue}}else if(2===r.length||1===r.length){r="",n=0,s=a,o=0;continue}e&&(r.length>0?r+="/..":r="..",n=2)}else r.length>0?r+="/"+t.slice(s+1,a):r=t.slice(s+1,a),n=a-s-1;s=a,o=0}else 46===i&&-1!==o?++o:o=-1}return r}var r={resolve:function(){for(var t,r="",n=!1,s=arguments.length-1;s>=-1&&!n;s--){var o;s>=0?o=arguments[s]:(void 0===t&&(t=process.cwd()),o=t),e(o),0!==o.length&&(r=o+"/"+r,n=47===o.charCodeAt(0))}return r=i(r,!n),n?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(t){if(e(t),0===t.length)return".";var r=47===t.charCodeAt(0),n=47===t.charCodeAt(t.length-1);return 0!==(t=i(t,!r)).length||r||(t="."),t.length>0&&n&&(t+="/"),r?"/"+t:t},isAbsolute:function(t){return e(t),t.length>0&&47===t.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var t,i=0;i<arguments.length;++i){var n=arguments[i];e(n),n.length>0&&(void 0===t?t=n:t+="/"+n)}return void 0===t?".":r.normalize(t)},relative:function(t,i){if(e(t),e(i),t===i)return"";if((t=r.resolve(t))===(i=r.resolve(i)))return"";for(var n=1;n<t.length&&47===t.charCodeAt(n);++n);for(var s=t.length,o=s-n,a=1;a<i.length&&47===i.charCodeAt(a);++a);for(var h=i.length-a,c=o<h?o:h,u=-1,l=0;l<=c;++l){if(l===c){if(h>c){if(47===i.charCodeAt(a+l))return i.slice(a+l+1);if(0===l)return i.slice(a+l)}else o>c&&(47===t.charCodeAt(n+l)?u=l:0===l&&(u=0));break}var d=t.charCodeAt(n+l);if(d!==i.charCodeAt(a+l))break;47===d&&(u=l)}var p="";for(l=n+u+1;l<=s;++l)l!==s&&47!==t.charCodeAt(l)||(0===p.length?p+="..":p+="/..");return p.length>0?p+i.slice(a+u):(a+=u,47===i.charCodeAt(a)&&++a,i.slice(a))},_makeLong:function(t){return t},dirname:function(t){if(e(t),0===t.length)return".";for(var i=t.charCodeAt(0),r=47===i,n=-1,s=!0,o=t.length-1;o>=1;--o)if(47===(i=t.charCodeAt(o))){if(!s){n=o;break}}else s=!1;return-1===n?r?"/":".":r&&1===n?"//":t.slice(0,n)},basename:function(t,i){if(void 0!==i&&"string"!=typeof i)throw new TypeError('"ext" argument must be a string');e(t);var r,n=0,s=-1,o=!0;if(void 0!==i&&i.length>0&&i.length<=t.length){if(i.length===t.length&&i===t)return"";var a=i.length-1,h=-1;for(r=t.length-1;r>=0;--r){var c=t.charCodeAt(r);if(47===c){if(!o){n=r+1;break}}else-1===h&&(o=!1,h=r+1),a>=0&&(c===i.charCodeAt(a)?-1==--a&&(s=r):(a=-1,s=h))}return n===s?s=h:-1===s&&(s=t.length),t.slice(n,s)}for(r=t.length-1;r>=0;--r)if(47===t.charCodeAt(r)){if(!o){n=r+1;break}}else-1===s&&(o=!1,s=r+1);return-1===s?"":t.slice(n,s)},extname:function(t){e(t);for(var i=-1,r=0,n=-1,s=!0,o=0,a=t.length-1;a>=0;--a){var h=t.charCodeAt(a);if(47!==h)-1===n&&(s=!1,n=a+1),46===h?-1===i?i=a:1!==o&&(o=1):-1!==i&&(o=-1);else if(!s){r=a+1;break}}return-1===i||-1===n||0===o||1===o&&i===n-1&&i===r+1?"":t.slice(i,n)},format:function(t){if(null===t||"object"!=typeof t)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return function(t,e){var i=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||"");return i?i===e.root?i+r:i+"/"+r:r}(0,t)},parse:function(t){e(t);var i={root:"",dir:"",base:"",ext:"",name:""};if(0===t.length)return i;var r,n=t.charCodeAt(0),s=47===n;s?(i.root="/",r=1):r=0;for(var o=-1,a=0,h=-1,c=!0,u=t.length-1,l=0;u>=r;--u)if(47!==(n=t.charCodeAt(u)))-1===h&&(c=!1,h=u+1),46===n?-1===o?o=u:1!==l&&(l=1):-1!==o&&(l=-1);else if(!c){a=u+1;break}return-1===o||-1===h||0===l||1===l&&o===h-1&&o===a+1?-1!==h&&(i.base=i.name=0===a&&s?t.slice(1,h):t.slice(a,h)):(0===a&&s?(i.name=t.slice(1,o),i.base=t.slice(1,h)):(i.name=t.slice(a,o),i.base=t.slice(a,h)),i.ext=t.slice(o,h)),a>0?i.dir=t.slice(0,a-1):s&&(i.dir="/"),i},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,t.exports=r}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,i),s.exports}i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{var t;if(i.r(n),i.d(n,{URI:()=>p,Utils:()=>P}),"object"==typeof process)t="win32"===process.platform;else if("object"==typeof navigator){var e=navigator.userAgent;t=e.indexOf("Windows")>=0}var r,s,o=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),a=/^\w[\w\d+.-]*$/,h=/^\//,c=/^\/\//,u="",l="/",d=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,p=function(){function e(t,e,i,r,n,s){void 0===s&&(s=!1),"object"==typeof t?(this.scheme=t.scheme||u,this.authority=t.authority||u,this.path=t.path||u,this.query=t.query||u,this.fragment=t.fragment||u):(this.scheme=function(t,e){return t||e?t:"file"}(t,s),this.authority=e||u,this.path=function(t,e){switch(t){case"https":case"http":case"file":e?e[0]!==l&&(e=l+e):e=l}return e}(this.scheme,i||u),this.query=r||u,this.fragment=n||u,function(t,e){if(!t.scheme&&e)throw new Error('[UriError]: Scheme is missing: {scheme: "", authority: "'.concat(t.authority,'", path: "').concat(t.path,'", query: "').concat(t.query,'", fragment: "').concat(t.fragment,'"}'));if(t.scheme&&!a.test(t.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(t.path)if(t.authority){if(!h.test(t.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(c.test(t.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}(this,s))}return e.isUri=function(t){return t instanceof e||!!t&&"string"==typeof t.authority&&"string"==typeof t.fragment&&"string"==typeof t.path&&"string"==typeof t.query&&"string"==typeof t.scheme&&"string"==typeof t.fsPath&&"function"==typeof t.with&&"function"==typeof t.toString},Object.defineProperty(e.prototype,"fsPath",{get:function(){return w(this,!1)},enumerable:!1,configurable:!0}),e.prototype.with=function(t){if(!t)return this;var e=t.scheme,i=t.authority,r=t.path,n=t.query,s=t.fragment;return void 0===e?e=this.scheme:null===e&&(e=u),void 0===i?i=this.authority:null===i&&(i=u),void 0===r?r=this.path:null===r&&(r=u),void 0===n?n=this.query:null===n&&(n=u),void 0===s?s=this.fragment:null===s&&(s=u),e===this.scheme&&i===this.authority&&r===this.path&&n===this.query&&s===this.fragment?this:new v(e,i,r,n,s)},e.parse=function(t,e){void 0===e&&(e=!1);var i=d.exec(t);return i?new v(i[2]||u,A(i[4]||u),A(i[5]||u),A(i[7]||u),A(i[9]||u),e):new v(u,u,u,u,u)},e.file=function(e){var i=u;if(t&&(e=e.replace(/\\/g,l)),e[0]===l&&e[1]===l){var r=e.indexOf(l,2);-1===r?(i=e.substring(2),e=l):(i=e.substring(2,r),e=e.substring(r)||l)}return new v("file",i,e,u,u)},e.from=function(t){return new v(t.scheme,t.authority,t.path,t.query,t.fragment)},e.prototype.toString=function(t){return void 0===t&&(t=!1),y(this,t)},e.prototype.toJSON=function(){return this},e.revive=function(t){if(t){if(t instanceof e)return t;var i=new v(t);return i._formatted=t.external,i._fsPath=t._sep===f?t.fsPath:null,i}return t},e}(),f=t?1:void 0,v=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._formatted=null,e._fsPath=null,e}return o(e,t),Object.defineProperty(e.prototype,"fsPath",{get:function(){return this._fsPath||(this._fsPath=w(this,!1)),this._fsPath},enumerable:!1,configurable:!0}),e.prototype.toString=function(t){return void 0===t&&(t=!1),t?y(this,!0):(this._formatted||(this._formatted=y(this,!1)),this._formatted)},e.prototype.toJSON=function(){var t={$mid:1};return this._fsPath&&(t.fsPath=this._fsPath,t._sep=f),this._formatted&&(t.external=this._formatted),this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t},e}(p),m=((s={})[58]="%3A",s[47]="%2F",s[63]="%3F",s[35]="%23",s[91]="%5B",s[93]="%5D",s[64]="%40",s[33]="%21",s[36]="%24",s[38]="%26",s[39]="%27",s[40]="%28",s[41]="%29",s[42]="%2A",s[43]="%2B",s[44]="%2C",s[59]="%3B",s[61]="%3D",s[32]="%20",s);function g(t,e){for(var i=void 0,r=-1,n=0;n<t.length;n++){var s=t.charCodeAt(n);if(s>=97&&s<=122||s>=65&&s<=90||s>=48&&s<=57||45===s||46===s||95===s||126===s||e&&47===s)-1!==r&&(i+=encodeURIComponent(t.substring(r,n)),r=-1),void 0!==i&&(i+=t.charAt(n));else{void 0===i&&(i=t.substr(0,n));var o=m[s];void 0!==o?(-1!==r&&(i+=encodeURIComponent(t.substring(r,n)),r=-1),i+=o):-1===r&&(r=n)}}return-1!==r&&(i+=encodeURIComponent(t.substring(r))),void 0!==i?i:t}function b(t){for(var e=void 0,i=0;i<t.length;i++){var r=t.charCodeAt(i);35===r||63===r?(void 0===e&&(e=t.substr(0,i)),e+=m[r]):void 0!==e&&(e+=t[i])}return void 0!==e?e:t}function w(e,i){var r;return r=e.authority&&e.path.length>1&&"file"===e.scheme?"//".concat(e.authority).concat(e.path):47===e.path.charCodeAt(0)&&(e.path.charCodeAt(1)>=65&&e.path.charCodeAt(1)<=90||e.path.charCodeAt(1)>=97&&e.path.charCodeAt(1)<=122)&&58===e.path.charCodeAt(2)?i?e.path.substr(1):e.path[1].toLowerCase()+e.path.substr(2):e.path,t&&(r=r.replace(/\//g,"\\")),r}function y(t,e){var i=e?b:g,r="",n=t.scheme,s=t.authority,o=t.path,a=t.query,h=t.fragment;if(n&&(r+=n,r+=":"),(s||"file"===n)&&(r+=l,r+=l),s){var c=s.indexOf("@");if(-1!==c){var u=s.substr(0,c);s=s.substr(c+1),-1===(c=u.indexOf(":"))?r+=i(u,!1):(r+=i(u.substr(0,c),!1),r+=":",r+=i(u.substr(c+1),!1)),r+="@"}-1===(c=(s=s.toLowerCase()).indexOf(":"))?r+=i(s,!1):(r+=i(s.substr(0,c),!1),r+=s.substr(c))}if(o){if(o.length>=3&&47===o.charCodeAt(0)&&58===o.charCodeAt(2))(d=o.charCodeAt(1))>=65&&d<=90&&(o="/".concat(String.fromCharCode(d+32),":").concat(o.substr(3)));else if(o.length>=2&&58===o.charCodeAt(1)){var d;(d=o.charCodeAt(0))>=65&&d<=90&&(o="".concat(String.fromCharCode(d+32),":").concat(o.substr(2)))}r+=i(o,!0)}return a&&(r+="?",r+=i(a,!1)),h&&(r+="#",r+=e?h:g(h,!1)),r}function $(t){try{return decodeURIComponent(t)}catch(e){return t.length>3?t.substr(0,3)+$(t.substr(3)):t}}var C=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function A(t){return t.match(C)?t.replace(C,(function(t){return $(t)})):t}var P,x=i(470),S=function(t,e,i){if(i||2===arguments.length)for(var r,n=0,s=e.length;n<s;n++)!r&&n in e||(r||(r=Array.prototype.slice.call(e,0,n)),r[n]=e[n]);return t.concat(r||Array.prototype.slice.call(e))},O=x.posix||x,_="/";!function(t){t.joinPath=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return t.with({path:O.join.apply(O,S([t.path],e,!1))})},t.resolvePath=function(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var r=t.path,n=!1;r[0]!==_&&(r=_+r,n=!0);var s=O.resolve.apply(O,S([r],e,!1));return n&&s[0]===_&&!t.authority&&(s=s.substring(1)),t.with({path:s})},t.dirname=function(t){if(0===t.path.length||t.path===_)return t;var e=O.dirname(t.path);return 1===e.length&&46===e.charCodeAt(0)&&(e=""),t.with({path:e})},t.basename=function(t){return O.basename(t.path)},t.extname=function(t){return O.extname(t.path)}}(P||(P={}))})(),r=n})();const{URI:n,Utils:s}=r},759:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$Fb=void 0;const r=i(496),n=i(406),s=i(968);class o{constructor(t,e){this.a=t,this.b=e}async openCustomDocument(t){return{uri:t,dispose:()=>{}}}async resolveCustomEditor(t,e){new a(this.a,t.uri,e,this.b)}}o.viewType="vscode.audioPreview";class a extends n.$Cb{constructor(t,e,i,r){super(t,e,i,r),this.o=t,this.c(i.webview.onDidReceiveMessage((t=>{switch(t.type){case"reopen-as-text":(0,n.$Bb)(e,i.viewColumn)}}))),this.k(),this.l(),this.n()}async m(){const t=Date.now().toString(),e={src:await this.q(this.i,this.h,t)},i=(0,s.$Eb)(),n=this.i.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Audio Preview</title>\n\n\t<link rel="stylesheet" href="${(0,s.$Db)(this.r("media","audioPreview.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${n}; media-src ${n}; script-src 'nonce-${i}'; style-src ${n} 'nonce-${i}';">\n\t<meta id="settings" data-settings="${(0,s.$Db)(JSON.stringify(e))}">\n</head>\n<body class="container loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>\n\t<div class="loading-indicator"></div>\n\t<div class="loading-error">\n\t\t<p>${r.l10n.t("An error occurred while loading the audio file.")}</p>\n\t\t<a href="#" class="open-file-link">${r.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,s.$Db)(this.r("media","audioPreview.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async q(t,e,i){return"git"===e.scheme&&0===(await r.workspace.fs.stat(e)).size?null:e.query?t.webview.asWebviewUri(e).toString():t.webview.asWebviewUri(e).with({query:`version=${i}`}).toString()}r(...t){return this.i.webview.asWebviewUri(r.Uri.joinPath(this.o,...t))}}e.$Fb=function(t,e){const i=new o(t.extensionUri,e);return r.window.registerCustomEditorProvider(o.viewType,i,{supportsMultipleEditorsPerDocument:!0,webviewOptions:{retainContextWhenHidden:!0}})}},86:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$Ab=void 0;const r=i(496),n=i(650);class s{static formatSize(t){return t<s.KB?r.l10n.t("{0}B",t):t<s.MB?r.l10n.t("{0}KB",(t/s.KB).toFixed(2)):t<s.GB?r.l10n.t("{0}MB",(t/s.MB).toFixed(2)):t<s.TB?r.l10n.t("{0}GB",(t/s.GB).toFixed(2)):r.l10n.t("{0}TB",(t/s.TB).toFixed(2))}}s.KB=1024,s.MB=s.KB*s.KB,s.GB=s.MB*s.KB,s.TB=s.GB*s.KB;class o extends n.$zb{constructor(){super("status.imagePreview.binarySize",r.l10n.t("Image Binary Size"),r.StatusBarAlignment.Right,100)}show(t,e){"number"==typeof e?super.g(t,s.formatSize(e)):this.hide(t)}}e.$Ab=o},34:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$Jb=e.$Ib=void 0;const r=i(496),n=i(406),s=i(968),o=i(233),a=i(142);class h{constructor(t,e,i,r){this.c=t,this.d=e,this.f=i,this.g=r,this.a=new Set}async openCustomDocument(t){return{uri:t,dispose:()=>{}}}async resolveCustomEditor(t,e){const i=new c(this.c,t.uri,e,this.d,this.f,this.g);this.a.add(i),this.h(i),e.onDidDispose((()=>{this.a.delete(i)})),e.onDidChangeViewState((()=>{e.active?this.h(i):this.b!==i||e.active||this.h(void 0)}))}get activePreview(){return this.b}h(t){this.b=t}}e.$Ib=h,h.viewType="imagePreview.previewEditor";class c extends n.$Cb{constructor(t,e,i,r,s,o){super(t,e,i,s),this.r=t,this.s=r,this.u=o,this.q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAEElEQVR42gEFAPr/AP///wAI/AL+Sr4t6gAAAABJRU5ErkJggg==",this.c(i.webview.onDidReceiveMessage((t=>{switch(t.type){case"size":this.o=t.value,this.n();break;case"zoom":this.p=t.value,this.n();break;case"reopen-as-text":(0,n.$Bb)(e,i.viewColumn)}}))),this.c(o.onDidChangeScale((t=>{2===this.f&&this.i.webview.postMessage({type:"setScale",scale:t.scale})}))),this.c(i.onDidChangeViewState((()=>{this.i.webview.postMessage({type:"setActive",value:this.i.active})}))),this.c(i.onDidDispose((()=>{2===this.f&&(this.s.hide(this),this.u.hide(this)),this.f=0}))),this.k(),this.l(),this.n(),this.i.webview.postMessage({type:"setActive",value:this.i.active})}dispose(){super.dispose(),this.s.hide(this),this.u.hide(this)}zoomIn(){2===this.f&&this.i.webview.postMessage({type:"zoomIn"})}zoomOut(){2===this.f&&this.i.webview.postMessage({type:"zoomOut"})}copyImage(){2===this.f&&(this.i.reveal(),this.i.webview.postMessage({type:"copyImage"}))}n(){super.n(),0!==this.f&&(this.i.active?(this.s.show(this,this.o||""),this.u.show(this,this.p||"fit")):(this.s.hide(this),this.u.hide(this)))}async m(){const t=Date.now().toString(),e={src:await this.x(this.i,this.h,t)},i=(0,s.$Eb)(),n=this.i.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Image Preview</title>\n\n\t<link rel="stylesheet" href="${(0,s.$Db)(this.y("media","imagePreview.css"))}" type="text/css" media="screen" nonce="${i}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${n}; connect-src ${n}; script-src 'nonce-${i}'; style-src ${n} 'nonce-${i}';">\n\t<meta id="image-preview-settings" data-settings="${(0,s.$Db)(JSON.stringify(e))}">\n</head>\n<body class="container image scale-to-fit loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>\n\t<div class="loading-indicator"></div>\n\t<div class="image-load-error">\n\t\t<p>${r.l10n.t("An error occurred while loading the image.")}</p>\n\t\t<a href="#" class="open-file-link">${r.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,s.$Db)(this.y("media","imagePreview.js"))}" nonce="${i}"><\/script>\n</body>\n</html>`}async x(t,e,i){return"git"===e.scheme&&0===(await r.workspace.fs.stat(e)).size?this.q:e.query?t.webview.asWebviewUri(e).toString():t.webview.asWebviewUri(e).with({query:`version=${i}`}).toString()}y(...t){return this.i.webview.asWebviewUri(r.Uri.joinPath(this.r,...t))}}e.$Jb=function(t,e){const i=[],n=new o.$Gb;i.push(n);const s=new a.$Hb;i.push(s);const c=new h(t.extensionUri,n,e,s);return i.push(r.window.registerCustomEditorProvider(h.viewType,c,{supportsMultipleEditorsPerDocument:!0})),i.push(r.commands.registerCommand("imagePreview.zoomIn",(()=>{c.activePreview?.zoomIn()}))),i.push(r.commands.registerCommand("imagePreview.zoomOut",(()=>{c.activePreview?.zoomOut()}))),i.push(r.commands.registerCommand("imagePreview.copyImage",(()=>{c.activePreview?.copyImage()}))),r.Disposable.from(...i)}},233:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$Gb=void 0;const r=i(496),n=i(650);class s extends n.$zb{constructor(){super("status.imagePreview.size",r.l10n.t("Image Size"),r.StatusBarAlignment.Right,101)}show(t,e){this.g(t,e)}}e.$Gb=s},142:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$Hb=void 0;const r=i(496),n=i(650),s="_imagePreview.selectZoomLevel";class o extends n.$zb{constructor(){super("status.imagePreview.zoom",r.l10n.t("Image Zoom"),r.StatusBarAlignment.Right,102),this.h=this.c(new r.EventEmitter),this.onDidChangeScale=this.h.event,this.c(r.commands.registerCommand(s,(async()=>{const t=[10,5,2,1,.5,.2,"fit"].map((t=>({label:this.i(t),scale:t}))),e=await r.window.showQuickPick(t,{placeHolder:r.l10n.t("Select zoom level")});e&&this.h.fire({scale:e.scale})}))),this.f.command=s}show(t,e){this.g(t,this.i(e))}i(t){return"fit"===t?r.l10n.t("Whole Image"):`${Math.round(100*t)}%`}}e.$Hb=o},406:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$Cb=e.$Bb=void 0;const r=i(496),n=i(373),s=i(274);e.$Bb=function(t,e){r.commands.executeCommand("vscode.openWith",t,"default",e)};class o extends s.$yb{constructor(t,e,i,s){super(),this.h=e,this.i=i,this.j=s,this.f=1,i.webview.options={enableScripts:!0,enableForms:!1,localResourceRoots:[n.Utils.dirname(e),t]},this.c(i.onDidChangeViewState((()=>{this.n()}))),this.c(i.onDidDispose((()=>{this.f=0,this.dispose()})));const o=this.c(r.workspace.createFileSystemWatcher(new r.RelativePattern(e,"*")));this.c(o.onDidChange((t=>{t.toString()===this.h.toString()&&(this.k(),this.l())}))),this.c(o.onDidDelete((t=>{t.toString()===this.h.toString()&&this.i.dispose()})))}dispose(){super.dispose(),this.j.hide(this)}k(){r.workspace.fs.stat(this.h).then((({size:t})=>{this.g=t,this.n()}))}async l(){if(0===this.f)return;const t=await this.m();0!==this.f&&(this.i.webview.html=t)}n(){0!==this.f&&(this.i.active?(this.f=2,this.j.show(this,this.g)):(this.j.hide(this),this.f=1))}}e.$Cb=o},650:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$zb=void 0;const r=i(496),n=i(274);class s extends n.$yb{constructor(t,e,i,n){super(),this.f=this.c(r.window.createStatusBarItem(t,i,n)),this.f.name=e}g(t,e){this.e=t,this.f.text=e,this.f.show()}hide(t){t===this.e&&(this.f.hide(),this.e=void 0)}}e.$zb=s},274:(t,e)=>{function i(t){for(;t.length;){const e=t.pop();e&&e.dispose()}}Object.defineProperty(e,"__esModule",{value:!0}),e.$yb=e.$xb=void 0,e.$xb=i,e.$yb=class{constructor(){this.a=!1,this.b=[]}dispose(){this.a||(this.a=!0,i(this.b))}c(t){return this.a?t.dispose():this.b.push(t),t}get d(){return this.a}}},968:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$Eb=e.$Db=void 0,e.$Db=function(t){return t.toString().replace(/"/g,"&quot;")},e.$Eb=function(){let t="";const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<64;i++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}},280:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.$Kb=void 0;const r=i(496),n=i(406),s=i(968);class o{constructor(t,e){this.a=t,this.b=e}async openCustomDocument(t){return{uri:t,dispose:()=>{}}}async resolveCustomEditor(t,e){new a(this.a,t.uri,e,this.b)}}o.viewType="vscode.videoPreview";class a extends n.$Cb{constructor(t,e,i,r){super(t,e,i,r),this.o=t,this.c(i.webview.onDidReceiveMessage((t=>{switch(t.type){case"reopen-as-text":(0,n.$Bb)(e,i.viewColumn)}}))),this.k(),this.l(),this.n()}async m(){const t=Date.now().toString(),e=r.workspace.getConfiguration("mediaPreview.video"),i={src:await this.q(this.i,this.h,t),autoplay:e.get("autoPlay"),loop:e.get("loop")},n=(0,s.$Eb)(),o=this.i.webview.cspSource;return`<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\n\t\x3c!-- Disable pinch zooming --\x3e\n\t<meta name="viewport"\n\t\tcontent="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">\n\n\t<title>Video Preview</title>\n\n\t<link rel="stylesheet" href="${(0,s.$Db)(this.r("media","videoPreview.css"))}" type="text/css" media="screen" nonce="${n}">\n\n\t<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src data: ${o}; media-src ${o}; script-src 'nonce-${n}'; style-src ${o} 'nonce-${n}';">\n\t<meta id="settings" data-settings="${(0,s.$Db)(JSON.stringify(i))}">\n</head>\n<body class="loading" data-vscode-context='{ "preventDefaultContextMenuItems": true }'>\n\t<div class="loading-indicator"></div>\n\t<div class="loading-error">\n\t\t<p>${r.l10n.t("An error occurred while loading the video file.")}</p>\n\t\t<a href="#" class="open-file-link">${r.l10n.t("Open file using VS Code's standard text/binary editor?")}</a>\n\t</div>\n\t<script src="${(0,s.$Db)(this.r("media","videoPreview.js"))}" nonce="${n}"><\/script>\n</body>\n</html>`}async q(t,e,i){return"git"===e.scheme&&0===(await r.workspace.fs.stat(e)).size?null:e.query?t.webview.asWebviewUri(e).toString():t.webview.asWebviewUri(e).with({query:`version=${i}`}).toString()}r(...t){return this.i.webview.asWebviewUri(r.Uri.joinPath(this.o,...t))}}e.$Kb=function(t,e){const i=new o(t.extensionUri,e);return r.window.registerCustomEditorProvider(o.viewType,i,{supportsMultipleEditorsPerDocument:!0,webviewOptions:{retainContextWhenHidden:!0}})}},496:t=>{t.exports=require("vscode")}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,i),s.exports}i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};(()=>{var t=r;Object.defineProperty(t,"__esModule",{value:!0}),t.activate=void 0;const e=i(759),n=i(86),s=i(34),o=i(280);t.activate=function(t){const i=new n.$Ab;t.subscriptions.push(i),t.subscriptions.push((0,s.$Jb)(t,i)),t.subscriptions.push((0,e.$Fb)(t,i)),t.subscriptions.push((0,o.$Kb)(t,i))}})();var n=exports;for(var s in r)n[s]=r[s];r.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/74f6148eb9ea00507ec113ec51c489d6ffb4b771/extensions/media-preview/dist/extension.js.map