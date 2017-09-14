// Reference mocha-typescript's global definitions:
/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />

import { Unit } from "../src/index";
import { assert } from "chai";

describe("vanilla bdd", () => {
    it("test", () => {
    });
});

suite("vanilla tdd", () => {
    test("test", () => {
    });
});

@suite class UnitTest extends Unit {
    @test "big is true with big number"() {
        assert(this.big(200));
    }
    @test "big is false with small number"() {
        assert(!this.big(50));
    }
}

suite("nested class suite", () => {
    @suite class NestedTest {
        @test "a test"() {
        }
    }
});