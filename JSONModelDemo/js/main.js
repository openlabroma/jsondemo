window.onload = function() {

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(35, window.innerWidth * .5 / 400,
			0.1, 1000);

	var ambient = new THREE.AmbientLight(0x444444);
	scene.add(ambient);

	var spotLight = new THREE.SpotLight(0xffffff);
	spotLight.position.set(30, 50, 30);

	scene.add(spotLight);

	camera.position.z = 40;
	camera.position.x = 50;
	camera.position.y = 40;

	var loader = new THREE.JSONLoader();
	loader.load("models/cow.js_model", function(geometry, material) {
		var mesh = new THREE.Mesh(geometry,
				new THREE.MeshFaceMaterial(material));
		mesh.scale.set(5, 5, 5);
		mesh.position.set(0, 2, 0);
		scene.add(mesh);
		camera.lookAt(new THREE.Vector3(0, 20, 0));
	});

	var renderer;

	if (window.WebGLRenderingContext)
		renderer = new THREE.WebGLRenderer({
			antialias : true
		});
	else
		renderer = new THREE.CanvasRenderer();

	renderer.setSize(window.innerWidth * .5, 400);

	var container = document.getElementById("view3d");
	container.appendChild(renderer.domElement);

	function render() {
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}
	render();
};