import styled from "styled-components";
import Heading from "../ui/Heading";
import SubHeading from "../ui/SubHeading";
import FormBody from "../ui/FormBody";
import FormActions from "../ui/FormActions";
import Button from "../ui/Button";
import {
  getSelectedAddons,
  getSpecificPlanCost,
  goToStep,
  nextStep,
  prevStep,
} from "./formSlice";
import { useDispatch, useSelector } from "react-redux";
import FormInputs from "../ui/FormInputs";
import { allAddons } from "./formSlice";

const SummeryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TopSummery = styled.div`
  background-color: var(--alabaster);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 10px;
`;

const AddonSummery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;

  > :first-child {
    color: var(--cool-gray);
  }

  > :last-child {
    color: var(--marine-blue);
    font-weight: 500;
  }
`;

const TotalSummery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem;
  margin-top: 0.5rem;
  font-size: 0.9rem;

  > :first-child {
    color: var(--cool-gray);
  }

  > :last-child {
    color: var(--purplish-blue);
    font-weight: 800;
  }
`;

const Plan = styled.div`
  border-bottom: 1px solid var(--light-gray);
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > :first-child {
    color: var(--marine-blue);
    font-weight: 800;
  }

  > :last-child {
    font-weight: 800;
  }

  button {
    background-color: transparent;
    text-decoration: underline;
    border: none;
    font-weight: normal;
    color: var(--cool-gray);
    padding: 0;
  }
`;

function FinishingUp() {
  const dispatch = useDispatch();
  const { isAnual, plan, addOns } = useSelector((state) => state.form);

    const durationLongStr = isAnual ? "Anual" : "Mensual";
  const durationShortStr = isAnual ? "an" : "men";

  const planCost = getSpecificPlanCost({ plan, isAnual });
  const selectedAddons = getSelectedAddons({ addOns, allAddons });
  const totalCost =
    selectedAddons.reduce((acc, cur) => {
      return (acc = acc + cur.costs[durationLongStr.toLowerCase()]);
    }, 0) + planCost;

  function handleNext(e) {
    e.preventDefault();
    dispatch(nextStep());
  }

  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevStep());
  }

  return (
    <FormBody>
      <FormInputs>
        <Heading>terminando</Heading>
        <SubHeading>
          Verifique que todo esté bien antes de confirmar
        </SubHeading>

        <SummeryContainer>
          <TopSummery>
            <Plan>
              <div>
                <p>
                  {plan} ({durationLongStr})
                </p>
                <button onClick={() => dispatch(goToStep(2))}>Cambiar</button>
              </div>

              <p>
                ${planCost}/{durationShortStr}
              </p>
            </Plan>

            {selectedAddons.map((addon) => {
              return (
                <AddonSummery key={addon.id}>
                  <p>{addon.name}</p>
                  <p>{`+$${
                    isAnual
                      ? `${addon.costs.anual}/${durationShortStr}`
                      : `${addon.costs.mensual}/${durationShortStr}`
                  }`}</p>
                </AddonSummery>
              );
            })}
          </TopSummery>

          <TotalSummery>
            <p>Total (por {isAnual ? "año" : "mes"})</p>
            <p>
              +${totalCost}/{durationShortStr}
            </p>
          </TotalSummery>
        </SummeryContainer>
      </FormInputs>

      <FormActions>
        <Button onClick={handlePrev} position="left">
          Volver
        </Button>

        <Button onClick={handleNext} position="right">
          Confirmar
        </Button>
      </FormActions>
    </FormBody>
  );
}

export default FinishingUp;