class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        this.firstName = this.validateName(firstName, "First Name");
        this.lastName = this.validateName(lastName, "Last Name");
        this.address = this.validateMinLength(address, "Address", 4);
        this.city = this.validateMinLength(city, "City", 4);
        this.state = this.validateMinLength(state, "State", 4);
        this.zip = this.validatePattern(zip, "Zip", /^[0-9]{6}$/);
        this.phone = this.validatePattern(phone, "Phone", /^[0-9]{10}$/);
        this.email = this.validatePattern(email, "Email", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
    }

    validateName(name, fieldName) {
        const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) throw new Error(`${fieldName} must start with a capital letter and have at least 3 characters.`);
        return name;
    }

    validateMinLength(value, fieldName, minLength) {
        if (value.length < minLength) throw new Error(`${fieldName} must have at least ${minLength} characters.`);
        return value;
    }

    validatePattern(value, fieldName, pattern) {
        if (!pattern.test(value)) throw new Error(`Invalid ${fieldName} format.`);
        return value;
    }
}

module.exports = Contact;