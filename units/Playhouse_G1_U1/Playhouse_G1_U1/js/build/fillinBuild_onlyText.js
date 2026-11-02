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
			if(layOut == 1){
				htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
				htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
				htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
				htmlStmt += '</div>';
				htmlStmt += '<div class="options cont_ht_sf mx-auto">';
				for(x= 0;x<numOfRows;x++){										
					htmlStmt += '<div class="d-flex flex-wrap flex-lg-nowrap justify-content-center">';		
					htmlStmt += '<div class="fill_content d-flex flex-wrap flex-lg-nowrap justify-content-between">';//Have to close div			
					for(y= 0;y<numInRowArray[x].length;y++){			
						console.log("**",x);			
						htmlStmt += '<div class="que fill_fields" data-qno="'+(currentQue)+'">';				
						htmlStmt += '<div class="fill_box">'+aObj.questions[x].textFront+'<input type="text" maxlength="1">'+aObj.questions[x].textBack+'</div>';
						htmlStmt += '<div class="icon_wrap p-2">';
						htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
						htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
						htmlStmt += '</div>';
						htmlStmt += '</div>';
						currentQue++;
					}     // '+((aObj.questions)[currentQue-1]).question+'
					htmlStmt += '</div></div>';					
				}
				if(aObj.images!=undefined && aObj.images!="")
				{
					htmlStmt += '<div class="fill_img d-flex flex-wrap flex-lg-nowrap">';
					var imgCount=(aObj.images).length;
					for(i= 0;i<imgCount;i++){
					htmlStmt += '<img src="'+aObj.images[i]+'">';			
					}
					htmlStmt += '</div>';					
				}			
				htmlStmt += '</div>';
			}
			if(layOut == 2){
				htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
				htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
				htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
				htmlStmt += '</div>';
				htmlStmt += '<div class="options cont_ht_sf mx-auto">';
				for(x= 0;x<numOfRows;x++){										
					htmlStmt += '<div class="d-flex flex-wrap flex-lg-nowrap justify-content-center">';		
					htmlStmt += '<div class="fill_content d-flex flex-wrap flex-lg-nowrap justify-content-between">';//Have to close div			
					for(y= 0;y<numInRowArray[x].length;y++){			
						console.log("**",x);			
						htmlStmt += '<div class="que fill_fields" data-qno="'+(currentQue)+'">';				
						htmlStmt += '<div class="fill_box">'+aObj.questions[x].textFront+'<input type="text" maxlength="1">'+aObj.questions[x].textBack+'</div>';
						htmlStmt += '<div class="icon_wrap p-2">';
						htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
						htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
						htmlStmt += '</div>';
						htmlStmt += '</div>';
						currentQue++;
					}     // '+((aObj.questions)[currentQue-1]).question+'
					htmlStmt += '</div></div>';					
				}
				if(aObj.images!=undefined && aObj.images!="")
				{
					htmlStmt += '<div class="fill_img d-flex flex-wrap flex-lg-nowrap">';
					var imgCount=(aObj.images).length;
					for(i= 0;i<imgCount;i++){
					htmlStmt += '<img src="'+aObj.images[i]+'">';			
					}
					htmlStmt += '</div>';					
				}			
				htmlStmt += '</div>';
			}
			if(layOut == 3){
				htmlStmt += '<div class="act_head_group d-flex justify-content-start">';
				htmlStmt += '<div class="keyIcon"><img src="'+aObj.activityicon+'"/></div>' ;
				htmlStmt += '<div class="activityHeading">'+aObj.activityheading+'</div>';
				htmlStmt += '</div>';
				htmlStmt += '<div class="options cont_ht_sf mx-auto">';
				for(x= 0;x<numOfRows;x++){										
					htmlStmt += '<div class="d-flex flex-wrap flex-lg-nowrap justify-content-center">';		
					htmlStmt += '<div class="fill_content d-flex flex-wrap flex-lg-nowrap justify-content-between">';//Have to close div			
					for(y= 0;y<numInRowArray[x].length;y++){			
						console.log("**",x);			
						htmlStmt += '<div class="que fill_fields" data-qno="'+(currentQue)+'">';				
						htmlStmt += '<div class="fill_box">'+aObj.questions[x].textFront+'<input type="text" maxlength="40">'+aObj.questions[x].textBack+'</div>';
						htmlStmt += '<div class="icon_wrap p-2">';
						htmlStmt += '<div class="tick"><img src="../images/icons/check_btn.png"/></div>';
						htmlStmt += '<div class="cross"><img src="../images/icons/cross_btn.png"/></div>';
						htmlStmt += '</div>';
						htmlStmt += '</div>';
						currentQue++;
					}     // '+((aObj.questions)[currentQue-1]).question+'
					htmlStmt += '</div></div>';					
				}
				if(aObj.images!=undefined && aObj.images!="")
				{
					htmlStmt += '<div class="fill_img d-flex flex-wrap flex-lg-nowrap">';
					var imgCount=(aObj.images).length;
					for(i= 0;i<imgCount;i++){
					htmlStmt += '<img src="'+aObj.images[i]+'">';			
					}
					htmlStmt += '</div>';					
				}			
				htmlStmt += '</div>';
			}
		}
		console.log('htmlStmt >> fillin Built');
		$( ".activity_area" ).append( htmlStmt );	
		
		setLoadedStatus(getCurrFileOrDirectory('file'));
    }
    /*if (fillin_data != undefined && fillin_data != null) {	
		myData = fillin_data;			
        buildFillInBody(myData);
     }
});*/