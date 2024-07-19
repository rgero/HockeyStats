import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import GlobalStyles from './components/style/GlobalStyles';
import LandingPage from './components/pages/LandingPage';
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
            <Route index element={<LandingPage/>}/>
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
      </QueryClientProvider>
  )
}

export default App
