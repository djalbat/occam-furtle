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
var _necessary = require("necessary");
var _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
var _elements = require("../elements");
var _types = require("../types");
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
var _Primitive;
var match = _necessary.arrayUtilities.match;
var _default = (0, _elements.define)((_Primitive = /*#__PURE__*/ function() {
    function Primitive(string, node, nodes, number, boolean, stringLiteral) {
        _class_call_check(this, Primitive);
        this.string = string;
        this.node = node;
        this.nodes = nodes;
        this.number = number;
        this.boolean = boolean;
        this.stringLiteral = stringLiteral;
    }
    _create_class(Primitive, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getNodes",
            value: function getNodes() {
                return this.nodes;
            }
        },
        {
            key: "getNumber",
            value: function getNumber() {
                return this.number;
            }
        },
        {
            key: "getBoolean",
            value: function getBoolean() {
                return this.boolean;
            }
        },
        {
            key: "getStringLiteral",
            value: function getStringLiteral() {
                return this.stringLiteral;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                if (false) {
                ///
                } else if (this.node !== null) {
                    type = _types.NODE_TYPE;
                } else if (this.nodes !== null) {
                    type = _types.NODES_TYPE;
                } else if (this.number !== null) {
                    type = _types.NUMBER_TYPE;
                } else if (this.boolean !== null) {
                    type = _types.BOOLEAN_TYPE;
                } else if (this.stringLiteral !== null) {
                    type = _types.STRING_TYPE;
                }
                return type;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var expression = this; ///
                return expression;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(primitive) {
                var equalTo;
                if (false) {
                ///
                } else if (this.node !== null) {
                    var node = primitive.getNode();
                    if (node === null) {
                        equalTo = false;
                    } else {
                        var nodeA = this.node, nodeB = node, nodeMatches = matchNode(nodeA, nodeB);
                        equalTo = nodeMatches; ///
                    }
                } else if (this.nodes !== null) {
                    var nodes = primitive.getNode();
                    if (nodes === null) {
                        equalTo = false;
                    } else {
                        var nodesA = this.nodes, nodesB = nodes, nodesMatch = matchNodes(nodesA, nodesB);
                        equalTo = nodesMatch; ///
                    }
                } else if (this.number !== null) {
                    var number = primitive.getNumber();
                    equalTo = this.number === number;
                } else if (this.boolean !== null) {
                    var boolean = primitive.getBoolean();
                    equalTo = this.boolean === boolean;
                } else if (this.stringLiteral !== null) {
                    var stringLiteral = primitive.getStringLiteral();
                    equalTo = this.stringLiteral === stringLiteral;
                }
                return equalTo;
            }
        }
    ]);
    return Primitive;
}(), _define_property(_Primitive, "name", "Primitive"), _Primitive));
function matchNode(nodeA, nodeB) {
    var nodeMatches;
    if (nodeA === _nullNode.default || nodeB === _nullNode.default) {
        nodeMatches = nodeA === nodeB;
    } else if (nodeA === _nullNode.default) {
        nodeMatches = false;
    } else if (nodeB === _nullNode.default) {
        nodeMatches = false;
    } else {
        var nodeAMatchesNodeB = nodeA.match(nodeB);
        nodeMatches = nodeAMatchesNodeB; ///
    }
    return nodeMatches;
}
function matchNodes(nodesA, nodesB) {
    var nodesMatch = match(nodesA, nodesB, function(nodeA, nodeB) {
        var nodeMatches = matchNode(nodeA, nodeB);
        if (nodeMatches) {
            return true;
        }
    });
    return nodesMatch;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUsIE5VTUJFUl9UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJpbWl0aXZlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBub2RlcywgbnVtYmVyLCBib29sZWFuLCBzdHJpbmdMaXRlcmFsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5ib29sZWFuID0gYm9vbGVhbjtcbiAgICB0aGlzLnN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbGVhbjtcbiAgfVxuXG4gIGdldFN0cmluZ0xpdGVyYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERV9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVTX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5VTUJFUl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiBleHByZXNzaW9uO1xuICB9XG5cbiAgaXNFcXVhbFRvKHByaW1pdGl2ZSkge1xuICAgIGxldCBlcXVhbFRvO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMubm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZSA9IHByaW1pdGl2ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICAgIGVxdWFsVG8gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vZGVBID0gdGhpcy5ub2RlLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVCID0gbm9kZSwgLy8vXG4gICAgICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICAgICAgZXF1YWxUbyA9IG5vZGVNYXRjaGVzOyAgLy8vXG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm5vZGVzICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlcyA9IHByaW1pdGl2ZS5nZXROb2RlKCk7XG5cbiAgICAgIGlmIChub2RlcyA9PT0gbnVsbCkge1xuICAgICAgICBlcXVhbFRvID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub2Rlc0EgPSB0aGlzLm5vZGVzLCAgLy8vXG4gICAgICAgICAgICAgIG5vZGVzQiA9IG5vZGVzLCAvLy9cbiAgICAgICAgICAgICAgbm9kZXNNYXRjaCA9IG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpO1xuXG4gICAgICAgIGVxdWFsVG8gPSBub2Rlc01hdGNoOyAvLy9cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMubnVtYmVyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBudW1iZXIgPSBwcmltaXRpdmUuZ2V0TnVtYmVyKCk7XG5cbiAgICAgIGVxdWFsVG8gPSAodGhpcy5udW1iZXIgPT09IG51bWJlcik7XG4gICAgfSBlbHNlIGlmICh0aGlzLmJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGJvb2xlYW4gPSBwcmltaXRpdmUuZ2V0Qm9vbGVhbigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuYm9vbGVhbiA9PT0gYm9vbGVhbik7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0cmluZ0xpdGVyYWwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0cmluZ0xpdGVyYWwgPSBwcmltaXRpdmUuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMuc3RyaW5nTGl0ZXJhbCA9PT0gc3RyaW5nTGl0ZXJhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJpbWl0aXZlXCI7XG59KTtcblxuZnVuY3Rpb24gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQikge1xuICBsZXQgbm9kZU1hdGNoZXM7XG5cbiAgaWYgKChub2RlQSA9PT0gbnVsbE5vZGUpIHx8IChub2RlQiA9PT0gbnVsbE5vZGUpKSB7XG4gICAgbm9kZU1hdGNoZXMgPSAobm9kZUEgPT09IG5vZGVCKTtcbiAgfSBlbHNlIGlmIChub2RlQSA9PT0gbnVsbE5vZGUpIHtcbiAgICBub2RlTWF0Y2hlcyA9IGZhbHNlO1xuICB9IGVsc2UgaWYgKG5vZGVCID09PSBudWxsTm9kZSkge1xuICAgIG5vZGVNYXRjaGVzID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9kZUFNYXRjaGVzTm9kZUIgPSBub2RlQS5tYXRjaChub2RlQik7XG5cbiAgICBub2RlTWF0Y2hlcyA9IG5vZGVBTWF0Y2hlc05vZGVCOyAgLy8vXG4gIH1cblxuICByZXR1cm4gbm9kZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZXMobm9kZXNBLCBub2Rlc0IpIHtcbiAgY29uc3Qgbm9kZXNNYXRjaCA9IG1hdGNoKG5vZGVzQSwgbm9kZXNCLCAobm9kZUEsIG5vZGVCKSA9PiB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbm9kZXNNYXRjaDtcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiUHJpbWl0aXZlIiwic3RyaW5nIiwibm9kZSIsIm5vZGVzIiwibnVtYmVyIiwiYm9vbGVhbiIsInN0cmluZ0xpdGVyYWwiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0Tm9kZXMiLCJnZXROdW1iZXIiLCJnZXRCb29sZWFuIiwiZ2V0U3RyaW5nTGl0ZXJhbCIsImdldFR5cGUiLCJ0eXBlIiwiTk9ERV9UWVBFIiwiTk9ERVNfVFlQRSIsIk5VTUJFUl9UWVBFIiwiQk9PTEVBTl9UWVBFIiwiU1RSSU5HX1RZUEUiLCJldmFsdWF0ZSIsImNvbnRleHQiLCJleHByZXNzaW9uIiwiaXNFcXVhbFRvIiwicHJpbWl0aXZlIiwiZXF1YWxUbyIsIm5vZGVBIiwibm9kZUIiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm5vZGVzQSIsIm5vZGVzQiIsIm5vZGVzTWF0Y2giLCJtYXRjaE5vZGVzIiwibmFtZSIsIm51bGxOb2RlIiwibm9kZUFNYXRjaGVzTm9kZUIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O3lCQVQrQjsrREFFVjt3QkFFRTtxQkFDdUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5RSxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLDhCQUFDO2FBQU1DLFVBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxhQUFhO2dDQURyQ047UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxhQUFhLEdBQUdBOzs7O1lBR3ZCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLElBQUk7WUFDbEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLEtBQUs7WUFDbkI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVB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