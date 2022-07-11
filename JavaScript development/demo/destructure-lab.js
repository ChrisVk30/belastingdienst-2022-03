const course = {
	title: "ES2015 and 2016",
	description: "New features of ES2015 and 2016",
	editions: [
		{
			trainer: "Matt Smith",
			dates: {
				start: "01/01/2016",
				end: "05/01/2016",
			},
			location: {
				address1: "One Way Street",
				city: "New York",
			},
		},
		{
			dates: {
				start: "03/05/2016",
				end: "08/05/2016",
			},
			location: {
				address1: "Two Blocks Road",
				address2: "1234 AB",
				city: "Las Vegas",
			},
		},
		{
			trainer: "John Doe",
			dates: {
				start: "10/10/2016",
				end: "15/10/2016",
			},
			location: {
				address1: "One Way Street",
				city: "New York",
			},
		},
	],
};

function firstEdition() {
	let {
		title,
		editions: [
			{
				trainer = "TBD",
				dates: { start },
				location: { city },
			},
		],
	} = course;
	return {
		title,
		trainer,
		city,
		start,
	};
}
console.log(firstEdition());
let { trainer: t, city: c } = firstEdition();
console.log(t, c);

function addEdition(title, {
	trainer = 'TBD',
	startDate = new Date().toLocaleDateString(),
	duration = 5,
	city = 'TBD'
} = {}) {

	console.log(title, trainer, startDate, duration, city);
}



addEdition();
addEdition("Course 1", {
	trainer: "John",
	startDate: "1st of April 2019",
	duration: 3,
	city: "New York",
});

addEdition("Course 2", {
	startDate: "1st of April 2019",
});
addEdition("Course 3");
