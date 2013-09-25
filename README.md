# model test 2

this is another simple test of trying to import a model from Blender into Babylon.js and figuring out how to rotate/scale all of the imported meshes to a new position and then "baking" the new verts into the meshes.

## goal

To take a model made in Blender using multiple meshes, export it to .babylon format, import it into a Babylon.js scene, and then convert the right-handed coordinate system of Blender to the left-handed coordinate system of Babylon.js. To do this, the Z axis must become the Y axis. Or, in other words, the spaceship has to be pointed "upwards" along the Y axis with its "top" showing to the camera when loading the scene included in this repo.