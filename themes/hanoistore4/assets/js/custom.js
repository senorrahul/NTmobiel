/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
var DORTHEME = {
	init:function(){
		DORTHEME.ScrollTop();
		DORTHEME.MoveMenuLine();
		DORTHEME.DailyDeal();
		DORTHEME.Testimonials();
		DORTHEME.SortCateProduct();
		DORTHEME.RelatedProductSlide();
		DORTHEME.HeadTitle();
		DORTHEME.AboutUsFarmers();
		DORTHEME.AboutUsBrands();
		DORTHEME.SubListCategory();
		DORTHEME.ToolTipBootstrap();
		//DORTHEME.ToggleSearch();
		DORTHEME.SlidePictureBlock();
		DORTHEME.ResizeCategoryWindow();
		DORTHEME.EventSite();
		DORTHEME.ViewedProductSlide();
		DORTHEME.BrandsLists();
		DORTHEME.PartnersLists();
		DORTHEME.HotDeal();
		DORTHEME.SlideImageTabs();
		DORTHEME.VerticalMenuMobile();
		DORTHEME.SearchMobile();
		DORTHEME.HomeLastNews();
		DORTHEME.TopbarMobile();
		DORTHEME.AboutUsListUser();
		DORTHEME.EventActionProduct();
		DORTHEME.BestSell();
		DORTHEME.Testimonials();
		var headerfloat = localStorage.getItem("optionHeaderFloat");
		if((typeof DOR != "undefined" && typeof DOR.dorFloatHeader != "undefined" && parseInt(DOR.dorFloatHeader) == 1 && headerfloat == null) || (headerfloat != null && parseInt(headerfloat) == 1)){
			//DORTHEME.ScrollFixedMenu();
		}
	},
	EventSite:function(){
		var idObjPage = jQuery("body").attr("id");
		if(idObjPage == "category"){
			if(parseInt($( window ).width()) <= 991){
			  	jQuery("#left-column").detach().insertAfter('#content-wrapper');
			}
			DORTHEME.ResizeCategoryWindow();
		}
		
	},
	EventActionProduct:function(){
		if (jQuery(".scroll-div").length) {
            jQuery(".scroll-div").mCustomScrollbar({
                theme: "dark-2",
                scrollButtons: {
                    enable: false
                }
            });
        }
	},
	TopbarMobile:function(){
		jQuery("#_mobile_currency_selector > .currency-selector > span, #_mobile_currency_selector > .currency-selector > a").click(function(){
			var checkOpen = jQuery(this).closest(".currency-selector").hasClass("open");
			if(!checkOpen){
				jQuery(this).closest(".currency-selector").addClass("open");
			}else{
				jQuery(this).closest(".currency-selector").removeClass("open");
			}
		});
		jQuery("#_mobile_language_selector .language-selector-wrapper .language-selector > span, #_mobile_language_selector .language-selector-wrapper .language-selector > a").click(function(){
			var checkOpen = jQuery(this).closest(".language-selector-wrapper").hasClass("open");
			if(!checkOpen){
				jQuery(this).closest(".language-selector-wrapper").addClass("open");
			}else{
				jQuery(this).closest(".language-selector-wrapper").removeClass("open");
			}
		});
		jQuery(document).click(function (event) {
            if (!jQuery(event.target).is("#_mobile_currency_selector, #_mobile_currency_selector *")) {
                jQuery("#_mobile_currency_selector > .currency-selector").removeClass("open");
            }
            if (!jQuery(event.target).is("#_mobile_language_selector, #_mobile_language_selector *")) {
                jQuery("#_mobile_language_selector > .language-selector-wrapper").removeClass("open");
            }
        });
	},
	SearchMobile:function(){
		jQuery(".header-menu-item-icon > a").click(function(){
			var checkOpen = jQuery(".dorHeaderSearch-Wapper").hasClass("open");
			if(!checkOpen){
				jQuery(".dorHeaderSearch-Wapper").addClass("open");
			}else{
				jQuery(".dorHeaderSearch-Wapper").removeClass("open");
			}
		});
		if(parseInt($( window ).width()) <= 991){
			jQuery(document).click(function (event) {
	            if (!jQuery(event.target).is(".dorHeaderSearch-Wapper, .dorHeaderSearch-Wapper *, .header-menu-item-icon, .header-menu-item-icon *")) {
	                jQuery(".dorHeaderSearch-Wapper").removeClass("open");
	            }
	        });
	        jQuery(".dorHeaderSearch-Wapper").detach().insertBefore('.dorTopbarContent');
		}
	},
	VerticalMenuMobile:function(){
		jQuery(".fa-icon-menu").click(function(){
			$( ".dor-verticalmenu" ).slideToggle( "fast", function() {
		    	var isVisible = $( ".dor-verticalmenu" ).is( ":visible" );
		    	
		  	});
		});
		jQuery(".dor-verticalmenu .navbar ul.verticalmenu.nav li.parent > span.expand").click(function(){
			var _this = this;
			var isVisible = $(this).closest("li.parent").hasClass( "open" );
			jQuery(".dor-verticalmenu .navbar ul.verticalmenu.nav > li").removeClass("open");
			if(!isVisible){
				jQuery(this).closest("li.parent").addClass("open");
			}else{
				jQuery(this).closest("li.parent").removeClass("open");
			}
		});
	},
	AboutUsListUser:function(){
		$('.about-us-lists').owlCarousel({
	        items: 4,
	        loop: true,
	        nav: true,
	        autoplay: false,
	        margin:20,
	        responsive: {
	            0: {items: 1},
	            1500: {items: 4},
	            1200: {items: 4},
	            990: {items: 3},
	            767: {items: 2},
	            551: {items: 2},
	            320: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	    });
	},
	HomeLastNews:function(){
		$('.gst-post-list').owlCarousel({
	        items: 3,
	        loop: true,
	        nav: true,
	        autoplay: false,
	        margin:30,
	        responsive: {
	            0: {items: 1},
	            1500: {items: 3},
	            1200: {items: 3},
	            990: {items: 3},
	            767: {items: 2},
	            551: {items: 2},
	            320: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	    });
	},
	HotDeal:function(){
		$('.hotdeal-items-lists').owlCarousel({
	        items: 1,
	        loop: true,
	        navigation: true,
	        nav: true,
	        autoplay: false,
	        margin:0,
	        responsive: {
	            0: {items: 1},
	            1200: {items: 1},
	            1165: {items: 1},
	            990: {items: 1},
	            768: {items: 1},
	            410: {items: 1},
	            320: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	    });
	},
	BrandsLists:function(){
		$('.brands-lists > ul').owlCarousel({
	        items: 6,
	        loop: true,
	        navigation: true,
	        nav: true,
	        autoplay: false,
	        lazyLoad:true,
	        responsive: {
	            0: {items: 1},
	            1198: {items: 6},
	            1165: {items: 6},
	            990: {items: 4},
	            700: {items: 3},
	            600: {items: 3},
	            480: {items: 2},
	            320: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	    });
	},
	PartnersLists:function(){
		$('.partners-lists > ul').owlCarousel({
	        items: 6,
	        loop: true,
	        navigation: true,
	        nav: true,
	        autoplay: true,
	        lazyLoad:true,
	        responsive: {
	            0: {items: 1},
	            1198: {items: 6},
	            1165: {items: 6},
	            990: {items: 4},
	            700: {items: 3},
	            600: {items: 3},
	            480: {items: 2},
	            320: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	    });
	},
	SlideImageTabs:function(){
		$('.slide1 .slideImages, .slide2 .slideImages, .slide3 .slideImages').owlCarousel({
	        items: 1,
	        loop: true,
	        navigation: true,
	        nav: true,
	        autoplay: true,
	        lazyLoad:true,
	        responsive: {
	            0: {items: 1},
	            1198: {items: 1},
	            1165: {items: 1},
	            990: {items: 1},
	            700: {items: 1},
	            600: {items: 1},
	            480: {items: 1},
	            320: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	    });
	},
	ToolTipBootstrap:function(){
		setTimeout(function(){
			$('[data-toggle="tooltip"]').tooltip();
		},2000);
	},
	ToggleSearch:function(){
		jQuery(".header-menu-item-icon .icon-search, .header-menu-item-search .icon-search").click(function(e){
			e.preventDefault();
			jQuery(".dorHeaderSearch-Wapper").slideToggle(300,function(){
				if(jQuery(this).is(":hidden")){
					jQuery(".dorHeaderSearch-Wapper").removeClass("openSearch")
				}else{
					jQuery(".dorHeaderSearch-Wapper").addClass("openSearch")
				}
			});
		});
		jQuery(document).click(function (event) {
            if (!jQuery(event.target).is(".dorHeaderSearch-Wapper, .dorHeaderSearch-Wapper *, .header-menu-item-icon, .header-menu-item-icon *, .header-menu-item-search, .header-menu-item-search *")) {
                if(!jQuery(".dorHeaderSearch-Wapper").is(":hidden")){
                	jQuery(".dorHeaderSearch-Wapper").slideToggle(300,function(){});
                }
            }
        });
	},
	HeadTitle:function(){
		var checkTitle = jQuery("h1.h1").text();
		var checkPage = jQuery("body").attr("id");
		if(checkPage == "dorSmartBlogs"){
			checkTitle = jQuery(".info-title-blog > h1").text();
		}
		if(typeof checkTitle == "undefined" || checkTitle == null || checkTitle.length == 0){
			checkTitle = jQuery(".page-header h1").text();
		}
		if(typeof checkTitle == "undefined" || checkTitle == null || checkTitle.length == 0){
			checkTitle = jQuery(".title-head-card").text();
		}
		if(typeof checkTitle == "undefined" || checkTitle == null || checkTitle.length == 0){
			checkTitle = jQuery("#main > h2.h2").text();
		}
		if(typeof checkPage != "undefined" && checkPage != "category" && checkPage != "product" && typeof checkTitle != "undefined" && checkTitle != null && checkTitle.length > 0){
			jQuery("h1.category-name").text(checkTitle);
			jQuery("h1.h1").remove();
			jQuery(".page-header").remove();
			jQuery(".title-head-card").remove();
			jQuery("#main > h2.h2").remove();
		}
	},
	ResizeCategoryWindow:function(){
		$( window ).resize(function() {
		  var widthW = $( window ).width();
		  if(parseInt(widthW) <= 991){
		  	jQuery("#left-column").detach().insertAfter('#content-wrapper');
		  }else{
		  	jQuery("#left-column").detach().insertBefore('#content-wrapper');
		  }
		});
	},
	MoveMenuLine:function(){
		jQuery("#_desktop_language_selector").detach().appendTo('.dor-topbar-selector');
		jQuery("#_desktop_currency_selector").detach().appendTo('.dor-topbar-selector');
		if($( window ).width() <= 767){
			jQuery("#_mobile_language_selector").detach().appendTo('.dor-topbar-selector');
			jQuery("#_mobile_currency_selector").detach().appendTo('.dor-topbar-selector');
			jQuery("#_mobile_user_info").detach().appendTo('#_desktop_user_info');
			jQuery("#_mobile_cart").detach().appendTo('#_desktop_cart');
			jQuery("#_desktop_language_selector").remove();
			jQuery("#_desktop_currency_selector").remove();
		}
		$( window ).resize(function() {
		  var widthW = $( window ).width();
		  if(parseInt(widthW) <= 767){
		  	jQuery("#_mobile_language_selector").detach().appendTo('.dor-topbar-selector');
			jQuery("#_mobile_currency_selector").detach().appendTo('.dor-topbar-selector');
			jQuery("#_mobile_user_info").detach().appendTo('#_desktop_user_info');
			jQuery("#_mobile_cart").detach().appendTo('#_desktop_cart');
			jQuery("#_desktop_language_selector").remove();
			jQuery("#_desktop_currency_selector").remove();
		  }
		});
		jQuery(".widget-inner.block_content").each(function(){
			var checklevel = jQuery(this).find("ul").html();
			if(jQuery.trim(checklevel).length == 0){
				jQuery(this).addClass("finished-sub");
			}
		});
	},
	DailyDeal:function(){
		/*if (jQuery("#daily-countdown-time").length) {
			var endDate = jQuery("#endDateCountdown").val();
            $("#daily-countdown-time").countdown(endDate, function (event) {
                var $this = $(this).html(event.strftime(''
                        + '<div class="item-time"><span class="dw-time">%D</span> <span class="dw-txt">-days-</span></div>'
                        + '<div class="item-time"><span class="dw-time">%H</span> <span class="dw-txt">-hours-</span></div>'
                        + '<div class="item-time"><span class="dw-time">%M</span> <span class="dw-txt">-mins-</span></div>'
                        + '<div class="item-time"><span class="dw-time">%S</span> <span class="dw-txt">-secs-</span></div>'));
            });
        }*/
        jQuery(".countdown-daily").each(function(){
        	var productID = jQuery(this).attr("data-id");
        	var time = jQuery(this).attr("data-time");
        	var objID = "#countdown-timer-"+productID;
        	$(objID).countdown(time, function (event) {
                var $this = $(this).html(event.strftime(''
                        + '<div class="item-time"><span class="dw-time">%D</span> <span class="dw-txt">Day</span></div>'
                        + '<div class="item-time"><span class="dw-time">%H</span> <span class="dw-txt">Hour</span></div>'
                        + '<div class="item-time"><span class="dw-time">%M</span> <span class="dw-txt">Min</span></div>'
                        + '<div class="item-time"><span class="dw-time">%S</span> <span class="dw-txt">Sec</span></div>'));
            });
        });
	},
	Testimonials:function(){
		$('.testimonials-slide').owlCarousel({
            items: 1,
            loop: true,
            navigation: false,
            nav: true,
            autoplay: true,
            margin:0,
            responsive: {
                0: {items: 1},
                1200: {items: 1},
                1165: {items: 1},
                992: {items: 1},
                768: {items: 1},
                600: {items: 1},
                480: {items: 1},
                320: {items: 1}
            },
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	SubListCategory:function(){
		$('#subcategories > ul').owlCarousel({
            items: 3,
            loop: true,
            navigation: true,
            nav: false,
            autoplay: true,
            margin:30,
            responsive: {
                0: {items: 3},
                1200: {items: 3},
                1165: {items: 3},
                992: {items: 3},
                768: {items: 3},
                600: {items: 2},
                480: {items: 1},
                320: {items: 1}
            },
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	SortCateProduct:function(){
		jQuery(".products-sort-order .select-title").click(function(){
			var checkShow = jQuery(".products-sort-order").hasClass("show-sort-order");
			if(!checkShow)
				jQuery(".products-sort-order").addClass("show-sort-order");
			else
				jQuery(".products-sort-order").removeClass("show-sort-order");
			return false;
		});
		jQuery(document).click(function (event) {
            if (!jQuery(event.target).is(".products-sort-order .select-title, .products-sort-order .select-title *, .products-sort-order .dropdown-menu, .products-sort-order .dropdown-menu *")) {
                jQuery(".products-sort-order").removeClass("show-sort-order");
            }
        });
	},
	RelatedProductSlide:function(){
		var checkColLeft = jQuery('#dor-left-column').html();
		var checkColRight = jQuery('#dor-right-column').html();
		if(typeof checkColLeft != "undefined" || typeof checkColRight != "undefined"){
			$('#productscategory_list_data .product_list_items').owlCarousel({
	            items: 3,
		        loop: true,
		        navigation: true,
		        nav: false,
		        autoplay: false,
		        margin:30,
		        responsive: {
		            0: {items: 1},
		            1200: {items: 3},
		            992: {items: 3},
		            768: {items: 3},
		            400: {items: 2},
		            300: {items: 1}
		        },
		        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	        });
		}else{
			$('#productscategory_list_data .product_list_items').owlCarousel({
	            items: 4,
		        loop: true,
		        navigation: true,
		        nav: false,
		        autoplay: false,
		        margin:30,
		        responsive: {
		            0: {items: 1},
		            1200: {items: 4},
		            992: {items: 4},
		            768: {items: 3},
		            400: {items: 2},
		            300: {items: 1}
		        },
		        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	        });
		}
	},
	ViewedProductSlide:function(){
		var checkColLeft = jQuery('#dor-left-column').html();
		var checkColRight = jQuery('#dor-right-column').html();
		if(typeof checkColLeft != "undefined" || typeof checkColRight != "undefined"){
			$('.viewed-product-lists .products').owlCarousel({
	            items: 3,
		        loop: true,
		        navigation: true,
		        nav: false,
		        autoplay: false,
		        margin:30,
		        responsive: {
		            0: {items: 1},
		            1200: {items: 3},
		            992: {items: 3},
		            768: {items: 3},
		            400: {items: 2},
		            300: {items: 1}
		        },
		        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	        });
		}else{
			$('.viewed-product-lists .products').owlCarousel({
	            items: 4,
		        loop: true,
		        navigation: true,
		        nav: false,
		        autoplay: false,
		        margin:30,
		        responsive: {
		            0: {items: 1},
		            1200: {items: 4},
		            992: {items: 4},
		            768: {items: 3},
		            400: {items: 2},
		            300: {items: 1}
		        },
		        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	        });
		}
	},
	ScrollTop:function(){
		jQuery('.to-top').click(function () {
            jQuery('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
        jQuery(window).scroll(function () {
		    if (jQuery(this).scrollTop() > 100) {
		        jQuery('.to-top').css({bottom: '20px'});
		    }
		    else {
		        jQuery('.to-top').css({bottom: '-50px'});
		    }

		});
	},
	AboutUsBrands:function(){
		$('.aboutPartners').owlCarousel({
            items: 5,
	        loop: true,
	        navigation: true,
	        nav: false,
	        autoplay: true,
	        margin:0,
	        responsive: {
	            0: {items: 1},
	            1200: {items: 5},
	            992: {items: 4},
	            500: {items: 3},
	            380: {items: 2},
	            300: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	AboutUsFarmers:function(){
		$('.aboutus-ourfarmers').owlCarousel({
            items: 4,
	        loop: true,
	        navigation: true,
	        nav: false,
	        autoplay: true,
	        margin:30,
	        responsive: {
	            0: {items: 1},
	            1200: {items: 4},
	            992: {items: 4},
	            768: {items: 3},
	            400: {items: 2},
	            300: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
	},
	ScrollFixedMenu:function(){
		n = 150;
		if(prestashop.page.page_name == "index")
			var n = jQuery("#dorSlideShow").height() - 30;
		$(window).bind('scroll', function() {
	     var navHeight = n;
	       if ($(window).scrollTop() > navHeight) {
	         $('#header').addClass('fixed fixed-tran');
	         var checkLogoFix = jQuery(".logoFixed").html();
	         if(jQuery.trim(checkLogoFix).length == 0){
	          var logo = jQuery(".logo.img-responsive").attr("src");
	          var linkHomePage = jQuery("#header_logo > a").attr("href");
	        }
	       }
	       else {
	         $('#header').removeClass('fixed');
	         $('#header').removeClass('fixed-tran');
	         jQuery(".logoFixed").remove();
	       }
	    });
	},

	ChooseAttrDetail:function(){
		jQuery('body').on('change', '.product-variants [data-product-attribute]', function () {
			
		});
	},
	SlidePictureBlock:function(){
		$('.slide-picture > ul').owlCarousel({
	        items: 1,
	        nav: false,
	        autoplay: true,
	        loop: true,
	        dots:true
	    });
	},
	BestSell:function(){
		var idObjTxt = jQuery(".dor-pro-tabcontent #dorTabAjaxPro > li.active > a").attr("href");
		if(typeof idObjTxt != "undefined"){
			var idObj = parseInt(idObjTxt.replace("#cate-tab-data-pro-",""));
			$('#cate-tab-data-pro-'+idObj+' ul.product_list').owlCarousel({
		        items: 4,
		        nav: true,
		        autoplay: false,
		        margin:10,
		        responsive: {
		            0: {items: 1},
		            1200: {items: 4},
		            992: {items: 3},
		            650: {items: 3},
		            381: {items: 2},
		            220: {items: 1}
		        },
		        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
		    });
	    }
	},
	Testimonials:function(){
		$('#wrapper-testimonials ul.slide').owlCarousel({
	        items: 1,
	        nav: true,
	        autoplay: true,
	        margin:0,
	        responsive: {
	            0: {items: 1},
	            1200: {items: 1},
	            992: {items: 1},
	            768: {items: 1},
	            450: {items: 1},
	            320: {items: 1}
	        },
	        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	    });
	},
}
jQuery(document).ready(function(){
	DORTHEME.init();
});