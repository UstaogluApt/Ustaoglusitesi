
function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.add('hidden');
    });
    const activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.classList.remove('hidden');
    }
}

function toggleAdminLogin() {
    alert("Yönetici girişi henüz etkin değil.");
}
