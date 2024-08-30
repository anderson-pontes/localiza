import './global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RouterProvider, RouteObject } from 'react-router-dom';
import { Toaster } from 'sonner';
import { queryClient } from '../src/lib/react-query';
import { Router } from './routes';
import { ToastContainer } from 'react-toastify';
import { SearchProvider } from '../src/Context/SearchContext';
import SearchPage from './pages/app/SearchPage';
import ResultsPage from './pages/app/ResultsPage'
import "react-toastify/dist/ReactToastify.css";
import { createHashRouter } from "react-router-dom";

// Definindo as novas rotas
const newRoutes: RouteObject[] = [
  { path: "/", element: <SearchPage /> },
  { path: "/results", element: <ResultsPage /> },
];

// Combinando as rotas do AdminRouter com as novas rotas
const combinedRouter = createHashRouter([
  ...Router.routes,  // Supondo que AdminRouter já possui um array de rotas
  ...newRoutes,  // Adiciona as novas rotas definidas acima
]);

export const App  = () => (
    <div className="min-h-screen bg-indigo-200 ">

<HelmetProvider>
      <Helmet titleTemplate="Localiza | %s" />
      <Toaster richColors />
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        {/* Adiciona o SearchProvider ao redor de RouterProvider */}
        <SearchProvider>
          <RouterProvider router={combinedRouter} />
        </SearchProvider>
      </QueryClientProvider>
  </HelmetProvider>

    </div>
  
);
