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
var _NegatedCondition;
var conditionNodeQuery = (0, _query.nodeQuery)("/negatedCondition/condition"), negatedConditionNodeQuery = (0, _query.nodeQuery)("/condition/negatedCondition");
var _default = (0, _dom.domAssigned)((_NegatedCondition = /*#__PURE__*/ function() {
    function NegatedCondition(string, condition) {
        _class_call_check(this, NegatedCondition);
        this.string = string;
        this.condition = condition;
    }
    _create_class(NegatedCondition, [
        {
            key: "getString",
            value: function getString() {
                debugger;
            }
        },
        {
            key: "getCondition",
            value: function getCondition() {
                return this.condition;
            }
        },
        {
            key: "resolve",
            value: function resolve(context) {
                var value;
                var negatedConditionString = this.string; ///
                context.trace("Resolving the '".concat(negatedConditionString, "' negated condition..."));
                value = this.condition.resolve(context);
                var boolean = value.getBoolean();
                boolean = !boolean;
                var Value = _dom.default.Value;
                value = Value.fromBoolean(boolean, context); ///
                context.debug("...resolved the '".concat(negatedConditionString, "' negated condition."));
                return value;
            }
        }
    ], [
        {
            key: "fromConditionNode",
            value: function fromConditionNode(conditionNode, context) {
                var negatedCondition = null;
                var negatedConditionNode = negatedConditionNodeQuery(conditionNode);
                if (negatedConditionNode !== null) {
                    var Condition = _dom.default.Condition, node = negatedConditionNode, string = context.nodeAsString(node), _$conditionNode = conditionNodeQuery(negatedConditionNode), condition = Condition.fromConditionNode(_$conditionNode, context);
                    negatedCondition = new NegatedCondition(string, condition);
                }
                return negatedCondition;
            }
        }
    ]);
    return NegatedCondition;
}(), _define_property(_NegatedCondition, "name", "NegatedCondition"), _NegatedCondition));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vY29uZGl0aW9uL25lZ2F0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgY29uZGl0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL25lZ2F0ZWRDb25kaXRpb24vY29uZGl0aW9uXCIpLFxuICAgICAgbmVnYXRlZENvbmRpdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9jb25kaXRpb24vbmVnYXRlZENvbmRpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTmVnYXRlZENvbmRpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgY29uZGl0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgZGVidWdnZXJcbiAgfVxuXG4gIGdldENvbmRpdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25kaXRpb247XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBuZWdhdGVkQ29uZGl0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAnJHtuZWdhdGVkQ29uZGl0aW9uU3RyaW5nfScgbmVnYXRlZCBjb25kaXRpb24uLi5gKTtcblxuICAgIHZhbHVlID0gdGhpcy5jb25kaXRpb24ucmVzb2x2ZShjb250ZXh0KTtcblxuICAgIGxldCBib29sZWFuID0gdmFsdWUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgYm9vbGVhbiA9ICFib29sZWFuO1xuXG4gICAgY29uc3QgeyBWYWx1ZSB9ID0gZG9tO1xuXG4gICAgdmFsdWUgPSBWYWx1ZS5mcm9tQm9vbGVhbihib29sZWFuLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke25lZ2F0ZWRDb25kaXRpb25TdHJpbmd9JyBuZWdhdGVkIGNvbmRpdGlvbi5gKTtcblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJOZWdhdGVkQ29uZGl0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25kaXRpb25Ob2RlKGNvbmRpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgbmVnYXRlZENvbmRpdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBuZWdhdGVkQ29uZGl0aW9uTm9kZSA9IG5lZ2F0ZWRDb25kaXRpb25Ob2RlUXVlcnkoY29uZGl0aW9uTm9kZSk7XG5cbiAgICBpZiAobmVnYXRlZENvbmRpdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgQ29uZGl0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gbmVnYXRlZENvbmRpdGlvbk5vZGUsICAvL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBjb25kaXRpb25Ob2RlID0gY29uZGl0aW9uTm9kZVF1ZXJ5KG5lZ2F0ZWRDb25kaXRpb25Ob2RlKSxcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IENvbmRpdGlvbi5mcm9tQ29uZGl0aW9uTm9kZShjb25kaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgbmVnYXRlZENvbmRpdGlvbiA9IG5ldyBOZWdhdGVkQ29uZGl0aW9uKHN0cmluZywgY29uZGl0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmVnYXRlZENvbmRpdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiY29uZGl0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibmVnYXRlZENvbmRpdGlvbk5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiTmVnYXRlZENvbmRpdGlvbiIsInN0cmluZyIsImNvbmRpdGlvbiIsImdldFN0cmluZyIsImdldENvbmRpdGlvbiIsInJlc29sdmUiLCJjb250ZXh0IiwidmFsdWUiLCJuZWdhdGVkQ29uZGl0aW9uU3RyaW5nIiwidHJhY2UiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsIlZhbHVlIiwiZG9tIiwiZnJvbUJvb2xlYW4iLCJkZWJ1ZyIsImZyb21Db25kaXRpb25Ob2RlIiwiY29uZGl0aW9uTm9kZSIsIm5lZ2F0ZWRDb25kaXRpb24iLCJuZWdhdGVkQ29uZGl0aW9uTm9kZSIsIkNvbmRpdGlvbiIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxxQkFBcUJDLElBQUFBLGdCQUFTLEVBQUMsZ0NBQy9CQyw0QkFBNEJELElBQUFBLGdCQUFTLEVBQUM7SUFFNUMsV0FBZUUsSUFBQUEsZ0JBQVcscUNBQUM7YUFBTUMsaUJBQ25CQyxNQUFNLEVBQUVDLFNBQVM7Z0NBREVGO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLFFBQVE7WUFDVjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQUlDO2dCQUVKLElBQU1DLHlCQUF5QixJQUFJLENBQUNQLE1BQU0sRUFBRSxHQUFHO2dCQUUvQ0ssUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQXdDLE9BQXZCRCx3QkFBdUI7Z0JBRXZERCxRQUFRLElBQUksQ0FBQ0wsU0FBUyxDQUFDRyxPQUFPLENBQUNDO2dCQUUvQixJQUFJSSxVQUFVSCxNQUFNSSxVQUFVO2dCQUU5QkQsVUFBVSxDQUFDQTtnQkFFWCxJQUFNLEFBQUVFLFFBQVVDLFlBQUcsQ0FBYkQ7Z0JBRVJMLFFBQVFLLE1BQU1FLFdBQVcsQ0FBQ0osU0FBU0osVUFBVyxHQUFHO2dCQUVqREEsUUFBUVMsS0FBSyxDQUFDLEFBQUMsb0JBQTBDLE9BQXZCUCx3QkFBdUI7Z0JBRXpELE9BQU9EO1lBQ1Q7Ozs7WUFJT1MsS0FBQUE7bUJBQVAsU0FBT0Esa0JBQWtCQyxhQUFhLEVBQUVYLE9BQU87Z0JBQzdDLElBQUlZLG1CQUFtQjtnQkFFdkIsSUFBTUMsdUJBQXVCckIsMEJBQTBCbUI7Z0JBRXZELElBQUlFLHlCQUF5QixNQUFNO29CQUNqQyxJQUFNLEFBQUVDLFlBQWNQLFlBQUcsQ0FBakJPLFdBQ0ZDLE9BQU9GLHNCQUNQbEIsU0FBU0ssUUFBUWdCLFlBQVksQ0FBQ0QsT0FDOUJKLGtCQUFnQnJCLG1CQUFtQnVCLHVCQUNuQ2pCLFlBQVlrQixVQUFVSixpQkFBaUIsQ0FBQ0MsaUJBQWVYO29CQUU3RFksbUJBQW1CLElBQUlsQixpQkFBaUJDLFFBQVFDO2dCQUNsRDtnQkFFQSxPQUFPZ0I7WUFDVDs7OztLQWxCQSxvQ0FBT0ssUUFBTyJ9