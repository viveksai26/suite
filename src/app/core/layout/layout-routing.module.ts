import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from "./layout-component/layout-component.component";

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // {
            //     path: 'abc',
            //     loadChildren: () => import().then(m) => matchMedia.module
            // }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}