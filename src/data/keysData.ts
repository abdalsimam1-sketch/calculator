export type ButtonTypes = "action" | "operator" | "number";

interface Key {
  key: string;
  value: string;
  type: ButtonTypes;
}

export const keys: Key[] = [
  {
    key: "7",
    value: "7",
    type: "number",
  },
  {
    key: "8",
    value: "8",
    type: "number",
  },
  {
    key: "9",
    value: "9",
    type: "number",
  },
  {
    key: "DEL",
    value: "DEL",
    type: "action",
  },
  {
    key: "4",
    value: "4",
    type: "number",
  },
  {
    key: "5",
    value: "5",
    type: "number",
  },
  {
    key: "6",
    value: "6",
    type: "number",
  },
  {
    key: "+",
    value: "+",
    type: "operator",
  },
  {
    key: "1",
    value: "1",
    type: "number",
  },
  {
    key: "2",
    value: "2",
    type: "number",
  },
  {
    key: "3",
    value: "3",
    type: "number",
  },
  {
    key: "-",
    value: "-",
    type: "operator",
  },
  {
    key: ".",
    value: ".",
    type: "number",
  },
  {
    key: "0",
    value: "0",
    type: "number",
  },
  {
    key: "/",
    value: "/",
    type: "operator",
  },
  {
    key: "x",
    value: "x",
    type: "operator",
  },
];
export const bottomKeys: Key[] = [
  {
    key: "RESET",
    value: "RESET",
    type: "action",
  },
  {
    key: "=",
    value: "=",
    type: "action",
  },
];
