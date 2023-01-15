const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera();
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color("#24C3FA");
renderer.setSize( 1920, 1080 );
document.body.appendChild( renderer.domElement );


// Start of Floor
const floorGeometry = new THREE.PlaneGeometry( 2, 1 );
const floorMaterial = new THREE.MeshBasicMaterial( {color: 0xBB893C, side: THREE.DoubleSide} );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.position.y = -0.75;
scene.add( floor );
// End of Floor


// Start of Bed

// Bed Foam
const bedGeometry = new THREE.PlaneGeometry( 0.75, 0.5 );
const bedMaterial = new THREE.MeshBasicMaterial( {color: 0x004E88, side: THREE.DoubleSide} );
const bed = new THREE.Mesh( bedGeometry, bedMaterial );
bed.position.y = -0.35;
bed.position.x = -0.55;
scene.add( bed );

//Bed Posts
const bed_p1Geometry = new THREE.PlaneGeometry( 0.08, 0.8 );
const bed_p1Material = new THREE.MeshBasicMaterial( {color: 0x6D4509, side: THREE.DoubleSide} );
const bed_p1 = new THREE.Mesh( bed_p1Geometry, bed_p1Material );
bed_p1.position.y = -0.25;
bed_p1.position.x = -0.96;
scene.add( bed_p1 );

const bed_p2Geometry = new THREE.PlaneGeometry( 0.08, 0.6 );
const bed_p2Material = new THREE.MeshBasicMaterial( {color: 0x6D4509, side: THREE.DoubleSide} );
const bed_p2 = new THREE.Mesh( bed_p2Geometry, bed_p2Material );
bed_p2.position.y = -0.33;
bed_p2.position.x = -0.14;
scene.add( bed_p2 );

//Pillow
const pillowGeometry = new THREE.PlaneGeometry( 0.16, 0.13 );
const pillowMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
const pillow = new THREE.Mesh( pillowGeometry, pillowMaterial );
pillow.position.y = -0.035;
pillow.position.x = -0.839;
scene.add( pillow );

// End of Bed


// Start of Shelf

const shelfGeometry = new THREE.PlaneGeometry( 0.5, 0.05 );
const shelfMaterial = new THREE.MeshBasicMaterial( {color: 0x6D4509, side: THREE.DoubleSide} );
const shelf = new THREE.Mesh( shelfGeometry, shelfMaterial );
shelf.position.y = 0.55;
shelf.position.x = -0.35;
scene.add( shelf );

const shelf_h1Geometry = new THREE.PlaneGeometry( 0.02, 0.05 );
const shelf_h1Material = new THREE.MeshBasicMaterial( {color: 0x6D4509, side: THREE.DoubleSide} );
const shelf_h1 = new THREE.Mesh( shelf_h1Geometry, shelf_h1Material );
shelf_h1.position.y = 0.50;
shelf_h1.position.x = -0.55;
scene.add( shelf_h1 );

const shelf_h2Geometry = new THREE.PlaneGeometry( 0.02, 0.05 );
const shelf_h2Material = new THREE.MeshBasicMaterial( {color: 0x6D4509, side: THREE.DoubleSide} );
const shelf_h2 = new THREE.Mesh( shelf_h2Geometry, shelf_h2Material );
shelf_h2.position.y = 0.50;
shelf_h2.position.x = -0.15;
scene.add( shelf_h2 );

// End of Shelf


// Start of Window

//Window Outline
const window_oGeometry = new THREE.PlaneGeometry( 0.7, 0.8 );
const window_oMaterial = new THREE.MeshBasicMaterial( {color: 0x6D4509, side: THREE.DoubleSide} );
const window_o = new THREE.Mesh( window_oGeometry, window_oMaterial );
window_o.position.y = 0.45;
window_o.position.x = 0.45;
scene.add( window_o );

//Window Pane
const window_pGeometry = new THREE.PlaneGeometry( 0.65, 0.7 );
const window_pMaterial = new THREE.MeshBasicMaterial( {color: 0xBFFEFF, side: THREE.DoubleSide} );
const window_p = new THREE.Mesh( window_pGeometry, window_pMaterial );
window_p.position.y = 0.45;
window_p.position.x = 0.45;
scene.add( window_p );

//Window Frame
const window_f1Geometry = new THREE.PlaneGeometry( 0.03, 0.8 );
const window_f1Material = new THREE.MeshBasicMaterial( {color: 0x6D4509, side: THREE.DoubleSide} );
const window_f1 = new THREE.Mesh( window_f1Geometry, window_f1Material );
window_f1.position.y = 0.45;
window_f1.position.x = 0.45;
scene.add( window_f1 );

