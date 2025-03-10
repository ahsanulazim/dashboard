import { createContext, useContext, useState } from "react";

const TitleCon = createContext();

const TitleContext = ({ children }) => {

    const [title, setTitle] = useState("Dashboard");

    return (
        <TitleCon value={{ title, setTitle }}>
            {children}
        </TitleCon>
    );
};

export default TitleContext;

export function useTitle() {
    return useContext(TitleCon);
}