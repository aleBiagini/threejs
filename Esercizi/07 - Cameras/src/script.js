import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// cursor
const cursor = {
    x: 0,
    y: 0
}
window.addEventListener("mousemove", (event) => {
    cursor.x = (event.clientX / sizes.width) - 0.5;
    cursor.y = -((event.clientY / sizes.height) - 0.5);
})

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// controls

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshNormalMaterial({ color: 0xff0000 })
)
scene.add(mesh)

const aspectRatio = sizes.width / sizes.height;

// Camera
const camera = new THREE.PerspectiveCamera(75, aspectRatio)
// const camera = new THREE.OrthographicCamera(-1 * aspectRatio, 1 * aspectRatio, 1, -1, 0.1, 100)
camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
const clock = new THREE.Clock()

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true;

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    controls.update();
    // Update objects
    // mesh.rotation.y = elapsedTime;

    //Update camera

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()