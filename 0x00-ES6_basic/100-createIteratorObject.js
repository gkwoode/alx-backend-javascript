const report = createReportObject(/* ... */);
const iterator = createIteratorObject(report);

let result = iterator.next();
while (!result.done) {
  const employee = result.value;
  console.log(employee);
  result = iterator.next();
}