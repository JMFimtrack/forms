import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'prestaprenda',
    loadComponent: () => import("./pages/presta-prenda/presta-prenda.component")
    .then(c => c.PrestaPrendaComponent)
  },

  { path: '',
    loadComponent: () => import("./components/error-not-found/error-not-found.component")
    .then(c => c.ErrorNotFoundComponent)
  },
  { path: '**',
    loadComponent: () => import("./components/error-not-found/error-not-found.component")
    .then(c => c.ErrorNotFoundComponent)
  }
];
