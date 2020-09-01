declare const getDefaultCZConfig: () => {
    types: {
        value: string;
        name: string;
    }[];
    allowTicketNumber: boolean;
    isTicketNumberRequired: boolean;
    ticketNumberPrefix: string;
    ticketNumberRegExp: string;
    messages: {
        type: string;
        scope: string;
        customScope: string;
        subject: string;
        body: string;
        breaking: string;
        footer: string;
        confirmCommit: string;
    };
    allowCustomScopes: boolean;
    allowBreakingChanges: boolean;
    skipQuestions: string[];
    subjectLimit: number;
    askForBreakingChangeFirst: boolean;
};
export default getDefaultCZConfig;
