import {scenarios} from "./scenarios/index.js";

const TEST_TYPE = __ENV.TEST || "smoke";

const selected = scenarios[TEST_TYPE];

if (!selected) {
    throw new Error(
        `Unknown TEST: ${TEST_TYPE}. Available: ${Object.keys(scenarios)}`
    );
}

console.log(`Running test: ${TEST_TYPE}`);

export const options = selected.options;
export default function () {
    return selected();
}
