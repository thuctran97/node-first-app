const person = {
    name: 'Max',
    greet() {
        console.log('Hello, Iam ' + this.name);
    }
}
person.greet();