(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root["betterterrain"] = factory();
    }
}(typeof self !== 'undefined' ? self : this, function() {
    var betterterrain = {};
    
    return betterterrain;
}));
