const transactionsUI = document.querySelector('#transactions')
const incomeDisplay = document.querySelector('#money-plus')
const minusDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')

const dummyTransactions = [
    {
        id: 1,
        name: 'Bolo de brigadeiro',
        amount: -20
    },
    {
        id: 2,
        name: 'Salario',
        amount: 300
    },
    {
        id: 3,
        name: 'Torta de frango',
        amount: -10
    },
    {
        id: 4,
        name: 'Violão',
        amount: 150
    }
];
const addTransactionIntoDOM = (transaction) => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')
    li.classList.add(CSSClass)
    li.innerHTML = `${transaction.name} <span>${operator}R$${amountWithoutOperator}</span><button class="delete-btn">x</button>`

    transactionsUI.append(li)
}

const updateBalanceValues = () => {
    const transactionsAmount = dummyTransactions.map((transaction) => transaction.amount)
    const total = transactionsAmount
        .reduce((accumulator, item) => accumulator + item, 0)
        .toFixed(2)

    const income = transactionsAmount
        .filter(item => item > 0)
        .reduce((accumulator, item) => accumulator + item,0)
        .toFixed(2)
    
    const expense = transactionsAmount
        .filter(item => item < 0)
        .reduce((accumulator, item) => accumulator + item,0)
        .toFixed(2)

    incomeDisplay.innerHTML = `R$ ${income}`
    minusDisplay.innerHTML = `R$ ${expense}`

    balanceDisplay.innerHTML = `R$ ${total}`

}
updateBalanceValues()

const init = () => {
    dummyTransactions.forEach((transaction, index) => {
        addTransactionIntoDOM(transaction)
    })
    console.log(dummyTransactions)
}
init()