// Write your solution in this file!
const employee = {name: 'lameStevieJ',
                  streetAddress: 'whoresHam'};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, 
        [key]: value,
    }
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee, 
    "name", 
    "coolStevieJ"
    );

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newerEmployee = {...employee}
    delete newerEmployee[key]
    return newerEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}