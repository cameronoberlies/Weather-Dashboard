var searchInput = document.querySelector(".prompt");
var searchBtn = document.querySelector("#searchBtn");
var myApiKey = '1d26f92a9aee7d18fdb09e75edd93568';

let input = localStorage.getItem('input');
function returnText() {
    input = document.getElementById('userInput').value;
    localStorage.setItem('input', input);

};
console.log(input);


searchBtn.addEventListener('click', function (){
    console.log('testing');
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={1d26f92a9aee7d18fdb09e75edd93568}')
        .then (function (response){
            console.log(response);
            return response.json();
        })
.then (function (data) {
    console.log(data);
    
})

    
});