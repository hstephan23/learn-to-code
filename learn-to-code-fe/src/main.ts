import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideMonacoEditor } from 'ngx-monaco-editor-v2';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideMonacoEditor({
      baseUrl: 'assets/monaco/vs',
    }),
  ],
}).catch((err) => console.error(err));
