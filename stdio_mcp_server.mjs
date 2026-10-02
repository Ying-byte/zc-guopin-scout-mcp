#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "guopin",
  boardId: "guopin-official",
  domain: "iguopin.com",
  npmName: "zc-guopin-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
