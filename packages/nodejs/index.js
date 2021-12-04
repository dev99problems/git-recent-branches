const inquirer = require('inquirer');
const { spawn } = require('child_process');

// the original command I use git alias for "recent" is
// git for-each-ref --count=5 --sort=-committerdate refs/heads/ --format='%(refname:short)'
const gitRecentCmd = spawn('git', [
  'for-each-ref',
  '--count', 5,
  '--sort', '-committerdate',
  'refs/heads/',
  '--format', '%(refname:short)'
]);
const gitCheckoutCmdCreator = (branch) => spawn('git', ['checkout', branch])

gitRecentCmd.stdout.on('data', (data) => {
  const branches = data.toString().trim().split('\n');

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'recent',
        message: 'Switch to branch:',
        choices: branches,
      },
    ])
    .then((answers) => {
      const branch = answers?.['recent'];

      gitCheckoutCmdCreator(branch)
    })
    .catch((err) => {
      if (err.isTtyError) {
        console.error('This output can not be rendered in your terminal');
      } else {
        console.error('Something went wrong');
      }
    });
});
