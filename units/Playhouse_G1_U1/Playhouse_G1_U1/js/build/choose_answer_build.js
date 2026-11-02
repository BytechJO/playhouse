function buildMcqBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var numOfQuestions = (aObj.questions).length;
		var numberofCols = parseInt(aObj.numberofcolumns);
		var numOfQinCol = Math.round(numOfQuestions/numberofCols);
		var currQueNum = 0;				
		
		htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
		htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
		htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
		htmlStmt += '</div>';
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';
        htmlStmt += '<div class="d-flex flex-wrap justify-content-center align-items-center">';
        if(aObj.image != 'no' && aObj.image != ''){
            if(aObj.imageposition == 'front'){
                htmlStmt += '<div class="img_space"><img src="'+aObj.image+'"></img></div>';
            }
        }
		for(x= 0;x<numberofCols;x++){	
			htmlStmt += '<div class="tick_group">';			
			for(y= 0;y<numOfQinCol;y++){
				currQueNum++;
				var tpOb = (aObj.questions)[currQueNum -1];
				if(typeof tpOb != undefined && tpOb != null ){
					htmlStmt += '<div class="que" id="que_'+currQueNum+'" data-qno="'+currQueNum+'">';
					htmlStmt += '<div class="d-flex q_part">';
					// htmlStmt += '<div class="q_num_space">a. </div>';
					if(aObj.numbering != 'none'){
						htmlStmt += '<div class="q_num_space">';
						if(aObj.numbering == 'alphabet'){
							xx =(currQueNum == 1) ?aObj.numberstartfrom:nextChar(xx);					
						}else if (aObj.numbering == 'number'){
							xx =(x+parseInt(aObj.numberstartfrom));					
						}
						htmlStmt += xx+'. </div>';
					}                  	
                    var str = tpOb.question;
                    // var count = (str.match(/[_]/g) || []).length;
                    var qStr = str.replace(/\[_]/g, '<input class="text_input_area" type="text" readonly disabled>');				

                    htmlStmt += '<div>'+qStr+'</div>';
					htmlStmt += '</div>'; // - /q_part
					htmlStmt += '<div class="d-flex flex-wrap picks_grp">';
                    
                    if((tpOb.options).length > 0){
                        for(var opt=0;opt<(tpOb.options).length;opt++){
                            htmlStmt += '<div id="pick_'+(currQueNum)+'_'+(opt+1)+'" class="pick" data-opttext="'+((tpOb.options)[opt]).text+'">';                            
                            htmlStmt += '<div class="txt">'+((tpOb.options)[opt]).text+'</div> ';                                   
                            htmlStmt += '</div>';
                        }
                        
                    }
                    
                    htmlStmt += '</div>';// - /picks_grp

					htmlStmt += '<div class="icon_wrap p-2">';
					htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"></div>';
					htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"></div>';
                    htmlStmt += '</div>';
                    

					
					htmlStmt += '</div>';
				}
			}									
			htmlStmt += '</div>';// --/ tick_group
							
		}
		if(aObj.image != 'no' && aObj.image != ''){
            if(aObj.imageposition == 'back'){
                htmlStmt += '<div class="img_space"><img src="'+aObj.image+'"></img></div>';
            }
        }		
		htmlStmt += '</div></div></div>'; // --/ d-flex flex-wrap / all_cont / options
		
	}
	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	
	setLoadedStatus(getCurrFileOrDirectory('file'));
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}  