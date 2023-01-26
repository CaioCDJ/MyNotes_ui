import { Component } from '@angular/core';
import { KatexOptions } from 'ngx-markdown';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})

export class NoteComponent {

  public options: KatexOptions = {
    displayMode: true,
    throwOnError: false,
    errorColor: '#cc0000',
  }

  public data: string = `
    # Fatos Oliver
      1. É boxer
      2. tem mais de 3 meses de idade
      3. gosta de pao`;

}
