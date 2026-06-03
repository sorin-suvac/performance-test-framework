import mixedWorkload from "./mixed-workload.js";

export const options = {
    scenarios: {
        stress: {
            executor: "ramping-vus",
            startVUs: 10,
            stages: [
                { duration: "2m", target: 100 },
                { duration: "5m", target: 300 },
                { duration: "5m", target: 500 },
                { duration: "5m", target: 1000 }
            ]
        }
    }
};

export default mixedWorkload;
