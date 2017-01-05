
        if (location.protocol != 'https:' && location.href.indexOf('silex.me') === -1) {
            location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        }
    