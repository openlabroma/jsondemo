window.onload = function() {
	
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 0.1, 1000 );

	var directionalLight = new THREE.DirectionalLight(0xffffff);
	directionalLight.position.set(0, 0, -1).normalize();
	scene.add(directionalLight);
	
	camera.position.z = -6;
	camera.position.x = 3;
	camera.position.y = 3;
	
	
	var loader = new THREE.JSONLoader();
	loader.load("models/cow.json_model", function(geometry, material) {
		var mesh = new THREE.Mesh(geometry, new THREE.MeshFaceMaterial( material ));
		scene.add(mesh);
		camera.lookAt(mesh.position);
	});
	
	
	var renderer;
	
	if (window.WebGLRenderingContext)
		renderer = new THREE.WebGLRenderer();
	else
		renderer = new THREE.CanvasRenderer();
	
	renderer.setSize( window.innerWidth / 3, window.innerHeight / 3);
	
	var container = document.getElementById("view3d");
	
	container.appendChild( renderer.domElement );
	
	
	
	function render() {
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
};