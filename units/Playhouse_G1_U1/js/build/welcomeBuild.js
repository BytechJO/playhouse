function buildWelcomeContent(ob) {
    if (typeof ob !== undefined && ob != null) {
        $(".apkPanel").find(".modal-body").append(ob.apk);
        $(".readHilightsPanel").find(".modal-body").append(ob.highlights);
        $(".ccssPanel").find(".modal-body").append(ob.ccss);
        if (typeof ob.welcomecontent != undefined && ob.welcomecontent != undefined) {
            var html = '<div class="welcome-content">';
            html += '<div class="container">';
            html += '<div class="wel-scr-text">' + ob.welcomecontent + '</div>';
            html += '</div>';
            html += '</div>';
            $(html).insertBefore("footer");
        }
        setLoadedStatus('index.html');
    }
}