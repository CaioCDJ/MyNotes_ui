import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { fromEvent, Subscription } from 'rxjs';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-text-highlight',
  templateUrl: './text-highlight.component.html',
  styleUrls: ['./text-highlight.component.css']
})

export class TextHighlightComponent  implements OnInit, AfterViewChecked, AfterViewInit, OnDestroy {

  @ViewChild('textArea', { static: true })
  textArea!: ElementRef;
  @ViewChild('codeContent', { static: true })
  codeContent!: ElementRef;
  @ViewChild('pre', { static: true })
  pre!: ElementRef;

  sub!: Subscription;
  highlighted = false;
  codeType = 'markdown'

  text = `
    var oliver = boxer
  `

  form = this.fb.group({
    content: ''
  })

  get contentControl(){
     return this.form.get("content")
  }

  constructor(
    private prismService: PrismService,
    private fb: FormBuilder,
    private render: Renderer2
  ){}
  
  ngOnInit(): void {
    this.ListenForm();
    this.synchronizeScroll();
  }

  ngAfterViewInit(){
    this.prismService.highlightAll();
  }

  ngAfterViewChecked(){
    if(this.highlighted){
      this.prismService.highlightAll();
      this.highlighted = false;
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
 
  private ListenForm(){
    this.sub = this.form.valueChanges.subscribe((val:any)=>{
    
      console.log(val.content)
      const modifiedContent = this.prismService.convertHtmlToSting(val.content);
      
      this.render.setProperty(this.codeContent.nativeElement, 'innerHTML', modifiedContent);      
    
      this.highlighted = true;
    });
  }

  private synchronizeScroll(){
    const localSub = fromEvent(this.textArea.nativeElement, "scroll").subscribe(()=>{
      
      const toTop = this.textArea.nativeElement.scrollTop;

      const toLeft = this.textArea.nativeElement.scrollLeft;

      this.render.setProperty(this.pre.nativeElement, 'scrollTop', toTop);
      this.render.setProperty(this.pre.nativeElement, 'scrollLeft', toLeft);
    })

    this.sub.add(localSub);
  }
}
