if (localStorage.getItem('karts') === null) {
  localStorage.setItem('karts', JSON.stringify([]))
}
let btns = document.querySelectorAll('.card-info1 .card-a1 a')
console.log(btns)
for (let btn of btns) {
  btn.onclick = function (e) {
    e.preventDefault();
    let gimg = e.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src;
    let gtext = e.target.parentElement.parentElement.parentElement.children[0].innerHTML;
    let gtext1 = e.target.parentElement.parentElement.parentElement.children[1].innerHTML;
    let baskets = JSON.parse(localStorage.getItem('karts'))
    let exist = baskets.find(x => x.sekil === gimg)
    console.log(gimg)
    if (exist === undefined) {
      baskets.push({
        sekil: gimg,
        yazi: gtext,
        yazi1: gtext1,
        Count: 1
      })
    } else {
      exist.Count += 1
      document.getElementById('toaster2').style.opacity = '1'
      setTimeout(() => {
        document.getElementById('toaster2').style.opacity = '0'

      }, 1000)
    }
    localStorage.setItem('karts', JSON.stringify(baskets))
    document.getElementById('toaster').style.opacity = '1'
    setTimeout(() => {
      document.getElementById('toaster').style.opacity = '0'
    }, 1000)
    CountGalary();
  }
}

function CountGalary() {
  let baskets = JSON.parse(localStorage.getItem('karts'));
  document.getElementById('count').innerHTML = baskets.length
}
CountGalary();