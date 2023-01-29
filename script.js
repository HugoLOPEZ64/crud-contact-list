var Contact = function (name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}

var contacts = [];
contacts.push(new Contact("Hugo LOPEZ", "for the email address, check out my portfolio :-)", "same for my phone number!"));

var listContacts = function () {
    document.getElementById('displayContacts').innerHTML = " ";
    for (var i = 0; i < contacts.length; i++) {
        document.getElementById('displayContacts').innerHTML += '<tr><td id="name' + i + '">' + contacts[i].name + '</td><td id="email' + i + '">' + contacts[i].email + '</td><td id="phone' + i + '">' + contacts[i].phone + '</td><td><button class="btn btn-warning" onclick=updateContact(' + i + ')>Update</button></div><button class="btn btn-danger" onclick=deleteContact(' + i + ')>Delete</button></td></tr>';
    }
}

var addNewContact = function () {
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var phone = document.getElementById('inputPhone').value;
    var contact = new Contact(name, email, phone);
    contacts.push(contact);
    listContacts();
}

var deleteContact = function (i) {
    contacts.splice(i, 1);
    listContacts();
}

var updateContact = function (i) {
    contactId = i;
    document.getElementById("inputName").value = contacts[i].name;
    document.getElementById("inputEmail").value = contacts[i].email;
    document.getElementById("inputPhone").value = contacts[i].phone;
    document.getElementById("submitButtons").innerHTML = '<button id="updateButton" class="btn btn-warning" onclick=submitUpdatedContact(contactId)>Submit</button>';
   
}

var submitUpdatedContact = function (i) {
    contacts[i].name = document.getElementById("inputName").value;
    contacts[i].email = document.getElementById("inputEmail").value;
    contacts[i].phone = document.getElementById("inputPhone").value;

    document.getElementById("inputName").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputPhone").value = "";

    listContacts();
}


listContacts();