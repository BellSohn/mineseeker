$(document).ready(function(){
    //alert('las minas!');

    var n = 0;
    var minute = 0;
    var tdvalue = 0;
    var accumulateValue = 0;
    var clickValue = 0;
    var sumatorio = [];
    var tdIds = [];

    
    var colum = document.querySelectorAll('td');
    
    function setIdAsRandom(min,max){
        return Math.floor((Math.random()*(max-min-1))+min);
    }
    //assign id to each td
    for(var g = 0;g<colum.length; g++){        
        colum[g].setAttribute('id',g);
    }

    //assign the mines , 25
    for(var t = 0;t<12;t++){        
        tdIds.push(setIdAsRandom(0,80));
        
    }
   
    var cells = document.querySelectorAll('td');    
    for(var f = 0;f<tdIds.length;f++){       
        cells[tdIds[f]].setAttribute('class','mine');
        
    }


    //assign values to the table  
    function random(min,max){       
        return Math.floor((Math.random()*(max-min-1))+min);       
    }    
    
   

window.setInterval(function(){
    $('.div-reloj').text(minute+ ":"+n);
    n++;
    if(n == 60){
        minute+=1;
        n = 0;
        $('.div-reloj').text(minute+ " : " +n);
    }
},1000);

 var cols = document.querySelectorAll('td'); 

    for(var i = 0;i<cols.length;i++){
        console.log(cols[i]);
        if(i <= 10 ){
            tdvalue = random(1,5);
        }else if( i> 10 && i<=20){
            tdvalue = random(1,6);
        }else{
            tdvalue = random(1,7);
        }
        cols[i].setAttribute('value',tdvalue);
        
    }

    //get the td with class 'mine', and assigg them value 0   
   tdMines = document.getElementsByClassName('mine');
   for(var l=0;l<tdMines.length;l++){        
        tdMines[l].setAttribute('value',0);
   }   
   
    $('#a13').click(function(){        
        var sqr_val = $(this).attr('value');
        console.log(sqr_val);
        $(this).css('background','green');
        $(this).css('border','2px yellow');
    });

    $('td').click(function(){      
        clickValue = parseInt($(this).attr('value')); 
        var classValue = $(this).attr('class');        
        
        if(classValue == 'mine' && clickValue == 0){        
            var todasMinas = document.querySelectorAll('tr > td.mine');        
           
            var mineImg = './resources/images/mine-icon.jpg';         
            
            $(this).css('background-image','url(' + mineImg + ')');
            $(this).css('background-repeat','no-repeat');
            $(this).css('background-color','red');
            for(var x = 0;x<todasMinas.length;x++){
                console.log(todasMinas[x]);
                if(todasMinas[x].getAttribute('class') == 'mine'){                    
                    
                    $(todasMinas[x]).css('background-image','url(' + mineImg + ')');
                    $(todasMinas[x]).css('background-repeat','no-repeat');
                    $(todasMinas[x]).css('background-color','red');                  
                    
                }
               
            }
            alert("GAME OVER!!, your score is : "+accumulateValue);
            $('.end-game').css('display','block');
                
            
        }else{            
            $(this).css('background','green');
            $(this).text(clickValue);
        }       
        
        accumulateValue = parseFloat(accumulateValue) + parseFloat(clickValue);        
        $('.spn-score').text(accumulateValue);
       
    });

    $('.end-game button').on('click',function(){
        location.reload(true);
    });
    
});