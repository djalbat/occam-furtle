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
var _types = require("../../types");
var _constants = require("../../constants");
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
var _BitwiseValue;
var terminalNodeQuery = (0, _query.nodeQuery)("/bitwiseValue/@*"), leftValueNodeQuery = (0, _query.nodeQuery)("/bitwiseValue/value[0]"), rightValueNodeQuery = (0, _query.nodeQuery)("/bitwiseValue/value[1]"), bitwiseValueNodeQuery = (0, _query.nodeQuery)("/value/bitwiseValue");
var _default = (0, _dom.domAssigned)((_BitwiseValue = /*#__PURE__*/ function() {
    function BitwiseValue(string, type, disjoint, leftValue, rightValue) {
        _class_call_check(this, BitwiseValue);
        this.string = string;
        this.type = type;
        this.disjoint = disjoint;
        this.leftValue = leftValue;
        this.rightValue = rightValue;
    }
    _create_class(BitwiseValue, [
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
            key: "isDisjoint",
            value: function isDisjoint() {
                return this.disjoint;
            }
        },
        {
            key: "getLeftValue",
            value: function getLeftValue() {
                return this.leftValue;
            }
        },
        {
            key: "getRightValue",
            value: function getRightValue() {
                return this.rightValue;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var value;
                var bitwiseValueString = this.string; ///
                context.trace("Evaluating the '".concat(bitwiseValueString, "' bitwise value..."));
                var Value = _dom.default.Value, leftValue = this.leftValue.evaluate(context), rightValue = this.rightValue.evaluate(context), leftValueType = leftValue.getType(), rightValueType = rightValue.getType();
                if (leftValueType !== _types.BOOLEAN_TYPE) {
                    var leftValueString = leftValue.asString(context), message = "The ".concat(leftValueString, " left value's type is '").concat(leftValueType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                if (rightValueType !== _types.BOOLEAN_TYPE) {
                    var rightValueString = rightValue.asString(context), message1 = "The ".concat(rightValueString, " right value's type is '").concat(rightValueType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var leftValueBoolean = leftValue.getBoolean(), rightValueBoolean = rightValue.getBoolean(), boolean = this.disjoint ? leftValueBoolean || rightValueBoolean : leftValueBoolean && rightValueBoolean;
                value = Value.fromBoolean(boolean, context); ///
                context.debug("...evaluated the '".concat(bitwiseValueString, "' bitwise value."));
                return value;
            }
        }
    ], [
        {
            key: "fromValueNode",
            value: function fromValueNode(valueNode, context) {
                var bitwiseValue = null;
                var bitwiseValueNode = bitwiseValueNodeQuery(valueNode);
                if (bitwiseValueNode !== null) {
                    var Value = _dom.default.Value, type = _types.BOOLEAN_TYPE, leftValueNode = leftValueNodeQuery(bitwiseValueNode), rightValueNode = rightValueNodeQuery(bitwiseValueNode), disjoint = disjointFromBitwiseValueNode(bitwiseValueNode, context), leftValue = Value.fromValueNode(leftValueNode, context), rightValue = Value.fromValueNode(rightValueNode, context), string = stringFromTypeDisjointLeftValueAndRightValue(disjoint, leftValue, rightValue, context);
                    bitwiseValue = new BitwiseValue(string, type, disjoint, leftValue, rightValue);
                }
                return bitwiseValue;
            }
        }
    ]);
    return BitwiseValue;
}(), _define_property(_BitwiseValue, "name", "BitwiseValue"), _BitwiseValue));
function disjointFromBitwiseValueNode(bitwiseValueNode, context) {
    var terminalNode = terminalNodeQuery(bitwiseValueNode), terminalNodeContent = terminalNode.getContent(), disjoint = terminalNodeContent === _constants.DISJUNCTION;
    return disjoint;
}
function stringFromTypeDisjointLeftValueAndRightValue(disjoint, leftValue, rightValue, context) {
    var operatorString = disjoint ? _constants.DISJUNCTION : _constants.CONJUNCTION, leftValueString = leftValue.asString(context), rightValueString = rightValue.asString(context), string = "".concat(leftValueString, " ").concat(operatorString, " ").concat(rightValueString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vdmFsdWUvYml0d2lzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENPTkpVTkNUSU9OLCBESVNKVU5DVElPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgdGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZVZhbHVlL0AqXCIpLFxuICAgICAgbGVmdFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VWYWx1ZS92YWx1ZVswXVwiKSxcbiAgICAgIHJpZ2h0VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZVZhbHVlL3ZhbHVlWzFdXCIpLFxuICAgICAgYml0d2lzZVZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3ZhbHVlL2JpdHdpc2VWYWx1ZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQml0d2lzZVZhbHVlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBkaXNqb2ludCwgbGVmdFZhbHVlLCByaWdodFZhbHVlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmRpc2pvaW50ID0gZGlzam9pbnQ7XG4gICAgdGhpcy5sZWZ0VmFsdWUgPSBsZWZ0VmFsdWU7XG4gICAgdGhpcy5yaWdodFZhbHVlID0gcmlnaHRWYWx1ZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc0Rpc2pvaW50KCkge1xuICAgIHJldHVybiB0aGlzLmRpc2pvaW50O1xuICB9XG5cbiAgZ2V0TGVmdFZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRWYWx1ZTtcbiAgfVxuXG4gIGdldFJpZ2h0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRWYWx1ZTtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBiaXR3aXNlVmFsdWVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBFdmFsdWF0aW5nIHRoZSAnJHtiaXR3aXNlVmFsdWVTdHJpbmd9JyBiaXR3aXNlIHZhbHVlLi4uYCk7XG5cbiAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgbGVmdFZhbHVlID0gdGhpcy5sZWZ0VmFsdWUuZXZhbHVhdGUoY29udGV4dCksXG4gICAgICAgICAgcmlnaHRWYWx1ZSA9IHRoaXMucmlnaHRWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0VmFsdWVUeXBlID0gbGVmdFZhbHVlLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFZhbHVlVHlwZSA9IHJpZ2h0VmFsdWUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKGxlZnRWYWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdFZhbHVlU3RyaW5nID0gbGVmdFZhbHVlLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtsZWZ0VmFsdWVTdHJpbmd9IGxlZnQgdmFsdWUncyB0eXBlIGlzICcke2xlZnRWYWx1ZVR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRWYWx1ZVR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgcmlnaHRWYWx1ZVN0cmluZyA9IHJpZ2h0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke3JpZ2h0VmFsdWVTdHJpbmd9IHJpZ2h0IHZhbHVlJ3MgdHlwZSBpcyAnJHtyaWdodFZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRWYWx1ZUJvb2xlYW4gPSBsZWZ0VmFsdWUuZ2V0Qm9vbGVhbigpLFxuICAgICAgICAgIHJpZ2h0VmFsdWVCb29sZWFuID0gcmlnaHRWYWx1ZS5nZXRCb29sZWFuKCksXG4gICAgICAgICAgYm9vbGVhbiA9IHRoaXMuZGlzam9pbnQgP1xuICAgICAgICAgICAgICAgICAgICAgIChsZWZ0VmFsdWVCb29sZWFuIHx8IHJpZ2h0VmFsdWVCb29sZWFuKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAobGVmdFZhbHVlQm9vbGVhbiAmJiByaWdodFZhbHVlQm9vbGVhbik7XG5cbiAgICB2YWx1ZSA9IFZhbHVlLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2JpdHdpc2VWYWx1ZVN0cmluZ30nIGJpdHdpc2UgdmFsdWUuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQml0d2lzZVZhbHVlXCI7XG5cbiAgc3RhdGljIGZyb21WYWx1ZU5vZGUodmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGJpdHdpc2VWYWx1ZSA9IG51bGw7XG5cbiAgICBjb25zdCBiaXR3aXNlVmFsdWVOb2RlID0gYml0d2lzZVZhbHVlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAoYml0d2lzZVZhbHVlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tLFxuICAgICAgICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRSxcbiAgICAgICAgICAgIGxlZnRWYWx1ZU5vZGUgPSBsZWZ0VmFsdWVOb2RlUXVlcnkoYml0d2lzZVZhbHVlTm9kZSksXG4gICAgICAgICAgICByaWdodFZhbHVlTm9kZSA9IHJpZ2h0VmFsdWVOb2RlUXVlcnkoYml0d2lzZVZhbHVlTm9kZSksXG4gICAgICAgICAgICBkaXNqb2ludCA9IGRpc2pvaW50RnJvbUJpdHdpc2VWYWx1ZU5vZGUoYml0d2lzZVZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBsZWZ0VmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKGxlZnRWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZSA9IFZhbHVlLmZyb21WYWx1ZU5vZGUocmlnaHRWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVEaXNqb2ludExlZnRWYWx1ZUFuZFJpZ2h0VmFsdWUoZGlzam9pbnQsIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSwgY29udGV4dCk7XG5cbiAgICAgIGJpdHdpc2VWYWx1ZSA9IG5ldyBCaXR3aXNlVmFsdWUoc3RyaW5nLCB0eXBlLCBkaXNqb2ludCwgbGVmdFZhbHVlLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYml0d2lzZVZhbHVlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gZGlzam9pbnRGcm9tQml0d2lzZVZhbHVlTm9kZShiaXR3aXNlVmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZVF1ZXJ5KGJpdHdpc2VWYWx1ZU5vZGUpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgZGlzam9pbnQgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gRElTSlVOQ1RJT04pO1xuXG4gIHJldHVybiBkaXNqb2ludDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVEaXNqb2ludExlZnRWYWx1ZUFuZFJpZ2h0VmFsdWUoZGlzam9pbnQsIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSwgY29udGV4dCkge1xuICBjb25zdCBvcGVyYXRvclN0cmluZyA9IGRpc2pvaW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIERJU0pVTkNUSU9OIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09OSlVOQ1RJT04sXG4gICAgICAgIGxlZnRWYWx1ZVN0cmluZyA9IGxlZnRWYWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgcmlnaHRWYWx1ZVN0cmluZyA9IHJpZ2h0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGAke2xlZnRWYWx1ZVN0cmluZ30gJHtvcGVyYXRvclN0cmluZ30gJHtyaWdodFZhbHVlU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRWYWx1ZU5vZGVRdWVyeSIsInJpZ2h0VmFsdWVOb2RlUXVlcnkiLCJiaXR3aXNlVmFsdWVOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkJpdHdpc2VWYWx1ZSIsInN0cmluZyIsInR5cGUiLCJkaXNqb2ludCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiaXNEaXNqb2ludCIsImdldExlZnRWYWx1ZSIsImdldFJpZ2h0VmFsdWUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJ2YWx1ZSIsImJpdHdpc2VWYWx1ZVN0cmluZyIsInRyYWNlIiwiVmFsdWUiLCJkb20iLCJsZWZ0VmFsdWVUeXBlIiwicmlnaHRWYWx1ZVR5cGUiLCJCT09MRUFOX1RZUEUiLCJsZWZ0VmFsdWVTdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInJpZ2h0VmFsdWVTdHJpbmciLCJsZWZ0VmFsdWVCb29sZWFuIiwiZ2V0Qm9vbGVhbiIsInJpZ2h0VmFsdWVCb29sZWFuIiwiYm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZGVidWciLCJmcm9tVmFsdWVOb2RlIiwidmFsdWVOb2RlIiwiYml0d2lzZVZhbHVlIiwiYml0d2lzZVZhbHVlTm9kZSIsImxlZnRWYWx1ZU5vZGUiLCJyaWdodFZhbHVlTm9kZSIsImRpc2pvaW50RnJvbUJpdHdpc2VWYWx1ZU5vZGUiLCJzdHJpbmdGcm9tVHlwZURpc2pvaW50TGVmdFZhbHVlQW5kUmlnaHRWYWx1ZSIsIm5hbWUiLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkRJU0pVTkNUSU9OIiwib3BlcmF0b3JTdHJpbmciLCJDT05KVU5DVElPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkRBYmdCO2dFQUNNO3FCQUVJO3FCQUVHO3lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMscUJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsMkJBQy9CRSxzQkFBc0JGLElBQUFBLGdCQUFTLEVBQUMsMkJBQ2hDRyx3QkFBd0JILElB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