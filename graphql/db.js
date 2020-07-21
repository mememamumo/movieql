export const people = [
	{
		id: "0",
		name: "yuna",
		age: 24,
		gender: "female"
	},
	{
		id: "1",
		name: "Gray",
		age: 29,
		gender: "male"
	},
	{
		id: "2",
		name: "Dada",
		age: 35,
		gender: "male"
	},
	{
		id: "3",
		name: "mamma",
		age: 24,
		gender: "female"
	},
	{
		id: "4",
		name: "Su",
		age: 31,
		gender: "female"
	},
	{
		id: "5",
		name: "Zara",
		age: 32,
		gender: "male"
	},
	{
		id: "6",
		name: "NPM",
		age: 27,
		gender: "male"
	}	
];

export const getById = id => {
	const filteredPeople = people.filter(person => person.id === String(id));
	return filteredPeople[0];
};