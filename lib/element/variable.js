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
var _string = require("../utilities/string");
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
var _Variable;
var _default = (0, _elements.define)((_Variable = /*#__PURE__*/ function() {
    function Variable(string, type, name, prmitive1) {
        _class_call_check(this, Variable);
        this.string = string;
        this.type = type;
        this.name = name;
        this.prmitive = prmitive1;
    }
    _create_class(Variable, [
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
            key: "getPrimitive",
            value: function getPrimitive() {
                return this.prmitive;
            }
        },
        {
            key: "matchVariableName",
            value: function matchVariableName(variableName) {
                var nameMatches = this.name === variableName;
                return nameMatches;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var variableString = this.string; ///
                context.trace("Evaluating the '".concat(variableString, "' variable..."));
                var nested = true, variableName = this.name, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
                if (!variablePresent) {
                    var message = "The '".concat(variableString, "; variable is not present.'"), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var variable = context.findVariableByVariableName(variableName), prmitive1 = variable.getExpression(), prmitiveString = prmitive1.getString();
                context.debug("...evaluated the '".concat(variableString, "' variable to the '").concat(prmitiveString, "' prmitive."));
                return prmitive1;
            }
        },
        {
            key: "assign",
            value: function assign(prmitive1, context) {
                var nested = false, prmitiveString = prmitive1.getString(), variableName = this.name, variableString = this.string, variablePresent = context.isVariablePresentByVariableName(variableName, nested);
                context.trace("Assigning the '".concat(prmitiveString, "' prmitive to the '").concat(variableString, "' variable..."));
                if (variablePresent) {
                    var message = "The '".concat(variableString, "' variable is already present."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                var prmitiveType = prmitive1.getType(), variableType = this.type;
                if (prmitiveType !== variableType) {
                    var message1 = "The '".concat(variableString, " variable's '").concat(variableType, "' type does not match the prmitive's '").concat(prmitiveType, "' type.'"), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                this.prmitive = prmitive1;
                var variable = this; ///
                context.addVariable(variable);
                context.debug("...assigned the '".concat(prmitiveString, "' prmitive to the '").concat(variableString, "' variable."));
            }
        }
    ], [
        {
            key: "fromParameter",
            value: function fromParameter(parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), prmitive1 = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, prmitive1);
                return variable;
            }
        },
        {
            key: "fromNamedParameter",
            value: function fromNamedParameter(namedParameter, context) {
                var aliasedName = namedParameter.getAliasedName(), type = namedParameter.getType(), name = aliasedName, prmitive1 = null, variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, prmitive1);
                return variable;
            }
        },
        {
            key: "fromPrimitiveAndParameter",
            value: function fromPrimitiveAndParameter(primitive, parameter, context) {
                var type = parameter.getType(), name = parameter.getName(), variableString = (0, _string.variableStringFromName)(name), string = variableString, variable = new Variable(string, type, name, prmitive);
                return variable;
            }
        }
    ]);
    return Variable;
}(), _define_property(_Variable, "name", "Variable"), _Variable));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFZhcmlhYmxlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lLCBwcm1pdGl2ZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnBybWl0aXZlID0gcHJtaXRpdmU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0UHJpbWl0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLnBybWl0aXZlO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB2YXJpYWJsZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVNYXRjaGVzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgbmVzdGVkID0gdHJ1ZSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUsIG5lc3RlZCk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9OyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIHBybWl0aXZlID0gdmFyaWFibGUuZ2V0RXhwcmVzc2lvbigpLFxuICAgICAgICAgIHBybWl0aXZlU3RyaW5nID0gcHJtaXRpdmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlICcke3BybWl0aXZlU3RyaW5nfScgcHJtaXRpdmUuYCk7XG5cbiAgICByZXR1cm4gcHJtaXRpdmU7XG4gIH1cblxuICBhc3NpZ24ocHJtaXRpdmUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICBwcm1pdGl2ZVN0cmluZyA9IHBybWl0aXZlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSwgbmVzdGVkKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFzc2lnbmluZyB0aGUgJyR7cHJtaXRpdmVTdHJpbmd9JyBwcm1pdGl2ZSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBhbHJlYWR5IHByZXNlbnQuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IHBybWl0aXZlVHlwZSA9IHBybWl0aXZlLmdldFR5cGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGUgPSB0aGlzLnR5cGU7XG5cbiAgICBpZiAocHJtaXRpdmVUeXBlICE9PSB2YXJpYWJsZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICcke3ZhcmlhYmxlU3RyaW5nfSB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZX0nIHR5cGUgZG9lcyBub3QgbWF0Y2ggdGhlIHBybWl0aXZlJ3MgJyR7cHJtaXRpdmVUeXBlfScgdHlwZS4nYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIHRoaXMucHJtaXRpdmUgPSBwcm1pdGl2ZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpczsgIC8vL1xuXG4gICAgY29udGV4dC5hZGRWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hc3NpZ25lZCB0aGUgJyR7cHJtaXRpdmVTdHJpbmd9JyBwcm1pdGl2ZSB0byB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZVwiO1xuXG4gIHN0YXRpYyBmcm9tUGFyYW1ldGVyKHBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJhbWV0ZXIuZ2V0VHlwZSgpLFxuICAgICAgICAgIG5hbWUgPSBwYXJhbWV0ZXIuZ2V0TmFtZSgpLFxuICAgICAgICAgIHBybWl0aXZlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHBybWl0aXZlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBjb25zdCBhbGlhc2VkTmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldEFsaWFzZWROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKSxcbiAgICAgICAgICBuYW1lID0gYWxpYXNlZE5hbWUsIC8vL1xuICAgICAgICAgIHBybWl0aXZlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlU3RyaW5nRnJvbU5hbWUobmFtZSksXG4gICAgICAgICAgc3RyaW5nID0gdmFyaWFibGVTdHJpbmcsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIHR5cGUsIG5hbWUsIHBybWl0aXZlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJpbWl0aXZlQW5kUGFyYW1ldGVyKHByaW1pdGl2ZSwgcGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcmFtZXRlci5nZXRUeXBlKCksXG4gICAgICAgICAgbmFtZSA9IHBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZVN0cmluZ0Zyb21OYW1lKG5hbWUpLFxuICAgICAgICAgIHN0cmluZyA9IHZhcmlhYmxlU3RyaW5nLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCB0eXBlLCBuYW1lLCBwcm1pdGl2ZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlZhcmlhYmxlIiwic3RyaW5nIiwidHlwZSIsIm5hbWUiLCJwcm1pdGl2ZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0UHJpbWl0aXZlIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJuYW1lTWF0Y2hlcyIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhcmlhYmxlU3RyaW5nIiwidHJhY2UiLCJuZXN0ZWQiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImdldEV4cHJlc3Npb24iLCJwcm1pdGl2ZVN0cmluZyIsImRlYnVnIiwiYXNzaWduIiwicHJtaXRpdmVUeXBlIiwidmFyaWFibGVUeXBlIiwiYWRkVmFyaWFibGUiLCJmcm9tUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidmFyaWFibGVTdHJpbmdGcm9tTmFtZSIsImZyb21OYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyIiwiYWxpYXNlZE5hbWUiLCJnZXRBbGlhc2VkTmFtZSIsImZyb21QcmltaXRpdmVBbmRQYXJhbWV0ZXIiLCJwcmltaXRpdmUiXSwi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