import { TopLevelDecorator } from "@netcodejs/as-visitor";
import FamilyVisitor from "./family";
import OverloadGenericVisitor from "./overload-generic";

TopLevelDecorator.registerVisitor(new FamilyVisitor(), new OverloadGenericVisitor())

export = TopLevelDecorator