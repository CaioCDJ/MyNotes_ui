import { Component } from '@angular/core';
import { KatexOptions } from 'ngx-markdown';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent {


  public text: string = "";

  public options: KatexOptions = {
    displayMode: true,
    throwOnError: false,
    errorColor: '#cc0000',
  }

  onChangeText(textChange: string){
    console.log(textChange);
    this.text  = textChange;
  }


}
