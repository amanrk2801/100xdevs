// Git & github

// Centralized version control system vs Distributed version control system

// Centralized version control system
// - There is only one central repository
// - All developers have to connect to this central repository to get the latest code
// - If the central repository is down, no one can work
// - If the central repository is lost, all the code is lost
// - Example: SVN -> Subversion

// Distributed version control system
// - There is no central repository
// - Every developer has a full copy of the repository
// - Developers can work offline
// - Developers can commit changes to their local repository
// - Developers can push changes to the central repository
// - Example: Git

// Git vs Github

// Git 
// - Used for version control
// - Installed locally on your computer
// - Tracks changes to your local repository
// - you can used git without github

// Github
// - Used for hosting Git repositories
// - Cloud based
// - Provides a web interface to view file changes
// - But you cannot use github without git

// Basic workflow of git
// step 1: You modify a file from the working directory
// step 2: You add these files to the staging area.
// step 3: You perform commit operation that moves the files from the staging area. After push operation, it stores the changes permanently to the git repository.

// Blobs -> Trees -> Commits

// Blobs
// - A blob is a file stored in the git repository
// - It is a binary file
// - It is a snapshot of the file
// - It is stored as a SHA-1 hash
// - It is stored in the .git/objects directory

// Trees
// - A tree is a directory stored in the git repository
// - It is a snapshot of the directory
// - It contains blobs and other trees
// - It is stored as a SHA-1 hash
// - It is stored in the .git/objects directory

// Commits
// - A commit is a snapshot of the repository
// - It contains a tree object
// - It contains a parent commit
// - It contains a message
// - It is stored as a SHA-1 hash
// - It is stored in the .git/objects directory

// Git commands
// clone
// add
// commit
// push
// pull 

// Commands
// 1. git init
// 2. git status
// 3. git add .
// 4. git status
// 5. git commit -m "message"
// 6. git remote -v
// 7. git remote add origin <url>
// 8. git remote -v
// 9. git status
// 10. git push origin main

// clone
// 1. git clone <url>
// 2. cd demo-repo/
// 3. ls
// 4. touch index.html
// 5. vi README.md
// 6. vi index.html
// 7. git status
// 8. git add .
// 9. git status
// 10. git commit -m "updated README.md & index.html"
// 11. git status
// 12. git remote -v
// 13. git push origin main

// merge branch
// 1. ls
// 2. git branch (output: main)
// 3. git checkout -b feature_update_files
// 4. git branch (output: feature_update_files)
// 5. git checkout main (output: Switched to branch 'main')
// 6. git branch
// 7. git checkout feature_update_files (output: Switched to branch 'feature_update_files')
// 8. ls
// 9. vi README.md (add some content)
// 10. git status
// 11. git add README.md
// 12. git status
// 13. git commit -m "updated README.md"
// 14. git checkout main (output: main)
// 15. git diff feature_update_files
// 16. git checkout feature_update_files
// 17. git status
// 18. git push -u origin feature_update_files
// now go to the github repository and create a pull request
// after merging the pull request into the main branch

// Git Merge Conflicts
// - When two branches have changes in the same file
// - Git cannot automatically merge the changes
// - You have to manually resolve the conflicts
// - You have to commit the changes

// Merge conflicts 
// 1. While starting the merge process
// 2. During the merge process

// Git commands to resolve conflicts
// 1. git log --merge
// 2. git diff
// 3. git checkout
// 4. git reset --mixed
// 5. git merge --abort
// 6. git reset

// Lets go to the git bash
// 1. git checkout main
// 2. git branch -d feature_update_files
// 3. git checkout -b hotfix
// 4. ls (output: README.md -> make some changes)
// 5. git diff
// 6. git status
// 7. git commit -am "updated README.md"
// 8. git checkout main
// 9. git checkout hotfix (output: please commit your changes or stash them before you switch branches)
// 10. git status
// 11. git commit -am "updated README.md"
// 12. git checkout hotfix 
// 13. git merge main (output: CONFILCT)
// 14. make changes in the file then come back
// 15. git diff main
// 16. git commit -am "resolved conflicts"
// 17. git merge main

// github issues
// - You can create issues
// - You can assign issues
// - You can add labels to issues
// - You can close issues
// - You can comment on issues




