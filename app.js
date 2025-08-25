/*
const uvEl = document.getElementById('uv');
const visEl = document.getElementById('vis');
const sunriseEl = document.getElementById('sunrise');
const hourlyEl = document.getElementById('hourly');
const iconImg = document.getElementById('iconImg');
const fallbackIcon = document.getElementById('fallbackIcon');


let celsius = true;


unitEl.addEventListener('click', ()=>{
const val = parseFloat(tempEl.textContent);
if(isNaN(val)) return;
if(celsius){
const f = Math.round((val * 9/5) + 32);
tempEl.textContent = f;
feelsEl.textContent = convertFeels(feelsEl.textContent, true);
unitEl.textContent = '°F';
} else {
const c = Math.round((val - 32) * 5/9);
tempEl.textContent = c;
feelsEl.textContent = convertFeels(feelsEl.textContent, false);
unitEl.textContent = '°C';
}
celsius = !celsius;
});


function convertFeels(text, toF){
const n = parseFloat(text);
if(isNaN(n)) return text;
if(toF) return Math.round((n * 9/5) + 32) + '°';
return Math.round((n - 32) * 5/9) + '°';
}


// Search handler: uses API if key present, otherwise simulates
searchBtn.addEventListener('click', ()=>{
const val = q.value.trim();
if(!val) return;
if(API_KEY === 'YOUR_API_KEY_HERE') {
simulateSearch(val);
} else {
runLiveSearch(val);
}
});


async function runLiveSearch(city){
try{
const w = await fetchWeather(city);
if(!w) return;
updateUIFromWeather(w);
const f = await fetchForecast(city);
if(f) updateHourly(f);
}catch(err){
alert('Error fetching weather: ' + err.message);
}
}


async function fetchWeather(city){
const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
const res = await fetch(url);
if(!res.ok){
alert('City not found or API error');
return null;
}
return res.json();
}


async function fetchForecast(city){
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURICompo
