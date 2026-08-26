export interface Employee {
    id: number;
    name: string;
    company: CompanyName;
}

export type CompanyName = 'PG' | 'Acme Inc';

const employees: Employee[] = [
    {
        id: 1,
        name: 'John Doe',
        company: 'Acme Inc'
    },
    {
        id: 2,
        name: 'Jane Doe',
        company: 'Acme Inc'
    },
    {
        id: 3,
        name: 'Dana Bill',
        company: 'PG'
    },
    {
        id: 4,
        name: 'Dona Hill',
        company: 'PG' 
    }
];

export const companyNames = ['PG', 'Acme Inc'] as const;
    
export default employees;