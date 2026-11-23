const toast = document.getElementById('toast');
let toastTimer;
function showToast(message){
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>toast.classList.remove('show'), 2300);
}
document.querySelectorAll('[data-service]').forEach(button=>{
  button.addEventListener('click',()=>showToast('Menu '+button.dataset.service+' dipilih (demo tampilan).'));
});
document.getElementById('bookPromo').addEventListener('click',()=>showToast('Promo ini hanya contoh tampilan, belum terhubung ke pemesanan.'));
document.getElementById('menuToggle').addEventListener('click',()=>showToast('Menu navigasi demo.'));
let slide = 1;
document.getElementById('promoCard').addEventListener('click',e=>{
  if(e.target.closest('button')) return;
  slide = slide % 18 + 1;
  document.getElementById('slideCount').textContent = slide + '/18';
});
document.querySelectorAll('.bottom-nav button').forEach(button=>{
  button.addEventListener('click',()=>{
    document.querySelectorAll('.bottom-nav button').forEach(b=>b.classList.remove('selected'));
    button.classList.add('selected');
    showToast(button.textContent.trim()+' (demo tampilan).');
  });
});
