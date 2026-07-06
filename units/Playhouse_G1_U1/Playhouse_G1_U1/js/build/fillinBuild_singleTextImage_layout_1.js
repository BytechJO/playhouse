/*$(function () {
    var myData = {};  */ 
    function buildFillInBody(aObj) {       
		var htmlStmt = '';
		if(aObj !=undefined && aObj !=null){
			var layOut = parseInt(aObj.layout);
			var numOfQuestions = (aObj.questions).length;
			var numInRowArray = aObj.numinrow;
			var numOfRows = numInRowArray.length;
			var currentQue = 1;
			console.log("NUm of Question: ",numOfQuestions,numInRowArray, numOfRows);
			if(layOut == 3){
                htmlStmt += '<div class="act_head_group">';
                htmlStmt += '<div class="d-flex justify-content-start">';
                htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
                htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
                htmlStmt += '</div>'; // end - d-flex justify-content-start
                htmlStmt += '<div class="activityTitle">'+aObj.activitysubheading+'</div>';
                htmlStmt += '</div>'; // end - act_head_group
                htmlStmt += '<div class="options cont_ht_sf mx-auto">';
                htmlStmt += '<div class="que all_cont justify-content-center align-items-center" data-qno="'+currentQue+'">';
                htmlStmt += '<div>';
                htmlStmt += '<div class="icon_wrap_holder">';
                htmlStmt += '<div class="icon_wrap mx-1">';
                htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
                htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
                htmlStmt += '</div></div>'; // end - icon_wrap / icon_wrap_holder
                htmlStmt += '<div class="just_group">';
                htmlStmt += '<div class="img_box1 col-12 mb-2">'; 
                htmlStmt += '<img src="'+((aObj.questions)[currentQue-1]).image+'">';
                htmlStmt += '</div>'; // end - img_box1
                htmlStmt += '<div class="txtBox font_coming d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center">';
                htmlStmt += '<span><span class="fill-group fill_g_1">';
                if((((aObj.questions)[currentQue-1]).textFront).length > 0){
                    var txtFrnt = (((aObj.questions)[currentQue-1]).textFront);
                    for(var tt=0; tt< txtFrnt.length; tt++){
                        htmlStmt += '<span class="text-bold">'+txtFrnt[tt]+'</span>';
                    }
                     
                }
               
                // htmlStmt += '<span class="text-bold"></span>';         
                // htmlStmt += '</span'; // end - fill-group
                // htmlStmt += '<span class="fill-group fill_g_2">';
                htmlStmt += '<input class="py-1" type="text" maxlength="10" style="color: black;">';
                // htmlStmt += '</span>'; // end - fill-group
                // htmlStmt += '<span class="fill-group fill_g_3">';
                if((((aObj.questions)[currentQue-1]).textBack).length > 0){
                    var txtBck = (((aObj.questions)[currentQue-1]).textBack);
                    for(var tt1=0; tt1< txtBck.length; tt1++){
                        htmlStmt += '<span class="text-bold">'+txtBck[tt1]+'';
                    }
                     
                }
                // htmlStmt += '<span class="text-bold">'+((aObj.questions)[currentQue-1]).text2+'</span>';
                htmlStmt += '</span></span>'; // end - fill-group
                htmlStmt += '</div>'; // end - txtBox
                htmlStmt += '</div>'; // end - just_group
                htmlStmt += '</div>'; // end - 
                htmlStmt += '</div>'; // end - que
                htmlStmt += '</div>'; // end - options
                
                
                
                
                console.log('htmlStmt >> ', htmlStmt);
            }
		}
		console.log('htmlStmt >> fillin Built');
		$( ".activity_area" ).append( htmlStmt );	
		
		setLoadedStatus(getCurrFileOrDirectory('file'));
    }
    