import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Login from "../Login/Login";
import React from "react";

describe("Login", () => {
    it("should render", async () => {
        render(<Login />);
        expect(screen.getByText("Senha")).toBeInTheDocument();
        expect(screen.getByText("Usuário")).toBeInTheDocument();
    });
});
