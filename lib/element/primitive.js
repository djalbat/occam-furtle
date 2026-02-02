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
                var term = this; ///
                return term;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(primitive) {
                var equalTo = false;
                if (false) {
                ///
                } else if (this.node !== null) {
                    var node = primitive.getNode();
                    if (node !== null) {
                        var nodeA = this.node, nodeB = node, nodeMatches = matchNode(nodeA, nodeB);
                        if (nodeMatches) {
                            equalTo = true;
                        }
                    }
                } else if (this.nodes !== null) {
                    var nodes = primitive.getNode();
                    if (nodes !== null) {
                        var nodesA = this.nodes, nodesB = nodes, nodesMatch = matchNodes(nodesA, nodesB);
                        if (nodesMatch) {
                            equalTo = true;
                        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBudWxsTm9kZSBmcm9tIFwiLi4vbnVsbE5vZGVcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBOT0RFX1RZUEUsIE5PREVTX1RZUEUsIE5VTUJFUl9UWVBFLCBTVFJJTkdfVFlQRSwgQk9PTEVBTl9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgbWF0Y2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJpbWl0aXZlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCBub2RlcywgbnVtYmVyLCBib29sZWFuLCBzdHJpbmdMaXRlcmFsKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLm5vZGVzID0gbm9kZXM7XG4gICAgdGhpcy5udW1iZXIgPSBudW1iZXI7XG4gICAgdGhpcy5ib29sZWFuID0gYm9vbGVhbjtcbiAgICB0aGlzLnN0cmluZ0xpdGVyYWwgPSBzdHJpbmdMaXRlcmFsO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5vZGVzKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGVzO1xuICB9XG5cbiAgZ2V0TnVtYmVyKCkge1xuICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuYm9vbGVhbjtcbiAgfVxuXG4gIGdldFN0cmluZ0xpdGVyYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9ERV9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5PREVTX1RZUEU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IE5VTUJFUl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBldmFsdWF0ZShjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXM7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHByaW1pdGl2ZSkge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBub2RlID0gcHJpbWl0aXZlLmdldE5vZGUoKTtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZUEgPSB0aGlzLm5vZGUsICAvLy9cbiAgICAgICAgICAgICAgbm9kZUIgPSBub2RlLCAvLy9cbiAgICAgICAgICAgICAgbm9kZU1hdGNoZXMgPSBtYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICBlcXVhbFRvID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5ub2RlcyAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9kZXMgPSBwcmltaXRpdmUuZ2V0Tm9kZSgpO1xuXG4gICAgICBpZiAobm9kZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgbm9kZXNBID0gdGhpcy5ub2RlcywgIC8vL1xuICAgICAgICAgICAgICBub2Rlc0IgPSBub2RlcywgLy8vXG4gICAgICAgICAgICAgIG5vZGVzTWF0Y2ggPSBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKTtcblxuICAgICAgICBpZiAobm9kZXNNYXRjaCkge1xuICAgICAgICAgIGVxdWFsVG8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLm51bWJlciAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbnVtYmVyID0gcHJpbWl0aXZlLmdldE51bWJlcigpO1xuXG4gICAgICBlcXVhbFRvID0gKHRoaXMubnVtYmVyID09PSBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5ib29sZWFuICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBib29sZWFuID0gcHJpbWl0aXZlLmdldEJvb2xlYW4oKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLmJvb2xlYW4gPT09IGJvb2xlYW4pO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdHJpbmdMaXRlcmFsID0gcHJpbWl0aXZlLmdldFN0cmluZ0xpdGVyYWwoKTtcblxuICAgICAgZXF1YWxUbyA9ICh0aGlzLnN0cmluZ0xpdGVyYWwgPT09IHN0cmluZ0xpdGVyYWwpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByaW1pdGl2ZVwiO1xufSk7XG5cbmZ1bmN0aW9uIG1hdGNoTm9kZShub2RlQSwgbm9kZUIpIHtcbiAgbGV0IG5vZGVNYXRjaGVzO1xuXG4gIGlmICgobm9kZUEgPT09IG51bGxOb2RlKSB8fCAobm9kZUIgPT09IG51bGxOb2RlKSkge1xuICAgIG5vZGVNYXRjaGVzID0gKG5vZGVBID09PSBub2RlQik7XG4gIH0gZWxzZSBpZiAobm9kZUEgPT09IG51bGxOb2RlKSB7XG4gICAgbm9kZU1hdGNoZXMgPSBmYWxzZTtcbiAgfSBlbHNlIGlmIChub2RlQiA9PT0gbnVsbE5vZGUpIHtcbiAgICBub2RlTWF0Y2hlcyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vZGVBTWF0Y2hlc05vZGVCID0gbm9kZUEubWF0Y2gobm9kZUIpO1xuXG4gICAgbm9kZU1hdGNoZXMgPSBub2RlQU1hdGNoZXNOb2RlQjsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIG5vZGVNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaE5vZGVzKG5vZGVzQSwgbm9kZXNCKSB7XG4gIGNvbnN0IG5vZGVzTWF0Y2ggPSBtYXRjaChub2Rlc0EsIG5vZGVzQiwgKG5vZGVBLCBub2RlQikgPT4ge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gbWF0Y2hOb2RlKG5vZGVBLCBub2RlQik7XG5cbiAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIG5vZGVzTWF0Y2g7XG59XG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIlByaW1pdGl2ZSIsInN0cmluZyIsIm5vZGUiLCJub2RlcyIsIm51bWJlciIsImJvb2xlYW4iLCJzdHJpbmdMaXRlcmFsIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5vZGVzIiwiZ2V0TnVtYmVyIiwiZ2V0Qm9vbGVhbiIsImdldFN0cmluZ0xpdGVyYWwiLCJnZXRUeXBlIiwidHlwZSIsIk5PREVfVFlQRSIsIk5PREVTX1RZUEUiLCJOVU1CRVJfVFlQRSIsIkJPT0xFQU5fVFlQRSIsIlNUUklOR19UWVBFIiwiZXZhbHVhdGUiLCJjb250ZXh0IiwidGVybSIsImlzRXF1YWxUbyIsInByaW1pdGl2ZSIsImVxdWFsVG8iLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJub2Rlc0EiLCJub2Rlc0IiLCJub2Rlc01hdGNoIiwibWF0Y2hOb2RlcyIsIm5hbWUiLCJudWxsTm9kZSIsIm5vZGVBTWF0Y2hlc05vZGVCIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozt5QkFUK0I7K0RBRVY7d0JBRUU7cUJBQ3VEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUUsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSw4QkFBQzthQUFNQyxVQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsYUFBYTtnQ0FEckNOO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTs7OztZQUd2QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixLQUFLO1lBQ25COzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFB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