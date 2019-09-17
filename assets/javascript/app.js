
$('#start').on('click', function(){
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
})

var questions =[{
        question:" What percent of the population is quirkless?",
        answers:["1%","10%","15%","20%"],
        correctAnswer:"20%"
    },{
        question:"who is the Symbol of Peace?",
        answers:["Midnight","Endeavor","All Might","Mirio Togata"],
        correctAnswer:"All Might"
    },{
        question:"At what time is Tokoyami at his strongest?",
        answers:["Dawn","Day","Night","Dusk"],
        correctAnswer:"Night"
    },{
        question:"Who does Toga have a crush on?",
        answers:["Lida","Midoriya","Todoroki","Bakugo"],
        correctAnswer:"Midoriya"
    },{
        question:"Which successor of One For All is Izuku Midoriya?",
        answers:["Ninth","Tenth","Seventh","Second"],
        correctAnswer:"Ninth"
    },{
        question:"What is the hero name of Iida's older brother?",
        answers:["Yakuza","Tenya","Turbo","Ingenium"],
        correctAnswer:"Ingenium"
    },{
        question:"Why does Uraraka wish to be a hero??",
        answers:["To save as many lives as possible","To be respected and admired","To support her family financially","To be loved and cherished forever"],
        correctAnswer:"To support her family financially"
    },{
        question:"What is Shigaraki’s quirk?",
        answers:["Fire","Rearrangement","Decay","Destruction"],
        correctAnswer:"Decay"
    },{
        question:"What punch does All Might use to defeat All For One?",
        answers:["Global Smash","American Smash","Planetary Smash","United States Of Smash"],
        correctAnswer:"United States Of Smash"
    },{
        question:"What adjective does Aoyama use to describe himself the most?",
        answers:["Sparkling","Dull","Explosive","Glowing"],
        correctAnswer:"Sparkling"
    }];

    var game = {
        correct: 0,
        incorrect: 0,
        counter: 120,
        countdown: function(){
            game.counter--;
            $('#counter').html(game.counter);
            if(game.counter<=0){
            console.log("time is up!");
            game.done();
            }
        } ,
        start: function(){
            timer = setInterval(game.countdown,1000);
            $('#subwrapper').prepend('<h2> Time Remaining : <span id ="counter">120</span> Seconds</h2>');
            $('#start').remove();
        for(var i = 0; i<questions.length;i++){
        $('#subwrapper').append('<h2>'+ questions[i].question+'</h2');
        for(var j =0; j<questions[i].answers.length;j++){
            $('#subwrapper').append("<input type='radio' name ='question-"+i+"'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
        }    }
        $('#subwrapper').append('<br><button id= "end"> Done </button>');

        },
            done: function(){
            $.each($('input[name = "question-0"]:checked'),function(){
                if($(this).val()== questions[0].correctAnswer){
                    game.correct++;
            
                }else {
                    game.incorrect++;
                }
            });
            $.each($('input[name = "question-1"]:checked'),function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                
                }else {
                    game.incorrect++;
                }
            });
            $.each($('input[name = "question-2"]:checked'), function(){
                if ($(this).val()== questions[2].correctAnswer){
                    game.correct++;
                
                }else {
                    game.incorrect++;
                }
            });
            $.each($('input[name = "question-3"]:checked'),function(){
                if($(this).val()==questions[3].correctAnswer){
                    game.correct++;
                
                }else {
                    game.incorrect++;
                }
            });
            $.each($('input[name = "question-4"]:checked'),function(){
                if($(this).val()==questions[4].correctAnswer){
                    game.correct++;
                
                }else {
                    game.incorrect++;
                }
            });
            $.each($('input[name = "question-5"]:checked'),function(){
                if($(this).val()==questions[5].correctAnswer){
                    game.correct++;
                
                }else {
                    game.incorrect++;
                }
            });
            $.each($('input[name = "question-6"]:checked'),function(){
                if($(this).val()==questions[6].correctAnswer){
                    game.correct++;
                
                }else {
                    game.incorrect++;
                }
            });
            $.each($('input[name = "question-7"]:checked'),function(){
                if($(this).val()==questions[7].correctAnswer){
                    game.correct++;
                
                }else {
                    game.incorrect++;
                }
            });
            $.each($('input[name = "question-8"]:checked'),function(){
                if($(this).val()==questions[8].correctAnswer){
                    game.correct++;
                
                }else {
                    game.incorrect++;
                }
            });
           
            $.each($('input[name = "question-9"]:checked'),function(){
                if($(this).val()==questions[9].correctAnswer){
                    game.correct++;
                
                }else {
                    game.incorrect++;
                }
            });
            this.result();
            

        },
        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();
            $('#subwrapper').html("<h2>All done!</h2>");
            $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3>Incorrect Answers: "+this.correct+"</h3>");
            $('#subwrapper').append("<h3> Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
}
}
        

    
