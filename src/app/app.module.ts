import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { NoteComponent } from './pages/note/note.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { AccountComponent } from './pages/account/account.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextHighlightComponent } from './components/text-highlight/text-highlight.component';
import { MarkdownViewerComponent } from './components/markdown-viewer/markdown-viewer.component';
import { ClipboardOptions, MarkdownComponent, MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    NoteComponent,
    NavbarComponent,
    FooterComponent,
    SignUpComponent,
    AccountComponent,
    TextHighlightComponent,
    MarkdownViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({
      clipboardOptions:{
        provide: ClipboardOptions,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
