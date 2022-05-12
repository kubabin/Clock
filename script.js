
    function runClock() {
        const now = new Date();
        const hour = now.getHours() % 12;
        const min = now.getMinutes();
        const sec = now.getSeconds();
        const ms = now.getMilliseconds();
        
        const clock = document.querySelector('.clock');
        const hourHand = clock.querySelector('.hours');
        const minuteHand = clock.querySelector('.minutes');
        const secondHand = clock.querySelector('.seconds');
        
        const hourRotation = 30 * hour + 0.5 * min;
        const minRotation = 6 * min + 0.1 * sec;
        const secRotation = 6 * sec + 0.006 * ms;
        hourHand.style.transform = `rotate(${hourRotation}deg)`;
        minuteHand.style.transform = `rotate(${minRotation}deg)`;
        secondHand.style.transform = `rotate(${secRotation}deg)`;
        
        requestAnimationFrame(runClock)
    };
    
    runClock();
