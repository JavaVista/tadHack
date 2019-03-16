document.addEventListener('DOMContentLoaded', () => {
  // do your setup here

document.getElementById('form').addEventListener('submit', postData);

function postData(event) {
  event.preventDefault();

  let tittle = document.getElementById('firstName').value;
  let body = document.getElementById('lastName').value;

  fetch('https://i-approve-tadhack.herokuapp.com/approvals/api', {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify({ tittle: tittle, body: body })
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('error', err));
}
console.log('Initialized app, testing');
});