import { Component, output, viewChild } from '@angular/core';
import {EuclidesEditorComponent} from 'euclides-editor'

@Component({
  selector: 'editor-component',
  imports: [EuclidesEditorComponent],
  templateUrl: './editor-component.html',
})
export class EditorComponent {

  editor = viewChild(EuclidesEditorComponent)

  getContent(){
    return this.editor()?.getDoc();
  }
 }
