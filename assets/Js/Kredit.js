
let card_btns = document.querySelectorAll('.credit-card .card-buttons button')
let sidebar = document.querySelector('.sidebar')
let third_head = document.querySelector('.third-head')
let second_head = document.querySelector('.second-head')
let credit_tel = document.querySelector('.credit-main-tel') 
for( let btn of card_btns){
  btn.onclick = () => {
    let actv = document.querySelector('.active')
    actv.classList.remove('active')
    btn.classList.add('active')
    let id = btn.id
    let div = document.querySelectorAll('.credit-info .credit-info1')
         for(let dv of div){
            if(dv.id===id){
                dv.classList.remove('d-none')
            }else{
                dv.classList.add('d-none')
            }
         }
  }
}
let card_btns_tel = document.querySelectorAll('.card-buttons-tel button')
for( let btntt of card_btns_tel){
  btntt.onclick = () => {
    let actvt = document.querySelector('.actives-tels')
    actvt.classList.remove('actives-tels')
    btntt.classList.add('actives-tels')
    let id = btntt.id
    let div_ts = document.querySelectorAll('.credit-info-tel .credit-info1-tel')
         for(let dv_ts of div_ts){
            if(dv_ts.id===id){
                dv_ts.classList.remove('d-none')
            }else{
                dv_ts.classList.add('d-none')
            }
         }
}
}