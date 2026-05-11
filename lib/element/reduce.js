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
const _occamlanguages = require("occam-languages");
const _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
const _exception = /*#__PURE__*/ _interop_require_default(require("../exception"));
const _term = require("../utilities/term");
const _types = require("../types");
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
const { asyncReduce } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Reduce extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, variable, initialExpression, anonymousProcedure){
        super(context, string, node, breakPoint);
        this.variable = variable;
        this.initialExpression = initialExpression;
        this.anonymousProcedure = anonymousProcedure;
    }
    getVariable() {
        return this.variable;
    }
    getInitialExpression() {
        return this.initialExpression;
    }
    getAnonymousProcedure() {
        return this.anonymousProcedure;
    }
    async evaluate(context) {
        let value;
        await this.break(context);
        const reduceString = this.getString();
        context.trace(`Evaluating the '${reduceString}' reduce...`);
        value = this.variable.evaluate(context);
        const valueType = value.getType();
        if (valueType !== _types.NOMINAL_VALUES_TYPE) {
            const valueString = value.getString(), message = `The '${valueString}' value's '${valueType}' type should be '${_types.NOMINAL_VALUES_TYPE}'.`, exception = _exception.default.fromMessage(message);
            throw exception;
        }
        const nodes = value.getNodes(), initialExpression = await this.initialExpression.evaluate(context);
        value = await asyncReduce(nodes, async (currentExpression, node)=>{
            let value;
            const { Terms } = _elements.default;
            value = currentTerm; ///
            const values = Terms.fromTerm(value, context);
            value = valueFromNode(node, context);
            values.addTerm(value);
            value = await this.anonymousProcedure.call(values, context);
            return value;
        }, initialExpression);
        const valueString = value.getString();
        context.trace(`...evaluated the '${reduceString}' reduce as '${valueString}'.`);
        return value;
    }
    static name = "Reduce";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZHVjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gXCIuLi9leGNlcHRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbU5vZGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3Rlcm1cIjtcbmltcG9ydCB7IE5PTUlOQUxfVkFMVUVTX1RZUEUgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgeyBhc3luY1JlZHVjZSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUmVkdWNlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdmFyaWFibGUsIGluaXRpYWxFeHByZXNzaW9uLCBhbm9ueW1vdXNQcm9jZWR1cmUpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICAgIHRoaXMuaW5pdGlhbEV4cHJlc3Npb24gPSBpbml0aWFsRXhwcmVzc2lvbjtcbiAgICB0aGlzLmFub255bW91c1Byb2NlZHVyZSA9IGFub255bW91c1Byb2NlZHVyZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0SW5pdGlhbEV4cHJlc3Npb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5pdGlhbEV4cHJlc3Npb247XG4gIH1cblxuICBnZXRBbm9ueW1vdXNQcm9jZWR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5vbnltb3VzUHJvY2VkdXJlO1xuICB9XG5cbiAgYXN5bmMgZXZhbHVhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCByZWR1Y2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgRXZhbHVhdGluZyB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlLi4uYCk7XG5cbiAgICB2YWx1ZSA9IHRoaXMudmFyaWFibGUuZXZhbHVhdGUoY29udGV4dCk7XG5cbiAgICBjb25zdCB2YWx1ZVR5cGUgPSB2YWx1ZS5nZXRUeXBlKCk7XG5cbiAgICBpZiAodmFsdWVUeXBlICE9PSBOT01JTkFMX1ZBTFVFU19UWVBFKSB7XG4gICAgICBjb25zdCB2YWx1ZVN0cmluZyA9IHZhbHVlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbWVzc2FnZSA9IGBUaGUgJyR7dmFsdWVTdHJpbmd9JyB2YWx1ZSdzICcke3ZhbHVlVHlwZX0nIHR5cGUgc2hvdWxkIGJlICcke05PTUlOQUxfVkFMVUVTX1RZUEV9Jy5gLFxuICAgICAgICAgICAgZXhjZXB0aW9uID0gRXhjZXB0aW9uLmZyb21NZXNzYWdlKG1lc3NhZ2UpO1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZXMgPSB2YWx1ZS5nZXROb2RlcygpLFxuICAgICAgICAgIGluaXRpYWxFeHByZXNzaW9uID0gYXdhaXQgdGhpcy5pbml0aWFsRXhwcmVzc2lvbi5ldmFsdWF0ZShjb250ZXh0KTtcblxuICAgIHZhbHVlID0gYXdhaXQgYXN5bmNSZWR1Y2Uobm9kZXMsIGFzeW5jIChjdXJyZW50RXhwcmVzc2lvbiwgbm9kZSkgPT4ge1xuICAgICAgbGV0IHZhbHVlO1xuXG4gICAgICBjb25zdCB7IFRlcm1zIH0gPSBlbGVtZW50cztcblxuICAgICAgdmFsdWUgPSBjdXJyZW50VGVybTsgLy8vXG5cbiAgICAgIGNvbnN0IHZhbHVlcyA9IFRlcm1zLmZyb21UZXJtKHZhbHVlLCBjb250ZXh0KTtcblxuICAgICAgdmFsdWUgPSB2YWx1ZUZyb21Ob2RlKG5vZGUsIGNvbnRleHQpO1xuXG4gICAgICB2YWx1ZXMuYWRkVGVybSh2YWx1ZSk7XG5cbiAgICAgIHZhbHVlID0gYXdhaXQgdGhpcy5hbm9ueW1vdXNQcm9jZWR1cmUuY2FsbCh2YWx1ZXMsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfSwgaW5pdGlhbEV4cHJlc3Npb24pO1xuXG4gICAgY29uc3QgdmFsdWVTdHJpbmcgPSB2YWx1ZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYC4uLmV2YWx1YXRlZCB0aGUgJyR7cmVkdWNlU3RyaW5nfScgcmVkdWNlIGFzICcke3ZhbHVlU3RyaW5nfScuYCk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVkdWNlXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1JlZHVjZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlJlZHVjZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ2YXJpYWJsZSIsImluaXRpYWxFeHByZXNzaW9uIiwiYW5vbnltb3VzUHJvY2VkdXJlIiwiZ2V0VmFyaWFibGUiLCJnZXRJbml0aWFsRXhwcmVzc2lvbiIsImdldEFub255bW91c1Byb2NlZHVyZSIsImV2YWx1YXRlIiwidmFsdWUiLCJicmVhayIsInJlZHVjZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsdWVUeXBlIiwiZ2V0VHlwZSIsIk5PTUlOQUxfVkFMVUVTX1RZUEUiLCJ2YWx1ZVN0cmluZyIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJFeGNlcHRpb24iLCJmcm9tTWVzc2FnZSIsIm5vZGVzIiwiZ2V0Tm9kZXMiLCJjdXJyZW50RXhwcmVzc2lvbiIsIlRlcm1zIiwiZWxlbWVudHMiLCJjdXJyZW50VGVybSIsInZhbHVlcyIsImZyb21UZXJtIiwidmFsdWVGcm9tTm9kZSIsImFkZFRlcm0iLCJjYWxsIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7Z0NBWCtDO2tFQUUxQjtrRUFDQztzQkFHTzt1QkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEMsTUFBTSxFQUFFQSxXQUFXLEVBQUUsR0FBR0MscUNBQXFCO01BRTdDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZUFBZUMsdUJBQU87SUFDaEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLGlCQUFpQixFQUFFQyxrQkFBa0IsQ0FBRTtRQUM5RixLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLGtCQUFrQixHQUFHQTtJQUM1QjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDSCxpQkFBaUI7SUFDL0I7SUFFQUksd0JBQXdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDSCxrQkFBa0I7SUFDaEM7SUFFQSxNQUFNSSxTQUFTVixPQUFPLEVBQUU7UUFDdEIsSUFBSVc7UUFFSixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDWjtRQUVqQixNQUFNYSxlQUFlLElBQUksQ0FBQ0MsU0FBUztRQUVuQ2QsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGFBQWEsV0FBVyxDQUFDO1FBRTFERixRQUFRLElBQUksQ0FBQ1AsUUFBUSxDQUFDTSxRQUFRLENBQUNWO1FBRS9CLE1BQU1nQixZQUFZTCxNQUFNTSxPQUFPO1FBRS9CLElBQUlELGNBQWNFLDBCQUFtQixFQUFFO1lBQ3JDLE1BQU1DLGNBQWNSLE1BQU1HLFNBQVMsSUFDN0JNLFVBQVUsQ0FBQyxLQUFLLEVBQUVELFlBQVksV0FBVyxFQUFFSCxVQUFVLGtCQUFrQixFQUFFRSwwQkFBbUIsQ0FBQyxFQUFFLENBQUMsRUFDaEdHLFlBQVlDLGtCQUFTLENBQUNDLFdBQVcsQ0FBQ0g7WUFFeEMsTUFBTUM7UUFDUjtRQUVBLE1BQU1HLFFBQVFiLE1BQU1jLFFBQVEsSUFDdEJwQixvQkFBb0IsTUFBTSxJQUFJLENBQUNBLGlCQUFpQixDQUFDSyxRQUFRLENBQUNWO1FBRWhFVyxRQUFRLE1BQU1oQixZQUFZNkIsT0FBTyxPQUFPRSxtQkFBbUJ4QjtZQUN6RCxJQUFJUztZQUVKLE1BQU0sRUFBRWdCLEtBQUssRUFBRSxHQUFHQyxpQkFBUTtZQUUxQmpCLFFBQVFrQixhQUFhLEdBQUc7WUFFeEIsTUFBTUMsU0FBU0gsTUFBTUksUUFBUSxDQUFDcEIsT0FBT1g7WUFFckNXLFFBQVFxQixjQUFjOUIsTUFBTUY7WUFFNUI4QixPQUFPRyxPQUFPLENBQUN0QjtZQUVmQSxRQUFRLE1BQU0sSUFBSSxDQUFDTCxrQkFBa0IsQ0FBQzRCLElBQUksQ0FBQ0osUUFBUTlCO1lBRW5ELE9BQU9XO1FBQ1QsR0FBR047UUFFSCxNQUFNYyxjQUFjUixNQUFNRyxTQUFTO1FBRW5DZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUYsYUFBYSxhQUFhLEVBQUVNLFlBQVksRUFBRSxDQUFDO1FBRTlFLE9BQU9SO0lBQ1Q7SUFFQSxPQUFPd0IsT0FBTyxTQUFTO0FBQ3pCIn0=