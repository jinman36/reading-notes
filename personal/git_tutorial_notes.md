# Day 1 - 31
### Date 01-03-21

### Links
- [Git Tutorial: a Comprehensive Guide](https://blog.udemy.com/git-tutorial-a-comprehensive-guide)
- [Learning git Branching](https://learngitbranching.js.org/)

## Table of Contents
1. [Git Tutorial: a Comprehensive Guide](#git-tutorial-a-comprehensive-guide)
1. [Learning Git Branching](#learning-git-branching)

- VCS - Version Control System
- CVCS - Centralized Version COntrol System
- DCVS - Distributed Version Control Sytem

# Git Tutorial A Comprehensive Guide
- Git uses a DVCS to conquor the vulnerability that a single server CVS can have. A DVCS creates mirrored repositories whixch allow data to be backed up  easily. These mirrored repositories also allow collabrative work thorugh teams becasue the work is conducted on a local computer, thn merged with repositories on the shared drive.

### Some parts of this tutorial that I learned and want to maintain
- (git stash) - allows you to hid all chages since the last commit for a clean workingdirectory
- (git stash apply) - retrieves hidden changes

### Adding a new remote repositoy through teh command line
- git remote
    - origin
- git remote add js https://github.com/janesmith/project1
- git push this repo to github

### Fetching
- fetching entails pulling data that you don't have from a remote project
- (git fetch [remote-name])

### Commit mistakes
- (git commit --amend)

### Unstaging a file
- (git reset HEAD index.html)

# Learning Git Branching
 - Fun interactive tutorial - I need to spend more time here