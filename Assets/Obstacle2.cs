using UnityEngine;
using System.Collections;

public class Obstacle2 : MonoBehaviour {

	private bool _minigunActive = false;

	bool flag;
	float t; 
	int c=-1;

	private void Start ()
	{

		flag = false;
	}


	private void Update ()
	{

		t = 2;// Random.Range (5, 7);
		Debug.Log ("t ="+t);

		if (flag) {
			GetComponent<Renderer>().enabled = true;
			GetComponent<Collider2D>().enabled = true;
			StartCoroutine (wait1 ());
		}
		if (!flag) {
			GetComponent<Renderer>().enabled = false;
			GetComponent<Collider2D>().enabled = false;
			StartCoroutine (wait2 ());
		}

	}

	IEnumerator wait1()
	{
		//Debug.Log (t);
		yield return new WaitForSeconds (t);
		flag = false;
	}
	IEnumerator wait2()
	{

		//Debug.Log (t);
		yield return new WaitForSeconds (t);
		flag = true;
	}
}
