// задача номер 1
function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    // Change code below this line
    const isMatch = password === SAVED_PASSWORD;

    // Change code above this line

    return isMatch;
}

isValidPassword()

// задача номер 2
function checkAge(age) {
    let message;

    if (age >= 18) { // Change this line
        message = 'You are an adult';
    } else {
        message = 'You are a minor';
    }

    return message;
}

// console.log( checkAge(18))

// задача номер 3

function checkStorage(available, ordered) {
    let message;

    if (ordered > available) {
        message = "Not enough goods in stock!"
    } else {
        message = "Order is processed, our manager will contact you."
    }


    return message;
}

// console.log(checkStorage( 10, 5))


// задача номер 5

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let totalPrice = pricePerDroid * orderedQuantity;
    let message;
    if (totalPrice > customerCredits) {
        message = "Insufficient funds!"
    } else {
        customerCredits = customerCredits - totalPrice;
        message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`
    }

    // Change code above this line
    return message;
}

// console.log(makeTransaction(500, 10, 5000))

// задача номер 6

function checkPassword(password) {
    const ADMIN_PASSWORD = 'jqueryismyjam';
    let message;

    if (password === null) { // Change this line
        message = 'Canceled by user!';
    } else if (password === ADMIN_PASSWORD) { // Change this line
        message = 'Welcome!';
    } else {
        message = 'Access denied, wrong password!';
    }

    return message;
}

// console.log(checkPassword('jjj'))

// задача номер 7

function checkStorage(available, ordered) {
    let message;
    if (ordered === 0) {
        message = "There are no products in the order!"
    } else if (ordered > available) {
        message = "Your order is too large, there are not enough items in stock!"
    } else {
        message = "The order is accepted, our manager will contact you"
    }
    return message;
}

// console.log(checkStorage(70, 0))

// задача номер 8

function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end; // Change this line

    return isInRange;
}

// console.log(isNumberInRange(10,30,17))

// задача номер 10

function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

    return canAccessContent;
}

// console.log(checkIfCanAccessContent("pro"))

// задача номер 11

function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; // Change this line

    return isNotInRange;
}

// задача номер 12

function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
    if (totalSpent >= 50000) {
        discount = GOLD_DISCOUNT
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
        discount = SILVER_DISCOUNT
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
        discount = BRONZE_DISCOUNT
    } else {
        discount = BASE_DISCOUNT
    }
    // Change code above this line
    return discount;
}

// console.log(getDiscount(46900))

// задача номер 13

function checkStorage(available, ordered) {
    let message;
    // Change code below this line

    // if (ordered > available) {
    //     message = "Not enough goods in stock!";
    // } else {
    //     message = "The order is accepted, our manager will contact you";
    // }

    // ПЕРЕПИСАЛИ ИФ ЕЛС НА ТЕРНАРНЫЙ ОПЕРАТОР

 message =  ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

    // Change code above this line
    return message ;
}

// console.log(checkStorage(100,130))

// задача номер 14

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
    // Change code above this line
    return message;
}
// console.log(checkPassword("jqueryismyjam"))

// задача номер 15

function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
    //
    // if (password === null) {
    //     message = "Canceled by user!";
    // } else if (password === ADMIN_PASSWORD) {
    //     message = "Welcome!";
    // } else {
    //     message = "Access denied, wrong password!";
    // }

    switch(password){
        case null:
            message =  "Canceled by user!";
            break;

        case ADMIN_PASSWORD:
            message =  "Welcome!";
            break;
        default:
            message ="Access denied, wrong password!";
    }

    // Change code above this line
    return message;
}


// задача номер 16
function getShippingCost(country) {
    let message;
    let price;
    // Change code below this line
    switch(country){
        case "China":
            price = 100;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Chile":
            price = 250;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Australia":
            price = 170;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        case "Jamaica":
            price = 120;
            message = `Shipping to ${country} will cost ${price} credits`;
            break;
        default:
            message =  "Sorry, there is no delivery to your country"
    }
    // Change code above this line
    return message;
}

// console.log(getShippingCost("Jamaica"))


// задача номер 17

function getNameLength(name) {
    const message = `Name ${name} is ${name.length} characters long`; // Change this line

    return message;
}
 // console.log(getNameLength("Poly"))

function checkForName(fullName, name) {
    const result = name.includes(fullName)
    return result;
}
// console.log(checkForName("Egor Kolbasov", "Egor"))


// пролверка на спам
function checkForSpam(message) {
    const spam = "spam"
    const sale = "sale"
    let result = message.toLowerCase().includes(spam) ||  message.toLowerCase().includes(sale) ;

    return result;

}


 console.log(checkForSpam())