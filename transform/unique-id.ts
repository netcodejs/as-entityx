import {
    FieldDeclaration,
    MethodDeclaration,
    ClassDeclaration,
    Parser,
    DecoratorNode,
} from "assemblyscript";
import { ClassDecorator, utils } from "@netcodejs/as-visitor";
class UniqueIdVisitor extends ClassDecorator {
    uniqueClassName: Set<string> = new Set();
    visitFieldDeclaration(node: FieldDeclaration): void {}
    visitMethodDeclaration(node: MethodDeclaration): void {}
    visitClassDeclaration(node: ClassDeclaration): void {
        // this.getDecorator(node) as NamedDe
        this.uniqueClassName.add(node.name.text);
    }

    get name(): string {
        return "uniqueid";
    }

    afterParse(parser: Parser) {
        this.program["uniqueClassName"] = this._uniqueClassName2map()
    }

    private _uniqueClassName2map() {
        return new Map(Array.from(this.uniqueClassName.values()).map((n, i) => [n, i]))
    }
}

export = UniqueIdVisitor;
