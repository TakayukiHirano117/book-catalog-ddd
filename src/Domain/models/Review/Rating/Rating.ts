import { ValueObject } from '../../shared/ValueObject';

type RatingValue = number;
export class Rating extends ValueObject<RatingValue, "Rating"> {
  // このクラスで使う定数で、インスタンス化する必要がないのでstaticで定義する
  static readonly MAX = 5;
  static readonly MIN = 1;

  // tsはクラス内のメソッドの定義時はfunctionをつけない。publicなので省略
  constructor(value: RatingValue) {
    // 親クラスのconstructorを呼び出す
    super(value);
  }

  // 親クラスのvalidateをオーバーライドして独自のバリデーションを行う
  protected validate(value: RatingValue): void {
    if (!Number.isInteger(value)) {
      throw new Error('評価は整数値でなければなりません');
    }

    if (value < Rating.MIN || value > Rating.MAX) {
      throw new Error(`評価は${Rating.MIN}から${Rating.MAX}までの整数値でなければなりません`);
    }
  }

  /**
   * @returns 品質の評価計数を返す
   */
  getQualityFactor(): number {
    return (this._value - Rating.MIN) / (Rating.MAX - Rating.MIN);
  }
}