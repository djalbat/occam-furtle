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
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
var _dom = require("../../dom");
var _query = require("../../utilities/query");
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
var _NamedParameter;
var typeTerminalNodeQuery = (0, _query.nodeQuery)("/namedParameter/@type"), nameTerminalNodeQuery = (0, _query.nodeQuery)("/namedParameter/@name[0]"), asNameTerminalNodeQuery = (0, _query.nodeQuery)("/namedParameter/@name[1]");
var _default = (0, _dom.domAssigned)((_NamedParameter = /*#__PURE__*/ function() {
    function NamedParameter(string, type, name, asName) {
        _class_call_check(this, NamedParameter);
        this.string = string;
        this.type = type;
        this.name = name;
        this.asName = asName;
    }
    _create_class(NamedParameter, [
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
            key: "getAsName",
            value: function getAsName() {
                return this.asName;
            }
        },
        {
            key: "matchValue",
            value: function matchValue(value, context) {
                var valueString = value.asString(context), namedParameterString = this.string; ///
                context.trace("Matching the ".concat(valueString, " value against the '").concat(namedParameterString, "' named parameter..."));
                var valueType = value.getType();
                if (this.type !== valueType) {
                    var message = "The ".concat(valueString, " value's '").concat(valueType, "' type  and '").concat(namedParameterString, "' named parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(valueString, " value against the '").concat(namedParameterString, "' named parameter."));
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterMatches;
                var namedParameterA = this, namedParameterB = namedParameter; ///
                var namedParameterAString = namedParameterA.getString(), namedParameterBString = namedParameterB.getString();
                context.trace("Matching the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter..."));
                var name = namedParameter.getName(), type = namedParameter.getType();
                namedParameterMatches = this.name === name && this.type === type;
                if (namedParameterMatches) {
                    context.debug("...matched the '".concat(namedParameterAString, "' named parameter against the '").concat(namedParameterBString, "' named parameter."));
                }
                return namedParameterMatches;
            }
        }
    ], [
        {
            key: "fromNamedParameterNode",
            value: function fromNamedParameterNode(namedParameterNode, context) {
                var type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), asName = asNameFromNamedParameterNode(namedParameterNode, context), string = stringFromTypeNameAndAsName(type, name, asName, context), namedParameter = new NamedParameter(string, type, name, asName);
                return namedParameter;
            }
        }
    ]);
    return NamedParameter;
}(), _define_property(_NamedParameter, "name", "NamedParameter"), _NamedParameter));
function stringFromTypeNameAndAsName(type, name, asName, context) {
    var string;
    var typeString = type, nameString = name; ///
    string = "".concat(typeString, " ").concat(nameString);
    if (asName !== null) {
        var asNameString = asName; ///
        string = "".concat(string, " As ").concat(asNameString);
    }
    return string;
}
function typeFromNamedParameterNode(namedParameterNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(namedParameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}
function nameFromNamedParameterNode(namedParameterNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(namedParameterNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function asNameFromNamedParameterNode(namedParameterNode, context) {
    var asName = null;
    var asNameTerminalNode = asNameTerminalNodeQuery(namedParameterNode);
    if (asNameTerminalNode !== null) {
        var asNameTerminalNodeContent = asNameTerminalNode.getContent();
        asName = asNameTerminalNodeContent; ///
    }
    return asName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcGFyYW1ldGVyL25hbWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9uYW1lZFBhcmFtZXRlci9AdHlwZVwiKSxcbiAgICAgIG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9uYW1lZFBhcmFtZXRlci9AbmFtZVswXVwiKSxcbiAgICAgIGFzTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25hbWVkUGFyYW1ldGVyL0BuYW1lWzFdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBOYW1lZFBhcmFtZXRlciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbmFtZSwgYXNOYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXNOYW1lID0gYXNOYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEFzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hc05hbWU7XG4gIH1cblxuICBtYXRjaFZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHZhbHVlVHlwZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlICBhbmQgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyAnJHt0aGlzLnR5cGV9JyB0eXBlIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyTWF0Y2hlcztcblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlcjsgLy8vXG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckFTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckEuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJCLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyQVN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlckJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9ICgodGhpcy5uYW1lID09PSBuYW1lKSAmJiAodGhpcy50eXBlID09PSB0eXBlKSk7XG5cbiAgICBpZiAobmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmFtZWRQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhc05hbWUgPSBhc05hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kQXNOYW1lKHR5cGUsIG5hbWUsIGFzTmFtZSwgY29udGV4dCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXIgPSBuZXcgTmFtZWRQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lLCBhc05hbWUpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVOYW1lQW5kQXNOYW1lKHR5cGUsIG5hbWUsIGFzTmFtZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLCAgLy8vXG4gICAgICAgIG5hbWVTdHJpbmcgPSBuYW1lOyAgLy8vXG5cbiAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gJHtuYW1lU3RyaW5nfWA7XG5cbiAgaWYgKGFzTmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGFzTmFtZVN0cmluZyA9IGFzTmFtZTsgIC8vL1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSBBcyAke2FzTmFtZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuXG5mdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpLFxuICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBhc05hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXNOYW1lID0gbnVsbDtcblxuICBjb25zdCBhc05hbWVUZXJtaW5hbE5vZGUgPSBhc05hbWVUZXJtaW5hbE5vZGVRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpO1xuXG4gIGlmIChhc05hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBhc05hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gYXNOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIGFzTmFtZSA9IGFzTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGFzTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJhc05hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTmFtZWRQYXJhbWV0ZXIiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImFzTmFtZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0QXNOYW1lIiwibWF0Y2hWYWx1ZSIsInZhbHVlIiwiY29udGV4dCIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJtYXRjaE5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlck1hdGNoZXMiLCJuYW1lZFBhcmFtZXRlckEiLCJuYW1lZFBhcmFtZXRlckIiLCJuYW1lZFBhcmFtZXRlckFTdHJpbmciLCJuYW1lZFBhcmFtZXRlckJTdHJpbmciLCJmcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFzTmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJzdHJpbmdGcm9tVHlwZU5hbWVBbmRBc05hbWUiLCJ0eXBlU3RyaW5nIiwibmFtZVN0cmluZyIsImFzTmFtZVN0cmluZyIsInR5cGVUZXJtaW5hbE5vZGUiLCJ0eXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJuYW1lVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJhc05hbWVUZXJtaW5hbE5vZGUiLCJhc05hbWVUZXJtaW5hbE5vZGVDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnRUFUc0I7bUJBRU07cUJBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQSx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsMEJBQ2xDQyx3QkFBd0JELElBQUFBLGdCQUFTLEVBQUMsNkJBQ2xDRSwwQkFBMEJGLElBQUFBLGdCQUFTLEVBQUM7SUFFMUMsV0FBZUcsSUFBQUEsZ0JBQVcsbUNBQUM7YUFBTUMsZUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLE1BQU07Z0NBRFBKO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFB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