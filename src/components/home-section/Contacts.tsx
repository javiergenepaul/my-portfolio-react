import React, { useRef, useState } from "react";
import { Button, Card, ContactLogo, Input, TextArea } from "..";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

type ContactsProps = {
  onSubmit: () => void;
};

const Contacts = (props: ContactsProps) => {
  const { onSubmit } = props;
  const form = useRef<any>();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const onSubmitHandler = (event: any) => {
    event?.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      form.current.reset();
      onSubmit();
    }, 2000);
  };

  // const sendEmail = (e: any) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_SERVICE ?? "",
  //       process.env.REACT_APP_TEMPLATE_ID ?? "",
  //       form.current,
  //       process.env.REACT_APP_PUBLIC_KEY
  //     )
  //     .then(
  //       (result: any) => {
  //         console.log(result.text);
  //       },
  //       (error: any) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  const number_of_days = 0;
  return (
    <div className="w-full min-h-[500p]">
      <Card style="py-24 px-16 flex flex-col gap-10">
        <ContactLogo />
        <h3 className="font-medium">Let's Keep in touch</h3>
        <form
          id={"contact-me"}
          ref={form}
          onSubmit={onSubmitHandler}
          className={"flex flex-col gap-4"}
        >
          <Input
            type={"text"}
            required={true}
            name={"user_name"}
            placeholder={"Name"}
          />
          <Input
            type={"email"}
            required={true}
            name={"user_email"}
            placeholder={"Email"}
          />
          <TextArea required={true} name={"message"} placeholder={"Message"} />
        </form>
        <Button
          isLoading={isLoading}
          form={"contact-me"}
          type="submit"
          title={"Submit"}
        />
      </Card>
    </div>
  );
};

export default Contacts;
