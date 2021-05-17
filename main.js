canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 100;

car1_width = 120;
car1_height = 70;
car1_image = "car2.png";
car1_x = 10;
car1_y = 10;

background_image="race.jpg";

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	car1_imgTag = new Image();
	car1_imgTag.onload = uploadrover;
	car1_imgTag.src = rover_image;

    car2_imgTag = new Image();
	car2_imgTag.onload = uploadrover;
	car2_imgTag.src = rover_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}
function uploadcar1() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			car1_up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			car1_down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			car1_left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			car1_right();
			console.log("right");
		}

        if(keyPressed == '87')
        {
        car2_up();
        console.log("w");
        }
         if(keyPressed == '83')
         {
         car2_down();
         console.log("s");
         }
         if(keyPressed == '65')
         {
         car2_left();
         console.log("a");
         }
         if(keyPressed == '68')
         {
         car2_right();
         console.log("d");
         }
         }


         function car1_up()
		 {              
	    if(car1_y >=0)              
		{ car1_y = car1_y - 10; 
		console.log("When up arrow is pressed,  x = " + car1_x + " | y = " +car1_y);
		uploadBackground();  
		uploadcar1();
		} 
	}          
	function car1_down()          
	{ 
    if(car1_y <=500)
	{
    car1_y =car1_y+ 10;
	console.log("When down arrow is pressed,  x = " + car1_x + " | y = " +car1_y);                  
	uploadBackground();                   
	uploadcar1();              
}          
}          
function car1_left()          
{              
	if(car1_x >= 0)              
	{                  
	car1_x =car1_x - 10;                  
	console.log("When left arrow is pressed,  x = " + car1_x + " | y = " +car1_y);                  
	uploadBackground();                   
	uploadcar1();              
}          
}          
function car1_right()          
{ 
if(car1_x <= 700)              
{                  
	car1_x =car1_x + 10;                  
	console.log("When right arrow is pressed,  x = " + car1_x + " | y = " +car1_y);                  
	uploadBackground();                  
	uploadcar1();             
}          
}             
function car2_up() 
{
if(car2_y >=0) 	
{ 		car2_y = car2_y - 10;
	 	console.log("When up arrow is pressed,  x = " + car2_x + " | y = " +car2_y); 		 
		 uploadBackground(); 		 
		 uploadcar2(); 	
		} } 
		function car2_down() 
		{ 
    	if(car2_y <=500) 	{
 		car2_y =car2_y+ 10; 		
		 console.log("When down arrow is pressed,  x = " + car2_x + " | y = " +car2_y); 		
		 uploadBackground(); 		 
		 uploadcar2(); 	} } 
		 
		 function car2_left() { 	
			 if(car2_x >= 0) 	
			 { 		car2_x =car2_x - 10; 		
				console.log("When left arrow is pressed,  x = " + car2_x + " | y = " +car2_y); 		
				uploadBackground(); 		 uploadcar2(); 	} } 
				function car2_right() 
				{ 	if(car2_x <= 700) 	
					{ 		car2_x =car2_x + 10; 		
						console.log("When right arrow is pressed,  x = " + car2_x + " | y = " +car2_y); 		
						uploadBackground(); 		
						uploadcar2();    } } 	                         