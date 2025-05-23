import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./index.css"
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react'
import { BrowserRouter, Route, Routes, useNavigate, type To } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import RootLayout from './layouts/RootLayout.tsx'
import CreateServerModal from './components/modals/createServerModal/index.tsx'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

const RouterComponent = () => {
   const navigate = useNavigate()

   return (
     <ClerkProvider
      publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      navigate={(to) => navigate(to)}
    >
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <CreateServerModal />
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </ClerkProvider>
   )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <MantineProvider>
        <BrowserRouter>
          <RouterComponent />
        </BrowserRouter>
     </MantineProvider>
  </StrictMode>,
)

export default RouterComponent;
