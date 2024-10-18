import React from "react";
import { render, screen } from "@testing-library/react";

import KategoriPage from "../KategoriPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders kategori page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <KategoriPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("kategori-datatable")).toBeInTheDocument();
    expect(screen.getByRole("kategori-add-button")).toBeInTheDocument();
});
