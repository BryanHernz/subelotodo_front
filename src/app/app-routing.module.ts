import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) 
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'offers',
    loadChildren: () => import('./modules/offers/offers.module').then(m => m.OffersModule),
  },
  {
    path: 'offers2',
    loadChildren: () => import('./modules/offers2/offers2.module').then(m => m.Offers2Module),
  },
  {
    path: 'how-to-sale',
    loadChildren: () => import('./modules/sell-steps/how-to-sale/how-to-sale.module').then(m => m.HowToSaleModule),
  },
  {
    path: 'ingress',
    loadChildren: () => import('./modules/sell-steps/ingress/ingress.module').then(m => m.IngressModule),
  },
  {
    path: 'product-register',
    loadChildren: () => import('./modules/sell-steps/product-register/product-register.module').then(m => m.ProductRegisterModule),
  }, 
  {
    path: 'product-upload',
    loadChildren: () => import('./modules/sell-steps/product-upload/product-upload.module').then(m => m.ProductUploadModule),
  }, 
  {
    path: 'frequent-questions',
    loadChildren: () => import('./modules/questions/frequent-questions/frequent-questions.module').then(m => m.FrequentQuestionsModule),
  }, 
  {
    path: 'question',
    loadChildren: () => import('./modules/questions/question/question.module').then(m => m.QuestionModule),
  }, 
  {
    path: 'inform',
    loadChildren: () => import('./modules/inform/inform.module').then(m => m.InformModule),
  }, 
  {
    path: 'seller-data',
    loadChildren: () => import('./modules/seller/personal-data/seller-data/seller-data.module').then(m => m.SellerDataModule),
  }, 
  {
    path: 'sell',
    loadChildren: () => import('./modules/seller/sell/sell.module').then(m => m.SellModule),
  }, 
  {
    path: 'seller-posts',
    loadChildren: () => import('./modules/seller/posts/seller-posts/seller-posts.module').then(m => m.SellerPostsModule),
  }, 
  {
    path: 'completed-sales',
    loadChildren: () => import('./modules/seller/completed-sales/completed-sales/completed-sales.module').then(m => m.CompletedSalesModule),
  },
  {
    path: 'rejected-sales',
    loadChildren: () => import('./modules/seller/rejected-sales/rejected-sales/rejected-sales.module').then(m => m.RejectedSalesModule),
  }, 
  {
    path: 'delete-posts',
    loadChildren: () => import('./modules/seller/delete-posts/delete-posts/delete-posts.module').then(m => m.DeletePostsModule),
  }, 
  {
    path: 'notifications',
    loadChildren: () => import('./modules/seller/notifications/notifications/notifications.module').then(m => m.NotificationsModule),
  }, 
  {
    path: 'payments',
    loadChildren: () => import('./modules/seller/payments/payments/payments.module').then(m => m.PaymentsModule),
  }, 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
