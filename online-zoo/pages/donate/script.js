function openBurgerMenu() {
    document.getElementById("men-burg").style.transform = "translate(0px, 0px)"
}

function closeBurgerMenu() {
    document.getElementById("men-burg").style.transform = "translate(-100%, 0px)"
    document.getElementById("header-id").style.background = "#111115"
}

function headerWhite() {
    document.getElementById("header-id").style.background = "#FFFFFF"
}

function orangeLogoShow() {
    document.getElementById("orange-logo").style.transform = "translate(0px, 0px)"
}

/////////////

const fiveK = document.getElementById('5000')

const twoK = document.getElementById('2000')

const oneK = document.getElementById('1000')

const fiveH = document.getElementById('500')

const twoFiveH = document.getElementById('250')

const oneH = document.getElementById('100')

const fifty = document.getElementById('50')

const twentyFive = document.getElementById('25')

const amount = document.querySelector('#donation')
let value = '100'
amount.setAttribute('value', value)

///////

fiveK.addEventListener('click', function(){
    amount.value = fiveK.value
})
twoK.addEventListener('click', function(){
    amount.value = twoK.value
})
oneK.addEventListener('click', function(){
    amount.value = oneK.value
})
fiveH.addEventListener('click', function(){
    amount.value = fiveH.value
})
twoFiveH.addEventListener('click', function(){
    amount.value = twoFiveH.value
})
oneH.addEventListener('click', function(){
    amount.value = oneH.value
})
fifty.addEventListener('click', function(){
    amount.value = fifty.value
})
twentyFive.addEventListener('click', function(){
    amount.value = twentyFive.value
})

///////

amount.addEventListener('input', function(){
    if(amount.value == '5000') {
        fiveK.checked = true
    }
})

amount.addEventListener('input', function(){
    if(amount.value == '2000') {
        twoK.checked = true
    }
})

amount.addEventListener('input', function(){
    if(amount.value == '1000') {
        oneK.checked = true
    }
})

amount.addEventListener('input', function(){
    if(amount.value == '500') {
        fiveH.checked = true
    }
})

amount.addEventListener('input', function(){
    if(amount.value == '250') {
        twoFiveH.checked = true
    }
})

amount.addEventListener('input', function(){
    if(amount.value == '100') {
        oneH.checked = true
    }
})

amount.addEventListener('input', function(){
    if(amount.value == '50') {
        fifty.checked = true
    }
})

amount.addEventListener('input', function(){
    if(amount.value == '25') {
        twentyFive.checked = true
    }
})

amount.addEventListener('input', function(){
    if(amount.value == 0) {
        fiveK.checked = false
        twoK.checked = false
        oneK.checked = false
        fiveH.checked = false
        twoFiveH.checked = false
        oneH.checked = false
        fifty.checked = false
        twentyFive.checked = false
    }
})