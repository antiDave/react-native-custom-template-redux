import moment from 'moment';

export default {
	DateTime(date, type) {
		if (typeof date === "string") {
			date = parseInt(date)
		}

		date = moment(date).toDate()

		let format = 'DD MMMM YYYY hh:mm A';
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
	},//end of DateTime
	Date(date, type) {
		if (typeof date === "string") {
			date = parseInt(date)
		}

		date = moment(date).toDate()

		let format = 'DD-MM-YYYY';
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
	},//end of DATE
	Time(date, type) {
		if (typeof date === "string") {
			date = parseInt(date)
		}

		date = moment(date).toDate()

		let format = 'hh:mm A';
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
	},//end of TIME

	Day(date, type) {
		if (typeof date === "string") {
			date = parseInt(date)
		}

		date = moment(date).toDate()

		let format = 'dddd';
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
	},//end of Day

	CurrentTimestamp(type = 13) {
		if (parseInt(type) === 13) {
			return new Date().getTime();
		} else if (parseInt(type) === 10) {
			return Math.floor(Date.now() / 1000);
		} else {
			return new Date().getTime();
		}
	},//end of CurrentTimestamp

	Timestamp(date, type = 13) {
		if (typeof date === "string") {
			date = parseInt(date)
		}

		if (date.toString().length === 10) {
			date = moment.unix(date).format();
		}

		if (parseInt(type) === 13) {
			return new Date(date).getTime();
		} else if (parseInt(type) === 10) {
			return Math.floor(new Date(date).getTime() / 1000);
		} else {
			return new Date(date).getTime();
		}

	},//end of Timestamp

	fromNow(date, type) {
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
	},//end of FROM NOW

	inBetween = (startDate, endDate) => {
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

	},//end of INBETWEEN

}//end of EXPORT DEFAULT






