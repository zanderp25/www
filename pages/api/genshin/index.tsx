export default async function handler(req, res) {
    let now = new Date();
    
    // Calculate the next day at 4am UTC-5 (9am UTC)
    let daily = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    daily.setUTCHours(9);
    daily.setUTCMinutes(0);
    daily.setUTCSeconds(0);
    daily.setUTCMilliseconds(0);

    // Calculate the next Monday at 9am UTC
    let weekly = new Date(daily.getTime());
    let day = weekly.getUTCDay();
    let diff = (day <= 1) ? 1 - day : 8 - day;
    weekly.setUTCDate(weekly.getUTCDate() + diff);

    res.status(200).json({ daily: daily.getTime() / 1000, weekly: weekly.getTime() / 1000 });
}