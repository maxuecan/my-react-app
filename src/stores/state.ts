export interface CountState {
    count: number;
    str: string;
    bol: boolean;

    n_arr: number[];
    n1_arr: Array<number>;
    str_arr: string[];
    str1_arr: Array<string>;
    bol_arr: boolean[];
    bol1_arr: Array<boolean>;

    tuple1: [
        number, 
        string, 
        boolean, 
        number[], 
        string[], 
        boolean[], 
        Array<number>,
        Array<string>,
        Array<boolean>
    ],

    color: Color,

    obj: Object
}

export interface TestState {
    test_name: string
}

export interface CombinedState {
    count: CountState,
    test: TestState
}

// 枚举类型
enum Color { Read, Green, Blue }
// any
// void
// null
// undefined
