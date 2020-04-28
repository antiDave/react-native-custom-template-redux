import moment from 'moment';
export const dateGenerator = (date, type) => {
	if (typeof date !== 'number') {
		date = Number(date);
	}


	let format = 'DD MMMM YYYY';
	if (type) {
		format = type;
	}

	let newDate = null;

	if (date.toString().length === 10) {
		newDate = moment.unix(date).format(format);
	}
	else {
		newDate = moment(date).format(format);
	}


	return newDate;
};

export const fromNow = (date, type) => {
	if (typeof date !== 'number') {
		date = Number(date);
	}

	let format = 'LLLL';
	if (type) {
		format = type;
	}
	let old = dateGenerator(date, format);

	let newDate = null;
	newDate = moment(old, format).fromNow();

	return newDate;
}


export const inBetween = (startDate, endDate) => {
	if (typeof startDate !== 'number') {
		startDate = Number(startDate);
	}
	if (typeof endDate !== 'number') {
		endDate = Number(endDate);
	}
	let now = new Date();
	if (startDate.toString().length === 10) {
		now = Math.floor(now.getTime() / 1000);
	}
	else {
		now = now.getTime();
	}

	if (now > startDate && now < endDate) {
		return true;
	}
	else {
		return false;
	}





}