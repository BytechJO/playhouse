// =========================================
// OpenWrite Activity - openwrite.js
// open-ended, no check/reset buttons
// =========================================
window.OpenWrite = function (obj, dataObj) {
    var ob = obj[0].getElementsByClassName('options');
    this.settings = {
        'activity_area': ob[0],
        'data_obj'     : dataObj,
        'parent_holder': obj[0]
    };
    this.init(this.settings);
};

OpenWrite.prototype = {
    init: function (ob) {
        this.ob = ob;
    },
    validate        : function () {},
    reset           : function () {},
    initialSettings : function () {
        // بدون check/reset — بس نخفيهم
        var checkBtns = document.getElementsByClassName('checkBtn');
        var resetBtns = document.getElementsByClassName('resetBtn');
        if (checkBtns.length > 0) checkBtns[0].style.display = 'none';
        if (resetBtns.length > 0) resetBtns[0].style.display = 'none';
        initialSettingsDone(1);
    }
};