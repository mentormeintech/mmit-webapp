import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

import Alert from "@/src/features/Alert";
import Footer from "@/src/Components/Footer";
import Spinner from "@/src/Components/Spinner";
import { careerData } from "@/src/redux/slices/craeerSlice";
import { putRequest, userGetRequest } from "@/src/utilities/apiClient";
import CareerPath from "@/src/Components/CareerPath";
// import SignupHeader from "../../Components/SignupHeader";

export default function Career() {
  const [loading, setloading] = useState(false);
  const [careerLoading, setcareerLoading] = useState(false);
  const [careers, setcareers] = useState([]);
  const [careerPath, setcareerPath] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  async function getCarees() {
    try {
      setloading(true);
      // await setToken()
      const response = await userGetRequest(`careers`);
      if (response && response.success === true) {
        dispatch(careerData(response.data));
        setcareers(response.data);
        setloading(false);
      } else {
        Alert(response.message, "warning");
        setloading(false);
      }
    } catch (error) {
      Alert(error.message, "error");
      setloading(false);
    }
  }

  async function createCareer(event) {
    try {
      event.preventDefault();
      if (!careerPath) {
        return Alert("Career path is empty", "warning");
      } else {
        const career_paths = [];
        career_paths.push(careerPath);
        setcareerLoading(true);
        const formData = {
          career_paths: career_paths,
        };
        const response = await putRequest(`mentor/career`, formData);
        if (response && response.success === true) {
          Alert(response.message, "success");
          setTimeout(() => {
            router.push("/mentorregist");
            setcareerLoading(false);
          }, 200);
        } else {
          Alert(response.message, "warning");
          return setcareerLoading(false);
        }
      }
    } catch (error) {
      Alert(error.message, "error");
      setloading(false);
    }
  }

  useEffect(() => {
    getCarees();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div>
            {/* <SignupHeader /> */}
            <CareerPath
              careers={careers}
              setcareerPath={setcareerPath}
              careerPath={careerPath}
              createCareer={createCareer}
              loading={careerLoading}
            />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}
