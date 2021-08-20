import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as IconError } from "./img/icon-error.svg";

const clsx = (...str) => {
  return str.filter(Boolean).join(" ");
};

const limitEn = (value) => {
  return value && /^[a-zA-Z]*$/.test(value);
};

const limitEmail = (value) => {
  return (
    value &&
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)
  );
};

const limitPassword = (value) => {
  return value?.length <= 12 && value?.length >= 6;
};

const Form = () => {
  const [formInput, setFormInput] = useState([
    {
      id: "first-name",
      label: "First Name",
      error: false,
      errorTips: "Please input english string",
      validator: limitEn,
    },
    {
      id: "last-name",
      label: "Last Name",
      error: false,
      errorTips: "Please input english string",
      validator: limitEn,
    },
    {
      id: "email",
      label: "Email Address",
      error: false,
      errorTips: "Looks like this is not an email",
      validator: limitEmail,
    },
    {
      id: "password",
      label: "Password",
      error: false,
      errorTips: "Password should be 6 - 12 bite",
      validator: limitPassword,
      type: "password",
    },
  ]);

  const submit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    setFormInput(() => {
      const setForm = formInput.map((input) => {
        return {
          ...input,
          error: !input.validator(data[input.id]),
        };
      });
      const isValid = setForm.every((input) => !input.error);
      isValid ? console.log("資料正確", data) : console.log("資料有誤");
      return setForm;
    });
  };

  const checkValue = (e) => {
    const value = e.target.value;
    const target = e.target.id;
    setFormInput(() => {
      return formInput.map((input) => {
        if (target === input.id) input.error = !input.validator(value);
        return input;
      });
    });
  };

  return (
    <form
      className="my-4 bg-white p-4 space-y-4 rounded-lg shadow-xl"
      onSubmit={submit}
    >
      {formInput.map((item) => {
        return (
          <TextField
            label={item.label}
            id={item.id}
            key={item.id}
            errorTips={item.errorTips}
            error={item.error}
            type={item.type}
            checkValue={checkValue}
          />
        );
      })}
      <button className="bg-green text-white w-full py-4 rounded-md shadow-xl">
        CLAIM YOUR FREE TRIAL
      </button>
      <div className="text-gray-400 text-xs px-4">
        By clicking the button, you are agreeing to our{" "}
        <a href="#" className="text-red font-bold">
          Terms and Services
        </a>
      </div>
    </form>
  );
};

const TextField = ({
  id,
  label,
  error,
  errorTips,
  type = "text",
  checkValue,
}) => {
  const [inputValue, setInputValue] = useState("");

  const firstFocus = useRef(true);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const onBlur = (e) => {
    if (firstFocus.current) {
      firstFocus.current = false;
    }
    checkValue(e);
  };

  const onKeyUp = (e) => {
    if (firstFocus.current) return;
    checkValue(e);
  };

  return (
    <section className="text-sm">
      <div className="relative flex items-center">
        <label
          htmlFor={id}
          className={clsx(
            "absolute",
            "p-4",
            inputValue !== "" ? "opacity-0" : "",
          )}
        >
          {label}
        </label>
        <input
          type="text"
          id={id}
          name={id}
          type={type}
          className={clsx(
            "w-full",
            "p-4 pr-10",
            "outline-none border rounded-md  focus:border-blue",
            error && "border-red",
          )}
          value={inputValue}
          onChange={onChange}
          onBlur={onBlur}
          onKeyUp={onKeyUp}
        />
        {error && <IconError className="absolute right-2 w-5 h-5 text-red" />}
      </div>
      {error && <p className="text-right text-red text-xs my-1">{errorTips}</p>}
    </section>
  );
};

function App() {
  return (
    <div className="min-h-screen py-20 px-8 text-center md:flex items-center max-w-screen-xl mx-auto">
      <article className="text-white flex-1 md:text-left">
        <h1 className="text-3xl font-bold md:text-5xl md:text-left md:px-24">
          Learn to code by watching others
        </h1>
        <p className="mt-8 md:px-24">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </article>
      <section className="flex-1">
        <div className="text-white mt-16 bg-blue rounded-lg py-4 px-16 shadow-xl">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </div>
        <Form />
      </section>
    </div>
  );
}

export default App;
