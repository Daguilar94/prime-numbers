import { validateNumber, isPrime } from '../utils';

describe('test util functions', () => {
  describe('test number validation function', () => {
    const validResponse = (number) => ({
      number,
      isValid: true,
      errorMessage: ""
    });

    const invalidResponse = (number, inValidFormat) => {
      const errorMessage = inValidFormat
        ? "Please use numeric values"
        : "The number is too large"
      return {
        number,
        isValid: false,
        errorMessage
      };
    }

    it('should return valid response for a positive integer', () => {
      const number = "54";
      expect(validateNumber(number)).toEqual(validResponse(number));
    })
    it('should return valid response for a negative integer', () => {
      const number = "-343";
      expect(validateNumber(number)).toEqual(validResponse(number));
    })
    it('should return valid response for a negative float', () => {
      const number = "-34.3";
      expect(validateNumber(number)).toEqual(validResponse(number));
    })
    it('should return valid response for a positive float', () => {
      const number = "355.87";
      expect(validateNumber(number)).toEqual(validResponse(number));
    })
    it('should return invalid response for a non numeric inputs', () => {
      const number = "35e5.87";
      expect(validateNumber(number)).toEqual(invalidResponse(number, true));
    })
    it('should return invalid response for a dot ended number', () => {
      const number = "355.";
      expect(validateNumber(number)).toEqual(invalidResponse(number, true));
    })
    it('should return invalid response for a single minus sign', () => {
      const number = "-";
      expect(validateNumber(number)).toEqual(invalidResponse(number, true));
    })
    it('should return invalid response for blank space input', () => {
      const number = "  ";
      expect(validateNumber(number)).toEqual(invalidResponse(number, true));
    })
    it('should return invalid response for too large numbers', () => {
      const number = "7638476987639876309673";
      expect(validateNumber(number)).toEqual(invalidResponse(number, false));
    })
    it('should return invalid response for too negative large numbers', () => {
      const number = "7638476987639876309673";
      expect(validateNumber(number)).toEqual(invalidResponse(number, false));
    })
  });

  describe('test is prime function', () => {
    it('should return true for prime integer values', () => {
      const number = 2;
      expect(isPrime(number)).toEqual(true);
    })
    it('should return false for non prime integer values', () => {
      const number = 10;
      expect(isPrime(number)).toEqual(false);
    })
    it('should return false for float values', () => {
      const number = 1.1;
      expect(isPrime(number)).toEqual(false);
    })
    it('should return false for negative values', () => {
      const number = -5;
      expect(isPrime(number)).toEqual(false);
    })
    it('should return false for non numeric values', () => {
      const number = "qwerty";
      expect(isPrime(number)).toEqual(false);
    })
  })
})