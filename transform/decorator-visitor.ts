import {
    FieldDeclaration,
    MethodDeclaration,
    ClassDeclaration,

} from "assemblyscript";
import { ClassDecorator, registerDecorator } from "@netcodejs/as-visitor";
class DecoratorVisitor extends ClassDecorator {
    familyClassNameSet: Set<string> = new Set();
    visitFieldDeclaration(node: FieldDeclaration): void {}
    visitMethodDeclaration(node: MethodDeclaration): void {}
    visitClassDeclaration(node: ClassDeclaration): void {
        this.familyClassNameSet.add(node.name.text);
    }

    get name(): string {
        return "family";
    }

    public genFamilyClassNameSequence() {
        return new Map(Array.from(this.familyClassNameSet.values()).map((n, i) => [n, i]))
    }
}

export = DecoratorVisitor;
