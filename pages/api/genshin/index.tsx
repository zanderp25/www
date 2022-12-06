export default async function handler(req, res) {
    let now = new Date();
    let daily = new Date(now.getTime() + 9 * 60 * 60 * 1000);
    daily.setUTCHours(9);
    daily.setUTCMinutes(0);
    daily.setUTCSeconds(0);
    daily.setUTCMilliseconds(0);

    let weekly = new Date(daily.getTime());
    weekly.setUTCDate(daily.getUTCDate() + (7 - daily.getUTCDay() + 1) % 7);

    res.status(200).json({ daily: daily.getTime()/1000, weekly: weekly.getTime()/1000 });
}