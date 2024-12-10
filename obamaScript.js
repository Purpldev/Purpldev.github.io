import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight);
camera.position.z = 3;

scene.add(camera);
scene.background = new THREE.Color("#ffffff");
const loader = new THREE.TextureLoader();
loader.load("/obama.jpg", (texture) => {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ map: texture });


const mesh = new THREE.Mesh(geometry,material);
scene.add(mesh);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);

const canvas = renderer.domElement;
document.body.append(canvas);
canvas.style.margin=0;

renderer.render(scene, camera);

renderer.render(scene, camera);

setInterval(() => {
    mesh.rotation.y += 0.01;

    renderer.render(scene,camera);
});

});