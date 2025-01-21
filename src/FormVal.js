import React from "react";
import { useForm } from "react-hook-form";
import "./form.css";

const FormVal = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmpassword, setConfirmpassword] = useState("");
  // const [age, setAge] = useState("");
  // const [gender, setGender] = useState("");
  // const [errors, setErrors] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password =watch("password")

  // const validateForm = () => {
  //   const errors = {};

  //   if (!name) {
  //     errors.name = "Name is Required";
  //   }
  //   if (!email) {
  //     errors.email = "Email is Required";
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errors.email = "Email is Invalid";
  //   }
  //   if (!password) {
  //     errors.password = "Password is Required";
  //   } else if (password.length < 6) {
  //     errors.password = "Password must be 6 characters";
  //   }
  //   if (!confirmpassword) {
  //     errors.confirmpassword = "Confirmpassword is Required";
  //   } else if (password !== confirmpassword) {
  //     errors.confirmpassword = "Password DO NOT MATCH";
  //   }
  //   if (!age) {
  //     errors.age = "Age is Required";
  //   } else if (isNaN(age) || age < 18) {
  //     errors.age = "Age must be a number and at least 18";
  //   }
  //   if (!gender) {
  //     errors.gender = "Gender is required";
  //   }
  //   console.log(errors);
  //   return errors;
  // };

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   const validationErrors = validateForm();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //   } else {
  //     console.log("Form Submitted");
  //   }
  // }

  const onsubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is Required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is Required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 6,
                message: "Password must be 6 characters long",
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label>Confirm Password: </label>
          <input
            type="password"
            name="confirmpassword"
            {...register("confirmpassword", {
              required: "Confirmpassword is Required",
              validate: value => value === password || 'Password do not match'
            })}
          />
          {errors.confirmpassword && (
            <span>{errors.confirmpassword.message}</span>
          )}
        </div>
        <div>
          <label>Age: </label>
          <input
            type="text"
            name="age"
            {...register("age", { required: "Age is Required" })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label>Gender: </label>
          <select
            name="gender"
            {...register("gender", { required: "Gender is Required" })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <span>{errors.gender.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormVal;
