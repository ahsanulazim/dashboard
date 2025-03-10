import { useEffect } from "react";
import { useTitle } from "./TitleContext";

function TitleUpdater() {
    const { title } = useTitle();

    useEffect(() => {
        document.title = title;
    }, [title]);

    return null;
}

export default TitleUpdater;
