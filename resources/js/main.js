$(document).ready(function(){

    var numbers = [];
    //var copyNumbers = [];
    var arrLength = 0;
    
$('.btninsert').on('click',function(){
    //console.log('epale!!');
    var number = parseInt($('.numbers-field').val());
    numbers.push(number);
    arrLength = numbers.length;
    console.log(numbers);
    //console.log(arrLength);
    $('.numbers-field').val("");
    //console.log(arrLength);
    $('.display-results').append("<span class='spn-numbers'>"+numbers[arrLength-1]+"</span>")
    if(numbers.length == 5){
        $(this).prop('disabled',true);
        $('.minustomax').css('display','block');
        $('.maxtominus').css('display','block');
    }
});


    $('.minustomax').on('click',function(){
           //numbers = [45,2,3,14,11];
      let copyNumbers = numbers;
        $('.spn-numbers').text("");
        numbers = "";
        //arrLength = numbers.length;
        arrLength = copyNumbers.length;
        var aux = 0;
        for(let i = 0;i<arrLength-1;i++){
            for(let j = 0;j<arrLength;j++){                
                if(copyNumbers[j] > copyNumbers[j+1]){
                    let aux = copyNumbers[j];
                    copyNumbers[j] = copyNumbers[j+1];
                    copyNumbers[j+1] = aux;
                }
            }
        }
        //console.log(numbers);
        $('.display-results').append("<span class='spn-numbers'>"+copyNumbers+"</span>")
      
    });

    $('.maxtominus').on('click',function(){
          //numbers = [45,2,3,14,11];
        let copyNumbers = numbers;
        $('.spn-numbers').text("");
        numbers = "";
        arrLength = copyNumbers.length;
        var aux = 0;
        for(let i = 0;i<arrLength-1;i++){
            for(let j = 0;j<arrLength;j++){
                if(copyNumbers[j] > copyNumbers[j+1]){
                    copyNumbers[j] = copyNumbers[j];                   
                }
                if(copyNumbers[j] < copyNumbers[j+1]){
                    let aux = copyNumbers[j+1];
                    copyNumbers[j] = copyNumbers[j+1];
                    copyNumbers[j+1] = aux;
                }
            }
        }
        console.log(copyNumbers);
    });



});