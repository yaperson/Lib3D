{//////////////////////  Libraire Graphique sur Canvas  ///
//
//  Tracés Simplifiés sur un canvas Classique
//  avec l'origine en haut à gauche    (classique)
//  et l'axe des Y orienté vers le bas (classique)
//
///////////////////////////////////////////////////////////
}
{//===============================  Variables Globales  ===
var canvas1	= null;	// écran
var ctx1	= null;	// écran
}
{//==================================  Initialisations  ===
function	canvas_init	()	{
//
//  Initialiser le canvas
//  Appelé 1 seule fois au début du prog (onload)
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	canvas1 = document.getElementById('canvas1');
	ctx1    = canvas1.getContext('2d');
}// -------------------------------------------------------
}
{//================================  Outils Graphiques  ===
function	canvas_clear				  ( color )	{
//
// Effacer le canvas couleur blanche
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	ctx1.fillStyle = color ;
	ctx1.fillRect(0, 0, ctx1.canvas.width, ctx1.canvas.height);
}// -------------------------------------------------------
function	canvas_cercle	( x ,y , r,     color )	{
//
// Tracer un cercle
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	ctx1.beginPath();
	ctx1.arc( x,y,r, 0, 2*Math.PI, false);	// Forme Dessin
	ctx1.fillStyle = color ;		// Définir le Remplissage
	ctx1.fill();	               	// Tracer  le Remplissage
	ctx1.lineWidth   = 1;			// Epaisseur du trait
	ctx1.strokeStyle = color ;		// Définir le contour
	ctx1.stroke();					// Tracer  le contour
	ctx1.closePath();
}// -------------------------------------------------------
function	canvas_rectangle( x ,y , dx,dy, color )	{
//
// Tracer un rectangle
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	ctx1.beginPath();
	ctx1.fillStyle = color ;		// Remplissage
	ctx1.rect( x,y , dx,dy );
	ctx1.fill();
	ctx1.lineWidth = 1;
	ctx1.strokeStyle = 'red';
	ctx1.stroke();				// Tracer le contour
	ctx1.closePath();
}// -------------------------------------------------------
function	canvas_point	( x ,y ,        color )	{
//
// Tracer un point (petit cercle)
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	canvas_cercle(x,y,2,color);
}// -------------------------------------------------------
function	canvas_segment	( x1,y1, x2,y2, color )	{   
//
//  Tracer un segment
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	ctx1.beginPath();
	ctx1.moveTo(x1,y1);				// Déplacer leStylo
	ctx1.lineTo(x2,y2);				// Tracer avec Stylo
	ctx1.strokeStyle = color ;		// Définir le contour
	ctx1.stroke();					// Tracer  le contour
	ctx1.closePath();
	ctx1.lineWidth = 3;
}// -------------------------------------------------------
}
///////////////////////////////////////////////////////////