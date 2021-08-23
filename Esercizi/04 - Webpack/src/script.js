import './style.css'
import * as THREE from "three";

document.addEventListener("DOMContentLoaded", () => {
    //scene
    const scene = new THREE.Scene()

    //red cube object
    const redCubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    const redCubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
    const redCubeMesh = new THREE.Mesh(redCubeGeometry, redCubeMaterial);
    scene.add(redCubeMesh);

    //camera
    const sizes = {
        width: 800,
        height: 600
    }
    //parameters: field of view expressed in degrees, aspect ratio in pixels
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
    camera.position.z = 3;
    camera.position.z = 3;
    scene.add(camera);

    // renderer
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector(".webgl")
    })

    renderer.setSize(sizes.width, sizes.height)

    renderer.render(scene, camera)

})