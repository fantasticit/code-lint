export declare const getPkg: () => () => any;
export declare const uninstall: (dep: string) => (pkg: any) => Promise<any>;
export declare const install: (dep: string) => (pkg: any) => Promise<any>;
export declare const modifyPkg: (fn: any) => (pkg: any) => any;
export declare const setPkg: () => (pkg: any) => void;
