document.getElementById('orderBtn').addEventListener('click', () => {
  const plan = document.getElementById('plan').value;
  alert(`Your order for the "${plan}" plan has been received! We'll contact you shortly.`);
});
