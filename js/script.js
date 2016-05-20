/***********************************************************
                         	Var
************************************************************/
/*   3     #    */





/***********************************************************
                      Append + CSS + Hide
************************************************************/
/*   3     #    */





/***********************************************************
                       Event Function
************************************************************/


// $('.comment_section').each(function(){
// 	$(this).focusout(function() {
// 		$(this).removeClass('disable');
// 	});
// });


/*****************
      Mouse
*****************/


$('.box li').click(function(event) {
	event.preventDefault();
	$(this).toggleClass('checked');
});

$('.add_comment').each(function() {
	$(this).click(function (event) {
		event.preventDefault();
		$('.comment_section').not($(this).siblings('.comment_section')).removeClass('disable');
		$(this).addClass('outline');
		$(this).siblings('.comment_section').toggleClass('disable');

		// Hack to solve the outline issue.
		if (!$('.comment_section').hasClass('disable')) {
			$('#outline a').focus();
		// Hack to solve the outline issue.

		} else {
			$(this).siblings('.comment_section').children('.textarea').focus();
		}
	});
})

/*****************
       Key
*****************/

// $(document).on('keydown', '.add_comment', function(e) {
//   var keyCode = e.keyCode || e.which;
//
//   if (keyCode == 9) {
// 		e.preventDefault;
//
// 		$('add_comment').removeClass('outline');
//     // call custom function here
//   }
// });

 $(document).keypress(function(e){
	if (e.which == '119') {
		$('.add_comment').removeClass('outline');
	};
});


// add class outline_none

//on mouse off remove outline?

// remove outline
// when tab, allow outline

/***********************************************************
                      Non-Event Function
************************************************************/
/*   3     #    */





/***********************************************************
                       	   Test
************************************************************/
/*   3     #    */

// var test;
