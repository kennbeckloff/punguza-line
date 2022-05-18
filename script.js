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
    formData["selecDepart"] = document.getElementById("selecDepart").value;
    formData["time"] = document.getElementById("time").value;
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
    cell3.innerHTML = data.selecDepart;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.time;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
    <a onClick="onDelete(this)">Delete</a>`;
}
// Reset Function
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("phoneNo").value = "";
    document.getElementById("selecDepart").value = "";
    document.getElementById("time").value = "";
    document.getElementById("age").value = "";
    selectedRow = null;
}
// Edit Function
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phoneNo").value = selectedRow.cells[1].innerHTML;
    document.getElementById("selecDepart").value = selectedRow.cells[2].innerHTML;
    document.getElementById("time").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
}
// Update Record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.phoneNo;
    selectedRow.cells[2].innerHTML = formData.selecDepart;
    selectedRow.cells[3].innerHTML = formData.time;
    selectedRow.cells[4].innerHTML = formData.age;
}
// Delete Function
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
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
    // Roll No validation
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
    // Std class validation
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