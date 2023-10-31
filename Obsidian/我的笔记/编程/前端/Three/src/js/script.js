import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as dat from "dat.gui";

// 创建渲染器
const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

// 设置渲染器大小
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 创建轨道控制
const orbit = new OrbitControls(camera, renderer.domElement);

// 坐标轴创建
const axesHelper = new THREE.AxesHelper(5);
// 添加坐标轴
scene.add(axesHelper);

// 设置相机位置
camera.position.set(-10, 30, 30);
orbit.update();

// 添加个盒子
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);

// 创建一个平面几何
const planeGeometry = new THREE.PlaneGeometry(30, 20);
const planeMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide, // 添加此项可以让相机移动到背面的时候依然显示
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);
plane.rotation.x = -0.5 * Math.PI;
// 接收阴影开启
plane.receiveShadow = true;

// 网格助手
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

// 创建一个球体
const sphereGeometry = new THREE.SphereGeometry(4, 10, 10);
const sphereMaterial = new THREE.MeshStandardMaterial({
  color: 0xff0000,
  wireframe: false,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.set(-10, 10, 0);
// 投射阴影开启
sphere.castShadow = true;

// 添加环境光
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

/* // 添加定向光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
scene.add(directionalLight);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;
// 移动相机底部获取充分阴影
directionalLight.shadow.camera.bottom = -12;

// 定向光助手
const dLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  5,
  "#ff0707"
);
scene.add(dLightHelper);
const dLightShadowHelper = new THREE.CameraHelper(
  directionalLight.shadow.camera
);
scene.add(dLightShadowHelper); */

// 聚光灯
const spotLight = new THREE.SpotLight(0xffffff);
scene.add(spotLight);

const gui = new dat.GUI();

const options = {
  spereColor: "#ffea00",
  wireframe: false,
  speed: 0.01,
};

gui.addColor(options, "spereColor").onChange((e) => {
  sphere.material.color.set(e);
});

gui.add(options, "wireframe").onChange((e) => {
  sphere.material.wireframe = e;
});

gui.add(options, "speed", 0, 0.1);

// 创建一个圆柱体
// const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 20, 20);
// const cylinderMaterial = new THREE.MeshBasicMaterial({
//   color: 0x0000ff,
//   wireframe: false,
// })
// const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
// scene.add(cylinder);

let step = 0;
// 旋转一下盒子
function animate(time) {
  box.rotation.x = time / 1000;
  box.rotation.y = time / 1000;

  step += options.speed;
  sphere.position.y = 10 * Math.abs(Math.sin(step));

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
