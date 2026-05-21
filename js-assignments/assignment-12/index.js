let depositBtnEle=document.getElementById("deposit-btn")
let depositConEle=document.getElementById("deposit-con")
let withdrawBtnEle=document.getElementById("withdraw-btn")
let withdrawConEle=document.getElementById("withdraw-con")
let balanceBtnEle=document.getElementById("balance-btn")
let balanceConEle=document.getElementById("balance-con")
let historyBtnEle=document.getElementById("history-btn")
let historyConEle=document.getElementById("history-con")
let table=document.getElementById("table")
let tableBody=document.getElementById("table-body")
let emptyHistory=document.getElementById("empty-view")

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

    tableBody.innerHTML=""
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
     
    tableBody.innerHTML=""
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

    tableBody.innerHTML=""
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
    
    const transactions=atm.transactionHistory
    if (transactions.length>0){
        table.classList.remove("table-view")
        emptyHistory.classList.add("empty-view")
        for (let each_transaction of transactions){
           let row= document.createElement("tr")
            let TT=document.createElement("td")
            let TA=document.createElement("td")
            let TB=document.createElement("td")
            TT.textContent=each_transaction.transactionType
            TA.textContent=each_transaction.transactionAmount
            TB.textContent=each_transaction.balance
                
            row.appendChild(TT)
            row.appendChild(TA)
            row.appendChild(TB)
            table.appendChild(row)
        }
         
    }
})
class Transaction {
    constructor(transactionType,transactionAmount,balance){
        this.transactionType=transactionType
        this.transactionAmount=transactionAmount
        this.balance=balance
    }
}

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
        this.mode="DEPOSIT"
        let enteredAmount=parseInt(this.depositEle.value)
        let updatedBalance=this.balance + enteredAmount
        this.balance=updatedBalance
        this.balanceEle.textContent= "Current Balance Rs." + updatedBalance
        const newTransaction=new Transaction(this.mode,enteredAmount,this.balance)
        const transactions=[...this.transactionHistory,newTransaction]
        this.transactionHistory=transactions
        this.depositEle.value=""
    }
    makeWithDrawal(){
        this.mode="WITHDRAW"
        let enteredAmount=parseInt(this.withdrawalEle.value)
        let updatedBalance=this.balance - enteredAmount
        this.balance=updatedBalance
        this.balanceEle.textContent="Current Balance Rs." + updatedBalance
        const newTransaction=new Transaction(this.mode,enteredAmount,this.balance)
        const transactions=[...this.transactionHistory,newTransaction]
        this.transactionHistory=transactions
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