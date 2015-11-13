$(function(){
	
	
	$('#form_box .tit li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		$('#loginBox form').eq(index).show().siblings().hide();
		$('#regBox form').eq(index).show().siblings().hide();
	})
	
	
	
	$('.baseTable').each(function(){
		$(this).find('tr').each(function(){
			var aTh=$(this).find('th').not(':last'),
				aTd=$(this).find('td').not(':last');
			
			aTh.each(function(){
				$(this).addClass('bor')
			});
			
			aTd.each(function(){
				$(this).addClass('bor')
			})
			
		})
	})
	
	
	
	$('#qySlider .slick-prev').html('&#xe602;');
	$('#qySlider .slick-next').html('&#xe607;');
	
	
	
	$(document).on('click',function(){
		$('.sus_list').hide();
	})
	
	
	$('.sus_inp').on('click',function(e){
		e.stopPropagation();
	});
	
	
	$('#keywordsList li').on('click',function(){
		
		
		$('#keywords').val($(this).html());
		
		
	})
	
	
	$('#showCenBox').on('click',function(){
		$(this).hide();
		$('#cen_box').show();
	})
	
	$('#hideCenBox').on('click',function(){
		$('#showCenBox').show();
		$('#cen_box').hide();
	})
	
	

	
	$('.checkBox').each(function(){
		if($(this).find('input').attr('checked')=='checked'){
			
			$(this).addClass('checkBoxActive');
		}
		
		$(this).on('click',function(){
			if($(this).hasClass('checkBoxActive')){
				$(this).removeClass('checkBoxActive');
			}else{
				$(this).addClass('checkBoxActive');
			}
		})
		
	})
	
	
	$('.radioBox').each(function(){
		if($(this).find('input').attr('checked')=='checked'){
			
			$(this).addClass('radioBoxActive').siblings().removeClass('radioBoxActive');
		}
		
		$(this).on('click',function(){
			$(this).addClass('radioBoxActive').siblings().removeClass('radioBoxActive');
		})
		
	})
	
	$('.fileBox').each(function(){
		var oFile = $(this).find('.file');
		var oInp  = $(this).find('.inp-bor');
		oFile.css({'opacity':'0'});
		
		oFile.change(function(){
			oInp.val(oFile.val());
		})
		
	})
	
	
	
	
	
	var iSelectSize=$('.dl_select').size()+10;
	$('.dl_select').each(function(){
		
		
		if($(this).hasClass('dl_select_w')){
			var w = $(this).outerWidth()-4;
			$(this).css({'width':w+'px'});
		}
		
		
		$(this).css({'z-index':iSelectSize--});
		var oTxt=$(this).find('.txt');
		var oDd = $(this).find('dd');
		var aSelect = oDd.find('a');
		
		$(this).hover(function(){
			oDd.show();
		},function(){
			oDd.hide();
		})
		
		
		
		
		aSelect.on('click',function(){
			oTxt.html($(this).html());
			oDd.hide();
			$(this).addClass('active').siblings().removeClass();
		});
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})


function showSusList(id){
	$(id).show();
}

function ajaxSusList(id){
	
}


function showRegBox(){
	$('#regBox').show();
	$('#loginBox').hide();
	$('#form_box').addClass('reg_form_box');
}
function showLoginBox(){
	$('#regBox').hide();
	$('#loginBox').show();
	$('#form_box').removeClass('reg_form_box');
}



function addTags(obj,id){
	var num=parseInt($(obj).attr('data-num'));
	if(num<10){
		num++;
		$(obj).attr('data-num',num);
		var str='<input type="text" class="inp-bor w70 mr5" name="tags_'+num+'">';
	
		$('#'+id).append(str);
	}else{
		alert('最多添加10项');
	}
	
	
	
}



function keyNum(obj){
	if(obj.value.length==1){obj.value=obj.value.replace(/[^1-9]/g,'')}else{obj.value=obj.value.replace(/\D/g,'')}
}


function closeBoxy(){
	$('.boxy-wrapper .title-bar .close').click();
}


function checkAge(strdate,obj){
	var arr = strdate.split('-');
	var y = arr[0],
		m = arr[1],
		d = arr[2];
	
	alert(run(y,m,d));
	setTimeout(function(){
		$('#'+obj).val(run(y,m,d)+'岁');
	},100)
	
}


function run(y,m,d) {
	
var dd = d,
	mm = m,
	yy = y,
	days = new Date(),
	gdate = days.getDate(),
	gmonth = days.getMonth(),
	gyear = days.getYear();
	
	if (gyear < 2000) {gyear += 1900;}
	
	age = gyear - yy;
	
	if ((mm == (gmonth + 1)) && (dd <= parseInt(gdate))) {
		age = age;
	} else {
		if (mm <= (gmonth)) {
			age = age;
		} else {
			age = age - 1;
	   	}
	}
	if (age == 0){
		age = age;
	}
	return age;
}

