import { Spin } from 'antd';

const SpinLoading = () => {
  return (
    <div className="container-max h-full">
      <div className="grid items-center content-center justify-center h-full">
        <Spin size="large" className="ant-spin-dot" />
      </div>
    </div>
  );
};

export default SpinLoading;
