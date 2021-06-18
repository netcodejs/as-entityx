import {
    IdentifierExpression,
    CallExpression,
    Node,
    Parser,
    NamedTypeNode,
} from "assemblyscript";
import { TransformVisitor, utils } from "@netcodejs/as-visitor";

class UniqueIdOf extends TransformVisitor {
    visitCallExpression(node: CallExpression) {
        if (
            node.expression instanceof IdentifierExpression &&
            node.expression.text === "uniqueidof"
        ) {
            const n = node.typeArguments[0];
            if (n instanceof NamedTypeNode) {
                const genericType = n.name.identifier;
                return Node.createIntegerLiteralExpression(
                    i64_new(this.getUniqueId(genericType.text)),
                    node.range
                );
            }
        }
        return super.visitCallExpression(node);
    }

    getUniqueId(name: string) {
        const map = this.program["uniqueClassName"] as Map<string, number>;
        const uniqueId = map.get(name);
        if (uniqueId == null) {
            this.stderr.write("[Error] Cannot get unique id by name: " + name + "\n");
            throw ""
        }
        return uniqueId;
    }

    afterParse(_: Parser): void {
        let sources = _.sources.filter(utils.not(utils.isLibrary));
        this.visit(sources);
    }
}

export = UniqueIdOf;
