fetch('/api/order', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: customerName,
    email: customerEmail,
    slots: selectedSlots,
    paymentId: paymentDetails.id,
  }),
})
.then(res => res.json())
.then(data => {
  if(data.error) {
    alert('Server deployment failed: ' + data.error);
  } else {
    alert('Server deployed successfully! Details sent to your email.');
  }
})
.catch(() => alert('Failed to connect to backend for deployment.'));
