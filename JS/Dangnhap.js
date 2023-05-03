function login(e){
 event.preventDefault();
 var email =document.getElementById("email").value;
 var password =document.getElementById("password").value;

var user = localStorage.getItem(username);
var data = JSON.parse(user);
if(user == null){
    alert("Vui lòng nhập Email Password")
}else if(email==data.email && password==data.password){
    alert("Đăng nhập thành công");
    window.location.href="pagehome.html"
}else{
    alert("Đăng nhập thất bại!!!");
}

}