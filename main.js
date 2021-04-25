canvas = document.getElementById('my_canvas');
ctx = canvas.getContext ("2d");
car1_width = 120;
car1_height = 70;

background_image = "car_canvas.jpg";

car1_image = "car1.png";

car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;

car2_image = "car2.jpg";

car2_x = 10;
car2_y = 90;

function add() {
	background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = background_image;   // load image

	car1_imgTag = new Image(); //defining a variable with a new image
	car1_imgTag.onload = uploadcar1; // setting a function, onloading this variable
	car1_imgTag.src = car1_image;   // load image

	car2_imgTag = new Image(); //defining a variable with a new image
	car2_imgTag.onload = uploadcar2; // setting a function, onloading this variable
	car2_imgTag.src = car2_image;   // load image
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
	ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
	ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}

        if(keyPressed == '85')//"u" is used as right//
		{
			u();
			console.log("u");
		}
		if(keyPressed == '68')//"d" is used as right//
		{
			d();
			console.log("d");
		}
		if(keyPressed == '76')//"l" is used as right//
		{
			l();
			console.log("l");
		}
		if(keyPressed == '82')//"r" is used as right//
		{
			r();
			console.log("key r");
		}
}
