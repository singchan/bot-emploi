

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":740},"pages":[{"id":"page-accueil","displayName":"accueil","link":{"linkType":"LinkTypePage","href":"#!page-accueil"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"page-eligibiite","displayName":"eligibiite","link":{"linkType":"LinkTypePage","href":"#!page-eligibiite"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true}]}

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
    