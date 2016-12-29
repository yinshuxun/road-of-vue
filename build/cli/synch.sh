#get push message
set -e
echo "Enter message: "
read MESSAGE

#compile and publish to github.io
yarn compile:prd
cp -rf ./dist/  ../../yinshuxun.github.io/road-of-vue

#push road-of-vue
echo "Pushing $MESSAGE ..."
# commit
git add -A
git commit -m "$MESSAGE"

# push
git push

# push github.io
cd ../../yinshuxun.github.io/road-of-vue
git add -A
git commit -m "$MESSAGE"

# push
git push



