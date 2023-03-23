import { useNavigate } from "react-router-dom";

export const navigateToPage = (url) => {
    const navigate = useNavigate();

    return navigate(url)
}