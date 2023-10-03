import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "./shared/shared.module";
import { CoreModule } from './core/core.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PostsFormEditComponent } from './modules/admin/posts/posts-form/posts-form-edit/posts-form-edit.component';
import { PostsFormEditarItemComponent } from './modules/admin/posts/posts-form/posts-form-editar-item/posts-form-editar-item.component';
import { MatTableModule } from '@angular/material/table';
import { ValidateComponent } from './modules/admin/posts/posts-control/validate/validate.component';
import { EditCategoriesComponent } from './modules/admin/categories/edit-categories/edit-categories.component';
import { EditFrequentQuestionsComponent } from './modules/admin/admin-frequent-questions/edit-frequent-questions/edit-frequent-questions.component';
import { AdminNotificationsMarkReadComponent } from './modules/admin/notifications/admin-notifications-mark-read/admin-notifications-mark-read.component';
import { AdminNotificationsSeeMoreComponent } from './modules/admin/notifications/admin-notifications-see-more/admin-notifications-see-more.component';
import { AdminPaymentsEditDataComponent } from './modules/admin/payments/admin-payments-edit-data/admin-payments-edit-data.component';


@NgModule({
    declarations: [
        AppComponent,
        PostsFormEditComponent,
        PostsFormEditarItemComponent,
        ValidateComponent,
        EditCategoriesComponent,
        EditFrequentQuestionsComponent,
        AdminNotificationsMarkReadComponent,
        AdminNotificationsSeeMoreComponent,
        AdminPaymentsEditDataComponent,
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
        FormsModule,
        MatTableModule,
    ]
})
export class AppModule { }
