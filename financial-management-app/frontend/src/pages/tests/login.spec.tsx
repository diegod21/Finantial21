import { render, screen } from "@testing-library/react";
import Login from "../Login/Login";
import React from "react";

describe("Login", () => {
    it("should render", () => {
        render(<Login />);

        expect(screen.getByText("Senha")).toBeInTheDocument();
    })
})