import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from './core/core.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FrequentQuestionsComponent } from './modules/questions/frequent-questions/frequent-questions.component';
import { QuestionComponent } from './modules/questions/question/question.component';
import { InformComponent } from './modules/inform/inform.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        MatDialogModule,
        MatInputModule,
    ]
})
export class AppModule { }
