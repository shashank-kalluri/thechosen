var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbw1v-UBch6M9BQgZERtsHqJfDLLq7cQ7DbLQNWMkvnykXFMi94/exec'
$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    function(e){
      console.log(e);
      alert("Interest Form Sent!");
    }
  );
})
