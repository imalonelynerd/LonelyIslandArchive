npm run build
cd dist
cd assets
sed -i 's/\/images/\/landing\/images/g' *.js 
sed -i 's/\/icons/\/landing\/icons/g' *.js
echo "Done"

