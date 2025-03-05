const Contact = require("./Contact");

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        if (contact instanceof Contact) {
            this.contacts.push(contact);
            console.log("Contact Added:", contact);
        } else {
            throw new Error("Invalid Contact");
        }
    }

    getAllContacts() {
        return this.contacts;
    }
}

module.exports = AddressBook;