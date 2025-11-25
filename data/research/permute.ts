// permute.ts

// Read command-line args
const [ , , rawA, rawB ] = process.argv;

if (!rawA || !rawB) {
  console.error("Usage: bun permute.ts \"a,b,c\" \"x,y,z\"");
  process.exit(1);
}

// Split each by comma
const listA = rawA.split(',');
const listB = rawB.split(',');

// Generate concatenations of each from listA + each from listB
const results: string[] = [];
for (const a of listA) {
  for (const b of listB) {
    results.push(a + b);
  }
}

// Print JSON array
console.log(JSON.stringify(results));
