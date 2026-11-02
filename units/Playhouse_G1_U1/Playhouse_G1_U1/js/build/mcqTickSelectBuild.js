/*$(function () {
    var myData = {};  */
    function buildMcqBody(aObj) {
		var htmlStmt = '';
		if(aObj !=undefined && aObj !=null){
			var layOut = parseInt(aObj.layout);
			var numOfQuestions = (aObj.questions).length;
			var numInRowArray = aObj.numinrow;
			var numOfRows = numInRowArray.length;
			var currentQue = 1;
			console.log("NUm of Question: ",numOfQuestions,numInRowArray, numOfRows);
			if(layOut == 1){
				htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
				htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
				htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
				htmlStmt += '</div>';
				htmlStmt += '<div class="options cont_ht_sf mx-auto">';			 
				for(x= 0;x<numOfRows;x++){
					var tempObj = (aObj.questions)[currentQue-1];
					var _taudioenable = '';
					htmlStmt += '<div class="all_cont justify-content-center align-items-center">';
            		htmlStmt += '<div id="que_'+currentQue+'" class="cont_group que my-3" data-qno="'+(currentQue)+'">'; 
					htmlStmt += '<div class="sub_title d-flex flex-wrap justify-content-start mcq_t_'+currentQue+'_group">'+(tempObj).question+'</div>';
					
					htmlStmt += '<div class="picks_grp">';
					htmlStmt += '<div class="d-flex justify-content-end">';
					if(tempObj.audio != 'no' && tempObj.audio != ''){
						_taudioenable = (tempObj.audioenable == 'correct')? 'disabled':'';
						htmlStmt += '<div class="audioIcon off '+_taudioenable+' my-auto mx-2" data-audio="'+tempObj.audio+'"></div>';
					}
					htmlStmt += '<div class="icon_wrap mx-1">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
					htmlStmt += '</div>'; // end - icon_wrap
					htmlStmt += '</div>'; // end - d-flex justify-content-end
					htmlStmt += '<div class="d-flex flex-wrap justify-content-center">';

					for(y= 0;y<((tempObj).options).length;y++){	
						//		mcq_1_5_q_			
						htmlStmt += '<div id="pick_'+currentQue+'_'+(y+1)+'" class="mcq_1_5_q_group pick">';
						htmlStmt += '<div class="selX"><img src="../images/icons/cross_svg.svg"/></div>';
						htmlStmt += '<div class="img_box1 d-flex justify-content-center align-items-center"><img src="'+((((tempObj).options))[y]).image+'"></div>';
						htmlStmt += '<div class="txt_box d-flex justify-content-center align-items-center" data-type="text">';
						if(((tempObj.options)[y]).audio != '' && ((tempObj.options)[y]).audio != 'no'){
							_taudioenable = (((tempObj.options)[y]).audioenable == 'correct')? 'disabled':'';
							htmlStmt += '<div class="audioIcon off mx-1 '+_taudioenable+'" data-audio="'+((tempObj.options)[y]).audio+'"></div>';
						}
						htmlStmt += '<div class="tickBox mx-1"><span class="selectTick"><i class="fa fa-check" aria-hidden="true"></i></span></div>';
						htmlStmt += '<span>'+((tempObj.options)[y]).text+'</span></div>';												
						htmlStmt += '</div>';						
						currentQue++;
					}
					htmlStmt += '</div></div>';
					htmlStmt += '</div></div></div>';
				}				
				
			}
		}
		// console.log('htmlStmt buildMcqBody >> ', htmlStmt);
		$( ".activity_area" ).append( htmlStmt );
		setLoadedStatus(getCurrFileOrDirectory('file')); 
    }
    /*if (mcq_data != undefined && mcq_data != null) {	
		myData = mcq_data;			
        buildMcqBody(myData);
     }
});*/