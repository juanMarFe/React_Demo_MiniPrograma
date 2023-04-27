const _my = require("../../../../../__antmove/api/index.js")(my);
const wx = _my;
Component(
    wx.__bridge.reactCompHelper({
        properties: { source: null, imageStyle: null, resizeMode: null },
        methods: {
            onLoad: function onLoad() {
                this.data.onLoad && this.data.onLoad();
            },
            onError: function onError() {
                this.data.onError && this.data.onError();
            }
        }
    })
);
