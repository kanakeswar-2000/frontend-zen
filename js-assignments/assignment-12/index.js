let depositBtnEle=document.getElementById("deposit-btn")
let depositConEle=document.getElementById("deposit-con")
let withdrawBtnEle=document.getElementById("withdraw-btn")
let withdrawConEle=document.getElementById("withdraw-con")
let balanceBtnEle=document.getElementById("balance-btn")
let balanceConEle=document.getElementById("balance-con")
let historyBtnEle=document.getElementById("history-btn")
let historyConEle=document.getElementById("history-con")

depositBtnEle.addEventListener("click",()=>{
    // button styling
    depositBtnEle.classList.add("active-button")
    withdrawBtnEle.classList.remove("active-button")
    balanceBtnEle.classList.remove("active-button")
    historyBtnEle.classList.remove("active-button")

    // actions display and removal
    depositConEle.classList.remove("deposit-con")
    withdrawConEle.classList.add("withdraw-con")
    balanceConEle.classList.add("balance-con")
    historyConEle.classList.add("history-con")
})
withdrawBtnEle.addEventListener("click",()=>{
    withdrawBtnEle.classList.add("active-button")
    depositBtnEle.classList.remove("active-button")
    balanceBtnEle.classList.remove("active-button")
    historyBtnEle.classList.remove("active-button")

    depositConEle.classList.add("deposit-con")
    withdrawConEle.classList.remove("withdraw-con")
    balanceConEle.classList.add("balance-con")
    historyConEle.classList.add("history-con")
})
balanceBtnEle.addEventListener("click",()=>{
    balanceBtnEle.classList.add("active-button")
    depositBtnEle.classList.remove("active-button")
    withdrawBtnEle.classList.remove("active-button")
    historyBtnEle.classList.remove("active-button")

    depositConEle.classList.add("deposit-con")
    withdrawConEle.classList.add("withdraw-con")
    balanceConEle.classList.remove("balance-con")
    historyConEle.classList.add("history-con")
})
historyBtnEle.addEventListener("click",()=>{
    historyBtnEle.classList.add("active-button")
    depositBtnEle.classList.remove("active-button")
    withdrawBtnEle.classList.remove("active-button")
    balanceBtnEle.classList.remove("active-button")

    depositConEle.classList.add("deposit-con")
    withdrawConEle.classList.add("withdraw-con")
    balanceConEle.classList.add("balance-con")
    historyConEle.classList.remove("history-con")
})
class Atm{
    constructor(mode,balance,transactionHistory){
        this.mode=mode
        this.balance=balance
        this.transactionHistory=transactionHistory
        this.depositEle=document.getElementById("deposit-amount")
        this.withdrawalEle=document.getElementById("withdrawal-amount")
        this.balanceEle=document.getElementById("balance-amount")
    }
    makeDeposit(){
         
        let updatedBalance=this.balance + parseInt(this.depositEle.value)
        this.balance=updatedBalance
        this.balanceEle.textContent= "Current Balance Rs." + updatedBalance
        this.depositEle.value=""
    }
    makeWithDrawal(){
        let updatedBalance=this.balance - parseInt(this.withdrawalEle.value)
        this.balance=updatedBalance
        this.balanceEle.textContent="Current Balance Rs." + updatedBalance
        this.withdrawalEle.value=""
    }
    showBalance(){
        this.balanceEle.textContent="Current Balance Rs." + this.balance
    }
}

const atm= new Atm("",0,[])

function handleDeposit(){
    depositConEle.classList.add("deposit-con")
    atm.makeDeposit()
}
function handleWithdrawal(){
    withdrawConEle.classList.add("withdraw-con")
    atm.makeWithDrawal()
}

function onClickShowBalance(){
    atm.showBalance()
}