let form = document.getElementById("userform")

form.addEventListener("submit", (e)=>{
    // whose fun has no name that can be called anonimus funcation 
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let PhoneNumber=document.getElementById("number").value;
    let Password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    let obj={
        name, email, PhoneNumber, Password, confirmPassword
    }

    if(obj.Password!=obj.confirmPassword){
        return alert("password not matched")

    }
        // console.log(obj);
    let tr=document.createElement("tr")

    let td1=document.createElement("td");
    td1.innerText=obj.name;

    let td2=document.createElement("td");
    td2.innerText=obj.email;

    let td3=document.createElement("td");
    td3.innerText=obj.PhoneNumber;

    let td4=document.createElement("td");
    td4.innerText=obj.Password;

    let td5=document.createElement("td");
    td5.innerText=obj.confirmPassword;

    tr.append(td1,td2,td3,td4,td5);

    document.getElementById("tbody").append(tr);

    // name="";
    // email="";
    // PhoneNumber="";
    // Password="";
    // confirmPassword="";
// printing in html empty string ;
document.getElementById("name").value;
document.getElementById("email").value;
document.getElementById("number").value;
document.getElementById("password").value;
document.getElementById("confirmPassword").value;//add empty string
    
});