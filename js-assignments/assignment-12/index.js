let depositBtnEle=document.getElementById("deposit-btn")
let depositConEle=document.getElementById("deposit-con")
let withdrawBtnEle=document.getElementById("withdraw-btn")
let withdrawConEle=document.getElementById("withdraw-con")
let balanceBtnEle=document.getElementById("balance-btn")
let balanceConEle=document.getElementById("balance-con")
let historyBtnEle=document.getElementById("history-btn")
let historyConEle=document.getElementById("history-con")

depositBtnEle.addEventListener("click",()=>{
    depositConEle.classList.remove("deposit-con")
    withdrawConEle.classList.add("withdraw-btn")
    balanceConEle.classList.add("balance-con")
    historyConEle.classList.add("history-con")
})
withdrawBtnEle.addEventListener("click",()=>{
    depositConEle.classList.add("deposit-con")
    withdrawConEle.classList.remove("withdraw-con")
    balanceConEle.classList.add("balance-con")
    historyConEle.classList.add("history-con")
})
balanceBtnEle.addEventListener("click",()=>{
    depositConEle.classList.add("deposit-con")
    withdrawConEle.classList.add("withdraw-con")
    balanceConEle.classList.remove("balance-con")
    historyConEle.classList.add("history-con")
})
historyBtnEle.addEventListener("click",()=>{
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
    atm.makeDeposit()
}
function handleWithdrawal(){
    atm.makeWithDrawal()
}

function onClickShowBalance(){
    atm.showBalance()
}