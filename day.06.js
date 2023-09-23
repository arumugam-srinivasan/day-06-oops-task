class Person {
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    greet() {
      let prefix = "";
      if (this.gender === "male") {
        prefix = "Mr.";
      } else if (this.gender === "female") {
        prefix = "Ms.";
      } else {
        prefix = "Mx.";
      }
      return `Hello, ${prefix} ${this.lastName}!`;
    }
  }
  
  // Example usage:
  const person1 = new Person("Aru", "mugam", 30, "male");
  console.log(person1.getFullName()); // Output: John Doe
  console.log(person1.greet()); // Output: Hello, Mr. Doe!
  
  const person2 = new Person("dhivya", "sri", 25, "female");
  console.log(person2.getFullName()); // Output: Jane Smith
  console.log(person2.greet()); // Output: Hello, Ms. Smith!
  