function formFunction(){
    var compName = document.getElementById("name");
    var userEmail = document.getElementById("email");
    var dateBd = document.getElementById("date");
    var userSex = document.getElementById("sexo");

    var data = JSON.parse(localStorage.getItem("formData"));

    if(data == null){
        localStorage.setItem("formData", "[]");
        data = [];

    }

    var formRequests = {
        name: compName.value,
        email: userEmail.value,
        date: dateBd.value,
        sexo: userSex.value
    }

    data.push(formRequests);

    localStorage.setItem("formData", JSON.stringify(data));


}
