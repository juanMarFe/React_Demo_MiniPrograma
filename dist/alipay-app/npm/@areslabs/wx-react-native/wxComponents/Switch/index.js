const _my = require("../../../../../__antmove/api/index.js")(my);
const wx = _my;
Component(
    wx.__bridge.reactCompHelper({
        properties: {
            disabled: { type: Boolean, value: false },
            tintColor: { type: String, value: "" },
            value: { type: Boolean, value: false }
        },
        methods: {
            onValueChange: function onValueChange() {
                this.data.onValueChange &&
                    this.data.onValueChange(!this.data.value);
            }
        }
    })
);
