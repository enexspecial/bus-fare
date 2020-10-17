import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

// import { Dashboard } from './login.component';

const routes: Routes = [
    // { path: 'dashboard', component: LoginComponent}
  ]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class LoginRoutingModule {}