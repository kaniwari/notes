var $dataAppearance=document.querySelector("style[data-stylesheet='appearance']"),$wrapper=document.getElementById("wrapper"),userAgent=navigator.userAgent.toLowerCase(),i,$thumbnail,$headerWrapper,$body,newElement,$indexItem,$indexItemLength,$indexItemList;
-1!==userAgent.indexOf("trident")&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(f){var g=this;do{if(g.matches(f))return g;g=g.parentElement||g.parentNode}while(null!==g&&1===g.nodeType);return null}));
var getLink=function(f,g){newElement=document.createElement("link");newElement.rel=f;newElement.href=g;$dataAppearance.parentNode.insertBefore(newElement,$dataAppearance)},setAlterPage=function(f){if("no-result"===f)$indexItem=document.getElementById("no-result"),null!==$indexItem&&($indexItem=document.getElementById("fc-list"),document.getElementsByClassName("fc-wrapper")[0].className="fc-alter-wrapper",$indexItem.parentNode.removeChild($indexItem));else if($indexItem=document.getElementsByClassName("fc-index-item"),
$indexItemLength=$indexItem.length,0<$indexItemLength)for($indexItemList=" "+$indexItem[0].dataset.style,$indexItem[0].insertAdjacentHTML("beforebegin",'<section class="fc-wrapper"><header class="header-wrapper fc-script-font"><div class="fc-flex-center"><div class="header-inner fc-keep-all"><h1 class="fc-header">'+noticeHead+'</h1><p class="fc-size-15px">'+noticeDesc+'</p></div></div><div class="header-desc fc-size-12px fc-stripe fc-mono-line-height"></div></header><div class="fc-list fc-script-font fc-break-word'+
$indexItemList+'" id="fc-list"></div></section>'),$indexItemList=document.getElementById("fc-list"),i=0;i<$indexItemLength;i++)$indexItemList.appendChild($indexItem[i]),$indexItem[i].classList.remove("fc-index-hidden");else $indexItem=document.getElementsByClassName("absent_post"),$indexItemLength=$indexItem.length,0<$indexItemLength&&($indexItem=document.getElementsByTagName("main"),$indexItemLength=$indexItem.length,0<$indexItemLength&&(document.title=notFoundTitle,$indexItem[0].innerHTML='<section class="fc-alter-wrapper"><header class="header-wrapper fc-script-font"><div class="fc-flex-center"><div class="header-inner fc-keep-all"><h1 class="fc-header">'+
notFoundHead+'</h1></div></div><div class="header-desc fc-size-12px fc-stripe fc-mono-line-height"><div class="header-desc-sector-1"><p>404 \uc624\ub958</p></div><div class="header-desc-sector-2"><p>'+blogTitle+'</p></div></div></header><div class="alter-content fc-script-font fc-stripe" id="not-found"><div id="alter-artwork" hidden><div class="artboard not-found"><div class="layer1"></div><div class="layer2"></div></div></div><h2 class="alter-headline fc-mono-line-height fc-keep-all">'+notFoundHeadL2+
'</h2><p class="alter-desc fc-mono-line-height fc-keep-all">'+notFoundDesc+'</p><ul class="alter-button-wrapper fc-stripe fc-flex-center"><li class="alter-open-sidebar"><a class="alter-button fc-action fc-sticker2-color fc-size-15px fc-shadow fc-icon" data-action="sidebar-toggle" href="javascript:" role="button">\ucc3e\uc544\ubcf4\uae30\u2026</a></li><li><a class="alter-button fc-sticker2-color fc-size-15px fc-shadow" href="'+originalPath+'" role="button">\ucc98\uc74c\uc73c\ub85c</a></li></ul></div></section>'))},
setOpengraph=function(f,g,c,d){document.body.id===f&&"yes"===g&&($thumbnail=document.querySelector(c+"[data-thumbnail]"),null!==$thumbnail&&($thumbnail=$thumbnail.dataset.thumbnail,""!==$thumbnail&&(headerDefaultImage="off",headerImage3x=headerImage2x=headerImage=$thumbnail,headerRepeat="no-repeat",headerPosition="50% 50%",headerSize="cover",customHeaderSize="",darkHeaderImage3x=darkHeaderImage2x=darkHeaderImage=$thumbnail,void 0===$headerWrapper&&($headerWrapper=document.getElementById("cover-header-wrapper")),
"1"===$headerWrapper.dataset.default&&($headerWrapper.dataset.default=""),$headerWrapper.dataset.ready=d)))},fcAppearance=function(){var f,g,c,d;var a=function(a,b){""!==a&&("cover"===headerSize?(f="//img1.daumcdn.net/thumb/R2560x0/?fname="+a,g=".cover-header-background {background-image: url(//img1.daumcdn.net/thumb/R48x0/?fname="+a+")}.cover-header-background:before {background-image: url("+f+")}"):("custom"===headerSize?headerSize=customHeaderSize:f=a,g=".cover-header-background {background-image: url(//img1.daumcdn.net/thumb/R2560x0/?fname="+
a+")}.cover-header-background:before {display: none}"),g+=".cover-header-background, .cover-header-background:before {background-position: "+headerPosition+";background-size: "+headerSize+";background-repeat: "+headerRepeat+"}","on"===darkMode&&"dark"===b&&(g="@media (prefers-color-scheme: dark) {"+g+"}"),e+=g)};var b=function(a,b,d,f,g,k,l,n){void 0!==d?2560>d*k&&(c="("+b+"-width: "+d+"px)","on"===darkMode&&"dark"===g&&(c+=" and (prefers-color-scheme: dark)"),1<k&&96<l&&(c+=" and (-webkit-min-device-pixel-ratio: "+
k+"),"+c+" and (min-resolution: "+l+"dpi)"),c="@media "+c+" {"+a+"{background-image: url(//img1.daumcdn.net/thumb/R"+f*k+"x0/?fname="+n+")}}",e+=c):1<k&&96<l&&(c="on"===darkMode&&"dark"===g?"(-webkit-min-device-pixel-ratio: "+k+") and (prefers-color-scheme: dark),(min-resolution: "+l+"dpi) and (prefers-color-scheme: dark)":"(-webkit-min-device-pixel-ratio: "+k+"),(min-resolution: "+l+"dpi)",c="@media "+c+" {"+a+"{background-image: url(//img1.daumcdn.net/thumb/R2560x0/?fname="+n+")}}",e+=c)};var e=
":root {--link-color: "+linkColor+";--link-hover-color: "+linkHoverColor+";--headline-color: "+headlineColor+";--monospace-color: "+monospaceColor+";--highlight-color: "+highlightColor+";--sticker1-color: "+sticker1Color+";--sticker2-color: "+sticker2Color+";--sticker3-color: "+sticker3Color+";--header-color: "+headerColor+";--header-text-color: "+headerTextColor+";}";"on"===darkMode&&(e+="@media (prefers-color-scheme: dark) {:root {--link-color: "+darkLinkColor+";--link-hover-color: "+darkLinkHoverColor+
";--headline-color: "+darkHeadlineColor+";--monospace-color: "+darkMonospaceColor+";--highlight-color: "+darkHighlightColor+";--sticker1-color: "+darkSticker1Color+";--sticker2-color: "+darkSticker2Color+";--sticker3-color: "+darkSticker3Color+";--header-color: "+darkHeaderColor+";--header-text-color: "+darkHeaderTextColor+"}}");if("on"!==headerDefaultImage&&(a(headerImage),"on"===darkMode&&""!==darkHeaderImage&&a(darkHeaderImage,"dark"),""!==headerImage))if("cover"===headerSize){a=[320,500,960,1024,
1280,1600,1920,2560];for(i=d=a.length;0<i;i--)b(".cover-header-background:before","max",a[i],a[i],"light",1,96,headerImage);if(""!==headerImage2x)for(i=d;0<i;i--)b(".cover-header-background:before","max",a[i],a[i],"light",2,192,headerImage2x);if(""!==headerImage3x)for(i=d;0<i;i--)b(".cover-header-background:before","max",a[i],a[i],"light",3,288,headerImage3x);if("on"===darkMode&&""!==darkHeaderImage){for(i=d;0<i;i--)320!==a[i]&&b(".cover-header-background:before","max",a[i],a[i],"dark",1,96,darkHeaderImage);
if(""!==darkHeaderImage2x)for(i=d;0<i;i--)b(".cover-header-background:before","max",a[i],a[i],"dark",2,192,darkHeaderImage2x);if(""!==darkHeaderImage3x)for(i=d;0<i;i--)b(".cover-header-background:before","max",a[i],a[i],"dark",3,288,darkHeaderImage3x)}}else""!==headerImage2x&&b(".cover-header-background",void 0,void 0,void 0,"light",2,192,headerImage2x),""!==headerImage3x&&b(".cover-header-background",void 0,void 0,void 0,"light",3,288,headerImage3x),"on"===darkMode&&""!==darkHeaderImage&&(""!==darkHeaderImage2x&&
b(".cover-header-background",void 0,void 0,void 0,"dark",2,192,darkHeaderImage2x),""!==darkHeaderImage3x&&b(".cover-header-background",void 0,void 0,void 0,"dark",3,288,darkHeaderImage3x));"on"===enableHeaderLogo&&(""!==desktopHeaderLogo&&(b(".fc-trademark","min",760,640,"light",1,96,desktopHeaderLogo),b(".fc-trademark","min",760,640,"light",2,192,desktopHeaderLogo),b(".fc-trademark","min",760,640,"light",3,288,desktopHeaderLogo)),""!==mobileHeaderLogo&&(b(".fc-trademark","max",760,240,"light",1,
96,mobileHeaderLogo),b(".fc-trademark","max",760,240,"light",2,192,mobileHeaderLogo),b(".fc-trademark","max",760,240,"light",3,288,mobileHeaderLogo)),"on"===darkMode&&(""!==darkDesktopHeaderLogo&&(b(".fc-trademark","min",760,640,"dark",1,96,darkDesktopHeaderLogo),b(".fc-trademark","min",760,640,"dark",2,192,darkDesktopHeaderLogo),b(".fc-trademark","min",760,640,"dark",3,288,darkDesktopHeaderLogo)),""!==darkMobileHeaderLogo&&(b(".fc-trademark","max",760,240,"dark",1,96,darkMobileHeaderLogo),b(".fc-trademark",
"max",760,240,"dark",2,192,darkMobileHeaderLogo),b(".fc-trademark","max",760,240,"dark",3,288,darkMobileHeaderLogo))));$dataAppearance.removeChild($dataAppearance.firstChild);$dataAppearance.insertAdjacentHTML("afterbegin",e)},fcArticle=function(){var f=document.getElementById("fc-article"),g=document.getElementById("tags-trail"),c=f.getElementsByClassName("another_category"),d,a;var b=f.querySelectorAll('div[class*="fraccino"]');var e=b.length;if(0<e)for(a=0;a<e;a++)b[a].parentNode.removeChild(b[a]);
b=f.querySelector('div[style="text-align:left"], div[style="text-align:left;"], div[style="text-align: left"], div[style="text-align: left;"]');null!==b&&(b.className="tt_article_useless_p_margin",b.removeAttribute("style"));b=f.getElementsByClassName("tt_article_useless_p_margin");e=b.length;0<e?($wrapper.dataset.margin="useless",b[0].className="text-stripe useless-margin-inner"):$wrapper.dataset.margin="on";if(0<c.length){void 0===d&&(d=c[0].querySelectorAll("table a"));b=document.createElement("aside");
b.className="another-category text-block article-footer fc-stripe";parentElement=c[0].querySelector("h4");parentElement.className="fc-mono-line-height fc-icon";c[0].parentNode.insertBefore(b,c[0]);b.appendChild(parentElement);e=d.length;if(0<e)for(parentElement=f.getElementsByClassName("another-category"),b=document.createElement("ol"),b.className="fc-mono-line-height",parentElement[0].appendChild(b),parentElement=b,a=0;a<e;a++)b=document.createElement("li"),b.appendChild(d[a]),d[a].classList.add("fc-icon"),
d[a].classList.contains("current")&&(d[a].href="javascript:",d[a].title="\ud604\uc7ac \ubcf4\uace0 \uc788\ub294 \uae00\uc785\ub2c8\ub2e4.",d[a].classList.add("fc-go-to-top")),parentElement.appendChild(b);c[0].parentNode.removeChild(c[0])}d=f.querySelectorAll('span.imageblock a[href*="attachment"]');e=d.length;if(0<e)for(a=0;a<e;a++){-1===userAgent.indexOf("trident")&&(d[a].download="");c=d[a].parentElement;var h=d[a].textContent;if(null!==c&&"span"===c.tagName.toLowerCase()&&c.classList.contains("imageblock")){var m=
d[a];c.parentNode.insertBefore(c.firstChild,c);c.parentNode.removeChild(c);b=document.createElement("figure");m.parentNode.insertBefore(b,m);b.appendChild(m);b.className="fileblock"}d[a].innerHTML='<div class="image"></div><div class="desc"><div class="filename"><span class="name">'+h+'</span><div class="size">\ub2e4\uc6b4\ub85c\ub4dc</div></div></div>'}c=f.querySelectorAll("span.imageblock");e=c.length;if(0<e)for(a=0;a<e;a++)d=c[a].querySelector("span.cap1"),null!==d&&(b=document.createElement("figcaption"),
b.textContent=d.textContent,d.parentNode.insertBefore(b,d),d.parentNode.removeChild(d)),b=document.createElement("figure"),b.insertAdjacentHTML("afterbegin",c[a].innerHTML),b.className="imageblock",c[a].parentNode.insertBefore(b,c[a]),c[a].parentNode.removeChild(c[a]);d=f.querySelectorAll('iframe[src*="youtube"], iframe[src*="vimeo"], iframe[src*="kakao"], iframe[src*="naver"], iframe[src*="soundcloud"]');e=d.length;if(0<e)for(a=0;a<e;a++)c=d[a].parentElement,null!==c&&"figure"!==c.tagName.toLowerCase()&&
(h=d[a].src,"div"===c.tagName.toLowerCase()&&c.classList.contains("tt-youtube-plugin")&&(c.parentNode.insertBefore(c.firstChild,c),c.parentNode.removeChild(c)),b=document.createElement("figure"),d[a].parentNode.insertBefore(b,d[a]),b.appendChild(d[a]),b.dataset.keType="video",-1!==h.indexOf("youtube")?b.dataset.videoHost="youtube":-1!==h.indexOf("vimeo")?b.dataset.videoHost="vimeo":-1!==h.indexOf("kakao")?b.dataset.videoHost="kakao":-1!==h.indexOf("naver")?b.dataset.videoHost="naver":-1!==h.indexOf("soundcloud")&&
(b.dataset.videoHost="soundcloud"),b.dataset.videoUrl=h);d=f.querySelectorAll('figure[data-ke-type="video"] iframe');e=d.length;if(0<e)for(a=0;a<e;a++)b=document.createElement("div"),d[a].parentNode.insertBefore(b,d[a]),b.appendChild(d[a]),b.className="video-frame",b=d[a].width,h=d[a].height,"NaN"!==(b&&h)&&(c=d[a].parentElement,null!==c&&"video-frame"===c.className&&(c.style.paddingTop=h/b*100+"%"));d=f.querySelectorAll('iframe[data-ke-type="map"], iframe[src*="mapViewer"], iframe[src*="/maps."], iframe[src*="/maps/"], iframe[src*="/maps?"], iframe[src*="/maps#"], iframe[src*="/map."], iframe[src*="map/"], iframe[src*="map?"], iframe[src*="map#"]');
e=d.length;if(0<e)for(a=0;a<e;a++)c=d[a].parentElement,null!==c&&"p"===c.tagName.toLowerCase()&&(c.parentNode.insertBefore(c.firstChild,c),c.parentNode.removeChild(c)),b=document.createElement("figure"),d[a].parentNode.insertBefore(b,d[a]),b.appendChild(d[a]),b.className="embed-map";d=f.querySelectorAll("table");e=d.length;if(0<e)for(a=0;a<e;a++)if(c=d[a].parentElement,null!==c&&("p"===c.tagName.toLowerCase()&&(c.parentNode.insertBefore(c.firstChild,c),c.parentNode.removeChild(c)),"figure"!==c.tagName.toLowerCase()||
null===c))b=document.createElement("figure"),b.dataset.keType="table",d[a].parentNode.insertBefore(b,d[a]),b.appendChild(d[a]),b=document.createElement("div"),b.className="table-inner",d[a].parentNode.insertBefore(b,d[a]),b.appendChild(d[a]);b=f.querySelectorAll("p.txt_view");e=b.length;if(0<e)for(a=0;a<e;a++)b[a].outerHtml=b[a].innerHtml;b=f.querySelectorAll("p > figure");e=b.length;if(0<e)for(a=0;a<e;a++)c=b[a].parentElement,null!==c&&"p"===c.tagName.toLowerCase()&&(b[a].classList.contains("imageblock")?
b[a].classList.add("alignCenter"):"video"===b[a].dataset.keType&&(b[a].dataset.keStyle="alignCenter"),c.parentNode.insertBefore(c.firstChild,c),c.parentNode.removeChild(c));b=f.querySelectorAll('figure[class*="align"]:not(.alignCenter), figure[class*="float"]');e=b.length;if(0<e)for(a=0;a<e;a++)b[a].classList.contains("alignLeft")?b[a].classList.remove("alignLeft"):b[a].classList.contains("alignRight")?b[a].classList.remove("alignRight"):b[a].classList.contains("floatLeft")?b[a].classList.remove("floatLeft"):
b[a].classList.contains("floatRight")&&b[a].classList.remove("floatRight"),""!==b[a].getAttribute("style")&&b[a].removeAttribute("style");c=f.getElementsByTagName("blockquote");e=c.length;if(0<e)for(a=0;a<e;a++)void 0===c[a].dataset.keStyle&&(c[a].dataset.keStyle="style3"),c[a].classList.contains("tx-quote-tistory")&&c[a].classList.remove("tx-quote-tistory");c=f.querySelectorAll('blockquote[data-ke-style="box"], blockquote[data-ke-style="normal"]');e=c.length;if(0<e)for(a=0;a<e;a++)c[a].dataset.keStyle=
"box"===c[a].dataset.keStyle?"style3":"style2";c=f.querySelectorAll('blockquote:not([data-ke-style="style3"])');e=c.length;if(0<e)for(a=0;a<e;a++)c[a].classList.add("fc-stripe","fc-mono-line-height");b=f.querySelectorAll("pre > code");e=b.length;if(0<e){for(a=0;a<e;a++)c=b[a].parentElement,""!==c.className&&("on"===autoCodeType?(c.className="",void 0!==c.dataset.keLanguage&&delete c.dataset.keLanguage):void 0!==c.dataset.keLanguage&&(c.className=c.dataset.keLanguage)),void 0===c.dataset.keType&&(c.dataset.keType=
"codeblock");"on"===enableHighlightjs&&($wrapper.dataset.codeHighlighter="on");"on"===$wrapper.dataset.codeHighlighter&&("on"===stripeCode&&($wrapper.dataset.codeStripe="on"),"on"===codeWrap&&($wrapper.dataset.codeWrap="on"))}c=f.querySelectorAll('hr:not([data-ke-style*="style"])');e=c.length;if(0<e)for(a=0;a<e;a++)c[a].className="",c[a].dataset.keType="horizontalRule",c[a].dataset.keStyle="style5",c[a].removeAttribute("style");c=f.querySelectorAll('.text-stripe > .moreless_content, .text-stripe > [data-ke-type="moreLess"] .moreless-content');
e=c.length;if(0<e)for(a=0;a<e;a++)c[a].classList.add("text-stripe");d=f.querySelectorAll("button.btn_more, button.btn_less");e=d.length;if(0<e)for(a=0;a<e;a++)c=d[a].parentElement,null!==c&&(b=document.createElement("div"),b.className="more-button-container",c.classList.contains("text-stripe")&&b.classList.add("fc-stripe"),d[a].parentNode.insertBefore(b,d[a]),b.appendChild(d[a]));c=f.querySelectorAll(".txc-info, .txc-info *");e=c.length;if(0<e)for(a=0;a<e;a++)c[a].removeAttribute("style");c=f.querySelectorAll('*[style*="font-family"], *[style*="FONT-FAMILY"]');
e=c.length;if(0<e)for(a=0;a<e;a++)"'Noto Sans Demilight', 'Noto Sans KR'"===c[a].style.fontFamily?c[a].style.fontFamily+=", sans-serif":"'Noto Serif KR'"!==c[a].style.fontFamily&&(c[a].style.fontFamily="");c=f.querySelectorAll("p:empty");e=c.length;if(0<e)for(a=0;a<e;a++)c[a].parentNode.removeChild(c[a]);d=f.querySelectorAll('div:not(.text-stripe):not(.footnotes):not(.more-button-container):not([data-ke-type="moreLess"]):not(.moreless_content):not(.container_postbtn), blockquote[data-ke-style="style3"], #wrapper[data-code-highlighter="on"] pre[data-ke-type="codeblock"], figure:not(.fileblock)');
e=d.length;if(0<e)for(a=0;a<e;a++)null===d[a].parentElement.closest("figure, aside, nav, pre, .txc-info, div.footnotes, div.container_postbtn")&&(d[a].classList.contains("block")||d[a].classList.add("block"));d=f.querySelectorAll('h1, h2, h3, h4, h5, h6, hr, p, ol, ul, blockquote:not([data-ke-style="style3"]), #wrapper:not([data-code-highlighter="on"]) pre, pre:not([data-ke-type="codeblock"]), #wrapper:not([data-code-highlighter="on"]) pre, .more-button-container, figure.fileblock, div.footnotes, div.container_postbtn');
e=d.length;if(0<e)for(a=0;a<e;a++)null===d[a].parentElement.closest("figure, aside, nav, pre, .txc-info, div.footnotes, div.container_postbtn")&&(d[a].classList.contains("text-block")||d[a].classList.add("text-block"));d=f.querySelectorAll('[data-ke-type="moreLess"], .moreless_content');e=d.length;if(0<e)for(a=0;a<e;a++)d[a].classList.contains("moreless-block")||d[a].classList.add("moreless-block");d=f.querySelectorAll("div.footnotes, div.container_postbtn");e=d.length;if(0<e)for(a=0;a<e;a++)d[a].classList.contains("article-footer")||
d[a].classList.add("article-footer");d=f.querySelectorAll("h1, h2, h3, h4, h5, h6");e=d.length;if(0<e)for(a=0;a<e;a++)null===d[a].closest("figure, aside, nav, pre, div.footnotes, div.container_postbtn")&&(d[a].classList.contains("text-block-headline")||d[a].classList.add("text-block-headline"));d=f.querySelectorAll(".moreless-block, .text-block, .block");e=d.length;if(0<e)for(a=0;a<e;a++){for(b=d[a].nextElementSibling;null!==b&&"script"===b.tagName.toLowerCase();)b=b.nextElementSibling;if(null!==
b)d[a].classList.contains("moreless-block")&&b.classList.contains("block")?d[a].classList.add("after-block"):!d[a].classList.contains("before-block")&&b.classList.contains("moreless_content")&&b.classList.add("adjust-margin"),b.classList.contains("text-block")&&(b.classList.contains("text-block-headline")?d[a].classList.add("after-headline"):b.classList.contains("fileblock")?d[a].classList.add("after-fileblock"):"hr"===b.tagName.toLowerCase()?d[a].classList.add("after-line"):b.classList.contains("article-footer")&&
(d[a].classList.contains("article-footer")||d[a].classList.add("after-article-footer"),b.classList.contains("footnotes")?d[a].classList.add("after-footnotes"):b.classList.contains("container_postbtn")?d[a].classList.add("after-postbtn"):b.classList.contains("another-category")&&d[a].classList.add("after-another-category")));else if(c=d[a].parentElement,null!==c)d[a].classList.contains("block")?null===g||"fc-article"!==c.id&&!c.classList.contains("useless-margin-inner")?c.classList.contains("moreless-content")&&
!c.classList.contains("after-block")&&(c.closest('[data-ke-type="moreLess"]').classList.add("block-end"),b=document.createElement("div"),b.className="block-margin",b.hidden="true",c.appendChild(b)):g.closest(".tags").classList.add("before-block"):d[a].classList.contains("text-block")&&c.classList.contains("moreless-content")&&d[a].classList.add("end");for(b=d[a].previousElementSibling;null!==b&&"script"===b.tagName.toLowerCase();)b=b.previousElementSibling;null!==b?b.classList.contains("block")?d[a].classList.add("before-block"):
"moreLess"===b.dataset.keType?d[a].classList.add("before-moreless"):b.classList.contains("block-end")&&d[a].classList.add("before-moreless-block"):d[a].classList.add("first")}f.classList.add("loaded");if(null!==g&&(f.classList.add("has-tags-trail"),b=g.childNodes,e=b.length,0<e)){for(a=0;a<e;a++)void 0!==b[a]&&1!==b[a].nodeType&&b[a].parentNode.removeChild(b[a]);b=g.getElementsByTagName("a");e=b.length;if(0<e)for(a=0;a<e;a++)b[a].className="fc-shadow fc-size-12px fc-script-font",0===a&&b[a].classList.add("fc-icon")}};
