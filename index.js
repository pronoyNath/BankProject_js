console.log("email: beta@baap.com  \n pass:beta");
document.getElementById('btn-sub').addEventListener('click',function(){
   
    let userEmail = document.getElementById('user-email').value;
    let userPassword = document.getElementById('user-password').value;

    if(userEmail === 'beta@baap.com' && userPassword === 'beta'){
        window.location.href = 'bank.html';
    }
    else{
        alert("Hey!!! Who are you!");
    }
})