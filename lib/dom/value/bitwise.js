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
var _constants = require("../../constants");
var _types = require("../../types");
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
                    var Value = _dom.default.Value, node = bitwiseValueNode, string = context.nodeAsString(node), type = _types.BOOLEAN_TYPE, leftValueNode = leftValueNodeQuery(bitwiseValueNode), rightValueNode = rightValueNodeQuery(bitwiseValueNode), disjoint = disjointFromBitwiseValueNode(bitwiseValueNode, context), leftValue = Value.fromValueNode(leftValueNode, context), rightValue = Value.fromValueNode(rightValueNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vdmFsdWUvYml0d2lzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi8uLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgeyBESVNKVU5DVElPTiB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9iaXR3aXNlVmFsdWUvQCpcIiksXG4gICAgICBsZWZ0VmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZVZhbHVlL3ZhbHVlWzBdXCIpLFxuICAgICAgcmlnaHRWYWx1ZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9iaXR3aXNlVmFsdWUvdmFsdWVbMV1cIiksXG4gICAgICBiaXR3aXNlVmFsdWVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFsdWUvYml0d2lzZVZhbHVlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCaXR3aXNlVmFsdWUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIGRpc2pvaW50LCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGlzam9pbnQgPSBkaXNqb2ludDtcbiAgICB0aGlzLmxlZnRWYWx1ZSA9IGxlZnRWYWx1ZTtcbiAgICB0aGlzLnJpZ2h0VmFsdWUgPSByaWdodFZhbHVlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGlzRGlzam9pbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzam9pbnQ7XG4gIH1cblxuICBnZXRMZWZ0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFZhbHVlO1xuICB9XG5cbiAgZ2V0UmlnaHRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFZhbHVlO1xuICB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGNvbnN0IGJpdHdpc2VWYWx1ZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2JpdHdpc2VWYWx1ZVN0cmluZ30nIGJpdHdpc2UgdmFsdWUuLi5gKTtcblxuICAgIGNvbnN0IHsgVmFsdWUgfSA9IGRvbSxcbiAgICAgICAgICBsZWZ0VmFsdWUgPSB0aGlzLmxlZnRWYWx1ZS5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhbHVlID0gdGhpcy5yaWdodFZhbHVlLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRWYWx1ZVR5cGUgPSBsZWZ0VmFsdWUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VmFsdWVUeXBlID0gcmlnaHRWYWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAobGVmdFZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCBsZWZ0VmFsdWVTdHJpbmcgPSBsZWZ0VmFsdWUuYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2xlZnRWYWx1ZVN0cmluZ30gbGVmdCB2YWx1ZSdzIHR5cGUgaXMgJyR7bGVmdFZhbHVlVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChyaWdodFZhbHVlVHlwZSAhPT0gQk9PTEVBTl9UWVBFKSB7XG4gICAgICBjb25zdCByaWdodFZhbHVlU3RyaW5nID0gcmlnaHRWYWx1ZS5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7cmlnaHRWYWx1ZVN0cmluZ30gcmlnaHQgdmFsdWUncyB0eXBlIGlzICcke3JpZ2h0VmFsdWVUeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdFZhbHVlQm9vbGVhbiA9IGxlZnRWYWx1ZS5nZXRCb29sZWFuKCksXG4gICAgICAgICAgcmlnaHRWYWx1ZUJvb2xlYW4gPSByaWdodFZhbHVlLmdldEJvb2xlYW4oKSxcbiAgICAgICAgICBib29sZWFuID0gdGhpcy5kaXNqb2ludCA/XG4gICAgICAgICAgICAgICAgICAgICAgKGxlZnRWYWx1ZUJvb2xlYW4gfHwgcmlnaHRWYWx1ZUJvb2xlYW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0VmFsdWVCb29sZWFuICYmIHJpZ2h0VmFsdWVCb29sZWFuKTtcblxuICAgIHZhbHVlID0gVmFsdWUuZnJvbUJvb2xlYW4oYm9vbGVhbiwgY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7Yml0d2lzZVZhbHVlU3RyaW5nfScgYml0d2lzZSB2YWx1ZS5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJCaXR3aXNlVmFsdWVcIjtcblxuICBzdGF0aWMgZnJvbVZhbHVlTm9kZSh2YWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgYml0d2lzZVZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IGJpdHdpc2VWYWx1ZU5vZGUgPSBiaXR3aXNlVmFsdWVOb2RlUXVlcnkodmFsdWVOb2RlKTtcblxuICAgIGlmIChiaXR3aXNlVmFsdWVOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFZhbHVlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gYml0d2lzZVZhbHVlTm9kZSwgIC8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEUsXG4gICAgICAgICAgICBsZWZ0VmFsdWVOb2RlID0gbGVmdFZhbHVlTm9kZVF1ZXJ5KGJpdHdpc2VWYWx1ZU5vZGUpLFxuICAgICAgICAgICAgcmlnaHRWYWx1ZU5vZGUgPSByaWdodFZhbHVlTm9kZVF1ZXJ5KGJpdHdpc2VWYWx1ZU5vZGUpLFxuICAgICAgICAgICAgZGlzam9pbnQgPSBkaXNqb2ludEZyb21CaXR3aXNlVmFsdWVOb2RlKGJpdHdpc2VWYWx1ZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbGVmdFZhbHVlID0gVmFsdWUuZnJvbVZhbHVlTm9kZShsZWZ0VmFsdWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VmFsdWUgPSBWYWx1ZS5mcm9tVmFsdWVOb2RlKHJpZ2h0VmFsdWVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgYml0d2lzZVZhbHVlID0gbmV3IEJpdHdpc2VWYWx1ZShzdHJpbmcsIHR5cGUsIGRpc2pvaW50LCBsZWZ0VmFsdWUsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiBiaXR3aXNlVmFsdWU7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBkaXNqb2ludEZyb21CaXR3aXNlVmFsdWVOb2RlKGJpdHdpc2VWYWx1ZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlID0gdGVybWluYWxOb2RlUXVlcnkoYml0d2lzZVZhbHVlTm9kZSksXG4gICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBkaXNqb2ludCA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBESVNKVU5DVElPTik7XG5cbiAgcmV0dXJuIGRpc2pvaW50O1xufVxuIl0sIm5hbWVzIjpbInRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGVmdFZhbHVlTm9kZVF1ZXJ5IiwicmlnaHRWYWx1ZU5vZGVRdWVyeSIsImJpdHdpc2VWYWx1ZU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQml0d2lzZVZhbHVlIiwic3RyaW5nIiwidHlwZSIsImRpc2pvaW50IiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJpc0Rpc2pvaW50IiwiZ2V0TGVmdFZhbHVlIiwiZ2V0UmlnaHRWYWx1ZSIsImV2YWx1YXRlIiwiY29udGV4dCIsInZhbHVlIiwiYml0d2lzZVZhbHVlU3RyaW5nIiwidHJhY2UiLCJWYWx1ZSIsImRvbSIsImxlZnRWYWx1ZVR5cGUiLCJyaWdodFZhbHVlVHlwZSIsIkJPT0xFQU5fVFlQRSIsImxlZnRWYWx1ZVN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicmlnaHRWYWx1ZVN0cmluZyIsImxlZnRWYWx1ZUJvb2xlYW4iLCJnZXRCb29sZWFuIiwicmlnaHRWYWx1ZUJvb2xlYW4iLCJib29sZWFuIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21WYWx1ZU5vZGUiLCJ2YWx1ZU5vZGUiLCJiaXR3aXNlVmFsdWUiLCJiaXR3aXNlVmFsdWVOb2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImxlZnRWYWx1ZU5vZGUiLCJyaWdodFZhbHVlTm9kZSIsImRpc2pvaW50RnJvbUJpdHdpc2VWYWx1ZU5vZGUiLCJuYW1lIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJESVNKVU5DVElPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkRBYmdCO2dFQUNNO3FCQUVJO3lCQUVFO3FCQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMscUJBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUMsMkJBQy9CRSxzQkFBc0JGLElBQUFBLGdCQUFTLEVBQUMsMkJBQ2hDRyx3QkFBd0JILElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUksSUFBQUEsZ0JBQVcsaUNBQUM7YUFBTUMsYUFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTtnQ0FEMUJMO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFFBQVE7WUFDdEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFNBQVM7WUFDdkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JB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