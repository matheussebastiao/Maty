function modoEscuro(){
    const html= document.documentElement
   html.classList.toggle('light')

    const img= document.querySelector("#foto")

    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar.png")

    } else {
      img.setAttribute("src", "./assets/avatar-light.png")
    }    
}
