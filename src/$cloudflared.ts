import { $ } from "execa";
import { fileURLToPath } from "node:url";

export default async function $cloudflared(
  strings: TemplateStringsArray,
  ...inserts: any[]
): ReturnType<$> {
  if (!$cloudflared.p) {
    let name: string;
    if (process.platform === "linux" && process.arch === "x64") {
      name = "cloudflared-linux-amd64";
    } else {
      throw new DOMException(
        `Unknown 'cloudflared' binary for ${process.platform} ${process.arch}`,
        "NotSupportedError"
      );
    }
    $cloudflared.p = fileURLToPath(new URL(`../${name}`, import.meta.url));
  }

  const newStrings = ["", ...strings];
  newStrings.raw = ["", ...strings.raw];
  const newInserts = [$cloudflared.p, ...inserts];
  return $(newStrings, ...newInserts);
}
