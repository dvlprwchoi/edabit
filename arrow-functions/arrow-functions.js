// add2 = (x) => x + 2;
// add3 = (x) => x + 3;
// add5 = (x) => x + 5;
// add7 = (x) => x + 7;
// add11 = (x) => x + 11;

[2, 3, 5, 7, 11].forEach((n) => (global['add' + n] = (v) => n + v));

[2, 3, 5, 7, 11].forEach((n) => (this[`add${n}`] = (x) => x + n));

[2, 3, 5, 7, 11].map((n) => eval(`add${n} = x => x + n`));
