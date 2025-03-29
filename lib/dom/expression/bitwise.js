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
var _BitwiseExpression;
var terminalNodeQuery = (0, _query.nodeQuery)("/bitwiseExpression/@*"), leftExpressionNodeQuery = (0, _query.nodeQuery)("/bitwiseExpression/expression[0]"), rightExpressionNodeQuery = (0, _query.nodeQuery)("/bitwiseExpression/expression[1]"), expressionBitwiseExpressionNodeQuery = (0, _query.nodeQuery)("/expression/bitwiseExpression");
var _default = (0, _dom.domAssigned)((_BitwiseExpression = /*#__PURE__*/ function() {
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
                var Expression = _dom.default.Expression, leftExpression = this.leftExpression.evaluate(context), rightExpression = this.rightExpression.evaluate(context), leftExpressionType = leftExpression.getType(), rightExpressionType = rightExpression.getType();
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
    var Expression = _dom.default.Expression, BitwiseExpression = _dom.default.BitwiseExpression, leftExpressionNode = leftExpressionNodeQuery(bitwiseExpressionNode), rightExpressionNode = rightExpressionNodeQuery(bitwiseExpressionNode), type = _types.BOOLEAN_TYPE, disjoint = disjointFromBitwiseExpressionNode(bitwiseExpressionNode, context), leftExpression = Expression.fromExpressionNode(leftExpressionNode, context), rightExpression = Expression.fromExpressionNode(rightExpressionNode, context), string = stringFromTypeDisjointLeftExpressionAndRightExpression(disjoint, leftExpression, rightExpression, context), bitwiseExpression = new BitwiseExpression(string, type, disjoint, leftExpression, rightExpression);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZXhwcmVzc2lvbi9iaXR3aXNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBFeGNlcHRpb24gZnJvbSBcIi4uLy4uL2V4Y2VwdGlvblwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgQ09OSlVOQ1RJT04sIERJU0pVTkNUSU9OIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB0ZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9iaXR3aXNlRXhwcmVzc2lvbi9AKlwiKSxcbiAgICAgIGxlZnRFeHByZXNzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2JpdHdpc2VFeHByZXNzaW9uL2V4cHJlc3Npb25bMF1cIiksXG4gICAgICByaWdodEV4cHJlc3Npb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYml0d2lzZUV4cHJlc3Npb24vZXhwcmVzc2lvblsxXVwiKSxcbiAgICAgIGV4cHJlc3Npb25CaXR3aXNlRXhwcmVzc2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9leHByZXNzaW9uL2JpdHdpc2VFeHByZXNzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBCaXR3aXNlRXhwcmVzc2lvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgZGlzam9pbnQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuZGlzam9pbnQgPSBkaXNqb2ludDtcbiAgICB0aGlzLmxlZnRFeHByZXNzaW9uID0gbGVmdEV4cHJlc3Npb247XG4gICAgdGhpcy5yaWdodEV4cHJlc3Npb24gPSByaWdodEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgaXNEaXNqb2ludCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNqb2ludDtcbiAgfVxuXG4gIGdldExlZnRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRFeHByZXNzaW9uO1xuICB9XG5cbiAgZ2V0UmlnaHRFeHByZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0RXhwcmVzc2lvbjtcbiAgfVxuXG4gIGV2YWx1YXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0IGJpdHdpc2VFeHByZXNzaW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7Yml0d2lzZUV4cHJlc3Npb25TdHJpbmd9JyBiaXR3aXNlIGV4cHJlc3Npb24uLi5gKTtcblxuICAgIGNvbnN0IHsgRXhwcmVzc2lvbiB9ID0gZG9tLFxuICAgICAgICAgIGxlZnRFeHByZXNzaW9uID0gdGhpcy5sZWZ0RXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICByaWdodEV4cHJlc3Npb24gPSB0aGlzLnJpZ2h0RXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0RXhwcmVzc2lvblR5cGUgPSBsZWZ0RXhwcmVzc2lvbi5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRFeHByZXNzaW9uVHlwZSA9IHJpZ2h0RXhwcmVzc2lvbi5nZXRUeXBlKCk7XG5cbiAgICBpZiAobGVmdEV4cHJlc3Npb25UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IGxlZnRFeHByZXNzaW9uU3RyaW5nID0gbGVmdEV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgICAgICBtZXNzYWdlID0gYFRoZSAke2xlZnRFeHByZXNzaW9uU3RyaW5nfSBsZWZ0IGV4cHJlc3Npb24ncyB0eXBlIGlzICcke2xlZnRFeHByZXNzaW9uVHlwZX0nIHdoZW4gaXQgc2hvdWxkIGJlIG9mIHR5cGUgJyR7Qk9PTEVBTl9UWVBFfScuYCxcbiAgICAgICAgICAgIGV4Y2VwdGlvbiA9IEV4Y2VwdGlvbi5mcm9tTWVzc2FnZShtZXNzYWdlKTtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cblxuICAgIGlmIChyaWdodEV4cHJlc3Npb25UeXBlICE9PSBCT09MRUFOX1RZUEUpIHtcbiAgICAgIGNvbnN0IHJpZ2h0RXhwcmVzc2lvblN0cmluZyA9IHJpZ2h0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgICAgIG1lc3NhZ2UgPSBgVGhlICR7cmlnaHRFeHByZXNzaW9uU3RyaW5nfSByaWdodCBleHByZXNzaW9uJ3MgdHlwZSBpcyAnJHtyaWdodEV4cHJlc3Npb25UeXBlfScgd2hlbiBpdCBzaG91bGQgYmUgb2YgdHlwZSAnJHtCT09MRUFOX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgbGVmdEV4cHJlc3Npb25Cb29sZWFuID0gbGVmdEV4cHJlc3Npb24uZ2V0Qm9vbGVhbigpLFxuICAgICAgICAgIHJpZ2h0RXhwcmVzc2lvbkJvb2xlYW4gPSByaWdodEV4cHJlc3Npb24uZ2V0Qm9vbGVhbigpLFxuICAgICAgICAgIGJvb2xlYW4gPSB0aGlzLmRpc2pvaW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAobGVmdEV4cHJlc3Npb25Cb29sZWFuIHx8IHJpZ2h0RXhwcmVzc2lvbkJvb2xlYW4pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIChsZWZ0RXhwcmVzc2lvbkJvb2xlYW4gJiYgcmlnaHRFeHByZXNzaW9uQm9vbGVhbik7XG5cbiAgICBleHByZXNzaW9uID0gRXhwcmVzc2lvbi5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uZXZhbHVhdGVkIHRoZSAnJHtiaXR3aXNlRXhwcmVzc2lvblN0cmluZ30nIGJpdHdpc2UgZXhwcmVzc2lvbi5gKTtcblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkJpdHdpc2VFeHByZXNzaW9uXCI7XG5cbiAgc3RhdGljIGZyb21FeHByZXNzaW9uTm9kZShleHByZXNzaW9uTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBiaXR3aXNlRXhwcmVzc2lvbiA9IG51bGw7XG5cbiAgICBjb25zdCBleHByZXNzaW9uQml0d2lzZUV4cHJlc3Npb25Ob2RlID0gZXhwcmVzc2lvbkJpdHdpc2VFeHByZXNzaW9uTm9kZVF1ZXJ5KGV4cHJlc3Npb25Ob2RlKTtcblxuICAgIGlmIChleHByZXNzaW9uQml0d2lzZUV4cHJlc3Npb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBiaXR3aXNlRXhwcmVzc2lvbk5vZGUgPSBleHByZXNzaW9uQml0d2lzZUV4cHJlc3Npb25Ob2RlOyAvLy9cblxuICAgICAgYml0d2lzZUV4cHJlc3Npb24gPSBiaXR3aXNlRXhwcmVzc2lvbkZyb21CaXR3aXNlRXhwcmVzc2lvbk5vZGUoYml0d2lzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYml0d2lzZUV4cHJlc3Npb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBiaXR3aXNlRXhwcmVzc2lvbkZyb21CaXR3aXNlRXhwcmVzc2lvbk5vZGUoYml0d2lzZUV4cHJlc3Npb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRXhwcmVzc2lvbiwgQml0d2lzZUV4cHJlc3Npb24gfSA9IGRvbSxcbiAgICAgICAgbGVmdEV4cHJlc3Npb25Ob2RlID0gbGVmdEV4cHJlc3Npb25Ob2RlUXVlcnkoYml0d2lzZUV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgcmlnaHRFeHByZXNzaW9uTm9kZSA9IHJpZ2h0RXhwcmVzc2lvbk5vZGVRdWVyeShiaXR3aXNlRXhwcmVzc2lvbk5vZGUpLFxuICAgICAgICB0eXBlID0gQk9PTEVBTl9UWVBFLFxuICAgICAgICBkaXNqb2ludCA9IGRpc2pvaW50RnJvbUJpdHdpc2VFeHByZXNzaW9uTm9kZShiaXR3aXNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBsZWZ0RXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKGxlZnRFeHByZXNzaW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvbiA9IEV4cHJlc3Npb24uZnJvbUV4cHJlc3Npb25Ob2RlKHJpZ2h0RXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZURpc2pvaW50TGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24oZGlzam9pbnQsIGxlZnRFeHByZXNzaW9uLCByaWdodEV4cHJlc3Npb24sIGNvbnRleHQpLFxuICAgICAgICBiaXR3aXNlRXhwcmVzc2lvbiA9IG5ldyBCaXR3aXNlRXhwcmVzc2lvbihzdHJpbmcsIHR5cGUsIGRpc2pvaW50LCBsZWZ0RXhwcmVzc2lvbiwgcmlnaHRFeHByZXNzaW9uKTtcblxuICByZXR1cm4gYml0d2lzZUV4cHJlc3Npb247XG59XG5cbmZ1bmN0aW9uIGRpc2pvaW50RnJvbUJpdHdpc2VFeHByZXNzaW9uTm9kZShiaXR3aXNlRXhwcmVzc2lvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGVybWluYWxOb2RlID0gdGVybWluYWxOb2RlUXVlcnkoYml0d2lzZUV4cHJlc3Npb25Ob2RlKSxcbiAgICAgICAgdGVybWluYWxOb2RlQ29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIGRpc2pvaW50ID0gKHRlcm1pbmFsTm9kZUNvbnRlbnQgPT09IERJU0pVTkNUSU9OKTtcblxuICByZXR1cm4gZGlzam9pbnQ7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UeXBlRGlzam9pbnRMZWZ0RXhwcmVzc2lvbkFuZFJpZ2h0RXhwcmVzc2lvbihkaXNqb2ludCwgbGVmdEV4cHJlc3Npb24sIHJpZ2h0RXhwcmVzc2lvbiwgY29udGV4dCkge1xuICBjb25zdCBvcGVyYXRvclN0cmluZyA9IGRpc2pvaW50ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIERJU0pVTkNUSU9OIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09OSlVOQ1RJT04sXG4gICAgICAgIGxlZnRFeHByZXNzaW9uU3RyaW5nID0gbGVmdEV4cHJlc3Npb24uYXNTdHJpbmcoY29udGV4dCksXG4gICAgICAgIHJpZ2h0RXhwcmVzc2lvblN0cmluZyA9IHJpZ2h0RXhwcmVzc2lvbi5hc1N0cmluZyhjb250ZXh0KSxcbiAgICAgICAgc3RyaW5nID0gYCR7bGVmdEV4cHJlc3Npb25TdHJpbmd9ICR7b3BlcmF0b3JTdHJpbmd9ICR7cmlnaHRFeHByZXNzaW9uU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRFeHByZXNzaW9uTm9kZVF1ZXJ5IiwicmlnaHRFeHByZXNzaW9uTm9kZVF1ZXJ5IiwiZXhwcmVzc2lvbkJpdHdpc2VFeHByZXNzaW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJCaXR3aXNlRXhwcmVzc2lvbiIsInN0cmluZyIsInR5cGUiLCJkaXNqb2ludCIsImxlZnRFeHByZXNzaW9uIiwicmlnaHRFeHByZXNzaW9uIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImlzRGlzam9pbnQiLCJnZXRMZWZ0RXhwcmVzc2lvbiIsImdldFJpZ2h0RXhwcmVzc2lvbiIsImV2YWx1YXRlIiwiY29udGV4dCIsImV4cHJlc3Npb24iLCJiaXR3aXNlRXhwcmVzc2lvblN0cmluZyIsInRyYWNlIiwiRXhwcmVzc2lvbiIsImRvbSIsImxlZnRFeHByZXNzaW9uVHlwZSIsInJpZ2h0RXhwcmVzc2lvblR5cGUiLCJCT09MRUFOX1RZUEUiLCJsZWZ0RXhwcmVzc2lvblN0cmluZyIsImFzU3RyaW5nIiwibWVzc2FnZSIsImV4Y2VwdGlvbiIsIkV4Y2VwdGlvbiIsImZyb21NZXNzYWdlIiwicmlnaHRFeHByZXNzaW9uU3RyaW5nIiwibGVmdEV4cHJlc3Npb25Cb29sZWFuIiwiZ2V0Qm9vbGVhbiIsInJpZ2h0RXhwcmVzc2lvbkJvb2xlYW4iLCJib29sZWFuIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21FeHByZXNzaW9uTm9kZSIsImV4cHJlc3Npb25Ob2RlIiwiYml0d2lzZUV4cHJlc3Npb24iLCJleHByZXNzaW9uQml0d2lzZUV4cHJlc3Npb25Ob2RlIiwiYml0d2lzZUV4cHJlc3Npb25Ob2RlIiwiYml0d2lzZUV4cHJlc3Npb25Gcm9tQml0d2lzZUV4cHJlc3Npb25Ob2RlIiwibmFtZSIsImxlZnRFeHByZXNzaW9uTm9kZSIsInJpZ2h0RXhwcmVzc2lvbk5vZGUiLCJkaXNqb2ludEZyb21CaXR3aXNlRXhwcmVzc2lvbk5vZGUiLCJzdHJpbmdGcm9tVHlwZURpc2pvaW50TGVmdEV4cHJlc3Npb25BbmRSaWdodEV4cHJlc3Npb24iLCJ0ZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIkRJU0pVTkNUSU9OIiwib3BlcmF0b3JTdHJpbmciLCJDT05KVU5DVElPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZUE7OztlQUFBOzs7MkRBYmdCO2dFQUNNO3FCQUVJO3FCQUVHO3lCQUNZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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