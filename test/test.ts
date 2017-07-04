// Reference mocha-typescript's global definitions:
/// <reference path="../node_modules/mocha-typescript/globals.d.ts" />

import { Unit } from "../src/index";
import { assert } from "chai";

@suite class UnitTest extends Unit {
    @test "big is true with big number"() {
        assert(this.big(200));
    }
    @test "big is false with small number"() {
        assert(!this.big(50));
    }
}