function solve(steps, footprint, speed){
    let distance = steps * footprint;
    let speedMetersInSeconds = speed / 3.6;
    let rest = Math.floor(distance / 500);

    let time = distance / speedMetersInSeconds;
    time += rest * 60;

    let seconds = Math.round(time % 60)
    let minutes = Math.floor(time / 60)
    let hours = Math.floor(time / 3600)

    console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            
    
}

solve(4000, 0.60, 5);
solve(2564, 0.70, 5.5);