// Exercici 1
/* Global Variables */

/* URLs for joke API calls */
const urlAPI: string = 'https://icanhazdadjoke.com/';
const urlPost: string = 'http://localhost:8000/addEntry';
const urlUI: string = 'http://localhost:8000/all';
/* URLs for weather API calls */
const baseURL: string = 'http://api.openweathermap.org/data/2.5/weather?q=';
const urlPostWeather: string = 'http://localhost:8000/addWeather';
const urlUIWeather: string = 'http://localhost:8000/weather';
/* Personal API Key for OpenWeatherMap API */
const apiKey: string = '&appid=1111cbdcf8fc8f48d8f36f640aab97dc&units=metric';

/* Create a new date instance dynamically with JS */
let d = new Date();
let newDate: string = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();

/* Event listener to add function to existing HTML DOM element */
const generate = (<HTMLElement>document.getElementById('button')).addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e: Event) {
    getJoke(urlAPI)
        .then(function (data) {
            postData(urlPost, data = { date: newDate, joke: data.joke })
                .then(function () {
                    updateUI()
                })
        })
}

/* Function to GET jokes API Data */
const getJoke = async (urlAPI: string) => {
    const res = await fetch(urlAPI, {
        headers: { 'Accept': 'application/json' }
    })
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

/* Function to POST jokes data */
const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(data),
    })
    try {
        const newData = await response.json();
        console.log('newData: ', newData);
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}

// Exercici 2
/* Function to update User Interface with jokes */
const updateUI = async () => {
    const request = await fetch(urlUI);
    try {
        const newEntry = await request.json();
        (<HTMLElement>document.getElementById('date')).innerHTML = newEntry.date;
        (<HTMLElement>document.getElementById('response')).innerHTML = 'Joke of the day: ' + newEntry.joke;
        (<HTMLElement>document.getElementById('score-row')).style.display = 'block';
        return newEntry;
    } catch (error) {
        console.log('error', error);
    }
}

// Exercici 3
/* Declare variable for score rating */
let resultRating: number;

/* Function to get score from rating buttons */
function scoreValue(id: number): number {
    resultRating = id;
    console.log(resultRating);
    report(urlUI);
    return resultRating
}

/* Define Interface for reportJokes */
interface IreportAcudits {
    joke: string;
    score: number;
    date: string;
}

/* Declare empty array to fill in with reports */
const reportJokes: IreportAcudits[] = [];

/* Define function to create report entries */
const report = async (urlUI: string) => {
    const request = await fetch(urlUI);
    try {
        const newEntry = await request.json();
        const object: IreportAcudits = {
            joke: newEntry.joke,
            score: resultRating,
            date: newDate
        }
        reportJokes.push(object);
        console.log(reportJokes);
        return object;
    } catch (error) {
        console.log('error', error);
    }
}

// Nivell 2: Exercici 4
/* Event listener to get weather when loading DOM */
const generateWeather = window.addEventListener('DOMContentLoaded', showForecast);

/* Function called by event listener */
function showForecast(e: Event) {
    const city: string = 'Barcelona';
    const url: string = baseURL + city + apiKey;
    getWeather(url)
        .then(function (data) {
            console.log(data)
            postWeather(urlPostWeather, data = { location: 'Barcelona', temp: data.main.temp })
                .then(function (newWeather) {
                    updateWeather()
                })
        })
}

/* Function to GET weather API Data */
const getWeather = async (url: string) => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
        return (data);
    } catch (error) {
        console.log('error', error);
    }
};

/* Function to POST weather data */
const postWeather = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify(data),
    })
    try {
        const newWeather = await response.json();
        console.log(newWeather);
        return newWeather;
    } catch (error) {
        console.log('error', error);
    }
}

/* Function to update User Interface with weather data */
const updateWeather = async () => {
    const request = await fetch(urlUIWeather);
    try {
        const newEntryW = await request.json();
        (<HTMLElement>document.getElementById('location')).innerHTML = 'Location: ' + newEntryW.location;
        (<HTMLElement>document.getElementById('temp')).innerHTML = 'Temperature in ºC: ' + newEntryW.temp;
        return newEntryW;
    } catch (error) {
        console.log('error', error);
    }
}