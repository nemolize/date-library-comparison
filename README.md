This repository is `Deprecated`. You should see the following repository to get detailed date library comparison.

[You-Dont-Need-Momentjs](https://github.com/you-dont-need/You-Dont-Need-Momentjs)

# Date library comparison

Performance benchmarks between the following libraries.
- `moment`
- `dayjs`
- `Date` (JavaScript intrinsic)

The benchmark measures each of the following operations.
- Instantiation from date string
- Formatting
- Add/Subtract

## Reference result on MacBook Pro 15-inch, 2018 (2.6GHz i7)
|            | moment|dayjs|date|
|------------|-------|-----|----|
|     Parsing|  114ms| 14ms| 3ms|
|  Formatting|   16ms| 39ms|10ms|
|Add/Subtract|   35ms| 34ms| 2ms|

You can preview this repository on [CodeSandbox live editor](https://codesandbox.io/s/github/nemolize/date-library-comparison)
