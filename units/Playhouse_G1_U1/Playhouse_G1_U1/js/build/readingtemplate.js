//05-06-2020
$(function () {  
    function buildReaderContent(readingObj) {
        var slide = '';
		var slideHtml="";
		// console.log("reading Obje" + readingObj.slides.length);
		slideHtml="<div class='container content_wrap slides reading_container'>";
        if (readingObj != undefined && readingObj.slides.length!=0 && readingObj!= null) {
            for(var slideIndex=0; slideIndex<readingObj.slides.length; slideIndex++)
			{
			slide = readingObj.slides[slideIndex];
			console.log("Slide " + slide);
           	slideHtml +="<!--Slide "+Number(slideIndex)+1 + " content Starts-->";
			slideHtml +="<div class='slide slide_"+Number(slideIndex+1) +"'>";
			slideHtml +="<div class='all_container d-flex flex-wrap flex-md-nowrap align-items-center justify-content-center'>";			
			slideHtml +="<div class='img_box d-flex align-items-center'>";
			slideHtml +="<img class='' src='"+slide.image+"'>";
			slideHtml +="</div>";
			slideHtml +="<div class='text-center text-md-left mx-3 my-auto'>";
			slideHtml +="<div class='content_box d-flex my-3'>";
			slideHtml +="<div class='audioIcon off mx-2' data-slideNum='"+Number(slideIndex+1)+"' data-audio='"+slide.audio+"'></div>";
			slideHtml +="<div class='content readingImg'>"+slide.text+"</div>";
			slideHtml +="</div></div></div></div>";
			}
			slideHtml +="</div>";
			// console.log(slideHtml);
			$( ".mainContent" ).append( slideHtml );
            }
    }
    if (reading_data != undefined && reading_data != null) {			
        buildReaderContent(reading_data);
     }
});