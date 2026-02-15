import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import {
    addChar,
    cos,
    sin,
    tan,
    sqrt,
    ln,
    exp,
    deleteChar,
    percent,
    changeSign,
    compute,
    square,
    checkNum
} from '../script.js';

// Simulate DOM environment
const dom = new JSDOM('<!DOCTYPE html><html><body><input id="display" value="0"></body></html>');
global.document = dom.window.document;

// Mock objects
let mockInput = { value: "0" };
let mockForm = { display: mockInput };

describe('Unit tests for script.js', () => {
    beforeEach(() => {
        mockInput.value = "0";
    });

    describe('addChar function', () => {
        it('should replace initial 0 with a character', () => {
            addChar(mockInput, '5');
            expect(mockInput.value).to.equal('5');
        });

        it('should append a character to the existing value', () => {
            mockInput.value = "12";
            addChar(mockInput, '3');
            expect(mockInput.value).to.equal('123');
        });
    });

    describe('cos function', () => {
        it('should calculate the cosine of the value', () => {
            mockInput.value = Math.PI / 2;
            cos(mockForm);
            expect(parseFloat(mockInput.value).toFixed(2)).to.equal('0.00'); // Cosine of π/2 is 0
        });
    });

    describe('sin function', () => {
        it('should calculate the sine of the value', () => {
            mockInput.value = Math.PI / 2;
            sin(mockForm);
            expect(parseFloat(mockInput.value).toFixed(2)).to.equal('1.00'); // Sine of π/2 is 1
        });
    });

    describe('sqrt function', () => {
        it('should compute the square root of a positive number', () => {
            mockInput.value = "9";
            sqrt(mockForm);
            expect(mockInput.value).to.equal("3");
        });
    });

    describe('deleteChar function', () => {
        it('should remove the last character', () => {
            mockInput.value = "123";
            deleteChar(mockInput);
            expect(mockInput.value).to.equal('12');
        });

        it('should handle single character input', () => {
            mockInput.value = "1";
            deleteChar(mockInput);
            expect(mockInput.value).to.equal("");
        });
    });

    describe('changeSign function', () => {
        it('should add a minus sign to a positive value', () => {
            mockInput.value = "123";
            changeSign(mockInput);
            expect(mockInput.value).to.equal('-123');
        });

        it('should remove the minus sign from a negative value', () => {
            mockInput.value = "-123";
            changeSign(mockInput);
            expect(mockInput.value).to.equal('123');
        });
    });

    describe('compute function', () => {
        it('should evaluate a mathematical expression', () => {
            mockInput.value = "3+5*2";
            compute(mockForm);
            expect(mockInput.value).to.equal("13");
        });
    });

    describe('percent function', () => {
        it('should append % to the input value', () => {
            mockInput.value = "50";
            percent(mockInput);
            expect(mockInput.value).to.equal("50%");
        });
    });

    describe('checkNum function', () => {
        it('should return true for valid numeric strings', () => {
            expect(checkNum("123+45*6")).to.be.true;
        });

        it('should return false for invalid characters', () => {
            expect(checkNum("123abc")).to.be.false;
        });
    });
});
