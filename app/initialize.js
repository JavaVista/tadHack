document.addEventListener('DOMContentLoaded', () => {
  // do your setup here

document.getElementById('form').addEventListener('submit', postData);

function postData(event) {
  event.preventDefault();

  let tittle = document.getElementById('firstName').value;
  let body = document.getElementById('lastName').value;

  fetch('http://ed42799e.ngrok.io/approvals/api', {
    method: 'POST',
    headers: new Headers(
      {'Content-Type': 'application/json'}
    ),
    body: JSON.stringify({ 'approval': { media_url: tittle,
      approver_number: '14074531225'
                                        }})
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('error', err));
}
console.log('Initialized app, this is my test');

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
});