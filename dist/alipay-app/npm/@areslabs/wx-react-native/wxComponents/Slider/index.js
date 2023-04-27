const _my = require("../../../../../__antmove/api/index.js")(my);
const wx = _my;
Component(
    wx.__bridge.reactCompHelper({
        properties: {
            maximumValue: { type: Number, value: 100 },
            minimumValue: { type: Number, value: 0 },
            value: { type: Number, value: 0 },
            step: { type: Number, value: 0 },
            disabled: { type: Boolean, value: false },
            minimumTrackTintColor: { type: null },
            maximumTrackTintColor: { type: null }
        },
        methods: {
            onValueChange: function onValueChange(val) {
                this.data.onValueChange &&
                    this.data.onValueChange(val.detail.value / 100);
            },
            onSlidingComplete: function onSlidingComplete(val) {
                this.data.onValueChange &&
                    this.data.onSlidingComplete(val.detail.value / 100);
            }
        }
    })
);
