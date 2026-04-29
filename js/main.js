/**
 * WebXR Session Manager
 * Handles AR/VR mode toggling, controller events
 */

const scene = document.querySelector('#main-scene');

scene.addEventListener('loaded', () => {
  const overlay = document.querySelector('#loading-overlay');
  if (overlay) {
    overlay.style.display = 'none';
  }
  console.log('⚡ Electronics Lab loaded — Enter VR/AR on Quest 2/3');
});

let currentMode = 'vr';

function toggleXRMode() {
  if (!navigator.xr) {
    console.warn('WebXR not supported on this device/browser');
    return;
  }
  
  if (currentMode === 'vr') {
    navigator.xr.isSessionSupported('immersive-ar').then((supported) => {
      if (supported) {
        scene.setAttribute('webxr', 'requiredFeatures: local-floor; optionalFeatures: hand-tracking, plane-detection, depth-sensing, anchors');
        currentMode = 'ar';
        console.log('🌍 Switched to AR (passthrough) mode');
      } else {
        console.warn('immersive-ar not supported — Quest 3 required for color passthrough');
      }
    });
  } else {
    scene.setAttribute('webxr', 'requiredFeatures: local-floor, bounded-floor; optionalFeatures: hand-tracking');
    currentMode = 'vr';
    console.log('🥽 Switched to VR mode');
  }
}

const arBtn = document.querySelector('#ar-toggle-btn');
if (arBtn) {
  arBtn.addEventListener('click', toggleXRMode);
}

const rightHand = document.querySelector('#right-hand');
if (rightHand) {
  rightHand.addEventListener('abuttondown', toggleXRMode);
  rightHand.addEventListener('bbuttondown', () => {
    console.log('🔄 Scene reset');
  });
}

const leftHand = document.querySelector('#left-hand');
if (leftHand) {
  leftHand.addEventListener('xbuttondown', () => {
    const afo = document.querySelector('#afo-unit');
    if (afo && afo.components['afo-controller']) {
      afo.components['afo-controller'].cycleFrequency();
    }
  });
}

scene.addEventListener('enter-vr', () => {
  console.log('🥽 Entered VR');
});
scene.addEventListener('enter-ar', () => {
  console.log('🌍 Entered AR — Passthrough active');
});
scene.addEventListener('exit-vr', () => {
  console.log('↩️ Exited immersive mode');
});