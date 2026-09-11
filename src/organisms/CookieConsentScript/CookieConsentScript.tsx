import * as React from "react";

/**
 * Verbatim, unmodified ConsentManager (consentmanager.net) autoblocking
 * loader running in production on autopaylab.com, cmp_cdid
 * "136af463a10ba". Ported here as a deliberate exception, per the
 * maintainer: every other component in this package is built and styled by
 * us; this one is a real cookie-consent legal obligation that must not be
 * redesigned or reimplemented, only reused byte-for-byte. See README
 * "Known limitations" and AUDIT.md for why it doesn't fit the usual
 * atomic-design mold.
 *
 * The visible banner/modal is rendered by ConsentManager's own
 * remote-hosted script and iframe, configured on their dashboard — not by
 * any markup or CSS in this codebase, so there's no meaningful visual
 * Storybook preview.
 *
 * In real usage (a Next.js Server Component, as in autopaylab-landing's
 * root layout), this ships as part of the server-rendered HTML document —
 * browsers execute a `<script>` that's present in parsed page markup
 * normally, which is what makes the banner actually load in production.
 * Mounted via pure client-side rendering instead (Storybook, this
 * package's own axe test suite, or a mistaken client-component usage),
 * the exact same JSX takes React's `dangerouslySetInnerHTML` →
 * `Element.innerHTML` path, and a script assigned that way is marked
 * "already started" per the HTML spec and never executes — confirmed
 * empirically (zero network requests fire when this story mounts). React
 * itself will log a benign console warning in that case ("Encountered a
 * script tag while rendering React component... never executed when
 * rendering on the client") — expected, not a sign of misconfiguration,
 * just a reminder this only does its job server-rendered.
 *
 * `cmp_cdid` is tied to Autopay's specific ConsentManager account and
 * domain registration. Reusing this component only makes sense for other
 * autopaylab.com pages under the same legal entity / consent record — NOT
 * for an unrelated site, which would need its own cdid from its own
 * ConsentManager account. Do not change this value when reusing the
 * component; if a genuinely different property needs a consent banner, it
 * needs its own ConsentManager setup, not this one repointed.
 *
 * Two fixes were applied, once, to the vendor snippet as originally pasted
 * into chat (carried forward unchanged from the original port in
 * autopaylab-landing/src/lib/consent-manager-script.ts):
 * 1. Two occurrences of a bare `_` variable (used for the GPP regulation
 *    key, declared as `_=c("gppkey")` and read back via `h(_)`) were
 *    missing from the pasted text — almost certainly eaten by chat
 *    markdown treating a lone underscore as an emphasis marker, since the
 *    snippet wasn't pasted in a fenced code block. Left as pasted, this is
 *    a hard JavaScript syntax error that would have thrown immediately and
 *    the whole banner would never have loaded. Both restored; nothing else
 *    in the vendor snippet was changed.
 * 2. A small IIFE reads the already-chosen locale out of `localStorage`
 *    and sets `window.cmp_setlang` before the loader runs, so the banner
 *    opens in whichever language the site is currently showing rather than
 *    the visitor's browser language. `cmp_setlang` is an existing hook
 *    read by the loader's own `cmp_getlangs()`, not an invented API. This
 *    only fixes the language at initial load/banner-open; if
 *    ConsentManager exposes a way to re-language an already-open banner on
 *    the fly it isn't in this snippet, so toggling locale while the banner
 *    is already open won't retranslate it without a refresh.
 */
export interface CookieConsentScriptProps {
  /**
   * localStorage key holding the current UI locale ("pl", else treated as
   * "en"), read once before the CMP loader boots. Defaults to
   * "autopaylab-locale" — the exact key autopaylab-landing's own
   * LocaleProvider uses today, so the default reproduces production
   * behavior unchanged. This is the one piece of plumbing that had to be
   * adapted for portability (the original imported the constant directly
   * from an app-local i18n module that doesn't exist in this package) —
   * the CMP script content itself is untouched. Override only if a
   * different consuming app stores its locale under a different key; if
   * the key is never set, the banner just falls back to the visitor's
   * browser language — a harmless degrade, not a break.
   */
  localeStorageKey?: string;
}

