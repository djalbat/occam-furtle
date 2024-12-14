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
                var value = null;
                this.steps.forEach(function(step) {
                    step.resolve(context);
                });
                if (this.returnStatement !== null) {
                    value = this.returnStatement.resolve(context);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcmV0dXJuQmxvY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5cbmNvbnN0IHN0ZXBOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9yZXR1cm5CbG9jay9zdGVwXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBSZXR1cm5CbG9jayB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgc3RlcHMsIHJldHVyblN0YXRlbWVudCkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuc3RlcHMgPSBzdGVwcztcbiAgICB0aGlzLnJldHVyblN0YXRlbWVudCA9IHJldHVyblN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRTdGVwcygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGVwcztcbiAgfVxuXG4gIGdldFJldHVyblN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWUgPSBudWxsO1xuXG4gICAgdGhpcy5zdGVwcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgICBzdGVwLnJlc29sdmUoY29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5yZXR1cm5TdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdGhpcy5yZXR1cm5TdGF0ZW1lbnQucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmV0dXJuQmxvY2tcIjtcblxuICBzdGF0aWMgZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFJldHVyblN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBzdGVwTm9kZXMgPSBzdGVwTm9kZXNRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHN0ZXBzID0gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgcmV0dXJuU3RhdGVtZW50ID0gUmV0dXJuU3RhdGVtZW50LmZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUocHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICByZXR1cm5CbG9jayA9IG5ldyBSZXR1cm5CbG9jayhzdHJpbmcsIHN0ZXBzLCByZXR1cm5TdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIHJldHVybkJsb2NrO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RlcHNGcm9tU3RlcE5vZGVzKHN0ZXBOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFN0ZXAgfSA9IGRvbSxcbiAgICAgICAgc3RlcHMgPSBzdGVwTm9kZXMubWFwKChzdGVwTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0ZXAgPSBTdGVwLmZyb21TdGVwTm9kZShzdGVwTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3RlcDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN0ZXBzO1xufVxuIl0sIm5hbWVzIjpbInN0ZXBOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiUmV0dXJuQmxvY2siLCJzdHJpbmciLCJzdGVwcyIsInJldHVyblN0YXRlbWVudCIsImdldFN0cmluZyIsImdldFN0ZXBzIiwiZ2V0UmV0dXJuU3RhdGVtZW50IiwicmVzb2x2ZSIsImNvbnRleHQiLCJ2YWx1ZSIsImZvckVhY2giLCJzdGVwIiwiZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsIlJldHVyblN0YXRlbWVudCIsImRvbSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJzdGVwTm9kZXMiLCJzdGVwc0Zyb21TdGVwTm9kZXMiLCJyZXR1cm5CbG9jayIsIm5hbWUiLCJTdGVwIiwibWFwIiwic3RlcE5vZGUiLCJmcm9tU3RlcE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtxQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzNCLElBQU1BLGlCQUFpQkMsSUFBQUEsaUJBQVUsRUFBQztJQUVsQyxXQUFlQyxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLGVBQWU7Z0NBRFhIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxlQUFlO1lBQzdCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBSUMsUUFBUTtnQkFFWixJQUFJLENBQUNQLEtBQUssQ0FBQ1EsT0FBTyxDQUFDLFNBQUNDO29CQUNsQkEsS0FBS0osT0FBTyxDQUFDQztnQkFDZjtnQkFFQSxJQUFJLElBQUksQ0FBQ0wsZUFBZSxLQUFLLE1BQU07b0JBQ2pDTSxRQUFRLElBQUksQ0FBQ04sZUFBZSxDQUFDSSxPQUFPLENBQUNDO2dCQUN2QztnQkFFQSxPQUFPQztZQUNUOzs7O1lBSU9HLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVMLE9BQU87Z0JBQ25FLElBQU0sQUFBRU0sa0JBQW9CQyxZQUFHLENBQXZCRCxpQkFDRkUsT0FBT0gsMEJBQ1BaLFNBQVNPLFFBQVFTLFlBQVksQ0FBQ0QsT0FDOUJFLFlBQVlyQixlQUFlZ0IsMkJBQzNCWCxRQUFRaUIsbUJBQW1CRCxXQUFXVixVQUN0Q0wsa0JBQWtCVyxnQkFBZ0JGLDRCQUE0QixDQUFDQywwQkFBMEJMLFVBQ3pGWSxjQUFjLElBQUlwQixZQUFZQyxRQUFRQyxPQUFPQztnQkFFbkQsT0FBT2lCO1lBQ1Q7Ozs7S0FaQSwrQkFBT0MsUUFBTztBQWVoQixTQUFTRixtQkFBbUJELFNBQVMsRUFBRVYsT0FBTztJQUM1QyxJQUFNLEFBQUVjLE9BQVNQLFlBQUcsQ0FBWk8sTUFDRnBCLFFBQVFnQixVQUFVSyxHQUFHLENBQUMsU0FBQ0M7UUFDckIsSUFBTWIsT0FBT1csS0FBS0csWUFBWSxDQUFDRCxVQUFVaEI7UUFFekMsT0FBT0c7SUFDVDtJQUVOLE9BQU9UO0FBQ1QifQ==