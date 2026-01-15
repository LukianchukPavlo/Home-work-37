"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function createPerson(name, age, isActive) {
    return {
        name,
        age,
        isActive
    };
}
const newPerson = createPerson('Олександр', 31, false);
console.log(newPerson);
function LogMethodCalls(target, propertyName, propertyDescriptor) {
    const originalMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args) {
        console.log(`Calling "${propertyName}" with arguments: ${args}`);
        return originalMethod.apply(this, args);
    };
    return propertyDescriptor;
}
class Calculator {
    add(number1, number2) {
        return number1 + number2;
    }
    multiply(number1, number2) {
        return number1 * number2;
    }
}
__decorate([
    LogMethodCalls
], Calculator.prototype, "add", null);
__decorate([
    LogMethodCalls
], Calculator.prototype, "multiply", null);
const calculator = new Calculator();
// "Calling "add" with arguments: 2, 3"
console.log(calculator.add(2, 3)); // 5
// "Calling "multiply" with arguments: 3, 4"
console.log(calculator.multiply(3, 4)); // 12
var UserProfile;
(function (UserProfile) {
    function generateId() {
        return "id_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
    }
    function createProfile(name, email) {
        return {
            id: generateId(),
            name,
            email,
        };
    }
    UserProfile.createProfile = createProfile;
})(UserProfile || (UserProfile = {}));
const profile = UserProfile.createProfile('John Doe', 'john@example.com');
console.log(profile); // { "id": "e6uvai5egqd", "name": "John Doe", "email": "john@example.com" }
//# sourceMappingURL=index.js.map