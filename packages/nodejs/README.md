# nodejs version
This tool uses `inquirer` under the hood + `.sh` script to 
run the script as `executable`.

## Setup
### Steps
To be able to use this `tiny cli`, you need to:
* **install** node `dependencies`
* **update** `git_switch_recent_branches.sh` shell script with path to `nodejs binary` or + path to `index.js`
* **create** symlink to `git_switch_recent_branches.sh` in your `/usr/local/bin/<YOUR_ALIAS>`

### Example
Usually `git_switch_recent_branches.sh` will look something like
```shell
#!node /Users/<YOUR_USER>/Documents/projects/github/git-recent-branches/packages/nodejs
```

And after that symlink with suitable name should be created, usually
```shell
ln -s <PATH_TO_CURRENT_FOLDER> /usr/local/bin/gre
```
In current case `gre` stands for `git recent`
