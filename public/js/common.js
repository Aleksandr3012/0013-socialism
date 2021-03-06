"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll('.toggle-menu-mobile--js')),
	menuMobile: document.querySelector('.menu-mobile--js'),
	menuMobileLink: [].slice.call(document.querySelectorAll('.menu-mobile--js ul li a')),
	body: document.querySelector('body'),
	modalCall: function modalCall() {
		$('.link-modal').fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: 'Закрыть',
					NEXT: 'Вперед',
					PREV: 'Назад' // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$('.modal-close-js').click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {
				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle('on');
				});

				_this.menuMobile.classList.toggle('active');

				_this.body.classList.toggle('fixed');

				return false;
			});
		});
	},
	closeMenu: function closeMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.classList.remove('on');
		});

		_this.menuMobile.classList.remove('active');

		_this.body.classList.remove('fixed');
	},
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		var _this = this;

		_this.toggleMenu();

		_this.menuMobileLink.forEach(function (element) {
			element.addEventListener('click', function (e) {
				console.log(element);

				_this.closeMenu();
			});
		});

		document.addEventListener('mouseup', function (event) {
			var container = event.target.closest('.menu-mobile--js.active'); // (1)

			if (!container) {
				_this.closeMenu();
			}
		});
	},
	// /mobileMenu
	// табы  .
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr('pattern', '[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}').inputmask('+9(999)999-99-99');
	} // /inputMask

};

function eventHandler() {
	var _Swiper;

	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement('picture'); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	$('.main-wrapper').after('<div class="screen" style="background-image: url(screen/main.jpg);"></div>'); // /добавляет подложку для pixel perfect
	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {
	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {
	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {
	// 			$(this).addClass('footer__link-active');
	// 		}
	// 	};
	// });
	// /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		//
		// скрывает моб меню

		var topH = $('header ').innerHeight();
		$(window).scroll(function () {
			if ($(window).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		}); // конец добавил

		if (window.matchMedia('(min-width: 992px)').matches) {
			JSCCommon.closeMenu();
		}
	}

	$(window).resize(function () {
		heightses();
	});
	heightses(); // листалка по стр

	$(' .top-nav li a, .scroll-link').click(function () {
		var elementClick = $(this).attr('href');
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	}); // slider

	var swiper4 = new Swiper('.color-slider', (_Swiper = {
		// slidesPerView: 5,
		slidesPerView: 'auto',
		watchOverflow: true,
		spaceBetween: 0,
		freeMode: true
	}, _defineProperty(_Swiper, "watchOverflow", true), _defineProperty(_Swiper, "slidesPerGroup", 3), _defineProperty(_Swiper, "loop", true), _defineProperty(_Swiper, "loopFillGroupWithBlank", true), _defineProperty(_Swiper, "touchRatio", 0.2), _defineProperty(_Swiper, "slideToClickedSlide", true), _defineProperty(_Swiper, "freeModeMomentum", true), _defineProperty(_Swiper, "navigation", {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}), _Swiper)); // modal window

	var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

	if (isIE11) {
		$('body').prepend("<p   class=\"browsehappy container\">\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u0432\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0435 \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0439 \u0431\u0440\u0430\u0443\u0437\u0435\u0440. \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, <a href=\"http://browsehappy.com/\" target=\"_blank\">\u043E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u0432\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440</a>, \u0447\u0442\u043E\u0431\u044B \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C, \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0430\u0435\u043C\u043E\u0433\u043E \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C.</p>");
	}

	var event = new Swiper('.events .swiper-container', {
		spaceBetween: 30,
		loop: true,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev'
		},
		breakpoints: {
			992: {
				slidesPerView: 2
			}
		},
		lazy: {
			loadPrevNext: true
		}
	}); // for (let i = 0; i < 61480; i++) {
	// 	setTimeout(function() {
	// 		$('.sNumberParticipants__timer').text(i);
	// 	});
	// }

	(function (factory) {
		if (typeof define === 'function' && define.amd) {
			// AMD
			define(['jquery'], factory);
		} else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
			// CommonJS
			factory(require('jquery'));
		} else {
			// Browser globals
			factory(jQuery);
		}
	})(function ($) {
		var CountTo = function CountTo(element, options) {
			this.$element = $(element);
			this.options = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
			this.init();
		};

		CountTo.DEFAULTS = {
			from: 0,
			// the number the element should start at
			to: 0,
			// the number the element should end at
			speed: 1000,
			// how long it should take to count between the target numbers
			refreshInterval: 100,
			// how often the element should be updated
			decimals: 0,
			// the number of decimal places to show
			formatter: formatter,
			// handler for formatting the value before rendering
			onUpdate: null,
			// callback method for every time the element is updated
			onComplete: null // callback method for when the element finishes updating

		};

		CountTo.prototype.init = function () {
			this.value = this.options.from;
			this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
			this.loopCount = 0;
			this.increment = (this.options.to - this.options.from) / this.loops;
		};

		CountTo.prototype.dataOptions = function () {
			var options = {
				from: this.$element.data('from'),
				to: this.$element.data('to'),
				speed: this.$element.data('speed'),
				refreshInterval: this.$element.data('refresh-interval'),
				decimals: this.$element.data('decimals')
			};
			var keys = Object.keys(options);

			for (var i in keys) {
				var key = keys[i];

				if (typeof options[key] === 'undefined') {
					delete options[key];
				}
			}

			return options;
		};

		CountTo.prototype.update = function () {
			this.value += this.increment;
			this.loopCount++;
			this.render();

			if (typeof this.options.onUpdate == 'function') {
				this.options.onUpdate.call(this.$element, this.value);
			}

			if (this.loopCount >= this.loops) {
				clearInterval(this.interval);
				this.value = this.options.to;

				if (typeof this.options.onComplete == 'function') {
					this.options.onComplete.call(this.$element, this.value);
				}
			}
		};

		CountTo.prototype.render = function () {
			var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
			this.$element.text(formattedValue);
		};

		CountTo.prototype.restart = function () {
			this.stop();
			this.init();
			this.start();
		};

		CountTo.prototype.start = function () {
			this.stop();
			this.render();
			this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
		};

		CountTo.prototype.stop = function () {
			if (this.interval) {
				clearInterval(this.interval);
			}
		};

		CountTo.prototype.toggle = function () {
			if (this.interval) {
				this.stop();
			} else {
				this.start();
			}
		};

		function formatter(value, options) {
			return value.toFixed(options.decimals);
		}

		$.fn.countTo = function (option) {
			return this.each(function () {
				var $this = $(this);
				var data = $this.data('countTo');
				var init = !data || _typeof(option) === 'object';
				var options = _typeof(option) === 'object' ? option : {};
				var method = typeof option === 'string' ? option : 'start';

				if (init) {
					if (data) data.stop();
					$this.data('countTo', data = new CountTo(this, options));
				}

				data[method].call(data);
			});
		};
	});

	$('.counter-number').countTo(); // $('.main-wrapper').click(function(){
	// 	$(this).addClass('d-none');
	// });
}

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}