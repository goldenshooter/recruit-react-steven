export function getNumber(value: any): undefined | number {
  if (isNaN(parseInt(value))) {
    return undefined;
  }

  return parseInt(value);
}
