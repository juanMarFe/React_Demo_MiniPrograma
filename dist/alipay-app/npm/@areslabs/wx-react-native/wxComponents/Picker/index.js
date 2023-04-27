const _my = require("../../../../../__antmove/api/index.js")(my);
const wx = _my;
Component(
    wx.__bridge.reactCompHelper({
        properties: { selectedValue: null, onValueChange: null },
        methods: {
            onValueChange: function onValueChange(e) {
                var index = e.detail.value[0];
                var pickData = this.data._r.pickData;
                var value = pickData[index].value;
                this.data.onValueChange &&
                    this.data.onValueChange(value, index);
            }
        }
    })
);
