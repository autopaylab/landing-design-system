import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});

// jsdom doesn't implement canvas; axe-core's color-contrast check probes it
// as an optimization and jsdom logs a noisy "not implemented" warning every
// time. Stubbing it out is just quieting expected, harmless test-env noise.
HTMLCanvasElement.prototype.getContext = () => null;
