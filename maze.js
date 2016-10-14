//Prepared by M.Soares

window.onload = function()
{
	var flag = false; // Flag to control whether a wall has been hit.
	//var clicked = false; // Flag to control wheter the start button has ben clicked.
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
	flag = true;
	var bound = document.querySelectorAll(".boundary");
	

	for (i = 0;i < bound.length;i++)
	{
			bound[i].className ="boundary youlose";
	}

}


function start()
{
flag = false;
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
		alert("Sorry,you lost.");
	} else{
		alert("You win!");
	}


}


