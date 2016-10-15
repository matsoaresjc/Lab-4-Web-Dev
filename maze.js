//Prepared by M.Soares

window.onload = function()
{
	var flag = false; // Flag to control whether a wall has been hit.
	var bound = document.querySelectorAll(".boundary");

	document.getElementById("start").addEventListener("click",restart);
	document.getElementById("start").addEventListener("mouseover",start);
	document.getElementById("end").addEventListener("mouseover",end);
	

	for (i = 0;i < bound.length;i++)
	{
		bound[i].addEventListener("mouseover",allborders);
	}
		 
		
}



//Turn all borders red once hovered over

function allborders()
{
	flag = true;
	var bound = document.querySelectorAll(".boundary");
	document.getElementById("status").textContent = "Sorry, you lost.";

	for (i = 0;i < bound.length;i++)
	{
			bound[i].className ="boundary youlose";
	}

}


function start()
{

flag = false;
document.getElementsByTagName("body")[0].addEventListener("mousemove",function(event)
	{
		coordinates(event);
    });

var bound = document.querySelectorAll(".boundary");

for (i = 0;i < bound.length;i++)
	{
			bound[i].classList.remove("you lose");
	}

}


function end()
{
	
	if(flag)
	{

		document.getElementById("status").textContent = "Sorry, you lost.";

	} else{
		document.getElementById("status").textContent = "You win!";
	}


}


function restart()
{

	window.location.reload();
	start();

}

function cheater()
{
	console.log("cheater!");
	var bound = document.querySelectorAll(".boundary");
	for (i = 0;i < bound.length;i++)
	{
			bound[i].className ="boundary youlose";
	}

	document.getElementById("status").textContent = "That's cheating!";

}

function coordinates(event)
{
	var x = event.clientX;
	var y = event.clientY;
	var coor = "Coordinates: (" + x + "," + y + ")";
	console.log(coor);

		//Offset values
		var maze = document.getElementById("maze");
		var mazeWidth = maze.offsetWidth;
		var mazeLeft = maze.offsetLeft;
		var mazeHeight = maze.offsetHeight;
		var mazeTop = maze.offsetTop;

		
		//End points of the maze

		var mazeEndX = parseInt(mazeLeft) + mazeWidth;
		var mazeEndY = parseInt(mazeTop) + mazeHeight;

		console.log("maze start x:" + mazeLeft);
		console.log("maze start y:" + mazeTop);
		console.log("maze end x:" + mazeEndX);
		console.log("maze end y:" + mazeEndY);


		//checking if the pointer is outside of the maze
		if(x < mazeLeft || y < mazeTop || y > mazeEndY || x > mazeEndX)
		{
			cheater();
		}

}