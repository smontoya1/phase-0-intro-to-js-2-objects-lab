// Write your solution in this file!
const employee = {
    name: "Shaun",
    streetAddress: {
        street: "500 W. 190th St",
        city: "New York",
        state: "NY",
        zipCode: "10040",
    }
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employeeUpdated = {...employee};
    employeeUpdated[key] = value;
    return employeeUpdated;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const employeeUpdated = {...employee};
    delete employeeUpdated[key];
    return employeeUpdated;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}