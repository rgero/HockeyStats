import Button from "../ui/Button";
import Form from "../ui/forms/Form"
import FormRow from "../ui/forms/FormRow"
import Input from "../ui/Input"
import { formatDate } from '../../helpers/formatDate';
import { useForm } from "react-hook-form";

const GameForm = () => {

  const { control, register, handleSubmit, reset, formState } = useForm({
    defaultValues: { date: formatDate(new Date()) },
  });
  const errors = formState.errors;

  const isWorking = false
  const onCloseModal = null;

  const onSubmit = (data) => {
    console.log(data);
  }

  const onError = (err) => {
    console.log(err)
  }


  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>

      <FormRow label="Game Date" errors={errors?.date?.message}>
          <Input
            type="date"
            id="date"
            {...register("date", {
              required: "This field is required",
              validate: (currentValue) => {
                return new Date(currentValue) instanceof Date || "Date needed"
              }
            })}
          />
      </FormRow>

      <FormRow label="Name" errors={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          autoFocus
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>


            
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => {
            reset();
            onCloseModal?.();
          }}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          Create
        </Button>
      </FormRow>
    </Form>
  )
}

export default GameForm
