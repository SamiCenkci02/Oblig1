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

        var errorInput1 = document.getElementById('error1');
        var errorInput2 = document.getElementById('error2');
        var errorInput3 = document.getElementById('error3');
        var errorInput4 = document.getElementById('error4');
        var errorInput5 = document.getElementById('error5');
        var errorInput6 = document.getElementById('error6');

        let isError = false;

        if (movieNameInput === "") {
            errorInput1.innerHTML = 'Må velge en film';
            isError = true;
        }else{
            errorInput1.innerHTML = '';
        }
        
        if(isNaN(antallIput)){
            errorInput2.innerHTML = 'Må skrive noe inn i antall';
            isError = true;
        }else{
            errorInput2.innerHTML = '';
        }
        
        if(fornavnInput === ""){
            errorInput3.innerHTML = 'Må skrive noe i fornavnet';
            isError = true;
        }else{
            errorInput3.innerHTML = '';
        }
        
        if(etternavnInput === ""){
            errorInput4.innerHTML = 'Må skrive noe i etternavnet';
            isError = true;
        }else{
            errorInput4.innerHTML = '';
        }
        
        if(isNaN(telefonnrInput)){
            errorInput5.innerHTML = 'Må skrive noe i telefonr';
            isError = true;
        }else{
            errorInput5.innerHTML = '';
        }
        
        if(epostInput === ""){
            errorInput6.innerHTML = 'Må skrive noe i epost';
            isError = true;            
        }else{
            errorInput6.innerHTML = '';
        }

        if (isError) {
            return;
        }        
        
        if (movieNameInput !== "" && !isNaN(antallIput) && fornavnInput !== "" && etternavnInput !== "" && !isNaN(telefonnrInput) && epostInput !== "") {
            errorInput1.innerHTML = ''; 
            errorInput2.innerHTML = ''; 
            errorInput3.innerHTML = ''; 
            errorInput4.innerHTML = ''; 
            errorInput5.innerHTML = ''; 
            errorInput6.innerHTML = ''; 
        }

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
