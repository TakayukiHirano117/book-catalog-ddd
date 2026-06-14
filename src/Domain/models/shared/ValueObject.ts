import isEqual from 'lodash/isEqual';

export abstract class ValueObject<T, U> {
  // @ts-expect-error
  // TSは構造的型付けを行うので、構造が同じだとクラスとして同じと認識してしまう。
  // それを防ぐためにどこからも参照されないメンバ変数を定義する。
  private _type: U;
  protected readonly _value: T;

  constructor(value: T) {
    this.validate(value);
    this._value = value;
  }

  protected abstract validate(value: T): void

  // getterメソッド。インスタンス.valueのようにするとメソッド呼び出しとは異なり()なしで_valueを参照できる
  get value(): T {
    return this._value;
  }

  equals(other: ValueObject<T, U>): boolean {
    return isEqual(this._value, other._value);
  }
}
