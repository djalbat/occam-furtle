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
const _occamlanguages = require("occam-languages");
const _element = require("../utilities/element");
const { nodeQuery } = _occamlanguages.queryUtilities;
const errorNodeQuery = nodeQuery("/error"), procedureDeclarationNodeQuery = nodeQuery("/procedureDeclaration");
class TopLevelPass extends _occamlanguages.SimplePass {
    static maps = [
        {
            nodeQuery: errorNodeQuery,
            run: (errorNode, context)=>{
                let success = false;
                const error = (0, _element.errorFromErrorNode)(errorNode, context), errorVerifies = error.verify(context);
                if (errorVerifies) {
                    success = true;
                }
                return success;
            }
        },
        {
            nodeQuery: procedureDeclarationNodeQuery,
            run: (procedureDeclarationNode, context)=>{
                let success = false;
                const procedureDeclaration = (0, _element.procedureDeclarationFromProcedureDeclarationNode)(procedureDeclarationNode, context), procedureDeclarationVerifies = procedureDeclaration.verify(context);
                if (procedureDeclarationVerifies) {
                    success = true;
                }
                return success;
            }
        }
    ];
}
const topLevelPass = new TopLevelPass();
function verifyFile(fileNode, context) {
    let fileVerifies = false;
    const node = fileNode, sucess = topLevelPass.run(node, context);
    if (sucess) {
        fileVerifies = true;
    }
    return fileVerifies;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wcm9jZXNzL3ZlcmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU2ltcGxlUGFzcywgcXVlcnlVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGVycm9yRnJvbUVycm9yTm9kZSwgcHJvY2VkdXJlRGVjbGFyYXRpb25Gcm9tUHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmNvbnN0IHsgbm9kZVF1ZXJ5IH0gPSBxdWVyeVV0aWxpdGllcztcblxuY29uc3QgZXJyb3JOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXJyb3JcIiksXG4gICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9jZWR1cmVEZWNsYXJhdGlvblwiKTtcblxuY2xhc3MgVG9wTGV2ZWxQYXNzIGV4dGVuZHMgU2ltcGxlUGFzcyB7XG4gIHN0YXRpYyBtYXBzID0gW1xuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogZXJyb3JOb2RlUXVlcnksXG4gICAgICBydW46IChlcnJvck5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBlcnJvciA9IGVycm9yRnJvbUVycm9yTm9kZShlcnJvck5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBlcnJvclZlcmlmaWVzID0gZXJyb3IudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChlcnJvclZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIG5vZGVRdWVyeTogcHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlUXVlcnksXG4gICAgICBydW46IChwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpID0+IHtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBwcm9jZWR1cmVEZWNsYXJhdGlvbiA9IHByb2NlZHVyZURlY2xhcmF0aW9uRnJvbVByb2NlZHVyZURlY2xhcmF0aW9uTm9kZShwcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBwcm9jZWR1cmVEZWNsYXJhdGlvblZlcmlmaWVzID0gcHJvY2VkdXJlRGVjbGFyYXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9jZWR1cmVEZWNsYXJhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3VjY2VzcztcbiAgICAgIH1cbiAgICB9XG4gIF07XG59XG5cbmNvbnN0IHRvcExldmVsUGFzcyA9IG5ldyBUb3BMZXZlbFBhc3MoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGZpbGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGUgPSBmaWxlTm9kZSwgLy8vXG4gICAgICAgIHN1Y2VzcyA9IHRvcExldmVsUGFzcy5ydW4obm9kZSwgY29udGV4dCk7XG5cbiAgaWYgKHN1Y2Vzcykge1xuICAgIGZpbGVWZXJpZmllcyA9IHRydWU7XG4gIH1cblxuICByZXR1cm4gZmlsZVZlcmlmaWVzO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeUZpbGUiLCJub2RlUXVlcnkiLCJxdWVyeVV0aWxpdGllcyIsImVycm9yTm9kZVF1ZXJ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlUXVlcnkiLCJUb3BMZXZlbFBhc3MiLCJTaW1wbGVQYXNzIiwibWFwcyIsInJ1biIsImVycm9yTm9kZSIsImNvbnRleHQiLCJzdWNjZXNzIiwiZXJyb3IiLCJlcnJvckZyb21FcnJvck5vZGUiLCJlcnJvclZlcmlmaWVzIiwidmVyaWZ5IiwicHJvY2VkdXJlRGVjbGFyYXRpb25Ob2RlIiwicHJvY2VkdXJlRGVjbGFyYXRpb24iLCJwcm9jZWR1cmVEZWNsYXJhdGlvbkZyb21Qcm9jZWR1cmVEZWNsYXJhdGlvbk5vZGUiLCJwcm9jZWR1cmVEZWNsYXJhdGlvblZlcmlmaWVzIiwidG9wTGV2ZWxQYXNzIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJub2RlIiwic3VjZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnRGdCQTs7O2VBQUFBOzs7Z0NBOUMyQjt5QkFFMEM7QUFFckYsTUFBTSxFQUFFQyxTQUFTLEVBQUUsR0FBR0MsOEJBQWM7QUFFcEMsTUFBTUMsaUJBQWlCRixVQUFVLFdBQzNCRyxnQ0FBZ0NILFVBQVU7QUFFaEQsTUFBTUkscUJBQXFCQywwQkFBVTtJQUNuQyxPQUFPQyxPQUFPO1FBQ1o7WUFDRU4sV0FBV0U7WUFDWEssS0FBSyxDQUFDQyxXQUFXQztnQkFDZixJQUFJQyxVQUFVO2dCQUVkLE1BQU1DLFFBQVFDLElBQUFBLDJCQUFrQixFQUFDSixXQUFXQyxVQUN0Q0ksZ0JBQWdCRixNQUFNRyxNQUFNLENBQUNMO2dCQUVuQyxJQUFJSSxlQUFlO29CQUNqQkgsVUFBVTtnQkFDWjtnQkFFQSxPQUFPQTtZQUNUO1FBQ0Y7UUFDQTtZQUNFVixXQUFXRztZQUNYSSxLQUFLLENBQUNRLDBCQUEwQk47Z0JBQzlCLElBQUlDLFVBQVU7Z0JBRWQsTUFBTU0sdUJBQXVCQyxJQUFBQSx5REFBZ0QsRUFBQ0YsMEJBQTBCTixVQUNsR1MsK0JBQStCRixxQkFBcUJGLE1BQU0sQ0FBQ0w7Z0JBRWpFLElBQUlTLDhCQUE4QjtvQkFDaENSLFVBQVU7Z0JBQ1o7Z0JBRUEsT0FBT0E7WUFDVDtRQUNGO0tBQ0QsQ0FBQztBQUNKO0FBRUEsTUFBTVMsZUFBZSxJQUFJZjtBQUVsQixTQUFTTCxXQUFXcUIsUUFBUSxFQUFFWCxPQUFPO0lBQzFDLElBQUlZLGVBQWU7SUFFbkIsTUFBTUMsT0FBT0YsVUFDUEcsU0FBU0osYUFBYVosR0FBRyxDQUFDZSxNQUFNYjtJQUV0QyxJQUFJYyxRQUFRO1FBQ1ZGLGVBQWU7SUFDakI7SUFFQSxPQUFPQTtBQUNUIn0=