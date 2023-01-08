const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();

let xSpeed = 0.0025;
let ySpeed = 0;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 800 );
document.body.appendChild( renderer.domElement );

const planeGeometry = new THREE.PlaneGeometry( 0.35, 0.35 );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffff83, side: THREE.DoubleSide} );
const dvd = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( dvd );

camera.position.z = 1;


function animate() {
    requestAnimationFrame( animate );

    //start animate code HERE

    dvd.position.x += xSpeed;
    dvd.position.y += ySpeed;

 
    
    if (dvd.position.x > 0.85 && dvd.position.y >= 0) {
        xSpeed = -0.0029;
        ySpeed = -0.0029;
        
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;

        dvd.material.color.set("#7ECEE5");
    }

    if (dvd.position.x < 0.00 && dvd.position.y < -0.85) {
        xSpeed = -0.0029;
        ySpeed = 0.0029;
         
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;

        dvd.material.color.set("#FF5A5A");
    }

    if (dvd.position.x < -0.85 && dvd.position.y > 0.00) {
        xSpeed = 0.0029;
        ySpeed = 0.0029;
         
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;

        dvd.material.color.set("#86FF66"); 
    }
    
    if (dvd.position.x > 0.00 && dvd.position.y > 0.85) {
        xSpeed = 0.0029;
        ySpeed = -0.0029;
         
        dvd.scale.x -= 0.1;
        dvd.scale.y -= 0.1;

        dvd.material.color.set("#FFFF83");
    }

    if (dvd.scale.x <= 0 && dvd.scale.y <=0) {
        return;
    }


    

   
    
    //end animate code HERE
    renderer.render( scene, camera );

}
animate();

