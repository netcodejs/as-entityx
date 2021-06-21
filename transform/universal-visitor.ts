import {
    IdentifierExpression,
    CallExpression,
    Node,
    Parser,
    NamedTypeNode,
    PropertyAccessExpression,
} from "assemblyscript";
import { PathTransformVisitor, TransformVisitor, utils } from "@netcodejs/as-visitor";

class UniversalVisitor extends PathTransformVisitor {
    get class2genericHandler() {
        return this.program['class2genericHandler'] as Record<string, Record<string, Record<number, string>>>
    }
    visitCallExpression(node: CallExpression) {
        const thisClassName = this.thisTypeNode?.name.text;
        // console.log(thisClassName, this.class2genericHandler[thisClassName])
        if (
            node.expression instanceof IdentifierExpression &&
            node.expression.text === "familyof"
        ) {
            console.log(1)
            const n = node.typeArguments[0];
            if (n instanceof NamedTypeNode) {
                const genericType = n.name.identifier;
                this.replaceCurrentNode(Node.createIntegerLiteralExpression(
                    i64_new(this.getFamilyId(genericType.text)),
                    node.range
                ));
            }
        } else if (
            thisClassName &&
            this.class2genericHandler[thisClassName] && 
            node.expression instanceof PropertyAccessExpression &&
            node.expression.property.text in this.class2genericHandler[thisClassName]
        ) {
            console.log("Hiehie")
        }
        super.visitCallExpression(node);
    }

    getFamilyId(name: string) {
        const map = this.program["familyClassName"] as Map<string, number>;
        const uniqueId = map.get(name);
        if (uniqueId == null) {
            this.stderr.write("[Error] Cannot get family id by name: " + name + "\n");
            throw ""
        } 
        return uniqueId;
    }

    afterParse(_: Parser): void {
        let sources = _.sources.filter(utils.not(utils.isLibrary));
        this.visit(sources);
    }
}

export = UniversalVisitor;
