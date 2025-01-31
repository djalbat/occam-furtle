"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _parameter = /*#__PURE__*/ _interop_require_default(require("../dom/parameter"));
var _parameters = /*#__PURE__*/ _interop_require_wildcard(require("../dom/parameters"));
var _types = require("../types");
var _parameterNames = require("../parameterNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var types = [
    _types.STRING_TYPE,
    _types.BOOLEAN_TYPE,
    _types.NODES_TYPE
], names = [
    _parameterNames.CONTENT_PARAMETER_NAME,
    _parameterNames.TERMINAL_PARAMETER_NAME,
    _parameterNames.CHILD_NODES_PARAMETER_NAME
];
var context = null, array = names.map(function(name, index) {
    var type = types[index], parameter = _parameter.default.fromNameAndType(name, type, context);
    return parameter;
}), string = (0, _parameters.stringFromArray)(array, context), parameters = _parameters.default.fromStringAndArray(string, array, context), nodeParameters = parameters; ///
var _default = nodeParameters;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXJhbWV0ZXJzL25vZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYXJhbWV0ZXIgZnJvbSBcIi4uL2RvbS9wYXJhbWV0ZXJcIjtcbmltcG9ydCBQYXJhbWV0ZXJzIGZyb20gXCIuLi9kb20vcGFyYW1ldGVyc1wiO1xuXG5pbXBvcnQgeyBzdHJpbmdGcm9tQXJyYXkgfSBmcm9tIFwiLi4vZG9tL3BhcmFtZXRlcnNcIjtcbmltcG9ydCB7IE5PREVTX1RZUEUsIFNUUklOR19UWVBFLCBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IENPTlRFTlRfUEFSQU1FVEVSX05BTUUsIFRFUk1JTkFMX1BBUkFNRVRFUl9OQU1FLCBDSElMRF9OT0RFU19QQVJBTUVURVJfTkFNRSB9IGZyb20gXCIuLi9wYXJhbWV0ZXJOYW1lc1wiO1xuXG5jb25zdCB0eXBlcyA9IFtcbiAgICAgICAgU1RSSU5HX1RZUEUsXG4gICAgICAgIEJPT0xFQU5fVFlQRSxcbiAgICAgICAgTk9ERVNfVFlQRSxcbiAgICAgIF0sXG4gICAgICBuYW1lcyA9IFtcbiAgICAgICAgQ09OVEVOVF9QQVJBTUVURVJfTkFNRSxcbiAgICAgICAgVEVSTUlOQUxfUEFSQU1FVEVSX05BTUUsXG4gICAgICAgIENISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FXG4gICAgICBdO1xuXG5jb25zdCBjb250ZXh0ID0gbnVsbCxcbiAgICAgIGFycmF5ID0gbmFtZXMubWFwKChuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCB0eXBlID0gdHlwZXNbaW5kZXhdLFxuICAgICAgICAgICAgICBwYXJhbWV0ZXIgPSBQYXJhbWV0ZXIuZnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXI7XG4gICAgICB9KSxcbiAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21BcnJheShhcnJheSwgY29udGV4dCksXG4gICAgICBwYXJhbWV0ZXJzID0gUGFyYW1ldGVycy5mcm9tU3RyaW5nQW5kQXJyYXkoc3RyaW5nLCBhcnJheSwgY29udGV4dCksXG4gICAgICBub2RlUGFyYW1ldGVycyA9IHBhcmFtZXRlcnM7ICAvLy9cblxuZXhwb3J0IGRlZmF1bHQgbm9kZVBhcmFtZXRlcnM7XG4iXSwibmFtZXMiOlsidHlwZXMiLCJTVFJJTkdfVFlQRSIsIkJPT0xFQU5fVFlQRSIsIk5PREVTX1RZUEUiLCJuYW1lcyIsIkNPTlRFTlRfUEFSQU1FVEVSX05BTUUiLCJURVJNSU5BTF9QQVJBTUVURVJfTkFNRSIsIkNISUxEX05PREVTX1BBUkFNRVRFUl9OQU1FIiwiY29udGV4dCIsImFycmF5IiwibWFwIiwibmFtZSIsImluZGV4IiwidHlwZSIsInBhcmFtZXRlciIsIlBhcmFtZXRlciIsImZyb21OYW1lQW5kVHlwZSIsInN0cmluZyIsInN0cmluZ0Zyb21BcnJheSIsInBhcmFtZXRlcnMiLCJQYXJhbWV0ZXJzIiwiZnJvbVN0cmluZ0FuZEFycmF5Iiwibm9kZVBhcmFtZXRlcnMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQStCQTs7O2VBQUE7OztnRUE3QnNCO2tFQUNDO3FCQUcrQjs4QkFDc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVGLElBQU1BLFFBQVE7SUFDTkMsa0JBQVc7SUFDWEMsbUJBQVk7SUFDWkMsaUJBQVU7Q0FDWCxFQUNEQyxRQUFRO0lBQ05DLHNDQUFzQjtJQUN0QkMsdUNBQXVCO0lBQ3ZCQywwQ0FBMEI7Q0FDM0I7QUFFUCxJQUFNQyxVQUFVLE1BQ1ZDLFFBQVFMLE1BQU1NLEdBQUcsQ0FBQyxTQUFDQyxNQUFNQztJQUN2QixJQUFNQyxPQUFPYixLQUFLLENBQUNZLE1BQU0sRUFDbkJFLFlBQVlDLGtCQUFTLENBQUNDLGVBQWUsQ0FBQ0wsTUFBTUUsTUFBTUw7SUFFeEQsT0FBT007QUFDVCxJQUNBRyxTQUFTQyxJQUFBQSwyQkFBZSxFQUFDVCxPQUFPRCxVQUNoQ1csYUFBYUMsbUJBQVUsQ0FBQ0Msa0JBQWtCLENBQUNKLFFBQVFSLE9BQU9ELFVBQzFEYyxpQkFBaUJILFlBQWEsR0FBRztJQUV2QyxXQUFlRyJ9