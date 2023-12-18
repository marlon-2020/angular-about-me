import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProfileInvert]'
})
export class ProfileInvertDirective {
  @HostBinding('style.transform') transform: string = ''

  @HostListener('click') invertSymbol(){
    let btn_container = this.renderer.parentNode(this.element.nativeElement)
    let profile_container = this.renderer.parentNode(btn_container)
    let profiles_content = profile_container.querySelectorAll('.profile-content')
    if(this.transform != 'rotate(-90deg)'){
      this.transform = 'rotate(-90deg)'
      profiles_content.forEach((e: any)=>{
        e.style.height = '11dvh'
      })
    }else{
      this.transform = 'rotate(90deg)'
      profiles_content.forEach((e: any)=>{
        e.style.height = '0px'

      })
    }
  }
  constructor(
    private renderer: Renderer2,
    private element: ElementRef
  ) { }

}
