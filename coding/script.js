var question1 = document.getElementById('q1');
var question2 = document.getElementById('q2');
var question3 = document.getElementById('q3');
var question4 = document.getElementById('q4');
var question5 = document.getElementById('q5');
var ans1 = document.getElementById("a1");
var image1 = document.getElementById("arrowDown1");
var ans2 = document.getElementById("a2");
var image2 = document.getElementById("arrowDown2");
var ans3 = document.getElementById("a3");
var image3 = document.getElementById("arrowDown3");
var ans4 = document.getElementById("a4");
var image4 = document.getElementById("arrowDown4");
var ans5 = document.getElementById("a5");
var image5 = document.getElementById("arrowDown5");

function myFunc1(){
    ans1.style.display = "block";
    image1.style.rotate = "180deg";
    question1.style.cursor = "pointer"
    question1.style.fontWeight = "800";

    ans2.style.display = "none";
    image2.style.rotate = "0deg";
    question2.style.fontWeight = "normal";

    ans3.style.display = "none";
    image3.style.rotate = "0deg";
    question3.style.fontWeight = "normal";

    ans4.style.display = "none";
    image4.style.rotate = "0deg";
    question4.style.fontWeight = "normal";

    ans5.style.display = "none";
    image5.style.rotate = "0deg";
    question5.style.fontWeight = "normal";
}

function myFunc2(){
    ans1.style.display = "none";
    image1.style.rotate = "0deg";
    question1.style.fontWeight = "normal";

    ans2.style.display = "block";
    image2.style.rotate = "180deg";
    question2.style.cursor = "pointer";
    question2.style.fontWeight = "800";

    ans3.style.display = "none";
    image3.style.rotate = "0deg";
    question3.style.fontWeight = "normal";

    ans4.style.display = "none";
    image4.style.rotate = "0deg";
    question4.style.fontWeight = "normal";

    ans5.style.display = "none";
    image5.style.rotate = "0deg";
    question5.style.fontWeight = "normal";
}

function myFunc3(){
    ans1.style.display = "none";
    image1.style.rotate = "0deg";
    question1.style.fontWeight = "normal";


    ans2.style.display = "none";
    image2.style.rotate = "0deg";
    question2.style.fontWeight = "normal";


    ans3.style.display = "block";
    image3.style.rotate = "180deg";
    question3.style.cursor = "pointer"
    question3.style.fontWeight = "800";

    ans4.style.display = "none";
    image4.style.rotate = "0deg";
    question4.style.fontWeight = "normal";


    ans5.style.display = "none";
    image5.style.rotate = "0deg";
    question5.style.fontWeight = "normal";

}

function myFunc4(){
    ans1.style.display = "none";
    image1.style.rotate = "0deg";
    question1.style.fontWeight = "normal";


    ans2.style.display = "none";
    image2.style.rotate = "0deg";
    question2.style.fontWeight = "normal";


    ans3.style.display = "none";
    image3.style.rotate = "0deg";
    question3.style.fontWeight = "normal";


    ans4.style.display = "block";
    image4.style.rotate = "180deg";
    question4.style.cursor = "pointer";
    question4.style.fontWeight = "800";

    ans5.style.display = "none";
    image5.style.rotate = "0deg";
    question5.style.fontWeight = "normal";

}

function myFunc5(){
    ans1.style.display = "none";
    image1.style.rotate = "0deg";
    question1.style.fontWeight = "normal";


    ans2.style.display = "none";
    image2.style.rotate = "0deg";
    question2.style.fontWeight = "normal";


    ans3.style.display = "none";
    image3.style.rotate = "0deg";
    question3.style.fontWeight = "normal";


    ans4.style.display = "none";
    image4.style.rotate = "0deg";
    question4.style.fontWeight = "normal";


    ans5.style.display = "block";
    image5.style.rotate = "180deg";
    question5.style.cursor = "pointer";
    question5.style.fontWeight = "800";
}



function noneAgain(){
    if(ans1.style.display=="block"){
        ans1.style.display="none";
        image1.style.rotate = "0deg";
        question1.style.cursor = "pointer";
        question1.style.fontWeight = "normal";
    }else if(ans2.style.display=="block"){
        ans2.style.display="none";
        image2.style.rotate = "0deg";
        question2.style.cursor = "pointer";
        question2.style.fontWeight = "normal";
    }else if(ans3.style.display=="block"){
        ans3.style.display="none";
        image3.style.rotate = "0deg";
        question3.style.cursor = "pointer";
        question3.style.fontWeight = "normal";
    }else if(ans4.style.display=="block"){
        ans4.style.display="none";
        image4.style.rotate = "0deg";
        question4.style.cursor = "pointer";
        question4.style.fontWeight = "normal";
    }else{
        ans5.style.display="none";
        image5.style.rotate = "0deg";
        question5.style.cursor = "pointer";
        question5.style.fontWeight = "normal";
    }
}
