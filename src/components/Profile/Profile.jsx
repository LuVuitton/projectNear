import profileS from "./Profile.module.css";

function Profile() {
  return (
    <div className={profileS.mainWrapper}>
      <div className={profileS.name}>

        <div className={profileS.photo}>Photo</div>
        <div>Name</div>
        <div>SurName</div>

      </div>

      <div className={profileS.about}>What I know</div>

      <div className={profileS.completed}>What i did</div>
    </div>
  );
}

export default Profile;
