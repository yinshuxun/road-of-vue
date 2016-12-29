#compile and publish to github.io
yarn compile:prd
cp -rf ./dist/  ../../yinshuxun.github.io/road-of-vue

#run push
./push.sh

# commit github.io
cd ../../yinshuxun.github.io/road-of-vue
git add -A
git commit -m "$MESSAGE"

# push
git push



