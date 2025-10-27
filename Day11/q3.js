/**
 3. Create a person Object, which contains below said properties:
	- A firstName property (e.g., "John")
	- A lastName property (e.g., "Doe").
	- A birthYear property (e.g., 1990).
	- A method called getFullName() that returns the person's full name (e.g., "John Doe")
	- A method called getAge() that calculates and returns the person's current age.
 */
let obj = {
    firstName:'John',
    secondName:'Doe',
    birthYear:1990,
    getFullName(){
        console.log(`${this.firstName} ${this.secondName}`)
    },
     getAge(){
        let now = new Date().getFullYear()
        console.log(`${now -this.birthYear}`)
    }
}
obj.getFullName()
obj.getAge()