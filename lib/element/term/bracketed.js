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
var _elements = require("../../elements");
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
var _BracketedTerm;
var _default = (0, _elements.define)((_BracketedTerm = /*#__PURE__*/ function() {
    function BracketedTerm(string, term) {
        _class_call_check(this, BracketedTerm);
        this.string = string;
        this.term = term;
    }
    _create_class(BracketedTerm, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.term.getType();
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var term;
                var bracketedTermString = this.string; ///
                context.trace("Evaluating the '".concat(bracketedTermString, "' bracketed term..."));
                term = this.term.evaluate(context);
                context.debug("...evaluated the '".concat(bracketedTermString, "' bracketed term."));
                return term;
            }
        }
    ]);
    return BracketedTerm;
}(), _define_property(_BracketedTerm, "name", "BracketedTerm"), _BracketedTerm));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Rlcm0vYnJhY2tldGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEJyYWNrZXRlZFRlcm0ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnRlcm0uZ2V0VHlwZSgpOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtO1xuXG4gICAgY29uc3QgYnJhY2tldGVkVGVybVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYEV2YWx1YXRpbmcgdGhlICcke2JyYWNrZXRlZFRlcm1TdHJpbmd9JyBicmFja2V0ZWQgdGVybS4uLmApO1xuXG4gICAgdGVybSA9IHRoaXMudGVybS5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmV2YWx1YXRlZCB0aGUgJyR7YnJhY2tldGVkVGVybVN0cmluZ30nIGJyYWNrZXRlZCB0ZXJtLmApO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQnJhY2tldGVkVGVybVwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQnJhY2tldGVkVGVybSIsInN0cmluZyIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImV2YWx1YXRlIiwiY29udGV4dCIsImJyYWNrZXRlZFRlcm1TdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBSUE7OztlQUFBOzs7d0JBRnVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLGtDQUFDO2FBQU1DLGNBQ2RDLE1BQU0sRUFBRUMsSUFBSTtnQ0FERUY7UUFFeEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFBWSxPQUFPLElBQUksQ0FBQ0gsSUFBSSxDQUFDRyxPQUFPO1lBQUk7OztZQUV4Q0MsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE9BQU87Z0JBQ2QsSUFBSUw7Z0JBRUosSUFBTU0sc0JBQXNCLElBQUksQ0FBQ1AsTUFBTSxFQUFFLEdBQUc7Z0JBRTVDTSxRQUFRRSxLQUFLLENBQUMsQUFBQyxtQkFBc0MsT0FBcEJELHFCQUFvQjtnQkFFckROLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNJLFFBQVEsQ0FBQ0M7Z0JBRTFCQSxRQUFRRyxLQUFLLENBQUMsQUFBQyxxQkFBd0MsT0FBcEJGLHFCQUFvQjtnQkFFdkQsT0FBT047WUFDVDs7OztLQUVBLGlDQUFPUyxRQUFPIn0=