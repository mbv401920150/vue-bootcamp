// function greetPerson(name: string): string {
//     return `Hello, ${name}!`;
// }
//
// const greetPerson = (name: string) => {
//     return `Hello, ${name}!`;
// }

const greetPerson = (name: string) => `Hello, ${name}!`;

const getUser = (uid: string) => 
    ({
        uid, // OR uid: uid
        username: 'John'
    })


console.log(greetPerson("John"));
console.log(getUser("ABC-123"));

// TRAILING COMMA
const heroes = [
    {
        id: 1,
        name: 'Batman',
    },
    {
        id: 2,
        name: 'Superman',
        owner: 'DC',
    }
]

const hero = heroes.find(hero => hero.name === 'Batman')

console.log(hero?.name?.toUpperCase());