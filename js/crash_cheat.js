var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/joke.ico");
        document.title = '看这里~看这里~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/favicon.ico");

        document.title = ' ( ๑•̀ㅂ•́) ✧被发现了～';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 3000);
    }
});