interface Employee {
    name: string;
    age: number;
    codeName?: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    }
}

interface CreateEmployeeArgs {
    name: string;
    age: number;
    codeName?: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    }
}

export const person: Employee = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345',
    },
};

const {name, age, codeName = 'Invalid codename'} = person; // Arreglo y Objeto

console.log(`${name} - ${age}... ${codeName}`);

// const createEmployee = (args: any) => {
//     console.log(`Employee: ${args.name} - ${args.age}... ${args.codeName}`);
// }

// const createEmployee = ({name, age, codeName}: any) => {
//     console.log(`Employee: ${name} - ${age}... ${codeName}`);
// }

const createEmployee = ({name, age, codeName}: CreateEmployeeArgs) => {
    console.log(`Employee: ${name} - ${age}... ${codeName}`);
}

createEmployee(person);