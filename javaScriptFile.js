document.addEventListener("DOMContentLoaded", function() {
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");
    var outputDiv = document.getElementById("output");
    var array = [];

    button1.onclick = function() {
        var fornavnInput = document.getElementById("fornavn").value;
        var etternavnInput = document.getElementById("etternavn").value;
        var telefonnrInput = parseInt(document.getElementById("telefonnr").value);
        var epostInput = document.getElementById("epost").value;
        var movieNameInput = document.getElementById('movieName').value;
        var antallIput = parseInt(document.getElementById('antall').value);

        array.push({
            MovieName: movieNameInput,
            Antall: antallIput,
            Fornavn: fornavnInput,
            Etternavn: etternavnInput,
            Telefonnr: telefonnrInput,
            Epost: epostInput
        });

        printArrayContents(array);
    };

    button2.onclick = function() {
        array = []; 
        outputDiv.innerHTML = ""; 
    };

    function printArrayContents(array) {
        var htmltxt = "";
        for (let i = 0; i < array.length; i++) {
            htmltxt += `
                <article>
                    <p>MovieName: ${array[i].MovieName}</p>
                    <p>AntallBilletter: ${array[i].Antall}</p>
                    <p>Fornavn: ${array[i].Fornavn}</p>
                    <p>Etternavn: ${array[i].Etternavn}</p>
                    <p>Telefonnr: ${array[i].Telefonnr}</p>
                    <p>Epost: ${array[i].Epost}</p>
                </article>`;
        }
        outputDiv.innerHTML = htmltxt;
    }
});
