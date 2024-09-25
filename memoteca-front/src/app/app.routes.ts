import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'quadro'
    },
    {
        path: 'pensamento',
        component: CriarPensamentoComponent
    },
    {
        path: 'quadro',
        component: ListarPensamentoComponent
    },
    {
        path: 'pensamento/excluir/:id',
        component: ExcluirPensamentoComponent
    },
    {
        path: 'pensamento/editar/:id',
        component: EditarPensamentoComponent
    }
];
