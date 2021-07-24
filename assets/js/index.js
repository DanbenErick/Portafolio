const imagenes = document.querySelectorAll('.img-card')

imagenes.forEach(imagen => {
  imagen.addEventListener('click', _ => {
    Swal.fire({
      title: imagen.dataset.title,
      width: 1050,
      imageUrl:  imagen.getAttribute('src'),
      imageWidth: 1000,
      // imageHeight: 3000,
    })
  })
})
