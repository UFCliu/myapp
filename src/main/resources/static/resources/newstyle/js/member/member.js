
//隐藏所有资质信息
		function hide1(){
			/* $("#qyyyzz").hide();
			$("#swdjz").hide();
			$("#zzjgdm").hide(); */
			$("#ypscqyxkz").hide();
			 $("#GMP").hide();
			$("#ylqxjyxkz").hide();
			$("#ylqxscxkz").hide();
			$("#ypjyqyxkz").hide();
			$("#GSP").hide();
			$("#ylqxscxk").hide();
			$("#bjspws").hide();
			$("#hzpscqywsxkz").hide();
			$("#scxkz").hide();  
			$("#yljgzyxkz").hide();
			$("#spltxkz").hide();
			$("#scxkz").hide();
			$("#bjspcs").hide();
			/* $("#zdzhgh").hide();
			$("#xgyz").hide();
			$("#frsqwts").hide();
			$("#zlbzxys").hide(); */
		}
		function hide2(){
			/* $("#qyyyzz").hide();
			$("#swdjz").hide();
			$("#zzjgdm").hide(); */
			$("#ypscqyxkz").hide();
			$("#ylqxscxkz").hide();
			$("#ylqxscxk").hide();
			 $("#GMP").hide();
			$("#ylqxjyxkz").hide();
			$("#ypjyqyxkz").hide();
			$("#GSP").hide();
			$("#bjspws").hide();
			$("#bjspcs").hide();
			$("#hzpscqywsxkz").hide();
			$("#scxkz").hide();  
			$("#yljgzyxkz").hide();
			$("#scxkz").hide();
			$("#xgyz").hide();
			$("#zlbzxys").hide();
			$("#spltxkz").hide();
			/* $("#zdzhgh").hide();
			 * $("#frsqwts").hide();
			 */
		}
		//选择企业类型来显示资质信息
		function whichOrgType(orgType,orgSubType){
			whichOrgTypeAndisPay(orgType,orgSubType,false);
		}
		function whichOrgTypeAndisPay(orgType,orgSubType,isnopay){
			if($("#userType").val()=="SUPPLIER"){
				//hide1();
				//qyyyzz  swdjz  zzjgdm,ypscqyxkz,GMP,ylqxjyxkz,ypjyqyxkz,GSP ，ylqxscxk
				if("production_med" == orgSubType){
					//生产企业-药品生产企业
					$("#ypscqyxkz").show();
					$("#GMP").show();
				}else if("production_equ" == $.trim(orgSubType)){
					//生产企业-医疗器械生产企业
					    
					$("#ylqxscxkz").show();
					$("#ylqxscxk").show();
				}else if("production_healthfood" == orgSubType){
					//生产企业-保健品生产企业
					$("#bjspcs").show();
				}else if("production_medchina" == orgSubType){
					//生产企业-中药饮片生产企业
					$("#ypscqyxkz").show();
					$("#GMP").show();
				}else if("production_medbag" == orgSubType){
					//生产企业-药材包生产企业
				}else if("production_cosmetic" == orgSubType){
					//生产企业-化妆品生产企业
					$("#hzpscqywsxkz").show();
					$("#scxkz").show();
				}else if("production_sterilize" == orgSubType){
					//生产企业-消毒用品生产企业
					$("#hzpscqywsxkz").show();
					$("#scxkz").show();
				}else if("production_food" == orgSubType){
					//生产企业-食品生产企业
					$("#hzpscqywsxkz").show();
					$("#scxkz").show();
				}else if("production" == orgType){
					//生产企业-其他企业
				}else if("wholesalebusiness_med" == orgSubType ){
					//经营企业-药品经营企业
					$("#ypjyqyxkz").show();
					$("#GSP").show();
				}else if("wholesalebusiness_equ" == orgSubType){
					//经营企业-医疗器械经营企业
					$("#ylqxjyxkz").show();
				}else if("wholesalebusiness_healthfood" == orgSubType){
					//经营企业-保健品经营企业
					$("#spltxkz").show();
					
				}else if("wholesalebusiness_medchina" == orgSubType){
					//经营企业-中药饮片经营企业
					$("#ypjyqyxkz").show();
					$("#GSP").show();
				}else if("wholesalebusiness_cosmetic" == orgSubType){
					//经营企业-化妆品经营企业
					$("#hzpscqywsxkz").show();
				}else if("wholesalebusiness_sterilize" == orgSubType){
					//经营企业-消毒用品经营企业
					$("#hzpscqywsxkz").show();
				}else if("wholesalebusiness_food" == orgSubType){
					//经营企业-食品经营企业
					$("#hzpscqywsxkz").show();
				}else if("wholesalebusiness_medbag" == orgSubType){
					//经营企业-药材包经营企业
				}
			}else {
				//hide2();
				//qyyyzz  swdjz  zzjgdm,ypscqyxkz,GMP,ylqxjyxkz,ypjyqyxkz,GSP ，ylqxscxk
				if("chain_med" == orgSubType || "retail_business_med" == orgSubType){
					//经营企业-药品经营企业
					$("#qyyyzz").show();
					$("#swdjz").show();
					$("#ypjyqyxkz").show();
					$("#GSP").show();
				}else if("chain_equ" == orgSubType || "retail_business_equ" == orgSubType){
					//经营企业-医疗器械经营企业
					$("#ylqxjyxkz").show();
				}else if("chain_healthfood" == orgSubType || "retail_business_healthfood" == orgSubType){
					//经营企业-保健品经营企业
					$("#spltxkz").show();
				}else if("chain_medchina" == orgSubType || "retail_business_medchina" == orgSubType){
					//经营企业-中药饮片经营企业
					$("#ypjyqyxkz").show();
					$("#GSP").show();
					$("#xgyz").show();
				}else if("chain_cosmetic" == orgSubType || "retail_business_cosmetic" == orgSubType){
					//经营企业-化妆品经营企业
				}else if("chain_medbag" == orgSubType || "retail_business_medbag" == orgSubType){
					//经营企业-药材包经营企业
					$("#xgyz").show();
				}else if("chain_food" == orgSubType || "retail_business_food" == orgSubType){
					//经营企业-食品经营企业
				}else if("chain_sterilize" == orgSubType || "retail_business_sterilize" == orgSubType){
					//经营企业-消毒用品经营企业
				}else if("hospital" == orgType ){
					//医疗机构-医疗机构
					//if(radio_isPayof_yes)
					if(isnopay){
						$("#qyyyzz").hide();
					}else{
						$("#qyyyzz").show();
					}
					
					$("#yljgzyxkz").show();
					$("#zzjgdm").show();
					$("#swdjz").hide();
				}else if("clinic" == orgType ){
					//医疗机构-诊所、社区门诊
					if(isnopay){
						$("#qyyyzz").hide();
					}else{
						$("#qyyyzz").show();
					}
					$("#swdjz").hide();
					$("#zzjgdm").hide();
					$("#yljgzyxkz").show();
				}
			}
		}
