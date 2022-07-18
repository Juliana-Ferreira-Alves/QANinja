…or create a new repository on the command line

echo "# buger-eats-cypress" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M branch
git remote add origin git@github.com:Juliana-Ferreira-Alves/buger-eats-cypress.git
git push -u origin branch

…or push an existing repository from the command line

git remote add origin git@github.com:Juliana-Ferreira-Alves/buger-eats-cypress.git
git branch -M branch
git push -u origin branch

…or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.