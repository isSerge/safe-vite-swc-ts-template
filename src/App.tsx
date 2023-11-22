import { useSafeAppsSDK } from '@safe-global/safe-apps-react-sdk';

function App() {
  const { safe } = useSafeAppsSDK();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-lg text-gray-700 mb-2">
          Safe address: {safe.safeAddress}
        </p>
      </div>
    </div>
  );
}

export default App;
