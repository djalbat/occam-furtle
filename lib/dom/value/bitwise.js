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
var terminalNodeQuery = (0, _query.nodeQuery)("/bitwiseValue/@*"), leftValueNodeQuery = (0, _query.nodeQuery)("/bitwiseValue/value[0]"), rightValueNodeQuery = (0, _query.nodeQuery)("/bitwiseValue/value[1]"), valueBitwiseValueNodeQuery = (0, _query.nodeQuery)("/value/bitwiseValue");
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
                var valueBitwiseValueNode = valueBitwiseValueNodeQuery(valueNode);
                if (valueBitwiseValueNode !== null) {
                    var bitwiseValueNode = valueBitwiseValueNode; ///
                    bitwiseValue = bitwiseValueFromBitwiseValueNode(bitwiseValueNode, context);
                }
                return bitwiseValue;
            }
        }
    ]);
    return BitwiseValue;
}(), _define_property(_BitwiseValue, "name", "BitwiseValue"), _BitwiseValue));
function bitwiseValueFromBitwiseValueNode(bitwiseValueNode, context) {
    var Value = _dom.default.Value, BitwiseValue = _dom.default.BitwiseValue, leftValueNode = leftValueNodeQuery(bitwiseValueNode), rightValueNode = rightValueNodeQuery(bitwiseValueNode), type = _types.BOOLEAN_TYPE, disjoint = disjointFromBitwiseValueNode(bitwiseValueNode, context), leftValue = Value.fromValueNode(leftValueNode, context), rightValue = Value.fromValueNode(rightValueNode, context), string = stringFromTypeDisjointLeftValueAndRightValue(disjoint, leftValue, rightValue, context), bitwiseValue = new BitwiseValue(string, type, disjoint, leftValue, rightValue);
    return bitwiseValue;
}
function disjointFromBitwiseValueNode(bitwiseValueNode, context) {
    var terminalNode = terminalNodeQuery(bitwiseValueNode), terminalNodeContent = terminalNode.getContent(), disjoint = terminalNodeContent === _constants.DISJUNCTION;
    return disjoint;
}
function stringFromTypeDisjointLeftValueAndRightValue(disjoint, leftValue, rightValue, context) {
    var operatorString = disjoint ? _constants.DISJUNCTION : _constants.CONJUNCTION, leftValueString = leftValue.asString(context), rightValueString = rightValue.asString(context), string = "".concat(leftValueString, " ").concat(operatorString, " ").concat(rightValueString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vdmFsdWUvYml0d2lzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBCT09MRUFOX1RZUEUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IENPTkpVTkNUSU9OLCBESVNKVU5DVElPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgdGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZVZhbHVlL0AqXCIpLFxuICAgICAgbGVmdFZhbHVlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VWYWx1ZS92YWx1ZVswXVwiKSxcbiAgICAgIHJpZ2h0VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZVZhbHVlL3ZhbHVlWzFdXCIpLFxuICAgICAgdmFsdWVCaXR3aXNlVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvYml0d2lzZVZhbHVlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCaXR3aXNlVmFsdWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGRpc2pvaW50LCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGlzam9pbnQgPSBkaXNqb2ludDtcbiAgICB0aGlzLmxlZnRWYWx1ZSA9IGxlZnRWYWx1ZTtcbiAgICB0aGlzLnJpZ2h0VmFsdWUgPSByaWdodFZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzRGlzam9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzam9pbnQ7XG4gIH1cblxuICBnZXRMZWZ0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFZhbHVlO1xuICB9XG5cbiAgZ2V0UmlnaHRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGJpdHdpc2VWYWx1ZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2JpdHdpc2VWYWx1ZVN0cmluZ30nIGJpdHdpc2UgdmFsdWUuLi5gKTtcblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICBsZWZ0VmFsdWUgPSB0aGlzLmxlZnRWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhbHVlID0gdGhpcy5yaWdodFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRWYWx1ZVR5cGUgPSBsZWZ0VmFsdWUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VmFsdWVUeXBlID0gcmlnaHRWYWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAobGVmdFZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBsZWZ0VmFsdWVTdHJpbmcgPSBsZWZ0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2xlZnRWYWx1ZVN0cmluZ30gbGVmdCB2YWx1ZSdzIHR5cGUgaXMgJyR7bGVmdFZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChyaWdodFZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodFZhbHVlU3RyaW5nID0gcmlnaHRWYWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7cmlnaHRWYWx1ZVN0cmluZ30gcmlnaHQgdmFsdWUncyB0eXBlIGlzICcke3JpZ2h0VmFsdWVUeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFZhbHVlQm9vbGVhbiA9IGxlZnRWYWx1ZS5nZXRCb29sZWFuKCksXG4gICAgICAgICAgcmlnaHRWYWx1ZUJvb2xlYW4gPSByaWdodFZhbHVlLmdldEJvb2xlYW4oKSxcbiAgICAgICAgICBib29sZWFuID0gdGhpcy5kaXNqb2ludCA/XG4gICAgICAgICAgICAgICAgICAgICAgKGxlZnRWYWx1ZUJvb2xlYW4gfHwgcmlnaHRWYWx1ZUJvb2xlYW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0VmFsdWVCb29sZWFuICYmIHJpZ2h0VmFsdWVCb29sZWFuKTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7Yml0d2lzZVZhbHVlU3RyaW5nfScgYml0d2lzZSB2YWx1ZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCaXR3aXNlVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYml0d2lzZVZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IHZhbHVlQml0d2lzZVZhbHVlTm9kZSA9IHZhbHVlQml0d2lzZVZhbHVlTm9kZVF1ZXJ5KHZhbHVlTm9kZSk7XG5cbiAgICBpZiAodmFsdWVCaXR3aXNlVmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBiaXR3aXNlVmFsdWVOb2RlID0gdmFsdWVCaXR3aXNlVmFsdWVOb2RlOyAvLy9cblxuICAgICAgYml0d2lzZVZhbHVlID0gYml0d2lzZVZhbHVlRnJvbUJpdHdpc2VWYWx1ZU5vZGUoYml0d2lzZVZhbHVlTm9kZSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJpdHdpc2VWYWx1ZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGJpdHdpc2VWYWx1ZUZyb21CaXR3aXNlVmFsdWVOb2RlKGJpdHdpc2VWYWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBWYWx1ZSwgQml0d2lzZVZhbHVlIH0gPSBkb20sXG4gICAgICAgIGxlZnRWYWx1ZU5vZGUgPSBsZWZ0VmFsdWVOb2RlUXVlcnkoYml0d2lzZVZhbHVlTm9kZSksXG4gICAgICAgIHJpZ2h0VmFsdWVOb2RlID0gcmlnaHRWYWx1ZU5vZGVRdWVyeShiaXR3aXNlVmFsdWVOb2RlKSxcbiAgICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRSxcbiAgICAgICAgZGlzam9pbnQgPSBkaXNqb2ludEZyb21CaXR3aXNlVmFsdWVOb2RlKGJpdHdpc2VWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0VmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKGxlZnRWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodFZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShyaWdodFZhbHVlTm9kZSwgY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlRGlzam9pbnRMZWZ0VmFsdWVBbmRSaWdodFZhbHVlKGRpc2pvaW50LCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUsIGNvbnRleHQpLFxuICAgICAgICBiaXR3aXNlVmFsdWUgPSBuZXcgQml0d2lzZVZhbHVlKHN0cmluZywgdHlwZSwgZGlzam9pbnQsIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSk7XG5cbiAgcmV0dXJuIGJpdHdpc2VWYWx1ZTtcbn1cblxuZnVuY3Rpb24gZGlzam9pbnRGcm9tQml0d2lzZVZhbHVlTm9kZShiaXR3aXNlVmFsdWVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZVF1ZXJ5KGJpdHdpc2VWYWx1ZU5vZGUpLFxuICAgICAgICB0ZXJtaW5hbE5vZGVDb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgZGlzam9pbnQgPSAodGVybWluYWxOb2RlQ29udGVudCA9PT0gRElTSlVOQ1RJT04pO1xuXG4gIHJldHVybiBkaXNqb2ludDtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVR5cGVEaXNqb2ludExlZnRWYWx1ZUFuZFJpZ2h0VmFsdWUoZGlzam9pbnQsIGxlZnRWYWx1ZSwgcmlnaHRWYWx1ZSwgY29udGV4dCkge1xuICBjb25zdCBvcGVyYXRvclN0cmluZyA9IGRpc2pvaW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIERJU0pVTkNUSU9OIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09OSlVOQ1RJT04sXG4gICAgICAgIGxlZnRWYWx1ZVN0cmluZyA9IGxlZnRWYWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgcmlnaHRWYWx1ZVN0cmluZyA9IHJpZ2h0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGAke2xlZnRWYWx1ZVN0cmluZ30gJHtvcGVyYXRvclN0cmluZ30gJHtyaWdodFZhbHVlU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRWYWx1ZU5vZGVRdWVyeSIsInJpZ2h0VmFsdWVOb2RlUXVlcnkiLCJ2YWx1ZUJpdHdpc2VWYWx1ZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQml0d2lzZVZhbHVlIiwic3RyaW5nIiwidHlwZSIsImRpc2pvaW50IiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJpc0Rpc2pvaW50IiwiZ2V0TGVmdFZhbHVlIiwiZ2V0UmlnaHRWYWx1ZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhbHVlIiwiYml0d2lzZVZhbHVlU3RyaW5nIiwidHJhY2UiLCJWYWx1ZSIsImRvbSIsImxlZnRWYWx1ZVR5cGUiLCJyaWdodFZhbHVlVHlwZSIsIkJPT0xFQU5fVFlQRSIsImxlZnRWYWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicmlnaHRWYWx1ZVN0cmluZyIsImxlZnRWYWx1ZUJvb2xlYW4iLCJnZXRCb29sZWFuIiwicmlnaHRWYWx1ZUJvb2xlYW4iLCJib29sZWFuIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJiaXR3aXNlVmFsdWUiLCJ2YWx1ZUJpdHdpc2VWYWx1ZU5vZGUiLCJiaXR3aXNlVmFsdWVOb2RlIiwiYml0d2lzZVZhbHVlRnJvbUJpdHdpc2VWYWx1ZU5vZGUiLCJuYW1lIiwibGVmdFZhbHVlTm9kZSIsInJpZ2h0VmFsdWVOb2RlIiwiZGlzam9pbnRGcm9tQml0d2lzZVZhbHVlTm9kZSIsInN0cmluZ0Zyb21UeXBlRGlzam9pbnRMZWZ0VmFsdWVBbmRSaWdodFZhbHVlIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQi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