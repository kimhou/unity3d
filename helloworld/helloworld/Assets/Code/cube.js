#pragma strict

function Start () {

}

var MoveSpeed = 10;
var RotationSpeed = 20;
function Update () {
	if(Input.GetKey(KeyCode.W)){
		this.transform.Translate(Vector3.forward*Time.deltaTime*MoveSpeed); 
	}else if(Input.GetKey(KeyCode.S)){
		this.transform.Translate(Vector3.forward*Time.deltaTime*-MoveSpeed);
	}
	if(Input.GetKey(KeyCode.A)){
		this.transform.Rotate(Vector3.up*Time.deltaTime*RotationSpeed);
	}else if(Input.GetKey(KeyCode.D)){
		this.transform.Rotate(Vector3.up*Time.deltaTime*-RotationSpeed);
	}
}