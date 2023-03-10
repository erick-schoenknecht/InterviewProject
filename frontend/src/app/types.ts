import { FormControl, Validators } from "@angular/forms";

enum Types {
    string = <any>"string",
    number = <any>"number",
    date = <any>"date"
};

export function buildValidationArray(type: Types) {
    switch (type) {
        case Types.string:
            return [Validators.required];            
        case Types.number:
            return [Validators.required, isNumberValid];
        case Types.date:
            return [Validators.required, isDateValid];
        default:
            throw new Error(`Non-existent type in switch: ${type}`);
    }
}

function isNumberValid(control: FormControl) {
    if (isNaN(control.value)) {
        return {isNumberValid: true};
    }

    return null;
}

function isDateValid(control: FormControl) {
    if (!validDate(control.value)) {
        return {isDateValid: true};
    }

    return null;
}

function validDate(dateString: string): boolean {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format

    var d = new Date(dateString);
    var dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date

    return d.toISOString().slice(0,10) === dateString;
}

export default Types;