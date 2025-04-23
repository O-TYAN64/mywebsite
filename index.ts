// index.ts (デフォルトの静的配信に任せる)
import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

export default {
  async fetch(request: Request): Promise<Response> {
    try {
      return await getAssetFromKV({ request });
    } catch (e) {
      return new Response("Not found", { status: 404 });
    }
  },
};
