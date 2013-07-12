;(function(global, document) {
    "use-strict";

    global.ZeroClipboard.setDefaults({
        moviePath: '/static/_application/scripts/lib/zeroclipboard/ZeroClipboard.swf',
        activeClass: 'active'
    });

    var clip = new ZeroClipboard(document.getElementsByClassName("PATTERNS-copy"));

    clip.on('complete', function(client, args) {
        alert('Copied to clipboard');
    });

    return clip;


})(window, document);
