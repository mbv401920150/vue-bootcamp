import {getEmployee} from "./07-imp-exp.ts";
import {type Employee} from "../data/employees.ts";

// console.log('init');
//
// new Promise((resolve, reject) => {
//     console.log('body promise');
//
//     setTimeout(() => {
//         //resolve('Promise was resolved successfully');
//
//         reject('Promise was rejected');
//     }, 1000);
// })
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('FINALLY');
//     });
//
// console.log('end');

export const getEmployeeByIdAsync = (id: number): Promise<Employee> => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const employee = getEmployee(id);

            employee ? resolve(employee) : reject(`Employee with id ${id} not found`);
        }, 1000);
    });
}

getEmployeeByIdAsync(2)
    .then(emp => console.log(emp.name))
    .catch(alert);
