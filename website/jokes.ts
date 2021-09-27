// Exercici 1
/* Global Variables */

/* URLs for API calls */
const urlAPI: string ='https://icanhazdadjoke.com/';
const urlPost: string = 'http://localhost:8000/addEntry';
const urlUI: string = 'http://localhost:8000/all';

/* Create a new date instance dynamically with JS */
let d = new Date();
let newDate = d.getDate()+'/'+d.getMonth()+'/'+ d.getFullYear();

/* Event listener to add function to existing HTML DOM element */
const generate = (<HTMLElement>document.getElementById('button')).addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e: Event){
    getJoke(urlAPI)
        .then (function(data){
        postData(urlPost, data={date:newDate, joke: data.joke})
        .then (function(){
        updateUI(urlUI)
        .then (function(){
        report(urlUI)
        })})
    })
}

/* Function to GET Web API Data */
const getJoke = async(urlAPI: string)=>{
    const res = await fetch(urlAPI, {
        headers:{'Accept':'application/json'}
        })
    try{
        const data=await res.json();
        console.log(data);
        return data;
    }catch(error){
        console.log('error', error);
    }
};

/* Function to POST data */
const postData = async(urlPost: string, data={})=>{
    console.log(data);
    const response=await fetch(urlPost, {
    method:'POST',
    credentials:'same-origin',
    headers:{'Content-Type':'application/json; charset=UTF-8'},
    body: JSON.stringify(data),
    })
    try{
        const newData = await response.json();
        console.log('newData: ', newData);
        return newData;
    }catch(error){
        console.log('error',error);
    }
}

// Exercici 2
/* Function to update User Interface */
const updateUI = async(urlUI: string) => {
    const request = await fetch(urlUI);
    try{
        const newEntry = await request.json();
        (<HTMLElement>document.getElementById('date')).innerHTML = newEntry.date;
        (<HTMLElement>document.getElementById('response')).innerHTML = 'Joke of the day: ' + newEntry.joke;
        (<HTMLElement>document.getElementById('score-row')).style.display = 'block';
        return newEntry;
    }catch(error){
        console.log('error',error);
    }
}

// Exercici 3
/* Define Interface */
interface IreportAcudits {
    joke: string;
    score: number;
    date: any;
}

/* Declare empty array to fill with reports */
const reportJokes: IreportAcudits[] = [];

/* Function to get score from rating buttons */
function scoreValue(id: number): number {
    let resultRating: number = id;
    console.log(resultRating);
    return resultRating;
}

/* Define function to create report entries */
const report = async(urlUI: string) => {
    const request = await fetch(urlUI);
    try{
        const newEntry = await request.json();
        const object: IreportAcudits = {
            joke: newEntry.joke,
            score: scoreValue(1),
            date: newDate
        }
        reportJokes.push(object);
        console.log(reportJokes);
        return object;
    }catch(error){
        console.log('error',error);
    }
}