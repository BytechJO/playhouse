function buildDrawWriteBody(aObj) {
    var htmlStmt = '';
    if (aObj != undefined && aObj != null) {

        // --- back/next ---
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_left subFooterNav backNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/back_btn.png" /></a></div>';
        htmlStmt += '<div class="sub_footer_icon sub_footer_icon_right subFooterNav nextNav mx-1">';
        htmlStmt += '<a href=""><img src="../images/icons/next_btn.png" /></a></div>';

        // --- header ---
        htmlStmt += '<div class="act_head_group justify-content-center">';
            htmlStmt += '<div class="audioIcon off contant" data-audio="' + aObj.mainTitleAudio + '">';
                htmlStmt += '<div class="q-type-img-container">';
                htmlStmt += '<img class="mainTitle" src="' + aObj.mainTitle + '">';
              
                htmlStmt += '</div>';
            htmlStmt += '</div>';
            htmlStmt += '<div class="activityHeading">';
                htmlStmt += '<div class="audioIcon off contant audioQuestionTitle" data-audio="' + aObj.subTitleAudio + '">';
                htmlStmt += '<div class="page_sub_title d-flex">';
                htmlStmt += '<p>' + aObj.subTitleTextLeft + '</p>';
                for (var si = 0; si < aObj.subTitleIcons.length; si++) {
                    htmlStmt += '<img src="' + aObj.subTitleIcons[si] + '"/>';
                }
                htmlStmt += '<p>' + aObj.subTitleTextRight + '</p>';
                htmlStmt += '</div></div>';
            htmlStmt += '</div>';
        htmlStmt += '</div>';

        // --- main area ---
        htmlStmt += '<div class="options cont_ht_sf mx-auto">';
        htmlStmt += '<div class="all_cont justify-content-center">';
        htmlStmt += '<div class="dw_wrap">';

            // الجزء الأيسر: canvas + bubble
            htmlStmt += '<div class="dw_left">';

                // مربع الرسم
                htmlStmt += '<div class="dw_draw_box">';
                    htmlStmt += '<div class="dw_draw_label">' + (aObj.drawLabel || 'Draw') + '</div>';
                    htmlStmt += '<canvas class="dw_canvas" id="dw_canvas"></canvas>';
                    // أزرار الرسم
                    htmlStmt += '<div class="dw_canvas_ctrls">';
                        htmlStmt += '<button class="dw_btn dw_clear_btn" title="Clear">✕</button>';
                        htmlStmt += '<button class="dw_btn dw_undo_btn" title="Undo">↩</button>';
                    htmlStmt += '</div>';
                htmlStmt += '</div>';

              

            htmlStmt += '</div>'; // end dw_left
  // speech bubble للكتابة
                htmlStmt += '<div class="dw_bubble_wrap">';
                    htmlStmt += '<div class="dw_bubble">';
                        htmlStmt += '<input class="dw_input" type="text" ';
                        htmlStmt += 'placeholder="' + (aObj.bubblePlaceholder || '') + '" ';
                        htmlStmt += 'autocomplete="off" />';
                    htmlStmt += '</div>';
                htmlStmt += '</div>';
            // الشخصية على اليمين
            if (aObj.characterImage && aObj.characterImage != '') {
                htmlStmt += '<div class="dw_character">';
                htmlStmt += '<img src="' + aObj.characterImage + '">';
                htmlStmt += '</div>';
            }

        htmlStmt += '</div></div></div>';
    }

    $('.activity_area').append(htmlStmt);

    // تشغيل الـ canvas بعد ما يتبنى الـ DOM
    setTimeout(function () {
        initDrawWriteCanvas();
    }, 100);

    setLoadedStatus(getCurrFileOrDirectory('file'));
}

function initDrawWriteCanvas() {
    var canvas  = document.getElementById('dw_canvas');
    if (!canvas) return;

    var ctx     = canvas.getContext('2d');
    var drawing = false;
    var history = []; // للـ undo

    // حجم الـ canvas يساوي حجم الـ container
    function resizeCanvas() {
        var box = canvas.parentElement;
        var w   = box.clientWidth  - 8;  // padding
        var h   = box.clientHeight - 50; // label + padding
        if (w < 10 || h < 10) return;
        // حفظ الرسمة قبل الـ resize
        var imgData = canvas.toDataURL();
        canvas.width  = w;
        canvas.height = h;
        ctx.lineCap   = 'round';
        ctx.lineJoin  = 'round';
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#1a3a5c';
        // إرجاع الرسمة
        var img = new Image();
        img.onload = function () { ctx.drawImage(img, 0, 0); };
        img.src = imgData;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    function getPos(e) {
        var rect = canvas.getBoundingClientRect();
        if (e.touches) {
            return {
                x: e.touches[0].clientX - rect.left,
                y: e.touches[0].clientY - rect.top
            };
        }
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }

    function saveState() {
        history.push(canvas.toDataURL());
        if (history.length > 20) history.shift();
    }

    // Mouse events
    canvas.addEventListener('mousedown', function (e) {
        saveState();
        drawing = true;
        var p = getPos(e);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
    });
    canvas.addEventListener('mousemove', function (e) {
        if (!drawing) return;
        var p = getPos(e);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
    });
    canvas.addEventListener('mouseup',   function () { drawing = false; });
    canvas.addEventListener('mouseleave',function () { drawing = false; });

    // Touch events
    canvas.addEventListener('touchstart', function (e) {
        e.preventDefault();
        saveState();
        drawing = true;
        var p = getPos(e);
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
    }, { passive: false });
    canvas.addEventListener('touchmove', function (e) {
        e.preventDefault();
        if (!drawing) return;
        var p = getPos(e);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
    }, { passive: false });
    canvas.addEventListener('touchend', function () { drawing = false; });

    // Clear button
    var clearBtn = document.querySelector('.dw_clear_btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function () {
            saveState();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }

    // Undo button
    var undoBtn = document.querySelector('.dw_undo_btn');
    if (undoBtn) {
        undoBtn.addEventListener('click', function () {
            if (history.length === 0) return;
            var prev = history.pop();
            var img  = new Image();
            img.onload = function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0);
            };
            img.src = prev;
        });
    }
}