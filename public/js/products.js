document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const closeModal = document.getElementById('close-modal');
  const toggleBtns = document.querySelectorAll('.toggle-desc-btn');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const descId = btn.dataset.id;
      const name = btn.dataset.name;
      const description = document.getElementById(descId).textContent;

      modalTitle.textContent = name;
      modalDescription.textContent = description;
      
      modal.classList.remove('hidden');
      setTimeout(() => modal.classList.add('show'), 10);
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
      setTimeout(() => modal.classList.add('hidden'), 300);
    }
  });
});