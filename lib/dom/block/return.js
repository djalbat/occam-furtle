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
var _block = /*#__PURE__*/ _interop_require_default(require("../../context/block"));
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
                var blockContext = _block.default.fromNothing(context);
                context = blockContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYmxvY2svcmV0dXJuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCBCbG9ja0NvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvYmxvY2tcIjtcblxuaW1wb3J0IHsgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCBzdGVwTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvY2VkdXJlRGVjbGFyYXRpb24vcmV0dXJuQmxvY2svc3RlcFwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUmV0dXJuQmxvY2sge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHN0ZXBzLCByZXR1cm5TdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gICAgdGhpcy5yZXR1cm5TdGF0ZW1lbnQgPSByZXR1cm5TdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0U3RlcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RlcHM7XG4gIH1cblxuICBnZXRSZXR1cm5TdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuU3RhdGVtZW50O1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgY29uc3QgYmxvY2tDb250ZXh0ID0gQmxvY2tDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGJsb2NrQ29udGV4dDsgLy8vXG5cbiAgICB0aGlzLnN0ZXBzLmZvckVhY2goKHN0ZXApID0+IHtcbiAgICAgIHN0ZXAucmVzb2x2ZShjb250ZXh0KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5yZXR1cm5TdGF0ZW1lbnQucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSZXR1cm5CbG9ja1wiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgUmV0dXJuU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHN0ZXBOb2RlcyA9IHN0ZXBOb2Rlc1F1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgc3RlcHMgPSBzdGVwc0Zyb21TdGVwTm9kZXMoc3RlcE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICByZXR1cm5TdGF0ZW1lbnQgPSBSZXR1cm5TdGF0ZW1lbnQuZnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHJldHVybkJsb2NrID0gbmV3IFJldHVybkJsb2NrKHN0cmluZywgc3RlcHMsIHJldHVyblN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gcmV0dXJuQmxvY2s7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGVwc0Zyb21TdGVwTm9kZXMoc3RlcE5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3RlcCB9ID0gZG9tLFxuICAgICAgICBzdGVwcyA9IHN0ZXBOb2Rlcy5tYXAoKHN0ZXBOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RlcCA9IFN0ZXAuZnJvbVN0ZXBOb2RlKHN0ZXBOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdGVwO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3RlcHM7XG59XG4iXSwibmFtZXMiOlsic3RlcE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZG9tQXNzaWduZWQiLCJSZXR1cm5CbG9jayIsInN0cmluZyIsInN0ZXBzIiwicmV0dXJuU3RhdGVtZW50IiwiZ2V0U3RyaW5nIiwiZ2V0U3RlcHMiLCJnZXRSZXR1cm5TdGF0ZW1lbnQiLCJyZXNvbHZlIiwiY29udGV4dCIsImJsb2NrQ29udGV4dCIsIkJsb2NrQ29udGV4dCIsImZyb21Ob3RoaW5nIiwiZm9yRWFjaCIsInN0ZXAiLCJ2YWx1ZSIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJSZXR1cm5TdGF0ZW1lbnQiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwic3RlcE5vZGVzIiwic3RlcHNGcm9tU3RlcE5vZGVzIiwicmV0dXJuQmxvY2siLCJuYW1lIiwiU3RlcCIsIm1hcCIsInN0ZXBOb2RlIiwiZnJvbVN0ZXBOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7NERBQ1M7cUJBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzNCLElBQU1BLGlCQUFpQkMsSUFBQUEsaUJBQVUsRUFBQztJQUVsQyxXQUFlQyxJQUFBQSxnQkFBVyxnQ0FBQzthQUFNQyxZQUNuQkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLGVBQWU7Z0NBRFhIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTs7OztZQUd6QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxLQUFLO1lBQ25COzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxlQUFlO1lBQzdCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLE9BQU87Z0JBQ2IsSUFBTUMsZUFBZUMsY0FBWSxDQUFDQyxXQUFXLENBQUNIO2dCQUU5Q0EsVUFBVUMsY0FBYyxHQUFHO2dCQUUzQixJQUFJLENBQUNQLEtBQUssQ0FBQ1UsT0FBTyxDQUFDLFNBQUNDO29CQUNsQkEsS0FBS04sT0FBTyxDQUFDQztnQkFDZjtnQkFFQSxJQUFNTSxRQUFRLElBQUksQ0FBQ1gsZUFBZSxDQUFDSSxPQUFPLENBQUNDO2dCQUUzQyxPQUFPTTtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLDZCQUE2QkMsd0JBQXdCLEVBQUVSLE9BQU87Z0JBQ25FLElBQU0sQUFBRVMsa0JBQW9CQyxZQUFHLENBQXZCRCxpQkFDRkUsT0FBT0gsMEJBQ1BmLFNBQVNPLFFBQVFZLFlBQVksQ0FBQ0QsT0FDOUJFLFlBQVl4QixlQUFlbUIsMkJBQzNCZCxRQUFRb0IsbUJBQW1CRCxXQUFXYixVQUN0Q0wsa0JBQWtCYyxnQkFBZ0JGLDRCQUE0QixDQUFDQywwQkFBMEJSLFVBQ3pGZSxjQUFjLElBQUl2QixZQUFZQyxRQUFRQyxPQUFPQztnQkFFbkQsT0FBT29CO1lBQ1Q7Ozs7S0FaQSwrQkFBT0MsUUFBTztBQWVoQixTQUFTRixtQkFBbUJELFNBQVMsRUFBRWIsT0FBTztJQUM1QyxJQUFNLEFBQUVpQixPQUFTUCxZQUFHLENBQVpPLE1BQ0Z2QixRQUFRbUIsVUFBVUssR0FBRyxDQUFDLFNBQUNDO1FBQ3JCLElBQU1kLE9BQU9ZLEtBQUtHLFlBQVksQ0FBQ0QsVUFBVW5CO1FBRXpDLE9BQU9LO0lBQ1Q7SUFFTixPQUFPWDtBQUNUIn0=