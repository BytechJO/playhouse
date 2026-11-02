function buildFillInOrderBody(aObj) {
	var htmlStmt = '';
	if(aObj !=undefined && aObj !=null){
		var layOut = parseInt(aObj.layout);
		var numOfQuestions =(aObj.questions).length;
		var currentQue = 1;
		if(layOut == 3){
			htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
			htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
			htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
			htmlStmt += '</div>';
			htmlStmt += ' <div class="options cont_ht_sf mx-auto">';
			htmlStmt += ' <div class="all_cont justify-content-center align-items-center activity_loader">';
			htmlStmt += ' <div class="cont_group my-3">';
			htmlStmt += ' <div class="d-flex flex-wrap justify-content-center f_i_t_4_group">';
			for(x=0; x<numOfQuestions;x++)
				{
					htmlStmt += '<div id="que_'+(x+1)+'" class="f_i_t_5_q_group f_i_t_5_g_1 que" data-qno="'+(x+1)+'">';
					htmlStmt += '<div class="img_box1 d-flex justify-content-center align-items-center">';
					htmlStmt += '<img src="'+((aObj.questions)[x]).image+'"></div>';
					htmlStmt += '<div class="txt_box d-flex justify-content-center align-items-center" data-type="text">';
					htmlStmt += '<input id="input_'+(x+1)+'" class="mx-2" type="text" maxlength="1" data-type="'+((aObj.questions)[x]).type+'" value="'+((((aObj.questions)[x]).disabled == "true")? ((aObj.questions)[x]).answer[0]:"")+'" '+((((aObj.questions)[x]).disabled == 'true')? "disabled readonly": "")+'/>';
						/*if(((aObj.questions)[currentQue-1]).audio != "no")
						{
						alert('notwprking');
						htmlStmt += '<div class="theIcons d-flex">';
						htmlStmt += '<div class="audioIcon ml-5 off disabled" data-audio="'+((aObj.questions)[currentQue-1]).audio+'"></div>';
						htmlStml += '</div>';
						}*/
					htmlStmt += '<div class="icon_wrap">'; 
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
					htmlStmt += '</div></div></div>';
					currentQue++;
				}		
			htmlStmt += '</div></div></div></div>';
		}
	}	
	$( ".activity_area" ).append( htmlStmt );
	//doWindowResize();
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
