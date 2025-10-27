import { Component } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coding-terminal',
  imports: [MonacoEditorModule, FormsModule],
  templateUrl: './coding-terminal.html',
  styleUrl: './coding-terminal.scss',
})
export class CodingTerminal {
  language: string = 'javascript';
  editorOptions = { theme: 'vs-dark', language: this.language };
  code: string = '';
}
