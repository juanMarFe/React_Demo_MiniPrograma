const _my = require("../../../../../__antmove/api/index.js")(my);
const wx = _my;
Component(
    wx.__bridge.reactCompHelper({
        properties: {
            visible: {
                type: Boolean,
                value: false,
                observer: function observer(nv) {
                    if (nv) {
                        this.data.onShow && this.data.onShow();
                    } else {
                        this.data.onDismiss && this.data.onDismiss();
                    }
                }
            },
            transparent: { type: Boolean, value: false },
            animationType: { type: String, value: "none" }
        }
    })
);
