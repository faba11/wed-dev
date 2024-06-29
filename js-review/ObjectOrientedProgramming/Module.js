let Animal = (function(obj) {
    return {
        beauty: function(obj) {
            obj.isCute = function() {
                return true;
            }
        },
        cool: function(obj) {
            obj.itIsLikeFighting = function() {
                return false;
            }
        }
    };
})();

console.log(beauty.isCute());