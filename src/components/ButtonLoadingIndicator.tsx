import { ThreeDots } from "react-loader-spinner";


interface LoadingIndicatorProps {
    color?: string;
}
const LoadingIndicator: React.FC<LoadingIndicatorProps> = ( {color} ) => (
  
    <ThreeDots
      height="25"
      width="25"
      radius="9"
      color={color ? color : "white"}
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
  