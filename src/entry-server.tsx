import { StrictMode } from 'react';
import { StaticRouter } from 'react-router';
import { type RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import App from './App';

export function render(url: string, _ssrManifest?: string, options?: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
    options
  );
}
