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
var _elements = require("../elements");
var _string = require("../utilities/string");
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
var _Terms;
var _default = (0, _elements.define)((_Terms = /*#__PURE__*/ function() {
    function Terms(string, array) {
        _class_call_check(this, Terms);
        this.string = string;
        this.array = array;
    }
    _create_class(Terms, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getArray",
            value: function getArray() {
                return this.array;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var length = this.array.length;
                return length;
            }
        },
        {
            key: "getTerm",
            value: function getTerm(index) {
                var term = this.array[index] || null; ///
                return term;
            }
        },
        {
            key: "addTerm",
            value: function addTerm(term) {
                this.array.push(term);
            }
        },
        {
            key: "mapTerm",
            value: function mapTerm(callback) {
                return this.array.map(callback);
            }
        },
        {
            key: "forEachTerm",
            value: function forEachTerm(callback) {
                this.array.forEach(callback);
            }
        },
        {
            key: "evaluate",
            value: function evaluate(context) {
                var termsArray = this.mapTerm(function(term) {
                    term = term.evaluate(context);
                    return term;
                }), termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, terms = new Terms(string, array);
                return terms;
            }
        }
    ], [
        {
            key: "fromTerm",
            value: function fromTerm(term, context) {
                var termsArray = [
                    term
                ], termsString = (0, _string.termsStringFromTermsArray)(termsArray, context), string = termsString, array = termsArray, terms = new Terms(string, array);
                return terms;
            }
        }
    ]);
    return Terms;
}(), _define_property(_Terms, "name", "Terms"), _Terms));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Rlcm1zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybXMge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIGFycmF5KSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldEFycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmFycmF5O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIGxlbmd0aDtcbiAgfVxuXG4gIGdldFRlcm0oaW5kZXgpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy5hcnJheVtpbmRleF0gfHwgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICB0aGlzLmFycmF5LnB1c2godGVybSk7XG4gIH1cblxuICBtYXBUZXJtKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmFycmF5Lm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoVGVybShjYWxsYmFjaykgeyB0aGlzLmFycmF5LmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zQXJyYXkgPSB0aGlzLm1hcFRlcm0oKHRlcm0pID0+IHtcbiAgICAgICAgICAgIHRlcm0gPSB0ZXJtLmV2YWx1YXRlKGNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGVybTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgICAgdGVybXMgPSBuZXcgVGVybXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybXNcIjtcblxuICBzdGF0aWMgZnJvbVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zQXJyYXkgPSBbXG4gICAgICAgICAgICB0ZXJtXG4gICAgICAgICAgXSxcbiAgICAgICAgICB0ZXJtc1N0cmluZyA9IHRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkodGVybXNBcnJheSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gdGVybXNTdHJpbmcsIC8vL1xuICAgICAgICAgIGFycmF5ID0gdGVybXNBcnJheSwgLy8vXG4gICAgICAgICAgdGVybXMgPSBuZXcgVGVybXMoc3RyaW5nLCBhcnJheSk7XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1zIiwic3RyaW5nIiwiYXJyYXkiLCJnZXRTdHJpbmciLCJnZXRBcnJheSIsImdldExlbmd0aCIsImxlbmd0aCIsImdldFRlcm0iLCJpbmRleCIsInRlcm0iLCJhZGRUZXJtIiwicHVzaCIsIm1hcFRlcm0iLCJjYWxsYmFjayIsIm1hcCIsImZvckVhY2hUZXJtIiwiZm9yRWFjaCIsImV2YWx1YXRlIiwiY29udGV4dCIsInRlcm1zQXJyYXkiLCJ0ZXJtc1N0cmluZyIsInRlcm1zU3RyaW5nRnJvbVRlcm1zQXJyYXkiLCJ0ZXJtcyIsImZyb21UZXJtIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBS0E7OztlQUFBOzs7d0JBSHVCO3NCQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUxQyxXQUFlQSxJQUFBQSxnQkFBTSwwQkFBQzthQUFNQyxNQUNkQyxNQUFNLEVBQUVDLEtBQUs7Z0NBRENGO1FBRXhCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7OztZQUdmQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLEtBQUs7WUFDbkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsU0FBUyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ksTUFBTTtnQkFFaEMsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxLQUFLO2dCQUNYLElBQU1DLE9BQU8sSUFBSSxDQUFDUCxLQUFLLENBQUNNLE1BQU0sSUFBSSxNQUFPLEdBQUc7Z0JBRTVDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUQsSUFBSTtnQkFDVixJQUFJLENBQUNQLEtBQUssQ0FBQ1MsSUFBSSxDQUFDRjtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxRQUFRO2dCQUFJLE9BQU8sSUFBSSxDQUFDWCxLQUFLLENBQUNZLEdBQUcsQ0FBQ0Q7WUFBVzs7O1lBRXJERSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUYsUUFBUTtnQkFBSSxJQUFJLENBQUNYLEtBQUssQ0FBQ2MsT0FBTyxDQUFDSDtZQUFXOzs7WUFFdERJLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxPQUFPO2dCQUNkLElBQU1DLGFBQWEsSUFBSSxDQUFDUCxPQUFPLENBQUMsU0FBQ0g7b0JBQ3pCQSxPQUFPQSxLQUFLUSxRQUFRLENBQUNDO29CQUVyQixPQUFPVDtnQkFDVCxJQUNBVyxjQUFjQyxJQUFBQSxpQ0FBeUIsRUFBQ0YsWUFBWUQsVUFDcERqQixTQUFTbUIsYUFDVGxCLFFBQVFpQixZQUNSRyxRQUFRLElBQUl0QixNQUFNQyxRQUFRQztnQkFFaEMsT0FBT29CO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU2QsSUFBSSxFQUFFUyxPQUFPO2dCQUMzQixJQUFNQyxhQUFhO29CQUNYVjtpQkFDRCxFQUNEVyxjQUFjQyxJQUFBQSxpQ0FBeUIsRUFBQ0YsWUFBWUQsVUFDcERqQixTQUFTbUIsYUFDVGxCLFFBQVFpQixZQUNSRyxRQUFRLElBQUl0QixNQUFNQyxRQUFRQztnQkFFaEMsT0FBT29CO1lBQ1Q7Ozs7S0FaQSx5QkFBT0UsUUFBTyJ9