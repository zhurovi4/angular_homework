import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SourcesComponent } from './sources/sources.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsitemComponent } from './newsitem/newsitem.component';
import { LoadmoreComponent } from './loadmore/loadmore.component';
import { RouterModule, Routes} from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component'

const AppRoutes: Routes = [
  {path: '', component: NewsfeedComponent},
  {path: 'add', component: AddComponent },
  {path: 'edit', component: EditComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SourcesComponent,
    NewsfeedComponent,
    NewsitemComponent,
    LoadmoreComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
