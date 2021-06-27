import { mergeTransformer, PathTransformVisitor, utils } from "@netcodejs/as-visitor/dist";
import { CallExpression, DecoratorNode, Module, Parser, Program } from "assemblyscript"
import { Transform } from "assemblyscript/cli/transform"
import DecoratorVisitor from "./decorator-visitor"

enum AscStage {
    NONE,
    POST_PARSE,
    POST_INIT,
    POST_COMPILE
}

class MyTransform extends PathTransformVisitor {
    ascStage = AscStage.NONE;
    familyVisitor = new DecoratorVisitor();

    visitDecoratorNode(node: DecoratorNode) {
        if (this.ascStage === AscStage.POST_PARSE) {
            if (this.familyVisitor.decoratorMatcher(node)) {
                this.familyVisitor.currentPath = this.currentPath;
                this.familyVisitor.visit(this.currentParent);
            }
        }
    }

    visitCallExpression(node: CallExpression) {
        if (this.ascStage === AscStage.POST_INIT) {
            if (node.typeArguments) {
                console.log(node.typeArguments);
                this.program.elementsByDeclaration
            }
        }
    }

    afterParse(parser: Parser) {
        this.ascStage = AscStage.POST_PARSE;
        mergeTransformer(this, this.familyVisitor)
        this.visit(parser.sources.filter(utils.not(utils.isLibrary)))    
    }

    afterInitialize(program: Program) {
        this.ascStage = AscStage.POST_INIT;
        this.visit(program.sources.filter(utils.not(utils.isLibrary)))
        console.log(this.familyVisitor.genFamilyClassNameSequence());
    }
    
    afterCompile(module: Module) {
        this.ascStage = AscStage.POST_COMPILE;

        console.log("after-compile")
    }
}

export = MyTransform