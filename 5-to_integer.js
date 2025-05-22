const args = process.argv.slice(2);

if (!args[0]) {
  console.log('Not a number');
} else {
  const num = parseInt(args[0], 10);

  if (isNaN(num)) {
    console.log('Not a number');
  } else {
    console.log(`My number: ${num}`);
  }
}