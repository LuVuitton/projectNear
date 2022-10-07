import UsersReq from "../../requests/usersReq";
import Preloader from "../Preloader/Preloader";
import usersS from "./UsersTest.module.css";


const UsersTest = () => {
  const usersRes =  UsersReq();
  if (!usersRes) {
    return( 
    <div className={usersS.preloader}> 
    <Preloader/>
    </div>
    )
   } 

const usersData = usersRes.users.map(e=>{
return <li className={usersS.userItem}key={e.id}>
 <div className={usersS.propfilPhoto}> {(e.photos.small === null)?<div>No photo</div>: <img src="e.photo"/> }</div> 
  <div className={usersS.propfilName} >Name: {e.name} </div>
 <div className={usersS.propfilFollow} > {e.followed? <button>unfollow</button>:<button>follow</button> }</div>
  </li>
})


  
  return (
    < >
    <ul className={usersS.mainWrapper}>
     {usersData}
     </ul>
    </>
  );
};

export default UsersTest;
