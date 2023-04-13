import { ThreeDots } from "react-loader-spinner";

const LoadingIndicator = () => (
    <ThreeDots
      height="25"
      width="25"
      radius="9"
      color="#FFFFFF"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      visible={true}
    />
  );

export default LoadingIndicator;
  