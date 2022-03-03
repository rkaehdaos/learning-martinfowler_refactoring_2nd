let customerData = {
    "1920": {
        name: "마틴 파울러",
        id: "1920",
        usages: {
            "2016": {
                "1": 50,
                "2": 55,
                "3": 57,
            },
            "2017": {
                "1": 60,
                "2": 65,
                "3": 67,
            },

        },
    },
    "36873": {
        name: "닐 포드",
        id: "36873",
        usages: {
            "2016": {
                "1": 150,
                "2": 155,
                "3": 157,
            },
            "2017": {
                "1": 160,
                "2": 165,
                "3": 167,
            },

        },
    },
};

function getRawDataOfCustomers() { return customerData; }

export {customerData,getRawDataOfCustomers};