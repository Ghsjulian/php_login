export function $(selector){
  return document.querySelector(selector);
}

export function server(url,name,email,password,action){
var form_data = new FormData();
 form_data.append('action', action);
 form_data.append('user_name', name);
 form_data.append('user_email', email);
 form_data.append('user_password', password);
    fetch(`${url}`, {
        method:"POST",
        body:form_data
    }).then(function(response){
        return response.json();
    }).then(function(data){
      if(data.stattus == "Registration"){
document.getElementById('_error').classList.remove("_error");
document.getElementById('_error').classList.add("_success");
document.getElementById('_error').textContent = data.message;
window.location.href = 'login.html';
  } else if(data.stattus == "Login"){
document.getElementById('_error').classList.remove("_error");
document.getElementById('_error').classList.add("_success");
document.getElementById('_error').textContent = data.message;
window.location.href = 'home/index/';
  } else {
//        alert(data.message);
document.getElementById('_error').classList.remove("_success");
document.getElementById('_error').classList.add("_error");
document.getElementById('_error').textContent = data.message;
      }
    });
}