!function(){
	laydate.skin('molv');//切换皮肤，请查看skins下面皮肤库
	laydate({elem: '#operateStartDate',choose:function(dates){clearDiv("operateStartDate")}});
	laydate({elem: '#operateEndDate',choose:function(dates){clearDiv("operateEndDate")}});
	laydate({elem: '#productLicenseBtime',max : laydate.now(),choose:function(dates){clearDiv("productLicenseBtime")}});//绑定元素
	laydate({elem: '#productLicenseEtime',min : laydate.now(),choose:function(dates){clearDiv("productLicenseEtime")}});//绑定元素
	laydate({elem: '#producerLicenceBtime',max : laydate.now(),choose:function(dates){clearDiv("producerLicenceBtime")}});//绑定元素
	laydate({elem: '#producerLicenceEtime',min : laydate.now(),choose:function(dates){clearDiv("producerLicenceEtime")}});//绑定元素
	laydate({elem: '#businessLicenseBtime',max : laydate.now(),choose:function(dates){clearDiv("businessLicenseBtime")}});//绑定元素
	laydate({elem: '#businessLicenseEtime',min : laydate.now(),choose:function(dates){clearDiv("businessLicenseEtime")}});//绑定元素
	laydate({elem: '#medicalDevProIcenseBtime',max : laydate.now(),choose:function(dates){clearDiv("medicalDevProIcenseBtime")}});//绑定元素
	laydate({elem: '#medicalDevProIcenseEtime',min : laydate.now(),choose:function(dates){clearDiv("medicalDevProIcenseEtime")}});//绑定元素
	laydate({elem: '#practicingLicenseBtime',max : laydate.now(),choose:function(dates){clearDiv("practicingLicenseBtime")}});//绑定元素
	laydate({elem: '#practicingLicenseEtime',min : laydate.now(),choose:function(dates){clearDiv("practicingLicenseEtime")}});//绑定元素
	laydate({elem: '#faxCertiBtime',max : laydate.now(),choose:function(dates){clearDiv("faxCertiBtime")}});//绑定元素
	laydate({elem: '#faxCertiEtime',min : laydate.now(),choose:function(dates){clearDiv("faxCertiEtime")}});//绑定元素
	laydate({elem: '#orgCertBtime',max : laydate.now(),choose:function(dates){clearDiv("orgCertBtime")}});//绑定元素
	laydate({elem: '#orgCertEtime',min : laydate.now(),choose:function(dates){clearDiv("orgCertEtime")}});//绑定元素
	laydate({elem: '#medicalDevIcenseBtime',max : laydate.now(),choose:function(dates){clearDiv("medicalDevIcenseBtime")}});//绑定元素
	laydate({elem: '#medicalDevIcenseEtime',min : laydate.now(),choose:function(dates){clearDiv("medicalDevIcenseEtime")}});//绑定元素
	laydate({elem: '#tradingLicenceBtime',max : laydate.now(),choose:function(dates){clearDiv("tradingLicenceBtime")}});//绑定元素
	laydate({elem: '#tradingLicenceEtime',min : laydate.now(),choose:function(dates){clearDiv("tradingLicenceEtime")}});//绑定元素
	laydate({elem: '#gmpCertBtime',max : laydate.now(),choose:function(dates){clearDiv("gmpCertBtime")}});//绑定元素
	laydate({elem: '#gmpCertEtime',min : laydate.now(),choose:function(dates){clearDiv("gmpCertEtime")}});//绑定元素
	laydate({elem: '#gspCertBtime',max : laydate.now(),choose:function(dates){clearDiv("gspCertBtime")}});//绑定元素
	laydate({elem: '#gspCertEtime',min : laydate.now(),choose:function(dates){clearDiv("gspCertEtime")}});//绑定元素
	laydate({elem: '#comsHealthpermitBtime',max : laydate.now(),choose:function(dates){clearDiv("comsHealthpermitBtime")}});//绑定元素
	laydate({elem: '#comsHealthpermitEtime',min : laydate.now(),choose:function(dates){clearDiv("comsHealthpermitEtime")}});//绑定元素
	laydate({elem: '#healthSanitLicenseBtime',max : laydate.now(),choose:function(dates){clearDiv("healthSanitLicenseBtime")}});//绑定元素
	laydate({elem: '#healthSanitLicenseEtime',min : laydate.now(),choose:function(dates){clearDiv("healthSanitLicenseEtime")}});//绑定元素
	laydate({elem: '#foodPermitBtime',max : laydate.now(),choose:function(dates){clearDiv("foodPermitBtime")}});//绑定元素
	laydate({elem: '#foodPermitEtime',min : laydate.now(),choose:function(dates){clearDiv("foodPermitEtime")}});//绑定元素
	laydate({elem: '#healthProductLicenseBtime',max : laydate.now(),choose:function(dates){clearDiv("healthProductLicenseBtime")}});//绑定元素
	laydate({elem: '#healthProductLicenseEtime',min : laydate.now(),choose:function(dates){clearDiv("healthProductLicenseEtime")}});//绑定元素



}();		

function clearDiv(id){
	if($("#"+id+"-error").size()>0){
		 $("#"+id).removeClass("my-form-error-class");
		$("#"+id+"-error").hide();
	}
}
		