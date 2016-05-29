$(document).ready(function() {

	if($('input.data-inputmask').length > 0) {
		$('input.data-inputmask').mask("+7 (999) 999-99-99");
	}


	var mainCarousel = $('.slider__items').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		dots: true,
		dotsContainer: '.slider__dots',
	});
	$('.slider__nav_prev').click(function() {
		mainCarousel.trigger('prev.owl.carousel');
	});
	$('.slider__nav_next').click(function() {
		mainCarousel.trigger('next.owl.carousel');
	});

	var brandsCarousel = $('.brands__slider').owlCarousel({
		loop: true,
		nav: false,
		items: 2,
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			}
		}
	});
	$('.brands__nav_prev').click(function() {
		brandsCarousel.trigger('prev.owl.carousel');
	})
	$('.brands__nav_next').click(function() {
		brandsCarousel.trigger('next.owl.carousel');
	});



	var videoDescCarousel = $('.main-video__descs').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		freeDrag: false,
	});

	var videoCarousel = $('.main-video__slider').owlCarousel({
		loop: true,
		nav: false,
		items: 1,
		dots: true,
		dotsContainer: '.main-video__dots',
		video: true,
		center: true,
		lazyLoad:true,
	});

	videoCarousel.on('changed.owl.carousel', function(event) {
		videoDescCarousel.trigger('to.owl.carousel', event.page.index);
	})


	var detailCarousel = $('.slider-detail').owlCarousel({
		loop: true,
		nav: false,
		items: 3,
		dots: false,
		merge:true,
		center: true,
	});


	var similarCarousel = $('.carousel-product__slider').owlCarousel({
		loop: true,
		nav: false,
		items: 2,
		dots: false,
		responsive:{
			0:{
				items:2,
			},
			480:{
				items:3,
			}
		}
	});
	$('.carousel-product__nav_prev').click(function() {
		$(this).closest('.carousel-product__slider-wrap').find('.carousel-product__slider').trigger('prev.owl.carousel');
	})
	$('.carousel-product__nav_next').click(function() {
		$(this).closest('.carousel-product__slider-wrap').find('.carousel-product__slider').trigger('next.owl.carousel');
	});



	$('.button__link_hamburger').click(function() {
		$('.nav').slideToggle();
		return false;
	});

	$('.nav__item_sub').click(function() {
		if($(this).hasClass('active')){
			$('.nav__item_sub.active').removeClass('active');
			$(this).find('.icon-nav').slideToggle();
			$(this).find('.sub-nav').slideToggle();
		}else{

			$('.nav__item_sub.active').find('.icon-nav').slideToggle();
			$('.nav__item_sub.active').find('.sub-nav').slideToggle();
			$('.nav__item_sub.active').removeClass('active');
			$(this).addClass('active');
			$(this).find('.icon-nav').slideToggle();
			$(this).find('.sub-nav').slideToggle();
		}

		return false;
	});


	$('.zelect-sel').zelect({
		noResults: function($query) {
			return "Не найдено: "+$query;
		}
	});

	$('.filter__top-line').click(function() {
		$(this).closest('.filter').toggleClass('active');
		$(this).closest('.filter').find('.filter__hide').slideToggle();
	});

	$(window).load(function () {
		var maxg = 0;
		$('.guarantees__item').each(function () {
			if(maxg < $(this).height()){
				maxg = $(this).height();
			}
		});

		$('.guarantees__item').height(maxg);

		var maxi = 0;
		$('.product-card').each(function () {
			if(maxi < $(this).height()){
				maxi = $(this).height();
			}
		});

		$('.product-card').height(maxi);

	});

	$(window).resize(function () {
		var maxg = 0;
		$('.guarantees__item').each(function () {
			$(this).height('auto');
			if(maxg < $(this).height()){
				maxg = $(this).height();
			}
		});

		$('.guarantees__item').height(maxg);

		var maxi = 0;
		$('.product-card').each(function () {
			$(this).height('auto');
			if(maxi < $(this).height()){
				maxi = $(this).height();
			}
		});

		$('.product-card').height(maxi);
	});

	$('.image-link').magnificPopup({
		type:'image',
	});

	$('.timer').each(function() {
		var el =  $(this),
			elEndTime = new Date(el.data('endtime'));
		el.countdown(elEndTime, function(event) {
			$(this).html(event.strftime('До окончании акции %Dд %-Hч %Mмин'));
		});
	});

	$('.select-nice').niceSelect();


	$( ".profile-accardion" ).accordion({collapsible:true,heightStyle:"content"});
	$( ".profile-accardion" ).accordion( "option", "icons", null );

	$( ".profile-accardion" ).on( "accordionbeforeactivate", function( event, ui ) {
		ui.newHeader.addClass("open")
		ui.oldHeader.removeClass("open")
	});

	$('.table-size__link').click(function() {
		$('.table-size').toggleClass('active');
		$('.table-size__table-wrap').slideToggle();
	});

	$(window).scroll(function() {

		if($(this).scrollTop() != 0) {
			$('.to-top').fadeIn();
		} else {
			$('.to-top').fadeOut();
		}

	});

	$('.to-top').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

	$('.profile-btn_item').click(function (e) {
		if(!$(this).hasClass('active')){
			$('.profile-btn_item.active').removeClass('active');
			$('.profile-tabs__item.active').removeClass('active');
			$(this).addClass('active');
			$('.profile-tabs__item').eq($(this).index()).addClass('active');
		}
		return false;
	});

	$('.addres__btn-item').click(function (e) {
		if(!$(this).hasClass('active')){
			$('.addres__btn-item.active').removeClass('active');
			$('.addres__item.active').removeClass('active');
			$(this).addClass('active');
			$('.addres__item').eq($(this).index()).addClass('active');
		}
		return false;
	});

});

	//SVG Fallback
if (!Modernizr.svg) {
	// wrap this in a closure to not expose any conflicts
	(function() {
		// grab all images. getElementsByTagName works with IE5.5 and up
		var imgs = document.getElementsByTagName('img'),endsWithDotSvg = /.*\.svg$/,i = 0,l = imgs.length;
		// quick for loop
		for(; i < l; ++i) {
			if(imgs[i].src.match(endsWithDotSvg)) {
				// replace the png suffix with the svg one
				imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
			}
		}
	})();
}