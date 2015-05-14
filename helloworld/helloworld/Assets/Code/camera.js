#pragma strict

var speed = 5;
function Start () {

}

function Update () {
	//var x = Input.GetAxis("Horizontal");//*Time.deltaTime * 5;
	//var z = Input.GetKey("Vertical")*Time.deltaTime * 5;
	var directX = Input.GetAxis('Horizontal');
	var directY = Input.GetAxis('Vertical');
	transform.Translate(directX * Time.deltaTime * speed, 0, directY * Time.deltaTime * speed);
	//var x = 0;
	print(directX);
}