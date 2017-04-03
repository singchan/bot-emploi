
        if (location.protocol != 'https:' && location.href.indexOf('silex.me') === -1) {
            location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
        
        $(function() {
            function resize() {
                $('.full-height').css('min-height', $(window).height());
            }
            resize();
            $(window).on('resize', resize);
        //    $(document.body).on('silex:resize', resize);
        })
    