/**
 A cloud of randomly-scattered boxes

 @author xeolabs / http://xeolabs.com

 <p>Usage example:</p>

 <pre>
 someNode.addNode({
       type: "geometry/randomObjects",
       numBoxes: 1000 // (default)
   });
 </pre>
 */


SceneJS.Types.addType("geometry/randomObjects", {

    construct: function (params) {

        var numObjects = params.numObjects || 1000;
        var materials = params.materials != false;
        var alpha = params.alpha || 1;
        var node;

        for (var i = 0, len = numObjects; i < len; i++) {

            // Random position
            node = this.addNode({
                type: "translate",
                x: Math.random() * 10 - 5,
                y: Math.random() * 10 - 5,
                z: Math.random() * 10 - 5
            });

            /*// Random orientation
            node = node.addNode({
                type: "rotate",
                x: Math.random(),
                y: Math.random(),
                z: Math.random(),
                angle: Math.random() * 360
            });*/

            // Size
//            node = node.addNode({
//                type: "scale",
//                x: 4.0,
//                y: 4.0,
//                z: 4.0
//            });

            // Size
            node = node.addNode({
                type: "scale",
                x: 1.0,
                y: 1.0,
                z: 1.0
            });

            if (materials) {

                if (alpha < 1) {
                    node = node.addNode({
                        type: "flags",
                        flags: {
                            transparent: true
                        }
                    });
                }

                // Random material
                node = node.addNode({
                    type: "material",
                    color: {
                        r: Math.random(),
                        g: Math.random(),
                        b: Math.random()
                    },
                    //alpha: alpha
                    specularColor:{ r:1.0, g:1.0, b:1.0 },
                    specular:1.0,
                    shine:70.0,
                    emit:0,
                    alpha:1.0,
                });
            }

            // Geometry
            node.addNode({
                type: "geometry/box",
                coreId: "box"
            });
        }
    }
});
