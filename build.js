#!/usr/bin/env node
import { $ } from "execa"

download_all_cloudflared: {
  const version = "2023.7.3"
  await $`gh release download -R cloudflare/cloudflared ${version} -p '*'`
}

download_all_code_server: {
  const version = "v4.15.0"
  await $`gh release download -R coder/code-server ${version} -p '*'`
}

download_all_upterm: {}

download_all_ttyd: {}
