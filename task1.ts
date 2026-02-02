/* eslint-disable @typescript-eslint/no-unused-vars */
// Написать функцию, которая будет высчитывать среднюю сумму чисел значений объекта

type Salaries = Record<string, number | string | null>;

const salaries = {
  alexander: 500,
  elena: 341.3,
  karina: "465",
  anastasia: 480.5,
  diana: 390,
  julia: null,
} as const;

const averageSumOfSalaries = (salaries: Salaries) => {
  let sumOfSalaries = 0;
  let salariesCount = 0;
  for (const salaryKey in salaries) {
    const salary = salaries[salaryKey];
    if (salary != null) {
      sumOfSalaries += Number.parseFloat(salary.toString());
      salariesCount++;
    }
  }
  if (salariesCount > 0) {
    return sumOfSalaries / salariesCount;
  }
  return 0;
};

console.log(averageSumOfSalaries(salaries));
