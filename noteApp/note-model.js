(function(exports) {
  var EXCLAMATION_MARK_COUNT = 5

  function exclaim(string) {
    return string + "!".repeat(EXCLAMATION_MARK_COUNT);
  };

  function double(string) {
    return string + string;
  };
  exports.double = double;

  exports.exclaim = exclaim;
})(this);
