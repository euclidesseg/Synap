import { FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {

    // validar si el campo de un formulario tiene un error
    static isValidField(fieldName:string, myForm:FormGroup):boolean | null {
        return myForm.controls[fieldName].errors && myForm.controls[fieldName].touched;
    }

    // Obtener el tipo de error del campo de un formulario
    static getFieldError(fieldName:string, myForm:FormGroup):string | null {
        if(!myForm.controls[fieldName]) return null;
        else{
            const erros = myForm.controls[fieldName].errors || {};
            return this.getTxtError(erros)
        }
        return '';
    }


    // crear y retornar un mensaje segun el error de un control
    private static getTxtError(errors:ValidationErrors, control?:string){

        for(const key of Object.keys(errors)){
            switch(key){
                case 'required':
                    return 'Este campo es requerido';
                case 'minlength':
                    return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
                case 'maxlength':
                    return `Maximo ${errors['maxlength'].requiredLength} caracteres`
                default : return ''
            }
        }
        return null;
    }
}