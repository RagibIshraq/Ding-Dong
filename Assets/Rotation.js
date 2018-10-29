#pragma strict

var RotateLeft : KeyCode;
var RotareRight : KeyCode;
function Update () {
	if(Input.GetKey(RotateLeft))
	transform.Rotate (new Vector3 (0, 0, -5));
	else if(Input.GetKey(RotareRight))
	transform.Rotate (new Vector3 (0, 0, 5));
	else transform.Rotate (new Vector3 (0, 0, 0));
}