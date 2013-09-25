// the canvas element is where the magic happens
var canvas = document.getElementById("render");
var engine = new BABYLON.Engine(canvas, true); // load the BABYLON engine
var scene = new BABYLON.Scene(engine); // load the BABYLON scene, where all meshes will live

// the player camera will be constrained, allowing a top-down view of the player's ship
// arc camera: name, alpha (angle, in radians), beta (another angle, in radians), radius (how far away initially), pointing at, scene to add it to
var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI/2, Math.PI/2, 50, new BABYLON.Vector3(0, 0, 0), scene);
// constrain the camera
camera.lowerRadiusLimit = 10;
camera.upperRadiusLimit = 75;
camera.lowerAlphaLimit = Math.PI * 0.33;
camera.upperAlphaLimit = Math.PI * 0.66;
camera.lowerBetaLimit = Math.PI * 0.33;
camera.upperBetaLimit = Math.PI * 0.66;

// attach the camera to the scene
scene.activeCamera.attachControl(canvas);

// create a fill light so we can see things
var light = new BABYLON.PointLight("light", new BABYLON.Vector3(45, -25, 30), scene);
//light.diffuse = new BABYLON.Color3(1, 1, 0);
light.diffuse = new BABYLON.Color3(1, 1, 1);
//light.specular = new BABYLON.Color3(1, 1, 1);
light.specular = new BABYLON.Color3(0, 0, 0);
light.intensity = 0.575;

// set up an X/Y/Z axis for reference...
var xBox = BABYLON.Mesh.CreateBox("zBox", 1.0, scene);
xBox.position = new BABYLON.Vector3(6, 5, 2);
xBox.material = new BABYLON.StandardMaterial("xBox-material", scene);
xBox.material.emissiveColor = new BABYLON.Color4(1, 0, 0, 1);
var yBox = BABYLON.Mesh.CreateBox("yBox", 1.0, scene);
yBox.position = new BABYLON.Vector3(5, 6, 2);
yBox.material = new BABYLON.StandardMaterial("yBox-material", scene);
yBox.material.emissiveColor = new BABYLON.Color4(0, 1, 0, 1);
var zBox = BABYLON.Mesh.CreateBox("zBox", 1.0, scene);
zBox.position = new BABYLON.Vector3(5, 5, 3);
zBox.material = new BABYLON.StandardMaterial("zBox-material", scene);
zBox.material.emissiveColor = new BABYLON.Color4(0, 0, 1, 1);

var the_ship = undefined;

BABYLON.SceneLoader.ImportMesh("", "models/", "spaceship-beginner.babylon", scene, function (newMeshes, particleSystems) {
	console.log(newMeshes);
	for (var i = 0; i < newMeshes.length; i++) {
		// if (i == 9) {
		// 	continue;
		// }
		console.log(newMeshes[i].position);
		//newMeshes[i].parent = newMeshes[9];
		//newMeshes[i].scaling = new BABYLON.Vector3(0.05, 0.05, 0.05);
		//newMeshes[i].position = new BABYLON.Vector3(0, 10, 0);
		//newMeshes[i].rotation = new BABYLON.Vector3(Math.PI/2, 0, 0);
		//var newPivotMatrix = BABYLON.Matrix.Translation(0, 0, 0);
		//var newPivotMatrix = BABYLON.Matrix.Zero();
		//console.log(newMeshes[i].getPivotMatrix());
		// console.log(newPivotMatrix);
		//newMeshes[i].setPivotMatrix(newPivotMatrix);
		//var newTransformMatrix = BABYLON.Matrix.RotationX(Math.PI/2);
		//newMeshes[i].applyTransform(newTransformMatrix);
	}
	// the_ship = newMeshes[9];
	// newMeshes[9].rotation = new BABYLON.Vector3(Math.PI/2, 0, 0);
	// var transform = BABYLON.Matrix.RotationX(0);
	// for (var i = 0; i < newMeshes.length; i++) {
	// 	newMeshes[i].applyTransform(transform);
	// }
	// newMeshes[9].applyTransform(transform);
});

// this is the pre-render update() loop
scene.registerBeforeRender(function () {
	
	// if (the_ship != undefined) {
	// 	the_ship.rotation.y += 0.01;
	// }
	
	light.position = camera.position;
});

// render the scene
engine.runRenderLoop(function() {
	scene.render(); // render it!
});

// handle window resize
window.addEventListener("resize", function() {
	engine.resize(); // resize the engine accordingly
});