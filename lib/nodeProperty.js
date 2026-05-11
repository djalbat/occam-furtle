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
    compareNamedBinding(namedBinding, context) {
        let namedBindingCompares;
        const nodePropertyString = this.string, namedBindingString = namedBinding.getString();
        context.trace(`Comparing the '${nodePropertyString}' node property with the '${namedBindingString}' named binding...`);
        const name = namedBinding.getName(), type = namedBinding.getType();
        namedBindingCompares = this.name === name && this.type === type;
        if (namedBindingCompares) {
            context.debug(`...compared the '${nodePropertyString}' node property with the '${namedBindingString}' named binding.`);
        }
        return namedBindingCompares;
    }
    static name = "Parameter";
    static fromNameAndType(name, type) {
        const nodePropertyString = (0, _string.nodePropertyStringFromNameAndType)(name, type), string = nodePropertyString, nodeProperty = new NodeProperty(string, type, name);
        return nodeProperty;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ub2RlUHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVQcm9wZXJ0eVN0cmluZ0Zyb21OYW1lQW5kVHlwZSB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZVByb3BlcnR5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0eXBlLCBuYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGNvbXBhcmVOYW1lZEJpbmRpbmcobmFtZWRCaW5kaW5nLCBjb250ZXh0KSB7XG4gICAgbGV0IG5hbWVkQmluZGluZ0NvbXBhcmVzO1xuXG4gICAgY29uc3Qgbm9kZVByb3BlcnR5U3RyaW5nID0gdGhpcy5zdHJpbmcsIC8vL1xuICAgICAgICAgIG5hbWVkQmluZGluZ1N0cmluZyA9IG5hbWVkQmluZGluZy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7bm9kZVByb3BlcnR5U3RyaW5nfScgbm9kZSBwcm9wZXJ0eSB3aXRoIHRoZSAnJHtuYW1lZEJpbmRpbmdTdHJpbmd9JyBuYW1lZCBiaW5kaW5nLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lID0gbmFtZWRCaW5kaW5nLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlID0gbmFtZWRCaW5kaW5nLmdldFR5cGUoKTtcblxuICAgIG5hbWVkQmluZGluZ0NvbXBhcmVzID0gKCh0aGlzLm5hbWUgPT09IG5hbWUpICYmICh0aGlzLnR5cGUgPT09IHR5cGUpKTtcblxuICAgIGlmIChuYW1lZEJpbmRpbmdDb21wYXJlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke25vZGVQcm9wZXJ0eVN0cmluZ30nIG5vZGUgcHJvcGVydHkgd2l0aCB0aGUgJyR7bmFtZWRCaW5kaW5nU3RyaW5nfScgbmFtZWQgYmluZGluZy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZWRCaW5kaW5nQ29tcGFyZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUGFyYW1ldGVyXCI7XG5cbiAgc3RhdGljIGZyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSB7XG4gICAgY29uc3Qgbm9kZVByb3BlcnR5U3RyaW5nID0gbm9kZVByb3BlcnR5U3RyaW5nRnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpLFxuICAgICAgICAgIHN0cmluZyA9IG5vZGVQcm9wZXJ0eVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGVQcm9wZXJ0eSA9IG5ldyBOb2RlUHJvcGVydHkoc3RyaW5nLCB0eXBlLCBuYW1lKTtcblxuICAgIHJldHVybiBub2RlUHJvcGVydHk7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiTm9kZVByb3BlcnR5Iiwic3RyaW5nIiwidHlwZSIsIm5hbWUiLCJnZXRTdHJpbmciLCJnZXRUeXBlIiwiZ2V0TmFtZSIsImNvbXBhcmVOYW1lZEJpbmRpbmciLCJuYW1lZEJpbmRpbmciLCJjb250ZXh0IiwibmFtZWRCaW5kaW5nQ29tcGFyZXMiLCJub2RlUHJvcGVydHlTdHJpbmciLCJuYW1lZEJpbmRpbmdTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwiZnJvbU5hbWVBbmRUeXBlIiwibm9kZVByb3BlcnR5U3RyaW5nRnJvbU5hbWVBbmRUeXBlIiwibm9kZVByb3BlcnR5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXFCQTs7O3dCQUY2QjtBQUVuQyxNQUFNQTtJQUNuQixZQUFZQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxDQUFFO1FBQzlCLElBQUksQ0FBQ0YsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtJQUNwQjtJQUVBSSxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLG9CQUFvQkMsWUFBWSxFQUFFQyxPQUFPLEVBQUU7UUFDekMsSUFBSUM7UUFFSixNQUFNQyxxQkFBcUIsSUFBSSxDQUFDVixNQUFNLEVBQ2hDVyxxQkFBcUJKLGFBQWFKLFNBQVM7UUFFakRLLFFBQVFJLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsbUJBQW1CLDBCQUEwQixFQUFFQyxtQkFBbUIsa0JBQWtCLENBQUM7UUFFckgsTUFBTVQsT0FBT0ssYUFBYUYsT0FBTyxJQUMzQkosT0FBT00sYUFBYUgsT0FBTztRQUVqQ0ssdUJBQXdCLEFBQUMsSUFBSSxDQUFDUCxJQUFJLEtBQUtBLFFBQVUsSUFBSSxDQUFDRCxJQUFJLEtBQUtBO1FBRS9ELElBQUlRLHNCQUFzQjtZQUN4QkQsUUFBUUssS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVILG1CQUFtQiwwQkFBMEIsRUFBRUMsbUJBQW1CLGdCQUFnQixDQUFDO1FBQ3ZIO1FBRUEsT0FBT0Y7SUFDVDtJQUVBLE9BQU9QLE9BQU8sWUFBWTtJQUUxQixPQUFPWSxnQkFBZ0JaLElBQUksRUFBRUQsSUFBSSxFQUFFO1FBQ2pDLE1BQU1TLHFCQUFxQkssSUFBQUEseUNBQWlDLEVBQUNiLE1BQU1ELE9BQzdERCxTQUFTVSxvQkFDVE0sZUFBZSxJQUFJakIsYUFBYUMsUUFBUUMsTUFBTUM7UUFFcEQsT0FBT2M7SUFDVDtBQUNGIn0=