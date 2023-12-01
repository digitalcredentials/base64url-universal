import PackageJson from '@npmcli/package-json';

// post-test script
const main = async () => {
  console.log('running post-test');
  const pkgJson = await PackageJson.load('./');
  pkgJson.update({ type: undefined });
  await pkgJson.save();
  console.log('completed post-test');
};

// run post-test script
main();
