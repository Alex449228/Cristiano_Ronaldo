class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    calcularea() {
        return this.ancho * this.alto;
    }
}

function saludar() {
    alert("Buenos Dias");
}

function area() {
    var ancho = document.getElementById("ancho").value;
    var alto = document.getElementById("alto").value;
    let rectangulo = new Rectangulo(ato, ancho);
    alert(rectangulo1.calculararea());
}