


function show() {
    let nome = document.getElementById("Nome");
    let pet = document.getElementById("Pet");
    let porte = document.getElementById("Porte");
    let semanas = document.getElementById("semana")

    if (porte.value == "Pequeno" & semanas.value == "Segunda-Sexta") {
        document.getElementById("local").innerHTML = "Petshop Vai Rex:";
        document.getElementById("valor").innerHTML = "Valor : R$15,00";
        document.getElementById("distancia").innerHTML = "Está localizado na mesma avenida do canil, a 1,7km.";
        
        
    }


    if (porte.value == "Pequeno" & semanas.value == "Sabados-Feriados") {
        document.getElementById("local").innerHTML = "Petshop Vai Rex:";
        document.getElementById("valor").innerHTML = "Valor : R$20,00";
        document.getElementById("distancia").innerHTML = "Está localizado na mesma avenida do canil, a 1,7km."
    }

    if (porte.value == "Grande" & semanas.value == "Segunda-Sexta") {
        document.getElementById("local").innerHTML = "Meu Canino Feliz";
        document.getElementById("valor").innerHTML = "Valor R$40,00";
        document.getElementById("distancia").innerHTML = "O PetShop Estar 2Km da sua localização atual."
    }

    if (porte.value == "Grande" & semanas.value == "Sabados-Feriados") {
        document.getElementById("local").innerHTML = "Petshop ChowChawgas:";
        document.getElementById("valor").innerHTML = "Valor : R$45,00";
        document.getElementById("distancia").innerHTML = "Está localizado em 800m da sua posição."
    }

}
