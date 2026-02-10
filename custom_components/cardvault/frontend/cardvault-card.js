function t(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,r=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let i=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(r&&void 0===t){const r=void 0!==e&&1===e.length;r&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const r=1===t.length?t[0]:e.reduce((e,r,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[n+1],t[0]);return new i(r,t,n)},s=r?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return(t=>new i("string"==typeof t?t:t+"",void 0,n))(e)})(t):t,{is:l,defineProperty:c,getOwnPropertyDescriptor:u,getOwnPropertyNames:d,getOwnPropertySymbols:f,getPrototypeOf:h}=Object,p=globalThis,g=p.trustedTypes,v=g?g.emptyScript:"",y=p.reactiveElementPolyfillSupport,b=(t,e)=>t,_={toAttribute(t,e){switch(e){case Boolean:t=t?v:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=null!==t;break;case Number:r=null===t?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch(t){r=null}}return r}},m=(t,e)=>!l(t,e),w={attribute:!0,type:String,converter:_,reflect:!1,useDefault:!1,hasChanged:m};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let E=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=w){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,e);void 0!==n&&c(this.prototype,t,n)}}static getPropertyDescriptor(t,e,r){const{get:n,set:o}=u(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:n,set(e){const i=n?.call(this);o?.call(this,e),this.requestUpdate(t,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??w}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const t=h(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const t=this.properties,e=[...d(t),...f(t)];for(const r of e)this.createProperty(r,t[r])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,r]of e)this.elementProperties.set(t,r)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const r=this._$Eu(t,e);void 0!==r&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const t of r)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Eu(t,e){const r=e.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{if(r)t.adoptedStyleSheets=n.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const r of n){const n=document.createElement("style"),o=e.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$ET(t,e){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(void 0!==n&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:_).toAttribute(e,r.type);this._$Em=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){const r=this.constructor,n=r._$Eh.get(t);if(void 0!==n&&this._$Em!==n){const t=r.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:_;this._$Em=n;const i=o.fromAttribute(e,t.type);this[n]=i??this._$Ej?.get(n)??i,this._$Em=null}}requestUpdate(t,e,r,n=!1,o){if(void 0!==t){const i=this.constructor;if(!1===n&&(o=this[t]),r??=i.getPropertyOptions(t),!((r.hasChanged??m)(o,e)||r.useDefault&&r.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,r))))return;this.C(t,e,r)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:r,reflect:n,wrapped:o},i){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),!0!==o||void 0!==i)||(this._$AL.has(t)||(this.hasUpdated||r||(e=void 0),this._$AL.set(t,e)),!0===n&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,r]of t){const{wrapped:t}=r,n=this[e];!0!==t||this._$AL.has(e)||void 0===n||this.C(e,void 0,r,n)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[b("elementProperties")]=new Map,E[b("finalized")]=new Map,y?.({ReactiveElement:E}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,O=t=>t,C=x.trustedTypes,A=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+S,j=`<${P}>`,k=document,T=()=>k.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,R=Array.isArray,L="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,B=/-->/g,N=/>/g,D=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,z=/"/g,H=/^(?:script|style|textarea|title)$/i,F=(t=>(e,...r)=>({_$litType$:t,strings:e,values:r}))(1),V=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),X=new WeakMap,Y=k.createTreeWalker(k,129);function J(t,e){if(!R(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(e):e}const W=(t,e)=>{const r=t.length-1,n=[];let o,i=2===e?"<svg>":3===e?"<math>":"",a=I;for(let e=0;e<r;e++){const r=t[e];let s,l,c=-1,u=0;for(;u<r.length&&(a.lastIndex=u,l=a.exec(r),null!==l);)u=a.lastIndex,a===I?"!--"===l[1]?a=B:void 0!==l[1]?a=N:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=D):void 0!==l[3]&&(a=D):a===D?">"===l[0]?(a=o??I,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?D:'"'===l[3]?z:U):a===z||a===U?a=D:a===B||a===N?a=I:(a=D,o=void 0);const d=a===D&&t[e+1].startsWith("/>")?" ":"";i+=a===I?r+j:c>=0?(n.push(s),r.slice(0,c)+$+r.slice(c)+S+d):r+S+(-2===c?e:d)}return[J(t,i+(t[r]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),n]};class K{constructor({strings:t,_$litType$:e},r){let n;this.parts=[];let o=0,i=0;const a=t.length-1,s=this.parts,[l,c]=W(t,e);if(this.el=K.createElement(l,r),Y.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=Y.nextNode())&&s.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith($)){const e=c[i++],r=n.getAttribute(t).split(S),a=/([.?@])?(.*)/.exec(e);s.push({type:1,index:o,name:a[2],strings:r,ctor:"."===a[1]?et:"?"===a[1]?rt:"@"===a[1]?nt:tt}),n.removeAttribute(t)}else t.startsWith(S)&&(s.push({type:6,index:o}),n.removeAttribute(t));if(H.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=C?C.emptyScript:"";for(let r=0;r<e;r++)n.append(t[r],T()),Y.nextNode(),s.push({type:2,index:++o});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===P)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)s.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const r=k.createElement("template");return r.innerHTML=t,r}}function q(t,e,r=t,n){if(e===V)return e;let o=void 0!==n?r._$Co?.[n]:r._$Cl;const i=M(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),void 0===i?o=void 0:(o=new i(t),o._$AT(t,r,n)),void 0!==n?(r._$Co??=[])[n]=o:r._$Cl=o),void 0!==o&&(e=q(t,o._$AS(t,e.values),o,n)),e}class Q{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,n=(t?.creationScope??k).importNode(e,!0);Y.currentNode=n;let o=Y.nextNode(),i=0,a=0,s=r[0];for(;void 0!==s;){if(i===s.index){let e;2===s.type?e=new Z(o,o.nextSibling,this,t):1===s.type?e=new s.ctor(o,s.name,s.strings,this,t):6===s.type&&(e=new ot(o,this,t)),this._$AV.push(e),s=r[++a]}i!==s?.index&&(o=Y.nextNode(),i++)}return Y.currentNode=k,n}p(t){let e=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,n){this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),M(t)?t===G||null==t||""===t?(this._$AH!==G&&this._$AR(),this._$AH=G):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>R(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==G&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(k.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=K.createElement(J(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(e);else{const t=new Q(n,this),r=t.u(this.options);t.p(e),this.T(r),this._$AH=t}}_$AC(t){let e=X.get(t.strings);return void 0===e&&X.set(t.strings,e=new K(t)),e}k(t){R(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,n=0;for(const o of t)n===e.length?e.push(r=new Z(this.O(T()),this.O(T()),this,this.options)):r=e[n],r._$AI(o),n++;n<e.length&&(this._$AR(r&&r._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=O(t).nextSibling;O(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,n,o){this.type=1,this._$AH=G,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=G}_$AI(t,e=this,r,n){const o=this.strings;let i=!1;if(void 0===o)t=q(this,t,e,0),i=!M(t)||t!==this._$AH&&t!==V,i&&(this._$AH=t);else{const n=t;let a,s;for(t=o[0],a=0;a<o.length-1;a++)s=q(this,n[r+a],e,a),s===V&&(s=this._$AH[a]),i||=!M(s)||s!==this._$AH[a],s===G?t=G:t!==G&&(t+=(s??"")+o[a+1]),this._$AH[a]=s}i&&!n&&this.j(t)}j(t){t===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===G?void 0:t}}class rt extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==G)}}class nt extends tt{constructor(t,e,r,n,o){super(t,e,r,n,o),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??G)===V)return;const r=this._$AH,n=t===G&&r!==G||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==G&&(r===G||n);n&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const it=x.litHtmlPolyfillSupport;it?.(K,Z),(x.litHtmlVersions??=[]).push("3.3.2");const at=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class st extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,r)=>{const n=r?.renderBefore??e;let o=n._$litPart$;if(void 0===o){const t=r?.renderBefore??null;n._$litPart$=o=new Z(e.insertBefore(T(),t),t,void 0,r??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}}st._$litElement$=!0,st.finalized=!0,at.litElementHydrateSupport?.({LitElement:st});const lt=at.litElementPolyfillSupport;lt?.({LitElement:st}),(at.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=t=>(e,r)=>{void 0!==r?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},ut={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:m},dt=(t=ut,e,r)=>{const{kind:n,metadata:o}=r;let i=globalThis.litPropertyMetadata.get(o);if(void 0===i&&globalThis.litPropertyMetadata.set(o,i=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),"accessor"===n){const{name:n}=r;return{set(r){const o=e.get.call(this);e.set.call(this,r),this.requestUpdate(n,o,t,!0,r)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=r;return function(r){const o=this[n];e.call(this,r),this.requestUpdate(n,o,t,!0,r)}}throw Error("Unsupported decorator location: "+n)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ft(t){return(e,r)=>"object"==typeof r?dt(t,e,r):((t,e,r)=>{const n=e.hasOwnProperty(r);return e.constructor.createProperty(r,t),n?Object.getOwnPropertyDescriptor(e,r):void 0})(t,e,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return ft({...t,state:!0,attribute:!1})}class pt{constructor(t){this.hass=t}async getLogos(){const t=await this.hass.fetchWithAuth("/api/cardvault/logos");if(!t.ok)throw new Error(`Failed to fetch logos: ${t.status}`);return t.json()}async getCards(){const t=await this.hass.fetchWithAuth("/api/cardvault/cards");if(!t.ok)throw new Error(`Failed to fetch cards: ${t.status}`);return t.json()}async createCard(t){const e=await this.hass.fetchWithAuth("/api/cardvault/cards",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!e.ok)throw new Error(`Failed to create card: ${e.status}`);return e.json()}async updateCard(t,e){const r=await this.hass.fetchWithAuth(`/api/cardvault/cards/${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(!r.ok)throw new Error(`Failed to update card: ${r.status}`);return r.json()}async deleteCard(t){const e=await this.hass.fetchWithAuth(`/api/cardvault/cards/${t}`,{method:"DELETE"});if(!e.ok)throw new Error(`Failed to delete card: ${e.status}`)}async uploadImage(t,e,r){const n=new FormData;n.append("file",r);const o=await this.hass.fetchWithAuth(`/api/cardvault/cards/${t}/image/${e}`,{method:"POST",body:n});if(!o.ok)throw new Error(`Failed to upload image: ${o.status}`);return o.json()}async deleteImage(t,e){const r=await this.hass.fetchWithAuth(`/api/cardvault/cards/${t}/image/${e}`,{method:"DELETE"});if(!r.ok)throw new Error(`Failed to delete image: ${r.status}`)}async checkScanAvailable(){const t=await this.hass.fetchWithAuth("/api/cardvault/scan/status");if(!t.ok)throw new Error(`Failed to check scan status: ${t.status}`);return t.json()}async scanBarcode(t){const e=new FormData;e.append("file",t);const r=await this.hass.fetchWithAuth("/api/cardvault/scan",{method:"POST",body:e});if(!r.ok)throw new Error(`Failed to scan barcode: ${r.status}`);return(await r.json()).barcodes}}const gt=a`
    :host {
        --cv-primary: var(--primary-color, #03a9f4);
        --cv-bg: var(--card-background-color, #fff);
        --cv-text: var(--primary-text-color, #212121);
        --cv-text-secondary: var(--secondary-text-color, #727272);
        --cv-divider: var(--divider-color, #e0e0e0);
        --cv-radius: 12px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 16px 8px;
    }

    .card-header h1 {
        margin: 0;
        font-size: 1.2em;
        font-weight: 500;
        color: var(--cv-text);
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
        gap: 12px;
        padding: 8px 16px 16px;
    }

    .card-tile {
        position: relative;
        border-radius: var(--cv-radius);
        overflow: hidden;
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 10px;
        min-height: 60px;
        color: #fff;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .card-tile:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .card-tile:active {
        transform: scale(0.97);
    }

    .card-tile .tile-name {
        font-weight: 600;
        font-size: 0.9em;
        line-height: 1.2;
        word-break: break-word;
    }

    .card-tile .tile-type {
        font-size: 0.7em;
        opacity: 0.85;
        margin-top: 2px;
    }

    .card-tile .tile-logo {
        position: absolute;
        top: 8px;
        left: 8px;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        object-fit: contain;
        background: rgba(255, 255, 255, 0.85);
        padding: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .add-btn {
        position: relative;
        border-radius: var(--cv-radius);
        overflow: hidden;
        cursor: pointer;
        min-height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2px dashed var(--cv-divider);
        background: transparent;
        color: var(--cv-text-secondary);
        font-size: 0.9em;
        transition: border-color 0.15s ease, color 0.15s ease;
    }

    .add-btn:hover {
        border-color: var(--cv-primary);
        color: var(--cv-primary);
    }

    .add-btn svg {
        width: 32px;
        height: 32px;
        margin-bottom: 4px;
    }

    .compact-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        padding: 8px 16px 16px;
        align-items: center;
    }

    .compact-circle {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 700;
        font-size: 0.85em;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: transform 0.15s ease, box-shadow 0.15s ease;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        user-select: none;
    }

    .compact-circle:hover {
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    }

    .compact-circle:active {
        transform: scale(0.95);
    }

    .compact-add {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px dashed var(--cv-divider);
        background: transparent;
        color: var(--cv-text-secondary);
        cursor: pointer;
        transition: border-color 0.15s ease, color 0.15s ease;
        padding: 0;
    }

    .compact-add:hover {
        border-color: var(--cv-primary);
        color: var(--cv-primary);
    }

    .compact-add svg {
        width: 24px;
        height: 24px;
    }

    .empty-state {
        padding: 32px 16px;
        text-align: center;
        color: var(--cv-text-secondary);
    }

    .empty-state p {
        margin: 8px 0 0;
        font-size: 0.9em;
    }
`,vt=a`
    .dialog-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .dialog {
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #212121);
        border-radius: 16px;
        max-width: 450px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 16px 8px;
        border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }

    .dialog-header h2 {
        margin: 0;
        font-size: 1.1em;
        font-weight: 500;
    }

    .dialog-body {
        padding: 16px;
    }

    .dialog-footer {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        padding: 8px 16px 16px;
    }

    .form-group {
        margin-bottom: 14px;
    }

    .form-group label {
        display: block;
        font-size: 0.85em;
        font-weight: 500;
        margin-bottom: 4px;
        color: var(--secondary-text-color, #727272);
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 8px 10px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        font-size: 0.95em;
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #212121);
        box-sizing: border-box;
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: var(--primary-color, #03a9f4);
    }

    .form-group textarea {
        resize: vertical;
        min-height: 60px;
    }

    .form-row {
        display: flex;
        gap: 10px;
    }

    .form-row .form-group {
        flex: 1;
    }

    .btn {
        padding: 8px 20px;
        border: none;
        border-radius: 8px;
        font-size: 0.9em;
        cursor: pointer;
        font-weight: 500;
        transition: background 0.15s ease;
    }

    .btn-primary {
        background: var(--primary-color, #03a9f4);
        color: #fff;
    }

    .btn-primary:hover {
        opacity: 0.9;
    }

    .btn-secondary {
        background: transparent;
        color: var(--primary-text-color, #212121);
    }

    .btn-secondary:hover {
        background: rgba(0, 0, 0, 0.05);
    }

    .btn-danger {
        background: var(--error-color, #db4437);
        color: #fff;
    }

    .btn-danger:hover {
        opacity: 0.9;
    }

    .btn-icon {
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        color: var(--primary-text-color, #212121);
        display: flex;
        align-items: center;
    }

    .file-upload {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .file-upload input[type="file"] {
        display: none;
    }

    .file-upload .upload-btn {
        padding: 6px 14px;
        border: 1px solid var(--divider-color, #e0e0e0);
        border-radius: 8px;
        font-size: 0.85em;
        cursor: pointer;
        background: transparent;
        color: var(--primary-text-color, #212121);
    }

    .file-upload .file-name {
        font-size: 0.85em;
        color: var(--secondary-text-color, #727272);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .logo-picker {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        padding: 4px 0;
        -webkit-overflow-scrolling: touch;
    }

    .logo-option {
        flex: 0 0 48px;
        width: 48px;
        height: 48px;
        border-radius: 8px;
        border: 2px solid var(--divider-color, #e0e0e0);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: border-color 0.15s ease;
    }

    .logo-option.selected {
        border-color: var(--primary-color, #03a9f4);
        box-shadow: 0 0 0 1px var(--primary-color, #03a9f4);
    }

    .logo-option img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .scan-section {
        margin-top: 8px;
        padding: 12px;
        border: 1px dashed var(--divider-color, #e0e0e0);
        border-radius: 8px;
        text-align: center;
    }

    .scan-section p {
        margin: 0 0 8px;
        font-size: 0.85em;
        color: var(--secondary-text-color, #727272);
    }

    .scan-result {
        margin-top: 8px;
        padding: 8px;
        background: rgba(76, 175, 80, 0.1);
        border-radius: 6px;
        font-size: 0.85em;
        color: var(--primary-text-color, #212121);
    }

    .loading {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid var(--divider-color, #e0e0e0);
        border-top-color: var(--primary-color, #03a9f4);
        border-radius: 50%;
        animation: spin 0.6s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`,yt=a`
    .detail-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .detail-card {
        background: var(--card-background-color, #fff);
        color: var(--primary-text-color, #212121);
        border-radius: 16px;
        max-width: 400px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .detail-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
    }

    .detail-header h2 {
        margin: 0;
        font-size: 1.15em;
        font-weight: 600;
    }

    .detail-header .actions {
        display: flex;
        gap: 4px;
    }

    .barcode-container {
        padding: 16px;
        text-align: center;
        background: #fff;
    }

    .barcode-container svg,
    .barcode-container canvas {
        max-width: 100%;
        height: auto;
    }

    .detail-info {
        padding: 0 16px 16px;
    }

    .detail-info .info-row {
        display: flex;
        justify-content: space-between;
        padding: 6px 0;
        font-size: 0.9em;
    }

    .detail-info .info-label {
        color: var(--secondary-text-color, #727272);
    }

    .detail-note {
        padding: 0 16px 16px;
        font-size: 0.9em;
        color: var(--secondary-text-color, #727272);
        font-style: italic;
    }

    .detail-images {
        display: flex;
        gap: 8px;
        padding: 0 16px 16px;
    }

    .detail-images img {
        flex: 1;
        max-width: 50%;
        border-radius: 8px;
        object-fit: cover;
        cursor: pointer;
    }
`;function bt(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _t={},mt={},wt={};Object.defineProperty(wt,"__esModule",{value:!0});wt.default=function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e,this.text=r.text||e,this.options=r},Object.defineProperty(mt,"__esModule",{value:!0}),mt.CODE39=void 0;var Et,xt=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Ot=(Et=wt)&&Et.__esModule?Et:{default:Et};var Ct=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=e.toUpperCase(),r.mod43&&(e+=function(t){return At[t]}(function(t){for(var e=0,r=0;r<t.length;r++)e+=Pt(t[r]);return e%=43,e}(e))),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Ot.default),xt(t,[{key:"encode",value:function(){for(var t=St("*"),e=0;e<this.data.length;e++)t+=St(this.data[e])+"0";return{data:t+=St("*"),text:this.text}}},{key:"valid",value:function(){return-1!==this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)}}]),t}(),At=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","*"],$t=[20957,29783,23639,30485,20951,29813,23669,20855,29789,23645,29975,23831,30533,22295,30149,24005,21623,29981,23837,22301,30023,23879,30545,22343,30161,24017,21959,30065,23921,22385,29015,18263,29141,17879,29045,18293,17783,29021,18269,17477,17489,17681,20753,35770];function St(t){return function(t){return $t[t].toString(2)}(Pt(t))}function Pt(t){return At.indexOf(t)}mt.CODE39=Ct;var jt,kt={},Tt={},Mt={},Rt={};function Lt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}Object.defineProperty(Rt,"__esModule",{value:!0});var It=Rt.SET_A=0,Bt=Rt.SET_B=1,Nt=Rt.SET_C=2;Rt.SHIFT=98;var Dt=Rt.START_A=103,Ut=Rt.START_B=104,zt=Rt.START_C=105;Rt.MODULO=103,Rt.STOP=106,Rt.FNC1=207,Rt.SET_BY_CODE=(Lt(jt={},Dt,It),Lt(jt,Ut,Bt),Lt(jt,zt,Nt),jt),Rt.SWAP={101:It,100:Bt,99:Nt},Rt.A_START_CHAR=String.fromCharCode(208),Rt.B_START_CHAR=String.fromCharCode(209),Rt.C_START_CHAR=String.fromCharCode(210),Rt.A_CHARS="[\0-_È-Ï]",Rt.B_CHARS="[ -È-Ï]",Rt.C_CHARS="(Ï*[0-9]{2}Ï*)",Rt.BARS=[11011001100,11001101100,11001100110,10010011e3,10010001100,10001001100,10011001e3,10011000100,10001100100,11001001e3,11001000100,11000100100,10110011100,10011011100,10011001110,10111001100,10011101100,10011100110,11001110010,11001011100,11001001110,11011100100,11001110100,11101101110,11101001100,11100101100,11100100110,11101100100,11100110100,11100110010,11011011e3,11011000110,11000110110,10100011e3,10001011e3,10001000110,10110001e3,10001101e3,10001100010,11010001e3,11000101e3,11000100010,10110111e3,10110001110,10001101110,10111011e3,10111000110,10001110110,11101110110,11010001110,11000101110,11011101e3,11011100010,11011101110,11101011e3,11101000110,11100010110,11101101e3,11101100010,11100011010,11101111010,11001000010,11110001010,1010011e4,10100001100,1001011e4,10010000110,10000101100,10000100110,1011001e4,10110000100,1001101e4,10011000010,10000110100,10000110010,11000010010,1100101e4,11110111010,11000010100,10001111010,10100111100,10010111100,10010011110,10111100100,10011110100,10011110010,11110100100,11110010100,11110010010,11011011110,11011110110,11110110110,10101111e3,10100011110,10001011110,10111101e3,10111100010,11110101e3,11110100010,10111011110,10111101110,11101011110,11110101110,11010000100,1101001e4,11010011100,1100011101011],Object.defineProperty(Mt,"__esModule",{value:!0});var Ht=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Ft=function(t){return t&&t.__esModule?t:{default:t}}(wt),Vt=Rt;var Gt=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.substring(1),r));return n.bytes=e.split("").map(function(t){return t.charCodeAt(0)}),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Ft.default),Ht(t,[{key:"valid",value:function(){return/^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)}},{key:"encode",value:function(){var e=this.bytes,r=e.shift()-105,n=Vt.SET_BY_CODE[r];if(void 0===n)throw new RangeError("The encoding does not start with a start character.");!0===this.shouldEncodeAsEan128()&&e.unshift(Vt.FNC1);var o=t.next(e,1,n);return{text:this.text===this.data?this.text.replace(/[^\x20-\x7E]/g,""):this.text,data:t.getBar(r)+o.result+t.getBar((o.checksum+r)%Vt.MODULO)+t.getBar(Vt.STOP)}}},{key:"shouldEncodeAsEan128",value:function(){var t=this.options.ean128||!1;return"string"==typeof t&&(t="true"===t.toLowerCase()),t}}],[{key:"getBar",value:function(t){return Vt.BARS[t]?Vt.BARS[t].toString():""}},{key:"correctIndex",value:function(t,e){if(e===Vt.SET_A){var r=t.shift();return r<32?r+64:r-32}return e===Vt.SET_B?t.shift()-32:10*(t.shift()-48)+t.shift()-48}},{key:"next",value:function(e,r,n){if(!e.length)return{result:"",checksum:0};var o=void 0,i=void 0;if(e[0]>=200){i=e.shift()-105;var a=Vt.SWAP[i];void 0!==a?o=t.next(e,r+1,a):(n!==Vt.SET_A&&n!==Vt.SET_B||i!==Vt.SHIFT||(e[0]=n===Vt.SET_A?e[0]>95?e[0]-96:e[0]:e[0]<32?e[0]+96:e[0]),o=t.next(e,r+1,n))}else i=t.correctIndex(e,n),o=t.next(e,r+1,n);var s=i*r;return{result:t.getBar(i)+o.result,checksum:s+o.checksum}}}]),t}();Mt.default=Gt;var Xt={};Object.defineProperty(Xt,"__esModule",{value:!0});var Yt=Rt,Jt=function(t){return t.match(new RegExp("^"+Yt.A_CHARS+"*"))[0].length},Wt=function(t){return t.match(new RegExp("^"+Yt.B_CHARS+"*"))[0].length},Kt=function(t){return t.match(new RegExp("^"+Yt.C_CHARS+"*"))[0]};function qt(t,e){var r=e?Yt.A_CHARS:Yt.B_CHARS,n=t.match(new RegExp("^("+r+"+?)(([0-9]{2}){2,})([^0-9]|$)"));if(n)return n[1]+String.fromCharCode(204)+Qt(t.substring(n[1].length));var o=t.match(new RegExp("^"+r+"+"))[0];return o.length===t.length?t:o+String.fromCharCode(e?205:206)+qt(t.substring(o.length),!e)}function Qt(t){var e=Kt(t),r=e.length;if(r===t.length)return t;t=t.substring(r);var n=Jt(t)>=Wt(t);return e+String.fromCharCode(n?206:205)+qt(t,n)}Xt.default=function(t){var e=void 0;if(Kt(t).length>=2)e=Yt.C_START_CHAR+Qt(t);else{var r=Jt(t)>Wt(t);e=(r?Yt.A_START_CHAR:Yt.B_START_CHAR)+qt(t,r)}return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/,function(t,e){return String.fromCharCode(203)+e})},Object.defineProperty(Tt,"__esModule",{value:!0});var Zt=ee(Mt),te=ee(Xt);function ee(t){return t&&t.__esModule?t:{default:t}}function re(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var ne=function(){function t(e,r){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),/^[\x00-\x7F\xC8-\xD3]+$/.test(e))var n=re(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,(0,te.default)(e),r));else n=re(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return re(n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Zt.default),t}();Tt.default=ne;var oe={};Object.defineProperty(oe,"__esModule",{value:!0});var ie=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),ae=function(t){return t&&t.__esModule?t:{default:t}}(Mt),se=Rt;var le=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,se.A_START_CHAR+e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,ae.default),ie(t,[{key:"valid",value:function(){return new RegExp("^"+se.A_CHARS+"+$").test(this.data)}}]),t}();oe.default=le;var ce={};Object.defineProperty(ce,"__esModule",{value:!0});var ue=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),de=function(t){return t&&t.__esModule?t:{default:t}}(Mt),fe=Rt;var he=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,fe.B_START_CHAR+e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,de.default),ue(t,[{key:"valid",value:function(){return new RegExp("^"+fe.B_CHARS+"+$").test(this.data)}}]),t}();ce.default=he;var pe={};Object.defineProperty(pe,"__esModule",{value:!0});var ge=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),ve=function(t){return t&&t.__esModule?t:{default:t}}(Mt),ye=Rt;var be=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,ye.C_START_CHAR+e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,ve.default),ge(t,[{key:"valid",value:function(){return new RegExp("^"+ye.C_CHARS+"+$").test(this.data)}}]),t}();pe.default=be,Object.defineProperty(kt,"__esModule",{value:!0}),kt.CODE128C=kt.CODE128B=kt.CODE128A=kt.CODE128=void 0;var _e=xe(Tt),me=xe(oe),we=xe(ce),Ee=xe(pe);function xe(t){return t&&t.__esModule?t:{default:t}}kt.CODE128=_e.default,kt.CODE128A=me.default,kt.CODE128B=we.default,kt.CODE128C=Ee.default;var Oe={},Ce={},Ae={};Object.defineProperty(Ae,"__esModule",{value:!0}),Ae.SIDE_BIN="101",Ae.MIDDLE_BIN="01010",Ae.BINARIES={L:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],G:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"],R:["1110010","1100110","1101100","1000010","1011100","1001110","1010000","1000100","1001000","1110100"],O:["0001101","0011001","0010011","0111101","0100011","0110001","0101111","0111011","0110111","0001011"],E:["0100111","0110011","0011011","0100001","0011101","0111001","0000101","0010001","0001001","0010111"]},Ae.EAN2_STRUCTURE=["LL","LG","GL","GG"],Ae.EAN5_STRUCTURE=["GGLLL","GLGLL","GLLGL","GLLLG","LGGLL","LLGGL","LLLGG","LGLGL","LGLLG","LLGLG"],Ae.EAN13_STRUCTURE=["LLLLLL","LLGLGG","LLGGLG","LLGGGL","LGLLGG","LGGLLG","LGGGLL","LGLGLG","LGLGGL","LGGLGL"];var $e={},Se={};Object.defineProperty(Se,"__esModule",{value:!0});var Pe=Ae;Se.default=function(t,e,r){var n=t.split("").map(function(t,r){return Pe.BINARIES[e[r]]}).map(function(e,r){return e?e[t[r]]:""});if(r){var o=t.length-1;n=n.map(function(t,e){return e<o?t+r:t})}return n.join("")},Object.defineProperty($e,"__esModule",{value:!0});var je=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),ke=Ae,Te=Re(Se),Me=Re(wt);function Re(t){return t&&t.__esModule?t:{default:t}}var Le=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n.fontSize=!r.flat&&r.fontSize>10*r.width?10*r.width:r.fontSize,n.guardHeight=r.height+n.fontSize/2+r.textMargin,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Me.default),je(t,[{key:"encode",value:function(){return this.options.flat?this.encodeFlat():this.encodeGuarded()}},{key:"leftText",value:function(t,e){return this.text.substr(t,e)}},{key:"leftEncode",value:function(t,e){return(0,Te.default)(t,e)}},{key:"rightText",value:function(t,e){return this.text.substr(t,e)}},{key:"rightEncode",value:function(t,e){return(0,Te.default)(t,e)}},{key:"encodeGuarded",value:function(){var t={fontSize:this.fontSize},e={height:this.guardHeight};return[{data:ke.SIDE_BIN,options:e},{data:this.leftEncode(),text:this.leftText(),options:t},{data:ke.MIDDLE_BIN,options:e},{data:this.rightEncode(),text:this.rightText(),options:t},{data:ke.SIDE_BIN,options:e}]}},{key:"encodeFlat",value:function(){return{data:[ke.SIDE_BIN,this.leftEncode(),ke.MIDDLE_BIN,this.rightEncode(),ke.SIDE_BIN].join(""),text:this.text}}}]),t}();$e.default=Le,Object.defineProperty(Ce,"__esModule",{value:!0});var Ie=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Be=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},Ne=Ae,De=function(t){return t&&t.__esModule?t:{default:t}}($e);var Ue=function(t){var e=t.substr(0,12).split("").map(function(t){return+t}).reduce(function(t,e,r){return r%2?t+3*e:t+e},0);return(10-e%10)%10},ze=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),-1!==e.search(/^[0-9]{12}$/)&&(e+=Ue(e));var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n.lastChar=r.lastChar,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,De.default),Ie(t,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{13}$/)&&+this.data[12]===Ue(this.data)}},{key:"leftText",value:function(){return Be(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"leftText",this).call(this,1,6)}},{key:"leftEncode",value:function(){var e=this.data.substr(1,6),r=Ne.EAN13_STRUCTURE[this.data[0]];return Be(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"leftEncode",this).call(this,e,r)}},{key:"rightText",value:function(){return Be(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"rightText",this).call(this,7,6)}},{key:"rightEncode",value:function(){var e=this.data.substr(7,6);return Be(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"rightEncode",this).call(this,e,"RRRRRR")}},{key:"encodeGuarded",value:function(){var e=Be(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"encodeGuarded",this).call(this);return this.options.displayValue&&(e.unshift({data:"000000000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),this.options.lastChar&&(e.push({data:"00"}),e.push({data:"00000",text:this.options.lastChar,options:{fontSize:this.fontSize}}))),e}}]),t}();Ce.default=ze;var He={};Object.defineProperty(He,"__esModule",{value:!0});var Fe=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Ve=function t(e,r,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,r);if(void 0===o){var i=Object.getPrototypeOf(e);return null===i?void 0:t(i,r,n)}if("value"in o)return o.value;var a=o.get;return void 0!==a?a.call(n):void 0},Ge=function(t){return t&&t.__esModule?t:{default:t}}($e);var Xe=function(t){var e=t.substr(0,7).split("").map(function(t){return+t}).reduce(function(t,e,r){return r%2?t+e:t+3*e},0);return(10-e%10)%10},Ye=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),-1!==e.search(/^[0-9]{7}$/)&&(e+=Xe(e)),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Ge.default),Fe(t,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{8}$/)&&+this.data[7]===Xe(this.data)}},{key:"leftText",value:function(){return Ve(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"leftText",this).call(this,0,4)}},{key:"leftEncode",value:function(){var e=this.data.substr(0,4);return Ve(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"leftEncode",this).call(this,e,"LLLL")}},{key:"rightText",value:function(){return Ve(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"rightText",this).call(this,4,4)}},{key:"rightEncode",value:function(){var e=this.data.substr(4,4);return Ve(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"rightEncode",this).call(this,e,"RRRR")}}]),t}();He.default=Ye;var Je={};Object.defineProperty(Je,"__esModule",{value:!0});var We=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Ke=Ae,qe=Ze(Se),Qe=Ze(wt);function Ze(t){return t&&t.__esModule?t:{default:t}}var tr=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Qe.default),We(t,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{5}$/)}},{key:"encode",value:function(){var t,e,r=Ke.EAN5_STRUCTURE[(t=this.data,e=t.split("").map(function(t){return+t}).reduce(function(t,e,r){return r%2?t+9*e:t+3*e},0),e%10)];return{data:"1011"+(0,qe.default)(this.data,r,"01"),text:this.text}}}]),t}();Je.default=tr;var er={};Object.defineProperty(er,"__esModule",{value:!0});var rr=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),nr=Ae,or=ar(Se),ir=ar(wt);function ar(t){return t&&t.__esModule?t:{default:t}}var sr=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,ir.default),rr(t,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{2}$/)}},{key:"encode",value:function(){var t=nr.EAN2_STRUCTURE[parseInt(this.data)%4];return{data:"1011"+(0,or.default)(this.data,t,"01"),text:this.text}}}]),t}();er.default=sr;var lr={};Object.defineProperty(lr,"__esModule",{value:!0});var cr=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();lr.checksum=pr;var ur=fr(Se),dr=fr(wt);function fr(t){return t&&t.__esModule?t:{default:t}}var hr=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),-1!==e.search(/^[0-9]{11}$/)&&(e+=pr(e));var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n.displayValue=r.displayValue,r.fontSize>10*r.width?n.fontSize=10*r.width:n.fontSize=r.fontSize,n.guardHeight=r.height+n.fontSize/2+r.textMargin,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,dr.default),cr(t,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{12}$/)&&this.data[11]==pr(this.data)}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var t="";return t+="101",t+=(0,ur.default)(this.data.substr(0,6),"LLLLLL"),t+="01010",t+=(0,ur.default)(this.data.substr(6,6),"RRRRRR"),{data:t+="101",text:this.text}}},{key:"guardedEncoding",value:function(){var t=[];return this.displayValue&&t.push({data:"00000000",text:this.text.substr(0,1),options:{textAlign:"left",fontSize:this.fontSize}}),t.push({data:"101"+(0,ur.default)(this.data[0],"L"),options:{height:this.guardHeight}}),t.push({data:(0,ur.default)(this.data.substr(1,5),"LLLLL"),text:this.text.substr(1,5),options:{fontSize:this.fontSize}}),t.push({data:"01010",options:{height:this.guardHeight}}),t.push({data:(0,ur.default)(this.data.substr(6,5),"RRRRR"),text:this.text.substr(6,5),options:{fontSize:this.fontSize}}),t.push({data:(0,ur.default)(this.data[11],"R")+"101",options:{height:this.guardHeight}}),this.displayValue&&t.push({data:"00000000",text:this.text.substr(11,1),options:{textAlign:"right",fontSize:this.fontSize}}),t}}]),t}();function pr(t){var e,r=0;for(e=1;e<11;e+=2)r+=parseInt(t[e]);for(e=0;e<11;e+=2)r+=3*parseInt(t[e]);return(10-r%10)%10}lr.default=hr;var gr={};Object.defineProperty(gr,"__esModule",{value:!0});var vr=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),yr=mr(Se),br=mr(wt),_r=lr;function mr(t){return t&&t.__esModule?t:{default:t}}function wr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var Er=["XX00000XXX","XX10000XXX","XX20000XXX","XXX00000XX","XXXX00000X","XXXXX00005","XXXXX00006","XXXXX00007","XXXXX00008","XXXXX00009"],xr=[["EEEOOO","OOOEEE"],["EEOEOO","OOEOEE"],["EEOOEO","OOEEOE"],["EEOOOE","OOEEEO"],["EOEEOO","OEOOEE"],["EOOEEO","OEEOOE"],["EOOOEE","OEEEOO"],["EOEOEO","OEOEOE"],["EOEOOE","OEOEEO"],["EOOEOE","OEEOEO"]],Or=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=wr(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));if(n.isValid=!1,-1!==e.search(/^[0-9]{6}$/))n.middleDigits=e,n.upcA=Cr(e,"0"),n.text=r.text||""+n.upcA[0]+e+n.upcA[n.upcA.length-1],n.isValid=!0;else{if(-1===e.search(/^[01][0-9]{7}$/))return wr(n);if(n.middleDigits=e.substring(1,e.length-1),n.upcA=Cr(n.middleDigits,e[0]),n.upcA[n.upcA.length-1]!==e[e.length-1])return wr(n);n.isValid=!0}return n.displayValue=r.displayValue,r.fontSize>10*r.width?n.fontSize=10*r.width:n.fontSize=r.fontSize,n.guardHeight=r.height+n.fontSize/2+r.textMargin,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,br.default),vr(t,[{key:"valid",value:function(){return this.isValid}},{key:"encode",value:function(){return this.options.flat?this.flatEncoding():this.guardedEncoding()}},{key:"flatEncoding",value:function(){var t="";return t+="101",t+=this.encodeMiddleDigits(),{data:t+="010101",text:this.text}}},{key:"guardedEncoding",value:function(){var t=[];return this.displayValue&&t.push({data:"00000000",text:this.text[0],options:{textAlign:"left",fontSize:this.fontSize}}),t.push({data:"101",options:{height:this.guardHeight}}),t.push({data:this.encodeMiddleDigits(),text:this.text.substring(1,7),options:{fontSize:this.fontSize}}),t.push({data:"010101",options:{height:this.guardHeight}}),this.displayValue&&t.push({data:"00000000",text:this.text[7],options:{textAlign:"right",fontSize:this.fontSize}}),t}},{key:"encodeMiddleDigits",value:function(){var t=this.upcA[0],e=this.upcA[this.upcA.length-1],r=xr[parseInt(e)][parseInt(t)];return(0,yr.default)(this.middleDigits,r)}}]),t}();function Cr(t,e){for(var r=parseInt(t[t.length-1]),n=Er[r],o="",i=0,a=0;a<n.length;a++){var s=n[a];o+="X"===s?t[i++]:s}return""+(o=""+e+o)+(0,_r.checksum)(o)}gr.default=Or,Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.UPCE=Oe.UPC=Oe.EAN2=Oe.EAN5=Oe.EAN8=Oe.EAN13=void 0;var Ar=Tr(Ce),$r=Tr(He),Sr=Tr(Je),Pr=Tr(er),jr=Tr(lr),kr=Tr(gr);function Tr(t){return t&&t.__esModule?t:{default:t}}Oe.EAN13=Ar.default,Oe.EAN8=$r.default,Oe.EAN5=Sr.default,Oe.EAN2=Pr.default,Oe.UPC=jr.default,Oe.UPCE=kr.default;var Mr={},Rr={},Lr={};Object.defineProperty(Lr,"__esModule",{value:!0}),Lr.START_BIN="1010",Lr.END_BIN="11101",Lr.BINARIES=["00110","10001","01001","11000","00101","10100","01100","00011","10010","01010"],Object.defineProperty(Rr,"__esModule",{value:!0});var Ir=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Br=Lr,Nr=function(t){return t&&t.__esModule?t:{default:t}}(wt);var Dr=function(){function t(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Nr.default),Ir(t,[{key:"valid",value:function(){return-1!==this.data.search(/^([0-9]{2})+$/)}},{key:"encode",value:function(){var t=this,e=this.data.match(/.{2}/g).map(function(e){return t.encodePair(e)}).join("");return{data:Br.START_BIN+e+Br.END_BIN,text:this.text}}},{key:"encodePair",value:function(t){var e=Br.BINARIES[t[1]];return Br.BINARIES[t[0]].split("").map(function(t,r){return("1"===t?"111":"1")+("1"===e[r]?"000":"0")}).join("")}}]),t}();Rr.default=Dr;var Ur={};Object.defineProperty(Ur,"__esModule",{value:!0});var zr=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Hr=function(t){return t&&t.__esModule?t:{default:t}}(Rr);var Fr=function(t){var e=t.substr(0,13).split("").map(function(t){return parseInt(t,10)}).reduce(function(t,e,r){return t+e*(3-r%2*2)},0);return 10*Math.ceil(e/10)-e},Vr=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),-1!==e.search(/^[0-9]{13}$/)&&(e+=Fr(e)),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Hr.default),zr(t,[{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]{14}$/)&&+this.data[13]===Fr(this.data)}}]),t}();Ur.default=Vr,Object.defineProperty(Mr,"__esModule",{value:!0}),Mr.ITF14=Mr.ITF=void 0;var Gr=Yr(Rr),Xr=Yr(Ur);function Yr(t){return t&&t.__esModule?t:{default:t}}Mr.ITF=Gr.default,Mr.ITF14=Xr.default;var Jr={},Wr={};Object.defineProperty(Wr,"__esModule",{value:!0});var Kr=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),qr=function(t){return t&&t.__esModule?t:{default:t}}(wt);var Qr=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,qr.default),Kr(t,[{key:"encode",value:function(){for(var t="110",e=0;e<this.data.length;e++){var r=parseInt(this.data[e]).toString(2);r=Zr(r,4-r.length);for(var n=0;n<r.length;n++)t+="0"==r[n]?"100":"110"}return{data:t+="1001",text:this.text}}},{key:"valid",value:function(){return-1!==this.data.search(/^[0-9]+$/)}}]),t}();function Zr(t,e){for(var r=0;r<e;r++)t="0"+t;return t}Wr.default=Qr;var tn={},en={};Object.defineProperty(en,"__esModule",{value:!0}),en.mod10=function(t){for(var e=0,r=0;r<t.length;r++){var n=parseInt(t[r]);(r+t.length)%2==0?e+=n:e+=2*n%10+Math.floor(2*n/10)}return(10-e%10)%10},en.mod11=function(t){for(var e=0,r=[2,3,4,5,6,7],n=0;n<t.length;n++){var o=parseInt(t[t.length-1-n]);e+=r[n%r.length]*o}return(11-e%11)%11},Object.defineProperty(tn,"__esModule",{value:!0});var rn=function(t){return t&&t.__esModule?t:{default:t}}(Wr),nn=en;var on=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e+(0,nn.mod10)(e),r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,rn.default),t}();tn.default=on;var an={};Object.defineProperty(an,"__esModule",{value:!0});var sn=function(t){return t&&t.__esModule?t:{default:t}}(Wr),ln=en;var cn=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e+(0,ln.mod11)(e),r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,sn.default),t}();an.default=cn;var un={};Object.defineProperty(un,"__esModule",{value:!0});var dn=function(t){return t&&t.__esModule?t:{default:t}}(Wr),fn=en;var hn=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e+=(0,fn.mod10)(e),e+=(0,fn.mod10)(e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,dn.default),t}();un.default=hn;var pn={};Object.defineProperty(pn,"__esModule",{value:!0});var gn=function(t){return t&&t.__esModule?t:{default:t}}(Wr),vn=en;var yn=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e+=(0,vn.mod11)(e),e+=(0,vn.mod10)(e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,gn.default),t}();pn.default=yn,Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.MSI1110=Jr.MSI1010=Jr.MSI11=Jr.MSI10=Jr.MSI=void 0;var bn=xn(Wr),_n=xn(tn),mn=xn(an),wn=xn(un),En=xn(pn);function xn(t){return t&&t.__esModule?t:{default:t}}Jr.MSI=bn.default,Jr.MSI10=_n.default,Jr.MSI11=mn.default,Jr.MSI1010=wn.default,Jr.MSI1110=En.default;var On={};Object.defineProperty(On,"__esModule",{value:!0}),On.pharmacode=void 0;var Cn=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),An=function(t){return t&&t.__esModule?t:{default:t}}(wt);var $n=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));return n.number=parseInt(e,10),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,An.default),Cn(t,[{key:"encode",value:function(){for(var t=this.number,e="";!isNaN(t)&&0!=t;)t%2==0?(e="11100"+e,t=(t-2)/2):(e="100"+e,t=(t-1)/2);return{data:e=e.slice(0,-2),text:this.text}}},{key:"valid",value:function(){return this.number>=3&&this.number<=131070}}]),t}();On.pharmacode=$n;var Sn={};Object.defineProperty(Sn,"__esModule",{value:!0}),Sn.codabar=void 0;var Pn=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),jn=function(t){return t&&t.__esModule?t:{default:t}}(wt);var kn=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),0===e.search(/^[0-9\-\$\:\.\+\/]+$/)&&(e="A"+e+"A");var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e.toUpperCase(),r));return n.text=n.options.text||n.text.replace(/[A-D]/g,""),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,jn.default),Pn(t,[{key:"valid",value:function(){return-1!==this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)}},{key:"encode",value:function(){for(var t=[],e=this.getEncodings(),r=0;r<this.data.length;r++)t.push(e[this.data.charAt(r)]),r!==this.data.length-1&&t.push("0");return{text:this.text,data:t.join("")}}},{key:"getEncodings",value:function(){return{0:"101010011",1:"101011001",2:"101001011",3:"110010101",4:"101101001",5:"110101001",6:"100101011",7:"100101101",8:"100110101",9:"110100101","-":"101001101",$:"101100101",":":"1101011011","/":"1101101011",".":"1101101101","+":"1011011011",A:"1011001001",B:"1001001011",C:"1010010011",D:"1010011001"}}}]),t}();Sn.codabar=kn;var Tn={},Mn={},Rn={};Object.defineProperty(Rn,"__esModule",{value:!0}),Rn.SYMBOLS=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","-","."," ","$","/","+","%","($)","(%)","(/)","(+)","ÿ"],Rn.BINARIES=["100010100","101001000","101000100","101000010","100101000","100100100","100100010","101010000","100010010","100001010","110101000","110100100","110100010","110010100","110010010","110001010","101101000","101100100","101100010","100110100","100011010","101011000","101001100","101000110","100101100","100010110","110110100","110110010","110101100","110100110","110010110","110011010","101101100","101100110","100110110","100111010","100101110","111010100","111010010","111001010","101101110","101110110","110101110","100100110","111011010","111010110","100110010","101011110"],Rn.MULTI_SYMBOLS={"\0":["(%)","U"],"":["($)","A"],"":["($)","B"],"":["($)","C"],"":["($)","D"],"":["($)","E"],"":["($)","F"],"":["($)","G"],"\b":["($)","H"],"\t":["($)","I"],"\n":["($)","J"],"\v":["($)","K"],"\f":["($)","L"],"\r":["($)","M"],"":["($)","N"],"":["($)","O"],"":["($)","P"],"":["($)","Q"],"":["($)","R"],"":["($)","S"],"":["($)","T"],"":["($)","U"],"":["($)","V"],"":["($)","W"],"":["($)","X"],"":["($)","Y"],"":["($)","Z"],"":["(%)","A"],"":["(%)","B"],"":["(%)","C"],"":["(%)","D"],"":["(%)","E"],"!":["(/)","A"],'"':["(/)","B"],"#":["(/)","C"],"&":["(/)","F"],"'":["(/)","G"],"(":["(/)","H"],")":["(/)","I"],"*":["(/)","J"],",":["(/)","L"],":":["(/)","Z"],";":["(%)","F"],"<":["(%)","G"],"=":["(%)","H"],">":["(%)","I"],"?":["(%)","J"],"@":["(%)","V"],"[":["(%)","K"],"\\":["(%)","L"],"]":["(%)","M"],"^":["(%)","N"],_:["(%)","O"],"`":["(%)","W"],a:["(+)","A"],b:["(+)","B"],c:["(+)","C"],d:["(+)","D"],e:["(+)","E"],f:["(+)","F"],g:["(+)","G"],h:["(+)","H"],i:["(+)","I"],j:["(+)","J"],k:["(+)","K"],l:["(+)","L"],m:["(+)","M"],n:["(+)","N"],o:["(+)","O"],p:["(+)","P"],q:["(+)","Q"],r:["(+)","R"],s:["(+)","S"],t:["(+)","T"],u:["(+)","U"],v:["(+)","V"],w:["(+)","W"],x:["(+)","X"],y:["(+)","Y"],z:["(+)","Z"],"{":["(%)","P"],"|":["(%)","Q"],"}":["(%)","R"],"~":["(%)","S"],"":["(%)","T"]},Object.defineProperty(Mn,"__esModule",{value:!0});var Ln=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),In=Rn,Bn=function(t){return t&&t.__esModule?t:{default:t}}(wt);var Nn=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Bn.default),Ln(t,[{key:"valid",value:function(){return/^[0-9A-Z\-. $/+%]+$/.test(this.data)}},{key:"encode",value:function(){var e=this.data.split("").flatMap(function(t){return In.MULTI_SYMBOLS[t]||t}),r=e.map(function(e){return t.getEncoding(e)}).join(""),n=t.checksum(e,20),o=t.checksum(e.concat(n),15);return{text:this.text,data:t.getEncoding("ÿ")+r+t.getEncoding(n)+t.getEncoding(o)+t.getEncoding("ÿ")+"1"}}}],[{key:"getEncoding",value:function(e){return In.BINARIES[t.symbolValue(e)]}},{key:"getSymbol",value:function(t){return In.SYMBOLS[t]}},{key:"symbolValue",value:function(t){return In.SYMBOLS.indexOf(t)}},{key:"checksum",value:function(e,r){var n=e.slice().reverse().reduce(function(e,n,o){var i=o%r+1;return e+t.symbolValue(n)*i},0);return t.getSymbol(n%47)}}]),t}();Mn.default=Nn;var Dn={};Object.defineProperty(Dn,"__esModule",{value:!0});var Un=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),zn=function(t){return t&&t.__esModule?t:{default:t}}(Mn);var Hn=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,zn.default),Un(t,[{key:"valid",value:function(){return/^[\x00-\x7f]+$/.test(this.data)}}]),t}();Dn.default=Hn,Object.defineProperty(Tn,"__esModule",{value:!0}),Tn.CODE93FullASCII=Tn.CODE93=void 0;var Fn=Gn(Mn),Vn=Gn(Dn);function Gn(t){return t&&t.__esModule?t:{default:t}}Tn.CODE93=Fn.default,Tn.CODE93FullASCII=Vn.default;var Xn={};Object.defineProperty(Xn,"__esModule",{value:!0}),Xn.GenericBarcode=void 0;var Yn=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Jn=function(t){return t&&t.__esModule?t:{default:t}}(wt);var Wn=function(){function t(e,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(t,Jn.default),Yn(t,[{key:"encode",value:function(){return{data:"10101010101010101010101010101010101010101",text:this.text}}},{key:"valid",value:function(){return!0}}]),t}();Xn.GenericBarcode=Wn,Object.defineProperty(_t,"__esModule",{value:!0});var Kn=mt,qn=kt,Qn=Oe,Zn=Mr,to=Jr,eo=On,ro=Sn,no=Tn,oo=Xn;_t.default={CODE39:Kn.CODE39,CODE128:qn.CODE128,CODE128A:qn.CODE128A,CODE128B:qn.CODE128B,CODE128C:qn.CODE128C,EAN13:Qn.EAN13,EAN8:Qn.EAN8,EAN5:Qn.EAN5,EAN2:Qn.EAN2,UPC:Qn.UPC,UPCE:Qn.UPCE,ITF14:Zn.ITF14,ITF:Zn.ITF,MSI:to.MSI,MSI10:to.MSI10,MSI11:to.MSI11,MSI1010:to.MSI1010,MSI1110:to.MSI1110,pharmacode:eo.pharmacode,codabar:ro.codabar,CODE93:no.CODE93,CODE93FullASCII:no.CODE93FullASCII,GenericBarcode:oo.GenericBarcode};var io={};Object.defineProperty(io,"__esModule",{value:!0});var ao=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};io.default=function(t,e){return ao({},t,e)};var so={};Object.defineProperty(so,"__esModule",{value:!0}),so.default=function(t){var e=[];return function t(r){if(Array.isArray(r))for(var n=0;n<r.length;n++)t(r[n]);else r.text=r.text||"",r.data=r.data||"",e.push(r)}(t),e};var lo={};Object.defineProperty(lo,"__esModule",{value:!0}),lo.default=function(t){return t.marginTop=t.marginTop||t.margin,t.marginBottom=t.marginBottom||t.margin,t.marginRight=t.marginRight||t.margin,t.marginLeft=t.marginLeft||t.margin,t};var co={},uo={},fo={};Object.defineProperty(fo,"__esModule",{value:!0}),fo.default=function(t){var e=["width","height","textMargin","fontSize","margin","marginTop","marginBottom","marginLeft","marginRight"];for(var r in e)e.hasOwnProperty(r)&&"string"==typeof t[r=e[r]]&&(t[r]=parseInt(t[r],10));"string"==typeof t.displayValue&&(t.displayValue="false"!=t.displayValue);return t};var ho={};Object.defineProperty(ho,"__esModule",{value:!0});var po={width:2,height:100,format:"auto",displayValue:!0,fontOptions:"",font:"monospace",text:void 0,textAlign:"center",textPosition:"bottom",textMargin:2,fontSize:20,background:"#ffffff",lineColor:"#000000",margin:10,marginTop:void 0,marginBottom:void 0,marginLeft:void 0,marginRight:void 0,valid:function(){}};ho.default=po,Object.defineProperty(uo,"__esModule",{value:!0});var go=yo(fo),vo=yo(ho);function yo(t){return t&&t.__esModule?t:{default:t}}uo.default=function(t){var e={};for(var r in vo.default)vo.default.hasOwnProperty(r)&&(t.hasAttribute("jsbarcode-"+r.toLowerCase())&&(e[r]=t.getAttribute("jsbarcode-"+r.toLowerCase())),t.hasAttribute("data-"+r.toLowerCase())&&(e[r]=t.getAttribute("data-"+r.toLowerCase())));return e.value=t.getAttribute("jsbarcode-value")||t.getAttribute("data-value"),e=(0,go.default)(e)};var bo={},_o={},mo={};Object.defineProperty(mo,"__esModule",{value:!0}),mo.getTotalWidthOfEncodings=mo.calculateEncodingAttributes=mo.getBarcodePadding=mo.getEncodingHeight=mo.getMaximumHeightOfEncodings=void 0;var wo=function(t){return t&&t.__esModule?t:{default:t}}(io);function Eo(t,e){return e.height+(e.displayValue&&t.text.length>0?e.fontSize+e.textMargin:0)+e.marginTop+e.marginBottom}function xo(t,e,r){if(r.displayValue&&e<t){if("center"==r.textAlign)return Math.floor((t-e)/2);if("left"==r.textAlign)return 0;if("right"==r.textAlign)return Math.floor(t-e)}return 0}function Oo(t,e,r){var n;if(r)n=r;else{if("undefined"==typeof document)return 0;n=document.createElement("canvas").getContext("2d")}n.font=e.fontOptions+" "+e.fontSize+"px "+e.font;var o=n.measureText(t);return o?o.width:0}mo.getMaximumHeightOfEncodings=function(t){for(var e=0,r=0;r<t.length;r++)t[r].height>e&&(e=t[r].height);return e},mo.getEncodingHeight=Eo,mo.getBarcodePadding=xo,mo.calculateEncodingAttributes=function(t,e,r){for(var n=0;n<t.length;n++){var o,i=t[n],a=(0,wo.default)(e,i.options);o=a.displayValue?Oo(i.text,a,r):0;var s=i.data.length*a.width;i.width=Math.ceil(Math.max(o,s)),i.height=Eo(i,a),i.barcodePadding=xo(o,s,a)}},mo.getTotalWidthOfEncodings=function(t){for(var e=0,r=0;r<t.length;r++)e+=t[r].width;return e},Object.defineProperty(_o,"__esModule",{value:!0});var Co=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),Ao=function(t){return t&&t.__esModule?t:{default:t}}(io),$o=mo;var So=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=e,this.encodings=r,this.options=n}return Co(t,[{key:"render",value:function(){if(!this.canvas.getContext)throw new Error("The browser does not support canvas.");this.prepareCanvas();for(var t=0;t<this.encodings.length;t++){var e=(0,Ao.default)(this.options,this.encodings[t].options);this.drawCanvasBarcode(e,this.encodings[t]),this.drawCanvasText(e,this.encodings[t]),this.moveCanvasDrawing(this.encodings[t])}this.restoreCanvas()}},{key:"prepareCanvas",value:function(){var t=this.canvas.getContext("2d");t.save(),(0,$o.calculateEncodingAttributes)(this.encodings,this.options,t);var e=(0,$o.getTotalWidthOfEncodings)(this.encodings),r=(0,$o.getMaximumHeightOfEncodings)(this.encodings);this.canvas.width=e+this.options.marginLeft+this.options.marginRight,this.canvas.height=r,t.clearRect(0,0,this.canvas.width,this.canvas.height),this.options.background&&(t.fillStyle=this.options.background,t.fillRect(0,0,this.canvas.width,this.canvas.height)),t.translate(this.options.marginLeft,0)}},{key:"drawCanvasBarcode",value:function(t,e){var r,n=this.canvas.getContext("2d"),o=e.data;r="top"==t.textPosition?t.marginTop+t.fontSize+t.textMargin:t.marginTop,n.fillStyle=t.lineColor;for(var i=0;i<o.length;i++){var a=i*t.width+e.barcodePadding;"1"===o[i]?n.fillRect(a,r,t.width,t.height):o[i]&&n.fillRect(a,r,t.width,t.height*o[i])}}},{key:"drawCanvasText",value:function(t,e){var r,n,o=this.canvas.getContext("2d"),i=t.fontOptions+" "+t.fontSize+"px "+t.font;t.displayValue&&(n="top"==t.textPosition?t.marginTop+t.fontSize-t.textMargin:t.height+t.textMargin+t.marginTop+t.fontSize,o.font=i,"left"==t.textAlign||e.barcodePadding>0?(r=0,o.textAlign="left"):"right"==t.textAlign?(r=e.width-1,o.textAlign="right"):(r=e.width/2,o.textAlign="center"),o.fillText(e.text,r,n))}},{key:"moveCanvasDrawing",value:function(t){this.canvas.getContext("2d").translate(t.width,0)}},{key:"restoreCanvas",value:function(){this.canvas.getContext("2d").restore()}}]),t}();_o.default=So;var Po={};Object.defineProperty(Po,"__esModule",{value:!0});var jo=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),ko=function(t){return t&&t.__esModule?t:{default:t}}(io),To=mo;var Mo="http://www.w3.org/2000/svg",Ro=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.svg=e,this.encodings=r,this.options=n,this.document=n.xmlDocument||document}return jo(t,[{key:"render",value:function(){var t=this.options.marginLeft;this.prepareSVG();for(var e=0;e<this.encodings.length;e++){var r=this.encodings[e],n=(0,ko.default)(this.options,r.options),o=this.createGroup(t,n.marginTop,this.svg);this.setGroupOptions(o,n),this.drawSvgBarcode(o,n,r),this.drawSVGText(o,n,r),t+=r.width}}},{key:"prepareSVG",value:function(){for(;this.svg.firstChild;)this.svg.removeChild(this.svg.firstChild);(0,To.calculateEncodingAttributes)(this.encodings,this.options);var t=(0,To.getTotalWidthOfEncodings)(this.encodings),e=(0,To.getMaximumHeightOfEncodings)(this.encodings),r=t+this.options.marginLeft+this.options.marginRight;this.setSvgAttributes(r,e),this.options.background&&this.drawRect(0,0,r,e,this.svg).setAttribute("fill",this.options.background)}},{key:"drawSvgBarcode",value:function(t,e,r){var n,o=r.data;n="top"==e.textPosition?e.fontSize+e.textMargin:0;for(var i=0,a=0,s=0;s<o.length;s++)a=s*e.width+r.barcodePadding,"1"===o[s]?i++:i>0&&(this.drawRect(a-e.width*i,n,e.width*i,e.height,t),i=0);i>0&&this.drawRect(a-e.width*(i-1),n,e.width*i,e.height,t)}},{key:"drawSVGText",value:function(t,e,r){var n,o,i=this.document.createElementNS(Mo,"text");e.displayValue&&(i.setAttribute("font-family",e.font),i.setAttribute("font-size",e.fontSize),e.fontOptions.includes("bold")&&i.setAttribute("font-weight","bold"),e.fontOptions.includes("italic")&&i.setAttribute("font-style","italic"),o="top"==e.textPosition?e.fontSize-e.textMargin:e.height+e.textMargin+e.fontSize,"left"==e.textAlign||r.barcodePadding>0?(n=0,i.setAttribute("text-anchor","start")):"right"==e.textAlign?(n=r.width-1,i.setAttribute("text-anchor","end")):(n=r.width/2,i.setAttribute("text-anchor","middle")),i.setAttribute("x",n),i.setAttribute("y",o),i.appendChild(this.document.createTextNode(r.text)),t.appendChild(i))}},{key:"setSvgAttributes",value:function(t,e){var r=this.svg;r.setAttribute("width",t+"px"),r.setAttribute("height",e+"px"),r.setAttribute("x","0px"),r.setAttribute("y","0px"),r.setAttribute("viewBox","0 0 "+t+" "+e),r.setAttribute("xmlns",Mo),r.setAttribute("version","1.1")}},{key:"createGroup",value:function(t,e,r){var n=this.document.createElementNS(Mo,"g");return n.setAttribute("transform","translate("+t+", "+e+")"),r.appendChild(n),n}},{key:"setGroupOptions",value:function(t,e){t.setAttribute("fill",e.lineColor)}},{key:"drawRect",value:function(t,e,r,n,o){var i=this.document.createElementNS(Mo,"rect");return i.setAttribute("x",t),i.setAttribute("y",e),i.setAttribute("width",r),i.setAttribute("height",n),o.appendChild(i),i}}]),t}();Po.default=Ro;var Lo={};Object.defineProperty(Lo,"__esModule",{value:!0});var Io=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var Bo=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.object=e,this.encodings=r,this.options=n}return Io(t,[{key:"render",value:function(){this.object.encodings=this.encodings}}]),t}();Lo.default=Bo,Object.defineProperty(bo,"__esModule",{value:!0});var No=zo(_o),Do=zo(Po),Uo=zo(Lo);function zo(t){return t&&t.__esModule?t:{default:t}}bo.default={CanvasRenderer:No.default,SVGRenderer:Do.default,ObjectRenderer:Uo.default};var Ho={};function Fo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Vo(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function Go(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(Ho,"__esModule",{value:!0});var Xo=function(){function t(e,r){Fo(this,t);var n=Vo(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.name="InvalidInputException",n.symbology=e,n.input=r,n.message='"'+n.input+'" is not a valid input for '+n.symbology,n}return Go(t,Error),t}(),Yo=function(){function t(){Fo(this,t);var e=Vo(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.name="InvalidElementException",e.message="Not supported type to render on",e}return Go(t,Error),t}(),Jo=function(){function t(){Fo(this,t);var e=Vo(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.name="NoElementException",e.message="No element to render on.",e}return Go(t,Error),t}();Ho.InvalidInputException=Xo,Ho.InvalidElementException=Yo,Ho.NoElementException=Jo,Object.defineProperty(co,"__esModule",{value:!0});var Wo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ko=Zo(uo),qo=Zo(bo),Qo=Ho;function Zo(t){return t&&t.__esModule?t:{default:t}}function ti(t){if("string"==typeof t)return function(t){var e=document.querySelectorAll(t);if(0===e.length)return;for(var r=[],n=0;n<e.length;n++)r.push(ti(e[n]));return r}(t);if(Array.isArray(t)){for(var e=[],r=0;r<t.length;r++)e.push(ti(t[r]));return e}if("undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLImageElement)return function(t){var e=document.createElement("canvas");return{element:e,options:(0,Ko.default)(t),renderer:qo.default.CanvasRenderer,afterRender:function(){t.setAttribute("src",e.toDataURL())}}}(t);if(t&&t.nodeName&&"svg"===t.nodeName.toLowerCase()||"undefined"!=typeof SVGElement&&t instanceof SVGElement)return{element:t,options:(0,Ko.default)(t),renderer:qo.default.SVGRenderer};if("undefined"!=typeof HTMLCanvasElement&&t instanceof HTMLCanvasElement)return{element:t,options:(0,Ko.default)(t),renderer:qo.default.CanvasRenderer};if(t&&t.getContext)return{element:t,renderer:qo.default.CanvasRenderer};if(t&&"object"===(void 0===t?"undefined":Wo(t))&&!t.nodeName)return{element:t,renderer:qo.default.ObjectRenderer};throw new Qo.InvalidElementException}co.default=ti;var ei={};Object.defineProperty(ei,"__esModule",{value:!0});var ri=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();var ni=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.api=e}return ri(t,[{key:"handleCatch",value:function(t){if("InvalidInputException"!==t.name)throw t;if(this.api._options.valid===this.api._defaults.valid)throw t.message;this.api._options.valid(!1),this.api.render=function(){}}},{key:"wrapBarcodeCall",value:function(t){try{var e=t.apply(void 0,arguments);return this.api._options.valid(!0),e}catch(t){return this.handleCatch(t),this.api}}}]),t}();ei.default=ni;var oi=hi(_t),ii=hi(io),ai=hi(so),si=hi(lo),li=hi(co),ci=hi(fo),ui=hi(ei),di=Ho,fi=hi(ho);function hi(t){return t&&t.__esModule?t:{default:t}}var pi=function(){},gi=function(t,e,r){var n=new pi;if(void 0===t)throw Error("No element to render on was provided.");return n._renderProperties=(0,li.default)(t),n._encodings=[],n._options=fi.default,n._errorHandler=new ui.default(n),void 0!==e&&((r=r||{}).format||(r.format=_i()),n.options(r)[r.format](e,r).render()),n};for(var vi in gi.getModule=function(t){return oi.default[t]},oi.default)oi.default.hasOwnProperty(vi)&&yi(oi.default,vi);function yi(t,e){pi.prototype[e]=pi.prototype[e.toUpperCase()]=pi.prototype[e.toLowerCase()]=function(r,n){var o=this;return o._errorHandler.wrapBarcodeCall(function(){n.text=void 0===n.text?void 0:""+n.text;var i=(0,ii.default)(o._options,n);i=(0,ci.default)(i);var a=t[e],s=bi(r,a,i);return o._encodings.push(s),o})}}function bi(t,e,r){var n=new e(t=""+t,r);if(!n.valid())throw new di.InvalidInputException(n.constructor.name,t);var o=n.encode();o=(0,ai.default)(o);for(var i=0;i<o.length;i++)o[i].options=(0,ii.default)(r,o[i].options);return o}function _i(){return oi.default.CODE128?"CODE128":Object.keys(oi.default)[0]}function mi(t,e,r){e=(0,ai.default)(e);for(var n=0;n<e.length;n++)e[n].options=(0,ii.default)(r,e[n].options),(0,si.default)(e[n].options);(0,si.default)(r),new(0,t.renderer)(t.element,e,r).render(),t.afterRender&&t.afterRender()}pi.prototype.options=function(t){return this._options=(0,ii.default)(this._options,t),this},pi.prototype.blank=function(t){var e=new Array(t+1).join("0");return this._encodings.push({data:e}),this},pi.prototype.init=function(){var t;if(this._renderProperties)for(var e in Array.isArray(this._renderProperties)||(this._renderProperties=[this._renderProperties]),this._renderProperties){t=this._renderProperties[e];var r=(0,ii.default)(this._options,t.options);"auto"==r.format&&(r.format=_i()),this._errorHandler.wrapBarcodeCall(function(){var e=bi(r.value,oi.default[r.format.toUpperCase()],r);mi(t,e,r)})}},pi.prototype.render=function(){if(!this._renderProperties)throw new di.NoElementException;if(Array.isArray(this._renderProperties))for(var t=0;t<this._renderProperties.length;t++)mi(this._renderProperties[t],this._encodings,this._options);else mi(this._renderProperties,this._encodings,this._options);return this},pi.prototype._defaults=fi.default,"undefined"!=typeof window&&(window.JsBarcode=gi),"undefined"!=typeof jQuery&&(jQuery.fn.JsBarcode=function(t,e){var r=[];return jQuery(this).each(function(){r.push(this)}),gi(r,t,e)});var wi=bt(gi),Ei={},xi={},Oi={};let Ci;const Ai=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Oi.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return 4*t+17},Oi.getSymbolTotalCodewords=function(t){return Ai[t]},Oi.getBCHDigit=function(t){let e=0;for(;0!==t;)e++,t>>>=1;return e},Oi.setToSJISFunction=function(t){if("function"!=typeof t)throw new Error('"toSJISFunc" is not a valid function.');Ci=t},Oi.isKanjiModeEnabled=function(){return void 0!==Ci},Oi.toSJIS=function(t){return Ci(t)};var $i,Si={};function Pi(){this.buffer=[],this.length=0}($i=Si).L={bit:1},$i.M={bit:0},$i.Q={bit:3},$i.H={bit:2},$i.isValid=function(t){return t&&void 0!==t.bit&&t.bit>=0&&t.bit<4},$i.from=function(t,e){if($i.isValid(t))return t;try{return function(t){if("string"!=typeof t)throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return $i.L;case"m":case"medium":return $i.M;case"q":case"quartile":return $i.Q;case"h":case"high":return $i.H;default:throw new Error("Unknown EC Level: "+t)}}(t)}catch(t){return e}},Pi.prototype={get:function(t){const e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(let r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){const e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var ji=Pi;function ki(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}ki.prototype.set=function(t,e,r,n){const o=t*this.size+e;this.data[o]=r,n&&(this.reservedBit[o]=!0)},ki.prototype.get=function(t,e){return this.data[t*this.size+e]},ki.prototype.xor=function(t,e,r){this.data[t*this.size+e]^=r},ki.prototype.isReserved=function(t,e){return this.reservedBit[t*this.size+e]};var Ti=ki,Mi={};!function(t){const e=Oi.getSymbolSize;t.getRowColCoords=function(t){if(1===t)return[];const r=Math.floor(t/7)+2,n=e(t),o=145===n?26:2*Math.ceil((n-13)/(2*r-2)),i=[n-7];for(let t=1;t<r-1;t++)i[t]=i[t-1]-o;return i.push(6),i.reverse()},t.getPositions=function(e){const r=[],n=t.getRowColCoords(e),o=n.length;for(let t=0;t<o;t++)for(let e=0;e<o;e++)0===t&&0===e||0===t&&e===o-1||t===o-1&&0===e||r.push([n[t],n[e]]);return r}}(Mi);var Ri={};const Li=Oi.getSymbolSize;Ri.getPositions=function(t){const e=Li(t);return[[0,0],[e-7,0],[0,e-7]]};var Ii={};!function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e=3,r=3,n=40,o=10;function i(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}}t.isValid=function(t){return null!=t&&""!==t&&!isNaN(t)&&t>=0&&t<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(t){const r=t.size;let n=0,o=0,i=0,a=null,s=null;for(let l=0;l<r;l++){o=i=0,a=s=null;for(let c=0;c<r;c++){let r=t.get(l,c);r===a?o++:(o>=5&&(n+=e+(o-5)),a=r,o=1),r=t.get(c,l),r===s?i++:(i>=5&&(n+=e+(i-5)),s=r,i=1)}o>=5&&(n+=e+(o-5)),i>=5&&(n+=e+(i-5))}return n},t.getPenaltyN2=function(t){const e=t.size;let n=0;for(let r=0;r<e-1;r++)for(let o=0;o<e-1;o++){const e=t.get(r,o)+t.get(r,o+1)+t.get(r+1,o)+t.get(r+1,o+1);4!==e&&0!==e||n++}return n*r},t.getPenaltyN3=function(t){const e=t.size;let r=0,o=0,i=0;for(let n=0;n<e;n++){o=i=0;for(let a=0;a<e;a++)o=o<<1&2047|t.get(n,a),a>=10&&(1488===o||93===o)&&r++,i=i<<1&2047|t.get(a,n),a>=10&&(1488===i||93===i)&&r++}return r*n},t.getPenaltyN4=function(t){let e=0;const r=t.data.length;for(let n=0;n<r;n++)e+=t.data[n];return Math.abs(Math.ceil(100*e/r/5)-10)*o},t.applyMask=function(t,e){const r=e.size;for(let n=0;n<r;n++)for(let o=0;o<r;o++)e.isReserved(o,n)||e.xor(o,n,i(t,o,n))},t.getBestMask=function(e,r){const n=Object.keys(t.Patterns).length;let o=0,i=1/0;for(let a=0;a<n;a++){r(a),t.applyMask(a,e);const n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),n<i&&(i=n,o=a)}return o}}(Ii);var Bi={};const Ni=Si,Di=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Ui=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Bi.getBlocksCount=function(t,e){switch(e){case Ni.L:return Di[4*(t-1)+0];case Ni.M:return Di[4*(t-1)+1];case Ni.Q:return Di[4*(t-1)+2];case Ni.H:return Di[4*(t-1)+3];default:return}},Bi.getTotalCodewordsCount=function(t,e){switch(e){case Ni.L:return Ui[4*(t-1)+0];case Ni.M:return Ui[4*(t-1)+1];case Ni.Q:return Ui[4*(t-1)+2];case Ni.H:return Ui[4*(t-1)+3];default:return}};var zi={},Hi={};const Fi=new Uint8Array(512),Vi=new Uint8Array(256);!function(){let t=1;for(let e=0;e<255;e++)Fi[e]=t,Vi[t]=e,t<<=1,256&t&&(t^=285);for(let t=255;t<512;t++)Fi[t]=Fi[t-255]}(),Hi.log=function(t){if(t<1)throw new Error("log("+t+")");return Vi[t]},Hi.exp=function(t){return Fi[t]},Hi.mul=function(t,e){return 0===t||0===e?0:Fi[Vi[t]+Vi[e]]},function(t){const e=Hi;t.mul=function(t,r){const n=new Uint8Array(t.length+r.length-1);for(let o=0;o<t.length;o++)for(let i=0;i<r.length;i++)n[o+i]^=e.mul(t[o],r[i]);return n},t.mod=function(t,r){let n=new Uint8Array(t);for(;n.length-r.length>=0;){const t=n[0];for(let o=0;o<r.length;o++)n[o]^=e.mul(r[o],t);let o=0;for(;o<n.length&&0===n[o];)o++;n=n.slice(o)}return n},t.generateECPolynomial=function(r){let n=new Uint8Array([1]);for(let o=0;o<r;o++)n=t.mul(n,new Uint8Array([1,e.exp(o)]));return n}}(zi);const Gi=zi;function Xi(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}Xi.prototype.initialize=function(t){this.degree=t,this.genPoly=Gi.generateECPolynomial(this.degree)},Xi.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const e=new Uint8Array(t.length+this.degree);e.set(t);const r=Gi.mod(e,this.genPoly),n=this.degree-r.length;if(n>0){const t=new Uint8Array(this.degree);return t.set(r,n),t}return r};var Yi=Xi,Ji={},Wi={},Ki={isValid:function(t){return!isNaN(t)&&t>=1&&t<=40}},qi={};const Qi="[0-9]+";let Zi="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Zi=Zi.replace(/u/g,"\\u");const ta="(?:(?![A-Z0-9 $%*+\\-./:]|"+Zi+")(?:.|[\r\n]))+";qi.KANJI=new RegExp(Zi,"g"),qi.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),qi.BYTE=new RegExp(ta,"g"),qi.NUMERIC=new RegExp(Qi,"g"),qi.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g");const ea=new RegExp("^"+Zi+"$"),ra=new RegExp("^"+Qi+"$"),na=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");qi.testKanji=function(t){return ea.test(t)},qi.testNumeric=function(t){return ra.test(t)},qi.testAlphanumeric=function(t){return na.test(t)},function(t){const e=Ki,r=qi;t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(t,r){if(!t.ccBits)throw new Error("Invalid mode: "+t);if(!e.isValid(r))throw new Error("Invalid version: "+r);return r>=1&&r<10?t.ccBits[0]:r<27?t.ccBits[1]:t.ccBits[2]},t.getBestModeForData=function(e){return r.testNumeric(e)?t.NUMERIC:r.testAlphanumeric(e)?t.ALPHANUMERIC:r.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(t){if(t&&t.id)return t.id;throw new Error("Invalid mode")},t.isValid=function(t){return t&&t.bit&&t.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw new Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+e)}}(e)}catch(t){return r}}}(Wi),function(t){const e=Oi,r=Bi,n=Si,o=Wi,i=Ki,a=e.getBCHDigit(7973);function s(t,e){return o.getCharCountIndicator(t,e)+4}function l(t,e){let r=0;return t.forEach(function(t){const n=s(t.mode,e);r+=n+t.getBitsLength()}),r}t.from=function(t,e){return i.isValid(t)?parseInt(t,10):e},t.getCapacity=function(t,n,a){if(!i.isValid(t))throw new Error("Invalid QR Code version");void 0===a&&(a=o.BYTE);const l=8*(e.getSymbolTotalCodewords(t)-r.getTotalCodewordsCount(t,n));if(a===o.MIXED)return l;const c=l-s(a,t);switch(a){case o.NUMERIC:return Math.floor(c/10*3);case o.ALPHANUMERIC:return Math.floor(c/11*2);case o.KANJI:return Math.floor(c/13);case o.BYTE:default:return Math.floor(c/8)}},t.getBestVersionForData=function(e,r){let i;const a=n.from(r,n.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let n=1;n<=40;n++)if(l(e,n)<=t.getCapacity(n,r,o.MIXED))return n}(e,a);if(0===e.length)return 1;i=e[0]}else i=e;return function(e,r,n){for(let o=1;o<=40;o++)if(r<=t.getCapacity(o,n,e))return o}(i.mode,i.getLength(),a)},t.getEncodedBits=function(t){if(!i.isValid(t)||t<7)throw new Error("Invalid QR Code version");let r=t<<12;for(;e.getBCHDigit(r)-a>=0;)r^=7973<<e.getBCHDigit(r)-a;return t<<12|r}}(Ji);var oa={};const ia=Oi,aa=ia.getBCHDigit(1335);oa.getEncodedBits=function(t,e){const r=t.bit<<3|e;let n=r<<10;for(;ia.getBCHDigit(n)-aa>=0;)n^=1335<<ia.getBCHDigit(n)-aa;return 21522^(r<<10|n)};var sa={};const la=Wi;function ca(t){this.mode=la.NUMERIC,this.data=t.toString()}ca.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},ca.prototype.getLength=function(){return this.data.length},ca.prototype.getBitsLength=function(){return ca.getBitsLength(this.data.length)},ca.prototype.write=function(t){let e,r,n;for(e=0;e+3<=this.data.length;e+=3)r=this.data.substr(e,3),n=parseInt(r,10),t.put(n,10);const o=this.data.length-e;o>0&&(r=this.data.substr(e),n=parseInt(r,10),t.put(n,3*o+1))};var ua=ca;const da=Wi,fa=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function ha(t){this.mode=da.ALPHANUMERIC,this.data=t}ha.getBitsLength=function(t){return 11*Math.floor(t/2)+t%2*6},ha.prototype.getLength=function(){return this.data.length},ha.prototype.getBitsLength=function(){return ha.getBitsLength(this.data.length)},ha.prototype.write=function(t){let e;for(e=0;e+2<=this.data.length;e+=2){let r=45*fa.indexOf(this.data[e]);r+=fa.indexOf(this.data[e+1]),t.put(r,11)}this.data.length%2&&t.put(fa.indexOf(this.data[e]),6)};var pa=ha;const ga=Wi;function va(t){this.mode=ga.BYTE,this.data="string"==typeof t?(new TextEncoder).encode(t):new Uint8Array(t)}va.getBitsLength=function(t){return 8*t},va.prototype.getLength=function(){return this.data.length},va.prototype.getBitsLength=function(){return va.getBitsLength(this.data.length)},va.prototype.write=function(t){for(let e=0,r=this.data.length;e<r;e++)t.put(this.data[e],8)};var ya=va;const ba=Wi,_a=Oi;function ma(t){this.mode=ba.KANJI,this.data=t}ma.getBitsLength=function(t){return 13*t},ma.prototype.getLength=function(){return this.data.length},ma.prototype.getBitsLength=function(){return ma.getBitsLength(this.data.length)},ma.prototype.write=function(t){let e;for(e=0;e<this.data.length;e++){let r=_a.toSJIS(this.data[e]);if(r>=33088&&r<=40956)r-=33088;else{if(!(r>=57408&&r<=60351))throw new Error("Invalid SJIS character: "+this.data[e]+"\nMake sure your charset is UTF-8");r-=49472}r=192*(r>>>8&255)+(255&r),t.put(r,13)}};var wa=ma,Ea={exports:{}};!function(t){var e={single_source_shortest_paths:function(t,r,n){var o={},i={};i[r]=0;var a,s,l,c,u,d,f,h=e.PriorityQueue.make();for(h.push(r,0);!h.empty();)for(l in s=(a=h.pop()).value,c=a.cost,u=t[s]||{})u.hasOwnProperty(l)&&(d=c+u[l],f=i[l],(void 0===i[l]||f>d)&&(i[l]=d,h.push(l,d),o[l]=s));if(void 0!==n&&void 0===i[n]){var p=["Could not find a path from ",r," to ",n,"."].join("");throw new Error(p)}return o},extract_shortest_path_from_predecessor_list:function(t,e){for(var r=[],n=e;n;)r.push(n),t[n],n=t[n];return r.reverse(),r},find_path:function(t,r,n){var o=e.single_source_shortest_paths(t,r,n);return e.extract_shortest_path_from_predecessor_list(o,n)},PriorityQueue:{make:function(t){var r,n=e.PriorityQueue,o={};for(r in t=t||{},n)n.hasOwnProperty(r)&&(o[r]=n[r]);return o.queue=[],o.sorter=t.sorter||n.default_sorter,o},default_sorter:function(t,e){return t.cost-e.cost},push:function(t,e){var r={value:t,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};t.exports=e}(Ea);var xa=Ea.exports;!function(t){const e=Wi,r=ua,n=pa,o=ya,i=wa,a=qi,s=Oi,l=xa;function c(t){return unescape(encodeURIComponent(t)).length}function u(t,e,r){const n=[];let o;for(;null!==(o=t.exec(r));)n.push({data:o[0],index:o.index,mode:e,length:o[0].length});return n}function d(t){const r=u(a.NUMERIC,e.NUMERIC,t),n=u(a.ALPHANUMERIC,e.ALPHANUMERIC,t);let o,i;s.isKanjiModeEnabled()?(o=u(a.BYTE,e.BYTE,t),i=u(a.KANJI,e.KANJI,t)):(o=u(a.BYTE_KANJI,e.BYTE,t),i=[]);return r.concat(n,o,i).sort(function(t,e){return t.index-e.index}).map(function(t){return{data:t.data,mode:t.mode,length:t.length}})}function f(t,a){switch(a){case e.NUMERIC:return r.getBitsLength(t);case e.ALPHANUMERIC:return n.getBitsLength(t);case e.KANJI:return i.getBitsLength(t);case e.BYTE:return o.getBitsLength(t)}}function h(t,a){let l;const c=e.getBestModeForData(t);if(l=e.from(a,c),l!==e.BYTE&&l.bit<c.bit)throw new Error('"'+t+'" cannot be encoded with mode '+e.toString(l)+".\n Suggested mode is: "+e.toString(c));switch(l!==e.KANJI||s.isKanjiModeEnabled()||(l=e.BYTE),l){case e.NUMERIC:return new r(t);case e.ALPHANUMERIC:return new n(t);case e.KANJI:return new i(t);case e.BYTE:return new o(t)}}t.fromArray=function(t){return t.reduce(function(t,e){return"string"==typeof e?t.push(h(e,null)):e.data&&t.push(h(e.data,e.mode)),t},[])},t.fromString=function(r,n){const o=function(t){const r=[];for(let n=0;n<t.length;n++){const o=t[n];switch(o.mode){case e.NUMERIC:r.push([o,{data:o.data,mode:e.ALPHANUMERIC,length:o.length},{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.ALPHANUMERIC:r.push([o,{data:o.data,mode:e.BYTE,length:o.length}]);break;case e.KANJI:r.push([o,{data:o.data,mode:e.BYTE,length:c(o.data)}]);break;case e.BYTE:r.push([{data:o.data,mode:e.BYTE,length:c(o.data)}])}}return r}(d(r,s.isKanjiModeEnabled())),i=function(t,r){const n={},o={start:{}};let i=["start"];for(let a=0;a<t.length;a++){const s=t[a],l=[];for(let t=0;t<s.length;t++){const c=s[t],u=""+a+t;l.push(u),n[u]={node:c,lastCount:0},o[u]={};for(let t=0;t<i.length;t++){const a=i[t];n[a]&&n[a].node.mode===c.mode?(o[a][u]=f(n[a].lastCount+c.length,c.mode)-f(n[a].lastCount,c.mode),n[a].lastCount+=c.length):(n[a]&&(n[a].lastCount=c.length),o[a][u]=f(c.length,c.mode)+4+e.getCharCountIndicator(c.mode,r))}}i=l}for(let t=0;t<i.length;t++)o[i[t]].end=0;return{map:o,table:n}}(o,n),a=l.find_path(i.map,"start","end"),u=[];for(let t=1;t<a.length-1;t++)u.push(i.table[a[t]].node);return t.fromArray(function(t){return t.reduce(function(t,e){const r=t.length-1>=0?t[t.length-1]:null;return r&&r.mode===e.mode?(t[t.length-1].data+=e.data,t):(t.push(e),t)},[])}(u))},t.rawSplit=function(e){return t.fromArray(d(e,s.isKanjiModeEnabled()))}}(sa);const Oa=Oi,Ca=Si,Aa=ji,$a=Ti,Sa=Mi,Pa=Ri,ja=Ii,ka=Bi,Ta=Yi,Ma=Ji,Ra=oa,La=Wi,Ia=sa;function Ba(t,e,r){const n=t.size,o=Ra.getEncodedBits(e,r);let i,a;for(i=0;i<15;i++)a=1==(o>>i&1),i<6?t.set(i,8,a,!0):i<8?t.set(i+1,8,a,!0):t.set(n-15+i,8,a,!0),i<8?t.set(8,n-i-1,a,!0):i<9?t.set(8,15-i-1+1,a,!0):t.set(8,15-i-1,a,!0);t.set(n-8,8,1,!0)}function Na(t,e,r){const n=new Aa;r.forEach(function(e){n.put(e.mode.bit,4),n.put(e.getLength(),La.getCharCountIndicator(e.mode,t)),e.write(n)});const o=8*(Oa.getSymbolTotalCodewords(t)-ka.getTotalCodewordsCount(t,e));for(n.getLengthInBits()+4<=o&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);const i=(o-n.getLengthInBits())/8;for(let t=0;t<i;t++)n.put(t%2?17:236,8);return function(t,e,r){const n=Oa.getSymbolTotalCodewords(e),o=ka.getTotalCodewordsCount(e,r),i=n-o,a=ka.getBlocksCount(e,r),s=n%a,l=a-s,c=Math.floor(n/a),u=Math.floor(i/a),d=u+1,f=c-u,h=new Ta(f);let p=0;const g=new Array(a),v=new Array(a);let y=0;const b=new Uint8Array(t.buffer);for(let t=0;t<a;t++){const e=t<l?u:d;g[t]=b.slice(p,p+e),v[t]=h.encode(g[t]),p+=e,y=Math.max(y,e)}const _=new Uint8Array(n);let m,w,E=0;for(m=0;m<y;m++)for(w=0;w<a;w++)m<g[w].length&&(_[E++]=g[w][m]);for(m=0;m<f;m++)for(w=0;w<a;w++)_[E++]=v[w][m];return _}(n,t,e)}function Da(t,e,r,n){let o;if(Array.isArray(t))o=Ia.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let n=e;if(!n){const e=Ia.rawSplit(t);n=Ma.getBestVersionForData(e,r)}o=Ia.fromString(t,n||40)}}const i=Ma.getBestVersionForData(o,r);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(e){if(e<i)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+i+".\n")}else e=i;const a=Na(e,r,o),s=Oa.getSymbolSize(e),l=new $a(s);return function(t,e){const r=t.size,n=Pa.getPositions(e);for(let e=0;e<n.length;e++){const o=n[e][0],i=n[e][1];for(let e=-1;e<=7;e++)if(!(o+e<=-1||r<=o+e))for(let n=-1;n<=7;n++)i+n<=-1||r<=i+n||(e>=0&&e<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===e||6===e)||e>=2&&e<=4&&n>=2&&n<=4?t.set(o+e,i+n,!0,!0):t.set(o+e,i+n,!1,!0))}}(l,e),function(t){const e=t.size;for(let r=8;r<e-8;r++){const e=r%2==0;t.set(r,6,e,!0),t.set(6,r,e,!0)}}(l),function(t,e){const r=Sa.getPositions(e);for(let e=0;e<r.length;e++){const n=r[e][0],o=r[e][1];for(let e=-2;e<=2;e++)for(let r=-2;r<=2;r++)-2===e||2===e||-2===r||2===r||0===e&&0===r?t.set(n+e,o+r,!0,!0):t.set(n+e,o+r,!1,!0)}}(l,e),Ba(l,r,0),e>=7&&function(t,e){const r=t.size,n=Ma.getEncodedBits(e);let o,i,a;for(let e=0;e<18;e++)o=Math.floor(e/3),i=e%3+r-8-3,a=1==(n>>e&1),t.set(o,i,a,!0),t.set(i,o,a,!0)}(l,e),function(t,e){const r=t.size;let n=-1,o=r-1,i=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!t.isReserved(o,s-r)){let n=!1;a<e.length&&(n=1==(e[a]>>>i&1)),t.set(o,s-r,n),i--,-1===i&&(a++,i=7)}if(o+=n,o<0||r<=o){o-=n,n=-n;break}}}(l,a),isNaN(n)&&(n=ja.getBestMask(l,Ba.bind(null,l,r))),ja.applyMask(n,l),Ba(l,r,n),{modules:l,version:e,errorCorrectionLevel:r,maskPattern:n,segments:o}}xi.create=function(t,e){if(void 0===t||""===t)throw new Error("No input text");let r,n,o=Ca.M;return void 0!==e&&(o=Ca.from(e.errorCorrectionLevel,Ca.M),r=Ma.from(e.version),n=ja.from(e.maskPattern),e.toSJISFunc&&Oa.setToSJISFunction(e.toSJISFunc)),Da(t,r,o,n)};var Ua={},za={};!function(t){function e(t){if("number"==typeof t&&(t=t.toString()),"string"!=typeof t)throw new Error("Color should be defined as hex string");let e=t.slice().replace("#","").split("");if(e.length<3||5===e.length||e.length>8)throw new Error("Invalid hex color: "+t);3!==e.length&&4!==e.length||(e=Array.prototype.concat.apply([],e.map(function(t){return[t,t]}))),6===e.length&&e.push("F","F");const r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(t){t||(t={}),t.color||(t.color={});const r=void 0===t.margin||null===t.margin||t.margin<0?4:t.margin,n=t.width&&t.width>=21?t.width:void 0,o=t.scale||4;return{width:n,scale:n?4:o,margin:r,color:{dark:e(t.color.dark||"#000000ff"),light:e(t.color.light||"#ffffffff")},type:t.type,rendererOpts:t.rendererOpts||{}}},t.getScale=function(t,e){return e.width&&e.width>=t+2*e.margin?e.width/(t+2*e.margin):e.scale},t.getImageWidth=function(e,r){const n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){const o=r.modules.size,i=r.modules.data,a=t.getScale(o,n),s=Math.floor((o+2*n.margin)*a),l=n.margin*a,c=[n.color.light,n.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=4*(t*s+r),d=n.color.light;if(t>=l&&r>=l&&t<s-l&&r<s-l){d=c[i[Math.floor((t-l)/a)*o+Math.floor((r-l)/a)]?1:0]}e[u++]=d.r,e[u++]=d.g,e[u++]=d.b,e[u]=d.a}}}(za),function(t){const e=za;t.render=function(t,r,n){let o=n,i=r;void 0!==o||r&&r.getContext||(o=r,r=void 0),r||(i=function(){try{return document.createElement("canvas")}catch(t){throw new Error("You need to specify a canvas element")}}()),o=e.getOptions(o);const a=e.getImageWidth(t.modules.size,o),s=i.getContext("2d"),l=s.createImageData(a,a);return e.qrToImageData(l.data,t,o),function(t,e,r){t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px"}(s,i,a),s.putImageData(l,0,0),i},t.renderToDataURL=function(e,r,n){let o=n;void 0!==o||r&&r.getContext||(o=r,r=void 0),o||(o={});const i=t.render(e,r,o),a=o.type||"image/png",s=o.rendererOpts||{};return i.toDataURL(a,s.quality)}}(Ua);var Ha={};const Fa=za;function Va(t,e){const r=t.a/255,n=e+'="'+t.hex+'"';return r<1?n+" "+e+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function Ga(t,e,r){let n=t+e;return void 0!==r&&(n+=" "+r),n}Ha.render=function(t,e,r){const n=Fa.getOptions(e),o=t.modules.size,i=t.modules.data,a=o+2*n.margin,s=n.color.light.a?"<path "+Va(n.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",l="<path "+Va(n.color.dark,"stroke")+' d="'+function(t,e,r){let n="",o=0,i=!1,a=0;for(let s=0;s<t.length;s++){const l=Math.floor(s%e),c=Math.floor(s/e);l||i||(i=!0),t[s]?(a++,s>0&&l>0&&t[s-1]||(n+=i?Ga("M",l+r,.5+c+r):Ga("m",o,0),o=0,i=!1),l+1<e&&t[s+1]||(n+=Ga("h",a),a=0)):o++}return n}(i,o,n.margin)+'"/>',c='viewBox="0 0 '+a+" "+a+'"',u='<svg xmlns="http://www.w3.org/2000/svg" '+(n.width?'width="'+n.width+'" height="'+n.width+'" ':"")+c+' shape-rendering="crispEdges">'+s+l+"</svg>\n";return"function"==typeof r&&r(null,u),u};const Xa=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then},Ya=xi,Ja=Ua,Wa=Ha;function Ka(t,e,r,n,o){const i=[].slice.call(arguments,1),a=i.length,s="function"==typeof i[a-1];if(!s&&!Xa())throw new Error("Callback required as last argument");if(!s){if(a<1)throw new Error("Too few arguments provided");return 1===a?(r=e,e=n=void 0):2!==a||e.getContext||(n=r,r=e,e=void 0),new Promise(function(o,i){try{const i=Ya.create(r,n);o(t(i,e,n))}catch(t){i(t)}})}if(a<2)throw new Error("Too few arguments provided");2===a?(o=r,r=e,e=n=void 0):3===a&&(e.getContext&&void 0===o?(o=n,n=void 0):(o=n,n=r,r=e,e=void 0));try{const i=Ya.create(r,n);o(null,t(i,e,n))}catch(t){o(t)}}Ei.create=Ya.create,Ei.toCanvas=Ka.bind(null,Ja.render),Ei.toDataURL=Ka.bind(null,Ja.renderToDataURL),Ei.toString=Ka.bind(null,function(t,e,r){return Wa.render(t,r)});const qa={EAN_13:"EAN13",EAN_8:"EAN8",CODE_128:"CODE128",CODE_39:"CODE39",UPC_A:"UPC"};function Qa(t){return"QR"===t}let Za=class extends st{constructor(){super(...arguments),this._barcodeError=!1,this._fullscreenImage=null}updated(t){t.has("card")&&this.card&&this._renderBarcode()}async _renderBarcode(){if(this._barcodeError=!1,await this.updateComplete,Qa(this.card.barcode_type)){const t=this.renderRoot.querySelector(".barcode-canvas");if(t){const e=await async function(t,e){try{return await Ei.toCanvas(t,e,{width:256,margin:2,color:{dark:"#000000",light:"#ffffff"}}),!0}catch{return!1}}(t,this.card.barcode_value);e||(this._barcodeError=!0)}}else{const t=this.renderRoot.querySelector(".barcode-svg");if(t){(function(t,e,r){const n=qa[r];if(!n)return!1;try{return wi(t,e,{format:n,displayValue:!0,fontSize:16,margin:10,width:2,height:80,background:"#ffffff",lineColor:"#000000"}),!0}catch{return!1}})(t,this.card.barcode_value,this.card.barcode_type)||(this._barcodeError=!0)}}}_fireClose(){this.dispatchEvent(new CustomEvent("close"))}_fireEdit(){this.dispatchEvent(new CustomEvent("edit",{detail:this.card}))}_fireDelete(){this.dispatchEvent(new CustomEvent("delete",{detail:this.card}))}_handleOverlayClick(t){t.target.classList.contains("detail-overlay")&&this._fireClose()}render(){const t=this.card;return F`
            <div class="detail-overlay" @click=${this._handleOverlayClick}>
                <div class="detail-card">
                    <div class="detail-header">
                        <div style="display:flex;align-items:center;gap:10px">
                            ${t.logo?F`<img
                                      src="/cardvault/images/${t.logo}"
                                      alt=""
                                      style="width:32px;height:32px;border-radius:6px;object-fit:contain"
                                  />`:G}
                            <h2>${t.name}</h2>
                        </div>
                        <div class="actions">
                            <button
                                class="btn-icon"
                                @click=${this._fireEdit}
                                title="Edit"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                </svg>
                            </button>
                            <button
                                class="btn-icon"
                                @click=${this._fireDelete}
                                title="Delete"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                </svg>
                            </button>
                            <button
                                class="btn-icon"
                                @click=${this._fireClose}
                                title="Close"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="barcode-container">
                        ${this._barcodeError?F`<p style="color:var(--error-color,#db4437)">
                                  Could not render barcode
                              </p>`:Qa(t.barcode_type)?F`<canvas class="barcode-canvas"></canvas>`:F`<svg class="barcode-svg"></svg>`}
                    </div>

                    <div class="detail-info">
                        <div class="info-row">
                            <span class="info-label">Value</span>
                            <span>${t.barcode_value}</span>
                        </div>
                    </div>

                    ${t.note?F`<div class="detail-note">${t.note}</div>`:G}
                    ${t.image_front||t.image_back?F`
                              <div class="detail-images">
                                  ${t.image_front?F`<img
                                            src="/cardvault/images/${t.image_front}"
                                            alt="Card front"
                                            style="cursor:pointer"
                                            @click=${()=>this._fullscreenImage=`/cardvault/images/${t.image_front}`}
                                        />`:G}
                                  ${t.image_back?F`<img
                                            src="/cardvault/images/${t.image_back}"
                                            alt="Card back"
                                            style="cursor:pointer"
                                            @click=${()=>this._fullscreenImage=`/cardvault/images/${t.image_back}`}
                                        />`:G}
                              </div>
                          `:G}
                </div>
            </div>
            ${this._fullscreenImage?F`
                      <div
                          style="position:fixed;inset:0;z-index:1000;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;cursor:pointer"
                          @click=${()=>this._fullscreenImage=null}
                      >
                          <img
                              src=${this._fullscreenImage}
                              style="max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px"
                          />
                      </div>
                  `:G}
        `}};Za.styles=[yt,vt],t([ft({attribute:!1})],Za.prototype,"hass",void 0),t([ft({attribute:!1})],Za.prototype,"card",void 0),t([ht()],Za.prototype,"_barcodeError",void 0),t([ht()],Za.prototype,"_fullscreenImage",void 0),Za=t([ct("cardvault-detail")],Za);const ts=[{value:"EAN_13",label:"EAN-13"},{value:"EAN_8",label:"EAN-8"},{value:"CODE_128",label:"Code 128"},{value:"CODE_39",label:"Code 39"},{value:"QR",label:"QR Code"},{value:"UPC_A",label:"UPC-A"}],es=["#607D8B","#F44336","#E91E63","#9C27B0","#3F51B5","#2196F3","#009688","#4CAF50","#FF9800","#795548"];let rs=class extends st{constructor(){super(...arguments),this.editCard=null,this._name="",this._barcodeValue="",this._barcodeType="EAN_13",this._note="",this._color="#607D8B",this._scanning=!1,this._scanAvailable=!0,this._scanUnavailableReason="",this._scanResult="",this._scanError="",this._saving=!1,this._error="",this._frontFile=null,this._backFile=null,this._tileBackground="none",this._logo=null,this._availableLogos=[]}connectedCallback(){super.connectedCallback(),this.editCard&&(this._name=this.editCard.name,this._barcodeValue=this.editCard.barcode_value,this._barcodeType=this.editCard.barcode_type,this._note=this.editCard.note||"",this._color=this.editCard.color||"#607D8B",this._tileBackground=this.editCard.tile_background||"none",this._logo=this.editCard.logo||null)}firstUpdated(){this._checkScanAvailability(),this._loadLogos()}async _loadLogos(){try{const t=new pt(this.hass);this._availableLogos=await t.getLogos()}catch{this._availableLogos=[]}}get _hasFront(){return!(!this._frontFile&&!this.editCard?.image_front)}get _hasBack(){return!(!this._backFile&&!this.editCard?.image_back)}get _hasLogo(){return!!this._logo}async _checkScanAvailability(){try{const t=new pt(this.hass),e=await t.checkScanAvailable();this._scanAvailable=e.available,this._scanUnavailableReason=e.reason||""}catch{}}_handleOverlayClick(t){t.target.classList.contains("dialog-overlay")&&this._fireClose()}_fireClose(){this.dispatchEvent(new CustomEvent("close"))}async _handleScan(){const t=document.createElement("input");t.type="file",t.accept="image/*",t.capture="environment",t.onchange=async()=>{const e=t.files?.[0];if(e){this._scanning=!0,this._scanResult="",this._scanError="";try{const t=new pt(this.hass),r=await t.scanBarcode(e);r.length>0?(this._barcodeValue=r[0].barcode_value,this._barcodeType=r[0].barcode_type,this._scanResult=`Found ${r[0].barcode_type.replace(/_/g,"-")}: ${r[0].barcode_value}`):this._scanError="No barcode found in image"}catch{this._scanError="Failed to scan image"}finally{this._scanning=!1}}},t.click()}_handleFileSelect(t){const e=document.createElement("input");e.type="file",e.accept="image/*",e.onchange=()=>{const r=e.files?.[0];r&&("front"===t?this._frontFile=r:this._backFile=r)},e.click()}async _handleSave(){if(this._name.trim())if(this._barcodeValue.trim()){this._saving=!0,this._error="";try{const t=new pt(this.hass),e={name:this._name.trim(),barcode_value:this._barcodeValue.trim(),barcode_type:this._barcodeType,note:this._note.trim(),color:this._color,logo:this._logo,tile_background:"logo"!==this._tileBackground||this._logo?this._tileBackground:"none"};let r;r=this.editCard?await t.updateCard(this.editCard.id,e):await t.createCard(e);try{this._frontFile&&await t.uploadImage(r.id,"front",this._frontFile),this._backFile&&await t.uploadImage(r.id,"back",this._backFile)}catch(t){return console.error("CardVault: image upload failed",t),this._error="Card saved but image upload failed",this._saving=!1,void this.dispatchEvent(new CustomEvent("saved"))}this.dispatchEvent(new CustomEvent("saved"))}catch(t){console.error("CardVault: save failed",t),this._error="Failed to save card"}finally{this._saving=!1}}else this._error="Barcode value is required";else this._error="Name is required"}render(){const t=!!this.editCard;return F`
            <div class="dialog-overlay" @click=${this._handleOverlayClick}>
                <div class="dialog">
                    <div class="dialog-header">
                        <h2>${t?"Edit Card":"Add Card"}</h2>
                        <button class="btn-icon" @click=${this._fireClose}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                            </svg>
                        </button>
                    </div>

                    <div class="dialog-body">
                        ${this._error?F`<div
                                  style="color:var(--error-color,#db4437);font-size:0.95em;font-weight:500;text-align:center;padding:8px 12px;margin-bottom:8px;background:rgba(219,68,55,0.08);border-radius:8px"
                              >
                                  ${this._error}
                              </div>`:G}
                        <div class="form-group">
                            <label>Card Name</label>
                            <input
                                type="text"
                                .value=${this._name}
                                @input=${t=>this._name=t.target.value}
                                placeholder="e.g. Tesco Clubcard"
                            />
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label>Barcode Value</label>
                                <input
                                    type="text"
                                    .value=${this._barcodeValue}
                                    @input=${t=>this._barcodeValue=t.target.value}
                                    placeholder="e.g. 5012345678901"
                                />
                            </div>
                            <div class="form-group" style="max-width:140px">
                                <label>Type</label>
                                <select
                                    @change=${t=>this._barcodeType=t.target.value}
                                >
                                    ${ts.map(t=>F`<option
                                                value=${t.value}
                                                ?selected=${this._barcodeType===t.value}
                                            >
                                                ${t.label}
                                            </option>`)}
                                </select>
                            </div>
                        </div>

                        <div class="scan-section">
                            <p>Or scan barcode from a photo</p>
                            <button
                                class="btn btn-secondary"
                                @click=${this._handleScan}
                                ?disabled=${this._scanning||!this._scanAvailable}
                            >
                                ${this._scanning?F`<span class="loading"></span>`:"Scan from Image"}
                            </button>
                            ${this._scanAvailable?G:F`<p
                                      style="color:var(--secondary-text-color,#727272);font-size:0.8em;margin:4px 0 0"
                                  >
                                      ${this._scanUnavailableReason}
                                  </p>`}
                            ${this._scanResult?F`<div class="scan-result">
                                      ${this._scanResult}
                                  </div>`:G}
                            ${this._scanError?F`<div
                                      style="color:var(--error-color,#db4437);font-size:0.95em;margin-top:8px;font-weight:500"
                                  >
                                      ${this._scanError}
                                  </div>`:G}
                        </div>

                        <div class="form-group">
                            <label>Note (optional)</label>
                            <textarea
                                .value=${this._note}
                                @input=${t=>this._note=t.target.value}
                                placeholder="Any notes about this card..."
                            ></textarea>
                        </div>

                        <div class="form-group">
                            <label>Color</label>
                            <div style="display:flex;gap:6px;flex-wrap:wrap">
                                ${es.map(t=>F`
                                        <div
                                            @click=${()=>this._color=t}
                                            style="
                                                width:28px;height:28px;border-radius:50%;
                                                background:${t};cursor:pointer;
                                                border:2px solid ${this._color===t?"var(--primary-text-color,#212121)":"transparent"};
                                            "
                                        ></div>
                                    `)}
                                <input
                                    type="color"
                                    .value=${this._color}
                                    @input=${t=>this._color=t.target.value}
                                    style="width:28px;height:28px;padding:0;border:none;border-radius:50%;cursor:pointer"
                                />
                            </div>
                        </div>

                        ${this._availableLogos.length>0?F`
                                  <div class="form-group">
                                      <label>Logo</label>
                                      <div class="logo-picker">
                                          <div
                                              class="logo-option ${null===this._logo?"selected":""}"
                                              @click=${()=>{this._logo=null,"logo"===this._tileBackground&&(this._tileBackground="none")}}
                                          >
                                              <span style="font-size:0.7em;color:var(--secondary-text-color,#727272)">None</span>
                                          </div>
                                          ${this._availableLogos.map(t=>F`
                                                  <div
                                                      class="logo-option ${this._logo===t?"selected":""}"
                                                      @click=${()=>this._logo=t}
                                                      title=${t.replace("logo_","").replace(".png","")}
                                                  >
                                                      <img
                                                          src="/cardvault/images/${t}"
                                                          alt=${t.replace("logo_","").replace(".png","")}
                                                      />
                                                  </div>
                                              `)}
                                      </div>
                                  </div>
                              `:G}

                        <div class="form-row">
                            <div class="form-group">
                                <label>Front Image</label>
                                <div class="file-upload">
                                    <button
                                        class="upload-btn"
                                        @click=${()=>this._handleFileSelect("front")}
                                    >
                                        Choose File
                                    </button>
                                    <span class="file-name">
                                        ${this._frontFile?this._frontFile.name:this.editCard?.image_front?"Uploaded":"None"}
                                    </span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Back Image</label>
                                <div class="file-upload">
                                    <button
                                        class="upload-btn"
                                        @click=${()=>this._handleFileSelect("back")}
                                    >
                                        Choose File
                                    </button>
                                    <span class="file-name">
                                        ${this._backFile?this._backFile.name:this.editCard?.image_back?"Uploaded":"None"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        ${this._hasFront||this._hasBack||this._hasLogo?F`
                                  <div class="form-group">
                                      <label>Tile Background</label>
                                      <select
                                          @change=${t=>this._tileBackground=t.target.value}
                                      >
                                          <option
                                              value="none"
                                              ?selected=${"none"===this._tileBackground}
                                          >
                                              None (color only)
                                          </option>
                                          ${this._hasLogo?F`<option
                                                    value="logo"
                                                    ?selected=${"logo"===this._tileBackground}
                                                >
                                                    Logo
                                                </option>`:G}
                                          ${this._hasFront?F`<option
                                                    value="front"
                                                    ?selected=${"front"===this._tileBackground}
                                                >
                                                    Front picture
                                                </option>`:G}
                                          ${this._hasBack?F`<option
                                                    value="back"
                                                    ?selected=${"back"===this._tileBackground}
                                                >
                                                    Back picture
                                                </option>`:G}
                                      </select>
                                  </div>
                              `:G}

                    </div>

                    <div class="dialog-footer">
                        <button
                            class="btn btn-secondary"
                            @click=${this._fireClose}
                        >
                            Cancel
                        </button>
                        <button
                            class="btn btn-primary"
                            @click=${this._handleSave}
                            ?disabled=${this._saving}
                        >
                            ${this._saving?F`<span class="loading"></span>`:t?"Save":"Add Card"}
                        </button>
                    </div>
                </div>
            </div>
        `}};rs.styles=[vt],t([ft({attribute:!1})],rs.prototype,"hass",void 0),t([ft({attribute:!1})],rs.prototype,"editCard",void 0),t([ht()],rs.prototype,"_name",void 0),t([ht()],rs.prototype,"_barcodeValue",void 0),t([ht()],rs.prototype,"_barcodeType",void 0),t([ht()],rs.prototype,"_note",void 0),t([ht()],rs.prototype,"_color",void 0),t([ht()],rs.prototype,"_scanning",void 0),t([ht()],rs.prototype,"_scanAvailable",void 0),t([ht()],rs.prototype,"_scanUnavailableReason",void 0),t([ht()],rs.prototype,"_scanResult",void 0),t([ht()],rs.prototype,"_scanError",void 0),t([ht()],rs.prototype,"_saving",void 0),t([ht()],rs.prototype,"_error",void 0),t([ht()],rs.prototype,"_frontFile",void 0),t([ht()],rs.prototype,"_backFile",void 0),t([ht()],rs.prototype,"_tileBackground",void 0),t([ht()],rs.prototype,"_logo",void 0),t([ht()],rs.prototype,"_availableLogos",void 0),rs=t([ct("cardvault-add-dialog")],rs);let ns=class extends st{setConfig(t){this._config=t}_valueChanged(t,e){if(!this._config)return;const r={...this._config,[t]:e};this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:r},bubbles:!0,composed:!0}))}render(){return this._config?F`
            <div class="form-group">
                <label>Title</label>
                <input
                    type="text"
                    .value=${this._config.title||""}
                    @input=${t=>this._valueChanged("title",t.target.value)}
                    placeholder="My Cards"
                />
            </div>
            <div class="form-group">
                <label>Layout</label>
                <select
                    @change=${t=>this._valueChanged("layout",t.target.value)}
                >
                    <option value="default" ?selected=${"default"===(this._config.layout||"default")}>
                        Default (cards)
                    </option>
                    <option value="compact" ?selected=${"compact"===this._config.layout}>
                        Compact (circles)
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label>Columns (0 = auto)</label>
                <input
                    type="number"
                    min="0"
                    max="6"
                    .value=${String(this._config.columns||0)}
                    @input=${t=>this._valueChanged("columns",parseInt(t.target.value)||0)}
                />
            </div>
        `:F``}};ns.styles=a`
        .form-group {
            margin-bottom: 12px;
        }
        .form-group label {
            display: block;
            font-size: 0.85em;
            font-weight: 500;
            margin-bottom: 4px;
            color: var(--secondary-text-color, #727272);
        }
        .form-group input,
        .form-group select {
            width: 100%;
            padding: 8px 10px;
            border: 1px solid var(--divider-color, #e0e0e0);
            border-radius: 8px;
            font-size: 0.95em;
            background: var(--card-background-color, #fff);
            color: var(--primary-text-color, #212121);
            box-sizing: border-box;
        }
    `,t([ft({attribute:!1})],ns.prototype,"hass",void 0),t([ht()],ns.prototype,"_config",void 0),ns=t([ct("cardvault-editor")],ns);let os=class extends st{constructor(){super(...arguments),this._cards=[],this._selectedCard=null,this._showAdd=!1,this._editCard=null,this._confirmDelete=null,this._loading=!0}setConfig(t){this._config=t}set hass(t){const e=this._hass;this._hass=t,!e&&t&&(this._api=new pt(t),this._loadCards()),this.requestUpdate("hass",e)}get hass(){return this._hass}static getConfigElement(){return document.createElement("cardvault-editor")}static getStubConfig(){return{type:"custom:cardvault-card",title:"My Cards"}}getCardSize(){return 3}async _loadCards(){if(this._api)try{this._cards=await this._api.getCards()}catch{this._cards=[]}finally{this._loading=!1}}_handleCardClick(t){this._selectedCard=t}_handleAddClick(){this._editCard=null,this._showAdd=!0}_handleDetailClose(){this._selectedCard=null}_handleDetailEdit(t){this._selectedCard=null,this._editCard=t.detail,this._showAdd=!0}_handleDetailDelete(t){this._selectedCard=null,this._confirmDelete=t.detail}async _handleConfirmDelete(){if(this._confirmDelete&&this._api)try{await this._api.deleteCard(this._confirmDelete.id),this._confirmDelete=null,await this._loadCards()}catch{}}_handleDialogClose(){this._showAdd=!1,this._editCard=null}async _handleDialogSaved(){this._showAdd=!1,this._editCard=null,await this._loadCards()}_getInitials(t){const e=t.trim().split(/\s+/);return e.length>=2?(e[0][0]+e[1][0]).toUpperCase():t.slice(0,2).toUpperCase()}render(){const t=this._config?.title||"My Cards",e=this._config?.layout||"default",r=this._config?.columns,n=r?`grid-template-columns: repeat(${r}, 1fr)`:"";return F`
            <ha-card>
                <div class="card-header">
                    <h1>${t}</h1>
                </div>

                ${this._loading?F`<div class="empty-state">
                          <span class="loading"></span>
                      </div>`:0===this._cards.length?F`
                            <div class="empty-state">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.4">
                                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                                </svg>
                                <p>No cards yet</p>
                                <button
                                    class="btn btn-primary"
                                    style="margin-top:12px"
                                    @click=${this._handleAddClick}
                                >
                                    Add Your First Card
                                </button>
                            </div>
                        `:"compact"===e?F`
                              <div class="compact-grid">
                                  ${this._cards.map(t=>F`
                                          <div
                                              class="compact-circle"
                                              style="background:${t.color||"#607D8B"}"
                                              title=${t.name}
                                              @click=${()=>this._handleCardClick(t)}
                                          >
                                              ${t.logo?F`<img
                                                        src="/cardvault/images/${t.logo}"
                                                        alt=""
                                                        style="width:100%;height:100%;object-fit:cover;border-radius:50%"
                                                    />`:this._getInitials(t.name)}
                                          </div>
                                      `)}
                                  <button
                                      class="compact-add"
                                      @click=${this._handleAddClick}
                                      title="Add Card"
                                  >
                                      <svg viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                      </svg>
                                  </button>
                              </div>
                          `:F`
                              <div class="card-grid" style=${n}>
                                  ${this._cards.map(t=>{const e="front"===t.tile_background&&t.image_front?t.image_front:"back"===t.tile_background&&t.image_back?t.image_back:"logo"===t.tile_background&&t.logo?t.logo:null,r=e?`background:${t.color||"#607D8B"} url(/cardvault/images/${e}) center/cover`:`background:${t.color||"#607D8B"}`;return F`
                                              <div
                                                  class="card-tile"
                                                  style=${r}
                                                  @click=${()=>this._handleCardClick(t)}
                                              >
                                                  ${t.logo&&"logo"!==t.tile_background?F`<img
                                                            class="tile-logo"
                                                            src="/cardvault/images/${t.logo}"
                                                            alt=""
                                                        />`:G}
                                                  <span class="tile-name"
                                                      >${t.name}</span
                                                  >
                                                  <span class="tile-type"
                                                      >${t.barcode_type.replace(/_/g,"-")}</span
                                                  >
                                              </div>
                                          `})}
                                  <button
                                      class="add-btn"
                                      @click=${this._handleAddClick}
                                  >
                                      <svg viewBox="0 0 24 24" fill="currentColor">
                                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                      </svg>
                                      Add Card
                                  </button>
                              </div>
                          `}
            </ha-card>

            ${this._selectedCard?F`
                      <cardvault-detail
                          .hass=${this.hass}
                          .card=${this._selectedCard}
                          @close=${this._handleDetailClose}
                          @edit=${this._handleDetailEdit}
                          @delete=${this._handleDetailDelete}
                      ></cardvault-detail>
                  `:G}
            ${this._showAdd?F`
                      <cardvault-add-dialog
                          .hass=${this.hass}
                          .editCard=${this._editCard}
                          @close=${this._handleDialogClose}
                          @saved=${this._handleDialogSaved}
                      ></cardvault-add-dialog>
                  `:G}
            ${this._confirmDelete?F`
                      <div
                          class="dialog-overlay"
                          @click=${t=>{t.target.classList.contains("dialog-overlay")&&(this._confirmDelete=null)}}
                      >
                          <div class="dialog" style="max-width:340px">
                              <div class="dialog-header">
                                  <h2>Delete Card</h2>
                              </div>
                              <div class="dialog-body">
                                  <p>
                                      Delete
                                      <strong
                                          >${this._confirmDelete.name}</strong
                                      >? This cannot be undone.
                                  </p>
                              </div>
                              <div class="dialog-footer">
                                  <button
                                      class="btn btn-secondary"
                                      @click=${()=>this._confirmDelete=null}
                                  >
                                      Cancel
                                  </button>
                                  <button
                                      class="btn btn-danger"
                                      @click=${this._handleConfirmDelete}
                                  >
                                      Delete
                                  </button>
                              </div>
                          </div>
                      </div>
                  `:G}
        `}};os.styles=[gt,vt],t([ht()],os.prototype,"_config",void 0),t([ht()],os.prototype,"_cards",void 0),t([ht()],os.prototype,"_selectedCard",void 0),t([ht()],os.prototype,"_showAdd",void 0),t([ht()],os.prototype,"_editCard",void 0),t([ht()],os.prototype,"_confirmDelete",void 0),t([ht()],os.prototype,"_loading",void 0),os=t([ct("cardvault-card")],os),window.customCards=window.customCards||[],window.customCards.push({type:"cardvault-card",name:"CardVault",description:"Digital wallet for loyalty and discount cards",preview:!0});export{os as CardVaultCard};
