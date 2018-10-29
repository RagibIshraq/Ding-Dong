#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D){
	if(hitInfo.name == "Ball"){
	 var wallname = transform.name;
	 GetComponent(AudioSource).Play();
	 GameManager.Score(wallname);
	 hitInfo.gameObject.SendMessage("Restart");
	}

}