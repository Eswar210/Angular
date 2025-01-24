import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {path:'',component:ServiceComponent}
  // {path:'nav',component:NavComponent},
  // {path:'table',component:TableComponent},
  // {path:'service',component:ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
