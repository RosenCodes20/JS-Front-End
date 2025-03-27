document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertDays);
    hoursBtn.addEventListener('click', convertHours);
    minutesBtn.addEventListener('click', convertMinutes);
    secondsBtn.addEventListener('click', convertSeconds);

    
    function convertDays(event) {
        event.preventDefault();

        let days = event.target.parentElement.children[1].value;
        let hours = days * 24;
        let minutes = days * 1440;

        let seconds = days * 86400;

        let inputHours = hoursBtn.parentElement.children[1];
        let inputMinutes = minutesBtn.parentElement.children[1];
        let inputSeconds = secondsBtn.parentElement.children[1];

        inputHours.value = Number(hours).toFixed(2);
        inputMinutes.value = Number(minutes).toFixed(2);
        inputSeconds.value = Number(seconds).toFixed(2);
    }

    function convertHours(event) {
        event.preventDefault();

        let hours = event.target.parentElement.children[1].value;

        let days = hours * 0.0416666667;
        let minutes = hours * 60;
        let seconds = hours * 3600;

        let inputDays = daysBtn.parentElement.children[1];
        let inputMinutes = minutesBtn.parentElement.children[1];
        let inputSeconds = secondsBtn.parentElement.children[1];

        inputDays.value = Number(days).toFixed(2);
        inputMinutes.value = Number(minutes).toFixed(2);
        inputSeconds.value = Number(seconds).toFixed(2);
    }

    function convertMinutes(event) {
        event.preventDefault();

        let minutes = event.target.parentElement.children[1].value;

        let days = minutes * 0.000694444444;
        let hours = minutes * 0.0166666667;
        let seconds = minutes * 60;

        let inputDays = daysBtn.parentElement.children[1];
        let inputHours = hoursBtn.parentElement.children[1];
        let inputSeconds = secondsBtn.parentElement.children[1];

        inputDays.value = Number(days).toFixed(2);
        inputHours.value = Number(hours).toFixed(2);
        inputSeconds.value = Number(seconds).toFixed(2);
    }

    function convertSeconds(event) {
        event.preventDefault();

        let seconds = event.target.parentElement.children[1].value;
        
        let days = seconds * 1.15740741 * 0.00001;
        let hours = seconds * 0.000277777778;
        let minutes = seconds * 0.0166666667;

        let inputDays = daysBtn.parentElement.children[1];
        let inputHours = hoursBtn.parentElement.children[1];
        let inputMinutes = minutesBtn.parentElement.children[1];

        inputDays.value = Number(days).toFixed(2);
        inputHours.value = Number(hours).toFixed(2);
        inputMinutes.value = Number(minutes).toFixed(2);
    }
}