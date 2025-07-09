
function toggleAdminLogin() {
  alert("Giriş başarılı!");
}

function showTab(tabName) {
  alert("Sekme: " + tabName);
}

document.addEventListener("DOMContentLoaded", () => {
  const monthlyPaymentsTotalEl = document.getElementById("monthlyPaymentsTotalEl");
  if (monthlyPaymentsTotalEl) {
    const tl = String.fromCharCode(8378);
    const monthlyTotal = 1500;
    monthlyPaymentsTotalEl.textContent = `${tl}${monthlyTotal.toLocaleString('tr-TR')}`;
  }
});
