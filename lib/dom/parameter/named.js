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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _exception = /*#__PURE__*/ _interop_require_default(require("../../exception"));
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
            key: "matchExpression",
            value: function matchExpression(expression, context) {
                var expressionString = expression.asString(context), namedParameterString = this.string; ///
                context.trace("Matching the ".concat(expressionString, " expression against the '").concat(namedParameterString, "' named parameter..."));
                var expressionType = expression.getType();
                if (this.type !== expressionType) {
                    var message = "The ".concat(expressionString, " expression's '").concat(expressionType, "' type  and '").concat(namedParameterString, "' named parameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(expressionString, " expression against the '").concat(namedParameterString, "' named parameter."));
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
                var namedParameter = namedParameterFromNamedParameterNode(namedParameterNode, context);
                return namedParameter;
            }
        }
    ]);
    return NamedParameter;
}(), _define_property(_NamedParameter, "name", "NamedParameter"), _NamedParameter));
function namedParameterFromNamedParameterNode(namedParameterNode, context) {
    var NamedParameter = _dom.default.NamedParameter, type = typeFromNamedParameterNode(namedParameterNode, context), name = nameFromNamedParameterNode(namedParameterNode, context), asName = asNameFromNamedParameterNode(namedParameterNode, context), string = stringFromTypeNameAndAsName(type, name, asName, context), namedParameter = new NamedParameter(string, type, name, asName);
    return namedParameter;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcGFyYW1ldGVyL25hbWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25hbWVkUGFyYW1ldGVyL0B0eXBlXCIpLFxuICAgICAgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25hbWVkUGFyYW1ldGVyL0BuYW1lWzBdXCIpLFxuICAgICAgYXNOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmFtZWRQYXJhbWV0ZXIvQG5hbWVbMV1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE5hbWVkUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lLCBhc05hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hc05hbWUgPSBhc05hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0QXNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmFzTmFtZTtcbiAgfVxuXG4gIG1hdGNoRXhwcmVzc2lvbihleHByZXNzaW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvblN0cmluZyA9IGV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJTdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICR7ZXhwcmVzc2lvblN0cmluZ30gZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgZXhwcmVzc2lvblR5cGUgPSBleHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmICh0aGlzLnR5cGUgIT09IGV4cHJlc3Npb25UeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24ncyAnJHtleHByZXNzaW9uVHlwZX0nIHR5cGUgIGFuZCAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzICcke3RoaXMudHlwZX0nIHR5cGUgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke2V4cHJlc3Npb25TdHJpbmd9IGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyTWF0Y2hlcztcblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckIgPSBuYW1lZFBhcmFtZXRlcjsgLy8vXG5cbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlckFTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckEuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbmFtZWRQYXJhbWV0ZXJCU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXJCLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25hbWVkUGFyYW1ldGVyQVN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlckJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9ICgodGhpcy5uYW1lID09PSBuYW1lKSAmJiAodGhpcy50eXBlID09PSB0eXBlKSk7XG5cbiAgICBpZiAobmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTmFtZWRQYXJhbWV0ZXJcIjtcblxuICBzdGF0aWMgZnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBuYW1lZFBhcmFtZXRlciA9IG5hbWVkUGFyYW1ldGVyRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xuICB9XG59KTtcblxuZnVuY3Rpb24gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IE5hbWVkUGFyYW1ldGVyIH0gPSBkb20sXG4gICAgICAgIHR5cGUgPSB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgYXNOYW1lID0gYXNOYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVBbmRBc05hbWUodHlwZSwgbmFtZSwgYXNOYW1lLCBjb250ZXh0KSxcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXIgPSBuZXcgTmFtZWRQYXJhbWV0ZXIoc3RyaW5nLCB0eXBlLCBuYW1lLCBhc05hbWUpO1xuXG4gIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVOYW1lQW5kQXNOYW1lKHR5cGUsIG5hbWUsIGFzTmFtZSwgY29udGV4dCkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLCAgLy8vXG4gICAgICAgIG5hbWVTdHJpbmcgPSBuYW1lOyAgLy8vXG5cbiAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ30gJHtuYW1lU3RyaW5nfWA7XG5cbiAgaWYgKGFzTmFtZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGFzTmFtZVN0cmluZyA9IGFzTmFtZTsgIC8vL1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfSBBcyAke2FzTmFtZVN0cmluZ31gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuXG5mdW5jdGlvbiB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdHlwZVRlcm1pbmFsTm9kZSA9IHR5cGVUZXJtaW5hbE5vZGVRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpLFxuICAgICAgICB0eXBlVGVybWluYWxOb2RlQ29udGVudCA9IHR5cGVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICB0eXBlID0gdHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiB0eXBlO1xufVxuXG5mdW5jdGlvbiBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpLFxuICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiBhc05hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBsZXQgYXNOYW1lID0gbnVsbDtcblxuICBjb25zdCBhc05hbWVUZXJtaW5hbE5vZGUgPSBhc05hbWVUZXJtaW5hbE5vZGVRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpO1xuXG4gIGlmIChhc05hbWVUZXJtaW5hbE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBhc05hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gYXNOYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgIGFzTmFtZSA9IGFzTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIGFzTmFtZTtcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlVGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJhc05hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTmFtZWRQYXJhbWV0ZXIiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImFzTmFtZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwiZ2V0QXNOYW1lIiwibWF0Y2hFeHByZXNzaW9uIiwiZXhwcmVzc2lvbiIsImNvbnRleHQiLCJleHByZXNzaW9uU3RyaW5nIiwiYXNTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwiZXhwcmVzc2lvblR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQVN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQlN0cmluZyIsImZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJkb20iLCJ0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwiYXNOYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsInN0cmluZ0Zyb21UeXBlTmFtZUFuZEFzTmFtZSIsInR5cGVTdHJpbmciLCJuYW1lU3RyaW5nIiwiYXNOYW1lU3RyaW5nIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImFzTmFtZVRlcm1pbmFsTm9kZSIs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