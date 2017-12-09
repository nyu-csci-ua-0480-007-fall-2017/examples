# Git Commands Demo (Tested on Unix (Mac and Linux))

# Git Best Practices: https://github.com/trein/dev-best-practices/wiki/Git-Commit-Best-Practices
# General commands help website: http://rogerdudler.github.io/git-guide/
# Another commands help website: https://www.git-tower.com/blog/git-cheat-sheet/

#------------------------------
# Advanced Topics (You don't need to know these topics for this course):
# Branching: https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell
# Pull Requests: http://codeinthehole.com/tips/pull-requests-and-other-good-practices-for-teams-using-github/
# Forking: https://gist.github.com/Chaser324/ce0505fbed06b947d962
# Pull Requests Best Practices: http://codeinthehole.com/tips/pull-requests-and-other-good-practices-for-teams-using-github/
#------------------------------

# Delete "#$" from any line containing it to run the command.


# BEGIN DEMO
#==============================

# (General help commands)
   #a.Get help on Git.
      #$ man git
   #b. Get help on a specific command. Replace <command> with a command.
      #$ git help <command>



# Initialize a Git repository.
# This command initializes Git in a directory of your choosing.
#$ git init



# Check if your Git repository is connected to a remote repository (by listing them)
#$ git remote -v



# Add a remote repository location
#$ git remote add origin <URL>
# (Typically, the name of the remote location will just be 'origin'.)



# Create a branch off of another branch
#$ git checkout -b <branch_name>



# Delete a branch off another branch
#$ git branch -d <the branch name>


# List all branches
#$ git branch -v



# Add a file for staging
#$ git add <file name>

# <Sample code>

# Add all files in the current Git repository for staging
#$ git add .



# Undo a "git add" command for a specific file
#$ git reset <filename>



# Undo "git add" for all staged files
#$ git reset



# Commit a file
#$ git commit <filename> <message>



# Commit all files
#$ git commit -a



# Commit all files and add a message
#$ git commit -a -m <msg>



# Undo the last commit
#$ git reset HEAD~



# Revert to a previous commit
#$ git revert <commit>



# Push your commits to the remote repository
#$ git push <name of remote repository> <branch>



# Get the changes from one commit to another
#$ git diff
