import {
    FieldDeclaration,
    MethodDeclaration,
    ClassDeclaration,
} from "assemblyscript";
import {
    ClassDecorator, registerDecorator,
} from "visitor-as";
class UniqueIdVisitor extends ClassDecorator {
    visitFieldDeclaration(node: FieldDeclaration): void {
        throw new Error("Method not implemented.");
    }
    visitMethodDeclaration(node: MethodDeclaration): void {
        throw new Error("Method not implemented.");
    }
    visitClassDeclaration(node: ClassDeclaration): void {
        this.log(node.name.text);
    }

    get name(): string {
        return "uniqueid";
    }
}

export = registerDecorator(new UniqueIdVisitor());
