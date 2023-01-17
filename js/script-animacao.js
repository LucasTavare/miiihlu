$('.img-logo').waypoint(function(direcao){
    if(direcao =="down"){
        $('.logo').addClass('animate__animated animate__fadeInUp animate_delay-1s ')
        
    } if(direcao =="up"){
        $('.logo').removeClass('animate__animated animate__fadeInUp animate__delay-1s')
        
    }
},{


    offset : '90%'
})

$('.vantagens').waypoint(
function(direcao){
    if(direcao =="down"){
        $('.vantagem1').addClass('animate__animated animate__fadeInUp')
        $('.vantagem2').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('.vantagem3').addClass('animate__animated animate__fadeInUp animate__delay-2s')
        
    } if(direcao =="up"){
        $('.vantagem1').removeClass('animate__animated animate__fadeInUp')
        $('.vantagem2').removeClass('animate__animated animate__fadeInUp animate__delay-1s')
        $('.vantagem3').removeClass('animate__animated animate__fadeInUp animate__delay-2s')
        
    }
},{


    offset : '97%'
})

