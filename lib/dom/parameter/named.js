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
                var type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), asName = asNameFromNamedParameterNode(namedParameterNode, context), node = namedParameterNode, string = context.nodeAsString(node), namedParameter = new NamedParameter(string, type, name, asName);
                return namedParameter;
            }
        }
    ]);
    return NamedParameter;
}(), _define_property(_NamedParameter, "name", "NamedParameter"), _NamedParameter));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcGFyYW1ldGVyL25hbWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHR5cGVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9uYW1lZFBhcmFtZXRlci9AdHlwZVwiKSxcbiAgICAgIG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9uYW1lZFBhcmFtZXRlci9AbmFtZVswXVwiKSxcbiAgICAgIGFzTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25hbWVkUGFyYW1ldGVyL0BuYW1lWzFdXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBOYW1lZFBhcmFtZXRlciB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbmFtZSwgYXNOYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYXNOYW1lID0gYXNOYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldEFzTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hc05hbWU7XG4gIH1cblxuICBtYXRjaFZhbHVlKHZhbHVlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IHZhbHVlVHlwZSA9IHZhbHVlLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IHZhbHVlVHlwZSkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBUaGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUncyAnJHt2YWx1ZVR5cGV9JyB0eXBlICBhbmQgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIncyAnJHt0aGlzLnR5cGV9JyB0eXBlIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyTWF0Y2hlcztcblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlcjsgLy8vXG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckFTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckEuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJCLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyQVN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlckJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9ICgodGhpcy5uYW1lID09PSBuYW1lKSAmJiAodGhpcy50eXBlID09PSB0eXBlKSk7XG5cbiAgICBpZiAobmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmFtZWRQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBhc05hbWUgPSBhc05hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyTm9kZSwgLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlciA9IG5ldyBOYW1lZFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUsIGFzTmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpLFxuICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBhc05hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXNOYW1lID0gbnVsbDtcblxuICBjb25zdCBhc05hbWVUZXJtaW5hbE5vZGUgPSBhc05hbWVUZXJtaW5hbE5vZGVRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpO1xuXG4gIGlmIChhc05hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBhc05hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gYXNOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIGFzTmFtZSA9IGFzTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGFzTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJhc05hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTmFtZWRQYXJhbWV0ZXIiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImFzTmFtZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0QXNOYW1lIiwibWF0Y2hWYWx1ZSIsInZhbHVlIiwiY29udGV4dCIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJtYXRjaE5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlck1hdGNoZXMiLCJuYW1lZFBhcmFtZXRlckEiLCJuYW1lZFBhcmFtZXRlckIiLCJuYW1lZFBhcmFtZXRlckFTdHJpbmciLCJuYW1lZFBhcmFtZXRlckJTdHJpbmciLCJmcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZWRQYXJhbWV0ZXJOb2RlIiwidHlwZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsImFzTmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImFzTmFtZVRlcm1pbmFsTm9kZSIsImFzTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dFQVRzQjttQkFFTTtxQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQywwQkFDbENDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDbENFLDBCQUEwQkYsSUFBQUEsZ0JBQVMsRUFBQztJQUUxQyxXQUFlRyxJQUFBQSxnQkFBVyxtQ0FBQzthQUFNQyxlQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsTUFBTTtnQ0FEUEo7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBOzs7O1lBR2hCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFQyxPQUFPO2dCQUN2QixJQUFNQyxjQUFjRixNQUFNRyxRQUFRLENBQUNGLFVBQzdCRyx1QkFBdUIsSUFBSSxD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