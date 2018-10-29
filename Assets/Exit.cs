using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Exit : MonoBehaviour {
	//public Button ExitB;

	/*void Start ()
	{
		ExitB.onClick.AddListener (() => {  
		Application.Quit ();
		});  
	}*/

	public void quit_app()
	{
		Debug.Log ("Quit");
		Application.Quit ();
	}
}
