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
console.log(usersRes.users);
const usersData = usersRes.users.map(e=>{
return <li key={e.id}>
  Photo: {(e.photos.small === null)?'No photo': <img src="e.photo"/> } 
  Name: {e.name} | 
  followed: {e.followed? <button>unfollow</button>:<button>follow</button> }
  </li>
})


  
  return (
    < >
    <ul>
     {usersData}
     </ul>
    </>
  );
};

export default UsersTest;
