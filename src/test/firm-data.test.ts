import { describe, expect, it } from "vitest";
import { attorneys } from "@/lib/firm-data";

describe("Glyn Marais public attorney listings", () => {
  it("presents all seven attorneys listed for the Cape Town firm", () => {
    expect(attorneys.map(({ name }) => name)).toEqual([
      "Richard Glyn",
      "Francois Marais",
      "Brian Frank",
      "Willem de Villiers",
      "Riaan du Plessis",
      "Tamara Gerwel",
      "Robert January",
    ]);
  });
});