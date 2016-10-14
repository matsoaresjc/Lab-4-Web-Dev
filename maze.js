//Prepared by M.Soares

window.onload = function()
{
	var flag = false; // Flag to control whether a wall has been hit.
	var bound = document.querySelectorAll(".boundary");
	
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
	var bound = document.querySelectorAll(".boundary");
	

	for (i = 0;i < bound.length;i++)
	{
			bound[i].className ="boundary youlose";
	}
}


function start()
{

var bound = document.querySelectorAll(".boundary");

for (i = 0;i < bound.length;i++)
	{
			bound[i].classList.remove("you lose");
	}

}


function end()
{
	flag = true;
	
	if(flag)
	{
		alert("You win!");
	} else{
		alert("Sorry you lost");
	}


}
