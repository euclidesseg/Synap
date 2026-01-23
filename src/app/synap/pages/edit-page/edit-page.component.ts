import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Quill from 'quill';



@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  providers: [
    FormsModule
  ]  
})
export default class EditPageComponent implements AfterViewInit {

  private quill!: Quill; // 🔹 Declaramos la variable

  ngAfterViewInit(): void {
    this.quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ font: [] }, { size: [] }],                // Fuente y tamaño
          [{ header: [1, 2, 3, false] }],              // H1 H2 H3
          ['bold', 'italic', 'underline', 'strike'],   // Formato básico
          [{ color: [] }, { background: [] }],         // Colores
          [{ script: 'sub' }, { script: 'super' }],    // x²
          [{ list: 'ordered' }, { list: 'bullet' }],   // Listas
          [{ indent: '-1' }, { indent: '+1' }],        // Sangría
          [{ align: [] }],                             // Alineación
          ['blockquote', 'code-block'],                // Citas / código
          ['link', 'image', 'video'],                  // Multimedia
          ['clean'],                                    // Quitar formato
          ['table'],
        ],
        table: true,
        tableUI: true
      },
    });
  }

}
