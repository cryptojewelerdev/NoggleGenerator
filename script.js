function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
function redrawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Base URL for your GitHub assets (adjust based on your repo)
    const baseURL = 'https://github.com/cryptojewelerdev/NoggleGenerator/raw/main/assets';

    // Use relative paths for each feature based on the selected features
    const images = {
        tier: `${baseURL}/tiers/${selectedFeatures.tier}`,
        metal: `${baseURL}/metals/${selectedFeatures.metal}`,
        eyes: `${baseURL}/eyes/${selectedFeatures.eyes}`,
        gemstone: `${baseURL}/gemstones/${selectedFeatures.gemstone}`,
        enamel: `${baseURL}/enamel/${selectedFeatures.enamel}`,
        background: `${baseURL}/backgrounds/${selectedFeatures.background}`,
    };

    // Load and draw each selected feature on the canvas
    Object.values(images).forEach(imageSrc => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = () => ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    });
}
