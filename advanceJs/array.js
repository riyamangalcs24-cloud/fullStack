const Students = [
    {name: 'Rahul', score:85},
    {name: 'Priya', score:92},
    {name: 'Amit' , score:58},
    {name: 'Sneha', score:73}
]

const names = Students.map(s => s.name);
console.log(names);

const passed = Students.filter(s => s.score >= 60);
console.log(passed);

const average = Students.reduce((sum,s) => sum+s.score,0);
console.log(average);

const pass = Students.find(s => s.name === 'Priya');
console.log(pass);

const passedNames = Students.filter(s => s.score >= 60).map(s => s.name);
console.log(passedNames);