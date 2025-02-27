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
var terminalNodesQuery = (0, _query.nodesQuery)("/namedParameter/@*"), nameTerminalNodeQuery = (0, _query.nodeQuery)("/namedParameter/@name"), typeTerminalNodeQuery = (0, _query.nodeQuery)("/namedParameter/@type");
var _default = (0, _dom.domAssigned)((_NamedParameter = /*#__PURE__*/ function() {
    function NamedParameter(string, name, type) {
        _class_call_check(this, NamedParameter);
        this.string = string;
        this.name = name;
        this.type = type;
    }
    _create_class(NamedParameter, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "matchValue",
            value: function matchValue(value, context) {
                var valueString = value.asString(context), namedParameterString = this.string; ///
                context.trace("Matching the ".concat(valueString, " value against the '").concat(namedParameterString, "' namedParameter..."));
                var valueType = value.getType();
                if (this.type !== valueType) {
                    var message = "The ".concat(valueString, " value's '").concat(valueType, "' type  and '").concat(namedParameterString, "' namedParameter's '").concat(this.type, "' type do not match."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                context.debug("...matched the ".concat(valueString, " value against the '").concat(namedParameterString, "' namedParameter."));
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterMatches;
                var namedParameterA = this, namedParameterB = namedParameter; ///
                var namedParameterAString = namedParameterA.getString(), namedParameterBString = namedParameterB.getString();
                context.trace("Matching the '".concat(namedParameterAString, "' namedParameter against the '").concat(namedParameterBString, "' namedParameter..."));
                var name = namedParameter.getName(), type = namedParameter.getType();
                namedParameterMatches = this.name === name && this.type === type;
                if (namedParameterMatches) {
                    context.debug("...matched the '".concat(namedParameterAString, "' namedParameter against the '").concat(namedParameterBString, "' namedParameter."));
                }
                return namedParameterMatches;
            }
        }
    ], [
        {
            key: "fromNameAndType",
            value: function fromNameAndType(name, type, context) {
                var string = stringFromNameAndType(name, type, context), namedParameter = new NamedParameter(string, name, type);
                return namedParameter;
            }
        },
        {
            key: "fromNamedParameterNode",
            value: function fromNamedParameterNode(namedParameterNode, context) {
                var namedParameter = null;
                var terminalNodes = terminalNodesQuery(namedParameterNode), terminalNodesLength = terminalNodes.length;
                if (terminalNodesLength === 2) {
                    var name = nameFromNamedParameterNode(namedParameterNode, context), type = typeFromNamedParameterNode(namedParameterNode, context), node = namedParameterNode, string = context.nodeAsString(node);
                    namedParameter = new NamedParameter(string, name, type);
                }
                return namedParameter;
            }
        }
    ]);
    return NamedParameter;
}(), _define_property(_NamedParameter, "name", "NamedParameter"), _NamedParameter));
function stringFromNameAndType(name, type) {
    var string = "".concat(type, " ").concat(name);
    return string;
}
function nameFromNamedParameterNode(namedParameterNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(namedParameterNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function typeFromNamedParameterNode(namedParameterNode, context) {
    var typeTerminalNode = typeTerminalNodeQuery(namedParameterNode), typeTerminalNodeContent = typeTerminalNode.getContent(), type = typeTerminalNodeContent; ///
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcGFyYW1ldGVyL25hbWVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbmFtZWRQYXJhbWV0ZXIvQCpcIiksXG4gICAgICBuYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmFtZWRQYXJhbWV0ZXIvQG5hbWVcIiksXG4gICAgICB0eXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbmFtZWRQYXJhbWV0ZXIvQHR5cGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIE5hbWVkUGFyYW1ldGVyIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIG1hdGNoVmFsdWUodmFsdWUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAke3ZhbHVlU3RyaW5nfSB2YWx1ZSBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlclN0cmluZ30nIG5hbWVkUGFyYW1ldGVyLi4uYCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodGhpcy50eXBlICE9PSB2YWx1ZVR5cGUpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgVGhlICR7dmFsdWVTdHJpbmd9IHZhbHVlJ3MgJyR7dmFsdWVUeXBlfScgdHlwZSAgYW5kICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIncyAnJHt0aGlzLnR5cGV9JyB0eXBlIGRvIG5vdCBtYXRjaC5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJHt2YWx1ZVN0cmluZ30gdmFsdWUgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZFBhcmFtZXRlci5gKTtcbiAgfVxuXG4gIG1hdGNoTmFtZWRQYXJhbWV0ZXIobmFtZWRQYXJhbWV0ZXIsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJNYXRjaGVzO1xuXG4gICAgY29uc3QgbmFtZWRQYXJhbWV0ZXJBID0gdGhpcywgIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyQiA9IG5hbWVkUGFyYW1ldGVyOyAvLy9cblxuICAgIGNvbnN0IG5hbWVkUGFyYW1ldGVyQVN0cmluZyA9IG5hbWVkUGFyYW1ldGVyQS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBuYW1lZFBhcmFtZXRlckJTdHJpbmcgPSBuYW1lZFBhcmFtZXRlckIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJBU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJCU3RyaW5nfScgbmFtZWRQYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9ICgodGhpcy5uYW1lID09PSBuYW1lKSAmJiAodGhpcy50eXBlID09PSB0eXBlKSk7XG5cbiAgICBpZiAobmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtuYW1lZFBhcmFtZXRlckFTdHJpbmd9JyBuYW1lZFBhcmFtZXRlciBhZ2FpbnN0IHRoZSAnJHtuYW1lZFBhcmFtZXRlckJTdHJpbmd9JyBuYW1lZFBhcmFtZXRlci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXJNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk5hbWVkUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyID0gbmV3IE5hbWVkUGFyYW1ldGVyKHN0cmluZywgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gbmFtZWRQYXJhbWV0ZXI7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXIgPSBudWxsO1xuXG4gICAgY29uc3QgdGVybWluYWxOb2RlcyA9IHRlcm1pbmFsTm9kZXNRdWVyeShuYW1lZFBhcmFtZXRlck5vZGUpLFxuICAgICAgICAgIHRlcm1pbmFsTm9kZXNMZW5ndGggPSB0ZXJtaW5hbE5vZGVzLmxlbmd0aDtcblxuICAgIGlmICh0ZXJtaW5hbE5vZGVzTGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZUZyb21OYW1lZFBhcmFtZXRlck5vZGUobmFtZWRQYXJhbWV0ZXJOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbU5hbWVkUGFyYW1ldGVyTm9kZShuYW1lZFBhcmFtZXRlck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IG5hbWVkUGFyYW1ldGVyTm9kZSwgLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBuYW1lZFBhcmFtZXRlciA9IG5ldyBOYW1lZFBhcmFtZXRlcihzdHJpbmcsIG5hbWUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlcjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSB7XG4gIGNvbnN0IHN0cmluZyA9IGAke3R5cGV9ICR7bmFtZX1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KG5hbWVkUGFyYW1ldGVyTm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlKG5hbWVkUGFyYW1ldGVyTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0eXBlVGVybWluYWxOb2RlID0gdHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KG5hbWVkUGFyYW1ldGVyTm9kZSksXG4gICAgICAgIHR5cGVUZXJtaW5hbE5vZGVDb250ZW50ID0gdHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIHR5cGUgPSB0eXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIHR5cGU7XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTmFtZWRQYXJhbWV0ZXIiLCJzdHJpbmciLCJuYW1lIiwidHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRUeXBlIiwibWF0Y2hWYWx1ZSIsInZhbHVlIiwiY29udGV4dCIsInZhbHVlU3RyaW5nIiwiYXNTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwiZGVidWciLCJtYXRjaE5hbWVkUGFyYW1ldGVyIiwibmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlck1hdGNoZXMiLCJuYW1lZFBhcmFtZXRlckEiLCJuYW1lZFBhcmFtZXRlckIiLCJuYW1lZFBhcmFtZXRlckFTdHJpbmciLCJuYW1lZFBhcmFtZXRlckJTdHJpbmciLCJmcm9tTmFtZUFuZFR5cGUiLCJzdHJpbmdGcm9tTmFtZUFuZFR5cGUiLCJmcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibmFtZWRQYXJhbWV0ZXJOb2RlIiwidGVybWluYWxOb2RlcyIsInRlcm1pbmFsTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJuYW1lRnJvbU5hbWVkUGFyYW1ldGVyTm9kZSIsInR5cGVGcm9tTmFtZWRQYXJhbWV0ZXJOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJ0eXBlVGVybWluYWxOb2RlIiwidHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dFQVRzQjttQkFFTTtxQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1BLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQyx1QkFDaENDLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQywwQkFDbENDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV4QyxXQUFlRSxJQUFBQSxnQkFBVyxtQ0FBQzthQUFNQyxlQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRENIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSyxFQUFFQyxPQUFPO2dCQUN2QixJQUFNQyxjQUFjRixNQUFNRyxRQUFRLENBQUNGLFVBQzdCRyx1QkFBdUIsSUFBSSxDQUFDWCxNQUFNLEVBQUcsR0FBRztnQkFFOUNRLFFBQVFJLEtBQUssQ0FBQyxBQUFDLGdCQUFpREQsT0FBbENGLGFBQVksd0JBQTJDLE9BQXJCRSxzQkFBcUI7Z0JBRXJGLElBQU1FLFlBQVlOLE1BQU1GLE9BQU87Z0JBRS9CLElBQUksSUFBSSxDQUFDSCxJQUFJLEtBQUtXLFdBQVc7b0JBQzNCLElBQU1DLFVBQVUsQUFBQyxPQUE4QkQsT0FBeEJKLGFBQVksY0FBcUNFLE9BQXpCRSxXQUFVLGlCQUEwRCxPQUEzQ0Ysc0JBQXFCLHdCQUFnQyxPQUFWLElBQUksQ0FBQ1QsSUFBSSxFQUFDLHlCQUN2SGEsWUFBWUMsa0JBQVMsQ0FBQ0MsV0FBVyxDQUFDSDtvQkFFeEMsTUFBTUM7Z0JBQ1I7Z0JBRUFQLFFBQVFVLEtBQUssQ0FBQyxBQUFDLGtCQUFtRFAsT0FBbENGLGFBQVksd0JBQTJDLE9BQXJCRSxzQkFBcUI7WUFDekY7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CQyxjQUFjLEVBQUVaLE9BQU87Z0JBQ3pDLElBQUlhO2dCQUVKLElBQU1DLGtCQUFrQixJQUFJLEVBQ3RCQyxrQkFBa0JILGdCQUFnQixHQUFHO2dCQUUzQyxJQUFNSSx3QkFBd0JGLGdCQUFnQm5CLFNBQVMsSUFDakRzQix3QkFBd0JGLGdCQUFnQnBCLFNBQVM7Z0JBRXZESyxRQUFRSSxLQUFLLENBQUMsQUFBQyxpQkFBc0VhLE9BQXRERCx1QkFBc0Isa0NBQXNELE9BQXRCQyx1QkFBc0I7Z0JBRTNHLElBQU14QixPQUFPbUIsZUFBZWhCLE9BQU8sSUFDN0JGLE9BQU9rQixlQUFlZixPQUFPO2dCQUVuQ2dCLHdCQUF5QixBQUFDLElBQUksQ0FBQ3BCLElBQUksS0FBS0EsUUFBVSxJQUFJLENBQUNDLElBQUksS0FBS0E7Z0JBRWhFLElBQUltQix1QkFBdUI7b0JBQ3pCYixRQUFRVSxLQUFLLENBQUMsQUFBQyxtQkFBd0VPLE9BQXRERCx1QkFBc0Isa0NBQXNELE9BQXRCQyx1QkFBc0I7Z0JBQy9HO2dCQUVBLE9BQU9KO1lBQ1Q7Ozs7WUFJT0ssS0FBQUE7bUJBQVAsU0FBT0EsZ0JBQWdCekIsSUFBSSxFQUFFQyxJQUFJLEVBQUVNLE9BQU87Z0JBQ3hDLElBQU1SLFNBQVMyQixzQkFBc0IxQixNQUFNQyxNQUFNTSxVQUMzQ1ksaUJBQWlCLElBQUlyQixlQUFlQyxRQUFRQyxNQUFNQztnQkFFeEQsT0FBT2tCO1lBQ1Q7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJDLGtCQUFrQixFQUFFckIsT0FBTztnQkFDdkQsSUFBSVksaUJBQWlCO2dCQUVyQixJQUFNVSxnQkFBZ0JyQyxtQkFBbUJvQyxxQkFDbkNFLHNCQUFzQkQsY0FBY0UsTUFBTTtnQkFFaEQsSUFBSUQsd0JBQXdCLEdBQUc7b0JBQzdCLElBQU05QixPQUFPZ0MsMkJBQTJCSixvQkFBb0JyQixVQUN0RE4sT0FBT2dDLDJCQUEyQkwsb0JBQW9CckIsVUFDdEQyQixPQUFPTixvQkFDUDdCLFNBQVNRLFFBQVE0QixZQUFZLENBQUNEO29CQUVwQ2YsaUJBQWlCLElBQUlyQixlQUFlQyxRQUFRQyxNQUFNQztnQkFDcEQ7Z0JBRUEsT0FBT2tCO1lBQ1Q7Ozs7S0F6QkEsa0NBQU9uQixRQUFPO0FBNEJoQixTQUFTMEIsc0JBQXNCMUIsSUFBSSxFQUFFQyxJQUFJO0lBQ3ZDLElBQU1GLFNBQVMsQUFBQyxHQUFVQyxPQUFSQyxNQUFLLEtBQVEsT0FBTEQ7SUFFMUIsT0FBT0Q7QUFDVDtBQUVBLFNBQVNpQywyQkFBMkJKLGtCQUFrQixFQUFFckIsT0FBTztJQUM3RCxJQUFNNkIsbUJBQW1CMUMsc0JBQXNCa0MscUJBQ3pDUywwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRHRDLE9BQU9xQyx5QkFBeUIsR0FBRztJQUV6QyxPQUFPckM7QUFDVDtBQUVBLFNBQVNpQywyQkFBMkJMLGtCQUFrQixFQUFFckIsT0FBTztJQUM3RCxJQUFNZ0MsbUJBQW1CM0Msc0JBQXNCZ0MscUJBQ3pDWSwwQkFBMEJELGlCQUFpQkQsVUFBVSxJQUNyRHJDLE9BQU91Qyx5QkFBeUIsR0FBRztJQUV6QyxPQUFPdkM7QUFDVCJ9