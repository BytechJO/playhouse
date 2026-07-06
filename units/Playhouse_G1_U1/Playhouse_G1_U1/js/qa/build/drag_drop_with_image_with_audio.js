function initActivity(activity) {
    var html = '';
    html += '<div>';

    html += '<div class="drag_drop_options">';
    jQuery.each(activity.options, function(key, value) {
        html += '<div class="draggable_div" data-value="' + value + '">' + value + '</div>';
    });
    html += '</div>'


    html += '<div class="drag_drop_questions"><ul>';
    jQuery.each(activity.questions, function(key, image) {
        html += '<li><div><img src="../images/pages/activities/' + image + '" class="question_image" /></div><div>';
		
			 html += '<div class="audioIcon drop_audio_'+(key+1)+' off my-auto mx-5 disabled" style="margin-bottom: -11px !important;" data-audio="'+activity.audio[key]+'"></div>';
		
		html+='<input readonly type="text" class="droppable_div" /></div></li>';
		//alert(activity.audio.length);
    });
    html += '</ul></div>';



    html += '</div>';
    writeHtml(activity, html);
    setDefaultAnswerDragDrop(activity);

    //for mobile view
    if (window.outerWidth <= 600) {
        //jQuery('.drag_drop_options').css('top', (jQuery('.activity-heading').offset().top + jQuery('.activity-heading').height())+20);
    }

    jQuery('.drag_drop_options div.draggable_div').draggable({
        container: jQuery('.activity-content'),
        revert: true,
        placeholder: true,
        droptarget: '.drag_drop_questions input.droppable_div',
        drop: function(evt, droptarget) {
            jQuery(droptarget).val(evt.target.innerText);
            jQuery(droptarget).removeClass('droppable_div');

            jQuery(this).remove(); //('destroy');
            detectDragend();
        }
    });

    jQuery('.content_wrap').scroll(function() {
        console.log(jQuery(this).scrollTop());
        if (jQuery(this).scrollTop() > 72) {
            jQuery('.drag_drop_options').addClass('drag_drop_options_fixed');
        } else {
            jQuery('.drag_drop_options').removeClass('drag_drop_options_fixed');
        }
    });

    disableBtns();
}

//Example
/*
var stereo_data = {
    "audio":"",
    "exist":true,
    "bgColor_rgb":"rgb(53, 130, 180)",
    "type":"text",
    "playListData" : [
        {
          'audiourl': '../audios/demo.mp3',
        },
        {
          'url': '',
        },
        {
          'url': '',
        },
        {
          'url': '',
        }
    ],
  }
var _activity_json = {
"image":"new_drag_drop.png",
"heading":"Complete",
"type":"drag_drop_with_image",
"questions":[
				"ARC_2.1_SB_U3_P31_A1_I1.png",
				"ARC_2.1_SB_U3_P31_A1_I2.png",
				"ARC_2.1_SB_U3_P31_A1_I3.png"
			],
"options": ["Oliver", "speedy", "green"],
"answers": ["Oliver", "speedy", "green"],
"default_answer": {3:"green"}
};




*/