/**
 * Transform hour and minutes to seconds
 * @param time time in hh:mm format
 * @returns seconds
 */
export function timeToSeconds(time: string): Number {
    const [hour, min] = time.split(':');
    return (Number(hour) * 36000) + (Number(min) * 60)

}