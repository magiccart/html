'use strict';

// cache
var body = $('body');
var mainSlider = $('#main-slider');
var imageCarousel = $('.img-carousel');
var partnersCarousel = $('#partners');
var promotionsSlider = $('#promotions-slider');
var testimonialsSlider = $('#testimonials-slider');
var productImgCarousel = $('.product-img-carousel');  
var productfeatured = $('#featured-product');
var productnew = $('#new-product');
var productsale = $('#sale-product');
var productfeatured2 = $('#featured-product2');
var productnew2 = $('#new-product2');
var productsale2 = $('#sale-product2');
var crazyteam = $('#crazy-team-slide');
var blogSlider = $('#slide-blog');
var popupProductView = $('#popup-product-view');
var owlCarouselSelector = $('.owl-carousel');
var isotopeContainer = $('.isotope');
var isotopeFiltrable = $('#filtrable a');
var toTop = $('#to-top');
var hover = $('.thumbnail');
var navigation = $('.navigation');
var superfishMenu = $('ul.sf-menu');
var productViewMore = $('.viewMore_img'); 
var menuaccordion = $('.nav-accordion'); 
var zoomImage = $('#image-main'); 
var thumbImage = $('.thumb-link');  
var imageaload = $('.product-image-gallery a'); 
var subscribeme = $('.subscribe-me'); 
jQuery(document).ready(function () {

    // Left bar
	$('.toggle-mobile').on('click', function () {
        if($(this).parent().hasClass('.visible')){
            $(this).parent().removeClass('.visible');
        }else{
            $(this).parent().addClass('.visible');
        }
    });
	
    // prevent empty links
    // ---------------------------------------------------------------------------------------
    $('a[href=#]').click(function (event) {
        event.preventDefault();
    });
    // Sticky header/menu
    // ---------------------------------------------------------------------------------------
    if ($().sticky) {
        $('.header-sticky').sticky({topSpacing:0});
    }
    // superfish menu
    // ---------------------------------------------------------------------------------------
    if ($().superfish) {
        superfishMenu.superfish();
    }
    $('ul.sf-menu a').click(function () {
        body.scrollspy('refresh');
    });
    // fixed menu toggle
    $('.menu-toggle').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    $('.menu-toggle-close').on('click', function () {
        if (navigation.hasClass('opened')) {
            navigation.removeClass('opened').addClass('closed');
        } else {
            navigation.removeClass('closed').addClass('opened');
        }
    });
    // Smooth scrolling
    // ----------------------------------------------------------------------------------------
    $('.sf-menu a, .scroll-to').click(function () {

        $('.sf-menu a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, {
            duration: 1200,
            easing: 'easeInOutExpo'
        });
        return false;
    });
    // BootstrapSelect
    // ---------------------------------------------------------------------------------------
    if ($().selectpicker) {
        $('.selectpicker').selectpicker();
    }
    // colorbox 
    // ---------------------------------------------------------------------------------------
   
       // $("a[rel^='colorboxPhoto']").colorbox({width:"50%", height:"50%"});
   
    if ($().prettyPhoto) {
        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
		$("a[rel^='prettyPhoto']").prettyPhoto({
            theme: 'dark_square'
        });
    }
   
    // Scroll totop button
    // ---------------------------------------------------------------------------------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            toTop.css({bottom: '15px'});
        } else {
            toTop.css({bottom: '-100px'});
        }
    });
    toTop.click(function () {
        $('html, body').animate({scrollTop: '0px'}, 800);
        return false;
    });
    // add hover class for correct view on mobile devices
    // ---------------------------------------------------------------------------------------
    hover.hover(
        function () {
            $(this).addClass('hover');
        },
        function () {
            $(this).removeClass('hover');
        }
    );
	
	/* view more product image 
	----------------------------------*/
	 
	 if (productViewMore.length) {
            productViewMore.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 20,
                dots: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0: {items: 2},
                    479: {items: 3},
                    768: {items: 3},
                    991: {items: 3},
                    1024: {items: 4}
                }
            });
        }
    // Single product gallery in popup
    // ---------------------------------------------------------------------------------------
    if (popupProductView.length) {
        popupProductView.on('shown.bs.modal', function (e) {
            //$('.owl-carousel').trigger('refresh');
            /*$('.img-carousel').on('initialize.owl.carousel initialized.owl.carousel ' +
             'initialize.owl.carousel initialize.owl.carousel ' +
             'resize.owl.carousel resized.owl.carousel ' +
             'refresh.owl.carousel refreshed.owl.carousel ' +
             'update.owl.carousel updated.owl.carousel ' +
             'drag.owl.carousel dragged.owl.carousel ' +
             'translate.owl.carousel translated.owl.carousel ' +
             'to.owl.carousel changed.owl.carousel', function(e) {
             //
             });*/

            productImgCarousel.owlCarousel({
                items: 1,
                autoplay: false,
                loop: true,
                margin: 0,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ]
            });
        });
    }
    // Sliders
    // ---------------------------------------------------------------------------------------
    if ($().owlCarousel) {
        // Main slider
        if (mainSlider.length) {
            mainSlider.owlCarousel({
                //items: 1,
                autoplay: false,
                autoplayHoverPause: true,
                loop: true,
                margin: 0,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1}
                }
            });
        }
        
		
		if (testimonialsSlider.length) {
            testimonialsSlider.owlCarousel({
                //items: 1,
                autoplay: false,
                autoplayHoverPause: true,
                loop: false,
                margin: 0,
                dots: true,
                nav: true,
                navText: [
                    "<span class='fa fa-angle-left'></span>",
                    "<span class='fa fa-angle-right'></span>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1}
                }
            });
        }
        // Partners Slider
        if (partnersCarousel.length) {
            partnersCarousel.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
				items: 6,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 6}
                }
            });
        }
		if (productfeatured.length) {
            productfeatured.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 4}
                }
            });
        }
		if (productfeatured2.length) {
            productfeatured2.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 4}
                }
            });
        }
		if (productnew.length) {
            productnew.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 4}
                }
            });
        }
		if (productnew2.length) {
            productnew2.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 4}
                }
            });
        }
		if (productsale.length) {
            productsale.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 4}
                }
            });
        }	
		if (productsale2.length) {
            productsale2.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 4}
                }
            });
        }
		if (crazyteam.length) {
            crazyteam.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 2},
                    768: {items: 3},
                    991: {items: 4},
                    1024: {items: 5}
                }
            });
        }
		if (blogSlider.length) {
            blogSlider.owlCarousel({
                autoplay: true,
                loop: true,
                margin: 25,
                dots: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 2},
                    991: {items: 2},
                    1024: {items: 2}
                }
            });
        }
		
        // Images Carousel
        if (imageCarousel.length) {
            imageCarousel.owlCarousel({
                autoplay: false,
                loop: true,
                margin: 0,
                dots: true,
                nav: false,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                responsiveRefreshRate: 100,
                responsive: {
                    0: {items: 1},
                    479: {items: 1},
                    768: {items: 1},
                    991: {items: 1},
                    1024: {items: 1}
                }
            });
        }
    }
    
    // Google map
    // ---------------------------------------------------------------------------------------
    if (typeof google === 'object' && typeof google.maps === 'object') {
        if ($('#map-canvas').length) {
            var map;
            var marker;
            var image = 'images/icon-google-map.png'; // marker icon
            google.maps.event.addDomListener(window, 'load', function () {
                var mapOptions = {
                    scrollwheel: false,
                    zoom: 12,
                    center: new google.maps.LatLng(40.9807648, 28.9866516)
                };
                map = new google.maps.Map(document.getElementById('map-canvas'), // map coordinates
                    mapOptions);
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(41.0096559, 28.9755535), // marker coordinates
                    map: map,
                    icon: image,
                    title: 'Hello World!'
                })
            });
        }
    } 
	
	/* Newletter  
	---------------------------------------*/  
	 
	 if(subscribeme.length){
		subscribeme.subscribeBetter({
            trigger: "onload",
            delay: 300
        });
        var screen = $('html').width() - subscribeme.width();
        screen /= 2;
        subscribeme.offset({left:screen, right:screen});
	 }
	
	/* zoom image  
	---------------------------------------*/  
	 
	 if(zoomImage.length){
		zoomImage.elevateZoom({
			gallery:'gal_01', 
			cursor: 'pointer', 
			galleryActiveClass: "active",
			imageCrossfade: true, 
			zoomType : "inner", 
			// cursor: "crosshair",
			loadingIcon: "http://www.elevateweb.co.uk/spinner.gif"
		});
		/* zoomImage.bind("click", function(e) {
			var ez = zoomImage.data('elevateZoom');
			ez.closeAll();  
			$.fancybox(ez.getGalleryList());
		}); */
	 }
	
	 
	if(menuaccordion.length){
		menuaccordion.magicaccordion({
            accordion:true,
            speed: 400,
            closedSign: 'collapse',
            openedSign: 'expand',
            easing: 'easeInOutQuad'
        });
	 }

	var $toggleTab  = $('.toggle-tab');
	$toggleTab.click(function(){
		$(this).parent().toggleClass('toggle-visible').find('.toggle-content').toggleClass('visible');
	});
	
});
 
jQuery(window).load(function () {
    // preloader
    
    // Init Isotope
    if ($().isotope) {
        isotopeContainer.isotope({ // initialize isotope
            itemSelector: '.isotope-item' // options...
            //,transitionDuration: 0 // disable transition
        });
        isotopeFiltrable.click(function () { // filter items when filter link is clicked
            var selector = $(this).attr('data-filter');
            isotopeFiltrable.parent().removeClass('current');
            $(this).parent().addClass('current');
            isotopeContainer.isotope({filter: selector});
            return false;
        });
        isotopeContainer.isotope('reLayout'); // layout/reLayout
    }
    
    body.scrollspy({offset: 100, target: '.navigation'});
    body.scrollspy('refresh');
    // refresh owl sliders
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
});

jQuery(window).resize(function () {
    // refresh scrollspy
    body.scrollspy('refresh');
    // refresh owl sliders
    owlCarouselSelector.trigger('refresh');
    owlCarouselSelector.trigger('refresh.owl.carousel');
    //$('.owl-carousel').refresh();
    //$('.owl-carousel').update();
    //$('#').trigger('destroy.owl.carousel');
    // refresh isotope
    if ($().isotope) {
        isotopeContainer.isotope('reLayout'); // layout/relayout on window resize
    }
});

