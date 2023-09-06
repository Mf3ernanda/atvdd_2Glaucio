function calcularMedia() {
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, insira valores válidos para as notas.');
        return;
    }

    var media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

    alert('A média do aluno é: ' + media.toFixed(2));
}