import { AbstractControl,ValidationErrors } from "@angular/forms"

export function futureDateValidation(control:AbstractControl) : ValidationErrors | null{
    if(!control.value ) return null

    const today = new Date();
    const selected = new Date(control.value)

    return selected < today ? {futureDateValidation : true } : null
}