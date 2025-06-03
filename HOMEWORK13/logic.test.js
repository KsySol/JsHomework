//task 1
const { add } = require('./logic.js');

describe('Test adding func', () => {
  test('Test 0.2 + 0.3 = 0.5', () => {
    expect(add(0.2, 0.3)).toBe(0.5);
  });
});

//task 2
const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];
describe('test array', () => {
  test('1. є в масиві елемент “admin”', () => {
    expect(userList).toContain('admin');
  });

  test('2. перший елемент в масиві  “Nick”', () => {
    expect(userList[0]).toBe('Nick');
  });

  test('3. останній елемент в масиві  “new_user_2”', () => {
    expect(userList[userList.length - 1]).toBe('new_user_2');
  });

  test('4. довжина масиву дорівнює 5”', () => {
    expect(userList).toHaveLength(5);
  });

  test('5. 3-ій елемент масиву має тип string', () => {
    expect(typeof userList[2]).toBe('string');
  });
  test('6. 8-го елементу масиву немає', () => {
    expect(userList[7]).toBeUndefined();
  });
});

//task 3

const { getCircleLength, getCircleArea } = require('./calcCircle.js');

describe('test circle', () => {
  test('довжина кола radius 22 = 138.2', () => {
    expect(getCircleLength(22)).toBeCloseTo(138.2, 1);
  });

  test('площа кола radius 9 = 254.47', () => {
    expect(getCircleArea(9)).toBeCloseTo(254.47, 2);
  });

  test('без аргументів', () => {
    expect(getCircleLength()).toBeNaN();
    expect(getCircleArea()).toBeNaN();
  });
});

//task 4
const { filterFoodPrice } = require('./food.js');

const food = [
  { kind: 'potato', price: 10 },
  { kind: 'bred', price: 16 },
  { kind: 'pepper', price: 27 },
  { kind: 'banana', price: 32 },
  { kind: 'lemon', price: 50 },
];
describe('food.test.js file test', () => {
  test('1. довжина = 3', () => {
    const filtered = filterFoodPrice(food, 12, 40);
    const sorted = filtered.sort((a, b) => a.price - b.price);
    expect(sorted).toHaveLength(3);
  });

  test("2. містить об’єкт { kind: 'pepper', price: 27 ", () => {
    const sorted = filterFoodPrice(food, 12, 40).sort(
      (a, b) => a.price - b.price
    );
    expect(
      sorted.some(item => item.kind === 'pepper' && item.price === 27)
    ).toBe(true);
  });

  test("3. містить об’єкт { kind: 'pepper', price: 27 ", () => {
    const sorted = filterFoodPrice(food, 12, 40).sort(
      (a, b) => a.price - b.price
    );
    expect(sorted).toEqual(expect.arrayContaining([food[1], food[2], food[3]]));
  });

  test('4. price 1-го елемента відсортованого масиву більше ніж min', () => {
    const min = 12;
    const sorted = filterFoodPrice(food, min, 40).sort(
      (a, b) => a.price - b.price
    );
    expect(sorted[0].price).toBeGreaterThan(min);
  });

  test('5. price 3-го елемента відсортованого масиву менше ніж max', () => {
    const max = 40;
    const sorted = filterFoodPrice(food, 12, max).sort(
      (a, b) => a.price - b.price
    );
    expect(sorted[2].price).toBeLessThan(max);
  });

  test('6. відсортований масив не містить { kind: "lemon", price: 50 }', () => {
    const sorted = filterFoodPrice(food, 12, 40).sort(
      (a, b) => a.price - b.price
    );
    expect(
      sorted.some(item => item.kind === 'lemon' && item.price === 50)
    ).toBe(false);
  });

  test('all values within [min, max]', () => {
    const min = 12;
    const max = 40;
    const filtered = filterFoodPrice(food, min, max);
    expect(filtered.every(item => item.price >= min && item.price <= max)).toBe(
      true
    );
  });

  test('empty input array', () => {
    expect(filterFoodPrice([], 12, 40)).toEqual([]);
  });

  test('negative values', () => {
    expect(filterFoodPrice(food, -10, -1)).toEqual([]);
  });
});
