"use strict";(("undefined"!=typeof self?self:global).webpackChunkclient_web=("undefined"!=typeof self?self:global).webpackChunkclient_web||[]).push([[126],{92986:(e,r,n)=>{n.d(r,{f:()=>p});var t=n(52542),i=(n(42486),n(68216),n(43379),n(78397),n(30758)),a=n(97500),o=n.n(a),u=n(2648),l=n(17011);const s="main-genericButton-button",c="main-genericButton-buttonActive",d="main-genericButton-buttonActiveDot";var v=n(86070),p=(0,i.forwardRef)((function(e,r){var n,i=null!==(n=e.isActive)&&void 0!==n&&n,a=o()(s,(0,t.A)((0,t.A)({},c,i||e.isActiveNoIndicator),d,i),e.className);return(0,v.jsx)(l.Zp,{label:e.label,children:(0,v.jsx)(u.H,{ref:r,style:e.style,"aria-label":e.label,size:"small",className:a,disabled:e.disabled,iconOnly:e.icon,onClick:e.onToggle,"data-testid":e.testId,"data-active":i.toString(),"aria-pressed":i,"data-restore-focus-key":e.restoreFocusKey})})}))},42444:(e,r,n)=>{n.d(r,{sY:()=>S,Nh:()=>L,bo:()=>N,r3:()=>A,EX:()=>k,lZ:()=>x});var t=n(62822),i=n(52542),a=n(93091),o=n.n(a),u=(n(7651),n(30456),n(26701),n(25550),n(47994),n(76588),n(37417),n(11737),n(51691),n(702),n(5672),n(43379),n(34192),n(88856),n(51565),n(15342),n(18316),n(93493)),l=n(86295),s=(n(87718),new l.l("queryFullscreenMode","query","5aa77fcd9a5b65f829d8dee4000703ff1a7ff68e813c60999c0b2dce754240e2",null)),c=n(58114),d=n(5248),v=n(77970),p=n(51126),m=n(39850),f=n(93892),y=n(64044),b=n(80344),h=n(82704);function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function w(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?g(Object(n),!0).forEach((function(r){(0,i.A)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var x=function(){var e=(0,u.NC)(c.WYm,{loadingValue:!1});return(0,d.o)(b.A3)||e};function k(e){var r,n,t,i,a,o,u;return(0,f.v)(e)?{uri:e.uri,name:e.name,creatorName:null===(r=e.artists[0])||void 0===r?void 0:r.name,coverArtImageUrl:null===(n=e.images)||void 0===n||null===(n=n[0])||void 0===n?void 0:n.url,duration:e.duration.milliseconds}:(0,m.p)(e)?{uri:e.uri,name:e.name,creatorName:e.show.name,coverArtImageUrl:null===(t=e.images)||void 0===t||null===(t=t[0])||void 0===t?void 0:t.url,duration:e.duration.milliseconds}:(0,p.d)(e)?{uri:e.uri,name:e.name,creatorName:e.book.name,coverArtImageUrl:null===(i=e.images)||void 0===i||null===(i=i[0])||void 0===i?void 0:i.url,duration:e.duration.milliseconds}:(0,v.N)(e)?{uri:e.uri,name:null!==(a=e.title)&&void 0!==a?a:"",creatorName:null!==(o=e.advertiser)&&void 0!==o?o:"",coverArtImageUrl:null===(u=e.images)||void 0===u||null===(u=u[0])||void 0===u?void 0:u.url,duration:e.duration.milliseconds}:(0,y.v)(e)||void 0===e?void 0:(0,h.d)(e)}function A(e){var r,n=k(e);return(0,f.v)(e)||(0,m.p)(e)||(0,p.d)(e)||(0,v.N)(e)?w(w({},n),{},{duration:e.duration.milliseconds,mediaType:(r=e.mediaType,"video"===r||"mixed"===r?"video":"audio")}):(0,y.v)(e)||void 0===e?void 0:(0,h.d)(e)}function L(e){var r,n;return{contextName:null==e||null===(r=e.context.metadata)||void 0===r?void 0:r.context_description,contextUri:(null==e?void 0:e.context.uri)||void 0,position:null!==(n=null==e?void 0:e.positionAsOfTimestamp)&&void 0!==n?n:void 0,timestamp:null==e?void 0:e.timestamp,isPaused:null==e?void 0:e.isPaused,canPause:null==e?void 0:e.restrictions.canPause,canResume:null==e?void 0:e.restrictions.canResume}}function S(e,r){return I.apply(this,arguments)}function I(){return(I=(0,t.A)(o().mark((function e(r,n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(s,{artistUri:n}).then((function(e){var r,n;if("Artist"===(null==e||null===(r=e.data)||void 0===r?void 0:r.artistUnion.__typename))return null===(n=e.data.artistUnion.visuals.headerImage)||void 0===n||null===(n=n.sources[0])||void 0===n?void 0:n.url})).catch((function(){})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,r,n){if(e&&n&&n.hasLyrics)return{status:r?"loading":"success",content:{provider:n.provider,syncType:n.syncType,lines:n.lyrics.map((function(e){return{timestamp:Number(e.start),text:e.text}}))}}}},8248:(e,r,n)=>{n.d(r,{H:()=>i,k:()=>t});var t=18e5,i=6e5},46064:(e,r,n)=>{n.d(r,{I:()=>A});var t=n(62822),i=n(52542),a=n(93091),o=n.n(a),u=n(28925),l=n(93493),s=n(8248),c=n(73668),d=n(90328),v=(n(25550),n(15342),n(21171)),p=n(10741),m=n(12548),f=n(54552);function y(e,r){return b.apply(this,arguments)}function b(){return b=(0,t.A)(o().mark((function e(r,n){var t,i,a,u,l,s=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>2&&void 0!==s[2]&&s[2],i=s.length>3?s[3]:void 0,e.prev=2,e.next=5,(0,v.S)(r,n,t,i);case 5:return l=e.sent,e.abrupt("return",{hasLyrics:!0,isTimeSynced:(c=l.lyrics.syncType,"LINE_SYNCED"===c||"SYLLABLE_SYNCED"===c),syncType:l.lyrics.syncType,lyrics:l.lyrics.lines.map(h),colors:(o=l.colors,{text:g(o.text),activeText:g(o.highlightText),background:g(o.background)}),provider:l.lyrics.provider,providerDisplayName:l.lyrics.providerDisplayName,providerLyricsId:l.lyrics.providerLyricsId,hasVocalRemoval:null!==(a=l.hasVocalRemoval)&&void 0!==a&&a,showUpsell:null!==(u=l.lyrics.showUpsell)&&void 0!==u&&u,alternatives:l.lyrics.alternatives});case 9:if(e.prev=9,e.t0=e.catch(2),!(e.t0 instanceof p.O&&404===e.t0.status)){e.next=13;break}return e.abrupt("return",{hasLyrics:!1});case 13:throw e.t0;case 14:case"end":return e.stop()}var o,c}),e,null,[[2,9]])}))),b.apply(this,arguments)}function h(e,r,n){var t=e.startTimeMs,i=e.words,a=n[r+1];return{start:t||0,end:a&&a.startTimeMs?a.startTimeMs:1/0,text:i}}function g(e){return m.Q.fromInt(e).toCSS(f.a.RGB)}var w=n(73188),x=n(79916),k={hasLyrics:!1},A=function(e,r){var n,a,v,p,m=null!==(n=null!==(a=(0,w.h)(r||void 0,{desiredLabel:"large",desiredSize:600}))&&void 0!==a?a:null==r||null===(v=r[0])||void 0===v?void 0:v.url)&&void 0!==n?n:"",f=(0,d.X)(),b=(0,l.NC)(x.Tc,{loadingValue:x.LZ.CONTROL}),h=(0,i.A)((0,i.A)((0,i.A)({},x.LZ.CONTROL,void 0),x.LZ.SYSTEM_LANGUAGE,navigator.language),x.LZ.ALL_LANGUAGES,"all")[b],g=["lyrics",{uri:e,image:m,vocalRemoval:f}],A=(0,c.f)(e),L=A.hasLyrics,S=A.isLoading,I=(0,u.I)({queryKey:g,queryFn:(p=(0,t.A)(o().mark((function r(){var n;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e&&m){r.next=2;break}return r.abrupt("return",k);case 2:return r.next=4,y(e,m,f,h);case 4:return n=r.sent,r.abrupt("return",n);case 6:case"end":return r.stop()}}),r)}))),function(){return p.apply(this,arguments)}),gcTime:s.k,staleTime:s.H,enabled:L}),N=I.data,O=I.isLoading,T=I.isError,F=S||O,C=null;return F||(C=L?null!=N?N:null:k),{data:C,loading:F,error:T}}},73668:(e,r,n)=>{n.d(r,{f:()=>p});var t=n(62822),i=n(93091),a=n.n(i),o=n(28925),u=n(23140),l=n(93493),s=n(80366),c=n(8248),d=n(21171),v=n(58114),p=function(e){var r,n=!!e&&(0,s.U_)(e),i=(0,l.NC)(v.s6w)&&n,p=(0,o.I)({queryKey:["useLyricsAvailability",e],queryFn:(r=(0,t.A)(a().mark((function r(){return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e){r.next=6;break}return r.next=3,(0,d.z)(e);case 3:r.t0=r.sent,r.next=7;break;case 6:r.t0=!1;case 7:return r.abrupt("return",r.t0);case 8:case"end":return r.stop()}}),r)}))),function(){return r.apply(this,arguments)}),gcTime:c.k,staleTime:c.H,enabled:i,placeholderData:u.rX}),m=p.data;return{isLoading:p.isLoading,hasLyrics:!!i&&(null!=m&&m)}}},90576:(e,r,n)=>{n.d(r,{J:()=>a});var t=n(46064),i=n(5248),a=function(){var e=(0,i.o)((function(e){return null==e?void 0:e.item}),(function(e,r){return(null==e?void 0:e.uri)===(null==r?void 0:r.uri)}));return(0,t.I)(null==e?void 0:e.uri,null==e?void 0:e.images)}},90328:(e,r,n)=>{n.d(r,{X:()=>o});var t=n(93493),i=n(58114),a=n(14582),o=function(){var e=(0,a.S)().getCapabilities().isSupported;return(0,t.NC)(i.OBX,{loadingValue:!1})&&e}},21171:(e,r,n)=>{n.d(r,{S:()=>s,z:()=>c});var t=n(62822),i=n(93091),a=n.n(i),o=(n(83234),n(80366)),u=n(75844),l=n(82316),s=function(){var e=(0,t.A)(a().mark((function e(r,n,t,i){var s,c,d,v,p;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=(0,o.o_)(r),c=s.id,d=u.n.getInstance(),v={format:"json",vocalRemoval:t},i&&(v.clientLanguage=i),e.next=7,d.build().withHost(l.Hj).withPath("/track/".concat(encodeURIComponent(c),"/image/").concat(encodeURIComponent(n))).withQueryParameters(v).withEndpointIdentifier("/track/{trackId}").send();case 7:return p=e.sent,e.abrupt("return",p.body);case 9:case"end":return e.stop()}}),e)})));return function(r,n,t,i){return e.apply(this,arguments)}}(),c=function(){var e=(0,t.A)(a().mark((function e(r){var n,t,i,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=(0,o.Y8)(null===(n=(0,o.o_)(r))||void 0===n?void 0:n.id)){e.next=3;break}return e.abrupt("return",!1);case 3:return s=u.n.getInstance(),e.next=6,s.build().withHost(l.XE).withPath("/track/".concat(encodeURIComponent(i))).withEndpointIdentifier("/track/{trackId}").send();case 6:return c=e.sent,e.abrupt("return",(null===(t=c.body)||void 0===t?void 0:t.has_lyrics)||!1);case 8:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},14910:(e,r,n)=>{n.d(r,{p:()=>u});var t=n(5248),i=n(77970),a=n(51126),o=n(39850);function u(){var e=(0,t.o)((function(e){var r;return null!==(r=null==e?void 0:e.item)&&void 0!==r?r:void 0}),(function(e,r){return(null==e?void 0:e.uri)===(null==r?void 0:r.uri)}));return(0,o.p)(e)||(0,a.d)(e)?"audio"===e.mediaType||"mixed"===e.mediaType:!!(0,i.N)(e)&&e.isPodcastAd}},33350:(e,r,n)=>{n.d(r,{SP:()=>i,X8:()=>t,ge:()=>a});var t=function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen&&e.webkitRequestFullscreen()},i=function(){document.fullscreenElement&&document.exitFullscreen?document.exitFullscreen():document.mozFullScreen&&document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitIsFullScreen&&document.webkitExitFullscreen&&document.webkitExitFullscreen()},a=function(){return!!(document.fullscreenElement||document.webkitIsFullScreen||document.mozFullScreen)}}}]);
//# sourceMappingURL=126.js.map