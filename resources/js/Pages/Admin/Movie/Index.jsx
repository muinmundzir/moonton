import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";

import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

const Index = ({ auth, flashMessage }) => {
    return (
        <Authenticated auth={auth}>
            <Head title="Dashboard" />
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type="button" className="w-40 mb-8">
                    Insert New Movie
                </Button>
            </Link>
            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
        </Authenticated>
    );
};

export default Index;
