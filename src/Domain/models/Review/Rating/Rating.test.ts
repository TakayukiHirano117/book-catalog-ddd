import { Rating } from './Rating';

describe('Rating', () => {
  // 正常系
  test("有効な値を持つRatingを作成できる", () => {
    expect(new Rating(1).value).toBe(1)
    expect(new Rating(3).value).toBe(3)
    expect(new Rating(5).value).toBe(5)
  })

  test("equals", () => {
    const rating1 = new Rating(3);
    const rating2 = new Rating(3);
    const rating3 = new Rating(4);

    expect(rating1.equals(rating2)).toBeTruthy();
    expect(rating1.equals(rating3)).toBeFalsy();
  })

  test("getQualityFactor", () => {
    const rating1 = new Rating(1);
    const rating2 = new Rating(3);
    const rating3 = new Rating(5);

    expect(rating1.getQualityFactor()).toBe(0);
    expect(rating2.getQualityFactor()).toBe(0.5);
    expect(rating3.getQualityFactor()).toBe(1);
  })

  // 異常系
  test("最小値未満の値でRatingを生成するとエラーを投げる", () => {
    expect(() => new Rating(0)).toThrow('評価は1から5までの整数値でなければなりません');
  })
  test("最大値を超える値でRatingを生成するとエラーを投げる", () => {
    expect(() => new Rating(6)).toThrow('評価は1から5までの整数値でなければなりません');
  })
  test("小数値でRatingを生成するとエラーを投げる", () => {
    expect(() => new Rating(3.5)).toThrow('評価は整数値でなければなりません');
  })
})
