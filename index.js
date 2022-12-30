var images = ['images/dice1.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'];

document.querySelector(".refresh-button").addEventListener("click", game);


/*function image_update_1(){
    var randomNumber1 = (Math.random() * 6);
    randomNumber1 = Math.floor(randomNumber1);
    var img_info_1 = document.querySelector("img.one");
    img_info_1.setAttribute('src',images[randomNumber1]);


}

function image_update_2(){
    var randomNumber2 = (Math.random() * 6);
    randomNumber2 = Math.floor(randomNumber2);
    var img_info_2 = document.querySelector("img.two");
    img_info_2.setAttribute('src',images[randomNumber2]);
    

}*/

function game(){
   // image_update_1();
   // image_update_2();
    
    //Image 1 updater
    var randomNumber1 = (Math.random() * 6);
    randomNumber1 = Math.floor(randomNumber1);
    var img_info_1 = document.querySelector("img.one");
    img_info_1.setAttribute('src',images[randomNumber1]);
    
    
    //Image 2 updater
    var randomNumber2 = (Math.random() * 6);
    randomNumber2 = Math.floor(randomNumber2);
    var img_info_2 = document.querySelector("img.two");
    img_info_2.setAttribute('src',images[randomNumber2]);
    
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = "Player 1 Won";
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerText = "Player 2 Won";
    }
    else{
        document.querySelector("h1").innerText = "It's a draw";
    }
}