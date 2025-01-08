# JavaScript Bug: Incorrect Handling of Falsy Values

This repository demonstrates a common JavaScript bug related to the incorrect handling of falsy values in function parameters. The function `foo` intends to add two numbers but fails to correctly handle falsy values such as `false`, `''`, or `NaN`.

## Bug Description
The original implementation checks only for strict equality (`===`) with 0.  This will fail to correctly handle other falsy values in JavaScript. These values evaluate to false in a boolean context.  When an operation attempts to add such values, it results in NaN (Not a Number).

## Bug Solution
The provided solution addresses this issue by explicitly checking for falsy values using loose equality (`==`) or by explicitly checking against the possible falsy values which could lead to a more robust function.

## How to reproduce
1. Clone this repository.
2. Run `node bug.js`. Observe the unexpected `NaN` results.
3. Run `node bugSolution.js`. Observe the corrected behavior.

## License
MIT