$(function() {
  
  $('#search').submit(function() {
    var q = encodeURIComponent(this["q"].value);
    window.location = "http://www.google.com/search?q=site:henrik.nyh.se " + q;
    return false;
  });

  if ($.cookie('editable') && $('#edit').length) {
    $('#edit a').text('Edit').before('[').after(']');
  }
  
});

// To show edit links:
//   javascript: edit(true)
// To hide edit links:
//   javascript: edit(false)
function edit(bool) {
  var value = bool ? 'true' : null;
  $.cookie('editable', value, { expires: 365*10 });
  location.reload();
}
