from datetime import datetime, timedelta, time
import json, sys, pytz

debug = "-d" in sys.argv

current_time = datetime.now(pytz.utc)
if debug and len(sys.argv)==4:
    strdate = ' '.join(sys.argv[2:4])
    current_time = datetime.strptime(strdate, "%Y-%m-%d %H:%M:%S")
    current_time = current_time.replace(tzinfo=pytz.utc)

def daily() -> datetime:
    hours = 9 if current_time.hour < 9 else 33
    midnight = current_time.replace(
        hour=0,
        minute=0,
        second=0,
        microsecond=0,
    )
    return midnight + timedelta(hours=hours)

if debug: print(daily())

def weekly() -> datetime:
    midnight = current_time.replace(
        hour=0,
        minute=0,
        second=0,
        microsecond=0,
    )
    if current_time.hour < 9 and current_time.weekday() == 0:
        return midnight + timedelta(hours=9)
    else:
        return midnight + timedelta(
            hours=9,
            days=-current_time.weekday(),
            weeks=1,
        )

if debug: print(weekly())

data = {
    'daily': round(datetime.timestamp(daily())),
    'weekly': round(datetime.timestamp(weekly())),
}

print(json.dumps(data))
