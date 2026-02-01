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
var _Parameters;
var _default = (0, _elements.define)((_Parameters = /*#__PURE__*/ function() {
    function Parameters(string, array) {
        _class_call_check(this, Parameters);
        this.string = string;
        this.array = array;
    }
    _create_class(Parameters, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var length = this.array.length;
                return length;
            }
        },
        {
            key: "getParameter",
            value: function getParameter(index) {
                var parameter = this.array[index] || null;
                return parameter;
            }
        },
        {
            key: "forEachParameter",
            value: function forEachParameter(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "matchPrimitives",
            value: function matchPrimitives(primitives, context) {
                var primitivesString = primitives.getString(), parametersString = this.string; ///
                context.trace("Matching the ".concat(primitivesString, " primitives against the '").concat(parametersString, "' parameters..."));
                var primitivesLength = primitives.getLength(), parametersLength = this.getLength();
                if (primitivesLength !== parametersLength) {
                    var message = "The ".concat(primitivesString, " expressions and '").concat(parametersString, "' parameters are not of the same length."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                this.forEachParameter(function(parameter, index) {
                    if (parameter !== null) {
                        var primitive = primitives.getExpression(index);
                        parameter.matchPrimitive(primitive, context);
                    }
                });
                context.debug("...matched the ".concat(primitivesString, " primitives against the '").concat(parametersString, "' parameters."));
            }
        }
    ]);
    return Parameters;
}(), _define_property(_Parameters, "name", "Parameters"), _Parameters));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFBhcmFtZXRlcnMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcihpbmRleCkge1xuICAgIGNvbnN0IHBhcmFtZXRlciA9IHRoaXMuYXJyYXlbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG5cbiAgZm9yRWFjaFBhcmFtZXRlcihjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgbWF0Y2hQcmltaXRpdmVzKHByaW1pdGl2ZXMsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmltaXRpdmVzU3RyaW5nID0gcHJpbWl0aXZlcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwYXJhbWV0ZXJzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICR7cHJpbWl0aXZlc1N0cmluZ30gcHJpbWl0aXZlcyBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJzU3RyaW5nfScgcGFyYW1ldGVycy4uLmApO1xuXG4gICAgY29uc3QgcHJpbWl0aXZlc0xlbmd0aCA9IHByaW1pdGl2ZXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgcGFyYW1ldGVyc0xlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICBpZiAocHJpbWl0aXZlc0xlbmd0aCAhPT0gcGFyYW1ldGVyc0xlbmd0aCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJHtwcmltaXRpdmVzU3RyaW5nfSBleHByZXNzaW9ucyBhbmQgJyR7cGFyYW1ldGVyc1N0cmluZ30nIHBhcmFtZXRlcnMgYXJlIG5vdCBvZiB0aGUgc2FtZSBsZW5ndGguYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMuZm9yRWFjaFBhcmFtZXRlcigocGFyYW1ldGVyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHBhcmFtZXRlciAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcmltaXRpdmUgPSBwcmltaXRpdmVzLmdldEV4cHJlc3Npb24oaW5kZXgpO1xuXG4gICAgICAgIHBhcmFtZXRlci5tYXRjaFByaW1pdGl2ZShwcmltaXRpdmUsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHtwcmltaXRpdmVzU3RyaW5nfSBwcmltaXRpdmVzIGFnYWluc3QgdGhlICcke3BhcmFtZXRlcnNTdHJpbmd9JyBwYXJhbWV0ZXJzLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlcnNcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlBhcmFtZXRlcnMiLCJzdHJpbmciLCJhcnJheSIsImdldFN0cmluZyIsImdldEFycmF5IiwiZ2V0TGVuZ3RoIiwibGVuZ3RoIiwiZ2V0UGFyYW1ldGVyIiwiaW5kZXgiLCJwYXJhbWV0ZXIiLCJmb3JFYWNoUGFyYW1ldGVyIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwibWF0Y2hQcmltaXRpdmVzIiwicHJpbWl0aXZlcyIsImNvbnRleHQiLCJwcmltaXRpdmVzU3RyaW5nIiwicGFyYW1ldGVyc1N0cmluZyIsInRyYWNlIiwicHJpbWl0aXZlc0xlbmd0aCIsInBhcmFtZXRlcnNMZW5ndGgiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJwcmltaXRpdmUiLCJnZXRFeHByZXNzaW9uIiwibWF0Y2hQcmltaXRpdmUiLCJkZWJ1ZyIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dFQUpzQjt3QkFFQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLCtCQUFDO2FBQU1DLFdBQ2RDLE1BQU0sRUFBRUMsS0FBSztnQ0FEQ0Y7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBOzs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxTQUFTLElBQUksQ0FBQ0osS0FBSyxDQUFDSSxNQUFNO2dCQUVoQyxPQUFPQTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLEtBQUs7Z0JBQ2hCLElBQU1DLFlBQVksSUFBSSxDQUFDUCxLQUFLLENBQUNNLE1BQU0sSUFBSTtnQkFFdkMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFFBQVE7Z0JBQUksSUFBSSxDQUFDVCxLQUFLLENBQUNVLE9BQU8sQ0FBQ0Q7WUFBVzs7O1lBRTNERSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ2pDLElBQU1DLG1CQUFtQkYsV0FBV1gsU0FBUyxJQUN2Q2MsbUJBQW1CLElBQUksQ0FBQ2hCLE1BQU0sRUFBRSxHQUFHO2dCQUV6Q2MsUUFBUUcsS0FBSyxDQUFDLEFBQUMsZ0JBQTJERCxPQUE1Q0Qsa0JBQWlCLDZCQUE0QyxPQUFqQkMsa0JBQWlCO2dCQUUzRixJQUFNRSxtQkFBbUJMLFdBQVdULFNBQVMsSUFDdkNlLG1CQUFtQixJQUFJLENBQUNmLFNBQVM7Z0JBRXZDLElBQUljLHFCQUFxQkMsa0JBQWtCO29CQUN6QyxJQUFNQyxVQUFVLEFBQUMsT0FBMkNKLE9BQXJDRCxrQkFBaUIsc0JBQXFDLE9BQWpCQyxrQkFBaUIsNkNBQ3ZFSyxZQUFZQyxrQkFBUyxDQUFDQyxXQUFXLENBQUNIO29CQUV4QyxNQUFNQztnQkFDUjtnQkFFQSxJQUFJLENBQUNaLGdCQUFnQixDQUFDLFNBQUNELFdBQVdEO29CQUNoQyxJQUFJQyxjQUFjLE1BQU07d0JBQ3RCLElBQU1nQixZQUFZWCxXQUFXWSxhQUFhLENBQUNsQjt3QkFFM0NDLFVBQVVrQixjQUFjLENBQUNGLFdBQVdWO29CQUN0QztnQkFDRjtnQkFFQUEsUUFBUWEsS0FBSyxDQUFDLEFBQUMsa0JBQTZEWCxPQUE1Q0Qsa0JBQWlCLDZCQUE0QyxPQUFqQkMsa0JBQWlCO1lBQy9GOzs7O0tBRUEsOEJBQU9ZLFFBQU8ifQ==