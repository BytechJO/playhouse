function buildMcqTickBody(aObj) {
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
            htmlStmt += '<div class="justify-content-center align-items-center">';
            if(aObj.activitysubheading != "" && aObj.activitysubheading != "no" ){
                htmlStmt += '<div class="activityTitle">'+aObj.activitysubheading+'</div>';               
            }
            htmlStmt += '<div class="tick_group">';
            for(x= 0;x<numOfQuestions;x++){
                var tempObj = (aObj.questions)[x];
                htmlStmt += '<div  id="que_'+(x+1)+'" class="que" data-qno="'+(x+1)+'">';
                htmlStmt += '<div class="d-flex justify-content-end icon_wrap_holder">';
                htmlStmt += '<div class="icon_wrap mx-1">';
                htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
                htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
                htmlStmt += '</div></div>'; // end - icon_wrap / icon_wrap_holder
                htmlStmt += '<div class="d-flex flex-wrap justify-content-between">';
                htmlStmt += '<div class="image_wrap"><img src="'+tempObj.image+'"></div>';
                htmlStmt += '<div class="tick_fields">';
                htmlStmt += '<div class="question_div d-flex flex-row">';
                if(tempObj.audio != "" && tempObj.audio != "no"){
                    htmlStmt += ' <div class="audioIcon ml-5 off disabled" data-audio="'+tempObj.audio+'" style="display: block;"></div> ';                    
                }
                htmlStmt += ' <div class="heading">'+tempObj.question+'</div> ';
                htmlStmt += '</div>'; // end - question_div
                for(y= 0;y<((tempObj).options).length;y++){	
                    htmlStmt += ' <div id="pick_'+(x+1)+'_'+(y+1)+'" class="tick_field d-flex pick"> ';
                    htmlStmt += '<div class="tickBox">';
                    htmlStmt += '<span class="selectTick" style="display: none;"><i class="fa fa-check" aria-hidden="true"></i></span>';
                    htmlStmt += '</div>'; // end - tickBox
                    htmlStmt += '<div class="tickContent">'+(((tempObj).options)[y]).text+'</div>';
                    htmlStmt += '</div>'; // end - pick
                }               
                htmlStmt += '</div></div></div>'; // end - tick_fields / d-flex / que
            }
            htmlStmt += '</div></div></div>'; // end - tick_group / justify-content-center / options
        }
    }
    // console.log('htmlStmt buildMcqBody >> ', htmlStmt);
    $( ".activity_area" ).append( htmlStmt );
    setLoadedStatus(getCurrFileOrDirectory('file')); 
}
    