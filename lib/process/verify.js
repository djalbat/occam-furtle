"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "verifyFile", {
    enumerable: true,
    get: function() {
        return verifyFile;
    }
});
var _query = require("../utilities/query");
var _element = require("../utilities/element");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var nonTerminalNodeQuery = (0, _query.nodeQuery)("/*");
var errorNodeQuery = (0, _query.nodeQuery)("/error"), procedureDeclarationNodeQuery = (0, _query.nodeQuery)("/procedureDeclaration");
var Pass = /*#__PURE__*/ function() {
    function Pass() {
        _class_call_check(this, Pass);
    }
    _create_class(Pass, [
        {
            key: "run",
            value: function run(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var success;
                var visited = this.visitNode.apply(this, [
                    node
                ].concat(_to_consumable_array(remainingArguments)));
                success = visited; ///
                return success;
            }
        },
        {
            key: "descend",
            value: function descend(childNodes) {
                var _this = this;
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var descended = false;
                var visited = childNodes.every(function(childNode) {
                    var node = childNode, visited = _this.visitNode.apply(_this, [
                        node
                    ].concat(_to_consumable_array(remainingArguments)));
                    if (visited) {
                        return true;
                    }
                });
                if (visited) {
                    descended = true;
                }
                return descended;
            }
        },
        {
            key: "visitNode",
            value: function visitNode(node) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var visited;
                var nodeTerminalNode = node.isTerminalNode();
                if (nodeTerminalNode) {
                    var terminalNode = node; ///
                    visited = this.visitTerminalNode.apply(this, [
                        terminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                } else {
                    var nonTerminalNode = node; ///
                    visited = this.visitNonTerminalNode.apply(this, [
                        nonTerminalNode
                    ].concat(_to_consumable_array(remainingArguments)));
                }
                return visited;
            }
        },
        {
            key: "visitTerminalNode",
            value: function visitTerminalNode(terminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var visited = true;
                return visited;
            }
        },
        {
            key: "visitNonTerminalNode",
            value: function visitNonTerminalNode(nonTerminalNode) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _this = this;
                var visited = false;
                var maps = this.constructor.maps;
                maps = _to_consumable_array(maps).concat([
                    {
                        nodeQuery: nonTerminalNodeQuery,
                        run: function(node) {
                            for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                remainingArguments[_key - 1] = arguments[_key];
                            }
                            var visited = false;
                            var childNodes = nonTerminalNode.getChildNodes(), descended = _this.descend.apply(_this, [
                                childNodes
                            ].concat(_to_consumable_array(remainingArguments)));
                            if (descended) {
                                visited = true;
                            }
                            return visited;
                        }
                    }
                ]);
                maps.some(function(map) {
                    var _$nodeQuery = map.nodeQuery, run = map.run;
                    var node = _$nodeQuery(nonTerminalNode);
                    if (node !== null) {
                        var success = run.apply(void 0, [
                            node
                        ].concat(_to_consumable_array(remainingArguments)));
                        visited = success;
                        return true;
                    }
                });
                return visited;
            }
        }
    ]);
    return Pass;
}();
var TopLevelPass = /*#__PURE__*/ function(Pass) {
    _inherits(TopLevelPass, Pass);
    function TopLevelPass() {
        _class_call_check(this, TopLevelPass);
        return _call_super(this, TopLevelPass, arguments);
    }
    return TopLevelPass;
}(Pass);
_define_property(TopLevelPass, "maps", [
    {
        nodeQuery: errorNodeQuery,
        run: function(errorNode, context) {
            var success = false;
            var error = (0, _element.errorFromErrorNode)(errorNode, context), errorVerifies = error.verify(context);
            if (errorVerifies) {
                success = true;
            }
            return success;
        }
    },
    {
        nodeQuery: procedureDeclarationNodeQuery,
        run: function(procedureDeclarationNode, context) {
            var success = false;
            var procedureDeclaration = (0, _element.procedureDeclarationFromProcedureDeclarationNode)(procedureDeclarationNode, context), procedureDeclarationVerifies = procedureDeclaration.verify(context);
            if (procedureDeclarationVerifies) {
                success = true;
            }
            return success;
        }
    }
]);
var topLevelPass = new TopLevelPass();
function verifyFile(fileNode, context) {
    var fileVerifies = false;
    var node = fileNode, sucess = topLevelPass.run(node, context);
    if (sucess) {
        fileVerifies = true;
    }
    return fileVerifies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5pbXBvcnQgeyBlcnJvckZyb21FcnJvck5vZGUsIHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5jb25zdCBub25UZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qXCIpO1xuXG5jb25zdCBlcnJvck5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcnJvclwiKSxcbiAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb2NlZHVyZURlY2xhcmF0aW9uXCIpO1xuXG5jbGFzcyBQYXNzIHtcbiAgcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBzdWNjZXNzO1xuXG4gICAgY29uc3QgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBzdWNjZXNzID0gdmlzaXRlZDsgIC8vL1xuXG4gICAgcmV0dXJuIHN1Y2Nlc3M7XG4gIH1cblxuICBkZXNjZW5kKGNoaWxkTm9kZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGxldCBkZXNjZW5kZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZpc2l0ZWQgPSBjaGlsZE5vZGVzLmV2ZXJ5KChjaGlsZE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb2RlKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgIGlmICh2aXNpdGVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHZpc2l0ZWQpIHtcbiAgICAgIGRlc2NlbmRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlc2NlbmRlZDtcbiAgfVxuXG4gIHZpc2l0Tm9kZShub2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZDtcblxuICAgIGNvbnN0IG5vZGVUZXJtaW5hbE5vZGUgPSBub2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgICB2aXNpdGVkID0gdGhpcy52aXNpdFRlcm1pbmFsTm9kZSh0ZXJtaW5hbE5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgICAgdmlzaXRlZCA9IHRoaXMudmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXRUZXJtaW5hbE5vZGUodGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2aXNpdGVkID0gdHJ1ZTtcblxuICAgIHJldHVybiB2aXNpdGVkO1xuICB9XG5cbiAgdmlzaXROb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBsZXQgdmlzaXRlZCA9IGZhbHNlO1xuXG4gICAgbGV0IHsgbWFwcyB9ID0gdGhpcy5jb25zdHJ1Y3RvcjtcblxuICAgIG1hcHMgPSBbIC8vL1xuICAgICAgLi4ubWFwcyxcbiAgICAgIHtcbiAgICAgICAgbm9kZVF1ZXJ5OiBub25UZXJtaW5hbE5vZGVRdWVyeSxcbiAgICAgICAgcnVuOiAobm9kZSwgLi4ucmVtYWluaW5nQXJndW1lbnRzKSA9PiB7XG4gICAgICAgICAgbGV0IHZpc2l0ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpLCAvLy9cbiAgICAgICAgICAgICAgICBkZXNjZW5kZWQgPSB0aGlzLmRlc2NlbmQoY2hpbGROb2RlcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgICAgICAgIGlmIChkZXNjZW5kZWQpIHtcbiAgICAgICAgICAgIHZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2aXNpdGVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXVxuXG4gICAgbWFwcy5zb21lKChtYXApID0+IHtcbiAgICAgIGNvbnN0IHsgbm9kZVF1ZXJ5LCBydW4gfSA9IG1hcDtcblxuICAgICAgY29uc3Qgbm9kZSA9IG5vZGVRdWVyeShub25UZXJtaW5hbE5vZGUpO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWNjZXNzID0gcnVuKG5vZGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICAgICAgdmlzaXRlZCA9IHN1Y2Nlc3M7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmlzaXRlZDtcbiAgfVxufVxuXG5jbGFzcyBUb3BMZXZlbFBhc3MgZXh0ZW5kcyBQYXNzIHtcbiAgc3RhdGljIG1hcHMgPSBbXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBlcnJvck5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKGVycm9yTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGVycm9yID0gZXJyb3JGcm9tRXJyb3JOb2RlKGVycm9yTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGVycm9yVmVyaWZpZXMgPSBlcnJvci52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGVycm9yVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgbm9kZVF1ZXJ5OiBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVRdWVyeSxcbiAgICAgIHJ1bjogKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHByb2NlZHVyZURlY2xhcmF0aW9uID0gcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlKHByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHByb2NlZHVyZURlY2xhcmF0aW9uVmVyaWZpZXMgPSBwcm9jZWR1cmVEZWNsYXJhdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb2NlZHVyZURlY2xhcmF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWNjZXNzO1xuICAgICAgfVxuICAgIH1cbiAgXTtcbn1cblxuY29uc3QgdG9wTGV2ZWxQYXNzID0gbmV3IFRvcExldmVsUGFzcygpO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCkge1xuICBsZXQgZmlsZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZSA9IGZpbGVOb2RlLCAvLy9cbiAgICAgICAgc3VjZXNzID0gdG9wTGV2ZWxQYXNzLnJ1bihub2RlLCBjb250ZXh0KTtcblxuICBpZiAoc3VjZXNzKSB7XG4gICAgZmlsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmaWxlVmVyaWZpZXM7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5RmlsZSIsIm5vblRlcm1pbmFsTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZXJyb3JOb2RlUXVlcnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVRdWVyeSIsIlBhc3MiLCJydW4iLCJub2RlIiwicmVtYWluaW5nQXJndW1lbnRzIiwic3VjY2VzcyIsInZpc2l0ZWQiLCJ2aXNpdE5vZGUiLCJkZXNjZW5kIiwiY2hpbGROb2RlcyIsImRlc2NlbmRlZCIsImV2ZXJ5IiwiY2hpbGROb2RlIiwibm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwidmlzaXRUZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJ2aXNpdE5vblRlcm1pbmFsTm9kZSIsIm1hcHMiLCJnZXRDaGlsZE5vZGVzIiwic29tZSIsIm1hcCIsIlRvcExldmVsUGFzcyIsImVycm9yTm9kZSIsImNvbnRleHQiLCJlcnJvciIsImVycm9yRnJvbUVycm9yTm9kZSIsImVycm9yVmVyaWZpZXMiLCJ2ZXJpZnkiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvbiIsInByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZSIsInByb2NlZHVyZURlY2xhcmF0aW9uVmVyaWZpZXMiLCJ0b3BMZXZlbFBhc3MiLCJmaWxlTm9kZSIsImZpbGVWZXJpZmllcyIsInN1Y2VzcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0pnQkE7OztlQUFBQTs7O3FCQTlJVTt1QkFFMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckYsSUFBTUMsdUJBQXVCQyxJQUFBQSxnQkFBUyxFQUFDO0FB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