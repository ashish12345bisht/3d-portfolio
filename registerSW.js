if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/3d-portfolio/sw.js', { scope: '/3d-portfolio/' })})}