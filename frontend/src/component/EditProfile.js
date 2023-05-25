import {
  Avatar,
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Card,
} from "@mui/material";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { updateUserById, userSignUpAction } from "../redux/actions/userAction";
import { useState } from "react";
import { useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your First Name")
    .min(3, "First Name should be of minimum 3 characters length"),
  lastName: yup
    .string("Enter your Last Name")
    .min(3, "Last Name should be of minimum 3 characters length"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email"),
  socialsecuritynumber: yup
    .string("Enter your social security number"),
  yearsOfExperience: yup
    .string("Enter your year of experience "),
  workfields: yup
    .string("Enter your workfield"),
  workfield: yup
    .string("Enter your workfield"),
});

const VIEW_OPTIONS = {
  JOB_SEEKER: 1,
  CORPORATE: 0,
};

const EditProfile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.userProfile);
    const { palette } = useTheme();
    const [view, setView] = useState(user?.role);

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      socialsecuritynumber: user?.socialsecuritynumber,
      workfield: user?.workfield,
      workfields: user?.workfields,
      yearsOfExperience: user?.yearsOfExperience,
      address: user?.address,
      bio: user?.bio,
      bioc: user?.bioc,
      nameOfCorporation: user?.nameOfCorporation,
      mobilenumber: user?.mobilenumber,
      role: user?.role
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      const data = { ...values, role: Boolean(view), _id: user?._id};
      dispatch(updateUserById(data));
      actions.resetForm();
    },
  });

  return (
    <Box sx={{ maxWidth: "90%", margin: "auto", pt: 10 }}>
      <Card sx={{ minWidth: 875, bgcolor: palette.secondary.midNightBlue }}>
        <Box
          sx={{ minWidth: 675 }}
          onSubmit={formik.handleSubmit}
          component="form"
          className="form_style border-style"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}>
              <LockOpenIcon />
            </Avatar>
            {view === VIEW_OPTIONS.JOB_SEEKER ? (
              <>
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="E-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="socialsecuritynumber"
                  name="socialsecuritynumber"
                  label="Social Security Number"
                  type="socialsecuritynumber"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Social Security Number"
                  value={formik.values.socialsecuritynumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.socialsecuritynumber &&
                    Boolean(formik.errors.socialsecuritynumber)
                  }
                  helperText={
                    formik.touched.socialsecuritynumber &&
                    formik.errors.socialsecuritynumber
                  }
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="workfield"
                  name="workfield"
                  label="Work fields"
                  type="textarea"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Work field"
                  value={formik.values.workfield}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.workfield && Boolean(formik.errors.workfield)
                  }
                  helperText={
                    formik.touched.workfield && formik.errors.workfield
                  }
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="yearsOfExperience"
                  name="yearsOfExperience"
                  label="Years Of Experience"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Years Of Experience"
                  value={formik.values.yearsOfExperience}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.yearsOfExperience &&
                    Boolean(formik.errors.yearsOfExperience)
                  }
                  helperText={
                    formik.touched.yearsOfExperience &&
                    formik.errors.yearsOfExperience
                  }
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="bio"
                  name="bio"
                  label="Bio "
                  type="textarea"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Bio"
                  value={formik.values.bio}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.bio && Boolean(formik.errors.bio)}
                  helperText={formik.touched.bio && formik.errors.bio}
                />
              </>
            ) : null}
            {view === VIEW_OPTIONS.CORPORATE ? (
              <>
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                />

                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="nameOfCorporation"
                  label="Name Of Corporation"
                  name="nameOfCorporation"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Name Of Corporation"
                  value={formik.values.nameOfCorporation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.nameOfCorporation &&
                    Boolean(formik.errors.nameOfCorporation)
                  }
                  helperText={
                    formik.touched.nameOfCorporation &&
                    formik.errors.nameOfCorporation
                  }
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="E-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="mobilenumber"
                  label="Mobile Number"
                  name="mobilenumber"
                  type="tel"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Mobile Number"
                  value={formik.values.mobilenumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.mobilenumber &&
                    Boolean(formik.errors.mobilenumber)
                  }
                  helperText={
                    formik.touched.mobilenumber && formik.errors.mobilenumber
                  }
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="workfields"
                  name="workfields"
                  label="Work fields"
                  type="textarea"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Work fields"
                  value={formik.values.workfields}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.workfields &&
                    Boolean(formik.errors.workfields)
                  }
                  helperText={
                    formik.touched.workfields && formik.errors.workfields
                  }
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.address && Boolean(formik.errors.address)
                  }
                  helperText={formik.touched.address && formik.errors.address}
                />
                <TextField
                  sx={{
                    mb: 3,
                    "& .MuiInputBase-root": {
                      color: "text.secondary",
                    },
                    fieldset: { borderColor: "rgb(231, 235, 240)" },
                  }}
                  fullWidth
                  id="bioc"
                  name="bioc"
                  label="Bio of Corporate"
                  type="textarea"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder="Bio of Corporate"
                  value={formik.values.bioc}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.bioc && Boolean(formik.errors.bioc)}
                  helperText={formik.touched.bioc && formik.errors.bioc}
                />
              </>
            ) : null}

            <Button fullWidth variant="contained" type="submit">
              Register
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default EditProfile;
