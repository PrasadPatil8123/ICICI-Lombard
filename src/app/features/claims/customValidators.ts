import { AbstractControl, ValidationErrors } from "@angular/forms";

export class customValidators {
    static policyNumber(control: AbstractControl): ValidationErrors | null {
        const policy = control.value;
        if (policy && (policy.length < 5 || policy.length > 10)) {
            return { policyNumberInvalid: true };
        }

        return null;
    }
}