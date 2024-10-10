import GUI from 'lil-gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

/**
 * Base
 */
// Debug
const gui = new GUI({
    width: 400
})

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xEAF5FF );

/**
 * Loaders
 */
// Texture loader
const textureLoader = new THREE.TextureLoader()

// Draco loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

// GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

/**
 * Textures
 */
const bakedTexture = textureLoader.load('baked.jpg')
const bakedFrame = textureLoader.load('baked-2.jpg')
bakedTexture.flipY = false 
bakedFrame.flipY = false 
bakedTexture.colorSpace = THREE.SRGBColorSpace
bakedFrame.colorSpace = THREE.SRGBColorSpace

/**
 * Materials
 */
//Baked material
const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture})
const bakedFrames = new THREE.MeshBasicMaterial({ map: bakedFrame})
// light material
const poleLightMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFFFF})

/**
 * Model
 */
gltfLoader.load(
    'bureau-loak.glb',
    (gltf) =>
    { 
        gltf.scene.traverse((child) => 
        { 
            //console.log(child)
            child.material = bakedMaterial    
        })
        // Lampes
        const poleLightAMesh = gltf.scene.children.find(child => child.name === 'lightA')
        const poleLightBMesh = gltf.scene.children.find(child => child.name === 'lightB')

        // cadres et images
        const frameMontainMesh = gltf.scene.children.find(child => child.name === 'frameMountain')
        const frameLegoMesh = gltf.scene.children.find(child => child.name === 'frameLego')
        const framePlanetMesh = gltf.scene.children.find(child => child.name === 'framePlanet')
        const frameAdnMesh = gltf.scene.children.find(child => child.name === 'frameAdn')
        const cadreAMesh = gltf.scene.children.find(child => child.name === 'cadreA')
        const cadreBMesh = gltf.scene.children.find(child => child.name === 'cadreB')
        const cadreCMesh = gltf.scene.children.find(child => child.name === 'cadreC')
        const cadreDMesh = gltf.scene.children.find(child => child.name === 'cadreD')
        const corkwallMesh = gltf.scene.children.find(child => child.name === 'corkwall')
        const screenAMesh = gltf.scene.children.find(child => child.name === 'screenA')
        const screenBMesh = gltf.scene.children.find(child => child.name === 'screenB')
        const bookAMesh = gltf.scene.children.find(child => child.name === 'book1')
        const bookBMesh = gltf.scene.children.find(child => child.name === 'book2')
        const potMesh = gltf.scene.children.find(child => child.name === 'pot')
        const machineMesh = gltf.scene.children.find(child => child.name === 'machine')
        const btnMachineMesh = gltf.scene.children.find(child => child.name === 'btnMachine')
        const logoMesh = gltf.scene.children.find(child => child.name === 'logo')
        const piedLampeMesh = gltf.scene.children.find(child => child.name === 'piedLampe')
        const boardMesh = gltf.scene.children.find(child => child.name === 'board')
        const feuilleMesh = gltf.scene.children.find(child => child.name === 'feuille')

    
        //lego Tristan
        const brasGaucheTriMesh = gltf.scene.children.find(child => child.name === 'brasGaucheTri')
        const brasDroitTriMesh = gltf.scene.children.find(child => child.name === 'breasDroitTri')
        const cheveuxTriMesh = gltf.scene.children.find(child => child.name === 'cheveuxTri')
        const corpsTriMesh = gltf.scene.children.find(child => child.name === 'corpsTri')
        const culMesh = gltf.scene.children.find(child => child.name === 'culTri')
        const jambeDroiteTriMesh = gltf.scene.children.find(child => child.name === 'jambeDroiteTri')
        const jambeGaucheTriMesh = gltf.scene.children.find(child => child.name === 'jambeGaucheTri')
        const mainDroiteTriMesh = gltf.scene.children.find(child => child.name === 'mainDroiteTri')
        const mainGaucheTriMesh = gltf.scene.children.find(child => child.name === 'mainGaucheTri')
        const piedTriMesh = gltf.scene.children.find(child => child.name === 'piedTri')
        const teteTriMesh = gltf.scene.children.find(child => child.name === 'teteTri')

        // lego Benjamin
        const brasGaucheBenMesh = gltf.scene.children.find(child => child.name === 'brasGaucheBen')
        const brasDroitBenMesh = gltf.scene.children.find(child => child.name === 'brasDroitBen')
        const cheveuxBenMesh = gltf.scene.children.find(child => child.name === 'cheveuxBen')
        const corpsBenMesh = gltf.scene.children.find(child => child.name === 'corpsBen')
        const culBenMesh = gltf.scene.children.find(child => child.name === 'culBen')
        const jambeDroiteBenMesh = gltf.scene.children.find(child => child.name === 'jambeDroiteBen')
        const jambeGaucheBenMesh = gltf.scene.children.find(child => child.name === 'jambeGaucheBen')
        const mainDroiteBenMesh = gltf.scene.children.find(child => child.name === 'mainDroiteBen')
        const mainGaucheBenMesh = gltf.scene.children.find(child => child.name === 'mainGaucheBen')
        const piedBenMesh = gltf.scene.children.find(child => child.name === 'piedBen')
        const teteBenMesh = gltf.scene.children.find(child => child.name === 'teteBen') 
        const chignonBenMesh = gltf.scene.children.find(child => child.name === 'chignonBen') 
        
    
        poleLightAMesh.material = poleLightMaterial
        poleLightBMesh.material = poleLightMaterial

        frameMontainMesh.material = bakedFrames
        frameLegoMesh.material = bakedFrames
        framePlanetMesh.material = bakedFrames
        frameAdnMesh.material = bakedFrames
        cadreAMesh.material = bakedFrames
        cadreBMesh.material = bakedFrames
        cadreCMesh.material = bakedFrames
        cadreDMesh.material = bakedFrames
        corkwallMesh.material = bakedFrames
        screenAMesh.material = bakedFrames
        screenBMesh.material = bakedFrames
        bookAMesh.material = bakedFrames
        bookBMesh.material = bakedFrames
        potMesh.material = bakedFrames
        machineMesh.material = bakedFrames
        btnMachineMesh.material = bakedFrames
        logoMesh.material = bakedFrames
        piedLampeMesh.material = bakedFrames
        boardMesh.material = bakedFrames
        feuilleMesh.material = bakedFrames

        brasGaucheTriMesh.material = bakedFrames
        brasDroitTriMesh.material = bakedFrames
        cheveuxTriMesh.material = bakedFrames
        corpsTriMesh.material = bakedFrames
        culMesh.material = bakedFrames
        jambeDroiteTriMesh.material = bakedFrames
        jambeGaucheTriMesh.material = bakedFrames
        mainDroiteTriMesh.material = bakedFrames
        mainGaucheTriMesh.material = bakedFrames
        piedTriMesh.material = bakedFrames
        teteTriMesh.material = bakedFrames
        
        brasGaucheBenMesh.material = bakedFrames
        brasDroitBenMesh.material = bakedFrames
        cheveuxBenMesh.material = bakedFrames
        corpsBenMesh.material = bakedFrames
        culBenMesh.material = bakedFrames
        jambeDroiteBenMesh.material = bakedFrames
        jambeGaucheBenMesh.material = bakedFrames
        mainDroiteBenMesh.material = bakedFrames
        mainGaucheBenMesh.material = bakedFrames
        piedBenMesh.material = bakedFrames
        teteBenMesh.material = bakedFrames
        chignonBenMesh.material = bakedFrames
        
        

        scene.add(gltf.scene)
     }
)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 6
camera.position.y = 8
camera.position.z = 0
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()