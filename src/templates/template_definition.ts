// Template definition

interface Language {
    alias: string;
    id: string;
    extension: string;
    requireNamespace: boolean;
    templates: Template[];
}

interface Template {
    name: string;
    filename: string;
    extensionOverride: string;
}
