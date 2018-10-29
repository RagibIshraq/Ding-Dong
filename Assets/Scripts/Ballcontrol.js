#pragma strict
var ballspeed :float =100;
function Start () {
	yield WaitForSeconds(2);
	Go();
}

function OnCollisionEnter2D(colInfo : Collision2D) {
	if(colInfo.collider.tag=="Player"){
	GetComponent(Rigidbody2D).velocity.y=GetComponent(Rigidbody2D).velocity.y/2+colInfo.collider.GetComponent(Rigidbody2D).velocity.y/3;
		GetComponent(AudioSource).Play();
	}
}
function Restart(){
	GetComponent(Rigidbody2D).velocity.x=0;
	GetComponent(Rigidbody2D).velocity.y=0;
yield WaitForSeconds(0.5);
	transform.position.x=0;
	transform.position.y=0;
	Go();
}
function Go(){
	var randomNumber= Random.Range(0, 2);
	if (randomNumber<=0.5){
		GetComponent(Rigidbody2D).AddForce(new Vector2(ballspeed,10));
	}
	else{ 
		GetComponent(Rigidbody2D).AddForce(new Vector2(-ballspeed,-10));
	}
}