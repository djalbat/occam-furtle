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
            key: "matchTerm",
            value: function matchTerm(term, context) {
                var termString = term.getString(), parameterString = this.string; ///
                context.trace("Matching the '".concat(termString, "' term against the '").concat(parameterString, "' parameter..."));
                var termType = term.getType();
                if (this.type !== termType) {
                    var message = "The '".concat(termString, "' term's '").concat(termType, "' type  and '").concat(parameterString, "' parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the '".concat(termString, "' term against the '").concat(parameterString, "' parameter."));
            }
        }
    ]);
    return Parameter;
}(), _define_property(_Parameter, "name", "Parameter"), _Parameter));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3BhcmFtZXRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcGFyYW1ldGVyU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB0ZXJtVHlwZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0ncyAnJHt0ZXJtVHlwZX0nIHR5cGUgIGFuZCAnJHtwYXJhbWV0ZXJTdHJpbmd9JyBwYXJhbWV0ZXIncyAnJHt0aGlzLnR5cGV9JyB0eXBlIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7cGFyYW1ldGVyU3RyaW5nfScgcGFyYW1ldGVyLmApO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUGFyYW1ldGVyIiwic3RyaW5nIiwidHlwZSIsIm5hbWUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsIm1hdGNoVGVybSIsInRlcm0iLCJjb250ZXh0IiwidGVybVN0cmluZyIsInBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwidGVybVR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7Z0VBSnNCO3dCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7YUFBTUMsVUFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBREpIO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFQyxPQUFPO2dCQUNyQixJQUFNQyxhQUFhRixLQUFLSixTQUFTLElBQzNCTyxrQkFBa0IsSUFBSSxDQUFDVixNQUFNLEVBQUcsR0FBRztnQkFFekNRLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGlCQUFpREQsT0FBakNELFlBQVcsd0JBQXNDLE9BQWhCQyxpQkFBZ0I7Z0JBRWhGLElBQU1FLFdBQVdMLEtBQUtILE9BQU87Z0JBRTdCLElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUtXLFVBQVU7b0JBQzFCLElBQU1DLFVBQVUsQUFBQyxRQUE4QkQsT0FBdkJILFlBQVcsY0FBb0NDLE9BQXhCRSxVQUFTLGlCQUFnRCxPQUFqQ0YsaUJBQWdCLG1CQUEyQixPQUFWLElBQUksQ0FBQ1QsSUFBSSxFQUFDLHlCQUM1R2EsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFOLFFBQVFTLEtBQUssQ0FBQyxBQUFDLG1CQUFtRFAsT0FBakNELFlBQVcsd0JBQXNDLE9BQWhCQyxpQkFBZ0I7WUFDcEY7Ozs7S0FFQSw2QkFBT1IsUUFBTyJ9