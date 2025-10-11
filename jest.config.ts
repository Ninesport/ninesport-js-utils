import type { Config } from "jest"

const config: Config = {
    preset: "ts-jest",
    testEnvironment: "node",
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "js"],
    testMatch: ["**/?(*.)+(spec|test).ts"],
}

export default config
