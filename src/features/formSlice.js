import { createSlice } from "@reduxjs/toolkit";

export const allPlans = [
  { name: "Basico", costs: { mensual: 9, anual: 90 } },
  { name: "Avanzado", costs: { mensual: 12, anual: 120 } },
  { name: "Pro", costs: { mensual: 15, anual: 150 } },
];

export const allAddons = [
  {
    id: 45325,
    name: "Servicio en línea",
    description: "Acceso a juegos multijugador",
    costs: { mensual: 1, anual: 10 },
  },
  {
    id: 25233,
    name: "Almacenamiento más grande",
    description: "1 TB adicional de almacenamiento en la nube",
    costs: { mensual: 2, anual: 20 },
  },
  {
    id: 25325,
    name: "Perfil personalizable",
    description: "Tema personalizado en tu perfil",
    costs: { mensual: 2, anual: 20 },
  },
];

const initialState = {
  step: 1,
  name: "",
  email: "",
  phone: "",
  isYearly: false,
  plan: allPlans[1].name,
  addOns: [allAddons[0].id, allAddons[2].id],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addPersonalInfoData: (state, action) => {
      console.log(action.payload.phone);
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.step = state.step + 1;
    },
    toggleDuration: (state) => {
      state.isAnual = !state.isAnual;
    },
    updatePlan: (state, action) => {
      state.plan = action.payload;
    },
    addRemoveAddon: (state, action) => {
      const isAdded = state.addOns.includes(action.payload);
      if (!isAdded) state.addOns.push(action.payload);
      else
        state.addOns = state.addOns.filter((addon) => addon !== action.payload);
    },
    nextStep: (state) => {
      state.step = state.step + 1;
    },
    prevStep: (state) => {
      state.step = state.step - 1;
    },
    goToStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const {
  addPersonalInfoData,
  addPlanData,
  addAddonsData,
  finishStep,
  toggleDuration,
  updatePlan,
  addRemoveAddon,
  nextStep,
  prevStep,
  goToStep,
} = formSlice.actions;
export default formSlice.reducer;

export function getCurrentStep(state) {
  return state.form.step;
}

export function getSpecificPlanCost({ plan: selectedPlan, isAnual }) {
  const myPlan = allPlans.find((plan) => plan.name === selectedPlan);

  return isAnual ? myPlan.costs.anual : myPlan.costs.mensual;
}

export function getSelectedAddons({ addOns: myAddonIds, allAddons }) {
  return allAddons.filter((addon) => myAddonIds.includes(addon.id));
}