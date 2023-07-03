const botaoTexto = document.querySelectorAll(".pergunta")

botaoTexto.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemAtivo = document.querySelector(".ativo")
        
        if (itemAtivo) {
            itemAtivo.classList.remove("ativo")
        }

        if (itemAtivo != item){
        item.classList.add("ativo")
        }
    })
})
