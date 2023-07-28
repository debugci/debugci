#!/usr/bin/env node
import { parseArgs } from "node:util";
import { $ } from "execa";

const url = new URL("http://0.0.0.0:4800");
const codeServerProcess = $`code-server --auth none --bind-addr ${url.host}`;
const cloudflaredProcess = $`cloudflared tunnel --url ${url.origin}`;
