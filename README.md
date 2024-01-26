# GitHub Cheat Sheet

### Please Carefully read each instruction before proceeding.

### 1. Adding a new repository

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
        git remote add origin Git_url_here
	#pushes code from your computer to the main branch
        git push -u origin main


### 2. Run these three commands frequently!

#adds all current project changes
    git add .

#includes a commit message
    git commit -m 'I made some code changes!'

#pushes your code from your project to your repository
    git push




### 3. Errors and Fixes
	#Identifies you as the user
		git config --global user.email yourEmail456@email.com
        git config --global user.name yourUsername789

	#Amends your last commit with the new author
        git commit --amend --reset-author

	#Incorrect remote origin URL? Allows git to push to the correct repository
        git remote set-url origin GIT_URL_HERE


### 4. Useful Commands and tips!

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
        git rm file_name.js

	#Allows git to push to the correct repository
	#Useful if you have a different GitHub account
		git remote set-url origin git://new_url_here 
