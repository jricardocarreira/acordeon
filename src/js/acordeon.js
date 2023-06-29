const botaoTexto = document.getElementsByClassName("pergunta")

const textoApresentado = document.querySelectorAll(".texto")

const trianguloSeletor = document.querySelectorAll(".triangle")


botaoTexto[0].addEventListener("click", function(){

    esconderTexto();
    desselecionarTriangulo();

    textoApresentado[0].classList.add("mostrar")
    trianguloSeletor[0].classList.add("triangulo-clicado")

})

botaoTexto[1].addEventListener("click", function(){

    esconderTexto();
    desselecionarTriangulo();

    textoApresentado[1].classList.add("mostrar")
    trianguloSeletor[1].classList.add("triangulo-clicado")

})

botaoTexto[2].addEventListener("click", function(){

    esconderTexto();
    desselecionarTriangulo();

    textoApresentado[2].classList.add("mostrar")
    trianguloSeletor[2].classList.add("triangulo-clicado")

})

function esconderTexto() {
    const botaoAmostra = document.getElementsByClassName("mostrar")

    botaoAmostra[0].classList.remove("mostrar")
}

function desselecionarTriangulo() {
    const trianguloSelecionado = document.getElementsByClassName("triangulo-clicado")

    trianguloSelecionado[0].classList.remove("triangulo-clicado")
}