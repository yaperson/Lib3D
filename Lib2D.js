{//////////////////////////////  Libraire Graphique 2D  ///
//
//  Tracer dans un Repère Hortonormé "Naturel"
//  avec l'origine en bas à gauche
//  et l'axe des Y orienté vers le haut
//
///////////////////////////////////////////////////////////
}
{//===============================  Variables Globales  ===
var  hauteur = null ;
var  lib2d_ox = 0 ;			// position de l'origine 
var  lib2d_oy = 0 ;			// du nouveau repère
var  lib2d_scale = 1 ;		// Echelle du graphique
}
{//==================================  Initialisations  ===
function	lib2D_init		( ox , oy )	{
//
//  Initialiser les mécansmes 2D
//  Appelé 1 seule fois au début du prog (onload)
//  ox , oy : coordonnées du nouveau repère
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	canvas_init();
	hauteur  = canvas1.height ;	// mémo pour calculs
	lib2d_ox = ox ;
	lib2d_oy = oy ;
}// -------------------------------------------------------
function	lib2D_echelle	( echelle )	{
//
//  Définir l'echelle du tracé
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	lib2d_scale = echelle ;
}// -------------------------------------------------------
}
{//================================  Outils Graphiques  ===
function	lib2D_clear					  ( color )	{
//
//  Effacer le canvas
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	canvas_clear ( color );
}// -------------------------------------------------------
function	lib2D_repere	( taille )				{
//
//  Tracer le repère à l'origine
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	lib2D_segment ( 0,0, taille,0 , 'red'   );  // axe X
	lib2D_segment ( 0,0, 0,taille , 'green' );  // axe Y
}// -------------------------------------------------------
function	lib2D_point		( x,y,          color )	{     
//
// Tracer un point (petit cercle)
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var  xpix =         (lib2d_scale*x)+lib2d_ox ; // Changement
var  ypix = hauteur-(lib2d_scale*y)-lib2d_oy ; // de Repère

	canvas_point( xpix,ypix , color );
}// -------------------------------------------------------
function	lib2D_segment	( x1,y1, x2,y2, color )	{    
//
// Tracer un segment
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
var  x1pix =         (lib2d_scale*x1)+lib2d_ox ; // Changement
var  x2pix =         (lib2d_scale*x2)+lib2d_ox ; // de Repère
var  y1pix = hauteur-(lib2d_scale*y1)-lib2d_oy ;
var  y2pix = hauteur-(lib2d_scale*y2)-lib2d_oy ;

	canvas_segment( x1pix, y1pix , 
					x2pix, y2pix , color );
}// -------------------------------------------------------
}
///////////////////////////////////////////////////////////