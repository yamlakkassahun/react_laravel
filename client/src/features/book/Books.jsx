import React, { useEffect, useState } from "react";
import {
    useDeleteBookMutation,
    useGetBooksQuery,
} from "./bookSlice";
import { ShimmerTable } from "react-shimmer-effects";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { ShimmerThumbnail } from "react-shimmer-effects";

const Books = () => {
    const navigate = useNavigate();
    const { data: books, error, isLoading } = useGetBooksQuery();
    const [deleteBook, { isLoading: isDeleting }] = useDeleteBookMutation();

    const handelEditBook = (id) => {
        navigate(`/edit/${id}`, { replace: true });
    };

    return (
        <div className="mt-5">
            <div className="col-12">
                {isLoading ? (
                    <div className="row">
                        <div className="col-lg-2 col-md-3 col-6">
                            <ShimmerThumbnail height={250} rounded />
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <ShimmerThumbnail height={250} rounded />
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <ShimmerThumbnail height={250} rounded />
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <ShimmerThumbnail height={250} rounded />
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <ShimmerThumbnail height={250} rounded />
                        </div>
                        <div className="col-lg-2 col-md-3 col-6">
                            <ShimmerThumbnail height={250} rounded />
                        </div>
                    </div>
                ) : error ? (
                    <div>
                        <p>Sorry No Data Found</p>
                        <p>{error}</p>
                    </div>
                ) : (
                    <div className="row">
                        {books.map((book) => (
                            <div className="col-lg-2 col-md-3 col-6" key={book.id}>
                                <div class="card">
                                    <Link to={`/book-detail/${book.id}`}>
                                    <img class="card-img-top img-fluid" src={book.posterUrl} alt="Title" />
                                    </Link>
                                    <div class="card-body">
                                        <button
                                            className="btn btn-secondary mb-3 w-100"
                                            onClick={() => handelEditBook(book.id)}
                                        >
                                            {" "}
                                            edit
                                        </button>
                                        <button
                                            className="btn btn-secondary w-100"
                                            onClick={() => deleteBook(book.id)}
                                        >
                                            {isDeleting ? "Deleting..." : "Delete"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Books