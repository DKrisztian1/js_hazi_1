function Szerkesztheto(){
elsoBefogo = document.getElementById("befogo1").value;
masikBefogo = document.getElementById("befogo2").value;
atfogo = document.getElementById("atfogo").value;

elsoBefogo = parseFloat(elsoBefogo);
masikBefogo = parseFloat(masikBefogo);
atfogo = parseFloat(atfogo);

if(elsoBefogo != masikBefogo && atfogo > elsoBefogo && atfogo > masikBefogo)
    alert("A derékszögű háromszög megszerkeszthető!");
else
    alert("A derékszögű háromszög NEM szerkeszthető meg!");
}



function Randomszam(){
document.getElementById("befogo1").value = Math.round(Math.random() * 90 + 10);
document.getElementById("befogo2").value = Math.round(Math.random() * 90 + 10);
}



function Atfogo(){
elsoBefogo = document.getElementById("befogo1").value;
masikBefogo = document.getElementById("befogo2").value;

elsoBefogo = parseFloat(elsoBefogo);
masikBefogo = parseFloat(masikBefogo);

szamitottAtfogo = Math.round(Math.sqrt(Math.pow(elsoBefogo, 2) + Math.pow(masikBefogo, 2)));

document.getElementById("atfogo").value = szamitottAtfogo;
}