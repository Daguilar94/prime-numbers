export const validateNumber = function(value) {
    let errorMessage = "";
    let isValidNumber = true;

    const validInput = /(^-?\d+(.\d+)?$)/.test(value) || value === "";
    const isNumber = Number(value) || Number(value) === 0;
    const validSize = isNumber && value <= Math.pow(2, 31) - 1 && value >= -Math.pow(2, 31) + 1;

    if (!validInput) {
        isValidNumber = false;
        errorMessage = "Please use numeric values"
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