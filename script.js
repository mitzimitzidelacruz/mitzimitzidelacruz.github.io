function changeColor(event) {
    document.getElementById("main").style.backgroundColor = event.value;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numbersPlusTen = numbers.map((number) => number + 10);

const greaterThanfive = numbers.filter((number) => number > 5);

const numberFive = numbers.find((number) => number === 5);

const indexOfFive = numbers.findIndex((number) => number === 5);

//console.log(indexOfFive);

const items = [
    { pen: 21 },
    { soda: 37 },
    { backpack: 45 },
    { usb: 12 },
    { usb: 33 },
    { soda: 12 },
    { backpack: 12 },
    { usb: 20 }
];

const grouped = items.reduce((acc, item) => {
    for (let prop in item) {
        if (acc.hasOwnProperty(prop)) acc[prop] += item[prop];
        else acc[prop] = item[prop];
    }
    return acc;
}, {});

console.log(grouped);

const promisedFunction = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            setTimeout(() => {
                resolve(`Success number: ${number}`);
            }, 1000);
        } else {
            reject(`Error el número ${number} es menor a 10`);
        }
    });
};

const printNewNumberPlus20 = (number) => {
    return new Promise((resolve, reject) => {
        if (number > 10) {
            setTimeout(() => {
                resolve(`Success number: ${number}`);
            }, 1000);
        } else {
            reject(`Error el número ${number} es menor a 10`);
        }
    });
};

promisedFunction(12)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("finally");
    });

async function main() {
    try {
        const result = await promisedFunction(2);
        console.log(result);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("finally");
    }
}