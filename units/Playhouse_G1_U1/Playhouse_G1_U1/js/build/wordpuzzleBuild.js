
function buildWordPuzzleBody(aObj) {
    var htmlStmt = '';
	if(aObj !=undefined && aObj !=null && aObj != {}){
        htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
        htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
        htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
        htmlStmt += '</div>'; // end - act_head_group
		if(typeof aObj.options !=undefined && aObj.options !=null){
			if(aObj.options.length > 0){
				htmlStmt += '<div class="word_options d-flex flex-wrap">';
				jQuery.each(aObj.options, function(key, value){
					htmlStmt += '<div>'+value+'</div>';
				});
				htmlStmt += '</div>';
			}
		}        
        htmlStmt += '<div class="options flex-wrap mt-3"> ';
        htmlStmt += '<div class="puzzleclues d-flex flex-wrap justify-content-around"> ';
        var cluesObj = ((aObj.questions)[0]).clues;
		 if((cluesObj.down).length > 0){
            htmlStmt += '<div class="clue_grp">';
            htmlStmt += '<div class="clueDirection">DOWN</div>';
            for(var dd=0;dd<(cluesObj.down).length; dd++ ){
                htmlStmt += '<div class="clue d-flex clue_col_'+((cluesObj.down)[dd]).wordnum+'">';
                htmlStmt += '<div class="icon_wrap_holder mr-2">';
                htmlStmt += '<div class="icon_wrap"><div class="tick"><img src="../images/icons/check_btn.png"></div><div class="cross"><img src="../images/icons/cross_btn.png"></div></div>';
                htmlStmt += '</div>'; // end - icon_wrap_holder
                htmlStmt += '<div class="clueText">'+((cluesObj.down)[dd]).text+'</div>';
                htmlStmt += '</div>'; // end - clue
            }
            htmlStmt += '</div>';
        }
        if((cluesObj.across).length > 0){
            htmlStmt += '<div class="clue_grp">';
            htmlStmt += '<div class="clueDirection">ACROSS</div>';
            for(var cc=0;cc<(cluesObj.across).length; cc++ ){
                htmlStmt += '<div class="clue d-flex clue_row_'+((cluesObj.across)[cc]).wordnum+'">';
                htmlStmt += '<div class="icon_wrap_holder mr-2">';
                htmlStmt += '<div class="icon_wrap"><div class="tick"><img src="../images/icons/check_btn.png"></div><div class="cross"><img src="../images/icons/cross_btn.png"></div></div>';
                htmlStmt += '</div>'; // end - icon_wrap_holder
                htmlStmt += '<div class="clueText">'+((cluesObj.across)[cc]).text+'</div>';
                htmlStmt += '</div>'; // end - clue
                
            }
            htmlStmt += '</div>';
        }        
        htmlStmt += '</div>'; // end - puzzleclues
        htmlStmt += '<div class="puzzlematrix mx-auto"></div>';
        htmlStmt += '</div>'; // end - options
        $( ".activity_area" ).append( htmlStmt );
        setLoadedStatus(getCurrFileOrDirectory('file')); 
    }
}
