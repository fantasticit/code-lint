import ora from 'ora';
export * from './exec';
export * from './file';
export * from './pkg';
export * from './pipe';
export * from './hasYarn';
export declare const createLoading: (str?: string | ora.Options) => ora.Ora;
