const getDefaultCZConfig = () => {
  return {
    types: [
      {
        value: 'feat',
        name: 'feat: A new feature（新功能）',
      },
      {
        value: 'fix',
        name: 'fix: A bug fix（bug 修复）',
      },
      {
        value: 'style',
        name: 'style: only style formatter changes（空格, 分号等格式修复）',
      },
      {
        value: 'test',
        name: 'test: changes to test（测试相关）',
      },
      {
        value: 'refactor',
        name:
          'refactor: A code change that neither fixes a bug nor adds a feature（即不是新增功能，也不是修改bug的代码变动）',
      },
      {
        value: 'build',
        name:
          'build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
      },
      {
        value: 'ci',
        name:
          'ci: Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)',
      },
      {
        value: 'docs',
        name: 'docs: Documentation only changes（文档）',
      },
      {
        value: 'chore',
        name: 'chore: Changes to build or tools（构建过程或辅助工具的变动）',
      },
    ],
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',
    // override the messages, defaults are as follows
    messages: {
      type: "Select the type of change that you're committing:",
      scope: '\nDenote the SCOPE of this change (optional):',
      // used if allowCustomScopes is true
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional):\n',
      footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
    allowCustomScopes: true,
    allowBreakingChanges: false,
    // skip any questions you want
    skipQuestions: ['body', 'breaking', 'footer'],
    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    askForBreakingChangeFirst: false, // default is false
  };
};

export default getDefaultCZConfig;
module.exports = getDefaultCZConfig;
