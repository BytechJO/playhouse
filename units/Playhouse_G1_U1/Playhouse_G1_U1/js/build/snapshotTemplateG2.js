$(function () {
    var _templateData = {};
    var _templatePath = '';
    function buildSnapShotContent(snapshotObj,snapshotPopup_data) {
		console.log(snapshotObj.snapshot[0],"d")
        var slide = '';
		var slideHtml="";
		console.log("_" + snapshotObj.snapshot);
		//slideHtml="<div class='container content_wrap'>";
		
		
        if (snapshotObj != undefined && snapshotObj.snapshot.length!=0 && snapshotObj!= null) {
			var curIndex = 0;
			var wordStyle=0;
			var audioArry  = snapshotObj.snapshot[0].audio;
			console.log("_",audioArry)
			var imgArry  = snapshotObj.snapshot[0].image;
			var wordArray=snapshotObj.snapshot[0].word;
			slideHtml="<div class='snap_group_all'>"
			var ImagePos = snapshotObj.snapshot[0].imagePlacePos;
			if(ImagePos!= undefined)
			{
			for(var snapIndex=0; snapIndex<ImagePos.length; snapIndex++){
				slideHtml+="<div class='snap_group_"+Number(snapIndex+1)+" row mx-0'>";
				var colLength = Math.round(12/ImagePos[snapIndex].length);	
				console.log("*"+colLength);
				for(var imgIndex =0; imgIndex<ImagePos[snapIndex].length; imgIndex++)
				{
						slideHtml+="<div class='col-12 col-md-"+colLength+"'>";
						slideHtml+="<div class='snap_card mx-0 mx-md-auto audioTile' data-audio='"+audioArry[curIndex]+"'data-onaudioplay='color:#e43b6d'>"
						console.log("__",ImagePos[snapIndex])
						if(ImagePos[snapIndex][imgIndex]!=0){	
							wordStyle=curIndex+1;
							slideHtml+="<div class='ss_word ss_t_"+wordStyle+"'><div class='ss_text'>"+wordArray[curIndex]+"</div></div>";						
							slideHtml+="<img class='ss_img_"+wordStyle+"' src="+imgArry[curIndex]+">";
							curIndex++;
							}
						slideHtml+="</div></div>"
				}	
				
				slideHtml+="</div>";
			}
			}
			slideHtml +="</div>";
			$( ".snapShotLoader" ).append( slideHtml );
			}
			var snapShotPopup="";		
			snapShotPopup+=snapshotPopup_data;
		$( ".modal-body" ).append(snapShotPopup);
    }
    if (snapshot_data != undefined && snapshot_data != null && snapshotPopup_data != undefined && snapshotPopup_data != null) {
        buildSnapShotContent(snapshot_data,snapshotPopup_data);
     }
});