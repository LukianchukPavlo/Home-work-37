interface PersonInterface {
  name: string
  age: number
  isActive: boolean
}


function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
  return{
    name,
    age,
    isActive
  }
}

const newPerson = createPerson('Олександр', 31, false)
console.log(newPerson)

function LogMethodCalls(target: any, propertyName: string, propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
  const originalMethod = propertyDescriptor.value
  propertyDescriptor.value = function(...args: number[]){
    console.log(`Calling "${propertyName}" with arguments: ${args}`);
    return originalMethod.apply(this, args)
  }
  return propertyDescriptor
}


class Calculator {
  @LogMethodCalls
  add(number1:number, number2:number){
    return number1 + number2;
  }
  @LogMethodCalls
  multiply(number1:number, number2:number){
    return number1 * number2;
  }
}

const calculator = new Calculator()
// "Calling "add" with arguments: 2, 3"
console.log(calculator.add(2, 3)) // 5
// "Calling "multiply" with arguments: 3, 4"
console.log(calculator.multiply(3, 4)) // 12


namespace UserProfile {
  export interface ProfileInterface {
    id: string,
    name: string,
    email: string,
  }
  function generateId(): string {
    return "id_" + Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
  }
  export function createProfile(name:string, email:string): ProfileInterface{
    return {
      id: generateId(),
      name,
      email,
      }
  }
}

const profile = UserProfile.createProfile('John Doe', 'john@example.com')
console.log(profile) // { "id": "e6uvai5egqd", "name": "John Doe", "email": "john@example.com" }

