import axios from "axios";

export async function Login(data) {
  try {
    console.log("object");
    const res = await axios({
      method: "post",
      url: "https://dev.api.infigon.app/auth/signin-with-phone-and-password",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        phoneNumber: data.phoneNumber,
        password: data.password,
      },
    });
    console.log(res?.data);
    console.log(res?.status);
    return {
      accessToken: res.data.accessToken,
      refreshToken: res.data.refreshToken,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function User(data) {
    try {
        const res = await axios({
            method: "get",
            url:"https://dev.api.infigon.app/user/get-profile",
            headers: {
                Authorization: `Bearer ${data}`,
            }
        });
        const userData = res.data;
        const user = {
            Name: userData.fullName,
            Email: userData.email,
            State: userData.state,
            City: userData.city,
            Gender: userData.gender,
            Grade: userData.grade,
            DOB: userData.dob,
            Qualification: userData.currentQualification,
        }
        return { data:user};
    } catch (error) {
        console.log(error)
    }
}

export async function Logout(data) {
  console.log(data);
}
