let submit = document.querySelector(".btn");
let form = document.querySelector('.text-center')
let balancePage = document.getElementById('balance-page')
let deposite = document.getElementById('add-deposite')
let withdrow = document.getElementById('left-withdrow')

submit.addEventListener('click', (e) =>{
    e.preventDefault()
    form.style.display = "none"
    balancePage.style.display = "block"
})

deposite.addEventListener('click', () =>{
    let depositeInput = Number(document.getElementById('deposite-input').value);
    if(depositeInput == ""){
        alert(`plz type any Number`)
    }else{
        amount('deposite-amount')
        amount('balance-amount')
        function amount(money){
            let current = Number(document.getElementById(money).innerText)
            let currentTotal = depositeInput + current
            document.getElementById(money).innerText = currentTotal
        }
        document.getElementById('deposite-input').value = ""
    }
})

withdrow.addEventListener('click', () =>{
    let depositeInput = parseFloat(document.getElementById('withdrow-input').value);
    if(depositeInput == ""){
        alert(`plz type any Number`)
    }else{
        let withdrowBalance =parseFloat( document.getElementById('withdrow-amount').innerText)
        let currentBlalance = depositeInput + withdrowBalance
        document.getElementById('withdrow-amount').innerText = currentBlalance
        let poshBalance = parseFloat(document.getElementById('balance-amount').innerHTML)
        let totaleBalance = poshBalance - depositeInput
        document.getElementById('balance-amount').innerText = totaleBalance
        document.getElementById('withdrow-input').value = ""
    }
})






















// let submit = document.querySelector(".btn");
// let form = document.querySelector('.text-center')
// let balancePage = document.getElementById('balance-page')
// let deposite = document.getElementById('add-deposite')
// let withdrow = document.getElementById('left-withdrow')
// let depositeInput = document.getElementById('deposite-input')
// let withdrowInput = document.getElementById('withdrow-input')
// let depositeAmount = document.getElementById('deposite-amount')
// let withdrowAmount = document.getElementById('withdrow-amount')
// let balanceAmount = document.getElementById('balance-amount')


// submit.addEventListener('click', (e) =>{
//     e.preventDefault()
//     form.style.display = "none"
//     balancePage.style.display = "block"
    
// })



// ////// money deposite................

// deposite.addEventListener('click', () =>{
    
//     let poshDeposit = depositeInput.value;
//     let depositNumber = parseFloat(poshDeposit)
//     if(poshDeposit == ""){
//         alert(`plz type any Number`)
//     }else{
//         // let depositBalance = depositeAmount.innerText
//         // let depositBalanceNumber = parseFloat(depositBalance)
//         // let currentBlalance = depositBalanceNumber + depositNumber
//         // depositeAmount.innerText = currentBlalance

//         amount('deposite-amount')
//         amount('balance-amount')

//         // let poshBalance = balanceAmount.innerHTML;
//         // let balanceNumber = parseFloat(poshBalance)
//         // let totaleBalance = depositNumber + balanceNumber
//         // balanceAmount.innerText = totaleBalance

//         function amount(money){
//         let current = document.getElementById(money).innerText
//         let currentNumber = parseFloat(current);
//         let currentTotal = depositNumber + currentNumber

//         document.getElementById(money).innerText = currentTotal
//         }

//         depositeInput.value = ""
    
//     }
    
// })




////// money withdraw................




withdrow.addEventListener('click', () =>{
    let poshWithdrow = withdrowInput.value;
    let withdrownumber = parseFloat(poshWithdrow)

    if(poshWithdrow == ""){
        alert(`plz type any Number`)
    }else{
        let withdrowBalance = withdrowAmount.innerText
        let withdrowBalanceNumber = parseFloat(withdrowBalance)
        let currentBlalance = withdrownumber + withdrowBalanceNumber

        withdrowAmount.innerText = currentBlalance
    

        let poshBalance = balanceAmount.innerHTML;
        let balanceNumber = parseFloat(poshBalance)
        let totaleBalance = balanceNumber - withdrownumber

        balanceAmount.innerText = totaleBalance
        withdrowInput.value = ""
    }
    
})


/////// or.................


// function withdrawMoney(){
//     let withdrawAmount =  document.getElementById("withdraw-amount").value
//     let withdrawAmountNumber  = parseFloat(withdrawAmount)

//     updateWithdraw("current-withdraw")
//     balanceNumber("current-balance")

//     document.getElementById("withdraw-amount").value = " "

//     function updateWithdraw(id){
//         let withdraw  = document.getElementById(id).innerText
//         let withdrawNumber =parseFloat(withdraw)
//         let withdrawtotal = withdrawNumber + withdrawAmountNumber
//         document.getElementById(id).innerText = withdrawtotal
        

//     }
//     function balanceNumber(id){
//             let balance  = document.getElementById(id).innerText
//             let balanceNumber =parseFloat(balance)
//             let withdrawtotal = balanceNumber - withdrawAmountNumber
//             document.getElementById(id).innerText = withdrawtotal
            

//         }

// }
