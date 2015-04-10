$.widget("proavos.progressbar", {

    options: {
        data: {
            currency: 'USD',
            dataSet: [
                {date: '2015/05/01', value: 250 },
                {date: '2015/05/02', value: 250 },
                {date: '2015/05/03', value: 300 },
                {date: '2015/05/04', value: 250 },
                {date: '2015/05/05', value: 280 },
                {date: '2015/05/06', value: 250 }
            ]
        }
    },

    _create: function () {
        var progress = this.options.value + "%";
        this.element
            .addClass("progressbar")
            .text(progress);
    },


    value: function (value) {

    },

    // Create a private method.
    _constrain: function (value) {
    }
});