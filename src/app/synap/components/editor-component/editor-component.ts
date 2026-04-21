import { Component, viewChild } from '@angular/core';
import {EuclidesEditorComponent} from 'euclides-editor'

@Component({
  selector: 'editor-component',
  imports: [EuclidesEditorComponent],
  templateUrl: './editor-component.html',
})
export class EditorComponent {

  editor = viewChild(EuclidesEditorComponent)

 }
