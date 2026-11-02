function buildFillInDrawBody(aObj) {
    var htmlStmt = '';
    if (typeof aObj != undefined && aObj != null) {

        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a></div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a></div>';

        // ===== heading =====
        htmlStmt += '<div class="act_head_group justify-content-center">';
        htmlStmt += '<div class="audioIcon off contant" data-slideNum="1" data-audio="' + aObj.mainTitleAudio + '">';
        htmlStmt += '<div class="q-type-img-container">';
        htmlStmt += '<img class="mainTitle" src=' + aObj.mainTitle + '>';
        if (aObj.mainTitleIcon != undefined && aObj.mainTitleIcon != '') {
            htmlStmt += '<img class="mainTitleIcon" src=' + aObj.mainTitleIcon + ' style="right: ' + aObj.mainTitleIconPos.right + ';">';
        }
        htmlStmt += '</div></div>';

        htmlStmt += '<div class="activityHeading">';
        htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-slideNum="1" data-audio="' + aObj.subTitleAudio + '">';
        htmlStmt += "<div class='page_sub_title d-flex'>";
        htmlStmt += "<p> " + aObj.subTitleTextLeft + " </p>";
        for (var sicons = 0; sicons < aObj.subTitleIcons.length; sicons++) {
            htmlStmt += "<img src='" + aObj.subTitleIcons[sicons] + "'/>";
        }
        htmlStmt += "<p class='subTitleTextRight'>" + aObj.subTitleTextRight + " </p>";
        htmlStmt += "</div></div></div></div>";

        // ===== main content =====
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont draw_write_cont justify-content-start justify-content-sm-center" style="flex-direction: row; flex-wrap: wrap;">';

        if (aObj.remember != undefined && aObj.remember.enable) {
            htmlStmt += '<div class="remember_box">';
            htmlStmt += '<div class="remember_title">' + aObj.remember.title + '</div>';
            htmlStmt += '<div class="remember_text">' + aObj.remember.text + '</div>';
            htmlStmt += '</div>';
        }

        htmlStmt += '<div class="draw_write_wrap d-flex flex-wrap">';

        // ===== draw box (now an actual drawable canvas + tools) =====
        htmlStmt += '<div class="draw_box_holder">';
        htmlStmt += '<div class="draw_box_title">' + aObj.drawBoxLabel + '</div>';
        htmlStmt += '<div class="draw_tools d-flex justify-content-center">';
        htmlStmt += '<div class="draw_tool_btn clearCanvasBtn"><img src="../images/icons/cross_btn.png">Clear</div>';
        htmlStmt += '</div>';
        htmlStmt += '<div class="draw_box">';
        htmlStmt += '<canvas class="draw_canvas"></canvas>';
        htmlStmt += '</div>';
        htmlStmt += '</div>';

        htmlStmt += '<div class="sentence_lines">';
        jQuery.each(aObj.questions, function (qIndex, q) {
            htmlStmt += '<div class="sentence_line_row" data-qno="' + (qIndex + 1) + '">';
            htmlStmt += '<div class="audioIcon txt-audioIcon off d-flex contant" data-audio="' + q.prefixAudio + '">';
            htmlStmt += '<span class="prefix_text">' + q.prefix + '</span>';
            htmlStmt += '</div>';
            htmlStmt += '<input class="text_input_area long_line" type="text" maxlength="' + q.maxlength + '" data-type="text">';
            htmlStmt += '</div>';
        });
        htmlStmt += '</div>';

        htmlStmt += '</div></div></div></div>';
    }

    // ما في تحقق إجابات لهاد النشاط، فبنخفي زر check
    $('.checkBtn').hide();

    console.log('htmlStmt >> fillin_draw Built');
    $(".activity_area").append(htmlStmt);

    // ===== تفعيل الرسم الفعلي على الـ canvas =====
    initDrawCanvas();

    setLoadedStatus(getCurrFileOrDirectory('file'));
}

function initDrawCanvas() {
    var canvasEl = document.querySelector('.draw_canvas');
    if (!canvasEl) return;

    var holder = canvasEl.parentElement; // .draw_box
    var ctx = canvasEl.getContext('2d');

    function resizeCanvas() {
        // نحافظ على المحتوى المرسوم وقت تغيير الحجم
        var imgData = null;
        if (canvasEl.width > 0 && canvasEl.height > 0) {
            imgData = canvasEl.toDataURL();
        }
        canvasEl.width = holder.clientWidth;
        canvasEl.height = holder.clientHeight;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#000000';
        if (imgData) {
            var img = new Image();
            img.onload = function () {
                ctx.drawImage(img, 0, 0, canvasEl.width, canvasEl.height);
            };
            img.src = imgData;
        }
    }
    resizeCanvas();
    $(window).on('resize', resizeCanvas);

    var drawing = false;
    var lastX = 0, lastY = 0;

    function getPos(e) {
        var rect = canvasEl.getBoundingClientRect();
        var clientX, clientY;
        if (e.touches && e.touches.length > 0) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    }

    function startDraw(e) {
        e.preventDefault();
        drawing = true;
        var pos = getPos(e);
        lastX = pos.x;
        lastY = pos.y;
    }

    function moveDraw(e) {
        if (!drawing) return;
        e.preventDefault();
        var pos = getPos(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        lastX = pos.x;
        lastY = pos.y;
    }

    function endDraw(e) {
        drawing = false;
    }

    // mouse
    canvasEl.addEventListener('mousedown', startDraw);
    canvasEl.addEventListener('mousemove', moveDraw);
    canvasEl.addEventListener('mouseup', endDraw);
    canvasEl.addEventListener('mouseleave', endDraw);

    // touch
    canvasEl.addEventListener('touchstart', startDraw, { passive: false });
    canvasEl.addEventListener('touchmove', moveDraw, { passive: false });
    canvasEl.addEventListener('touchend', endDraw);

    // زر المسح
    $(document).off('click.clearCanvas').on('click.clearCanvas', '.clearCanvasBtn', function () {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    });
}