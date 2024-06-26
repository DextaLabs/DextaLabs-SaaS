import axios from "@/library/utils/axiosInstance";
import Button from "@/components/Shared/Button";
import Forms from "@/components/Shared/Forms";
import Input from "@/components/Shared/Input";
import { FormPropType } from "@/components/Shared/Types/formPropType";
import { FormikValues } from "formik";
import * as Yup from "yup";

const ManagerForm = (props: FormPropType) => {
  const { handleChange, values, isSubmitting, errors, handleBlur } = props;

  return (
    <div className="grid grid-cols-4 gap-4">
      <Input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      <Input
        type="text"
        name="first_name"
        placeholder="First name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.first_name}
      />
      <Input
        type="text"
        name="last_name"
        placeholder="Last name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.last_name}
      />
      <Input
        type="number"
        name="phone_number"
        placeholder="Phone number"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phone_number}
      />
      <Input
        type="text"
        name="language"
        placeholder="Language"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.language}
      />
      <Input
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.address}
      />
      <Input
        type="text"
        name="state"
        placeholder="State"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.state}
      />
      <Input
        type="text"
        name="city"
        placeholder="City"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.city}
      />

      <Input
        type="text"
        name="country"
        placeholder="Country"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.country}
      />

      <Input
        type="number"
        name="postal_code"
        placeholder="Postal code"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.postal_code}
      />
      <Input
        type="text"
        name="date_of_birth"
        placeholder="Birth Date"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.date_of_birth}
      />
      <Input
        type="text"
        name="department"
        placeholder="Department"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.department}
      />
      <Input
        type="text"
        name="hire_date"
        placeholder="Hire Date"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.hire_date}
      />
      <Input
        type="text"
        name="skills"
        placeholder="Skills (Comma separated)"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.skills}
      />
      <Input
        type="number"
        name="experience"
        placeholder="Experience in months"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.experience}
      />
      <Input
        type="text"
        name="education"
        placeholder="Education"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.education}
      />
      <Input
        type="text"
        name="intitution"
        placeholder="Institution"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.intitution}
      />
      <Input
        type="text"
        name="team_size"
        placeholder="Team Size"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.team_size}
      />

      <Input
        type="number"
        name="organization_id"
        placeholder="Organization Id"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.organization_id}
      />

      <div className="col-span-4">
        <Button
          type="submit"
          className="bg-purpleNav hover:bg-purpleNav"
          disabled={isSubmitting}
          isSubmitting={isSubmitting}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password is too short!")
    .required("Password is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string(),
  phone_number: Yup.string()
    .min(8, "Phone number us too short!")
    .required("Phone number is required"),
  language: Yup.string(),
  address: Yup.string(),
  state: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  postal_code: Yup.number()
    .min(6, "Postal code is too short!")
    .max(6, "Postal code is too big!"),
  date_of_birth: Yup.date(),
  department: Yup.string(),
  hire_date: Yup.date(),
  skills: Yup.string(),
  experience: Yup.string(),
  education: Yup.string(),
  intitution: Yup.string(),
  team_size: Yup.string(),
  organization_id: Yup.number(),
  profile_picture: Yup.string(),
});

const Manager = () => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    language: "",
    address: "",
    state: "",
    city: "",
    country: "",
    postal_code: undefined,
    date_of_birth: "",
    department: "",
    hire_date: "",
    skills: [],
    experience: "",
    education: "",
    intitution: "",
    team_size: "",
    organization_id: undefined,
    profile_picture: "",
  };

  const handleCreateManager = async (values: FormikValues) => {
    values.skills = values.skills.split(",").filter((i: string) => !!i.trim());
    try {
      axios.post("/auth/register_user", {
        body: { ...values, role: "Manger" },
      });
    } catch (err) {}
  };

  return (
    <div className="mt-[30px]">
      <Forms
        initialValue={initialValue}
        validate={validationSchema}
        onSubmit={async values => {
          handleCreateManager(values);
        }}
      >
        <ManagerForm {...({} as FormPropType)} />
      </Forms>
    </div>
  );
};

export default Manager;
