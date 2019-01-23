

var users = [];

function userExist(username) {
    for (var i = 0; i < users.length; i++) {  
        if(users[i].username == username) {
            return users[i]
}
    }
    return false;
}


function obj(username, password) {

    var obj = {

        username: username,
        password: password
    }

    return obj;
}


function SignUp() {
    var username = document.getElementById("userreg").value
    var password = document.getElementById("passreg").value
    var repeatpassword = document.getElementById("passreg-repeat").value

    if (username == "" || password == "") {
        document.getElementById("checkreg").innerHTML = "Username and password are required."
    }
    else if (password != repeatpassword) {
        document.getElementById("checkreg").innerHTML = "Passwords do not match."

    }

    else {
        document.getElementById("checkreg").innerHTML = "Registered Successfuly!"




        var x = password
        var y = username

        users.push(obj(y, x));

    }



}



function Login() {

    var username = document.getElementById("username").value
    var password = document.getElementById("psw").value


    if (username == "" || password == "") {
        document.getElementById("check").innerHTML = "Username and password are required."
    }

    for (var i = 0; i < users.length; i++) {  
        if(users[i].username == username) {
            var currentUser = users[i]
        }

}
if(!currentUser) {
    document.getElementById("check").innerHTML = "User not exist"

}
else if(currentUser.password != password) {
    document.getElementById("check").innerHTML = "Password not exist"
}
else {
    document.getElementById("check").innerHTML = "Logged in!"
}
    
}

function removeUser() {
    var username = document.getElementById("removeuser").value
    var password = document.getElementById("removepass").value
    var existUser = userExist(username)
    var indexUser = users.indexOf(existUser);
    if (username == "" || password == "") {
        document.getElementById("checkremove").innerHTML = "Username and password are required."
    }

    else {
        if(indexUser == -1) {
            document.getElementById("checkremove").innerHTML = "Username does not exist." 
        }
        else { 
           if (password == existUser.password) {
            users.splice(indexUser,1);
            document.getElementById("checkremove").innerHTML = "Username has been removed."

           }
           else {
            document.getElementById("checkremove").innerHTML = "Password incorrect."
           }
        }
    }
}
  


