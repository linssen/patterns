;(function(global, document, $) {
    "use-strict";

    global.ZeroClipboard.setDefaults({
        moviePath: '/static/scripts/lib/zeroclipboard/ZeroClipboard.swf',
        activeClass: 'active'
    });

    $(".highlight").prepend('<button class="copy-clipboard icon-copy"></button>');

    var clip = new ZeroClipboard($(".copy-clipboard"));

    clip.on('complete', function(client, args) {
        var lines = args.text.match(/\n|\r/g).length;
        alert('Copied ' + lines + ' line' + (lines !== 1 ? 's' : '') + ' to clipboard');
    });

    clip.on('dataRequested', function (client, args) {
        clip.setText($(this).parent().find('code').text());
    });

    return clip;

})(window, document, jQuery);
