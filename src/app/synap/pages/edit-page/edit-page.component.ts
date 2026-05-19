import { Component, AfterViewInit, signal, inject, Renderer2, ElementRef, OnDestroy } from '@angular/core';
import { EditorComponent } from "../../components/editor-component/editor-component";
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from "@angular/forms";


type Category = 'Ciencia' | 'Matematicas' | 'Ingenieria' | 'Computación' | 'Cine';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  imports: [EditorComponent, ReactiveFormsModule],
  styles: `
  
  `
})
export default class EditPageComponent implements OnDestroy {

  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private removeListener!: () => void;

  fBuilder:FormBuilder = inject(FormBuilder);

  categoryOptions = signal<Category[]>(['Ciencia', 'Matematicas', 'Ingenieria', 'Computación', 'Cine']);

  newLabel:FormControl = new FormControl('', [Validators.minLength(2)]);

  articleForm = this.fBuilder.group({
    title:['', [Validators.required]],
    category:['', [Validators.required]],
    labels:this.fBuilder.array(
      [

      ],
      Validators.minLength(2)
    )
  });

  get labels(){
    return this.articleForm.get('labels') as FormArray;
  }
  onAddLabel(){
    if(this.newLabel.invalid)return;
    const newLabel:any = this.newLabel.value;
    this
    .labels.push(this.fBuilder.control(newLabel)
    )

  }
  category = signal('');
  menuOpen = signal(false);
  status = signal('');

  constructor() {
    this.initClickListener();
  }

  showMenuOptions() {
    this.menuOpen.update(value => !value);
  }
  selectOption(option: Category) {
    this.category.set(option);
    this.showMenuOptions();
  }

  private initClickListener() {
    this.removeListener = this.renderer.listen('document', 'click',(event:MouseEvent) =>{
      const clickedInside = this.elementRef.nativeElement.contains(event.target);

      if(!clickedInside && this.menuOpen()){
        this.menuOpen.set(false);
      }
    })
  }
  ngOnDestroy(): void {
    if(this.removeListener){
      this.removeListener();
    }
  }

  onDeleteLabel(index:number){
   this.labels.removeAt(index);
  }
}
