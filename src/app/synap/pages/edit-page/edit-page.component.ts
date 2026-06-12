import { Component, AfterViewInit, signal, inject, Renderer2, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";

import { EditorComponent } from "../../components/editor-component/editor-component";
import { IconComponent } from "../../../shared/components/icon/icon.component";
import { categories } from '../../data/categories.data';
import { FormUtils } from '../../../shared/utils/form-utils';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  imports: [EditorComponent, ReactiveFormsModule, IconComponent, IconComponent, JsonPipe],
  styles: `

  `
})
export default class EditPageComponent implements AfterViewInit, OnDestroy {


  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  categoryOptions = signal(categories)
  formUtils = FormUtils;

  @ViewChild(EditorComponent)
  editorComponent!: EditorComponent;

  @ViewChild('inputCategory')
  inputCategory!: ElementRef<HTMLInputElement>;

  ngOnDestroy(): void {
    if (this.removeClickListener) {
      this.removeClickListener();
    }
  }

  // Función elimina el listener
  private removeClickListener?: () => void;


  // Despues de iniciar la vista inicial del componente
  ngAfterViewInit(): void {
    this.removeClickListener = this.renderer.listen('document', 'click', (event: MouseEvent) => {

      // Elemento raiz del componente
      const hostElement = this.elementRef.nativeElement;
      // Verificar si el evento raiz fue fuera del componente
      // const clickInside = hostElement.contains(event.target);

      const clickInsideInput = this.inputCategory.nativeElement.contains(event.target as Node);
      if (!clickInsideInput) {
        this.menuOpen.set(false);
      }
    })
  }


  menuOpen = signal(false);
  status = signal('');

  fBuilder: FormBuilder = inject(FormBuilder);


  // Form control para una nueva etiqueta
  newLabel: FormControl = new FormControl('', [Validators.minLength(4), Validators.required]);


  // Definición del formularlio para el articulo
  articleForm = this.fBuilder.group({
    title: ['', [Validators.required, Validators.minLength(20)]],
    summary: ['', [Validators.required, Validators.maxLength(200), Validators.minLength(50)]],
    category: ['', [Validators.required]],
    visibility: ['Public', [Validators.required]],
    labels: this.fBuilder.array([], [Validators.minLength(2)]),
    contentJson: [null, [Validators.required]],
    contentHtml: ['', [Validators.required]],
    wordCount: [0],
    readingTime: [0]
  });

  // Obtiene los elementos del formaray para manipularlos
  get labels() {
    return this.articleForm.get('labels') as FormArray;
  }
  // Elimina una elemento del formarray labels
  onDeleteLabel(index: number) {
    this.labels.removeAt(index);
  }

  // Agrega un nuevo elemento al formarray labels
  onAddLabel() {
    if (this.newLabel.invalid) return;
    const newLabel: any = this.newLabel.value;
    this.labels.push(this.fBuilder.control(newLabel));
  }


  showMenuOptions() {
    this.menuOpen.set(true);
  }
  selectOption(option: string) {
    this.articleForm.get('category')?.setValue(option);
    this.menuOpen.set(false);
  }

  onSubmit() {

    const doc = this.editorComponent.getContent();
    this.articleForm.patchValue({
      contentJson: doc?.json,
      contentHtml: doc?.html,
      wordCount: doc?.wordCount,
      readingTime: doc?.readingTime
    });

    if (this.articleForm.invalid) {
      this.articleForm.markAllAsTouched();
      return;
    }

    console.log(this.articleForm.getRawValue());
  }

} 