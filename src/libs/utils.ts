export function combine<T>(target: T, update: Partial<T>, persistFields: (keyof T)[]) {
  const persist = persistFields.reduce((accum, key) => {
    accum[key] = target[key];
    return accum;
  }, {} as Partial<T>);
  return { ...target, ...update, ...persist };
}
