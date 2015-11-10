var oneClickHandler = {
    handleEvent: function (e) {

        alert("Click number: " + ++this.clicks);
        console.log(this);
        if (this.clicks === 1) {

            e.currentTarget.removeEventListener(e.type, this);
        }
    },
    clicks: 0
};

document.body.addEventListener('click', oneClickHandler);