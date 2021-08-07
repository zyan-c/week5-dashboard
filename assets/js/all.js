"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
$('.nav-link').click(function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
});
//# sourceMappingURL=all.js.map
