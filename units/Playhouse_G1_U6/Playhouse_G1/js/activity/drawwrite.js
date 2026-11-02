// =========================================
// DrawWrite Activity - drawwrite.js
// canvas رسم + bubble كتابة بدون check
// =========================================
window.DrawWrite = function (obj, dataObj) {
    var ob = obj[0].getElementsByClassName('options');
    this.settings = {
        'activity_area': ob[0],
        'data_obj'     : dataObj,
        'parent_holder': obj[0]
    };
    this.init(this.settings);
};

DrawWrite.prototype = {
    init: function (ob) {
        this.ob = ob;
    },
    validate        : function () {},
    reset           : function () {
        // clear canvas
        var canvas = document.getElementById('dw_canvas');
        if (canvas) {
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        // clear input
        $('.dw_input').val('');
    },
    initialSettings : function () {
        // إخفاء check/reset
        var checkBtns = document.getElementsByClassName('checkBtn');
        var resetBtns = document.getElementsByClassName('resetBtn');
        if (checkBtns.length > 0) checkBtns[0].style.display = 'none';
        if (resetBtns.length > 0) resetBtns[0].style.display = 'none';
        initialSettingsDone(1);
    }
};