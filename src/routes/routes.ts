import { JSX, lazy, LazyExoticComponent } from 'react';

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const Lazy1 = lazy(() => import('../01-lazyload/pages/LazyPage1.tsx'));
const Lazy2 = lazy(() => import('../01-lazyload/pages/LazyPage2.tsx'));
const Lazy3 = lazy(() => import('../01-lazyload/pages/LazyPage3.tsx'));

export const routes: Route[] = [
  {
    path: '/lazy-1',
    Component: Lazy1,
    name: 'Lazy 1',
  },
  {
    path: '/lazy-2',
    Component: Lazy2,
    name: 'Lazy 2',
  },
  {
    path: '/lazy-3',
    Component: Lazy3,
    name: 'Lazy 3',
  },
];
