import { Component } from '@angular/core';
import { KatexOptions } from 'ngx-markdown';
import { MermaidAPI } from 'ngx-markdown';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent {

  public text: string = "";

  public katexOptions: KatexOptions = {
    displayMode: true,
    throwOnError: false,
    errorColor: '#cc0000',
  }
  
  public mermaidOptions: MermaidAPI.Config = {
    fontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    logLevel: MermaidAPI.LogLevel.Info,
    theme: MermaidAPI.Theme.Neutral,
  };
  
  onChangeText(textChange: string) {
    console.log(textChange);
    this.text = textChange;
  }


}
