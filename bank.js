document.getElementById('btn-deposit').addEventListener('click',function(){
    let depInp = document.getElementById('user-deposit');
    let depInpValue = depInp.value;
    let depTk = document.getElementById('depTk');
    let depTkText = depTk.innerText;
    // depTk.innerText = '5';
    // console.log(depTkText);
    // console.log(document.body);
    depInp.value = ''; 
    let depTkTextAmount = parseFloat(depTkText);
    let depInpValueAmount = parseFloat(depInpValue);
    if(isNaN(depInpValueAmount)){
        alert("Enter a Valid Number.");
        return;
    }
    else if(depInpValueAmount<0){
        alert("Please enter a valid number.");
        return;
    }
    
    let currentMoney = depTkTextAmount + depInpValueAmount; //why don't work if i use variable "depTkText"
    depTk.innerText = currentMoney;
    

    let balance = document.getElementById('balance');
    let balanceText = balance.innerText;
    let prevbalanceAmount = parseFloat(balanceText);
    let totalBalance = depInpValueAmount + prevbalanceAmount;
    balance.innerText = totalBalance;


    
})