import mixedWorkload from "./mixed-workload.js";

export const options = {
    scenarios: {
        soak: {
            executor: "constant-vus",
            vus: 100,
            duration: "4h"
        }
    }
};

export default mixedWorkload;
