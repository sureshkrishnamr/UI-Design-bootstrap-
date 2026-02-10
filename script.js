const input = document.getElementById("input1")

input.addEventListener("input", ()=>{
    input.value = input.value.replace(/^\s+/, '')
})