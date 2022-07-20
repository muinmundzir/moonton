import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/inertia-react";
import ValidationErrors from "@/Components/ValidationErrors";

import Authenticated from "@/Layouts/Authenticated/Index";
import Label from "@/Components/Label";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

const Create = ({ auth }) => {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    useEffect(() => {}, []);

    const handleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("test");
        post(route("admin.dashboard.movie.store"));
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Add Movie" />
            <h1 className="text-xl">Insert a New Movie</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={handleSubmit} className="mt-2">
                <Label forInput="name" value="Name" />
                <Input
                    type="text"
                    name="name"
                    variant="primary-outline"
                    handleChange={handleChange}
                    placeholder="Enter the name of the movie"
                    isError={errors.name}
                    className="mb-4"
                />
                <Label forInput="category" value="Category" />
                <Input
                    type="text"
                    name="category"
                    variant="primary-outline"
                    handleChange={handleChange}
                    placeholder="Enter the category of the movie"
                    isError={errors.category}
                    className="mb-4"
                />
                <Label forInput="video_url" value="Video URL" />
                <Input
                    type="text"
                    name="video_url"
                    variant="primary-outline"
                    handleChange={handleChange}
                    placeholder="Enter the video url of the movie"
                    isError={errors.video_url}
                    className="mb-4"
                />
                <Label forInput="thumbnail" value="Thumbnail" />
                <Input
                    type="file"
                    name="thumbnail"
                    variant="primary-outline"
                    handleChange={handleChange}
                    placeholder="Insert thumbnail url of the movie"
                    isError={errors.thumbnail}
                    className="mb-4"
                />
                <Label forInput="rating" value="Rating" />
                <Input
                    type="number"
                    name="rating"
                    variant="primary-outline"
                    handleChange={handleChange}
                    placeholder="Enter rating of the movie"
                    isError={errors.rating}
                    className="mb-4"
                />
                <div className="flex flex-row mb-4">
                    <Label
                        forInput="is_featured"
                        value="Is Featured"
                        className="mr-3"
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                        className="mt-1"
                    />
                </div>
                <Button type="submit" processing={processing}>
                    Save
                </Button>
            </form>
        </Authenticated>
    );
};

export default Create;
