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
var _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
var _elements = require("../elements");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var _Parameter;
var _default = (0, _elements.define)((_Parameter = /*#__PURE__*/ function() {
    function Parameter(string, type, name) {
        _class_call_check(this, Parameter);
        this.string = string;
        this.type = type;
        this.name = name;
    }
    _create_class(Parameter, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "matchPrimitive",
            value: function matchPrimitive(primitive, context) {
                var primitiveString = primitive.getString(), parameterString = this.string; ///
                context.trace("Matching the ".concat(primitiveString, " primitive against the '").concat(parameterString, "' parameter..."));
                var primitiveType = primitive.getType();
                if (this.type !== primitiveType) {
                    var message = "The ".concat(primitiveString, " primitive's '").concat(primitiveType, "' type  and '").concat(parameterString, "' parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(primitiveString, " primitive against the '").concat(parameterString, "' parameter."));
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoUHJpbWl0aXZlKHByaW1pdGl2ZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByaW1pdGl2ZVN0cmluZyA9IHByaW1pdGl2ZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICR7cHJpbWl0aXZlU3RyaW5nfSBwcmltaXRpdmUgYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCBwcmltaXRpdmVUeXBlID0gcHJpbWl0aXZlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHByaW1pdGl2ZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICR7cHJpbWl0aXZlU3RyaW5nfSBwcmltaXRpdmUncyAnJHtwcmltaXRpdmVUeXBlfScgdHlwZSAgYW5kICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlcidzICcke3RoaXMudHlwZX0nIHR5cGUgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke3ByaW1pdGl2ZVN0cmluZ30gcHJpbWl0aXZlIGFnYWluc3QgdGhlICcke3BhcmFtZXRlclN0cmluZ30nIHBhcmFtZXRlci5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQYXJhbWV0ZXJcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlBhcmFtZXRlciIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJtYXRjaFByaW1pdGl2ZSIsInByaW1pdGl2ZSIsImNvbnRleHQiLCJwcmltaXRpdmVTdHJpbmciLCJwYXJhbWV0ZXJTdHJpbmciLCJ0cmFjZSIsInByaW1pdGl2ZVR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0VBSnNCO3dCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBREpIO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsU0FBUyxFQUFFQyxPQUFPO2dCQUMvQixJQUFNQyxrQkFBa0JGLFVBQVVKLFNBQVMsSUFDckNPLGtCQUFrQixJQUFJLENBQUNWLE1BQU0sRUFBRyxHQUFHO2dCQUV6Q1EsUUFBUUcsS0FBSyxDQUFDLEFBQUMsZ0JBQXlERCxPQUExQ0QsaUJBQWdCLDRCQUEwQyxPQUFoQkMsaUJBQWdCO2dCQUV4RixJQUFNRSxnQkFBZ0JMLFVBQVVILE9BQU87Z0JBRXZDLElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUtXLGVBQWU7b0JBQy9CLElBQU1DLFVBQVUsQUFBQyxPQUFzQ0QsT0FBaENILGlCQUFnQixrQkFBNkNDLE9BQTdCRSxlQUFjLGlCQUFnRCxPQUFqQ0YsaUJBQWdCLG1CQUEyQixPQUFWLElBQUksQ0FBQ1QsSUFBSSxFQUFDLHlCQUN6SGEsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFOLFFBQVFTLEtBQUssQ0FBQyxBQUFDLGtCQUEyRFAsT0FBMUNELGlCQUFnQiw0QkFBMEMsT0FBaEJDLGlCQUFnQjtZQUM1Rjs7OztLQUVBLDZCQUFPUixRQUFPIn0=