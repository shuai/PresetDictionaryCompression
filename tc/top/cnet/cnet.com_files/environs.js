/*	this file is deprecated; use the version in the commerce framework in /html/rb/js/commerce/implementations

function dbugScripts(baseurl, libs){if(window.location.href.indexOf("jsdebug=true")>0){for(i=0;i<libs.length;i++){
	if(!document.body) {
		try {console.log('writing: ' + baseurl+libs[i]); } catch(e){}
		document.write("<scri"+"pt src=\""+baseurl+libs[i]+"\" type=\"text/javascript\"></script>");
	} else {
		try {console.log('appending: ' + baseurl+libs[i]); } catch(e){}	
		var script = document.createElement('script');
		script.src = baseurl+libs[i];
		document.body.appendChild(script);
	}
	}return true;}return false;};

if(!dbugScripts("http://c18-x-publish1.cnet.com:8100/html/js/community/historybar/",["environs.js"])){

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[(function(e){return d[e]})];e=(function(){return'\\w+'});c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('3(t f=="w"){5 f={14:[],1c:g,Y:g,j:6(Z){2.14.B(Z)},2F:6(){3(2.1c){2.Y=n;2.j=1s.Y;2.j(\'3C f\');2I=2;2.14.H(6(Z){2I.j(Z)});2.14=[]}},2V:6(){3(2.1c)2.Y=g;2.j=6(){2.14.B(Z)}}};3(t 1s!="w"){3(t 1s.Y!="w"){f.1c=n;3(12.U.15.C("2X=n")>0)f.2F()}}}5 1P=28.29();1P.2a={2b:6(a){2.9={};2.D=a.D;3(t a.u=="w")2.u=6(){};J 2.u=a.u;2.1q=a.1q;2.1j=a.1j;2.1Y()},1Y:6(){5 b=2;$A(2.D).H(6(7,1v){b.9[7.8]=1m(7.8);f.j("7: %s, 1S: %s, 2Y d: %s",7.8,1m(7.8),b.9[7.8]);b.1l(7.8)});5 1w=n;$A(2.D).H(6(7){3(b.9[7.8]==I)1w=g});3(!1w)2.2J();J 2.u()},1l:6(16){3(2.9[16]=="n")2.9[16]=n;3(2.9[16]=="g")2.9[16]=g},2J:6(){5 2k=x 1g(2.1q,{u:2.2D.31(2)})},2D:6(T){5 b=2;19{3(T.1i.C("<E")>=0){f.j(\'1E 1F 1G 1I 1K 1M\');h g}5 R=v("("+T.1i+")");R=R.33[0];$A(2.D).H(6(7,1v){3(t R[7.8]!="w"&&R[7.8]!=I)b.9[7.8]=R[7.8];J b.9[7.8]=7.1a;b.1l(7.8)})}1n(e){f.j("9 34: %s, 35 36",e);$A(2.D).H(6(7,1v){3(t b.9[7.8]=="w"||b.9[7.8]==I||b.9[7.8]=="I")b.9[7.8]=7.1a;b.1l(7.8)})}f.j(\'9 37: %1.o\',2.9);2.2A();2.u()},2A:6(){5 b=2;5 W="";$A(2.D).H(6(7){1h(7.8,b.9[7.8],7.k,7.l);W+=7.8+":"+b.9[7.8]+";"});f.j("38 9 39: %s",W);3(W!="")5 2k=x 1g(2.1j+W,{})}};5 1z=28.29();1z.2a={L:10,k:3a,2b:6(a){2.O=a.O;3(2.S(a.L))2.L=a.L;3(2.S(a.k))2.k=a.k;3(2.S(a.l))2.l=a.l;2.2c()},S:6(d){3(t d=="w")h g;h n},2c:6(){2.d=1m(2.O);3(2.d==I||2.d==""||3b(2.d)=="3d"){2.d=2.2h();2.1b()}},1b:6(d){3(2.S(d))2.d=d;3(2.S(2.l))1h(2.O,2.d,2.k,2.l);J 1h(2.O,2.d,2.k)},2j:6(){2d=x 2s();2f=(2d.2u()*3e+3f)%2g;h 2f/(2g.0)},2h:6(){h 3g.3h(2.2j()*2.L)}};5 2l=3j.3k.3m();5 1C=(2l.C(\'2o\')>0);5 G=x 1z({O:"G",L:10,k:1R,l:"q.p"});3(12.U.15.C("2n=n")>0)G.1b(11);3(12.U.15.C("2n=g")>0)G.1b(0);f.j("G: %s, 2o: %s",G.d,1C);5 1X=[{8:"3p",1a:n,k:2r,l:"q.p"},{8:"3q",1a:n,k:2r,l:"q.p"}];5 1N=!!17.2G;2x.27(6(){1N=n});6 1h(8,2y,k,l){3(k){5 1k=x 2s();1k.3r(1k.2u()+(k*24*1R*1R*3s));5 1p="; 1p="+1k.3t()}J 1p="";5 1D=8+"="+2y+1p+"; 3u=/";3(t l!="w")1D+="; l="+l;17.1S=1D};6 1m(8){5 1L=8+"=";5 1H=17.1S.3w(\';\');1u(5 i=0;i<1H.Q;i++){5 c=1H[i];3x(c.3y(0)==\' \')c=c.2B(1,c.Q);3(c.C(1L)==0)h c.2B(1L.Q,c.Q)}h I};5 M=\'/E/N/3z/3A/\';5 y=$A({});5 P=[];5 1W=-1;5 m=x 3B();6 1t(m){1u(i=0;i<m.Q;i++){3(v("(t "+m[i][\'v\']+" == \\"w\\" || "+m[i][\'v\']+" == I)")){1Q=17.3D(\'F\');1Q.3E(\'3F\',m[i][\'F\']);17.2G.3G(1Q)}}};3(t 1T=="w"&&K){5 1T=K.2K;5 2L=K.2M;5 X=K.2N;5 13=K.2P;5 2Q=K.2S}6 26(){5 1d={\'q.p V 2T\':{1y:6(){z=12.U.15;3((X.r(/(2E|20|21|22|23|25|18)/)&&z.r(/q\\.p/i))||(X.r(/(18)/)&&z.r(/1x(.*)\\.q\\.p/i)))h n;h g},1r:6(){3(!2U(13)){19{3(y.C(13)==-1){1W=13;x 1g("/1f-4-"+13+".E",{2i:\'1o=2W&2m=0&2q=30\',u:1B})}}1n(e){f.j(e)}}}},\'q.p\':{1y:6(){z=12.U.15;3(z.r(/2Z(.*)\\.q\\.p/i)||z.r(/32(.*)\\.q\\.p/i)||z.r(/1x(.*)\\.q\\.p/i)){3(!(X.r(/(2E|20|21|22|23|25|18)/)&&z.r(/q\\.p/i))&&!(X.r(/(18)/)&&z.r(/1x(.*)\\.q\\.p/i)))h n;h g}J h g},1r:6(){2e(0,30,1B)}}};5 3i=g;1u(1A 3l 1d){19{3(1d[1A].1y()){1d[1A].1r()}}1n(e){f.j(e)}};6 1B(T){19{3(T.1i.C("<E")>=0){f.j(\'1E 1F 1G 1I 1K 1M\');h g}5 2v=v("("+T.1i+")");5 1O=2z({1J:2v.1J,y:y,P:P});y=1O.y;P=1O.P}1n(e){f.j(\'1E 1F 1G 1I 1K 1M: %s\',e);h g}3(y.Q>0){m.B({F:M+\'3H.2H.N\',v:\'2H\'});m.B({F:M+\'1e/1U.N\',v:\'1U\'});m.B({F:M+\'1e/1V.N\',v:\'1V\'});m.B({F:M+\'1e/2O.N\',v:\'2R\'});m.B({F:M+\'1e/2C.N\',v:\'2C\'})}3(1N)1t(m);J 2x.27(6(){1t(m)})}};6 2e(2p,2t,2w){x 1g("/1f-4-0.E",{2i:\'1o=3n&2m=\'+2p+\'&2q=\'+2t,u:2w})};6 2z(a){$A(a.1J).H(6(V){3(a.y.C(V.1Z)==-1){a.P.B(V);a.y.B(V.1Z)}});h a};3(G.d>10&&(1C)){5 3v=x 1P({D:1X,u:26,1q:"/1f-4-0.E?1o=3o",1j:"/1f-4-0.E?1o=3c&9="})};',62,230,'||this|if||var|function|pref|name|prefs|args|tmpPH||val||dbug|false|return||log|days|domain|CTBrunScripts|true||com|cnet|match||typeof|onComplete|eval|undefined|new|userHistory|winLoc||push|indexOf|prefNames|html|script|CTBRandCookie|each|null|else|PageVars|limit|CTBBaseHref|js|cookieName|iconMeta|length|savedPrefs|isset|xml|location|prod|prefString|cnet_page_type|debug|msg|||window|cnet_asset_id|logged|href|prefName|document|4014|try|defaultVal|saveVal|firebug|cnetToolBarEnvirons|compressed|9609|ajax|setCookieTB|responseText|setPrefsURL|date|setBool|getCookieTB|catch|action|expires|getPrefsURL|collection|console|appendScripts|for|idx|allLoaded|shopper|condition|rndCookieMaker|environ|runEnv|is_ffox|cookieVal|failed|to|get|ca|data|products|from|nameEQ|server|isDOMReady|processed|CNETPrefHandler|CTBScript|60|cookie|cnet_site_id|lightbox|jlogger|currentItem|userPrefNames|loadPrefs|productId|4852|4507|4540|4510||4556|turnstyle|onDOMReady|Class|create|prototype|initialize|verify|today|loadToolbar|seed|233280|makeRand|postBody|makeSeed|aj|agt|startAt|giveMeATicket|firefox|start|maxHits|90|Date|maxItems|getTime|prods|callback|Event|value|processProducts|savePrefs|substring|makeBar|handleUserPrefs|4505|enable|body|fx|db|ajaxGetPrefs|siteId|cnet_ont_id|nodeId|pageType|toolbar|assetId|cnet_edition_id|CNETToolbar|editionId|pages|isNaN|disable|addAndRetrieve|jsdebug|stored|www||bind|reviews|preferences|error|using|defaults|loaded|set|as|999|parseInt|setPrefs|NaN|9301|49297|Math|ceil|environPass|navigator|userAgent|in|toLowerCase|retrieve|getPrefs|CNETtoolbarVisible|CNETtoolbarAnimate|setTime|1000|toGMTString|path|userPrefs|split|while|charAt|community|historybar|Array|enabling|createElement|setAttribute|src|appendChild|moo'.split('|'),0,{}));



}	*/