// El valor sin llaves es el valor por defecto (No necesariamente debe tener el mismo nombre)
// Despues es como hacer una destructuracion, el nombre debe ser el mismo
import emps, { type Employee, type CompanyName } from '../data/employees';

console.log({emps});

export const getEmployee = (id: number) : Employee | undefined => {
    return emps.find((emp) => emp.id === id);
}

export const getEmployeeByCompany = (company: CompanyName) : Employee[] => {
    return emps.filter((emp) => emp.company === company);
}

console.log(getEmployee(1));
console.log(getEmployeeByCompany("PG"));