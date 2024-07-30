import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AppLayout from './components/ui/AppLayout';
import DashboardPage from './components/pages/DashboardPage';
import GlobalStyles from './components/style/GlobalStyles';
import LandingPage from './components/pages/LandingPage';
import ProtectedRoute from './components/ui/ProtectedRoute';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000
    }
  }
})


const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <GlobalStyles/>
        <BrowserRouter>
          <Routes>
            <Route 
              element={
                <ProtectedRoute>
                  <AppLayout/>
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard"/>}/>
              <Route path="dashboard" element={<DashboardPage/>}/>
            </Route>
            <Route path="landing" element={<LandingPage/>} />
          </Routes>
        </BrowserRouter>
        <Toaster 
          position="top-center"
          gutter={12}
          containerStyle={{margin: "8px"}}
          toastOptions={
            {
              success: {duration: 3000}, 
              error: {duration: 5000},
              style: { 
                fontSize: '16px', 
                maxWidth: '500px', 
                padding: '16px 24px', 
                backgroundColor: 'var(--color-grey-0)', 
                color: 'var(--color-grey-700)' 
              }
            }
          }
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
  )
}

export default App
