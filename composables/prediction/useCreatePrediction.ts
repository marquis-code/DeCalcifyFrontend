import { predict_api } from "@/api_factory/modules/predict";
import { useCustomToast } from "@/composables/core/useCustomToast";

const loading = ref(false);
const payload = ref({
  sample: "bone_marrow",
  fluid: "HCl",
  percentage: 12.5,
  day: 5,
  month: 5,
  year: 2023,
});

export const useCreatePrediction = () => {
  const { showToast } = useCustomToast();
  const createPrediction = async () => {
    loading.value = true;
    const res = (await predict_api.$_predict_decalcification(payload.value)) as any;
    console.log(res, "res here");
    if (res.type !== "ERROR") {
      showToast({
        title: "Success",
        message: "Prediction was successful",
        toastType: "success",
        duration: 3000,
      });
    } else {
      showToast({
        title: "Error",
        message: res?.data?.error || "Soemthing went wrong while performing prediction. Please try again.",
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  const setPayload = (data: any) => {
      (payload.value.sample = data?.sample),
      (payload.value.fluid = data?.fluid),
      (payload.value.percentage = data?.percentage),
      (payload.value.day = data?.day);
      (payload.value.month = data?.month);
      (payload.value.year = data?.year);
  };
  return { loading, setPayload, createPrediction, payload };
};
