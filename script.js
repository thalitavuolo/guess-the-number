const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1
let inputNumber = document.getElementById("inputNumber")
document.getElementById("btnTry").addEventListener("click", btnTryClick)

function btnTryClick(event) {
  event.preventDefault()

  if(Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen-01").classList.add("hide")
    document.querySelector(".screen-02").classList.remove("hide")
  }
  else {
    inputNumber.value = ""
  }
  xAttempts++
}

