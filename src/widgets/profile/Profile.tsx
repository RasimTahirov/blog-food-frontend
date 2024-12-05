import { AccountButtonButtom, AccountButtonTop, ProfileInfo } from './ui';

const Profile = () => {
  return (
    <main className="container-max text-textBlack">
      <div className="flex justify-center main-container h-screen items-center">
        <div className="grid border-solid border-2 border-borderRed rounded-lg p-5">
          <AccountButtonTop />
          <ProfileInfo />
          <AccountButtonButtom />
        </div>
      </div>
    </main>
  );
};

export default Profile;
