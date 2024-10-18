import React from "react";
import { render, screen } from "@testing-library/react";

import Stage2Page from "../Stage2Page";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders stage2 page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Stage2Page />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("stage2-datatable")).toBeInTheDocument();
    expect(screen.getByRole("stage2-add-button")).toBeInTheDocument();
});
