(function(){
var f=document,j=navigator,m=window;function aa(){var a=f.cookie,c=Math.round((new Date).getTime()/1000),b=m.google_analytics_domain_name,d=typeof b=="undefined"?s("auto"):s(b),e=a.indexOf("__utma="+d+".")>-1,g=a.indexOf("__utmb="+d)>-1,i=a.indexOf("__utmc="+d)>-1,k,n={};if(e){k=a.split("__utma="+d+".")[1].split(";")[0].split(".");n.sid=g&&i?k[3]+"":(m&&m.gaGlobal&&m.gaGlobal.sid?m.gaGlobal.sid:c+"");n.vid=k[0]+"."+k[1];n.from_cookie=true;n.dh=d}else{n.sid=m&&m.gaGlobal&&m.gaGlobal.sid?m.gaGlobal.sid:
c+"";n.vid=m&&m.gaGlobal&&m.gaGlobal.vid?m.gaGlobal.vid:(u()^ba())*2147483647+"."+c;n.from_cookie=false}n.hid=m&&m.gaGlobal&&m.gaGlobal.hid?m.gaGlobal.hid:u();m.gaGlobal=n;return n}function u(){return Math.round(Math.random()*2147483647)}function ba(){var a=f.cookie?f.cookie:"",c=m.history.length,b,d,e=[j.appName,j.version,j.language?j.language:j.browserLanguage,j.platform,j.userAgent,j.javaEnabled()?1:0].join("");if(m.screen)e+=m.screen.width+"x"+m.screen.height+m.screen.colorDepth;else if(m.java){d=
java.awt.Toolkit.getDefaultToolkit().getScreenSize();e+=d.screen.width+"x"+d.screen.height}e+=a;e+=f.referrer?f.referrer:"";b=e.length;while(c>0)e+=c--^b++;return w(e)}function w(a){var c=1,b=0,d,e;if(!(a==undefined||a=="")){c=0;for(d=a.length-1;d>=0;d--){e=a.charCodeAt(d);c=(c<<6&268435455)+e+(e<<14);b=c&266338304;c=b!=0?c^b>>21:c}}return c}function s(a){if(!a||a==""||a=="none")return 1;if("auto"==a){a=f.domain;if("www."==a.substring(0,4))a=a.substring(4,a.length)}return w(a)};var ga={google_ad_channel:"channel",google_ad_host:"host",google_ad_host_tier_id:"ht_id",google_ad_region:"region",google_ad_section:"region",google_ad_type:"ad_type",google_adtest:"adtest",google_alternate_ad_url:"alternate_ad_url",google_alternate_color:"alt_color",google_bid:"bid",google_city:"gcs",google_color_bg:"color_bg",google_color_border:"color_border",google_color_line:"color_line",google_color_link:"color_link",google_color_text:"color_text",google_color_url:"color_url",google_contents:"contents",
google_country:"gl",google_cust_age:"cust_age",google_cust_ch:"cust_ch",google_cust_gender:"cust_gender",google_cust_id:"cust_id",google_cust_interests:"cust_interests",google_cust_job:"cust_job",google_cust_l:"cust_l",google_cust_lh:"cust_lh",google_cust_u_url:"cust_u_url",google_disable_video_autoplay:"disable_video_autoplay",google_ed:"ed",google_encoding:"oe",google_feedback:"feedback_link",google_flash_version:"flash",google_gl:"gl",google_hints:"hints",google_kw:"kw",google_kw_type:"kw_type",
google_language:"hl",google_referrer_url:"ref",google_region:"gr",google_reuse_colors:"reuse_colors",google_safe:"adsafe",google_targeting:"targeting",google_ui_features:"ui"},ha={google_ad_format:"format",google_ad_output:"output",google_ad_callback:"callback",google_ad_override:"google_ad_override",google_ad_slot:"slotname",google_analytics_uacct:"ga_wpids",google_correlator:"correlator",google_cpa_choice:"cpa_choice",google_image_size:"image_size",google_last_modified_time:"lmt",google_max_num_ads:"num_ads",
google_max_radlink_len:"max_radlink_len",google_num_radlinks:"num_radlinks",google_num_radlinks_per_unit:"num_radlinks_per_unit",google_only_ads_with_video:"only_ads_with_video",google_page_location:"loc",google_page_url:"url",google_rl_dest_url:"rl_dest_url",google_rl_filtering:"rl_filtering",google_rl_mode:"rl_mode",google_rt:"rt",google_skip:"skip"};function A(a){return ga[a]||ha[a]||null};function E(){}E.prototype.c=function(){};E.prototype.e=function(){};E.prototype.o=function(){};var H=null;function I(){this.b=this.m();this.g=false;if(!this.b){this.g=this.i();if(!this.g)H.e("Browser does not allow cookies")}}I.prototype.f="__gads=";I.prototype.d="GoogleAdServingTest=";I.prototype.l=function(){return this.b};I.prototype.setCookieInfo=function(a){this.a=a._cookies_[0];if(this.a!=null){this.b=this.a._value_;this.n()}};I.prototype.k=function(a){var c=(new Date).valueOf(),b=new Date;
b.setTime(c+a);return b};I.prototype.j=function(a){if(this.b!=null||!this.g){H.c("Skipping fetch cookie call");return}var c="script",b=document.domain,d="http://partner.googleadservices.com/gampad/cookie.js?callback=_GA_googleCookieHelper.setCookieInfo&client="+J(a)+"&domain="+J(b);H.c("Issuing a fetch cookie call with <a href='"+d+"'>"+d+"</a>");document.write("<"+c+' src="'+d+'"></'+c+">")};I.prototype.i=function(){document.cookie=this.d+"Good";var a=this.h(this.d),c=a=="Good";if(c){var b=this.k(-1);
document.cookie=this.d+"; expires="+b.toGMTString()}return c};I.prototype.m=function(){var a=this.h(this.f);if(a!=null)H.c("Read first party cookie: "+a);else H.e("No first party cookie found");return a};I.prototype.h=function(a){var c=document.cookie,b=c.indexOf(a),d=null;if(b!=-1){var e=b+a.length,g=c.indexOf(";",e);if(g==-1)g=c.length;d=c.substring(e,g)}return d};I.prototype.n=function(){if(this.a==null)H.e("Skipping cookie creation: no cookie info");else if(this.b==null)H.o("Skipping cookie creation: no cookie value");
else{var a=new Date;a.setTime(1000*this.a._expires_);var c=this.a._domain_,b=this.f+this.b+"; expires="+a.toGMTString()+"; path="+this.a._path_+"; domain=."+c;document.cookie=b;H.c("Written cookie: "+b)}};window.IDICommon=window.IDICommon||(function(){return{getHash:function(a){var c=a.indexOf("#")+1;return c?a.substr(c):""},htmlEscape:function(a){return/[&<>\"]/.test(a)?a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;"):a},makeIframeTag:function(a){var c="<iframe";for(var b in a)c+=" "+b+'="'+IDICommon.htmlEscape(a[b])+'"';return c+"></iframe>"},getIframe:function(a,c){try{return a.frames[c]}catch(b){return null}},makeIframeNode:function(a){var c=document.createElement("iframe");
for(var b in a)c.setAttribute(b,a[b]);return c},appendHiddenIframe:function(a,c){setTimeout(function(){document.body.appendChild(IDICommon.makeIframeNode({id:a,name:a,src:c,width:0,height:0,frameBorder:0}))},0)},writeHiddenIframe:function(a,c){document.write(IDICommon.makeIframeTag({id:a,name:a,src:c,width:0,height:0,frameBorder:0}))},splitURIComponent:function(a,c){var b=[],d=a.length,e=0;while(e<d){var g=a.substr(e,c),i=g.length;if(e+i<d)for(var k=1;k<3;++k)if(g.charAt(i-k)=="%")g=g.substr(0,i-=
k);b.push(g);e+=i}return b},MAX_URL_LENGTH:4095,IDI_DEFAULT_POLLING_INTERVAL:1000}})();window.IDIHost=window.IDIHost||(function(){var a=window.location.href.replace(/([^:\/])\/.*$/,"$1/robots.txt"),c="",b={},d={},e={},g={},i={};function k(h,o){for(var q in o)h[q]=o[q]}function n(h,o){var q=window.frames[h];if(q){var B;while(B=IDICommon.getIframe(q,h+"_"+b[h])){try{if(B.location.href=="about:blank")break}catch(v){break}e[h]+=IDICommon.getHash(B.location.href);++b[h]}var t=e[h].split("$"),C=t.length-1;if(C>0){e[h]=t[C];for(var D=0;D<C;++D)o(decodeURIComponent(t[D]),h)}}}function p(h){return c||
h.replace(/([^:\/]\/).*$/,"$1ig/idi_relay")}function r(h){window.clearInterval(i[h]);i[h]=0}function l(h){a=h}function x(h){c=h}function y(h,o,q){r(h);i[h]=window.setInterval(function(){n(h,o)},typeof q=="object"&&q.pollingInterval||IDICommon.IDI_DEFAULT_POLLING_INTERVAL)}function O(h,o,q){var B;if(typeof q=="object")B=q.moduleRelayUrl;var v=d[h];if(isNaN(v))throw new Error("Invalid module id");else{var t=typeof B=="string"?B:p(g[h]),C=encodeURIComponent(o)+"$",D=IDICommon.MAX_URL_LENGTH-1-t.length,
F=IDICommon.splitURIComponent(C,D),P=F.length;for(var z=0;z<P;++z)IDICommon.appendHiddenIframe(h+"_"+(v+z),t+"#"+F[z]);d[h]+=P}}function K(h,o,q,B,v){var t={frameBorder:0,scrolling:"no"},C,D,F,P,z;if(typeof v=="object"){C=v.iframeAttrs;D=v.callback;F=v.userPrefs;P=v.pollingInterval;z=v.parentDivId}if(typeof C=="object")k(t,C);k(t,{id:o,name:o,src:h,width:q,height:B});b[o]=0;d[o]=0;e[o]="";g[o]=h;var Q=[];if(typeof F=="object")for(var G in F)Q.push(encodeURIComponent(G)+"="+encodeURIComponent(F[G]));
if(typeof D=="function"){Q.push("idi_hr="+encodeURIComponent(a));window.IDIHost.registerListener(o,D,v)}if(Q.length){var L=Q.join("&");if(t.src.length+1+L.length>IDICommon.MAX_URL_LENGTH){L+="$";var ca=p(h),ra=IDICommon.MAX_URL_LENGTH-1-ca.length,da=IDICommon.splitURIComponent(L,ra),ea=da.length;for(var G=0;G<ea;++G){var U=o+"_"+G,fa=ca+"#"+da[G];if(z){var V=document.getElementById(z);V.innerHTML+=IDICommon.makeIframeTag({id:U,name:U,src:fa,width:0,height:0,frameBorder:0})}else IDICommon.writeHiddenIframe(U,
fa)}d[o]+=ea;L=""}t.src+="#"+L}if(z){var V=document.getElementById(z);V.innerHTML+=IDICommon.makeIframeTag(t)}else document.write(IDICommon.makeIframeTag(t))}return{setHostRelayUrl:l,setModuleRelayUrl:x,getModuleRelayUrl:p,registerListener:y,unregisterListener:r,postMessageToModule:O,createModule:K}})();var ia=ia||{},M=this;if(Object.prototype.propertyIsEnumerable);;;;var ja=function(a,c){var b=c.length;for(var d=0;d<b;d++){var e=b==1?c:c.charAt(d);if(a.charAt(0)==e&&a.charAt(a.length-1)==e)return a.substring(1,a.length-1)}return a};var ka,la,ma,na,oa,pa,qa,sa,ta,ua,va,wa,xa=function(){var a=false,c=false,b=false,d=false,e=false,g=false,i=false,k=false,n=false,p="";if(M.navigator){var r=M.navigator,l=r.userAgent;a=l.indexOf("Opera")==0;c=!a&&l.indexOf("MSIE")!=-1;b=!a&&l.indexOf("WebKit")!=-1;n=b&&l.indexOf("Mobile")!=-1;d=!a&&!b&&r.product=="Gecko";e=d&&r.vendor=="Camino";var x,y;if(a)x=M.opera.version();else{if(d)y=/rv\:([^\);]+)(\)|;)/;else if(c)y=/MSIE\s+([^\);]+)(\)|;)/;else if(b)y=/WebKit\/(\S+)/;if(y){y.test(l);x=RegExp.$1}}p=
r.platform||"";g=p.indexOf("Mac")!=-1;i=p.indexOf("Win")!=-1;k=p.indexOf("Linux")!=-1}ka=a;la=c;ma=d;na=e;oa=b;pa=oa;qa=x;sa=p;ta=g;ua=i;va=k;wa=n};xa();;;;;var ya=function(a){return typeof a=="string"?document.getElementById(a):a},za=ya;var Aa=function(a){return a.nodeType==9?a:a.ownerDocument||a.document};;;var Ba=function(a,c){var b=Aa(a);if(b.defaultView&&b.defaultView.getComputedStyle){var d=b.defaultView.getComputedStyle(a,"");if(d)return d[c]}return null};var Ca=function(a){var c=Aa(a),b="";if(c.createTextRange){var d=c.body.createTextRange();d.moveToElementText(a);b=d.queryCommandValue("FontName")}if(!b){b=Ba(a,"fontFamily")||(a.currentStyle?a.currentStyle.fontFamily:null)||a.style.fontFamily;if(ka&&va)b=b.replace(/ \[[^\]]*\]/,"")}var e=b.split(",");if(e.length>1)b=e[0];return ja(b,"\"'")};function N(a){return a!=null?'"'+a+'"':'""'}function J(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function R(a,c){if(a&&c)window.google_ad_url+="&"+a+"="+c}function S(a){var c=window,b=A(a),d=c[a];R(b,d)}function T(a,c){if(c)R(a,J(c))}function W(a){var c=window,b=A(a),d=c[a];T(b,d)}function X(a,c){var b=window,d=A(a),e=b[a];if(d&&e&&typeof e=="object")e=e[c%e.length];R(d,e)}function Da(a,c){var b=a.screen,d=navigator.javaEnabled(),e=-c.getTimezoneOffset();if(b){R("u_h",
b.height);R("u_w",b.width);R("u_ah",b.availHeight);R("u_aw",b.availWidth);R("u_cd",b.colorDepth)}R("u_tz",e);R("u_his",history.length);R("u_java",d);if(navigator.plugins)R("u_nplug",navigator.plugins.length);if(navigator.mimeTypes)R("u_nmime",navigator.mimeTypes.length)}function Ea(a){if(!a.google_enable_first_party_cookie)return;if(H==null)H=new E;if(a._GA_googleCookieHelper==null)a._GA_googleCookieHelper=new I;if(!a._google_cookie_fetched){a._google_cookie_fetched=true;a._GA_googleCookieHelper.j(Y(a.google_ad_client))}}
function Y(a){if(a){a=a.toLowerCase();if(a.substring(0,3)!="ca-")a="ca-"+a}return a}function Fa(a){if(a){a=a.toLowerCase();if(a.substring(0,9)!="dist-aff-")a="dist-aff-"+a}return a}function Ga(a,c){var b=document.getElementById(a);b.style.height=c+"px"}function Ha(a,c,b){window.clearTimeout(b);var d=/^google_resize_flash_ad_idi\((\d+)\)/,e=a.match(d);if(e)Ga(c,e[1])}function Ia(a,c,b,d){b=b.substring(0,2000);b=b.replace(/%\w?$/,"");var e="script";if((a.google_ad_output=="js"||a.google_ad_output==
"json_html")&&(a.google_ad_request_done||a.google_radlink_request_done))c.write("<"+e+' language="JavaScript1.1" src='+"about.com_files/ads.js"+"></"+e+">");else if(a.google_ad_output=="html"){if(a.name!="google_ads_frame"){if(d!=null)c.write('<div id="'+d+'">');if(Ja(a.google_ad_output,a.google_ad_client)){IDIHost.setModuleRelayUrl("http://pagead2.googlesyndication.com/pagead/idi_relay.html");var g=0;if(a.google_num_0ad_slots)g+=a.google_num_0ad_slots;if(a.google_num_ad_slots)g+=a.google_num_ad_slots;if(a.google_num_sdo_slots)g+=
a.google_num_sdo_slots;var i="google_inline_div"+g,k="<div id="+N(i)+' style="position:relative;width:'+a.google_ad_width+'px"></div><div style="position:relative;width:'+a.google_ad_width+"px;height:"+a.google_ad_height+'px;z-index:-1"></div>';c.write(k);var n="google_frame"+g,p=a.setTimeout(function(){IDIHost.unregisterListener(n)},5000);IDIHost.createModule(b,n,a.google_ad_width,a.google_ad_height,{callback:function(r,l){Ha(r,l,p)},pollingInterval:500,iframeAttrs:{style:"position: absolute;left:0px",
marginWidth:"0",marginHeight:"0",vspace:"0",hspace:"0",allowTransparency:"true"},parentDivId:i})}else{c.write('<iframe name="google_ads_frame" width='+N(a.google_ad_width)+" height="+N(a.google_ad_height)+" frameborder="+N(a.google_ad_frameborder)+" src="+"about.com_files/ads.js"+' marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">');c.write("</iframe>")}if(d!=null)c.write("</div>")}}else if(a.google_ad_output=="textlink");c.write("<"+e+' language="JavaScript1.1" src='+"about.com_files/ads.js"+
"></"+e+">")}function Ka(a){for(var c in ga)a[c]=null;for(var c in ha){if(c=="google_correlator")continue;a[c]=null}}function La(a){if(a.google_ad_format)return a.google_ad_format.indexOf("_0ads")>0;return a.google_ad_output!="html"&&a.google_num_radlinks>0}function Z(a){return a&&a.indexOf("_sdo")!=-1}function Ma(a){var c=null,b=window,d=document,e=new Date,g=e.getTime(),i=b.google_ad_format;if(b.google_cpa_choice!=c){b.google_ad_url="http://pagead2.googlesyndication.com/cpa/ads?";b.google_ad_url+=
"client="+escape(Y(b.google_ad_client));b.google_ad_region="_google_cpa_region_";S("google_cpa_choice");if(typeof d.characterSet!="undefined")T("oe",d.characterSet);else if(typeof d.charset!="undefined")T("oe",d.charset)}else if(Z(i)){b.google_ad_url="http://pagead2.googlesyndication.com/pagead/sdo?";b.google_ad_url+="client="+escape(Fa(b.google_ad_client))}else{b.google_ad_url="http://pagead2.googlesyndication.com/pagead/ads?";b.google_ad_url+="client="+escape(Y(b.google_ad_client))}S("google_ad_host");
S("google_ad_host_tier_id");var k=b.google_num_slots_by_client,n=b.google_num_slots_by_channel,p=b.google_prev_ad_formats_by_region,r=b.google_prev_ad_slotnames_by_region;if(b.google_ad_region==c&&b.google_ad_section!=c)b.google_ad_region=b.google_ad_section;var l=b.google_ad_region==c?"":b.google_ad_region;if(Z(i)){b.google_num_sdo_slots=b.google_num_sdo_slots?b.google_num_sdo_slots+1:1;if(b.google_num_sdo_slots>4)return false}else if(La(b)){b.google_num_0ad_slots=b.google_num_0ad_slots?b.google_num_0ad_slots+
1:1;if(b.google_num_0ad_slots>3)return false}else if(b.google_cpa_choice==c){b.google_num_ad_slots=b.google_num_ad_slots?b.google_num_ad_slots+1:1;if(b.google_num_slots_to_rotate){p[l]=c;r[l]=c;if(b.google_num_slot_to_show==c)b.google_num_slot_to_show=g%b.google_num_slots_to_rotate+1;if(b.google_num_slot_to_show!=b.google_num_ad_slots)return false}else if(b.google_num_ad_slots>6&&l=="")return false}R("dt",e.getTime());S("google_language");if(b.google_country)S("google_country");else S("google_gl");
S("google_region");W("google_city");W("google_hints");S("google_safe");S("google_encoding");S("google_last_modified_time");W("google_alternate_ad_url");S("google_alternate_color");S("google_skip");S("google_targeting");var x=b.google_ad_client;if(!k[x]){k[x]=1;k.length+=1}else k[x]+=1;if(p[l])if(!Z(i)){T("prev_fmts",p[l].toLowerCase());if(k.length>1)R("slot",k[x])}if(r[l])T("prev_slotnames",r[l].toLowerCase());if(i&&!b.google_ad_slot){T("format",i.toLowerCase());if(!Z(i))p[l]=p[l]?p[l]+","+i:i}if(b.google_ad_slot)r[l]=
r[l]?r[l]+","+b.google_ad_slot:b.google_ad_slot;S("google_max_num_ads");R("output",b.google_ad_output);S("google_adtest");S("google_ad_callback");S("google_ad_slot");W("google_correlator");if(b.google_ad_channel){W("google_ad_channel");var y="",O=b.google_ad_channel.split(/[+, ]/);for(var K=0;K<O.length;K++){var h=O[K];if(!n[h])n[h]=1;else y+=h+"+"}T("pv_ch",y)}if(b.google_enable_first_party_cookie)T("cookie",b._GA_googleCookieHelper.l());W("google_page_url");X("google_color_bg",g);X("google_color_text",
g);X("google_color_link",g);X("google_color_url",g);X("google_color_border",g);X("google_color_line",g);if(b.google_reuse_colors)R("reuse_colors",1);else R("reuse_colors",0);S("google_kw_type");W("google_kw");W("google_contents");S("google_num_radlinks");S("google_max_radlink_len");S("google_rl_filtering");S("google_rl_mode");S("google_rt");W("google_rl_dest_url");S("google_num_radlinks_per_unit");S("google_ad_type");S("google_image_size");S("google_ad_region");S("google_feedback");W("google_referrer_url");
W("google_page_location");R("frm",b.google_iframing);S("google_bid");S("google_cust_age");S("google_cust_gender");S("google_cust_interests");S("google_cust_id");S("google_cust_job");S("google_cust_u_url");S("google_cust_l");S("google_cust_lh");S("google_cust_ch");S("google_ed");W("google_ui_features");W("google_only_ads_with_video");W("google_disable_video_autoplay");if(a)T("ff",Ca(a));if(Na(b,d)&&d.body){var o=d.body.scrollHeight,q=d.body.clientHeight;if(q&&o)T("cc",Math.round(q*100/o))}aa();R("ga_vid",
b.gaGlobal.vid);R("ga_sid",b.gaGlobal.sid);R("ga_hid",b.gaGlobal.hid);R("ga_fc",b.gaGlobal.from_cookie);W("google_analytics_uacct");S("google_ad_override");S("google_flash_version");Da(b,e);return true}function Oa(){var a=window,c=document;Ea(a);var b;if(Math.random()<0.01){var d="google_temp_span";if(!za(d)){c.write("<span id="+d+"></span>");b=za(d)}}var e=Ma(b);if(b)b&&b.parentNode?b.parentNode.removeChild(b):null;if(!e)return;Ia(a,c,a.google_ad_url,null);Ka(a)}function Pa(){Oa();return true}function Na(a,
c){return a.top.location==c.location}function Qa(a,c){var b=c.documentElement;if(Na(a,c))return false;if(a.google_ad_width&&a.google_ad_height){var d=1,e=1;if(a.innerHeight){d=a.innerWidth;e=a.innerHeight}else if(b&&b.clientHeight){d=b.clientWidth;e=b.clientHeight}else if(c.body){d=c.body.clientWidth;e=c.body.clientHeight}if(e>2*a.google_ad_height||d>2*a.google_ad_width)return false}return true}function Ra(a){var c=window,b=null,d=c.onerror;c.onerror=a;if(c.google_ad_frameborder==b)c.google_ad_frameborder=
0;if(c.google_ad_output==b)c.google_ad_output="html";if(Z(c.google_ad_format)){var e=c.google_ad_format.match(/^(\d+)x(\d+)_.*/);if(e){c.google_ad_width=parseInt(e[1],10);c.google_ad_height=parseInt(e[2],10);c.google_ad_output="html"}}if(c.google_ad_format==b&&c.google_ad_output=="html")c.google_ad_format=c.google_ad_width+"x"+c.google_ad_height;Sa(c,document);if(c.google_num_slots_by_channel==b)c.google_num_slots_by_channel=[];if(c.google_num_slots_by_client==b)c.google_num_slots_by_client=[];if(c.google_prev_ad_formats_by_region==
b)c.google_prev_ad_formats_by_region=[];if(c.google_prev_ad_slotnames_by_region==b)c.google_prev_ad_slotnames_by_region=[];if(c.google_correlator==b)c.google_correlator=(new Date).getTime();if(c.google_adslot_loaded==b)c.google_adslot_loaded={};if(c.google_adContentsBySlot==b)c.google_adContentsBySlot={};if(c.google_flash_version==b)c.google_flash_version=Ta();c.onerror=d}function Ua(a){if(a in $)return $[a];return $[a]=navigator.userAgent.toLowerCase().indexOf(a)!=-1}var $={};function Ja(a,c){if(a!=
"html")return false;var b={};b["ca-pub-7027491298716603"]=true;b["ca-pub-8344185808443527"]=true;b["ca-google"]=true;return b[Y(c)]!=null}function Va(a){var c={},b=a.split("?"),d=b[b.length-1].split("&");for(var e=0;e<d.length;e++){var g=d[e].split("=");if(g[0])try{c[g[0].toLowerCase()]=g.length>1?(window.decodeURIComponent?decodeURIComponent(g[1].replace(/\+/g," ")):unescape(g[1])):""}catch(i){}}return c}function Wa(){var a=window,c=Va(document.URL);if(c.google_ad_override){a.google_ad_override=
c.google_ad_override;a.google_adtest="on"}}function Ta(){if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];if(a&&a.description)return a.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")}else if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var c=3,b=1;while(b)try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+(c+1));c++}catch(d){b=null}return c.toString()}else if(Ua("msie")&&!window.opera){var b=null;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7")}catch(d){var c=
0;try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");c=6;b.AllowScriptAccess="always"}catch(d){if(c==6)return c.toString()}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(d){}}if(b!=null){var c=b.GetVariable("$version").split(" ")[1];return c.replace(/,/g,".")}}return"0"}function Xa(a,c){for(var b in c)a["google_"+b]=c[b]}function Ya(a,c){if(!c)return a.location;return a.referrer}function Za(a,c){if(!c&&a.google_referrer_url==null)return"0";else if(c&&a.google_referrer_url==
null)return"1";else if(!c&&a.google_referrer_url!=null)return"2";else if(c&&a.google_referrer_url!=null)return"3";return"4"}function $a(a,c,b,d){a.page_url=Ya(b,d);a.page_location=null}function ab(a,c,b,d){a.page_url=c.google_page_url;a.page_location=Ya(b,d)||"EMPTY"}function bb(a,c){var b={},d=Qa(a,c);b.iframing=Za(a,d);if(!!a.google_page_url)ab(b,a,c,d);else $a(b,a,c,d);b.last_modified_time=c.location==b.page_url?Date.parse(c.lastModified)/1000:null;b.referrer_url=d?a.google_referrer_url:(a.google_page_url&&
a.google_referrer_url?a.google_referrer_url:c.referrer);return b}function cb(a){var c={},b=a.URL.substring(a.URL.lastIndexOf("http"));c.iframing=null;c.page_url=b;c.page_location=a.location;c.last_modified_time=null;c.referrer_url=b;return c}function Sa(a,c){var b;b=a.google_page_url==null&&db[c.domain]?cb(c):bb(a,c);Xa(a,b)}var db={};db["ad.yieldmanager.com"]=true;Wa();Ra(Pa);Oa();
})()