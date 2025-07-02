import { useDispatch, useSelector } from "react-redux";
import { addRemoveAddon } from "./formSlice";
import ExtentionWrapper from "../ui/ExtentionWrapper";

function AddOn({ id, name, description, costs }) {
  const dispatch = useDispatch();
  const { isAnual, addOns } = useSelector((state) => state.form);
  const cost = isAnual ? `${costs.anual}/an` : `${costs.mensual}/men`;
  const isAdded = addOns.includes(id);

  function handleToggleAddon() {
    dispatch(addRemoveAddon(id));
  }

  return (
    <ExtentionWrapper>
      <input
        type="checkbox"
        name="onlineService"
        id={name}
        checked={isAdded}
        onChange={() => handleToggleAddon()}
      />
      <label htmlFor={name}>
        <span>
          <h3>{name}</h3>
          <p>{description}</p>
        </span>

        <p>+${cost}</p>
      </label>
    </ExtentionWrapper>
  );
}

export default AddOn;