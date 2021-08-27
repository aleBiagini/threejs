import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const group = new THREE.Group();
scene.add(group);
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
group.add(mesh)
const geometry1 = new THREE.BoxGeometry(1, 1, 1)
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const mesh1 = new THREE.Mesh(geometry1, material1)
mesh1.position.x = 2;
group.add(mesh1)
const geometry2 = new THREE.BoxGeometry(1, 1, 1)
const material2 = new THREE.MeshBasicMaterial({ color: 0x0000ff })
const mesh2 = new THREE.Mesh(geometry2, material2)
mesh2.position.x = -2;
group.add(mesh2)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

let isStarted = false;

document.addEventListener("click", () => {
    startAnimations();
})

const startAnimations = () => {
    if (!isStarted) {
        isStarted = true

        gsap.to(mesh.position, { duration: 1, delay: 1.2, x: 2 })
        gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

        gsap.to(mesh1.rotation, { duration: 1, delay: 1.2, x: 2 })
        gsap.to(mesh1.rotation, { duration: 1, delay: 2, x: 0 })

        gsap.to(mesh2.rotation, { duration: "infinite", delay: 2, y: 1 })
    }
}


// Animations
const loop = () => {
    // //chiamiamo il render per far aggiornare lo schermo
    renderer.render(scene, camera)
    //sempre per ultimo
    window.requestAnimationFrame(loop)
}

//fa partire il loop
loop();