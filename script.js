var imgs = document.getElementById("img");
var ids =document.getElementById("id");
var nam = document.getElementById("name");
var nami = document.getElementById("names");
var secn = document.getElementById("sn");
var gend =document.getElementById("gen");
var din = document.getElementById("dat");
var ag =document.getElementById("umer");
var num =document.getElementById("number");
var cit = document.getElementById("city");


async function apicall() {
    var apidata = await fetch("https://randomuser.me/api/");
    var datas = await apidata.json();
    console.log(datas.results[0].location.city);


    imgs.src = datas.results[0].picture.large;
    ids.textContent = datas.results[0].id.value;    

    nam.textContent = datas.results[0].name.first;
    nami.textContent = datas.results[0].name.first;
    secn.textContent = datas.results[0].name.last;
    gend.textContent = datas.results[0].gender;
    din.textContent = datas.results[0].dob.date;
    ag.textContent = datas.results[0].dob.age;
    num.textContent = datas.results[0].cell;
    cit.textContent = datas.results[0].location.city;    





}
apicall();