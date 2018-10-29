#pragma strict
static var score1 : int = 0;
static var score2 : int = 0; 
var theSkin : GUISkin;

static function Score(wallname : String){
	if (wallname== "leftWall"){
		score1+=1;

	}
	else {
		score2+=1;
	}
	Debug.Log("Player Score 1 "+score1);
	Debug.Log("Player Score 2 "+score2);

}
function OnGUI(){
	GUI.skin= theSkin;
	GUI.Label(new Rect(Screen.width/2-150+50 ,9,100,100),"" + score1);
	GUI.Label(new Rect(Screen.width/2+150-80 ,9,100,100),"" + score2);
	if(GUI.Button(new Rect(Screen.width/2-121/2, 10, 110, 30), "RESET")){
		score1=0;
		score2=0;

	}
	if(GUI.Button(new Rect(Screen.width/10, 10, 110, 30), "Menu")){
		score1=0;
		score2=0;
		Application.LoadLevel (0);
	}
}