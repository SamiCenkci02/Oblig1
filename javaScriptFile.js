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

        var specialChars = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        const mail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var phonenumber = 99999999

        let isError = false;


        if (movieNameInput === "") {
            errorInput1.innerHTML = 'Må velge en film';
            isError = true;
        }else{
            errorInput1.innerHTML = '';
        }
        
        if(isNaN(antallIput) || antallIput > 10){
            errorInput2.innerHTML = 'Må skrive noe inn i antall';
            isError = true;
        }else{
            errorInput2.innerHTML = '';
        }
        
        if(fornavnInput === "" || specialChars.test(fornavnInput)){
            errorInput3.innerHTML = 'Må skrive noe i fornavnet';
            isError = true;
        }else{
            errorInput3.innerHTML = '';
        }
        
        if(etternavnInput === "" || specialChars.test(etternavnInput)){
            errorInput4.innerHTML = 'Må skrive noe i etternavnet';
            isError = true;
        }else{
            errorInput4.innerHTML = '';
        }
        
        if(isNaN(telefonnrInput) || telefonnrInput > phonenumber){
            errorInput5.innerHTML = 'Må skrive noe i telefonr';
            isError = true;
        }else{
            errorInput5.innerHTML = '';
        }
        
        if(epostInput === "" || !mail.test(epostInput)){
            errorInput6.innerHTML = 'Må skrive noe i epost';
            isError = true;            
        }else{
            errorInput6.innerHTML = '';
        }

        if (isError) {
            return;
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
            htmltxt += 
            "<th>"+array[i].MovieName+"</th>"+
            "<th>"+array[i].Antall+"</th>"+
            "<th>"+array[i].Fornavn+"</th>"+
            "<th>"+array[i].Etternavn+"</th>"+
            "<th>"+array[i].Telefonnr+"</th>"+
            "<th>"+array[i].Epost+"</th>";       
        }
        outputDiv.innerHTML = htmltxt;
    }
});
