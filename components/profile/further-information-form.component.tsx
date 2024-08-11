"use client";
import { tv } from "tailwind-variants";
import { CrButton } from "../global/cr-button/cr-button.component";
import { CrTextField } from "../global/cr-fields/cr-text-field.compnent";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  Key,
  useState,
} from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";
import { useMutation, useQuery } from "@apollo/client";
import { GET_SKILLS_BRIEF } from "@/apis/skills.api";
import {
  CrAutocomplete,
  CrAutocompleteItem,
} from "../global/cr-fields/cr-autocomplete.component";
import {
  BriefSkillModel,
  CompleteFurtherInformationDto,
} from "@/__generated__/graphql";
import { DateInput, Input } from "@nextui-org/react";
import { COMPLETE_FURTHER_INFORMATION } from "@/apis/user.api";

interface Props {}
const furtherInformationStyles = tv({
  slots: {
    formInputsWrapper: "flex flex-col  gap-7",
    mobileInput: "bg-primary-lighter",
    buttonContainer: "flex w-full gap-7",
  },
});
const styles = furtherInformationStyles();
const FurtherInformationForm = (props: Props) => {
  const [formData, setFormData] =
    useState<CompleteFurtherInformationDto | null>(null);

  const { data, loading: getSKillsLoading } = useQuery(GET_SKILLS_BRIEF, {
    fetchPolicy: "network-only",
    onCompleted: (data) => {
      // setUserInfo(data.userProfile);
      console.log(data);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const [completeFutherInformation, { loading }] = useMutation(
    COMPLETE_FURTHER_INFORMATION
  );

  const handleChageFields = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setFormData({
        ...formData!,
        [e.target.name]: e.target.value,
      });
    }
  };

  const onSelectionChange = (key: Key | null) => {
    setFormData({ ...formData, skillId: Number(key) });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (formData) {
      completeFutherInformation({
        variables: {
          data: formData,
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formInputsWrapper()}>
      <CrTextField
        type="text"
        label="نام"
        color="primary"
        radius="sm"
        name="firstName"
        onChange={handleChageFields}
        errorMessage="شماره تلفن را به درستی وارد کنید"
      />
      <CrTextField
        type="text"
        label="نام خانوادگی"
        color="primary"
        radius="sm"
        name="lastName"
        onChange={handleChageFields}
        errorMessage="شماره تلفن را به درستی وارد کنید"
      />{" "}
      <CrAutocomplete
        label="حوزه کاری"
        isLoading={getSKillsLoading}
        variant="flat"
        placeholder="حوزه کاری خود را انتخاب کنید"
        color="primary"
        defaultItems={data?.getSkillsBrief}
        allowsCustomValue={true}
        onSelectionChange={onSelectionChange}
        required
        isRequired
        inputProps={{
          required: true,
        }}
      >
        {data?.getSkillsBrief.map((item) => (
          <CrAutocompleteItem key={item.id} value={item.id} color="primary">
            {item.name}
          </CrAutocompleteItem>
        ))}
      </CrAutocomplete>
      <CrButton
        color="light"
        variant="bordered"
        radius="sm"
        type="submit"
        // isLoading={loading}
      >
        تایید و ادامه
      </CrButton>
    </form>
  );
};

export default FurtherInformationForm;
