const API_KEY = `f20fba2f7e25ffc292c4edfdd3726d36`;

const searchTemperature = () =>{
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => setTemperature(data));

}
const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}
const setTemperature = temperature =>{
    console.log(temperature);
    setInnerText('name', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('clouds', temperature.weather[0].main);
    const imageUrl = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const iconCloud = document.getElementById('icons');
    iconCloud.setAttribute('src', imageUrl);
}