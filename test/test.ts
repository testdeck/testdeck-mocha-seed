import { suite, test } from "@testdeck/mocha";
import { Unit } from "../src/index";
import { assert } from "chai";

declare var console, setTimeout;

function doWork(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 1000));
}
before("start server", async () => {
    // Run express?
    console.log("start server");
    await doWork();
    console.log("server started");
});
after("kill server", async () => {
    // Kill the server.
    console.log("kill server");
    await doWork();
    console.log("server killed");
});

describe("vanilla bdd", () => {
    it("test", async () => {
        await console.log("  vanilla bdd test");
    });
});

suite("vanilla tdd", () => {
    // TODO:
    // test("test", async () => {
    //     await console.log("  vanilla tdd test");
    // });
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