var $form = $("form#appointment-form"),
  url =
    "https://script.google.com/macros/s/AKfycbxIM8Jo4TIBQMtR-QKB3XHWCyTOeDf5ynor0jOi-rCm94VVHXoh/exec";

$("#submit-form").on("click", function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  })
    .success
    // do something
    ();
});
