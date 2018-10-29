#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var rb: Rigidbody;
var speed : float =10;
function Start(){
	rb = GetComponent.<Rigidbody>();
}
function Update () {
	if(Input.GetKey(moveUp)){
		rb.velocity.y= speed;
	}
}