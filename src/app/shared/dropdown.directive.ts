import { Directive, HostBinding, HostListener } from "@angular/core";





@Directive({
    selector: '[appDropdown]'
})

//directive is added in the html element , in this case to toggle dropdown buttons
export class DropdownDirective {

   @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen
    }
}