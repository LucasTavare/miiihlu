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

$('.sb1').waypoint(
    function(direcao){
        if(direcao =="down"){
            $('.p').addClass('animate__animated animate__fadeInUp')
            $('.i1').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        } if(direcao =="up"){
            $('.p').removeClass('animate__animated animate__fadeInUp')
            $('.i1').removeClass('animate__animated animate__fadeInUp animate__delay-1s')
        }
    },{
    
    
        offset : '97%'
    })

$('.sb2').waypoint(
    function(direcao){
        if(direcao =="down"){
            $('.p2').addClass('animate__animated animate__fadeInUp')
            $('.i2').addClass('animate__animated animate__fadeInUp animate__delay-1s')
        } if(direcao =="up"){
            $('.p2').removeClass('animate__animated animate__fadeInUp')
            $('.i2').removeClass('animate__animated animate__fadeInUp animate__delay-1s')
        }
    },{
    
    
        offset : '98%'
    })
    
    $('.sb3').waypoint(
        function(direcao){
            if(direcao =="down"){
                $('.p3').addClass('animate__animated animate__fadeInUp')
                $('.i3').addClass('animate__animated animate__fadeInUp animate__delay-1s')
            } if(direcao =="up"){
                $('.p3').removeClass('animate__animated animate__fadeInUp')
                $('.i3').removeClass('animate__animated animate__fadeInUp animate__delay-1s')
            }
        },{
        
        
            offset : '98%'
        })
