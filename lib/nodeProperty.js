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
const _string = require("./utilities/string");
class NodeProperty {
    constructor(string, type, name){
        this.string = string;
        this.type = type;
        this.name = name;
    }
    getString() {
        return this.string;
    }
    getType() {
        return this.type;
    }
    getName() {
        return this.name;
    }
    compareNamedParameter(namedParameter, context) {
        let namedParameterCompares;
        const nodePropertyString = this.string, namedParameterString = namedParameter.getString();
        context.trace(`Comparing the '${nodePropertyString}' node property with the '${namedParameterString}' named parameter...`);
        const name = namedParameter.getName(), type = namedParameter.getType();
        namedParameterCompares = this.name === name && this.type === type;
        if (namedParameterCompares) {
            context.debug(`...compared the '${nodePropertyString}' node property with the '${namedParameterString}' named parameter.`);
        }
        return namedParameterCompares;
    }
    static name = "Parameter";
    static fromNameAndType(name, type) {
        const nodePropertyString = (0, _string.nodePropertyStringFromNameAndType)(name, type), string = nodePropertyString, nodeProperty = new NodeProperty(string, type, name);
        return nodeProperty;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVQcm9wZXJ0eVN0cmluZ0Zyb21OYW1lQW5kVHlwZSB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVByb3BlcnR5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVOYW1lZFBhcmFtZXRlcihuYW1lZFBhcmFtZXRlciwgY29udGV4dCkge1xuICAgIGxldCBuYW1lZFBhcmFtZXRlckNvbXBhcmVzO1xuXG4gICAgY29uc3Qgbm9kZVByb3BlcnR5U3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIG5hbWVkUGFyYW1ldGVyU3RyaW5nID0gbmFtZWRQYXJhbWV0ZXIuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke25vZGVQcm9wZXJ0eVN0cmluZ30nIG5vZGUgcHJvcGVydHkgd2l0aCB0aGUgJyR7bmFtZWRQYXJhbWV0ZXJTdHJpbmd9JyBuYW1lZCBwYXJhbWV0ZXIuLi5gKTtcblxuICAgIGNvbnN0IG5hbWUgPSBuYW1lZFBhcmFtZXRlci5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZSA9IG5hbWVkUGFyYW1ldGVyLmdldFR5cGUoKTtcblxuICAgIG5hbWVkUGFyYW1ldGVyQ29tcGFyZXMgPSAoKHRoaXMubmFtZSA9PT0gbmFtZSkgJiYgKHRoaXMudHlwZSA9PT0gdHlwZSkpO1xuXG4gICAgaWYgKG5hbWVkUGFyYW1ldGVyQ29tcGFyZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtub2RlUHJvcGVydHlTdHJpbmd9JyBub2RlIHByb3BlcnR5IHdpdGggdGhlICcke25hbWVkUGFyYW1ldGVyU3RyaW5nfScgbmFtZWQgcGFyYW1ldGVyLmApO1xuICAgIH1cblxuICAgIHJldHVybiBuYW1lZFBhcmFtZXRlckNvbXBhcmVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlBhcmFtZXRlclwiO1xuXG4gIHN0YXRpYyBmcm9tTmFtZUFuZFR5cGUobmFtZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGVQcm9wZXJ0eVN0cmluZyA9IG5vZGVQcm9wZXJ0eVN0cmluZ0Zyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlUHJvcGVydHlTdHJpbmcsICAvLy9cbiAgICAgICAgICBub2RlUHJvcGVydHkgPSBuZXcgTm9kZVByb3BlcnR5KHN0cmluZywgdHlwZSwgbmFtZSk7XG5cbiAgICByZXR1cm4gbm9kZVByb3BlcnR5O1xuICB9XG59O1xuIl0sIm5hbWVzIjpbIk5vZGVQcm9wZXJ0eSIsInN0cmluZyIsInR5cGUiLCJuYW1lIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldE5hbWUiLCJjb21wYXJlTmFtZWRQYXJhbWV0ZXIiLCJuYW1lZFBhcmFtZXRlciIsImNvbnRleHQiLCJuYW1lZFBhcmFtZXRlckNvbXBhcmVzIiwibm9kZVByb3BlcnR5U3RyaW5nIiwibmFtZWRQYXJhbWV0ZXJTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiZnJvbU5hbWVBbmRUeXBlIiwibm9kZVByb3BlcnR5U3RyaW5nRnJvbU5hbWVBbmRUeXBlIiwibm9kZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3dCQUY2QjtBQUVuQyxNQUFNQTtJQUNuQixZQUFZQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQzlCLElBQUksQ0FBQ0YsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtJQUNwQjtJQUVBSSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLHNCQUFzQkMsY0FBYyxFQUFFQyxPQUFPLEVBQUU7UUFDN0MsSUFBSUM7UUFFSixNQUFNQyxxQkFBcUIsSUFBSSxDQUFDVixNQUFNLEVBQ2hDVyx1QkFBdUJKLGVBQWVKLFNBQVM7UUFFckRLLFFBQVFJLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsbUJBQW1CLDBCQUEwQixFQUFFQyxxQkFBcUIsb0JBQW9CLENBQUM7UUFFekgsTUFBTVQsT0FBT0ssZUFBZUYsT0FBTyxJQUM3QkosT0FBT00sZUFBZUgsT0FBTztRQUVuQ0sseUJBQTBCLEFBQUMsSUFBSSxDQUFDUCxJQUFJLEtBQUtBLFFBQVUsSUFBSSxDQUFDRCxJQUFJLEtBQUtBO1FBRWpFLElBQUlRLHdCQUF3QjtZQUMxQkQsUUFBUUssS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVILG1CQUFtQiwwQkFBMEIsRUFBRUMscUJBQXFCLGtCQUFrQixDQUFDO1FBQzNIO1FBRUEsT0FBT0Y7SUFDVDtJQUVBLE9BQU9QLE9BQU8sWUFBWTtJQUUxQixPQUFPWSxnQkFBZ0JaLElBQUksRUFBRUQsSUFBSSxFQUFFO1FBQ2pDLE1BQU1TLHFCQUFxQkssSUFBQUEseUNBQWlDLEVBQUNiLE1BQU1ELE9BQzdERCxTQUFTVSxvQkFDVE0sZUFBZSxJQUFJakIsYUFBYUMsUUFBUUMsTUFBTUM7UUFFcEQsT0FBT2M7SUFDVDtBQUNGIn0=