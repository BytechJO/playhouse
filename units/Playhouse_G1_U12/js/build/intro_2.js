function buildFillInBody(aObj) {	
	var htmlStmt = '';
	if(typeof aObj !=undefined && aObj !=null){		
       
		var layOut = parseInt(aObj.layout);
        var numOfPoints = (aObj.points).length;
        var numInRowArray = aObj.numinrow;
        var numOfRows = numInRowArray.length;
    	var currentQue = 1;			
		
		htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1"><a href=""><img src="../images/icons/back_btn.png"></a></div>';
    	htmlStmt +=  '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1"><a href=""><img src="../images/icons/next_btn.png"></a></div>';
		// ===================================================================== all_cont =====================
		htmlStmt += '<div class="options cont_ht_sf mx-auto">';
		htmlStmt += '<div class="all_cont justify-content-start justify-content-sm-center">';

			for (x = 0; x < numOfPoints; x++) {
				htmlStmt +=  '<div class="image-container '+aObj.class_name+'" style="'+aObj.postions[x]+'">'
					htmlStmt +=  '<img src="'+aObj.points[x]+'" class="point" data-img="img-'+ x +'"/>'
					htmlStmt += '<div class="audioIcon off contant " data-audio="' + aObj.imagesAudio[x] + '">';
						htmlStmt +=  '<div class="hover-image img-'+x+'" >'+aObj.words[x]+'</div>';
					htmlStmt +=  '</div>'
				htmlStmt +=  '</div>'
			}

		htmlStmt += '</div></div>'; // end - all_cont / options 
		
	}
	console.log('htmlStmt >> fillin Built');
	$( ".activity_area" ).append( htmlStmt );	
	showImg();
	setLoadedStatus(getCurrFileOrDirectory('file'));

	
}
function nextChar(c) {
	return String.fromCharCode(c.charCodeAt(0) + 1);
}  
function showImg(){
	$(document).ready(function () {
		$(".point").click(
			function () {
			  var imgName = $(this).data("img");
			$('.'+imgName).fadeToggle();
		  }
		);
	});
}
