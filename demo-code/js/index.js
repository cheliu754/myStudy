var module_a = (function () {
  var a = 1;
  return {
    a,
  };
})();

var module_b = (function () {
  var a = 1;
  function add() {
    a = a + 1;
  }

  return {
    add,
  };
})();
