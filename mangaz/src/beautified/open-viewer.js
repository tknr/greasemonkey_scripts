$(document).ready(function() {
    $(document).on('click', '.open-viewer', function() {
        let win = window.open($(this).data('url'), $(this).data('target') ? $(this).data('target') : '_viewer');
        win.focus();
        return false;
    });
    $(document).on('click', '.close-viewer', function() {
        try {
            if (window.opener && window.opener.location.hostname === location.hostname) {
                window.close();
                return;
            }
        } catch (e) {}
        location.href = url;
    });
    $(document).on('click', '.ga', function() {
        if ($(this).data('ec')) {
            let el = $(this).data('el') ? $(this).data('el') : $(this).text();
            if (el) {
                gtag('event', 'click', {
                    'event_category': $(this).data('ec'),
                    'event_label': el
                });
            }
        }
    });
    $(document).on('click', '.ga-text', function() {
        if ($(this).data('ec')) {
            let el = $(this).data('el') ? $(this).data('el') + $(this).text() : $(this).text();
            if (el) {
                gtag('event', 'click', {
                    'event_category': $(this).data('ec'),
                    'event_label': el
                });
            }
        }
    });
    /*
    $(document).on('click', '.premium-link', function () {
        if ($(this).data('el')) {
            gtag('event', 'click', {
                'event_category': $(this).data('category') ? $(this).data('category') : 'premium-link',
                'event_label': ($(this).data('el'))
            });
        }
    });
    */
});