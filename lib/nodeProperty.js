"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NodeProperty;
    }
});
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
var NodeProperty = /*#__PURE__*/ function() {
    function NodeProperty(string, type, name) {
        _class_call_check(this, NodeProperty);
        this.string = string;
        this.type = type;
        this.name = name;
    }
    _create_class(NodeProperty, [
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
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "matchNamedParameter",
            value: function matchNamedParameter(namedParameter, context) {
                var namedParameterMatches;
                var nodePropertyString = this.string, namedParameterString = namedParameter.getString();
                context.trace("Matching the '".concat(nodePropertyString, "' node property against the '").concat(namedParameterString, "' named parameter..."));
                var name = namedParameter.getName(), type = namedParameter.getType();
                namedParameterMatches = this.name === name && this.type === type;
                if (namedParameterMatches) {
                    context.debug("...matched the '".concat(nodePropertyString, "' node property against the '").concat(namedParameterString, "' named parameter."));
                }
                return namedParameterMatches;
            }
        }
    ], [
        {
            key: "fromNameAndType",
            value: function fromNameAndType(name, type, context) {
                var string = stringFromNameAndType(name, type, context), nodeProperty = new NodeProperty(string, type, name);
                return nodeProperty;
            }
        }
    ]);
    return NodeProperty;
}();
_define_property(NodeProperty, "name", "Parameter");
function stringFromNameAndType(name, type, context) {
    var typeString = type, nameString = name, string = "".concat(typeString, " ").concat(nameString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGVQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdHlwZSwgbmFtZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBtYXRjaE5hbWVkUGFyYW1ldGVyKG5hbWVkUGFyYW1ldGVyLCBjb250ZXh0KSB7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyTWF0Y2hlcztcblxuICAgIGNvbnN0IG5vZGVQcm9wZXJ0eVN0cmluZyA9IHRoaXMuc3RyaW5nLCAvLy9cbiAgICAgICAgICBuYW1lZFBhcmFtZXRlclN0cmluZyA9IG5hbWVkUGFyYW1ldGVyLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgTWF0Y2hpbmcgdGhlICcke25vZGVQcm9wZXJ0eVN0cmluZ30nIG5vZGUgcHJvcGVydHkgYWdhaW5zdCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyTWF0Y2hlcyA9ICgodGhpcy5uYW1lID09PSBuYW1lKSAmJiAodGhpcy50eXBlID09PSB0eXBlKSk7XG5cbiAgICBpZiAobmFtZWRQYXJhbWV0ZXJNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHtub2RlUHJvcGVydHlTdHJpbmd9JyBub2RlIHByb3BlcnR5IGFnYWluc3QgdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlck1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGVQcm9wZXJ0eSA9IG5ldyBOb2RlUHJvcGVydHkoc3RyaW5nLCB0eXBlLCBuYW1lKTtcblxuICAgIHJldHVybiBub2RlUHJvcGVydHk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLCAgLy8vXG4gICAgICAgIG5hbWVTdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9ICR7bmFtZVN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiTm9kZVByb3BlcnR5Iiwic3RyaW5nIiwidHlwZSIsIm5hbWUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsIm1hdGNoTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImNvbnRleHQiLCJuYW1lZFBhcmFtZXRlck1hdGNoZXMiLCJub2RlUHJvcGVydHlTdHJpbmciLCJuYW1lZFBhcmFtZXRlclN0cmluZyIsInRyYWNlIiwiZGVidWciLCJmcm9tTmFtZUFuZFR5cGUiLCJzdHJpbmdGcm9tTmFtZUFuZFR5cGUiLCJub2RlUHJvcGVydHkiLCJ0eXBlU3RyaW5nIiwibmFtZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQU47YUFBTUEsYUFDUEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRFhIO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSktIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLG9CQUFvQkMsY0FBYyxFQUFFQyxPQUFPO2dCQUN6QyxJQUFJQztnQkFFSixJQUFNQyxxQkFBcUIsSUFBSSxDQUFDVixNQUFNLEVBQ2hDVyx1QkFBdUJKLGVBQWVKLFNBQVM7Z0JBRXJESyxRQUFRSSxLQUFLLENBQUMsQUFBQyxpQkFBa0VELE9BQWxERCxvQkFBbUIsaUNBQW9ELE9BQXJCQyxzQkFBcUI7Z0JBRXRHLElBQU1ULE9BQU9LLGVBQWVGLE9BQU8sSUFDN0JKLE9BQU9NLGVBQWVILE9BQU87Z0JBRW5DSyx3QkFBeUIsQUFBQyxJQUFJLENBQUNQLElBQUksS0FBS0EsUUFBVSxJQUFJLENBQUNELElBQUksS0FBS0E7Z0JBRWhFLElBQUlRLHVCQUF1QjtvQkFDekJELFFBQVFLLEtBQUssQ0FBQyxBQUFDLG1CQUFvRUYsT0FBbERELG9CQUFtQixpQ0FBb0QsT0FBckJDLHNCQUFxQjtnQkFDMUc7Z0JBRUEsT0FBT0Y7WUFDVDs7OztZQUlPSyxLQUFBQTttQkFBUCxTQUFPQSxnQkFBZ0JaLElBQUksRUFBRUQsSUFBSSxFQUFFTyxPQUFPO2dCQUN4QyxJQUFNUixTQUFTZSxzQkFBc0JiLE1BQU1ELE1BQU1PLFVBQzNDUSxlQUFlLElBM0NKakIsYUEyQ3FCQyxRQUFRQyxNQUFNQztnQkFFcEQsT0FBT2M7WUFDVDs7O1dBOUNtQmpCOztBQXVDbkIsaUJBdkNtQkEsY0F1Q1pHLFFBQU87QUFVaEIsU0FBU2Esc0JBQXNCYixJQUFJLEVBQUVELElBQUksRUFBRU8sT0FBTztJQUNoRCxJQUFNUyxhQUFhaEIsTUFDYmlCLGFBQWFoQixNQUNiRixTQUFTLEFBQUMsR0FBZ0JrQixPQUFkRCxZQUFXLEtBQWMsT0FBWEM7SUFFaEMsT0FBT2xCO0FBQ1QifQ==