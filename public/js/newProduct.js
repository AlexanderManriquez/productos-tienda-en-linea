(function () {
  const form = document.getElementById('form-new-product');

  function showError(el, message) {
    el.focus();
    alert(message);
  }

  if (!form) return;

  form.addEventListener('submit', function (e) {
    //validación de nombre
    const name = document.getElementById('name').value.trim();
    if (name.length < 2 || name.length > 100) {
      e.preventDefault();
      return showError(document.getElementById('name'), 'El nombre del producto debe tener entre 2 y 100 caracteres.');
    }
    //validación de precio
    const price = parseFloat(document.getElementById('price').value);
    if (isNaN(price)  || price < 0) {
      e.preventDefault();
      return showError(document.getElementById('price'), 'El precio debe ser un número entero positivo.');
    }
    //validación de stock
    const stock = parseInt(document.getElementById('stock').value, 10);
    if (isNaN(stock) || stock < 0) {
      e.preventDefault();
      return showError(document.getElementById('stock'), 'El stock debe ser un número entero positivo.');
    }
  });
})();