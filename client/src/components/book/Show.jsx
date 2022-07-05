import { useParams, useNavigate } from "react-router";
import {
    useGetBookQuery,
    useUpdateBookMutation,
} from "../../features/book/bookSlice";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";

const Show = () => {
    const { id } = useParams();
    const { data: book, isLoading } = useGetBookQuery(id);
    return (
        <div>
            {!isLoading ? (
                <div class=" row mt-5">
                    <div class="col-md-3">
                        <img class="card-img-top" src={book.posterUrl} alt="Title" />
                    </div>
                    <div class="card col-md-9">
                        <div class="card-body">
                            <h4 class="card-title">{book.title}</h4>
                            <p class="card-text">{book.author}</p>
                            <p class="card-text"></p>
                        </div>
                    </div>
                </div>
            ) : (
                <p>loading .....</p>
            )}

        </div>
    )
}

export default Show