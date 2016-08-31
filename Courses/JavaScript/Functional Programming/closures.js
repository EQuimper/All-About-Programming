var me = 'Brice Wayne';

function greetMe() {
  console.log('Hello, ' + me + '!');
}

me = 'Batman';

greetMe(); // Batman

function sendRequest() {
  var requestID = '123';
  $.ajax({
      url: '/myUrl',
      success: function(response) {
        alert('Request ' + requestID + ' returned');
      }
  });
}
