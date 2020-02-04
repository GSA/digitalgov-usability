
(function (m) {

 
jQuery(document).ready(function($){
// START ACCORDIONS

// add title to accordion element that opens/closed sections
$('h2.views-title .accordion').attr('title', 'Minimize section');

// bind click event to accordion arrow
$('h2.views-title .accordion').on( "click", function() {
	// set 'this' variable as the specific accordion arrow that was selected
	var thisAccordion = $(this); 
	// slide open or closed the accordion content
    $(thisAccordion).closest('.panel-pane').find('.card-deck-wrapper').slideToggle('normal', function(){
    	// once the sliding open/closed animation of the accordion is completed, check if it's visible (open)...
        if ($(thisAccordion).closest('.panel-pane').find('.card-deck-wrapper').is(':visible')) {
        	// if it is open, change the accordion arrows title attribute to 'Minimize section'
			$(thisAccordion).closest('.panel-pane').find(".accordion").attr('title', 'Minimize section');    
		} else {
			// ... otherwise change it to 'Expand section' because it must be closed
			$(thisAccordion).closest('.panel-pane').find(".accordion").attr('title', 'Expand section'); 
		}
    });
    // toggle the closed class on the accordion arrow to change the image accordingly.
    $(thisAccordion).find('span.accordionArrow').toggleClass('closed');

    return false;   
});

// on key press of the accordion arrow
$('h2.views-title .accordion').keypress(function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
	// set 'this' variable as the specific accordion arrow that was selected
	var thisAccordion = $(this); 
    // if the enter key was pressed...
    if (keycode == '13') {
    	// slide open or closed the accordion content
        $(thisAccordion).closest('.panel-pane').find('.card-deck-wrapper').slideToggle('normal', function(){
        	// once the sliding open/closed animation of the accordion is completed, check if it's visible (open)...
        	if ($(thisAccordion).closest('.panel-pane').find('.card-deck-wrapper').is(':visible')) {
        		// if it is open, change the accordion arrows title attribute to 'Minimize section'
        		$(thisAccordion).closest('.panel-pane').find(".accordion").attr('title', 'Minimize section');                
			} else {
				// ... otherwise change it to 'Expand section' because it must be closed
				$(thisAccordion).closest('.panel-pane').find(".accordion").attr('title', 'Expand section');   
			}
        });
        // toggle the closed class on the accordion arrow to change the image accordingly.
        $(thisAccordion).find('span.accordionArrow').toggleClass('closed');

        return false;
    }
});

$('.moreShareButton').click(function(){
    $('.additionalShareOptions').toggle().toggleClass('shareExpand');
    return false;
});

/* removing this code as Reinhard and Josh decided that using aria-expanded was not appropriate in this case. 
   Instead we are going to jump focus to the first item in the nav on opening of the menu.
// Appropriately apply ARIA to top level navigation depending on whether it's visible (expanded) or not
function topNavARIA() {
	if ($("#topNavigation").is(':visible')) {
    	$('#topNavigation').attr("aria-hidden", "false");           
	} else {
		$('#topNavigation').attr("aria-hidden", "true");  
	}
}

// on document ready (top of this file) run topNavARIA function to appropriately add ARIA to top navigation
topNavARIA();

// run topNavARIA function on window resize in case the breakpoint changes and the desktop menu (which is always visible) appears, or vice versa
$(window).resize(function(){
    topNavARIA();
});
*/

$('.topNavMenuButton a').click(function(){
	// toggle the mobileNavShow class, which controls whether the nav is shown vs hidden, and only on mobile
    $('#topNavigation').toggleClass("mobileNavShow");
    // if the menu is being opened (has the mobileNavShow class) put focus on the first link in the menu and change the nav icon to indicate it will close the menu
	if ($("#topNavigation").hasClass('mobileNavShow')) {   
    	$('.topNavMenuButton a img').attr("alt", "collapse navigation menu");
	} else {
		$('.topNavMenuButton a img').attr("alt", "expand navigation menu");
	}
    /* see above comments
    // run topNavARIA function to appropriately add ARIA to top navigation
    topNavARIA();
    */
    return false;	
});


// on key press of the menu button ("hamburger")
$('.topNavMenuButton a').keypress(function (e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    // if the enter key was pressed...
    if (keycode == '13') {
		// toggle the mobileNavShow class, which controls whether the nav is shown vs hidden, and only on mobile
    	$('#topNavigation').toggleClass("mobileNavShow");
    	// if the menu is being opened (has the mobileNavShow class) put focus on the first link in the menu and change the nav icon to indicate it will close the menu
		if ($("#topNavigation").hasClass('mobileNavShow')) {
    		setTimeout(function() {
      			$('#topNavigation .menu li a').first().focus();   
    		}, 0);    		  
    		$('.topNavMenuButton a img').attr("alt", "collapse navigation menu");
		} else {
			$('.topNavMenuButton a img').attr("alt", "expand navigation menu");
		}
    	return false;
    }
});


$('.topNavSearchButton a').click(function(){
    $('#gsearch').toggle();
    return false;
});

// END ACCORDIONS //
}); 
 })(jQuery);

