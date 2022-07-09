import { add } from "./add";

describe("Add Tests", () => {
    it("should pass", () => {
        expect(true);
    });

    it("should return the sum of 1 and 2", () => {
        const nums = ["1", "2"];
        const total = add(nums);

        expect(total).toBe("3");
    });

    it("should return the sum of -1 and -2", () => {
        const nums = ["-1", "-2"];
        const total = add(nums);

        expect(total).toBe("-3");
    });

    it("should return the sum of 1.1 and 2.2", () => {
        const nums = ["1.1", "2.2"];
        const total = add(nums);

        expect(total).toBe("3.3");
    });

    it("should return the sum of -1.1 and -2.2", () => {
        const nums = ["-1.1", "-2.2"];
        const total = add(nums);

        expect(total).toBe("-3.3");
    });

    it("should return the sum of 1, 2, and 3", () => {
        const nums = ["1", "2", "3"];
        const total = add(nums);

        expect(total).toBe("6");
    });

    it("should return the sum of 1.1, 2.2, and 3.3", () => {
        const nums = ["1.1", "2.2", "3.3"];
        const total = add(nums);

        expect(total).toBe("6.6");
    });
});
