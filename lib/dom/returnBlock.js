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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _query = require("../utilities/query");
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
var _ReturnBlock;
var stepNodesQuery = (0, _query.nodesQuery)("/procedureDeclaration/returnBlock/step");
var _default = (0, _dom.domAssigned)((_ReturnBlock = /*#__PURE__*/ function() {
    function ReturnBlock(string, steps, returnStatement) {
        _class_call_check(this, ReturnBlock);
        this.string = string;
        this.steps = steps;
        this.returnStatement = returnStatement;
    }
    _create_class(ReturnBlock, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getSteps",
            value: function getSteps() {
                return this.steps;
            }
        },
        {
            key: "getReturnStatement",
            value: function getReturnStatement() {
                return this.returnStatement;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                this.steps.forEach(function(step) {
                    step.resolve(context);
                });
                var value = this.returnStatement.resolve(context);
                return value;
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var ReturnStatement = _dom.default.ReturnStatement, node = procedureDeclarationNode, string = context.nodeAsString(node), stepNodes = stepNodesQuery(procedureDeclarationNode), steps = stepsFromStepNodes(stepNodes, context), returnStatement = ReturnStatement.fromProcedureDeclarationNode(procedureDeclarationNode, context), returnBlock = new ReturnBlock(string, steps, returnStatement);
                return returnBlock;
            }
        }
    ]);
    return ReturnBlock;
}(), _define_property(_ReturnBlock, "name", "ReturnBlock"), _ReturnBlock));
function stepsFromStepNodes(stepNodes, context) {
    var Step = _dom.default.Step, steps = stepNodes.map(function(stepNode) {
        var step = Step.fromStepNode(stepNode, context);
        return step;
    });
    return steps;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmV0dXJuQmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHN0ZXBOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9zdGVwXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBSZXR1cm5CbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RlcHMsIHJldHVyblN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB0aGlzLnJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcztcbiAgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgIHN0ZXAucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZXR1cm5TdGF0ZW1lbnQucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5CbG9ja1wiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHN0ZXBOb2RlcyA9IHN0ZXBOb2Rlc1F1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21TdGVwTm9kZXMoc3RlcE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBSZXR1cm5TdGF0ZW1lbnQuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKHN0cmluZywgc3RlcHMsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2s7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGVwc0Zyb21TdGVwTm9kZXMoc3RlcE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZG9tLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IFN0ZXAuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG4iXSwibmFtZXMiOlsic3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZXR1cm5CbG9jayIsInN0cmluZyIsInN0ZXBzIiwicmV0dXJuU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RlcHMiLCJnZXRSZXR1cm5TdGF0ZW1lbnQiLCJyZXNvbHZlIiwiY29udGV4dCIsImZvckVhY2giLCJzdGVwIiwidmFsdWUiLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiUmV0dXJuU3RhdGVtZW50IiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInN0ZXBOb2RlcyIsInN0ZXBzRnJvbVN0ZXBOb2RlcyIsInJldHVybkJsb2NrIiwibmFtZSIsIlN0ZXAiLCJtYXAiLCJzdGVwTm9kZSIsImZyb21TdGVwTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHM0IsSUFBTUEsaUJBQWlCQyxJQUFBQSxpQkFBVSxFQUFDO0lBRWxDLFdBQWVDLElBQUFBLGdCQUFXLGdDQUFDO2FBQU1DLFlBQ25CQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsZUFBZTtnQ0FEWEg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxlQUFlLEdBQUdBOzs7O1lBR3pCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtBQUs7WUFDbkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGVBQWU7WUFDN0I7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFJLENBQUNOLEtBQUssQ0FBQ08sT0FBTyxDQUFDLFNBQUNDO29CQUNsQkEsS0FBS0gsT0FBTyxDQUFDQztnQkFDZjtnQkFFQSxJQUFNRyxRQUFRLElBQUksQ0FBQ1IsZUFBZSxDQUFDSSxPQUFPLENBQUNDO2dCQUUzQyxPQUFPRztZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVMLE9BQU87Z0JBQ25FLElBQU0sQUFBRU0sa0JBQW9CQyxZQUFHLENBQXZCRCxpQkFDRkUsT0FBT0gsMEJBQ1BaLFNBQVNPLFFBQVFTLFlBQVksQ0FBQ0QsT0FDOUJFLFlBQVlyQixlQUFlZ0IsMkJBQzNCWCxRQUFRaUIsbUJBQW1CRCxXQUFXVixVQUN0Q0wsa0JBQWtCVyxnQkFBZ0JGLDRCQUE0QixDQUFDQywwQkFBMEJMLFVBQ3pGWSxjQUFjLElBQUlwQixZQUFZQyxRQUFRQyxPQUFPQztnQkFFbkQsT0FBT2lCO1lBQ1Q7Ozs7S0FaQSwrQkFBT0MsUUFBTztBQWVoQixTQUFTRixtQkFBbUJELFNBQVMsRUFBRVYsT0FBTztJQUM1QyxJQUFNLEFBQUVjLE9BQVNQLFlBQUcsQ0FBWk8sTUFDRnBCLFFBQVFnQixVQUFVSyxHQUFHLENBQUMsU0FBQ0M7UUFDckIsSUFBTWQsT0FBT1ksS0FBS0csWUFBWSxDQUFDRCxVQUFVaEI7UUFFekMsT0FBT0U7SUFDVDtJQUVOLE9BQU9SO0FBQ1QifQ==