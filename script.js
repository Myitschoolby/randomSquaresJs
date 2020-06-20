let Square = function(data) {
    if (!data || !data.size || !data.color) return;

    let element = null;

    let create = function() {
        element = document.createElement('div');
        element.style.width = data.size + 'px';
        element.style.height = data.size + 'px';
        element.style.backgroundColor = data.color;
    };

    create();
    
    this.get = function() {
        return element;
    };
};

let randomSquare = function(count) {
    let random = function(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    };

    let create = function(count) {
        document.body.innerHTML = '';
        
        for(let i = 1; i <= count; i++) {
            let square = new Square({
                size: random(10, 100),
                color: `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`
            });

            let squareElem = square.get();
            squareElem.style.position = 'absolute';
            squareElem.style.top = random(0, 100) + '%';
            squareElem.style.left = random(0, 100) + '%';
            squareElem.style.opacity = 0;
            squareElem.style.animation = `1s linear ${random(1, 5)}s fadeIn 2 alternate`;

            squareElem.style.borderRadius = (random(0, 1) ? 50 : 0) + '%';
            
            //document.body.style.backgroundColor = `rgba(${random(0, 255)},${random(0, 255)},${random(0, 255)}, ${Math.random()})`;
            document.body.appendChild(squareElem);
        }
    };

    //setInterval(_ => {create(random(5, 100))}, 5000);
    create(count);
};

randomSquare(20);