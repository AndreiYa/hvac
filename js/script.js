var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows()}};if(isMobile.any(),location.hash){var hsh=location.hash.replace("#","");$(".popup-"+hsh).length>0?popupOpen(hsh):$("div."+hsh).length>0&&$("body,html").animate({scrollTop:$("div."+hsh).offset().top},500,(function(){}))}$(".wrapper").addClass("loaded");var act="click";if(isMobile.iOS())act="touchstart";let iconMenu=document.querySelector(".icon-menu"),body=document.querySelector("body"),menuBody=document.querySelector(".menu__body");function popupOpen(e,o){$(".popup").removeClass("active").hide(),$(".menu__body").hasClass("active"),isMobile.any()?setTimeout((function(){$("body").addClass("lock")}),300):($("body").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()}).addClass("lock"),$(".pdb").css({paddingRight:$(window).outerWidth()-$(".wrapper").outerWidth()})),history.pushState("","","#"+e),""!=o&&null!=o&&$(".popup-"+e+" .popup-video__value").html('<iframe src="https://www.youtube.com/embed/'+o+'?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'),$(".popup-"+e).fadeIn(300).delay(300).addClass("active"),$(".popup-"+e).find(".slick-slider").length>0&&$(".popup-"+e).find(".slick-slider").slick("setPosition")}function openPopupById(e){$("#"+e).fadeIn(300).delay(300).addClass("active")}function popupClose(){$(".popup").removeClass("active").fadeOut(300),$(".menu__body").hasClass("active")||(isMobile.any()?$("body").removeClass("lock"):(setTimeout((function(){$("body").css({paddingRight:0}),$(".pdb").css({paddingRight:0})}),200),setTimeout((function(){$("body").removeClass("lock")}),200))),$(".popup-video__value").html(""),history.pushState("","",window.location.href.split("#")[0])}function ibg(){if(isIE()){let o=document.querySelectorAll(".ibg");for(var e=0;e<o.length;e++)o[e].querySelector("img")&&null!=o[e].querySelector("img").getAttribute("src")&&(o[e].style.backgroundImage="url("+o[e].querySelector("img").getAttribute("src")+")")}}function scrolloptions(){var e=100,o=50,t=!1;return isMobile.any()&&(e=10,o=1,t=!0),{cursorcolor:"#fff",cursorwidth:"4px",background:"",autohidemode:!0,cursoropacitymax:.4,bouncescroll:t,cursorborderradius:"0px",scrollspeed:e,mousescrollstep:o,directionlockdeadzone:0,cursorborder:"0px solid #fff"}}function scroll(){$(".scroll-body").niceScroll(".scroll-list",scrolloptions())}function tip(){$(".t,.tip").webuiPopover({placement:"top",trigger:"hover",backdrop:!1,animation:"fade",dismissible:!0,padding:!1,onShow:function(e){},onHide:function(e){}}).on("show.webui.popover hide.webui.popover",(function(e){$(this).toggleClass("active")}))}iconMenu&&iconMenu.addEventListener("click",(function(){iconMenu.classList.toggle("active"),body.classList.toggle("lock"),menuBody.classList.toggle("active")})),$(document).ready((function(){$(".sub_link").click((function(){$(".menu__body").removeClass("active"),$(".icon-menu").removeClass("active"),$("body").removeClass("lock")}))})),$(".gallery").length>0&&baguetteBox.run(".gallery",{}),$(".pl").click((function(e){return popupOpen($(this).attr("href").replace("#",""),$(this).data("vid")),!1})),$(".popup-close,.popup__close").click((function(e){return popupClose(),!1})),$(".popup").click((function(e){if(!$(e.target).is(".popup>.popup-table>.cell *")||$(e.target).is(".popup-close")||$(e.target).is(".popup__close"))return popupClose(),!1})),$(document).on("keydown",(function(e){27==e.which&&popupClose()})),$(".goto").click((function(){var e=$(this).attr("href").replace("#","");return $("body,html").animate({scrollTop:$("."+e).offset().top+0},500,(function(){})),$(".menu__body").hasClass("active")&&($(".menu__body,.icon-menu").removeClass("active"),$("body").removeClass("lock")),!1})),ibg(),$(document).on("click touchstart",(function(e){$(e.target).is(".select *")||$(".select").removeClass("active")})),$(window).scroll((function(){$(window).width();$(window).scrollTop()>50?$("#up").fadeIn(300):$("#up").fadeOut(300)})),$("#up").click((function(e){$("body,html").animate({scrollTop:0},300)})),$("body").on("click",".tab__navitem",(function(e){var o=$(this).index();if($(this).hasClass("parent"))o=$(this).parent().index();$(this).hasClass("active")||($(this).closest(".tabs").find(".tab__navitem").removeClass("active"),$(this).addClass("active"),$(this).closest(".tabs").find(".tab__item").removeClass("active").eq(o).addClass("active"),$(this).closest(".tabs").find(".slick-slider").length>0&&$(this).closest(".tabs").find(".slick-slider").slick("setPosition"))})),$.each($(".spoller.active"),(function(e,o){$(this).next().show()})),$("body").on("click",".spoller",(function(e){return $(this).hasClass("mob")&&!isMobile.any()||($(this).parents(".one").length>0&&($(this).parents(".one").find(".spoller").not($(this)).removeClass("active").next().slideUp(300),$(this).parents(".one").find(".spoller").not($(this)).parent().removeClass("active")),$(this).hasClass("closeall")&&!$(this).hasClass("active")&&$.each($(this).closest(".spollers").find(".spoller"),(function(e,o){$(this).removeClass("active"),$(this).next().slideUp(300)})),$(this).toggleClass("active").next().slideToggle(300,(function(e,o){$(this).parent().find(".slick-slider").length>0&&$(this).parent().find(".slick-slider").slick("setPosition")}))),!1})),-1!=navigator.appVersion.indexOf("Mac")||$(".scroll-body").length>0&&scroll(),$(".t,.tip").length>0&&tip(),jQuery(document).ready((function(e){e(".content_toggle").click((function(o){o.preventDefault();const t=e(o.target),i=t.prev("div.content_block");i.toggleClass("hide");const s=i.hasClass("hide")?"Read More":"Less";t.html(s)}))}));