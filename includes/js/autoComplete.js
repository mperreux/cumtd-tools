function BindAutoComplete(a, b) {
    a.autocomplete({
        minLenght: 3,
        source: function (d, e) {
            var c = "http://www.cumtd.com/autocomplete/Stops/v1.0/json/search?query=" + a.val() + "&key=" + key;
            $.ajax({
                url: c,
                dataType: "jsonp",
                success: function (f) {
                    e($.map(f, function (g) {
                        return {
                            label: g.n,
                            value: g.n,
                            id: g.i
                        }
                    }))
                }
            })
        },
        select: function (d, c) {
            b.val(c.item.id)
        }
    })
};

function BindAutoCompleteWithRedirect(a) {
    a.autocomplete({
        minLenght: 3,
        source: function (c, d) {
            var b = "http://www.cumtd.com/autocomplete/Stops/v2.2/json/search?query=" + a.val() + "&key=" + key;
            $.ajax({
                url: b,
                dataType: "jsonp",
                success: function (e) {
                    d($.map(e, function (f) {
                        return {
                            label: f.n,
                            value: f.n,
                            id: f.i
                        }
                    }))
                }
            })
        },
        select: function (c, b) {
            document.location = "/maps-and-schedules/bus-stops/info/" + b.item.id + "?query=" + b.item.label
        }
    })
};