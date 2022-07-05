import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { Form, Formik } from "formik";
import { Button, TextField } from "@mui/material";
import { useAddBookMutation } from "../../features/book/bookSlice";

const validationSchema = yup.object({
  title: yup.string().required("Book Title is required"),
  author: yup.string().required("Book Author is required"),
  releasedOn: yup.string().required("Book Release Date is required"), 
  posterUrl: yup.string().required("Book Release Date is required"), 
});

const Add = () => {
    const navigate = useNavigate();
    const [addGenre, { isLoading: isAdding, error }  ] = useAddBookMutation();
    const [formData, setFormData] = useState({
      title: "",
      author: "", 
      releasedOn: "", 
      posterUrl: "", 
    });
  
    const handleAddPost = async (values) => {
      try {
        await addGenre(values).unwrap().then(() =>{
          console.log(values);
          navigate("/", { replace: true })
        })
      } catch {
        console.log('error occurs')
      }
    }
  
    return (
      <div>
         <div className="row mb-2 mb-xl-3 mt-5">
          <h5>Add New Book</h5>
        </div> 
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <Formik
                  initialValues={formData}
                  onSubmit={(values) => {
                    console.log(values)
                    handleAddPost(values);
                  }}
                  validationSchema={validationSchema}
                >
                  {(prop) => (
                    <Form className="row">
                      <div className="col-lg-6">
                        <TextField
                          fullWidth
                          name="title"
                          label="title *"
                          margin="normal"
                          type="text"
                          value={prop.values.title}
                          onChange={prop.handleChange}
                          error={prop.touched.title && Boolean(prop.errors.title) }
                          helperText={prop.touched.title && prop.errors.title}
                        />
                      </div>
                      <div className="col-lg-6">
                        <TextField
                          fullWidth
                          name="author"
                          label="author *"
                          margin="normal"
                          type="text"
                          value={prop.values.author}
                          onChange={prop.handleChange}
                          error={prop.touched.author && Boolean(prop.errors.author) }
                          helperText={prop.touched.author && prop.errors.author}
                        />
                      </div>
                      <div className="col-lg-6">
                        <TextField
                          fullWidth
                          focused
                          name="releasedOn"
                          label="releasedOn *"
                          margin="normal"
                          type="date"
                          value={prop.values.releasedOn}
                          onChange={prop.handleChange}
                          error={prop.touched.releasedOn && Boolean(prop.errors.releasedOn) }
                          helperText={prop.touched.releasedOn && prop.errors.releasedOn}
                        />
                      </div>
                      <div className="col-lg-6">
                        <TextField
                          fullWidth
                          name="posterUrl"
                          label="posterUrl *"
                          margin="normal"
                          type="text"
                          value={prop.values.posterUrl}
                          onChange={prop.handleChange}
                          error={prop.touched.posterUrl && Boolean(prop.errors.posterUrl) }
                          helperText={prop.touched.posterUrl && prop.errors.posterUrl}
                        />
                      </div>
  
                      <div className="col-lg-3 mb-5 mt-3">
                        { error ? <p style={{color: 'red'}} >{error.data.message}</p> : (' ')}
                        <Button
                          fullWidth
                          type="submit"
                          variant="contained"
                          className="btn btn-pill btn-secondary"
                          style={{
                              backgroundColor: "#222E3C",
                              color: "white",
                            }}
                        >
                          {isAdding ? 'Adding...' : 'Save ' }
                        </Button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Add