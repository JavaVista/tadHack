document.addEventListener('DOMContentLoaded', () => {
  // do your setup here

  document.getElementById('form').addEventListener('submit', postData);

  function postData(event) {
    //event.preventDefault();
    let body = document.getElementById('form').value;
    fetch('http://ed42799e.ngrok.io/approvals/api', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        approval: { media_url: body,
           approver_number: '14074531225'
           }
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log('error', err));
  }

  const previewFile = function(e) {
    let output = document.getElementById('output');
    output.src = URL.createObjectURL(e.target.files[0]);
  };
});
