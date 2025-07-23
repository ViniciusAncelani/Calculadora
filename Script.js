let bttns = document.querySelectorAll(".buttons")
let vsr = document.getElementById("visor")
let operator = document.querySelectorAll("#Operator")
let Apagar = document.getElementById("Apgr")

vsr.style.fontSize = "20px"
vsr.style.textAlign = "center"

bttns.forEach(bttn => {
    bttn.addEventListener("click", () => {
        
        const stringNum = bttn.innerHTML;
        
        if(vsr.innerHTML === "0") {
            vsr.innerHTML = stringNum
        } else {
            vsr.innerHTML += stringNum
        }
    })
})


let realNum = Number(stringNum.value)

function clean() {
    vsr.innerHTML = ""
}

function lastOne() {
    let CurrentValue = vsr.innerText
    let NewValue = CurrentValue.slice(0, -1);
    vsr.innerText = NewValue
}

function point() {

    let decimal = document.getElementById("point")
    
    if(point.checked == true) {
        let Decimal = parseFloat(realNum.value)
    }
}