
function buildWordSearchBody(aObj) {
    var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null && aObj != {}){
        htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
        htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
        htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
        htmlStmt += '</div>'; // end - act_head_group
        htmlStmt += '<div class="options cont_ht_sf d-flex flex-wrap">'; 
        htmlStmt += '<div class="all_cont justify-content-center">';
        htmlStmt += '<div class="wordsearch_wrap d-flex align-items-center">';
        htmlStmt += '<div class="wordmatrix_holder">';
        htmlStmt += '<div class="wordmatrix"></div>';
        htmlStmt += '</div>';// end - wordmatrix_holder
        htmlStmt += '<div class="wordlist"></div>';
        htmlStmt += '</div>';// end - wordlist
        
        htmlStmt += '</div>';// end - wordlist
        htmlStmt += '</div>';// end - wordsearch_wrap
        htmlStmt += '</div>';// end - all_cont
        htmlStmt += '<div class="wordlist_but">WORDS</div>';
        htmlStmt += '</div>';// end - options
        $( ".activity_area" ).append( htmlStmt );
        setLoadedStatus(getCurrFileOrDirectory('file')); 
    }
}
