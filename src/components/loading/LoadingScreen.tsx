import "./LoadingStyle.css";

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
      {/* <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="text">Loading...</div>
      </div> */}
      Loading...
    </div>
  );
};

export default LoadingScreen;
