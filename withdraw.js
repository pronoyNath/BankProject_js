document.getElementById('btn-withdraw').addEventListener('click',function(){
    let withdrawField = document.getElementById('user-withdraw');
    let withdrawFieldString = withdrawField.value;
    let withdrawFieldAmount = parseFloat(withdrawFieldString);
    withdrawField.value = '';

    let withdrawTk = document.getElementById('withdraw-Tk');
    let withdrawAmountString = withdrawTk.innerText;
    let withdrawAmount = parseFloat(withdrawAmountString);


    let balanceElement = document.getElementById('balance');
    let balanceAmountString = balanceElement.innerText;
    let balanceAmount = parseFloat(balanceAmountString);
    if(isNaN(withdrawFieldAmount)){
        alert("Enter a Valid Number.");
        return;
    }
    else if(withdrawFieldAmount<0){
        alert("Please enter a valid number.");
        return;
    }
    else if(balanceAmount>=withdrawFieldAmount){
        withdrawTk.innerText = withdrawFieldAmount + withdrawAmount;
        balanceElement.innerText = balanceAmount - withdrawFieldAmount;
        return;
    }
    else{
        alert("Baap er bank a eto TK nai...");
    }
    
})