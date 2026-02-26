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
const _elements = require("../elements");
const _default = (0, _elements.define)(class Reference extends _occamlanguages.Element {
    constructor(context, string, node, name){
        super(context, string, node);
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getProcedureName() {
        const procedureName = this.name; ///
        return procedureName;
    }
    static name = "Reference";
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3JlZmVyZW5jZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSZWZlcmVuY2UgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBuYW1lKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFByb2NlZHVyZU5hbWUoKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlTmFtZSA9IHRoaXMubmFtZTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUmVmZXJlbmNlXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJSZWZlcmVuY2UiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJuYW1lIiwiZ2V0TmFtZSIsImdldFByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztnQ0FKd0I7MEJBRUQ7TUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxrQkFBa0JDLHVCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBRTtRQUN2QyxLQUFLLENBQUNILFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNkO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0QsSUFBSTtJQUNsQjtJQUVBRSxtQkFBbUI7UUFDakIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0gsSUFBSSxFQUFHLEdBQUc7UUFFckMsT0FBT0c7SUFDVDtJQUVBLE9BQU9ILE9BQU8sWUFBWTtBQUM1QiJ9