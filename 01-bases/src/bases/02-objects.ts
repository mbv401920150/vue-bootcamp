export const person = {
    firstName: 'John',
    lastName: "Doe",
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
}; // as const;

// TODOS LOS OBJETOS PASAN POR REFERENCIA
// const person2 = person;

// FirstName sera igual en ambos elementos
// person2.firstName = 'Jane';

// Se esparse y crea un nuevo objeto con sus valores aparte
// const person3 = {...person};
// person3.firstName = 'Jane';
// person3.address.city = 'New York'; // PROBLEMA: La propiedad Address es referencia de persona 1 (No se esparse)

// Nueva funcion en 2022
const person4 = structuredClone(person)
person4.firstName = 'Jane';
person4.address.city = 'New York';

console.log({person, person4});