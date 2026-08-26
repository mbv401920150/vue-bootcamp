const characters: string[] = ['Deadpool', 'Superman', 'Batman'];

const [ c1 ] = characters;
const [ , , c3, undefinedValue = 'Default value' ] = characters;


console.log({c1 , c3, undefinedValue});

// Asi se fuerza a generar un array de 2 valores (El primero es number, y el segundo es string)
const returnArray = () => [123, '1234'] as const;

const [ numbers, strings ] = returnArray();

console.log(numbers.toExponential(2) + 4, strings.toLowerCase());