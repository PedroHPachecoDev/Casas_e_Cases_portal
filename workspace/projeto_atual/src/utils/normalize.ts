// Função utilitária pura — normaliza strings para comparação sem acentos
export const normalize = (str: unknown): string =>
  String(str ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
