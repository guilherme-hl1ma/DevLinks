function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  //se light mode => img-light_mode
  if(html.classList.contains('light')) {
    img.setAttribute("src","./assets/avatar-light.png")
    img.setAttribute("alt","Foto de Mayke Brito sorrindo,usando óculos de sol e uma camisa preta e fundo azul com roxo")
  } else {
    //senao => img-dark_mode
    img.setAttribute("src","./assets/avatar-dark.png")
    img.setAttribute("alt", "Foto de Mayke Brito sorrindo,usando óculos de grau e uma camisa preta e fundo azul com roxo")
  }

}