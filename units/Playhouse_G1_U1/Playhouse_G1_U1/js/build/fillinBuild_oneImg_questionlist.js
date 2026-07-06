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
			var xx;
			console.log("NUm of Question: ",numOfQuestions,numInRowArray, numOfRows);
			if(layOut == 1){
				/*

				*/
				htmlStmt += '<div class="act_head_group">';
				htmlStmt += '<div class="d-flex justify-content-start">';
				htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
				htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
				htmlStmt += '</div>'; // - end - d-flex justify-content-start				
				htmlStmt += '</div>'; // - end - act_head_group
				htmlStmt += '<div class="options cont_ht_sf mx-auto">';
				htmlStmt += '<div class="all_cont justify-content-center">';
				htmlStmt += '<div class="group_elm d-flex justify-content-center">';
				if((aObj.image) != ''){
					if(aObj.imageposition == "front"){
						htmlStmt += '<div class="img_space d-flex justify-content-center align-items-center">';
						htmlStmt += '<img src="'+aObj.image+'">';
						htmlStmt += '</div>'; // - end img_space
					}
				}
				htmlStmt += '<div class="ques_part_space my-2">';
				for(x= 0;x<numOfQuestions;x++){	
				var tmpObj=aObj.questions[x];	
				htmlStmt += '<div class="fill_content d-flex flex-wrap flex-lg-nowrap justify-content-between">';
				htmlStmt += '<div class="que fill_fields d-flex" data-qno="'+(x+1)+'">';
				htmlStmt += '<div class="fill_box d-flex align-items-baseline">';
				htmlStmt += '<div class="q_num_space">';
				if(aObj.numbering == 'alphabet'){
					xx =(x == 0) ?aObj.numberstartfrom:nextChar(xx);					
				}else if (aObj.numbering == 'number'){
					xx =(x+parseInt(aObj.numberstartfrom));					
				}
				htmlStmt += xx+'. </div>';
				htmlStmt += '<span class="sta_txt_cont">'+tmpObj.textFront+'</span>';
				htmlStmt += '<div class="text_input_space">';
				htmlStmt += '<input class="text_input_area" type="text" maxlength="1">';
				htmlStmt += '</div>';// - end text_input_space
				htmlStmt += '<span class="sta_txt_cont">'+tmpObj.textBack+'</span>';
				htmlStmt += '</div>';// - end fill_box
				htmlStmt += '<div class="icon_wrap p-2" style="display: none;">';
				htmlStmt += '<div class="tick" style="display: none;"><img src="../images/icons/check_btn.png"></div>';
				htmlStmt += '<div class="cross" style="display: none;"><img src="../images/icons/cross_btn.png"></div>';
				htmlStmt += '</div>';// - end icon_wrap
				htmlStmt += '</div>';// - end que fill_fields
				htmlStmt += '</div>';// - end fill_content
				}
				htmlStmt += '</div>'; // - end ques_part_space
				if((aObj.image) != ''){
					if(aObj.imageposition == "back"){
						htmlStmt += '<div class="img_space d-flex justify-content-center align-items-center">';
						htmlStmt += '<img src="'+aObj.image+'">';
						htmlStmt += '</div>'; // - end img_space
					}
				}
				
				
				htmlStmt += '</div></div>';// - end -group_elm/ all_cont			
				htmlStmt += '</div>';// - end - options
			}
			
			
		}
		console.log('htmlStmt >> fillin Built');
		$( ".activity_area" ).append( htmlStmt );	
		
		setLoadedStatus(getCurrFileOrDirectory('file'));
    }
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}
console.log('nextchar>> ', nextChar('t'));