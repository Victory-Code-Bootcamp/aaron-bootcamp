function calculateEndTime(startTime, duration) {
    let [startHour, startMinute] = startTime.split(':').map(Number);
    let durationHours = Math.floor(duration);
    let durationMinutes = Math.round((duration - durationHours) * 60);

    let endHour = startHour + durationHours;
    let endMinute = startMinute + durationMinutes;

    if (endMinute >= 60) {
        endHour += Math.floor(endMinute / 60);
        endMinute = endMinute % 60;
    }

    if (endHour >= 24) {
        endHour = endHour % 24;
    }

    let endHourStr = endHour.toString().padStart(2, '0');
    let endMinuteStr = endMinute.toString().padStart(2, '0');

    return `${endHourStr}:${endMinuteStr}`;
}

const startTime = "19:00";
const duration = 2.5;

const endTime = calculateEndTime(startTime, duration);
console.log(`The movie will end at ${endTime}`);
