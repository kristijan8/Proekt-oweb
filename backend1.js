
kolkuPatiki=1;
kolkuKonduri=1;
kolkuCizmi=1;
function start()
{
    eventiNaPrviteKopcinja();
    dodavanje();
}
function dodavanje()
{
    let dodajP=document.getElementById("dodajPatiki");
    dodajP.addEventListener("click",dodajPatiki);
    let dodajK=document.getElementById("dodajKonduri");
    dodajK.addEventListener("click",dodajKonduri);   
    let dodajC=document.getElementById("dodajCizmi");
    dodajC.addEventListener("click",dodajCizmi);
}
function dodajPatiki()
{
    kolkuPatiki++;
    let novaSlika=window.prompt("Vnesi url na slika: ");
    let noviOpis=window.prompt("Vnesi opis: ");
    let pomosna1="lajk1_"+String(kolkuPatiki);
    let pomosna2="kolku1_"+String(kolkuPatiki);
    let pom3="Vasiot_komentar_za_proizvodot";

    let novDiv=document.createElement("div");
    novDiv.innerHTML="<div>"+
    "<p><img src="+novaSlika+"></p>"+
    "<p>"+noviOpis+"</p>"+
    "<p>Dopagjanja: <span id="+pomosna2+">0</span></p>"+
    "<p><button id="+pomosna1+">Mi se dopagja</button></p>"+"<hr>"+
    "<p><textarea cols="+50+" rows="+5+" placeholder="+pom3+"></textarea></p>"+"<hr>"+
    "</div>";
    let divD=document.getElementById("patiki");
    divD.appendChild(novDiv);
    let novLajk=document.getElementById(pomosna1);
    novLajk.addEventListener("click", function (e) {
        zgolemiLajk(pomosna2, e);
    });
}


function dodajKonduri()
{
    kolkuKonduri++;
    let novaSlika=window.prompt("Vnesi url na slika: ");
    let noviOpis=window.prompt("Vnesi opis: ");
    let pomosna1="lajk2_"+String(kolkuKonduri);
    let pomosna2="kolku2_"+String(kolkuKonduri);
    let pom3="Vasiot_komentar_za_proizvodot";
    
    let novDiv=document.createElement("div");
    novDiv.innerHTML="<div>"+
    "<p><img src="+novaSlika+"></p>"+
    "<p>"+noviOpis+"</p>"+
    "<p>Dopagjanja: <span id="+pomosna2+">0</span></p>"+
    "<p><button id="+pomosna1+">Mi se dopagja</button></p>"+                  
    "<p><textarea cols="+50+" rows="+5+" placeholder="+pom3+"></textarea></p>"+"<hr>"+
    "</div>";
    let divD=document.getElementById("konduri");
    divD.appendChild(novDiv);
    let novLajk=document.getElementById(pomosna1);
    novLajk.addEventListener("click", function (e) {
        zgolemiLajk(pomosna2, e);
    });
}


function dodajCizmi()
{
    kolkuCizmi++;
    let novaSlika=window.prompt("Vnesi url na slika: ");
    let noviOpis=window.prompt("Vnesi opis: ");
    let pomosna1="lajk3_"+String(kolkuKonduri);
    let pomosna2="kolku3_"+String(kolkuKonduri);
    let pom3="Vasiot_komentar_za_proizvodot";
    let novDiv=document.createElement("div");
    novDiv.innerHTML="<div>"+
    "<p><img src="+novaSlika+"></p>"+
    "<p>"+noviOpis+"</p>"+
    "<p>Dopagjanja: <span id="+pomosna2+">0</span></p>"+
    "<p><button id="+pomosna1+">Mi se dopagja</button></p>"+"<hr>"+
    "<p><textarea cols="+50+" rows="+5+" placeholder="+pom3+"></textarea></p>"+"<hr>"+
    "</div>";
    let divD=document.getElementById("cizmi");
    divD.appendChild(novDiv);
    let novLajk=document.getElementById(pomosna1);
    novLajk.addEventListener("click", function (e) {
        zgolemiLajk(pomosna2, e);
    });
}




function eventiNaPrviteKopcinja()
{
    for(let i=0;i<kolkuPatiki;i++)
    {
        let kopce=document.getElementById("lajk1_"+String(i+1));
        kopce.addEventListener("click",function(e){
            zgolemiLajk("kolku1_"+String(i+1),e);
        });
    }
    for(let i=0;i<kolkuKonduri;i++)
    {
        let kopce=document.getElementById("lajk2_"+String(i+1));
        kopce.addEventListener("click",function(e){
            zgolemiLajk("kolku2_"+String(i+1),e);
        });
    }
    for(let i=0;i<kolkuCizmi;i++)
    {
        let kopce=document.getElementById("lajk3_"+String(i+1));
        kopce.addEventListener("click",function(e){
            zgolemiLajk("kolku3_"+String(i+1),e);
        });
    }
}
function vratiPocetna()
{
    window.location.href="index.html";
}








function zgolemiLajk(pomosna2,e)
{
    e.preventDefault();    
    let pom5=document.getElementById(pomosna2);
    let pom6=pom5.textContent
    let brojka=Number(pom6)+1;
    let novLajk1=document.getElementById(pomosna2);
    novLajk1.innerHTML="<span id="+pomosna2+">"+brojka+"</span>";
}
window.addEventListener("load",start);