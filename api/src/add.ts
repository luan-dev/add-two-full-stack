import bigDecimal from "js-big-decimal";

/**
 * Calculates sum of all numbers in an array
 *
 * @param nums array of numbers to add
 * @returns the total of all nums in a string
 */
export const add = (nums: string[]) => {
    let total = new bigDecimal(0);

    nums.forEach((num) => {
        total = total.add(new bigDecimal(num));
    });

    return total.getValue();
};
