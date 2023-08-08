import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Input from "@/components/Input";

const Content = styled.div``;

const Field = styled(Box)`
  width: 100%;
  margin: 15px 0;
  & label {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 13px;
    font-weight: 500;
  }
`;

const Index = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const onSubmit = (dataForm: any) => {};

  return (
    <Content>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field sx={{ margin: "0px !important" }}>
          <label>Correo electrónico</label>
          <Input
            type="email"
            register={register}
            errors={errors}
            keyName="email"
            placeholder="Ingresa un correo electrónico"
            required={true}
          />
        </Field>
        <Field>
          <label>Contraseña</label>
          <Input
            type="password"
            register={register}
            errors={errors}
            keyName="password"
            placeholder="Escribe una contraseña"
            required={true}
          />
        </Field>
        <LoadingButton
          sx={{ margin: "20px 0 0", color: "#fff", boxShadow: "none" }}
          size="medium"
          color="primary"
          type="submit"
          loading={loading}
          variant="contained"
          fullWidth={true}
        >
          <span>Entrar</span>
        </LoadingButton>
      </form>
    </Content>
  );
};

export default Index;
