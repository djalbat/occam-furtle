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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcGFyYW1ldGVyL25hbWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25hbWVkUGFyYW1ldGVyL0B0eXBlXCIpLFxuICAgICAgbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25hbWVkUGFyYW1ldGVyL0BuYW1lWzBdXCIpLFxuICAgICAgYXNOYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmFtZWRQYXJhbWV0ZXIvQG5hbWVbMV1cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE5hbWVkUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lLCBhc05hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5hc05hbWUgPSBhc05hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0QXNOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmFzTmFtZTtcbiAgfVxuXG4gIG1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgdmFsdWVUeXBlID0gdmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHRoaXMudHlwZSAhPT0gdmFsdWVUeXBlKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgIGFuZCAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlcidzICcke3RoaXMudHlwZX0nIHR5cGUgZG8gbm90IG1hdGNoLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci5gKTtcbiAgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQiA9IG5hbWVkUGFyYW1ldGVyOyAvLy9cblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQVN0cmluZyA9IG5hbWVkUGFyYW1ldGVyQS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJBU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyIGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyQlN0cmluZ30nIG5hbWVkIHBhcmFtZXRlci4uLmApO1xuXG4gICAgY29uc3QgbmFtZSA9IG5hbWVkUGFyYW1ldGVyLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRQYXJhbWV0ZXIuZ2V0VHlwZSgpO1xuXG4gICAgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzID0gKCh0aGlzLm5hbWUgPT09IG5hbWUpICYmICh0aGlzLnR5cGUgPT09IHR5cGUpKTtcblxuICAgIGlmIChuYW1lZFBhcmFtZXRlck1hdGNoZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLm1hdGNoZWQgdGhlICcke25hbWVkUGFyYW1ldGVyQVN0cmluZ30nIG5hbWVkIHBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlckJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOYW1lZFBhcmFtZXRlclwiO1xuXG4gIHN0YXRpYyBmcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyID0gbmFtZWRQYXJhbWV0ZXJGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgTmFtZWRQYXJhbWV0ZXIgfSA9IGRvbSxcbiAgICAgICAgdHlwZSA9IHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIG5hbWUgPSBuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICBhc05hbWUgPSBhc05hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZEFzTmFtZSh0eXBlLCBuYW1lLCBhc05hbWUsIGNvbnRleHQpLFxuICAgICAgICBuYW1lZFBhcmFtZXRlciA9IG5ldyBOYW1lZFBhcmFtZXRlcihzdHJpbmcsIHR5cGUsIG5hbWUsIGFzTmFtZSk7XG5cbiAgcmV0dXJuIG5hbWVkUGFyYW1ldGVyO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZU5hbWVBbmRBc05hbWUodHlwZSwgbmFtZSwgYXNOYW1lLCBjb250ZXh0KSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUsICAvLy9cbiAgICAgICAgbmFtZVN0cmluZyA9IG5hbWU7ICAvLy9cblxuICBzdHJpbmcgPSBgJHt0eXBlU3RyaW5nfSAke25hbWVTdHJpbmd9YDtcblxuICBpZiAoYXNOYW1lICE9PSBudWxsKSB7XG4gICAgY29uc3QgYXNOYW1lU3RyaW5nID0gYXNOYW1lOyAgLy8vXG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9IEFzICR7YXNOYW1lU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5cbmZ1bmN0aW9uIHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KG5hbWVkUGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5hbWVkUGFyYW1ldGVyTm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIGFzTmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSB7XG4gIGxldCBhc05hbWUgPSBudWxsO1xuXG4gIGNvbnN0IGFzTmFtZVRlcm1pbmFsTm9kZSA9IGFzTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5hbWVkUGFyYW1ldGVyTm9kZSk7XG5cbiAgaWYgKGFzTmFtZVRlcm1pbmFsTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGFzTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBhc05hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgYXNOYW1lID0gYXNOYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG4gIH1cblxuICByZXR1cm4gYXNOYW1lO1xufVxuIl0sIm5hbWVzIjpbInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImFzTmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJOYW1lZFBhcmFtZXRlciIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwiYXNOYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJnZXRBc05hbWUiLCJtYXRjaFZhbHVlIiwidmFsdWUiLCJjb250ZXh0IiwidmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm5hbWVkUGFyYW1ldGVyU3RyaW5nIiwidHJhY2UiLCJ2YWx1ZVR5cGUiLCJtZXNzYWdlIiwiZXhjZXB0aW9uIiwiRXhjZXB0aW9uIiwiZnJvbU1lc3NhZ2UiLCJkZWJ1ZyIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsIm5hbWVkUGFyYW1ldGVyTWF0Y2hlcyIsIm5hbWVkUGFyYW1ldGVyQSIsIm5hbWVkUGFyYW1ldGVyQiIsIm5hbWVkUGFyYW1ldGVyQVN0cmluZyIsIm5hbWVkUGFyYW1ldGVyQlN0cmluZyIsImZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlck5vZGUiLCJuYW1lZFBhcmFtZXRlckZyb21OYW1lZFBhcmFtZXRlck5vZGUiLCJkb20iLCJ0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsIm5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwiYXNOYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsInN0cmluZ0Zyb21UeXBlTmFtZUFuZEFzTmFtZSIsInR5cGVTdHJpbmciLCJuYW1lU3RyaW5nIiwiYXNOYW1lU3RyaW5nIiwidHlwZVRlcm1pbmFsTm9kZSIsInR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImFzTmFtZVRlcm1pbmFsTm9kZSIsImFzTmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtnRUFDTTtxQkFFSTs7Ozs7Ozs7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