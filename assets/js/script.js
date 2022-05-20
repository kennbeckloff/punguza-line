function myFunction() {
    alert("Appointment Booked Successfully.  Click Okay To Confirm!");
  }
var selectedRow = null
 
// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["userName"] = document.getElementById("userName").value;
    formData["phoneNo"] = document.getElementById("phoneNo").value;
    formData["email"] = document.getElementById("email").value;
    formData["selecDepart"] = document.getElementById("selecDepart").value;
    formData["time"] = document.getElementById("time").value;
     formData["date"] = document.getElementById("date").value;
    formData["age"] = document.getElementById("age").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phoneNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.selecDepart;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.time;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.date;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.age;
    cell6 = newRow.insertCell(7);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("phoneNo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("selecDepart").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phoneNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("selecDepart").value = selectedRow.cells[3].innerHTML;
    document.getElementById("time").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
    document.getElementById("age").value = selectedRow.cells[6].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.phoneNo;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.selecDepart;
    selectedRow.cells[4].innerHTML = formData.time;
    selectedRow.cells[5].innerHTML = formData.date;
    selectedRow.cells[6].innerHTML = formData.age;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this Appointment ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // Phone No validation
    if (document.getElementById("phoneNo").value == "") {
        isValid = false;
        document.getElementById("phoneNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("phoneNovalidationError").classList.contains("hide"))
        {
            document.getElementById("phoneNovalidationError").classList.add("hide");
        }
    }
     // email
     if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailvalidationError").classList.contains("hide"))
        {
            document.getElementById("emailvalidationError").classList.add("hide");
        }
    }
    // Select Departments validation
    if (document.getElementById("selecDepart").value == "") {
        isValid = false;
        document.getElementById("selecDepartvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("selecDepartvalidationError").classList.contains("hide"))
        {
            document.getElementById("selecDepartvalidationError").classList.add("hide");
        }
    }
    // time validation
    if (document.getElementById("time").value == "") {
        isValid = false;
        document.getElementById("timevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("timevalidationError").classList.contains("hide"))
        {
            document.getElementById("timevalidationError").classList.add("hide");
        }
    }
     // Date validation
     if (document.getElementById("date").value == "") {
        isValid = false;
        document.getElementById("datevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("datevalidationError").classList.contains("hide"))
        {
            document.getElementById("datevalidationError").classList.add("hide");
        }
    }
    // Age validation
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide"))
        {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }
    return isValid;
}
function myFunction() {
    alert("Appointment Booked Successfully.  Click Okay To Confirm!");
  }
var selectedRow = null
 
// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["userName"] = document.getElementById("userName").value;
    formData["phoneNo"] = document.getElementById("phoneNo").value;
    formData["email"] = document.getElementById("email").value;
    formData["selecDepart"] = document.getElementById("selecDepart").value;
    formData["time"] = document.getElementById("time").value;
     formData["date"] = document.getElementById("date").value;
    formData["age"] = document.getElementById("age").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phoneNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.selecDepart;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.time;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.date;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.age;
    cell6 = newRow.insertCell(7);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("phoneNo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("selecDepart").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phoneNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("selecDepart").value = selectedRow.cells[3].innerHTML;
    document.getElementById("time").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
    document.getElementById("age").value = selectedRow.cells[6].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.phoneNo;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.selecDepart;
    selectedRow.cells[4].innerHTML = formData.time;
    selectedRow.cells[5].innerHTML = formData.date;
    selectedRow.cells[6].innerHTML = formData.age;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this Appointment ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // Phone No validation
    if (document.getElementById("phoneNo").value == "") {
        isValid = false;
        document.getElementById("phoneNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("phoneNovalidationError").classList.contains("hide"))
        {
            document.getElementById("phoneNovalidationError").classList.add("hide");
        }
    }
     // email
     if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailvalidationError").classList.contains("hide"))
        {
            document.getElementById("emailvalidationError").classList.add("hide");
        }
    }
    // Select Departments validation
    if (document.getElementById("selecDepart").value == "") {
        isValid = false;
        document.getElementById("selecDepartvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("selecDepartvalidationError").classList.contains("hide"))
        {
            document.getElementById("selecDepartvalidationError").classList.add("hide");
        }
    }
    // time validation
    if (document.getElementById("time").value == "") {
        isValid = false;
        document.getElementById("timevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("timevalidationError").classList.contains("hide"))
        {
            document.getElementById("timevalidationError").classList.add("hide");
        }
    }
     // Date validation
     if (document.getElementById("date").value == "") {
        isValid = false;
        document.getElementById("datevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("datevalidationError").classList.contains("hide"))
        {
            document.getElementById("datevalidationError").classList.add("hide");
        }
    }
    // Age validation
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide"))
        {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }
    return isValid;
}
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
function myFunction() {
    alert("Appointment Booked Successfully.  Click Okay To Confirm!");
  }
var selectedRow = null
 
// Form Submit Function
function onFormSubmit() {
    // check validity
    if (validate()) {
        // store user data
        var formData = readFormData();
        // check empty row
        if (selectedRow == null)
        {
            // Insert New User Record
            insertNewRecord(formData);
        }
        else
        {
            // Update New User Record
            updateRecord(formData);
        }
        // Reset Input Values
        resetForm();
    }
}
// Get Values From Form
function readFormData() {
    var formData = {};
    // Get Values From  Input
    formData["userName"] = document.getElementById("userName").value;
    formData["phoneNo"] = document.getElementById("phoneNo").value;
    formData["email"] = document.getElementById("email").value;
    formData["selecDepart"] = document.getElementById("selecDepart").value;
    formData["time"] = document.getElementById("time").value;
     formData["date"] = document.getElementById("date").value;
    formData["age"] = document.getElementById("age").value;
    // return Form Data
    return formData;
}
// Insert New User Record
function insertNewRecord(data) {
    var table = document.getElementById("stdlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phoneNo;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.selecDepart;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.time;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.date;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.age;
    cell6 = newRow.insertCell(7);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("phoneNo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("selecDepart").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phoneNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("selecDepart").value = selectedRow.cells[3].innerHTML;
    document.getElementById("time").value = selectedRow.cells[4].innerHTML;
    document.getElementById("date").value = selectedRow.cells[5].innerHTML;
    document.getElementById("age").value = selectedRow.cells[6].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.phoneNo;
    selectedRow.cells[2].innerHTML = formData.email;
    selectedRow.cells[3].innerHTML = formData.selecDepart;
    selectedRow.cells[4].innerHTML = formData.time;
    selectedRow.cells[5].innerHTML = formData.date;
    selectedRow.cells[6].innerHTML = formData.age;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this Appointment ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("stdlist").deleteRow(row.rowIndex);
        resetForm();
    }
}
// Check User validation
function validate() {
    isValid = true;
    // userName validation
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNamevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNamevalidationError").classList.contains("hide"))
        {
            document.getElementById("userNamevalidationError").classList.add("hide");
        }
    }
    // Phone No validation
    if (document.getElementById("phoneNo").value == "") {
        isValid = false;
        document.getElementById("phoneNovalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("phoneNovalidationError").classList.contains("hide"))
        {
            document.getElementById("phoneNovalidationError").classList.add("hide");
        }
    }
     // email
     if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("emailvalidationError").classList.contains("hide"))
        {
            document.getElementById("emailvalidationError").classList.add("hide");
        }
    }
    // Select Departments validation
    if (document.getElementById("selecDepart").value == "") {
        isValid = false;
        document.getElementById("selecDepartvalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("selecDepartvalidationError").classList.contains("hide"))
        {
            document.getElementById("selecDepartvalidationError").classList.add("hide");
        }
    }
    // time validation
    if (document.getElementById("time").value == "") {
        isValid = false;
        document.getElementById("timevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("timevalidationError").classList.contains("hide"))
        {
            document.getElementById("timevalidationError").classList.add("hide");
        }
    }
     // Date validation
     if (document.getElementById("date").value == "") {
        isValid = false;
        document.getElementById("datevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("datevalidationError").classList.contains("hide"))
        {
            document.getElementById("datevalidationError").classList.add("hide");
        }
    }
    // Age validation
    if (document.getElementById("age").value == "") {
        isValid = false;
        document.getElementById("agevalidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("agevalidationError").classList.contains("hide"))
        {
            document.getElementById("agevalidationError").classList.add("hide");
        }
    }
    return isValid;
}
