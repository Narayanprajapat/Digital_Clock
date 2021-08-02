const currentTime = () => {
	let date = new Date();
	let hrs, mins, secs, day, time;
	hrs = date.getHours();
	mins = date.getMinutes();
	secs = date.getSeconds();
	day = date.getDay();
	if (hrs > 12) {
		time = update(hrs - 12) + ':' + update(mins) + ':' + update(secs) + ' PM ' + ':' + displayDay(day);
	} else if (hrs == 0) {
		hrs = 12;
		time = update(hrs) + ':' + update(mins) + ':' + update(secs) + ' AM ' + ':' + displayDay(day);
	} else if (hrs < 12) {
		time = update(hrs) + ':' + update(mins) + ':' + update(secs) + ' AM ' + ':' + displayDay(day);
	} else if (hrs == 12) {
		time = update(hrs) + ':' + update(mins) + ':' + update(secs) + ' PM ' + ':' + displayDay(day);
	}

	document.getElementById('clock').innerText = `${time}`;
};

const update = (k) => {
	if (k < 10) {
		return '0' + k;
	}
	return k;
};

const displayDay = (n) => {
	switch (n) {
		case 0:
			return 'Sunday';
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
	}
};
setInterval(currentTime, 1000);
