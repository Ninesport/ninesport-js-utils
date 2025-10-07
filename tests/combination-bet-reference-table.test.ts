import { getCombinationBetReferenceTable } from "../src/combination-bet"

const expectedData = [
    {
        "FoldSize": 3,
        "Options": [
            {
                "ID": 3,
                "FoldSize": 3,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 3,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 4,
                "FoldSize": 3,
                "CombinationCount": 3,
                "Parameters": [
                    {
                        "FoldSize": 3,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 5,
                "FoldSize": 3,
                "CombinationCount": 3,
                "Parameters": [
                    {
                        "FoldSize": 3,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 6,
                "FoldSize": 3,
                "CombinationCount": 6,
                "Parameters": [
                    {
                        "FoldSize": 3,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 3,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 4,
        "Options": [
            {
                "ID": 7,
                "FoldSize": 4,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 4,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 8,
                "FoldSize": 4,
                "CombinationCount": 6,
                "Parameters": [
                    {
                        "FoldSize": 4,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 9,
                "FoldSize": 4,
                "CombinationCount": 4,
                "Parameters": [
                    {
                        "FoldSize": 4,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 10,
                "FoldSize": 4,
                "CombinationCount": 10,
                "Parameters": [
                    {
                        "FoldSize": 4,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 4,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 11,
                "FoldSize": 4,
                "CombinationCount": 14,
                "Parameters": [
                    {
                        "FoldSize": 4,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 4,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 4,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 5,
        "Options": [
            {
                "ID": 12,
                "FoldSize": 5,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 13,
                "FoldSize": 5,
                "CombinationCount": 10,
                "Parameters": [
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 14,
                "FoldSize": 5,
                "CombinationCount": 10,
                "Parameters": [
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 15,
                "FoldSize": 5,
                "CombinationCount": 5,
                "Parameters": [
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 16,
                "FoldSize": 5,
                "CombinationCount": 25,
                "Parameters": [
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 17,
                "FoldSize": 5,
                "CombinationCount": 30,
                "Parameters": [
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 5,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 6,
        "Options": [
            {
                "ID": 18,
                "FoldSize": 6,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 19,
                "FoldSize": 6,
                "CombinationCount": 15,
                "Parameters": [
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 20,
                "FoldSize": 6,
                "CombinationCount": 20,
                "Parameters": [
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 21,
                "FoldSize": 6,
                "CombinationCount": 15,
                "Parameters": [
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 22,
                "FoldSize": 6,
                "CombinationCount": 6,
                "Parameters": [
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 23,
                "FoldSize": 6,
                "CombinationCount": 56,
                "Parameters": [
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 24,
                "FoldSize": 6,
                "CombinationCount": 62,
                "Parameters": [
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 6,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 7,
        "Options": [
            {
                "ID": 25,
                "FoldSize": 7,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 26,
                "FoldSize": 7,
                "CombinationCount": 21,
                "Parameters": [
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 27,
                "FoldSize": 7,
                "CombinationCount": 35,
                "Parameters": [
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 28,
                "FoldSize": 7,
                "CombinationCount": 35,
                "Parameters": [
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 29,
                "FoldSize": 7,
                "CombinationCount": 21,
                "Parameters": [
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 30,
                "FoldSize": 7,
                "CombinationCount": 7,
                "Parameters": [
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 31,
                "FoldSize": 7,
                "CombinationCount": 119,
                "Parameters": [
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 32,
                "FoldSize": 7,
                "CombinationCount": 126,
                "Parameters": [
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 7,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 8,
        "Options": [
            {
                "ID": 33,
                "FoldSize": 8,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 34,
                "FoldSize": 8,
                "CombinationCount": 28,
                "Parameters": [
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 35,
                "FoldSize": 8,
                "CombinationCount": 56,
                "Parameters": [
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 36,
                "FoldSize": 8,
                "CombinationCount": 70,
                "Parameters": [
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 37,
                "FoldSize": 8,
                "CombinationCount": 56,
                "Parameters": [
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 38,
                "FoldSize": 8,
                "CombinationCount": 28,
                "Parameters": [
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 39,
                "FoldSize": 8,
                "CombinationCount": 8,
                "Parameters": [
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 40,
                "FoldSize": 8,
                "CombinationCount": 246,
                "Parameters": [
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 41,
                "FoldSize": 8,
                "CombinationCount": 254,
                "Parameters": [
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 8,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 9,
        "Options": [
            {
                "ID": 42,
                "FoldSize": 9,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 43,
                "FoldSize": 9,
                "CombinationCount": 36,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 44,
                "FoldSize": 9,
                "CombinationCount": 84,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 45,
                "FoldSize": 9,
                "CombinationCount": 126,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 46,
                "FoldSize": 9,
                "CombinationCount": 126,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 47,
                "FoldSize": 9,
                "CombinationCount": 84,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 48,
                "FoldSize": 9,
                "CombinationCount": 36,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 49,
                "FoldSize": 9,
                "CombinationCount": 9,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 50,
                "FoldSize": 9,
                "CombinationCount": 501,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 51,
                "FoldSize": 9,
                "CombinationCount": 510,
                "Parameters": [
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 9,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 10,
        "Options": [
            {
                "ID": 52,
                "FoldSize": 10,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 53,
                "FoldSize": 10,
                "CombinationCount": 45,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 54,
                "FoldSize": 10,
                "CombinationCount": 120,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 55,
                "FoldSize": 10,
                "CombinationCount": 210,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 56,
                "FoldSize": 10,
                "CombinationCount": 252,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 57,
                "FoldSize": 10,
                "CombinationCount": 210,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 58,
                "FoldSize": 10,
                "CombinationCount": 120,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 59,
                "FoldSize": 10,
                "CombinationCount": 45,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 60,
                "FoldSize": 10,
                "CombinationCount": 10,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 61,
                "FoldSize": 10,
                "CombinationCount": 1012,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 62,
                "FoldSize": 10,
                "CombinationCount": 1022,
                "Parameters": [
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 10,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 11,
        "Options": [
            {
                "ID": 63,
                "FoldSize": 11,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 64,
                "FoldSize": 11,
                "CombinationCount": 55,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 65,
                "FoldSize": 11,
                "CombinationCount": 165,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 66,
                "FoldSize": 11,
                "CombinationCount": 330,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 67,
                "FoldSize": 11,
                "CombinationCount": 462,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 68,
                "FoldSize": 11,
                "CombinationCount": 462,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 69,
                "FoldSize": 11,
                "CombinationCount": 330,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 70,
                "FoldSize": 11,
                "CombinationCount": 165,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 71,
                "FoldSize": 11,
                "CombinationCount": 55,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 72,
                "FoldSize": 11,
                "CombinationCount": 11,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 73,
                "FoldSize": 11,
                "CombinationCount": 2035,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 74,
                "FoldSize": 11,
                "CombinationCount": 2046,
                "Parameters": [
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 11,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 12,
        "Options": [
            {
                "ID": 75,
                "FoldSize": 12,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 76,
                "FoldSize": 12,
                "CombinationCount": 66,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 77,
                "FoldSize": 12,
                "CombinationCount": 220,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 78,
                "FoldSize": 12,
                "CombinationCount": 495,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 79,
                "FoldSize": 12,
                "CombinationCount": 792,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 80,
                "FoldSize": 12,
                "CombinationCount": 924,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 81,
                "FoldSize": 12,
                "CombinationCount": 792,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 82,
                "FoldSize": 12,
                "CombinationCount": 495,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 83,
                "FoldSize": 12,
                "CombinationCount": 220,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 84,
                "FoldSize": 12,
                "CombinationCount": 66,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 85,
                "FoldSize": 12,
                "CombinationCount": 12,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 86,
                "FoldSize": 12,
                "CombinationCount": 4082,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 87,
                "FoldSize": 12,
                "CombinationCount": 4094,
                "Parameters": [
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 12,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 13,
        "Options": [
            {
                "ID": 88,
                "FoldSize": 13,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 89,
                "FoldSize": 13,
                "CombinationCount": 78,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 90,
                "FoldSize": 13,
                "CombinationCount": 286,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 91,
                "FoldSize": 13,
                "CombinationCount": 715,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 92,
                "FoldSize": 13,
                "CombinationCount": 1287,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 93,
                "FoldSize": 13,
                "CombinationCount": 1716,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 94,
                "FoldSize": 13,
                "CombinationCount": 1716,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 95,
                "FoldSize": 13,
                "CombinationCount": 1287,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 96,
                "FoldSize": 13,
                "CombinationCount": 715,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 97,
                "FoldSize": 13,
                "CombinationCount": 286,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 98,
                "FoldSize": 13,
                "CombinationCount": 78,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 99,
                "FoldSize": 13,
                "CombinationCount": 13,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 100,
                "FoldSize": 13,
                "CombinationCount": 8177,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 101,
                "FoldSize": 13,
                "CombinationCount": 8190,
                "Parameters": [
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 13,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 14,
        "Options": [
            {
                "ID": 102,
                "FoldSize": 14,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 103,
                "FoldSize": 14,
                "CombinationCount": 91,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 104,
                "FoldSize": 14,
                "CombinationCount": 364,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 105,
                "FoldSize": 14,
                "CombinationCount": 1001,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 106,
                "FoldSize": 14,
                "CombinationCount": 2002,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 107,
                "FoldSize": 14,
                "CombinationCount": 3003,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 108,
                "FoldSize": 14,
                "CombinationCount": 3432,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 109,
                "FoldSize": 14,
                "CombinationCount": 3003,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 110,
                "FoldSize": 14,
                "CombinationCount": 2002,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 111,
                "FoldSize": 14,
                "CombinationCount": 1001,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 112,
                "FoldSize": 14,
                "CombinationCount": 364,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 113,
                "FoldSize": 14,
                "CombinationCount": 91,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 114,
                "FoldSize": 14,
                "CombinationCount": 14,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 115,
                "FoldSize": 14,
                "CombinationCount": 16368,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 116,
                "FoldSize": 14,
                "CombinationCount": 16382,
                "Parameters": [
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 14,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 15,
        "Options": [
            {
                "ID": 117,
                "FoldSize": 15,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 118,
                "FoldSize": 15,
                "CombinationCount": 105,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 119,
                "FoldSize": 15,
                "CombinationCount": 455,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 120,
                "FoldSize": 15,
                "CombinationCount": 1365,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 121,
                "FoldSize": 15,
                "CombinationCount": 3003,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 122,
                "FoldSize": 15,
                "CombinationCount": 5005,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 123,
                "FoldSize": 15,
                "CombinationCount": 6435,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 124,
                "FoldSize": 15,
                "CombinationCount": 6435,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 125,
                "FoldSize": 15,
                "CombinationCount": 5005,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 126,
                "FoldSize": 15,
                "CombinationCount": 3003,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 127,
                "FoldSize": 15,
                "CombinationCount": 1365,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 128,
                "FoldSize": 15,
                "CombinationCount": 455,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 129,
                "FoldSize": 15,
                "CombinationCount": 105,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 130,
                "FoldSize": 15,
                "CombinationCount": 15,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 131,
                "FoldSize": 15,
                "CombinationCount": 32751,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 132,
                "FoldSize": 15,
                "CombinationCount": 32766,
                "Parameters": [
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 15,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 16,
        "Options": [
            {
                "ID": 133,
                "FoldSize": 16,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 134,
                "FoldSize": 16,
                "CombinationCount": 120,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 135,
                "FoldSize": 16,
                "CombinationCount": 560,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 136,
                "FoldSize": 16,
                "CombinationCount": 1820,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 137,
                "FoldSize": 16,
                "CombinationCount": 4368,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 138,
                "FoldSize": 16,
                "CombinationCount": 8008,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 139,
                "FoldSize": 16,
                "CombinationCount": 11440,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 140,
                "FoldSize": 16,
                "CombinationCount": 12870,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 141,
                "FoldSize": 16,
                "CombinationCount": 11440,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 142,
                "FoldSize": 16,
                "CombinationCount": 8008,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 143,
                "FoldSize": 16,
                "CombinationCount": 4368,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 144,
                "FoldSize": 16,
                "CombinationCount": 1820,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 145,
                "FoldSize": 16,
                "CombinationCount": 560,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 146,
                "FoldSize": 16,
                "CombinationCount": 120,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 147,
                "FoldSize": 16,
                "CombinationCount": 16,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 148,
                "FoldSize": 16,
                "CombinationCount": 65518,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 149,
                "FoldSize": 16,
                "CombinationCount": 65534,
                "Parameters": [
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 16,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 17,
        "Options": [
            {
                "ID": 150,
                "FoldSize": 17,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 151,
                "FoldSize": 17,
                "CombinationCount": 136,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 152,
                "FoldSize": 17,
                "CombinationCount": 680,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 153,
                "FoldSize": 17,
                "CombinationCount": 2380,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 154,
                "FoldSize": 17,
                "CombinationCount": 6188,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 155,
                "FoldSize": 17,
                "CombinationCount": 12376,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 156,
                "FoldSize": 17,
                "CombinationCount": 19448,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 157,
                "FoldSize": 17,
                "CombinationCount": 24310,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 158,
                "FoldSize": 17,
                "CombinationCount": 24310,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 159,
                "FoldSize": 17,
                "CombinationCount": 19448,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 160,
                "FoldSize": 17,
                "CombinationCount": 12376,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 161,
                "FoldSize": 17,
                "CombinationCount": 6188,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 162,
                "FoldSize": 17,
                "CombinationCount": 2380,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 163,
                "FoldSize": 17,
                "CombinationCount": 680,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 164,
                "FoldSize": 17,
                "CombinationCount": 136,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 165,
                "FoldSize": 17,
                "CombinationCount": 17,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 166,
                "FoldSize": 17,
                "CombinationCount": 131053,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 167,
                "FoldSize": 17,
                "CombinationCount": 131070,
                "Parameters": [
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 17,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 18,
        "Options": [
            {
                "ID": 168,
                "FoldSize": 18,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 169,
                "FoldSize": 18,
                "CombinationCount": 153,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 170,
                "FoldSize": 18,
                "CombinationCount": 816,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 171,
                "FoldSize": 18,
                "CombinationCount": 3060,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 172,
                "FoldSize": 18,
                "CombinationCount": 8568,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 173,
                "FoldSize": 18,
                "CombinationCount": 18564,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 174,
                "FoldSize": 18,
                "CombinationCount": 31824,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 175,
                "FoldSize": 18,
                "CombinationCount": 43758,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 176,
                "FoldSize": 18,
                "CombinationCount": 48620,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 177,
                "FoldSize": 18,
                "CombinationCount": 43758,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 178,
                "FoldSize": 18,
                "CombinationCount": 31824,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 179,
                "FoldSize": 18,
                "CombinationCount": 18564,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 180,
                "FoldSize": 18,
                "CombinationCount": 8568,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 181,
                "FoldSize": 18,
                "CombinationCount": 3060,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 182,
                "FoldSize": 18,
                "CombinationCount": 816,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 183,
                "FoldSize": 18,
                "CombinationCount": 153,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 184,
                "FoldSize": 18,
                "CombinationCount": 18,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 185,
                "FoldSize": 18,
                "CombinationCount": 262124,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 186,
                "FoldSize": 18,
                "CombinationCount": 262142,
                "Parameters": [
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 18,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 19,
        "Options": [
            {
                "ID": 187,
                "FoldSize": 19,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 188,
                "FoldSize": 19,
                "CombinationCount": 171,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 189,
                "FoldSize": 19,
                "CombinationCount": 969,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 190,
                "FoldSize": 19,
                "CombinationCount": 3876,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 191,
                "FoldSize": 19,
                "CombinationCount": 11628,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 192,
                "FoldSize": 19,
                "CombinationCount": 27132,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 193,
                "FoldSize": 19,
                "CombinationCount": 50388,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 194,
                "FoldSize": 19,
                "CombinationCount": 75582,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 195,
                "FoldSize": 19,
                "CombinationCount": 92378,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 196,
                "FoldSize": 19,
                "CombinationCount": 92378,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 197,
                "FoldSize": 19,
                "CombinationCount": 75582,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 198,
                "FoldSize": 19,
                "CombinationCount": 50388,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 199,
                "FoldSize": 19,
                "CombinationCount": 27132,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 200,
                "FoldSize": 19,
                "CombinationCount": 11628,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 201,
                "FoldSize": 19,
                "CombinationCount": 3876,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 202,
                "FoldSize": 19,
                "CombinationCount": 969,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 203,
                "FoldSize": 19,
                "CombinationCount": 171,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 204,
                "FoldSize": 19,
                "CombinationCount": 19,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 205,
                "FoldSize": 19,
                "CombinationCount": 524267,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 206,
                "FoldSize": 19,
                "CombinationCount": 524286,
                "Parameters": [
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 19,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 20,
        "Options": [
            {
                "ID": 207,
                "FoldSize": 20,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 208,
                "FoldSize": 20,
                "CombinationCount": 190,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 209,
                "FoldSize": 20,
                "CombinationCount": 1140,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 210,
                "FoldSize": 20,
                "CombinationCount": 4845,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 211,
                "FoldSize": 20,
                "CombinationCount": 15504,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 212,
                "FoldSize": 20,
                "CombinationCount": 38760,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 213,
                "FoldSize": 20,
                "CombinationCount": 77520,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 214,
                "FoldSize": 20,
                "CombinationCount": 125970,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 215,
                "FoldSize": 20,
                "CombinationCount": 167960,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 216,
                "FoldSize": 20,
                "CombinationCount": 184756,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 217,
                "FoldSize": 20,
                "CombinationCount": 167960,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 218,
                "FoldSize": 20,
                "CombinationCount": 125970,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 219,
                "FoldSize": 20,
                "CombinationCount": 77520,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 220,
                "FoldSize": 20,
                "CombinationCount": 38760,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 221,
                "FoldSize": 20,
                "CombinationCount": 15504,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 222,
                "FoldSize": 20,
                "CombinationCount": 4845,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 223,
                "FoldSize": 20,
                "CombinationCount": 1140,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 224,
                "FoldSize": 20,
                "CombinationCount": 190,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 225,
                "FoldSize": 20,
                "CombinationCount": 20,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 226,
                "FoldSize": 20,
                "CombinationCount": 1048554,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 227,
                "FoldSize": 20,
                "CombinationCount": 1048574,
                "Parameters": [
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 20,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 21,
        "Options": [
            {
                "ID": 228,
                "FoldSize": 21,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 229,
                "FoldSize": 21,
                "CombinationCount": 210,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 230,
                "FoldSize": 21,
                "CombinationCount": 1330,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 231,
                "FoldSize": 21,
                "CombinationCount": 5985,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 232,
                "FoldSize": 21,
                "CombinationCount": 20349,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 233,
                "FoldSize": 21,
                "CombinationCount": 54264,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 234,
                "FoldSize": 21,
                "CombinationCount": 116280,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 235,
                "FoldSize": 21,
                "CombinationCount": 203490,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 236,
                "FoldSize": 21,
                "CombinationCount": 293930,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 237,
                "FoldSize": 21,
                "CombinationCount": 352716,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 238,
                "FoldSize": 21,
                "CombinationCount": 352716,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 239,
                "FoldSize": 21,
                "CombinationCount": 293930,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 240,
                "FoldSize": 21,
                "CombinationCount": 203490,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 241,
                "FoldSize": 21,
                "CombinationCount": 116280,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 242,
                "FoldSize": 21,
                "CombinationCount": 54264,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 243,
                "FoldSize": 21,
                "CombinationCount": 20349,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 244,
                "FoldSize": 21,
                "CombinationCount": 5985,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 245,
                "FoldSize": 21,
                "CombinationCount": 1330,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 246,
                "FoldSize": 21,
                "CombinationCount": 210,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 247,
                "FoldSize": 21,
                "CombinationCount": 21,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 248,
                "FoldSize": 21,
                "CombinationCount": 2097129,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 249,
                "FoldSize": 21,
                "CombinationCount": 2097150,
                "Parameters": [
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 21,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 22,
        "Options": [
            {
                "ID": 250,
                "FoldSize": 22,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 251,
                "FoldSize": 22,
                "CombinationCount": 231,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 252,
                "FoldSize": 22,
                "CombinationCount": 1540,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 253,
                "FoldSize": 22,
                "CombinationCount": 7315,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 254,
                "FoldSize": 22,
                "CombinationCount": 26334,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 255,
                "FoldSize": 22,
                "CombinationCount": 74613,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 256,
                "FoldSize": 22,
                "CombinationCount": 170544,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 257,
                "FoldSize": 22,
                "CombinationCount": 319770,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 258,
                "FoldSize": 22,
                "CombinationCount": 497420,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 259,
                "FoldSize": 22,
                "CombinationCount": 646646,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 260,
                "FoldSize": 22,
                "CombinationCount": 705432,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 261,
                "FoldSize": 22,
                "CombinationCount": 646646,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 262,
                "FoldSize": 22,
                "CombinationCount": 497420,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 263,
                "FoldSize": 22,
                "CombinationCount": 319770,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 264,
                "FoldSize": 22,
                "CombinationCount": 170544,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 265,
                "FoldSize": 22,
                "CombinationCount": 74613,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 266,
                "FoldSize": 22,
                "CombinationCount": 26334,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 267,
                "FoldSize": 22,
                "CombinationCount": 7315,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 268,
                "FoldSize": 22,
                "CombinationCount": 1540,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 269,
                "FoldSize": 22,
                "CombinationCount": 231,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 270,
                "FoldSize": 22,
                "CombinationCount": 22,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 271,
                "FoldSize": 22,
                "CombinationCount": 4194280,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 272,
                "FoldSize": 22,
                "CombinationCount": 4194302,
                "Parameters": [
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 22,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 23,
        "Options": [
            {
                "ID": 273,
                "FoldSize": 23,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 23,
                    },
                ],
            },
            {
                "ID": 274,
                "FoldSize": 23,
                "CombinationCount": 253,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 275,
                "FoldSize": 23,
                "CombinationCount": 1771,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 276,
                "FoldSize": 23,
                "CombinationCount": 8855,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 277,
                "FoldSize": 23,
                "CombinationCount": 33649,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 278,
                "FoldSize": 23,
                "CombinationCount": 100947,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 279,
                "FoldSize": 23,
                "CombinationCount": 245157,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 280,
                "FoldSize": 23,
                "CombinationCount": 490314,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 281,
                "FoldSize": 23,
                "CombinationCount": 817190,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 282,
                "FoldSize": 23,
                "CombinationCount": 1144066,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 283,
                "FoldSize": 23,
                "CombinationCount": 1352078,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 284,
                "FoldSize": 23,
                "CombinationCount": 1352078,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 285,
                "FoldSize": 23,
                "CombinationCount": 1144066,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 286,
                "FoldSize": 23,
                "CombinationCount": 817190,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 287,
                "FoldSize": 23,
                "CombinationCount": 490314,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 288,
                "FoldSize": 23,
                "CombinationCount": 245157,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 289,
                "FoldSize": 23,
                "CombinationCount": 100947,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 290,
                "FoldSize": 23,
                "CombinationCount": 33649,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 291,
                "FoldSize": 23,
                "CombinationCount": 8855,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 292,
                "FoldSize": 23,
                "CombinationCount": 1771,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 293,
                "FoldSize": 23,
                "CombinationCount": 253,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 294,
                "FoldSize": 23,
                "CombinationCount": 23,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 295,
                "FoldSize": 23,
                "CombinationCount": 8388583,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 296,
                "FoldSize": 23,
                "CombinationCount": 8388606,
                "Parameters": [
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 23,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 24,
        "Options": [
            {
                "ID": 297,
                "FoldSize": 24,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 24,
                    },
                ],
            },
            {
                "ID": 298,
                "FoldSize": 24,
                "CombinationCount": 276,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 299,
                "FoldSize": 24,
                "CombinationCount": 2024,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 300,
                "FoldSize": 24,
                "CombinationCount": 10626,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 301,
                "FoldSize": 24,
                "CombinationCount": 42504,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 302,
                "FoldSize": 24,
                "CombinationCount": 134596,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 303,
                "FoldSize": 24,
                "CombinationCount": 346104,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 304,
                "FoldSize": 24,
                "CombinationCount": 735471,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 305,
                "FoldSize": 24,
                "CombinationCount": 1307504,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 306,
                "FoldSize": 24,
                "CombinationCount": 1961256,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 307,
                "FoldSize": 24,
                "CombinationCount": 2496144,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 308,
                "FoldSize": 24,
                "CombinationCount": 2704156,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 309,
                "FoldSize": 24,
                "CombinationCount": 2496144,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 310,
                "FoldSize": 24,
                "CombinationCount": 1961256,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 311,
                "FoldSize": 24,
                "CombinationCount": 1307504,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 312,
                "FoldSize": 24,
                "CombinationCount": 735471,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 313,
                "FoldSize": 24,
                "CombinationCount": 346104,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 314,
                "FoldSize": 24,
                "CombinationCount": 134596,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 315,
                "FoldSize": 24,
                "CombinationCount": 42504,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 316,
                "FoldSize": 24,
                "CombinationCount": 10626,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 317,
                "FoldSize": 24,
                "CombinationCount": 2024,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 318,
                "FoldSize": 24,
                "CombinationCount": 276,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 319,
                "FoldSize": 24,
                "CombinationCount": 24,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 23,
                    },
                ],
            },
            {
                "ID": 320,
                "FoldSize": 24,
                "CombinationCount": 16777190,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 23,
                    },
                ],
            },
            {
                "ID": 321,
                "FoldSize": 24,
                "CombinationCount": 16777214,
                "Parameters": [
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 24,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 25,
        "Options": [
            {
                "ID": 322,
                "FoldSize": 25,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 25,
                    },
                ],
            },
            {
                "ID": 323,
                "FoldSize": 25,
                "CombinationCount": 300,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 324,
                "FoldSize": 25,
                "CombinationCount": 2300,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 325,
                "FoldSize": 25,
                "CombinationCount": 12650,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 326,
                "FoldSize": 25,
                "CombinationCount": 53130,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 327,
                "FoldSize": 25,
                "CombinationCount": 177100,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 328,
                "FoldSize": 25,
                "CombinationCount": 480700,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 329,
                "FoldSize": 25,
                "CombinationCount": 1081575,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 330,
                "FoldSize": 25,
                "CombinationCount": 2042975,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 331,
                "FoldSize": 25,
                "CombinationCount": 3268760,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 332,
                "FoldSize": 25,
                "CombinationCount": 4457400,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 333,
                "FoldSize": 25,
                "CombinationCount": 5200300,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 334,
                "FoldSize": 25,
                "CombinationCount": 5200300,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 335,
                "FoldSize": 25,
                "CombinationCount": 4457400,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 336,
                "FoldSize": 25,
                "CombinationCount": 3268760,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 337,
                "FoldSize": 25,
                "CombinationCount": 2042975,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 338,
                "FoldSize": 25,
                "CombinationCount": 1081575,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 339,
                "FoldSize": 25,
                "CombinationCount": 480700,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 340,
                "FoldSize": 25,
                "CombinationCount": 177100,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 341,
                "FoldSize": 25,
                "CombinationCount": 53130,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 342,
                "FoldSize": 25,
                "CombinationCount": 12650,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 343,
                "FoldSize": 25,
                "CombinationCount": 2300,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 344,
                "FoldSize": 25,
                "CombinationCount": 300,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 23,
                    },
                ],
            },
            {
                "ID": 345,
                "FoldSize": 25,
                "CombinationCount": 25,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 24,
                    },
                ],
            },
            {
                "ID": 346,
                "FoldSize": 25,
                "CombinationCount": 33554405,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 24,
                    },
                ],
            },
            {
                "ID": 347,
                "FoldSize": 25,
                "CombinationCount": 33554430,
                "Parameters": [
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 25,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 26,
        "Options": [
            {
                "ID": 348,
                "FoldSize": 26,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 26,
                    },
                ],
            },
            {
                "ID": 349,
                "FoldSize": 26,
                "CombinationCount": 325,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 350,
                "FoldSize": 26,
                "CombinationCount": 2600,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 351,
                "FoldSize": 26,
                "CombinationCount": 14950,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 352,
                "FoldSize": 26,
                "CombinationCount": 65780,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 353,
                "FoldSize": 26,
                "CombinationCount": 230230,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 354,
                "FoldSize": 26,
                "CombinationCount": 657800,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 355,
                "FoldSize": 26,
                "CombinationCount": 1562275,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 356,
                "FoldSize": 26,
                "CombinationCount": 3124550,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 357,
                "FoldSize": 26,
                "CombinationCount": 5311735,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 358,
                "FoldSize": 26,
                "CombinationCount": 7726160,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 359,
                "FoldSize": 26,
                "CombinationCount": 9657700,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 360,
                "FoldSize": 26,
                "CombinationCount": 10400600,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 361,
                "FoldSize": 26,
                "CombinationCount": 9657700,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 362,
                "FoldSize": 26,
                "CombinationCount": 7726160,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 363,
                "FoldSize": 26,
                "CombinationCount": 5311735,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 364,
                "FoldSize": 26,
                "CombinationCount": 3124550,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 365,
                "FoldSize": 26,
                "CombinationCount": 1562275,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 366,
                "FoldSize": 26,
                "CombinationCount": 657800,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 367,
                "FoldSize": 26,
                "CombinationCount": 230230,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 368,
                "FoldSize": 26,
                "CombinationCount": 65780,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 369,
                "FoldSize": 26,
                "CombinationCount": 14950,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 370,
                "FoldSize": 26,
                "CombinationCount": 2600,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 23,
                    },
                ],
            },
            {
                "ID": 371,
                "FoldSize": 26,
                "CombinationCount": 325,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 24,
                    },
                ],
            },
            {
                "ID": 372,
                "FoldSize": 26,
                "CombinationCount": 26,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 25,
                    },
                ],
            },
            {
                "ID": 373,
                "FoldSize": 26,
                "CombinationCount": 67108836,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 25,
                    },
                ],
            },
            {
                "ID": 374,
                "FoldSize": 26,
                "CombinationCount": 67108862,
                "Parameters": [
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 25,
                    },
                    {
                        "FoldSize": 26,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 27,
        "Options": [
            {
                "ID": 375,
                "FoldSize": 27,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 27,
                    },
                ],
            },
            {
                "ID": 376,
                "FoldSize": 27,
                "CombinationCount": 351,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 377,
                "FoldSize": 27,
                "CombinationCount": 2925,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 378,
                "FoldSize": 27,
                "CombinationCount": 17550,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 379,
                "FoldSize": 27,
                "CombinationCount": 80730,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 380,
                "FoldSize": 27,
                "CombinationCount": 296010,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 381,
                "FoldSize": 27,
                "CombinationCount": 888030,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 382,
                "FoldSize": 27,
                "CombinationCount": 2220075,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 383,
                "FoldSize": 27,
                "CombinationCount": 4686825,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 384,
                "FoldSize": 27,
                "CombinationCount": 8436285,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 385,
                "FoldSize": 27,
                "CombinationCount": 13037895,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 386,
                "FoldSize": 27,
                "CombinationCount": 17383860,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 387,
                "FoldSize": 27,
                "CombinationCount": 20058300,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 388,
                "FoldSize": 27,
                "CombinationCount": 20058300,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 389,
                "FoldSize": 27,
                "CombinationCount": 17383860,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 390,
                "FoldSize": 27,
                "CombinationCount": 13037895,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 391,
                "FoldSize": 27,
                "CombinationCount": 8436285,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 392,
                "FoldSize": 27,
                "CombinationCount": 4686825,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 393,
                "FoldSize": 27,
                "CombinationCount": 2220075,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 394,
                "FoldSize": 27,
                "CombinationCount": 888030,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 395,
                "FoldSize": 27,
                "CombinationCount": 296010,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 396,
                "FoldSize": 27,
                "CombinationCount": 80730,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 397,
                "FoldSize": 27,
                "CombinationCount": 17550,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 23,
                    },
                ],
            },
            {
                "ID": 398,
                "FoldSize": 27,
                "CombinationCount": 2925,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 24,
                    },
                ],
            },
            {
                "ID": 399,
                "FoldSize": 27,
                "CombinationCount": 351,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 25,
                    },
                ],
            },
            {
                "ID": 400,
                "FoldSize": 27,
                "CombinationCount": 27,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 26,
                    },
                ],
            },
            {
                "ID": 401,
                "FoldSize": 27,
                "CombinationCount": 134217699,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 25,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 26,
                    },
                ],
            },
            {
                "ID": 402,
                "FoldSize": 27,
                "CombinationCount": 134217726,
                "Parameters": [
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 25,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 26,
                    },
                    {
                        "FoldSize": 27,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 28,
        "Options": [
            {
                "ID": 403,
                "FoldSize": 28,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 28,
                    },
                ],
            },
            {
                "ID": 404,
                "FoldSize": 28,
                "CombinationCount": 378,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 405,
                "FoldSize": 28,
                "CombinationCount": 3276,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 406,
                "FoldSize": 28,
                "CombinationCount": 20475,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 407,
                "FoldSize": 28,
                "CombinationCount": 98280,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 408,
                "FoldSize": 28,
                "CombinationCount": 376740,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 409,
                "FoldSize": 28,
                "CombinationCount": 1184040,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 410,
                "FoldSize": 28,
                "CombinationCount": 3108105,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 411,
                "FoldSize": 28,
                "CombinationCount": 6906900,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 412,
                "FoldSize": 28,
                "CombinationCount": 13123110,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 413,
                "FoldSize": 28,
                "CombinationCount": 21474180,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 414,
                "FoldSize": 28,
                "CombinationCount": 30421755,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 415,
                "FoldSize": 28,
                "CombinationCount": 37442160,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 416,
                "FoldSize": 28,
                "CombinationCount": 40116600,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 417,
                "FoldSize": 28,
                "CombinationCount": 37442160,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 418,
                "FoldSize": 28,
                "CombinationCount": 30421755,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 419,
                "FoldSize": 28,
                "CombinationCount": 21474180,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 420,
                "FoldSize": 28,
                "CombinationCount": 13123110,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 421,
                "FoldSize": 28,
                "CombinationCount": 6906900,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 422,
                "FoldSize": 28,
                "CombinationCount": 3108105,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 423,
                "FoldSize": 28,
                "CombinationCount": 1184040,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 424,
                "FoldSize": 28,
                "CombinationCount": 376740,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 425,
                "FoldSize": 28,
                "CombinationCount": 98280,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 23,
                    },
                ],
            },
            {
                "ID": 426,
                "FoldSize": 28,
                "CombinationCount": 20475,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 24,
                    },
                ],
            },
            {
                "ID": 427,
                "FoldSize": 28,
                "CombinationCount": 3276,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 25,
                    },
                ],
            },
            {
                "ID": 428,
                "FoldSize": 28,
                "CombinationCount": 378,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 26,
                    },
                ],
            },
            {
                "ID": 429,
                "FoldSize": 28,
                "CombinationCount": 28,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 27,
                    },
                ],
            },
            {
                "ID": 430,
                "FoldSize": 28,
                "CombinationCount": 268435426,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 25,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 26,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 27,
                    },
                ],
            },
            {
                "ID": 431,
                "FoldSize": 28,
                "CombinationCount": 268435454,
                "Parameters": [
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 25,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 26,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 27,
                    },
                    {
                        "FoldSize": 28,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 29,
        "Options": [
            {
                "ID": 432,
                "FoldSize": 29,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 29,
                    },
                ],
            },
            {
                "ID": 433,
                "FoldSize": 29,
                "CombinationCount": 406,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 434,
                "FoldSize": 29,
                "CombinationCount": 3654,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 435,
                "FoldSize": 29,
                "CombinationCount": 23751,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 436,
                "FoldSize": 29,
                "CombinationCount": 118755,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 437,
                "FoldSize": 29,
                "CombinationCount": 475020,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 438,
                "FoldSize": 29,
                "CombinationCount": 1560780,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 439,
                "FoldSize": 29,
                "CombinationCount": 4292145,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 440,
                "FoldSize": 29,
                "CombinationCount": 10015005,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 441,
                "FoldSize": 29,
                "CombinationCount": 20030010,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 442,
                "FoldSize": 29,
                "CombinationCount": 34597290,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 443,
                "FoldSize": 29,
                "CombinationCount": 51895935,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 444,
                "FoldSize": 29,
                "CombinationCount": 67863915,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 445,
                "FoldSize": 29,
                "CombinationCount": 77558760,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 446,
                "FoldSize": 29,
                "CombinationCount": 77558760,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 447,
                "FoldSize": 29,
                "CombinationCount": 67863915,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 448,
                "FoldSize": 29,
                "CombinationCount": 51895935,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 449,
                "FoldSize": 29,
                "CombinationCount": 34597290,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 450,
                "FoldSize": 29,
                "CombinationCount": 20030010,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 451,
                "FoldSize": 29,
                "CombinationCount": 10015005,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 452,
                "FoldSize": 29,
                "CombinationCount": 4292145,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 453,
                "FoldSize": 29,
                "CombinationCount": 1560780,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 454,
                "FoldSize": 29,
                "CombinationCount": 475020,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 23,
                    },
                ],
            },
            {
                "ID": 455,
                "FoldSize": 29,
                "CombinationCount": 118755,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 24,
                    },
                ],
            },
            {
                "ID": 456,
                "FoldSize": 29,
                "CombinationCount": 23751,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 25,
                    },
                ],
            },
            {
                "ID": 457,
                "FoldSize": 29,
                "CombinationCount": 3654,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 26,
                    },
                ],
            },
            {
                "ID": 458,
                "FoldSize": 29,
                "CombinationCount": 406,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 27,
                    },
                ],
            },
            {
                "ID": 459,
                "FoldSize": 29,
                "CombinationCount": 29,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 28,
                    },
                ],
            },
            {
                "ID": 460,
                "FoldSize": 29,
                "CombinationCount": 536870881,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 25,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 26,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 27,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 28,
                    },
                ],
            },
            {
                "ID": 461,
                "FoldSize": 29,
                "CombinationCount": 536870910,
                "Parameters": [
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 25,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 26,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 27,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 28,
                    },
                    {
                        "FoldSize": 29,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
    {
        "FoldSize": 30,
        "Options": [
            {
                "ID": 462,
                "FoldSize": 30,
                "CombinationCount": 1,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 30,
                    },
                ],
            },
            {
                "ID": 463,
                "FoldSize": 30,
                "CombinationCount": 435,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 2,
                    },
                ],
            },
            {
                "ID": 464,
                "FoldSize": 30,
                "CombinationCount": 4060,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 465,
                "FoldSize": 30,
                "CombinationCount": 27405,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 466,
                "FoldSize": 30,
                "CombinationCount": 142506,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 467,
                "FoldSize": 30,
                "CombinationCount": 593775,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 468,
                "FoldSize": 30,
                "CombinationCount": 2035800,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 469,
                "FoldSize": 30,
                "CombinationCount": 5852925,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 470,
                "FoldSize": 30,
                "CombinationCount": 14307150,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 471,
                "FoldSize": 30,
                "CombinationCount": 30045015,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 10,
                    },
                ],
            },
            {
                "ID": 472,
                "FoldSize": 30,
                "CombinationCount": 54627300,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 11,
                    },
                ],
            },
            {
                "ID": 473,
                "FoldSize": 30,
                "CombinationCount": 86493225,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 12,
                    },
                ],
            },
            {
                "ID": 474,
                "FoldSize": 30,
                "CombinationCount": 119759850,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 13,
                    },
                ],
            },
            {
                "ID": 475,
                "FoldSize": 30,
                "CombinationCount": 145422675,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 14,
                    },
                ],
            },
            {
                "ID": 476,
                "FoldSize": 30,
                "CombinationCount": 155117520,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 15,
                    },
                ],
            },
            {
                "ID": 477,
                "FoldSize": 30,
                "CombinationCount": 145422675,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 16,
                    },
                ],
            },
            {
                "ID": 478,
                "FoldSize": 30,
                "CombinationCount": 119759850,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 17,
                    },
                ],
            },
            {
                "ID": 479,
                "FoldSize": 30,
                "CombinationCount": 86493225,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 18,
                    },
                ],
            },
            {
                "ID": 480,
                "FoldSize": 30,
                "CombinationCount": 54627300,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 19,
                    },
                ],
            },
            {
                "ID": 481,
                "FoldSize": 30,
                "CombinationCount": 30045015,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 20,
                    },
                ],
            },
            {
                "ID": 482,
                "FoldSize": 30,
                "CombinationCount": 14307150,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 21,
                    },
                ],
            },
            {
                "ID": 483,
                "FoldSize": 30,
                "CombinationCount": 5852925,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 22,
                    },
                ],
            },
            {
                "ID": 484,
                "FoldSize": 30,
                "CombinationCount": 2035800,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 23,
                    },
                ],
            },
            {
                "ID": 485,
                "FoldSize": 30,
                "CombinationCount": 593775,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 24,
                    },
                ],
            },
            {
                "ID": 486,
                "FoldSize": 30,
                "CombinationCount": 142506,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 25,
                    },
                ],
            },
            {
                "ID": 487,
                "FoldSize": 30,
                "CombinationCount": 27405,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 26,
                    },
                ],
            },
            {
                "ID": 488,
                "FoldSize": 30,
                "CombinationCount": 4060,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 27,
                    },
                ],
            },
            {
                "ID": 489,
                "FoldSize": 30,
                "CombinationCount": 435,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 28,
                    },
                ],
            },
            {
                "ID": 490,
                "FoldSize": 30,
                "CombinationCount": 30,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 29,
                    },
                ],
            },
            {
                "ID": 491,
                "FoldSize": 30,
                "CombinationCount": 1073741792,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 25,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 26,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 27,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 28,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 29,
                    },
                ],
            },
            {
                "ID": 492,
                "FoldSize": 30,
                "CombinationCount": 1073741822,
                "Parameters": [
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 3,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 4,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 5,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 6,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 7,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 8,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 9,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 10,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 11,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 12,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 13,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 14,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 15,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 16,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 17,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 18,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 19,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 20,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 21,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 22,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 23,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 24,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 25,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 26,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 27,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 28,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 29,
                    },
                    {
                        "FoldSize": 30,
                        "CombSelectNum": 1,
                    },
                ],
            },
        ],
    },
]

describe("CombinationBetReferenceTable Generation", () => {
    it("should generate tables that match the expected data from Go implementation", () => {
        expectedData.forEach(expectedTable => {
            const foldSize = expectedTable.FoldSize
            const actualTable = getCombinationBetReferenceTable(foldSize)

            // 驗證 ReferenceTable 是否存在
            expect(actualTable).toBeDefined()
            if (!actualTable) return

            // 驗證 foldSize
            expect(actualTable.foldSize).toBe(foldSize)

            // 驗證 options 數量
            expect(actualTable.options.length).toBe(expectedTable.Options.length)

            // 遍歷並驗證每個 option
            expectedTable.Options.forEach((expectedOption, index) => {
                const actualOption = actualTable.options[index]

                expect(actualOption).toBeDefined()
                if (!actualOption) return

                expect(actualOption.id).toBe(expectedOption.ID.toString())
                expect(actualOption.foldSize).toBe(expectedOption.FoldSize)
                expect(actualOption.combinationCount).toBe(expectedOption.CombinationCount)
                expectedOption.Parameters.forEach((expectedParameter, parameterIndex) => {
                    const actualParameter = actualOption.parameters[parameterIndex]

                    expect(actualParameter).toBeDefined()
                    if (!actualParameter) return

                    expect(actualParameter.foldSize).toBe(expectedParameter.FoldSize)
                    expect(actualParameter.combSelectNum).toBe(expectedParameter.CombSelectNum)
                })
            })
        })
    })
})