export function buildCookieConsentScript({ localeStorageKey = "autopaylab-locale" }: CookieConsentScriptProps = {}) {
  return `
(function () {
  try {
    var storedLocale = window.localStorage.getItem(${JSON.stringify(localeStorageKey)});
    window.cmp_setlang = storedLocale === "pl" ? "PL" : "EN";
  } catch (e) {}
})();
"gdprAppliesGlobally"in window||(window.gdprAppliesGlobally=!0),(!("cmp_id"in window)||window.cmp_id<1)&&(window.cmp_id=0),"cmp_cdid"in window||(window.cmp_cdid="136af463a10ba"),"cmp_params"in window||(window.cmp_params=""),"cmp_host"in window||(window.cmp_host="c.delivery.consentmanager.net"),"cmp_cdn"in window||(window.cmp_cdn="cdn.consentmanager.net"),"cmp_proto"in window||(window.cmp_proto="https:"),"cmp_codesrc"in window||(window.cmp_codesrc="0"),window.cmp_getsupportedLangs=function(){var n=["DE","EN","FR","IT","NO","DA","FI","ES","PT","RO","BG","ET","EL","GA","HR","LV","LT","MT","NL","PL","SV","SK","SL","CS","HU","RU","SR","ZH","TR","UK","AR","BS","JA","CY"];if("cmp_customlanguages"in window)for(var e=0;e<window.cmp_customlanguages.length;e++)n.push(window.cmp_customlanguages[e].l.toUpperCase());return n},window.cmp_getRTLLangs=function(){var n=["AR"];if("cmp_customlanguages"in window)for(var e=0;e<window.cmp_customlanguages.length;e++)"r"in window.cmp_customlanguages[e]&&window.cmp_customlanguages[e].r&&n.push(window.cmp_customlanguages[e].l);return n},window.cmp_getlang=function(n){return"boolean"!=typeof n&&(n=!0),n&&"string"==typeof cmp_getlang.usedlang&&""!==cmp_getlang.usedlang?cmp_getlang.usedlang:window.cmp_getlangs()[0]},window.cmp_extractlang=function(n){return-1!=n.indexOf("cmplang=")?-1!=(n=n.substr(n.indexOf("cmplang=")+8,2).toUpperCase()).indexOf("&")&&(n=n.substr(0,n.indexOf("&"))):n="",n},window.cmp_getlangs=function(){var n=window.cmp_getsupportedLangs(),e=[],t=location.hash,i=location.search,a="cmp_params"in window?window.cmp_params:"";""!=cmp_extractlang(t)?e.push(cmp_extractlang(t)):""!=cmp_extractlang(i)?e.push(cmp_extractlang(i)):""!=cmp_extractlang(a)?e.push(cmp_extractlang(a)):"cmp_setlang"in window&&""!=window.cmp_setlang?e.push(window.cmp_setlang.toUpperCase()):"cmp_langdetect"in window&&1==window.cmp_langdetect?e.push(window.cmp_getPageLang()):e=window.cmp_getBrowserLangs();for(var p=[],c=0;c<e.length;c++){var s=e[c].toUpperCase();s.length<2||(-1!=n.indexOf(s)?p.push(s):(-1!=s.indexOf("-")&&(s=s.substr(0,2)),-1!=n.indexOf(s)&&p.push(s)))}return 0==p.length&&"string"==typeof cmp_getlang.defaultlang&&""!==cmp_getlang.defaultlang?[cmp_getlang.defaultlang.toUpperCase()]:p.length>0?p:["EN"]},window.cmp_getPageLangs=function(){var n=window.cmp_getXMLLang();return(n=(n=""!=n?[n.toUpperCase()]:[]).concat(window.cmp_getLangsFromURL())).length>0?n:["EN"]},window.cmp_getPageLang=function(){var n=window.cmp_getPageLangs();return n.length>0?n[0]:""},window.cmp_getLangsFromURL=function(){var n=window.cmp_getsupportedLangs(),e=location,t="toUpperCase",i=e.hostname[t]()+".",a="/"+e.pathname[t]()+"/";a=(a=(a=a.split("").join("-")).split("//").join("/")).split("//").join("/");for(var p=[],c=0;c<n.length;c++){var s=a.substring(0,n[c].length+2);if(i.substring(0,n[c].length+1)==n[c]+".")p.push(n[c][t]());else if(5==n[c].length){var o=n[c].substring(3,5)+"-"+n[c].substring(0,2);i.substring(0,o.length+1)==o+"."&&p.push(n[c][t]())}else if(s=="/"+n[c]+"/"||s=="/"+n[c]+"-")p.push(n[c][t]());else if(s=="/"+n[c].replace("-","/")+"/"||s=="/"+n[c].replace("-","/")+"/")p.push(n[c][t]());else if(5==n[c].length){o=n[c].substring(3,5)+"-"+n[c].substring(0,2);var d=a.substring(0,o.length+1);d!="/"+o+"/"&&d!="/"+o.replace("-","/")+"/"||p.push(n[c][t]())}}return p},window.cmp_getXMLLang=function(){var n=document.getElementsByTagName("html");if((n=n.length>0?n[0]:document.documentElement)&&n.getAttribute){var e=n.getAttribute("xml:lang");if("string"==typeof e&&""!=e||(e=n.getAttribute("lang")),"string"==typeof e&&""!=e){e=e.split("").join("-").toUpperCase();var t=window.cmp_getsupportedLangs();return-1!=t.indexOf(e)||-1!=t.indexOf(e.substr(0,2))?e:""}return""}},window.cmp_getBrowserLangs=function(){var n="languages"in navigator?navigator.languages:[],e=[];if(n.length>0)for(var t=0;t<n.length;t++)e.push(n[t]);return"language"in navigator&&e.push(navigator.language),"userLanguage"in navigator&&e.push(navigator.userLanguage),e},function(){var n=document,e=window,t="",i="",a="",p=function(e){for(var t="data-cmp-"+e,i=["[data-cmp-id]","[data-cmp-cdid]","[data-cmp-host]","[data-cmp-cdn]"],a=0;a<i.length;a++){var p=n.querySelector(i[a]);if(p&&p.hasAttribute(t))return p.getAttribute(t)}return!1},c=function(n){var t="cmp_"+n,i="",a=(n="cmp"+n+"=").length,p=location,c=p.hash,s=p.search,o=c.indexOf(n),d=s.indexOf(n);if(-1!=o)i=c.substring(o+a,9999);else{if(-1==d)return t in e&&"function"!=typeof e[t]?e[t]:"";i=s.substring(d+a,9999)}var r=i.indexOf("&");return-1!=r&&(i=i.substring(0,r)),i},s=c("lang");if(""!=s)a=t=s;else if("cmp_getlang"in e&&(t=e.cmp_getlang().toLowerCase(),i=e.cmp_getlangs().slice(0,3).join(""),a=e.cmp_getPageLangs().slice(0,3).join(""),"cmp_customlanguages"in e))for(var o=e.cmp_customlanguages,d=0;d<o.length;d++){o[d].l.toLowerCase()==t&&(t="en")}var r="cmp_proto"in e?e.cmp_proto:"https:";"http:"!=r&&"https:"!=r&&(r="https:");var l="cmp_ref"in e?e.cmp_ref:location.href;l.length>300&&(l=l.substring(0,300));var g,m=function(n){var e=document,t=e.createElement("script");t.setAttribute("data-cmp-ab","1"),t.type="text/javascript",t.async=!0,t.src=n;var i=["body","div","span","script","head"],a="currentScript",p="parentElement",c="appendChild",s="body";if(e[a]&&e[a][p])e[a][p][c](t);else if(e[s])e[s][c](t);else for(var o=0;o<i.length;o++){var d=e.getElementsByTagName(i[o]);if(d.length>0){d[0][c](t);break}}},w=c("design"),u=c("regulationkey"),_=c("gppkey"),f=c("att"),h=e.encodeURIComponent;try{g=n.cookie.length>0}catch(n){g=!1}var v=c("darkmode");if("0"==v)v=0;else if("1"==v)v=1;else try{if("matchMedia"in window&&window.matchMedia){var b=window.matchMedia("(prefers-color-scheme: dark)");"matches"in b&&b.matches&&(v=1)}}catch(n){v=0}var y=p("host")||e.cmp_host,L=p("cdn")||e.cmp_cdn,x=r+"//"+y+"/delivery/cmp.php?";if(x+=("cmp_id"in e&&e.cmp_id>0?"id="+e.cmp_id:"")+("cmp_cdid"in e?"&cdid="+e.cmp_cdid:"")+"&h="+h(l),x+=(""!=w?"&cmpdesign="+h(w):"")+(""!=u?"&cmpregulationkey="+h(u):"")+(""!=_?"&cmpgppkey="+h(_):""),x+=(""!=f?"&cmpatt="+h(f):"")+("cmp_params"in e?"&"+e.cmp_params:"")+(g?"&cmpfcc=1":""),m((x+=v>0?"&cmpdarkmode=1":"")+"&l="+h(t)+"&ls="+h(i)+"&lp="+h(a)+"&o="+(new Date).getTime()),!("cmp_quickstub"in window)){var S="js",O=""!=c("debugunminimized")?"":".min";"1"==c("debugcoverage")&&(S="instrumented",O=""),"1"==c("debugtest")&&(S="jstests",O="");var C=new Date;m(r+"//"+L+"/delivery/"+S+"/cmp_final"+O+".js?t="+(C.getFullYear()+"-"+(C.getMonth()+1)+"-"+C.getDate()))}}(),window.cmp_rc=function(n,e){var t;try{t=document.cookie}catch(n){t=""}for(var i="",a=0,p=!1;""!=t&&a<100;){for(a++;" "==t.substr(0,1);)t=t.substr(1,t.length);var c=t.substring(0,t.indexOf("="));if(-1!=t.indexOf(";"))var s=t.substring(t.indexOf("=")+1,t.indexOf(";"));else s=t.substr(t.indexOf("=")+1,t.length);n==c&&(i=s,p=!0);var o=t.indexOf(";")+1;0==o&&(o=t.length),t=t.substring(o,t.length)}return p||"string"!=typeof e||(i=e),i},window.cmp_stub=function(){var n=arguments;if(cmp.a=cmp.a||[],!n.length)return cmp.a;"ping"===n[0]?2===n[1]?n[2]({gdprApplies:gdprAppliesGlobally,cmpLoaded:!1,cmpStatus:"stub",displayStatus:"hidden",apiVersion:"2.3",cmpId:31},!0):n[2](!1,!0):"getTCData"===n[0]||"addEventListener"===n[0]||"removeEventListener"===n[0]?cmp.a.push([].slice.apply(n)):4==n.length&&!1===n[3]?n[2]({},!1):cmp.a.push([].slice.apply(n))},window.cmp_dsastub=function(){var n=arguments;n[0]="dsa."+n[0],window.cmp_gppstub(n)},window.cmp_gppstub=function(){var n=arguments;if(gpp.q=gpp.q||[],!n.length)return gpp.q;var e=n[0],t=n.length>1?n[1]:null,i=n.length>2?n[2]:null,a=null,p=!1;if("ping"===e)a=window.cmp_gpp_ping(),p=!0;else if("addEventListener"===e){gpp.e=gpp.e||[],"lastId"in gpp||(gpp.lastId=0),gpp.lastId++;var c=gpp.lastId;gpp.e.push({id:c,callback:t}),a={eventName:"listenerRegistered",listenerId:c,data:!0,pingData:window.cmp_gpp_ping()},p=!0}else if("removeEventListener"===e){gpp.e=gpp.e||[],a=!1;for(var s=0;s<gpp.e.length;s++)if(gpp.e[s].id==i){gpp.e[s].splice(s,1),a=!0;break}p=!0}else gpp.q.push([].slice.apply(n));null!==a&&"function"==typeof t&&t(a,p)},window.cmp_gpp_ping=function(){return{gppVersion:"1.1",cmpStatus:"stub",cmpDisplayStatus:"hidden",signalStatus:"not ready",supportedAPIs:["2:tcfeuv2","5:tcfcav1","7:usnat","8:usca","9:usva","10:usco","11:usut","12:usct","13:usfl","14:usmt","15:usor","16:ustx","17:usde","18:usia","19:usne","20:usnh","21:usnj","22:ustn","23:usmn","24:usmd","25:usin","26:usky","27:usri"],cmpId:31,sectionList:[],applicableSections:[0],gppString:"",parsedSections:{}}},window.cmp_addFrame=function(n){if(!window.frames[n])if(document.body){var e=document.createElement("iframe");if(e.style.cssText="display:none","cmp_cdn"in window&&"cmp_ultrablocking"in window&&window.cmp_ultrablocking>0){for(var t=window.cmp_cdn,i=["[data-cmp-id]","[data-cmp-cdid]","[data-cmp-host]","[data-cmp-cdn]"],a=0;a<i.length;a++){var p=document.querySelector(i[a]);if(p&&p.hasAttribute("data-cmp-cdn")){t=p.getAttribute("data-cmp-cdn");break}}e.src="//"+t+"/delivery/empty.html"}e.name=n,e.setAttribute("title","Intentionally hidden, please ignore"),e.setAttribute("role","none"),e.setAttribute("tabindex","-1"),document.body.appendChild(e)}else window.setTimeout(window.cmp_addFrame,10,n)},window.cmp_msghandler=function(n){var e="string"==typeof n.data;try{var t=e?JSON.parse(n.data):n.data}catch(n){t=null}if("object"==typeof t&&null!==t&&"cmpCall"in t){var i=t.cmpCall;window.cmp(i.command,i.parameter,function(t,a){var p={cmpReturn:{returnValue:t,success:a,callId:i.callId}};n.source.postMessage(e?JSON.stringify(p):p,"")})}if("object"==typeof t&&null!==t&&"tcfapiCall"in t){i=t.tcfapiCall;window.tcfapi(i.command,i.version,function(t,a){var p={tcfapiReturn:{returnValue:t,success:a,callId:i.callId}};n.source.postMessage(e?JSON.stringify(p):p,"")},i.parameter)}if("object"==typeof t&&null!==t&&"gppCall"in t){i=t.gppCall;window.gpp(i.command,function(t,a){var p={gppReturn:{returnValue:t,success:a,callId:i.callId}};n.source.postMessage(e?JSON.stringify(p):p,"")},"parameter"in i?i.parameter:null,"version"in i?i.version:1)}if("object"==typeof t&&null!==t&&"dsaCall"in t){i=t.dsaCall;window.dsa(i.command,function(t,a){var p={dsaReturn:{returnValue:t,success:a,callId:i.callId}};n.source.postMessage(e?JSON.stringify(p):p,"")},"parameter"in i?i.parameter:null,"version"in i?i.version:1)}},window.cmp_setStub=function(n){n in window&&("function"==typeof window[n]||"object"==typeof window[n]||void 0!==window[n]&&null===window[n])||(window[n]=window.cmp_stub,window[n].msgHandler=window.cmp_msghandler,window.addEventListener("message",window.cmp_msghandler,!1))},window.cmp_setGppStub=function(n){n in window&&("function"==typeof window[n]||"object"==typeof window[n]||void 0!==window[n]&&null===window[n])||(window[n]=window.cmp_gppstub,window[n].msgHandler=window.cmp_msghandler,window.addEventListener("message",window.cmp_msghandler,!1))},"cmp_noiframepixel"in window||window.cmp_addFrame("cmpLocator"),"cmp_disabletcf"in window&&window.cmp_disabletcf||"cmp_noiframepixel"in window||window.cmp_addFrame("tcfapiLocator"),"cmp_disablegpp"in window&&window.cmp_disablegpp||"cmp_noiframepixel"in window||window.cmp_addFrame("gppLocator"),"cmp_disabledsa"in window&&window.cmp_disabledsa||"cmp_noiframepixel"in window||window.cmp_addFrame("dsaLocator"),window.cmp_setStub("cmp"),"cmp_disabletcf"in window&&window.cmp_disabletcf||window.cmp_setStub("tcfapi"),"cmp_disablegpp"in window&&window.cmp_disablegpp||window.cmp_setGppStub("gpp"),"cmp_disabledsa"in window&&window.cmp_disabledsa||window.cmp_setGppStub("dsa");
`;
}

/**
 * Renders the loader as a raw `<script>` tag. Must be the very first thing
 * inside `<body>`, before anything else can set cookies or run tracking
 * scripts — a hard ordering requirement from ConsentManager, not a style
 * preference:
 *
 * ```tsx
 * <body>
 *   <CookieConsentScript />
 *   <Script id="matomo-analytics" strategy="afterInteractive" ... />
 *   {children}
 * </body>
 * ```
 */
export function CookieConsentScript(props: CookieConsentScriptProps = {}) {
  return <script dangerouslySetInnerHTML={{ __html: buildCookieConsentScript(props) }} />;
}
