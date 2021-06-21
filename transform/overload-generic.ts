import {
    FieldDeclaration,
    MethodDeclaration,
    ClassDeclaration,
    Parser,
    DecoratorNode,
    StringLiteralExpression,
    PropertyAccessExpression,
} from "assemblyscript";
import { ClassDecorator, utils } from "@netcodejs/as-visitor";
class OverloadGenericVisitor extends ClassDecorator {
    class2genericHandler = {} as Record<string, Record<string, Record<number, string>>>;
    visitFieldDeclaration(node: FieldDeclaration): void {}
    visitMethodDeclaration(node: MethodDeclaration): void {
        if (!node.isGeneric) return;
        const grand =
            this.currentGrandParentPath[this.currentGrandParentPath.length - 1];
        if (grand instanceof ClassDeclaration) {
            const className = utils.className(grand);
            const decorator = this.getDecorator(node);
            const overloadFuncName = (
                decorator.args[0] as StringLiteralExpression
            ).value;
            const genericCount = node.typeParameters.length;
            if (!this.class2genericHandler[className]) {
                this.class2genericHandler[className] = {};
            }
            if (!this.class2genericHandler[className][overloadFuncName]) {
                this.class2genericHandler[className][overloadFuncName] = {}
            }

            const record = this.class2genericHandler[className][overloadFuncName];
            if (typeof record[genericCount] !== "undefined") {
                this.stderr.write(
                    `[Error]${record[genericCount]} and ${node.name.text} has the same generic`
                );
                throw "";
            }
            record[genericCount] = node.name.text;
        }
    }
    visitClassDeclaration(node: ClassDeclaration): void {}

    get name(): string {
        return "overloadgeneric";
    }

    afterParse(parser: Parser) {
        this.program["class2genericHandler"] = this.class2genericHandler
    }
}

export = OverloadGenericVisitor;
