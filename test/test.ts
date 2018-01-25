// Reference mocha-typescript's global definitions:
/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />

import { Unit } from "../src/index";
import { assert } from "chai";

declare var console;

before("start server", () => {
    // Run express?
    console.log("start server");
});
after("kill server", () => {
    // Kill the server.
    console.log("kill server");
});

describe("vanilla bdd", () => {
    it("test", async () => {
        await console.log("  vanilla bdd test");
    });
});

suite("vanilla tdd", () => {
    test("test", async () => {
        await console.log("  vanilla tdd test");
    });
});

@suite class UnitTest extends Unit {
    @test "big is true with big number"() {
        console.log("  UnitTest big is true with big number");
        assert(this.big(200));
    }
    @test "big is false with small number"() {
        console.log("  UnitTest big is false with small number");
        assert(!this.big(50));
    }
}

suite("nested class suite", () => {
    @suite class NestedTest {
        @test "a test"() {
            console.log("  nested class suite NestedTest a test");
        }
    }
});