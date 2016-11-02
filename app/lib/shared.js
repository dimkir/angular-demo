$.fn.removeClassPrefix = function(prefix) {
    var lastRemoved = undefined;
    this.each(function(i, el) {
        var classes = el.className.split(" ").filter(function(c) {
            var notFound = c.lastIndexOf(prefix, 0) !== 0;
            if ( !notFound ){
                lastRemoved = c;
            }
            return notFound;
        });
        el.className = $.trim(classes.join(" "));
    });
    return lastRemoved;
};