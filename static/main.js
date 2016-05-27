(function () {
    var main = new Vue({
        el: "#main-container",
        data: {
            title: "第十四届菇吧淘汰赛",
            namelist: null,
            bracket: null
        },
        ready: function () {
            this.$http.get('./data/guba14.json').then(function (response) {
                this.namelist = response.data.namelist;
                this.bracket = response.data.bracket;
                this.$el.style.display = "block";
            })
        }
    });
})();