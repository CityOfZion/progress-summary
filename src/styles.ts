import { createElement } from "react";
import * as CSS from "csstype";
import { create } from "nano-css";
import { addon as addonAtoms, Atoms } from "nano-css/addon/atoms";
import { addon as addonNesting } from "nano-css/addon/nesting";
import { addon as addonRule } from "nano-css/addon/rule";
import { addon as addonSheet } from "nano-css/addon/sheet";
import { addon as addonWithStyles } from "nano-css/addon/withStyles";

interface CssLikeObject extends CSS.Properties, CSS.PropertiesHyphen, Atoms {
  [selector: string]: any | CssLikeObject;
}

const nano = create({
  pfx: "coz-ps-",
  h: createElement,
});

addonNesting(nano);
addonAtoms(nano);
addonRule(nano);
addonSheet(nano);
addonWithStyles(nano);

const { put, rule, sheet, withStyles } = nano;

export { nano, put, rule, sheet, withStyles };
