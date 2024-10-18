import React from "react";
import { render, screen } from "@testing-library/react";

import Stage1Page from "../Stage1Page";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders stage1 page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Stage1Page />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("stage1-datatable")).toBeInTheDocument();
    expect(screen.getByRole("stage1-add-button")).toBeInTheDocument();
});
