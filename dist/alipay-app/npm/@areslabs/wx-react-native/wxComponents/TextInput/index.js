const _my = require("../../../../../__antmove/api/index.js")(my);
const wx = _my;
var _interopRequireDefault = require("./@babel/runtime/helpers/interopRequireDefault");
var _toConsumableArray2 = _interopRequireDefault(
    require("./@babel/runtime/helpers/toConsumableArray")
);
Component(
    wx.__bridge.reactCompHelper({
        properties: {
            disabled: { type: Boolean, value: false },
            placeholder: { type: String, value: "" },
            autoFocus: { type: Boolean, value: false },
            defaultValue: { type: String, value: "" },
            value: { type: String, value: "" },
            autoCapitalize: { type: String, value: "none" },
            placeholderTextColor: null,
            multiline: { type: Boolean, value: false },
            editable: { type: Boolean, value: true },
            keyboardType: { type: String, value: "default" },
            maxLength: { type: Number, value: -1 }
        },
        data: { focusFlag: false },
        methods: {
            inneronblur: function inneronblur(val) {
                this.__isFocused = false;
                this.data.onEndEditing &&
                    this.data.onEndEditing(val.detail.value);
                this.data.onBlur && this.data.onBlur(val.detail.value);
            },
            zoomFirst: function zoomFirst(str) {
                var arr = (0, _toConsumableArray2.default)(str);
                if (arr.length) {
                    for (var k = 0; k < arr.length; k++) {
                        if (
                            (arr[k] >= "a" && arr[k] <= "z") ||
                            (arr[k] >= "A" && arr[k] <= "Z")
                        ) {
                            arr[k] = arr[k].toUpperCase();
                            break;
                        }
                    }
                }
                return arr.join("");
            },
            inneronInput: function inneronInput(val) {
                var _this = this;
                this.data.onKeyPress &&
                    this.data.onKeyPress(val.detail.keyCode);
                this.data.onChange && this.data.onChange(val.detail.keyCode);
                var str = val.detail.value;
                var setencs;
                var out = "";
                switch (this.data.autoCapitalize) {
                    case "characters": {
                        out = str.toUpperCase();
                        break;
                    }
                    case "sentences": {
                        setencs = str.split(/[.;]/g);
                        setencs = setencs.map(function(e) {
                            return _this.zoomFirst(e);
                        });
                        out = setencs.join(".");
                        break;
                    }
                    case "words": {
                        setencs = str.split(" ");
                        setencs = setencs.map(function(e) {
                            return _this.zoomFirst(e);
                        });
                        out = setencs.join(" ");
                        break;
                    }
                    default: {
                        out = str;
                        break;
                    }
                }
                this.data.onChangeText &&
                    this.data.onChangeText(val.detail.value);
            },
            inneronFocus: function inneronFocus() {
                this.__isFocused = true;
                this.data.onFocus && this.data.onFocus();
            },
            clear: function clear() {
                this.setData({ value: "" });
            },
            isFocused: function isFocused() {
                return this.__isFocused;
            },
            focus: function focus() {
                this.setData({ focusFlag: true });
            }
        }
    })
);