/*Set Default Text in Form Fields to Disappear/Reappear on Focus In/Out*/
(function($){
/**
 * The following variables may be adjusted
 */
 var active_color = '#000'; // Colour of user provided text
 var inactive_color = '#999'; // Colour of default text

 /**
  *  * No need to modify anything below this line
  *   */

 $(document).ready(function() {
           $("input.form-text").css("color", inactive_color);
             var default_values = new Array();
               $("input.form-text").focus(function() {
                       if (!default_values[this.id]) {
                             default_values[this.id] = this.value;
                                 }
                                     if (this.value == default_values[this.id]) {
                                           this.value = '';
                                                 this.style.color = active_color;
                                                     }
                                                         $(this).blur(function() {
                                                                   if (this.value == '') {
                                                                           this.style.color = inactive_color;
                                                                                   this.value = default_values[this.id];
                                                                                         }
                                                                                             });
                                                           });
               });
})(jQuery);
 
(function ($) {
 jQuery(document).ready(function($){
	
                
//      $('body.not-front #sidebar-left ul.menu li.leaf a').on('focus mouseover', function() { 
//      		$(this).parent().css('width', '200px');
//      });
	  
 //      $('body.not-front #sidebar-left ul.menu li.leaf a').on('blur mouseout', function() { 
 //     		$(this).parent().css('width', '86px');
 //     });
                
      $('body:not(.list-view) h3.field-content a').on('focus', function() { 
      		$(this).parents().next('.views-field-body').css('display', 'block');
      });

      $('body:not(.list-view) h3.field-content a').on('blur', function() { 
      		$(this).parents().prev().children('.views-field-body').css('display', 'none');
      });

      $('body:not(.list-view) li.cards').on('mouseover', function() { 
      		$(this).find('.views-field-body').css('display', 'block');
      });

      $('body:not(.list-view) li.cards').on('mouseout', function() { 
      		$(this).find('.views-field-body').css('display', 'none');
      });

      $('body.front .views-row-1, body.front .views-row-2, body.front .views-row-3, body.front .views-row-4, body.front .views-row-5').on('mouseover', function() { 
             	$(this).find('.views-field-body').css('display', 'block');
      });

      $('body.front .views-row-1, body.front .views-row-2, body.front .views-row-3, body.front .views-row-4, body.front .views-row-5').on('mouseout', function() { 
             	$(this).find('.views-field-body').css('display', 'none');
      });

      $('h2.field-content a').on('focus', function() { 
             	$(this).parents('.views-field-title').siblings('.views-field-body').css('display', 'block');
      });

	  $('.views-field-body .field-content a').on('blur', function() { 
                $(this).parents('.views-field-body').css('display', 'none');
      });



    mobile_menu_actived = false;
	var sitelogo;
	var clone_print;
	var menu_timestamp=0;	
	function handleNavigation() {
		if(!responsive)
			return;
		
		
		
		if($(window).width() >= 725) {			
		if(! $('body').hasClass('responsive-layout-mobile')) {						
			if($('body').hasClass('mobile_js')){				
			
								
				$banerimg = $("#home_banner img");				
				if($banerimg && $banerimg.length){
					$banerimg.attr("src", $banerimg.attr("src").replace("dgitalk_transparent.png", "dgitalk.png" ) );
				}
				$("#logo").attr("src", sitelogo);
				$(clone_print).insertAfter('#add_this_container .textsize');
				$(".mobile_nav #page").css("width","100%");
				$(".mobile_nav #pagebg").css("width","100%");
				
				$("a#mobile-menu-button").unbind('click focus');
				$('body').removeClass('mobile_js');				
				$('#zone-menu-wrapper').insertAfter($('#zone-branding-wrapper')).show();				
				if($('#searchplaceholder').length ){				
					$('#gsearch').insertBefore($('#searchplaceholder'));
				}				
				$('body').removeClass('mobile_js');
				
			}
			

		} else {
			
			screen_width= $('body').width();
			if($('body').hasClass('mobile_nav')){
				$(".mobile_js #page").css("width",(screen_width - $('.mobile_js  #zone-menu-wrapper').width()) + "px");
				$('#zone-menu-wrapper').show();
			}
			
			if(! $('body').hasClass('mobile_js')){					
				//$("a#mobile-menu-button").prependTo($('.branding-data'));
				clone_print = $("#add_this_container .print").clone();
				$("#add_this_container .print").remove();
				
				$banerimg = $("#home_banner img");
				if($banerimg && $banerimg.length){
					$banerimg.attr("src", $banerimg.attr("src").replace("dgitalk.png", "dgitalk_transparent.png") );
				}		
				sitelogo = $("#logo").attr("src");
				$("#logo").attr("src", sitelogo.replace(/(.*\/).*$/g, "$1mobileLogo.png"));
				
				//$("<p>" + sitelogo.replace(/(.*\/).*$/g, "$1mobileLogo.png") + "</p>").prependTo($(".views-field-body .field-content:first"));
				
				$("a#mobile-menu-button").prependTo($('.branding-data'));
				
				
				$("a#mobile-menu-button").bind('click focus', function(e){					
					//$("<p>" + e.timeStamp + "</p>").prependTo($(".views-field-body .field-content:first"));					
					if (e.timeStamp - menu_timestamp < 1000){
						return false;
					}
					menu_timestamp = e.timeStamp;
					if($('body').hasClass('mobile_nav')){					
						$(".mobile_nav #page").css("width","100%");
						$(".mobile_nav #pagebg").css("width","100%");
						$('body').removeClass('mobile_nav');
						mobile_menu_actived = false;
					}
					else{
						$('body').addClass('mobile_nav');						
						$(".mobile_nav #page").css("width",screen_width + "px");
						$(".mobile_nav #pagebg").css("width",screen_width + "px");
						mobile_menu_actived = true;
					}
					$('.mobile_js  #zone-menu-wrapper').animate(
						{width:'toggle'},					
						{
							step: function(now,fx){														
								$(".mobile_js #page").css("left",Math.ceil(now) + "px");
								$(".mobile_js #page").css("width",(screen_width - Math.ceil(now)) + "px");
								//$("<p>" + fx + "</p>").prependTo($(".views-field-body .field-content:first"));								
							},
							duration:500,
							complete: function() {
								if(!mobile_menu_actived){									
									$(".mobile_js #page").css("width","100%");
									$(".mobile_js #pagebg").css("width","100%");
									$(".mobile_js #page").css("left","0px");									
								}								
							}
							
						}
						
					);				
				});
				
				$('body').addClass('mobile_js');
				if(! $('#searchplaceholder').length ){
					$('<div id="searchplaceholder"></div>').insertAfter($('#gsearch'));				
				}
				$('#gsearch').prependTo($('#navwrap2'));
				$('#zone-menu-wrapper').prependTo($('#menuoverlay')).hide();
				
				$("#menuoverlay #mega-menu li a").bind('click',function(){
					$("a#mobile-menu-button").trigger('click');
				});
				$("a#mobile-menu-button").attr("tabindex",0);
			}
			
			$(".mobile_js #page").css("left",$('.mobile_nav  #zone-menu-wrapper').width() + "px");			
			

		}
	}
}	
	
	
	if($.browser.msie && $.browser.version <= 8){
		responsive = false;
	}
	else{
		responsive = true;
	}
	
	$('body').bind('responsivelayout', function() {		
        handleNavigation();		
		resizeVOC();
		
	});
	//$(window).resize(function() {		
	//	resizeImages();
	//	handleNavigation();
	//	resizeVOC();	
	//	
	//});
	
	
	
	

	$(".form-item-search-block-form input.form-text").focus(function () {
		if($(this).attr("value") == "Drupal Search"){
			$(this).attr("value","");
		}
	});
	
	$("#gsearch #searchbox").attr("value","Search").focus(function(){
		if($(this).attr("value") == "Search")
			$(this).attr("value","");
	});
	
	

});





// a global month names array
var gsMonthNames = new Array(
'January',
'February',
'March',
'April',
'May',
'June',
'July',
'August',
'September',
'October',
'November',
'December'
);

// a global day names array
var gsDayNames = new Array(
'Sunday',
'Monday',
'Tuesday',
'Wednesday',
'Thursday',
'Friday',
'Saturday'
);

// the date format prototype
Date.prototype.format = function(f)
{
    if (!this.valueOf())
        return '&nbsp;';

    var d = this;

    return f.replace(/(yyyy|mmmm|mmm|mm|dddd|ddd|dd|hh|nn|ss|a\/p)/gi,
        function($1)
        {
            switch ($1.toLowerCase())
            {
            case 'yyyy': return d.getFullYear();
            case 'mmmm': return gsMonthNames[d.getMonth()];
            case 'mmm':  return gsMonthNames[d.getMonth()].substr(0, 3);
            case 'dd': return d.getDate();
            case 'dddd': return gsDayNames[d.getDay()];
            case 'ddd':  return gsDayNames[d.getDay()].substr(0, 3);
            }
        }
    );
}


//GOV DELIVERY DIRECT SIGN UP

        function quicksubscribe() 
            { 
                window.location = "http://service.govdelivery.com/service/multi_subscribe.html?code=K+2gDnqLDua7XcadB7cLmXliVPPRIOFjOm9Cc3i3+kE=&login=" + document.govdelivery.email.value + "&origin=" + window.location.href; 
            }
  
        function profile() 
            { 
                window.location = "http:// service.govdelivery.com/service/user.html?code=K+2gDnqLDua7XcadB7cLmXliVPPRIOFjOm9Cc3i3+kE=&login=" + document.govdelivery.email.value + "&origin=" + window.location.href; 
            }



// JavaScript Document




}) (jQuery);
