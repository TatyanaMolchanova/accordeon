$(document).ready(function(){
	'use strict';

	//full code



	// $('.accordeon__item:gt(0)').addClass('closed');
	// $('.accordeon__content:gt(0)').hide(); //прячем все элементы
	
	// $('.accordeon__toggler').on('click', function(e) {
	// 	e.preventDefault(); //чтобы ссылка при клике не прыгала

	// 	if($(this).parent().hasClass('closed')) {
	// 		$(this)
	// 		.next('.accordeon__content')
	// 		.slideDown() //показываем контент при клике
	// 		.parent()
	// 		.removeClass('closed');
	// 	} else {
	// 		$(this)
	// 		.next('.accordeon__content')
	// 		.slideUp()
	// 		.parent()
	// 		.addClass('closed');
	// 	}

	// 	$('.accordeon__toggler').not($(this)) //находит все тоглеры
	// 							.next('.accordeon__content') //у оставшихся, оставляет только те, на которые не кликнули, находит их контент
	// 							.hide()
	// 							.parent()
	// 							.addClass('closed'); //прячем

		
	// });


// //compact code 1

// 	$('.accordeon__item:gt(0)').addClass('closed');
// 	$('.accordeon__content:gt(0)').hide(); //прячем все элементы
	
// 	$('.accordeon__toggler').on('click', function(e) {
// 		e.preventDefault(); //чтобы ссылка при клике не прыгала

// 		let content = $(this).next('.accordeon__content'),
// 			parent  = $(this).parent();

// 		if(parent.hasClass('closed')) {
// 			content
// 			.slideDown(); //показываем контент при клике
// 		} else {
// 			content
// 			.slideUp()
// 		}

// 		parent.toggleClass('closed');

// 		$('.accordeon__toggler').not($(this)) //находит все тоглеры
// 								.next('.accordeon__content') //у оставшихся, оставляет только те, на которые не кликнули, находит их контент
// 								.hide();
// 								parent.addClass('closed'); //прячем

		
// 	});



//compact code 2

	// $('.accordeon__item:gt(0)').addClass('closed');
	// $('.accordeon__content:gt(0)').hide(); //прячем все элементы
	
	// $('.accordeon__toggler').on('click', function(e) {
	// 	e.preventDefault(); //чтобы ссылка при клике не прыгала

	// 	let content = $(this).next('.accordeon__content'),
	// 		parent  = $(this).parent();

	
	// 	content.slideToggle();
	// 	parent.toggleClass('closed');

	// 	$('.accordeon__toggler').not($(this)) //находит все тоглеры
	// 							.next('.accordeon__content') //у оставшихся, оставляет только те, на которые не кликнули, находит их контент
	// 							.hide();
	// 							parent.addClass('closed'); //прячем

		
	// });


	//compact code 3

	$('.accordeon__item:gt(0)').addClass('closed');
	$('.accordeon__content:gt(0)').hide(); //прячем все элементы
	
	$('.accordeon__toggler').on('click', function(e) {
		e.preventDefault(); //чтобы ссылка при клике не прыгала


		$('.accordeon__toggler')
			.not($(this)) //находит все тоглеры
			.next('.accordeon__content') //у оставшихся, оставляет только те, на которые не кликнули, находит их контент
			.slideUp()
			.parent()
			.addClass('closed');

			$(this)
				.next('.accordeon__content')
				.slideToggle()
				.parent()
				.toggleClass('closed');
		
	});

	




});