# GitHub Cheat Sheet

### Please Carefully read each instruction before proceeding.

### 1. Adding a new repository

```
#Adds a readme file
    echo "# Your first commit message!" >> README.md

#initializes the git library
    git init

#Adds all project changes
    git add .

#adds a commit message
    git commit -m "added initial project and readme file"

#creates a branch called main
    git branch -M main

#connects your diretory to a github repoistory
    git remote add origin GIT_REPO_URL_HERE

#pushes code from your computer to the main branch
    git push -u origin main
```

### 2. Run these three commands frequently!

```
#adds all current project changes
    git add .

#includes a commit message
    git commit -m 'I made some code changes!'

#pushes your code from your project to your repository
    git push
```

### 3. Errors and Fixes

```
#Identifies you as the user
    git config --global user.email yourEmail456@email.com
    git config --global user.name yourUsername789

#Amends your last commit with the new author
    git commit --amend --reset-author

#Incorrect remote origin URL? Allows git to push to the correct repository
    git remote set-url origin GIT_REPO_URL_HERE
```

### 4. Useful Commands and tips!

```
#Display the current status of your files
    git status

#Copies an existing repository to your computer
    git clone https://github.com/some_user/some_repo

#clone a specific branch from a repository
    git clone -b yourBranch https://github.com/some_user/some_repo

#Lists all branches local and remote
    git branch -a

#Switch to another branch
    git checkout some_branch

#Create a new branch
    git checkout -b new_branch

#Add a specific file ie index.html
    git add someFile.fileextension

#Commits to adding your changes to the repository
    git commit -m 'new message'

#Updated your last commit with an ammended message
    git commit --amend -m 'new message'

#Pushes changes up to your GitHub repository
    git push

#Pulls changes from your GitHub repository
    git pull

#Shows the history of your commits
    git log

#Change a file name and keep the History
    git mv old_file_name.js new_file_name.html

#Delete a file and keep the History
    git rm 'file_name'

#Remove a file from GitHub but not locally
    git rm --cached 'file_name'

#Allows git to push to the correct repository
#Useful if you have a different GitHub account
    git remote set-url origin git://new_url_here
```
### 5. Sync delete remote vs local branches
```
#Checks branches delete remotely and also removes those same ones locally

#Windows Powershell:
    git fetch --prune; git branch -vv | Select-String ': gone]' | ForEach-Object { $_.ToString().Trim().Split()[0] } | ForEach-Object { git branch -d $_ }

#Deletes all branches LOCALLY except for the one specified ie. development
    git branch | Select-String -Pattern "^  (?!development\b).*$" | ForEach-Object { git branch -d $_.Line.Trim() }

#Lists out all branches except the one specified, useful for verification
    git branch | Select-String -Pattern "^  (?!development\b).*$" | ForEach-Object { echo $_.Line.Trim() }


```

### 6. Steps to stash and move from one branch to another
```
#1. Stash your changes on the current branch
    git stash push -m "Description of changes"

#2. Switch to the target branch - be sure it was created beforehand
    git checkout branch-name

#3. Apply your stashed changes to the new branch
    git stash pop

#4. Add, Commit, and Push your new changes
    git add .
    git commit -m "Changes added to correct branch!"
    git push
```
