set -e
echo "Enter message: "
read MESSAGE

echo "Pushing $MESSAGE ..."

# commit
git add -A
git commit -m "$MESSAGE"

# push
git push

#compile and publish to github.io
yarn compile:prd

cp -f ./dist  ../../yinshuxun.github.io/road-of-vue

