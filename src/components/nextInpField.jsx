function NextInpField() {
  var elts = document.getElementsByClassName('inp');
  Array.from(elts).forEach(function (elt) {
    elt.addEventListener('keydown', function (e) {
      if (
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 65 &&
          e.keyCode <= 90 &&
          elt.value.length == 1 &&
          elt.nextElementSibling)
      ) {
        elt.nextElementSibling.focus();
      } else if (
        e.keyCode === 8 &&
        elt.previousElementSibling &&
        elt.value.length == 0
      ) {
        elt.previousElementSibling.focus();
      }
    });
  });
}

export default NextInpField;
