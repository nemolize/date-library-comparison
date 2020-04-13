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

You can see result of this benchmark on your machine [here](https://codesandbox.io/s/github/nemolize/date-library-comparison)
