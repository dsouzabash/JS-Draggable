/**
 * 
 */
var randNum = [];
/* Function called when body loaded */
function init(){
	document.getElementById('Total').innerHTML = '0';
	setCanvasText();
}

/*
 * Sets the text inside the canvas
 */
function setCanvasText(){
	for(var i=0; i< document.getElementsByClassName("numberCanvas").length;i++){
		var c=document.getElementsByClassName("numberCanvas")[i];
		var ctx=c.getContext("2d");
		ctx.font="20px Georgia";
		ctx.textAlign = 'center';
		if(i==0)
			ctx.fillText("+", 25, 30);
		else{
			randNum[i] = randMath(20,1);
			ctx.clearRect(0,0,50,50);
			ctx.fillText(randNum[i], 25, 30);
		}	
	}
}

/*
 * Sets random numbers between 1 and 20
 */
function randMath(max, min) {
    return Math.floor((Math.random() * max) + min);
}

/*
 * Function called to prevent default behavior on event fire
 */
function allowDrop(ev)
{
	ev.preventDefault();
}

/*
 * Function called when element is dragged
 */
function drag(ev)
{
	ev.dataTransfer.setData("Text",ev.target.id);
}

/*
 * Function called when the dragged element is dropped on an element which allows drop
 */
function drop(ev)
{
	ev.preventDefault();
	var data=ev.target.id;
	document.getElementById('Total').innerHTML = Number(document.getElementById('Total').innerHTML) + Number(randNum[data]);
	setCanvasText();
}