const window_f2Geometry = new THREE.PlaneGeometry( 0.65, 0.04 );
const window_f2Material = new THREE.MeshBasicMaterial( {color: 0x6D4509, side: THREE.DoubleSide} );
const window_f2 = new THREE.Mesh( window_f2Geometry, window_f2Material );
window_f2.position.y = 0.45;
window_f2.position.x = 0.45;
scene.add( window_f2 );

// End of Window 


// Start of Table

//Desk Stands
const desk_s1Geometry = new THREE.PlaneGeometry( 0.04, 0.6 );
const desk_s1Material = new THREE.MeshBasicMaterial( {color: 0x787878, side: THREE.DoubleSide} );
const desk_s1 = new THREE.Mesh( desk_s1Geometry, desk_s1Material );
desk_s1.position.y = -0.17;
desk_s1.position.x = 0.05;
scene.add( desk_s1 );

const desk_s2Geometry = new THREE.PlaneGeometry( 0.04, 0.6 );
const desk_s2Material = new THREE.MeshBasicMaterial( {color: 0x787878, side: THREE.DoubleSide} );
const desk_s2 = new THREE.Mesh( desk_s2Geometry, desk_s2Material );
desk_s2.position.y = -0.17;
desk_s2.position.x = 0.85;
scene.add( desk_s2 );

//Desk
const deskGeometry = new THREE.PlaneGeometry( 0.9, 0.08 );
const deskMaterial = new THREE.MeshBasicMaterial( {color: 0xA8A8A8, side: THREE.DoubleSide} );
const desk = new THREE.Mesh( deskGeometry, deskMaterial );
desk.position.y = 0.09;
desk.position.x = 0.45;
scene.add( desk );

// End of Table



// Start of Monitors

//Monitor 1
const monitor_b1Geometry = new THREE.PlaneGeometry( 0.1, 0.05 );
const monitor_b1Material = new THREE.MeshBasicMaterial( {color: 0x252525, side: THREE.DoubleSide} );
const monitor_b1 = new THREE.Mesh( monitor_b1Geometry, monitor_b1Material );
monitor_b1.position.y = 0.15;
monitor_b1.position.x = 0.28;
scene.add( monitor_b1 );

const monitor_s1Geometry = new THREE.PlaneGeometry( 0.03, 0.1 );
const monitor_s1Material = new THREE.MeshBasicMaterial( {color: 0x252525, side: THREE.DoubleSide} );
const monitor_s1 = new THREE.Mesh( monitor_s1Geometry, monitor_s1Material );
monitor_s1.position.y = 0.2;
monitor_s1.position.x = 0.28;
scene.add( monitor_s1 );

const monitor1Geometry = new THREE.PlaneGeometry( 0.3, 0.3 );
const monitor1Material = new THREE.MeshBasicMaterial( {color: 0x383838, side: THREE.DoubleSide} );
const monitor1 = new THREE.Mesh( monitor1Geometry, monitor1Material );
monitor1.position.y = 0.35;
monitor1.position.x = 0.28;
scene.add( monitor1 );

const screen1Geometry = new THREE.PlaneGeometry( 0.27, 0.25 );
const screen1Material = new THREE.MeshBasicMaterial( {color: 0x545454, side: THREE.DoubleSide} );
const screen1 = new THREE.Mesh( screen1Geometry, screen1Material );
screen1.position.y = 0.35;
screen1.position.x = 0.28;
scene.add( screen1 );

//Monitor 2
const monitor_b2Geometry = new THREE.PlaneGeometry( 0.1, 0.05 );
const monitor_b2Material = new THREE.MeshBasicMaterial( {color: 0x252525, side: THREE.DoubleSide} );
const monitor_b2 = new THREE.Mesh( monitor_b2Geometry, monitor_b2Material );
monitor_b2.position.y = 0.15;
monitor_b2.position.x = 0.62;
scene.add( monitor_b2 );

const monitor_s2Geometry = new THREE.PlaneGeometry( 0.03, 0.1 );
const monitor_s2Material = new THREE.MeshBasicMaterial( {color: 0x252525, side: THREE.DoubleSide} );
const monitor_s2 = new THREE.Mesh( monitor_s2Geometry, monitor_s2Material );
monitor_s2.position.y = 0.2;
monitor_s2.position.x = 0.62;
scene.add( monitor_s2 );

const monitor2Geometry = new THREE.PlaneGeometry( 0.3, 0.3 );
const monitor2Material = new THREE.MeshBasicMaterial( {color: 0x383838, side: THREE.DoubleSide} );
const monitor2 = new THREE.Mesh( monitor2Geometry, monitor2Material );
monitor2.position.y = 0.35;
monitor2.position.x = 0.62;
scene.add( monitor2 );

