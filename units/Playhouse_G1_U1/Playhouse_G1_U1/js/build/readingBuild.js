/*$(function () {  
    // var $ =jQuery.noConflict();
    var myData = {};*/
    function buildReadingHTML(aObj) {        
        var slide = '';
		var slideHtml="";
		// console.log("reading Obje" + readingObj.slides.length);
        slideHtml="<div class='container content_wrap reading_container'>";
        slideHtml += "<div class='options cont_ht_sf mx-auto'>";
        slideHtml += "<div class='all_cont d-flex justify-content-center align-items-center'>";
        slideHtml += "<div class='slides cont_group my-3'>";
        if (typeof aObj !== undefined && aObj.slides.length!=0 && aObj!= null) {
            for(var slideIndex=0; slideIndex<aObj.slides.length; slideIndex++)
			{
			slide = aObj.slides[slideIndex];
            slideHtml += "<div class='slide slide_"+(slideIndex+1)+"'>";
            slideHtml += "<div class='d-flex flex-wrap justify-content-center'>";
            slideHtml += "<div class='read_img_box'><img src='"+slide.image+"'></div>";
			if(slide.text!='')
            slideHtml += "<div class='text_cont d-flex justify-content-center justify-content-md-left my-auto'>"
            slideHtml += "<div class='audioIcon off mx-2' data-slideNum='"+Number(slideIndex+1)+"' data-audio='"+slide.audio+"'></div>";             
            slideHtml += "<div class='content'>"+slide.text+"</div>";
            slideHtml += "</div>";
            slideHtml += "</div></div>";
			}
			slideHtml +="</div></div></div></div>";
			// console.log(slideHtml);
            $( ".mainContent" ).append( slideHtml );
            setLoadedStatus('reading.html');
        }
    }
   /* if (typeof reading_data !== undefined && reading_data != null) {	
        myData = reading_data;
        buildReadingHTML(myData);
     }
});*/