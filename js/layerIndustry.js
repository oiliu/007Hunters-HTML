//行业

var jobIndustry = [
	{
		n:'互联网·游戏·软件',
		d:['互联网/移动互联网/电子商务','网络游戏','计算机软件','IT服务/系统集成']
	},
	{
		n:'电子·通信·硬件',
		d:['电子技术/半导体/集成电路','通信(设备/运营/增值)','计算机硬件/网络设备']
	},
	{
		n:'房地产·建筑·物业',
		d:['房地产开发/建筑/建材/工程','规划/设计/装潢','房地产服务(物业管理/地产经纪)']
	},
	{
		n:'金融',
		d:['银行','保险','基金/证券/期货/投资','会计/审计','信托/担保/拍卖/典当']
	},
	{
		n:'消费品',
		d:['食品/饮料/烟酒/日化','百货/批发/零售','服装服饰/纺织/皮革','家具/家电','办公用品及设备','奢侈品/收藏品','工艺品/珠宝/玩具']
	},
	{
		n:'汽车·机械·制造',
		d:['汽车/摩托车','机械制造/机电/重工','印刷/包装/造纸','原材料及加工','仪器/仪表/工业自动化/电气']
	},
	{
		n:'服务·外包·中介',
		d:['专业服务(咨询/财会/法律/翻译等)','中介服务','外包服务','旅游/酒店/餐饮服务/生活服务','娱乐/休闲/体育','检测/认证','租赁服务']
	},{
		n:'广告·传媒·教育·文化',
		d:['广告/公关/市场推广/会展','影视/媒体/艺术/文化/出版','教育/培训/学术/科研/院校']
	},
	{
		n:'交通·贸易·物流',
		d:['交通/物流/运输','贸易/进出口','航空/航天']
	},
	{
		n:'制药·医疗',
		d:['制药/生物工程','医疗/保健/美容/卫生服务','医疗设备/器械']
	},
	{
		n:'能源·化工·环保',
		d:['能源(电力/水利)','石油/石化/化工','采掘/冶炼/矿产','环保','新能源']
	},
	{
		n:'政府·农林牧渔',
		d:['政府/公共事业/非营利机构','农/林/牧/渔','其他']
	}
];
var industryHtml = '<div class="laryer jobIndusBox " id="industryBox"><div class="box">'
			+'<div class="data-result" id="industry-data-result">'
				+'<em>最多选择3项</em>'
			+'</div>'
		+'<table><tr><td></td><td><label><input type="checkbox" name="jobIndustryAll" value="全部行业"> 全部行业</label></td></tr>';
		
		
		
		
		for(var i=0; i<jobIndustry.length; i++){
			
		
			industryHtml +='<tr><td class="bg">'+jobIndustry[i].n+'</td><td><ul class="jobIndustryList">';
			
			for(var j=0; j<jobIndustry[i].d.length; j++){
				industryHtml +='<li><label><input type="checkbox" name="industryCheck" value="'+jobIndustry[i].d[j]+'"/> '+jobIndustry[i].d[j]+'</label></li>'
			}
			
			
			industryHtml +='</ul></td></tr>'
		}
		
	industryHtml+='</table>'
	+'<div class="btnBox">'
			+'<a id="" class="baseBtn btn-lar mr10" href="javascript:;" onclick="saveIndustry();">确定</a>'
			+'<a id="" class="baseBtn baseBtnGray btn-lar" href="javascript:;" onclick="closeBoxy()">取消</a>'
			+'</div></div>'
		+'</div>'


$('body').append(industryHtml);

			
		

$(function(){
	
	
	$('#industryInp').focus(function(){
		new Boxy('#industryBox',{'title':'选择行业分类','draggable':true});
		$(this).blur();
	});

		
		var oJobIndustryAll=$('[name="jobIndustryAll"]');
		var checkNum=0;
		
		oJobIndustryAll.live('click',function(){
			
			if($(this).attr('checked')=='checked'){			
				$('[name="industryCheck"]').attr({'checked':'checked','disabled':'disabled'});
			}else{			
				$('[name="industryCheck"]').removeAttr('checked').removeAttr('disabled');
			}
			
		})
		
		$('[name="industryCheck"]').live('click',function(){
			
			checkJobIndustryNum();
		})
		
		

	
	
	
	
	
})
function checkJobIndustryNum(){
		var iJobNum=0;
		$('[name="industryCheck"]').each(function(){
			if($(this).attr('checked')=='checked'){
				iJobNum++;
			}
		});
		
		if(iJobNum>=3){

			$('[name="industryCheck"]').each(function(){
					
				if($(this).attr('checked')!='checked'){
					$(this).attr({'disabled':'disabled'});
				}
			});

			
		}else{
			$('[name="industryCheck"]').removeAttr('disabled');
		}
		
	}


function saveIndustry(){
	var str = '';
	
	var oJobIndustryAll=$('[name="jobIndustryAll"]');
	
	if(oJobIndustryAll.attr('checked')=='checked'){
		str = oJobIndustryAll.val();
	}else{
		$('[name="industryCheck"]').each(function(){
			if($(this).attr('checked')=='checked'){
				str +=$(this).val()+' ';
			}
		});
	}
	$('#industryInp').val(str);
	closeBoxy();
}


