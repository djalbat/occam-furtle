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
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../../elements"));
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
var _BitwiseExpression;
var terminalNodeQuery = (0, _query.nodeQuery)("/bitwiseExpression/@*"), leftExpressionNodeQuery = (0, _query.nodeQuery)("/bitwiseExpression/expression[0]"), rightExpressionNodeQuery = (0, _query.nodeQuery)("/bitwiseExpression/expression[1]"), expressionBitwiseExpressionNodeQuery = (0, _query.nodeQuery)("/expression/bitwiseExpression");
var _default = (0, _elements.define)((_BitwiseExpression = /*#__PURE__*/ function() {
    function BitwiseExpression(string, type, disjoint, leftExpression, rightExpression) {
        _class_call_check(this, BitwiseExpression);
        this.string = string;
        this.type = type;
        this.disjoint = disjoint;
        this.leftExpression = leftExpression;
        this.rightExpression = rightExpression;
    }
    _create_class(BitwiseExpression, [
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
            key: "getLeftExpression",
            value: function getLeftExpression() {
                return this.leftExpression;
            }
        },
        {
            key: "getRightExpression",
            value: function getRightExpression() {
                return this.rightExpression;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression;
                var bitwiseExpressionString = this.string; ///
                context.trace("Evaluating the '".concat(bitwiseExpressionString, "' bitwise expression..."));
                var Expression = _elements.default.Expression, leftExpression = this.leftExpression.evaluate(context), rightExpression = this.rightExpression.evaluate(context), leftExpressionType = leftExpression.getType(), rightExpressionType = rightExpression.getType();
                if (leftExpressionType !== _types.BOOLEAN_TYPE) {
                    var leftExpressionString = leftExpression.asString(context), message = "The ".concat(leftExpressionString, " left expression's type is '").concat(leftExpressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception = _exception.default.fromMessage(message);
                    throw exception;
                }
                if (rightExpressionType !== _types.BOOLEAN_TYPE) {
                    var rightExpressionString = rightExpression.asString(context), message1 = "The ".concat(rightExpressionString, " right expression's type is '").concat(rightExpressionType, "' when it should be of type '").concat(_types.BOOLEAN_TYPE, "'."), exception1 = _exception.default.fromMessage(message1);
                    throw exception1;
                }
                var leftExpressionBoolean = leftExpression.getBoolean(), rightExpressionBoolean = rightExpression.getBoolean(), boolean = this.disjoint ? leftExpressionBoolean || rightExpressionBoolean : leftExpressionBoolean && rightExpressionBoolean;
                expression = Expression.fromBoolean(boolean, context); ///
                context.debug("...evaluated the '".concat(bitwiseExpressionString, "' bitwise expression."));
                return expression;
            }
        }
    ], [
        {
            key: "fromExpressionNode",
            value: function fromExpressionNode(expressionNode, context) {
                var bitwiseExpression = null;
                var expressionBitwiseExpressionNode = expressionBitwiseExpressionNodeQuery(expressionNode);
                if (expressionBitwiseExpressionNode !== null) {
                    var bitwiseExpressionNode = expressionBitwiseExpressionNode; ///
                    bitwiseExpression = bitwiseExpressionFromBitwiseExpressionNode(bitwiseExpressionNode, context);
                }
                return bitwiseExpression;
            }
        }
    ]);
    return BitwiseExpression;
}(), _define_property(_BitwiseExpression, "name", "BitwiseExpression"), _BitwiseExpression));
function bitwiseExpressionFromBitwiseExpressionNode(bitwiseExpressionNode, context) {
    var Expression = _elements.default.Expression, BitwiseExpression = _elements.default.BitwiseExpression, leftExpressionNode = leftExpressionNodeQuery(bitwiseExpressionNode), rightExpressionNode = rightExpressionNodeQuery(bitwiseExpressionNode), type = _types.BOOLEAN_TYPE, disjoint = disjointFromBitwiseExpressionNode(bitwiseExpressionNode, context), leftExpression = Expression.fromExpressionNode(leftExpressionNode, context), rightExpression = Expression.fromExpressionNode(rightExpressionNode, context), string = stringFromTypeDisjointLeftExpressionAndRightExpression(disjoint, leftExpression, rightExpression, context), bitwiseExpression = new BitwiseExpression(string, type, disjoint, leftExpression, rightExpression);
    return bitwiseExpression;
}
function disjointFromBitwiseExpressionNode(bitwiseExpressionNode, context) {
    var terminalNode = terminalNodeQuery(bitwiseExpressionNode), terminalNodeContent = terminalNode.getContent(), disjoint = terminalNodeContent === _constants.DISJUNCTION;
    return disjoint;
}
function stringFromTypeDisjointLeftExpressionAndRightExpression(disjoint, leftExpression, rightExpression, context) {
    var operatorString = disjoint ? _constants.DISJUNCTION : _constants.CONJUNCTION, leftExpressionString = leftExpression.asString(context), rightExpressionString = rightExpression.asString(context), string = "".concat(leftExpressionString, " ").concat(operatorString, " ").concat(rightExpressionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2V4cHJlc3Npb24vYml0d2lzZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tIFwiLi4vLi4vZXhjZXB0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDT05KVU5DVElPTiwgRElTSlVOQ1RJT04gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHRlcm1pbmFsTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VFeHByZXNzaW9uL0AqXCIpLFxuICAgICAgbGVmdEV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZUV4cHJlc3Npb24vZXhwcmVzc2lvblswXVwiKSxcbiAgICAgIHJpZ2h0RXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9iaXR3aXNlRXhwcmVzc2lvbi9leHByZXNzaW9uWzFdXCIpLFxuICAgICAgZXhwcmVzc2lvbkJpdHdpc2VFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2V4cHJlc3Npb24vYml0d2lzZUV4cHJlc3Npb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBCaXR3aXNlRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgZGlzam9pbnQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGlzam9pbnQgPSBkaXNqb2ludDtcbiAgICB0aGlzLmxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb247XG4gICAgdGhpcy5yaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNEaXNqb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNqb2ludDtcbiAgfVxuXG4gIGdldExlZnRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UmlnaHRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0RXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IGJpdHdpc2VFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7Yml0d2lzZUV4cHJlc3Npb25TdHJpbmd9JyBiaXR3aXNlIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbGVmdEV4cHJlc3Npb24gPSB0aGlzLmxlZnRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IHRoaXMucmlnaHRFeHByZXNzaW9uLmV2YWx1YXRlKGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRFeHByZXNzaW9uVHlwZSA9IGxlZnRFeHByZXNzaW9uLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb25UeXBlID0gcmlnaHRFeHByZXNzaW9uLmdldFR5cGUoKTtcblxuICAgIGlmIChsZWZ0RXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgbGVmdEV4cHJlc3Npb25TdHJpbmcgPSBsZWZ0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7bGVmdEV4cHJlc3Npb25TdHJpbmd9IGxlZnQgZXhwcmVzc2lvbidzIHR5cGUgaXMgJyR7bGVmdEV4cHJlc3Npb25UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0RXhwcmVzc2lvblR5cGUgIT09IEJPT0xFQU5fVFlQRSkge1xuICAgICAgY29uc3QgcmlnaHRFeHByZXNzaW9uU3RyaW5nID0gcmlnaHRFeHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJHtyaWdodEV4cHJlc3Npb25TdHJpbmd9IHJpZ2h0IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke3JpZ2h0RXhwcmVzc2lvblR5cGV9JyB3aGVuIGl0IHNob3VsZCBiZSBvZiB0eXBlICcke0JPT0xFQU5fVFlQRX0nLmAsXG4gICAgICAgICAgICBleGNlcHRpb24gPSBFeGNlcHRpb24uZnJvbU1lc3NhZ2UobWVzc2FnZSk7XG5cbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gPSBsZWZ0RXhwcmVzc2lvbi5nZXRCb29sZWFuKCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uQm9vbGVhbiA9IHJpZ2h0RXhwcmVzc2lvbi5nZXRCb29sZWFuKCksXG4gICAgICAgICAgYm9vbGVhbiA9IHRoaXMuZGlzam9pbnQgP1xuICAgICAgICAgICAgICAgICAgICAgIChsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gfHwgcmlnaHRFeHByZXNzaW9uQm9vbGVhbikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGxlZnRFeHByZXNzaW9uQm9vbGVhbiAmJiByaWdodEV4cHJlc3Npb25Cb29sZWFuKTtcblxuICAgIGV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21Cb29sZWFuKGJvb2xlYW4sIGNvbnRleHQpOyAgLy8vXG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5ldmFsdWF0ZWQgdGhlICcke2JpdHdpc2VFeHByZXNzaW9uU3RyaW5nfScgYml0d2lzZSBleHByZXNzaW9uLmApO1xuXG4gICAgcmV0dXJuIGV4cHJlc3Npb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQml0d2lzZUV4cHJlc3Npb25cIjtcblxuICBzdGF0aWMgZnJvbUV4cHJlc3Npb25Ob2RlKGV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGJpdHdpc2VFeHByZXNzaW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGV4cHJlc3Npb25CaXR3aXNlRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uQml0d2lzZUV4cHJlc3Npb25Ob2RlUXVlcnkoZXhwcmVzc2lvbk5vZGUpO1xuXG4gICAgaWYgKGV4cHJlc3Npb25CaXR3aXNlRXhwcmVzc2lvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJpdHdpc2VFeHByZXNzaW9uTm9kZSA9IGV4cHJlc3Npb25CaXR3aXNlRXhwcmVzc2lvbk5vZGU7IC8vL1xuXG4gICAgICBiaXR3aXNlRXhwcmVzc2lvbiA9IGJpdHdpc2VFeHByZXNzaW9uRnJvbUJpdHdpc2VFeHByZXNzaW9uTm9kZShiaXR3aXNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBiaXR3aXNlRXhwcmVzc2lvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGJpdHdpc2VFeHByZXNzaW9uRnJvbUJpdHdpc2VFeHByZXNzaW9uTm9kZShiaXR3aXNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBFeHByZXNzaW9uLCBCaXR3aXNlRXhwcmVzc2lvbiB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxlZnRFeHByZXNzaW9uTm9kZSA9IGxlZnRFeHByZXNzaW9uTm9kZVF1ZXJ5KGJpdHdpc2VFeHByZXNzaW9uTm9kZSksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbk5vZGUgPSByaWdodEV4cHJlc3Npb25Ob2RlUXVlcnkoYml0d2lzZUV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgdHlwZSA9IEJPT0xFQU5fVFlQRSxcbiAgICAgICAgZGlzam9pbnQgPSBkaXNqb2ludEZyb21CaXR3aXNlRXhwcmVzc2lvbk5vZGUoYml0d2lzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShsZWZ0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb24gPSBFeHByZXNzaW9uLmZyb21FeHByZXNzaW9uTm9kZShyaWdodEV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVEaXNqb2ludExlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uKGRpc2pvaW50LCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uLCBjb250ZXh0KSxcbiAgICAgICAgYml0d2lzZUV4cHJlc3Npb24gPSBuZXcgQml0d2lzZUV4cHJlc3Npb24oc3RyaW5nLCB0eXBlLCBkaXNqb2ludCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbik7XG5cbiAgcmV0dXJuIGJpdHdpc2VFeHByZXNzaW9uO1xufVxuXG5mdW5jdGlvbiBkaXNqb2ludEZyb21CaXR3aXNlRXhwcmVzc2lvbk5vZGUoYml0d2lzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZSA9IHRlcm1pbmFsTm9kZVF1ZXJ5KGJpdHdpc2VFeHByZXNzaW9uTm9kZSksXG4gICAgICAgIHRlcm1pbmFsTm9kZUNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBkaXNqb2ludCA9ICh0ZXJtaW5hbE5vZGVDb250ZW50ID09PSBESVNKVU5DVElPTik7XG5cbiAgcmV0dXJuIGRpc2pvaW50O1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZURpc2pvaW50TGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24oZGlzam9pbnQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24sIGNvbnRleHQpIHtcbiAgY29uc3Qgb3BlcmF0b3JTdHJpbmcgPSBkaXNqb2ludCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBESVNKVU5DVElPTiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTkpVTkNUSU9OLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvblN0cmluZyA9IGxlZnRFeHByZXNzaW9uLmFzU3RyaW5nKGNvbnRleHQpLFxuICAgICAgICByaWdodEV4cHJlc3Npb25TdHJpbmcgPSByaWdodEV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHN0cmluZyA9IGAke2xlZnRFeHByZXNzaW9uU3RyaW5nfSAke29wZXJhdG9yU3RyaW5nfSAke3JpZ2h0RXhwcmVzc2lvblN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidGVybWluYWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsZWZ0RXhwcmVzc2lvbk5vZGVRdWVyeSIsInJpZ2h0RXhwcmVzc2lvbk5vZGVRdWVyeSIsImV4cHJlc3Npb25CaXR3aXNlRXhwcmVzc2lvbk5vZGVRdWVyeSIsImRlZmluZSIsIkJpdHdpc2VFeHByZXNzaW9uIiwic3RyaW5nIiwidHlwZSIsImRpc2pvaW50IiwibGVmdEV4cHJlc3Npb24iLCJyaWdodEV4cHJlc3Npb24iLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiaXNEaXNqb2ludCIsImdldExlZnRFeHByZXNzaW9uIiwiZ2V0UmlnaHRFeHByZXNzaW9uIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwiZXhwcmVzc2lvbiIsImJpdHdpc2VFeHByZXNzaW9uU3RyaW5nIiwidHJhY2UiLCJFeHByZXNzaW9uIiwiZWxlbWVudHMiLCJsZWZ0RXhwcmVzc2lvblR5cGUiLCJyaWdodEV4cHJlc3Npb25UeXBlIiwiQk9PTEVBTl9UWVBFIiwibGVmdEV4cHJlc3Npb25TdHJpbmciLCJhc1N0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsInJpZ2h0RXhwcmVzc2lvblN0cmluZyIsImxlZnRFeHByZXNzaW9uQm9vbGVhbiIsImdldEJvb2xlYW4iLCJyaWdodEV4cHJlc3Npb25Cb29sZWFuIiwiYm9vbGVhbiIsImZyb21Cb29sZWFuIiwiZGVidWciLCJmcm9tRXhwcmVzc2lvbk5vZGUiLCJleHByZXNzaW9uTm9kZSIsImJpdHdpc2VFeHByZXNzaW9uIiwiZXhwcmVzc2lvbkJpdHdpc2VFeHByZXNzaW9uTm9kZSIsImJpdHdpc2VFeHByZXNzaW9uTm9kZSIsImJpdHdpc2VFeHByZXNzaW9uRnJvbUJpdHdpc2VFeHByZXNzaW9uTm9kZSIsIm5hbWUiLCJsZWZ0RXhwcmVzc2lvbk5vZGUiLCJyaWdodEV4cHJlc3Npb25Ob2RlIiwiZGlzam9pbnRGcm9tQml0d2lzZUV4cHJlc3Npb25Ob2RlIiwic3RyaW5nRnJvbVR5cGVEaXNqb2ludExlZnRFeHByZXNzaW9uQW5kUmlnaHRFeHByZXNzaW9uIiwidGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJESVNKVU5DVElPTiIsIm9wZXJhdG9yU3RyaW5nIiwiQ09OSlVOQ1RJT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWVBOzs7ZUFBQTs7O2dFQWJxQjtnRUFDQztxQkFHSTtxQkFDRzt5QkFD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