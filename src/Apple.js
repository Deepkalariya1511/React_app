import { Navigate, useNavigate } from "react-router-dom";
export const Apple = () => {
    // const Navigte = useNavigate()
    const Navigate = useNavigate()
    const onHomepageButtonClick = () => {
        Navigate("/");
    };
    return (
        <div>

            <div>Apple page</div>
            <button onClick={onHomepageButtonClick}>Navigate to Home Page</button>
        </div>
    );
};
