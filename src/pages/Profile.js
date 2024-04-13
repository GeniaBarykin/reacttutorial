import { useContext } from "react";
import { AppContext } from "../App"
import { ChangeProfile } from "./ChangeProfile"

export const Profile = (props) =>{
    const {username } = useContext(AppContext);
    return <div>
        {" "}
        Profile of {username}
        <ChangeProfile />
    </div>
}