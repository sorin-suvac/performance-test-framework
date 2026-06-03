import mixedWorkload from "./mixed-workload.js";

export const options = {
    scenarios: {
        spike: {
            executor: "ramping-vus",
            startVUs: 10,
            stages: [
                { duration: "1m", target: 50 },
                { duration: "30s", target: 1000 },
                { duration: "1m", target: 50 }
            ]
        }
    }
};

export default mixedWorkload;
