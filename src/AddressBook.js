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


editContact(firstName, lastName, updatedContact) {
    let index = this.contacts.findIndex(
        (contact) => contact.firstName === firstName && contact.lastName === lastName
    );

    if (index === -1) {
        throw new Error(`Contact ${firstName} ${lastName} not found.`);
    }

    if (!(updatedContact instanceof Contact)) {
        throw new Error("Invalid Contact Update.");
    }

    this.contacts[index] = updatedContact;
    console.log(`✅ Contact ${firstName} ${lastName} updated successfully.`);
}
}


module.exports = AddressBook;
