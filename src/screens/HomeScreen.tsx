import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  About,
  Contacts,
  FadeAnimation,
  Header,
  ScreenContainer,
  Skills,
} from "../components";

type Props = {
  theme: "dark" | "light";
};

const HomePage = (props: Props) => {
  const { theme } = props;
  const skills = useRef<any>(null);
  const { t } = useTranslation();

  const notify = () =>
    toast.success("Your email has been sent.", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });

  return (
    <>
      <Header title={t("home")} />
      <FadeAnimation>
        <ScreenContainer>
          <div className="sticky top-20 h-[550px] basis-1/2">
            <About />
          </div>
          <div className="basis-1/2 w-full h-full flex flex-col gap-4">
            <Skills ref={skills} name="sample" />
            <Contacts onSubmit={notify} />
          </div>
          <div className="fixed">
            <ToastContainer />
          </div>
        </ScreenContainer>
      </FadeAnimation>
    </>
  );
};

export default HomePage;
