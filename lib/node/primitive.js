"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PrimitiveNode;
    }
});
const _occamnominal = require("occam-nominal");
const _occamlanguages = require("occam-languages");
const _constants = require("../constants");
const _types = require("../types");
const _tokenTypes = require("../tokenTypes");
class PrimitiveNode extends _occamlanguages.NonTerminalNode {
    getType() {
        let type;
        const number = this.getNumber(), boolean = this.getBoolean(), nominalvalue = this.getNominaValue(), stringLiteral = this.getStringLiteral();
        if (false) {
        ///
        } else if (number !== null) {
            type = _types.NUMBER_TYPE;
        } else if (boolean !== null) {
            type = _types.BOOLEAN_TYPE;
        } else if (nominalvalue !== null) {
            type = _types.NOMINAL_VALUE_TYPE;
        } else if (stringLiteral !== null) {
            type = _types.STRING_TYPE;
        }
        return type;
    }
    getValue() {
        let value;
        const number = this.getNumber(), boolean = this.getBoolean(), nominalValue = this.getNominaValue(), stringLiteral = this.getStringLiteral();
        if (false) {
        ///
        } else if (number !== null) {
            value = number; ///
        } else if (boolean !== null) {
            value = boolean; ///
        } else if (nominalValue !== null) {
            value = nominalValue; ///
        } else if (stringLiteral !== null) {
            value = stringLiteral; ///
        }
        return value;
    }
    getNumber() {
        let number = null;
        const tokenType = _tokenTypes.NUMBER_TOKEN_TYPE; ///
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            if (content === _constants.TRUE) {
                number = Number(content);
                return true;
            }
        }, tokenType);
        return number;
    }
    getBoolean() {
        let boolean = null;
        const tokenType = _tokenTypes.BOOLEAN_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            if (content === _constants.TRUE) {
                boolean = true;
                return true;
            }
            if (content === _constants.FALSE) {
                boolean = false;
                return true;
            }
        }, tokenType);
        return boolean;
    }
    getNominaValue() {
        let nominalValue = null;
        const tokenType = _tokenTypes.NULL_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            if (content === _constants.NULL) {
                nominalValue = _occamnominal.NominalValue.fromNothing();
                return true;
            }
        }, tokenType);
        return nominalValue;
    }
    getStringLiteral() {
        let stringLiteral = null;
        const tokenType = _tokenTypes.STRING_LITERAL_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            stringLiteral = content; ///
            return true;
        }, tokenType);
        return stringLiteral;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _occamlanguages.NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PrimitiveNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9taW5hbFZhbHVlIH0gZnJvbSBcIm9jY2FtLW5vbWluYWxcIjtcbmltcG9ydCB7IE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgTlVMTCwgVFJVRSwgRkFMU0UgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBTVFJJTkdfVFlQRSwgTlVNQkVSX1RZUEUsIEJPT0xFQU5fVFlQRSwgTk9NSU5BTF9WQUxVRV9UWVBFIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBOVUxMX1RPS0VOX1RZUEUsIE5VTUJFUl9UT0tFTl9UWVBFLCBCT09MRUFOX1RPS0VOX1RZUEUsIFNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEUgfSBmcm9tIFwiLi4vdG9rZW5UeXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmltaXRpdmVOb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IG51bWJlciA9IHRoaXMuZ2V0TnVtYmVyKCksXG4gICAgICAgICAgYm9vbGVhbiA9IHRoaXMuZ2V0Qm9vbGVhbigpLFxuICAgICAgICAgIG5vbWluYWx2YWx1ZSA9IHRoaXMuZ2V0Tm9taW5hVmFsdWUoKSxcbiAgICAgICAgICBzdHJpbmdMaXRlcmFsID0gdGhpcy5nZXRTdHJpbmdMaXRlcmFsKCk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAobnVtYmVyICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTlVNQkVSX1RZUEU7XG4gICAgfSBlbHNlIGlmIChib29sZWFuICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gQk9PTEVBTl9UWVBFO1xuICAgIH0gZWxzZSBpZiAobm9taW5hbHZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gTk9NSU5BTF9WQUxVRV9UWVBFO1xuICAgIH0gZWxzZSBpZiAoc3RyaW5nTGl0ZXJhbCAhPT0gbnVsbCkge1xuICAgICAgdHlwZSA9IFNUUklOR19UWVBFO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VmFsdWUoKSB7XG4gICAgbGV0IHZhbHVlO1xuXG4gICAgY29uc3QgbnVtYmVyID0gdGhpcy5nZXROdW1iZXIoKSxcbiAgICAgICAgICBib29sZWFuID0gdGhpcy5nZXRCb29sZWFuKCksXG4gICAgICAgICAgbm9taW5hbFZhbHVlID0gdGhpcy5nZXROb21pbmFWYWx1ZSgpLFxuICAgICAgICAgIHN0cmluZ0xpdGVyYWwgPSB0aGlzLmdldFN0cmluZ0xpdGVyYWwoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChudW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gbnVtYmVyOyAvLy9cbiAgICB9IGVsc2UgaWYgKGJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gYm9vbGVhbjsgIC8vL1xuICAgIH0gZWxzZSBpZiAobm9taW5hbFZhbHVlICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IG5vbWluYWxWYWx1ZTsgLy8vXG4gICAgfSBlbHNlIGlmIChzdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IHN0cmluZ0xpdGVyYWw7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgbGV0IG51bWJlciA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBOVU1CRVJfVE9LRU5fVFlQRTsgLy8vXG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmIChjb250ZW50ID09PSBUUlVFKSB7XG4gICAgICAgIG51bWJlciA9IE51bWJlcihjb250ZW50KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gQk9PTEVBTl9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gVFJVRSkge1xuICAgICAgICBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnQgPT09IEZBTFNFKSB7XG4gICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBnZXROb21pbmFWYWx1ZSgpIHtcbiAgICBsZXQgbm9taW5hbFZhbHVlID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IE5VTExfVE9LRU5fVFlQRTtcblxuICAgIHRoaXMuc29tZVRlcm1pbmFsTm9kZSgodGVybWluYWxOb2RlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKTtcblxuICAgICAgaWYgKGNvbnRlbnQgPT09IE5VTEwpIHtcbiAgICAgICAgbm9taW5hbFZhbHVlID0gTm9taW5hbFZhbHVlLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwgdG9rZW5UeXBlKTtcblxuICAgIHJldHVybiBub21pbmFsVmFsdWU7XG4gIH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkge1xuICAgIGxldCBzdHJpbmdMaXRlcmFsID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIHN0cmluZ0xpdGVyYWwgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUHJpbWl0aXZlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUHJpbWl0aXZlTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibnVtYmVyIiwiZ2V0TnVtYmVyIiwiYm9vbGVhbiIsImdldEJvb2xlYW4iLCJub21pbmFsdmFsdWUiLCJnZXROb21pbmFWYWx1ZSIsInN0cmluZ0xpdGVyYWwiLCJnZXRTdHJpbmdMaXRlcmFsIiwiTlVNQkVSX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJOT01JTkFMX1ZBTFVFX1RZUEUiLCJTVFJJTkdfVFlQRSIsImdldFZhbHVlIiwidmFsdWUiLCJub21pbmFsVmFsdWUiLCJ0b2tlblR5cGUiLCJOVU1CRVJfVE9LRU5fVFlQRSIsInNvbWVUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsIlRSVUUiLCJOdW1iZXIiLCJCT09MRUFOX1RPS0VOX1RZUEUiLCJGQUxTRSIsIk5VTExfVE9LRU5fVFlQRSIsIk5VTEwiLCJOb21pbmFsVmFsdWUiLCJmcm9tTm90aGluZyIsIlNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFxQkE7Ozs4QkFQUTtnQ0FDRzsyQkFFRTt1QkFDeUM7NEJBQ3VCO0FBRW5GLE1BQU1BLHNCQUFzQkMsK0JBQWU7SUFDeERDLFVBQVU7UUFDUixJQUFJQztRQUVKLE1BQU1DLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsZUFBZSxJQUFJLENBQUNDLGNBQWMsSUFDbENDLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQjtRQUUzQyxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJUCxXQUFXLE1BQU07WUFDMUJELE9BQU9TLGtCQUFXO1FBQ3BCLE9BQU8sSUFBSU4sWUFBWSxNQUFNO1lBQzNCSCxPQUFPVSxtQkFBWTtRQUNyQixPQUFPLElBQUlMLGlCQUFpQixNQUFNO1lBQ2hDTCxPQUFPVyx5QkFBa0I7UUFDM0IsT0FBTyxJQUFJSixrQkFBa0IsTUFBTTtZQUNqQ1AsT0FBT1ksa0JBQVc7UUFDcEI7UUFFQSxPQUFPWjtJQUNUO0lBRUFhLFdBQVc7UUFDVCxJQUFJQztRQUVKLE1BQU1iLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QlcsZUFBZSxJQUFJLENBQUNULGNBQWMsSUFDbENDLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQjtRQUUzQyxJQUFJLE9BQU87UUFDVCxHQUFHO1FBQ0wsT0FBTyxJQUFJUCxXQUFXLE1BQU07WUFDMUJhLFFBQVFiLFFBQVEsR0FBRztRQUNyQixPQUFPLElBQUlFLFlBQVksTUFBTTtZQUMzQlcsUUFBUVgsU0FBVSxHQUFHO1FBQ3ZCLE9BQU8sSUFBSVksaUJBQWlCLE1BQU07WUFDaENELFFBQVFDLGNBQWMsR0FBRztRQUMzQixPQUFPLElBQUlSLGtCQUFrQixNQUFNO1lBQ2pDTyxRQUFRUCxlQUFnQixHQUFHO1FBQzdCO1FBRUEsT0FBT087SUFDVDtJQUVBWixZQUFZO1FBQ1YsSUFBSUQsU0FBUztRQUViLE1BQU1lLFlBQVlDLDZCQUFpQixFQUFFLEdBQUc7UUFFeEMsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDQztZQUNyQixNQUFNQyxVQUFVRCxhQUFhRSxVQUFVO1lBRXZDLElBQUlELFlBQVlFLGVBQUksRUFBRTtnQkFDcEJyQixTQUFTc0IsT0FBT0g7Z0JBRWhCLE9BQU87WUFDVDtRQUNGLEdBQUdKO1FBRUgsT0FBT2Y7SUFDVDtJQUVBRyxhQUFhO1FBQ1gsSUFBSUQsVUFBVTtRQUVkLE1BQU1hLFlBQVlRLDhCQUFrQjtRQUVwQyxJQUFJLENBQUNOLGdCQUFnQixDQUFDLENBQUNDO1lBQ3JCLE1BQU1DLFVBQVVELGFBQWFFLFVBQVU7WUFFdkMsSUFBSUQsWUFBWUUsZUFBSSxFQUFFO2dCQUNwQm5CLFVBQVU7Z0JBRVYsT0FBTztZQUNUO1lBRUEsSUFBSWlCLFlBQVlLLGdCQUFLLEVBQUU7Z0JBQ3JCdEIsVUFBVTtnQkFFVixPQUFPO1lBQ1Q7UUFDRixHQUFHYTtRQUVILE9BQU9iO0lBQ1Q7SUFFQUcsaUJBQWlCO1FBQ2YsSUFBSVMsZUFBZTtRQUVuQixNQUFNQyxZQUFZVSwyQkFBZTtRQUVqQyxJQUFJLENBQUNSLGdCQUFnQixDQUFDLENBQUNDO1lBQ3JCLE1BQU1DLFVBQVVELGFBQWFFLFVBQVU7WUFFdkMsSUFBSUQsWUFBWU8sZUFBSSxFQUFFO2dCQUNwQlosZUFBZWEsMEJBQVksQ0FBQ0MsV0FBVztnQkFFdkMsT0FBTztZQUNUO1FBQ0YsR0FBR2I7UUFFSCxPQUFPRDtJQUNUO0lBRUFQLG1CQUFtQjtRQUNqQixJQUFJRCxnQkFBZ0I7UUFFcEIsTUFBTVMsWUFBWWMscUNBQXlCO1FBRTNDLElBQUksQ0FBQ1osZ0JBQWdCLENBQUMsQ0FBQ0M7WUFDckIsTUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtZQUV2Q2QsZ0JBQWdCYSxTQUFVLEdBQUc7WUFFN0IsT0FBTztRQUNULEdBQUdKO1FBRUgsT0FBT1Q7SUFDVDtJQUVBLE9BQU93QiwyQ0FBMkNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9yQywrQkFBZSxDQUFDaUMsMENBQTBDLENBQUNsQyxlQUFlbUMsVUFBVUMsWUFBWUMsU0FBU0M7SUFBYTtBQUM5TiJ9