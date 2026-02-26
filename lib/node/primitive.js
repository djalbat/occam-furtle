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
const _occamlanguages = require("occam-languages");
const _nullNode = /*#__PURE__*/ _interop_require_default(require("../nullNode"));
const _constants = require("../constants");
const _types = require("../types");
const _tokenTypes = require("../tokenTypes");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PrimitiveNode extends _occamlanguages.NonTerminalNode {
    getType() {
        let type;
        const node = this.getNode(), number = this.getNumber(), boolean = this.getBoolean(), stringLiteral = this.getStringLiteral();
        if (false) {
        ///
        } else if (node !== null) {
            type = _types.NODE_TYPE;
        } else if (number !== null) {
            type = _types.NUMBER_TYPE;
        } else if (boolean !== null) {
            type = _types.BOOLEAN_TYPE;
        } else if (stringLiteral !== null) {
            type = _types.STRING_TYPE;
        }
        return type;
    }
    getValue() {
        let value;
        const node = this.getNode(), number = this.getNumber(), boolean = this.getBoolean(), stringLiteral = this.getStringLiteral();
        if (false) {
        ///
        } else if (node !== null) {
            value = node; ///
        } else if (number !== null) {
            value = number; ///
        } else if (boolean !== null) {
            value = boolean; ///
        } else if (stringLiteral !== null) {
            value = stringLiteral; ///
        }
        return value;
    }
    getNode() {
        let node = null;
        const tokenType = _tokenTypes.NULL_TOKEN_TYPE;
        this.someTerminalNode((terminalNode)=>{
            const content = terminalNode.getContent();
            if (content === _constants.NULL) {
                node = _nullNode.default;
                return true;
            }
        }, tokenType);
        return node;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlL3ByaW1pdGl2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTm9uVGVybWluYWxOb2RlIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgbnVsbE5vZGUgZnJvbSBcIi4uL251bGxOb2RlXCI7XG5cbmltcG9ydCB7IE5VTEwsIFRSVUUsIEZBTFNFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTk9ERV9UWVBFLCBTVFJJTkdfVFlQRSwgTlVNQkVSX1RZUEUsIEJPT0xFQU5fVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgTlVMTF9UT0tFTl9UWVBFLCBOVU1CRVJfVE9LRU5fVFlQRSwgQk9PTEVBTl9UT0tFTl9UWVBFLCBTVFJJTkdfTElURVJBTF9UT0tFTl9UWVBFIH0gZnJvbSBcIi4uL3Rva2VuVHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpbWl0aXZlTm9kZSBleHRlbmRzIE5vblRlcm1pbmFsTm9kZSB7XG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbnVtYmVyID0gdGhpcy5nZXROdW1iZXIoKSxcbiAgICAgICAgICBib29sZWFuID0gdGhpcy5nZXRCb29sZWFuKCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHRoaXMuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOT0RFX1RZUEU7XG4gICAgfSBlbHNlIGlmIChudW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBOVU1CRVJfVFlQRTtcbiAgICB9IGVsc2UgaWYgKGJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHR5cGUgPSBCT09MRUFOX1RZUEU7XG4gICAgfSBlbHNlIGlmIChzdHJpbmdMaXRlcmFsICE9PSBudWxsKSB7XG4gICAgICB0eXBlID0gU1RSSU5HX1RZUEU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgbnVtYmVyID0gdGhpcy5nZXROdW1iZXIoKSxcbiAgICAgICAgICBib29sZWFuID0gdGhpcy5nZXRCb29sZWFuKCksXG4gICAgICAgICAgc3RyaW5nTGl0ZXJhbCA9IHRoaXMuZ2V0U3RyaW5nTGl0ZXJhbCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gbm9kZTsgLy8vXG4gICAgfSBlbHNlIGlmIChudW1iZXIgIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gbnVtYmVyOyAvLy9cbiAgICB9IGVsc2UgaWYgKGJvb2xlYW4gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gYm9vbGVhbjsgIC8vL1xuICAgIH0gZWxzZSBpZiAoc3RyaW5nTGl0ZXJhbCAhPT0gbnVsbCkge1xuICAgICAgdmFsdWUgPSBzdHJpbmdMaXRlcmFsOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBOVUxMX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmIChjb250ZW50ID09PSBOVUxMKSB7XG4gICAgICAgIG5vZGUgPSBudWxsTm9kZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBnZXROdW1iZXIoKSB7XG4gICAgbGV0IG51bWJlciA9IG51bGw7XG5cbiAgICBjb25zdCB0b2tlblR5cGUgPSBOVU1CRVJfVE9LRU5fVFlQRTsgLy8vXG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIGlmIChjb250ZW50ID09PSBUUlVFKSB7XG4gICAgICAgIG51bWJlciA9IE51bWJlcihjb250ZW50KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIGdldEJvb2xlYW4oKSB7XG4gICAgbGV0IGJvb2xlYW4gPSBudWxsO1xuXG4gICAgY29uc3QgdG9rZW5UeXBlID0gQk9PTEVBTl9UT0tFTl9UWVBFO1xuXG4gICAgdGhpcy5zb21lVGVybWluYWxOb2RlKCh0ZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpO1xuXG4gICAgICBpZiAoY29udGVudCA9PT0gVFJVRSkge1xuICAgICAgICBib29sZWFuID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbnRlbnQgPT09IEZBTFNFKSB7XG4gICAgICAgIGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCB0b2tlblR5cGUpO1xuXG4gICAgcmV0dXJuIGJvb2xlYW47XG4gIH1cblxuICBnZXRTdHJpbmdMaXRlcmFsKCkge1xuICAgIGxldCBzdHJpbmdMaXRlcmFsID0gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IFNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEU7XG5cbiAgICB0aGlzLnNvbWVUZXJtaW5hbE5vZGUoKHRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCk7XG5cbiAgICAgIHN0cmluZ0xpdGVyYWwgPSBjb250ZW50OyAgLy8vXG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sIHRva2VuVHlwZSk7XG5cbiAgICByZXR1cm4gc3RyaW5nTGl0ZXJhbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUHJpbWl0aXZlTm9kZSwgcnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpOyB9XG59XG4iXSwibmFtZXMiOlsiUHJpbWl0aXZlTm9kZSIsIk5vblRlcm1pbmFsTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibm9kZSIsImdldE5vZGUiLCJudW1iZXIiLCJnZXROdW1iZXIiLCJib29sZWFuIiwiZ2V0Qm9vbGVhbiIsInN0cmluZ0xpdGVyYWwiLCJnZXRTdHJpbmdMaXRlcmFsIiwiTk9ERV9UWVBFIiwiTlVNQkVSX1RZUEUiLCJCT09MRUFOX1RZUEUiLCJTVFJJTkdfVFlQRSIsImdldFZhbHVlIiwidmFsdWUiLCJ0b2tlblR5cGUiLCJOVUxMX1RPS0VOX1RZUEUiLCJzb21lVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJOVUxMIiwibnVsbE5vZGUiLCJOVU1CRVJfVE9LRU5fVFlQRSIsIlRSVUUiLCJOdW1iZXIiLCJCT09MRUFOX1RPS0VOX1RZUEUiLCJGQUxTRSIsIlNUUklOR19MSVRFUkFMX1RPS0VOX1RZUEUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJydWxlTmFtZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFxQkE7OztnQ0FSVztpRUFFWDsyQkFFYTt1QkFDZ0M7NEJBQ2dDOzs7Ozs7QUFFbkYsTUFBTUEsc0JBQXNCQywrQkFBZTtJQUN4REMsVUFBVTtRQUNSLElBQUlDO1FBRUosTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO1FBRTNDLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlQLFNBQVMsTUFBTTtZQUN4QkQsT0FBT1MsZ0JBQVM7UUFDbEIsT0FBTyxJQUFJTixXQUFXLE1BQU07WUFDMUJILE9BQU9VLGtCQUFXO1FBQ3BCLE9BQU8sSUFBSUwsWUFBWSxNQUFNO1lBQzNCTCxPQUFPVyxtQkFBWTtRQUNyQixPQUFPLElBQUlKLGtCQUFrQixNQUFNO1lBQ2pDUCxPQUFPWSxrQkFBVztRQUNwQjtRQUVBLE9BQU9aO0lBQ1Q7SUFFQWEsV0FBVztRQUNULElBQUlDO1FBRUosTUFBTWIsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFNBQVMsSUFBSSxDQUFDQyxTQUFTLElBQ3ZCQyxVQUFVLElBQUksQ0FBQ0MsVUFBVSxJQUN6QkMsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO1FBRTNDLElBQUksT0FBTztRQUNULEdBQUc7UUFDTCxPQUFPLElBQUlQLFNBQVMsTUFBTTtZQUN4QmEsUUFBUWIsTUFBTSxHQUFHO1FBQ25CLE9BQU8sSUFBSUUsV0FBVyxNQUFNO1lBQzFCVyxRQUFRWCxRQUFRLEdBQUc7UUFDckIsT0FBTyxJQUFJRSxZQUFZLE1BQU07WUFDM0JTLFFBQVFULFNBQVUsR0FBRztRQUN2QixPQUFPLElBQUlFLGtCQUFrQixNQUFNO1lBQ2pDTyxRQUFRUCxlQUFnQixHQUFHO1FBQzdCO1FBRUEsT0FBT087SUFDVDtJQUVBWixVQUFVO1FBQ1IsSUFBSUQsT0FBTztRQUVYLE1BQU1jLFlBQVlDLDJCQUFlO1FBRWpDLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQ0M7WUFDckIsTUFBTUMsVUFBVUQsYUFBYUUsVUFBVTtZQUV2QyxJQUFJRCxZQUFZRSxlQUFJLEVBQUU7Z0JBQ3BCcEIsT0FBT3FCLGlCQUFRO2dCQUVmLE9BQU87WUFDVDtRQUNGLEdBQUdQO1FBRUgsT0FBT2Q7SUFDVDtJQUVBRyxZQUFZO1FBQ1YsSUFBSUQsU0FBUztRQUViLE1BQU1ZLFlBQVlRLDZCQUFpQixFQUFFLEdBQUc7UUFFeEMsSUFBSSxDQUFDTixnQkFBZ0IsQ0FBQyxDQUFDQztZQUNyQixNQUFNQyxVQUFVRCxhQUFhRSxVQUFVO1lBRXZDLElBQUlELFlBQVlLLGVBQUksRUFBRTtnQkFDcEJyQixTQUFTc0IsT0FBT047Z0JBRWhCLE9BQU87WUFDVDtRQUNGLEdBQUdKO1FBRUgsT0FBT1o7SUFDVDtJQUVBRyxhQUFhO1FBQ1gsSUFBSUQsVUFBVTtRQUVkLE1BQU1VLFlBQVlXLDhCQUFrQjtRQUVwQyxJQUFJLENBQUNULGdCQUFnQixDQUFDLENBQUNDO1lBQ3JCLE1BQU1DLFVBQVVELGFBQWFFLFVBQVU7WUFFdkMsSUFBSUQsWUFBWUssZUFBSSxFQUFFO2dCQUNwQm5CLFVBQVU7Z0JBRVYsT0FBTztZQUNUO1lBRUEsSUFBSWMsWUFBWVEsZ0JBQUssRUFBRTtnQkFDckJ0QixVQUFVO2dCQUVWLE9BQU87WUFDVDtRQUNGLEdBQUdVO1FBRUgsT0FBT1Y7SUFDVDtJQUVBRyxtQkFBbUI7UUFDakIsSUFBSUQsZ0JBQWdCO1FBRXBCLE1BQU1RLFlBQVlhLHFDQUF5QjtRQUUzQyxJQUFJLENBQUNYLGdCQUFnQixDQUFDLENBQUNDO1lBQ3JCLE1BQU1DLFVBQVVELGFBQWFFLFVBQVU7WUFFdkNiLGdCQUFnQlksU0FBVSxHQUFHO1lBRTdCLE9BQU87UUFDVCxHQUFHSjtRQUVILE9BQU9SO0lBQ1Q7SUFFQSxPQUFPc0IsMkNBQTJDQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPbkMsK0JBQWUsQ0FBQytCLDBDQUEwQyxDQUFDaEMsZUFBZWlDLFVBQVVDLFlBQVlDLFNBQVNDO0lBQWE7QUFDOU4ifQ==