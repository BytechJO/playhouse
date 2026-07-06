//  ****************************************** //
//  SentenceBuild - Version no: 1
//  Tick the correct sentence / write the correction if wrong
//  ****************************************** //
window.SentenceBuild = function(obj, dataObj){
    ob = obj[0].getElementsByClassName("options");
    console.log('SentenceBuild > ', $('.activity_area'));
    this.settings = {
        'activity_area' : ob[0],
        'has_audio'     : (obj[0].dataset.audio!=undefined && obj[0].dataset.audio!=null)? obj[0].dataset.audio:'no',
        'data_obj'      : dataObj,
        'parent_holder' : obj[0]
    }
    this.init(this.settings);
}
SentenceBuild.prototype = {
    init:function(ob){
        this.ob = ob;
        this.listen(ob);
    },
    listen:function(ob){
        var self = this;
        var e = (ob.activity_area);

        // tick / cross buttons
        var markBtns = e.querySelectorAll('.tickBtn, .crossBtn');
        for (var i = 0; i < markBtns.length; i++) {
            markBtns[i].addEventListener("click", function(){
                var queEl = this.closest('.que');
                if(queEl.classList.contains('disabled')) return;

                var mark = this.dataset.mark;
                var siblingBtns = queEl.querySelectorAll('.tickBtn, .crossBtn');
                for (var s = 0; s < siblingBtns.length; s++) {
                    siblingBtns[s].classList.remove('active');
                }
                this.classList.add('active');
                queEl.dataset.userMark = mark;

                var correctionRow = queEl.querySelector('.correction_row');
                if(mark == 'wrong'){
                    correctionRow.classList.remove('d-none');
                }else{
                    correctionRow.classList.add('d-none');
                    var inp = correctionRow.querySelector('input');
                    inp.value = '';
                }

                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }

        // correction inputs
        var inputs = e.querySelectorAll('.correction_input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("input", function(){
                $(this).css('color', 'black');
                document.getElementsByClassName('checkBtn')[0].classList.remove("disabled");
                document.getElementsByClassName('resetBtn')[0].classList.remove("disabled");
            });
        }
    },
    validate:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');
        var numOfQuestions = elsQue.length;
        var allCorrect = false;
        var resultArr = [];

        for (var i = 0; i < elsQue.length; i++) {
            resultArr[i] = 0;
            var fIndx = parseInt(elsQue[i].dataset.qno);
            var fDataObj = ((ob.data_obj).questions[fIndx-1]);

            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            var userMark = elsQue[i].dataset.userMark;
            var isCorrectSentence = (elsQue[i].dataset.correct == 'true');
            var isRight = false;

            if(userMark == undefined){
                isRight = false;
            }else if(isCorrectSentence){
                // sentence was already correct -> user must have picked "correct"
                isRight = (userMark == 'correct');
            }else{
                // sentence was wrong -> user must have picked "wrong" AND typed the exact correction
                if(userMark == 'wrong'){
                    var _case = (fDataObj.strictcase != undefined && fDataObj.strictcase!=null )? (fDataObj.strictcase).toLowerCase():'no';
                    var inputEl = elsQue[i].querySelector('.correction_input');
                    var _uAns = inputEl.value;
                    var _cAns = fDataObj.correctSentence;

                    if(_case != 'yes'){
                        _uAns = _uAns.toLowerCase();
                        _cAns = _cAns.toLowerCase();
                    }
                    _uAns = _uAns.trim().replace(/\s+/g, ' ').replace(/\.$/, '');
                    _cAns = _cAns.trim().replace(/\s+/g, ' ').replace(/\.$/, '');

                    isRight = (_uAns == _cAns && _uAns.length > 0);
                }else{
                    isRight = false;
                }
            }

            if(isRight){
                resultArr[i] = 1;
                (elsQue[i].querySelector('.tick')).style.display = 'block';
            }else{
                resultArr[i] = 0;
                (elsQue[i].querySelector('.cross')).style.display = 'block';
            }
        }

        console.log(resultArr, numOfQuestions);
        allCorrect = (((resultArr.join('').split('0'))[0]).length == numOfQuestions);
        showFeedback(true,allCorrect);

        if(allCorrect){
            document.getElementsByClassName('resetBtn')[0].classList.add("disabled");
        }
    },
    reset:function(){
        var ob = this.ob;
        var e = (ob.activity_area);
        var elsQue = e.querySelectorAll('.que');

        for (var i = 0; i < elsQue.length; i++) {
            (elsQue[i].querySelector('.tick')).style.display = 'none';
            (elsQue[i].querySelector('.cross')).style.display = 'none';

            delete elsQue[i].dataset.userMark;
            var markBtns = elsQue[i].querySelectorAll('.tickBtn, .crossBtn');
            for (var m = 0; m < markBtns.length; m++) {
                markBtns[m].classList.remove('active');
            }

            var correctionRow = elsQue[i].querySelector('.correction_row');
            correctionRow.classList.add('d-none');
            var inputEl = correctionRow.querySelector('input');
            inputEl.value = '';
            inputEl.style.color = 'black';
        }
        document.getElementsByClassName('checkBtn')[0].classList.add("disabled");
    },
    initialSettings:function(){
        this.reset();
        initialSettingsDone(1);
    }
}