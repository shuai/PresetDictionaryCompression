document.write('<!-- Template Id = 5623 Template Name = 1 - Banner Creative (Flash) -  In Page -->\n<!-- Copyright 2006 DoubleClick Inc., All rights reserved. --><script src=\"ign.com_files/flashwrite_1_2.js\"><\/script>');document.write('\n');

function DCFlash(id){
swf = "ign.com_files/300x250_HE_shutter_pre.swf";
gif = "ign.com_files/300x250_HE_shutter_pre.jpg";
minV = 5;
FWH = ' width="300" height="250" ';
url = escape("http://ad.doubleclick.net/click%3Bh=v8/36f7/3/0/%2a/o%3B205438989%3B0-0%3B0%3B28149009%3B4307-300/250%3B27253335/27271214/1%3B%3B%7Esscs%3D%3fhttp://www.shutterdvd.com");
wmode = "opaque";
bg = "";

openWindow = "false";
winW = 600;
winH = 400;
winL = 0;
winT = 0;

fv='"clickTag='+url+'&clickTAG='+url+'&clicktag='+url+'"';
bgo=(bg=="")?"":'<param name="bgcolor" value="#'+bg+'">';bge=(bg=="")?"":' bgcolor="#'+bg+'"';
this.FSWin=function(){if((openWindow=="false")&&(id=="DCF0"))alert('openWindow is wrong.');if((openWindow=="center")&&window.screen){winL=Math.floor((screen.availWidth-winW)/2);winT=Math.floor((screen.availHeight-winH)/2);}window.open(unescape(url),id,"width="+winW+",height="+winH+",top="+winT+",left="+winL+",status=no,toolbar=no,menubar=no,location=no");}
this.mF=function(){swf=swf+'?clickTag='+url;
	var adcode='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+id+'"'+FWH+'>'+
		'<param name="movie" value="'+swf+'"><param name="flashvars" value='+fv+'><param name="quality" value="high"><param name="wmode" value="'+wmode+'"><param name="base" value="'+swf.substring(0,swf.lastIndexOf("/"))+'"><PARAM NAME="AllowScriptAccess" VALUE="always">'+bgo+
		'<embed src="'+swf+'" flashvars='+fv+bge+FWH+' type="application/x-shockwave-flash" quality="high" swliveconnect="true" wmode="'+wmode+'" name="'+id+'" base="'+swf.substring(0,swf.lastIndexOf("/"))+'" AllowScriptAccess="always"></embed></object>';
  if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);}}
eval('this.mI=function(){document.write(\'<a target="_blank" href="'+unescape(url)+'"><img src="'+gif+'"'+FWH+'border="0" alt="" galleryimg="no"></a>\');}');
this.getCode=function(pV){ua=navigator.userAgent;a=(minV<=pV&&(openWindow=="false"||(ua.indexOf("Mac")<0&&ua.indexOf("Opera")<0)))?this.mF():this.mI();return a;}}
pVF="No Flash";pVM=0;DCid=(isNaN("205438989"))?"DCF0":"DCF205438989";
if(navigator.plugins && navigator.mimeTypes.length){
  var x=navigator.plugins["Shockwave Flash"];if(x && x.description){pVFull=x.description;a=pVFull.indexOf("Flash ")+6;pVM=pVFull.substring(a,pVFull.indexOf(".",a));}}
else if (window.ActiveXObject && window.execScript){
  window.execScript('on error resume next\na=2\ndo\na=a+1\nset swControl = CreateObject("ShockwaveFlash.ShockwaveFlash."&a)\nloop while Err = 0\n',"VBScript");if(a>3){pVM=a-1;}}
eval("function "+DCid+"_DoFSCommand(c,a){if(c=='openWindow')o"+DCid+".FSWin();}o"+DCid+"=new DCFlash('"+DCid+"');o"+DCid+".getCode(pVM);");
//-->

document.write('\n<noscript><a target=\"_blank\" href=\"http://ad.doubleclick.net/click%3Bh=v8/36f7/3/0/%2a/o%3B205438989%3B0-0%3B0%3B28149009%3B4307-300/250%3B27253335/27271214/1%3B%3B%7Esscs%3D%3fhttp://www.shutterdvd.com\"><img src=\"http://m1.2mdn.net/1393346/300x250_HE_shutter_pre.jpg\" width=\"300\" height=\"250\" border=\"0\" alt=\"\" galleryimg=\"no\"></a></noscript>');
