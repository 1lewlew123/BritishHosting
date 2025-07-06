
document.getElementById('orderBtn').addEventListener('click', async () => {
  const plan = document.getElementById('plan').value;
  alert(`Processing payment for plan: ${plan}`);
  fetch('/deploy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan })
  }).then(response => response.json())
    .then(data => alert('Server deployed! ID: ' + data.serverId))
    .catch(err => alert('Deployment failed'));
});
