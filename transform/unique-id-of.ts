import {
    IdentifierExpression,
    CallExpression,
    Expression,
    FunctionExpression,
    Node,
    Parser,
    TypeNode,
    NamedTypeNode,
} from "assemblyscript";
import { TransformVisitor, utils } from "visitor-as";

class UniqueIdOf extends TransformVisitor {
    visitCallExpression(node: CallExpression) {
        if (
            node.expression instanceof IdentifierExpression &&
            node.expression.text === "uniqueidof"
        ) {
            const n = node.typeArguments[0];
            if (n instanceof NamedTypeNode) {
                const genericType = n.name.identifier;
                return Node.createIntegerLiteralExpression(i64_new(1), node.range)
            }
        }
        return super.visitCallExpression(node);
    }

    afterParse(_: Parser): void {
        let sources = _.sources.filter(utils.not(utils.isLibrary));
        this.visit(sources);
    }
}

export = new UniqueIdOf();
