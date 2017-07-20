var sliders = document.getElementsByClassName('sliders');

[].forEach.call(sliders, function(el) {
    var next = el.getElementsByClassName('next')[0],
        preview = el.getElementsByClassName('preview')[0],
        bubblesContainer = el.getElementsByClassName('bubbles')[0],
        slides = el.getElementsByClassName('slider')[0],
        imgs = slides.getElementsByTagName('figure'),
        currentImageIndex = 0,
        width = 960,
        bubbles = [];

    for(var i = 0; i < imgs.length; i++) {
        var span = document.createElement('span');

        span.classList.add('bubble');
        bubblesContainer.appendChild(span);
        bubbles.push(span);
    }

    var bubbleSpan = el.querySelectorAll('span.bubble');
    [].forEach.call(bubbleSpan, function(element, index) {
        element.addEventListener('click', function() {
            currentImageIndex = index;
            switchImg();

            // console.log(index);
        });
    });


    function switchImg() {
        slides.style.left = -width * currentImageIndex + 'px';

        bubbles.forEach(function(b, i) {
            if(i == currentImageIndex) {
                b.classList.add('active');
            } else {
                b.classList.remove('active');
            }
        });
    }

    next.addEventListener('click', function() {
        currentImageIndex++;

        if(currentImageIndex >= imgs.length) {
            currentImageIndex = 0;
        }

        switchImg();
    });

    preview.addEventListener('click', function() {
        currentImageIndex--;

        if(currentImageIndex < 0) {
            currentImageIndex = imgs.length - 1;
        }

        switchImg();
    });

    // auto load
    setInterval(function() {
        currentImageIndex++;

        if(currentImageIndex >= imgs.length) {
            currentImageIndex = 0;
        }

        switchImg();
    }, 10000);

    switchImg();
    console.log(sliders);

});
