document.addEventListener("DOMContentLoaded", function () {
    var lastElementClicked;

    Barba.Pjax.init();
    Barba.Prefetch.init();

    Barba.Dispatcher.on('linkClicked', (el) => lastElementClicked = el);

    var MovePage = Barba.BaseTransition.extend({
        start: function () {
            this.originalThumb = lastElementClicked;

            Promise.all([this.newContainerLoading, this.scrollTop()])
                .then(this.movePages.bind(this));
        },

        scrollTop: function () {
            var deferred = Barba.Utils.deferred();
            var obj = { y: window.pageYOffset };

            TweenLite.to(obj, 0.4, {
                y: 0,
                onUpdate: function () {
                    if (obj.y === 0) deferred.resolve();

                    window.scroll(0, obj.y);
                },
                onComplete: () => deferred.resolve()

            });

            return deferred.promise;
        },

        movePages: function () {

            var _this = this;
            var goingForward = true;

            let pages = ['index.html', 'about.html', 'work.html', 'skills.html', 'contact.html'];
            slider.switching = true;

            if (pages.indexOf(this.getPrevPageFile()) > pages.indexOf(this.getNewPageFile())) goingForward = false;

            let move = goingForward ? -1 : 1;

            if (this.getPrevPageFile() == 'work.html') {
                slider.position = move;
                slider.slides.forEach((e) => TweenLite.to(e.position, 1, { x: e.position.x + move * slider.slider_width, ease: Power2.easeOut }));
            } else if (this.getNewPageFile() == 'work.html') {
                slider.slides.forEach((e) => TweenLite.to(e.position, 1, { x: e.position.x + (-slider.position) * slider.slider_width, ease: Power2.easeOut }));
                slider.position = 0;
            }

            if (this.getNewPageFile() == 'index.html') {
                typeout(
                    ".typeout",
                    ["a programmer", "a computer-scientist", "a designer", "a developer"],
                    {
                        numLoops: 12,
                        callback: (el) => el.innerHTML += "."
                    }
                );
            }

            TweenLite.set(this.newContainer, {
                visibility: 'visible',
                xPercent: goingForward ? 100 : -100,
                position: 'fixed',
                left: 0,
                top: 0,
                right: 0
            });

            TweenLite.to(this.oldContainer, 0.6, { xPercent: goingForward ? -100 : 100 });
            TweenLite.to(this.newContainer, 0.6, {
                xPercent: 0, onComplete: function () {
                    TweenLite.set(_this.newContainer, { clearProps: 'all' });
                    _this.done();
                    slider.switching = false;
                }
            });


        },

        getNewPageFile: () => Barba.HistoryManager.currentStatus().url.split('/').pop(),
        getPrevPageFile: () => Barba.HistoryManager.prevStatus().url.split('/').pop()

    });

    Barba.Pjax.getTransition = () => MovePage;
});