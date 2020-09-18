import './app2.css'
import $ from 'jquery'

$('.tabBar').on('click','li',(e)=>{
   let index=$(e.currentTarget).index()


    $('.content>li').eq(index).removeClass('hide').siblings().addClass('hide')
    $('.tabBar >li').toggleClass('selected')
})