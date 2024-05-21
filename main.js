const product1 = {
    name: "Rolex Ladies Watch",
    price: 3000,
    inventory: {
        stock: 20,
        colorOptions: ["Silver", "Golden", "Black", "White"]
    }
};
console.log("Name:", product1.name, "Price:", product1.price, "Stock Available:", product1.inventory.stock, "Colors Available:", product1.inventory.colorOptions);
console.log(`The Price of ${product1.name} is Rs.${product1.price} and available in ${product1.inventory.colorOptions} colors.`);
// 2. Creating an array named products containing atleast three products objects.Each product includes a name,price and inventory details.
const products = [
    {
        name: "Gucci Bags",
        price: 6000,
        inventory: {
            stock: 10,
            colorOptions: ["Black", "White", "Red", "Blue"]
        }
    },
    {
        name: "Stylo Ladies Footwear",
        price: 2800,
        inventory: {
            stock: 15,
            colorOptions: ["Black", "White", "Yellow", "Red"]
        }
    },
    {
        name: "Alkaram Bedsheets",
        price: 2500,
        inventory: {
            stock: 25,
            colorOptions: ["Grey", "White", "Brown", "Sky Blue", "Colorfull"]
        }
    }
];
// 3. Implementing a function named changeColor that takes a product object and a new color as input.Adjust the price increase or decrease.
const productA = [
    {
        name: "Gucci Bags",
        price: 6000,
        inventory: {
            stock: 10,
            colorOptions: ["Black", "White", "Red", "Blue"],
            changeColor: function (color1, color2) {
                this.colorOptions.push(color1, color2);
                return this.colorOptions;
                if (color1 === "Golden" || color1 === "Offwhite" || color2 === "Golden" || color2 === "Offwhite") {
                    console.log(`The Price of ${this.changeColor} is ${1.1 * products[0].price}`);
                }
            }
        }
    }
];
const gucciBag = productA[0];
// Calling the function
const newColors = ["Offwhite", "Golden"];
const result = gucciBag.inventory.changeColor(newColors[0], newColors[1]);
console.log("Gucci Bags Color Options Updated:", result);
const updatedPrice = 1.1 * products[0].price;
console.log(`The Price of Golden and Offwhite Gucci Bag is ${updatedPrice}`);
// 4. Displaying each product's name,price,stock and available colors.
console.log("Product1:", products[0]);
console.log("Product2:", products[1]);
console.log("Product3:", products[2]);
// 2. Creating an array named students containing  three student objects. Each student object incldes name and an array of grades.
const students = [
    {
        name: "Sana Salman",
        grades: ["English:", 80, "Maths:", 85, "Science:", 75, "History:", 80]
    },
    {
        name: "Hina Ali",
        grades: ["English:", 85, "Maths:", 80, "Science:", 79, "History:", 80]
    },
    {
        name: "Sohail Ahmed",
        grades: ["English:", 85, "Maths:", 80, "Science:", 79, "History:", 80]
    }
];
console.log("Student1:", students[0]);
console.log("Student2:", students[1]);
console.log("Student3:", students[2]);
3.; // Implementing function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.
function calculateAverageGrade(grades) {
    let total = 0;
    let count = 0; // To count the number of grades
    for (let i = 0; i < grades.length; i++) {
        if (typeof grades[i] === "number") {
            total += grades[i];
            count++;
        }
    }
    return total / count;
}
students.forEach(student => {
    const averageGrade = calculateAverageGrade(student.grades);
    // 4. Displaying each student's name and average grade
    console.log(`${student.name}: Average Grade: ${averageGrade}`);
});
// 2. Defining an array named employees containing employee objects.Each object includes the properties.
let employees = [
    {
        name: "Ahmed Ali",
        hoursWorked: 12,
        hourlyRate: 150,
        salary: 54000
    },
    {
        name: "Zeeshan Akber",
        hoursWorked: 12,
        hourlyRate: 130,
        salary: 46800
    },
    {
        name: "Alina Javed",
        hoursWorked: 11,
        hourlyRate: 140,
        salary: 46200
    },
];
console.log("Employee1:", employees[0]);
console.log("Employee2:", employees[1]);
console.log("Employee3:", employees[2]);
// 3. Implementing a function named calculateSalary that calculates the salary for each employee based on the hours worked  and hourly rate.
function calculateSalary(employee) {
    return employee.hoursWorked * employee.hourlyRate;
}
employees.forEach(employee => {
    const salary = calculateSalary(employee);
    console.log(`${employee.name} : Salary ${employee.salary.toFixed(2)}`);
});
// 4. If employee worked 20 hours or more apply 10% bonus to their salary
function UpdatedHoursAndSalary(employees, employeeName, updatedHours) {
    employees.forEach(employee => {
        if (employee.name === employeeName) {
            employee.hoursWorked = updatedHours;
            if (employee.hoursWorked >= 20) {
                employee.salary = employee.salary * 1.1;
            }
            else {
                employee.salary = employee.hourlyRate * employee.hoursWorked;
            }
        }
    });
}
UpdatedHoursAndSalary(employees, "Zeeshan Akber", 24);
console.log(employees);
export {};
