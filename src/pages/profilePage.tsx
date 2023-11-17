import Icon from "../components/Profile/icon";
import { useEffect } from "react";
import Profile from "../components/Profile/profileData";
import { Button } from "@nextui-org/react";
import { fetchUser, selectUserData,logoutAsync } from "../features/Auth/authSlice";
import { useSelector,useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/configureStore";

const ProfilePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData.isAuthenticated) {
      navigate("/");
    }
    else if (userData.isAuthenticated) {
      dispatch(fetchUser(userData.userData.accessToken));
    }
  }, [userData.isAuthenticated,dispatch, navigate]);

  const handleLogout = () => {
    dispatch(logoutAsync())
    .then(() => {
      navigate('/');
    })
    .catch((error) => {
      console.error('Logout error:', error);
      navigate('/');
    });
  };

  return (
    <div className="flex flex-col gap-7 items-center justify-center">
      <Icon />
      <Profile />
      <Button color="danger" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default ProfilePage;
