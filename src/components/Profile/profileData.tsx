import { Chip } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUserData } from "../../features/Auth/authSlice";

const ProfileData = () => {
  const userData = useSelector(selectUserData);
  const { data } = userData.userInfo || {};
  const [user, setUser] = useState<any[]>([]);
  console.log(data);

  useEffect(() => {
    if (data) {
      const mappedUser = Object.entries(data).map(([key, value]) => ({
        name: key,
        value: value !== null ? value : "Null",
      }));
      setUser(mappedUser); 
    }
  }, [data]);

  return (
    <div className="w-full flex flex-col gap-2 items-center justify-center">
      {user && user.map((item, index) => (
        <div key={index} className="flex gap-2 flex-row">
          <Chip color="secondary" variant="solid">
            {item.name}
          </Chip>
          :
          {item.value !== "Null" ? (
            <Chip color="secondary" variant="bordered">
              {item.value}
            </Chip>
          ) : (
            <Chip color="warning" variant="faded">
              Not Defined
            </Chip>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileData;
