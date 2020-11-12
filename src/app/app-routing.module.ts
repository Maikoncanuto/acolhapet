import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'perfil',
        loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule)
    },
    {
        path: 'principal',
        loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalPageModule)
    },
    {
        path: 'chat',
        loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
    },
    {
        path: 'configuracao',
        loadChildren: () => import('./pages/configuracao/configuracao.module').then(m => m.ConfiguracaoPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
