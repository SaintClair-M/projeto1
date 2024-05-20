var setaDireita = window.document.getElementById("setadireita")
var setaEsquerda = window.document.getElementById("setaesquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaEsquerda.style ="display:flex"
    setaDireita.style ="display:none"
}
function RolarParaEsquerda() {
    bruna.style ="display:none"
    leonardo.style ="display:flex"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"
}