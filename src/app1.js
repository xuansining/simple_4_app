import  './app1.css'
import  $ from 'jquery'
let n=localStorage.getItem('n')
$('.number').text(n || 100)
$('.add').on('click',()=>{
    let num=parseInt($('.number').text())
    num+=1
    localStorage.setItem('n',num.toString())
    $('.number').text(num)
})
$('.increase').on('click',()=>{
    let num=parseInt($('.number').text())
    num-=1
    localStorage.setItem('n',num.toString())
    $('.number').text(num)
})
$('.mlu').on('click',()=>{
    let num=parseInt($('.number').text())

    num=num*2
    localStorage.setItem('n',num.toString())
    $('.number').text(num)
})
$('.divide').on('click',()=>{
    let num=parseInt($('.number').text())

    num=num/2
    $('.number').text(num)
    localStorage.setItem('n',num.toString())

})