import React, { useContext, useEffect, useState } from "react";
import { OfferStyled, OfferWrapper } from "../Offer/view";
import TopSection from "../../../layouts/sections/TopSection";
import UserImageEdit from "./components/UserImageEdit";
import UserInfoEdit from "./components/UserInfoEdit";
import Description from "../../UIElements/Description";
import UserDescriptionEdit from "./components/UserDescriptionEdit";
import UserEditSubmit from "./components/UserEditSubmit";
import { UserContext } from "../../../contextProviders/UserContextProvider";
import { useRouter } from 'next/router'
import {useSelector} from "react-redux";


const UserPageEdit = () => {
  const { userData, userId } = useContext(UserContext);
  const router = useRouter();
  const userShit = useSelector(state => state.user)
  const [user, setUser] = useState(userShit);
  const handleCreate = () => {

    fetch(`http://77.55.221.84:3102/zpi/api/user/${userData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': userId
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        name: user.name,
        photo: user.photo,
        about: user.about,
        email: user.email,
        phone_number: user.phone_number,
        facebook: user.facebook,
        city: user.city,
        address: user.address,
      })
    })
        .then(result => {
          if (result.ok) {
            document.cookie = `token=${result.headers.get('x-auth-token')}`
            router.push('/user/[id]', `/user/${userData.id}`)
          }
        })
        .catch(err => console.log(err))
  }


  return (
    <OfferWrapper>
        {userData&&
      <OfferStyled>
        <TopSection
          image={<UserImageEdit />}
          rightSideContent={<UserInfoEdit setData={setUser} data={user} />}
        />
        <Description title={"Info"} content={<UserDescriptionEdit setData={setUser} data={user} />} />
        <UserEditSubmit onPress={handleCreate} />
      </OfferStyled>}
    </OfferWrapper>
  );
};

export default UserPageEdit;
