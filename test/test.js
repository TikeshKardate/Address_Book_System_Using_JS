const Contact = require("D:\\Address_Book_System_Using_JS\\src\\Contact.js");
const AddressBook = require("D:\\Address_Book_System_Using_JS\\src\\AddressBook.js");

let addressBook = new AddressBook();

console.log("\nAdding Valid Contacts to Address Book:");
try {
    let contact1 = new Contact("Tikesh", "Kardate", "Vrindavan Nagar", "Bhopal", "Madhya Pradesh", "123456", "1234555678", "tikesh.kardate@example.com");
    addressBook.addContact(contact1);

    let contact2 = new Contact("Unmesh", "Kardate", "New Colony", "Madhya Pradesh", "Multai", "654321", "5498765425", "unmesh.kardate@example.com");
    addressBook.addContact(contact2);

    console.log("\nAll Contacts:");
    console.log(addressBook.getAllContacts());
} catch (error) {
    console.error("Error:", error.message);
}


console.log("\nTesting Invalid Contact (Should Fail):");
try {
    let invalidContact = new Contact("Jo", "S", "St", "NY", "US", "12345", "98765", "invalid@");
    addressBook.addContact(invalidContact);
} catch (error) {
    console.error("Expected Error:", error.message);
}