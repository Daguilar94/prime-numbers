export const validateNumber = function(value) {
    let errorMessage = "";
    let isValidNumber = true;
    const validInput = /^\d*$/.test(value);
    const validSize = value <= Math.pow(2, 31) - 1;

    if (!validInput) {
        isValidNumber = false;
        errorMessage = "Invalid input"
    }

    if(isValidNumber && !validSize) {
        isValidNumber = false;
        errorMessage = "The number is too large"
    }

    return {
        number: value,
        isValid: isValidNumber,
        errorMessage
    }
};

export function isPrime(number) {
    if(!Number.isInteger(number)) {
        return false
    } else if(number < 2) {
        return false;
    } else if (number <= 3) {
        return true
    } else if (number % 2 === 0 || number % 3 === 0) {
        return false
    }

    const sqrRoot = Math.sqrt(number);

    for(let i = 5; i <= sqrRoot; i++) {
        if(number % i === 0) {
            return false
        }
    }

    return true;
}