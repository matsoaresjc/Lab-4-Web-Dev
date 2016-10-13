//Prepared by M.Soares

window.onload = function()
{
	document.getElementById("boundary1").addEventListener("mouseover",borderHover);
}



function borderHover()
{
	document.getElementById("boundary1").className = " boundary youlose";
}