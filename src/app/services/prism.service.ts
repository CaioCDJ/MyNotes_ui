import { Injectable } from "@angular/core";

import 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markdown'

declare var Prism: any;

@Injectable({
  providedIn: 'root'
})

export class PrismService{

  constructor(){}

  highlightAll(){
    Prism.highlightAll();
  }

  convertHtmlToSting(text: string){
    return text
      .replace(new RegExp('&','g'), '&amp;')
      .replace(new RegExp('<','g'), '&lt;')
  }
}
