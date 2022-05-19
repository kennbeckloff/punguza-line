var nameId=document.getElementById("name")
var mail=document.getElementById("email")
var btn=document.getElementById("submit")
var cmm = document.getElementById('text')
var taEl = document.getElementById('area')

btn.addEventListener('click', function(){
    if(nameId.value=='' || mail.value=='' || taEl.value==''){
        alert("Please fill all fields");
    }
    
    else{
        alert("Message sent successfully")
        nameId.value = ""
        mail.value=""
        taEl.value=""
        
    }
})
