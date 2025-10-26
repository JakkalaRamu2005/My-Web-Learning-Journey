function showTime(){


    const time = new Date();

    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let milliSec = time.getMilliseconds();

    console.log(hr);
    console.log(min);
    console.log(sec);
}

showTime();