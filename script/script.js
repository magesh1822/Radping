$(document).ready(function(){

$(document).ready(function(){
						   
						   $('#nav-btn').click(function(){
														
											
							if($('.menu').css('display') == 'none')
						   {
							
								$('.menu').css({'display':'block'}).slideDown();
							   
							 }
							else
							{
								$('.menu').css({'display':'none'}).slideUp();
							}

														});
						   
						   
						   
						   });


//$("#page_sec").load('home.html');	
//$("#t_home, #t_about, #t_product, #t_career, #t_contact").css({"width": "105px"});
//$("#t_about").
//$("#t_product")
//$("#t_news").css({"width": "140px"});
//$("#t_career").
//$("#t_contact").
	/*$("#t_home").click(function(){
        $("#nav_sec #tab_sel").animate({left: "43px"});
		$("#nav_sec ul li").removeClass("sel")
		$(this).addClass("sel");
		$("#load_sec").hide();
		$("#home_sec").show();
    });
	
	$("#t_about").click(function(){
        $("#nav_sec #tab_sel").animate({left: "150px"});
		$("#nav_sec ul li").removeClass("sel")
		$(this).addClass("sel");
		$("#home_sec").hide();
		$("#load_sec").show().load("about.html");
    });
	
	$("#t_product").click(function(){
        $("#nav_sec #tab_sel").animate({left: "255px"});
		$("#nav_sec ul li").removeClass("sel")
		$(this).addClass("sel");
		$("#home_sec").hide();
		$("#load_sec").show().load("product.html");
    });
	
	$("#t_news").click(function(){
        $("#nav_sec #tab_sel").animate({left: "373px"});
		$("#nav_sec ul li").removeClass("sel")
		$(this).addClass("sel");
		$("#home_sec").hide();
		$("#load_sec").show().load("News.html");
    });
	
	$("#t_career").click(function(){
        $("#nav_sec #tab_sel").animate({left: "500px"});
		$("#nav_sec ul li").removeClass("sel")
		$(this).addClass("sel");
		$("#home_sec").hide();
		$("#load_sec").show().load("careers.html");
    });
	
	$("#t_contact").click(function(){
        $("#nav_sec #tab_sel").animate({left: "605px"});
		$("#nav_sec ul li").removeClass("sel")
		$(this).addClass("sel");
		$("#home_sec").hide();
		$("#load_sec").show().load("contact.html");
    });*/
	
	$(".cat_tit").click(function(){
		$(".cat_tit").next("div.cat_des").slideUp();
		$(this).next("div.cat_des").slideDown();
		$(this).children("span").toggleClass('toggle_btnr');
	});
	
	$(".pro_det1").hide();

	$(".pro_tit").click(function(){
		$(this).next(".pro_det1").slideToggle();	
		$(this).children("span").toggleClass('toggle_btnr');
	});
	
	$(".nws").click(function(){
		$(this).next(".nws_det_sec").slideToggle();	
	});
	
	$("#r1_1").click(function(){
		$("#modal").fadeToggle();
		$("#pop_u909").show();
		$("#pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r1_2").click(function(){
		$("#modal").fadeToggle();
		$("#pop_xd").show();
		$("#pop_u909, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r1_3").click(function(){
		$("#modal").fadeToggle();
		$("#pop_xa").show();
		$("#pop_u909, #pop_xd, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r2_1").click(function(){
		$("#modal").fadeToggle();
		$("#pop_kl602").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r2_2").click(function(){
		$("#modal").fadeToggle();
		$("#pop_kl605").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r2_3").click(function(){
		$("#modal").fadeToggle();
		$("#pop_kl702").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r3_1").click(function(){
		$("#modal").fadeToggle();
		$("#pop_247").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r3_2").click(function(){
		$("#modal").fadeToggle();
		$("#pop_oscar").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r3_3").click(function(){
		$("#modal").fadeToggle();
		$("#pop_tango").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r4_1").click(function(){
		$("#modal").fadeToggle();
		$("#pop_basic").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r4_2").click(function(){
		$("#modal").fadeToggle();
		$("#pop_port").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r4_3").click(function(){
		$("#modal").fadeToggle();
		$("#pop_midi").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r4_4").click(function(){
		$("#modal").fadeToggle();
		$("#pop_pro").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r5_1").click(function(){
		$("#modal").fadeToggle();
		$("#pop_airvo").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r5_2").click(function(){
		$("#modal").fadeToggle();
		$("#pop_bubb").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r5_3").click(function(){
		$("#modal").fadeToggle();
		$("#pop_humid").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r5_4").click(function(){
		$("#modal").fadeToggle();
		$("#pop_resus").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r6_1").click(function(){
		$("#modal").fadeToggle();
		$("#pop_bed").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r6_2").click(function(){
		$("#modal").fadeToggle();
		$("#pop_vals").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_ans, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r6_3").click(function(){
		$("#modal").fadeToggle();
		$("#pop_ans").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_n20, #pop_n40, #pop_np").hide();
	});
	
	$("#r7_1").click(function(){
		$("#modal").fadeToggle();
		$("#pop_n20").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n40, #pop_np").hide();
	});
	
	$("#r7_2").click(function(){
		$("#modal").fadeToggle();
		$("#pop_n40").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_np").hide();
	});	
	
	$("#r7_3").click(function(){
		$("#modal").fadeToggle();
		$("#pop_np").show();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40").hide();
	});	
	
	$(".pop span").click(function(){
		$("#modal").fadeOut();
		$("#pop_u909, #pop_xd, #pop_xa, #pop_kl602, #pop_kl605, #pop_kl702, #pop_247, #pop_oscar, #pop_tango, #pop_basic, #pop_port, #pop_midi, #pop_pro, #pop_airvo, #pop_bubb, #pop_humid, #pop_resus, #pop_bed, #pop_vals, #pop_ans, #pop_n20, #pop_n40, #pop_np").fadeOut();
	});
	
	$("ul#prod_tab li").click(function(){
			$("ul#prod_tab li").removeClass("sel");
			$(this).addClass("sel");
		});
	
	$("ul#prod_tab li:nth-child(1)").click(function(){
			$("#prod_rad").css({"position": "relative", "left": "50px", "opacity": "0"}).show().animate({left: '0px', opacity: '1'}, "slow");
			$("#prod_car, #prod_den, #prod_crit, #prod_ser").hide();
		});
	
	$("ul#prod_tab li:nth-child(2)").click(function(){
			$("#prod_car").css({"position": "relative", "bottom": "50px", "opacity": "0"}).show().animate({bottom: '0px', opacity: '1'}, "slow");
			$("#prod_rad, #prod_den, #prod_crit, #prod_ser").hide();
		});
	
	$("#car_tab ul.cartab li:nth-child(3)").click(function(){
			$("#car_trai").css({"position": "relative", "left": "15px", "opacity": "0"}).show().animate({left: '0px', opacity: '1'}, "slow");
			$("#car_ser, #car_sal, #car_intn").hide();
		});
	
	$("#car_tab ul.cartab li:nth-child(4)").click(function(){
			$("#car_intn").css({"position": "relative", "left": "15px", "opacity": "0"}).show().animate({left: '0px', opacity: '1'}, "slow");
			$("#car_ser, #car_sal, #car_trai").hide();
		});
	
	
	$("#main").scroll(function(){
			if ($(this).scrollTop() > 100) {
				$(".scrollToTop").fadeIn();
			} else {
				$(".scrollToTop").fadeOut();
			}
		});
		
		//Click event to scroll to top
		$(".scrollToTop").click(function(){
			$("#main").animate({scrollTop : 0},800);
			return false;
		});
		
		$(".scrl_btn").click(function(){
			$(this).parent(".nws_img_sec").animate({"height": "100%"});
			$(this).hide();
			$(this).next(".scrl_btn1").show();
			});
			
		$(".scrl_btn1").click(function(){
			$(this).parent(".nws_img_sec").animate({"height": "300px"});
			$(this).hide();
			$(this).prev(".scrl_btn").show();
			});
	
});

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}