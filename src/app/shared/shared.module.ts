import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../shared/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NumericInputComponent } from './components/numeric-input/numeric-input.component';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { RouterLink } from '@angular/router';
import { SwiperGalleryComponent } from './components/swiper-gallery/swiper-gallery.component';
import { SellerVerticalMenuComponent } from './components/seller-vertical-menu/seller-vertical-menu.component';
import { AdminVerticalMenuComponent } from './components/admin-vertical-menu/admin-vertical-menu.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { EditBannerComponent } from './components/edit-banner/edit-banner.component';
import { MatTable } from '@angular/material/table';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    FooterComponent,
    BreadcrumbComponent,
    NumericInputComponent,
    SwiperGalleryComponent,
    SellerVerticalMenuComponent,
    AdminVerticalMenuComponent,
    AlertDialogComponent,
    UploadImageComponent,
    EditBannerComponent,
    ConfirmationDialogComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,
    RouterLink,

  ],
  exports: [
    FooterComponent,
    BreadcrumbComponent,
    NumericInputComponent,
    SwiperGalleryComponent,
    SellerVerticalMenuComponent,
    AdminVerticalMenuComponent,
    AlertDialogComponent,
    UploadImageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { 
  constructor() {
    register();
  } 
}