const screen2Geometry = new THREE.PlaneGeometry( 0.27, 0.25 );
const screen2Material = new THREE.MeshBasicMaterial( {color: 0x545454, side: THREE.DoubleSide} );
const screen2 = new THREE.Mesh( screen2Geometry, screen2Material );
screen2.position.y = 0.35;
screen2.position.x = 0.62;
scene.add( screen2 );

// End of Monitors


// Start of CPU

const cpuGeometry = new THREE.PlaneGeometry( 0.15, 0.5 );
const cpuMaterial = new THREE.MeshBasicMaterial( {color: 0x252525, side: THREE.DoubleSide} );
const cpu = new THREE.Mesh( cpuGeometry, cpuMaterial );
cpu.position.y = -0.22;
cpu.position.x = 0.16;
scene.add( cpu );

const cpu_fGeometry = new THREE.PlaneGeometry( 0.12, 0.42 );
const cpu_fMaterial = new THREE.MeshBasicMaterial( {color: 0x3D3D3D, } );
const cpu_f = new THREE.Mesh( cpu_fGeometry, cpu_fMaterial );
cpu_f.position.y = -0.22;
cpu_f.position.x = 0.16;
scene.add( cpu_f );

const power_bGeometry = new THREE.CircleGeometry( 0.022, 32 );
const power_bMaterial = new THREE.MeshBasicMaterial( { color: 0x252525, side: THREE.DoubleSide } );
const power_b = new THREE.Mesh( power_bGeometry, power_bMaterial );
power_b.position.y = -0.33;
power_b.position.x = 0.16;
scene.add( power_b );

// End of CPU


// Start of Chair

//Upper Parts
const backGeometry = new THREE.PlaneGeometry( 0.2, 0.38 );
const backMaterial = new THREE.MeshBasicMaterial( {color: 0x004E88, side: THREE.DoubleSide} );
const back = new THREE.Mesh( backGeometry, backMaterial );
back.position.y = 0.16;
back.position.x = 0.45;
scene.add( back );

const seatGeometry = new THREE.PlaneGeometry( 0.2, 0.09 );
const seatMaterial = new THREE.MeshBasicMaterial( {color: 0x004E88, side: THREE.DoubleSide} );
const seat = new THREE.Mesh( seatGeometry, seatMaterial );
seat.position.y = -0.10;
seat.position.x = 0.45;
scene.add( seat );

const supportGeometry = new THREE.PlaneGeometry( 0.04, 0.38);
const supportMaterial = new THREE.MeshBasicMaterial( {color: 0x383838, side: THREE.DoubleSide} );
const support = new THREE.Mesh( supportGeometry, supportMaterial );
support.position.y = 0.05;
support.position.x = 0.45;
scene.add( support );

//Lower Parts
const gasliftGeometry = new THREE.PlaneGeometry( 0.035, 0.20);
const gasliftMaterial = new THREE.MeshBasicMaterial( {color: 0x252525, side: THREE.DoubleSide} );
const gaslift = new THREE.Mesh( gasliftGeometry, gasliftMaterial );
gaslift.position.y = -0.24;
gaslift.position.x = 0.45;
scene.add( gaslift );

const baseGeometry = new THREE.PlaneGeometry( 0.2, 0.05);
const baseMaterial = new THREE.MeshBasicMaterial( {color: 0x252525, side: THREE.DoubleSide} );
const base = new THREE.Mesh( baseGeometry, baseMaterial );
base.position.y = -0.36;
base.position.x = 0.45;
scene.add( base );

//Wheels
const wheel1Geometry = new THREE.CircleGeometry( 0.025, 32 );
const wheel1Material = new THREE.MeshBasicMaterial( { color: 0x0F0E0E, side: THREE.DoubleSide } );
const wheel1 = new THREE.Mesh( wheel1Geometry, wheel1Material );
wheel1.position.y = -0.41;
wheel1.position.x = 0.45;
scene.add( wheel1 );

const wheel2Geometry = new THREE.CircleGeometry( 0.025, 32 );
const wheel2Material = new THREE.MeshBasicMaterial( { color: 0x0F0E0E, side: THREE.DoubleSide } );
const wheel2 = new THREE.Mesh( wheel2Geometry, wheel2Material );
wheel2.position.y = -0.41;
wheel2.position.x = 0.37;
scene.add( wheel2 );

const wheel3Geometry = new THREE.CircleGeometry( 0.025, 32 );
const wheel3Material = new THREE.MeshBasicMaterial( { color: 0x0F0E0E, side: THREE.DoubleSide } );
const wheel3 = new THREE.Mesh( wheel3Geometry, wheel3Material );
wheel3.position.y = -0.41;
wheel3.position.x = 0.53;
scene.add( wheel3 );

// End of Chair

camera.position.z = 1;

function animate() {
    requestAnimationFrame( animate );
    //start animate code HERE

    //end animate code HERE
    renderer.render( scene, camera );

}
animate();