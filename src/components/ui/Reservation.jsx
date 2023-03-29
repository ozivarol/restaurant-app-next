import React from "react";
import Input from "../form/Input";
import Title from "./Title";
const { dancingClass, josefinSansClass } = require("../../assets/font");
import { useFormik } from "formik";
import { reservationSchema } from "@/schema/reservation";
const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };
  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullName: "",
        phoneNumber: "",
        email: "",
        persons: "",
        date: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: values.fullName,
      errorMessage: errors.fullName,
      touched: touched.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      value: values.persons,
      errorMessage: errors.persons,
      touched: touched.persons,
    },
    {
      id: 5,
      name: "persons",
      name: "date",
      type: "datetime-local",
      placeholder: "How Many Persons?",
      value: values.date,
      errorMessage: errors.date,
      touched: touched.date,
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <Title addClass={`${dancingClass} text-[40px]`}>Book A Table</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
        <form className="lg:flex-1 w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
          </div>
          <button
            className={`${josefinSansClass} btn-primary mt-4`}
            type="submit"
          >
            BOOK NOW
          </button>
        </form>
        <div className="lg:flex-1  w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49317.699077320736!2d29.987040999999998!3d39.4160692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c948171562e423%3A0x7357c4e7ede1b93c!2zS8O8dGFoeWEsIEvDvHRhaHlhIE1lcmtlei9Lw7x0YWh5YQ!5e0!3m2!1str!2str!4v1678746544698!5m2!1str!2str"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
