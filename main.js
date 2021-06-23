canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

car1_width= 120;
car1_height= 70;

car1_x= 10;
car1_y= 10;

car2_width= 120;
car2_height= 70;

car2_x = 10;
car2_y= 100 ;

background_img = "track.png";
car1_img = "car1.png";
car2_img = "car2.png";

function add(){
    bg_img = new Image();
    bg_img.onload = uploadbackground;
    bg_img.src = background_img;

    car1_image = new Image();
    car1_image.onload = uploadcar1;
    car1_image.src = car1_img;
    
    car2_image = new Image();
    car2_image.onload = uploadcar2;
    car2_image.src = car2_img;

}

function uploadbackground(){
    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height);
}

function uploadcar1(){
    ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2(){
    ctx.drawImage(car2_image, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed= e.keyCode;
    console.log(keypressed);

    if(keypressed=="38"){
        car1_up();
        console.log("car 1 has moved up");
    }

    if(keypressed=="40"){
        car1_down();
        console.log("car 1 has moved down");
    }
    
    if(keypressed=="37"){
        car1_left();
        console.log("car 1 has moved left");
    }

    if(keypressed=="39"){
        car1_right();
        console.log("car 1 has moved right");
    }

    if(keypressed=="87"){
        car2_up();
        console.log("car 2 has moved up");
    }
 
    if(keypressed=="83"){
        car2_down();
        console.log("car 2 has moved down");
    }
    
    if(keypressed=="65"){
        car2_left();
        console.log("car 2 has moved left");
    }

    if(keypressed=="68"){
        car2_right();
        console.log("car 2 has moved right");
    }

    if(car1_x > 600){
        console.log("Car 1 has Won!");
        document.getElementById("result").innerHTML = "Car 1 has Won!";    
    }

    if(car2_x > 600){
        console.log("Car 2 has Won!");
        document.getElementById("result").innerHTML = "Car 2 has Won!"
    }
}

function car1_up(){
    if (car1_y > 0){
        car1_y = car1_y - 20;
        console.log("When up arrow key is pressed, x = " + car1_x + " And y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down(){
    if (car1_y <=500){
        car1_y = car1_y + 20;
        console.log("When down arrow key is pressed, x = " + car1_x + " And y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left(){
    if (car1_x > 0){
        car1_x = car1_x - 20;
        console.log("When left arrow key is pressed, x = " + car1_x + " And y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if (car1_x <=700){
        car1_x = car1_x + 20;
        console.log("When right arrow key is pressed, x = " + car1_x + " And y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up(){
    if (car2_y > 0){
        car2_y = car2_y - 20;
        console.log("When w key is pressed, x = " + car1_x + " And y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down(){
    if (car2_y <=500){
        car2_y = car2_y + 20;
        console.log("When s key is pressed, x = " + car1_x + " And y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){
    if (car2_x > 0){
        car2_x = car2_x - 20;
        console.log("When a key is pressed, x = " + car1_x + " And y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right(){
    if (car2_x <=700){
        car2_x = car2_x + 20;
        console.log("When d key is pressed, x = " + car1_x + " And y = " + car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}