import isNegativeZero from "negative-zero";

export function zeropad(number: number | string, length?: number): string {
  if (isNaN(Number(number))) {
    throw new SyntaxError("zeropad requires a number or string");
  }

  if (typeof length !== "undefined" && (isNaN(length) || length < 0)) {
    throw new SyntaxError("zeropad requires a positive integer for length");
  }

  const prefix =
    isNegativeZero(number as number) || Number(number) < 0 ? "-" : "";

  length = length || 2;
  number = Math.abs(parseFloat(String(number)));
  const padLength = length - String(number).length + 1;

  const pads = new Array(padLength).join("0");
  return prefix + pads + number;
}
