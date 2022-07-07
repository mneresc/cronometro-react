/**
 * Transform hour and minutes to seconds
 * @param time time in hh:mm format
 * @returns seconds
 */
export function timeToSeconds(time: string): number {
    const [hour, min] = time.split(':');
    return (Number(hour) * 36000) + (Number(min) * 60)

}

export function secondsToTime(sec: number): string {
    let hours   = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes

    return `0${String(hours)}:0${String(minutes)}`; // Return is HH : MM : SS

}