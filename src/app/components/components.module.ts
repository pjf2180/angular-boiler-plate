import { NgModule } from '@angular/core';
import { ItemCardComponent } from './item-card/item-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { NewProductComponent } from './new-product/new-product.component';
import { AdminProductsListComponent } from './admin-products-list/admin-products-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { ProductSalesReportComponent } from './product-sales-report/product-sales-report.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { ImageThumbnailComponent } from './image-thumbnail/image-thumbnail.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { GoalComponent } from './goal/goal.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    ItemCardComponent,
    ProductCardComponent,
    NewProductComponent,
    AdminProductsListComponent,
    EditProductComponent,
    BestSellersComponent,
    ProductThumbnailComponent,
    SalesReportComponent,
    ProductSalesReportComponent,
    IndicatorComponent,
    ImageThumbnailComponent,
    CarouselComponent,
    CarouselItemComponent,
    SalesSummaryComponent,
    GoalComponent,
    AddStockComponent,
    ProductMenuComponent,
    MenuComponent,
    CategoriesComponent,
    ProductDetailComponent,
    CategoryOverviewComponent,
    SideMenuComponent

  ],
  imports: [
    SharedModule
  ],
  exports: [
    ItemCardComponent, 
    ProductCardComponent, 
    NewProductComponent,
    AdminProductsListComponent,
    BestSellersComponent,
    SalesReportComponent,
    IndicatorComponent,
    SalesSummaryComponent,
    MenuComponent,
    SideMenuComponent
  ]
})
export class ComponentsModule { }
