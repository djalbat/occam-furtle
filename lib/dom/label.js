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
    function Label(string, name) {
        _class_call_check(this, Label);
        this.string = string;
        this.name = name;
    }
    _create_class(Label, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = name === this.name;
                return nameMatches;
            }
        }
    ], [
        {
            key: "fromProcedureDeclarationNode",
            value: function fromProcedureDeclarationNode(procedureDeclarationNode, context) {
                var node = procedureDeclarationNode, string = context.nodeAsString(node), labelNode = labelNodeQuery(procedureDeclarationNode), name = nameFromLabelNode(labelNode, context), label = new Label(string, name);
                return label;
            }
        }
    ]);
    return Label;
}(), _define_property(_Label, "name", "Label"), _Label));
function nameFromLabelNode(labelNode, context) {
    var nameTerminalNode = nameTerminalNodeQuery(labelNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vbGFiZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBsYWJlbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvbi9sYWJlbFwiKSxcbiAgICAgIG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9sYWJlbC9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgTGFiZWwge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbmFtZU1hdGNoZXMgPSAobmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBuYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJMYWJlbFwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGUgPSBsYWJlbE5vZGVRdWVyeShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVsID0gbmV3IExhYmVsKHN0cmluZywgbmFtZSk7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuYW1lRnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShsYWJlbE5vZGUpLFxuICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG4iXSwibmFtZXMiOlsibGFiZWxOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIkxhYmVsIiwic3RyaW5nIiwibmFtZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsImZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJjb250ZXh0Iiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImxhYmVsTm9kZSIsIm5hbWVGcm9tTGFiZWxOb2RlIiwibGFiZWwiLCJuYW1lVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztxQkFOMEI7bUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUIsSUFBTUEsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUMzQkMsd0JBQXdCRCxJQUFBQSxnQkFBUyxFQUFDO0lBRXhDLFdBQWVFLElBQUFBLGdCQUFXLDBCQUFDO2FBQU1DLE1BQ25CQyxNQUFNLEVBQUVDLElBQUk7Z0NBRE9GO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUgsSUFBSTtnQkFDWixJQUFNSSxjQUFlSixTQUFTLElBQUksQ0FBQ0EsSUFBSTtnQkFFdkMsT0FBT0k7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSw2QkFBNkJDLHdCQUF3QixFQUFFQyxPQUFPO2dCQUNuRSxJQUFNQyxPQUFPRiwwQkFDUFAsU0FBU1EsUUFBUUUsWUFBWSxDQUFDRCxPQUM5QkUsWUFBWWhCLGVBQWVZLDJCQUMzQk4sT0FBT1csa0JBQWtCRCxXQUFXSCxVQUNwQ0ssUUFBUSxJQUFJZCxNQUFNQyxRQUFRQztnQkFFaEMsT0FBT1k7WUFDVDs7OztLQVZBLHlCQUFPWixRQUFPO0FBYWhCLFNBQVNXLGtCQUFrQkQsU0FBUyxFQUFFSCxPQUFPO0lBQzNDLElBQU1NLG1CQUFtQmpCLHNCQUFzQmMsWUFDekNJLDBCQUEwQkQsaUJBQWlCRSxVQUFVLElBQ3JEZixPQUFPYyx5QkFBeUIsR0FBRztJQUV6QyxPQUFPZDtBQUNUIn0=