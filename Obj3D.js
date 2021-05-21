function Obj3D_Creer (){
//
//  Créer renvoyer un nouvel objet vide
//- - - - - - - - - - - - - - - - - - - - - - - - -
var obj = new Object();             // allouer eb RAM un nouvel objet mou
    
    //--- Initialisation l'objet vide
    obj.tabSegments = new Array();   // Tab des segments
    obj.tabPoints = new Array();    // Tab des points
    obj.cx = 0;  // position du centre de l'objet
    obj.cy = 0;
    obj.cz = 0;

        return obj;                 // Renvoi le nouvel l'objet
}// -----------------------------------------------
function Obj3D_DefPoint (obj, x, y, z){
//
//  Ajouter un point 3D a l'objet 3D
//- - - - - - - - - - - - - - - - - - - - - - - - -
var point = new Object();           // allouer eb RAM un nouvel objet mou
    point.x = x;                    // Initialise les points 3D
    point.y = y;
    point.z = z;

    obj.tabPoints.push (point);      // Ajoute au tab
}// -----------------------------------------------
function Obj3D_DefSegment (obj, n1, n2){
//
//  Ajouter un segment 3D a l'objet 3D
//- - - - - - - - - - - - - - - - - - - - - - - - - 
var couple = new Object();         // allouer eb RAM un nouvel objet mou
    couple.n1 = n1;                // Initialise les segment
    couple.n2 = n2;

    obj.tabSegments.push (couple);  // Ajoute au tab

}// -----------------------------------------------
function Obj3D_Draw (obj){
//
//  Afficher l'objet 3D
//- - - - - - - - - - - - - - - - - - - - - - - - - 
    for ( var i=0 ; i < obj.tabPoints.length; i++ ){
        var point = obj.tabPoints[i];   // un point de l'obj
        lib3D_point(point.x, point.y, point.z, 'red');
    };
    for ( var i=0 ; i < obj.tabSegments.length; i++ ){
        var seg = obj.tabSegments[i];   // un segment de l'obj
        var n1 =  seg.n1;
        var n2 =  seg.n2;
        var p1 = obj.tabPoints[n1];
        var p2 = obj.tabPoints[n2];
        lib3D_segment (obj.cx+p1.x,obj.cy+p1.y,obj.cz+p1.z,  
                       obj.cx+p2.x,obj.cy+p2.y,obj.cz+p2.z, 'orange');
                       
        lib3D_point(obj.cx+p1.x,obj.cy+p1.y,obj.cz+p1.z, 'red');
        lib3D_point(obj.cx+p2.x,obj.cy+p2.y,obj.cz+p2.z, 'red');
    };
}// -----------------------------------------------
function Obj3D_Draw_XY (obj){
    //
    //  Afficher l'objet 3D dans le plan XY
    //- - - - - - - - - - - - - - - - - - - - - - - - - 
        for ( var i=0 ; i < obj.tabPoints.length; i++ ){
            var point = obj.tabPoints[i];   // un point de l'obj
            lib3D_point(point.x, point.y, 0, 'gray');
        };
        for ( var i=0 ; i < obj.tabSegments.length; i++ ){
            var seg = obj.tabSegments[i];   // un segment de l'obj
            var n1 =  seg.n1;
            var n2 =  seg.n2;
            var p1 = obj.tabPoints[n1];
            var p2 = obj.tabPoints[n2];
            lib3D_segment (p1.x, p1.y, 0, p2.x, p2.y, 0, 'gray');
            lib3D_point   (p1.x, p1.y, 0, p2.x, p2.y, 0, 'gray');
            
        };
    
    }// -----------------------------------------------
function Obj3D_Draw_YZ (obj){
        //
        //  Afficher l'objet 3D dans le plan XY
        //- - - - - - - - - - - - - - - - - - - - - - - - - 
        for ( var i=0 ; i < obj.tabPoints.length; i++ ){
            var point = obj.tabPoints[i];   // un point de l'obj
            lib3D_point(0, point.y, point.z, 'gray');
        };
        for ( var i=0 ; i < obj.tabSegments.length; i++ ){
            var seg = obj.tabSegments[i];   // un segment de l'obj
            var n1 =  seg.n1;
            var n2 =  seg.n2;
            var p1 = obj.tabPoints[n1];
            var p2 = obj.tabPoints[n2];
            lib3D_segment (0, p1.y, p1.z, 0, p2.y, p2.z, 'gray');
            lib3D_point   (0, p1.y, p1.z, 0, p2.y, p2.z, 'gray');
        };
    }// -----------------------------------------------
function Obj3D_Draw_XZ (obj){
    //
    //  Afficher l'objet 3D dans le plan XY
    //- - - - - - - - - - - - - - - - - - - - - - - - - 
    for ( var i=0 ; i < obj.tabPoints.length; i++ ){
        var point = obj.tabPoints[i];   // un point de l'obj
        lib3D_point(point.x,0, point.z, 'gray');
    };
    for ( var i=0 ; i < obj.tabSegments.length; i++ ){
        var seg = obj.tabSegments[i];   // un segment de l'obj
        var n1 =  seg.n1;
        var n2 =  seg.n2;
        var p1 = obj.tabPoints[n1];
        var p2 = obj.tabPoints[n2];
        lib3D_segment (p1.x, 0, p1.z, p2.x, 0, p2.z, 'gray');
        lib3D_point   (p1.x, 0, p1.z, p2.x, 0, p2.z, 'gray');
    };
}// -----------------------------------------------
function Translater(obj, dx, dy, dz){
    //
    // Translater l'objet 3D 
    //---------------------------

    obj.cx += dx;
    obj.cy += dy;
    obj.cz += dz;
}//-------------------------------------
function Pivoter(obj, angle, axe){
    //
    // Pivoté l'objet 3D de <angles> autour de l'axe
    //------------------------------------------------

    for( var i =0 ; i < obj.tabPoints.length ; i++)
    {
        var point = obj.tabPoints[i];  // un point de l'objet
        var u,v;
        switch (axe){
            case 'x': u = point.z; v = point.y; break;
            case 'y': u = point.x; v = point.z; break;
            case 'z': u = point.x; v = point.y; break;
        }
        var u2 =  u*Math.cos(angle) + v*Math.sin(angle);
        var v2 = -u*Math.sin(angle) + v*Math.cos(angle);
        switch (axe){
            case 'x': point.y = u2 ; point.z = v2 ; break;
            case 'y': point.z = u2 ; point.x = v2 ; break;
            case 'z': point.x = u2 ; point.y = v2 ; break;
        }
    }
}//-------------------------------------
