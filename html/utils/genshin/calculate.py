from datetime import datetime, timedelta, time
import json

def daily() -> datetime:
    current_time = datetime.utcnow()
    hours = 9 if current_time.hour < 9 else 33
    midnight = current_time.replace(
        hour=0,
        minute=0,
        second=0,
        microsecond=0,
    )
    return midnight + timedelta(hours=hours)

#print(daily())

def weekly() -> datetime:
    current_time = datetime.utcnow()
    midnight = current_time.replace(
        hour=0,
        minute=0,
        second=0,
        microsecond=0,
    )
    return midnight + timedelta(
        hours=9,
        days=-current_time.weekday(),
        weeks=1,
    )

#print(weekly())

data = {
    'daily': round(datetime.timestamp(daily())),
    'weekly': round(datetime.timestamp(weekly())),
}

print(json.dumps(data))
