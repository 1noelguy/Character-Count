const inpuT = document.querySelector("textarea");
const contnt = document.querySelector("span");

let maxLim = 250;

contnt.textContent = maxLim;

inpuT.addEventListener('input',()=>{
    let currcount = maxLim - inpuT.value.length;
    contnt.textContent = currcount;

    if (contnt.textContent <= 0) {
        contnt.style.color = 'red';
        contnt.style.border = 'double';

    } else {

        contnt.style.color = 'azure';
        contnt.style.border = 'dotted';
    
    }
})


