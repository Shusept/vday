// 图片预加载及进度条
window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    var ql = new QueryLoader2(document.querySelector("body"), {
        barColor: "#666",
        backgroundColor: "#eee",
        percentage: true,
        barHeight: 10,
        minimumTime: 1000,
        fadeOutTime: 3000
    });
});


$(document).ready(function(){
	
	
	var windW = $(document).width();
	var windH = $(document).height();
	
	if (windW > windH){
		$(".🍀").height(windW).css("marginTop",-windW/2).css("marginLeft",-windW/2);
		$(".🌀").height(windW).css("marginTop",-windW/2).css("marginLeft",-windW/2);
	} else{
		$(".🍀").height(windH).width(windH).css("marginTop",-windH/2).css("marginLeft",-windH/2);
		$(".🌀").height(windH*1.3).width(windH*1.3).css("marginTop",-windH*1.3/2).css("marginLeft",-windH*1.3/2);
	}
	
	$("#🌹").height(windH);
	
	
	//setTimeout(function(){
	//	$('#loading').fadeOut(2000);
	//}, 3000);
	
	setTimeout(function(){
		$('.t1').addClass("go");
	}, 3000);
	setTimeout(function(){
		$('.t1').removeClass("go").css("opacity","1").css("border","0");
		$('.t2').addClass("go");
	}, 8000);
	setTimeout(function(){
		$('.t2').removeClass("go").css("opacity","1").css("border","0");
		$('.t3').addClass("go");
	}, 13000);
	setTimeout(function(){
		$('.t3').removeClass("go").css("opacity","1").css("border","0");
		$('.t4').addClass("go");
	}, 18000);
	setTimeout(function(){
		$('.t4').removeClass("go").css("opacity","1").css("border","0");
		$('.t5').addClass("go");
	}, 23000);
	setTimeout(function(){
		$('.t5').removeClass("go").css("opacity","1").css("border","0");
		$("h1").click(function(){
			$(this).fadeOut(2000);
			setTimeout(function(){
				$("#🌹 .💐").addClass("go").css("opacity","1");
				$('.nuclear').fadeIn(2000);
			}, 2000);
			setTimeout(function(){
				$("#🌹 .🌺").fadeIn(3000);
			}, 4000);
			//setTimeout(function(){
			//	$(".k1, .k3, .k5, .k7").addClass("g1").css("opacity","1");
			//	$(".k2, .k4, .k6").addClass("g2").css("opacity","1");
			//}, 4000);
		});
	}, 28000);
	
	
	// 音乐播放开关设定
	$(".music-trigger").click(function(document){
		if($(this).hasClass("play")){
			$('#stop-btn').click();
			$(this).removeClass("play").addClass("stop");
		} else{
			$('#play-btn').click();
			$(this).removeClass("stop").addClass("play");
		}
	});
	
	
	// lightbox
	$(".nuclear").fancybox({
		margin: 0,
		padding: 0,
		width: 350,
		height: 270,
		mouseWheel: 'false',
		autoCenter: 'true',
		helpers:{
			overlay:{
				css:{
					"background":"rgba(0,0,0,0.8)"
				}
			}
		}
		//afterClose: function(){
		//	$("#lb").removeClass("face2");
		//}
	});
	
	
	$('#btn').click(function(){
		$.post(
			'bomb.php',
			{
				key:$('#txt').val()
			},
			function(data,info){
				//可以根据php返回的data判断是否成功。。。然后做相应操作
			}
		);
		if ($('#txt').val() != ""){
			$('h1').css('display', 'none');
			parent.$.fancybox.close();
			$('h4').addClass('go');
			$('.nuclear').fadeOut(3000);
			//$('#stop-btn').click();
			//$('.music-icon').fadeOut(3000);
			//$('.🌟').fadeOut(3000);
			$('.💐').fadeOut(3000);
			setTimeout(function(){
				$('.🌺').fadeOut(3000);
			}, 3000);
			setTimeout(function(){
				$('.🌀').fadeOut(3000);
			}, 6000);
			setTimeout(function(){
				$('.🍀').fadeOut(3000);
			}, 9000);
			setTimeout(function(){
				//location.reload();
				$('.night').addClass('go');
			}, 12000);
			setTimeout(function(){
				$('.night').css({'opacity':'1','transform':'scale(500,500)'});
				$(".k1, .k3, .k5, .k7").addClass("g1").css("opacity","1");
				$(".k2, .k4, .k6").addClass("g2").css("opacity","1");
				$('.sun').addClass('go').css('bottom','-130px');
			}, 15000);
		}
	});
	
	
});






