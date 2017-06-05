window.addEventListener("load", function(e){

    var scrollCont =  document.querySelector(".parallax"),
        iceLeft = document.querySelector(".ice-left"),
        iceMiddle = document.querySelector(".ice-middle"),
        iceRight = document.querySelector(".ice-right"),
        whisky = document.querySelector(".whisky-bgr"),

        iceLeftFallSpeed = 1.11,
        iceMiddleFallSpeed = 1.08,
        iceRightFallSpeed = 1.01,

        iceLeftInitialTop = iceLeft.offsetTop,
        iceMiddleInitialTop = iceMiddle.offsetTop,
        iceRightInitialTop = iceRight.offsetTop,

        scrolled,
        dif,
        stage = 0,
        debounce,
        maxScroll = scrollCont.scrollHeight - window.innerHeight,
        rotateL = 0,
        rotateM = 0,
        rotateR = 0,
        maxStage = 20,
        oldScroll;

    //var debugInput = document.querySelector("input");
    //
    //function updateDebugState() {
    //    document.body.classList.toggle('debug-on', debugInput.checked);
    //}
    //debugInput.addEventListener("click", updateDebugState);

    function throttle(fn, threshhold, scope) {
        threshhold || (threshhold = 250);
        var last,
            deferTimer;
        return function () {
            var context = scope || this;

            var now = +new Date,
                args = arguments;
            if (last && now < last + threshhold) {
                // hold on to it
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function () {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    }

    function parallax(){
        scrolled = scrollCont.scrollTop;

        iceLeft.style.top = iceLeftInitialTop + (scrolled * iceLeftFallSpeed) + 'px';
        iceMiddle.style.top = iceMiddleInitialTop + (scrolled * iceMiddleFallSpeed) + 'px';
        iceRight.style.top = iceRightInitialTop + (scrolled * iceRightFallSpeed) + 'px';
        rotateL += scrolled >= oldScroll ? 0.3 : -0.3;
        rotateM += scrolled >= oldScroll ? 1 : -1;
        rotateR += scrolled >= oldScroll ? 0.7 : -0.7;
        iceLeft.style.transform = 'rotate(' + Math.floor(rotateL) + 'deg)';
        iceMiddle.style.transform = 'rotate(' + Math.floor(rotateM) + 'deg)';
        iceRight.style.transform = 'rotate(' + Math.floor(rotateR) + 'deg)';
        if( ( dif = maxScroll - scrolled ) <= 450 ) {
            animateWhisky();
            function animateWhisky() {
                if( !debounce ) {
                    debounce = true;
                    whisky.className = whisky.className.replace(/(^|.+)(?:\s?stage-\d+\s?)($|.*)/, function(p1, p2, p3) {
                        return p2 + p3;
                    });
                    if ( dif <= 3 ) {
                        stage = maxStage;
                        iceLeft.classList.add( 'hidden' );
                        iceMiddle.classList.add( 'hidden' );
                        iceRight.classList.add( 'hidden' );
                    } else if ( oldScroll < scrolled && ( stage < maxStage )) {
                        stage = stage + 0.4;
                    } else if ( stage !== 0 ) {
                        stage = stage - 0.4;
                        iceLeft.classList.remove( 'hidden' );
                        iceMiddle.classList.remove( 'hidden' );
                        iceRight.classList.remove( 'hidden' );
                    }
                    whisky.classList.add('stage-' + ~~stage);
                    debounce = false;
                    oldScroll = scrolled;
                } else {
                    setTimeout(function () {
                        animateWhisky()
                    }, 100 );
                }
            }
        } else {
            whisky.className = whisky.className.replace(/(^|.+)(?:\s?stage-\d+\s?)($|.*)/, function(p1, p2, p3) {
                return p2 + p3;
            });
            stage = 0;
            oldScroll = scrolled;
        }

    }


    scrollCont.addEventListener( 'scroll', function() {
        parallax();
    });

}) ;


