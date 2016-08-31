
$(document).ready(function(){

//------generate math random number---//

 

//---take input and make it it = to guess_number.//


   

    var hot_number= Math.floor((Math.random() * 100) + 1);


   var guess_closeness=null

   guess_number=null

     var guesses_count=1

     var guessArray=[]

$('.new').click(function(){
   event.preventDefault();

      location.reload();	
})

$('.button').click(function(){

	event.preventDefault();


	var guess_number= parseInt( $('.text').val() ) 

   var guess_closeness= Math.abs(hot_number - guess_number)


   var same_number= guessArray.indexOf(guess_number)

    
     
			if (isNaN(guess_number)==true){alert('Only Numbers! ')

			return}

			 else if (same_number> -1) { alert('Already guessed that number!') }

			else if 
				(guess_number>100){

			           alert('numbers are 1 to 100!');
			           return}

			else {



			guesses_count+=1

			$('p #count').text(guesses_count)

			$('#guessList').append('<li>'+ guess_number +'</li>') ;

			guessArray.push(guess_number)

			

			how_hot();

			return

			}


     	

     	// if(guess_number = $.inArray(guess_number, guessArray)) {
     	// 	alert('number used already!')
     	// }

     	
     		if (guesses_count > 30){
     	alert('Im Sorry you tried too many times! Let\'s start over')
     	location.reload();}



     function how_hot(){


if(guess_closeness == 0 ){ $('h1').text('HEEEY Congratulations!!!Number was guessed! Start a new game!!').css("color","red");}

else if (guess_closeness >= 70 ){$('h1').text('Freezing....').css("color","#ccffff")}

else if (guess_closeness >= 60 ){$('h1').text('Very Cold..').css("color","#80ffff")}

else if (guess_closeness >=50 ){$('h1').text('Cold...').css("color","#00cccc")}

else if (guess_closeness >= 35 ){$('h1').text('Warm').css("color","#ffff66")}

else if (guess_closeness >= 25 ){$('h1').text('Little bit hot').css("color","#ff9966")}

else if (guess_closeness >= 15 ){$('h1').text('Its hot').css("color","#ff5500")}

else if (guess_closeness >= 10 ){$('h1').text('Very hot!').css("color","#cc2900")}

else if (guess_closeness >=5 ){$('h1').text('Its very very hot!').css("color","#ff3333")}

else if (guess_closeness <=4 ){$('h1').text('Hot hot hot hot hot!!!!').css("color","#ff0000")}



     }



     
})



       
    
   



//-- make guess_closeness= math.abs(hot_number-guessnumber)--

//-- as press enter or click append all guesses to an array with guess_array= input.append 

//--make it to if guess already exist , then alert. with $.inArray(guess_number, guess_array)


//-- if statements for the guess_closeness functionality so that each level of closeness
//-- has its own css styling and text inside div. 




	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


