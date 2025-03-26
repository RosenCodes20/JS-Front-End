function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    
    gradientBox.addEventListener('mousemove', calculateHover);

    gradientBox.addEventListener('mouseout', mouseOut)

    function calculateHover(event) {
        let result = document.getElementById('result');
        let power = event.offsetX / (event.target.clientWidth);
        
        power *= 100;

        power = Math.floor(power);

        result.textContent = power +  '%';
    }

    function mouseOut() {
        let result = document.getElementById('result');
        result.textContent = '';
    }
}
