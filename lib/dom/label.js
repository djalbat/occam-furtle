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
var _query = require("../utilities/query");
var _dom = require("../dom");
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
var _Label;
var labelNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration/label"), nameTerminalNodeQuery = (0, _query.nodeQuery)("/label/@name");
var _default = (0, _dom.domAssigned)((_Label = /*#__PURE__*/ function() {
    function Label(name) {
        _class_call_check(this, Label);
        this.name = name;
    }
    _create_class(Label, [
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getString",
            value: function getString() {
                var string = this.name; ///
                return string;
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var labelNode = labelNodeQuery(procedureDeclarationNode), name = nameFromLabelNode(labelNode), label = new Label(name);
                return label;
            }
        }
    ]);
    return Label;
}(), _define_property(_Label, "name", "Label"), _Label));
function nameFromLabelNode(labelNode) {
    var nameTerminalNode = nameTerminalNodeQuery(labelNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBsYWJlbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9sYWJlbFwiKSxcbiAgICAgIG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sYWJlbC9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTGFiZWwge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLm5hbWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMYWJlbFwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsTm9kZSA9IGxhYmVsTm9kZVF1ZXJ5KHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSksXG4gICAgICAgICAgbGFiZWwgPSBuZXcgTGFiZWwobmFtZSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShsYWJlbE5vZGUpLFxuICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG4iXSwibmFtZXMiOlsibGFiZWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkxhYmVsIiwibmFtZSIsImdldE5hbWUiLCJnZXRTdHJpbmciLCJzdHJpbmciLCJmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwiY29udGV4dCIsImxhYmVsTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibGFiZWwiLCJuYW1lVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztxQkFOMEI7bUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUMzQkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0lBRXhDLFdBQWVFLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxJQUFJO2dDQURlRDtRQUU3QixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxJQUFJO1lBQ2xCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFNBQVMsSUFBSSxDQUFDSCxJQUFJLEVBQUUsR0FBRztnQkFFN0IsT0FBT0c7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFQyxPQUFPO2dCQUNuRSxJQUFNQyxZQUFZWixlQUFlVSwyQkFDM0JMLE9BQU9RLGtCQUFrQkQsWUFDekJFLFFBQVEsSUFBSVYsTUFBTUM7Z0JBRXhCLE9BQU9TO1lBQ1Q7Ozs7S0FSQSx5QkFBT1QsUUFBTztBQVdoQixTQUFTUSxrQkFBa0JELFNBQVM7SUFDbEMsSUFBTUcsbUJBQW1CYixzQkFBc0JVLFlBQ3pDSSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRFosT0FBT1cseUJBQXlCLEdBQUc7SUFFekMsT0FBT1g7QUFDVCJ9