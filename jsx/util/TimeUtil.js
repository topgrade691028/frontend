export default class TimeUtil {
    static getFormattedTime(dateISO) {
        let a = dateISO.split(/[^0-9]/);
        let creationDate = new Date(Date.UTC(a[0], a[1] - 1, a[2], a[3], a[4], a[5]));

        const DATE = creationDate.getDate();
        const MONTH = creationDate.toLocaleString('default', {month: 'short'});
        const HOURS = creationDate.getHours();
        const MINUTES = creationDate.getMinutes();
        const SECONDS = creationDate.getSeconds();
        return `${HOURS}:${MINUTES}:${SECONDS} ${DATE} ${MONTH}`;
    }
}
