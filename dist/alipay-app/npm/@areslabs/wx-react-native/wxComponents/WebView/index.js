const _my = require("../../../../../__antmove/api/index.js")(my);
const wx = _my;
Component(
    wx.__bridge.reactCompHelper({
        properties: { source: null },
        methods: {
            onMyMessage: function onMyMessage(e) {
                this.data.onMessage && this.data.onMessage(e);
            },
            onMyLoad: function onMyLoad(e) {
                this.data.onLoad && this.data.onLoad(e);
            },
            onMyError: function onMyError(e) {
                this.data.onError && this.data.onError(e);
            }
        }
    })
);
