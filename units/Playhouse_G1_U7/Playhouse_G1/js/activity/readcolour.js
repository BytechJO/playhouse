//  ****************************************** //
//  ReadColour - Version no: 1
//  Free-hand colouring canvas over a background image, with colour palette + brush size, no validation
//  ****************************************** //
window.ReadColour = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('ReadColour > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.currentColor = (dataObj.palette && dataObj.palette.length > 0) ? dataObj.palette[0].hex : '#2f6fb3';
    this.currentWidth = (dataObj.brushSizes && dataObj.brushSizes.length > 0) ? dataObj.brushSizes[0].width : 8;
    this.brushOpacity = (dataObj.brushOpacity != undefined) ? dataObj.brushOpacity : 0.1;
    this.init(this.settings);
}
ReadColour.prototype = {
    init:function(ob){
        this.ob = ob;
        this.setupCanvas(ob);
        this.listen(ob);
        // no check button needed for this activity type
        if(document.getElementsByClassName('checkBtn')[0]){
            document.getElementsByClassName('checkBtn')[0].classList.add("d-none");
        }
    },
    setupCanvas:function(ob){
        var e = (ob.activity_area);
        var canvas = e.querySelector('.colour_canvas');
        var box = e.querySelector('.colour_box');

        function resizeCanvas(){
            var ratio = window.devicePixelRatio || 1;
            var w = box.clientWidth;
            var h = box.clientHeight;
            var prevData = null;
            if(canvas.width > 0 && canvas.height > 0){
                prevData = canvas.toDataURL();
            }
            canvas.width = w * ratio;
            canvas.height = h * ratio;
            canvas.style.width = w + 'px';
            canvas.style.height = h + 'px';
            var ctx = canvas.getContext('2d');
            ctx.scale(ratio, ratio);
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';
            if(prevData){
                var img = new Image();
                img.onload = function(){ ctx.drawImage(img, 0, 0, w, h); };
                img.src = prevData;
            }
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    },
listen:function(ob){
    var self = this;
    var e = (ob.activity_area);
    var canvas = this.canvas;
    var ctx = this.ctx;
    var drawing = false;
    var ratio = window.devicePixelRatio || 1;

    // baseCanvas: يحتفظ بكل الستروكات المؤكدة (المخلّصة) فقط
    var baseCanvas = document.createElement('canvas');
    var baseCtx = baseCanvas.getContext('2d');

    // tempCanvas: يرسم فيه الستروك الحالي بشفافية كاملة (بدون تراكم)
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');

    function syncSizes(){
        baseCanvas.width = canvas.width;
        baseCanvas.height = canvas.height;
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        tempCtx.scale(ratio, ratio);
        tempCtx.lineJoin = 'round';
        tempCtx.lineCap = 'round';
    }
    syncSizes();

    // إعادة رسم الكانفس الظاهر = base + الستروك الحالي (بالشفافية) فوق بعض
    function redrawVisible(){
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(baseCanvas, 0, 0); // الستروكات القديمة كما هي
        ctx.globalAlpha = self.brushOpacity;
        ctx.drawImage(tempCanvas, 0, 0); // الستروك الحالي بالشفافية
        ctx.restore();
    }

    function enableReset(){
        if(document.getElementsByClassName('resetBtn')[0]){
            document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
        }
    }

    function getPos(evt){
        var rect = canvas.getBoundingClientRect();
        var clientX = (evt.touches) ? evt.touches[0].clientX : evt.clientX;
        var clientY = (evt.touches) ? evt.touches[0].clientY : evt.clientY;
        return { x: clientX - rect.left, y: clientY - rect.top };
    }

    function startDraw(evt){
        drawing = true;
        tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        tempCtx.strokeStyle = self.currentColor;
        tempCtx.lineWidth = self.currentWidth;
        tempCtx.globalAlpha = 1;

        var pos = getPos(evt);
        tempCtx.beginPath();
        tempCtx.moveTo(pos.x, pos.y);
        // نقطة بس عشان تبين نقطة الفرشاة فوراً حتى لو ما تحركتش
        tempCtx.lineTo(pos.x + 0.01, pos.y + 0.01);
        tempCtx.stroke();

        redrawVisible(); // يبين فوراً من أول لمسة
        evt.preventDefault();
        enableReset();
    }

    function moveDraw(evt){
        if(!drawing) return;
        var pos = getPos(evt);
        tempCtx.lineTo(pos.x, pos.y);
        tempCtx.stroke();
        redrawVisible(); // يبين لحظة بلحظة أثناء التحريك
        evt.preventDefault();
    }

    function endDraw(evt){
        if(!drawing) return;
        drawing = false;

        // تأكيد (commit) الستروك الحالي على baseCanvas بالشفافية المطلوبة، مرة وحدة فقط
        baseCtx.save();
        baseCtx.globalAlpha = self.brushOpacity;
        baseCtx.drawImage(tempCanvas, 0, 0);
        baseCtx.restore();

        // تفريغ الستروك المؤقت وإعادة رسم الظاهر (يصير = base بس)
        tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        redrawVisible();
    }

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', moveDraw);
    canvas.addEventListener('mouseup', endDraw);
    canvas.addEventListener('mouseleave', endDraw);

    canvas.addEventListener('touchstart', startDraw, {passive:false});
    canvas.addEventListener('touchmove', moveDraw, {passive:false});
    canvas.addEventListener('touchend', endDraw);

    // colour palette
    var swatches = e.querySelectorAll('.paletteSwatch');
    for (var i = 0; i < swatches.length; i++) {
        swatches[i].addEventListener('click', function(){
            for (var s = 0; s < swatches.length; s++) {
                swatches[s].classList.remove('active');
            }
            this.classList.add('active');
            self.currentColor = this.dataset.hex;
        });
    }
    if(swatches.length > 0){ swatches[0].classList.add('active'); }

    // brush size
    var brushBtns = e.querySelectorAll('.brushSizeBtn');
    for (var i = 0; i < brushBtns.length; i++) {
        brushBtns[i].addEventListener('click', function(){
            for (var b = 0; b < brushBtns.length; b++) {
                brushBtns[b].classList.remove('active');
            }
            this.classList.add('active');
            self.currentWidth = parseInt(this.dataset.width);
        });
    }
    if(brushBtns.length > 0){ brushBtns[0].classList.add('active'); }

    // clear button (inside the colouring box)
    var clearBtn = e.querySelector('.clearColourBtn');
    clearBtn.addEventListener('click', function(){
        baseCtx.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
        tempCtx.clearRect(0, 0, tempCanvas.width, tempCanvas.height);
        redrawVisible();
    });
},

    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        if(this.ctx && this.canvas){
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}