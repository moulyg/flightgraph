$.widget("custom.fareGraph", {

    options: {        
        currency: 'USD',
        url : 'data/data.json',
        ajaxMethod : 'GET',
        origin: 'CMB',
        destination : 'DXB'
    },

    _postData : function() { 
        var origin = this.options.origin;
        var destination = this.options.destination;
        var currency = this.options.currency;
            return {
                "origin": origin,
                "destination": destination,
                "currency": currency
            };
        },

    _create: function () {
       var element = this.element;
       var d =this._postData();
       element.fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: ''
            },
            eventSources: [
                // your event source
                {
                    url: this.options.url,
                    type: this.options.ajaxMethod,
                    contentType : 'application/json',
                    data: d,
                    error: function(e) {
                        console.log(e);
                        alert('there was an error while fetching events!');
                    },
                    cache: true
                }
            ],
            defaultDate: new Date(),
            editable: true,
            eventLimit: true
        });
    },


    value: function (value) {

    },

    // Create a private method.
    _constrain: function (value) {
    }
});