(function () {
  const form = document.getElementById('form-new-product');
  if (!form) return;

  function clearError(input, errorField) {
    input.classList.remove('input-error');
    errorField.textContent = '';
  }

  function showError(input, errorField, message) {
   input.classList.add('input-error');
   errorField.textContent = message;
  }

  form.addEventListener('submit', function (e) {
    let hasErrors = false;

    const name = document.getElementById('name');
    const price = document.getElementById('price');
    const description = document.getElementById('description');
    const stock = document.getElementById('stock');

    const nameError = document.getElementById('nameError');
    const priceError = document.getElementById('priceError');
    const descriptionError = document.getElementById('descriptionError');
    const stockError = document.getElementById('stockError');

    //Limpiar errores previos
    [name, price, description, stock].forEach((input, i) => {
      const errors = [nameError, priceError, descriptionError, stockError];
      clearError(input, errors[i]);
    });
    //Validar Nombre
    const nameValue = name.value.trim();
    if (nameValue.length < 2 || nameValue.length > 100) {
      showError(name, nameError, 'Nombre inválido. Debe tener entre 2 y 100 caracteres.');
      hasErrors = true;
    }
    //Validar precio
    const priceValue = parseInt(price.value);
    if (isNaN(priceValue) || priceValue <= 0) {
      showError(price, priceError, 'Precio inválido. Debe ser un número positivo.');
      hasErrors = true;
    }
    //Validar descripción
    const descriptionValue = description.value.trim();
    if (descriptionValue.length === 0 || descriptionValue.length > 500) {
      showError(description, descriptionError, 'Descripción inválida. No debe estar vacía y debe tener máximo 500 caracteres.');
      hasErrors = true;
    }
    //Validar stock
    const stockValue = parseInt(stock.value);
    if (isNaN(stockValue) || stockValue < 0) {
      showError(stock, stockError, 'Stock inválido. Debe ser un número entero positivo.');
      hasErrors = true;
    }

    if (hasErrors) {
      e.preventDefault();
    }  
  });
})();