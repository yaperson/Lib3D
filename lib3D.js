function lib3D_init ( ox , oy ){

    lib2D_init ( ox , oy )
    
    }
    
    function lib3D_echelle (echelle){
        lib2D_echelle (echelle);
    }
    
    function lib3D_clear (color) {
    
        lib2D_clear (color);
    }
    
    
    function lib3D_repere (taille){
        lib3D_segment (0,0,0, taille,0,0, 'red'); //x
        lib3D_segment (0,0,0, 0,taille,0, 'green'); //y
        lib3D_segment (0,0,0, 0,0,taille, 'blue');//Z
    
    }
    
    function lib3D_point (x,y,z, color){
    var x2d = x - (z/3);
    var y2d = y - (z/2);
    
        lib2D_point (x2d, y2d, color);
    }
    
    function lib3D_segment (x1,y1,z1,x2,y2,z2,color)  {
    
        var x1_2d = x1 - (z1/3);
        var y1_2d = y1 - (z1/2);
        var x2_2d = x2 - (z2/3);
        var y2_2d = y2 - (z2/2);
    
        lib2D_segment(x1_2d,y1_2d, x2_2d, y2_2d, color)
    }