import { TopLevelDecorator } from "@netcodejs/as-visitor/dist";
import UniqueIdVisitor from "./unique-id";

TopLevelDecorator.registerVisitor(new UniqueIdVisitor())

export = TopLevelDecorator