export const filtrarPorPropiedad = <T, K extends keyof T>(
  data: T[] | undefined,
  selectedValues: string[],
  key: K,
): T[] => {
  if (!data) return [];
  if (selectedValues.length === 0) return data;

  return data.filter((item) => {
    const valorPropiedad = item[key];

    if (typeof valorPropiedad !== "string") return false;

    return selectedValues.includes(valorPropiedad);
  });
};
