type AssetFetcher = {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
};

type Env = {
  ASSETS: AssetFetcher;
};

const CANONICAL_HOST = "tvpackages.uk";

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    if (host !== CANONICAL_HOST || url.protocol !== "https:") {
      url.protocol = "https:";
      url.hostname = CANONICAL_HOST;
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
