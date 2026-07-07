import { RouterProvider } from 'react-router';
import { router } from './routes';
import { AppProvider } from './context/AppContext';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Toaster } from 'sonner';
import { useDynamicFontLinks, useSiteResources } from './utils/siteResources';

function AppContent() {
  const [isReady, setIsReady] = useState(false);
  const { fontCssUrls } = useSiteResources();

  useDynamicFontLinks(fontCssUrls);

  useEffect(() => {
    // 초기 렌더링 완료 후 준비 상태로 변경
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-white">
        <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
      </div>
    );
  }

  return <RouterProvider router={router} />;
}

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);
  const isAdminPath = pathname.startsWith('/admin');

  useEffect(() => {
    const updatePathname = () => setPathname(window.location.pathname);
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function pushState(...args) {
      originalPushState.apply(window.history, args);
      updatePathname();
    };

    window.history.replaceState = function replaceState(...args) {
      originalReplaceState.apply(window.history, args);
      updatePathname();
    };

    window.addEventListener('popstate', updatePathname);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', updatePathname);
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="w-full flex justify-center bg-gray-100 min-h-screen">
        <div className={`w-full bg-white min-h-screen ${isAdminPath ? 'max-w-none' : 'md:max-w-[480px]'}`}>
          <AppProvider>
            <AppContent />
            <Toaster 
              position="top-center" 
              expand={false}
              richColors
              toastOptions={{
                style: { 
                  fontFamily: "'Noto Sans KR', sans-serif",
                  maxWidth: '100%',
                },
              }}
            />
          </AppProvider>
        </div>
      </div>
    </ErrorBoundary>
  );
}
