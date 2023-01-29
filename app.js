function stars() {
    const count = 200;
    const section = document.querySelector('section');
    var i = 0;

    while( i < count) {
        const star = document.createElement('i');
        const x = Math.floor( Math.random() * window.innerWidth)
        const y = Math.floor( Math.random() * window.innerHeight)

        const size = Math.random() * 4;
        star.style.left = x + 'px';
        star.style.right = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        section.appendChild(star);
        i++
    }
}

stars();