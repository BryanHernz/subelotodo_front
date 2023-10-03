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
    path: 'admin-data',
    loadChildren: () => import('./modules/admin/personal-data/admin-data/admin-data.module').then(m => m.AdminDataModule),
  },
  {
    path: 'banners',
    loadChildren: () => import('./modules/admin/banners/banners/banners.module').then(m => m.BannersModule),
  }, 
  {
    path: 'banners-home',
    loadChildren: () => import('./modules/admin/banners/banners-home/banners-home.module').then(m => m.BannersHomeModule),
  }, 
  {
    path: 'banners-categories',
    loadChildren: () => import('./modules/admin/banners/banners-categories/banners-categories.module').then(m => m.BannersCategoriesModule),
  }, 
  {
    path: 'banners-others',
    loadChildren: () => import('./modules/admin/banners/banners-others/banners-others.module').then(m => m.BannersOthersModule),
  }, 
  {
    path: 'admin-posts',
    loadChildren: () => import('./modules/admin/posts/posts/posts.module').then(m => m.PostsModule),
  }, 
  {
    path: 'admin-posts-form',
    loadChildren: () => import('./modules/admin/posts/posts-form/posts-form/posts-form.module').then(m => m.PostsFormModule),
  }, 
  {
    path: 'admin-posts-control',
    loadChildren: () => import('./modules/admin/posts/posts-control/posts-control/posts-control.module').then(m => m.PostsControlModule),
  }, 
  {
    path: 'admin-posts-validate',
    loadChildren: () => import('./modules/admin/posts/posts-control/posts-validate/posts-validate.module').then(m => m.PostsValidateModule),
  }, 
  {
    path: 'admin-sales-register',
    loadChildren: () => import('./modules/admin/posts/posts-control/sales-register/sales-register.module').then(m => m.SalesRegisterModule),
  }, 
  {
    path: 'admin-categories',
    loadChildren: () => import('./modules/admin/categories/categories/categories.module').then(m => m.CategoriesModule),
  },
  {
    path: 'admin-sellers',
    loadChildren: () => import('./modules/admin/sellers/sellers.module').then(m => m.SellersModule),
  },
  {
    path: 'admin-frequent-questions',
    loadChildren: () => import('./modules/admin/admin-frequent-questions/admin-frequent-questions/admin-frequent-questions.module').then(m => m.AdminFrequentQuestionsModule),
  },
  {
    path: 'admin-metrics',
    loadChildren: () => import('./modules/admin/metrics/metrics.module').then(m => m.MetricsModule),
  },
  {
    path: 'admin-notifications',
    loadChildren: () => import('./modules/admin/notifications/admin-notifications/admin-notifications.module').then(m => m.AdminNotificationsModule),
  },
  {
    path: 'admin-payments',
    loadChildren: () => import('./modules/admin/payments/admin-payments/admin-payments.module').then(m => m.AdminPaymentsModule),
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
