import { getCombinationBetReferenceTable, MAX_FOLD_SIZE } from "../src/combination-bet"

// generated from golang
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
                "CombinationCount": 4,
                "Parameters": [
                    {
                        "FoldSize": 3,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 3,
                        "CombSelectNum": 3,
                    },
                ],
            },
            {
                "ID": 6,
                "FoldSize": 3,
                "CombinationCount": 7,
                "Parameters": [
                    {
                        "FoldSize": 3,
                        "CombSelectNum": 2,
                    },
                    {
                        "FoldSize": 3,
                        "CombSelectNum": 3,
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
                "CombinationCount": 11,
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
                        "CombSelectNum": 4,
                    },
                ],
            },
            {
                "ID": 11,
                "FoldSize": 4,
                "CombinationCount": 15,
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
                        "CombSelectNum": 4,
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
                "CombinationCount": 26,
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
                        "CombSelectNum": 5,
                    },
                ],
            },
            {
                "ID": 17,
                "FoldSize": 5,
                "CombinationCount": 31,
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
                        "CombSelectNum": 5,
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
                "CombinationCount": 57,
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
                        "CombSelectNum": 6,
                    },
                ],
            },
            {
                "ID": 24,
                "FoldSize": 6,
                "CombinationCount": 63,
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
                        "CombSelectNum": 6,
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
                "CombinationCount": 120,
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
                        "CombSelectNum": 7,
                    },
                ],
            },
            {
                "ID": 32,
                "FoldSize": 7,
                "CombinationCount": 127,
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
                        "CombSelectNum": 7,
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
                "CombinationCount": 247,
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
                        "CombSelectNum": 8,
                    },
                ],
            },
            {
                "ID": 41,
                "FoldSize": 8,
                "CombinationCount": 255,
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
                        "CombSelectNum": 8,
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
                "CombinationCount": 502,
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
                        "CombSelectNum": 9,
                    },
                ],
            },
            {
                "ID": 51,
                "FoldSize": 9,
                "CombinationCount": 511,
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
                        "CombSelectNum": 9,
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
        ],
    },
]

describe("CombinationBetReferenceTable Generation", () => {
    it("check MAX_FOLD_SIZE", () => {
        expect(MAX_FOLD_SIZE).toBe(30)
    })
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
