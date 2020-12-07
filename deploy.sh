echo "I am deploying"

cd build
aws s3 cp index.html s3://evolve.foostack.org/
aws s3 cp precache-manifest.*.js s3://evolve.foostack.org/
aws s3 cp static s3://evolve.foostack.org/static --recursive

echo "I am done"
