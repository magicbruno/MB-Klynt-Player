/**
 * Copyright 2014, Honkytonk Films
 * Licensed under GNU GPL
 * http://www.klynt.net
 *
 * This file contains the implementation of the hashtag module which allows deep linking in the player by updating the
 * value of the url hash to the current sequence alias.
 * */

(function (klynt) {

    

 

    var ignorePendingHashChange = false;
    var currentSequenceIdOrHash = null;

    var _canAccessTopLocation = null;

    klynt.getModule('hashtag')
        .expose(init, setCurrentSequence, toSequenceId);

    function init() {
        //initPermissions();
        initEventListener();
    }

    // canAccessTopLocation now depends from binding of data-location-hash 
    // attribute ('self' or 'top') of player div

    function canAccessTopLocation() {
        if (_canAccessTopLocation === null)
            _canAccessTopLocation = $('#player').attr('data-location-hash') !== 'self';

        if (!_canAccessTopLocation)
            return false;

        try {
            _canAccessTopLocation = window.top !== window && !!window.top.location.href;
        } catch (e) {
            _canAccessTopLocation = false;
        }
        return _canAccessTopLocation;
    }

    //function initPermissions() {

    //    try {
    //        canAccessTopLocation = window.top != window && !! window.top.location.href;
    //    } catch (e) {
    //        canAccessTopLocation = false;
    //    }
    //}

    // hashchange listening is  bound on doc ready
    function initEventListener() {
        $(function () {
            if (window.addEventListener) {
                if (canAccessTopLocation()) {
                    top.window.addEventListener('hashchange', onHashChange);
                } else {
                    window.addEventListener('hashchange', onHashChange);
                }
            }
        });
    }

    function setCurrentSequence(value) {
        currentSequenceIdOrHash = value;
        setSequenceAliasAsHashtag();
    }

    function toSequenceId() {
        var hashtag = getHashtag();
        return getSequenceIdByAlias(hashtag) || hashtag;
    }

    function onHashChange(event) {
        if (ignorePendingHashChange) {
            ignorePendingHashChange = false;
        } else {
            klynt.player.open(getSequenceIdByAlias(getHashtag()));
        }
    }

    function getHashtag() {
        var hash = canAccessTopLocation() ? window.top.location.hash : window.location.hash || "";
        var hashtag = hash.split('?');
        return hashtag[0].split('#')[1];
    }

    function getSequenceIdByAlias(alias) {
        return klynt.data.aliases.aliasToId[alias];
    }

    function getAliasBySequenceId(sequenceId) {
        return klynt.data.aliases.idToAlias[sequenceId];
    }

    function setSequenceAliasAsHashtag() {
        var displayedHashtag = getAliasBySequenceId(currentSequenceIdOrHash) || currentSequenceIdOrHash;
        var currentHashtag = getHashtag();

        if (displayedHashtag !== currentHashtag) {
            ignorePendingHashChange = true;
            location.hash = "#" + displayedHashtag;

            if (canAccessTopLocation()) {
                window.top.location.hash = window.location.hash;
            }
        }
    }
})(window.klynt);