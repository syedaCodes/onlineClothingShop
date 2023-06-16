import {
    createDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createDocumentFromAuth(user);
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    );
};

export default SignIn;
