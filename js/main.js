document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = form.querySelector('input[type="text"]').value;
    const correo = form.querySelector('input[type="email"]').value;
    const telefono = form.querySelector('input[type="tel"]').value;
    const mensaje = form.querySelector('textarea').value;
    if (nombre == "" || correo == "" || mensaje == "" || telefono == "") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, completa todos los campos obligatorios.',
        showConfirmButton: true
      });
      return;
    }

    const texto = `Hola, soy ${nombre}. Me gustaría agendar una cita.\nCorreo: ${correo}\nTeléfono: ${telefono}\nServicios: ${mensaje}`;
    const url = `https://wa.me/5215518165651?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');

    Swal.fire({
      icon: 'success',
      title: 'Redirigiendo a WhatsApp',
      text: 'Tu mensaje se está preparando...',
      showConfirmButton: true
    });

    form.reset();
  });
});