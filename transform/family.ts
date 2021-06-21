import {
    FieldDeclaration,
    MethodDeclaration,
    ClassDeclaration,
    Parser,
    DecoratorNode,
} from "assemblyscript";
import { ClassDecorator, utils } from "@netcodejs/as-visitor";
class FamilyVisitor extends ClassDecorator {
    familyClassName: Set<string> = new Set();
    visitFieldDeclaration(node: FieldDeclaration): void {}
    visitMethodDeclaration(node: MethodDeclaration): void {}
    visitClassDeclaration(node: ClassDeclaration): void {
        // this.getDecorator(node) as NamedDe
        this.familyClassName.add(node.name.text);
    }

    get name(): string {
        return "family";
    }

    afterParse(parser: Parser) {
        this.program["familyClassName"] = this._familyClassName2map()
    }

    private _familyClassName2map() {
        return new Map(Array.from(this.familyClassName.values()).map((n, i) => [n, i]))
    }
}

export = FamilyVisitor;
