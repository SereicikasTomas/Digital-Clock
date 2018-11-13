let update = () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    document.getElementById('h').innerHTML = hours > 9 ? hours: '0' + hours;
    document.getElementById('m').innerHTML = minutes > 9 ? ':' + minutes: ':0' + minutes;
    document.getElementById('s').innerHTML =  seconds > 9 ? ':' + seconds: ':0' + seconds;
};

setInterval(update, 1000);