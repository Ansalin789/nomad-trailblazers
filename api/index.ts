// import { createServer } from 'http';
import { renderErrorPage } from '../src/lib/error-page';

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import('@tanstack/react-start/server-entry').then(
      (m) => ((m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry)),
    );
  }
  return serverEntryPromise;
}

export default async function handler(req: any, res: any) {
  try {
    const handler = await getServerEntry();
    
    // Convert Node.js request/response to Web API Request/Response
    const url = `http://${req.headers.host}${req.url}`;
    const request = new Request(url, {
      method: req.method,
      headers: req.headers,
      body: ['GET', 'HEAD'].includes(req.method) ? undefined : req,
    });

    const response = await handler.fetch(request, {}, {});
    
    // Set response status and headers
    res.status(response.status);
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Stream response body
    if (response.body) {
      res.end(await response.text());
    } else {
      res.end();
    }
  } catch (error) {
    console.error(error);
    res.status(500);
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end(renderErrorPage());
  }
}
