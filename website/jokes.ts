/* Global Variables */

/* URLs for API calls */
const url: string ='https://icanhazdadjoke.com/';
const urlPost: string = 'http://localhost:8000/addEntry';
const urlUI: string = 'http://localhost:8000/all';

/* Create a new date instance dynamically with JS */
let d = new Date();
let newDate = d.getDate()+'/'+d.getMonth()+'/'+ d.getFullYear();

/* Event listener to add function to existing HTML DOM element */
const generate = (<HTMLElement>document.getElementById('button')).addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e: Event){
    getJoke(url)
        .then (function(data){
        postData(urlPost, data={date:newDate, joke: data.joke})
        .then (function(newEntry){
            console.log(newEntry)
        updateUI(urlUI)
        })
    })
}

/* Function to GET Web API Data */
const getJoke = async(url: string)=>{
    const res = await fetch(url, {
        headers:{'Accept':'application/json'}
        })
    try{
        const data=await res.json();
        console.log(data);
        return (data);
    }catch(error){
        console.log('error', error);
    }
};

/* Function to POST data */
const postData = async(urlPost: string, data={})=>{
    console.log(data)
    const response=await fetch(urlPost, {
    method:'POST',
    credentials:'same-origin',
    headers:{'Content-Type':'application/json; charset=UTF-8'},
    body: JSON.stringify(data),
    })
    try{
        const newData = await response.json();
        console.log('newData: ', newData);
        return newData
    }catch(error){
        console.log('error',error);
    }
}

/* Function to update User Interface */
const updateUI = async(urlUI: string) => {
    const request = await fetch(urlUI);
    try{
        const newEntry = await request.json();
        (<HTMLElement>document.getElementById('date')).innerHTML = newEntry.date;
        (<HTMLElement>document.getElementById('response')).innerHTML = 'Joke of the day: ' + newEntry.joke;
        return (newEntry);
    }catch(error){
        console.log('error',error);
    }
}