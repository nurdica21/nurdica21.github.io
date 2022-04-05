function add(){

    let niz=[];
    let number = document. querySelector('input'). value;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight ,0.1, 1000);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth,window.innerHeight);

    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1.5,1.5,1.5);
    //let material = new THREE.MeshBasicMaterial({color:0xF6BBCA});

    //let cube = new THREE.Mesh(geometry,material);

    //scene.add(cube);


    for ( let i = 0; i < number; i ++ ) {

        niz[i] = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({color:0xF6BBCA}) );

    }

    for ( let i = 0; i < number; i ++ ) {

        niz[i].position.x = Math.random() * 20 - 10;
        niz[i].position.y = Math.random() * 20 - 10;
        niz[i].position.z = Math.random() * 30 - 10;

        scene.add( niz[i] );
    }

    camera.position.z = 30;


    let changeColor = function (e){
    
        e.material.color.set(Math.random() * 0xFFFFFF);
            
    }


    let update = function(){

        for ( let i = 0; i < number; i++ ) {

            setInterval(changeColor(niz[i]),1000);
        }
        
    };

    update();

    function animation(){

        requestAnimationFrame( animation );
        
        for ( let i = 0; i < number; i ++ ) {
            
            niz[i].rotation.x -=0.01;
            niz[i].rotation.y +=0.01;
            
        }

        renderer.render( scene, camera );
    }

    animation();

}